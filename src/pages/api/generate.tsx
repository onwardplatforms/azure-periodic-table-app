import axios from 'axios';
import type { NextApiRequest, NextApiResponse } from 'next';

const handleRequest = async (req: NextApiRequest, res: NextApiResponse) => {
  try {
    const response = await axios.post('https://api.openai.com/v1/chat/completions', req.body, {
      headers: {
        'Authorization': `Bearer ${process.env.OPENAI_API_KEY}`,
        'Content-Type': 'application/json',
      },
    });
    res.status(200).json(response.data);
  } catch (error) {
    console.log(error)
    res.status(401).json({ error: 'Request failed' });
  }
};

export default handleRequest;