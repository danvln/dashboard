import React from "react";

import { storiesOf } from "@storybook/react";

import Icon from "components/icon";
import Button, { ButtonMode, ButtonSize, Props as ButtonProps } from "../index";

const commonProps = {
  className: "mr-5"
};

interface RowProps {
  title: string;
  children?: React.ReactNode;
}

const Row = ({
  title,
  children,
  ...rest
}: RowProps & Omit<ButtonProps, "children">) => (
  <>
    <h2>{title}</h2>
    <div>
      <Button {...commonProps} {...rest}>
        {children || "Regular"}
      </Button>
      <Button {...commonProps} {...rest} size={ButtonSize.Small}>
        {children || "Small"}
      </Button>
      <Button {...commonProps} {...rest} outline>
        {children || "Outline"}
      </Button>
      <Button {...commonProps} {...rest} outline size={ButtonSize.Small}>
        {children || "Outline Small"}
      </Button>
    </div>
  </>
);

storiesOf("Components.Button", module).add("Variants", () => (
  <div>
    <Row title="Primary Button" mode={ButtonMode.Primary} />
    <Row title="Secondary Button" mode={ButtonMode.Secondary} />

    <Row title="Disabled Button" mode={ButtonMode.Primary} disabled />

    <Row title="Icon Text Button" mode={ButtonMode.Primary}>
      Button <Icon name="heart" position="right" />
    </Row>
    <Row title="Icon Button" mode={ButtonMode.Primary} aria-label="Icon Button">
      <Icon name="heart" />
    </Row>
  </div>
));