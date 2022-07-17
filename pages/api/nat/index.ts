import type { NextApiRequest, NextApiResponse } from 'next';
import { countries } from '../../../utils/dataProvider';

/**
 * Get countries list.
 * @param req
 * @param res
 */
export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  try {
    const data = await countries();
    res.status(200).json({ data });
  } catch (e) {
    res.status(500).json({ error: 'Something went wrong!' });
  }
}

