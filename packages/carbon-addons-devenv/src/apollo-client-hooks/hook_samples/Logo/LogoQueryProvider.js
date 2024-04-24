/*
 * Copyright Merative US L.P. 2021, 2022
 */

import React from "react";
import PropTypes from "prop-types";
// eslint-disable-next-line import/no-unresolved
import Logo from "devenv_pkg/src/react/addons_samples/Logo/Logo";
// NOTE:
// from custom-carbon-addons package reference to ApolloClientQueryProvider would be he following
// import { ApolloClientQueryProvider } from 'devenv_pkg/src/apollo-client-hooks';
// eslint-disable-next-line import/no-unresolved
import ApolloClientQueryProvider from "devenv_pkg/src/apollo-client-hooks/core/ApolloClientQueryProvider";
import { useGetLogo } from "./LogoQuery";

const LogoQueryProvider = ({ configuration }) => {
  const { data } = useGetLogo(configuration.logoId);
  const propertyName = "logo";
  // dataa in this instance is juts an oject rather than an array
  const logo = (
    <>
      {data && data[propertyName] && (
        <Logo
          key={data[propertyName].logoId}
          imageName={data[propertyName].name}
        />
      )}
    </>
  );

  if (!data) return <></>;

  return (
    <ApolloClientQueryProvider configuration={configuration}>
      {logo}
    </ApolloClientQueryProvider>
  );
};

LogoQueryProvider.propTypes = {
  configuration: PropTypes.object.isRequired,
};

export default LogoQueryProvider;
