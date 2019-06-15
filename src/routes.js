const express = require('express');
const multer = require('multer');
const uploadConfig = require('./config/upload');
const PostController = require('./controllers/PostController');
const LikeConstroller = require('./controllers/LikeController');

const routes = new express.Router();
const upload = multer(uploadConfig);

routes.post('/posts', upload.single('image'), PostController.store);
routes.get('/posts', PostController.index);
  
routes.post('/posts/:id/like', LikeConstroller.store);
// http:localhost:3000/post
module.exports = routes;