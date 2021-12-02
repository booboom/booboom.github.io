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

var precacheConfig = [["about/index.html","6ad6878241223492114216fabb42009a"],["archive/H5toApp.html","d914781ec99265a99a696189bbe2908f"],["archive/MacInstallProblem.html","9d50354f5519d872690e72753cd9b756"],["archive/TencentCloud.html","63e49e21c10eed5d7bb6b3920eaf7f92"],["archive/TencentMP-4.html","0b41d62048c961d06ee0463b42bd85e5"],["archive/TencentMP_1.html","9b60bb34212f1c569def220a09d4fa96"],["archive/TencentMP_2.html","3d41fcde2d44fc0c21aac7b17787b1a1"],["archive/TencentMP_3.html","b2bd7ba13d5abd12327617be754b2f8a"],["archive/backgoundLinearGradient.html","146d7983b30eaeecc114793b3b4e0b25"],["archive/crontab.html","6ea3a092f28d8d050499330410f9ed24"],["archive/cssProp.html","ce273f59b871b118713dbcbd450cda82"],["archive/eggNodeSercer.html","2bbd8e634978396ad67e9051f5182c99"],["archive/git-remote.html","cd6335ec6517358b8572a40107e144e3"],["archive/helloWorld.html","3b21d189cf1ffba477b97a64c843ff33"],["archive/javaScript-call-init.html","d52c088858f4b2d6c2251d69011070d5"],["archive/javaScript-new-init.html","438eb97c2ee0ab8d20d75e6d55d0ab6d"],["archive/javascript_copy.html","a0ac18ff82a9fdd8c58334d1a7b6ecf1"],["archive/macPrivoxy.html","8e242fad70343163d3fdf59493ecbf1a"],["archive/mp-fuck.html","537c5ac070702b11b033c648f177362e"],["archive/music_shuaidie.html","9e073cad1ee47bdaf51c2de96cce8568"],["archive/perfersColorScheme.html","c6fc5755114e1ef960f26f9c39803858"],["archive/python-mysql.html","02f0d0d1238c10e0f586bc6ce9ebae2d"],["archive/python-netease-crawler.html","6b56eb687b8f9d14acdde09a09ede2d3"],["archive/python-os-json.html","e2acce34dbadd25ace07e1b589029752"],["archive/pythonOne.html","b9780c9405ffb59bd7d691627b34be9d"],["archive/react-beautiful-dnd.html","5a29ca802f70f07fa197f25e794c4ae1"],["archive/shell_script.html","41ad944849a8d1880789fa63b9ab8685"],["archive/taro-map-regionchange.html","b6d9e012860884d34ce42ca96398a33a"],["archive/taro-mp-share.html","f0b65ba6907963358e658418009ad813"],["archive/text-tag-wrap.html","951f0a9fb7ef668230a90f64b5e7b02c"],["archive/typora-and-uPic.html","95a63056fa30991fb9b0fed416b9c473"],["archive/vueCommunication.html","b762bfdbfbf2dc58982b66f49c30fd3b"],["archive/vueWxBackHistory.html","31ad0c88f06488049d164dd54a9cc736"],["archive/webpack-config.html","5301bb2c5adcba193ac37bb01371f5b5"],["archives/2018/08/index.html","325224d61ee8fa610230603e44a0bc15"],["archives/2018/09/index.html","9a277ed9a46785e5ba50aeb6dcc818f9"],["archives/2018/10/index.html","5d08ab0af1e4b07c23408f1d1fa296df"],["archives/2018/index.html","5df75cb9740be7240335969e0bde14cf"],["archives/2018/page/2/index.html","21f894b24e3df1eca2d14206317c7110"],["archives/2019/02/index.html","107c5464718250b753fff14ad53a0ab0"],["archives/2019/03/index.html","baa6161f65a1bfbff03c5cac7e7a10d0"],["archives/2019/04/index.html","0119861a355e1af2c7e907a627c819d1"],["archives/2019/08/index.html","313f235ced4600aa756893c571301629"],["archives/2019/09/index.html","fcb3b55e9e0e9ddf455a7a3c4ab64431"],["archives/2019/10/index.html","41f388af7f485fea03dc4258cf2624e4"],["archives/2019/index.html","a810fb074e290f1cd8f64ff0d5206d16"],["archives/2020/09/index.html","91a366c0e555850cf99d498f1be6de9c"],["archives/2020/10/index.html","fdbb54936b0868f11bfa4758b9dc5824"],["archives/2020/index.html","be721b2b5524073083e055c9c479b782"],["archives/2021/04/index.html","559de988feb21a0c8c62d3a9a8685393"],["archives/2021/12/index.html","8cab5a109229a311f535f4fbc173a156"],["archives/2021/index.html","2217b34c7ccf6202f5b3163a897e92b7"],["archives/index.html","707f0b45b6b7e965d304867be8e64f07"],["archives/page/2/index.html","6a7e05c0be3966d480beb7279791abe2"],["archives/page/3/index.html","240a966a6d85a25eb60de7a06a79c060"],["archives/page/4/index.html","1b24992175e602d4052380d745657b2e"],["assets/css/APlayer.min.css","fbe994054426fadb2dff69d824c5c67a"],["assets/css/DPlayer.min.css","31ac9b1a5a7f018dcc9a0e0f66261c08"],["assets/js/APlayer.min.js","8f1017e7a73737e631ff95fa51e4e7d7"],["assets/js/DPlayer.min.js","4097986cff510567068128f4b18004a6"],["assets/js/Meting.min.js","bfac0368480fd344282ec018d28f173d"],["categories/Git/index.html","3057656b7d61afb164fe2642ae0354cf"],["categories/H5/index.html","60dad6a6603c039332c899234a2edbed"],["categories/HelloWorld/index.html","05dd2bcd8a54c15871c0429f8004abc6"],["categories/Vue/index.html","21eb9ce69809ec37ea1085c3936f3b33"],["categories/css/index.html","1c7033156b2144854286e32b0939cdac"],["categories/index.html","ccbac95519612f5a56e31d3546206172"],["categories/javaScript/index.html","233b25ffce81fcc708bcaab4fd8273b0"],["categories/mac/index.html","e0e3269d457f268bb519fe3d15c2b929"],["categories/python/index.html","33b43625de79e1889886b3728b8f2b4b"],["categories/web/index.html","b1a22e04bab17bb6ec415500c737e049"],["categories/前端/index.html","76453f756b12badf82c2f473f2cc5c57"],["categories/动漫/index.html","31e53c9b03a3bf2ad10d9c76e75d1e4d"],["categories/原生Javascript/index.html","43abe6fa5c95ac8182e1c3592b9930d8"],["categories/小程序/index.html","eec53fbca7ed22e4a745875c1327921b"],["categories/工具/index.html","aea92e2feb10ff58bd69cbc09c1148e4"],["categories/服务器/index.html","374431c6010f8bc914d56a551d0892ed"],["categories/猎奇/index.html","8a70f46c6e655e5b5f214d0427f68e2c"],["css/prism-line-numbers.css","33fcb9c936d6640f7e23484e1b476145"],["css/prism.css","12172c9e0b25e59e8e925b84065c78f0"],["css/rtl.css","aaf79ebecbbb72855244e5c0d99a9591"],["css/style.css","8bf56f5206282c6463c752554dfab130"],["demos/clip_path_1.html","78ec34bea7eab074b7f5eaa3fbf96a75"],["gallery/index.html","4b465c895dc41e78383dec1dd276219a"],["group/index.html","813e36438d378860002500e64fdff43e"],["images/apple-touch-icon.png","0f3687ddb31c8d4f3f57db5904514471"],["images/backgoundLinearGradient/gradient.gif","93b5d42c0cb0791877ae483a92d9a7f9"],["images/backgoundLinearGradient/noAnimation.jpg","4db07dc8d4a6150fc7cd6f1c8af88626"],["images/cssProp/1.gif","407516c87d40f1fca66c840c6c122828"],["images/cssProp/animation.gif","407516c87d40f1fca66c840c6c122828"],["images/favicon-192x192.png","22cbbf3723cf35de562d84f43b2d47c4"],["images/logo.png","3a523a218d45942792b375bee59382ca"],["images/reactBeautifulDnd/react_beautiful_dnd_dom.gif","99c050814b7f7a1e015c0f6bf87fb304"],["index.html","3b7afbdb1185634005d2744e4cb16aa8"],["js/main.js","d3a0d4ba66a4d1063808786384261fcb"],["js/search.js","92b1330078e33f8133822a21c7961128"],["js/valine.min.js","1b2e70af1f51a248dcf0b4b5cbcd5c9d"],["lib/font-awesome/css/all.min.css","8766194d3e6bab3ee9777d360de35dba"],["lib/font-awesome/webfonts/fa-brands-400.eot","e8019d507e8cb51d169ab4f94a0cda12"],["lib/font-awesome/webfonts/fa-brands-400.svg","83e6c29fb363b2f0ea6cc18fefff729c"],["lib/font-awesome/webfonts/fa-brands-400.ttf","fdf44bc43e8fa2358bbb7d9165d78455"],["lib/font-awesome/webfonts/fa-brands-400.woff","da408238128b876cbda6424391f1566f"],["lib/font-awesome/webfonts/fa-regular-400.eot","e6c93cb47e716b579264a5fdfbf7e84d"],["lib/font-awesome/webfonts/fa-regular-400.svg","ba2a91dc95e6cfdc4b2a186a7ba83e29"],["lib/font-awesome/webfonts/fa-regular-400.ttf","8d220c793e2612bd131ed8522c54669f"],["lib/font-awesome/webfonts/fa-regular-400.woff","dad90637f797356bbc70d2664832e0b6"],["lib/font-awesome/webfonts/fa-solid-900.eot","ea363ed422723673917901680be9b37c"],["lib/font-awesome/webfonts/fa-solid-900.svg","de1d242d8acb26ec43c0d071fe78e72d"],["lib/font-awesome/webfonts/fa-solid-900.ttf","132e9759d93e4eefd7cdde0d7a322991"],["lib/font-awesome/webfonts/fa-solid-900.woff","2d0415fa29ea596b7a02c78eddeede20"],["lib/jquery/jquery.min.js","a09e13ee94d51c524b7e2a728c7d4039"],["lib/justified-gallery/css/justifiedGallery.min.css","40a9ddf18777fa39459e98e675603917"],["lib/justified-gallery/js/jquery.justifiedGallery.min.js","f12e15ba020d049ba166af44960051c9"],["lib/meslo-LG/MesloLGL-Bold.ttf","6c475ed9d73a90d62c666b3d94f350d2"],["lib/meslo-LG/MesloLGL-BoldItalic.ttf","1c5a059e12b5e0993699481455cf8b74"],["lib/meslo-LG/MesloLGL-Italic.ttf","17ab93d9e2493a279171fa183279decc"],["lib/meslo-LG/MesloLGL-Regular.ttf","265d62d86941c398f07704a80911ac92"],["lib/meslo-LG/MesloLGM-Bold.ttf","4174a16af8cfe61e45d1ec4758227443"],["lib/meslo-LG/MesloLGM-BoldItalic.ttf","33e53ff2022c98c3f3caa5c4682a1939"],["lib/meslo-LG/MesloLGM-Italic.ttf","259bbc1d62105f728101523e3295ddd1"],["lib/meslo-LG/MesloLGM-Regular.ttf","93e2fae291d0da752d78dc0b113591d9"],["lib/meslo-LG/MesloLGS-Bold.ttf","a31874e50f29681640f88e00f2343c25"],["lib/meslo-LG/MesloLGS-BoldItalic.ttf","2e752bcf18165adadef20e83389eb9a7"],["lib/meslo-LG/MesloLGS-Italic.ttf","526d28c1d73dedca45091a1530541908"],["lib/meslo-LG/MesloLGS-Regular.ttf","d20aa15f5ce240b12b2475042c6ead8e"],["lib/vazir-font/Vazir-Black.eot","d45d679ecbbf3e85f6fe924a3349611e"],["lib/vazir-font/Vazir-Black.ttf","dec57885836e1d78b278784703bfc3aa"],["lib/vazir-font/Vazir-Black.woff","4354348970f3bff75d294a1011617152"],["lib/vazir-font/Vazir-Bold.eot","b358a632638ddc12101a6dafd633b625"],["lib/vazir-font/Vazir-Bold.ttf","d00f44216fda6aef5873d083017fdd15"],["lib/vazir-font/Vazir-Bold.woff","98b6a3b0644ce527306cefecd0311a11"],["lib/vazir-font/Vazir-Light.eot","81fd1bcee68b84a31baa21aeb277d7e8"],["lib/vazir-font/Vazir-Light.ttf","11bc0b0762f1ba3f8393eda4a4d96984"],["lib/vazir-font/Vazir-Light.woff","a5772df426fc2720df4132d658940a78"],["lib/vazir-font/Vazir-Medium.eot","25b78a6e8f255ab89e160c7e4ca30ebb"],["lib/vazir-font/Vazir-Medium.ttf","11ef813ddc4c9ae17d99028f6132427a"],["lib/vazir-font/Vazir-Medium.woff","6134834d89c131f956774f6453ccb75f"],["lib/vazir-font/Vazir-Thin.eot","51d16771c8bf9759531066861015353f"],["lib/vazir-font/Vazir-Thin.ttf","5a7ca35b2f17908beb216ea97cce08a8"],["lib/vazir-font/Vazir-Thin.woff","388980cd8094ad738e8b23d5c470cac1"],["lib/vazir-font/Vazir.eot","91dd41e5f2b05c3c207a81f6f952fbd4"],["lib/vazir-font/Vazir.ttf","3bb6491e3a7c084399896a492e5dd618"],["lib/vazir-font/Vazir.woff","3707b5efa316620380ef9f5c9d047907"],["lib/vazir-font/font-face.css","d9bfb27230838bf4d4fdba1d5f53d5eb"],["music/index.html","b8dfc21716014420b1b674b608da30f0"],["page/2/index.html","a64d751ed88db8cfe221c1ccc960997f"],["page/3/index.html","c412a670a0a49eda15bbfab49ef419a8"],["page/4/index.html","39a793b431f249b130f4e27c15e77600"],["resume/index.html","525db3fec3ab2636a721bf41c4d21ade"],["search/index.html","9c8cd982debecdeeaca787f57f6a99ae"],["tag/index.html","96a867fa4c36861cca5989351639433a"],["tags/Egg/index.html","b8c5e488829da84b97f19dfbca07e3a5"],["tags/H5/index.html","8e7105ca49cae7bbb71d0d2b066120a2"],["tags/Node/index.html","e49ef1d0e57220a6764ed8b2aa214c57"],["tags/Taro/index.html","c80c06003a2ab56185a4a739448d87e7"],["tags/Unix/index.html","da484af7b73d3dec9a78c99516860810"],["tags/Vue通讯/index.html","fb9eb9f5027fa28444b42b0c57db4059"],["tags/call/index.html","ba77449a67c930ec5b18a4b704bc0629"],["tags/cloud/index.html","abd1731abeecb76258b6c7729579aab3"],["tags/crontab/index.html","10ee2d099a577fa3342996606a421daf"],["tags/css/index.html","4f59a40245745aa2f91f01768b31daf5"],["tags/git-remote/index.html","97dbba997c851830323fff712d3d43b6"],["tags/index.html","1b33c086146ae5aa521de5535bf041a3"],["tags/javascript/index.html","ee4f1c643713cacca53ce067c30b8ab3"],["tags/mac/index.html","4de637c6ade5f9f0b68ae4f6c31a32e5"],["tags/mysql/index.html","c4cbf58af8fe80bd339bda1053bbc406"],["tags/new操作符/index.html","2c93db5d8673217a19c6f958b52e1cef"],["tags/privoxy/index.html","2a291eeaabbc5482d757f3064a7ccfda"],["tags/python-json/index.html","5b5eca17a20c13d0dba0bb3c533e4c5a"],["tags/python-os/index.html","11fa7914bcf17c59c3133208d15c00a0"],["tags/python/index.html","bce65d6f18d868a35a0ebc5f4dc60a25"],["tags/shell/index.html","e2f437a98721ac7642ac9df91936b94b"],["tags/vue组件/index.html","4944032bf4cbf549aef75d1efb3c7509"],["tags/wepy/index.html","c45e58abab5c194669610e60a6712f4a"],["tags/小程序request-fail/index.html","a7cfb549ba630c485fa4fea61b4c336c"],["tags/小程序跳转/index.html","e0e665ed790075595d8d0b52bc635c68"],["tags/小程序踩坑/index.html","50b8fd91cee20ec9cfd7174888e98002"],["tags/微信/index.html","b5a0426e233797b845bd1b2651d7385b"],["tags/摔爹神曲/index.html","de76228deaf1efdbed2b6664891b309f"],["tags/数据类型/index.html","810298ac4f490331da85f3f63b0ca778"],["tags/文件损坏/index.html","a6bdc569bd16ac3819da38c9468c4619"],["tags/添加多个远程git仓库/index.html","c15e3a8cd4b749d03fad2ec5e44a6b77"],["tags/爬虫/index.html","a3037c3f63701f72caa1ca41d95fb077"],["tags/生命周期/index.html","5bf09ea00b5245819539dcf98fb12881"],["tags/网易云音乐/index.html","6c81c2de469874b70811be0ae58a89b7"],["tags/翻墙/index.html","573c4bf9ae2efea67bbf9ece5cd73248"],["tags/腾讯云/index.html","bd49c0715997819961df72a516701b1e"],["tags/踩坑/index.html","61d6d15f89e6033b4697793bd581e0d6"],["tags/进击的巨人/index.html","b40d3853f9f448adf3f0cb2d7ed650f2"],["top/index.html","045b7d85fabb179557e78378ff6ef26a"]];
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







