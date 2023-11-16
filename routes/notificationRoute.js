const router = require('express').Router()
const {
    Notification_post,
    Notification_get,
    Notification_get_user,
    Notification_get_one,
    Notification_put,
    Notification_delete
} = require('../controller/NotificationController')

router.get('/', Notification_get)
router.post('/add', Notification_post)
router.get('/getOne', Notification_get_one)
router.get('/getUser', Notification_get_user)
router.put('/', Notification_put)
router.delete('/:id', Notification_delete)

module.exports = router