export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  const ANTHROPIC_API_KEY = process.env.ANTHROPIC_API_KEY;

  if (!ANTHROPIC_API_KEY) {
    return res.status(500).json({ error: { message: 'API key not configured.' } });
  }

  try {
    const isTranscription = req.body.transcription === true;
    const maxTokens = isTranscription ? 2000 : 1500;

    const response = await fetch('https://api.anthropic.com/v1/messages', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'x-api-key': ANTHROPIC_API_KEY,
        'anthropic-version': '2023-06-01'
      },
      body: JSON.stringify({
        model: 'claude-sonnet-4-5',
        max_tokens: maxTokens,
        system: req.body.system,
        messages: req.body.messages
      })
    });

    const data = await response.json();
    return res.status(response.ok ? 200 : response.status).json(data);

  } catch (error) {
    return res.status(500).json({ error: { message: error.message } });
  }
}
