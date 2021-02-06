let posts = require('./data.json')

const getAllPosts = (req, res) => {
  res.status(200).json(posts)
}

const deletePosts = (req, res) => {
  posts.posts = posts.posts.filter((item)=> item.id != req.params.id )
  res.json({message: "Delete"}) 
}

const createpost = (req, res) => {
  const newPosts = {
    id: Date.now(),
    ...req.body
  }
  posts.posts.push(newPosts)
  res.status(201).json(newPosts)
  
}
module.exports = {getAllPosts, deletePosts, createpost}