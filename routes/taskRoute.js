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
router.get('/getOne', tasks_get_one)
router.get('/getUser', tasks_get_user)
router.get('/getProject', tasks_get_project)
router.put('/', task_put)
router.delete('/:id', task_delete)
router.get('/:id', taskSearch_get)

module.exports = router