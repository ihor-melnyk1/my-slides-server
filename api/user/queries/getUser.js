import User from '../model';

export default (_id) => User.findById(_id);
