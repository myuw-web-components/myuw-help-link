(function () {
  'use strict';

  function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  }

  function _defineProperties(target, props) {
    for (var i = 0; i < props.length; i++) {
      var descriptor = props[i];
      descriptor.enumerable = descriptor.enumerable || false;
      descriptor.configurable = true;
      if ("value" in descriptor) descriptor.writable = true;
      Object.defineProperty(target, descriptor.key, descriptor);
    }
  }

  function _createClass(Constructor, protoProps, staticProps) {
    if (protoProps) _defineProperties(Constructor.prototype, protoProps);
    if (staticProps) _defineProperties(Constructor, staticProps);
    return Constructor;
  }

  function _inherits(subClass, superClass) {
    if (typeof superClass !== "function" && superClass !== null) {
      throw new TypeError("Super expression must either be null or a function");
    }

    subClass.prototype = Object.create(superClass && superClass.prototype, {
      constructor: {
        value: subClass,
        writable: true,
        configurable: true
      }
    });
    if (superClass) _setPrototypeOf(subClass, superClass);
  }

  function _getPrototypeOf(o) {
    _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) {
      return o.__proto__ || Object.getPrototypeOf(o);
    };
    return _getPrototypeOf(o);
  }

  function _setPrototypeOf(o, p) {
    _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) {
      o.__proto__ = p;
      return o;
    };

    return _setPrototypeOf(o, p);
  }

  function isNativeReflectConstruct() {
    if (typeof Reflect === "undefined" || !Reflect.construct) return false;
    if (Reflect.construct.sham) return false;
    if (typeof Proxy === "function") return true;

    try {
      Date.prototype.toString.call(Reflect.construct(Date, [], function () {}));
      return true;
    } catch (e) {
      return false;
    }
  }

  function _construct(Parent, args, Class) {
    if (isNativeReflectConstruct()) {
      _construct = Reflect.construct;
    } else {
      _construct = function _construct(Parent, args, Class) {
        var a = [null];
        a.push.apply(a, args);
        var Constructor = Function.bind.apply(Parent, a);
        var instance = new Constructor();
        if (Class) _setPrototypeOf(instance, Class.prototype);
        return instance;
      };
    }

    return _construct.apply(null, arguments);
  }

  function _isNativeFunction(fn) {
    return Function.toString.call(fn).indexOf("[native code]") !== -1;
  }

  function _wrapNativeSuper(Class) {
    var _cache = typeof Map === "function" ? new Map() : undefined;

    _wrapNativeSuper = function _wrapNativeSuper(Class) {
      if (Class === null || !_isNativeFunction(Class)) return Class;

      if (typeof Class !== "function") {
        throw new TypeError("Super expression must either be null or a function");
      }

      if (typeof _cache !== "undefined") {
        if (_cache.has(Class)) return _cache.get(Class);

        _cache.set(Class, Wrapper);
      }

      function Wrapper() {
        return _construct(Class, arguments, _getPrototypeOf(this).constructor);
      }

      Wrapper.prototype = Object.create(Class.prototype, {
        constructor: {
          value: Wrapper,
          enumerable: false,
          writable: true,
          configurable: true
        }
      });
      return _setPrototypeOf(Wrapper, Class);
    };

    return _wrapNativeSuper(Class);
  }

  function _assertThisInitialized(self) {
    if (self === void 0) {
      throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    }

    return self;
  }

  function _possibleConstructorReturn(self, call) {
    if (call && (typeof call === "object" || typeof call === "function")) {
      return call;
    }

    return _assertThisInitialized(self);
  }

  var templateHtml = "<style> :host {\n    display: flex;\n    font-style: inherit;\n    font-variant: inherit;\n    font-family: inherit;\n  } </style> <a id=\"help-link\" href=\"https://www.example.edu/from-myuw-help-link\"> Help and resources <!-- material.io launch icon--> <svg id=\"launch-icon\" xmlns=\"http://www.w3.org/2000/svg\" width=\"24\" height=\"24\" viewBox=\"0 0 24 24\"> <path d=\"M0 0h24v24H0z\" fill=\"none\"/> <path d=\"M19 19H5V5h7V3H5c-1.11 0-2 .9-2 2v14c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2v-7h-2v7zM14 3v2h3.59l-9.83 9.83 1.41 1.41L19 6.41V10h2V3h-7z\"/> </svg> </a> ";

  var MyUWHelpLink =
  /*#__PURE__*/
  function (_HTMLElement) {
    _inherits(MyUWHelpLink, _HTMLElement);

    function MyUWHelpLink() {
      var _this;

      _classCallCheck(this, MyUWHelpLink);

      _this = _possibleConstructorReturn(this, _getPrototypeOf(MyUWHelpLink).call(this));

      _this.attachShadow({
        mode: 'open'
      });

      _this.shadowRoot.appendChild(_this.constructor.template.content.cloneNode(true));

      _this.helpLinkElement = _this.shadowRoot.getElementById('help-link');
      return _this;
    }

    _createClass(MyUWHelpLink, [{
      key: "attributeChangedCallback",

      /**
      * Web component lifecycle hook to update changed properties
      */
      value: function attributeChangedCallback(name, oldValue, newValue) {
        // Update the attribute internally
        this[name] = newValue; // Update the component

        this.updateComponent();
      }
      /**
      * When component is first attached to the DOM,
      * get its defined attributes and set up listeners
      */

    }, {
      key: "connectedCallback",
      value: function connectedCallback() {
        // Get all attributes
        this['app-context'] = this.getAttribute('app-context');
        this['url'] = this.getAttribute('url');
        this.$link = this.shadowRoot.getElementById('help-link');
      }
      /**
      * Update the component state
      */

    }, {
      key: "updateComponent",
      value: function updateComponent() {
        var materialLaunchIcon = this.shadowRoot.getElementById('launch-icon');
        this.helpLinkElement.innerHTML = this['app-context'] + " help and resources ";
        this.helpLinkElement.appendChild(materialLaunchIcon);
        this.helpLinkElement.setAttribute("href", this['url']);

        if (this['url'] && this['url'].startsWith("http")) {
          this.helpLinkElement.setAttribute("rel", "noopener noreferrer");
          this.helpLinkElement.setAttribute("target", "_blank");
        }
      }
    }], [{
      key: "observedAttributes",
      get: function get() {
        return ['app-context', 'url'];
      }
    }, {
      key: "template",
      get: function get() {
        if (this._template === undefined) {
          this._template = document.createElement('template');
          this._template.innerHTML = templateHtml;
        }

        return this._template;
      }
    }]);

    return MyUWHelpLink;
  }(_wrapNativeSuper(HTMLElement));

  window.customElements.define('myuw-help-link', MyUWHelpLink);

}());
