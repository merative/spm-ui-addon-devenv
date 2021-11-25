/*
 * Licensed Materials - Property of IBM
 *
 * PID 5725-H26
 *
 * Copyright IBM Corporation 2020. All Rights Reserved.
 *
 * US Government Users Restricted Rights - Use, duplication or disclosure
 * restricted by GSA ADP Schedule Contract with IBM Corp.
 */

import { mount } from 'enzyme';
import React from 'react';import Logo from '../Logo';
import settings from '../../../settings';


describe('Logo tests', () => {
  it('tests Logo 1 children node', () => {
    const smallLogo = mount(
      <Logo size="small">
        <img src="../sample-logo.jpg" alt="small logo" />
      </Logo>
    );
    const logoDiv = smallLogo.find('div');
    // check that the root div exists
    expect(logoDiv.exists()).toBeTruthy();
    // check class name on root div
    expect(
      logoDiv.hasClass(`${settings.prefix}--logo`)
    ).toBeTruthy();
    expect(
      logoDiv.hasClass(`${settings.prefix}--logo--small`)
    ).toBeTruthy();

    // check child nodes
    expect(logoDiv.at(0).children().length).toBe(1);
    // 1st node
    expect(logoDiv.at(0).childAt(0).type()).toBe("img");
    // testing the number of attributes are corrcet
    const imgAtts = logoDiv.at(0).childAt(0).props();
    expect(Object.keys(imgAtts).length).toBe(2);
    expect(logoDiv.at(0).childAt(0).props().src).toBe("../sample-logo.jpg");
    expect(logoDiv.at(0).childAt(0).props().alt).toBe("small logo");  
  });

  it('tests Logo all attributes', () => {
    const largeLogo = mount(
      <Logo size="large" className="settings.prefix--logo--extraextra" id="logo_123">
          <img src="../sample-logo.jpg" alt="small logo" />
      </Logo>
    );
    const logoDiv = largeLogo.find('div');
    // check that the root div exists
    expect(logoDiv.exists()).toBeTruthy();
    // check class name on root div

    const divAtts = logoDiv.at(0).props();
    expect(Object.keys(divAtts).length).toBe(3);

   expect(logoDiv.at(0).props().className).toBe("bx--logo bx--logo--large settings.prefix--logo--extraextra");
   expect(logoDiv.at(0).props().id).toBe("logo_123");
   // this is the child nodes not an attribute
   expect(typeof logoDiv.at(0).props().children !== 'string').toBeTruthy();
    // check child nodes
    expect(logoDiv.at(0).children().length).toBe(1);

    // child node already tested previoussly
  });

});



