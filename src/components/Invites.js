import React, { useState, useEffect, useRef } from 'react';

import { Container, Card, CardBody, CardTitle, Button, Form, FormGroup, Label, Input, Row, Col, Table, Modal, ModalHeader, ModalBody } from 'reactstrap';

import { API, graphqlOperation } from 'aws-amplify';

import { createGroup } from '../graphql/mutations';
import { onCreateGroup } from '../graphql/subscriptions';

const QUERY_LIST_GROUPS = `
query ListGroups($limit: Int) {
    listGroups(limit: $limit) {
        items {
            id
            name
            number
            guests {
                items {
                    firstName
                    lastName
                }
            }
        }
    }
}
`;

const Invites = () => {

    // States
    const [groups, setGroups] = useState([]);
    const [groupsLoaded, setGroupsLoaded] = useState(false);
    const [groupsSubscription, setGroupsSubscription] = useState(null);

    // Modals
    const [groupsModal, setGroupsModal] = useState(false);
    const toggleGroupsModal = () => setGroupsModal(!groupsModal);
    const [guestModal, setGuestModal] = useState(false);
    const toggleGuestModal = () => setGuestModal(!guestModal);

    // References to states
    const refGroups = useRef(groups);

    // useEffects to reference states
    useEffect(() => { refGroups.current = groups; });

    useEffect(() => {

        /* Query Data */
        (async () => {
            
            // Get List of all Groups
            const response = await API.graphql(graphqlOperation(QUERY_LIST_GROUPS, { limit: 500 }));

            // Update Group State
            setGroups(response.data.listGroups.items);
            setGroupsLoaded(true);
        })();

        /* Subscription */
        setGroupsSubscription(
            API.graphql(graphqlOperation(onCreateGroup)).subscribe({
                next: (response) => {
                    setGroups([...refGroups.current, response.value.data.onCreateGroup]);
                    setGroupsLoaded(true);
                }
            })
        );
    }, []);

    return (
        <Container>
            <div style={{ height: "20px" }}></div>
            <Card style={{backgroundColor: "var(--white)"}}>
                <CardBody>
                    <CardTitle>
                        <Row>
                            <Col xs='10'><h2>Groups</h2></Col>
                            <Col xs='2'>
                                <Button
                                    color='primary'
                                    style={{ display: groupsLoaded ? "block" : "none" }}
                                    onClick={toggleGroupsModal}
                                >+ Create Group</Button>
                                <Modal isOpen={groupsModal} toggle={toggleGroupsModal}>
                                    <ModalHeader toggle={toggleGroupsModal}>Create New Group</ModalHeader>
                                    <ModalBody>
                                        <CreateGroupForm groups={groups} setGroupsLoaded={setGroupsLoaded} toggleGroupsModal={toggleGroupsModal} />
                                    </ModalBody>
                                </Modal>
                            </Col>
                        </Row>
                    </CardTitle>
                    <Table>
                        <thead>
                            <tr>
                                <th style={{ width: "2%" }}>#</th>
                                <th style={{ width: "30%"}}>Name</th>
                                <th>Guests</th>
                                <th style={{ width: "150px" }}></th>
                            </tr>
                        </thead>
                        <tbody>{
                            groups.sort((a, b) => a.number - b.number).map((d, i) => {
                                return (
                                    <tr key={i}>
                                        <td className='align-middle'>{d.number}</td>
                                        <td className='align-middle'>{d.name}</td>
                                        <td className='align-middle'>{d.guests.items.join(", ")}</td>
                                        <td>
                                            <Button 
                                                color='secondary'
                                                onClick={toggleGuestModal}
                                            >+ Add Guest</Button>
                                        </td>
                                    </tr>
                                );
                            })
                        }</tbody>
                    </Table>
                </CardBody>
            </Card>

            <Modal isOpen={guestModal} toggle={toggleGuestModal}>
                <ModalHeader toggle={toggleGuestModal}>Invite New Guest</ModalHeader>
                <ModalBody>
                    <Form>
                        <FormGroup>
                            <Input type='text' name='first-name' id='first-name' placeholder='First Name' />
                        </FormGroup>
                        <FormGroup>
                            <Input type='text' name='first-name-preferred' id='first-name-preferred' placeholder='Nickname (Optional)' />
                        </FormGroup>
                        <FormGroup>
                            <Input type='text' name='last-name' id='last-name' placeholder='Last Name' />
                        </FormGroup>
                        <FormGroup>
                            <Input type='email' name='email' id='email' placeholder='Email' />
                        </FormGroup>
                        <FormGroup>
                            <Input type='phone' name='phone' id='phone' placeholder='Phone' />
                        </FormGroup>
                        <FormGroup>
                            <Input type='text' name='address' id='address' placeholder='Full Address' />
                        </FormGroup>
                        <FormGroup>
                            <Label for='direct-invite'>Direct Invite?</Label>
                            <Input type='select' name='direct-invite' id='direct-invite'>
                                <option>Yes</option>
                                <option>No</option>
                            </Input>
                        </FormGroup>
                        <FormGroup>
                            <Label for='plus-one-eligible'>Plus One Eligible?</Label>
                            <Input type='select' name='plus-one-eligible' id='plus-one-eligible'>
                                <option>Yes</option>
                                <option>No</option>
                            </Input>
                        </FormGroup>
                        <Button>Invite</Button>
                    </Form>
                </ModalBody>
            </Modal>

        </Container>
    );
}

/* Form Components */
const CreateGroupForm = (props) => {

    // Group Name Input State
    const [groupName, setGroupName] = useState("");

    // Group Name Form Submit
    const groupNameSubmit = (e) => {
        e.preventDefault();
        props.setGroupsLoaded(false);
        (async () => {
            await API.graphql(graphqlOperation(
                createGroup, {
                    input: {
                        number: props.groups.length + 1,
                        name: groupName
                    }
                }
            ));
            props.toggleGroupsModal();
        })();
    };

    return (
        <Form onKeyPress={(e) => e.which === 13 ? groupNameSubmit(e) : null }>
            <FormGroup>
                <Label for='group-name'>Group Name</Label>
                <Input type='text' name='group-name' id='group-name' value={groupName} onChange={(e) => setGroupName(e.target.value)} />
            </FormGroup>
        
            <Button color='primary' onClick={groupNameSubmit}>Create</Button>
        </Form>
    );
};

export default Invites;