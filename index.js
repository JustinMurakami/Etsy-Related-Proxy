const express = require('express');
const path = require('path');
const { createProxyMiddleware } = require('http-proxy-middleware');
const app = express();
app.use(express.static(path.join(__dirname, 'public')));
//Navbar endpoints
app.use('/user', createProxyMiddleware({ target: 'http://0.0.0.0:8001', changeOrigin: true }));
app.use('/entry', createProxyMiddleware({ target: 'http://0.0.0.0:8001', changeOrigin: true }));
//displayproduct
app.use('/product-display', createProxyMiddleware({ target: 'http://0.0.0.0:8002', changeOrigin: true }));
app.use('/photo-display', createProxyMiddleware({ target: 'http://0.0.0.0:8002', changeOrigin: true }));
//Reviews
app.use('/reviewsItem', createProxyMiddleware({ target: 'http://0.0.0.0:8003', changeOrigin: true }));
app.use('/reviewsShop', createProxyMiddleware({ target: 'http://0.0.0.0:8003', changeOrigin: true }));
//Seller
app.use('/api', createProxyMiddleware({ target: 'http://0.0.0.0:8004', changeOrigin: true }));
//Related
app.use('/related', createProxyMiddleware({ target: 'http://0.0.0.0:8005', changeOrigin: true }));
app.listen(3000);