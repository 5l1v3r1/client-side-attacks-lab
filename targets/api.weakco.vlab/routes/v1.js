const express = require('express');
const router = express.Router();

const cors = require('cors');
const sessionLoader = require('../middleware/cookieSessionLoader');
const sessionBouncer = require('../middleware/cookieSessionBouncer');

const authCtrlr = require('../controllers/cookieAuth');
const accountCtrlr = require('../controllers/account');

router.use(
  cors({
    origin: true,
    methods: 'GET,POST,PUT,DELETE',
    credentials: true
  })
);
router.use(sessionLoader);

router.post('/authenticate', authCtrlr.auth_login_post);
router.delete('/authenticate', authCtrlr.auth_logout_delete);

router.get('/accounts', accountCtrlr.account_list_get);
router.get(
  '/account/:accountId/transactions',
  accountCtrlr.account_transactions_get
);

module.exports = router;
