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
router.post('/', Problem_post) 
router.get('/:id', Problem_get_one)
router.get('/getUser/:id', Problem_get_user)
router.get('/getBureau/:id', Problem_get_bureau)
router.put('/:id', Problem_put)
router.delete('/:id', Problem_delete)

module.exports = router