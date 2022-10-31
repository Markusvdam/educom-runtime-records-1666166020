import "./../src/resources/styles/main.css";
import "../src/resources/styles/main.css";
import 'bootstrap/dist/css/bootstrap.min.css';

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
}