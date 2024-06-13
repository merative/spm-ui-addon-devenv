import React from "react";
import {
  Button,
  Checkbox,
  Column,
  FormGroup,
  RadioButton,
  RadioButtonGroup,
  StructuredListBody,
  StructuredListCell,
  StructuredListHead,
  StructuredListRow,
  StructuredListWrapper,
  Tab,
  Tabs,
  TabList,
  TabPanel,
  TabPanels,
  TextInput,
  Toggle,
} from "@carbon/react";

const createTabOne = () => (
  <div className="some-content">
    Content for first tab goes here.
    <fieldset className="cds--fieldset">
      <legend className="cds--label">Checkbox heading</legend>
      <Checkbox defaultChecked labelText="Checkbox 1" id="checked" />
      <Checkbox labelText="Checkbox 2" id="checked-2" />
    </fieldset>
    <FormGroup legendText="Radio button heading">
      <RadioButtonGroup
        defaultSelected="default-selected"
        legend="Group Legend"
        name="radio-button-group"
        valueSelected="default-selected"
      >
        <RadioButton id="radio-1" labelText="Option 1" value="standard" />
        <RadioButton
          id="radio-2"
          labelText="Option 2"
          value="default-selected"
        />
        <RadioButton id="radio-3" labelText="Option 3" value="disabled" />
      </RadioButtonGroup>
    </FormGroup>
    <Button>Button</Button>
  </div>
);

const createTabTwo = () => (
  <div className="some-content">
    Content for second tab goes here.
    <StructuredListWrapper ariaLabel="Structured list">
      <StructuredListHead>
        <StructuredListRow head tabIndex={0}>
          <StructuredListCell head>ColumnA</StructuredListCell>
          <StructuredListCell head>ColumnB</StructuredListCell>
          <StructuredListCell head>ColumnC</StructuredListCell>
        </StructuredListRow>
      </StructuredListHead>
      <StructuredListBody>
        <StructuredListRow tabIndex={0}>
          <StructuredListCell>Row 1</StructuredListCell>
          <StructuredListCell>Row 1</StructuredListCell>
          <StructuredListCell>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc dui
            magna, finibus id tortor sed, aliquet bibendum augue. Aenean posuere
            sem vel euismod dignissim. Nulla ut cursus dolor. Pellentesque
            vulputate nisl a porttitor interdum.
          </StructuredListCell>
        </StructuredListRow>
        <StructuredListRow tabIndex={0}>
          <StructuredListCell>Row 2</StructuredListCell>
          <StructuredListCell>Row 2</StructuredListCell>
          <StructuredListCell>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc dui
            magna, finibus id tortor sed, aliquet bibendum augue. Aenean posuere
            sem vel euismod dignissim. Nulla ut cursus dolor. Pellentesque
            vulputate nisl a porttitor interdum.
          </StructuredListCell>
        </StructuredListRow>
      </StructuredListBody>
    </StructuredListWrapper>
  </div>
);

const createTabThree = () => (
  <div className="some-content">
    <div>Content for third tab goes here.</div>
    <div>
      <Toggle
        labelText="Toggle element label"
        labelA="Off"
        labelB="On"
        defaultToggled
        id="toggle-1"
      />
    </div>
    <div>
      <TextInput
        helperText="Optional helper text"
        id="test2"
        invalidText="A valid value is required"
        labelText="Text input label"
        placeholder="Placeholder text"
      />
    </div>
  </div>
);

const Alan1Addon = () => (
  <Column lg={16} md={8} sm={4} className="landing-page__r2">
    <Tabs>
      <TabList aria-label="foobar">
        <Tab>Tab label 1</Tab>
        <Tab>Tab label 2</Tab>
        <Tab>Tab label 3</Tab>
      </TabList>
      <TabPanels>
        <TabPanel>{createTabOne()}</TabPanel>
        <TabPanel>{createTabTwo()}</TabPanel>
        <TabPanel>{createTabThree()}</TabPanel>
      </TabPanels>
    </Tabs>
  </Column>
);

export default Alan1Addon;
