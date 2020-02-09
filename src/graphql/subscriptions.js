/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const onCreateGroup = `subscription OnCreateGroup {
  onCreateGroup {
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
export const onUpdateGroup = `subscription OnUpdateGroup {
  onUpdateGroup {
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
export const onDeleteGroup = `subscription OnDeleteGroup {
  onDeleteGroup {
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
export const onCreateGuest = `subscription OnCreateGuest {
  onCreateGuest {
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
export const onUpdateGuest = `subscription OnUpdateGuest {
  onUpdateGuest {
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
export const onDeleteGuest = `subscription OnDeleteGuest {
  onDeleteGuest {
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
export const onCreateRole = `subscription OnCreateRole {
  onCreateRole {
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
export const onUpdateRole = `subscription OnUpdateRole {
  onUpdateRole {
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
export const onDeleteRole = `subscription OnDeleteRole {
  onDeleteRole {
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
export const onCreateMeal = `subscription OnCreateMeal {
  onCreateMeal {
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
export const onUpdateMeal = `subscription OnUpdateMeal {
  onUpdateMeal {
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
export const onDeleteMeal = `subscription OnDeleteMeal {
  onDeleteMeal {
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
