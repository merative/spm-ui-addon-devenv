import React from 'react';
import ReactDOM from 'react-dom';
import PersonFolio from './PersonFolio';

const getWrapper = (iframeWindow, containerID) => {
  return iframeWindow.document.getElementById(`${containerID}`);
}

const render = ({
  inputId,
  iframeWindow = window,
  firstname,
  surname,
  age,
}) => {
  const container = getWrapper(iframeWindow, inputId);

  ReactDOM.render(
    <PersonFolio firstname={firstname} surname={surname} age={age} > </PersonFolio> ,
    container
  );
};

export  { render };

