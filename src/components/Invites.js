import React, { useState, useEffect, useRef } from 'react';

import styled from 'styled-components';
import { Container, Card, CardBody, CardTitle, Button, Form, FormGroup, Label, Input, Row, Col, Table, Modal, ModalHeader, ModalBody } from 'reactstrap';

import useWindowWidth from '../hooks/useWindowWidth';

import { API, graphqlOperation } from 'aws-amplify';
import { listRoles, listMealTypes } from '../graphql/queries';
import { createGroup, createGuest, createRole, createMealType } from '../graphql/mutations';
import { onCreateGroup, onCreateGuest, onCreateRole, onCreateMealType } from '../graphql/subscriptions';

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
            address
            guests {
                items {
                    firstNamePreferred
                    lastName
                    plusOneEligible
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

    const CardScroll = styled.div`
        max-height: 500px;
        overflow: auto;
    `;

    // States
    const [groups, setGroups] = useState([]);
    const [roles, setRoles] = useState([]);
    const [mealTypes, setMealTypes] = useState([]);

    const [groupsSubscription, setGroupsSubscription] = useState(null);
    const [guestsSubscription, setGuestsSubscription] = useState(null);
    const [rolesSubscription, setRolesSubscription] = useState(null);
    const [mealTypesSubscription, setMealTypesSubscription] = useState(null);

    const [groupsLoaded, setGroupsLoaded] = useState(false);

    // Modals
    const [groupsModal, setGroupsModal] = useState(false);
    const [roleModal, setRoleModal] = useState(false);
    const [mealTypeModal, setMealTypeModal] = useState(false);
    const [guestModal, setGuestModal] = useState(false);
    const [guestModalID, setGuestModalID] = useState(null);
    const toggleGroupsModal = () => setGroupsModal(!groupsModal);
    const toggleRoleModal = () => setRoleModal(!roleModal);
    const toggleMealTypeModal = () => setMealTypeModal(!mealTypeModal);
    const toggleGuestModal = (id = null) => {
        setGuestModalID(id);
        return setGuestModal(!guestModal);
    };

    // References to states
    const refGroups = useRef(groups);
    const refMealTypes = useRef(mealTypes);
    const refRoles = useRef(roles);

    // useEffects to reference states
    useEffect(() => { refGroups.current = groups; });
    useEffect(() => { refMealTypes.current = mealTypes; });
    useEffect(() => { refRoles.current = roles; });

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

        /* Guests GraphQL */
        // Subscription
        setGuestsSubscription(
            API.graphql(graphqlOperation(onCreateGuest)).subscribe({
                next: (response) => {

                    let current = [...refGroups.current];
                    const groupId = response.value.data.onCreateGuest.group.id;
                    
                    // Update Group
                    current.forEach((group, index) => {
                        if (group.id === groupId) {
                            group.guests.items = [...group.guests.items, {
                                id: response.value.data.onCreateGuest.id,
                                firstNamePreferred: response.value.data.onCreateGuest.firstNamePreferred,
                                lastName: response.value.data.onCreateGuest.lastName,
                                plusOneEligible: response.value.data.onCreateGuest.plusOneEligible
                            }];
                        }
                    });

                    setGroups(current);
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

        /* Role GraphQL */
        // Query
        (async () => {
            const response = await API.graphql(graphqlOperation(listRoles, { limit: 100 }));
            setRoles(response.data.listRoles.items);
        })();

        // Subscription
        setRolesSubscription(
            API.graphql(graphqlOperation(onCreateRole)).subscribe({
                next: (response) => {
                    setRoles([...refRoles.current, response.value.data.onCreateRole]);
                }
            })
        );

    }, []);

    return (
        <Container>

            <Row>

                {/* Groups Card */}
                <Col xs='12'>
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
                            <CardScroll>
                                <Table>
                                    <thead>
                                        <tr>
                                            <th style={{ width: "2%" }}>#</th>
                                            <th style={{ width: "20%"}}>Name</th>
                                            <th style={{ width: "30%"}}>Address</th>
                                            <th>Guests</th>
                                            <th style={{ width: device === "desktop" ? "150px" : "30px" }}></th>
                                        </tr>
                                    </thead>
                                    <tbody>{
                                        groups.sort((a, b) => b.number - a.number).map((d, i) => {
                                            return (
                                                <tr key={i}>
                                                    <td className='align-middle'>{d.number}</td>
                                                    <td className='align-middle'>{d.name}</td>
                                                    <td className='align-middle' style={{ whiteSpace: "pre-line" }}>{d.address.replace(/;/g, "\n")}</td>
                                                    <td className='align-middle'>{d.guests.items.map((d) => `${d.firstNamePreferred} ${d.lastName}${d.plusOneEligible ? " +1" : ""}`).join(", ")}</td>
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
                            </CardScroll>
                        </CardBody>
                    </CardStyled>
                </Col>

                {/* Roles Card */}
                <Col xs='6'>
                    <CardStyled>
                        <CardBody>
                            <CardTitle>
                                <Row>
                                    <Col xs='7'><h2>Roles</h2></Col>
                                    <Col xs='5'>
                                        <Button
                                            color='primary'
                                            className='float-right'
                                            onClick={toggleRoleModal}
                                        >+ Create Role</Button>
                                    </Col>
                                </Row>
                            </CardTitle>
                            <CardScroll>
                                <Table>
                                    <thead>
                                        <tr>
                                            <th>Role Name</th>
                                            <th>Wedding Party?</th>
                                        </tr>
                                    </thead>
                                    <tbody>{
                                        roles.sort((a, b) => a.name.toLowerCase() < b.name.toLowerCase() ? -1 : 1).map((d, i) => {
                                            return (
                                                <tr key={i}>
                                                    <td>{d.name}</td>
                                                    <td>{d.weddingParty ? "Yes" : "No"}</td>
                                                </tr>
                                            );
                                        })
                                    }</tbody>
                                </Table>
                            </CardScroll>
                        </CardBody>
                    </CardStyled>
                </Col>

                {/* Meal Types Card */}
                <Col xs='6'>
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
                </Col>
            </Row>

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
                    <CreateGuestForm groupId={guestModalID} toggleGuestModal={toggleGuestModal} roles={roles} />
                </ModalBody>
            </Modal>

            {/* Create New Role Modal */}
            <Modal isOpen={roleModal} toggle={toggleRoleModal}>
                <ModalHeader toggle={toggleRoleModal}>Create New Role</ModalHeader>
                <ModalBody>
                    <CreateRoleForm toggleRoleModal={toggleRoleModal} />
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
    const [address, setAddress] = useState("");

    // Group Name Form Submit
    const groupNameSubmit = (e) => {
        e.preventDefault();
        props.setGroupsLoaded(false);
        (async () => {
            await API.graphql(graphqlOperation(
                createGroup, {
                    input: {
                        number: props.groups.length + 1,
                        name: groupName.length > 0 ? groupName : undefined,
                        address: address.replace(/(?:\r\n|\r|\n)/g, ";")
                    }
                }
            ));
            props.toggleGroupsModal();
        })();
    };

    return (
        <Form>
            <FormGroup>
                <Input onKeyPress={(e) => e.which === 13 ? e.preventDefault() : null} type='text' name='group-name' id='group-name' value={groupName} onChange={(e) => setGroupName(e.target.value)} placeholder='Group Name' />
            </FormGroup>
            <FormGroup>
                <Input type='textarea' name='address' id='address' value={address} onChange={(e) => setAddress(e.target.value)} placeholder='Full Address' />
            </FormGroup>
            <Button color='primary' onClick={groupNameSubmit}>Create Group</Button>
        </Form>
    );
};

/*
    <FormGroup>
        <Input type='email' name='email' id='email' value={email} onChange={(e) => setEmail(e.target.value)} placeholder='Email' />
    </FormGroup>
    <FormGroup>
        <Label for='phone'>Phone Number (with Country Code)</Label>
        <ReactPhoneInput name='phone' id='phone' value={phone} onChange={setPhone} defaultCountry={"us"} />
    </FormGroup>
*/

const CreateGuestForm = (props) => {

    // Input States
    const [firstName, setFirstName] = useState("");
    const [firstNamePreferred, setFirstNamePreferred] = useState("");
    const [lastName, setLastName] = useState("");
    const [role, setRole] = useState(props.roles.filter((d) => d.name == "Guest").id);
    const [plusOneEligible, setPlusOneEligible] = useState(false);

    // Guest Form Submit
    const guestFormSubmit = (e) => {
        e.preventDefault();
        (async () => {
            await API.graphql(graphqlOperation(
                createGuest, {
                    input: {
                        firstName: firstName,
                        firstNamePreferred: firstNamePreferred.length > 0 ? firstNamePreferred : firstName,
                        lastName: lastName,
                        directInvite: true,
                        plusOneEligible: plusOneEligible,
                        guestGroupId: props.groupId,
                        guestRoleId: role
                    }
                }
            ));
            props.toggleGuestModal();
        })();
    };

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
                <Label for='role'>Role</Label>
                <Input type='select' name='role' id='role' value={role} onChange={(e) => setRole(e.target.value)}>
                    {props.roles.sort((a, b) => {
                        if (a.name == "Guest") return -1;
                        if (b.name == "Guest") return 1;
                        if (a.name.toLowerCase() < b.name.toLowerCase()) return -1;
                        return 1;
                    }).map((d, i) => <option key={i} value={d.id}>{d.name}</option>)}
                </Input>
            </FormGroup>
            <FormGroup check>
                <Label for='plus-one-eligible'>
                    <Input type='checkbox' name='plus-one-eligible' id='plus-one-eligible' checked={plusOneEligible} onChange={(e) => setPlusOneEligible(e.target.checked)} />
                    Plus One Eligible?
                </Label>
            </FormGroup>
            <Button onClick={guestFormSubmit}>Invite Guest</Button>
        </Form>
    );
};

const CreateRoleForm = (props) => {

    // Input States
    const [roleName, setRoleName] = useState("");
    const [roleWeddingParty, setRoleWeddingParty] = useState(false);

    // Role Form Submit
    const roleFormSubmit = (e) => {
        e.preventDefault();
        (async () => {
            await API.graphql(graphqlOperation(
                createRole, {
                    input: {
                        name: roleName,
                        weddingParty: roleWeddingParty
                    }
                }
            ));
            props.toggleRoleModal();
        })();
    };

    return (
        <Form onKeyPress={(e) => e.which === 13 ? roleFormSubmit(e) : null}>
            <FormGroup>
                <Input type='text' name='role-name' id='role-name' value={roleName} onChange={(e) => setRoleName(e.target.value)} placeholder='Role Name' />
            </FormGroup>
            <FormGroup check>
                <Label for='wedding-party'>
                    <Input type='checkbox' name='wedding-party' id='wedding-party' checked={roleWeddingParty} onChange={(e) => setRoleWeddingParty(e.target.checked)} />
                    Wedding Party?
                </Label>
            </FormGroup>
            <Button onClick={roleFormSubmit}>Create Role</Button>
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
    };

    return (
        <Form onKeyPress={(e) => e.which === 13 ? mealTypeFormSubmit(e) : null}>
            <FormGroup>
                <Input type='text' name='meal-name' id='meal-name' value={mealName} onChange={(e) => setMealName(e.target.value)} placeholder='Meal Name' />
            </FormGroup>
            <FormGroup>
                <Input type='text' name='meal-description' id='meal-description' value={mealDescription} onChange={(e) => setMealDescription(e.target.value)} placeholder='Meal Description' />
            </FormGroup>
            <Button onClick={mealTypeFormSubmit}>Create Meal</Button>
        </Form>
    );
};

export default Invites;