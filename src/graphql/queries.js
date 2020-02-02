/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getGroup = `query GetGroup($id: ID!) {
  getGroup(id: $id) {
    id
    name
    number
    guests {
      items {
        id
        groupId
        mealId
        firstName
        firstNamePreferred
        lastName
        email
        phone
        address
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
      name
      number
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
    groupId
    mealId
    firstName
    firstNamePreferred
    lastName
    group {
      id
      name
      number
      guests {
        nextToken
      }
    }
    email
    phone
    address
    rsvp
    rsvpDatetime
    directInvite
    plusOneEligible
    plusOne {
      id
      groupId
      mealId
      firstName
      firstNamePreferred
      lastName
      group {
        id
        name
        number
      }
      email
      phone
      address
      rsvp
      rsvpDatetime
      directInvite
      plusOneEligible
      plusOne {
        id
        groupId
        mealId
        firstName
        firstNamePreferred
        lastName
        email
        phone
        address
        rsvp
        rsvpDatetime
        directInvite
        plusOneEligible
      }
      meal {
        id
        typeId
        guestId
        vegetarian
        vegan
        other
        otherDescription
      }
    }
    meal {
      id
      typeId
      guestId
      guest {
        id
        groupId
        mealId
        firstName
        firstNamePreferred
        lastName
        email
        phone
        address
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
      vegetarian
      vegan
      other
      otherDescription
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
      groupId
      mealId
      firstName
      firstNamePreferred
      lastName
      group {
        id
        name
        number
      }
      email
      phone
      address
      rsvp
      rsvpDatetime
      directInvite
      plusOneEligible
      plusOne {
        id
        groupId
        mealId
        firstName
        firstNamePreferred
        lastName
        email
        phone
        address
        rsvp
        rsvpDatetime
        directInvite
        plusOneEligible
      }
      meal {
        id
        typeId
        guestId
        vegetarian
        vegan
        other
        otherDescription
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
    guestId
    guest {
      id
      groupId
      mealId
      firstName
      firstNamePreferred
      lastName
      group {
        id
        name
        number
      }
      email
      phone
      address
      rsvp
      rsvpDatetime
      directInvite
      plusOneEligible
      plusOne {
        id
        groupId
        mealId
        firstName
        firstNamePreferred
        lastName
        email
        phone
        address
        rsvp
        rsvpDatetime
        directInvite
        plusOneEligible
      }
      meal {
        id
        typeId
        guestId
        vegetarian
        vegan
        other
        otherDescription
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
    vegetarian
    vegan
    other
    otherDescription
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
      guestId
      guest {
        id
        groupId
        mealId
        firstName
        firstNamePreferred
        lastName
        email
        phone
        address
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
      vegetarian
      vegan
      other
      otherDescription
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
        guestId
        vegetarian
        vegan
        other
        otherDescription
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
