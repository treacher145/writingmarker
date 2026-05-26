const { buildAcPrompt } = require('./ac-v9.js');

const ntPrompt = buildAcPrompt('the Northern Territory') + `

CRITICAL — NT CONTEXT:
The Northern Territory has a uniquely diverse student population. Many NT students are Aboriginal and/or Torres Strait Islander. Many speak English as an additional language or dialect (EAL/D), with some speaking English as a third or fourth language. This must profoundly shape how you interpret writing samples.

EAL/D ASSESSMENT PRINCIPLES FOR NT:
- Language transfer features (grammar structures from home language appearing in English) are NOT errors — they are evidence of a multilingual developing writer
- Code-switching and use of home language features in English writing demonstrates metalinguistic awareness, not deficit
- Do not penalise for English-specific features (articles, prepositions, verb agreement) that reflect the student's language background
- Focus on meaning-making, ideas, and narrative/textual control — these often develop ahead of surface English accuracy in EAL/D writers
- A student who constructs a compelling narrative with developing English syntax may be performing at a higher level than surface features suggest
- Where EAL/D is flagged, explicitly note this in your assessment and explain how it informs your judgement

ABORIGINAL AND TORRES STRAIT ISLANDER CULTURAL RESPONSIVENESS:
- Writing may reflect oral storytelling traditions — circular narrative structures, community-centred perspectives, and non-linear time are culturally valid, not structurally deficient
- References to Country, community, and cultural knowledge are evidence of rich content and voice
- Celebrate cultural knowledge and perspective as a writing strength`;

module.exports = { ntPrompt };
