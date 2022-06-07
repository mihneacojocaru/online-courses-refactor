import ReactDOM from "react-dom/client";
import './Styles/index.css';

import App from "./App";
import { ContextProvider } from "./context/Context";

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
    <ContextProvider>
        <App />
    </ContextProvider>
);
