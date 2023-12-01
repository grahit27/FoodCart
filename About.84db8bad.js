// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles

(function (modules, entry, mainEntry, parcelRequireName, globalName) {
  /* eslint-disable no-undef */
  var globalObject =
    typeof globalThis !== 'undefined'
      ? globalThis
      : typeof self !== 'undefined'
      ? self
      : typeof window !== 'undefined'
      ? window
      : typeof global !== 'undefined'
      ? global
      : {};
  /* eslint-enable no-undef */

  // Save the require from previous bundle to this closure if any
  var previousRequire =
    typeof globalObject[parcelRequireName] === 'function' &&
    globalObject[parcelRequireName];

  var cache = previousRequire.cache || {};
  // Do not use `require` to prevent Webpack from trying to bundle this call
  var nodeRequire =
    typeof module !== 'undefined' &&
    typeof module.require === 'function' &&
    module.require.bind(module);

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire =
          typeof globalObject[parcelRequireName] === 'function' &&
          globalObject[parcelRequireName];
        if (!jumped && currentRequire) {
          return currentRequire(name, true);
        }

        // If there are other bundles on this page the require from the
        // previous one is saved to 'previousRequire'. Repeat this as
        // many times as there are bundles until the module is found or
        // we exhaust the require chain.
        if (previousRequire) {
          return previousRequire(name, true);
        }

        // Try the node require function if it exists.
        if (nodeRequire && typeof name === 'string') {
          return nodeRequire(name);
        }

        var err = new Error("Cannot find module '" + name + "'");
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;
      localRequire.cache = {};

      var module = (cache[name] = new newRequire.Module(name));

      modules[name][0].call(
        module.exports,
        localRequire,
        module,
        module.exports,
        this
      );
    }

    return cache[name].exports;

    function localRequire(x) {
      var res = localRequire.resolve(x);
      return res === false ? {} : newRequire(res);
    }

    function resolve(x) {
      var id = modules[name][1][x];
      return id != null ? id : x;
    }
  }

  function Module(moduleName) {
    this.id = moduleName;
    this.bundle = newRequire;
    this.exports = {};
  }

  newRequire.isParcelRequire = true;
  newRequire.Module = Module;
  newRequire.modules = modules;
  newRequire.cache = cache;
  newRequire.parent = previousRequire;
  newRequire.register = function (id, exports) {
    modules[id] = [
      function (require, module) {
        module.exports = exports;
      },
      {},
    ];
  };

  Object.defineProperty(newRequire, 'root', {
    get: function () {
      return globalObject[parcelRequireName];
    },
  });

  globalObject[parcelRequireName] = newRequire;

  for (var i = 0; i < entry.length; i++) {
    newRequire(entry[i]);
  }

  if (mainEntry) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(mainEntry);

    // CommonJS
    if (typeof exports === 'object' && typeof module !== 'undefined') {
      module.exports = mainExports;

      // RequireJS
    } else if (typeof define === 'function' && define.amd) {
      define(function () {
        return mainExports;
      });

      // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }
})({"3EtMM":[function(require,module,exports) {
var global = arguments[3];
var HMR_HOST = null;
var HMR_PORT = null;
var HMR_SECURE = false;
var HMR_ENV_HASH = "d6ea1d42532a7575";
module.bundle.HMR_BUNDLE_ID = "b097ecc884db8bad";
"use strict";
/* global HMR_HOST, HMR_PORT, HMR_ENV_HASH, HMR_SECURE, chrome, browser, __parcel__import__, __parcel__importScripts__, ServiceWorkerGlobalScope */ /*::
import type {
  HMRAsset,
  HMRMessage,
} from '@parcel/reporter-dev-server/src/HMRServer.js';
interface ParcelRequire {
  (string): mixed;
  cache: {|[string]: ParcelModule|};
  hotData: {|[string]: mixed|};
  Module: any;
  parent: ?ParcelRequire;
  isParcelRequire: true;
  modules: {|[string]: [Function, {|[string]: string|}]|};
  HMR_BUNDLE_ID: string;
  root: ParcelRequire;
}
interface ParcelModule {
  hot: {|
    data: mixed,
    accept(cb: (Function) => void): void,
    dispose(cb: (mixed) => void): void,
    // accept(deps: Array<string> | string, cb: (Function) => void): void,
    // decline(): void,
    _acceptCallbacks: Array<(Function) => void>,
    _disposeCallbacks: Array<(mixed) => void>,
  |};
}
interface ExtensionContext {
  runtime: {|
    reload(): void,
    getURL(url: string): string;
    getManifest(): {manifest_version: number, ...};
  |};
}
declare var module: {bundle: ParcelRequire, ...};
declare var HMR_HOST: string;
declare var HMR_PORT: string;
declare var HMR_ENV_HASH: string;
declare var HMR_SECURE: boolean;
declare var chrome: ExtensionContext;
declare var browser: ExtensionContext;
declare var __parcel__import__: (string) => Promise<void>;
declare var __parcel__importScripts__: (string) => Promise<void>;
declare var globalThis: typeof self;
declare var ServiceWorkerGlobalScope: Object;
*/ var OVERLAY_ID = "__parcel__error__overlay__";
var OldModule = module.bundle.Module;
function Module(moduleName) {
    OldModule.call(this, moduleName);
    this.hot = {
        data: module.bundle.hotData[moduleName],
        _acceptCallbacks: [],
        _disposeCallbacks: [],
        accept: function(fn) {
            this._acceptCallbacks.push(fn || function() {});
        },
        dispose: function(fn) {
            this._disposeCallbacks.push(fn);
        }
    };
    module.bundle.hotData[moduleName] = undefined;
}
module.bundle.Module = Module;
module.bundle.hotData = {};
var checkedAssets /*: {|[string]: boolean|} */ , assetsToDispose /*: Array<[ParcelRequire, string]> */ , assetsToAccept /*: Array<[ParcelRequire, string]> */ ;
function getHostname() {
    return HMR_HOST || (location.protocol.indexOf("http") === 0 ? location.hostname : "localhost");
}
function getPort() {
    return HMR_PORT || location.port;
}
// eslint-disable-next-line no-redeclare
var parent = module.bundle.parent;
if ((!parent || !parent.isParcelRequire) && typeof WebSocket !== "undefined") {
    var hostname = getHostname();
    var port = getPort();
    var protocol = HMR_SECURE || location.protocol == "https:" && !/localhost|127.0.0.1|0.0.0.0/.test(hostname) ? "wss" : "ws";
    var ws = new WebSocket(protocol + "://" + hostname + (port ? ":" + port : "") + "/");
    // Web extension context
    var extCtx = typeof chrome === "undefined" ? typeof browser === "undefined" ? null : browser : chrome;
    // Safari doesn't support sourceURL in error stacks.
    // eval may also be disabled via CSP, so do a quick check.
    var supportsSourceURL = false;
    try {
        (0, eval)('throw new Error("test"); //# sourceURL=test.js');
    } catch (err) {
        supportsSourceURL = err.stack.includes("test.js");
    }
    // $FlowFixMe
    ws.onmessage = async function(event /*: {data: string, ...} */ ) {
        checkedAssets = {} /*: {|[string]: boolean|} */ ;
        assetsToAccept = [];
        assetsToDispose = [];
        var data /*: HMRMessage */  = JSON.parse(event.data);
        if (data.type === "update") {
            // Remove error overlay if there is one
            if (typeof document !== "undefined") removeErrorOverlay();
            let assets = data.assets.filter((asset)=>asset.envHash === HMR_ENV_HASH);
            // Handle HMR Update
            let handled = assets.every((asset)=>{
                return asset.type === "css" || asset.type === "js" && hmrAcceptCheck(module.bundle.root, asset.id, asset.depsByBundle);
            });
            if (handled) {
                console.clear();
                // Dispatch custom event so other runtimes (e.g React Refresh) are aware.
                if (typeof window !== "undefined" && typeof CustomEvent !== "undefined") window.dispatchEvent(new CustomEvent("parcelhmraccept"));
                await hmrApplyUpdates(assets);
                // Dispose all old assets.
                let processedAssets = {} /*: {|[string]: boolean|} */ ;
                for(let i = 0; i < assetsToDispose.length; i++){
                    let id = assetsToDispose[i][1];
                    if (!processedAssets[id]) {
                        hmrDispose(assetsToDispose[i][0], id);
                        processedAssets[id] = true;
                    }
                }
                // Run accept callbacks. This will also re-execute other disposed assets in topological order.
                processedAssets = {};
                for(let i = 0; i < assetsToAccept.length; i++){
                    let id = assetsToAccept[i][1];
                    if (!processedAssets[id]) {
                        hmrAccept(assetsToAccept[i][0], id);
                        processedAssets[id] = true;
                    }
                }
            } else fullReload();
        }
        if (data.type === "error") {
            // Log parcel errors to console
            for (let ansiDiagnostic of data.diagnostics.ansi){
                let stack = ansiDiagnostic.codeframe ? ansiDiagnostic.codeframe : ansiDiagnostic.stack;
                console.error("\uD83D\uDEA8 [parcel]: " + ansiDiagnostic.message + "\n" + stack + "\n\n" + ansiDiagnostic.hints.join("\n"));
            }
            if (typeof document !== "undefined") {
                // Render the fancy html overlay
                removeErrorOverlay();
                var overlay = createErrorOverlay(data.diagnostics.html);
                // $FlowFixMe
                document.body.appendChild(overlay);
            }
        }
    };
    ws.onerror = function(e) {
        console.error(e.message);
    };
    ws.onclose = function() {
        console.warn("[parcel] \uD83D\uDEA8 Connection to the HMR server was lost");
    };
}
function removeErrorOverlay() {
    var overlay = document.getElementById(OVERLAY_ID);
    if (overlay) {
        overlay.remove();
        console.log("[parcel] ✨ Error resolved");
    }
}
function createErrorOverlay(diagnostics) {
    var overlay = document.createElement("div");
    overlay.id = OVERLAY_ID;
    let errorHTML = '<div style="background: black; opacity: 0.85; font-size: 16px; color: white; position: fixed; height: 100%; width: 100%; top: 0px; left: 0px; padding: 30px; font-family: Menlo, Consolas, monospace; z-index: 9999;">';
    for (let diagnostic of diagnostics){
        let stack = diagnostic.frames.length ? diagnostic.frames.reduce((p, frame)=>{
            return `${p}
<a href="/__parcel_launch_editor?file=${encodeURIComponent(frame.location)}" style="text-decoration: underline; color: #888" onclick="fetch(this.href); return false">${frame.location}</a>
${frame.code}`;
        }, "") : diagnostic.stack;
        errorHTML += `
      <div>
        <div style="font-size: 18px; font-weight: bold; margin-top: 20px;">
          🚨 ${diagnostic.message}
        </div>
        <pre>${stack}</pre>
        <div>
          ${diagnostic.hints.map((hint)=>"<div>\uD83D\uDCA1 " + hint + "</div>").join("")}
        </div>
        ${diagnostic.documentation ? `<div>📝 <a style="color: violet" href="${diagnostic.documentation}" target="_blank">Learn more</a></div>` : ""}
      </div>
    `;
    }
    errorHTML += "</div>";
    overlay.innerHTML = errorHTML;
    return overlay;
}
function fullReload() {
    if ("reload" in location) location.reload();
    else if (extCtx && extCtx.runtime && extCtx.runtime.reload) extCtx.runtime.reload();
}
function getParents(bundle, id) /*: Array<[ParcelRequire, string]> */ {
    var modules = bundle.modules;
    if (!modules) return [];
    var parents = [];
    var k, d, dep;
    for(k in modules)for(d in modules[k][1]){
        dep = modules[k][1][d];
        if (dep === id || Array.isArray(dep) && dep[dep.length - 1] === id) parents.push([
            bundle,
            k
        ]);
    }
    if (bundle.parent) parents = parents.concat(getParents(bundle.parent, id));
    return parents;
}
function updateLink(link) {
    var href = link.getAttribute("href");
    if (!href) return;
    var newLink = link.cloneNode();
    newLink.onload = function() {
        if (link.parentNode !== null) // $FlowFixMe
        link.parentNode.removeChild(link);
    };
    newLink.setAttribute("href", // $FlowFixMe
    href.split("?")[0] + "?" + Date.now());
    // $FlowFixMe
    link.parentNode.insertBefore(newLink, link.nextSibling);
}
var cssTimeout = null;
function reloadCSS() {
    if (cssTimeout) return;
    cssTimeout = setTimeout(function() {
        var links = document.querySelectorAll('link[rel="stylesheet"]');
        for(var i = 0; i < links.length; i++){
            // $FlowFixMe[incompatible-type]
            var href /*: string */  = links[i].getAttribute("href");
            var hostname = getHostname();
            var servedFromHMRServer = hostname === "localhost" ? new RegExp("^(https?:\\/\\/(0.0.0.0|127.0.0.1)|localhost):" + getPort()).test(href) : href.indexOf(hostname + ":" + getPort());
            var absolute = /^https?:\/\//i.test(href) && href.indexOf(location.origin) !== 0 && !servedFromHMRServer;
            if (!absolute) updateLink(links[i]);
        }
        cssTimeout = null;
    }, 50);
}
function hmrDownload(asset) {
    if (asset.type === "js") {
        if (typeof document !== "undefined") {
            let script = document.createElement("script");
            script.src = asset.url + "?t=" + Date.now();
            if (asset.outputFormat === "esmodule") script.type = "module";
            return new Promise((resolve, reject)=>{
                var _document$head;
                script.onload = ()=>resolve(script);
                script.onerror = reject;
                (_document$head = document.head) === null || _document$head === void 0 || _document$head.appendChild(script);
            });
        } else if (typeof importScripts === "function") {
            // Worker scripts
            if (asset.outputFormat === "esmodule") return import(asset.url + "?t=" + Date.now());
            else return new Promise((resolve, reject)=>{
                try {
                    importScripts(asset.url + "?t=" + Date.now());
                    resolve();
                } catch (err) {
                    reject(err);
                }
            });
        }
    }
}
async function hmrApplyUpdates(assets) {
    global.parcelHotUpdate = Object.create(null);
    let scriptsToRemove;
    try {
        // If sourceURL comments aren't supported in eval, we need to load
        // the update from the dev server over HTTP so that stack traces
        // are correct in errors/logs. This is much slower than eval, so
        // we only do it if needed (currently just Safari).
        // https://bugs.webkit.org/show_bug.cgi?id=137297
        // This path is also taken if a CSP disallows eval.
        if (!supportsSourceURL) {
            let promises = assets.map((asset)=>{
                var _hmrDownload;
                return (_hmrDownload = hmrDownload(asset)) === null || _hmrDownload === void 0 ? void 0 : _hmrDownload.catch((err)=>{
                    // Web extension bugfix for Chromium
                    // https://bugs.chromium.org/p/chromium/issues/detail?id=1255412#c12
                    if (extCtx && extCtx.runtime && extCtx.runtime.getManifest().manifest_version == 3) {
                        if (typeof ServiceWorkerGlobalScope != "undefined" && global instanceof ServiceWorkerGlobalScope) {
                            extCtx.runtime.reload();
                            return;
                        }
                        asset.url = extCtx.runtime.getURL("/__parcel_hmr_proxy__?url=" + encodeURIComponent(asset.url + "?t=" + Date.now()));
                        return hmrDownload(asset);
                    }
                    throw err;
                });
            });
            scriptsToRemove = await Promise.all(promises);
        }
        assets.forEach(function(asset) {
            hmrApply(module.bundle.root, asset);
        });
    } finally{
        delete global.parcelHotUpdate;
        if (scriptsToRemove) scriptsToRemove.forEach((script)=>{
            if (script) {
                var _document$head2;
                (_document$head2 = document.head) === null || _document$head2 === void 0 || _document$head2.removeChild(script);
            }
        });
    }
}
function hmrApply(bundle /*: ParcelRequire */ , asset /*:  HMRAsset */ ) {
    var modules = bundle.modules;
    if (!modules) return;
    if (asset.type === "css") reloadCSS();
    else if (asset.type === "js") {
        let deps = asset.depsByBundle[bundle.HMR_BUNDLE_ID];
        if (deps) {
            if (modules[asset.id]) {
                // Remove dependencies that are removed and will become orphaned.
                // This is necessary so that if the asset is added back again, the cache is gone, and we prevent a full page reload.
                let oldDeps = modules[asset.id][1];
                for(let dep in oldDeps)if (!deps[dep] || deps[dep] !== oldDeps[dep]) {
                    let id = oldDeps[dep];
                    let parents = getParents(module.bundle.root, id);
                    if (parents.length === 1) hmrDelete(module.bundle.root, id);
                }
            }
            if (supportsSourceURL) // Global eval. We would use `new Function` here but browser
            // support for source maps is better with eval.
            (0, eval)(asset.output);
            // $FlowFixMe
            let fn = global.parcelHotUpdate[asset.id];
            modules[asset.id] = [
                fn,
                deps
            ];
        } else if (bundle.parent) hmrApply(bundle.parent, asset);
    }
}
function hmrDelete(bundle, id) {
    let modules = bundle.modules;
    if (!modules) return;
    if (modules[id]) {
        // Collect dependencies that will become orphaned when this module is deleted.
        let deps = modules[id][1];
        let orphans = [];
        for(let dep in deps){
            let parents = getParents(module.bundle.root, deps[dep]);
            if (parents.length === 1) orphans.push(deps[dep]);
        }
        // Delete the module. This must be done before deleting dependencies in case of circular dependencies.
        delete modules[id];
        delete bundle.cache[id];
        // Now delete the orphans.
        orphans.forEach((id)=>{
            hmrDelete(module.bundle.root, id);
        });
    } else if (bundle.parent) hmrDelete(bundle.parent, id);
}
function hmrAcceptCheck(bundle /*: ParcelRequire */ , id /*: string */ , depsByBundle /*: ?{ [string]: { [string]: string } }*/ ) {
    if (hmrAcceptCheckOne(bundle, id, depsByBundle)) return true;
    // Traverse parents breadth first. All possible ancestries must accept the HMR update, or we'll reload.
    let parents = getParents(module.bundle.root, id);
    let accepted = false;
    while(parents.length > 0){
        let v = parents.shift();
        let a = hmrAcceptCheckOne(v[0], v[1], null);
        if (a) // If this parent accepts, stop traversing upward, but still consider siblings.
        accepted = true;
        else {
            // Otherwise, queue the parents in the next level upward.
            let p = getParents(module.bundle.root, v[1]);
            if (p.length === 0) {
                // If there are no parents, then we've reached an entry without accepting. Reload.
                accepted = false;
                break;
            }
            parents.push(...p);
        }
    }
    return accepted;
}
function hmrAcceptCheckOne(bundle /*: ParcelRequire */ , id /*: string */ , depsByBundle /*: ?{ [string]: { [string]: string } }*/ ) {
    var modules = bundle.modules;
    if (!modules) return;
    if (depsByBundle && !depsByBundle[bundle.HMR_BUNDLE_ID]) {
        // If we reached the root bundle without finding where the asset should go,
        // there's nothing to do. Mark as "accepted" so we don't reload the page.
        if (!bundle.parent) return true;
        return hmrAcceptCheck(bundle.parent, id, depsByBundle);
    }
    if (checkedAssets[id]) return true;
    checkedAssets[id] = true;
    var cached = bundle.cache[id];
    assetsToDispose.push([
        bundle,
        id
    ]);
    if (!cached || cached.hot && cached.hot._acceptCallbacks.length) {
        assetsToAccept.push([
            bundle,
            id
        ]);
        return true;
    }
}
function hmrDispose(bundle /*: ParcelRequire */ , id /*: string */ ) {
    var cached = bundle.cache[id];
    bundle.hotData[id] = {};
    if (cached && cached.hot) cached.hot.data = bundle.hotData[id];
    if (cached && cached.hot && cached.hot._disposeCallbacks.length) cached.hot._disposeCallbacks.forEach(function(cb) {
        cb(bundle.hotData[id]);
    });
    delete bundle.cache[id];
}
function hmrAccept(bundle /*: ParcelRequire */ , id /*: string */ ) {
    // Execute the module.
    bundle(id);
    // Run the accept callbacks in the new version of the module.
    var cached = bundle.cache[id];
    if (cached && cached.hot && cached.hot._acceptCallbacks.length) cached.hot._acceptCallbacks.forEach(function(cb) {
        var assetsToAlsoAccept = cb(function() {
            return getParents(module.bundle.root, id);
        });
        if (assetsToAlsoAccept && assetsToAccept.length) {
            assetsToAlsoAccept.forEach(function(a) {
                hmrDispose(a[0], a[1]);
            });
            // $FlowFixMe[method-unbinding]
            assetsToAccept.push.apply(assetsToAccept, assetsToAlsoAccept);
        }
    });
}

},{}],"1xC6H":[function(require,module,exports) {
var Refresh = require("6d18d6bd340e7473");
var ErrorOverlay = require("74ad5ea14201648c");
Refresh.injectIntoGlobalHook(window);
window.$RefreshReg$ = function() {};
window.$RefreshSig$ = function() {
    return function(type) {
        return type;
    };
};
ErrorOverlay.setEditorHandler(function editorHandler(errorLocation) {
    let file = `${errorLocation.fileName}:${errorLocation.lineNumber || 1}:${errorLocation.colNumber || 1}`;
    fetch(`/__parcel_launch_editor?file=${encodeURIComponent(file)}`);
});
ErrorOverlay.startReportingRuntimeErrors({
    onError: function() {}
});
window.addEventListener("parcelhmraccept", ()=>{
    ErrorOverlay.dismissRuntimeErrors();
});

},{"6d18d6bd340e7473":"786KC","74ad5ea14201648c":"1dldy"}],"9R1Eu":[function(require,module,exports) {
var $parcel$ReactRefreshHelpers$5b98 = require("@parcel/transformer-react-refresh-wrap/lib/helpers/helpers.js");
var prevRefreshReg = window.$RefreshReg$;
var prevRefreshSig = window.$RefreshSig$;
$parcel$ReactRefreshHelpers$5b98.prelude(module);

try {
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.About2 = exports.About = void 0;
var _react = _interopRequireWildcard(require("bbc6d23085232c2d"));
var _Profile = _interopRequireDefault(require("6caab5f42b77f65e"));
var _mockData = require("17e619cd7ef8273d");
var _UserContext = _interopRequireDefault(require("3c5e6c67159bf856"));
var _jsxRuntime = require("9aff5c9ea7aa2f6c");
function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}
function _getRequireWildcardCache(e) {
    if ("function" != typeof WeakMap) return null;
    var r = new WeakMap(), t = new WeakMap();
    return (_getRequireWildcardCache = function(e) {
        return e ? t : r;
    })(e);
}
function _interopRequireWildcard(e, r) {
    if (!r && e && e.__esModule) return e;
    if (null === e || "object" != typeof e && "function" != typeof e) return {
        default: e
    };
    var t = _getRequireWildcardCache(r);
    if (t && t.has(e)) return t.get(e);
    var n = {
        __proto__: null
    }, a = Object.defineProperty && Object.getOwnPropertyDescriptor;
    for(var u in e)if ("default" !== u && Object.prototype.hasOwnProperty.call(e, u)) {
        var i = a ? Object.getOwnPropertyDescriptor(e, u) : null;
        i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u];
    }
    return n.default = e, t && t.set(e, n), n;
}
const Section = ({ sectionHeading, sectionText, visibility, setVisibility })=>{
    // const [visibility, setVisibility] = useState(false); //First build logic with State Variables then replace it with parent state vars
    return /*#__PURE__*/ (0, _jsxRuntime.jsxs)("div", {
        className: "p-2 m-2 border-2 rounded-md border-purple-400  ",
        children: [
            /*#__PURE__*/ (0, _jsxRuntime.jsx)("h1", {
                className: "font-semibold text-xl",
                children: sectionHeading
            }),
            visibility ? /*#__PURE__*/ (0, _jsxRuntime.jsxs)(_jsxRuntime.Fragment, {
                children: [
                    /*#__PURE__*/ (0, _jsxRuntime.jsx)("button", {
                        className: "p-1 underline-offset-1 rounded-md bg-purple-700 text-white",
                        onClick: ()=>{
                            setVisibility(null); //Remove Everything from section config
                        },
                        children: "Hide"
                    }),
                    /*#__PURE__*/ (0, _jsxRuntime.jsx)("p", {
                        children: sectionText
                    })
                ]
            }) : /*#__PURE__*/ (0, _jsxRuntime.jsx)("button", {
                className: "p-1 underline-offset-1 rounded-md bg-purple-700 text-white",
                onClick: ()=>{
                    setVisibility(sectionHeading); //Change the section config
                },
                children: "Show"
            })
        ]
    });
};
_c = Section;
const About = ()=>{
    const [sectionConfig, setSectionConfig] = (0, _react.useState)("Section-1");
    const setVisibilityConfig = (section)=>setSectionConfig(section); // Created a function to change the visibility config and passed to child component
    return /*#__PURE__*/ (0, _jsxRuntime.jsx)(_jsxRuntime.Fragment, {
        children: /*#__PURE__*/ (0, _jsxRuntime.jsxs)("div", {
            className: "about-page",
            children: [
                /*#__PURE__*/ (0, _jsxRuntime.jsx)("h1", {
                    className: "p-2 bg-orange-400 text-center text-3xl",
                    children: "About Us Page"
                }),
                /*#__PURE__*/ (0, _jsxRuntime.jsx)(Section, {
                    sectionHeading: "Section-1",
                    sectionText: _mockData.sampleData,
                    visibility: sectionConfig === "Section-1",
                    setVisibility: setVisibilityConfig // We are sending a function to set the state
                }),
                /*#__PURE__*/ (0, _jsxRuntime.jsx)(Section, {
                    sectionHeading: "Section-2",
                    sectionText: _mockData.sampleData,
                    visibility: sectionConfig === "Section-2",
                    setVisibility: setVisibilityConfig
                }),
                /*#__PURE__*/ (0, _jsxRuntime.jsx)(Section, {
                    sectionHeading: "Section-3",
                    sectionText: _mockData.sampleData,
                    visibility: sectionConfig === "Section-3",
                    setVisibility: setVisibilityConfig
                })
            ]
        })
    });
};
_c1 = About;
exports.About = About;
class About2 extends _react.default.Component {
    //Class based Component Practice
    constructor(props){
        super(props); //Essential Part Can't removed
        this.state = {
            count: 1,
            timerSwitch: false
        };
    }
    componentDidMount() {}
    componentDidUpdate(prevProps, prevState) {
        if (this.state.count !== prevState.count) console.log("State changed");
        if (this.state.timerSwitch !== prevState.timerSwitch) {
            if (this.state.timerSwitch) this.timer = setInterval(()=>{
                console.log("Timer 1");
            }, "1000");
            if (!this.state.timerSwitch) clearInterval(this.timer);
        }
    }
    componentWillUnmount() {
        clearInterval(this.timer);
    }
    render() {
        const { count, timerSwitch } = this.state;
        return /*#__PURE__*/ (0, _jsxRuntime.jsx)(_jsxRuntime.Fragment, {
            children: /*#__PURE__*/ (0, _jsxRuntime.jsxs)("div", {
                className: "p-5",
                children: [
                    /*#__PURE__*/ (0, _jsxRuntime.jsx)("h1", {
                        children: "About Us Page from Class Based Component"
                    }),
                    /*#__PURE__*/ (0, _jsxRuntime.jsx)(_UserContext.default.Consumer, {
                        children: ({ user })=>{
                            /*#__PURE__*/ (0, _jsxRuntime.jsxs)("h1", {
                                className: "from-teal-500 font-bold",
                                children: [
                                    "From Static Context",
                                    user.name
                                ]
                            });
                        }
                    }),
                    /*#__PURE__*/ (0, _jsxRuntime.jsx)("button", {
                        className: "bg-purple-400 rounded-md p-2 my-2",
                        onClick: ()=>{
                            this.setState({
                                count: count + 1
                            });
                        },
                        children: "Increase Count"
                    }),
                    /*#__PURE__*/ (0, _jsxRuntime.jsxs)("h1", {
                        className: "text-xl font-semibold",
                        children: [
                            "Final Value of ",
                            count
                        ]
                    }),
                    timerSwitch ? /*#__PURE__*/ (0, _jsxRuntime.jsx)("button", {
                        className: "bg-red-400 rounded-xl m-2 p-2",
                        onClick: ()=>{
                            this.setState({
                                timerSwitch: false
                            });
                        },
                        children: "Switch Off Timer"
                    }) : /*#__PURE__*/ (0, _jsxRuntime.jsx)("button", {
                        className: "bg-green-400 rounded-xl m-2 p-2",
                        onClick: ()=>{
                            this.setState({
                                timerSwitch: true
                            });
                        },
                        children: "Switch On Timer"
                    }),
                    /*#__PURE__*/ (0, _jsxRuntime.jsx)(_Profile.default, {
                        name: "Tester Name"
                    })
                ]
            })
        });
    }
}
exports.About2 = About2;
var _c, _c1;
$RefreshReg$(_c, "Section");
$RefreshReg$(_c1, "About");

  $parcel$ReactRefreshHelpers$5b98.postlude(module);
} finally {
  window.$RefreshReg$ = prevRefreshReg;
  window.$RefreshSig$ = prevRefreshSig;
}
},{"@parcel/transformer-react-refresh-wrap/lib/helpers/helpers.js":"km3Ru","bbc6d23085232c2d":"21dqq","17e619cd7ef8273d":"iOpE9","9aff5c9ea7aa2f6c":"6AEwr","6caab5f42b77f65e":"h0rtF","3c5e6c67159bf856":"c5vgB"}],"iOpE9":[function(require,module,exports) {
var $parcel$ReactRefreshHelpers$b553 = require("@parcel/transformer-react-refresh-wrap/lib/helpers/helpers.js");
var prevRefreshReg = window.$RefreshReg$;
var prevRefreshSig = window.$RefreshSig$;
$parcel$ReactRefreshHelpers$b553.prelude(module);

try {
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.sampleData = exports.mockGetResData = void 0;
var _react = require("8dd09592340241f3");
const mockGetResData = ()=>{
    const [resC, setResC] = (0, _react.useState)([]);
    (0, _react.useEffect)(()=>{
        mockGet();
    }, []);
    const mockGet = ()=>{
        const data = [
            {
                info: {
                    id: "48087",
                    name: "Kanti Sweets",
                    cloudinaryImageId: "ee62qkzydm4eacoo2kub",
                    locality: "CMH Road",
                    areaName: "Indira Nagar",
                    costForTwo: "₹150 for two",
                    cuisines: [
                        "Sweets"
                    ],
                    avgRating: 4.6,
                    veg: true,
                    feeDetails: {
                        restaurantId: "48087",
                        fees: [
                            {
                                name: "BASE_DISTANCE",
                                fee: 3300
                            },
                            {
                                name: "BASE_TIME"
                            },
                            {
                                name: "ANCILLARY_SURGE_FEE"
                            }
                        ],
                        totalFee: 3300
                    },
                    parentId: "4700",
                    avgRatingString: "4.6",
                    totalRatingsString: "5K+",
                    sla: {
                        deliveryTime: 22,
                        lastMileTravel: 0.8,
                        serviceability: "SERVICEABLE",
                        slaString: "22 mins",
                        lastMileTravelString: "0.8 km",
                        iconType: "ICON_TYPE_EMPTY"
                    },
                    availability: {
                        nextCloseTime: "2023-09-04 22:00:00",
                        opened: true
                    },
                    badges: {},
                    isOpen: true,
                    type: "F",
                    badgesV2: {
                        entityBadges: {
                            imageBased: {},
                            textBased: {},
                            textExtendedBadges: {}
                        }
                    },
                    aggregatedDiscountInfoV3: {
                        discountCalloutInfo: {
                            message: "Free Delivery",
                            logoCtx: {
                                logo: "v1655895371/free_delivery_logo_hqipbo.png"
                            }
                        }
                    },
                    orderabilityCommunication: {
                        title: {},
                        subTitle: {},
                        message: {},
                        customIcon: {}
                    },
                    differentiatedUi: {
                        displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                        differentiatedUiMediaDetails: {
                            mediaType: "ADS_MEDIA_ENUM_IMAGE",
                            lottie: {},
                            video: {}
                        }
                    },
                    reviewsSummary: {},
                    displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
                    restaurantOfferPresentationInfo: {}
                },
                analytics: {
                    context: "seo-data-d46ad577-7279-477c-af7f-721ede287580"
                },
                cta: {
                    link: "https://www.swiggy.com/restaurants/kanti-sweets-cmh-road-indira-nagar-bangalore-48087",
                    text: "RESTAURANT_MENU",
                    type: "WEBLINK"
                },
                widgetId: "collectionV5RestaurantListWidget_SimRestoRelevance_food_seo"
            },
            {
                info: {
                    id: "752385",
                    name: "Great Indian Khichdi by EatFit",
                    cloudinaryImageId: "d00bd9d092e31d8e4355960b6d92046b",
                    locality: "Hoysala Nagar",
                    areaName: "Indira Nagar",
                    costForTwo: "₹200 for two",
                    cuisines: [
                        "Indian",
                        "Home Food",
                        "Healthy Food",
                        "Snacks"
                    ],
                    avgRating: 4.2,
                    veg: true,
                    feeDetails: {
                        restaurantId: "752385",
                        fees: [
                            {
                                name: "BASE_DISTANCE",
                                fee: 2800
                            },
                            {
                                name: "BASE_TIME"
                            },
                            {
                                name: "ANCILLARY_SURGE_FEE"
                            }
                        ],
                        totalFee: 2800
                    },
                    parentId: "319582",
                    avgRatingString: "4.2",
                    totalRatingsString: "2",
                    sla: {
                        deliveryTime: 44,
                        lastMileTravel: 0.8,
                        serviceability: "SERVICEABLE",
                        slaString: "44 mins",
                        lastMileTravelString: "0.8 km",
                        iconType: "ICON_TYPE_EMPTY"
                    },
                    availability: {
                        nextCloseTime: "2023-09-04 23:00:00",
                        opened: true
                    },
                    badges: {},
                    isOpen: true,
                    type: "F",
                    badgesV2: {
                        entityBadges: {
                            imageBased: {},
                            textBased: {},
                            textExtendedBadges: {}
                        }
                    },
                    aggregatedDiscountInfoV3: {
                        header: "60% OFF",
                        subHeader: "UPTO ₹120",
                        discountCalloutInfo: {
                            message: "Free Delivery",
                            logoCtx: {
                                logo: "v1655895371/free_delivery_logo_hqipbo.png"
                            }
                        }
                    },
                    orderabilityCommunication: {
                        title: {},
                        subTitle: {},
                        message: {},
                        customIcon: {}
                    },
                    differentiatedUi: {
                        displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                        differentiatedUiMediaDetails: {
                            mediaType: "ADS_MEDIA_ENUM_IMAGE",
                            lottie: {},
                            video: {}
                        }
                    },
                    reviewsSummary: {},
                    displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
                    restaurantOfferPresentationInfo: {}
                },
                analytics: {
                    context: "seo-data-d46ad577-7279-477c-af7f-721ede287580"
                },
                cta: {
                    link: "https://www.swiggy.com/restaurants/great-indian-khichdi-by-eatfit-hoysala-nagar-indira-nagar-bangalore-752385",
                    text: "RESTAURANT_MENU",
                    type: "WEBLINK"
                },
                widgetId: "collectionV5RestaurantListWidget_SimRestoRelevance_food_seo"
            },
            {
                info: {
                    id: "131114",
                    name: "Andhra Gunpowder",
                    cloudinaryImageId: "xnpuvvqfcxfttpwgvq6p",
                    locality: "Jeevan Bhima Nagar",
                    areaName: "Indiranagar",
                    costForTwo: "₹350 for two",
                    cuisines: [
                        "Andhra",
                        "Biryani",
                        "South Indian"
                    ],
                    avgRating: 4.3,
                    feeDetails: {
                        restaurantId: "131114",
                        fees: [
                            {
                                name: "BASE_DISTANCE",
                                fee: 2800
                            },
                            {
                                name: "BASE_TIME"
                            },
                            {
                                name: "ANCILLARY_SURGE_FEE"
                            }
                        ],
                        totalFee: 2800
                    },
                    parentId: "10496",
                    avgRatingString: "4.3",
                    totalRatingsString: "10K+",
                    sla: {
                        deliveryTime: 23,
                        lastMileTravel: 2,
                        serviceability: "SERVICEABLE",
                        slaString: "23 mins",
                        lastMileTravelString: "2.0 km",
                        iconType: "ICON_TYPE_EMPTY"
                    },
                    availability: {
                        nextCloseTime: "2023-09-05 01:00:00",
                        opened: true
                    },
                    badges: {
                        textExtendedBadges: [
                            {
                                iconId: "guiltfree/GF_Logo_android_3x",
                                shortDescription: "options available",
                                fontColor: "#7E808C"
                            }
                        ]
                    },
                    isOpen: true,
                    type: "F",
                    badgesV2: {
                        entityBadges: {
                            imageBased: {},
                            textBased: {},
                            textExtendedBadges: {
                                badgeObject: [
                                    {
                                        attributes: {
                                            description: "",
                                            fontColor: "#7E808C",
                                            iconId: "guiltfree/GF_Logo_android_3x",
                                            shortDescription: "options available"
                                        }
                                    }
                                ]
                            }
                        }
                    },
                    aggregatedDiscountInfoV3: {
                        header: "₹100 OFF",
                        subHeader: "ABOVE ₹299",
                        discountTag: "FLAT DEAL",
                        discountCalloutInfo: {
                            message: "Free Delivery",
                            logoCtx: {
                                logo: "v1655895371/free_delivery_logo_hqipbo.png"
                            }
                        }
                    },
                    orderabilityCommunication: {
                        title: {},
                        subTitle: {},
                        message: {},
                        customIcon: {}
                    },
                    differentiatedUi: {
                        displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                        differentiatedUiMediaDetails: {
                            mediaType: "ADS_MEDIA_ENUM_IMAGE",
                            lottie: {},
                            video: {}
                        }
                    },
                    reviewsSummary: {},
                    displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
                    restaurantOfferPresentationInfo: {}
                },
                analytics: {
                    context: "seo-data-d46ad577-7279-477c-af7f-721ede287580"
                },
                cta: {
                    link: "https://www.swiggy.com/restaurants/andhra-gunpowder-jeevan-bhima-nagar-indiranagar-bangalore-131114",
                    text: "RESTAURANT_MENU",
                    type: "WEBLINK"
                },
                widgetId: "collectionV5RestaurantListWidget_SimRestoRelevance_food_seo"
            },
            {
                info: {
                    id: "271",
                    name: "Meghana Foods",
                    cloudinaryImageId: "sotxv0gury7f7vrfvb2r",
                    locality: "Indiranagar",
                    areaName: "Indiranagar",
                    costForTwo: "₹500 for two",
                    cuisines: [
                        "Biryani",
                        "Andhra",
                        "South Indian",
                        "North Indian",
                        "Chinese",
                        "Seafood"
                    ],
                    avgRating: 4.4,
                    feeDetails: {
                        restaurantId: "271",
                        fees: [
                            {
                                name: "BASE_DISTANCE",
                                fee: 3300
                            },
                            {
                                name: "BASE_TIME"
                            },
                            {
                                name: "ANCILLARY_SURGE_FEE"
                            }
                        ],
                        totalFee: 3300
                    },
                    parentId: "635",
                    avgRatingString: "4.4",
                    totalRatingsString: "10K+",
                    sla: {
                        deliveryTime: 33,
                        lastMileTravel: 0.6,
                        serviceability: "SERVICEABLE",
                        slaString: "33 mins",
                        lastMileTravelString: "0.6 km",
                        iconType: "ICON_TYPE_EMPTY"
                    },
                    availability: {
                        nextCloseTime: "2023-09-05 01:30:00",
                        opened: true
                    },
                    badges: {},
                    isOpen: true,
                    type: "F",
                    badgesV2: {
                        entityBadges: {
                            imageBased: {},
                            textBased: {},
                            textExtendedBadges: {}
                        }
                    },
                    aggregatedDiscountInfoV3: {
                        discountCalloutInfo: {
                            message: "Free Delivery",
                            logoCtx: {
                                logo: "v1655895371/free_delivery_logo_hqipbo.png"
                            }
                        }
                    },
                    orderabilityCommunication: {
                        title: {},
                        subTitle: {},
                        message: {},
                        customIcon: {}
                    },
                    differentiatedUi: {
                        displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                        differentiatedUiMediaDetails: {
                            mediaType: "ADS_MEDIA_ENUM_IMAGE",
                            lottie: {},
                            video: {}
                        }
                    },
                    reviewsSummary: {},
                    displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
                    restaurantOfferPresentationInfo: {}
                },
                analytics: {
                    context: "seo-data-d46ad577-7279-477c-af7f-721ede287580"
                },
                cta: {
                    link: "https://www.swiggy.com/restaurants/meghana-foods-indiranagar-bangalore-271",
                    text: "RESTAURANT_MENU",
                    type: "WEBLINK"
                },
                widgetId: "collectionV5RestaurantListWidget_SimRestoRelevance_food_seo"
            },
            {
                info: {
                    id: "10584",
                    name: "Pizza Hut",
                    cloudinaryImageId: "2b4f62d606d1b2bfba9ba9e5386fabb7",
                    locality: "Indiranagar",
                    areaName: "Indiranagar",
                    costForTwo: "₹300 for two",
                    cuisines: [
                        "Pizzas"
                    ],
                    avgRating: 3.6,
                    feeDetails: {
                        restaurantId: "10584",
                        fees: [
                            {
                                name: "BASE_DISTANCE",
                                fee: 2800
                            },
                            {
                                name: "BASE_TIME"
                            },
                            {
                                name: "ANCILLARY_SURGE_FEE"
                            }
                        ],
                        totalFee: 2800
                    },
                    parentId: "721",
                    avgRatingString: "3.6",
                    totalRatingsString: "10K+",
                    sla: {
                        deliveryTime: 59,
                        serviceability: "SERVICEABLE",
                        slaString: "59 mins",
                        iconType: "ICON_TYPE_EMPTY"
                    },
                    availability: {
                        nextCloseTime: "2023-09-05 04:00:00",
                        opened: true
                    },
                    badges: {},
                    isOpen: true,
                    aggregatedDiscountInfoV2: {},
                    type: "F",
                    badgesV2: {
                        entityBadges: {
                            imageBased: {},
                            textBased: {},
                            textExtendedBadges: {}
                        }
                    },
                    orderabilityCommunication: {
                        title: {},
                        subTitle: {},
                        message: {},
                        customIcon: {}
                    },
                    differentiatedUi: {
                        displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                        differentiatedUiMediaDetails: {
                            mediaType: "ADS_MEDIA_ENUM_IMAGE",
                            lottie: {},
                            video: {}
                        }
                    },
                    reviewsSummary: {},
                    displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
                    restaurantOfferPresentationInfo: {}
                },
                analytics: {
                    context: "seo-data-d46ad577-7279-477c-af7f-721ede287580"
                },
                cta: {
                    link: "https://www.swiggy.com/restaurants/pizza-hut-indiranagar-bangalore-10584",
                    text: "RESTAURANT_MENU",
                    type: "WEBLINK"
                },
                widgetId: "collectionV5RestaurantListWidget_SimRestoRelevance_food_seo"
            },
            {
                info: {
                    id: "23681",
                    name: "McDonald's",
                    cloudinaryImageId: "ee5f8e06b300efc07c9fe3f4df40dfc4",
                    locality: "Cmh Road",
                    areaName: "Indiranagar",
                    costForTwo: "₹400 for two",
                    cuisines: [
                        "Burgers",
                        "Beverages",
                        "Cafe",
                        "Desserts"
                    ],
                    avgRating: 4.4,
                    feeDetails: {
                        restaurantId: "23681",
                        fees: [
                            {
                                name: "BASE_DISTANCE",
                                fee: 2800
                            },
                            {
                                name: "BASE_TIME"
                            },
                            {
                                name: "ANCILLARY_SURGE_FEE"
                            }
                        ],
                        totalFee: 2800
                    },
                    parentId: "630",
                    avgRatingString: "4.4",
                    totalRatingsString: "10K+",
                    sla: {
                        deliveryTime: 33,
                        lastMileTravel: 0.6,
                        serviceability: "SERVICEABLE",
                        slaString: "33 mins",
                        lastMileTravelString: "0.6 km",
                        iconType: "ICON_TYPE_EMPTY"
                    },
                    availability: {
                        nextCloseTime: "2023-09-05 02:45:00",
                        opened: true
                    },
                    badges: {
                        textExtendedBadges: [
                            {
                                iconId: "guiltfree/GF_Logo_android_3x",
                                shortDescription: "options available",
                                fontColor: "#7E808C"
                            }
                        ]
                    },
                    isOpen: true,
                    type: "F",
                    badgesV2: {
                        entityBadges: {
                            imageBased: {},
                            textBased: {},
                            textExtendedBadges: {
                                badgeObject: [
                                    {
                                        attributes: {
                                            description: "",
                                            fontColor: "#7E808C",
                                            iconId: "guiltfree/GF_Logo_android_3x",
                                            shortDescription: "options available"
                                        }
                                    }
                                ]
                            }
                        }
                    },
                    aggregatedDiscountInfoV3: {
                        header: "10% OFF",
                        subHeader: "ABOVE ₹999",
                        discountTag: "FLAT DEAL",
                        discountCalloutInfo: {
                            message: "Free Delivery",
                            logoCtx: {
                                logo: "v1655895371/free_delivery_logo_hqipbo.png"
                            }
                        }
                    },
                    orderabilityCommunication: {
                        title: {},
                        subTitle: {},
                        message: {},
                        customIcon: {}
                    },
                    differentiatedUi: {
                        displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                        differentiatedUiMediaDetails: {
                            mediaType: "ADS_MEDIA_ENUM_IMAGE",
                            lottie: {},
                            video: {}
                        }
                    },
                    reviewsSummary: {},
                    displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
                    restaurantOfferPresentationInfo: {}
                },
                analytics: {
                    context: "seo-data-d46ad577-7279-477c-af7f-721ede287580"
                },
                cta: {
                    link: "https://www.swiggy.com/restaurants/mcdonalds-cmh-road-indiranagar-bangalore-23681",
                    text: "RESTAURANT_MENU",
                    type: "WEBLINK"
                },
                widgetId: "collectionV5RestaurantListWidget_SimRestoRelevance_food_seo"
            },
            {
                info: {
                    id: "15898",
                    name: "Mani's Dum Biryani",
                    cloudinaryImageId: "lufqwcvjqllfw24ab82x",
                    locality: "Jeevan Bhima Nagar",
                    areaName: "Jeevan Bhima Nagar",
                    costForTwo: "₹400 for two",
                    cuisines: [
                        "Biryani"
                    ],
                    avgRating: 4.4,
                    feeDetails: {
                        restaurantId: "15898",
                        fees: [
                            {
                                name: "BASE_DISTANCE",
                                fee: 2800
                            },
                            {
                                name: "BASE_TIME"
                            },
                            {
                                name: "ANCILLARY_SURGE_FEE"
                            }
                        ],
                        totalFee: 2800
                    },
                    parentId: "623",
                    avgRatingString: "4.4",
                    totalRatingsString: "10K+",
                    sla: {
                        deliveryTime: 20,
                        lastMileTravel: 1.7,
                        serviceability: "SERVICEABLE",
                        slaString: "20 mins",
                        lastMileTravelString: "1.7 km",
                        iconType: "ICON_TYPE_EMPTY"
                    },
                    availability: {
                        nextCloseTime: "2023-09-04 23:45:00",
                        opened: true
                    },
                    badges: {},
                    isOpen: true,
                    type: "F",
                    badgesV2: {
                        entityBadges: {
                            imageBased: {},
                            textBased: {},
                            textExtendedBadges: {}
                        }
                    },
                    aggregatedDiscountInfoV3: {
                        discountCalloutInfo: {
                            message: "Free Delivery",
                            logoCtx: {
                                logo: "v1655895371/free_delivery_logo_hqipbo.png"
                            }
                        }
                    },
                    orderabilityCommunication: {
                        title: {},
                        subTitle: {},
                        message: {},
                        customIcon: {}
                    },
                    differentiatedUi: {
                        displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                        differentiatedUiMediaDetails: {
                            mediaType: "ADS_MEDIA_ENUM_IMAGE",
                            lottie: {},
                            video: {}
                        }
                    },
                    reviewsSummary: {},
                    displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
                    restaurantOfferPresentationInfo: {}
                },
                analytics: {
                    context: "seo-data-d46ad577-7279-477c-af7f-721ede287580"
                },
                cta: {
                    link: "https://www.swiggy.com/restaurants/manis-dum-biryani-jeevan-bhima-nagar-bangalore-15898",
                    text: "RESTAURANT_MENU",
                    type: "WEBLINK"
                },
                widgetId: "collectionV5RestaurantListWidget_SimRestoRelevance_food_seo"
            },
            {
                info: {
                    id: "410684",
                    name: "Soul Rasa",
                    cloudinaryImageId: "vt9jevkq2ddvjodkuhq3",
                    locality: "Murugeshpalya",
                    areaName: "Indiranagar",
                    costForTwo: "₹400 for two",
                    cuisines: [
                        "Indian",
                        "Healthy Food",
                        "Home Food",
                        "South Indian",
                        "North Indian"
                    ],
                    avgRating: 4.4,
                    feeDetails: {
                        restaurantId: "410684",
                        fees: [
                            {
                                name: "BASE_DISTANCE",
                                fee: 3800
                            },
                            {
                                name: "BASE_TIME"
                            },
                            {
                                name: "ANCILLARY_SURGE_FEE"
                            }
                        ],
                        totalFee: 3800
                    },
                    parentId: "239281",
                    avgRatingString: "4.4",
                    totalRatingsString: "1K+",
                    sla: {
                        deliveryTime: 27,
                        lastMileTravel: 3.9,
                        serviceability: "SERVICEABLE",
                        slaString: "27 mins",
                        lastMileTravelString: "3.9 km",
                        iconType: "ICON_TYPE_EMPTY"
                    },
                    availability: {
                        nextCloseTime: "2023-09-04 23:30:00",
                        opened: true
                    },
                    badges: {
                        textExtendedBadges: [
                            {
                                iconId: "guiltfree/GF_Logo_android_3x",
                                shortDescription: "brand",
                                fontColor: "#7E808C"
                            }
                        ]
                    },
                    isOpen: true,
                    type: "F",
                    badgesV2: {
                        entityBadges: {
                            imageBased: {},
                            textBased: {},
                            textExtendedBadges: {
                                badgeObject: [
                                    {
                                        attributes: {
                                            description: "",
                                            fontColor: "#7E808C",
                                            iconId: "guiltfree/GF_Logo_android_3x",
                                            shortDescription: "brand"
                                        }
                                    }
                                ]
                            }
                        }
                    },
                    aggregatedDiscountInfoV3: {
                        header: "60% OFF",
                        subHeader: "UPTO ₹100",
                        discountCalloutInfo: {
                            message: "Free Delivery",
                            logoCtx: {
                                logo: "v1655895371/free_delivery_logo_hqipbo.png"
                            }
                        }
                    },
                    orderabilityCommunication: {
                        title: {},
                        subTitle: {},
                        message: {},
                        customIcon: {}
                    },
                    differentiatedUi: {
                        displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                        differentiatedUiMediaDetails: {
                            mediaType: "ADS_MEDIA_ENUM_IMAGE",
                            lottie: {},
                            video: {}
                        }
                    },
                    reviewsSummary: {},
                    displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
                    restaurantOfferPresentationInfo: {}
                },
                analytics: {
                    context: "seo-data-d46ad577-7279-477c-af7f-721ede287580"
                },
                cta: {
                    link: "https://www.swiggy.com/restaurants/soul-rasa-murugeshpalya-indiranagar-bangalore-410684",
                    text: "RESTAURANT_MENU",
                    type: "WEBLINK"
                },
                widgetId: "collectionV5RestaurantListWidget_SimRestoRelevance_food_seo"
            },
            {
                info: {
                    id: "457308",
                    name: "Bakingo",
                    cloudinaryImageId: "zf2wklnad7kyvgk98thl",
                    locality: "New Thipasandra",
                    areaName: "Indiranagar",
                    costForTwo: "₹300 for two",
                    cuisines: [
                        "Bakery",
                        "Desserts",
                        "Beverages",
                        "Snacks"
                    ],
                    avgRating: 4.3,
                    feeDetails: {
                        restaurantId: "457308",
                        fees: [
                            {
                                name: "BASE_DISTANCE",
                                fee: 2800
                            },
                            {
                                name: "BASE_TIME"
                            },
                            {
                                name: "ANCILLARY_SURGE_FEE"
                            }
                        ],
                        totalFee: 2800
                    },
                    parentId: "3818",
                    avgRatingString: "4.3",
                    totalRatingsString: "1K+",
                    sla: {
                        deliveryTime: 28,
                        lastMileTravel: 1.8,
                        serviceability: "SERVICEABLE",
                        slaString: "28 mins",
                        lastMileTravelString: "1.8 km",
                        iconType: "ICON_TYPE_EMPTY"
                    },
                    availability: {
                        nextCloseTime: "2023-09-05 01:00:00",
                        opened: true
                    },
                    badges: {},
                    isOpen: true,
                    type: "F",
                    badgesV2: {
                        entityBadges: {
                            imageBased: {},
                            textBased: {},
                            textExtendedBadges: {}
                        }
                    },
                    aggregatedDiscountInfoV3: {
                        discountCalloutInfo: {
                            message: "Free Delivery",
                            logoCtx: {
                                logo: "v1655895371/free_delivery_logo_hqipbo.png"
                            }
                        }
                    },
                    orderabilityCommunication: {
                        title: {},
                        subTitle: {},
                        message: {},
                        customIcon: {}
                    },
                    differentiatedUi: {
                        displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                        differentiatedUiMediaDetails: {
                            mediaType: "ADS_MEDIA_ENUM_IMAGE",
                            lottie: {},
                            video: {}
                        }
                    },
                    reviewsSummary: {},
                    displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
                    restaurantOfferPresentationInfo: {}
                },
                analytics: {
                    context: "seo-data-d46ad577-7279-477c-af7f-721ede287580"
                },
                cta: {
                    link: "https://www.swiggy.com/restaurants/bakingo-new-thipasandra-indiranagar-bangalore-457308",
                    text: "RESTAURANT_MENU",
                    type: "WEBLINK"
                },
                widgetId: "collectionV5RestaurantListWidget_SimRestoRelevance_food_seo"
            }
        ];
        setTimeout(()=>{
            setResC(data);
        }, "1000");
    };
    return {
        resC
    };
};
exports.mockGetResData = mockGetResData;
const sampleData = exports.sampleData = "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet. It uses a dictionary of over 200 Latin words, combined with a handful of model sentence structures, to generate Lorem Ipsum which looks reasonable. The generated Lorem Ipsum is therefore always free from repetition, injected humour, or non-characteristic words etc.";

  $parcel$ReactRefreshHelpers$b553.postlude(module);
} finally {
  window.$RefreshReg$ = prevRefreshReg;
  window.$RefreshSig$ = prevRefreshSig;
}
},{"8dd09592340241f3":"21dqq","@parcel/transformer-react-refresh-wrap/lib/helpers/helpers.js":"km3Ru"}],"h0rtF":[function(require,module,exports) {
var $parcel$ReactRefreshHelpers$b52a = require("@parcel/transformer-react-refresh-wrap/lib/helpers/helpers.js");
var prevRefreshReg = window.$RefreshReg$;
var prevRefreshSig = window.$RefreshSig$;
$parcel$ReactRefreshHelpers$b52a.prelude(module);

try {
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = void 0;
var _react = _interopRequireDefault(require("ca75da1d2ded6327"));
var _jsxRuntime = require("78f4d6916d89a6e0");
function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}
class Profile extends _react.default.Component {
    constructor(props){
        super(props);
        this.state = {
            name: this.props.name
        };
    }
    componentWillUnmount() {
    // console.log("Parent unmount");
    }
    render() {
        const { name } = this.state;
        return /*#__PURE__*/ (0, _jsxRuntime.jsxs)("h2", {
            children: [
                "Profile Part with name = ",
                name
            ]
        });
    }
}
var _default = exports.default = Profile;

  $parcel$ReactRefreshHelpers$b52a.postlude(module);
} finally {
  window.$RefreshReg$ = prevRefreshReg;
  window.$RefreshSig$ = prevRefreshSig;
}
},{"ca75da1d2ded6327":"21dqq","78f4d6916d89a6e0":"6AEwr","@parcel/transformer-react-refresh-wrap/lib/helpers/helpers.js":"km3Ru"}]},["3EtMM","1xC6H"], null, "parcelRequireaff4")

//# sourceMappingURL=About.84db8bad.js.map
