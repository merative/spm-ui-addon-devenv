import React from "react";
import { createRoot } from "react-dom/client";
import Alan1Addon from "../src/react/addons/Alan1Addon/Alan1Addon";

const getWrapper = (iframeWindow, containerID) => {
  return iframeWindow.document.getElementById(`${containerID}`);
};

const Alan1Renderer = (inputId, { iframeWindow = window }) => {
  const container = getWrapper(iframeWindow, inputId);
  const root = createRoot(container);
  root.render(<Alan1Addon />);
};

export default Alan1Renderer;
