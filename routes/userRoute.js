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
router.get('/getOne', user_get)
router.post('/signup', signup_post)
router.post('/login', login_post)
router.put('/signup', update_password)
router.get('/signup', logout_get)

module.exports = router