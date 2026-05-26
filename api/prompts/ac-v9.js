function buildAcPrompt(stateLabel) {
  return `Assess against the Australian Curriculum v9.0 as implemented in ${stateLabel}. The curriculum follows AC v9.0 directly. Reference AC:E v9 content description codes.

CRITICAL — OUTCOME CODES: Only use the specific AC v9.0 codes listed in the achievement standards below. Do not invent or generate codes that are not explicitly listed. If unsure, use the closest matching code from the list provided.

AC v9.0 ACHIEVEMENT STANDARDS FOR ENGLISH (WRITING):
Use these standards when assessing. Reference AC9 codes.

FOUNDATION (AC9EFLY06, AC9EFLY08, AC9EFLY12, AC9EFLY13):
- Creates texts using familiar words and beginning writing to communicate ideas
- Demonstrates understanding that writing carries meaning
- Uses letter-sound knowledge with some recognisable letters and words
- Shows left-to-right, top-to-bottom orientation
- Produces some recognisable letters with developing formation
- Word count guide: emergent — focus on letters, words and short phrases rather than word count
- A strong Foundation writer attempts simple sentences with letter-sound awareness

YEAR 1 (AC9E1LY06, AC9E1LY08, AC9E1LY09, AC9E1LA03):
- Creates short imaginative and informative texts using simple text structures
- Writes simple sentences with subject-verb-object structure
- Uses capital letters and full stops with growing consistency
- Applies phonological knowledge to spell simple words
- Re-reads and makes simple changes to improve meaning
- Word count guide: minimum 2-3 readable sentences; a strong Year 1 writer produces 20-40+ words
- A strong Year 1 writer produces linked sentences on a topic with basic punctuation

YEAR 2 (AC9E2LY06, AC9E2LY08, AC9E2LY09, AC9E2LA03):
- Creates short imaginative, informative and persuasive texts
- Uses simple and compound sentences to sequence ideas
- Applies knowledge of common letter patterns and high-frequency words
- Uses appropriate punctuation including capital letters, full stops and question marks
- Re-reads and edits for spelling and punctuation
- Word count guide: minimum 50 words; a strong Year 2 writer produces 80-120+ words
- A strong Year 2 writer produces structured texts with sentence variety and appropriate text structure

YEAR 3 (AC9E3LY06, AC9E3LY08, AC9E3LY09, AC9E3LA03):
- Plans, creates and reviews imaginative, informative and persuasive texts
- Uses simple, compound and emerging complex sentences
- Begins to use paragraphs to organise ideas
- Selects vocabulary for purpose and audience
- Spells most common words correctly and attempts unknown words using strategies
- Word count guide: minimum 150 words; a strong Year 3 writer produces 180-250+ words
- A strong Year 3 writer sequences ideas clearly with growing vocabulary range

YEAR 4 (AC9E4LY06, AC9E4LY08, AC9E4LY09, AC9E4LA03):
- Plans, creates and reviews texts with key information and supporting details
- Uses simple, compound and complex sentences with increasing control
- Uses consistent paragraphing to sequence content
- Selects vocabulary to suit topic and communication purpose
- Re-reads and edits for meaning, grammar and spelling accuracy
- Word count guide: minimum 250 words; a strong Year 4 writer produces 280-350+ words
- A strong Year 4 writer uses language features effectively with clear editing evidence

YEAR 5 (AC9E5LY06, AC9E5LY08, AC9E5LY09, AC9E5LA03):
- Plans, creates and reviews imaginative, informative and persuasive texts
- Uses well-structured paragraphs with topic sentences and supporting detail
- Controls complex sentence structures and verb tenses
- Selects vocabulary for effect and precision
- Edits for flow, organisation and language choices
- Word count guide: minimum 250 words; a strong Year 5 writer produces 300-400+ words
- A strong Year 5 writer sustains quality and voice across a longer piece

YEAR 6 (AC9E6LY06, AC9E6LY08, AC9E6LY09, AC9E6LA03):
- Plans, creates and reviews texts experimenting with text structures and language features
- Uses rhetorical devices, imagery and deliberate language choices
- Creates texts for different audiences with clear sense of purpose
- Edits for coherence, vocabulary, structure and effect
- Word count guide: minimum 300 words; a strong Year 6 writer produces 350-500+ words
- A strong Year 6 writer experiments deliberately with structure and produces individual voice

YEAR 7 (AC9E7LY06, AC9E7LY08, AC9E7LE07, AC9E7LA03):
- Plans, creates and reviews imaginative, informative and persuasive texts
- Selects language, visual and audio features purposefully
- Uses specific rhetorical devices to engage audiences
- Edits for meaning, impact and control of language features
- Word count guide: minimum 300 words; a strong Year 7 writer produces 350-500+ words
- A strong Year 7 writer selects subject matter and language deliberately for purpose and audience

YEAR 8 (AC9E8LY06, AC9E8LY08, AC9E8LE06, AC9E8LA03):
- Creates texts that raise issues, report events and advance opinions
- Uses deliberate language and textual choices throughout
- Selects vocabulary to influence meaning and position the audience
- Experiments with text structures to refine and clarify ideas
- Word count guide: minimum 350 words; a strong Year 8 writer produces 400-550+ words
- A strong Year 8 writer advances opinions through controlled and deliberate language choices

YEAR 9 (AC9E9LY06, AC9E9LE06, AC9E9LY07, AC9E9LA03):
- Creates imaginative, informative and persuasive texts presenting a point of view
- Structures sustained arguments with clear line of reasoning
- Controls complex sentence structures and varied vocabulary
- Reviews and edits for clarity, cohesion and control
- Word count guide: minimum 400 words; a strong Year 9 writer produces 450-600+ words
- A strong Year 9 writer produces sustained, structured arguments with confident language control

YEAR 10 (AC9E10LY06, AC9E10LE08, AC9E10LY07, AC9E10LA03):
- Creates sustained texts on complex issues with depth and nuance
- Reflects on and critiques own texts prior to publishing
- Controls all language features for effect and precision
- Word count guide: minimum 450 words; a strong Year 10 writer produces 500-700+ words
- A strong Year 10 writer produces purposeful, refined texts demonstrating sophisticated control`;
}

module.exports = { buildAcPrompt };
