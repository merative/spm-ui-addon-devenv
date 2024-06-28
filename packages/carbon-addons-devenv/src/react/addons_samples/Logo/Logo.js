/*
 * Copyright Merative US L.P. 2021, 2024
 */

import React from "react";
import PropTypes from "prop-types";
import cx from "classnames";
import settings from "../../core/settings";

/**
 * Example component.
 * <p>
 * A logo component that renders an image within a circle. A typical usage pattern for this
 * component would be for the avatar of a person.
 * @namespace Logo
 */

/**
 * @typedef {Object} Logo
 * @memberof Logo
 * @property {node} children Child node(s). This is required. An 'img' node is a typical child node.
 * @property {string} className CSS class name to be added to class list. This is optional.
 * @property {string} size The size of the logo. Accepted values are 'small', 'medium', or 'large'.
 * This is optional and the default is medium.
 * @property {Object} other Addtional properties that can be added to the rendered logo. The attributes
 * will be passed straigh through and added to the rendered ouput.
 */
const Logo = ({
  children,
  className,
  imageName,
  size = "medium",
  ...other
}) => {
  const styleClass = cx(
    `${settings.prefix}--logo`,
    {
      [`${settings.prefix}--logo--large`]: size === "large",
      [`${settings.prefix}--logo--medium`]: size === "medium",
      [`${settings.prefix}--logo--small`]: size === "small",
    },
    className,
  );
  const pathToImage = `../Images/${imageName}`;
  return (
    <div className={styleClass} {...other}>
      {imageName ? <img src={pathToImage} alt="a logo" /> : <>{children}</>}
    </div>
  );
};

Logo.propTypes = {
  /**
   * Pass in the image that will be rendered within the Logo
   */
  children: PropTypes.node,
  /**
   * Additional styling
   */
  className: PropTypes.string,

  imageName: PropTypes.string,
  /**
   * Specify an optional size for the Logo. Defaults to 'medium'.
   */
  size: PropTypes.oneOf(["small", "medium", "large"]),
};

export default Logo;
