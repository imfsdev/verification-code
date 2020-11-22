import { render } from "@testing-library/react";

import ReactCodeInput from "react-verification-code-input";
import App from "./App";

test("Renders Verification Component", () => {
  render(<App />);
});

test("Renders Verification Code Input Component", () => {
  render(<ReactCodeInput />);
});
