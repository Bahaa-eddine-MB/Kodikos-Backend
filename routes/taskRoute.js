const router = require('express').Router()
const {
    task_post,
    tasks_get,
    tasks_get_user,
    tasks_get_project,
    tasks_get_one,
    task_put,
    task_delete,
    taskSearch_get
} = require('../controller/TaskController')

router.get('/', tasks_get)
router.post('/', task_post)
router.get('/:id', tasks_get_one)
router.get('/getUser/:id', tasks_get_user)
router.get('/getProject/:id', tasks_get_project)
router.put('/:id', task_put)
router.delete('/:id', task_delete)
router.get('/search/:id', taskSearch_get)

module.exports = router