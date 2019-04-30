// testing the socket connection
const Proxy = require('../');
const request = require('supertest');
const Koa = require('koa');
const bodyParser = require('koa-bodyparser');
const path = require('path');
const beforeAll = global.beforeAll;
const afterAll = global.afterAll;
const expect = global.expect;
let server;
let socketServer;
// init behind socket
beforeAll(() => {
  const app = new Koa();
  app.use(bodyParser());
  app.use(async (ctx, next) => {
    ctx.body = {
      status: 200,
      data: 'Hello world',
    };
    await next();
  });
  app.use(Proxy.proxy({
    proxies: [
      {
        host: 'http://localhost:4445',
        context: 'socket',
        ws: true,
      },
    ],
  }));
  server = app.listen(4444);
  // start the socket server behind proxy
  const sapp = new Koa();

});

afterAll(() => {

  server.close();
  socketServer.close();
});

describe('It should able to connect to a socket server behind proxy', () => {

  test('First check if we get a hello world from server', async done => {

  });

  test('Check if we can connect to the socket', async done => {

  });
});
