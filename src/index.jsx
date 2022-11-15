import React from "react";
import {render} from "react-dom";
import App from "./app";
render(<App />, document.getElementById("root"));

const container = document.getElementById('root');
const root = createRoot(container);

root.render(<App />);