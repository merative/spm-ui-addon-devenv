import React from "react";
import PersonFolio from "../src/react/addons_samples/PersonFolio/PersonFolio";
import settings from "../src/react/core/settings";

// 👇 We create a “template” of how args map to rendering
const Template = (args) => (
  <div className="spm-custom-component">
    {" "}
    <PersonFolio firstname="Mary" surname="Bloggs" {...args} />
  </div>
);

// 👇 Each story then reuses that template

export const Child = Template.bind({});

Child.args = {
  age: "12",
};

export const YoungAdult = Template.bind({});

YoungAdult.args = {
  age: "20",
};

export const Adult = Template.bind({});

Adult.args = {
  age: "32",
};

export const Senior = Template.bind({});

Senior.args = {
  age: "71",
};

export const PersonFolioStory = () => {
  return (
    <div className="spm-custom-component">
      <div className={`${settings.prefix}--grid`}>
        <div className={`${settings.prefix}--row`}>
          <div className={`${settings.prefix}--col`}>
            <PersonFolio firstname="Dave" surname="Bloggs" age="12" />
          </div>
        </div>

        <div className={`${settings.prefix}--row`}>
          <div className={`${settings.prefix}--col`}>
            <PersonFolio firstname="Mary" surname="Bloggs" age="24" />
          </div>
        </div>

        <div className={`${settings.prefix}--row`}>
          <div className={`${settings.prefix}--col`}>
            <PersonFolio firstname="Ann" surname="Bloggs" age="47" />
          </div>
        </div>

        <div className={`${settings.prefix}--row`}>
          <div className={`${settings.prefix}--col`}>
            <PersonFolio firstname="Peter" surname="Smith" age="73" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default {
  title: "Person Folio Story",
  component: PersonFolio,
};
