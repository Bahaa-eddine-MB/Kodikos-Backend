const router = require('express').Router()
const {
    Project_post,
    Project_get,
    Project_get_one,
    Project_put,
    Project_delete
} = require('../controller/ProjectController')

router.get('/', Project_get)
router.post('/add', Project_post)
router.get('/getOne', Project_get_one)
router.put('/', Project_put)
router.delete('/:id', Project_delete)

module.exports = router