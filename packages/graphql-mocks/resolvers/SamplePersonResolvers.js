
const { personsData } = require('./sampleData/samplePeopleData');

const SamplePersonResolver = {
   Query: {
     persons: personsData,     
   }
 }

module.exports = SamplePersonResolver