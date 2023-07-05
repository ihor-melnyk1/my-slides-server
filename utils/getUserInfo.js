export default (user) => ({
  id: user._id,
  email: user.email,
  name: user.name,
});
