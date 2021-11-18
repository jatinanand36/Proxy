/* eslint-disable no-plusplus */
/* eslint-disable no-console */
/* eslint-disable no-useless-escape */
/* eslint-disable-next-line no-unused-vars */
/* eslint-disable prettier/prettier */
/* eslint-disable no-use-before-define */
const { AbilityBuilder, Ability } = require('@casl/ability');
const logger = require('../logging');
const { SERVICES, USER_ROLES, DEFAULT_ABILITIES } = require('../constants');
/**
 * Defines how to detect object's type: https://stalniy.github.io/casl/abilities/2017/07/20/define-abilities.html
 */

const defineAbilitiesForManager = () => {  
    const { rules, can } = AbilityBuilder.extract() 

    // Dashboard permissions 
    can('read', 'home');
    can('create', 'home');
    can('update', 'home');
    can('delete', 'home');


    // Kol permissions 
    can('read', 'kol');
    can('detailListOfKols', 'kol');
    can('uploadDetailsKOLs','kol');
    can('listKOLs', 'kol');
    can('listAreaOfExpertise', 'kol');

    // Alerts permissions
    can('read','alerts');
    can('create','alerts');
    can('update','alerts');
    can('delete','alerts');
    can('publish','alerts');
    can('assign','alerts');
    can('viewInReviewAlert','alerts');
    can('addClient','alerts');
    can('createReport','alerts');
    can("alertToggleStatus", 'alerts');
    can("listAuthority", 'alerts');
    can("commentList", 'alerts');
    can("commentAdd", 'alerts');
    can("commentMarkRead", 'alerts');
    can("getCommentCount", 'alerts');
    can("alertCreateUpdate", "alerts");
    can("getEnv", "alerts");
    can("shareAlert", "alerts");
    can("getAlertListById", "alerts");

    // Regulations permissions
    can("read", 'regulations');
    can("create", 'regulations');

    // Requests permissions
    can('read','requests');
    can('create','requests');
    can('update','requests');
    can('changeDeadline','requests');
    can('changeStatus','requests');
    can("commentList", 'requests'); 
    can("commentMarkRead", 'requests');
    can("getCommentCount", 'requests');
    can("listRequestSubType", 'requests');
    can("requestStatusCount", 'requests');
    can("statusList", 'requests');
    can("requestCreateUpdate", 'requests');
    can("requestAssign", 'requests');
    can("requestFetchLinked", 'requests');
    can("requestListInternalNested", 'requests');
    can("requestListInternalFlat", 'requests');
    can("requestAddComment", 'requests');
    can('alertDetectionCompany', 'requests');
   
    // Tag permissions
    can('tagList', 'tags');
    can('tagCreate', 'tags');
    can('tagStatus', 'tags');

    // Documents permissions
    can('read', 'documents');
    can('readTypeFilter', 'documents');
    can("download", 'documents');
    can("list", 'documents');
    can("uploadDocs", 'documents');
    can("fetch", 'documents');
    can('bulkDocument', 'documents');

    // GuideBooks permissions
    can('read', 'guidebooks');
    can('update', 'guidebooks');
    can('delete', 'guidebooks');
    can('upload', 'guidebooks');
    can('changeStatus', 'guidebooks');
    can("guidebookStatusCreateUpdate", 'guidebooks');
    can("listProduct", 'guidebooks');
    can("listTopic", 'guidebooks');
    can("guidebookCreateUpdate", 'guidebooks');
    can("guidebookList", 'guidebooks');

    // addUser permissions
    can('read', 'accounts'); //allow Route only

    // show companyList permissions
    can('read', 'companyList');

    can('create', 'accounts');
    can('readProfile', 'accounts');
    can('listAssignees', 'accounts');
    can('logout', 'accounts');
    can('changePassword', 'accounts');
    can('listCountry', 'accounts');
    can('getListById', 'accounts');
    can('addCompany', 'accounts');
    can('listCompany', 'accounts'); 
    can('deactivateUser', 'accounts');

    // common permissions
    can('read', 'onlymanager');
    can('read', 'common');
    can('markRead', 'common');
    can("industryList", 'common');
    can("territoryList", 'common');
    can("getFilterMetaData", 'common');

    // Notifications permissions
    can("listNotification", 'notifications');
    can("notificationMarkRead", 'notifications');
    
    return new Ability(rules);
};
  
const defineAbilitiesForExpert = () => {  
    const { rules, can } = AbilityBuilder.extract()    
    
    // Dashboard permissions
    can('read', 'home');
    can('create', 'home');
    can('update', 'home');
    can('delete', 'home');


    // Kol permissions
    can('read', 'kol');
    can('detailListOfKols', 'kol');
    can('uploadDetailsKOLs','kol');
    can('listKOLs', 'kol');
    can('listAreaOfExpertise', 'kol');

    // Alerts permissions
    can('read', 'alerts');
    can('create','alerts');
    can('update','alerts');
    can('delete', 'alerts');
    can('assign','alerts');
    can('viewInReviewAlert', 'alerts');
    can('createReport','alerts');
    can("alertToggleStatus", 'alerts');
    can("listAuthority", 'alerts');
    can("commentList", 'alerts');
    can("commentAdd", 'alerts');
    can("commentMarkRead", 'alerts');
    can("getCommentCount", 'alerts');
    can("alertCreateUpdate", "alerts");
    can("getEnv", "alerts");
    can("shareAlert", "alerts");
    can("getAlertListById", "alerts");

    // Regulations permissions
    can("read", 'regulations');
    can("create", 'regulations');

    // Requests permissions
    can('read', 'requests');
    can('create', 'requests');
    can('update', 'requests');
    can("commentList", 'requests');
    can("commentMarkRead", 'requests');
    can("getCommentCount", 'requests');
    can("listRequestSubType", 'requests');
    can("requestStatusCount", 'requests');
    can("statusList", 'requests');  
    can("requestCreateUpdate", 'requests');
    can("requestAssign", 'requests');
    can("requestFetchLinked", 'requests');
    can("requestListInternalNested", 'requests');
    can("requestListInternalFlat", 'requests');
    can("requestAddComment", 'requests');
    can('alertDetectionCompany', 'requests');

    // Tag permissions
    can('tagList', 'tags');
    can('tagCreate', 'tags');
    can('tagStatus', 'tags');

    // Documents permissions
    can('read','documents');
    can('readTypeFilter', 'documents');
    can("download", 'documents');
    can("list", 'documents');
    can("uploadDocs", 'documents');
    can("fetch", 'documents');
    can('bulkDocument', 'documents'); 

    // GuideBooks permissions
    can('read', 'guidebooks');
    can('update', 'guidebooks');
    can('delete', 'guidebooks');
    can('upload', 'guidebooks');
    can("guidebookStatusCreateUpdate", 'guidebooks');
    can("listProduct", 'guidebooks');
    can("listTopic", 'guidebooks'); 
    can("guidebookCreateUpdate", 'guidebooks'); 
    can("guidebookList", 'guidebooks'); 

    can('readProfile', 'accounts');
    can('listAssignees',  'accounts');
    can('logout',  'accounts');
    can('changePassword',  'accounts');
    can('listCountry',  'accounts');
    can('getListById',  'accounts');
    can('listCompany',  'accounts'); 

    // show companyList permissions
    can('read', 'companyList');

    // common expert permissions
    can('read', 'onlyexpert');  
    can('read', 'common');
    can('markRead', 'common');
    can("getFilterMetaData", 'common');
    can("industryList", 'common');
    can("territoryList", 'common');

   // Notifications permissions
   can("listNotification", 'notifications');
   can("notificationMarkRead", 'notifications');
   
      return new Ability(rules);
};
  
const defineAbilitiesForClient = () => {  
  const { rules, can } = AbilityBuilder.extract()    
  
  // Dashboard permissions
  can('read', 'home');
  can('create', 'home');

  // Kol permissions
  can('read', 'kol');
  can('detailListOfKols', 'kol');  
  can('listKOLs', 'kol');
  can('listAreaOfExpertise', 'kol');

  // Alerts permissions
  can('read', 'alerts');
  can('archive', 'alerts');
  can('createRequest', 'alerts');
  can('createReport', 'alerts');
  can("alertToggleStatus", 'alerts');
  can("shareAlert", "alerts");
  can('createReport','alerts');

  // Requests permissions
  can('read', 'requests');
  can('create', 'requests');
  can("commentList", 'requests'); 
  can("commentMarkRead", 'requests');
  can("getCommentCount", 'requests');
  can("listRequestSubType", 'requests');
  can("requestCreateUpdate", 'requests'); /* TODO: Need to revoke update from client, write separate apis for create and update */
  can("requestFetchLinked", 'requests');
  can("requestListClient", 'requests');
  can("requestAddComment", 'requests');
  can('alertDetectionCompany', 'requests');

  // Tag permissions
  can('tagList', 'tags');
  can('tagCreate', 'tags');
  can('tagStatus', 'tags');

  // Documents permissions
  can('read', 'documents');
  can("download", 'documents');
  can("list", 'documents');
  can("uploadDocs", 'documents');
  can("fetch", 'documents');
  can('bulkDocument', 'documents');

  // GuideBooks permissions
  can('read', 'guidebooks');
  can('createRequest', 'guidebooks');
  can('purchase', 'guidebooks');
  can("guidebookStatusCreateUpdate", 'guidebooks');
  can("guidebookCreateUpdate", 'guidebooks'); 
  can("guidebookList", 'guidebooks'); 

  // Settings permissions
  can('read', 'settings');

  // Tutorial videos permissions
  can('read', 'videos');

  // show needhelp in header permissions
  can('read', 'needhelp');

  can('readProfile', 'accounts');
  can('logout', 'accounts');
  can('changePassword', 'accounts');
  can('listCountry', 'accounts');
  can('getListById', 'accounts');
  can('editProfile', 'accounts');

  // common client permissions
  can('read', 'onlyclient');
  can('read', 'common');
  can('markRead', 'common');
  can("industryList", 'common');
  can("territoryList", 'common');
  can("getFilterMetaData", 'common');
  
  // Notifications permissions
  can("listNotification", 'notifications');
  can("notificationMarkRead", 'notifications');
  
  return new Ability(rules);
};
  
const defineAbilitiesForExternalExpert = () => {  
  const { rules, can } = AbilityBuilder.extract()    
  
  // Alerts permissions
  can('read','alerts');
  can('create','alerts');
  can('update','alerts');
  can('delete','alerts');
  can('assign','alerts');
  can('viewInReviewAlert','alerts');
  can("alertToggleStatus", 'alerts');
  can("listAuthority", 'alerts');
  can("commentList", 'alerts');
  can("commentAdd", 'alerts');
  can("commentMarkRead", 'alerts');
  can("getCommentCount", 'alerts');
  can("alertCreateUpdate", "alerts");
  can("shareAlert", "alerts");
  can("getAlertListById", "alerts");

  // Regulations permissions
  can("read", 'regulations');
  can("create", 'regulations');

  // Tag permissions
    can('tagList', 'tags');
    can('tagCreate', 'tags');
    can('tagStatus', 'tags');


  can("download", 'documents');
  can("uploadDocs", 'documents');
  can("fetch", 'documents');
  can('bulkDocument', 'documents');

  // show needhelp in header permissions
  can('read', 'needhelp');

  can('readProfile', 'accounts');
  can('listAssignees', 'accounts');
  can('logout', 'accounts');
  can('changePassword', 'accounts');
  can('listCountry', 'accounts');
  can('getListById', 'accounts');

  // common external expert permissions
  can('read', 'onlyexternalexpert');
  can('read', 'common');
  can('markRead', 'common');
  can("industryList", "common");
  can("territoryList", "common");
  can("getFilterMetaData", "common");
 
  // Notifications permissions
  can("listNotification", 'notifications');
  can("notificationMarkRead", 'notifications');
  
  return new Ability(rules);
};
  
const defineAbilitiesForAdmin = () => {  
  const { rules, can } = AbilityBuilder.extract()    
  
  // Dashboard permissions
  can('read', 'home');
  can('create', 'home');
  can('update', 'home');
  can('delete', 'home');


  // Kol permissions
  can('read', 'kol');
  can('detailListOfKols', 'kol');
  can('uploadDetailsKOLs','kol');
  can('listKOLs', 'kol');
  can('listAreaOfExpertise', 'kol');
  
  // Alerts permissions
  can('read','alerts');
  can('create','alerts');
  can('update','alerts');
  can('delete','alerts');
  can('publish','alerts');
  can('assign','alerts');
  can('viewInReviewAlert','alerts');
  can('addClient','alerts');
  can('editPublished','alerts');
  can('deletePublished','alerts');
  can("alertToggleStatus", 'alerts');
  can("listAuthority", 'alerts');
  can("commentList", 'alerts');
  can("commentAdd", 'alerts');
  can("commentMarkRead", 'alerts');
  can("getCommentCount", 'alerts');
  can("alertCreateUpdate", "alerts");
  can("getEnv", "alerts");
  can("createReport", "alerts");
  can("shareAlert", "alerts");
  can("getAlertListById", "alerts");

  // Regulations permissions
  can("read", 'regulations');
  can("create", 'regulations');

  // Requests permissions
  can('read','requests');
  can('create','requests');
  can('update','requests');
  can('changeDeadline','requests');
  can('changeStatus','requests');
  can("commentList", 'requests'); 
  can("commentMarkRead", 'requests');
  can("getCommentCount", 'requests');
  can("createRequestSubType", 'requests');
  can("listRequestSubType", 'requests');
  can("requestStatusCount", 'requests');
  can("statusList", 'requests');
  can("requestCreateUpdate",'requests');
  can("requestAssign", 'requests');
  can("requestFetchLinked", 'requests');
  can("requestListInternalNested", 'requests');
  can("requestListInternalFlat", 'requests');
  can("requestAddComment", 'requests');
  can('alertDetectionCompany', 'requests');
  
  // Tag permissions
  can('tagList', 'tags');
  can('tagCreate', 'tags');
  can('tagStatus', 'tags');

  // Documents permissions
  can('read', 'documents');
  can('readTypeFilter', 'documents');
  can("download", 'documents');
  can("list", 'documents');
  can("uploadDocs", 'documents');
  can("fetch", 'documents');
  can('bulkDocument', 'documents');

  // GuideBooks permissions
  can('read', 'guidebooks');
  can('update', 'guidebooks');
  can('delete', 'guidebooks');
  can('upload', 'guidebooks');
  can("guidebookStatusCreateUpdate", 'guidebooks');
  can("listProduct", 'guidebooks');
  can("listTopic", 'guidebooks');
  can("guidebookCreateUpdate", 'guidebooks'); 
  can("guidebookList", 'guidebooks');  

  // AddUsers permissions
  can('read', 'accounts');
  can('create', 'accounts');
  can('editProfile', 'accounts');
  can('readProfile', 'accounts');
  can('listAssignees', 'accounts');
  can('listUsers', 'accounts');
  can('logout', 'accounts');
  can('changePassword', 'accounts');
  can('listCountry', 'accounts');
  can('listUsersbyCompany', 'accounts');
  can('getListById', 'accounts');
  can('addCompany', 'accounts');
  can('listCompany', 'accounts');
  can('deleteUser', 'accounts');
  can('deactivateUser', 'accounts');
  
  // show companyList permissions
  can('read', 'companyList');

  // common admin permissions
  can('read', 'onlyadmin');
  can('read', 'common');
  can('markRead', 'common');
  can("industryList", "common");
  can("territoryList", "common");
  can("getFilterMetaData", "common");
  

  can("scheduledOptInAlertEmail", "system");
  can("scheduledAssignedAlertEmails", "system");
  can("scheduledAssignedRequestEmails", "system");

  // Notifications permissions
  can("listNotification", 'notifications');
  can("notificationMarkRead", 'notifications');
  
  return new Ability(rules);
};

const getRoleBasedAbility = (user) => {
    try{
        let ability  
        switch (user.role) {    
            case USER_ROLES.MANAGER:      
            ability = defineAbilitiesForManager();   
            break;
            case USER_ROLES.EXPERT:      
            ability = defineAbilitiesForExpert();
            break;
            case USER_ROLES.CLIENT:      
            ability = defineAbilitiesForClient();
            break;
            case USER_ROLES.ADMIN:      
            ability = defineAbilitiesForAdmin();
            break;
            case USER_ROLES.EXTERNALEXPERT:      
            ability = defineAbilitiesForExternalExpert();
            break;
            default:      
            ability = DEFAULT_ABILITIES; 
            break;
        }
        return ability;
    }catch (err) {
        logger.error({ err }, 'Unauthorized user role');
    }

}

module.exports = {
    defineAbilitiesForManager: defineAbilitiesForManager,
    defineAbilitiesForExpert: defineAbilitiesForExpert,
    defineAbilitiesForClient: defineAbilitiesForClient,
    defineAbilitiesForExternalExpert: defineAbilitiesForExternalExpert,
    defineAbilitiesForAdmin: defineAbilitiesForAdmin,
    getRoleBasedAbility: getRoleBasedAbility
};
