import i18n from "i18next";
import LanguageDetector from "i18next-browser-languagedetector";
import { initReactI18next } from "react-i18next";

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    fallbackLng: "en",
    debug: true,
    interpolation: {
      escapeValue: false
    },
    resources: {
      en: {
        translation: {
          description: {
            part1: "Hello World!!!",
            part2: "Welcome to our app!"
          },
          error: {
            401: 'You are not authorized to do that!',
            404: 'Page not found',
            500: 'Internal Server Error',
            generic: 'We encountered an error. Please try again later'
          },
          welcomeMessage: "Welcome {{name}}, how are you doing today?"
        },
      },
      de: {
        translation: {
          description: {
            part1: "Hallo Welt!!!",
            part2: "Willkommen in unserer App!"
          },
          error: {
            401: 'Dazu sind Sie nicht berechtigt!',
            404: 'Seite nicht gefunden',
            500: 'Interner Serverfehler',
            generic: 'Es ist ein Fehler aufgetreten. Bitte versuchen Sie es später noch einmal'
          },
          welcomeMessage: "Willkommen {{name}}, wie geht es dir heute?"
        },
      },
      es: {
        translation: {
          description: {
            part1: "¡¡¡Hola Mundo!!!",
            part2: "¡Bienvenido a nuestra aplicación!"
          },
          error: {
            401: '¡No estás autorizado a hacer eso!',
            404: 'Pagina no encontrada',
            500: 'Error interno de servidor',
            generic: 'Encontramos un error. Por favor, inténtelo de nuevo más tarde'
          },
          welcomeMessage: "Bienvenido {{name}}, ¿cómo estás hoy?"
        }
      },
    },
  });

export default i18n;
