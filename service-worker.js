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

var precacheConfig = [["about/index.html","d1ec7b5c37dd1d96096b44dba7b2c88d"],["archive/H5toApp.html","00431c7366a169bb16665484e39dbb28"],["archive/MacInstallProblem.html","0a435366d2e9b11c85e68fdf1be14c83"],["archive/TencentCloud.html","7032b33feafa099c0aae3ec8c2562331"],["archive/TencentMP-4.html","012b7ced3524de84667adcdaf62aafdc"],["archive/TencentMP_1.html","c745bc082e2892ac8988a1e2fa4bda8f"],["archive/TencentMP_2.html","f007ed18eb04984e17ee9bbb1cd05393"],["archive/TencentMP_3.html","f0068385f955a518a0c9a3db65de101e"],["archive/backgoundLinearGradient.html","d933af78a24bdc3503f37f53fc52d6df"],["archive/crontab.html","ea68c8de455b50fe59d0a373437708d4"],["archive/cssProp.html","477a529649696c84d53e50bb2ac13a43"],["archive/eggNodeSercer.html","7de5487381aedfc7f2c80bf6df8faac7"],["archive/git-remote.html","47f9055066f6f786ffb5fdb6976184ff"],["archive/helloWorld.html","5599d302e9b4f44faebeeacd7e7ddae3"],["archive/javaScript-call-init.html","205196396a40dc0b3c5b735577af751b"],["archive/javaScript-new-init.html","010d502023d6624677ad7eb5ac07ac7b"],["archive/javascript_copy.html","2ac395cbd8a89d70116af12198b8a2cf"],["archive/macPrivoxy.html","554ef4d1af161cea8da03bce38750f1a"],["archive/mp-fuck.html","98469e732ecd27a8e6b97bd901a3b41d"],["archive/music_shuaidie.html","8addad516fafb9d2244d0a9ed479c0e9"],["archive/perfersColorScheme.html","c688878c3222a877334142df6b4fa44e"],["archive/python-mysql.html","c6643da0a54a1b4230c475b066769ffd"],["archive/python-netease-crawler.html","5552e2228ca68ac366ccb27fb4ca528f"],["archive/python-os-json.html","3f7bd84f43ca236362b346355a9f4e87"],["archive/pythonOne.html","f64053afd7131603dccf5cdd4cca9be4"],["archive/react-beautiful-dnd.html","7823bad74654682960eb2ddc41733ecc"],["archive/shell_script.html","f3052e387eb3237b8d3e2a6772c515c0"],["archive/taro-map-regionchange.html","1c219b36bc929016e85f2ead910b7484"],["archive/taro-mp-share.html","0d83f29cef08d462303c9eaea1c26bfc"],["archive/text-tag-wrap.html","20eaa25ac62142122508a4198386e481"],["archive/vueCommunication.html","79ee1a9e0cdd6460114ed98685668302"],["archive/vueWxBackHistory.html","bb27c622ef4c3dd42147dd0e75adffdf"],["archive/webpack-config.html","649e50258881b1e29da2a8dfd374e2c9"],["archives/2018/08/index.html","0e42e185eca02b3c91b6f65ded02f89b"],["archives/2018/09/index.html","0694e7d9983075ca7f7fcb006d13cbf8"],["archives/2018/10/index.html","23d950f5c49859dbaa554a2d1a1d7278"],["archives/2018/index.html","87e04277ac1205d68559637d74a269d6"],["archives/2018/page/2/index.html","56af3bd063402087f3d6f237fbeeff3b"],["archives/2019/02/index.html","919b86a8860a9d3d548c8567b06122c4"],["archives/2019/03/index.html","94c7fdc6ba08ae582f644e50441e8dce"],["archives/2019/04/index.html","22f3181bbd6889adb9f951c94082ab00"],["archives/2019/08/index.html","aa925df1baa08e3731ef9d61ae42b222"],["archives/2019/09/index.html","1a39c34d4d6ca716cadc49496f1c487d"],["archives/2019/10/index.html","96def28fddb9aea071c5776ec9e32c6f"],["archives/2019/index.html","74389eabe63501f861d393fc44924622"],["archives/2020/09/index.html","d6768057bdd8fba10c80442bec6aa965"],["archives/2020/10/index.html","f8fa663dc05a5ec1e955b2570e105e8c"],["archives/2020/index.html","92c7d34e4cd83bfffe625732b10498dd"],["archives/2021/04/index.html","3450acc0452fcb8c6aeeabd909be2c08"],["archives/2021/index.html","80ed99dbe686fda0b68a023b8c37c521"],["archives/index.html","983ad91fa9a6f7d371ba2c1ee59fd696"],["archives/page/2/index.html","9ed1ed584877f9b80729bc3266d9ac31"],["archives/page/3/index.html","4b6b99d39246365b02d6894d66ae6c8a"],["archives/page/4/index.html","c52fcd4800dae704a0d44a3801d0dd26"],["assets/css/APlayer.min.css","fbe994054426fadb2dff69d824c5c67a"],["assets/css/DPlayer.min.css","31ac9b1a5a7f018dcc9a0e0f66261c08"],["assets/js/APlayer.min.js","8f1017e7a73737e631ff95fa51e4e7d7"],["assets/js/DPlayer.min.js","4097986cff510567068128f4b18004a6"],["assets/js/Meting.min.js","bfac0368480fd344282ec018d28f173d"],["categories/Git/index.html","ad2973fdaca80c49b3f7a4e7df6243de"],["categories/H5/index.html","164ee34630ba3474b8d6cc6086ac4cfb"],["categories/HelloWorld/index.html","a58242c5b0431d397e542dd8da51bef9"],["categories/Vue/index.html","2eb71f6fcbe87b70c12e000f44ea709e"],["categories/css/index.html","afc581bf4f41db81933cdab61e50f900"],["categories/index.html","e2c0d666eee80123a4c28caada6115cf"],["categories/javaScript/index.html","c4a3a74b5c4a4d04a973c98183d5ab52"],["categories/mac/index.html","9517593753cd84b85b482a7152824d05"],["categories/python/index.html","ce8fc97236030e2f8107b2f635c72872"],["categories/web/index.html","5af16bde3ae1822d2edfef63c54f04d4"],["categories/前端/index.html","8bbed8170fc28289b0333bb56e4d277a"],["categories/动漫/index.html","fac5ecedcbd73202687019eaab71b7a1"],["categories/原生Javascript/index.html","0abbce4c06bb26cbfbd24cfe3f99517a"],["categories/小程序/index.html","f46ceca700e3c3aaa0f6c3b26392ab44"],["categories/服务器/index.html","bbfdc96ba192f24b2acc9acdc883d8a4"],["categories/猎奇/index.html","df5ecfe71341d779a398e2b7ed7887db"],["css/prism-line-numbers.css","33fcb9c936d6640f7e23484e1b476145"],["css/prism.css","12172c9e0b25e59e8e925b84065c78f0"],["css/rtl.css","c7f30e345322a0361c11de94afadd367"],["css/style.css","1b9b04819707d6643b7e259def9178ba"],["demos/clip_path_1.html","4a9d88d9f73fd0541b8259bbe521ba8c"],["gallery/index.html","7f32ba0a767c8b1d3e1c55d9b7aa6e2d"],["group/index.html","818fa4aadb502775a76758c85b9b3f00"],["images/apple-touch-icon.png","0f3687ddb31c8d4f3f57db5904514471"],["images/backgoundLinearGradient/gradient.gif","93b5d42c0cb0791877ae483a92d9a7f9"],["images/backgoundLinearGradient/noAnimation.jpg","4db07dc8d4a6150fc7cd6f1c8af88626"],["images/cssProp/1.gif","407516c87d40f1fca66c840c6c122828"],["images/cssProp/animation.gif","407516c87d40f1fca66c840c6c122828"],["images/favicon-192x192.png","22cbbf3723cf35de562d84f43b2d47c4"],["images/logo.png","3a523a218d45942792b375bee59382ca"],["images/reactBeautifulDnd/react_beautiful_dnd_dom.gif","99c050814b7f7a1e015c0f6bf87fb304"],["index.html","d85886112057755c852038403685488a"],["js/main.js","d3a0d4ba66a4d1063808786384261fcb"],["js/search.js","92b1330078e33f8133822a21c7961128"],["js/valine.min.js","1b2e70af1f51a248dcf0b4b5cbcd5c9d"],["lib/font-awesome/css/all.min.css","c8560d62c78b94ec900a122736c7b469"],["lib/font-awesome/webfonts/fa-brands-400.eot","e8019d507e8cb51d169ab4f94a0cda12"],["lib/font-awesome/webfonts/fa-brands-400.svg","83e6c29fb363b2f0ea6cc18fefff729c"],["lib/font-awesome/webfonts/fa-brands-400.ttf","fdf44bc43e8fa2358bbb7d9165d78455"],["lib/font-awesome/webfonts/fa-brands-400.woff","da408238128b876cbda6424391f1566f"],["lib/font-awesome/webfonts/fa-regular-400.eot","e6c93cb47e716b579264a5fdfbf7e84d"],["lib/font-awesome/webfonts/fa-regular-400.svg","ba2a91dc95e6cfdc4b2a186a7ba83e29"],["lib/font-awesome/webfonts/fa-regular-400.ttf","8d220c793e2612bd131ed8522c54669f"],["lib/font-awesome/webfonts/fa-regular-400.woff","dad90637f797356bbc70d2664832e0b6"],["lib/font-awesome/webfonts/fa-solid-900.eot","ea363ed422723673917901680be9b37c"],["lib/font-awesome/webfonts/fa-solid-900.svg","de1d242d8acb26ec43c0d071fe78e72d"],["lib/font-awesome/webfonts/fa-solid-900.ttf","132e9759d93e4eefd7cdde0d7a322991"],["lib/font-awesome/webfonts/fa-solid-900.woff","2d0415fa29ea596b7a02c78eddeede20"],["lib/jquery/jquery.min.js","a09e13ee94d51c524b7e2a728c7d4039"],["lib/justified-gallery/css/justifiedGallery.min.css","6b6996a7db26246ebe5f2f58a731160c"],["lib/justified-gallery/js/jquery.justifiedGallery.min.js","f12e15ba020d049ba166af44960051c9"],["lib/meslo-LG/MesloLGL-Bold.ttf","6c475ed9d73a90d62c666b3d94f350d2"],["lib/meslo-LG/MesloLGL-BoldItalic.ttf","1c5a059e12b5e0993699481455cf8b74"],["lib/meslo-LG/MesloLGL-Italic.ttf","17ab93d9e2493a279171fa183279decc"],["lib/meslo-LG/MesloLGL-Regular.ttf","265d62d86941c398f07704a80911ac92"],["lib/meslo-LG/MesloLGM-Bold.ttf","4174a16af8cfe61e45d1ec4758227443"],["lib/meslo-LG/MesloLGM-BoldItalic.ttf","33e53ff2022c98c3f3caa5c4682a1939"],["lib/meslo-LG/MesloLGM-Italic.ttf","259bbc1d62105f728101523e3295ddd1"],["lib/meslo-LG/MesloLGM-Regular.ttf","93e2fae291d0da752d78dc0b113591d9"],["lib/meslo-LG/MesloLGS-Bold.ttf","a31874e50f29681640f88e00f2343c25"],["lib/meslo-LG/MesloLGS-BoldItalic.ttf","2e752bcf18165adadef20e83389eb9a7"],["lib/meslo-LG/MesloLGS-Italic.ttf","526d28c1d73dedca45091a1530541908"],["lib/meslo-LG/MesloLGS-Regular.ttf","d20aa15f5ce240b12b2475042c6ead8e"],["lib/vazir-font/Vazir-Black.eot","d45d679ecbbf3e85f6fe924a3349611e"],["lib/vazir-font/Vazir-Black.ttf","dec57885836e1d78b278784703bfc3aa"],["lib/vazir-font/Vazir-Black.woff","4354348970f3bff75d294a1011617152"],["lib/vazir-font/Vazir-Bold.eot","b358a632638ddc12101a6dafd633b625"],["lib/vazir-font/Vazir-Bold.ttf","d00f44216fda6aef5873d083017fdd15"],["lib/vazir-font/Vazir-Bold.woff","98b6a3b0644ce527306cefecd0311a11"],["lib/vazir-font/Vazir-Light.eot","81fd1bcee68b84a31baa21aeb277d7e8"],["lib/vazir-font/Vazir-Light.ttf","11bc0b0762f1ba3f8393eda4a4d96984"],["lib/vazir-font/Vazir-Light.woff","a5772df426fc2720df4132d658940a78"],["lib/vazir-font/Vazir-Medium.eot","25b78a6e8f255ab89e160c7e4ca30ebb"],["lib/vazir-font/Vazir-Medium.ttf","11ef813ddc4c9ae17d99028f6132427a"],["lib/vazir-font/Vazir-Medium.woff","6134834d89c131f956774f6453ccb75f"],["lib/vazir-font/Vazir-Thin.eot","51d16771c8bf9759531066861015353f"],["lib/vazir-font/Vazir-Thin.ttf","5a7ca35b2f17908beb216ea97cce08a8"],["lib/vazir-font/Vazir-Thin.woff","388980cd8094ad738e8b23d5c470cac1"],["lib/vazir-font/Vazir.eot","91dd41e5f2b05c3c207a81f6f952fbd4"],["lib/vazir-font/Vazir.ttf","3bb6491e3a7c084399896a492e5dd618"],["lib/vazir-font/Vazir.woff","3707b5efa316620380ef9f5c9d047907"],["lib/vazir-font/font-face.css","4f4b75edfa44b62c1908f12e0dc13a51"],["music/index.html","b3719d51f5e5c0ac71fc1cba2185a3e4"],["page/2/index.html","49fbe52bcd312dd465e5b304cf799764"],["page/3/index.html","1086fcf3cbcbb4ebecc3dfca447a3c08"],["page/4/index.html","7bd44471b8a3801e6756368d8cee4cd3"],["resume/index.html","1ef12fc259fca28a71bc76710120cf60"],["search/index.html","0b84fa13a63a63e128b0b168b2163e85"],["tag/index.html","af76e9da73856ce92468e94878b9f961"],["tags/Egg/index.html","ddd89897e33caee7187f2b3345c80e9b"],["tags/H5/index.html","ca7e323ea8a616d0bc6fba85c835e21b"],["tags/Node/index.html","bb1376cd276946fd31ba121209f47a32"],["tags/Taro/index.html","51b74aef03774e775cf3271714fc31eb"],["tags/Unix/index.html","13a0ea5c5c99bb3fbbebe567b86a1217"],["tags/Vue通讯/index.html","d22e211d3a6e48c7ea78e597955fa5bc"],["tags/call/index.html","4ab195e529eafa644381a7f92892dfa8"],["tags/cloud/index.html","5209e1e7e7abb84965dacb013bb42e06"],["tags/crontab/index.html","a19ec302d3e9c0737ed0fa9c42da4084"],["tags/css/index.html","cc6f9f6ead94d80501797bd95797630d"],["tags/git-remote/index.html","27a1690b72218d072d91ab46c5b56f97"],["tags/index.html","309780ba61e45c809669f134712c0ab4"],["tags/javascript/index.html","5b076c9b53f8b7afb36c1fa52214369f"],["tags/mac/index.html","b733566a7a3598d9959cfc08b0acedf5"],["tags/mysql/index.html","a63b983fb59b2c43c1242e39d37495cb"],["tags/new操作符/index.html","1b46287273372bfe8f8f3dd7465985c8"],["tags/privoxy/index.html","37d9fce054c72bc7d579adf465bd2cb1"],["tags/python-json/index.html","232d2c1daab6970da83a519989430a68"],["tags/python-os/index.html","9ee60c7876557a9625cf5fa73a632c86"],["tags/python/index.html","60de63bf6663f6e010b3ca263a4f9f8c"],["tags/shell/index.html","9703d9bd834dd00e4942414af036ee18"],["tags/vue组件/index.html","423a1f9efd4d5425d631113fce19a7bf"],["tags/wepy/index.html","b4c6e3a26ece06991a9eddc1bcb25308"],["tags/小程序request-fail/index.html","db6269c6350570beddbdaeebc3088a70"],["tags/小程序跳转/index.html","8df0846106702217c3c22b5b351849bf"],["tags/小程序踩坑/index.html","f9ca85d844ec0a442b11e43cbe96907c"],["tags/微信/index.html","b57db2c040e236c87b967936c13cdddc"],["tags/摔爹神曲/index.html","a308f2fc258063cbe15098040b8d599e"],["tags/数据类型/index.html","58e6d4f9c242b194eef2c1dab83852d1"],["tags/文件损坏/index.html","0920e2297fcbcbec0a6882391da7c3a5"],["tags/添加多个远程git仓库/index.html","fa559df39997e277ab30b4377b501a7b"],["tags/爬虫/index.html","8990720d70a9d8d15fb5e16909befa87"],["tags/生命周期/index.html","42db4df4f0d78b7e860fe87914caf148"],["tags/网易云音乐/index.html","b0d96d1fb233d91ccc823b845cf118f1"],["tags/翻墙/index.html","b70e10e4e07297eeb046d9a705668c4d"],["tags/腾讯云/index.html","90df10ba9e37190ee73d5e6ec3608f60"],["tags/踩坑/index.html","0d43189abbf2be6895beeb92d341fb3c"],["tags/进击的巨人/index.html","1002663e05005187a7125869c72240b8"],["top/index.html","cf3789f20269799937c91f3e942b3aae"]];
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







