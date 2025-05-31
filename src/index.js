//The bridge between the component created in App.js and the web browser

//the below 4 lines bring all the necessary pieces together
import { StrictMode } from "react"; //React
import { createRoot } from "react-dom/client"; //React's library to talk to web browsers (React DOM)
import "./styles.css"; // the styles for the components

import App from "./App"; // the component created in App.js



//injects the final product into public/index.html 
const root = createRoot(document.getElementById("root"));
root.render(
  <StrictMode>
    <App />
  </StrictMode>
);