const {Router} = require('express') 
const router = Router()
const getAll  = require('./posts')

router.get('/server', getAll.getAllPosts)

router.post('/server', getAll.createpost)

router.delete('/server/:id', getAll.deletePosts)

module.exports = router