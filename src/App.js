// import logo from "./logo.svg";
import "./App.css";
// import Textform from "./componets/Body/textform/Textform";
import Textanalysis from "./componets/Body/textform/Textanalysis";
import Navbar from "./componets/navbar/Navbar";
// import About from "./componets/About/About";
import React, { useState } from "react";
import Alerts from "./componets/alerts/Alerts";
// import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  const [mode, setMode] = useState("light"); //Whether Dark Mode Is Unable Or Not
  const [alert, setAlert] = useState(null);

  const showAlert = (message, type) => {
    setAlert({
      msg: message, //We Also Used Message: Message Or Msg : Message
      type: type,
    });
    setTimeout(() => {
      setAlert(null);
    }, 2000);
  };

  const toggleMode = () => {
    if (mode === "light") {
      setMode("dark");
      document.body.style.backgroundColor = "darkgray";
      document.body.style.color = "white";
      showAlert("Dark Mode Has Been Enable", "success");
      document.title = "Text - Dark Mode";
      // setInterval(() => {
      //   document.title = "Text Is Amazing Mode";
      // }, 2000);
      // setInterval(() => {
      //   document.title = "Please Install Text ";
      // }, 1500);
      //pls Never Used It Only Distraced The User
    } else {
      setMode("light");
      document.body.style.backgroundColor = "white";
      document.body.style.color = "black";
      showAlert("Light Mode Has Been Enable", "success");
      document.title = "Text - Light Mode";
    }
  };
  return (
    <>
      {/* <Router> */}
      <Navbar
        title="Text"
        aboutText="About Us"
        mode={mode}
        dMode="Unable Dark Mode"
        toggleMode={toggleMode}
      />

      <Alerts alert={alert} />

      <div className="container my-4">
        {/* <Switch> */}
        {/* users --> componet 1
            users/home --> componet 2 */}
        {/* <Route exact path="/about"> */}
        {/* <About /> */}
        {/* </Route> */}

        {/* <Route exact path="/"> */}
        <Textanalysis
          showAlert={showAlert}
          heading="Enter Text In Here"
          mode={mode}
        />
        {/* </Route> */}
        {/* </Switch> */}

        {/* <About /> */}
      </div>

      <div className="container my-7">
        {/* <Textform heading="Enter You Email Address" /> */}
      </div>
      {/* </Router> */}
    </>
  );
}

export default App;
