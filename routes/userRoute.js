const router = require('express').Router()
const {
    user_get,
    all_users_get,
    signup_post,
    login_post,
    update_password,
    logout_get
} = require('../controller/AuthController')

router.get('/', all_users_get)
router.get('/:id', user_get)
router.post('/signup', signup_post)
router.post('/login', login_post) //prblm
router.put('/updatePassword', update_password) //prblm
router.get('/logout', logout_get) //prblm

module.exports = router