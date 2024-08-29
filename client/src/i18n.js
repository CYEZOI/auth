import i18n from "i18next";
import { initReactI18next } from "react-i18next";

const resources = {
  en: {
    translation: {
      "login": "Login",
      "register": "Register",
      "language": "Language",
      "username": "Username",
      "password": "Password",
      "footer": "Powered by CYEZOI, open source at GitHub",
    },
  },
  zh: {
    translation: {
      "login": "登录",
      "register": "注册",
      "language": "语言",
      "username": "用户名",
      "password": "密码",
      "footer": "由CYEZOI提供支持，在GitHub上开源",
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