import { RequestHandler } from 'express';
import validate from 'validate.js';

export const userRegisterValidatioin: RequestHandler = async (req, res, next) => {
  const constraints = {
    userName: {
      presence: { allowEmpty: false },
      type: 'string',
      length: {
        minimum: 3,
        tooShort: 'must be at least %{count} characters or more',
        maximum: 20,
        tooLong: 'needs to have %{count} characters or less',
      },
    },
    password: {
      presence: { allowEmpty: false },
      type: 'string',
      length: {
        minimum: 6,
        tooShort: 'must be at least %{count} characters',
      },
    },
    email: {
      presence: { allowEmpty: false },
      type: 'string',
      email: true,
    },
    confirmPassword: {
      equality: 'password',
    },
  };
  try {
    const result = validate(req.body, constraints);
    if (result) {
      return res.status(400).json({
        message: 'Invalid request body from registration',
        errors: result,
      });
    }
    return next();
  } catch (err) {
    return res.status(400).json({
      message: 'Invalid body',
    });
  }
};

export const userLoginValidation: RequestHandler = async (req, res, next) => {
  const constraints = {
    password: {
      presence: { allowEmpty: false },
      type: 'string',
      length: {
        minimum: 6,
        tooShort: 'must be at least %{count} characters',
      },
    },
    confirmPassword: {
      presence: { allowEmpty: false },
      type: 'string',
      length: {
        minimum: 6,
        tooShort: 'must be at least %{count} characters',
      },
      equality: 'password',
    },
    email: {
      type: 'string',
      presence: { allowEmpty: false },
      email: true,
    },
  };
  try {
    const result = validate(req.body, constraints);
    if (result) {
      return res.status(400).json({
        message: 'Invalid request body from login',
        errors: result,
      });
    }
    return next();
  } catch (err) {
    return res.status(400).json({
      message: 'Invalid body',
    });
  }
};
