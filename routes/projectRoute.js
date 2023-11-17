const router = require('express').Router()
const {
    Project_post,
    Project_get,
    Project_get_one,
    Project_put,
    Project_delete
} = require('../controller/ProjectController')

router.get('/', Project_get)
router.post('/', Project_post)
router.get('/:id', Project_get_one)
router.put('/:id', Project_put)
router.delete('/:id', Project_delete)

module.exports = router