import React, { useState, useEffect, useRef } from 'react';

import styled from 'styled-components';
import { Container, Card, CardBody, CardTitle, Button, Form, FormGroup, Label, Input, Row, Col, Table, Modal, ModalHeader, ModalBody } from 'reactstrap';

import { API, graphqlOperation } from 'aws-amplify';

import useWindowWidth from '../hooks/useWindowWidth';

import { listMealTypes } from '../graphql/queries';
import { createGroup, createGuest, createMealType } from '../graphql/mutations';
import { onCreateGroup, onCreateMealType } from '../graphql/subscriptions';

/*
    GraphQL Queries
*/
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

    // Device Type
    const device = useWindowWidth() > 992 ? "desktop" : "mobile";

    // Styled Components
    const CardStyled = styled(Card)`
        background-color: var(--white);
        margin-top: 20px;
        margin-bottom: 20px;
    `;

    // States
    const [groups, setGroups] = useState([]);
    const [groupsLoaded, setGroupsLoaded] = useState(false);
    const [groupsSubscription, setGroupsSubscription] = useState(null);

    const [mealTypes, setMealTypes] = useState([]);
    const [mealTypesSubscription, setMealTypesSubscription] = useState(null);

    // Modals
    const [groupsModal, setGroupsModal] = useState(false);
    const toggleGroupsModal = () => setGroupsModal(!groupsModal);
    const [mealTypeModal, setMealTypeModal] = useState(false);
    const toggleMealTypeModal = () => setMealTypeModal(!mealTypeModal);
    const [guestModal, setGuestModal] = useState(false);
    const [guestModalID, setGuestModalID] = useState(null);
    const toggleGuestModal = (id = null) => {
        setGuestModalID(id);
        return setGuestModal(!guestModal);
    };

    // References to states
    const refGroups = useRef(groups);
    const refMealTypes = useRef(mealTypes);

    // useEffects to reference states
    useEffect(() => { refGroups.current = groups; });
    useEffect(() => { refMealTypes.current = mealTypes; });

    useEffect(() => {

        /* Groups GraphQL */
        // Query
        (async () => {
            
            // Get List of all Groups
            const response = await API.graphql(graphqlOperation(QUERY_LIST_GROUPS, { limit: 500 }));

            // Update Group State
            setGroups(response.data.listGroups.items);
            setGroupsLoaded(true);
        })();

        // Subscription
        setGroupsSubscription(
            API.graphql(graphqlOperation(onCreateGroup)).subscribe({
                next: (response) => {
                    setGroups([...refGroups.current, response.value.data.onCreateGroup]);
                    setGroupsLoaded(true);
                }
            })
        );

        /* MealTypes GraphQL */
        // Query
        (async () => {

            const response = await API.graphql(graphqlOperation(listMealTypes, { limit: 100 }));
            setMealTypes(response.data.listMealTypes.items);
        })();

        // Subscription
        setMealTypesSubscription(
            API.graphql(graphqlOperation(onCreateMealType)).subscribe({
                next: (response) => {
                    setMealTypes([...refMealTypes.current, response.value.data.onCreateMealType]);
                }
            })
        );

    }, []);

    return (
        <Container>
            <CardStyled>
                <CardBody>
                    <CardTitle>
                        <Row>
                            <Col xs='7'><h2>Groups</h2></Col>
                            <Col xs='5'>
                                <Button
                                    color='primary'
                                    className='float-right'
                                    style={{ display: groupsLoaded ? "block" : "none" }}
                                    onClick={toggleGroupsModal}
                                >+ Create Group</Button>
                            </Col>
                        </Row>
                    </CardTitle>
                    <Table>
                        <thead>
                            <tr>
                                <th style={{ width: "2%" }}>#</th>
                                <th style={{ width: "30%"}}>Name</th>
                                <th>Guests</th>
                                <th style={{ width: device === "desktop" ? "150px" : "30px" }}></th>
                            </tr>
                        </thead>
                        <tbody>{
                            groups.sort((a, b) => a.number - b.number).map((d, i) => {
                                return (
                                    <tr key={i}>
                                        <td className='align-middle'>{d.number}</td>
                                        <td className='align-middle'>{d.name}</td>
                                        <td className='align-middle'>{d.guests.items.map((d) => `${d.firstName} ${d.lastName}`).join(", ")}</td>
                                        <td>
                                            <Button 
                                                color='secondary'
                                                onClick={() => toggleGuestModal(d.id)}
                                            >+{device === "desktop" ? " Add Guest" : ""}</Button>
                                        </td>
                                    </tr>
                                );
                            })
                        }</tbody>
                    </Table>
                </CardBody>
            </CardStyled>

            <CardStyled>
                <CardBody>
                    <CardTitle>
                        <Row>
                            <Col xs='7'><h2>Meal Types</h2></Col>
                            <Col xs='5'>
                                <Button
                                    color='primary'
                                    className='float-right'
                                    onClick={toggleMealTypeModal}
                                >+ New Meal Type</Button>
                            </Col>
                        </Row>
                    </CardTitle>
                    <Table>
                        <thead>
                            <tr>
                                <th>Name</th>
                                <th>Description</th>
                            </tr>
                        </thead>
                        <tbody>{
                            mealTypes.map((d, i) => {
                                return (
                                    <tr key={i}>
                                        <td>{d.name}</td>
                                        <td>{d.description}</td>
                                    </tr>
                                );
                            })
                        }</tbody>
                    </Table>
                </CardBody>
            </CardStyled>

            {/* Create New Group Modal */}
            <Modal isOpen={groupsModal} toggle={toggleGroupsModal}>
                <ModalHeader toggle={toggleGroupsModal}>Create New Group</ModalHeader>
                <ModalBody>
                    <CreateGroupForm groups={groups} setGroupsLoaded={setGroupsLoaded} toggleGroupsModal={toggleGroupsModal} />
                </ModalBody>
            </Modal>

            {/* Invite New Guest Modal */}
            <Modal isOpen={guestModal} toggle={toggleGuestModal}>
                <ModalHeader toggle={toggleGuestModal}>Invite New Guest</ModalHeader>
                <ModalBody>
                    <CreateGuestForm groupId={guestModalID} toggleGuestModal={toggleGuestModal} />
                </ModalBody>
            </Modal>

            {/* Create Meal Type Modal */}
            <Modal isOpen={mealTypeModal} toggle={toggleMealTypeModal}>
                <ModalHeader toggle={toggleMealTypeModal}>Create New Meal Type</ModalHeader>
                <ModalBody>
                    <CreateMealTypeForm toggleMealTypeModal={toggleMealTypeModal} />
                </ModalBody>
            </Modal>

        </Container>
    );
}

/* 
    Form Components
*/
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
        <Form onKeyPress={(e) => e.which === 13 ? groupNameSubmit(e) : null}>
            <FormGroup>
                <Label for='group-name'>Group Name</Label>
                <Input type='text' name='group-name' id='group-name' value={groupName} onChange={(e) => setGroupName(e.target.value)} />
            </FormGroup>
        
            <Button color='primary' onClick={groupNameSubmit}>Create</Button>
        </Form>
    );
};

const CreateGuestForm = (props) => {

    // Input States
    const [firstName, setFirstName] = useState("");
    const [firstNamePreferred, setFirstNamePreferred] = useState("");
    const [lastName, setLastName] = useState("");
    const [email, setEmail] = useState("");
    const [phone, setPhone] = useState("");
    const [address, setAddress] = useState("");
    const [directInvite, setDirectInvite] = useState("Yes");
    const [plusOneEligible, setPlusOneEligible] = useState("Yes");

    // Guest Form Submit
    const guestFormSubmit = (e) => {
        e.preventDefault();
        (async () => {
            await API.graphql(graphqlOperation(
                createGuest, {
                    input: {
                        firstName: firstName,
                        firstNamePreferred: firstNamePreferred,
                        lastName: lastName,
                        groupId: props.groupId,
                        email: email,
                        phone: phone,
                        address: address,
                        directInvite: directInvite === "Yes",
                        plusOneEligible: plusOneEligible === "Yes"
                    }
                }
            ));
            props.toggleGuestModal();
        })();
    }

    return (
        <Form onKeyPress={(e) => e.which === 13 ? guestFormSubmit(e) : null}>
            <FormGroup>
                <Input type='text' name='first-name' id='first-name' value={firstName} onChange={(e) => setFirstName(e.target.value)} placeholder='First Name' />
            </FormGroup>
            <FormGroup>
                <Input type='text' name='first-name-preferred' id='first-name-preferred' value={firstNamePreferred} onChange={(e) => setFirstNamePreferred(e.target.value)} placeholder='Nickname (Optional)' />
            </FormGroup>
            <FormGroup>
                <Input type='text' name='last-name' id='last-name' value={lastName} onChange={(e) => setLastName(e.target.value)} placeholder='Last Name' />
            </FormGroup>
            <FormGroup>
                <Input type='email' name='email' id='email' value={email} onChange={(e) => setEmail(e.target.value)} placeholder='Email' />
            </FormGroup>
            <FormGroup>
                <Input type='tel' name='phone' id='phone' value={phone} onChange={(e) => setPhone(e.target.value)} placeholder='Phone' />
            </FormGroup>
            <FormGroup>
                <Input type='text' name='address' id='address' value={address} onChange={(e) => setAddress(e.target.value)} placeholder='Full Address' />
            </FormGroup>
            <FormGroup>
                <Label for='direct-invite'>Direct Invite?</Label>
                <Input type='select' name='direct-invite' id='direct-invite' value={directInvite} onChange={(e) => setDirectInvite(e.target.value)}>
                    <option value='Yes'>Yes</option>
                    <option value='No'>No</option>
                </Input>
            </FormGroup>
            <FormGroup>
                <Label for='plus-one-eligible'>Plus One Eligible?</Label>
                <Input type='select' name='plus-one-eligible' id='plus-one-eligible' value={plusOneEligible} onChange={(e) => setPlusOneEligible(e.target.value)}>
                    <option value='Yes'>Yes</option>
                    <option value='No'>No</option>
                </Input>
            </FormGroup>
            <Button onClick={guestFormSubmit}>Invite</Button>
        </Form>
    );
};

const CreateMealTypeForm = (props) => {

    // Input States
    const [mealName, setMealName] = useState("");
    const [mealDescription, setMealDescription] = useState("");

    // Meal Type Form Submit
    const mealTypeFormSubmit = (e) => {
        e.preventDefault();
        (async () => {
            await API.graphql(graphqlOperation(
                createMealType, {
                    input: {
                        name: mealName,
                        description: mealDescription
                    }
                }
            ));
            props.toggleMealTypeModal();
        })();
    }

    return (
        <Form onKeyPress={(e) => e.which === 13 ? mealTypeFormSubmit(e) : null}>
            <FormGroup>
                <Input type='text' name='meal-name' id='meal-name' value={mealName} onChange={(e) => setMealName(e.target.value)} placeholder='Meal Name' />
                <Input type='text' name='meal-description' id='meal-description' value={mealDescription} onChange={(e) => setMealDescription(e.target.value)} placeholder='Meal Description' />
            </FormGroup>
            <Button onClick={mealTypeFormSubmit}>Create Meal</Button>
        </Form>
    );
};

export default Invites;