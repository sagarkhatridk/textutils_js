import React, { useState } from "react";

export default function TextForm(props) {
  const UppercaseClick = () => {
    if (text === "" || text == null) {
      props.showAlert("Please Enter text", "danger");
    } else {
      let newText = text.toUpperCase();
      setText(newText);
      props.showAlert("text converted into uppercase", "success");
    }
  };

  const lowercaseClick = () => {
    if (text === "" || text == null) {
      props.showAlert("Please Enter text", "danger");
    } else {
      let newText = text.toLowerCase();
      setText(newText);
      props.showAlert("text converted into lowercase", "success");
    }
  };

  const removePunc = () => {
    if (text === "" || text == null) {
      props.showAlert("Please Enter text", "danger");
    } else {
      let punctuations = "!\"#$%&'()*+,-./:;<=>?@[]^_`{|}~";
      let newText = "";
      props.showAlert("Panctuations removed from the text", "success");

      for (let x in text) {
        x = text[x];
        console.log(x);
        if (punctuations.includes(x) === true) {
          continue;
        } else {
          newText += x;
        }
      }
      setText(newText);
    }
  };

  const handleOnChange = (event) => {
    setText(event.target.value);
  };
  const [text, setText] = useState("");
  return (
    <>
      <div
        className="container"
        style={{ color: props.mode === "dark" ? "white" : "#042743" | props.mode === "green" ? "white" : "#008000"}}
      >
        <div className="mb-3">
          <label htmlFor="myBox" className="form-label">
            <h1>{props.heading}</h1>
          </label>
          <textarea
            className="form-control"
            id="myBox"
            rows="9"
            value={text}
            onChange={handleOnChange}
            style={{
              backgroundColor: "white",
            }}
          ></textarea>

          <button className="btn btn-primary my-3" onClick={UppercaseClick}>
            Uppercase
          </button>
          <button
            className="btn btn-primary my-3 mx-3"
            onClick={lowercaseClick}
          >
            Lowercase
          </button>
          <button className="btn btn-primary my-3" onClick={removePunc}>
            Remove panctuations
          </button>
        </div>
      </div>

      <div
        className="container my-2"
        style={{ color: props.mode === "dark" ? "white" : "#042743"  | props.mode === "green" ? "white" : "#008000"}}
      >
        <h1>Your Text Summary</h1>
        <p>
          Your Text has{" "}
          {text.split(" ").length === 1 ? 0 : text.split(" ").length} Words and{" "}
          {text.length} Characters
        </p>
        <p>
          {text.split(" ").length === 1 ? 0 : 0.008 * text.split(" ").length}{" "}
          Minutes to read
        </p>

        <h2>Preview</h2>
        <p>{text}</p>
      </div>
    </>
  );
}
