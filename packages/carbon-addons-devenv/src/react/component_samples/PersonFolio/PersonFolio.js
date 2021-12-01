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

import React, { useContext } from 'react';
import PropTypes from "prop-types";

import cx from 'classnames';
import InlContext from '../../core/InlContext';
import settings from '../../core/settings';

/**
  * An Example component.
  * <p>
  * A PersonFolio component that renders a list of people.
  * @namespace PersonFolio
  */

/**
 * @typedef {Object} PersonFolio
 * @memberof PersonFolio
 * @property {node} children Child node(s). This is optional.
 * @property {string} className CSS class name to be added to class list. This is optional.
 * @property {number} age The person's age. This is optional and there iss no default value.
 * @property {Object} other Addtional properties that can be added to a rendered person. The attributes
 * will be passed straigh through and added to the rendered ouput.
 */
const PersonFolio = ({ children, className, age, ...other }) => {
  const { labels } = useContext(InlContext);
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
    const firstnameLabel = labels && labels.firstnameLabel || "First name";
    const surnameLabel = labels && labels.surnameLabel || "Surname";
    const ageLabel = labels && labels.ageLabel || "Age";
    return (
        // the renderer usually sets the 'data-testid' attribute but where
        // there is a large composition of components it may need to be added at this level
      <div className={styleClass} {...other}>
          <p data-testid="personfolio_firstnameLabel">{firstnameLabel}:  {firstname}</p>
          <p data-testid="personfolio_surnnameLabel">{surnameLabel}:  {surname}</p>
          <p data-testid="personfolio_ageLabel">{ageLabel}: {age}</p>
        {children}
      </div>
    );
  };

  PersonFolio.propTypes = {
    /**
     * Pass in the image that will be rendered within the Logo.
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

  /**
 * Group
 * @typedef {Object} PortFolio
 * @memberof PortFolio
 * @property {node} childeren
 * @property {string} className
 */
export default PersonFolio;