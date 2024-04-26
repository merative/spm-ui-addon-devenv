const SamplePersonResolvers = require("./SamplePersonResolvers");
const SampleLogoResolvers = require("./SampleLogoResolvers");

const Resolvers = [
  // Sample resolvers here
  SamplePersonResolvers,
  SampleLogoResolvers,
  // add your custom resolvers here and put the data
  // into the JSON data into the 'data' folder.
];

module.exports = {
  Resolvers,
};
