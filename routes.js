const express = require('express');
const router = express.Router();
const { createProxyMiddleware } = require('http-proxy-middleware');
const config = require('config');
const { proxyOptions } = require('./proxyOptions');
const { tokenVerification } = require('./tokenVerification');
const logger = require('./logging');
const {
    servicesAccessAuthorize,
    getRules
} = require('./authorization');
const { configMapping } = require('./mapping');

/*

Start :----- Protected Apis - Authorization needed

*/
/* Board Management Service (kols) Route Setting */
let bmsProxyOptions = proxyOptions;
bmsProxyOptions.target = config.get('BMS_SERVICE');
bmsProxyOptions.pathRewrite = configMapping.protected.bms.route;

const bmsProxy = createProxyMiddleware(bmsProxyOptions);
router.use('/bms', tokenVerification, bmsProxy);


/*


End :----- Protected Apis - Authorization needed

*/

//////////////////////////////////////////////////////////////////////////////////////

/*

Start:----- Public Apis - no Authorization




End:----- Public Apis - no Authorization

*/
module.exports = router;