export const registerAdminSchema = {
    user_id: {
        notEmpty: {
            errorMessage: 'Username is required'
        },
    },
    password: {
        notEmpty: {
            errorMessage: 'Password is required'
        },
        isLength: {
            options: { min: 4 },
            errorMessage: 'Password must be at least 4 characters long'
        }
    }
}

export const deleteAdmin = {
    id: {
        notEmpty: {
            errorMessage: 'Admin ID is required'
        }
    }
}