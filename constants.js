const { AbilityBuilder, Ability } = require('@casl/ability');


const SERVICES = { 
    IMS: 'ims',
    ACCOUNT: 'account',
    RGMS: 'rgms',
    TMS: 'tms',
    NMS: 'nms',
    DMS: 'dms',
    AMS: 'ams',
    RQMS: 'rqms',
    AGMS: 'agms',
    TERRITORY: 'territory',
    GMS: 'gms',
    KMS: 'kms'
};

const USER_ROLES = {  
    MANAGER: 'manager',  
    EXPERT: 'expert',
    EXTERNALEXPERT: 'externalexpert',
    ADMIN: 'admin',
    CLIENT: 'client'
};

const DEFAULT_ABILITIES = new Ability();

module.exports = {
    SERVICES: SERVICES,
    USER_ROLES: USER_ROLES,
    DEFAULT_ABILITIES: DEFAULT_ABILITIES
};