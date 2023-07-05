import User from '../model';

export default (email) => User.findOne({ email });
