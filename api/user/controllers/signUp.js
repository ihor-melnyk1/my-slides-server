import md5 from 'md5';
import saveUser from '../queries/saveUser';
import getUserByEmail from '../queries/getUserByEmail';

import { generateToken } from '../../../token';
import getUserInfo from '../../../utils/getUserInfo';

export default async (req, res) => {
  try {
    const { name, email, password } = req.body;
    const existingUser = await getUserByEmail(email);

    if (existingUser) {
      const errors = {
        email: 'emailInUse',
      };
      return res.status(400).send({ errors });
    }

    const user = await saveUser({ name, email, password: md5(password) });
    const token = generateToken({ id: user._id });
    return res.status(200).send({
      token,
      user: getUserInfo(user),
    });
  } catch (e) {
    return res.status(500).send(e.message);
  }
};
