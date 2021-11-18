const configMapping = {
    public: {

    },
    protected: {
        bms: {
            route: {
                '^/api/bms/board/add': '/v1/bms/board/add',
                '^/api/bms/board/delete': '/v1/bms/board/delete',
                '^/api/bms/board/list': '/v1/bms/board/list',
                '^/api/bms/board/list/:id': '/v1/bms/board/list/:id',
                '^/api/bms/board/addItem': '/v1/bms/board/addItem',
                '^/api/bms/board/changeStatusItem': '/v1/bms/board/changeStatusItem',
                '^/api/bms/board/deleteItem': '/v1/bms/board/deleteItem'
            }
        }
    }
};

const apiModuleMapping = {
    '/api/bms': 'bms'
};

const apiActionsMapping = {

    // bms module permission
    '/board/add': 'addBoard',
    '/board/delete/': 'deleteBoard',
    '/board/list': 'listBoards',
    '/board/list/:id': 'listBoardById',
    '/board/addItem': 'addBoardItem',
    '/board/changeStatusItem': 'changeStatusBoardItem',
    '/board/deleteItem': 'deleteBoardItem'
};

module.exports = {
    configMapping: configMapping,
    apiModuleMapping: apiModuleMapping,
    apiActionsMapping: apiActionsMapping
};