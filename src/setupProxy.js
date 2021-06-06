const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = function (app) {
  app.use(
    '/v1', // your version or front yout path api , empty if not available
    createProxyMiddleware({
      target: process.env.REACT_APP_API_URL, // your env name
      changeOrigin: true,
    }),
  );
};
