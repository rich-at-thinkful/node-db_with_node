process.env.TZ = 'UTC';
require('dotenv').config();
const { expect } = require('chai');
const sinon = require('sinon');

global.expect = expect;
global.sinon = sinon;
