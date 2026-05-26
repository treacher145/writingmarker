const { vicPrompt } = require('./prompts/vic.js');
const { nswPrompt } = require('./prompts/nsw.js');
const { buildAcPrompt } = require('./prompts/ac-v9.js');
const { ntPrompt } = require('./prompts/nt.js');

const curriculumRegistry = {
  VIC: { name: 'Victorian Curriculum (F-10)',           prompt: vicPrompt },
  NSW: { name: 'NSW English K-10 Syllabus',            prompt: nswPrompt },
  QLD: { name: 'Queensland Curriculum (AC v9)',         prompt: buildAcPrompt('Queensland') },
  SA:  { name: 'South Australian Curriculum (AC v9)',   prompt: buildAcPrompt('South Australia') },
  WA:  { name: 'Western Australian Curriculum (AC v9)', prompt: buildAcPrompt('Western Australia') },
  TAS: { name: 'Tasmanian Curriculum (AC v9)',          prompt: buildAcPrompt('Tasmania') },
  ACT: { name: 'ACT Curriculum (AC v9)',                prompt: buildAcPrompt('the ACT') },
  NT:  { name: 'Northern Territory Curriculum (AC v9)', prompt: ntPrompt },
  NAT: { name: 'Australian Curriculum v9.0',            prompt: buildAcPrompt('Australia') },
};

module.exports = { curriculumRegistry };

