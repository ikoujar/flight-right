import type { NextApiRequest, NextApiResponse } from 'next';
import requestIp from 'request-ip';
import dbConnect from '../../../../lib/dbConnect';
import Vote from '../../../../models/vote';
import { countries } from '../../../../utils/dataProvider';

/**
 *
 * @param req
 * @param res
 */
export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  await dbConnect();

  const { code: country } = req.query;


  const voter = requestIp.getClientIp(req);
  try {
    // Check if country exist.
    const countriesArr = await countries();
    if (!countriesArr.find(e => e.code === country)) {
      return res.status(404).json({ error: 'Not Found!' });
    }
    const votes = await Vote.countDocuments({ voter, country });
    if (votes > 0) {
      return res.status(403).json({ error: 'You already voted for this country!' });
    }
    await Vote.create({ voter, country });
    res.status(201).json({
      success: true
    });
  } catch (e) {
    res.status(500).json({ error: 'Something went wrong!' });
  }
}
