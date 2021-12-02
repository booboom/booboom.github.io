/**
 * Copyright 2016 Google Inc. All rights reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
*/

// DO NOT EDIT THIS GENERATED OUTPUT DIRECTLY!
// This file should be overwritten as part of your build process.
// If you need to extend the behavior of the generated service worker, the best approach is to write
// additional code and include it using the importScripts option:
//   https://github.com/GoogleChrome/sw-precache#importscripts-arraystring
//
// Alternatively, it's possible to make changes to the underlying template file and then use that as the
// new base for generating output, via the templateFilePath option:
//   https://github.com/GoogleChrome/sw-precache#templatefilepath-string
//
// If you go that route, make sure that whenever you update your sw-precache dependency, you reconcile any
// changes made to this original template file with your modified copy.

// This generated service worker JavaScript will precache your site's resources.
// The code needs to be saved in a .js file at the top-level of your site, and registered
// from your pages in order to be used. See
// https://github.com/googlechrome/sw-precache/blob/master/demo/app/js/service-worker-registration.js
// for an example of how you can register this script and handle various service worker events.

/* eslint-env worker, serviceworker */
/* eslint-disable indent, no-unused-vars, no-multiple-empty-lines, max-nested-callbacks, space-before-function-paren, quotes, comma-spacing */
'use strict';

var precacheConfig = [["about/index.html","0e28e933c4c588ae5b4b1880e7e14ee5"],["archive/H5toApp.html","d7e501fc9194008b17e36e6b1052dba1"],["archive/MacInstallProblem.html","ce87bda92bbf306a599f0e7baed1bdc0"],["archive/TencentCloud.html","de7fd5be772571d4ce81495441fa0520"],["archive/TencentMP-4.html","b1926d96b4fc9a3ff8ea54fa00402731"],["archive/TencentMP_1.html","4674cd18c3cab1b78d8c9dc4261e2c80"],["archive/TencentMP_2.html","d31f9d007731cbea743912a90b891aee"],["archive/TencentMP_3.html","d3a18bd57840466b3c631d914b28311e"],["archive/backgoundLinearGradient.html","aaeb75d3643e06a8f50aaf95bf57a61c"],["archive/crontab.html","40b6b3d483d0366bbb0dfd15a6b43e69"],["archive/cssProp.html","e01cca2fad886b207ed6788f9b8991d6"],["archive/eggNodeSercer.html","41d762a42e64c8f849bd96c0fe7e0205"],["archive/git-remote.html","684ca1a38d4fb6036b85ed9f43554edc"],["archive/helloWorld.html","6e4ea07b93448d9e18fa24d261a83c66"],["archive/javaScript-call-init.html","1a22ffb0550c0fbc8ed79b8c37b01a0e"],["archive/javaScript-new-init.html","f8f6753d083a162a8dc90b8aef0baf00"],["archive/javascript_copy.html","3d512fa38cf62e7b0c91b223781b634e"],["archive/macPrivoxy.html","9e1475c75c5ad2d5c363f0a01df805b9"],["archive/mp-fuck.html","61dc59c0218c1265c6ead2541d1b2e68"],["archive/music_shuaidie.html","9386cb0629c01bb27a541c772570a109"],["archive/perfersColorScheme.html","cf14c316d36d3c51c6b68acceb39fad7"],["archive/python-mysql.html","4959133e7eda324e995e3df91ed9e81b"],["archive/python-netease-crawler.html","25af9232a99aba5ed24ab10f4b54f918"],["archive/python-os-json.html","871c70019714936dc0089f193090540c"],["archive/pythonOne.html","6231973a861ca1b387a7cd9c5d8a5f5b"],["archive/react-beautiful-dnd.html","b0362dea5fdeb3a1fba845881014bdf1"],["archive/shell_script.html","0c6f72d8bc5a0e8deca3832701002889"],["archive/taro-map-regionchange.html","3a46c3119040b14463bb6d4fdaf50124"],["archive/taro-mp-share.html","8e5bb2ab902a065964a1c5d7190c9af5"],["archive/text-tag-wrap.html","cb7e6b072aa0b74f609da7c501cba2bb"],["archive/vueCommunication.html","280dc3aa9790563a43bc4a536c39d918"],["archive/vueWxBackHistory.html","63b531cf75262413f4fb67cbca1cf947"],["archive/webpack-config.html","d63b252df815c21e53f8a2a01e6a9c81"],["archives/2018/08/index.html","d3f23be6d713af474b3522b2fd9680fe"],["archives/2018/09/index.html","1fa316e6651db6b71df49a098b4d3eef"],["archives/2018/10/index.html","c5992c883dd8f83deef7b13f6c803fa7"],["archives/2018/index.html","8677e703f60895286de6143892232cd0"],["archives/2018/page/2/index.html","b352fd81be65998ce7897d74a3ac37cd"],["archives/2019/02/index.html","43044b92aeee6f7d00def9c4052d41e6"],["archives/2019/03/index.html","d555d3136c0c1ff38e06ac5f052899b7"],["archives/2019/04/index.html","ad78e16de416fc143031853197a66014"],["archives/2019/08/index.html","734119f1093cc0793947913b4ea1cd41"],["archives/2019/09/index.html","4291780c887a504642d527f9886797e6"],["archives/2019/10/index.html","8bc07036e0844d1c5aaa422bd63a0093"],["archives/2019/index.html","fe06c602b95156c8a944eb6eee24b866"],["archives/2020/09/index.html","1cab5f1c235c2355fb93488b2d68b923"],["archives/2020/10/index.html","763e0daf64ae97f52c8fb02fbb295906"],["archives/2020/index.html","536a962701944bae57906498515503e6"],["archives/2021/04/index.html","b8e5c15cdf63549f84ae2625a2cf5155"],["archives/2021/index.html","6e0fedcaf0292c04f1390e4f4d075648"],["archives/index.html","af81e8588f1e41c8730dea22cd6f8732"],["archives/page/2/index.html","2058bbb7665d0fa15693f4d89e5daa4a"],["archives/page/3/index.html","a9dac74d020345b616536e7c8aeea51a"],["archives/page/4/index.html","570f72949bae3b0cd5c61607db2c27e9"],["assets/css/APlayer.min.css","fbe994054426fadb2dff69d824c5c67a"],["assets/css/DPlayer.min.css","31ac9b1a5a7f018dcc9a0e0f66261c08"],["assets/js/APlayer.min.js","8f1017e7a73737e631ff95fa51e4e7d7"],["assets/js/DPlayer.min.js","4097986cff510567068128f4b18004a6"],["assets/js/Meting.min.js","bfac0368480fd344282ec018d28f173d"],["categories/Git/index.html","59f46413fe6a9f117893773fb463b270"],["categories/H5/index.html","007f75984cf9564711ddc172cc166a42"],["categories/HelloWorld/index.html","31f220a974a26a98871314e4f6a91f36"],["categories/Vue/index.html","8bdaca272bdf8a964472dbd968640c83"],["categories/css/index.html","ec62d5b08279e35a5015792d65431dc0"],["categories/index.html","30c054ba48cf694b81130eb23d636bf4"],["categories/javaScript/index.html","dec7d2aa4986147f2a29aa0409561fda"],["categories/mac/index.html","9b62ef26728ed0b12c02afe57c95de13"],["categories/python/index.html","ac26342ea826443044842f4d268dfb21"],["categories/web/index.html","c94dd33acb89a1665a1eee2663b00223"],["categories/前端/index.html","57b967c3cccfa30800c77ccb703eaabb"],["categories/动漫/index.html","209e7809e19cdc2cd06a560db7b595fe"],["categories/原生Javascript/index.html","dce776cac347eff140b12f443ebeb26d"],["categories/小程序/index.html","ef50cf322a4c55243216110925586802"],["categories/服务器/index.html","33ed2bd393744d09384a2759234a092c"],["categories/猎奇/index.html","3a8fca9cc2d145ea068f94be5b7d205a"],["css/prism-line-numbers.css","33fcb9c936d6640f7e23484e1b476145"],["css/prism.css","12172c9e0b25e59e8e925b84065c78f0"],["css/rtl.css","ea787ecb7ad2c082fcd1ac4350c43e6d"],["css/style.css","f7eccb94de0cb83895b34a8f179d87ff"],["demos/clip_path_1.html","9045f2532ee70f530075c22ed409f6d9"],["gallery/index.html","83cd1403a885c0c37a6be89853ab3fba"],["group/index.html","fea4945f205413bf9626faab6cb9eb7c"],["images/apple-touch-icon.png","0f3687ddb31c8d4f3f57db5904514471"],["images/backgoundLinearGradient/gradient.gif","93b5d42c0cb0791877ae483a92d9a7f9"],["images/backgoundLinearGradient/noAnimation.jpg","4db07dc8d4a6150fc7cd6f1c8af88626"],["images/cssProp/1.gif","407516c87d40f1fca66c840c6c122828"],["images/cssProp/animation.gif","407516c87d40f1fca66c840c6c122828"],["images/favicon-192x192.png","22cbbf3723cf35de562d84f43b2d47c4"],["images/logo.png","3a523a218d45942792b375bee59382ca"],["images/reactBeautifulDnd/react_beautiful_dnd_dom.gif","99c050814b7f7a1e015c0f6bf87fb304"],["index.html","30d037eabe3ff839d9ac704681b158b3"],["js/main.js","d3a0d4ba66a4d1063808786384261fcb"],["js/search.js","92b1330078e33f8133822a21c7961128"],["js/valine.min.js","1b2e70af1f51a248dcf0b4b5cbcd5c9d"],["lib/font-awesome/css/all.min.css","ab1da07cd56b39eb65b7b66d3d5cbb56"],["lib/font-awesome/webfonts/fa-brands-400.eot","e8019d507e8cb51d169ab4f94a0cda12"],["lib/font-awesome/webfonts/fa-brands-400.svg","83e6c29fb363b2f0ea6cc18fefff729c"],["lib/font-awesome/webfonts/fa-brands-400.ttf","fdf44bc43e8fa2358bbb7d9165d78455"],["lib/font-awesome/webfonts/fa-brands-400.woff","da408238128b876cbda6424391f1566f"],["lib/font-awesome/webfonts/fa-regular-400.eot","e6c93cb47e716b579264a5fdfbf7e84d"],["lib/font-awesome/webfonts/fa-regular-400.svg","ba2a91dc95e6cfdc4b2a186a7ba83e29"],["lib/font-awesome/webfonts/fa-regular-400.ttf","8d220c793e2612bd131ed8522c54669f"],["lib/font-awesome/webfonts/fa-regular-400.woff","dad90637f797356bbc70d2664832e0b6"],["lib/font-awesome/webfonts/fa-solid-900.eot","ea363ed422723673917901680be9b37c"],["lib/font-awesome/webfonts/fa-solid-900.svg","de1d242d8acb26ec43c0d071fe78e72d"],["lib/font-awesome/webfonts/fa-solid-900.ttf","132e9759d93e4eefd7cdde0d7a322991"],["lib/font-awesome/webfonts/fa-solid-900.woff","2d0415fa29ea596b7a02c78eddeede20"],["lib/jquery/jquery.min.js","a09e13ee94d51c524b7e2a728c7d4039"],["lib/justified-gallery/css/justifiedGallery.min.css","88568c6c6e3e5caec60eb2a4f7f915e3"],["lib/justified-gallery/js/jquery.justifiedGallery.min.js","f12e15ba020d049ba166af44960051c9"],["lib/meslo-LG/MesloLGL-Bold.ttf","6c475ed9d73a90d62c666b3d94f350d2"],["lib/meslo-LG/MesloLGL-BoldItalic.ttf","1c5a059e12b5e0993699481455cf8b74"],["lib/meslo-LG/MesloLGL-Italic.ttf","17ab93d9e2493a279171fa183279decc"],["lib/meslo-LG/MesloLGL-Regular.ttf","265d62d86941c398f07704a80911ac92"],["lib/meslo-LG/MesloLGM-Bold.ttf","4174a16af8cfe61e45d1ec4758227443"],["lib/meslo-LG/MesloLGM-BoldItalic.ttf","33e53ff2022c98c3f3caa5c4682a1939"],["lib/meslo-LG/MesloLGM-Italic.ttf","259bbc1d62105f728101523e3295ddd1"],["lib/meslo-LG/MesloLGM-Regular.ttf","93e2fae291d0da752d78dc0b113591d9"],["lib/meslo-LG/MesloLGS-Bold.ttf","a31874e50f29681640f88e00f2343c25"],["lib/meslo-LG/MesloLGS-BoldItalic.ttf","2e752bcf18165adadef20e83389eb9a7"],["lib/meslo-LG/MesloLGS-Italic.ttf","526d28c1d73dedca45091a1530541908"],["lib/meslo-LG/MesloLGS-Regular.ttf","d20aa15f5ce240b12b2475042c6ead8e"],["lib/vazir-font/Vazir-Black.eot","d45d679ecbbf3e85f6fe924a3349611e"],["lib/vazir-font/Vazir-Black.ttf","dec57885836e1d78b278784703bfc3aa"],["lib/vazir-font/Vazir-Black.woff","4354348970f3bff75d294a1011617152"],["lib/vazir-font/Vazir-Bold.eot","b358a632638ddc12101a6dafd633b625"],["lib/vazir-font/Vazir-Bold.ttf","d00f44216fda6aef5873d083017fdd15"],["lib/vazir-font/Vazir-Bold.woff","98b6a3b0644ce527306cefecd0311a11"],["lib/vazir-font/Vazir-Light.eot","81fd1bcee68b84a31baa21aeb277d7e8"],["lib/vazir-font/Vazir-Light.ttf","11bc0b0762f1ba3f8393eda4a4d96984"],["lib/vazir-font/Vazir-Light.woff","a5772df426fc2720df4132d658940a78"],["lib/vazir-font/Vazir-Medium.eot","25b78a6e8f255ab89e160c7e4ca30ebb"],["lib/vazir-font/Vazir-Medium.ttf","11ef813ddc4c9ae17d99028f6132427a"],["lib/vazir-font/Vazir-Medium.woff","6134834d89c131f956774f6453ccb75f"],["lib/vazir-font/Vazir-Thin.eot","51d16771c8bf9759531066861015353f"],["lib/vazir-font/Vazir-Thin.ttf","5a7ca35b2f17908beb216ea97cce08a8"],["lib/vazir-font/Vazir-Thin.woff","388980cd8094ad738e8b23d5c470cac1"],["lib/vazir-font/Vazir.eot","91dd41e5f2b05c3c207a81f6f952fbd4"],["lib/vazir-font/Vazir.ttf","3bb6491e3a7c084399896a492e5dd618"],["lib/vazir-font/Vazir.woff","3707b5efa316620380ef9f5c9d047907"],["lib/vazir-font/font-face.css","242528decbf391a213750ed3f9e358c1"],["music/index.html","273630324e09bf7c25e07ef6a0e52551"],["page/2/index.html","b0d22280993042e12ad538b0c13da8bf"],["page/3/index.html","878081f7f00915b43942d194f6de8961"],["page/4/index.html","ac8565fb24b1d04f5cec56656e5d0d4c"],["resume/index.html","0d706d04e7cfae82a58b22d410449bec"],["search/index.html","18a8585ad959e25b0e21f6d215e642f4"],["tag/index.html","fe1d3f1fddcd28412b349097465d2b64"],["tags/Egg/index.html","a2071f96204547810c83648bcb437cca"],["tags/H5/index.html","af7012fa97e9d80036b039cd2c63edb1"],["tags/Node/index.html","af11e521b5495b48f46a93de8230067c"],["tags/Taro/index.html","423740b92a64a2a17e9ecfe8a5c62d7f"],["tags/Unix/index.html","1fc2aef9666b5247c9c4b932cbe17426"],["tags/Vue通讯/index.html","9f32e35a59afa63b48c2a853a2a9ad5f"],["tags/call/index.html","6eaeeabe5c629c3f48e4e16d7035d163"],["tags/cloud/index.html","3680166d140e617210620dbd7093b55f"],["tags/crontab/index.html","03a190404b379969f53a0a8e684d6f4a"],["tags/css/index.html","78d6094ec508931fae012e4247622dda"],["tags/git-remote/index.html","d523e1e2e37173d8f24cc49b12da6faa"],["tags/index.html","02a2188966f4730810bf966642f273fa"],["tags/javascript/index.html","2e1d1960ff056bcd366ad8950c18bd30"],["tags/mac/index.html","8d055e75a4744167fbf5354cb9963049"],["tags/mysql/index.html","08e6669f24955ece6235c30bea07e36c"],["tags/new操作符/index.html","ecf88f88b42ba487e382348792c8c5d3"],["tags/privoxy/index.html","ca1897df8547061b41353c06634d9d9a"],["tags/python-json/index.html","fe9f8309fedcc70bf36c1dbf4887e9c1"],["tags/python-os/index.html","762bc7bde831e9c887bc9ee367c4c3f3"],["tags/python/index.html","a050559d21da4fcda52b41ad7d0ee267"],["tags/shell/index.html","ecfaadc7291f231ff649fab8cfddd2dd"],["tags/vue组件/index.html","3dbd8de0e743dd952e77dc90b277e7be"],["tags/wepy/index.html","07634de6ea7e1efe426bd48a8b58c593"],["tags/小程序request-fail/index.html","1bd58bf63af15fa7f04b8a1268aca9d4"],["tags/小程序跳转/index.html","60d543726ecedb8aa457b8ab99844471"],["tags/小程序踩坑/index.html","a3a28d5b9230c5fcd2a1597eba57b644"],["tags/微信/index.html","bbda93e530a59491a0767008b01eb357"],["tags/摔爹神曲/index.html","abb1fd63a7c7eed0785a975f96c6386d"],["tags/数据类型/index.html","fd622d62db8a18715ea9bc6501282da7"],["tags/文件损坏/index.html","1b3ec7f2e86c26d1df41395c3d77b4b6"],["tags/添加多个远程git仓库/index.html","a46396b3546b90b6399c244353f03478"],["tags/爬虫/index.html","af409e52b77f0ffaef58a29a62f72e79"],["tags/生命周期/index.html","dd6ef3ba8d2c61f29b9b3cfaf6ae9a17"],["tags/网易云音乐/index.html","68de7c85d6afce72314bc17e45fc7860"],["tags/翻墙/index.html","8d735d499e7a992b0bdaabae90df3095"],["tags/腾讯云/index.html","66f46e30f8ecfd4a1ee5ef17fd3b5b7e"],["tags/踩坑/index.html","a600c8ceb2c38c658e3c7144fa2efd83"],["tags/进击的巨人/index.html","7d930fc86d77dd7b09d2d735368125af"],["top/index.html","9aaf386e28faa4d8775ab5e1472cce42"]];
var cacheName = 'sw-precache-v3--' + (self.registration ? self.registration.scope : '');


var ignoreUrlParametersMatching = [/^utm_/];



var addDirectoryIndex = function(originalUrl, index) {
    var url = new URL(originalUrl);
    if (url.pathname.slice(-1) === '/') {
      url.pathname += index;
    }
    return url.toString();
  };

var cleanResponse = function(originalResponse) {
    // If this is not a redirected response, then we don't have to do anything.
    if (!originalResponse.redirected) {
      return Promise.resolve(originalResponse);
    }

    // Firefox 50 and below doesn't support the Response.body stream, so we may
    // need to read the entire body to memory as a Blob.
    var bodyPromise = 'body' in originalResponse ?
      Promise.resolve(originalResponse.body) :
      originalResponse.blob();

    return bodyPromise.then(function(body) {
      // new Response() is happy when passed either a stream or a Blob.
      return new Response(body, {
        headers: originalResponse.headers,
        status: originalResponse.status,
        statusText: originalResponse.statusText
      });
    });
  };

var createCacheKey = function(originalUrl, paramName, paramValue,
                           dontCacheBustUrlsMatching) {
    // Create a new URL object to avoid modifying originalUrl.
    var url = new URL(originalUrl);

    // If dontCacheBustUrlsMatching is not set, or if we don't have a match,
    // then add in the extra cache-busting URL parameter.
    if (!dontCacheBustUrlsMatching ||
        !(url.pathname.match(dontCacheBustUrlsMatching))) {
      url.search += (url.search ? '&' : '') +
        encodeURIComponent(paramName) + '=' + encodeURIComponent(paramValue);
    }

    return url.toString();
  };

var isPathWhitelisted = function(whitelist, absoluteUrlString) {
    // If the whitelist is empty, then consider all URLs to be whitelisted.
    if (whitelist.length === 0) {
      return true;
    }

    // Otherwise compare each path regex to the path of the URL passed in.
    var path = (new URL(absoluteUrlString)).pathname;
    return whitelist.some(function(whitelistedPathRegex) {
      return path.match(whitelistedPathRegex);
    });
  };

var stripIgnoredUrlParameters = function(originalUrl,
    ignoreUrlParametersMatching) {
    var url = new URL(originalUrl);
    // Remove the hash; see https://github.com/GoogleChrome/sw-precache/issues/290
    url.hash = '';

    url.search = url.search.slice(1) // Exclude initial '?'
      .split('&') // Split into an array of 'key=value' strings
      .map(function(kv) {
        return kv.split('='); // Split each 'key=value' string into a [key, value] array
      })
      .filter(function(kv) {
        return ignoreUrlParametersMatching.every(function(ignoredRegex) {
          return !ignoredRegex.test(kv[0]); // Return true iff the key doesn't match any of the regexes.
        });
      })
      .map(function(kv) {
        return kv.join('='); // Join each [key, value] array into a 'key=value' string
      })
      .join('&'); // Join the array of 'key=value' strings into a string with '&' in between each

    return url.toString();
  };


var hashParamName = '_sw-precache';
var urlsToCacheKeys = new Map(
  precacheConfig.map(function(item) {
    var relativeUrl = item[0];
    var hash = item[1];
    var absoluteUrl = new URL(relativeUrl, self.location);
    var cacheKey = createCacheKey(absoluteUrl, hashParamName, hash, false);
    return [absoluteUrl.toString(), cacheKey];
  })
);

function setOfCachedUrls(cache) {
  return cache.keys().then(function(requests) {
    return requests.map(function(request) {
      return request.url;
    });
  }).then(function(urls) {
    return new Set(urls);
  });
}

self.addEventListener('install', function(event) {
  event.waitUntil(
    caches.open(cacheName).then(function(cache) {
      return setOfCachedUrls(cache).then(function(cachedUrls) {
        return Promise.all(
          Array.from(urlsToCacheKeys.values()).map(function(cacheKey) {
            // If we don't have a key matching url in the cache already, add it.
            if (!cachedUrls.has(cacheKey)) {
              var request = new Request(cacheKey, {credentials: 'same-origin'});
              return fetch(request).then(function(response) {
                // Bail out of installation unless we get back a 200 OK for
                // every request.
                if (!response.ok) {
                  throw new Error('Request for ' + cacheKey + ' returned a ' +
                    'response with status ' + response.status);
                }

                return cleanResponse(response).then(function(responseToCache) {
                  return cache.put(cacheKey, responseToCache);
                });
              });
            }
          })
        );
      });
    }).then(function() {
      
      // Force the SW to transition from installing -> active state
      return self.skipWaiting();
      
    })
  );
});

self.addEventListener('activate', function(event) {
  var setOfExpectedUrls = new Set(urlsToCacheKeys.values());

  event.waitUntil(
    caches.open(cacheName).then(function(cache) {
      return cache.keys().then(function(existingRequests) {
        return Promise.all(
          existingRequests.map(function(existingRequest) {
            if (!setOfExpectedUrls.has(existingRequest.url)) {
              return cache.delete(existingRequest);
            }
          })
        );
      });
    }).then(function() {
      
      return self.clients.claim();
      
    })
  );
});


self.addEventListener('fetch', function(event) {
  if (event.request.method === 'GET') {
    // Should we call event.respondWith() inside this fetch event handler?
    // This needs to be determined synchronously, which will give other fetch
    // handlers a chance to handle the request if need be.
    var shouldRespond;

    // First, remove all the ignored parameters and hash fragment, and see if we
    // have that URL in our cache. If so, great! shouldRespond will be true.
    var url = stripIgnoredUrlParameters(event.request.url, ignoreUrlParametersMatching);
    shouldRespond = urlsToCacheKeys.has(url);

    // If shouldRespond is false, check again, this time with 'index.html'
    // (or whatever the directoryIndex option is set to) at the end.
    var directoryIndex = 'index.html';
    if (!shouldRespond && directoryIndex) {
      url = addDirectoryIndex(url, directoryIndex);
      shouldRespond = urlsToCacheKeys.has(url);
    }

    // If shouldRespond is still false, check to see if this is a navigation
    // request, and if so, whether the URL matches navigateFallbackWhitelist.
    var navigateFallback = '';
    if (!shouldRespond &&
        navigateFallback &&
        (event.request.mode === 'navigate') &&
        isPathWhitelisted([], event.request.url)) {
      url = new URL(navigateFallback, self.location).toString();
      shouldRespond = urlsToCacheKeys.has(url);
    }

    // If shouldRespond was set to true at any point, then call
    // event.respondWith(), using the appropriate cache key.
    if (shouldRespond) {
      event.respondWith(
        caches.open(cacheName).then(function(cache) {
          return cache.match(urlsToCacheKeys.get(url)).then(function(response) {
            if (response) {
              return response;
            }
            throw Error('The cached response that was expected is missing.');
          });
        }).catch(function(e) {
          // Fall back to just fetch()ing the request if some unexpected error
          // prevented the cached response from being valid.
          console.warn('Couldn\'t serve response for "%s" from cache: %O', event.request.url, e);
          return fetch(event.request);
        })
      );
    }
  }
});







