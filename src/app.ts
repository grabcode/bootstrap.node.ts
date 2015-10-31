/// <reference path="../typings/node/node.d.ts" />
/// <reference path="../typings/express/express.d.ts" />
/// <reference path="../typings/body-parser/body-parser.d.ts" />
/// <reference path="../typings/method-override/method-override.d.ts" />
/// <reference path="../typings/errorhandler/errorhandler.d.ts" />

declare function require(name: string);
require("source-map-support").install();

import routes = require("./routes");
import express = require("express");
import bodyParser = require("body-parser");
import methodOverride = require("method-override");
import errorHandler = require("errorhandler");

var app = express();

// Configuration
const rootfolder = "__dirname/..";

app.set("views", `${rootfolder}/views`);
app.set("view engine", "jade");
app.set("view options", { layout: false });
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(methodOverride(""));
app.use(express.static(`${rootfolder}/public`));

var env = process.env.NODE_ENV || "development";
app.use(errorHandler());

// ROUTES
app.get("/", routes.index);

app.listen(3000, function(){
  console.log("Demo Express server listening on port %d in %s mode", 3000, app.settings.env);
});

export var App = app;
