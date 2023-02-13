import React from 'react';
import Footer from 'gatsby-theme-carbon/src/components/Footer';
import {
  logo,
} from 'gatsby-theme-carbon/src/components/Footer/Footer.module.scss';

const Content = ({ buildTime }) => (
  <>
    <p>
      Docs last updated: {buildTime}
      <br />
      &copy; Merative US L.P. 2021, 2023
      <br />
      Merative is a trademark of Merative US L.P. in the United States and other countries.
    </p>
  </>
);

const links = {
  firstCol: [
   // { href: 'https://github.com/curam-spm-devops/wh-support-docs/', linkText: 'GitHub' },
  ],
  secondCol: [
    // { href: 'https://ibm.com/design', linkText: 'Shadowed link' },
    // { href: 'https://ibm.com/design', linkText: 'Shadowed link' },
    // { href: 'https://ibm.com/design', linkText: 'Shadowed link' },
    // { href: 'https://ibm.com/design', linkText: 'Shadowed link' },
  ],
};

const Logo = () => (
  <svg
    className={logo}
    enable-background="new 0 0 425 205"
    viewBox="0 0 425 205"
    xmlns="http://www.w3.org/2000/svg"
    width="160"
  >
    <linearGradient
      id="a"
      gradientUnits="userSpaceOnUse"
      x1="207.7505"
      x2="318.9948"
      y1="71.0289"
      y2="71.0289"
    >
      <stop offset="0" stop-color="#90f" />
      <stop offset="1" stop-color="#fa1e32" />
    </linearGradient>
    <path
      d="m318.99 98.84c0-30.72-24.9-55.62-55.62-55.62s-55.62 24.9-55.62 55.62h7.46c0-26.6 21.56-48.17 48.17-48.17 26.6 0 48.17 21.56 48.17 48.17z"
      fill="url(#a)"
    />
    <path
      d="m103.53 135.48v25.7h-7.24v-26c0-5.39-4.37-9.76-9.76-9.76-5.14 0-9.36 3.98-9.73 9.03v26.74h-7.17v-26.74c-.38-5.05-4.59-9.03-9.73-9.03-5.39 0-9.76 4.37-9.76 9.76v26h-7.24v-25.7c0-9.37 7.6-16.97 16.97-16.97 5.42 0 10.24 2.54 13.35 6.5 3.11-3.96 7.93-6.5 13.35-6.5 9.36.01 16.96 7.6 16.96 16.97zm79.43-16.1c-9.37-.03-16.97 7.6-16.97 16.97v24.83h7.24v-24.93c0-5.39 4.5-9.67 10.14-9.82 2.74-.08 5.76.13 5.76.13l.4-6.96s-2.25-.2-6.57-.22zm-33.02 5.58c3.85 4.3 5.78 9.47 5.78 15.51 0 1.05-.08 2.14-.25 3.24h-34.85c.72 3.72 2.43 6.6 5.12 8.65s6 3.08 9.94 3.08c5.49 0 9.48-2.02 11.98-6.07l6.15 3.49c-4.05 6.27-10.15 9.4-18.3 9.4-6.6 0-11.96-2.06-16.09-6.2-4.13-4.13-6.2-9.36-6.2-15.68 0-6.27 2.02-11.48 6.07-15.64s9.29-6.24 15.72-6.24c6.1.02 11.08 2.17 14.93 6.46zm-1.54 12.44c-.61-3.94-2.16-6.93-4.66-8.98s-5.41-3.08-8.73-3.08c-3.88 0-7.1 1.1-9.65 3.29s-4.13 5.12-4.74 8.77zm84.72-10.82h14.22v34.6h7.24v-34.6h14.14v-6.99h-35.6zm45.54 34.6h7.24v-41.58h-7.24zm103.38-17.46h-34.85c.72 3.72 2.42 6.6 5.12 8.65 2.69 2.05 6 3.08 9.94 3.08 5.49 0 9.48-2.02 11.98-6.07l6.15 3.49c-4.05 6.27-10.15 9.4-18.3 9.4-6.6 0-11.96-2.06-16.09-6.2-4.13-4.13-6.2-9.36-6.2-15.68 0-6.27 2.02-11.48 6.07-15.64s9.29-6.24 15.72-6.24c6.1 0 11.07 2.15 14.93 6.45 3.85 4.3 5.78 9.47 5.78 15.51 0 1.06-.08 2.14-.25 3.25zm-7.07-6.32c-.61-3.94-2.16-6.93-4.66-8.98-2.49-2.05-5.41-3.08-8.73-3.08-3.88 0-7.1 1.1-9.65 3.29s-4.13 5.12-4.74 8.77zm-184.56 23.78h7.82l13.06-33.76 13.06 33.76h7.82s-14.85-37.2-15.69-39.23c-.84-2.02-2.85-3.44-5.18-3.44s-4.37 1.41-5.18 3.44-15.71 39.23-15.71 39.23zm119.79-2.36c.81 2.03 2.85 3.44 5.18 3.44s4.35-1.41 5.18-3.44c.84-2.02 15.69-39.23 15.69-39.23h-7.82l-13.06 33.76-13.06-33.76h-7.82c.01.01 14.9 37.21 15.71 39.23z"
      fill="#fff"
    />
  </svg>
);


const CustomFooter = () => <Footer links={links} Content={Content} Logo={Logo} />;

export default CustomFooter;
