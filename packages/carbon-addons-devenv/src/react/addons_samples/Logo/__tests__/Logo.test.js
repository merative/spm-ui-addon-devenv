/*
 * Copyright Merative US L.P. 2020, 2024
 */

import "jsdom-global/register";
import { mount } from "enzyme";
import React from "react";
import Logo from "../Logo";
import settings from "../../../core/settings";

describe("Logo tests", () => {
  it("tests Logo 1 children node", () => {
    const smallLogo = mount(
      <Logo size="small">
        <img src="../sample-logo.jpg" alt="small logo" />
      </Logo>,
    );
    const logoDiv = smallLogo.find("div");
    // check that the root div exists
    expect(logoDiv.exists()).toBeTruthy();
    // check class name on root div
    expect(logoDiv.hasClass(`${settings.prefix}--logo`)).toBeTruthy();
    expect(logoDiv.hasClass(`${settings.prefix}--logo--small`)).toBeTruthy();

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

  it("tests size and className attributes", () => {
    const largeLogo = mount(
      <Logo
        size="large"
        className="settings.prefix--logo--extraextra"
        id="logo_123"
      >
        <img src="../sample-logo.jpg" alt="small logo" />
      </Logo>,
    );
    const logoDiv = largeLogo.find("div");
    // check that the root div exists
    expect(logoDiv.exists()).toBeTruthy();
    // check class name on root div
    const divAtts = logoDiv.at(0).props();
    expect(Object.keys(divAtts).length).toBe(3);

    expect(logoDiv.at(0).props().className).toBe(
      `${settings.prefix}--logo ${settings.prefix}--logo--large settings.prefix--logo--extraextra`,
    );
    expect(logoDiv.at(0).props().id).toBe("logo_123");
    // this is the child nodes not an attribute
    expect(typeof logoDiv.at(0).props().children !== "string").toBeTruthy();
    // check child nodes
    expect(logoDiv.at(0).children().length).toBe(1);

    // child node already tested previoussly
  });

  it("tests optional attributes", () => {
    const logoWithImageName = mount(
      <Logo size="large" imageName="image123.jpeg">
        <span>child</span>
      </Logo>,
    );

    const logoDiv = logoWithImageName.find("div");
    // check that the root div exists
    expect(logoDiv.exists()).toBeTruthy();
  });
});
