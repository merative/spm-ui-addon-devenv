import React from "react";
import { createRoot } from "react-dom/client";
import Alan2Addon from "../src/react/addons/Alan2Addon/Alan2Addon";

const getWrapper = (iframeWindow, containerID) => {
  return iframeWindow.document.getElementById(`${containerID}`);
};

const Alan2Renderer = (inputId, { iframeWindow = window }) => {
  const container = getWrapper(iframeWindow, inputId);
  const root = createRoot(container);
  root.render(<Alan2Addon />);
};

export default Alan2Renderer;
