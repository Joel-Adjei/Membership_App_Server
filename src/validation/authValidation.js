export const loginValidation = {
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
            options: { min: 6 },
            errorMessage: 'Password must be at least 6 characters long'
        }
    }
}