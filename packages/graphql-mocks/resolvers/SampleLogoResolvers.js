const { logoData } = require("./data/sampleLogoData");

const SampleLogoResolver = {
  Query: {
    logo: logoData,
  },
};

module.exports = SampleLogoResolver;
