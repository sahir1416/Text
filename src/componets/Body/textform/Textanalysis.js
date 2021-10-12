import React, { useState } from "react";

export default function Textanalysis(props) {
  const handleUpClick = () => {
    // console.log("UpperCase Was Click" + text);
    // + text can access
    let newText = text.toUpperCase();
    setText(newText);
    props.showAlert("Coverted To UpperCase", "success");
  };

  const handleLoClick = () => {
    let newText = text.toLowerCase();
    setText(newText);
    props.showAlert("Coverted To LowerCase", "success");
  };

  const capitalize = () => {
    let firstChar = text.charAt(1);
    // let lastChar = text.charAt(2);
    let newText = firstChar.toUpperCase(0);
    //  + lastChar.toLowerCase(1);
    setText(newText + text.slice(1));
    props.showAlert("Coverted To Capitalize", "success");
  };

  const handleClearClick = () => {
    let newText = "";
    setText(newText);
    props.showAlert("Text Clear", "success");
  };

  const handleOnChange = (event) => {
    // console.log("handle OnChange Was Click");
    setText(event.target.value);
  };

  const handleCopy = () => {
    console.log("I Am Copy");
    var text = document.getElementById("Text");
    text.select();
    navigator.clipboard.writeText(text.value);
    props.showAlert("Copied To Clipboard!", "success");
  };
  const handleExtraSpace = () => {
    let newText = text.split(/[ ]+/);
    setText(newText.join(" "));
    props.showAlert(" Extra Space", "success");
  };

  const [text, setText] = useState("");
  //   text = "New text"; This Wrong way to change
  //   SetText = "New text"; This Right way to change
  return (
    <>
      <div
        className="container"
        style={{
          Color: props.mode === "dark" ? "white" : "black",
        }}
      >
        <h1>{props.heading}</h1>
        <div className="mb-3">
          <textarea
            className="form-control"
            id="Text"
            //   2nd method  defaultValue={text}
            value={text}
            style={{
              backgroundColor: props.mode === "dark" ? "black" : "white",
              color: props.mode === "dark" ? "white" : "black",
            }}
            onChange={handleOnChange}
            rows="8"
          ></textarea>
        </div>
        <button
          type="submit"
          className="btn btn-primary mb-3 mx-3"
          onClick={handleUpClick}
        >
          Convert To Uppercase
        </button>
        <button
          type="submit"
          className="btn btn-secondary mb-3"
          onClick={handleLoClick}
        >
          Convert To Lowecase
        </button>
        <button
          type="submit"
          className="btn btn-primary mb-3 mx-3"
          onClick={handleClearClick}
        >
          Convert To Clear
        </button>
        <button
          type="submit"
          className="btn btn-primary mb-3 mx-3"
          onClick={capitalize}
        >
          Convert To Title
        </button>
        <button
          type="submit"
          className="btn btn-primary mb-3 mx-3"
          onClick={handleCopy}
        >
          Convert To Copy
        </button>
        <button
          type="submit"
          className="btn btn-primary mb-3 mx-3"
          onClick={handleExtraSpace}
        >
          Remove Extra Space
        </button>
        {/* var str = toTitles('abraham lincoln'); // Abraham Lincoln */}
      </div>
      <div
        className="container"
        style={{
          Color: props.mode === "dark" ? "white" : "black",
        }}
      >
        <h2>Your Text Counting</h2>
        {/* <p>232 words and 3458 characters</p> */}
        <p>
          {text.split(" ").length} words and {text.length} characters
        </p>
        <p>{0.008 * text.split(" ").length} Minutes To Read</p>
        <h2>Preview</h2>
        <p>{text}</p>
      </div>
    </>
  );
}
