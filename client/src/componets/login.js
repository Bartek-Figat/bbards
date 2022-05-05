import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { Formik, ErrorMessage, useFormikContext } from 'formik';
import * as yup from 'yup';
import { loginUser } from '../slice/loginSlice';
import { Input } from '../atomic/atoms/input/index';
import { Button } from '../atomic/atoms/button/index';
import { Form } from '../atomic/molecues/from';
import { Label } from '../atomic/atoms/label';
import { FormContent } from '../atomic/molecues/index';
import AuthImage from '../images/photo-1591818250210-48fba09a2305.png';
import { ROUTES } from '../router/router';

const userSchema = yup.object().shape({
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

export const LoginForm = () => {
  const dispatch = useDispatch();
  const { login } = useSelector((state) => state);
  let navigate = useNavigate();

  const AutoSubmitToken = () => {
    const { submitForm } = useFormikContext();
    useEffect(() => {
      if (!login.token && !login.success) return;
      localStorage.setItem('token', login.token);
      navigate(`${ROUTES.ACCOUNT}`, { replace: true });
    }, [submitForm]);
    return null;
  };

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
                  email: '',
                  password: '',
                  confirmPassword: '',
                }}
                onSubmit={async (values, actions) => {
                  const { email, password, confirmPassword } = values;
                  const data = {
                    email,
                    password,
                    confirmPassword,
                  };
                  dispatch(loginUser(data));
                  actions.resetForm({
                    values: {
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
                    {login.error.length > 0 ? (
                      <div
                        className="bg-orange-100 border-l-4 border-orange-500 text-orange-700 p-4"
                        role="alert"
                      >
                        <p>{login.error}</p>
                      </div>
                    ) : null}
                    <AutoSubmitToken />
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

                    <div className="flex flex-wrap -mx-3 mt-6">
                      <div className="w-full px-3">
                        <Button type="submit" disabled={isSubmitting}>
                          {' '}
                          Login{' '}
                        </Button>
                      </div>
                    </div>

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
              {/* Footer */}
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
