'use strict';



;define("tailor-this-web/adapters/-json-api", ["exports", "@ember-data/adapter/json-api"], function (_exports, _jsonApi) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _jsonApi.default;
    }
  });
});
;define("tailor-this-web/app", ["exports", "@ember/application", "ember-resolver", "ember-load-initializers", "tailor-this-web/config/environment"], function (_exports, _application, _emberResolver, _emberLoadInitializers, _environment) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;

  function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

  class App extends _application.default {
    constructor() {
      super(...arguments);

      _defineProperty(this, "modulePrefix", _environment.default.modulePrefix);

      _defineProperty(this, "podModulePrefix", _environment.default.podModulePrefix);

      _defineProperty(this, "Resolver", _emberResolver.default);
    }

  }

  _exports.default = App;
  (0, _emberLoadInitializers.default)(App, _environment.default.modulePrefix);
});
;define("tailor-this-web/component-managers/glimmer", ["exports", "@glimmer/component/-private/ember-component-manager"], function (_exports, _emberComponentManager) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _emberComponentManager.default;
    }
  });
});
;define("tailor-this-web/components/welcome-page", ["exports", "ember-welcome-page/components/welcome-page"], function (_exports, _welcomePage) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _welcomePage.default;
    }
  });
});
;define("tailor-this-web/data-adapter", ["exports", "@ember-data/debug"], function (_exports, _debug) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _debug.default;
    }
  });
});
;define("tailor-this-web/helpers/app-version", ["exports", "@ember/component/helper", "tailor-this-web/config/environment", "ember-cli-app-version/utils/regexp"], function (_exports, _helper, _environment, _regexp) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.appVersion = appVersion;
  _exports.default = void 0;

  function appVersion(_) {
    let hash = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
    const version = _environment.default.APP.version; // e.g. 1.0.0-alpha.1+4jds75hf
    // Allow use of 'hideSha' and 'hideVersion' For backwards compatibility

    let versionOnly = hash.versionOnly || hash.hideSha;
    let shaOnly = hash.shaOnly || hash.hideVersion;
    let match = null;

    if (versionOnly) {
      if (hash.showExtended) {
        match = version.match(_regexp.versionExtendedRegExp); // 1.0.0-alpha.1
      } // Fallback to just version


      if (!match) {
        match = version.match(_regexp.versionRegExp); // 1.0.0
      }
    }

    if (shaOnly) {
      match = version.match(_regexp.shaRegExp); // 4jds75hf
    }

    return match ? match[0] : version;
  }

  var _default = (0, _helper.helper)(appVersion);

  _exports.default = _default;
});
;define("tailor-this-web/helpers/loc", ["exports", "@ember/string/helpers/loc"], function (_exports, _loc) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _loc.default;
    }
  });
  Object.defineProperty(_exports, "loc", {
    enumerable: true,
    get: function () {
      return _loc.loc;
    }
  });
});
;define("tailor-this-web/helpers/page-title", ["exports", "ember-page-title/helpers/page-title"], function (_exports, _pageTitle) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;
  var _default = _pageTitle.default;
  _exports.default = _default;
});
;define("tailor-this-web/helpers/pluralize", ["exports", "ember-inflector/lib/helpers/pluralize"], function (_exports, _pluralize) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;
  var _default = _pluralize.default;
  _exports.default = _default;
});
;define("tailor-this-web/helpers/singularize", ["exports", "ember-inflector/lib/helpers/singularize"], function (_exports, _singularize) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;
  var _default = _singularize.default;
  _exports.default = _default;
});
;define("tailor-this-web/initializers/app-version", ["exports", "ember-cli-app-version/initializer-factory", "tailor-this-web/config/environment"], function (_exports, _initializerFactory, _environment) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;
  let name, version;

  if (_environment.default.APP) {
    name = _environment.default.APP.name;
    version = _environment.default.APP.version;
  }

  var _default = {
    name: 'App Version',
    initialize: (0, _initializerFactory.default)(name, version)
  };
  _exports.default = _default;
});
;define("tailor-this-web/initializers/container-debug-adapter", ["exports", "ember-resolver/resolvers/classic/container-debug-adapter"], function (_exports, _containerDebugAdapter) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;
  var _default = {
    name: 'container-debug-adapter',

    initialize() {
      let app = arguments[1] || arguments[0];
      app.register('container-debug-adapter:main', _containerDebugAdapter.default);
    }

  };
  _exports.default = _default;
});
;define("tailor-this-web/initializers/ember-data-data-adapter", ["exports", "@ember-data/debug/setup"], function (_exports, _setup) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _setup.default;
    }
  });
});
;define("tailor-this-web/initializers/ember-data", ["exports", "ember-data", "ember-data/setup-container"], function (_exports, _emberData, _setupContainer) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;

  /*
    This code initializes EmberData in an Ember application.
  
    It ensures that the `store` service is automatically injected
    as the `store` property on all routes and controllers.
  */
  var _default = {
    name: 'ember-data',
    initialize: _setupContainer.default
  };
  _exports.default = _default;
});
;define("tailor-this-web/initializers/export-application-global", ["exports", "ember", "tailor-this-web/config/environment"], function (_exports, _ember, _environment) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;
  _exports.initialize = initialize;

  function initialize() {
    var application = arguments[1] || arguments[0];

    if (_environment.default.exportApplicationGlobal !== false) {
      var theGlobal;

      if (typeof window !== 'undefined') {
        theGlobal = window;
      } else if (typeof global !== 'undefined') {
        theGlobal = global;
      } else if (typeof self !== 'undefined') {
        theGlobal = self;
      } else {
        // no reasonable global, just bail
        return;
      }

      var value = _environment.default.exportApplicationGlobal;
      var globalName;

      if (typeof value === 'string') {
        globalName = value;
      } else {
        globalName = _ember.default.String.classify(_environment.default.modulePrefix);
      }

      if (!theGlobal[globalName]) {
        theGlobal[globalName] = application;
        application.reopen({
          willDestroy: function () {
            this._super.apply(this, arguments);

            delete theGlobal[globalName];
          }
        });
      }
    }
  }

  var _default = {
    name: 'export-application-global',
    initialize: initialize
  };
  _exports.default = _default;
});
;define("tailor-this-web/instance-initializers/ember-data", ["exports"], function (_exports) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;

  /* exists only for things that historically used "after" or "before" */
  var _default = {
    name: 'ember-data',

    initialize() {}

  };
  _exports.default = _default;
});
;define("tailor-this-web/router", ["exports", "@ember/routing/router", "tailor-this-web/config/environment"], function (_exports, _router, _environment) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;

  function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

  class Router extends _router.default {
    constructor() {
      super(...arguments);

      _defineProperty(this, "location", _environment.default.locationType);

      _defineProperty(this, "rootURL", _environment.default.rootURL);
    }

  }

  _exports.default = Router;
  Router.map(function () {
    this.route('client', function () {
      this.route('onboarding');
    });
    this.route('vendor', function () {
      this.route('onboarding');
    });
    this.route('landing');
    this.route('about');
    this.route('contact');
    this.route('howto');
  });
});
;define("tailor-this-web/routes/about", ["exports", "@ember/routing/route"], function (_exports, _route) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;

  class AboutRoute extends _route.default {}

  _exports.default = AboutRoute;
});
;define("tailor-this-web/routes/client/onboarding", ["exports", "@ember/routing/route"], function (_exports, _route) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;

  class ClientOnboardingRoute extends _route.default {}

  _exports.default = ClientOnboardingRoute;
});
;define("tailor-this-web/routes/contact", ["exports", "@ember/routing/route"], function (_exports, _route) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;

  class ContactRoute extends _route.default {}

  _exports.default = ContactRoute;
});
;define("tailor-this-web/routes/howto", ["exports", "@ember/routing/route"], function (_exports, _route) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;

  class HowtoRoute extends _route.default {}

  _exports.default = HowtoRoute;
});
;define("tailor-this-web/routes/index", ["exports", "@ember/routing/route", "@ember/service"], function (_exports, _route, _service) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;

  var _class, _descriptor;

  function _initializerDefineProperty(target, property, descriptor, context) { if (!descriptor) return; Object.defineProperty(target, property, { enumerable: descriptor.enumerable, configurable: descriptor.configurable, writable: descriptor.writable, value: descriptor.initializer ? descriptor.initializer.call(context) : void 0 }); }

  function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

  function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }

  function _initializerWarningHelper(descriptor, context) { throw new Error('Decorating class property failed. Please ensure that ' + 'proposal-class-properties is enabled and runs after the decorators transform.'); }

  let IndexRoute = (_class = class IndexRoute extends _route.default {
    constructor() {
      super(...arguments);

      _initializerDefineProperty(this, "router", _descriptor, this);
    }

    beforeModel() {
      this.router.transitionTo('landing'); // Implicitly aborts the on-going transition.
    }

  }, (_descriptor = _applyDecoratedDescriptor(_class.prototype, "router", [_service.inject], {
    configurable: true,
    enumerable: true,
    writable: true,
    initializer: null
  })), _class);
  _exports.default = IndexRoute;
});
;define("tailor-this-web/routes/landing", ["exports", "@ember/routing/route"], function (_exports, _route) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;

  class LandingRoute extends _route.default {}

  _exports.default = LandingRoute;
});
;define("tailor-this-web/routes/vendor/onboarding", ["exports", "@ember/routing/route"], function (_exports, _route) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;

  class VendorOnboardingRoute extends _route.default {}

  _exports.default = VendorOnboardingRoute;
});
;define("tailor-this-web/serializers/-default", ["exports", "@ember-data/serializer/json"], function (_exports, _json) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _json.default;
    }
  });
});
;define("tailor-this-web/serializers/-json-api", ["exports", "@ember-data/serializer/json-api"], function (_exports, _jsonApi) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _jsonApi.default;
    }
  });
});
;define("tailor-this-web/serializers/-rest", ["exports", "@ember-data/serializer/rest"], function (_exports, _rest) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _rest.default;
    }
  });
});
;define("tailor-this-web/services/page-title-list", ["exports", "ember-page-title/services/page-title-list"], function (_exports, _pageTitleList) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _pageTitleList.default;
    }
  });
});
;define("tailor-this-web/services/page-title", ["exports", "ember-page-title/services/page-title"], function (_exports, _pageTitle) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _pageTitle.default;
    }
  });
});
;define("tailor-this-web/services/store", ["exports", "ember-data/store"], function (_exports, _store) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _store.default;
    }
  });
});
;define("tailor-this-web/templates/about", ["exports", "@ember/template-factory"], function (_exports, _templateFactory) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;

  var _default = (0, _templateFactory.createTemplateFactory)({
    "id": "WLlNLbDp",
    "block": "[[[1,[28,[35,0],[\"About\"],null]],[1,\"\\n\"],[10,\"main\"],[14,1,\"tg-main\"],[14,0,\"tg-main tg-haslayout tg-paddingzero\"],[12],[1,\"\\n  \"],[3,\"************************************\\n\\t\\t\\t\\t\\tTailor Online Start\\n\\t\\t\\t*************************************\"],[1,\"\\n  \"],[10,\"section\"],[14,0,\"tg-sectionspace tg-haslayout\"],[12],[1,\"\\n    \"],[10,0],[14,0,\"container\"],[12],[1,\"\\n      \"],[10,0],[14,0,\"row\"],[12],[1,\"\\n        \"],[10,0],[14,0,\"tg-shortcode tg-tailoronline\"],[12],[1,\"\\n          \"],[10,0],[14,0,\"col-xs-12 col-sm-12 col-md-6 col-lg-6 tg-verticalmiddle\"],[12],[1,\"\\n            \"],[10,0],[14,0,\"tg-shortcodetext\"],[12],[1,\"\\n              \"],[10,0],[14,0,\"tg-heading\"],[12],[1,\"\\n                \"],[10,\"h2\"],[12],[1,\"Hi! We’re Tailor This\"],[13],[1,\"\\n              \"],[13],[1,\"\\n              \"],[10,0],[14,0,\"tg-description\"],[12],[1,\"\\n                \"],[10,2],[12],[1,\"Consectetur adipisicing elit, sed do eiusmod tempor\\n                  incididunt ut labore etaiate dolore magna aliqua. Ut enim ad\\n                  minim veniam, quis nostrud exercitation ullamco laboris nisi\\n                  ut aliquip ex ea commodo consequat. Duis aute irure dolor in\\n                  reprehenderit inchieach voluptate velit esse cillum dolore eu\\n                  fugiat.\"],[13],[1,\"\\n                \"],[10,2],[12],[1,\"Excepteur sint occaecat cupidatat non proident, sunt in culpa\\n                  qui officia deserunt mollit anim id est laborum. Sed ut\\n                  perspiciatis unde omnis iste natus error sitateu voluptatem\\n                  accusantium doloremque laudantium.\"],[13],[1,\"\\n              \"],[13],[1,\"\\n              \"],[10,0],[14,0,\"tg-btns\"],[12],[1,\"\\n                \"],[10,3],[14,0,\"tg-btn\"],[14,6,\"#\"],[14,\"target\",\"_blank\"],[12],[1,\"Start Customizing\"],[13],[1,\"\\n                \"],[8,[39,1],[[24,0,\"tg-btn\"]],[[\"@route\"],[\"howto\"]],[[\"default\"],[[[[1,\"Video Tutorial\"]],[]]]]],[1,\"\\n              \"],[13],[1,\"\\n            \"],[13],[1,\"\\n          \"],[13],[1,\"\\n          \"],[10,0],[14,0,\"col-xs-12 col-sm-12 col-md-6 col-lg-6 tg-verticalmiddle\"],[12],[1,\"\\n            \"],[10,0],[14,0,\"tg-shortcodeimg tg-shortcodemultiimgs\"],[12],[1,\"\\n              \"],[10,\"figure\"],[12],[10,\"img\"],[14,\"src\",\"images/img-01.jpg\"],[14,\"alt\",\"image description\"],[12],[13],[13],[1,\"\\n              \"],[10,\"figure\"],[12],[10,\"img\"],[14,\"src\",\"images/img-02.jpg\"],[14,\"alt\",\"image description\"],[12],[13],[13],[1,\"\\n              \"],[10,\"figure\"],[12],[10,\"img\"],[14,\"src\",\"images/img-03.jpg\"],[14,\"alt\",\"image description\"],[12],[13],[13],[1,\"\\n            \"],[13],[1,\"\\n          \"],[13],[1,\"\\n        \"],[13],[1,\"\\n      \"],[13],[1,\"\\n    \"],[13],[1,\"\\n  \"],[13],[1,\"\\n  \"],[3,\"************************************\\n\\t\\t\\t\\t\\tTailor Online End\\n\\t\\t\\t*************************************\"],[1,\"\\n  \"],[3,\"************************************\\n\\t\\t\\t\\t\\tStatastic Start\\n\\t\\t\\t*************************************\"],[1,\"\\n  \"],[10,\"section\"],[14,0,\"tg-sectionspace tg-bglight tg-haslayout\"],[12],[1,\"\\n    \"],[10,0],[14,0,\"container\"],[12],[1,\"\\n      \"],[10,0],[14,0,\"row\"],[12],[1,\"\\n        \"],[10,0],[14,1,\"tg-statastics\"],[14,0,\"tg-shortcode tg-statastics\"],[12],[1,\"\\n          \"],[10,0],[14,0,\"tg-statastic\"],[12],[1,\"\\n            \"],[10,1],[14,0,\"tg-statasticicon\"],[12],[10,\"i\"],[14,0,\"icon-Icon_11\"],[12],[13],[13],[1,\"\\n            \"],[10,\"h2\"],[12],[10,1],[14,\"data-from\",\"0\"],[14,\"data-to\",\"598\"],[14,\"data-speed\",\"8000\"],[14,\"data-refresh-interval\",\"50\"],[12],[1,\"598\"],[13],[13],[1,\"\\n            \"],[10,\"h3\"],[12],[1,\"Happy Customers\"],[13],[1,\"\\n          \"],[13],[1,\"\\n          \"],[10,0],[14,0,\"tg-statastic\"],[12],[1,\"\\n            \"],[10,1],[14,0,\"tg-statasticicon\"],[12],[10,\"i\"],[14,0,\"icon-Icon_19\"],[12],[13],[13],[1,\"\\n            \"],[10,\"h2\"],[12],[10,1],[14,\"data-from\",\"0\"],[14,\"data-to\",\"1240\"],[14,\"data-speed\",\"8000\"],[14,\"data-refresh-interval\",\"50\"],[12],[1,\"1240\"],[13],[13],[1,\"\\n            \"],[10,\"h3\"],[12],[1,\"Location Pinned\"],[13],[1,\"\\n          \"],[13],[1,\"\\n          \"],[10,0],[14,0,\"tg-statastic\"],[12],[1,\"\\n            \"],[10,1],[14,0,\"tg-statasticicon\"],[12],[10,\"i\"],[14,0,\"icon-Icon_08\"],[12],[13],[13],[1,\"\\n            \"],[10,\"h2\"],[12],[10,1],[14,\"data-from\",\"0\"],[14,\"data-to\",\"2300\"],[14,\"data-speed\",\"8000\"],[14,\"data-refresh-interval\",\"50\"],[12],[1,\"2300\"],[13],[13],[1,\"\\n            \"],[10,\"h3\"],[12],[1,\"Suits Sketched\"],[13],[1,\"\\n          \"],[13],[1,\"\\n          \"],[10,0],[14,0,\"tg-statastic\"],[12],[1,\"\\n            \"],[10,1],[14,0,\"tg-statasticicon\"],[12],[10,\"i\"],[14,0,\"icon-Icon_18\"],[12],[13],[13],[1,\"\\n            \"],[10,\"h2\"],[12],[10,1],[14,\"data-from\",\"0\"],[14,\"data-to\",\"3650\"],[14,\"data-speed\",\"8000\"],[14,\"data-refresh-interval\",\"50\"],[12],[1,\"3650\"],[13],[13],[1,\"\\n            \"],[10,\"h3\"],[12],[1,\"Good Relation Built\"],[13],[1,\"\\n          \"],[13],[1,\"\\n        \"],[13],[1,\"\\n      \"],[13],[1,\"\\n    \"],[13],[1,\"\\n  \"],[13],[1,\"\\n  \"],[3,\"************************************\\n\\t\\t\\t\\t\\tStatastic End\\n\\t\\t\\t*************************************\"],[1,\"\\n  \"],[3,\"************************************\\n\\t\\t\\t\\t\\tTeam Members Start\\n\\t\\t\\t*************************************\"],[1,\"\\n  \"],[10,\"section\"],[14,0,\"tg-sectionspace tg-haslayout\"],[12],[1,\"\\n    \"],[10,0],[14,0,\"container\"],[12],[1,\"\\n      \"],[10,0],[14,0,\"row\"],[12],[1,\"\\n        \"],[10,0],[14,0,\"col-xs-12 col-sm-12 col-md-10 col-md-push-1 col-lg-8 col-lg-push-2\"],[12],[1,\"\\n          \"],[10,0],[14,0,\"tg-sectionhead\"],[12],[1,\"\\n            \"],[10,0],[14,0,\"tg-heading\"],[12],[1,\"\\n              \"],[10,\"h2\"],[12],[1,\"Team Behind Tailor This\"],[13],[1,\"\\n            \"],[13],[1,\"\\n            \"],[10,0],[14,0,\"tg-description\"],[12],[1,\"\\n              \"],[10,2],[12],[1,\"Consectetur adipisicing elit, sed do eiusmod tempor incididunt\\n                ut labore etaiate dolore magna aliqua. Ut enim ad minim veniam,\\n                quis nostrud exercitation ullamco laboris nisi ut aliquip exea\\n                commodo consequat.\"],[13],[1,\"\\n            \"],[13],[1,\"\\n          \"],[13],[1,\"\\n        \"],[13],[1,\"\\n        \"],[10,0],[14,1,\"tg-teammembers\"],[14,0,\"tg-teammembers owl-carousel tg-teammembers\"],[12],[1,\"\\n          \"],[10,0],[14,0,\"item\"],[12],[1,\"\\n            \"],[10,0],[14,0,\"tg-member\"],[12],[1,\"\\n              \"],[10,\"figure\"],[12],[10,3],[14,6,\"javascript:void(0);\"],[12],[10,\"img\"],[14,\"src\",\"images/img-01.jpg\"],[14,\"alt\",\"image description\"],[12],[13],[13],[13],[1,\"\\n              \"],[10,0],[14,0,\"tg-membercontent\"],[12],[1,\"\\n                \"],[10,0],[14,0,\"tg-membername\"],[12],[1,\"\\n                  \"],[10,\"h3\"],[12],[10,3],[14,6,\"javascript:void(0);\"],[12],[1,\"Benedict Duque\"],[13],[13],[1,\"\\n                \"],[13],[1,\"\\n                \"],[10,0],[14,0,\"tg-memberdesignation\"],[12],[1,\"\\n                  \"],[10,\"h4\"],[12],[10,3],[14,6,\"javascript:void(0);\"],[12],[1,\"Manager, CEO\"],[13],[13],[1,\"\\n                \"],[13],[1,\"\\n                \"],[10,\"ul\"],[14,0,\"tg-socialicons\"],[12],[1,\"\\n                  \"],[10,\"li\"],[14,0,\"tg-facebook\"],[12],[10,3],[14,6,\"javascript:void(0);\"],[12],[10,\"i\"],[14,0,\"fa fa-facebook\"],[12],[13],[13],[13],[1,\"\\n                  \"],[10,\"li\"],[14,0,\"tg-twitter\"],[12],[10,3],[14,6,\"javascript:void(0);\"],[12],[10,\"i\"],[14,0,\"fa fa-twitter\"],[12],[13],[13],[13],[1,\"\\n                  \"],[10,\"li\"],[14,0,\"tg-linkedin\"],[12],[10,3],[14,6,\"javascript:void(0);\"],[12],[10,\"i\"],[14,0,\"fa fa-linkedin\"],[12],[13],[13],[13],[1,\"\\n                  \"],[10,\"li\"],[14,0,\"tg-googleplus\"],[12],[10,3],[14,6,\"javascript:void(0);\"],[12],[10,\"i\"],[14,0,\"fa fa-google-plus\"],[12],[13],[13],[13],[1,\"\\n                  \"],[10,\"li\"],[14,0,\"tg-rss\"],[12],[10,3],[14,6,\"javascript:void(0);\"],[12],[10,\"i\"],[14,0,\"fa fa-rss\"],[12],[13],[13],[13],[1,\"\\n                \"],[13],[1,\"\\n              \"],[13],[1,\"\\n            \"],[13],[1,\"\\n          \"],[13],[1,\"\\n          \"],[10,0],[14,0,\"item\"],[12],[1,\"\\n            \"],[10,0],[14,0,\"tg-member\"],[12],[1,\"\\n              \"],[10,\"figure\"],[12],[10,3],[14,6,\"javascript:void(0);\"],[12],[10,\"img\"],[14,\"src\",\"images/img-02.jpg\"],[14,\"alt\",\"image description\"],[12],[13],[13],[13],[1,\"\\n              \"],[10,0],[14,0,\"tg-membercontent\"],[12],[1,\"\\n                \"],[10,0],[14,0,\"tg-membername\"],[12],[1,\"\\n                  \"],[10,\"h3\"],[12],[10,3],[14,6,\"javascript:void(0);\"],[12],[1,\"Benedict Duque\"],[13],[13],[1,\"\\n                \"],[13],[1,\"\\n                \"],[10,0],[14,0,\"tg-memberdesignation\"],[12],[1,\"\\n                  \"],[10,\"h4\"],[12],[10,3],[14,6,\"javascript:void(0);\"],[12],[1,\"Manager, CEO\"],[13],[13],[1,\"\\n                \"],[13],[1,\"\\n                \"],[10,\"ul\"],[14,0,\"tg-socialicons\"],[12],[1,\"\\n                  \"],[10,\"li\"],[14,0,\"tg-facebook\"],[12],[10,3],[14,6,\"javascript:void(0);\"],[12],[10,\"i\"],[14,0,\"fa fa-facebook\"],[12],[13],[13],[13],[1,\"\\n                  \"],[10,\"li\"],[14,0,\"tg-twitter\"],[12],[10,3],[14,6,\"javascript:void(0);\"],[12],[10,\"i\"],[14,0,\"fa fa-twitter\"],[12],[13],[13],[13],[1,\"\\n                  \"],[10,\"li\"],[14,0,\"tg-linkedin\"],[12],[10,3],[14,6,\"javascript:void(0);\"],[12],[10,\"i\"],[14,0,\"fa fa-linkedin\"],[12],[13],[13],[13],[1,\"\\n                  \"],[10,\"li\"],[14,0,\"tg-googleplus\"],[12],[10,3],[14,6,\"javascript:void(0);\"],[12],[10,\"i\"],[14,0,\"fa fa-google-plus\"],[12],[13],[13],[13],[1,\"\\n                  \"],[10,\"li\"],[14,0,\"tg-rss\"],[12],[10,3],[14,6,\"javascript:void(0);\"],[12],[10,\"i\"],[14,0,\"fa fa-rss\"],[12],[13],[13],[13],[1,\"\\n                \"],[13],[1,\"\\n              \"],[13],[1,\"\\n            \"],[13],[1,\"\\n          \"],[13],[1,\"\\n          \"],[10,0],[14,0,\"item\"],[12],[1,\"\\n            \"],[10,0],[14,0,\"tg-member\"],[12],[1,\"\\n              \"],[10,\"figure\"],[12],[10,3],[14,6,\"javascript:void(0);\"],[12],[10,\"img\"],[14,\"src\",\"images/img-03.jpg\"],[14,\"alt\",\"image description\"],[12],[13],[13],[13],[1,\"\\n              \"],[10,0],[14,0,\"tg-membercontent\"],[12],[1,\"\\n                \"],[10,0],[14,0,\"tg-membername\"],[12],[1,\"\\n                  \"],[10,\"h3\"],[12],[10,3],[14,6,\"javascript:void(0);\"],[12],[1,\"Benedict Duque\"],[13],[13],[1,\"\\n                \"],[13],[1,\"\\n                \"],[10,0],[14,0,\"tg-memberdesignation\"],[12],[1,\"\\n                  \"],[10,\"h4\"],[12],[10,3],[14,6,\"javascript:void(0);\"],[12],[1,\"Manager, CEO\"],[13],[13],[1,\"\\n                \"],[13],[1,\"\\n                \"],[10,\"ul\"],[14,0,\"tg-socialicons\"],[12],[1,\"\\n                  \"],[10,\"li\"],[14,0,\"tg-facebook\"],[12],[10,3],[14,6,\"javascript:void(0);\"],[12],[10,\"i\"],[14,0,\"fa fa-facebook\"],[12],[13],[13],[13],[1,\"\\n                  \"],[10,\"li\"],[14,0,\"tg-twitter\"],[12],[10,3],[14,6,\"javascript:void(0);\"],[12],[10,\"i\"],[14,0,\"fa fa-twitter\"],[12],[13],[13],[13],[1,\"\\n                  \"],[10,\"li\"],[14,0,\"tg-linkedin\"],[12],[10,3],[14,6,\"javascript:void(0);\"],[12],[10,\"i\"],[14,0,\"fa fa-linkedin\"],[12],[13],[13],[13],[1,\"\\n                  \"],[10,\"li\"],[14,0,\"tg-googleplus\"],[12],[10,3],[14,6,\"javascript:void(0);\"],[12],[10,\"i\"],[14,0,\"fa fa-google-plus\"],[12],[13],[13],[13],[1,\"\\n                  \"],[10,\"li\"],[14,0,\"tg-rss\"],[12],[10,3],[14,6,\"javascript:void(0);\"],[12],[10,\"i\"],[14,0,\"fa fa-rss\"],[12],[13],[13],[13],[1,\"\\n                \"],[13],[1,\"\\n              \"],[13],[1,\"\\n            \"],[13],[1,\"\\n          \"],[13],[1,\"\\n\\n        \"],[13],[1,\"\\n      \"],[13],[1,\"\\n    \"],[13],[1,\"\\n  \"],[13],[1,\"\\n  \"],[3,\"************************************\\n\\t\\t\\t\\t\\tTeam Members End\\n\\t\\t\\t*************************************\"],[1,\"\\n  \"],[3,\"************************************\\n\\t\\t\\t\\t\\tNewsletter Start\\n\\t\\t\\t*************************************\"],[1,\"\\n  \"],[10,\"section\"],[14,0,\"tg-sectionspace tg-bglight tg-haslayout\"],[12],[1,\"\\n    \"],[10,0],[14,0,\"container\"],[12],[1,\"\\n      \"],[10,0],[14,0,\"row\"],[12],[1,\"\\n        \"],[10,0],[14,0,\"col-xs-12 col-sm-12 col-md-12 col-lg-12\"],[12],[1,\"\\n          \"],[10,\"form\"],[14,0,\"tg-themeform tg-formnewsletter\"],[12],[1,\"\\n            \"],[10,\"fieldset\"],[12],[1,\"\\n              \"],[10,0],[14,0,\"tg-formtitle\"],[12],[1,\"\\n                \"],[10,\"h3\"],[12],[10,1],[12],[1,\"Get Latest Updates & Info\"],[13],[1,\"Signup For\\n                  Newsletter!\"],[13],[1,\"\\n              \"],[13],[1,\"\\n              \"],[10,0],[14,0,\"form-group\"],[12],[1,\"\\n                \"],[10,\"input\"],[14,0,\"form-control\"],[14,3,\"email\"],[14,\"placeholder\",\"Enter Your Email Here\"],[14,4,\"email\"],[12],[13],[1,\"\\n                \"],[10,\"button\"],[14,0,\"tg-btn\"],[14,4,\"button\"],[12],[1,\"Signup Now\"],[13],[1,\"\\n              \"],[13],[1,\"\\n            \"],[13],[1,\"\\n          \"],[13],[1,\"\\n        \"],[13],[1,\"\\n      \"],[13],[1,\"\\n    \"],[13],[1,\"\\n  \"],[13],[1,\"\\n  \"],[3,\"************************************\\n\\t\\t\\t\\t\\tNewsletter End\\n\\t\\t\\t*************************************\"],[1,\"\\n  \"],[3,\"************************************\\n\\t\\t\\t\\t\\tTrusted Start\\n\\t\\t\\t*************************************\"],[1,\"\\n  \"],[10,\"section\"],[14,0,\"tg-sectionspace tg-haslayout\"],[12],[1,\"\\n    \"],[10,0],[14,0,\"container\"],[12],[1,\"\\n      \"],[10,0],[14,0,\"row\"],[12],[1,\"\\n        \"],[10,0],[14,0,\"col-xs-12 col-sm-12 col-md-10 col-md-push-1 col-lg-8 col-lg-push-2\"],[12],[1,\"\\n          \"],[10,0],[14,0,\"tg-sectionhead\"],[12],[1,\"\\n            \"],[10,0],[14,0,\"tg-heading\"],[12],[1,\"\\n              \"],[10,\"h2\"],[12],[1,\"Trusted By Many\"],[13],[1,\"\\n            \"],[13],[1,\"\\n            \"],[10,0],[14,0,\"tg-description\"],[12],[1,\"\\n              \"],[10,2],[12],[1,\"Consectetur adipisicing elit, sed do eiusmod tempor incididunt\\n                ut labore etaiate dolore magna aliqua. Ut enim ad minim veniam,\\n                quis nostrud exercitation ullamco laboris nisi ut aliquip exea\\n                commodo consequat.\"],[13],[1,\"\\n            \"],[13],[1,\"\\n          \"],[13],[1,\"\\n        \"],[13],[1,\"\\n        \"],[10,0],[14,0,\"col-xs-12 col-sm-12 col-md-12 col-lg-13\"],[12],[1,\"\\n          \"],[10,\"ul\"],[14,0,\"tg-brands\"],[12],[1,\"\\n            \"],[10,\"li\"],[14,0,\"tg-brand\"],[12],[10,\"figure\"],[12],[10,3],[14,6,\"javascript:void(0);\"],[12],[10,\"img\"],[14,\"src\",\"images/brands/img-01.png\"],[14,\"alt\",\"image description\"],[12],[13],[13],[13],[13],[1,\"\\n            \"],[10,\"li\"],[14,0,\"tg-brand\"],[12],[10,\"figure\"],[12],[10,3],[14,6,\"javascript:void(0);\"],[12],[10,\"img\"],[14,\"src\",\"images/brands/img-02.png\"],[14,\"alt\",\"image description\"],[12],[13],[13],[13],[13],[1,\"\\n            \"],[10,\"li\"],[14,0,\"tg-brand\"],[12],[10,\"figure\"],[12],[10,3],[14,6,\"javascript:void(0);\"],[12],[10,\"img\"],[14,\"src\",\"images/brands/img-03.png\"],[14,\"alt\",\"image description\"],[12],[13],[13],[13],[13],[1,\"\\n            \"],[10,\"li\"],[14,0,\"tg-brand\"],[12],[10,\"figure\"],[12],[10,3],[14,6,\"javascript:void(0);\"],[12],[10,\"img\"],[14,\"src\",\"images/brands/img-04.png\"],[14,\"alt\",\"image description\"],[12],[13],[13],[13],[13],[1,\"\\n            \"],[10,\"li\"],[14,0,\"tg-brand\"],[12],[10,\"figure\"],[12],[10,3],[14,6,\"javascript:void(0);\"],[12],[10,\"img\"],[14,\"src\",\"images/brands/img-05.png\"],[14,\"alt\",\"image description\"],[12],[13],[13],[13],[13],[1,\"\\n            \"],[10,\"li\"],[14,0,\"tg-brand\"],[12],[10,\"figure\"],[12],[10,3],[14,6,\"javascript:void(0);\"],[12],[10,\"img\"],[14,\"src\",\"images/brands/img-06.png\"],[14,\"alt\",\"image description\"],[12],[13],[13],[13],[13],[1,\"\\n            \"],[10,\"li\"],[14,0,\"tg-brand\"],[12],[10,\"figure\"],[12],[10,3],[14,6,\"javascript:void(0);\"],[12],[10,\"img\"],[14,\"src\",\"images/brands/img-07.png\"],[14,\"alt\",\"image description\"],[12],[13],[13],[13],[13],[1,\"\\n            \"],[10,\"li\"],[14,0,\"tg-brand\"],[12],[10,\"figure\"],[12],[10,3],[14,6,\"javascript:void(0);\"],[12],[10,\"img\"],[14,\"src\",\"images/brands/img-08.png\"],[14,\"alt\",\"image description\"],[12],[13],[13],[13],[13],[1,\"\\n          \"],[13],[1,\"\\n        \"],[13],[1,\"\\n      \"],[13],[1,\"\\n    \"],[13],[1,\"\\n  \"],[13],[1,\"\\n  \"],[3,\"************************************\\n\\t\\t\\t\\t\\tTrusted End\\n\\t\\t\\t*************************************\"],[1,\"\\n\"],[13]],[],false,[\"page-title\",\"link-to\"]]",
    "moduleName": "tailor-this-web/templates/about.hbs",
    "isStrictMode": false
  });

  _exports.default = _default;
});
;define("tailor-this-web/templates/application", ["exports", "@ember/template-factory"], function (_exports, _templateFactory) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;

  var _default = (0, _templateFactory.createTemplateFactory)({
    "id": "mTdMNmFk",
    "block": "[[[1,[28,[35,0],[\"TailorThisWeb\"],null]],[1,\"\\n\"],[10,\"header\"],[14,1,\"tg-header\"],[14,0,\"tg-header tg-haslayout\"],[12],[1,\"\\n\\t\\t\\t\"],[10,0],[14,0,\"tg-topbar\"],[12],[1,\"\\n\\t\\t\\t\\t\"],[10,0],[14,0,\"container\"],[12],[1,\"\\n\\t\\t\\t\\t\\t\"],[10,0],[14,0,\"row\"],[12],[1,\"\\n\\t\\t\\t\\t\\t\\t\"],[10,0],[14,0,\"col-xs-12 col-sm-12 col-md-12 col-lg-12\"],[12],[1,\"\\n\\t\\t\\t\\t\\t\\t\\t\"],[10,\"ul\"],[14,0,\"tg-addressinfo\"],[12],[1,\"\\n\\t\\t\\t\\t\\t\\t\\t\\t\"],[10,\"li\"],[12],[1,\"\\n\\t\\t\\t\\t\\t\\t\\t\\t\\t\"],[10,\"i\"],[14,0,\"fa fa-phone\"],[12],[13],[1,\"\\n\\t\\t\\t\\t\\t\\t\\t\\t\\t\"],[10,\"address\"],[12],[1,\"Our contact here\"],[13],[1,\"\\n\\t\\t\\t\\t\\t\\t\\t\\t\"],[13],[1,\"\\n\\t\\t\\t\\t\\t\\t\\t\\t\"],[10,\"li\"],[12],[1,\"\\n\\t\\t\\t\\t\\t\\t\\t\\t\\t\"],[10,\"i\"],[14,0,\"fa fa-envelope\"],[12],[13],[1,\"\\n\\t\\t\\t\\t\\t\\t\\t\\t\\t\"],[10,1],[12],[1,\"our contact info\"],[13],[1,\"\\n\\t\\t\\t\\t\\t\\t\\t\\t\"],[13],[1,\"\\n\\t\\t\\t\\t\\t\\t\\t\"],[13],[1,\"\\n\\t\\t\\t\\t\\t\\t\\t\"],[10,\"ul\"],[14,0,\"tg-socialicons\"],[12],[1,\"\\n\\t\\t\\t\\t\\t\\t\\t\\t\"],[10,\"li\"],[14,0,\"tg-facebook\"],[12],[10,3],[14,6,\"javascript:void(0);\"],[12],[10,\"i\"],[14,0,\"fa fa-facebook\"],[12],[13],[13],[13],[1,\"\\n\\t\\t\\t\\t\\t\\t\\t\\t\"],[10,\"li\"],[14,0,\"tg-twitter\"],[12],[10,3],[14,6,\"javascript:void(0);\"],[12],[10,\"i\"],[14,0,\"fa fa-twitter\"],[12],[13],[13],[13],[1,\"\\n\\t\\t\\t\\t\\t\\t\\t\\t\"],[10,\"li\"],[14,0,\"tg-linkedin\"],[12],[10,3],[14,6,\"javascript:void(0);\"],[12],[10,\"i\"],[14,0,\"fa fa-linkedin\"],[12],[13],[13],[13],[1,\"\\n\\t\\t\\t\\t\\t\\t\\t\\t\"],[10,\"li\"],[14,0,\"tg-googleplus\"],[12],[10,3],[14,6,\"javascript:void(0);\"],[12],[10,\"i\"],[14,0,\"fa fa-google-plus\"],[12],[13],[13],[13],[1,\"\\n\\t\\t\\t\\t\\t\\t\\t\\t\"],[10,\"li\"],[14,0,\"tg-rss\"],[12],[10,3],[14,6,\"javascript:void(0);\"],[12],[10,\"i\"],[14,0,\"fa fa-rss\"],[12],[13],[13],[13],[1,\"\\n\\t\\t\\t\\t\\t\\t\\t\"],[13],[1,\"\\n\\t\\t\\t\\t\\t\\t\"],[13],[1,\"\\n\\t\\t\\t\\t\\t\"],[13],[1,\"\\n\\t\\t\\t\\t\"],[13],[1,\"\\n\\t\\t\\t\"],[13],[1,\"\\n\\t\\t\\t\"],[10,0],[14,0,\"tg-logonav\"],[12],[1,\"\\n\\t\\t\\t\\t\"],[10,0],[14,0,\"container\"],[12],[1,\"\\n\\t\\t\\t\\t\\t\"],[10,0],[14,0,\"row\"],[12],[1,\"\\n\\t\\t\\t\\t\\t\\t\"],[10,0],[14,0,\"col-xs-12 col-sm-12 col-md-12 col-lg-12\"],[12],[1,\"\\n\\t\\t\\t\\t\\t\\t\\t\"],[10,\"strong\"],[14,0,\"tg-logo\"],[12],[10,3],[14,6,\"index.html\"],[12],[10,\"h2\"],[12],[1,\"Tailor This\"],[13],[13],[13],[1,\"\\n\\t\\t\\t\\t\\t\\t\\t\"],[10,0],[14,0,\"tg-navigationarea\"],[12],[1,\"\\n\\t\\t\\t\\t\\t\\t\\t\\t\"],[10,\"nav\"],[14,1,\"tg-nav\"],[14,0,\"tg-nav\"],[12],[1,\"\\n\\t\\t\\t\\t\\t\\t\\t\\t\\t\"],[10,0],[14,0,\"navbar-header\"],[12],[1,\"\\n\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t\"],[10,\"button\"],[14,0,\"navbar-toggle collapsed\"],[14,\"data-toggle\",\"collapse\"],[14,\"data-target\",\"#tg-navigation\"],[14,\"aria-expanded\",\"false\"],[14,4,\"button\"],[12],[1,\"\\n\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t\"],[10,1],[14,0,\"sr-only\"],[12],[1,\"Toggle navigation\"],[13],[1,\"\\n\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t\"],[10,1],[14,0,\"icon-bar\"],[12],[13],[1,\"\\n\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t\"],[10,1],[14,0,\"icon-bar\"],[12],[13],[1,\"\\n\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t\"],[10,1],[14,0,\"icon-bar\"],[12],[13],[1,\"\\n\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t\"],[13],[1,\"\\n\\t\\t\\t\\t\\t\\t\\t\\t\\t\"],[13],[1,\"\\n\\t\\t\\t\\t\\t\\t\\t\\t\\t\"],[10,0],[14,1,\"tg-navigation\"],[14,0,\"collapse navbar-collapse tg-navigation\"],[12],[1,\"\\n\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t\"],[10,\"ul\"],[12],[1,\"\\n\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t\"],[10,\"li\"],[12],[1,\"\\n\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t\"],[8,[39,1],null,[[\"@route\"],[\"landing\"]],[[\"default\"],[[[[1,\"Home\"]],[]]]]],[1,\"\\n\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t\"],[13],[1,\"\\n\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t\"],[10,\"li\"],[12],[10,3],[14,6,\"howto\"],[12],[1,\"How It Works\"],[13],[13],[1,\"\\n\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t\"],[10,\"li\"],[12],[8,[39,1],null,[[\"@route\"],[\"contact\"]],[[\"default\"],[[[[1,\"Contact\"]],[]]]]],[13],[1,\"\\n\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t\"],[10,\"li\"],[12],[8,[39,1],null,[[\"@route\"],[\"about\"]],[[\"default\"],[[[[1,\"About\"]],[]]]]],[13],[1,\"\\n\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t\"],[13],[1,\"\\n\\t\\t\\t\\t\\t\\t\\t\\t\\t\"],[13],[1,\"\\n\\t\\t\\t\\t\\t\\t\\t\\t\"],[13],[1,\"\\n\\t\\t\\t\\t\\t\\t\\t\"],[13],[1,\"\\n\\t\\t\\t\\t\\t\\t\"],[13],[1,\"\\n\\t\\t\\t\\t\\t\"],[13],[1,\"\\n\\t\\t\\t\\t\"],[13],[1,\"\\n\\t\\t\\t\"],[13],[1,\"\\n\\t\\t\"],[13],[1,\"\\n\"],[46,[28,[37,3],null,null],null,null,null]],[],false,[\"page-title\",\"link-to\",\"component\",\"-outlet\"]]",
    "moduleName": "tailor-this-web/templates/application.hbs",
    "isStrictMode": false
  });

  _exports.default = _default;
});
;define("tailor-this-web/templates/client/onboarding", ["exports", "@ember/template-factory"], function (_exports, _templateFactory) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;

  var _default = (0, _templateFactory.createTemplateFactory)({
    "id": "rGfC+tMy",
    "block": "[[[1,[28,[35,0],[\"Onboarding\"],null]],[1,\"\\n\\n\\t\\t\"],[3,\"************************************\\n\\t\\t\\t\\tMain Start\\n\\t\\t*************************************\"],[1,\"\\n\\t\\t\"],[10,\"main\"],[14,1,\"tg-main\"],[14,0,\"tg-main tg-haslayout tg-paddingzero\"],[12],[1,\"\\n\\t\\t\\t\"],[3,\"************************************\\n\\t\\t\\t\\t\\tTailor Online Start\\n\\t\\t\\t*************************************\"],[1,\"\\n\\t\\t\\t\"],[10,\"section\"],[14,0,\"tg-sectionspace tg-haslayout\"],[12],[1,\"\\n\\t\\t\\t\\t\"],[10,0],[14,0,\"container\"],[12],[1,\"\\n\\t\\t\\t\\t\\t\"],[10,0],[14,0,\"row\"],[12],[1,\"\\n\\t\\t\\t\\t\\t\\t\"],[10,0],[14,0,\"col-xs-12 col-sm-12 col-md-10 col-md-push-1 col-lg-8 col-lg-push-2\"],[12],[1,\"\\n\\t\\t\\t\\t\\t\\t\\t\"],[10,0],[14,0,\"tg-sectionhead\"],[12],[1,\"\\n\\t\\t\\t\\t\\t\\t\\t\\t\"],[10,0],[14,0,\"tg-heading\"],[12],[1,\"\\n\\t\\t\\t\\t\\t\\t\\t\\t\\t\"],[10,\"h2\"],[12],[1,\"Team Behind Tailor Online\"],[13],[1,\"\\n\\t\\t\\t\\t\\t\\t\\t\\t\"],[13],[1,\"\\n\\t\\t\\t\\t\\t\\t\\t\\t\"],[10,0],[14,0,\"tg-description\"],[12],[1,\"\\n\\t\\t\\t\\t\\t\\t\\t\\t\\t\"],[10,2],[12],[1,\"Consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore etaiate dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip exea commodo consequat.\"],[13],[1,\"\\n\\t\\t\\t\\t\\t\\t\\t\\t\"],[13],[1,\"\\n\\t\\t\\t\\t\\t\\t\\t\"],[13],[1,\"\\n\\t\\t\\t\\t\\t\\t\"],[13],[1,\"\\n\\t\\t\\t\\t\\t\\t\"],[10,0],[14,0,\"tg-shortcode tg-tailoronline\"],[12],[1,\"\\n\\t\\t\\t\\t\\t\\t\\t\"],[10,0],[14,0,\"col-xs-12 col-sm-12 col-md-6 col-lg-6\"],[12],[1,\"\\n\\t\\t\\t\\t\\t\\t\\t\\t\"],[10,0],[14,1,\"tg-locationmap\"],[14,0,\"tg-locationmap\"],[12],[13],[1,\"\\n\\t\\t\\t\\t\\t\\t\\t\"],[13],[1,\"\\n\\t\\t\\t\\t\\t\\t\\t\"],[10,0],[14,0,\"col-xs-12 col-sm-12 col-md-6 col-lg-5\"],[12],[1,\"\\n\\t\\t\\t\\t\\t\\t\\t\\t\"],[10,\"form\"],[14,0,\"tg-themeform tg-formcontactus\"],[12],[1,\"\\n\\t\\t\\t\\t\\t\\t\\t\\t\\t\"],[10,\"fieldset\"],[12],[1,\"\\n\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t\"],[10,0],[14,0,\"form-group\"],[12],[1,\"\\n\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t\"],[10,\"input\"],[14,0,\"form-control\"],[14,3,\"yourname\"],[14,\"placeholder\",\"Your Name\"],[14,4,\"text\"],[12],[13],[1,\"\\n\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t\"],[13],[1,\"\\n\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t\"],[10,0],[14,0,\"form-group\"],[12],[1,\"\\n\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t\"],[10,\"input\"],[14,0,\"form-control\"],[14,3,\"email\"],[14,\"placeholder\",\"Email\"],[14,4,\"email\"],[12],[13],[1,\"\\n\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t\"],[13],[1,\"\\n\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t\"],[10,0],[14,0,\"form-group\"],[12],[1,\"\\n\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t\"],[10,\"input\"],[14,0,\"form-control\"],[14,3,\"phone\"],[14,\"placeholder\",\"Phone\"],[14,4,\"text\"],[12],[13],[1,\"\\n\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t\"],[13],[1,\"\\n\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t\"],[10,0],[14,0,\"form-group\"],[12],[1,\"\\n\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t\"],[10,\"input\"],[14,0,\"form-control\"],[14,3,\"subject\"],[14,\"placeholder\",\"Subject\"],[14,4,\"text\"],[12],[13],[1,\"\\n\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t\"],[13],[1,\"\\n\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t\"],[10,0],[14,0,\"form-group\"],[12],[1,\"\\n\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t\"],[10,\"textarea\"],[14,3,\"message\"],[14,\"placeholder\",\"Message\"],[12],[13],[1,\"\\n\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t\"],[13],[1,\"\\n\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t\"],[10,\"button\"],[14,0,\"tg-btn\"],[14,4,\"submit\"],[12],[1,\"send now\"],[13],[1,\"\\n\\t\\t\\t\\t\\t\\t\\t\\t\\t\"],[13],[1,\"\\n\\t\\t\\t\\t\\t\\t\\t\\t\"],[13],[1,\"\\n\\t\\t\\t\\t\\t\\t\\t\"],[13],[1,\"\\n\\t\\t\\t\\t\\t\\t\"],[13],[1,\"\\n\\t\\t\\t\\t\\t\"],[13],[1,\"\\n\\t\\t\\t\\t\"],[13],[1,\"\\n\\t\\t\\t\"],[13],[1,\"\\n\\t\\t\\t\"],[3,\"************************************\\n\\t\\t\\t\\t\\tTailor Online End\\n\\t\\t\\t*************************************\"],[1,\"\\n\\t\\t\\t\"],[3,\"************************************\\n\\t\\t\\t\\t\\tNewsletter Start\\n\\t\\t\\t*************************************\"],[1,\"\\n\\t\\t\\t\"],[10,\"section\"],[14,0,\"tg-sectionspace tg-bglight tg-haslayout\"],[12],[1,\"\\n\\t\\t\\t\\t\"],[10,0],[14,0,\"container\"],[12],[1,\"\\n\\t\\t\\t\\t\\t\"],[10,0],[14,0,\"row\"],[12],[1,\"\\n\\t\\t\\t\\t\\t\\t\"],[10,0],[14,0,\"col-xs-12 col-sm-12 col-md-12 col-lg-12\"],[12],[1,\"\\n\\t\\t\\t\\t\\t\\t\\t\"],[10,\"form\"],[14,0,\"tg-themeform tg-formnewsletter\"],[12],[1,\"\\n\\t\\t\\t\\t\\t\\t\\t\\t\"],[10,\"fieldset\"],[12],[1,\"\\n\\t\\t\\t\\t\\t\\t\\t\\t\\t\"],[10,0],[14,0,\"tg-formtitle\"],[12],[1,\"\\n\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t\"],[10,\"h3\"],[12],[10,1],[12],[1,\"Get Latest Updates & Info\"],[13],[1,\"Signup For Newsletter!\"],[13],[1,\"\\n\\t\\t\\t\\t\\t\\t\\t\\t\\t\"],[13],[1,\"\\n\\t\\t\\t\\t\\t\\t\\t\\t\\t\"],[10,0],[14,0,\"form-group\"],[12],[1,\"\\n\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t\"],[10,\"input\"],[14,0,\"form-control\"],[14,3,\"email\"],[14,\"placeholder\",\"Enter Your Email Here\"],[14,4,\"email\"],[12],[13],[1,\"\\n\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t\"],[10,\"button\"],[14,0,\"tg-btn\"],[14,4,\"button\"],[12],[1,\"Signup Now\"],[13],[1,\"\\n\\t\\t\\t\\t\\t\\t\\t\\t\\t\"],[13],[1,\"\\n\\t\\t\\t\\t\\t\\t\\t\\t\"],[13],[1,\"\\n\\t\\t\\t\\t\\t\\t\\t\"],[13],[1,\"\\n\\t\\t\\t\\t\\t\\t\"],[13],[1,\"\\n\\t\\t\\t\\t\\t\"],[13],[1,\"\\n\\t\\t\\t\\t\"],[13],[1,\"\\n\\t\\t\\t\"],[13],[1,\"\\n\\t\\t\\t\"],[3,\"************************************\\n\\t\\t\\t\\t\\tNewsletter End\\n\\t\\t\\t*************************************\"],[1,\"\\n\\t\\t\\t\"],[3,\"************************************\\n\\t\\t\\t\\t\\tTrusted Start\\n\\t\\t\\t*************************************\"],[1,\"\\n\\t\\t\\t\"],[10,\"section\"],[14,0,\"tg-sectionspace tg-haslayout\"],[12],[1,\"\\n\\t\\t\\t\\t\"],[10,0],[14,0,\"container\"],[12],[1,\"\\n\\t\\t\\t\\t\\t\"],[10,0],[14,0,\"row\"],[12],[1,\"\\n\\t\\t\\t\\t\\t\\t\"],[10,0],[14,0,\"col-xs-12 col-sm-12 col-md-10 col-md-push-1 col-lg-8 col-lg-push-2\"],[12],[1,\"\\n\\t\\t\\t\\t\\t\\t\\t\"],[10,0],[14,0,\"tg-sectionhead\"],[12],[1,\"\\n\\t\\t\\t\\t\\t\\t\\t\\t\"],[10,0],[14,0,\"tg-heading\"],[12],[1,\"\\n\\t\\t\\t\\t\\t\\t\\t\\t\\t\"],[10,\"h2\"],[12],[1,\"Trusted By Many\"],[13],[1,\"\\n\\t\\t\\t\\t\\t\\t\\t\\t\"],[13],[1,\"\\n\\t\\t\\t\\t\\t\\t\\t\\t\"],[10,0],[14,0,\"tg-description\"],[12],[1,\"\\n\\t\\t\\t\\t\\t\\t\\t\\t\\t\"],[10,2],[12],[1,\"Consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore etaiate dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip exea commodo consequat.\"],[13],[1,\"\\n\\t\\t\\t\\t\\t\\t\\t\\t\"],[13],[1,\"\\n\\t\\t\\t\\t\\t\\t\\t\"],[13],[1,\"\\n\\t\\t\\t\\t\\t\\t\"],[13],[1,\"\\n\\t\\t\\t\\t\\t\\t\"],[10,0],[14,0,\"col-xs-12 col-sm-12 col-md-12 col-lg-13\"],[12],[1,\"\\n\\t\\t\\t\\t\\t\\t\\t\"],[10,\"ul\"],[14,0,\"tg-brands\"],[12],[1,\"\\n\\t\\t\\t\\t\\t\\t\\t\\t\"],[10,\"li\"],[14,0,\"tg-brand\"],[12],[10,\"figure\"],[12],[10,3],[14,6,\"javascript:void(0);\"],[12],[10,\"img\"],[14,\"src\",\"images/brands/img-01.png\"],[14,\"alt\",\"image description\"],[12],[13],[13],[13],[13],[1,\"\\n\\t\\t\\t\\t\\t\\t\\t\\t\"],[10,\"li\"],[14,0,\"tg-brand\"],[12],[10,\"figure\"],[12],[10,3],[14,6,\"javascript:void(0);\"],[12],[10,\"img\"],[14,\"src\",\"images/brands/img-02.png\"],[14,\"alt\",\"image description\"],[12],[13],[13],[13],[13],[1,\"\\n\\t\\t\\t\\t\\t\\t\\t\\t\"],[10,\"li\"],[14,0,\"tg-brand\"],[12],[10,\"figure\"],[12],[10,3],[14,6,\"javascript:void(0);\"],[12],[10,\"img\"],[14,\"src\",\"images/brands/img-03.png\"],[14,\"alt\",\"image description\"],[12],[13],[13],[13],[13],[1,\"\\n\\t\\t\\t\\t\\t\\t\\t\\t\"],[10,\"li\"],[14,0,\"tg-brand\"],[12],[10,\"figure\"],[12],[10,3],[14,6,\"javascript:void(0);\"],[12],[10,\"img\"],[14,\"src\",\"images/brands/img-04.png\"],[14,\"alt\",\"image description\"],[12],[13],[13],[13],[13],[1,\"\\n\\t\\t\\t\\t\\t\\t\\t\\t\"],[10,\"li\"],[14,0,\"tg-brand\"],[12],[10,\"figure\"],[12],[10,3],[14,6,\"javascript:void(0);\"],[12],[10,\"img\"],[14,\"src\",\"images/brands/img-05.png\"],[14,\"alt\",\"image description\"],[12],[13],[13],[13],[13],[1,\"\\n\\t\\t\\t\\t\\t\\t\\t\\t\"],[10,\"li\"],[14,0,\"tg-brand\"],[12],[10,\"figure\"],[12],[10,3],[14,6,\"javascript:void(0);\"],[12],[10,\"img\"],[14,\"src\",\"images/brands/img-06.png\"],[14,\"alt\",\"image description\"],[12],[13],[13],[13],[13],[1,\"\\n\\t\\t\\t\\t\\t\\t\\t\\t\"],[10,\"li\"],[14,0,\"tg-brand\"],[12],[10,\"figure\"],[12],[10,3],[14,6,\"javascript:void(0);\"],[12],[10,\"img\"],[14,\"src\",\"images/brands/img-07.png\"],[14,\"alt\",\"image description\"],[12],[13],[13],[13],[13],[1,\"\\n\\t\\t\\t\\t\\t\\t\\t\\t\"],[10,\"li\"],[14,0,\"tg-brand\"],[12],[10,\"figure\"],[12],[10,3],[14,6,\"javascript:void(0);\"],[12],[10,\"img\"],[14,\"src\",\"images/brands/img-08.png\"],[14,\"alt\",\"image description\"],[12],[13],[13],[13],[13],[1,\"\\n\\t\\t\\t\\t\\t\\t\\t\"],[13],[1,\"\\n\\t\\t\\t\\t\\t\\t\"],[13],[1,\"\\n\\t\\t\\t\\t\\t\"],[13],[1,\"\\n\\t\\t\\t\\t\"],[13],[1,\"\\n\\t\\t\\t\"],[13],[1,\"\\n\\t\\t\\t\"],[3,\"************************************\\n\\t\\t\\t\\t\\tTrusted End\\n\\t\\t\\t*************************************\"],[1,\"\\n\\t\\t\"],[13],[1,\"\\n\\t\\t\"],[3,\"************************************\\n\\t\\t\\t\\tMain End\\n\\t\\t*************************************\"],[1,\"\\n\\t\\t\"],[3,\"************************************\\n\\t\\t\\t\\tFooter Start\\n\\t\\t*************************************\"],[1,\"\\n\\t\\t\"],[10,\"footer\"],[14,1,\"tg-footer\"],[14,0,\"tg-footer tg-haslayout\"],[12],[1,\"\\n\\t\\t\\t\"],[10,0],[14,0,\"tg-footerinfo\"],[12],[1,\"\\n\\t\\t\\t\\t\"],[10,0],[14,0,\"container\"],[12],[1,\"\\n\\t\\t\\t\\t\\t\"],[10,0],[14,0,\"row\"],[12],[1,\"\\n\\t\\t\\t\\t\\t\\t\"],[10,0],[14,0,\"tg-threecolumns\"],[12],[1,\"\\n\\t\\t\\t\\t\\t\\t\\t\"],[10,0],[14,0,\"col-xs-12 col-sm-4 col-md-4 col-lg-4\"],[12],[1,\"\\n\\t\\t\\t\\t\\t\\t\\t\\t\"],[10,0],[14,0,\"tg-column\"],[12],[1,\"\\n\\t\\t\\t\\t\\t\\t\\t\\t\\t\"],[10,\"strong\"],[14,0,\"tg-logo\"],[12],[1,\"\\n\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t\"],[10,3],[14,6,\"javascript:void(0);\"],[12],[10,\"img\"],[14,\"src\",\"images/logo.png\"],[14,\"alt\",\"image description\"],[12],[13],[13],[1,\"\\n\\t\\t\\t\\t\\t\\t\\t\\t\\t\"],[13],[1,\"\\n\\t\\t\\t\\t\\t\\t\\t\\t\\t\"],[10,0],[14,0,\"tg-description\"],[12],[1,\"\\n\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t\"],[10,2],[12],[1,\"Consectetur adipisicing elit sed doi eiusmod empor incididunt utnalo labore doloregna aliqua mianiem aliquip commodo consequat.\"],[13],[1,\"\\n\\t\\t\\t\\t\\t\\t\\t\\t\\t\"],[13],[1,\"\\n\\t\\t\\t\\t\\t\\t\\t\\t\\t\"],[10,\"ul\"],[14,0,\"tg-contactinfo\"],[12],[1,\"\\n\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t\"],[10,\"li\"],[12],[1,\"\\n\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t\"],[10,\"i\"],[14,0,\"icon-phone-handset\"],[12],[13],[1,\"\\n\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t\"],[10,1],[12],[1,\"0800 - 1234 - 562 - 6\"],[13],[1,\"\\n\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t\"],[13],[1,\"\\n\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t\"],[10,\"li\"],[12],[1,\"\\n\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t\"],[10,\"i\"],[14,0,\"icon-printer\"],[12],[13],[1,\"\\n\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t\"],[10,1],[12],[1,\"+4 1234 5678 - 9\"],[13],[1,\"\\n\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t\"],[13],[1,\"\\n\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t\"],[10,\"li\"],[12],[1,\"\\n\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t\"],[10,\"i\"],[14,0,\"icon-heart-pulse\"],[12],[13],[1,\"\\n\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t\"],[10,1],[12],[10,3],[14,6,\"mailto:support@domain.com\"],[12],[1,\"support@domain.com\"],[13],[13],[1,\"\\n\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t\"],[13],[1,\"\\n\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t\"],[10,\"li\"],[12],[1,\"\\n\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t\"],[10,\"i\"],[14,0,\"icon-pushpin\"],[12],[13],[1,\"\\n\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t\"],[10,\"address\"],[12],[1,\"795 South Park Avenue, Door 640 pushpin  Wonland, CA 94107, Australia\"],[13],[1,\"\\n\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t\"],[13],[1,\"\\n\\t\\t\\t\\t\\t\\t\\t\\t\\t\"],[13],[1,\"\\n\\t\\t\\t\\t\\t\\t\\t\\t\\t\"],[10,\"ul\"],[14,0,\"tg-socialicons\"],[12],[1,\"\\n\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t\"],[10,\"li\"],[14,0,\"tg-facebook\"],[12],[10,3],[14,6,\"javascript:void(0);\"],[12],[10,\"i\"],[14,0,\"fa fa-facebook\"],[12],[13],[13],[13],[1,\"\\n\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t\"],[10,\"li\"],[14,0,\"tg-twitter\"],[12],[10,3],[14,6,\"javascript:void(0);\"],[12],[10,\"i\"],[14,0,\"fa fa-twitter\"],[12],[13],[13],[13],[1,\"\\n\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t\"],[10,\"li\"],[14,0,\"tg-linkedin\"],[12],[10,3],[14,6,\"javascript:void(0);\"],[12],[10,\"i\"],[14,0,\"fa fa-linkedin\"],[12],[13],[13],[13],[1,\"\\n\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t\"],[10,\"li\"],[14,0,\"tg-googleplus\"],[12],[10,3],[14,6,\"javascript:void(0);\"],[12],[10,\"i\"],[14,0,\"fa fa-google-plus\"],[12],[13],[13],[13],[1,\"\\n\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t\"],[10,\"li\"],[14,0,\"tg-rss\"],[12],[10,3],[14,6,\"javascript:void(0);\"],[12],[10,\"i\"],[14,0,\"fa fa-rss\"],[12],[13],[13],[13],[1,\"\\n\\t\\t\\t\\t\\t\\t\\t\\t\\t\"],[13],[1,\"\\n\\t\\t\\t\\t\\t\\t\\t\\t\"],[13],[1,\"\\n\\t\\t\\t\\t\\t\\t\\t\"],[13],[1,\"\\n\\t\\t\\t\\t\\t\\t\\t\"],[10,0],[14,0,\"col-xs-12 col-sm-4 col-md-4 col-lg-4\"],[12],[1,\"\\n\\t\\t\\t\\t\\t\\t\\t\\t\"],[10,0],[14,0,\"tg-column\"],[12],[1,\"\\n\\t\\t\\t\\t\\t\\t\\t\\t\\t\"],[10,0],[14,0,\"tg-widget tg-widgetusefulllinks\"],[12],[1,\"\\n\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t\"],[10,0],[14,0,\"tg-widgettitle\"],[12],[1,\"\\n\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t\"],[10,\"h3\"],[12],[1,\"Useful Links\"],[13],[1,\"\\n\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t\"],[13],[1,\"\\n\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t\"],[10,0],[14,0,\"tg-widgetcontent\"],[12],[1,\"\\n\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t\"],[10,\"ul\"],[14,0,\"tg-usefulllinks tg-liststyledot\"],[12],[1,\"\\n\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t\"],[10,\"li\"],[12],[10,3],[14,6,\"javascript:void(0);\"],[12],[1,\"Consectetur adipisicing\"],[13],[13],[1,\"\\n\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t\"],[10,\"li\"],[12],[10,3],[14,6,\"javascript:void(0);\"],[12],[1,\"Exercitation ullamco\"],[13],[13],[1,\"\\n\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t\"],[10,\"li\"],[12],[10,3],[14,6,\"javascript:void(0);\"],[12],[1,\"Sed do eiusmod\"],[13],[13],[1,\"\\n\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t\"],[10,\"li\"],[12],[10,3],[14,6,\"javascript:void(0);\"],[12],[1,\"Laboris nisi ut aliquip\"],[13],[13],[1,\"\\n\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t\"],[10,\"li\"],[12],[10,3],[14,6,\"javascript:void(0);\"],[12],[1,\"Tempor incididunt\"],[13],[13],[1,\"\\n\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t\"],[10,\"li\"],[12],[10,3],[14,6,\"javascript:void(0);\"],[12],[1,\"Commodo consequat\"],[13],[13],[1,\"\\n\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t\"],[10,\"li\"],[12],[10,3],[14,6,\"javascript:void(0);\"],[12],[1,\"Labore et dolore magna\"],[13],[13],[1,\"\\n\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t\"],[10,\"li\"],[12],[10,3],[14,6,\"javascript:void(0);\"],[12],[1,\"Ta ta ta papoii\"],[13],[13],[1,\"\\n\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t\"],[10,\"li\"],[12],[10,3],[14,6,\"javascript:void(0);\"],[12],[1,\"Lokato pokinata\"],[13],[13],[1,\"\\n\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t\"],[13],[1,\"\\n\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t\"],[13],[1,\"\\n\\t\\t\\t\\t\\t\\t\\t\\t\\t\"],[13],[1,\"\\n\\t\\t\\t\\t\\t\\t\\t\\t\\t\"],[10,0],[14,0,\"tg-widget tg-widgetbusinesshours\"],[12],[1,\"\\n\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t\"],[10,0],[14,0,\"tg-widgettitle\"],[12],[1,\"\\n\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t\"],[10,\"h3\"],[12],[1,\"Business Hours\"],[13],[1,\"\\n\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t\"],[13],[1,\"\\n\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t\"],[10,0],[14,0,\"tg-widgetcontent\"],[12],[1,\"\\n\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t\"],[10,0],[14,0,\"tg-description\"],[12],[1,\"\\n\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t\"],[10,2],[12],[1,\"Consectetur adipisicing elit sed doi eiusod empor incidint quistans aliquip commodo consequat.\"],[13],[1,\"\\n\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t\"],[13],[1,\"\\n\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t\"],[10,\"ul\"],[14,0,\"tg-timinginfo\"],[12],[1,\"\\n\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t\"],[10,\"li\"],[12],[1,\"\\n\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t\"],[10,1],[12],[1,\"Monday - Friday: \"],[13],[1,\"\\n\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t\"],[10,1],[12],[1,\"09:00am to 05:00pm\"],[13],[1,\"\\n\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t\"],[13],[1,\"\\n\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t\"],[10,\"li\"],[12],[1,\"\\n\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t\"],[10,1],[12],[1,\"Saturday: \"],[13],[1,\"\\n\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t\"],[10,1],[12],[1,\"09:00am to 02:00pm\"],[13],[1,\"\\n\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t\"],[13],[1,\"\\n\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t\"],[10,\"li\"],[12],[1,\"\\n\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t\"],[10,1],[12],[1,\"Sunday: \"],[13],[1,\"\\n\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t\"],[10,1],[12],[1,\"Closed\"],[13],[1,\"\\n\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t\"],[13],[1,\"\\n\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t\"],[13],[1,\"\\n\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t\"],[13],[1,\"\\n\\t\\t\\t\\t\\t\\t\\t\\t\\t\"],[13],[1,\"\\n\\t\\t\\t\\t\\t\\t\\t\\t\"],[13],[1,\"\\n\\t\\t\\t\\t\\t\\t\\t\"],[13],[1,\"\\n\\t\\t\\t\\t\\t\\t\\t\"],[10,0],[14,0,\"col-xs-12 col-sm-4 col-md-4 col-lg-4\"],[12],[1,\"\\n\\t\\t\\t\\t\\t\\t\\t\\t\"],[10,0],[14,0,\"tg-column\"],[12],[1,\"\\n\\t\\t\\t\\t\\t\\t\\t\\t\\t\"],[10,0],[14,0,\"tg-widget\"],[12],[1,\"\\n\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t\"],[10,0],[14,0,\"tg-widgettitle\"],[12],[1,\"\\n\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t\"],[10,\"h3\"],[12],[1,\"Signup Newsletter\"],[13],[1,\"\\n\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t\"],[13],[1,\"\\n\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t\"],[10,0],[14,0,\"tg-widgetcontent\"],[12],[1,\"\\n\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t\"],[10,\"form\"],[14,0,\"tg-themeform tg-formsignupnewsletter\"],[12],[1,\"\\n\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t\"],[10,\"fieldset\"],[12],[1,\"\\n\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t\"],[10,0],[14,0,\"form-group\"],[12],[1,\"\\n\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t\"],[10,\"input\"],[14,0,\"form-control\"],[14,3,\"firstname\"],[14,\"placeholder\",\"First Name\"],[14,4,\"text\"],[12],[13],[1,\"\\n\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t\"],[13],[1,\"\\n\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t\"],[10,0],[14,0,\"form-group\"],[12],[1,\"\\n\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t\"],[10,\"input\"],[14,0,\"form-control\"],[14,3,\"lastname\"],[14,\"placeholder\",\"last Name\"],[14,4,\"text\"],[12],[13],[1,\"\\n\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t\"],[13],[1,\"\\n\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t\"],[10,0],[14,0,\"form-group\"],[12],[1,\"\\n\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t\"],[10,\"input\"],[14,0,\"form-control\"],[14,3,\"email\"],[14,\"placeholder\",\"Enter Your Email Here*\"],[14,4,\"email\"],[12],[13],[1,\"\\n\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t\"],[13],[1,\"\\n\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t\"],[10,0],[14,0,\"form-group\"],[12],[1,\"\\n\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t\"],[10,\"button\"],[14,0,\"tg-btn\"],[14,4,\"submit\"],[12],[1,\"signup\"],[13],[1,\"\\n\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t\"],[13],[1,\"\\n\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t\"],[13],[1,\"\\n\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t\"],[13],[1,\"\\n\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t\"],[10,0],[14,0,\"tg-noticearea\"],[12],[1,\"\\n\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t\"],[10,1],[14,0,\"tg-noticeicon\"],[12],[10,\"i\"],[14,0,\"icon-bullhorn\"],[12],[13],[13],[1,\"\\n\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t\"],[10,\"h4\"],[12],[1,\"We Don’t Scam!\"],[13],[1,\"\\n\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t\"],[10,2],[12],[1,\"Consectetur adipisicing elit sed doi eiusod empor incidint.\"],[13],[1,\"\\n\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t\"],[13],[1,\"\\n\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t\"],[13],[1,\"\\n\\t\\t\\t\\t\\t\\t\\t\\t\\t\"],[13],[1,\"\\n\\t\\t\\t\\t\\t\\t\\t\\t\"],[13],[1,\"\\n\\t\\t\\t\\t\\t\\t\\t\"],[13],[1,\"\\n\\t\\t\\t\\t\\t\\t\"],[13],[1,\"\\n\\t\\t\\t\\t\\t\"],[13],[1,\"\\n\\t\\t\\t\\t\"],[13],[1,\"\\n\\t\\t\\t\"],[13],[1,\"\\n\\t\\t\\t\"],[10,0],[14,0,\"tg-footerbar\"],[12],[1,\"\\n\\t\\t\\t\\t\"],[10,0],[14,0,\"container\"],[12],[1,\"\\n\\t\\t\\t\\t\\t\"],[10,0],[14,0,\"row\"],[12],[1,\"\\n\\t\\t\\t\\t\\t\\t\"],[10,0],[14,0,\"col-xs-12 col-sm-12 col-md-12 col-lg-12\"],[12],[1,\"\\n\\t\\t\\t\\t\\t\\t\\t\"],[10,1],[14,0,\"tg-copyright\"],[12],[1,\"2017 All Rights Reserved © Tailor Online\"],[13],[1,\"\\n\\t\\t\\t\\t\\t\\t\\t\"],[10,\"nav\"],[14,0,\"tg-addnav\"],[12],[1,\"\\n\\t\\t\\t\\t\\t\\t\\t\\t\"],[10,\"ul\"],[12],[1,\"\\n\\t\\t\\t\\t\\t\\t\\t\\t\\t\"],[10,\"li\"],[12],[10,3],[14,6,\"javascript:void(0);\"],[12],[1,\"Terms & Conditions\"],[13],[13],[1,\"\\n\\t\\t\\t\\t\\t\\t\\t\\t\\t\"],[10,\"li\"],[12],[10,3],[14,6,\"javascript:void(0);\"],[12],[1,\"Privacy Policy\"],[13],[13],[1,\"\\n\\t\\t\\t\\t\\t\\t\\t\\t\\t\"],[10,\"li\"],[12],[10,3],[14,6,\"javascript:void(0);\"],[12],[1,\"How It Works\"],[13],[13],[1,\"\\n\\t\\t\\t\\t\\t\\t\\t\\t\"],[13],[1,\"\\n\\t\\t\\t\\t\\t\\t\\t\"],[13],[1,\"\\n\\t\\t\\t\\t\\t\\t\"],[13],[1,\"\\n\\t\\t\\t\\t\\t\"],[13],[1,\"\\n\\t\\t\\t\\t\"],[13],[1,\"\\n\\t\\t\\t\"],[13],[1,\"\\n\\t\\t\"],[13]],[],false,[\"page-title\"]]",
    "moduleName": "tailor-this-web/templates/client/onboarding.hbs",
    "isStrictMode": false
  });

  _exports.default = _default;
});
;define("tailor-this-web/templates/contact", ["exports", "@ember/template-factory"], function (_exports, _templateFactory) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;

  var _default = (0, _templateFactory.createTemplateFactory)({
    "id": "UmpZgMqT",
    "block": "[[[1,[28,[35,0],[\"Contact\"],null]],[1,\"\\n\"],[10,\"main\"],[14,1,\"tg-main\"],[14,0,\"tg-main tg-haslayout tg-paddingzero\"],[12],[1,\"\\n\\t\\t\\t\"],[3,\"************************************\\n\\t\\t\\t\\t\\tTailor Online Start\\n\\t\\t\\t*************************************\"],[1,\"\\n\\t\\t\\t\"],[10,\"section\"],[14,0,\"tg-sectionspace tg-haslayout\"],[12],[1,\"\\n\\t\\t\\t\\t\"],[10,0],[14,0,\"container\"],[12],[1,\"\\n\\t\\t\\t\\t\\t\"],[10,0],[14,0,\"row\"],[12],[1,\"\\n\\t\\t\\t\\t\\t\\t\"],[10,0],[14,0,\"col-xs-12 col-sm-12 col-md-10 col-md-push-1 col-lg-8 col-lg-push-2\"],[12],[1,\"\\n\\t\\t\\t\\t\\t\\t\\t\"],[10,0],[14,0,\"tg-sectionhead\"],[12],[1,\"\\n\\t\\t\\t\\t\\t\\t\\t\\t\"],[10,0],[14,0,\"tg-heading\"],[12],[1,\"\\n\\t\\t\\t\\t\\t\\t\\t\\t\\t\"],[10,\"h2\"],[12],[1,\"Team Behind Tailor This\"],[13],[1,\"\\n\\t\\t\\t\\t\\t\\t\\t\\t\"],[13],[1,\"\\n\\t\\t\\t\\t\\t\\t\\t\\t\"],[10,0],[14,0,\"tg-description\"],[12],[1,\"\\n\\t\\t\\t\\t\\t\\t\\t\\t\\t\"],[10,2],[12],[1,\"Consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore etaiate dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip exea commodo consequat.\"],[13],[1,\"\\n\\t\\t\\t\\t\\t\\t\\t\\t\"],[13],[1,\"\\n\\t\\t\\t\\t\\t\\t\\t\"],[13],[1,\"\\n\\t\\t\\t\\t\\t\\t\"],[13],[1,\"\\n\\t\\t\\t\\t\\t\\t\"],[10,0],[14,0,\"tg-shortcode tg-tailoronline\"],[12],[1,\"\\n\\t\\t\\t\\t\\t\\t\\t\"],[10,0],[14,0,\"col-xs-12 col-sm-12 col-md-6 col-lg-6\"],[12],[1,\"\\n\\t\\t\\t\\t\\t\\t\\t\\t\"],[10,0],[14,1,\"tg-locationmap\"],[14,0,\"tg-locationmap\"],[12],[13],[1,\"\\n\\t\\t\\t\\t\\t\\t\\t\"],[13],[1,\"\\n\\t\\t\\t\\t\\t\\t\\t\"],[10,0],[14,0,\"col-xs-12 col-sm-12 col-md-6 col-lg-5\"],[12],[1,\"\\n\\t\\t\\t\\t\\t\\t\\t\\t\"],[10,\"form\"],[14,0,\"tg-themeform tg-formcontactus\"],[12],[1,\"\\n\\t\\t\\t\\t\\t\\t\\t\\t\\t\"],[10,\"fieldset\"],[12],[1,\"\\n\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t\"],[10,0],[14,0,\"form-group\"],[12],[1,\"\\n\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t\"],[10,\"input\"],[14,0,\"form-control\"],[14,3,\"yourname\"],[14,\"placeholder\",\"Your Name\"],[14,4,\"text\"],[12],[13],[1,\"\\n\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t\"],[13],[1,\"\\n\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t\"],[10,0],[14,0,\"form-group\"],[12],[1,\"\\n\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t\"],[10,\"input\"],[14,0,\"form-control\"],[14,3,\"email\"],[14,\"placeholder\",\"Email\"],[14,4,\"email\"],[12],[13],[1,\"\\n\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t\"],[13],[1,\"\\n\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t\"],[10,0],[14,0,\"form-group\"],[12],[1,\"\\n\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t\"],[10,\"input\"],[14,0,\"form-control\"],[14,3,\"phone\"],[14,\"placeholder\",\"Phone\"],[14,4,\"text\"],[12],[13],[1,\"\\n\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t\"],[13],[1,\"\\n\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t\"],[10,0],[14,0,\"form-group\"],[12],[1,\"\\n\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t\"],[10,\"input\"],[14,0,\"form-control\"],[14,3,\"subject\"],[14,\"placeholder\",\"Subject\"],[14,4,\"text\"],[12],[13],[1,\"\\n\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t\"],[13],[1,\"\\n\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t\"],[10,0],[14,0,\"form-group\"],[12],[1,\"\\n\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t\"],[10,\"textarea\"],[14,3,\"message\"],[14,\"placeholder\",\"Message\"],[12],[13],[1,\"\\n\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t\"],[13],[1,\"\\n\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t\"],[10,\"button\"],[14,0,\"tg-btn\"],[14,4,\"submit\"],[12],[1,\"send now\"],[13],[1,\"\\n\\t\\t\\t\\t\\t\\t\\t\\t\\t\"],[13],[1,\"\\n\\t\\t\\t\\t\\t\\t\\t\\t\"],[13],[1,\"\\n\\t\\t\\t\\t\\t\\t\\t\"],[13],[1,\"\\n\\t\\t\\t\\t\\t\\t\"],[13],[1,\"\\n\\t\\t\\t\\t\\t\"],[13],[1,\"\\n\\t\\t\\t\\t\"],[13],[1,\"\\n\\t\\t\\t\"],[13],[1,\"\\n\\t\\t\\t\"],[3,\"************************************\\n\\t\\t\\t\\t\\tTailor Online End\\n\\t\\t\\t*************************************\"],[1,\"\\n\\t\\t\\t\"],[3,\"************************************\\n\\t\\t\\t\\t\\tNewsletter Start\\n\\t\\t\\t*************************************\"],[1,\"\\n\\t\\t\\t\"],[10,\"section\"],[14,0,\"tg-sectionspace tg-bglight tg-haslayout\"],[12],[1,\"\\n\\t\\t\\t\\t\"],[10,0],[14,0,\"container\"],[12],[1,\"\\n\\t\\t\\t\\t\\t\"],[10,0],[14,0,\"row\"],[12],[1,\"\\n\\t\\t\\t\\t\\t\\t\"],[10,0],[14,0,\"col-xs-12 col-sm-12 col-md-12 col-lg-12\"],[12],[1,\"\\n\\t\\t\\t\\t\\t\\t\\t\"],[10,\"form\"],[14,0,\"tg-themeform tg-formnewsletter\"],[12],[1,\"\\n\\t\\t\\t\\t\\t\\t\\t\\t\"],[10,\"fieldset\"],[12],[1,\"\\n\\t\\t\\t\\t\\t\\t\\t\\t\\t\"],[10,0],[14,0,\"tg-formtitle\"],[12],[1,\"\\n\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t\"],[10,\"h3\"],[12],[10,1],[12],[1,\"Get Latest Updates & Info\"],[13],[1,\"Signup For Newsletter!\"],[13],[1,\"\\n\\t\\t\\t\\t\\t\\t\\t\\t\\t\"],[13],[1,\"\\n\\t\\t\\t\\t\\t\\t\\t\\t\\t\"],[10,0],[14,0,\"form-group\"],[12],[1,\"\\n\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t\"],[10,\"input\"],[14,0,\"form-control\"],[14,3,\"email\"],[14,\"placeholder\",\"Enter Your Email Here\"],[14,4,\"email\"],[12],[13],[1,\"\\n\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t\"],[10,\"button\"],[14,0,\"tg-btn\"],[14,4,\"button\"],[12],[1,\"Signup Now\"],[13],[1,\"\\n\\t\\t\\t\\t\\t\\t\\t\\t\\t\"],[13],[1,\"\\n\\t\\t\\t\\t\\t\\t\\t\\t\"],[13],[1,\"\\n\\t\\t\\t\\t\\t\\t\\t\"],[13],[1,\"\\n\\t\\t\\t\\t\\t\\t\"],[13],[1,\"\\n\\t\\t\\t\\t\\t\"],[13],[1,\"\\n\\t\\t\\t\\t\"],[13],[1,\"\\n\\t\\t\\t\"],[13],[1,\"\\n\\t\\t\\t\"],[3,\"************************************\\n\\t\\t\\t\\t\\tNewsletter End\\n\\t\\t\\t*************************************\"],[1,\"\\n\\t\\t\\t\"],[3,\"************************************\\n\\t\\t\\t\\t\\tTrusted Start\\n\\t\\t\\t*************************************\"],[1,\"\\n\\t\\t\\t\"],[10,\"section\"],[14,0,\"tg-sectionspace tg-haslayout\"],[12],[1,\"\\n\\t\\t\\t\\t\"],[10,0],[14,0,\"container\"],[12],[1,\"\\n\\t\\t\\t\\t\\t\"],[10,0],[14,0,\"row\"],[12],[1,\"\\n\\t\\t\\t\\t\\t\\t\"],[10,0],[14,0,\"col-xs-12 col-sm-12 col-md-10 col-md-push-1 col-lg-8 col-lg-push-2\"],[12],[1,\"\\n\\t\\t\\t\\t\\t\\t\\t\"],[10,0],[14,0,\"tg-sectionhead\"],[12],[1,\"\\n\\t\\t\\t\\t\\t\\t\\t\\t\"],[10,0],[14,0,\"tg-heading\"],[12],[1,\"\\n\\t\\t\\t\\t\\t\\t\\t\\t\\t\"],[10,\"h2\"],[12],[1,\"Trusted By Many\"],[13],[1,\"\\n\\t\\t\\t\\t\\t\\t\\t\\t\"],[13],[1,\"\\n\\t\\t\\t\\t\\t\\t\\t\\t\"],[10,0],[14,0,\"tg-description\"],[12],[1,\"\\n\\t\\t\\t\\t\\t\\t\\t\\t\\t\"],[10,2],[12],[1,\"Consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore etaiate dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip exea commodo consequat.\"],[13],[1,\"\\n\\t\\t\\t\\t\\t\\t\\t\\t\"],[13],[1,\"\\n\\t\\t\\t\\t\\t\\t\\t\"],[13],[1,\"\\n\\t\\t\\t\\t\\t\\t\"],[13],[1,\"\\n\\t\\t\\t\\t\\t\\t\"],[10,0],[14,0,\"col-xs-12 col-sm-12 col-md-12 col-lg-13\"],[12],[1,\"\\n\\t\\t\\t\\t\\t\\t\\t\"],[10,\"ul\"],[14,0,\"tg-brands\"],[12],[1,\"\\n\\t\\t\\t\\t\\t\\t\\t\\t\"],[10,\"li\"],[14,0,\"tg-brand\"],[12],[10,\"figure\"],[12],[10,3],[14,6,\"javascript:void(0);\"],[12],[10,\"img\"],[14,\"src\",\"images/brands/img-01.png\"],[14,\"alt\",\"image description\"],[12],[13],[13],[13],[13],[1,\"\\n\\t\\t\\t\\t\\t\\t\\t\\t\"],[10,\"li\"],[14,0,\"tg-brand\"],[12],[10,\"figure\"],[12],[10,3],[14,6,\"javascript:void(0);\"],[12],[10,\"img\"],[14,\"src\",\"images/brands/img-02.png\"],[14,\"alt\",\"image description\"],[12],[13],[13],[13],[13],[1,\"\\n\\t\\t\\t\\t\\t\\t\\t\\t\"],[10,\"li\"],[14,0,\"tg-brand\"],[12],[10,\"figure\"],[12],[10,3],[14,6,\"javascript:void(0);\"],[12],[10,\"img\"],[14,\"src\",\"images/brands/img-03.png\"],[14,\"alt\",\"image description\"],[12],[13],[13],[13],[13],[1,\"\\n\\t\\t\\t\\t\\t\\t\\t\\t\"],[10,\"li\"],[14,0,\"tg-brand\"],[12],[10,\"figure\"],[12],[10,3],[14,6,\"javascript:void(0);\"],[12],[10,\"img\"],[14,\"src\",\"images/brands/img-04.png\"],[14,\"alt\",\"image description\"],[12],[13],[13],[13],[13],[1,\"\\n\\t\\t\\t\\t\\t\\t\\t\\t\"],[10,\"li\"],[14,0,\"tg-brand\"],[12],[10,\"figure\"],[12],[10,3],[14,6,\"javascript:void(0);\"],[12],[10,\"img\"],[14,\"src\",\"images/brands/img-05.png\"],[14,\"alt\",\"image description\"],[12],[13],[13],[13],[13],[1,\"\\n\\t\\t\\t\\t\\t\\t\\t\\t\"],[10,\"li\"],[14,0,\"tg-brand\"],[12],[10,\"figure\"],[12],[10,3],[14,6,\"javascript:void(0);\"],[12],[10,\"img\"],[14,\"src\",\"images/brands/img-06.png\"],[14,\"alt\",\"image description\"],[12],[13],[13],[13],[13],[1,\"\\n\\t\\t\\t\\t\\t\\t\\t\\t\"],[10,\"li\"],[14,0,\"tg-brand\"],[12],[10,\"figure\"],[12],[10,3],[14,6,\"javascript:void(0);\"],[12],[10,\"img\"],[14,\"src\",\"images/brands/img-07.png\"],[14,\"alt\",\"image description\"],[12],[13],[13],[13],[13],[1,\"\\n\\t\\t\\t\\t\\t\\t\\t\\t\"],[10,\"li\"],[14,0,\"tg-brand\"],[12],[10,\"figure\"],[12],[10,3],[14,6,\"javascript:void(0);\"],[12],[10,\"img\"],[14,\"src\",\"images/brands/img-08.png\"],[14,\"alt\",\"image description\"],[12],[13],[13],[13],[13],[1,\"\\n\\t\\t\\t\\t\\t\\t\\t\"],[13],[1,\"\\n\\t\\t\\t\\t\\t\\t\"],[13],[1,\"\\n\\t\\t\\t\\t\\t\"],[13],[1,\"\\n\\t\\t\\t\\t\"],[13],[1,\"\\n\\t\\t\\t\"],[13],[1,\"\\n\\t\\t\\t\"],[3,\"************************************\\n\\t\\t\\t\\t\\tTrusted End\\n\\t\\t\\t*************************************\"],[1,\"\\n\\t\\t\"],[13]],[],false,[\"page-title\"]]",
    "moduleName": "tailor-this-web/templates/contact.hbs",
    "isStrictMode": false
  });

  _exports.default = _default;
});
;define("tailor-this-web/templates/home", ["exports", "@ember/template-factory"], function (_exports, _templateFactory) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;

  var _default = (0, _templateFactory.createTemplateFactory)({
    "id": "DnpUVM+n",
    "block": "[[[1,[28,[35,0],[\"Home\"],null]],[1,\"\\n\"],[10,0],[14,1,\"tg-wrapper\"],[14,0,\"tg-wrapper tg-haslayout\"],[12],[1,\"\\n  \"],[3,\"************************************\\n\\t\\t\\t\\tHeader Start\\n\\t\\t*************************************\"],[1,\"\\n  \"],[10,\"header\"],[14,1,\"tg-header\"],[14,0,\"tg-header tg-haslayout\"],[12],[1,\"\\n    \"],[10,0],[14,0,\"tg-topbar\"],[12],[1,\"\\n      \"],[10,0],[14,0,\"container\"],[12],[1,\"\\n        \"],[10,0],[14,0,\"row\"],[12],[1,\"\\n          \"],[10,0],[14,0,\"col-xs-12 col-sm-12 col-md-12 col-lg-12\"],[12],[1,\"\\n            \"],[10,\"ul\"],[14,0,\"tg-addressinfo\"],[12],[1,\"\\n              \"],[10,\"li\"],[12],[1,\"\\n                \"],[10,\"i\"],[14,0,\"icon-map-marker\"],[12],[13],[1,\"\\n                \"],[10,\"address\"],[12],[1,\"14 Tottenham Court Road, Manchester\"],[13],[1,\"\\n              \"],[13],[1,\"\\n              \"],[10,\"li\"],[12],[1,\"\\n                \"],[10,\"i\"],[14,0,\"icon-clock\"],[12],[13],[1,\"\\n                \"],[10,\"time\"],[14,\"datetime\",\"2016-10-10\"],[12],[1,\"Mon - Sat 9:00 - 17:00\"],[13],[1,\"\\n              \"],[13],[1,\"\\n              \"],[10,\"li\"],[12],[1,\"\\n                \"],[10,\"i\"],[14,0,\"icon-phone-handset\"],[12],[13],[1,\"\\n                \"],[10,1],[12],[1,\"+4 1234 567890\"],[13],[1,\"\\n              \"],[13],[1,\"\\n            \"],[13],[1,\"\\n            \"],[10,\"ul\"],[14,0,\"tg-socialicons\"],[12],[1,\"\\n              \"],[10,\"li\"],[14,0,\"tg-facebook\"],[12],[10,3],[14,6,\"javascript:void(0);\"],[12],[10,\"i\"],[14,0,\"fa fa-facebook\"],[12],[13],[13],[13],[1,\"\\n              \"],[10,\"li\"],[14,0,\"tg-twitter\"],[12],[10,3],[14,6,\"javascript:void(0);\"],[12],[10,\"i\"],[14,0,\"fa fa-twitter\"],[12],[13],[13],[13],[1,\"\\n              \"],[10,\"li\"],[14,0,\"tg-linkedin\"],[12],[10,3],[14,6,\"javascript:void(0);\"],[12],[10,\"i\"],[14,0,\"fa fa-linkedin\"],[12],[13],[13],[13],[1,\"\\n              \"],[10,\"li\"],[14,0,\"tg-googleplus\"],[12],[10,3],[14,6,\"javascript:void(0);\"],[12],[10,\"i\"],[14,0,\"fa fa-google-plus\"],[12],[13],[13],[13],[1,\"\\n              \"],[10,\"li\"],[14,0,\"tg-rss\"],[12],[10,3],[14,6,\"javascript:void(0);\"],[12],[10,\"i\"],[14,0,\"fa fa-rss\"],[12],[13],[13],[13],[1,\"\\n            \"],[13],[1,\"\\n          \"],[13],[1,\"\\n        \"],[13],[1,\"\\n      \"],[13],[1,\"\\n    \"],[13],[1,\"\\n    \"],[10,0],[14,0,\"tg-logonav\"],[12],[1,\"\\n      \"],[10,0],[14,0,\"container\"],[12],[1,\"\\n        \"],[10,0],[14,0,\"row\"],[12],[1,\"\\n          \"],[10,0],[14,0,\"col-xs-12 col-sm-12 col-md-12 col-lg-12\"],[12],[1,\"\\n            \"],[10,\"h2\"],[12],[1,\"Tailor This\"],[13],[1,\"\\n            \"],[10,0],[14,0,\"tg-navigationarea\"],[12],[1,\"\\n              \"],[10,\"nav\"],[14,1,\"tg-nav\"],[14,0,\"tg-nav\"],[12],[1,\"\\n                \"],[10,0],[14,0,\"navbar-header\"],[12],[1,\"\\n                  \"],[10,\"button\"],[14,0,\"navbar-toggle collapsed\"],[14,\"data-toggle\",\"collapse\"],[14,\"data-target\",\"#tg-navigation\"],[14,\"aria-expanded\",\"false\"],[14,4,\"button\"],[12],[1,\"\\n                    \"],[10,1],[14,0,\"sr-only\"],[12],[1,\"Toggle navigation\"],[13],[1,\"\\n                    \"],[10,1],[14,0,\"icon-bar\"],[12],[13],[1,\"\\n                    \"],[10,1],[14,0,\"icon-bar\"],[12],[13],[1,\"\\n                    \"],[10,1],[14,0,\"icon-bar\"],[12],[13],[1,\"\\n                  \"],[13],[1,\"\\n                \"],[13],[1,\"\\n                \"],[10,0],[14,1,\"tg-navigation\"],[14,0,\"collapse navbar-collapse tg-navigation\"],[12],[1,\"\\n                  \"],[10,\"ul\"],[12],[1,\"\\n                    \"],[10,\"li\"],[14,0,\"menu-item-has-children active\"],[12],[1,\"\\n                      \"],[10,3],[14,6,\"javascript:void(0);\"],[12],[1,\"hOME\"],[13],[1,\"\\n                      \"],[10,\"ul\"],[14,0,\"sub-menu\"],[12],[1,\"\\n                        \"],[10,\"li\"],[14,0,\"current-menu-item\"],[12],[10,3],[14,6,\"index.html\"],[12],[1,\"Home-1\"],[13],[13],[1,\"\\n                        \"],[10,\"li\"],[12],[10,3],[14,6,\"indexv2.html\"],[12],[1,\"Home-2\"],[13],[13],[1,\"\\n                      \"],[13],[1,\"\\n                    \"],[13],[1,\"\\n                    \"],[10,\"li\"],[12],[10,3],[14,6,\"shirt.html\"],[12],[1,\"Shirts\"],[13],[13],[1,\"\\n                    \"],[10,\"li\"],[12],[10,3],[14,6,\"blazers.html\"],[12],[1,\"Blazers\"],[13],[13],[1,\"\\n                    \"],[10,\"li\"],[12],[10,3],[14,6,\"pants.html\"],[12],[1,\"Pants\"],[13],[13],[1,\"\\n                    \"],[10,\"li\"],[12],[10,3],[14,6,\"howitwork.html\"],[12],[1,\"How It Works\"],[13],[13],[1,\"\\n                    \"],[10,\"li\"],[12],[10,3],[14,6,\"contactus.html\"],[12],[1,\"Contact\"],[13],[13],[1,\"\\n                    \"],[10,\"li\"],[14,0,\"menu-item-has-children\"],[12],[1,\"\\n                      \"],[10,3],[14,6,\"javascript:void(0);\"],[12],[10,\"i\"],[14,0,\"fa fa-ellipsis-h\"],[12],[13],[13],[1,\"\\n                      \"],[10,\"ul\"],[14,0,\"sub-menu\"],[12],[1,\"\\n                        \"],[10,\"li\"],[14,0,\"menu-item-has-children\"],[12],[1,\"\\n                          \"],[10,3],[14,6,\"javascript:void(0);\"],[12],[1,\"shop\"],[13],[1,\"\\n                          \"],[10,\"ul\"],[14,0,\"sub-menu\"],[12],[1,\"\\n                            \"],[10,\"li\"],[12],[10,3],[14,6,\"shop.html\"],[12],[1,\"shop\"],[13],[13],[1,\"\\n                            \"],[10,\"li\"],[12],[10,3],[14,6,\"shopdetail.html\"],[12],[1,\"Product Detail\"],[13],[13],[1,\"\\n                          \"],[13],[1,\"\\n                        \"],[13],[1,\"\\n                        \"],[10,\"li\"],[14,0,\"menu-item-has-children\"],[12],[1,\"\\n                          \"],[10,3],[14,6,\"javascript:void(0);\"],[12],[1,\"blog\"],[13],[1,\"\\n                          \"],[10,\"ul\"],[14,0,\"sub-menu\"],[12],[1,\"\\n                            \"],[10,\"li\"],[12],[10,3],[14,6,\"newsgrid.html\"],[12],[1,\"blog grid\"],[13],[13],[1,\"\\n                            \"],[10,\"li\"],[12],[10,3],[14,6,\"newslist.html\"],[12],[1,\"blog list\"],[13],[13],[1,\"\\n                            \"],[10,\"li\"],[12],[10,3],[14,6,\"newsdetail.html\"],[12],[1,\"blog detail\"],[13],[13],[1,\"\\n                          \"],[13],[1,\"\\n                        \"],[13],[1,\"\\n                        \"],[10,\"li\"],[12],[10,3],[14,6,\"aboutus.html\"],[12],[1,\"About\"],[13],[13],[1,\"\\n                        \"],[10,\"li\"],[12],[10,3],[14,6,\"404.html\"],[12],[1,\"404\"],[13],[13],[1,\"\\n                        \"],[10,\"li\"],[12],[10,3],[14,6,\"comingsoon.html\"],[12],[1,\"coming soon\"],[13],[13],[1,\"\\n                      \"],[13],[1,\"\\n                    \"],[13],[1,\"\\n                  \"],[13],[1,\"\\n                \"],[13],[1,\"\\n              \"],[13],[1,\"\\n              \"],[10,3],[14,0,\"tg-btn tg-btnstartcustomizing\"],[14,6,\"http://www.codezel.com/tailors-online/customizer/?pid=8\"],[14,\"target\",\"_blank\"],[12],[10,1],[12],[1,\"new\"],[13],[1,\"Start Customizing\"],[13],[1,\"\\n            \"],[13],[1,\"\\n          \"],[13],[1,\"\\n        \"],[13],[1,\"\\n      \"],[13],[1,\"\\n    \"],[13],[1,\"\\n  \"],[13],[1,\"\\n\"],[13],[1,\"\\n\\n\"],[46,[28,[37,2],null,null],null,null,null]],[],false,[\"page-title\",\"component\",\"-outlet\"]]",
    "moduleName": "tailor-this-web/templates/home.hbs",
    "isStrictMode": false
  });

  _exports.default = _default;
});
;define("tailor-this-web/templates/howto", ["exports", "@ember/template-factory"], function (_exports, _templateFactory) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;

  var _default = (0, _templateFactory.createTemplateFactory)({
    "id": "4eTZ59YD",
    "block": "[[[1,[28,[35,0],[\"Howto\"],null]],[1,\"\\n\"],[10,\"main\"],[14,1,\"tg-main\"],[14,0,\"tg-main tg-haslayout\"],[12],[1,\"\\n  \"],[10,0],[14,0,\"container\"],[12],[1,\"\\n    \"],[10,0],[14,0,\"row\"],[12],[1,\"\\n      \"],[10,0],[14,1,\"tg-content\"],[14,0,\"tg-content\"],[12],[1,\"\\n        \"],[10,0],[14,0,\"col-xs-12 col-sm-12 col-md-10 col-md-push-1 col-lg-8 col-lg-push-2\"],[12],[1,\"\\n          \"],[10,0],[14,0,\"tg-sectionhead\"],[12],[1,\"\\n            \"],[10,0],[14,0,\"tg-heading\"],[12],[1,\"\\n              \"],[10,\"h2\"],[12],[1,\"How Tailor This Works\"],[13],[1,\"\\n            \"],[13],[1,\"\\n            \"],[10,0],[14,0,\"tg-description\"],[12],[1,\"\\n              \"],[10,2],[12],[1,\"Consectetur adipisicing elit, sed do eiusmod tempor incididunt\\n                ut labore etaiate dolore magna aliqua. Ut enim ad minim veniam,\\n                quis nostrud exercitation ullamco laboris nisi ut aliquip exea\\n                commodo consequat.\"],[13],[1,\"\\n            \"],[13],[1,\"\\n          \"],[13],[1,\"\\n        \"],[13],[1,\"\\n\\n      \"],[13],[1,\"\\n    \"],[13],[1,\"\\n  \"],[13],[1,\"\\n\"],[13]],[],false,[\"page-title\"]]",
    "moduleName": "tailor-this-web/templates/howto.hbs",
    "isStrictMode": false
  });

  _exports.default = _default;
});
;define("tailor-this-web/templates/index", ["exports", "@ember/template-factory"], function (_exports, _templateFactory) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;

  var _default = (0, _templateFactory.createTemplateFactory)({
    "id": "bCvBaasa",
    "block": "[[[1,[28,[35,0],[\"Index\"],null]],[1,\"\\n\"],[46,[28,[37,2],null,null],null,null,null]],[],false,[\"page-title\",\"component\",\"-outlet\"]]",
    "moduleName": "tailor-this-web/templates/index.hbs",
    "isStrictMode": false
  });

  _exports.default = _default;
});
;define("tailor-this-web/templates/landing", ["exports", "@ember/template-factory"], function (_exports, _templateFactory) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;

  var _default = (0, _templateFactory.createTemplateFactory)({
    "id": "Y7M3Pqex",
    "block": "[[[1,[28,[35,0],[\"Landing\"],null]],[1,\"\\n\"],[10,\"main\"],[14,1,\"tg-main\"],[14,0,\"tg-main tg-haslayout\"],[12],[1,\"\\n  \"],[10,0],[14,0,\"container\"],[12],[1,\"\\n    \"],[10,0],[14,0,\"row\"],[12],[1,\"\\n      \"],[10,0],[14,0,\"main-page-wrapper tg-haslayout exclude-sidebar\"],[12],[10,0],[14,0,\"woocommerce\"],[12],[10,0],[14,0,\"woocommerce-notices-wrapper\"],[12],[13],[1,\"\\n\\n          \"],[10,0],[14,0,\"u-columns col2-set\"],[14,1,\"customer_login\"],[12],[1,\"\\n\\n            \"],[10,0],[14,0,\"u-column1 col-1\"],[12],[1,\"\\n\\n              \"],[10,\"h2\"],[12],[1,\"Login\"],[13],[1,\"\\n\\n              \"],[10,\"form\"],[14,0,\"woocommerce-form woocommerce-form-login login\"],[14,\"method\",\"post\"],[12],[1,\"\\n\\n                \"],[10,2],[14,0,\"woocommerce-form-row woocommerce-form-row--wide form-row form-row-wide\"],[12],[1,\"\\n                  \"],[10,\"label\"],[14,\"for\",\"username\"],[12],[1,\"Username or email address \"],[10,1],[14,0,\"required\"],[12],[1,\"*\"],[13],[13],[1,\"\\n                  \"],[10,\"input\"],[14,0,\"woocommerce-Input woocommerce-Input--text input-text\"],[14,3,\"username\"],[14,1,\"username\"],[14,\"autocomplete\",\"username\"],[14,2,\"\"],[14,4,\"text\"],[12],[13],[1,\"\\n                \"],[13],[1,\"\\n                \"],[10,2],[14,0,\"woocommerce-form-row woocommerce-form-row--wide form-row form-row-wide\"],[12],[1,\"\\n                  \"],[10,\"label\"],[14,\"for\",\"password\"],[12],[1,\"Password \"],[10,1],[14,0,\"required\"],[12],[1,\"*\"],[13],[13],[1,\"\\n                  \"],[10,1],[14,0,\"password-input\"],[12],[10,\"input\"],[14,0,\"woocommerce-Input woocommerce-Input--text input-text\"],[14,3,\"password\"],[14,1,\"password\"],[14,\"autocomplete\",\"current-password\"],[14,4,\"password\"],[12],[13],[10,1],[14,0,\"show-password-input\"],[12],[13],[13],[1,\"\\n                \"],[13],[1,\"\\n\\n                \"],[10,2],[14,0,\"form-row\"],[12],[1,\"\\n                  \"],[10,\"label\"],[14,0,\"woocommerce-form__label woocommerce-form__label-for-checkbox woocommerce-form-login__rememberme\"],[12],[1,\"\\n                    \"],[10,\"input\"],[14,0,\"woocommerce-form__input woocommerce-form__input-checkbox\"],[14,3,\"rememberme\"],[14,1,\"rememberme\"],[14,2,\"forever\"],[14,4,\"checkbox\"],[12],[13],[1,\"\\n                    \"],[10,1],[12],[1,\"Remember me\"],[13],[1,\"\\n                  \"],[13],[1,\"\\n                  \"],[10,\"input\"],[14,1,\"woocommerce-login-nonce\"],[14,3,\"woocommerce-login-nonce\"],[14,2,\"d5847b2171\"],[14,4,\"hidden\"],[12],[13],[10,\"input\"],[14,3,\"_wp_http_referer\"],[14,2,\"/tailors-online/my-account/\"],[14,4,\"hidden\"],[12],[13],[1,\"\\n                  \"],[10,\"button\"],[14,0,\"woocommerce-button button woocommerce-form-login__submit\"],[14,3,\"login\"],[14,2,\"Log in\"],[14,4,\"submit\"],[12],[1,\"Log in\"],[13],[1,\"\\n                \"],[13],[1,\"\\n                \"],[10,2],[14,0,\"woocommerce-LostPassword lost_password\"],[12],[1,\"\\n                  \"],[10,3],[14,6,\"http://www.codezel.com/tailors-online/my-account/lost-password/\"],[12],[1,\"Lost your password?\"],[13],[1,\"\\n                \"],[13],[1,\"\\n\\n              \"],[13],[1,\"\\n\\n            \"],[13],[1,\"\\n\\n            \"],[10,0],[14,0,\"u-column2 col-2\"],[12],[1,\"\\n\\n              \"],[10,\"h2\"],[12],[1,\"Register\"],[13],[1,\"\\n\\n              \"],[10,\"form\"],[14,\"method\",\"post\"],[14,0,\"woocommerce-form woocommerce-form-register register\"],[12],[1,\"\\n\\n                \"],[10,2],[14,0,\"woocommerce-form-row woocommerce-form-row--wide form-row form-row-wide\"],[12],[1,\"\\n                  \"],[10,\"label\"],[14,\"for\",\"reg_email\"],[12],[1,\"Email address \"],[10,1],[14,0,\"required\"],[12],[1,\"*\"],[13],[13],[1,\"\\n                  \"],[10,\"input\"],[14,0,\"woocommerce-Input woocommerce-Input--text input-text\"],[14,3,\"email\"],[14,1,\"reg_email\"],[14,\"autocomplete\",\"email\"],[14,2,\"\"],[14,4,\"email\"],[12],[13],[1,\"\\n                \"],[13],[1,\"\\n\\n                \"],[10,2],[14,0,\"woocommerce-form-row woocommerce-form-row--wide form-row form-row-wide\"],[12],[1,\"\\n                  \"],[10,\"label\"],[14,\"for\",\"reg_password\"],[12],[1,\"Password \"],[10,1],[14,0,\"required\"],[12],[1,\"*\"],[13],[13],[1,\"\\n                  \"],[10,1],[14,0,\"password-input\"],[12],[10,\"input\"],[14,0,\"woocommerce-Input woocommerce-Input--text input-text\"],[14,3,\"password\"],[14,1,\"reg_password\"],[14,\"autocomplete\",\"new-password\"],[14,4,\"password\"],[12],[13],[10,1],[14,0,\"show-password-input\"],[12],[13],[13],[1,\"\\n                \"],[13],[1,\"\\n\\n                \"],[10,0],[14,0,\"show_if_seller\"],[14,5,\"display:none\"],[12],[1,\"\\n\\n                  \"],[10,0],[14,0,\"split-row form-row-wide\"],[12],[1,\"\\n                    \"],[10,2],[14,0,\"form-row form-group\"],[12],[1,\"\\n                      \"],[10,\"label\"],[14,\"for\",\"first-name\"],[12],[1,\"First Name\\n                        \"],[10,1],[14,0,\"required\"],[12],[1,\"*\"],[13],[13],[1,\"\\n                      \"],[10,\"input\"],[14,0,\"input-text form-control\"],[14,3,\"fname\"],[14,1,\"first-name\"],[14,2,\"\"],[14,\"required\",\"required\"],[14,\"disabled\",\"disabled\"],[14,4,\"text\"],[12],[13],[1,\"\\n                    \"],[13],[1,\"\\n\\n                    \"],[10,2],[14,0,\"form-row form-group\"],[12],[1,\"\\n                      \"],[10,\"label\"],[14,\"for\",\"last-name\"],[12],[1,\"Last Name\\n                        \"],[10,1],[14,0,\"required\"],[12],[1,\"*\"],[13],[13],[1,\"\\n                      \"],[10,\"input\"],[14,0,\"input-text form-control\"],[14,3,\"lname\"],[14,1,\"last-name\"],[14,2,\"\"],[14,\"required\",\"required\"],[14,\"disabled\",\"disabled\"],[14,4,\"text\"],[12],[13],[1,\"\\n                    \"],[13],[1,\"\\n                  \"],[13],[1,\"\\n\\n                  \"],[10,2],[14,0,\"form-row form-group form-row-wide\"],[12],[1,\"\\n                    \"],[10,\"label\"],[14,\"for\",\"company-name\"],[12],[1,\"Shop Name\\n                      \"],[10,1],[14,0,\"required\"],[12],[1,\"*\"],[13],[13],[1,\"\\n                    \"],[10,\"input\"],[14,0,\"input-text form-control\"],[14,3,\"shopname\"],[14,1,\"company-name\"],[14,2,\"\"],[14,\"required\",\"required\"],[14,\"disabled\",\"disabled\"],[14,4,\"text\"],[12],[13],[1,\"\\n                  \"],[13],[1,\"\\n\\n                  \"],[10,2],[14,0,\"form-row form-group form-row-wide\"],[12],[1,\"\\n                    \"],[10,\"label\"],[14,\"for\",\"seller-url\"],[14,0,\"pull-left\"],[12],[1,\"Shop URL\\n                      \"],[10,1],[14,0,\"required\"],[12],[1,\"*\"],[13],[13],[1,\"\\n                    \"],[10,\"strong\"],[14,1,\"url-alart-mgs\"],[14,0,\"pull-right\"],[12],[13],[1,\"\\n                    \"],[10,\"input\"],[14,0,\"input-text form-control\"],[14,3,\"shopurl\"],[14,1,\"seller-url\"],[14,2,\"\"],[14,\"required\",\"required\"],[14,\"disabled\",\"disabled\"],[14,4,\"text\"],[12],[13],[1,\"\\n                    \"],[10,\"small\"],[12],[1,\"http://www.codezel.com/tailors-online/store/\"],[10,\"strong\"],[14,1,\"url-alart\"],[12],[13],[13],[1,\"\\n                  \"],[13],[1,\"\\n\\n                  \"],[10,2],[14,0,\"form-row form-group form-row-wide\"],[12],[1,\"\\n                    \"],[10,\"label\"],[14,\"for\",\"shop-phone\"],[12],[1,\"Phone Number\"],[10,1],[14,0,\"required\"],[12],[1,\"*\"],[13],[13],[1,\"\\n                    \"],[10,\"input\"],[14,0,\"input-text form-control\"],[14,3,\"phone\"],[14,1,\"shop-phone\"],[14,2,\"\"],[14,\"required\",\"required\"],[14,\"disabled\",\"disabled\"],[14,4,\"text\"],[12],[13],[1,\"\\n                  \"],[13],[1,\"\\n\\n                \"],[13],[1,\"\\n\\n                \"],[10,2],[14,0,\"form-row form-group user-role vendor-customer-registration\"],[12],[1,\"\\n\\n                  \"],[10,\"label\"],[14,0,\"radio\"],[12],[1,\"\\n                    \"],[10,\"input\"],[14,3,\"role\"],[14,2,\"customer\"],[14,\"checked\",\"checked\"],[14,4,\"radio\"],[12],[13],[1,\"\\n                    I am a customer\\n                  \"],[13],[1,\"\\n                  \"],[10,\"br\"],[12],[13],[1,\"\\n                  \"],[10,\"label\"],[14,0,\"radio\"],[12],[1,\"\\n                    \"],[10,\"input\"],[14,3,\"role\"],[14,2,\"seller\"],[14,4,\"radio\"],[12],[13],[1,\"\\n                    I am a vendor\\n                  \"],[13],[1,\"\\n\\n                \"],[13],[10,0],[14,0,\"woocommerce-privacy-policy-text\"],[12],[13],[1,\"\\n                \"],[10,2],[14,0,\"woocommerce-form-row form-row\"],[12],[1,\"\\n                  \"],[10,\"input\"],[14,1,\"woocommerce-register-nonce\"],[14,3,\"woocommerce-register-nonce\"],[14,2,\"05f93480dc\"],[14,4,\"hidden\"],[12],[13],[10,\"input\"],[14,3,\"_wp_http_referer\"],[14,2,\"/tailors-online/my-account/\"],[14,4,\"hidden\"],[12],[13],[1,\"\\n                  \"],[10,\"button\"],[14,0,\"woocommerce-Button woocommerce-button button woocommerce-form-register__submit\"],[14,3,\"register\"],[14,2,\"Register\"],[14,4,\"submit\"],[12],[1,\"Register\"],[13],[1,\"\\n                \"],[13],[1,\"\\n\\n              \"],[13],[1,\"\\n\\n            \"],[13],[1,\"\\n\\n          \"],[13],[1,\"\\n\\n        \"],[13],[1,\"\\n      \"],[13],[1,\"\\n    \"],[13],[1,\"\\n  \"],[13],[1,\"\\n\"],[13]],[],false,[\"page-title\"]]",
    "moduleName": "tailor-this-web/templates/landing.hbs",
    "isStrictMode": false
  });

  _exports.default = _default;
});
;define("tailor-this-web/templates/vendor/onboarding", ["exports", "@ember/template-factory"], function (_exports, _templateFactory) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;

  var _default = (0, _templateFactory.createTemplateFactory)({
    "id": "Jdj9FEsr",
    "block": "[[[1,[28,[35,0],[\"Onboarding\"],null]],[1,\"\\n\"],[46,[28,[37,2],null,null],null,null,null]],[],false,[\"page-title\",\"component\",\"-outlet\"]]",
    "moduleName": "tailor-this-web/templates/vendor/onboarding.hbs",
    "isStrictMode": false
  });

  _exports.default = _default;
});
;define("tailor-this-web/transforms/boolean", ["exports", "@ember-data/serializer/-private"], function (_exports, _private) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _private.BooleanTransform;
    }
  });
});
;define("tailor-this-web/transforms/date", ["exports", "@ember-data/serializer/-private"], function (_exports, _private) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _private.DateTransform;
    }
  });
});
;define("tailor-this-web/transforms/number", ["exports", "@ember-data/serializer/-private"], function (_exports, _private) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _private.NumberTransform;
    }
  });
});
;define("tailor-this-web/transforms/string", ["exports", "@ember-data/serializer/-private"], function (_exports, _private) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _private.StringTransform;
    }
  });
});
;

;define('tailor-this-web/config/environment', [], function() {
  var prefix = 'tailor-this-web';
try {
  var metaName = prefix + '/config/environment';
  var rawConfig = document.querySelector('meta[name="' + metaName + '"]').getAttribute('content');
  var config = JSON.parse(decodeURIComponent(rawConfig));

  var exports = { 'default': config };

  Object.defineProperty(exports, '__esModule', { value: true });

  return exports;
}
catch(err) {
  throw new Error('Could not read config from meta tag with name "' + metaName + '".');
}

});

;
          if (!runningTests) {
            require("tailor-this-web/app")["default"].create({"name":"tailor-this-web","version":"0.0.0+5b24b522"});
          }
        
//# sourceMappingURL=tailor-this-web.map
