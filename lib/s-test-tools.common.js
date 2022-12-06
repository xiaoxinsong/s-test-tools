/******/ (function() { // webpackBootstrap
/******/ 	"use strict";
/******/ 	// The require scope
/******/ 	var __webpack_require__ = {};
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	!function() {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = function(exports, definition) {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	!function() {
/******/ 		__webpack_require__.o = function(obj, prop) { return Object.prototype.hasOwnProperty.call(obj, prop); }
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	!function() {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = function(exports) {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/publicPath */
/******/ 	!function() {
/******/ 		__webpack_require__.p = "";
/******/ 	}();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": function() { return /* binding */ entry_lib; }
});

;// CONCATENATED MODULE: ./node_modules/@vue/cli-service/lib/commands/build/setPublicPath.js
/* eslint-disable no-var */
// This file is imported into lib/wc client bundles.

if (typeof window !== 'undefined') {
  var currentScript = window.document.currentScript
  if (false) { var getCurrentScript; }

  var src = currentScript && currentScript.src.match(/(.+\/)[^/]+\.js(\?.*)?$/)
  if (src) {
    __webpack_require__.p = src[1] // eslint-disable-line
  }
}

// Indicate to webpack that this file can be concatenated
/* harmony default export */ var setPublicPath = (null);

;// CONCATENATED MODULE: ./node_modules/thread-loader/dist/cjs.js!./node_modules/@vue/cli-plugin-babel/node_modules/babel-loader/lib/index.js??clonedRuleSet-40.use[1]!./node_modules/@vue/cli-plugin-babel/node_modules/babel-loader/lib/index.js!./node_modules/@vue/vue-loader-v15/lib/loaders/templateLoader.js??ruleSet[1].rules[3]!./node_modules/@vue/vue-loader-v15/lib/index.js??vue-loader-options!./plugins/components/dateTime/date-time.vue?vue&type=template&id=1c4f961f&scoped=true&
var render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c('div', {
    staticClass: "date-time",
    style: {
      'font-size': `${_vm.useStyleObj.fontSize}px`
    }
  }, [_c('p', {
    style: _vm.styleObject
  }, [_vm._v(_vm._s(_vm.nowDate))]), _c('p', {
    style: _vm.styleObject
  }, [_vm._v(_vm._s(_vm.nowTime))])]);
};
var staticRenderFns = [];

;// CONCATENATED MODULE: ./node_modules/thread-loader/dist/cjs.js!./node_modules/@vue/cli-plugin-babel/node_modules/babel-loader/lib/index.js??clonedRuleSet-40.use[1]!./node_modules/@vue/cli-plugin-babel/node_modules/babel-loader/lib/index.js!./node_modules/@vue/vue-loader-v15/lib/index.js??vue-loader-options!./plugins/components/dateTime/date-time.vue?vue&type=script&lang=js&
/* harmony default export */ var date_timevue_type_script_lang_js_ = ({
  name: 'dateTime',
  props: {
    styleObj: {
      //客户端传递的样式
      type: Object,
      default: () => ({
        fontSize: 25,
        color: ['#dcedff', '#5ca9ff']
      })
    }
  },
  computed: {
    useStyleObj() {
      //用computed是为了暴露客户端的styleObj样式属性值可以选填，更加灵活
      let size = 25;
      let color = ['#dcedff', '#5ca9ff'];
      if (this.styleObj.fontSize) {
        size = this.styleObj.fontSize;
      }
      if (this.styleObj.color) {
        color = this.styleObj.color;
      }
      return {
        fontSize: size,
        color: color
      };
    },
    styleObject() {
      //根据客户端传递的样式值配置文字的渐变色
      return {
        background: `linear-gradient(180deg,${this.useStyleObj['color'][0]},
        ${this.useStyleObj.color.length > 1 ? this.useStyleObj['color'][1] : this.useStyleObj['color'][0]})`,
        '-webkit-background-clip': 'text'
      };
    }
  },
  data() {
    return {
      timer: null,
      nowWeek: '',
      nowDate: '',
      nowTime: ''
      //   styleBox: {}
    };
  },

  created() {
    this.timer = setInterval(() => {
      this.setNowTimes();
    }, 1000); //时间
  },

  beforeDestroy: function () {
    if (this.timer) {
      clearInterval(this.timer);
    }
  },
  methods: {
    setNowTimes() {
      //时间拼接方法
      const myDate = new Date();
      const wk = myDate.getDay();
      const yy = String(myDate.getFullYear());
      const mm = myDate.getMonth() + 1;
      const dd = String(myDate.getDate() < 10 ? `0${myDate.getDate()}` : myDate.getDate());
      const hou = String(myDate.getHours() < 10 ? `0${myDate.getHours()}` : myDate.getHours());
      const min = String(myDate.getMinutes() < 10 ? `0${myDate.getMinutes()}` : myDate.getMinutes());
      const sec = String(myDate.getSeconds() < 10 ? `0${myDate.getSeconds()}` : myDate.getSeconds());
      const weeks = ['周日', '周一', '周二', '周三', '周四', '周五', '周六'];
      const week = weeks[wk];
      this.nowDate = `${yy}/${mm}/${dd} ${week}`;
      this.nowTime = `${hou}:${min}:${sec}`;
      this.nowWeek = week;
    }
  }
});
//样式文件
;// CONCATENATED MODULE: ./plugins/components/dateTime/date-time.vue?vue&type=script&lang=js&
 /* harmony default export */ var dateTime_date_timevue_type_script_lang_js_ = (date_timevue_type_script_lang_js_); 
;// CONCATENATED MODULE: ./node_modules/@vue/vue-loader-v15/lib/runtime/componentNormalizer.js
/* globals __VUE_SSR_CONTEXT__ */

// IMPORTANT: Do NOT use ES2015 features in this file (except for modules).
// This module is a runtime utility for cleaner component module output and will
// be included in the final webpack user bundle.

function normalizeComponent(
  scriptExports,
  render,
  staticRenderFns,
  functionalTemplate,
  injectStyles,
  scopeId,
  moduleIdentifier /* server only */,
  shadowMode /* vue-cli only */
) {
  // Vue.extend constructor export interop
  var options =
    typeof scriptExports === 'function' ? scriptExports.options : scriptExports

  // render functions
  if (render) {
    options.render = render
    options.staticRenderFns = staticRenderFns
    options._compiled = true
  }

  // functional template
  if (functionalTemplate) {
    options.functional = true
  }

  // scopedId
  if (scopeId) {
    options._scopeId = 'data-v-' + scopeId
  }

  var hook
  if (moduleIdentifier) {
    // server build
    hook = function (context) {
      // 2.3 injection
      context =
        context || // cached call
        (this.$vnode && this.$vnode.ssrContext) || // stateful
        (this.parent && this.parent.$vnode && this.parent.$vnode.ssrContext) // functional
      // 2.2 with runInNewContext: true
      if (!context && typeof __VUE_SSR_CONTEXT__ !== 'undefined') {
        context = __VUE_SSR_CONTEXT__
      }
      // inject component styles
      if (injectStyles) {
        injectStyles.call(this, context)
      }
      // register component module identifier for async chunk inferrence
      if (context && context._registeredComponents) {
        context._registeredComponents.add(moduleIdentifier)
      }
    }
    // used by ssr in case component is cached and beforeCreate
    // never gets called
    options._ssrRegister = hook
  } else if (injectStyles) {
    hook = shadowMode
      ? function () {
          injectStyles.call(
            this,
            (options.functional ? this.parent : this).$root.$options.shadowRoot
          )
        }
      : injectStyles
  }

  if (hook) {
    if (options.functional) {
      // for template-only hot-reload because in that case the render fn doesn't
      // go through the normalizer
      options._injectStyles = hook
      // register for functional component in vue file
      var originalRender = options.render
      options.render = function renderWithStyleInjection(h, context) {
        hook.call(context)
        return originalRender(h, context)
      }
    } else {
      // inject component registration as beforeCreate hook
      var existing = options.beforeCreate
      options.beforeCreate = existing ? [].concat(existing, hook) : [hook]
    }
  }

  return {
    exports: scriptExports,
    options: options
  }
}

;// CONCATENATED MODULE: ./plugins/components/dateTime/date-time.vue





/* normalize component */
;
var component = normalizeComponent(
  dateTime_date_timevue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  "1c4f961f",
  null
  
)

/* harmony default export */ var date_time = (component.exports);
;// CONCATENATED MODULE: ./plugins/index.js
/**
 * @description:
 * @Author: pf.song
 * @Date: 2022-11-30 09:07:44
 * -----
 * @Modified By: pf.song
 * @Last Modified: 2022-12-06 11:11:57
 * HISTORY:
 * Date  	By	Comments
 * ------	---	---------------------------------------------------------
 */
//组件


//指令
// import * as directives from "./directives/*/index.js";
// import autoScale from './directives/auto-scale/index.js'
// import waterMarker from './directives/water-marker/index.js'

//过滤器
// import numberFormat from './Filters/number-format/index.js'

//所有组件列表
const components = [date_time];
//所以指令
// const directives = [autoScale, waterMarker];
//过滤器
// const filters = [numberFormat]

//定义install方法，Vue作为参数
const install = function (Vue) {
  //判断是否安装，安装过就不用继续执行
  // if (install.installed) return;
  if (!install.installed) {
    install.installed = true;
    //遍历注册所有组件
    // components.map((component) => Vue.component(component.name, component));
    components.map(function (component) {
      return Vue.component(component.name, component);
    });
    //遍历注册所有指令
    // directives.map(directives => Vue.use(directives));

    //遍历过滤器
    // filters.map(filters => Vue.use(filters));
  }
};

//检测到Vue再执行
if (typeof window !== 'undefined' && window.Vue) install(window.Vue);
/* harmony default export */ var plugins = ({
  install,
  //所有组件，必须具有install方法才能使用Vue.use()
  ...components
});
;// CONCATENATED MODULE: ./node_modules/@vue/cli-service/lib/commands/build/entry-lib.js


/* harmony default export */ var entry_lib = (plugins);


module.exports = __webpack_exports__;
/******/ })()
;
//# sourceMappingURL=s-test-tools.common.js.map