const router = require('express').Router()
const {
    Bureau_post,
    Bureau_get,
    Bureau_get_user,
    Bureau_get_one,
    Bureau_put,
    Bureau_delete
} = require('../controller/BureauController')

router.get('/', Bureau_get)
router.post('/add', Bureau_post)
router.get('/getOne', Bureau_get_one)
router.get('/getUser', Bureau_get_user)
router.put('/', Bureau_put)
router.delete('/:id', Bureau_delete)

module.exports = router