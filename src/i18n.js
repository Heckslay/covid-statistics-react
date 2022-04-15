import i18n from "i18next";
import { initReactI18next } from "react-i18next";

const resources = {
    en: {
        translation: {
            "name": "Name",
            "code": "Code",
            "total_confirmed": "Total Confirmed",
            "total_recovered": "Total Recovered",
            "total_deaths": "Total Deaths",
            "dashboard": "Dashboard",
            "country_statistics": "Country Statistics",
            "login": "Log In",
            "password": "Password",
            "logout": "Log Out"
        }
    },
    ka: {
        translation: {
            "name": "სახელი",
            "code": "კოდი",
            "total_confirmed": "ჯამური შემთხვევა",
            "total_recovered": "ჯამში გამოჯანმრთელდა",
            "total_deaths": "ჯამში გარდაიცვალა",
            "dashboard": "მთავარი",
            "country_statistics": "ქვეყნების სტატისტიკა",
            "login": "შესვლა",
            "password": "პაროლი",
            "logout": "გამოსვლა"
        }
    }
};

i18n
    .use(initReactI18next) // passes i18n down to react-i18next
    .init({
        resources,
        lng: "en",
        interpolation: {
            escapeValue: false // react already safes from xss
        }
    });

export default i18n;