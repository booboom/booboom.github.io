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

var precacheConfig = [["about/index.html","2973e89fbde83a20b1f0ae8c5a0feccd"],["archive/H5toApp.html","ce252ef7d4e18833eb94d25533ac8ff2"],["archive/MacInstallProblem.html","783d27a724b3f1cacea15fd356a495fa"],["archive/TencentCloud.html","9a7504a61a1f15a650d439fbee8cda51"],["archive/TencentMP-4.html","beae84076354d80b2340acb3fc24d6b1"],["archive/TencentMP_1.html","c641b691708a747221dee5652bba8611"],["archive/TencentMP_2.html","9e84daa0dd7cce10eb7791277c5b6062"],["archive/TencentMP_3.html","ac6d5cd6423f26773731c6473c137813"],["archive/backgoundLinearGradient.html","fe742658e895b118903316256048b23c"],["archive/crontab.html","166bf54ca852b49e526670ccd08a5025"],["archive/cssProp.html","8a73d55e93be34ad4f99c3aea6de94fe"],["archive/eggNodeSercer.html","b4aa8226e1e3be527259faddb767cdc1"],["archive/git-remote.html","25b41c21675b600efd510ec77cf1d95d"],["archive/helloWorld.html","410aba21ca2c3d40a4ad50c2a34728d4"],["archive/javaScript-call-init.html","cfbdadeb18d9de69cd86ecf53a58b5c9"],["archive/javaScript-new-init.html","3a65a19e5df86507349ea87d31311423"],["archive/javascript_copy.html","60d71fda90de60c83f9a3228adfd2b85"],["archive/macPrivoxy.html","5a3f04539e765c994f4b05e96dc4a307"],["archive/mp-fuck.html","747fbb89fb18b5c13ec83e629c2c6e76"],["archive/music_shuaidie.html","8eeaf2a5d8f566b8256a6850f35c2390"],["archive/perfersColorScheme.html","523f84fa45614411f1e7490bcf6109ed"],["archive/python-mysql.html","bd70612fc52df94194a4052241b9ec40"],["archive/python-netease-crawler.html","80bde90017637abcba7115336d1bfede"],["archive/python-os-json.html","6ece3c83b15fcba19c2541141b17c914"],["archive/pythonOne.html","5ff36f97cf71526b4bf66c17e9c4876e"],["archive/react-beautiful-dnd.html","204641278739581c6f23c55edc170e66"],["archive/shell_script.html","854aecd190865af5b213cd1f221da6cf"],["archive/taro-mp-share.html","84d4c625f78c9878a9ca509e689e5784"],["archive/vueCommunication.html","ecea5f2975f8a8d60568052e8fe0c521"],["archive/vueWxBackHistory.html","1e089e255bfaf86f6b552507ef37bccc"],["archive/webpack-config.html","465ab3493d91a4d13447fa3d43a639cc"],["archives/2018/08/index.html","e5d047f74b9bb1ada27eda13b583b4c5"],["archives/2018/09/index.html","bf353d5f2218af447a967cf64fd6c7e1"],["archives/2018/10/index.html","c33eb4a4197d40a78bb5de31f2146beb"],["archives/2018/index.html","22a1a4342120aa548cf09235f796d9c2"],["archives/2018/page/2/index.html","6e8000c74e8e8b40c38de3af7d9d3439"],["archives/2019/02/index.html","4bbab202ea55c554a7486353f7c0fb4d"],["archives/2019/03/index.html","43a1dc667a7b9216d19b66a53ee63fd9"],["archives/2019/04/index.html","558f8264120f4355033eeb2873289aa3"],["archives/2019/08/index.html","48a5717e3d203734c019324f340610df"],["archives/2019/09/index.html","11b2e1304e845081a36701d4f1f1ecab"],["archives/2019/10/index.html","afe2cb6aa6c4e1c06b6d96addb469f0e"],["archives/2019/index.html","515bf717001dee8ef1680bbc716e2ad1"],["archives/2020/09/index.html","051b59a267103c5f27850a9f76083ea2"],["archives/2020/10/index.html","a1b519af5de251dcbd0d2a0562a3483d"],["archives/2020/index.html","b88352066ea868fbffc6402124973ce8"],["archives/2021/04/index.html","da24df42ebb135da4897bb21185a5dd4"],["archives/2021/index.html","a4f58d9775fc5176b792d743d8c9bcff"],["archives/index.html","bcd3bf3a3cfce3a6c64d14c4004d86c2"],["archives/page/2/index.html","a1420e868b3da64b626466544fbf159d"],["archives/page/3/index.html","dc04e66d90360779c1a1e709e56f3184"],["assets/css/APlayer.min.css","fbe994054426fadb2dff69d824c5c67a"],["assets/css/DPlayer.min.css","31ac9b1a5a7f018dcc9a0e0f66261c08"],["assets/js/APlayer.min.js","8f1017e7a73737e631ff95fa51e4e7d7"],["assets/js/DPlayer.min.js","4097986cff510567068128f4b18004a6"],["assets/js/Meting.min.js","bfac0368480fd344282ec018d28f173d"],["categories/Git/index.html","05df3b4374b320016117c96617a02b68"],["categories/H5/index.html","5927fe2fcd01c947bbfe1ebfbefc8b71"],["categories/HelloWorld/index.html","91d090ad86c0d99aeadf70721d494869"],["categories/Vue/index.html","bce646e56b46dc8ca98535dc0fc61016"],["categories/index.html","3091c1b83270a2de26dfe204565c75b6"],["categories/javaScript/index.html","f1c06cd48a3937fc8bb96634e31efa3e"],["categories/mac/index.html","e370ab5d7f6998b900ae6b6e3bd7b9da"],["categories/python/index.html","fdd20a7a2e7600fecbcc647ed7149c72"],["categories/web/index.html","63600783fcce5ce9105375e7cdf45a77"],["categories/前端/index.html","e8b2562fb3b59e451f0f18ddaf52b1d3"],["categories/动漫/index.html","21d61622295760880ea654dd4e1aa42b"],["categories/原生Javascript/index.html","dc32f709fb906ad4543b9014508e08d3"],["categories/小程序/index.html","5549e7282d5c750ca39b11b569457685"],["categories/服务器/index.html","57dcd3c430828f317af653d597d768a4"],["categories/猎奇/index.html","80baca9592f68f7eebf5ce7c10c062cb"],["css/prism-line-numbers.css","33fcb9c936d6640f7e23484e1b476145"],["css/prism.css","12172c9e0b25e59e8e925b84065c78f0"],["css/rtl.css","5637604aae53a7e46e30890bc6faab65"],["css/style.css","1b79f647cf1d46874cdaa162caf2c27d"],["demos/clip_path_1.html","4536dd43b80b7f756031ddab63b01302"],["gallery/index.html","83891f301e9e9f93b78fdfd883a5c8cc"],["group/index.html","8df644833a056f0c73cd86d9c88ea054"],["images/apple-touch-icon.png","0f3687ddb31c8d4f3f57db5904514471"],["images/backgoundLinearGradient/gradient.gif","93b5d42c0cb0791877ae483a92d9a7f9"],["images/backgoundLinearGradient/noAnimation.jpg","4db07dc8d4a6150fc7cd6f1c8af88626"],["images/cssProp/1.gif","407516c87d40f1fca66c840c6c122828"],["images/cssProp/animation.gif","407516c87d40f1fca66c840c6c122828"],["images/favicon-192x192.png","22cbbf3723cf35de562d84f43b2d47c4"],["images/logo.png","3a523a218d45942792b375bee59382ca"],["images/reactBeautifulDnd/react_beautiful_dnd_dom.gif","99c050814b7f7a1e015c0f6bf87fb304"],["index.html","3e1cd718434aaa8230953e79c0585ffc"],["js/main.js","d3a0d4ba66a4d1063808786384261fcb"],["js/search.js","92b1330078e33f8133822a21c7961128"],["js/valine.min.js","1b2e70af1f51a248dcf0b4b5cbcd5c9d"],["lib/font-awesome/css/all.min.css","3ca0bd3afbdd1aee7e97c92308b010e4"],["lib/font-awesome/webfonts/fa-brands-400.eot","e8019d507e8cb51d169ab4f94a0cda12"],["lib/font-awesome/webfonts/fa-brands-400.svg","83e6c29fb363b2f0ea6cc18fefff729c"],["lib/font-awesome/webfonts/fa-brands-400.ttf","fdf44bc43e8fa2358bbb7d9165d78455"],["lib/font-awesome/webfonts/fa-brands-400.woff","da408238128b876cbda6424391f1566f"],["lib/font-awesome/webfonts/fa-regular-400.eot","e6c93cb47e716b579264a5fdfbf7e84d"],["lib/font-awesome/webfonts/fa-regular-400.svg","ba2a91dc95e6cfdc4b2a186a7ba83e29"],["lib/font-awesome/webfonts/fa-regular-400.ttf","8d220c793e2612bd131ed8522c54669f"],["lib/font-awesome/webfonts/fa-regular-400.woff","dad90637f797356bbc70d2664832e0b6"],["lib/font-awesome/webfonts/fa-solid-900.eot","ea363ed422723673917901680be9b37c"],["lib/font-awesome/webfonts/fa-solid-900.svg","de1d242d8acb26ec43c0d071fe78e72d"],["lib/font-awesome/webfonts/fa-solid-900.ttf","132e9759d93e4eefd7cdde0d7a322991"],["lib/font-awesome/webfonts/fa-solid-900.woff","2d0415fa29ea596b7a02c78eddeede20"],["lib/jquery/jquery.min.js","a09e13ee94d51c524b7e2a728c7d4039"],["lib/justified-gallery/css/justifiedGallery.min.css","5328d548cdcee3240629e75a59441407"],["lib/justified-gallery/js/jquery.justifiedGallery.min.js","f12e15ba020d049ba166af44960051c9"],["lib/meslo-LG/MesloLGL-Bold.ttf","6c475ed9d73a90d62c666b3d94f350d2"],["lib/meslo-LG/MesloLGL-BoldItalic.ttf","1c5a059e12b5e0993699481455cf8b74"],["lib/meslo-LG/MesloLGL-Italic.ttf","17ab93d9e2493a279171fa183279decc"],["lib/meslo-LG/MesloLGL-Regular.ttf","265d62d86941c398f07704a80911ac92"],["lib/meslo-LG/MesloLGM-Bold.ttf","4174a16af8cfe61e45d1ec4758227443"],["lib/meslo-LG/MesloLGM-BoldItalic.ttf","33e53ff2022c98c3f3caa5c4682a1939"],["lib/meslo-LG/MesloLGM-Italic.ttf","259bbc1d62105f728101523e3295ddd1"],["lib/meslo-LG/MesloLGM-Regular.ttf","93e2fae291d0da752d78dc0b113591d9"],["lib/meslo-LG/MesloLGS-Bold.ttf","a31874e50f29681640f88e00f2343c25"],["lib/meslo-LG/MesloLGS-BoldItalic.ttf","2e752bcf18165adadef20e83389eb9a7"],["lib/meslo-LG/MesloLGS-Italic.ttf","526d28c1d73dedca45091a1530541908"],["lib/meslo-LG/MesloLGS-Regular.ttf","d20aa15f5ce240b12b2475042c6ead8e"],["lib/vazir-font/Vazir-Black.eot","d45d679ecbbf3e85f6fe924a3349611e"],["lib/vazir-font/Vazir-Black.ttf","dec57885836e1d78b278784703bfc3aa"],["lib/vazir-font/Vazir-Black.woff","4354348970f3bff75d294a1011617152"],["lib/vazir-font/Vazir-Bold.eot","b358a632638ddc12101a6dafd633b625"],["lib/vazir-font/Vazir-Bold.ttf","d00f44216fda6aef5873d083017fdd15"],["lib/vazir-font/Vazir-Bold.woff","98b6a3b0644ce527306cefecd0311a11"],["lib/vazir-font/Vazir-Light.eot","81fd1bcee68b84a31baa21aeb277d7e8"],["lib/vazir-font/Vazir-Light.ttf","11bc0b0762f1ba3f8393eda4a4d96984"],["lib/vazir-font/Vazir-Light.woff","a5772df426fc2720df4132d658940a78"],["lib/vazir-font/Vazir-Medium.eot","25b78a6e8f255ab89e160c7e4ca30ebb"],["lib/vazir-font/Vazir-Medium.ttf","11ef813ddc4c9ae17d99028f6132427a"],["lib/vazir-font/Vazir-Medium.woff","6134834d89c131f956774f6453ccb75f"],["lib/vazir-font/Vazir-Thin.eot","51d16771c8bf9759531066861015353f"],["lib/vazir-font/Vazir-Thin.ttf","5a7ca35b2f17908beb216ea97cce08a8"],["lib/vazir-font/Vazir-Thin.woff","388980cd8094ad738e8b23d5c470cac1"],["lib/vazir-font/Vazir.eot","91dd41e5f2b05c3c207a81f6f952fbd4"],["lib/vazir-font/Vazir.ttf","3bb6491e3a7c084399896a492e5dd618"],["lib/vazir-font/Vazir.woff","3707b5efa316620380ef9f5c9d047907"],["lib/vazir-font/font-face.css","d38cf6a867e6213b060bf18bc205af1c"],["music/index.html","bdc90acee3bbfc1a2277fd873380bf28"],["page/2/index.html","e799eb04e2ecd93c3ef4746d490a177a"],["page/3/index.html","2a50b135741429f4971b970b2a08868d"],["resume/index.html","bc3618b2c30d5a59d3cbec8571a88ccd"],["search/index.html","2fe86f0717018668af183a93f67496aa"],["tag/index.html","4cc87e0940b763c7497bc8c88cc7edf6"],["tags/Egg/index.html","bd6e0d95f8fc5bea8f08dd300886abf6"],["tags/H5/index.html","c36c86e09bebf1b8809d056fd8357319"],["tags/Node/index.html","636e9cf294d8f71ead01dabe4e339585"],["tags/Taro/index.html","08c41d1b6f1e116b452b63ae0478ae24"],["tags/Unix/index.html","fec8828184027cc052334f62f236100a"],["tags/Vue通讯/index.html","1ad710eda3b5c1b37824490437037b17"],["tags/call/index.html","ae593478b2fe6977039fb26ef7696832"],["tags/cloud/index.html","9c2ab427c6e0264308c7ce3198663005"],["tags/crontab/index.html","158cc9c2d79dd2cbfb19f47376e9c73c"],["tags/css/index.html","94e2b4298e30b80e71aa1ffbaf39363f"],["tags/git-remote/index.html","145db9000f034269d931a1424d9480ac"],["tags/index.html","350bad1ed0890800ec9347b08de84742"],["tags/javascript/index.html","b74695b8d2d133ed5905acc8f181c4e3"],["tags/mac/index.html","0b726790abb9f8ed535c28642c37eca4"],["tags/mysql/index.html","d245b73bad4d60fa5b00ba8f0bb673ec"],["tags/new操作符/index.html","a276bafeb928e58163865c091656c0d4"],["tags/privoxy/index.html","699094cbb6944a9808d507f43cd0474b"],["tags/python-json/index.html","78f0501a2e1ba4e07d706b52264c3a86"],["tags/python-os/index.html","bc94c950ffb15b0b7cc21834c9cb31ed"],["tags/python/index.html","e644a2e6612ef4bc2256b7f5c4b47456"],["tags/shell/index.html","f4a5a045479bbce4976ddb3d9f476cb0"],["tags/vue组件/index.html","a1f95f162f61b499aba7a790fc2f7852"],["tags/wepy/index.html","bc03f4ced91530b06b0c1e7f1d54290b"],["tags/小程序request-fail/index.html","3fb5db1edb2c9316deb94aea56a894aa"],["tags/小程序跳转/index.html","bdebe3a59796b7c0a86e7c7ea66d06f2"],["tags/小程序踩坑/index.html","6d6453318acac45dc9ea9f16aad0126a"],["tags/微信/index.html","43f065d9fd0f68859cf568f712d1a68c"],["tags/摔爹神曲/index.html","f672a2c3578ec755f9c228263a243f80"],["tags/数据类型/index.html","e3607bd16c408e1feaa9415b6b5e7914"],["tags/文件损坏/index.html","4da05df7bb457e24a5092ee6c8da10ce"],["tags/添加多个远程git仓库/index.html","50a965d6c25536319800f970af6b8f04"],["tags/爬虫/index.html","b7e755789667f5898da03e1fcdd5e498"],["tags/生命周期/index.html","73168abe50e37a0f2134168eaf61bf68"],["tags/网易云音乐/index.html","401c3f7b9295aa11784a5667ad246b3e"],["tags/翻墙/index.html","48f019643592738506dc9f4af48c086e"],["tags/腾讯云/index.html","de80e3fee12fffe0211bb762d4c6082f"],["tags/踩坑/index.html","db8bfeae194614a60ad245f020749d66"],["tags/进击的巨人/index.html","e7d9bc13fa262185308f3f0b2409709e"],["top/index.html","40752d1dac194fbd572df7a02a20fb0d"]];
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







