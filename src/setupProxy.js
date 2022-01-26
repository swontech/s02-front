// const proxy = require('http-proxy-middleware');

// module.exports = function(app) {
//     app.use(
//         '/api',
//         proxy.createProxyMiddleware({
//             target: 'http://localhost:8080',
//             changeOrigin: true,
//             pathRewrite: { '^/api': '' }
//         })
//     )
// }

const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = function(app){
  app.use(
      createProxyMiddleware('/api', {
          target: 'http://127.0.0.1:8080',
          changeOrigin: true,
          pathRewrite: { '^/api': '' }
      })
  )
};