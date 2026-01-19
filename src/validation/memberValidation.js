import { allDepartments } from "../utils/utils.js";

export const addMemberValidation = {
    name: {
        in: ['body'],
        isString: true,
        trim: true,
        notEmpty: {
            errorMessage: 'Name is required'
        }
    },
    hall: {
        in: ['body'],
        isString: true,
        trim: true,
        notEmpty: {
            errorMessage: 'Hall is required'
        }
    },
    contact: {
        in: ['body'],
        isString: true,
        trim: true,
        notEmpty: {
            errorMessage: 'Contact is required'
        }
    },
    guardian_contact: {
        in: ['body'],
        isString: true,
        trim: true,
        notEmpty: {
            errorMessage: 'Guardian contact is required'
        }
    },
    email: {
        in: ['body'],
        isEmail: {
            errorMessage: 'Invalid email format'
        },
        normalizeEmail: true,
        notEmpty: {
            errorMessage: 'Email is required'
        }
    },
    level: {
        in: ['body'],
        isString: true,
        trim: true,
        notEmpty: {
            errorMessage: 'Level is required'
        }
    },
    programme: {
        in: ['body'],
        isString: true,
        trim: true,
        notEmpty: {
            errorMessage: 'Programme is required'
        }
    },
    department: {
        in: ['body'],
        oneOf: {
            options: allDepartments
        },
        trim: true,
        notEmpty: {
            errorMessage: 'Department is required'
        }
    },
    guild: {
        in: ['body'],
        isString: true,
        trim: true,
        notEmpty: {
            errorMessage: 'Guild is required'
        }
    },
    room_number: {
        in: ['body'],
        isString: true,
        trim: true,
        notEmpty: {
            errorMessage: 'Room number is required'
        },
    },
    location: {
        in: ['body'],
        isString: true,
        trim: true,
        notEmpty: {
            errorMessage: 'Location is required'
        }
    } 
}
