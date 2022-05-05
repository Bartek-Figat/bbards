import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Formik, ErrorMessage } from 'formik';
import * as yup from 'yup';
import { signupUser } from '../slice/singUpSlice';
import { Input } from '../atomic/atoms/input/index';
import { Button } from '../atomic/atoms/button/index';
import { Form } from '../atomic/molecues/from';
import { Label } from '../atomic/atoms/label';
import { FormContent } from '../atomic/molecues/index';
import AuthImage from '../images/photo.png';

const userSchema = yup.object().shape({
  userName: yup
    .string()
    .min(3, 'Name must be at least 3 characters long')
    .max(20, 'Name cannot be longer than 20 characters')
    .required('Name is required'),
  email: yup.string().email('Must be a valid email').required('Email is required'),
  password: yup
    .string()
    .min(6, 'Password must be at least 6 characters long')
    .required('Password is required'),
  confirmPassword: yup
    .string()
    .oneOf([yup.ref('password')], 'Password must match')
    .required('Confirm Password is required'),
});

export const RegisterUserForm = () => {
  const dispatch = useDispatch();
  const { register } = useSelector((state) => state);

  return (
    <main className="bg-white">
      <div className="relative md:flex">
        {/* Page header */}
        <div className="md:w-1/2">
          <div className="max-w-sm mx-auto min-h-screen flex flex-col justify-center px-4 py-8">
            <div className="w-full">
              <h1 className="text-3xl text-gray-800 font-bold mb-6">Welcome back! ✨</h1>
              {/* Form */}

              <Formik
                initialValues={{
                  userName: '',
                  email: '',
                  password: '',
                  confirmPassword: '',
                }}
                onSubmit={async (values, actions) => {
                  const { userName, email, password, confirmPassword } = values;
                  const data = {
                    userName,
                    email,
                    password,
                    confirmPassword,
                  };
                  dispatch(signupUser(data));
                  actions.resetForm({
                    values: {
                      userName: '',
                      email: '',
                      password: '',
                      confirmPassword: '',
                    },
                  });
                }}
                validationSchema={userSchema}
              >
                {({
                  values,
                  errors,
                  touched,
                  handleChange,
                  handleBlur,
                  handleSubmit,
                  isSubmitting,
                }) => (
                  <Form onSubmit={handleSubmit}>
                    {register.success.length > 0 ? (
                      <div
                        className="bg-teal-100 border-t-4 border-teal-500 rounded-b text-teal-900 px-4 py-3 shadow-md"
                        role="alert"
                      >
                        <div className="flex">
                          <div className="py-1">
                            <svg
                              className="fill-current h-6 w-6 text-teal-500 mr-4"
                              xmlns="http://www.w3.org/2000/svg"
                              viewBox="0 0 20 20"
                            >
                              <path d="M2.93 17.07A10 10 0 1 1 17.07 2.93 10 10 0 0 1 2.93 17.07zm12.73-1.41A8 8 0 1 0 4.34 4.34a8 8 0 0 0 11.32 11.32zM9 11V9h2v6H9v-4zm0-6h2v2H9V5z" />
                            </svg>
                          </div>
                          <div>
                            <p className="text-sm">{register.success}</p>
                          </div>
                        </div>
                      </div>
                    ) : null}

                    {register.error.length > 0 ? (
                      <div
                        className="bg-orange-100 border-l-4 border-orange-500 text-orange-700 p-4"
                        role="alert"
                      >
                        <p>{register.error}</p>
                      </div>
                    ) : null}

                    <FormContent>
                      <Label htmlFor="userName">Name</Label>
                      <Input
                        id="userName"
                        type="text"
                        name="userName"
                        placeholder="John Smith"
                        onBlur={handleBlur}
                        value={values.userName}
                        onChange={(e) => {
                          handleChange(e);
                        }}
                        style={{
                          borderColor: errors.userName && touched.userName ? 'red' : null,
                        }}
                      />
                      <ErrorMessage name="userName">
                        {(msg) => <div className="text-red-500 text-md italic">{msg}</div>}
                      </ErrorMessage>
                    </FormContent>
                    <FormContent>
                      <Label htmlFor="email">Email</Label>
                      <Input
                        id="email"
                        type="email"
                        name="email"
                        placeholder="your@email.com"
                        onBlur={handleBlur}
                        value={values.email}
                        onChange={(e) => {
                          handleChange(e);
                        }}
                        style={{
                          borderColor: errors.email && touched.email ? 'red' : null,
                        }}
                      />
                      <ErrorMessage name="email">
                        {(msg) => <div className="text-red-500 text-md italic">{msg}</div>}
                      </ErrorMessage>
                    </FormContent>
                    <FormContent>
                      <Label htmlFor="password">Password</Label>
                      <Input
                        id="password"
                        type="password"
                        name="password"
                        placeholder="Password"
                        value={values.password}
                        onBlur={handleBlur}
                        onChange={(e) => {
                          handleChange(e);
                        }}
                        style={{
                          borderColor: errors.password && touched.password ? 'red' : null,
                        }}
                      />
                      <ErrorMessage name="password">
                        {(msg) => <div className="text-red-500 text-md italic">{msg}</div>}
                      </ErrorMessage>
                    </FormContent>
                    <FormContent>
                      <Label htmlFor="confirmPassword">Confirm Password</Label>
                      <Input
                        id="confirmPassword"
                        type="password"
                        name="confirmPassword"
                        placeholder="Password"
                        value={values.confirmPassword}
                        onBlur={handleBlur}
                        onChange={(e) => {
                          handleChange(e);
                        }}
                        style={{
                          borderColor:
                            errors.confirmPassword && touched.confirmPassword ? 'red' : null,
                        }}
                      />
                      <ErrorMessage name="confirmPassword">
                        {(msg) => <div className="text-red-500 text-md italic">{msg}</div>}
                      </ErrorMessage>
                    </FormContent>
                    {register.loading ? (
                      <div className="flex flex-wrap -mx-3 mt-6">
                        <div className="w-full px-3">
                          <button
                            type="button"
                            className="btn text-white bg-blue-600 hover:bg-blue-700 w-full p-2 rounded-sm"
                            disabled
                          >
                            Processing...
                          </button>
                        </div>
                      </div>
                    ) : (
                      <div className="flex flex-wrap -mx-3 mt-6">
                        <div className="w-full px-3">
                          <Button type="submit" disabled={isSubmitting}>
                            {' '}
                            Register{' '}
                          </Button>
                        </div>
                      </div>
                    )}

                    <div className="text-sm text-gray-500 text-center mt-3">
                      By creating an account, you agree to the{' '}
                      <a className="underline" href="#0">
                        terms & conditions
                      </a>
                      , and our{' '}
                      <a className="underline" href="#0">
                        privacy policy
                      </a>
                      .
                    </div>
                  </Form>
                )}
              </Formik>
              <div
                className="hidden md:block absolute top-0 bottom-0 right-0 md:w-1/2"
                aria-hidden="true"
              >
                <img
                  className="object-cover object-center w-full h-full"
                  src={AuthImage}
                  width="760"
                  height="1024"
                  alt="Authentication"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};
