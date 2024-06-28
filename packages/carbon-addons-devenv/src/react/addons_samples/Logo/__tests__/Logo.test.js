/*
 * Copyright Merative US L.P. 2024
 */
import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import settings from "../../../core/settings";
import Logo from "../Logo";

describe("Logo tests", () => {
  it("tests Logo 1 children node", () => {
    const { container } = render(
      <Logo size="small">
        <img src="../sample-logo.jpg" alt="small logo" />
      </Logo>,
    );
    expect(container.firstChild).toHaveClass(
      `${settings.prefix}--logo`,
      `${settings.prefix}--logo--small`,
    );
    screen.getByRole("img", { name: /small logo/i });
  });

  it("tests size and className attributes", () => {
    const { container } = render(
      <Logo
        size="large"
        className="settings.prefix--logo--extraextra"
        id="logo_123"
      >
        <img src="../sample-logo.jpg" alt="small logo" />
      </Logo>,
    );
    expect(container.firstChild).toHaveClass(
      `${settings.prefix}--logo ${settings.prefix}--logo--large settings.prefix--logo--extraextra`,
    );
    expect(container.firstChild).toHaveAttribute("id", "logo_123");
    screen.getByRole("img", { name: /small logo/i });
  });

  it("tests optional attributes", () => {
    render(
      <Logo size="large" imageName="image123.jpeg">
        <span>child</span>
      </Logo>,
    );
    const img = screen.getByRole("img", { name: /a logo/i });
    expect(img).toHaveAttribute("src", "../Images/image123.jpeg");
  });
});
