const proxyOptions = {
    onError(err, req, res) {
        console.log('Error occured', err)
        res.writeHead(500, {
            'Content-Type': 'text/plain',
        });
        res.end('Something went wrong. And we are reporting a custom error message.' + err);
    },
    onProxyReq(proxyReq, req, res) {
        if (req.method == 'POST' && req.body) {
            const contentType = proxyReq.getHeader('Content-Type');
            if (contentType.toLowerCase() === 'application/json;charset=utf-8' || contentType === 'application/json') {
                let bodyData = JSON.stringify(req.body);
                proxyReq.setHeader('Content-Type', 'application/json');
                proxyReq.setHeader('Content-Length', Buffer.byteLength(bodyData));
                proxyReq.write(bodyData);
            }
        }
    },
    secure: false,
    changeOrigin: true,
    logLevel: 'debug'
}
 
module.exports = {
    proxyOptions
};