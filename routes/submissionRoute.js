const router = require('express').Router()
const {
    submission_post,
    submission_get,
    submission_get_user,
    submission_get_task,
    submission_get_one,
    submission_put,
    submission_delete
} = require('../controller/SubmissionController')

router.get('/', submission_get)
router.post('/add', submission_post)
router.get('/getOne', submission_get_one)
router.get('/getUser', submission_get_user)
router.get('/getTask', submission_get_task)
router.put('/', submission_put)
router.delete('/:id', submission_delete)

module.exports = router