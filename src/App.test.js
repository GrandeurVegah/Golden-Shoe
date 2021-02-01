import React from "react";
import ReactDOM from "react-dom";
import { Router } from "react-router";
import App from "./App";
import { createBrowserHistory } from "history";

const history = createBrowserHistory();


it("renders without crashing", () => {
  const div = document.createElement("div");
  ReactDOM.render(
    <Router history={history}>
      <App />
    </Router>,
    div
  );
  ReactDOM.unmountComponentAtNode(div);
});
