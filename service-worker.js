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

var precacheConfig = [["about/index.html","f7db9de84c8e443ee713e92b38bd2386"],["archive/H5toApp.html","5e2ce73703c494e99a15e55fa1ec7b0c"],["archive/MacInstallProblem.html","942b0f3fa78e1d91bb1984d06c206884"],["archive/TencentCloud.html","2dc447ba13a2191e4bd83be25f8211cd"],["archive/TencentMP-4.html","170f2c6df4c68099dab8b6cbc2a9295c"],["archive/TencentMP_1.html","15cc6600b8897e42643ee3c82d911b11"],["archive/TencentMP_2.html","c24683611374f516c2181e3e90b9d272"],["archive/TencentMP_3.html","3abb0505131840c3506566927582bfa9"],["archive/backgoundLinearGradient.html","5dbc3e568389592162268ba52e02cd0c"],["archive/crontab.html","15db89532df6e016947c47030c8317e9"],["archive/cssProp.html","bda6edf9db21095240660e3c6bc1088f"],["archive/git-remote.html","6f1e05d3cb4e123f6ac863a1d717ae95"],["archive/helloWorld.html","adbb7b4c4633b626bd489e31e1677e45"],["archive/javaScript-call-init.html","8c38fba8d2de7881f995f01fb0c80a42"],["archive/javaScript-new-init.html","c4e3b851a5d7af02a311437407771ac9"],["archive/javascript_copy.html","f8500ab6eb53d107fca9ab078c3fd3b0"],["archive/macPrivoxy.html","66fd389948b0178ad68083f07619debb"],["archive/music_shuaidie.html","c24114cd23b18fa85b7b514bac881a13"],["archive/perfersColorScheme.html","0fe79ba14db9ea9fd6c85b34f45de1e5"],["archive/python-mysql.html","4ba8fef61123083737093cb5b8270f84"],["archive/python-netease-crawler.html","f97fd7032c28957284d7e3c1550b91ae"],["archive/python-os-json.html","a94fa2742d0d857404c486dbf358581f"],["archive/pythonOne.html","97dd937cbde02b75121b88185095706b"],["archive/react-beautiful-dnd.html","79c1d5775948e616aa1153aa5a278dd4"],["archive/shell_script.html","8e19553d2795e0c47860c17d080f0f69"],["archive/vueCommunication.html","26c25a1984cfe369c92cd43ef61a8443"],["archive/vueWxBackHistory.html","8a1807ea4f0027e7264efa7d00e557a0"],["archive/webpack-config.html","e3cb3eb4e4c2f48815892e6ad3a3379a"],["archives/2018/08/index.html","3231ec7f0dadb4c29819abb8c255b5c9"],["archives/2018/09/index.html","554a57701e35ef2e863e2119a0fe9fa2"],["archives/2018/10/index.html","b94711c323af81568d8d3f95a3b4cf33"],["archives/2018/index.html","41b0f01521c6b4de32aae65cb581c06d"],["archives/2018/page/2/index.html","3a0550c30342d62e3f3dea3c07cd886d"],["archives/2019/02/index.html","9dcd7b8c5ac356781bba4b39e3431ae1"],["archives/2019/03/index.html","5b90cdd565e033c44ffbd523560c97c8"],["archives/2019/04/index.html","5d12dc472e95c3a43fa12296dd164857"],["archives/2019/08/index.html","953943de71fe1f4a21b19bdd871449ff"],["archives/2019/09/index.html","ca4075a9cf5e26547d11eba1c6a5d92d"],["archives/2019/10/index.html","08136a2e7daec9e9e9f45ddfa00fe759"],["archives/2019/index.html","14dbbfb321081bc412efe1397b3c0eee"],["archives/2020/09/index.html","bc6ab413878887dd418c08a890a22c53"],["archives/2020/index.html","5c3972834a940ba3d7ad89c9312b5c0f"],["archives/index.html","89429f5ab1f426bf1dd9768366a99490"],["archives/page/2/index.html","44e6714ba21014d0306ad1343db98e96"],["archives/page/3/index.html","950816f8123e7d1762a69ffce2c0edfd"],["assets/css/APlayer.min.css","fbe994054426fadb2dff69d824c5c67a"],["assets/css/DPlayer.min.css","31ac9b1a5a7f018dcc9a0e0f66261c08"],["assets/js/APlayer.min.js","8f1017e7a73737e631ff95fa51e4e7d7"],["assets/js/DPlayer.min.js","4097986cff510567068128f4b18004a6"],["assets/js/Meting.min.js","bfac0368480fd344282ec018d28f173d"],["categories/Git/index.html","b6a9aeab6141597fe4572d4d59f6dcf8"],["categories/H5/index.html","3a312814c996d36e659d26df3089859f"],["categories/HelloWorld/index.html","dacdf25da8f3456aeaa6c6ad9a7eebeb"],["categories/Vue/index.html","37e67aa9790402bf2a7adb3dbc26763a"],["categories/index.html","e04387f5b6ae14fc2ac7c7712581cc42"],["categories/javaScript/index.html","60002895e5bc85a599dec8cc330078c9"],["categories/mac/index.html","c2b40a88b81497cd2c60dc147b168ada"],["categories/python/index.html","5e858a450ca97caa543fa7afe79a969b"],["categories/web/index.html","c6269acdf55a5f4f2ef646f16389a0a2"],["categories/前端/index.html","34a1d23b4d77e253fd302936c5a79562"],["categories/动漫/index.html","efc57cddf79f4f210ea1f355255940b1"],["categories/原生Javascript/index.html","30c0d23199f2cb4651102bcd6209d1c4"],["categories/小程序/index.html","a1e6f9023b84dd6fdc15b44796c3f441"],["categories/服务器/index.html","57a3f9610b4e76656395a9daa92a89ac"],["categories/猎奇/index.html","0b06804a32356caaadc4dcd4b0937b06"],["css/prism-line-numbers.css","33fcb9c936d6640f7e23484e1b476145"],["css/prism.css","12172c9e0b25e59e8e925b84065c78f0"],["css/rtl.css","1e80a881713f305aa46b943a54927f21"],["css/style.css","2e26837ddb8614b153a7349c418216a7"],["demos/clip_path_1.html","333d9388dbdd3a3410f8ffd6e54e61b9"],["gallery/index.html","a18ac8f097c823ae544f419fda3a850d"],["group/index.html","ef22cff98ce60dc74829ca86c4752847"],["images/apple-touch-icon.png","0f3687ddb31c8d4f3f57db5904514471"],["images/backgoundLinearGradient/gradient.gif","93b5d42c0cb0791877ae483a92d9a7f9"],["images/backgoundLinearGradient/noAnimation.jpg","4db07dc8d4a6150fc7cd6f1c8af88626"],["images/cssProp/1.gif","407516c87d40f1fca66c840c6c122828"],["images/cssProp/animation.gif","407516c87d40f1fca66c840c6c122828"],["images/favicon-192x192.png","22cbbf3723cf35de562d84f43b2d47c4"],["images/logo.png","3a523a218d45942792b375bee59382ca"],["images/reactBeautifulDnd/react_beautiful_dnd_dom.gif","99c050814b7f7a1e015c0f6bf87fb304"],["index.html","e91d761ef7bdc9360ef865afad89c4f0"],["js/main.js","d3a0d4ba66a4d1063808786384261fcb"],["js/search.js","92b1330078e33f8133822a21c7961128"],["js/valine.min.js","1b2e70af1f51a248dcf0b4b5cbcd5c9d"],["lib/font-awesome/css/all.min.css","953a3084666ab9870d073479747c4b50"],["lib/font-awesome/webfonts/fa-brands-400.eot","e8019d507e8cb51d169ab4f94a0cda12"],["lib/font-awesome/webfonts/fa-brands-400.svg","83e6c29fb363b2f0ea6cc18fefff729c"],["lib/font-awesome/webfonts/fa-brands-400.ttf","fdf44bc43e8fa2358bbb7d9165d78455"],["lib/font-awesome/webfonts/fa-brands-400.woff","da408238128b876cbda6424391f1566f"],["lib/font-awesome/webfonts/fa-regular-400.eot","e6c93cb47e716b579264a5fdfbf7e84d"],["lib/font-awesome/webfonts/fa-regular-400.svg","ba2a91dc95e6cfdc4b2a186a7ba83e29"],["lib/font-awesome/webfonts/fa-regular-400.ttf","8d220c793e2612bd131ed8522c54669f"],["lib/font-awesome/webfonts/fa-regular-400.woff","dad90637f797356bbc70d2664832e0b6"],["lib/font-awesome/webfonts/fa-solid-900.eot","ea363ed422723673917901680be9b37c"],["lib/font-awesome/webfonts/fa-solid-900.svg","de1d242d8acb26ec43c0d071fe78e72d"],["lib/font-awesome/webfonts/fa-solid-900.ttf","132e9759d93e4eefd7cdde0d7a322991"],["lib/font-awesome/webfonts/fa-solid-900.woff","2d0415fa29ea596b7a02c78eddeede20"],["lib/jquery/jquery.min.js","a09e13ee94d51c524b7e2a728c7d4039"],["lib/justified-gallery/css/justifiedGallery.min.css","7e8c8083853509e573af7c554c7199b2"],["lib/justified-gallery/js/jquery.justifiedGallery.min.js","f12e15ba020d049ba166af44960051c9"],["lib/meslo-LG/MesloLGL-Bold.ttf","6c475ed9d73a90d62c666b3d94f350d2"],["lib/meslo-LG/MesloLGL-BoldItalic.ttf","1c5a059e12b5e0993699481455cf8b74"],["lib/meslo-LG/MesloLGL-Italic.ttf","17ab93d9e2493a279171fa183279decc"],["lib/meslo-LG/MesloLGL-Regular.ttf","265d62d86941c398f07704a80911ac92"],["lib/meslo-LG/MesloLGM-Bold.ttf","4174a16af8cfe61e45d1ec4758227443"],["lib/meslo-LG/MesloLGM-BoldItalic.ttf","33e53ff2022c98c3f3caa5c4682a1939"],["lib/meslo-LG/MesloLGM-Italic.ttf","259bbc1d62105f728101523e3295ddd1"],["lib/meslo-LG/MesloLGM-Regular.ttf","93e2fae291d0da752d78dc0b113591d9"],["lib/meslo-LG/MesloLGS-Bold.ttf","a31874e50f29681640f88e00f2343c25"],["lib/meslo-LG/MesloLGS-BoldItalic.ttf","2e752bcf18165adadef20e83389eb9a7"],["lib/meslo-LG/MesloLGS-Italic.ttf","526d28c1d73dedca45091a1530541908"],["lib/meslo-LG/MesloLGS-Regular.ttf","d20aa15f5ce240b12b2475042c6ead8e"],["lib/vazir-font/Vazir-Black.eot","d45d679ecbbf3e85f6fe924a3349611e"],["lib/vazir-font/Vazir-Black.ttf","dec57885836e1d78b278784703bfc3aa"],["lib/vazir-font/Vazir-Black.woff","4354348970f3bff75d294a1011617152"],["lib/vazir-font/Vazir-Bold.eot","b358a632638ddc12101a6dafd633b625"],["lib/vazir-font/Vazir-Bold.ttf","d00f44216fda6aef5873d083017fdd15"],["lib/vazir-font/Vazir-Bold.woff","98b6a3b0644ce527306cefecd0311a11"],["lib/vazir-font/Vazir-Light.eot","81fd1bcee68b84a31baa21aeb277d7e8"],["lib/vazir-font/Vazir-Light.ttf","11bc0b0762f1ba3f8393eda4a4d96984"],["lib/vazir-font/Vazir-Light.woff","a5772df426fc2720df4132d658940a78"],["lib/vazir-font/Vazir-Medium.eot","25b78a6e8f255ab89e160c7e4ca30ebb"],["lib/vazir-font/Vazir-Medium.ttf","11ef813ddc4c9ae17d99028f6132427a"],["lib/vazir-font/Vazir-Medium.woff","6134834d89c131f956774f6453ccb75f"],["lib/vazir-font/Vazir-Thin.eot","51d16771c8bf9759531066861015353f"],["lib/vazir-font/Vazir-Thin.ttf","5a7ca35b2f17908beb216ea97cce08a8"],["lib/vazir-font/Vazir-Thin.woff","388980cd8094ad738e8b23d5c470cac1"],["lib/vazir-font/Vazir.eot","91dd41e5f2b05c3c207a81f6f952fbd4"],["lib/vazir-font/Vazir.ttf","3bb6491e3a7c084399896a492e5dd618"],["lib/vazir-font/Vazir.woff","3707b5efa316620380ef9f5c9d047907"],["lib/vazir-font/font-face.css","2ec070d0c9aa826f2dc0e6744e404bda"],["music/index.html","3418c643b00a8319651c0a0a7733c010"],["page/2/index.html","51e213a693343a4c1a67f7a977052197"],["page/3/index.html","57029b8a603334a228f4a6935dd00293"],["resume/index.html","007e924d8dbb0842b8b792d8bdb7a363"],["search/index.html","fbef076437e3efdb9aaeb6796b308b24"],["tag/index.html","d75c74af8b5167b91fd78c7a611db6b8"],["tags/H5/index.html","62644045d1040fe855fc5053e1f40fc6"],["tags/Unix/index.html","d38176e5d903cf508522c1282bc2065d"],["tags/Vue通讯/index.html","225004b1154bb02cd813147c6513d9ae"],["tags/call/index.html","aef7cd38eba6f8163b603e664802f1e3"],["tags/cloud/index.html","e1b2ce768f3bebf664764d4d78adbde8"],["tags/crontab/index.html","4ba6e68557dd6a14415cdd32d1bfe8e9"],["tags/css/index.html","5a5eada91f932b11ce5edd8c4c2b36ca"],["tags/git-remote/index.html","7c93836108b29e7abe95a520daec2f09"],["tags/index.html","b36c1a66a3a6c7e498b696f5fa66114e"],["tags/javascript/index.html","d21f61d23c98ec4b3c13013d9f7c0adb"],["tags/mac/index.html","d5d09b92d92688b5c4f91eb4963731ec"],["tags/mysql/index.html","97da7ddd35daca9de67877e4aab8d9d0"],["tags/new操作符/index.html","34a42c7ab1f2105a7baf65af8627d083"],["tags/privoxy/index.html","32e273e33bde1efdc96f064c31e0fa89"],["tags/python-json/index.html","94840f6349de1763808246cada60e5c1"],["tags/python-os/index.html","dd4deabc6e9a49fc65a58289ff812b49"],["tags/python/index.html","285e6acc868b4a0af98fa6884669e5ed"],["tags/shell/index.html","eff7900c153ad138e60b58c162090a54"],["tags/vue组件/index.html","7d1ff4f1c79baaf95f151b97b37aed75"],["tags/wepy/index.html","8ed1d00b7ca219ceb0039eec6836df52"],["tags/小程序request-fail/index.html","7587c69295bcac0f8b29e5b9b58a4d68"],["tags/小程序跳转/index.html","b817c66635504b76b010141a32aeec64"],["tags/小程序踩坑/index.html","a364189c9dc002756f358456392b3ab7"],["tags/微信/index.html","d161d024509a7125a0467458d302568e"],["tags/摔爹神曲/index.html","5ad8afa3c95fd86b46e04555acf2a337"],["tags/数据类型/index.html","291c94bf3b0f1f9efe291502b1f125b5"],["tags/文件损坏/index.html","0eb3f082309cdfdde98eb54d24c4c997"],["tags/添加多个远程git仓库/index.html","0a8ffcd64122da4b7af8b5af4a017d62"],["tags/爬虫/index.html","b189402a1c56005d49107790fd2f7b8c"],["tags/生命周期/index.html","f11ab4ff06a1d095b4cfbae3bb46a5b5"],["tags/网易云音乐/index.html","7464817a1b93e5fb80d8cdde171e72ce"],["tags/翻墙/index.html","4ce64f36132cb9fbf1e9fe08568eec69"],["tags/腾讯云/index.html","6dbc0ef0e574d947504d7b876a30e1bf"],["tags/进击的巨人/index.html","d080b0a4027bf72bd2335a9e346f2a52"],["top/index.html","2f752b67081b8990a58b58d4a9a70ea2"]];
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







