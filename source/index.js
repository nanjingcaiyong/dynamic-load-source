(() => {
	// 所有子、孙等模块挂载的字典
  var __webpack_modules__ = ({
		// TODO: step4
    "./index.js": ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {
      (async function () {
        const { count, add } = await __webpack_require__.e("num_js").then(__webpack_require__.bind(__webpack_require__, "./num.js"))
				// TODO: step10
        console.log(count)
        add()
        console.log(count)
      })()
    })
	});

  // 模块缓存
  var __webpack_module_cache__ = {};

	// TODO: step3
  /**
   * @description 模块加载
   * @param { string } moduleId 文件路径
   */
  function __webpack_require__(moduleId) {
    var cachedModule = __webpack_module_cache__[moduleId];
    // 判断模块是否加载过。如果有，直接返回缓存
    if (cachedModule !== undefined) {
      return cachedModule.exports;
    }
    var module = __webpack_module_cache__[moduleId] = {
      exports: {}
    };
     __webpack_modules__[moduleId](module, module.exports, __webpack_require__);
  	return module.exports;
  }

  __webpack_require__.m = __webpack_modules__;

	(() => {
    __webpack_require__.d = (exports, definition) => {
      for(var key in definition) {
        if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
  				Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
        }
      }
    };
	})();



  (() => {
  	__webpack_require__.f = {};
		// TODO: step5
    __webpack_require__.e = (chunkId) => {
      // __webpack_require__.f下只有属性j
	    return Promise.all(Object.keys(__webpack_require__.f).reduce((promises, key) => {
        // __webpack_require__.f.j()
        __webpack_require__.f[key](chunkId, promises);
				return promises;
			}, []));
		};
	})();
	
	/* webpack/runtime/get javascript chunk filename */
	(() => {
		// This function allow to reference async chunks
		__webpack_require__.u = (chunkId) => {
			// return url for filenames based on template
			return "" + chunkId + ".js";
		};
	})();
	
	/* webpack/runtime/global */
	(() => {
		__webpack_require__.g = (function() {
			if (typeof globalThis === 'object') return globalThis;
			try {
				return this || new Function('return this')();
			} catch (e) {
				if (typeof window === 'object') return window;
			}
		})();
	})();
	
	/* webpack/runtime/hasOwnProperty shorthand */
	(() => {
		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
	})();
	
	/* webpack/runtime/load script */
	(() => {
		var inProgress = {};
		var dataWebpackPrefix = "test:";
		// TODO: step7
		/**
		 * @description 通过创建script标签加载子模块
		 * @param {*} url 
		 * @param {*} done 回调
		 * @param {*} key "chunk-" + chunkId
		 * @param {*} chunkId 
		 * @returns 
		 */
		__webpack_require__.l = (url, done, key, chunkId) => {
			// 是否正在下载模块
			if(inProgress[url]) { inProgress[url].push(done); return; }
			var script, needAttach;
			if(key !== undefined) {
				// 获取页面上所有的script标签
				var scripts = document.getElementsByTagName("script");
				for(var i = 0; i < scripts.length; i++) {
					var s = scripts[i];
					// 如果存在url和将要加载的一样 并且 属性data-webpack 和 `test:chunkId-${chunkId}` 一致，那么直接用页面上该script标签
					if(s.getAttribute("src") == url || s.getAttribute("data-webpack") == dataWebpackPrefix + key) { 
						script = s; 
						break; 
					}
				}
			}
			// 如果页面上不存在url和data-webpack匹配的情况下，创建script标签
			if(!script) {
				needAttach = true;
				script = document.createElement('script');
		
				script.charset = 'utf-8';
				script.timeout = 120;
				if (__webpack_require__.nc) {
					script.setAttribute("nonce", __webpack_require__.nc);
				}
				script.setAttribute("data-webpack", dataWebpackPrefix + key);
				script.src = url;
			}
			inProgress[url] = [done]; // done = loadingEnded
			var onScriptComplete = (prev, event) => {
				// avoid mem leaks in IE.
				script.onerror = script.onload = null;
				clearTimeout(timeout); // 加载成功、失败清除超时定时器
				var doneFns = inProgress[url];
				delete inProgress[url];
				script.parentNode && script.parentNode.removeChild(script);
				doneFns && doneFns.forEach((fn) => (fn(event))); // fn = loadingEnded, event = { type: 'timeout', target: script }
				if(prev) return prev(event);
			};
			// 超过120s认为加载超时
			var timeout = setTimeout(onScriptComplete.bind(null, undefined, { type: 'timeout', target: script }), 120000);
			script.onerror = onScriptComplete.bind(null, script.onerror);
			script.onload = onScriptComplete.bind(null, script.onload);
			needAttach && document.head.appendChild(script);
		};
	})();
	
	/* webpack/runtime/make namespace object */
	(() => {
		// define __esModule on exports
		__webpack_require__.r = (exports) => {
			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
			}
			Object.defineProperty(exports, '__esModule', { value: true });
		};
	})();
	
	/* webpack/runtime/publicPath */
	(() => {
		var scriptUrl;
		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
		var document = __webpack_require__.g.document;
		if (!scriptUrl && document) {
			if (document.currentScript)
				scriptUrl = document.currentScript.src
			if (!scriptUrl) {
				var scripts = document.getElementsByTagName("script");
				if(scripts.length) scriptUrl = scripts[scripts.length - 1].src
			}
		}
		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
		__webpack_require__.p = scriptUrl;
	})();
	
	/* webpack/runtime/jsonp chunk loading */
	(() => {
		// no baseURI
		
		// object to store loaded and loading chunks
		// undefined = chunk not loaded, null = chunk preloaded/prefetched
		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
		var installedChunks = {
			"index": 0 // 0: 已安装
		};
		// TODO: step6
		__webpack_require__.f.j = (chunkId, promises) => {
				// chunkId in installedChunks
				var installedChunkData = __webpack_require__.o(installedChunks, chunkId) 
          ? installedChunks[chunkId] 
          : undefined;
				if(installedChunkData !== 0) { // 0: 已安装
					// a Promise means "currently loading".
					if(installedChunkData) {
						promises.push(installedChunkData[2]);
					} else {
						if(true) { // all chunks have JS
							// setup Promise in chunk cache
							var promise = new Promise((resolve, reject) => (installedChunkData = installedChunks[chunkId] = [resolve, reject]));
							promises.push(installedChunkData[2] = promise); // installedChunkData = [resolve, reject, promise]
		
							// host + "" + chunkId + ".js";
							var url = __webpack_require__.p + __webpack_require__.u(chunkId);
							var error = new Error();
							var loadingEnded = (event) => {
								if(__webpack_require__.o(installedChunks, chunkId)) {
									installedChunkData = installedChunks[chunkId];
									if(installedChunkData !== 0) installedChunks[chunkId] = undefined;
									if(installedChunkData) {
										var errorType = event && (event.type === 'load' ? 'missing' : event.type);
										var realSrc = event && event.target && event.target.src;
										error.message = 'Loading chunk ' + chunkId + ' failed.\n(' + errorType + ': ' + realSrc + ')';
										error.name = 'ChunkLoadError';
										error.type = errorType;
										error.request = realSrc;
										installedChunkData[1](error);
									}
								}
							};
							// 通过创建script加载依赖的js
							__webpack_require__.l(url, loadingEnded, "chunk-" + chunkId, chunkId);
						} else installedChunks[chunkId] = 0;
					}
				}
		};

		// TODO: step9
		/**
		 * @description 子模块执行push函数后触发
		*/
		var webpackJsonpCallback = (parentChunkLoadingFunction, data) => {
			// chunkIds = ['num_js'], moreModules = {"./num.js": () => {}}
			var [chunkIds, moreModules, runtime] = data;
			// add "moreModules" to the modules object,
			// then flag all "chunkIds" as loaded and fire callback
			var moduleId, chunkId, i = 0;
			for(moduleId in moreModules) {
				// "./num.js" in moreModules
				if(__webpack_require__.o(moreModules, moduleId)) {
					// 给__webpack_modules__字典添加新模块， __webpack_modules__[moduleId] = moreModules[moduleId];
					__webpack_require__.m[moduleId] = moreModules[moduleId];
				}
			}
			if(runtime) var result = runtime(__webpack_require__);
			if(parentChunkLoadingFunction) parentChunkLoadingFunction(data);
			for(;i < chunkIds.length; i++) {
				chunkId = chunkIds[i];
				// 如果该模块没有安装（installedChunks[chunkId] = 0才是已安装）。在__webpack_require__.f.j 函数中挂载，installedChunks[chunkId] = [resolve, reject, promise]
				if(__webpack_require__.o(installedChunks, chunkId) && installedChunks[chunkId]) {
					installedChunks[chunkId][0](); // 执行promise的resolve，触发step10
				}
				installedChunks[chunkIds[i]] = 0; // 将该模块设为已安装
			}
		}
		// TODO: step1
		/**
		 * 为子模块声明导出变量、函数等的地方（self["webpackChunktest"]）
		 * 子模块往里面push([["num_js"], {"./num.js": () => {}}])
		 */
		var chunkLoadingGlobal = self["webpackChunktest"] = self["webpackChunktest"] || [];
		chunkLoadingGlobal.forEach(webpackJsonpCallback.bind(null, 0));
		// TODO: step8
		// 这里的定义的push函数供子模块使用，用于当子模块加载完成执行的时候主动触发父模块的操作
		chunkLoadingGlobal.push = webpackJsonpCallback.bind(null, chunkLoadingGlobal.push.bind(chunkLoadingGlobal)); 
	})();

	// TODO: step2
  // 加载子模块
	var __webpack_exports__ = __webpack_require__("./index.js");
})()
;