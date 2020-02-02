/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const createGroup = `mutation CreateGroup(
  $input: CreateGroupInput!
  $condition: ModelGroupConditionInput
) {
  createGroup(input: $input, condition: $condition) {
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
export const updateGroup = `mutation UpdateGroup(
  $input: UpdateGroupInput!
  $condition: ModelGroupConditionInput
) {
  updateGroup(input: $input, condition: $condition) {
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
export const deleteGroup = `mutation DeleteGroup(
  $input: DeleteGroupInput!
  $condition: ModelGroupConditionInput
) {
  deleteGroup(input: $input, condition: $condition) {
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
export const createGuest = `mutation CreateGuest(
  $input: CreateGuestInput!
  $condition: ModelGuestConditionInput
) {
  createGuest(input: $input, condition: $condition) {
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
export const updateGuest = `mutation UpdateGuest(
  $input: UpdateGuestInput!
  $condition: ModelGuestConditionInput
) {
  updateGuest(input: $input, condition: $condition) {
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
export const deleteGuest = `mutation DeleteGuest(
  $input: DeleteGuestInput!
  $condition: ModelGuestConditionInput
) {
  deleteGuest(input: $input, condition: $condition) {
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
export const createMeal = `mutation CreateMeal(
  $input: CreateMealInput!
  $condition: ModelMealConditionInput
) {
  createMeal(input: $input, condition: $condition) {
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
export const updateMeal = `mutation UpdateMeal(
  $input: UpdateMealInput!
  $condition: ModelMealConditionInput
) {
  updateMeal(input: $input, condition: $condition) {
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
export const deleteMeal = `mutation DeleteMeal(
  $input: DeleteMealInput!
  $condition: ModelMealConditionInput
) {
  deleteMeal(input: $input, condition: $condition) {
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
