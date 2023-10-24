import { Formik, Form, ErrorMessage, Field } from "formik";
import { loginSchema } from "../../schema";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { Alert, Popconfirm } from "antd";
import "./styles/login.css";
import { getUser } from "../../slice/auth/authReducer";

export const Login = () => {
  const [showError, setShowError] = useState(false);
  const { error } = useSelector((state) => state.authReducer);

  // const navigate = useNavigate();
  const dispatch = useDispatch();

  useEffect(() => {
    if (error) {
      setShowError(true);
    }
  }, [error]);

  const initialValues = {
    email: "",
    password: "",
  };

  const handleFormSubmit = (values) => {
    dispatch(getUser(values));
  };

  const cancel = (e) => {};

  return (
    <div className="flex flex-col justify-center">
      <div className="w-[100%] flex justify-center pt-[10%]">
        <div className="size-login">
          <div className="shadow-2xl rounded-lg border-1 ">
            <Formik
              initialValues={initialValues}
              validationSchema={loginSchema}
              onSubmit={() => {}}
            >
              {({ values }) => (
                <Form className="py-[20px] ">
                  <div className="text-3xl flex justify-center text-black">
                    <span className="md:text-3xl 2xl:text-3xl">Вхід</span>
                  </div>
                  {showError ? (
                    <div>
                      <span>Неправильно введені дані</span>
                    </div>
                  ) : null}
                  <div className="flex pt-[20px] justify-center w-[100%]">
                    <div className="flex flex-col w-[90%]">
                      <div className="text-start pb-[5px]">
                        <label>Email</label>
                      </div>
                      <div>
                        <Field
                          name="email"
                          placeholder="Введіть свій email"
                          className={
                            <ErrorMessage name="email" /> ? (
                              "border-1 border-violet-700 w-[100%] rounded-md"
                            ) : (
                              "border-1 border-violet-700 w-[100%] rounded-md"
                            )
                          }
                          autoComplete="yes"
                        />
                        <div className="text-start">
                          <ErrorMessage
                            name="email"
                            component="span"
                            className="text-red-400 text-sm"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="pt-[20px] pb-[10px]">
                    <div className="flex justify-center">
                      <div className="flex flex-col w-[90%]">
                        <div className="flex flex-row justify-between w-[100%]">
                          <label>Пароль</label>
                        </div>
                        <div>
                          <Field
                            name="password"
                            type="password"
                            placeholder="Введіть свій пароль"
                            className={
                              <ErrorMessage name="password" /> ? (
                                "border-1 border-violet-700 rounded-md w-[100%]"
                              ) : (
                                "border-1 border-violet-700 rounded-md w-[100%]"
                              )
                            }
                            autoComplete="yes"
                          />
                          <div className="text-start">
                            <ErrorMessage
                              name="password"
                              component="span"
                              className="text-red-400 text-sm"
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="flex flex-row justify-center">
                    <div className="pt-[20px] w-[90%]">
                      <button
                        type="button"
                        onClick={() => handleFormSubmit(values)}
                        className="bg-violet-700 text-white w-[100%] h-[30px]"
                      >
                        Вхід
                      </button>
                    </div>
                  </div>
                </Form>
              )}
            </Formik>
          </div>
        </div>
      </div>
    </div>
  );
};
