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
router.post('/', Bureau_post)
router.get('/:id', Bureau_get_one)
router.get('/getUser/:id', Bureau_get_user)
router.put('/:id', Bureau_put)
router.delete('/:id', Bureau_delete)

module.exports = router