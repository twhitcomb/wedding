/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const createGroup = `mutation CreateGroup(
  $input: CreateGroupInput!
  $condition: ModelGroupConditionInput
) {
  createGroup(input: $input, condition: $condition) {
    id
    number
    name
    address
    guests {
      items {
        id
        groupId
        firstName
        firstNamePreferred
        lastName
        email
        phone
        roleId
        rsvp
        rsvpDatetime
        directInvite
        plusOneEligible
      }
      nextToken
    }
  }
}
`;
export const updateGroup = `mutation UpdateGroup(
  $input: UpdateGroupInput!
  $condition: ModelGroupConditionInput
) {
  updateGroup(input: $input, condition: $condition) {
    id
    number
    name
    address
    guests {
      items {
        id
        groupId
        firstName
        firstNamePreferred
        lastName
        email
        phone
        roleId
        rsvp
        rsvpDatetime
        directInvite
        plusOneEligible
      }
      nextToken
    }
  }
}
`;
export const deleteGroup = `mutation DeleteGroup(
  $input: DeleteGroupInput!
  $condition: ModelGroupConditionInput
) {
  deleteGroup(input: $input, condition: $condition) {
    id
    number
    name
    address
    guests {
      items {
        id
        groupId
        firstName
        firstNamePreferred
        lastName
        email
        phone
        roleId
        rsvp
        rsvpDatetime
        directInvite
        plusOneEligible
      }
      nextToken
    }
  }
}
`;
export const createGuest = `mutation CreateGuest(
  $input: CreateGuestInput!
  $condition: ModelGuestConditionInput
) {
  createGuest(input: $input, condition: $condition) {
    id
    groupId
    firstName
    firstNamePreferred
    lastName
    group {
      id
      number
      name
      address
      guests {
        nextToken
      }
    }
    email
    phone
    roleId
    role {
      id
      name
      weddingParty
      guests {
        nextToken
      }
    }
    rsvp
    rsvpDatetime
    directInvite
    plusOneEligible
    plusOne {
      id
      groupId
      firstName
      firstNamePreferred
      lastName
      group {
        id
        number
        name
        address
      }
      email
      phone
      roleId
      role {
        id
        name
        weddingParty
      }
      rsvp
      rsvpDatetime
      directInvite
      plusOneEligible
      plusOne {
        id
        groupId
        firstName
        firstNamePreferred
        lastName
        email
        phone
        roleId
        rsvp
        rsvpDatetime
        directInvite
        plusOneEligible
      }
      meal {
        id
        typeId
        dietaryRestriction
        dietaryRestrictionDescription
        foodAllergy
        foodAllergyDescription
        kidsMeal
      }
    }
    meal {
      id
      typeId
      guest {
        id
        groupId
        firstName
        firstNamePreferred
        lastName
        email
        phone
        roleId
        rsvp
        rsvpDatetime
        directInvite
        plusOneEligible
      }
      type {
        id
        name
        description
      }
      dietaryRestriction
      dietaryRestrictionDescription
      foodAllergy
      foodAllergyDescription
      kidsMeal
    }
  }
}
`;
export const updateGuest = `mutation UpdateGuest(
  $input: UpdateGuestInput!
  $condition: ModelGuestConditionInput
) {
  updateGuest(input: $input, condition: $condition) {
    id
    groupId
    firstName
    firstNamePreferred
    lastName
    group {
      id
      number
      name
      address
      guests {
        nextToken
      }
    }
    email
    phone
    roleId
    role {
      id
      name
      weddingParty
      guests {
        nextToken
      }
    }
    rsvp
    rsvpDatetime
    directInvite
    plusOneEligible
    plusOne {
      id
      groupId
      firstName
      firstNamePreferred
      lastName
      group {
        id
        number
        name
        address
      }
      email
      phone
      roleId
      role {
        id
        name
        weddingParty
      }
      rsvp
      rsvpDatetime
      directInvite
      plusOneEligible
      plusOne {
        id
        groupId
        firstName
        firstNamePreferred
        lastName
        email
        phone
        roleId
        rsvp
        rsvpDatetime
        directInvite
        plusOneEligible
      }
      meal {
        id
        typeId
        dietaryRestriction
        dietaryRestrictionDescription
        foodAllergy
        foodAllergyDescription
        kidsMeal
      }
    }
    meal {
      id
      typeId
      guest {
        id
        groupId
        firstName
        firstNamePreferred
        lastName
        email
        phone
        roleId
        rsvp
        rsvpDatetime
        directInvite
        plusOneEligible
      }
      type {
        id
        name
        description
      }
      dietaryRestriction
      dietaryRestrictionDescription
      foodAllergy
      foodAllergyDescription
      kidsMeal
    }
  }
}
`;
export const deleteGuest = `mutation DeleteGuest(
  $input: DeleteGuestInput!
  $condition: ModelGuestConditionInput
) {
  deleteGuest(input: $input, condition: $condition) {
    id
    groupId
    firstName
    firstNamePreferred
    lastName
    group {
      id
      number
      name
      address
      guests {
        nextToken
      }
    }
    email
    phone
    roleId
    role {
      id
      name
      weddingParty
      guests {
        nextToken
      }
    }
    rsvp
    rsvpDatetime
    directInvite
    plusOneEligible
    plusOne {
      id
      groupId
      firstName
      firstNamePreferred
      lastName
      group {
        id
        number
        name
        address
      }
      email
      phone
      roleId
      role {
        id
        name
        weddingParty
      }
      rsvp
      rsvpDatetime
      directInvite
      plusOneEligible
      plusOne {
        id
        groupId
        firstName
        firstNamePreferred
        lastName
        email
        phone
        roleId
        rsvp
        rsvpDatetime
        directInvite
        plusOneEligible
      }
      meal {
        id
        typeId
        dietaryRestriction
        dietaryRestrictionDescription
        foodAllergy
        foodAllergyDescription
        kidsMeal
      }
    }
    meal {
      id
      typeId
      guest {
        id
        groupId
        firstName
        firstNamePreferred
        lastName
        email
        phone
        roleId
        rsvp
        rsvpDatetime
        directInvite
        plusOneEligible
      }
      type {
        id
        name
        description
      }
      dietaryRestriction
      dietaryRestrictionDescription
      foodAllergy
      foodAllergyDescription
      kidsMeal
    }
  }
}
`;
export const createRole = `mutation CreateRole(
  $input: CreateRoleInput!
  $condition: ModelRoleConditionInput
) {
  createRole(input: $input, condition: $condition) {
    id
    name
    weddingParty
    guests {
      items {
        id
        groupId
        firstName
        firstNamePreferred
        lastName
        email
        phone
        roleId
        rsvp
        rsvpDatetime
        directInvite
        plusOneEligible
      }
      nextToken
    }
  }
}
`;
export const updateRole = `mutation UpdateRole(
  $input: UpdateRoleInput!
  $condition: ModelRoleConditionInput
) {
  updateRole(input: $input, condition: $condition) {
    id
    name
    weddingParty
    guests {
      items {
        id
        groupId
        firstName
        firstNamePreferred
        lastName
        email
        phone
        roleId
        rsvp
        rsvpDatetime
        directInvite
        plusOneEligible
      }
      nextToken
    }
  }
}
`;
export const deleteRole = `mutation DeleteRole(
  $input: DeleteRoleInput!
  $condition: ModelRoleConditionInput
) {
  deleteRole(input: $input, condition: $condition) {
    id
    name
    weddingParty
    guests {
      items {
        id
        groupId
        firstName
        firstNamePreferred
        lastName
        email
        phone
        roleId
        rsvp
        rsvpDatetime
        directInvite
        plusOneEligible
      }
      nextToken
    }
  }
}
`;
export const createMeal = `mutation CreateMeal(
  $input: CreateMealInput!
  $condition: ModelMealConditionInput
) {
  createMeal(input: $input, condition: $condition) {
    id
    typeId
    guest {
      id
      groupId
      firstName
      firstNamePreferred
      lastName
      group {
        id
        number
        name
        address
      }
      email
      phone
      roleId
      role {
        id
        name
        weddingParty
      }
      rsvp
      rsvpDatetime
      directInvite
      plusOneEligible
      plusOne {
        id
        groupId
        firstName
        firstNamePreferred
        lastName
        email
        phone
        roleId
        rsvp
        rsvpDatetime
        directInvite
        plusOneEligible
      }
      meal {
        id
        typeId
        dietaryRestriction
        dietaryRestrictionDescription
        foodAllergy
        foodAllergyDescription
        kidsMeal
      }
    }
    type {
      id
      name
      description
      meals {
        nextToken
      }
    }
    dietaryRestriction
    dietaryRestrictionDescription
    foodAllergy
    foodAllergyDescription
    kidsMeal
  }
}
`;
export const updateMeal = `mutation UpdateMeal(
  $input: UpdateMealInput!
  $condition: ModelMealConditionInput
) {
  updateMeal(input: $input, condition: $condition) {
    id
    typeId
    guest {
      id
      groupId
      firstName
      firstNamePreferred
      lastName
      group {
        id
        number
        name
        address
      }
      email
      phone
      roleId
      role {
        id
        name
        weddingParty
      }
      rsvp
      rsvpDatetime
      directInvite
      plusOneEligible
      plusOne {
        id
        groupId
        firstName
        firstNamePreferred
        lastName
        email
        phone
        roleId
        rsvp
        rsvpDatetime
        directInvite
        plusOneEligible
      }
      meal {
        id
        typeId
        dietaryRestriction
        dietaryRestrictionDescription
        foodAllergy
        foodAllergyDescription
        kidsMeal
      }
    }
    type {
      id
      name
      description
      meals {
        nextToken
      }
    }
    dietaryRestriction
    dietaryRestrictionDescription
    foodAllergy
    foodAllergyDescription
    kidsMeal
  }
}
`;
export const deleteMeal = `mutation DeleteMeal(
  $input: DeleteMealInput!
  $condition: ModelMealConditionInput
) {
  deleteMeal(input: $input, condition: $condition) {
    id
    typeId
    guest {
      id
      groupId
      firstName
      firstNamePreferred
      lastName
      group {
        id
        number
        name
        address
      }
      email
      phone
      roleId
      role {
        id
        name
        weddingParty
      }
      rsvp
      rsvpDatetime
      directInvite
      plusOneEligible
      plusOne {
        id
        groupId
        firstName
        firstNamePreferred
        lastName
        email
        phone
        roleId
        rsvp
        rsvpDatetime
        directInvite
        plusOneEligible
      }
      meal {
        id
        typeId
        dietaryRestriction
        dietaryRestrictionDescription
        foodAllergy
        foodAllergyDescription
        kidsMeal
      }
    }
    type {
      id
      name
      description
      meals {
        nextToken
      }
    }
    dietaryRestriction
    dietaryRestrictionDescription
    foodAllergy
    foodAllergyDescription
    kidsMeal
  }
}
`;
export const createMealType = `mutation CreateMealType(
  $input: CreateMealTypeInput!
  $condition: ModelMealTypeConditionInput
) {
  createMealType(input: $input, condition: $condition) {
    id
    name
    description
    meals {
      items {
        id
        typeId
        dietaryRestriction
        dietaryRestrictionDescription
        foodAllergy
        foodAllergyDescription
        kidsMeal
      }
      nextToken
    }
  }
}
`;
export const updateMealType = `mutation UpdateMealType(
  $input: UpdateMealTypeInput!
  $condition: ModelMealTypeConditionInput
) {
  updateMealType(input: $input, condition: $condition) {
    id
    name
    description
    meals {
      items {
        id
        typeId
        dietaryRestriction
        dietaryRestrictionDescription
        foodAllergy
        foodAllergyDescription
        kidsMeal
      }
      nextToken
    }
  }
}
`;
export const deleteMealType = `mutation DeleteMealType(
  $input: DeleteMealTypeInput!
  $condition: ModelMealTypeConditionInput
) {
  deleteMealType(input: $input, condition: $condition) {
    id
    name
    description
    meals {
      items {
        id
        typeId
        dietaryRestriction
        dietaryRestrictionDescription
        foodAllergy
        foodAllergyDescription
        kidsMeal
      }
      nextToken
    }
  }
}
`;
