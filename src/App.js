import React from "react";
import axios from "axios";
import ReactCodeInput from "react-verification-code-input";

import "./App.css";

function App({ history }) {
  const inputRef = React.useRef(null);
  const [code, setCode] = React.useState("");
  const [error, setError] = React.useState("");

  const handleChange = (vals) => {
    setCode(vals);
    setError("");
  };

  const handleSubmit = () => {
    if (code.length === 6) {
      axios
        .post("http://localhost:5000", { code })
        .then(() => {
          history.push("/success");
        })
        .catch((error) => setError(error.response.data.message));
    }
  };
  return (
    <div className='verification-code-wrapper'>
      <ReactCodeInput
        ref={inputRef}
        className='verification-code-container'
        onChange={handleChange}
        fieldWidth={50}
        fieldHeight={50}
        autoFocus
        required
      />
      <div className='verification-submit'>
        <button className='btn-submit' onClick={handleSubmit}>
          Submit
        </button>
      </div>
      {error && <div className='verification-error'>{error}</div>}
    </div>
  );
}

export default App;
