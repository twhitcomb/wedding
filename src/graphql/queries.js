/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getGroup = `query GetGroup($id: ID!) {
  getGroup(id: $id) {
    id
    number
    name
    address
    guests {
      items {
        id
        firstName
        firstNamePreferred
        lastName
        email
        phone
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
export const listGroups = `query ListGroups(
  $filter: ModelGroupFilterInput
  $limit: Int
  $nextToken: String
) {
  listGroups(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
      id
      number
      name
      address
      guests {
        nextToken
      }
    }
    nextToken
  }
}
`;
export const getGuest = `query GetGuest($id: ID!) {
  getGuest(id: $id) {
    id
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
        firstName
        firstNamePreferred
        lastName
        email
        phone
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
        firstName
        firstNamePreferred
        lastName
        email
        phone
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
export const listGuests = `query ListGuests(
  $filter: ModelGuestFilterInput
  $limit: Int
  $nextToken: String
) {
  listGuests(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
      id
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
        firstName
        firstNamePreferred
        lastName
        email
        phone
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
    nextToken
  }
}
`;
export const getRole = `query GetRole($id: ID!) {
  getRole(id: $id) {
    id
    name
    weddingParty
    guests {
      items {
        id
        firstName
        firstNamePreferred
        lastName
        email
        phone
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
export const listRoles = `query ListRoles(
  $filter: ModelRoleFilterInput
  $limit: Int
  $nextToken: String
) {
  listRoles(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
      id
      name
      weddingParty
      guests {
        nextToken
      }
    }
    nextToken
  }
}
`;
export const getMeal = `query GetMeal($id: ID!) {
  getMeal(id: $id) {
    id
    typeId
    guest {
      id
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
        firstName
        firstNamePreferred
        lastName
        email
        phone
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
export const listMeals = `query ListMeals(
  $filter: ModelMealFilterInput
  $limit: Int
  $nextToken: String
) {
  listMeals(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
      id
      typeId
      guest {
        id
        firstName
        firstNamePreferred
        lastName
        email
        phone
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
    nextToken
  }
}
`;
export const getMealType = `query GetMealType($id: ID!) {
  getMealType(id: $id) {
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
export const listMealTypes = `query ListMealTypes(
  $filter: ModelMealTypeFilterInput
  $limit: Int
  $nextToken: String
) {
  listMealTypes(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
      id
      name
      description
      meals {
        nextToken
      }
    }
    nextToken
  }
}
`;
