/*
 * Licensed Materials - Property of IBM
 *
 * PID 5725-H26
 *
 * Copyright IBM Corporation 2021. All Rights Reserved.
 *
 * US Government Users Restricted Rights - Use, duplication or disclosure
 * restricted by GSA ADP Schedule Contract with IBM Corp.
 */


import { mount } from 'enzyme';
import React from 'react';
import PersonFolio from '../PersonFolio';
import settings from '../../../core/settings';
import InlContext from '../../../core/InlContext';

const testParagraphElement = (wrapperElement, text) => {
  expect(wrapperElement.type()).toBe("p");
  expect(wrapperElement.text()).toBe(text);
}

describe('personfolio tests', () => {

  it('tests child Person', () => {
    const child = mount(
      <PersonFolio firstname="Dave" surname="Bloggs" age={12}/> 
    );
    const portFolioDiv = child.find('div');
    // check that the root div exists
    expect(portFolioDiv.exists()).toBeTruthy();
    // check class name on root div
    expect(
      portFolioDiv.hasClass(`${settings.prefix}--personfolio`)
    ).toBeTruthy();
    expect(
      portFolioDiv.hasClass(`${settings.prefix}--personfolio--child`)
    ).toBeTruthy();

    // check child nodes
    expect(portFolioDiv.at(0).children().length).toBe(3);
    // 1st node
    testParagraphElement(portFolioDiv.at(0).childAt(0), "First name:  Dave");
    // 2nd node
    testParagraphElement(portFolioDiv.at(0).childAt(1), "Surname:  Bloggs");
     // 3rd node
     testParagraphElement(portFolioDiv.at(0).childAt(2), "Age: 12");
    
  });

  it('tests senior Person', () => {
    const senior = mount(
      <PersonFolio firstname="Jerry" surname="Bloggs" age={70}/> 
    );
    const portFolioDiv = senior.find('div');
    expect(
      portFolioDiv.hasClass(`${settings.prefix}--personfolio`)
    ).toBeTruthy();
    expect(
      portFolioDiv.hasClass(`${settings.prefix}--personfolio--senior`)
    ).toBeTruthy();

     // check child nodes
     expect(portFolioDiv.at(0).children().length).toBe(3);
     // 1st node
     testParagraphElement(portFolioDiv.at(0).childAt(0), "First name:  Jerry");
     // 2nd node
     testParagraphElement(portFolioDiv.at(0).childAt(1), "Surname:  Bloggs");
     // 3rd node
     testParagraphElement(portFolioDiv.at(0).childAt(2), "Age: 70");
  });

  it('tests children', () => {
    const personWithChildNode = mount(
      <PersonFolio firstname="Sandra" surname="Bloggs">
        <span>child node</span>
      </PersonFolio> 
    );
    const portFolioDiv = personWithChildNode.find('div');
    // check child nodes present
    expect(portFolioDiv.at(0).children().length).toBe(4);

    // juts check the last (child node). Firsts 3 have been checked before
    expect(portFolioDiv.at(0).childAt(3).type()).toBe("span");
    expect(portFolioDiv.at(0).childAt(3).text()).toBe("child node");
  });

  it('tests labels passed to the component', () => {
    const  labels = {firstnameLabel: "firstNom", surnameLabel: "surNom"}
    const personWithChildNode = mount(
      <InlContext.Provider
      value={{
        labels
      }}
    >
      <PersonFolio firstname="Sandra" surname="Bloggs">
        <span>child node</span>
      </PersonFolio>
    </InlContext.Provider>
    );


    const portFolioDiv = personWithChildNode.find('div');
    // check child nodes present
    expect(portFolioDiv.at(0).children().length).toBe(4);

    // juts check the last (child node). Firsts 3 have been checked before
    expect(portFolioDiv.at(0).childAt(3).type()).toBe("span");
    expect(portFolioDiv.at(0).childAt(3).text()).toBe("child node");
  });
});

