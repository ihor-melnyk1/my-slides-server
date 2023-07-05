export default (presentation) => ({
  id: presentation._id,
  name: presentation.name,
  topic: presentation.topic,
  isPublic: presentation.isPublic,
  slides: presentation.slides,
  author: presentation.author,
  createdAt: presentation.createdAt,
  updatedAt: presentation.updatedAt,
  likedUsers: presentation.likedUsers,
});
