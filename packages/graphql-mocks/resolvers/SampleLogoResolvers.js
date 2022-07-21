

const { logoData } = require('./sampleData/sampleLogoData');

const SampleLogoResolver = {
   Query: {
     logo: logoData,     
   }
 }

module.exports =  SampleLogoResolver