/*
  - A template engine enables you to use static template files in your application. At runtime, the template engine replaces variables in a template file with actual values, and transforms the template into an HTML file sent to the client. This approach makes it easier to design an HTML page.

  - Some popular template engines that work with Express are Pug, Mustache, and EJS. The Express application generator uses Jade as its default, but it also supports several others.
*/


// cấu hình engine hiển thị và tệp tĩnh cho ứng dụng Express.js.

const path = require('path');
const express = require('express');

// config template engine
const configViewEngine = (app) => {
  app.set('views', path.join('./src', 'views'))
  app.set('view engine', 'ejs')

  //config static files
  app.use(express.static(path.join('./src', 'public')));
}

module.exports = configViewEngine;