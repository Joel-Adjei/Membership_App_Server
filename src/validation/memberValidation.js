import { allDepartments } from "../utils/utils.js";

export const addMemberValidation = {
  name: {
    in: ["body"],
    isString: true,
    trim: true,
    notEmpty: {
      errorMessage: "Name is required",
    },
  },
  image: {
    in: ["body"],
    isString: true,
    trim: true,
  },
  hall: {
    in: ["body"],
    isString: true,
    trim: true,
  },
  room_number: {
    in: ["body"],
    isString: true,
    trim: true,
  },
  student_status: {
    in: ["body"],
    isIn: {
      options: [["graduate", "undergraduate"]],
      errorMessage: "Invalid student status",
    },
    notEmpty: {
      errorMessage: "Student status is required",
    },
  },
  contact: {
    in: ["body"],
    isString: true,
    trim: true,
    notEmpty: {
      errorMessage: "Contact is required",
    },
  },
  guardian_contact: {
    in: ["body"],
    isString: true,
    trim: true,
    notEmpty: {
      errorMessage: "Guardian contact is required",
    },
  },
  email: {
    in: ["body"],
    isEmail: {
      errorMessage: "Invalid email format",
    },
    normalizeEmail: true,
    notEmpty: {
      errorMessage: "Email is required",
    },
  },
  church_status: {
    in: ["body"],
    isString: true,
    trim: true,
    notEmpty: {
      errorMessage: "Church status is required",
    },
  },
  date_of_birth: {
    in: ["body"],
    isISO8601: {
      errorMessage: "Invalid date format",
    },
    toDate: true,
    notEmpty: {
      errorMessage: "Date of birth is required",
    },
  },
  level: {
    in: ["body"],
    isString: true,
    trim: true,
    notEmpty: {
      errorMessage: "Level is required",
    },
  },
  programme: {
    in: ["body"],
    isString: true,
    trim: true,
    notEmpty: {
      errorMessage: "Programme is required",
    },
  },
  department: {
    in: ["body"],
    oneOf: {
      options: allDepartments,
    },
    trim: true,
  },
  guild: {
    in: ["body"],
    isString: true,
    trim: true,
  },
  location: {
    in: ["body"],
    isString: true,
    trim: true,
  },
};

export const verifyMemberValidation = {
  email: {
    in: ["body"],
    isEmail: {
      errorMessage: "Invalid email format",
    },
    normalizeEmail: true,
    notEmpty: {
      errorMessage: "Email is required",
    },
  },
};
