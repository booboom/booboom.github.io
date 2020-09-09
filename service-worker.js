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

var precacheConfig = [["about/index.html","7cf9f78b59b16a50b4f28a3a57092690"],["archive/H5toApp.html","9af2fe06193725d230b87165eb90c2e5"],["archive/MacInstallProblem.html","2afcbf01e76407e1b7e1cd7f1356c9c5"],["archive/TencentCloud.html","64145acbec299aff74538a84c349ef08"],["archive/TencentMP-4.html","f1447b98105fc0f65dd16d34d2d90b67"],["archive/TencentMP_1.html","072937195fe5d0a152a19c7d0ef5895f"],["archive/TencentMP_2.html","25fcd2e747448ecbe52842d418ac5c7d"],["archive/TencentMP_3.html","a82c8b1005f5010537a7f4b14f58b1d4"],["archive/backgoundLinearGradient.html","04fd4ffa41f3d2b4cc7c3364c3a7dbbd"],["archive/crontab.html","04afee0d69141108a96cf56f27248b6c"],["archive/cssProp.html","56ad074bff87fcb190b9c5056a9c812b"],["archive/git-remote.html","1c84357c9db111d975e2dd3424ab3fa4"],["archive/helloWorld.html","c232dfda566d92083eeee1989a1f9c1f"],["archive/javaScript-call-init.html","107c5308d91e0efc48710cc6eaaed963"],["archive/javaScript-new-init.html","cc277a62a46387774001a6f3650d3d8d"],["archive/javascript_copy.html","5f376c10362bd5e53ef5bbc1b4d9c97f"],["archive/macPrivoxy.html","738b7e9a47f1d7b8fbb520b0e42c19e6"],["archive/music_shuaidie.html","25ba61eb89485b6187338366229bace4"],["archive/perfersColorScheme.html","c35440be90bbf9cab733255a486aa287"],["archive/python-mysql.html","cbf65ca5324e8ec0f448f8a08bcb9252"],["archive/python-netease-crawler.html","008a90a0050bf0af14c271286551c8cd"],["archive/python-os-json.html","887651bd3480986042621fc1622e45aa"],["archive/pythonOne.html","20adaffb56d795b64a63ab5f8b8b4396"],["archive/react-beautiful-dnd.html","603ac04c5baded407c1193bcf521d545"],["archive/shell_script.html","724fefbf995f95c227353a690279098b"],["archive/vueCommunication.html","9ec3016da430c48f02a9ef8916dd16c2"],["archive/vueWxBackHistory.html","c69df6681118686ac25aacb1d8867209"],["archive/webpack-config.html","0ac697ad0026f0a0b93b77820c400de8"],["archives/2018/08/index.html","427578b9728b9c6d7e5dc44baefa1c78"],["archives/2018/09/index.html","b6a08c682df022dba6fe5e3395a8f36a"],["archives/2018/10/index.html","3d1d564a0bcb107bfcf7d6287f773b2d"],["archives/2018/index.html","f35ce4aecec81dbd93021d7918dc3ed0"],["archives/2018/page/2/index.html","e55170f30570df1fcf397e475f910322"],["archives/2019/02/index.html","066054049a52f589e4495765c0657062"],["archives/2019/03/index.html","aadbe6ccce73635dddb6df623e4a7523"],["archives/2019/04/index.html","e97a677d8b914ad2ba588b9ea783cdd3"],["archives/2019/08/index.html","b3cb60fc0074db9e96a36eee36a860bf"],["archives/2019/09/index.html","cce176ed86cece1f62d1a0ecfd2effe0"],["archives/2019/10/index.html","3913dedc9b2849169cfdcb7e655020b4"],["archives/2019/index.html","78621952286b6e71238f81804432b818"],["archives/2020/09/index.html","b9de3eebb5a0bccdefee4f0fd8691df6"],["archives/2020/index.html","c018b36ee88d22b3e5d3079b9db2e721"],["archives/index.html","69a80b63361f79ffd0b534bf9662ab64"],["archives/page/2/index.html","c2eb685b3e7cf9007e426f05a4333e1e"],["archives/page/3/index.html","5b146a68648cf04fb2f95a173368c486"],["assets/css/APlayer.min.css","fbe994054426fadb2dff69d824c5c67a"],["assets/css/DPlayer.min.css","31ac9b1a5a7f018dcc9a0e0f66261c08"],["assets/js/APlayer.min.js","8f1017e7a73737e631ff95fa51e4e7d7"],["assets/js/DPlayer.min.js","4097986cff510567068128f4b18004a6"],["assets/js/Meting.min.js","bfac0368480fd344282ec018d28f173d"],["categories/Git/index.html","dd17a16bf9c0a8d5910abfbdabecf8e7"],["categories/H5/index.html","a11ab313f81801088b886798640d9d14"],["categories/HelloWorld/index.html","20ec5412df5b50a6b9753690a9f29237"],["categories/Vue/index.html","387638e6f54ffa161998fed3dad593a7"],["categories/index.html","515997c4cfebf045de3ac6bc2f1b5cd1"],["categories/javaScript/index.html","3e58cc73645d75c0e6e686649c235be1"],["categories/mac/index.html","4fb5c8fc2d37c0deedc74d934a1920b6"],["categories/python/index.html","c6566e88782d2f7afe05d5c32070af38"],["categories/web/index.html","af5cdb08399b8abaa80327d162342fd1"],["categories/前端/index.html","635ae9df392fdea0fedd8365a70a69c3"],["categories/动漫/index.html","030c6fb92b46bf6b7e75eeff4b27a7c7"],["categories/原生Javascript/index.html","8b5fd3ba22f2d317c44b8770b4c288d4"],["categories/小程序/index.html","bb642408ac82e6d9aee8bf2f4929a701"],["categories/服务器/index.html","6ccea1b0b685a714c402c1fab597d840"],["categories/猎奇/index.html","86c06ad774c3cd17ccc553d4dc82d120"],["css/prism-line-numbers.css","33fcb9c936d6640f7e23484e1b476145"],["css/prism.css","12172c9e0b25e59e8e925b84065c78f0"],["css/rtl.css","ef770901061fb9a7361ca0db06598aa9"],["css/style.css","7202bf0a017cd9ebe64ceadc7df0344e"],["demos/clip_path_1.html","53aff5ac4a5b8ba83114bcc14b44680c"],["gallery/index.html","bbe932bae137afd89cdcdaf9a73b6414"],["group/index.html","83d612a5146a60fc5ec8b8685b7d34cc"],["images/apple-touch-icon.png","0f3687ddb31c8d4f3f57db5904514471"],["images/backgoundLinearGradient/gradient.gif","93b5d42c0cb0791877ae483a92d9a7f9"],["images/backgoundLinearGradient/noAnimation.jpg","4db07dc8d4a6150fc7cd6f1c8af88626"],["images/cssProp/1.gif","407516c87d40f1fca66c840c6c122828"],["images/cssProp/animation.gif","407516c87d40f1fca66c840c6c122828"],["images/favicon-192x192.png","22cbbf3723cf35de562d84f43b2d47c4"],["images/logo.png","3a523a218d45942792b375bee59382ca"],["images/reactBeautifulDnd/react_beautiful_dnd_dom.gif","99c050814b7f7a1e015c0f6bf87fb304"],["index.html","49a6efc41a2a9ac02d31e51f62af91ef"],["js/main.js","d3a0d4ba66a4d1063808786384261fcb"],["js/search.js","92b1330078e33f8133822a21c7961128"],["js/valine.min.js","1b2e70af1f51a248dcf0b4b5cbcd5c9d"],["lib/font-awesome/css/all.min.css","91d4af2f8ede2653679a94aec1b60c5b"],["lib/font-awesome/webfonts/fa-brands-400.eot","e8019d507e8cb51d169ab4f94a0cda12"],["lib/font-awesome/webfonts/fa-brands-400.svg","83e6c29fb363b2f0ea6cc18fefff729c"],["lib/font-awesome/webfonts/fa-brands-400.ttf","fdf44bc43e8fa2358bbb7d9165d78455"],["lib/font-awesome/webfonts/fa-brands-400.woff","da408238128b876cbda6424391f1566f"],["lib/font-awesome/webfonts/fa-regular-400.eot","e6c93cb47e716b579264a5fdfbf7e84d"],["lib/font-awesome/webfonts/fa-regular-400.svg","ba2a91dc95e6cfdc4b2a186a7ba83e29"],["lib/font-awesome/webfonts/fa-regular-400.ttf","8d220c793e2612bd131ed8522c54669f"],["lib/font-awesome/webfonts/fa-regular-400.woff","dad90637f797356bbc70d2664832e0b6"],["lib/font-awesome/webfonts/fa-solid-900.eot","ea363ed422723673917901680be9b37c"],["lib/font-awesome/webfonts/fa-solid-900.svg","de1d242d8acb26ec43c0d071fe78e72d"],["lib/font-awesome/webfonts/fa-solid-900.ttf","132e9759d93e4eefd7cdde0d7a322991"],["lib/font-awesome/webfonts/fa-solid-900.woff","2d0415fa29ea596b7a02c78eddeede20"],["lib/jquery/jquery.min.js","a09e13ee94d51c524b7e2a728c7d4039"],["lib/justified-gallery/css/justifiedGallery.min.css","dfc10e45e673754c3536972d9c019770"],["lib/justified-gallery/js/jquery.justifiedGallery.min.js","f12e15ba020d049ba166af44960051c9"],["lib/meslo-LG/MesloLGL-Bold.ttf","6c475ed9d73a90d62c666b3d94f350d2"],["lib/meslo-LG/MesloLGL-BoldItalic.ttf","1c5a059e12b5e0993699481455cf8b74"],["lib/meslo-LG/MesloLGL-Italic.ttf","17ab93d9e2493a279171fa183279decc"],["lib/meslo-LG/MesloLGL-Regular.ttf","265d62d86941c398f07704a80911ac92"],["lib/meslo-LG/MesloLGM-Bold.ttf","4174a16af8cfe61e45d1ec4758227443"],["lib/meslo-LG/MesloLGM-BoldItalic.ttf","33e53ff2022c98c3f3caa5c4682a1939"],["lib/meslo-LG/MesloLGM-Italic.ttf","259bbc1d62105f728101523e3295ddd1"],["lib/meslo-LG/MesloLGM-Regular.ttf","93e2fae291d0da752d78dc0b113591d9"],["lib/meslo-LG/MesloLGS-Bold.ttf","a31874e50f29681640f88e00f2343c25"],["lib/meslo-LG/MesloLGS-BoldItalic.ttf","2e752bcf18165adadef20e83389eb9a7"],["lib/meslo-LG/MesloLGS-Italic.ttf","526d28c1d73dedca45091a1530541908"],["lib/meslo-LG/MesloLGS-Regular.ttf","d20aa15f5ce240b12b2475042c6ead8e"],["lib/vazir-font/Vazir-Black.eot","d45d679ecbbf3e85f6fe924a3349611e"],["lib/vazir-font/Vazir-Black.ttf","dec57885836e1d78b278784703bfc3aa"],["lib/vazir-font/Vazir-Black.woff","4354348970f3bff75d294a1011617152"],["lib/vazir-font/Vazir-Bold.eot","b358a632638ddc12101a6dafd633b625"],["lib/vazir-font/Vazir-Bold.ttf","d00f44216fda6aef5873d083017fdd15"],["lib/vazir-font/Vazir-Bold.woff","98b6a3b0644ce527306cefecd0311a11"],["lib/vazir-font/Vazir-Light.eot","81fd1bcee68b84a31baa21aeb277d7e8"],["lib/vazir-font/Vazir-Light.ttf","11bc0b0762f1ba3f8393eda4a4d96984"],["lib/vazir-font/Vazir-Light.woff","a5772df426fc2720df4132d658940a78"],["lib/vazir-font/Vazir-Medium.eot","25b78a6e8f255ab89e160c7e4ca30ebb"],["lib/vazir-font/Vazir-Medium.ttf","11ef813ddc4c9ae17d99028f6132427a"],["lib/vazir-font/Vazir-Medium.woff","6134834d89c131f956774f6453ccb75f"],["lib/vazir-font/Vazir-Thin.eot","51d16771c8bf9759531066861015353f"],["lib/vazir-font/Vazir-Thin.ttf","5a7ca35b2f17908beb216ea97cce08a8"],["lib/vazir-font/Vazir-Thin.woff","388980cd8094ad738e8b23d5c470cac1"],["lib/vazir-font/Vazir.eot","91dd41e5f2b05c3c207a81f6f952fbd4"],["lib/vazir-font/Vazir.ttf","3bb6491e3a7c084399896a492e5dd618"],["lib/vazir-font/Vazir.woff","3707b5efa316620380ef9f5c9d047907"],["lib/vazir-font/font-face.css","af9ac967b80b6cf52d0a488724a731f2"],["music/index.html","c82d06b47dd0a571680acdf2d5bc93be"],["page/2/index.html","673b906903c3d199069d01184b59bdfc"],["page/3/index.html","6ad8ac593758b80754bb9c120874bcc0"],["resume/index.html","7bd50b027c7dac818407322efd5670bb"],["search/index.html","f3479ccf1b75942efe7a797791ec8736"],["tag/index.html","81531fdd3802d0847d71619c856da22f"],["tags/H5/index.html","9758d59ea61abcd16dfdc8dfb7fb93b3"],["tags/Unix/index.html","9686687a2a929f796ff88948b44452f7"],["tags/Vue通讯/index.html","214f5c5f4fc3bd592fd302caef102991"],["tags/call/index.html","a0d2e8ddeb72bb3cf77e603e56f5e615"],["tags/cloud/index.html","4bccbeaa1655dec7595a0565a077b7bd"],["tags/crontab/index.html","79a79867f927702d4075b5428a1379e8"],["tags/css/index.html","1d0fd5461fa8dc4a7741ae577811d92e"],["tags/git-remote/index.html","0405076cf14763b756649a55c8e46350"],["tags/index.html","5ae5638c299450ac33c359390a9be8e3"],["tags/javascript/index.html","f4edb95bf0dc86ee32f605af41e7410f"],["tags/mac/index.html","9143b3c7b5c9a3a92ff50afe4a085c54"],["tags/mysql/index.html","ba21a03dfd3797ec0f8e23ca9e5f6577"],["tags/new操作符/index.html","c12a9d68488ce36e2bb1f849397d941f"],["tags/privoxy/index.html","3b964b98b977696db526fb71161a12f9"],["tags/python-json/index.html","87738c0053a0752f6528dbc54c18fd4b"],["tags/python-os/index.html","ea01a1920d409caeba01036652adce28"],["tags/python/index.html","801c5317e7d28818c1ff0dcd4a2a6a03"],["tags/shell/index.html","40f3228bfc9dc132b27a78abe08c38a4"],["tags/vue组件/index.html","15ab49d5c5447b35c19d2f8e39dfec54"],["tags/wepy/index.html","10951fccc9152a1828f3a6dec4aa292c"],["tags/小程序request-fail/index.html","dae6285f4eb159b4dbf189397fa38e1b"],["tags/小程序跳转/index.html","359806603f5d1a80fcf884a4a42fe843"],["tags/小程序踩坑/index.html","59ad627eabf849b2f644df72fc987d13"],["tags/微信/index.html","283ccc66ebbd81786816fa4e0111a27b"],["tags/摔爹神曲/index.html","6b4e59dbbfd06cce530fe9d3e2b2d484"],["tags/数据类型/index.html","3b8bf26112856e18db4e7e431e88596f"],["tags/文件损坏/index.html","3d21c65b94731ce12d84bab921892d6c"],["tags/添加多个远程git仓库/index.html","811e247628be80238e7860c2e5b5bc3c"],["tags/爬虫/index.html","cc2f9244a860df9f54f3089b72a19c55"],["tags/生命周期/index.html","c6884e1d95ac8c8a7dd31592ebfdb1f3"],["tags/网易云音乐/index.html","0c521dae395c6bfd855451558086e3be"],["tags/翻墙/index.html","a2147d9c157e045564077ffeab8987a0"],["tags/腾讯云/index.html","e9ad8ce3d70aa5aaa1d0f23c289b3748"],["tags/进击的巨人/index.html","c7ed1ce8572c1d497ddd8899194751e0"],["top/index.html","752bd835b8a1204b94ff0003d0a1d641"]];
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







