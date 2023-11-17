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
router.post('/',submission_post)
router.get('/:id', submission_get_one)
router.get('/getUser/:id', submission_get_user)
router.get('/getTask/:id', submission_get_task)
router.put('/:id', submission_put)
router.delete('/:id', submission_delete)

module.exports = router