
const { personsData } = require('./data/samplePeopleData');

const SamplePersonResolver = {
   Query: {
     persons: personsData,     
   }
 }

module.exports = SamplePersonResolver