import i18n from "i18next";
import { initReactI18next } from "react-i18next";

const resources = {
  en: {
    translation: {
      "Login": "Login",
      "Register": "Register",
      "Language": "Language",
      "Username": "Username",
      "Password": "Password",
    },
  },
  zh: {
    translation: {
      "Login": "登录",
      "Register": "注册",
      "Language": "语言",
      "Username": "用户名",
      "Password": "密码",
    },
  },
};

i18n
  .use(initReactI18next)
  .init({
    resources,
    lng: "en",
    fallbackLng: "en",
    interpolation: {
      escapeValue: false
    }
  });

export default i18n;