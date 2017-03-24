"use strict";
var dogModuleA_1 = require("./dogModuleA");
var dogModuleB_1 = require("./dogModuleB");
dogModuleA_1.logDogName();
dogModuleB_1.logDogName();
dogModuleA_1.changeDogName('Zeus');
dogModuleB_1.changeDogName('Buddy');
dogModuleA_1.logDogName();
dogModuleB_1.logDogName();
