/**
 * Vercel Serverless Function for /api/contact (Root level)
 */
export default async function handler(req, res) {
  res.setHeader('Access-Control-Allow-Credentials', 'true');
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET,OPTIONS,POST');
  res.setHeader(
    'Access-Control-Allow-Headers',
    'X-CSRF-Token, X-Requested-With, Accept, Accept-Version, Content-Length, Content-MD5, Content-Type, Date, X-Api-Version'
  );

  if (req.method === 'OPTIONS') {
    return res.status(200).end();
  }

  if (req.method === 'GET') {
    return res.status(200).json({ status: 'ok', service: 'Basim Qamar Contact API' });
  }

  if (req.method !== 'POST') {
    return res.status(405).json({ detail: 'Method not allowed' });
  }

  try {
    const body = typeof req.body === 'string' ? JSON.parse(req.body) : req.body || {};
    const { full_name, email, subject, message, website } = body;

    if (website && website.trim() !== '') {
      return res.status(200).json({
        success: true,
        message: 'Message received.',
        submission_id: Math.floor(1000 + Math.random() * 9000),
      });
    }

    if (!full_name || !full_name.trim()) {
      return res.status(422).json({ detail: 'Full name is required.' });
    }
    if (!email || !email.trim()) {
      return res.status(422).json({ detail: 'Email address is required.' });
    }
    if (!subject || !subject.trim()) {
      return res.status(422).json({ detail: 'Subject is required.' });
    }
    if (!message || !message.trim()) {
      return res.status(422).json({ detail: 'Message content is required.' });
    }

    const submission_id = Math.floor(10000 + Math.random() * 90000);

    return res.status(201).json({
      success: true,
      message: 'Thank you! Your message has been received. Basim will get back to you shortly.',
      submission_id,
    });
  } catch (err) {
    console.error('Contact API Error:', err);
    return res.status(500).json({ detail: 'Internal server error processing contact submission.' });
  }
}
