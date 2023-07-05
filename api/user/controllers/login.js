import md5 from 'md5';

import getUserByEmail from '../queries/getUserByEmail';
import { generateToken } from '../../../token';
import getUserInfo from '../../../utils/getUserInfo';

export default async (req, res) => {
  try {
    const { email, password } = req.body;
    const user = await getUserByEmail(email);
    if (!user) {
      const errors = {
        email: 'User not found.',
      };
      return res.status(400).send({ errors });
    }
    console.log(md5('ewq12345'));
    if (md5(password) !== user.password) {
      const errors = {
        password: 'Password is wrong.',
      };
      return res.status(400).send({ errors });
    }

    const token = generateToken({ id: user._id });
    res.status(200).send({
      token,
      user: getUserInfo(user),
    });
  } catch (e) {
    res.status(500).send(e);
  }
};
