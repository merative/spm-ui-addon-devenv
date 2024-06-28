/*
 * Copyright Merative US L.P. 2024
 */
import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import settings from "../../../core/settings";
import InlContext from "../../../core/InlContext";
import PersonFolio from "../PersonFolio";

describe("personfolio tests", () => {
  it("renders the correct styles and data for a child", () => {
    const { container } = render(
      <PersonFolio firstname="Dave" surname="Bloggs" age={12} />,
    );
    expect(container.firstChild).toHaveClass(
      `${settings.prefix}--personfolio ${settings.prefix}--personfolio--child`,
    );
    screen.getByText("First name: Dave");
    screen.getByText("Surname: Bloggs");
    screen.getByText("Age: 12");
  });

  it("renders the correct styles and data for a senior", () => {
    const { container } = render(
      <PersonFolio firstname="Jerry" surname="Bloggs" age={70} />,
    );
    expect(container.firstChild).toHaveClass(
      `${settings.prefix}--personfolio ${settings.prefix}--personfolio--senior`,
    );
    screen.getByText("First name: Jerry");
    screen.getByText("Surname: Bloggs");
    screen.getByText("Age: 70");
  });

  it("renders child nodes correctly", () => {
    const { container } = render(
      <PersonFolio firstname="Sandra" surname="Bloggs">
        <span>child node</span>
      </PersonFolio>,
    );
    expect(container.firstChild).toHaveClass(`${settings.prefix}--personfolio`);
    screen.getByText("First name: Sandra");
    screen.getByText("Surname: Bloggs");
    screen.getByText("child node");
  });

  it("renders localized labels correctly", () => {
    const labels = { firstnameLabel: "firstNom", surnameLabel: "surNom" };
    render(
      <InlContext.Provider value={{ labels }}>
        <PersonFolio firstname="Sandra" surname="Bloggs">
          <span>child node</span>
        </PersonFolio>
      </InlContext.Provider>,
    );
    screen.getByText("firstNom: Sandra");
    screen.getByText("surNom: Bloggs");
    screen.getByText("child node");
  });
});
