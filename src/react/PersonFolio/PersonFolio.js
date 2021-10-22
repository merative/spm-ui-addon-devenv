import React from 'react';
import PropTypes from "prop-types";
import cx from 'classnames';
import settings from '../settings';

const PersonFolio = ({ children, className, age, ...other }) => {
    const styleClass = cx(
      `${settings.prefix}--personfolio`,
      {
        [`${settings.prefix}--personfolio--child`]: age < 18,
        [`${settings.prefix}--personfolio--youngadult`]: age >= 18 && age < 25,
        [`${settings.prefix}--personfolio--adult`]: age >= 25 && age < 65,
        [`${settings.prefix}--personfolio--senior`]: age >= 65,
      },
      className
    );

    const {firstname, surname} = other;
    return (
      <div className={styleClass} {...other}>
          <p>First name:  {firstname}</p>
          <p>Surname:  {surname}</p>
          <p>Age: {age}</p>
        {children}
      </div>
    );
  };


  PersonFolio.propTypes = {
    /**
     * Pass in the image that will be rendered within the Avatar
     */
    children: PropTypes.node,
    
    /**
     * Additional styling
     */
    className: PropTypes.string,
 
    /**
     * Additional styling
     */
     age: PropTypes.number,

  };
  
  PersonFolio.defaultProps = {
    className: undefined,
    children: undefined,
    age: undefined,
  };

export default PersonFolio;