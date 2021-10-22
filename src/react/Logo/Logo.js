import React from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';
import settings from '../settings';

const Logo = ({ children, className, size, ...other }) => {
  const styleClass = cx(
    `${settings.prefix}--logo`,
    {
      [`${settings.prefix}--logo--large`]: size === 'large',
      [`${settings.prefix}--logo--medium`]: size === 'medium',
      [`${settings.prefix}--logo--small`]: size === 'small',
    },
    className
  );
  return (
    <div className={styleClass} {...other}>
      {children}
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
  /**
   * Specify an optional size for the Logo. Defaults to 'medium'
   */
  size: PropTypes.oneOf(['small', 'medium', 'large']),
};

Logo.defaultProps = {
  size: 'medium',
  className: undefined,
};

export default Logo;
