const { curriculumRegistry } = require('./curriculum.js');
const { buildSystemPrompt } = require('./prompts/shared.js');

module.exports = async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  const ANTHROPIC_API_KEY = process.env.ANTHROPIC_API_KEY;
  if (!ANTHROPIC_API_KEY) {
    return res.status(500).json({ error: { message: 'API key not configured.' } });
  }

  try {
    const { curriculumKey, nextGenre, messages, transcription, system } = req.body;

    const isTranscription = transcription === true;
    const maxTokens = isTranscription ? 2000 : 2500;

    let systemPrompt;
    if (isTranscription) {
      // Transcription requests send their own system prompt directly
      systemPrompt = system;
    } else {
      const curriculum = curriculumRegistry[curriculumKey];
      if (!curriculum) {
        return res.status(400).json({ error: { message: `Unknown curriculum key: ${curriculumKey}` } });
      }
      systemPrompt = buildSystemPrompt(curriculum.prompt, nextGenre);
    }

    const response = await fetch('https://api.anthropic.com/v1/messages', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'x-api-key': ANTHROPIC_API_KEY,
        'anthropic-version': '2023-06-01'
      },
      body: JSON.stringify({
        model: 'claude-sonnet-4-6',
        max_tokens: maxTokens,
        system: systemPrompt,
        messages
      })
    });

    const data = await response.json();
    return res.status(response.ok ? 200 : response.status).json(data);

  } catch (error) {
    return res.status(500).json({ error: { message: error.message } });
  }
};
