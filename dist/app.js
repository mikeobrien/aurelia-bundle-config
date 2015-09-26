System.registerDynamic("app", ["aurelia-framework"], true, function(require, exports, module) {
  ;
  var global = this,
      __define = global.define;
  global.define = undefined;
  var framework = require("aurelia-framework");
  global.define = __define;
  return module.exports;
});
