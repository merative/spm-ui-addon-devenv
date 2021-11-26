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

import React from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';
import settings from '../../core/settings';

 /**
  * Example component.
  * <p>
  * A logo component that renders an image within a circle. A typical usage pattern for this component
  *  would be for the avatar of a person.
  * @namespace Logo
  */

/**
 * @typedef {Object} Logo
 * @memberof Logo
 * @property {node} children Child node(s). This is required. An 'img' node i a typical child node 
 * @property {string} className CSS class name to be added to class list. This is optional.
 * @property {string} size The size of logo. Accepted values are 'small', 'mdeium', or 'large'.
 * This is optional and the default is medium.
 * @property {Object} other Addtional properties that can be added to the rendered logo. The attributes
 * will be passed straigh through and added to the rendered ouput.
 */
const Logo = ({ children, className, imageName, size, ...other }) => {
  const styleClass = cx(
    `${settings.prefix}--logo`,
    {
      [`${settings.prefix}--logo--large`]: size === 'large',
      [`${settings.prefix}--logo--medium`]: size === 'medium',
      [`${settings.prefix}--logo--small`]: size === 'small',
    },
    className
  );
  const pathToImage = `../Images/${imageName}`;
  return (
    <div className={styleClass} {...other}>
      {imageName ? (<img src={pathToImage} alt="a logo" />) : <>{children}</>}
    </div>
  );
};

Logo.propTypes = {
  /**
   * Pass in the image that will be rendered within the Logo
   */
  children: PropTypes.node.isRequired,
  /**
   * Additional styling
   */
  className: PropTypes.string,

  imageName: PropTypes.string,
  /**
   * Specify an optional size for the Logo. Defaults to 'medium'
   */
  size: PropTypes.oneOf(['small', 'medium', 'large']),
};

Logo.defaultProps = {
  size: 'medium',
  className: undefined,
  imageName: undefined
};

export default Logo;
