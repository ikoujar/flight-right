import type { NextApiRequest, NextApiResponse } from 'next';
import { citizensPagination } from '../../../../utils/dataProvider';

/**
 * Paginate the citizens of a specific country.
 * @param req
 * @param res
 */
export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const { code, page, q } = req.query;
  try {
    const data = await citizensPagination(
      code!.toString(),
      page ? parseInt(page.toString()) : 1,
      q?.toString()
    );
    res.status(200).json({ data });
  } catch (e) {
    res.status(500).json({ error: 'Something went wrong!' });
  }
}
