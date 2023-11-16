const router = require('express').Router()
const {
    Problem_post,
    Problem_get,
    Problem_get_user,
    Problem_get_bureau,
    Problem_get_one,
    Problem_put,
    Problem_delete
} = require('../controller/ProblemController')

router.get('/', Problem_get)
router.post('/add', Problem_post)
router.get('/getOne', Problem_get_one)
router.get('/getUser', Problem_get_user)
router.get('/getBureau', Problem_get_bureau)
router.put('/', Problem_put)
router.delete('/:id', Problem_delete)

module.exports = router