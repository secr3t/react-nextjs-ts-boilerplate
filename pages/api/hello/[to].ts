import { NextApiRequest, NextApiResponse } from 'next';
import { Data } from '../../../interfaces';

interface ResponseError {
  message: string;
}

const helloHandler = (
  req: NextApiRequest,
  res: NextApiResponse<Data | ResponseError>,
): void => {
  const { query } = req;
  const { to } = query;
  const toValue: string | undefined = Array.isArray(to) ? to[0] : to;

  // User with id exists
  return to !== undefined
    ? res.status(200).json({ message: `hello ${toValue}` })
    : res.status(400).json({ message: 'invalid query' });
};

export default helloHandler;
