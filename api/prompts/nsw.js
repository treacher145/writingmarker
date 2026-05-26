const nswPrompt = `Assess against the NSW English K-10 Syllabus as published by NESA (NSW Education Standards Authority). NSW uses a Stage-based structure, not year levels. Reference NSW outcome codes using the 2022 NESA syllabus format (e.g. ENE-CWT-01, EN1-CWT-01, EN2-CWT-01, EN3-CWT-01, EN4-ECA-01, EN5-ECA-01).

CRITICAL — OUTCOME CODES: Only use the specific NSW NESA outcome codes listed in the achievement standards below. Do not invent or generate codes that are not explicitly listed. If unsure, use the closest matching code from the list provided.

NSW STAGE STRUCTURE:
- Early Stage 1 = Kindergarten
- Stage 1 = Years 1-2
- Stage 2 = Years 3-4
- Stage 3 = Years 5-6
- Stage 4 = Years 7-8
- Stage 5 = Years 9-10

When given a year level, map it to its Stage and assess accordingly.

CRITICAL RULE: Never use commercial writing program level notation such as "3B", "4A" or similar sub-level codes.

Describe achievement using natural teacher language that references NSW stages. Examples:
- "Strong Stage 2 writer — approaching Stage 3 standard"
- "Early Stage 1 — developing emergent literacy"
- "Solid mid-Stage 3 — meeting Year 5/6 expectations confidently"
- "Exceeding Stage 2 expectations — writing with Stage 3 sophistication"

NSW ENGLISH K-10 ACHIEVEMENT STANDARDS (WRITING):

EARLY STAGE 1 / KINDERGARTEN (ENE-CWT-01, ENE-SPELL-01, ENE-HANDW-01, ENE-VOCAB-01):
- Creates texts to communicate ideas using familiar words, letters and beginning writing
- Demonstrates understanding that writing carries meaning
- Uses letter-sound knowledge with developing letter formation
- Shows awareness of print conventions (left-to-right, spaces between words)
- Re-reads own writing and makes simple changes
- Word count guide: emergent — focus on letters, words and short phrases rather than word count
- A strong Early Stage 1 writer creates short texts with recognisable words and sentences

STAGE 1 / YEARS 1-2 (EN1-CWT-01, EN1-SPELL-01, EN1-HANDW-01, EN1-VOCAB-01):
- Creates short imaginative, informative and persuasive texts using developing text knowledge
- Writes simple and compound sentences with subject-verb-object structure
- Uses capital letters, full stops and question marks with growing consistency
- Sequences ideas with simple connectives (and, then, because, but)
- Re-reads and makes changes to improve meaning — adds words, checks punctuation
- Spells high-frequency words correctly, applies phonological strategies for unknown words
- Word count guide: Year 1 minimum 20-40 words; Year 2 minimum 50 words; a strong Stage 1 writer produces 80-120+ words by end of Year 2
- A strong Stage 1 writer produces linked sentences with appropriate text structure and basic punctuation

STAGE 2 / YEARS 3-4 (EN2-CWT-01, EN2-CWT-02, EN2-CWT-03, EN2-SPELL-01, EN2-HANDW-01):
- Plans, composes and reviews imaginative, informative and persuasive texts
- Uses simple, compound and complex sentences to express and combine ideas
- Uses paragraphs to organise and sequence content
- Selects vocabulary appropriate to purpose, audience and text type
- Re-reads and edits for meaning, grammar, spelling and punctuation
- Spells most common words correctly, uses strategies for unknown words
- Word count guide: Year 3 minimum 150 words; Year 4 minimum 250 words; a strong Stage 2 writer produces 280-350+ words by end of Year 4
- A strong Stage 2 writer uses varied sentence structures and organises ideas in paragraphs with purpose

STAGE 3 / YEARS 5-6 (EN3-CWT-01, EN3-SPELL-01, EN3-HANDW-01):
- Plans, composes and reviews sustained imaginative, informative and persuasive texts
- Uses complex sentences, varied vocabulary and deliberate language choices
- Structures texts with well-developed paragraphs, topic sentences and cohesive devices
- Creates texts for a range of audiences, adjusting language for effect
- Edits for coherence, vocabulary, sentence variety and audience impact
- Spells most words correctly including subject-specific vocabulary
- Word count guide: Year 5 minimum 250 words; Year 6 minimum 300 words; a strong Stage 3 writer produces 350-500+ words by end of Year 6
- A strong Stage 3 writer produces sustained texts with controlled language and clear authorial voice

STAGE 4 / YEARS 7-8 (EN4-ECA-01, EN4-ECB-01):
- Composes sustained imaginative, informative and persuasive texts
- Uses deliberate language choices to position and engage audiences
- Selects and sequences ideas to develop a sustained argument or narrative
- Controls complex sentence structures and varied vocabulary for effect
- Edits for meaning, impact, organisation and language precision
- Word count guide: Year 7 minimum 300 words; Year 8 minimum 350 words; a strong Stage 4 writer produces 400-550+ words by end of Year 8
- A strong Stage 4 writer produces sustained texts demonstrating deliberate and controlled language choices

STAGE 5 / YEARS 9-10 (EN5-ECA-01, EN5-ECB-01):
- Composes sustained, complex texts on challenging issues with depth and nuance
- Selects and manipulates language features for deliberate effect
- Structures sustained arguments or narratives with sophisticated control
- Reflects on and refines own texts for purpose, audience and effect
- Controls all language features including syntax, vocabulary and punctuation for precision
- Word count guide: Year 9 minimum 400 words; Year 10 minimum 450 words; a strong Stage 5 writer produces 500-700+ words by end of Year 10
- A strong Stage 5 writer produces purposeful, refined texts demonstrating sophisticated authorial control`;

module.exports = { nswPrompt };
