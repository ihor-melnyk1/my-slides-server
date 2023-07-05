import jwt from 'jsonwebtoken';
import getUser from '../api/user/queries/getUser';

export default async (req, res, next) => {
  const authorizationHeader = req.headers.authorization;
  const token = authorizationHeader && authorizationHeader.split(' ')[1];
  if (!token) return res.sendStatus(401);

  try {
    const { id } = jwt.verify(token, process.env.TOKEN_SECRET);
    const user = await getUser(id);
    res.locals.user = user;
    next();
  } catch (e) {
    return res.status(401).send(e.message);
  }
};
