const { ForbiddenError, subject } = require('@casl/ability');
const logger = require('./logging');
const { SERVICES } = require('./constants');
const { getRoleBasedAbility } = require('./rules/ability');
const { apiModuleMapping, apiActionsMapping } = require('./mapping');
const config = require('config');
const { packRules } = require('@casl/ability/extra');
const jwt = require('jsonwebtoken');

const servicesAccessAuthorize = (req, res, next) => {
    try {
        const ability = getRoleBasedAbility(req.user);
        let moduleName = getModuleName(req);
        // console.log('====serviceName===>',serviceName );
        if (typeof(apiActionsMapping[req.path]) === 'string') {
            ForbiddenError.from(ability).throwUnlessCan(apiActionsMapping[req.path], moduleName);
            next();
        } else if (req.path.indexOf('/account/list/') !== -1) { /* These apis do not match the mapping because id is appended at the end. Need to explictly handle them */
            ForbiddenError.from(ability)
                .throwUnlessCan(apiActionsMapping['/account/list/'], moduleName);
            next();
        } else if (req.path.indexOf('/document/fetch/') !== -1) { /* These apis do not match the mapping because id is appended at the end. Need to explictly handle them */
            ForbiddenError.from(ability)
                .throwUnlessCan(apiActionsMapping['/document/fetch/'], moduleName);
            next();
        } else if (req.path.indexOf('/document/download/') !== -1) { /* These apis do not match the mapping because id is appended at the end. Need to explictly handle them */
            ForbiddenError.from(ability)
                .throwUnlessCan(apiActionsMapping['/document/download/'], moduleName);
            next();
        } else {
            logger.error('service not found');
            res.status(404).json({ 'status': 'error', 'msg': 'service not found' });
        }

    } catch (err) {
        logger.error({ err }, 'Unauthorized user role');
        res.status(401).json({ 'status': 'error', 'msg': 'Unauthorized user role', 'err': err });
    }
};

const getModuleName = (req) => {
    let name = apiModuleMapping[req.serviceName];
    if (name === 'aggregation') {
        if (req.path.indexOf('/alert/') != -1) {
            name = apiModuleMapping['/alert/'];
        }
        if (req.path.indexOf('/guidebook/') != -1) {
            name = apiModuleMapping['/guidebook/'];
        }
        if (req.path.indexOf('/request/') != -1) {
            name = apiModuleMapping['/request/'];
        }
        if (req.path.indexOf('/scheduled') != -1) {
            name = apiModuleMapping['/scheduled'];
        }
        if (req.path.indexOf('/common/') != -1) {
            name = apiModuleMapping['/common/'];
        }
        if (req.path.indexOf('/kol/') != -1) {
            name = apiModuleMapping['/kol/'];
        }
    }
    return name;
}

const getRules = (req, res, next) => {
    // const ability = getRoleBasedAbility(req.user);
    const token = jwt.sign({ rules: packRules(ability.rules) }, config.get('JWT_SECRET'), { expiresIn: '1d' });
    res.json({
        status: 'success',
        data: {
            success: true,
            token: token,
        }
    });
};

module.exports = {
    servicesAccessAuthorize: servicesAccessAuthorize,
    getRules: getRules
};