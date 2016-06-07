"use strict";

require("babel-register");

const webpack = require("webpack");
const path = require("path");
const join = path.join;
const resolve = path.resolve;
const dotenv = require("dotenv");
const getConfig = require("hjs-webpack");

const configureCssModules = require("./webpack/css.modules");

// Source paths
const root = resolve(__dirname);
const src = join(root, "src");
const modules = join(root, "node_modules");
const dest = join(root, "dist");

// Environment and variables
const NODE_ENV = process.env.NODE_ENV;
const isDev = NODE_ENV === "development";
const isTest = NODE_ENV === "test";

const dotEnvVars = dotenv.config();
const environmentEnv = dotenv.config({
    path: join(root, "config", `${NODE_ENV}.config.js`),
    silent: true,
});

const envVariables = Object.assign({}, dotEnvVars, environmentEnv);

// Replace all usage of __KEY__ (defined in our variables file) in our code-base.
const defines = Object.keys(envVariables).reduce((memo, key) => {
    const val = JSON.stringify(envVariables[key]);
    memo[`__${key.toUpperCase()}__`] = val;
    return memo;
}, {__NODE_ENV__: JSON.stringify(NODE_ENV)});

// Configure webpack
let config = getConfig({
    isDev: isDev,
    in: join(src, "app.js"),
    out: dest,
    clearBeforeBuild: true
});

// Add new define plugin
config.plugins = [new webpack.DefinePlugin(defines)].concat(config.plugins);

// Add precss, autoprefixer and cssnano to postcss
config.postcss = [].concat([
    require("precss")({}),
    require("autoprefixer")({}),
    require("cssnano")({})
]);

// Relative paths
config.resolve.root = [src, modules];
config.resolve.alias = {
    "css": join(src, "styles"),
    "containers": join(src, "containers"),
    "components": join(src, "components"),
    "utils": join(src, "utils")
};

// Tests

if (isTest) {
    config.externals = {
        "react/lib/ReactContext": true,
        "react/lib/ExecutionEnvironment": true,
        "react/addons": true
    };

    config.plugins = config.plugins.filter(p => {
        const name = p.constructor.toString();
        const fnName = name.match(/^function (.*)\((.*\))/);

        const idx = ["DedupePlugin", "UglifyJsPlugin"].indexOf(fnName[1]);
        return idx < 0;
    });
}

config = configureCssModules(config, isDev, src, modules);

module.exports = config;
