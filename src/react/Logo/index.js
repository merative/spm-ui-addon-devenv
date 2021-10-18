import React from 'react';
import ReactDOM from 'react-dom';
import Logo from './Logo';

const getWrapper = (iframeWindow, containerID) => {
    console.log(`${containerID}`);
  return iframeWindow.document.getElementById(`${containerID}`);
}

const render = ({
  inputId,
  iframeWindow = window,
  logo,
  size,
}) => {
  const container = getWrapper(iframeWindow, inputId);

  ReactDOM.render(
    <Logo size={size}>
    <img src={logo} alt="small logo" />
  </Logo> ,
    container
  );
};

export  { render };
