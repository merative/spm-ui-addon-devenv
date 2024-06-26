import React from "react";
import { createRoot } from "react-dom/client";
import Logo from "./Logo";

const getWrapper = (iframeWindow, containerID) => {
  return iframeWindow.document.getElementById(`${containerID}`);
};

const render = ({ inputId, iframeWindow = window, logo, size }) => {
  const container = getWrapper(iframeWindow, inputId);
  const root = createRoot(container);
  root.render(
    <Logo size={size}>
      <img src={logo} alt="small logo" />
    </Logo>,
  );
};

export default { render };
