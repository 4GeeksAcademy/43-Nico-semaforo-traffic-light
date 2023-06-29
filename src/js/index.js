//import react into the bundle
import React, { useState } from 'react';
import ReactDOM from "react-dom";

// include your styles into the webpack bundle
import "../styles/index.css";

//import your own components
import Semaluz from "./component/home.jsx";

//render your react application
ReactDOM.render(<Semaluz />, document.querySelector("#app"));

