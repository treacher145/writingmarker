const vicPrompt = `Assess against the Victorian Curriculum F-10 English Version 2.0 (VC2.0), mandatory in Victorian government and Catholic schools from 2025. Reference the Language, Literature, and Literacy strands and Victorian achievement standards by year level. Use Victorian Curriculum Version 2.0 content description codes (format: VC2ExLYxx or VC2ExLAxx).

CRITICAL — OUTCOME CODES: Only use the specific VC2.0 codes listed in the achievement standards below. Do not use old V1.0 VCELY codes. Do not invent codes. If unsure, use the closest matching code from the list provided.

VICTORIAN CURRICULUM V2.0 ACHIEVEMENT STANDARDS FOR ENGLISH (WRITING):

FOUNDATION (VC2EFLY13, VC2EFLY14, VC2EFLY15, VC2EFLA03):
- Creates short texts to explore, record and report ideas and events using familiar words and beginning writing knowledge
- Participates in shared editing for meaning, spelling, capital letters and full stops
- Forms most lower-case and upper-case letters using learnt letter formations
- Understands that texts can take many forms
- Word count guide: emergent — focus on letters, words and short phrases rather than word count
- A strong Foundation writer attempts simple sentences independently with letter-sound awareness

YEAR 1 (VC2E1LY13, VC2E1LY14, VC2E1LY15, VC2E1LA03):
- Creates short narrative and informative texts on personal and learnt topics, including a structure with an opening, middle and conclusion
- Re-reads own texts and discusses possible changes to improve meaning, spelling and punctuation
- Writes words using unjoined lower-case and upper-case letters
- Explores how types of texts are organised according to their purpose
- Word count guide: minimum 2-3 readable sentences; a strong Year 1 writer produces 20-40+ words
- A strong Year 1 writer produces linked sentences on a topic with basic punctuation

YEAR 2 (VC2E2LY11, VC2E2LY12, VC2E2LY13, VC2E2LA03):
- Creates short narrative, informative and persuasive texts for familiar audiences using simple text structures and topic-specific vocabulary
- Re-reads and edits texts for spelling, sentence boundary punctuation and text structure
- Writes words legibly and with growing fluency using unjoined lower-case and upper-case letters
- Identifies how different types of texts are organised differently for purpose
- Word count guide: minimum 50 words; a strong Year 2 writer produces 80-120+ words
- A strong Year 2 writer produces structured texts with sentence variety and appropriate text structure

YEAR 3 (VC2E3LY11, VC2E3LY12, VC2E3LY13, VC2E3LA03):
- Creates narrative, informative and persuasive texts with ideas grouped in simple paragraphs, using topic-specific and precise vocabulary
- Re-reads and edits texts for meaning, appropriate structure, grammatical choices and punctuation
- Writes words using joined letters that are clearly formed and consistent in size
- Describes how different types of texts have different language features and structures depending on purposes
- Word count guide: minimum 150 words; a strong Year 3 writer produces 180-250+ words
- A strong Year 3 writer sequences ideas clearly with growing vocabulary range

YEAR 4 (VC2E4LY10, VC2E4LY11, VC2E4LY12, VC2E4LA03):
- Creates narrative, informative and persuasive texts with relevant, linked ideas for a range of audiences
- Re-reads and edits texts for meaning by adding, deleting or moving words or word groups to improve content and structure
- Writes words using clearly formed joined letters, with developing fluency and automaticity
- Describes how different types of texts have different language features and characteristic stages depending on purposes
- Word count guide: minimum 250 words; a strong Year 4 writer produces 280-350+ words
- A strong Year 4 writer uses language features effectively with clear editing evidence

YEAR 5 (VC2E5LY10, VC2E5LY11, VC2E5LY12, VC2E5LA03):
- Creates different types of texts with relevant, elaborated and sequenced ideas, using text structure appropriate for topic, purpose and audience
- Re-reads and edits own texts and texts of others using agreed criteria for text structures and language features
- Writes legibly, fluently and automatically
- Describes how different types of texts use language features and characteristic stages and phases depending on purposes
- Word count guide: minimum 250 words; a strong Year 5 writer produces 300-400+ words
- A strong Year 5 writer sustains quality and voice across a longer piece

YEAR 6 (VC2E6LY09, VC2E6LY10, VC2E6LY11, VC2E6LA03):
- Creates different types of texts with developed and organised ideas for purpose and audience
- Re-reads and edits own texts and texts of others using agreed criteria and exploring editing choices
- Writes legibly, fluently and automatically for sustained periods
- Explains how different types of texts are typically organised into characteristic stages and phases, recognising how authors often adapt text structures
- Word count guide: minimum 300 words; a strong Year 6 writer produces 350-500+ words
- A strong Year 6 writer experiments deliberately with structure and produces distinctly individual writing

YEAR 7 (VC2E7LY08, VC2E7LY09, VC2E7LY03, VC2E7LA03):
- Creates different types of texts selecting aspects of subject matter and particular language and multimodal elements to convey information and ideas to a specific audience
- Reviews and edits own texts and texts of others by removing repetition, refining ideas, reordering sentences and adding or substituting words for impact and coherence
- Uses spelling rules, base words, suffixes, prefixes and word origins to learn new words and spell them
- Identifies and describes how texts are structured differently depending on their purpose
- Word count guide: minimum 300 words; a strong Year 7 writer produces 350-500+ words
- A strong Year 7 writer selects subject matter and language deliberately for purpose and audience

YEAR 8 (VC2E8LY08, VC2E8LY09, VC2E8LY03, VC2E8LA03):
- Creates different types of texts that raise issues, report events and advance opinions, using deliberate language and textual choices
- Reviews and edits to refine and clarify ideas to improve the effectiveness and coherence of own texts and texts of others
- Explores and uses learnt knowledge to spell technical and academic words consistently and accurately
- Explains how texts are structured depending on their purpose and how language features vary, recognising that some texts are hybrids
- Word count guide: minimum 350 words; a strong Year 8 writer produces 400-550+ words
- A strong Year 8 writer advances opinions through deliberate and controlled language choices

YEAR 9 (VC2E9LY08, VC2E9LY09, VC2E9LY03, VC2E9LA03):
- Creates different types of texts that present a point of view and advance, illustrate or expand ideas, in deliberate consideration of an audience
- Reviews and edits own texts and texts of others to improve clarity, coherence and control over content, organisation, paragraphing, sentence structure and vocabulary
- Uses learnt knowledge to spell accurately and consistently
- Explores the ways that text structures and language features can be adapted and altered according to purpose
- Word count guide: minimum 400 words; a strong Year 9 writer produces 450-600+ words
- A strong Year 9 writer produces sustained, structured arguments with confident language control

YEAR 10 (VC2E10LY08, VC2E10LY09, VC2E10LY03, VC2E10LA03):
- Creates different types of texts that reflect on challenging and complex issues, combining print, multimodal and digital elements for a range of purposes in deliberate consideration of an audience
- Reviews, edits and refines own texts and texts of others for control and coherence of content, organisation, sentence structure and vocabulary to achieve particular purposes and effects
- Uses learnt knowledge of the spelling system to spell words accurately and manipulate standard and non-standard spelling for particular effects
- Analyses text structures and language features and evaluates their effectiveness in achieving their purpose
- Word count guide: minimum 450 words; a strong Year 10 writer produces 500-700+ words
- A strong Year 10 writer produces purposeful, refined texts demonstrating sophisticated control of all language features`;

module.exports = { vicPrompt };
