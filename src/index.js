import React from "react";
import ReactDOM from "react-dom";

// components
import App from './components/App';

const headerMovie = {
  title: `The Grand Budapest Hotel`,
  year: `2014`,
  genre: `Drama`
};

ReactDOM.render(
    <App headerMovie={headerMovie}/>,
    document.getElementById(`root`)
);
