import * as yup from "yup";

const passwordRules = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{5,}$/;

export const loginSchema = yup.object().shape({
  email: yup.string().email("Введіть вірний email").required("Потребує"),
  password: yup
    .string()
    .min(5, "Пароль повинен мати не менше 5 символів")
    .required("Потребує"),
});

export const registerSchema = yup.object().shape({
  email: yup.string().email("Введіть вірний email").required("Потребує"),
  password: yup
    .string()
    .min(5, "Пароль повинен мати не менше 5 символів")
    .matches(passwordRules, {
      message: "Пароль повинен починатись з великой букви та мати цифри",
    })
    .required("Потребує"),
  confirmPassword: yup
    .string()
    .oneOf([yup.ref("password"), null], "Паролі повині співпадати")
    .required("Потребує"),
});

export const resetPassworSchema = yup.object().shape({
  password: yup
    .string()
    .min(5, "Пароль повинен мати не менше 5 символів")
    .matches(passwordRules, {
      message: "Пароль повинен починатись з великой букви та мати цифри",
    })
    .required("Потребує"),
  confirmPassword: yup
    .string()
    .oneOf([yup.ref("password"), null], "Паролі повині співпадати")
    .required("Потребує"),
});
