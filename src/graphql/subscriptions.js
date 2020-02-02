/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const onCreateGroup = `subscription OnCreateGroup {
  onCreateGroup {
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
export const onUpdateGroup = `subscription OnUpdateGroup {
  onUpdateGroup {
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
export const onDeleteGroup = `subscription OnDeleteGroup {
  onDeleteGroup {
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
export const onCreateGuest = `subscription OnCreateGuest {
  onCreateGuest {
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
export const onUpdateGuest = `subscription OnUpdateGuest {
  onUpdateGuest {
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
export const onDeleteGuest = `subscription OnDeleteGuest {
  onDeleteGuest {
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
export const onCreateMeal = `subscription OnCreateMeal {
  onCreateMeal {
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
export const onUpdateMeal = `subscription OnUpdateMeal {
  onUpdateMeal {
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
export const onDeleteMeal = `subscription OnDeleteMeal {
  onDeleteMeal {
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
export const onCreateMealType = `subscription OnCreateMealType {
  onCreateMealType {
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
export const onUpdateMealType = `subscription OnUpdateMealType {
  onUpdateMealType {
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
export const onDeleteMealType = `subscription OnDeleteMealType {
  onDeleteMealType {
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
