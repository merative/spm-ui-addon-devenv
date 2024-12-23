# Changelog

## 2.0.0 - TBD ![Cúram 8.1.0 and later](https://img.shields.io/badge/-Cúram_8.1.0%20and%20later-green)

### Added

- IBM Carbon Design System has been upgraded to version 11. You will need to follow the [Carbon 11 upgrade guide](https://carbondesignsystem.com/migrating/guide/overview/) for any custom components you have.
- Upgraded supported version of NodeJS 12 & 14 -> 18 & 20.
- Upgraded node-sass -> sass.
- Added code formatting on commit.
- Added linting on commit.
- Unit tests now run on every commit.
- Fixed build warning caused by missing exports.
- Fixed errors in documentation.
- Updated documentation with Curam supported versions.
- Rearchitected package structure to avoid circular dependencies.
- Changed install command from `npm ci` to `npm install`.

### Removed

Not applicable

## 1.1.0 - 11/11/2022 ![Cúram 8.0.2,Cúram 8.0.1](https://img.shields.io/badge/-Cúram_8.0.2-green)

### Added

This release has the following improvements:

- Better structure of the Apollo Client hooks for the sample addon component in the `carbon-addons-devenv` package.
- Restructured documentation, now including an overview diagram. Improved guidance for customization, both for creating custom pages and for customizing the Case Overview. Improved guidance about creating GraphQL queries.
- The provision of a lightweight mock GraphQL service that serves data from the file system and can be used within this sandboxed environment for testing purposes. You can use the mock GraphQL service to test your custom components before production GraphQL queries development is completed.
- Enablement of the React Development Tools browser extension to view the composition of React JavaScript components on web page with iframes.
- The provision of a tool that shows a breakdown of the generated JavaScript files in terms
  of how much footprint (size in KB) each third-party library contributes to their overall size.
- The introduction of `index_latest` files as a mechanism to convey the most up-to-date-template for index files. You can diff `index_latest` files with your verion of the `index.js` or `index.scss` files to see any differences in the underlying directory structure.

### Removed

Not applicable

## More information

For more information about the React Developer Tools browser extension, see [React Developer Tools](https://chrome.google.com/webstore/detail/react-developer-tools/fmkadmapgofadopljbjfkapdkoienihi?hl=en).

For more information about Cúram, see the [documentation](https://curam-spm-devops.github.io/wh-support-docs/spm/pdf-documentation).

For more information about server-side changes, see the [Cúram release notes](https://www-01.ibm.com/support/docview.wss?uid=swg27037963) for your version.

For more information about the IBM Carbon Design System, see [https://carbondesignsystem.com/](https://carbondesignsystem.com/).

## 1.0.0 - 26/11/2021 ![Cúram 8.0.1](https://img.shields.io/badge/-Cúram_8.0.1-green)

### Added

This initial release enables the rapid development of custom application pages based on IBM Carbon components.

### Removed

Not applicable
