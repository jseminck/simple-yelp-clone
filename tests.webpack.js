require("babel-polyfill");

const context = require.context("./src", true, /\.spec\.js$/);
context.keys().forEach(context);

const chai = require("chai");
const chaiEnzyme = require("chai-enzyme");

chai.use(chaiEnzyme());

const context = require.context("./tests", true, /\.spec\.js$/);
context.keys().forEach(context);
