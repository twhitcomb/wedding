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
      dietaryRestriction
      dietaryRestrictionDescription
      foodAllergy
      foodAllergyDescription
      kidsMeal
    }
  }
}
`;
export const onUpdateGuest = `subscription OnUpdateGuest {
  onUpdateGuest {
    id
    groupId
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
      dietaryRestriction
      dietaryRestrictionDescription
      foodAllergy
      foodAllergyDescription
      kidsMeal
    }
  }
}
`;
export const onDeleteGuest = `subscription OnDeleteGuest {
  onDeleteGuest {
    id
    groupId
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
      dietaryRestriction
      dietaryRestrictionDescription
      foodAllergy
      foodAllergyDescription
      kidsMeal
    }
  }
}
`;
export const onCreateMeal = `subscription OnCreateMeal {
  onCreateMeal {
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
export const onUpdateMeal = `subscription OnUpdateMeal {
  onUpdateMeal {
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
export const onDeleteMeal = `subscription OnDeleteMeal {
  onDeleteMeal {
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
export const onCreateMealType = `subscription OnCreateMealType {
  onCreateMealType {
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
export const onUpdateMealType = `subscription OnUpdateMealType {
  onUpdateMealType {
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
export const onDeleteMealType = `subscription OnDeleteMealType {
  onDeleteMealType {
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
