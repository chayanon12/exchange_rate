'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "assets/AssetManifest.json": "ff9aa441df156fbb1cd38705795f22bd",
"assets/assets/images/ada.png": "24a1038e0ac443dc42e4c585eab336a4",
"assets/assets/images/adag.png": "b3d6803601143e31ad1678bb84610b23",
"assets/assets/images/adag1.png": "011436ecd38619b5101d216149c11bd0",
"assets/assets/images/atr.png": "70359b5551cbabe106af015d12037ff4",
"assets/assets/images/atr1.png": "d15cb77b5058cbfb2b84b9a5d285f272",
"assets/assets/images/bba.png": "731e8da4da0518260a6e245e0cd9f3c0",
"assets/assets/images/bba1.png": "c477f1979f992b8b88c33a922e5ef944",
"assets/assets/images/bba2.png": "c0e562e7f47a1aca83d4cef6a0102f95",
"assets/assets/images/bg.jpg": "ee34c265383dfe800f09efc9dd2cb2b1",
"assets/assets/images/bg1.jpg": "72bec781821faabef5fa67df8d818d75",
"assets/assets/images/bg3.jpg": "9646999ee7730336392a3c06fb4ceec3",
"assets/assets/images/bg4.jpg": "eae54856f89cf55d8951c2ae271886dd",
"assets/assets/images/bg5.jpg": "9e2ca3999ca8bb02d760afa504762675",
"assets/assets/images/bg6.jpg": "9e2ca3999ca8bb02d760afa504762675",
"assets/assets/images/bgg2.jpg": "ec296497a8dd4026f6ec7ac06792813a",
"assets/assets/images/bnb.png": "1fc031461184d9ecd11eec32e98970c8",
"assets/assets/images/bnbg.png": "2626e7b63366e3543488a206cd345a97",
"assets/assets/images/bnbg1.png": "eeed589978477b077f5168f99773af37",
"assets/assets/images/brz.png": "95cd1593d5269648db1c3df1e0963733",
"assets/assets/images/brz1.png": "020e5e4ca826360d0d6cf6bcef962ddf",
"assets/assets/images/btc.png": "d6a21bc3c9efb83425341d0e319f8110",
"assets/assets/images/btcg.png": "bc1b1c7704874c95aeb3e3bab159c242",
"assets/assets/images/btcg1.png": "19db94478664cd4ccf7a66cf058acace",
"assets/assets/images/bun.png": "8b38098f0382b1ad75603dc412c12b67",
"assets/assets/images/bun1.png": "e9814913ff0af3de68c542f699612f4a",
"assets/assets/images/cnd.png": "c0cb79b8a3179d13643eedb8909f8ebe",
"assets/assets/images/cnd1.png": "690ad952100eeb11df6788fbcc1a7e1e",
"assets/assets/images/dd.jpg": "d549e8cba4a098543e88688e8379cd44",
"assets/assets/images/dog.png": "55a451133a69cdc1f746b2791894531e",
"assets/assets/images/dog1.png": "185414f51daa4152083d8c03ad1057bd",
"assets/assets/images/dog2.png": "6a464c8d70bb808823a4faa06285cd64",
"assets/assets/images/dog3.png": "9d8d965128c493b3057d40be42070199",
"assets/assets/images/doge.png": "e596c8c071005a2579b3b602e6af5d5c",
"assets/assets/images/dogg.png": "76dd54419f792db31adddde9bfa4de4f",
"assets/assets/images/dogg1.png": "1ecc88e836db0b63ac4eca162cd7b555",
"assets/assets/images/doggg-removebg-preview.png": "8246a560bec9717ddc3a2a06983b85ca",
"assets/assets/images/doggg.png": "99417e850818923b80d18adc4caa4935",
"assets/assets/images/erp.png": "12b596b60cf21d2752251b1af815cc3d",
"assets/assets/images/erp1.png": "71f09ff80346f60e4a75c200894e116e",
"assets/assets/images/eth.png": "86b356aa4636232f3e200c65d2a8b6b4",
"assets/assets/images/ethg.png": "ad9c17d3c0502b9cea04285ecc3e4426",
"assets/assets/images/ethg1.png": "ed5a98442da008abaef176f036c755f3",
"assets/assets/images/japan.png": "179566e01d3edb2113e95d804632f4b7",
"assets/assets/images/japan1.png": "71aafba034fad1c7569ddff877e3495d",
"assets/assets/images/jor.png": "32de4b86bec8873608398ad017a222c6",
"assets/assets/images/jor1.png": "1a071f8945af25d919fd49372e9595ce",
"assets/assets/images/ltc.png": "afde79b0f20237956b68b08bd09ed5b9",
"assets/assets/images/ltcg.png": "37fd3b99152e0bc7363e853c9bf6819d",
"assets/assets/images/ltcg1.png": "30732869bdb03c827d90cd689a4d3f00",
"assets/assets/images/mexico.png": "cbdf15316bd1a991b16c8fb704c97ec1",
"assets/assets/images/mexico1.png": "ee7968fdb397574dbfedc301f61ec24c",
"assets/assets/images/new.png": "f1fe02ac6ba0aa25b226f865919cd4e9",
"assets/assets/images/nor.png": "47a3621459e324f919b9245193fb5aee",
"assets/assets/images/nor1.png": "97f2d03374633b3e30aeb5677e5ef2a4",
"assets/assets/images/ntl.png": "4f2212cda9f49aa57e2bf041b08f06f9",
"assets/assets/images/ntl1.png": "41544987b311c0e900469aa98797a888",
"assets/assets/images/peru.png": "0cb6ade943c443f854507f1627564503",
"assets/assets/images/peru1.png": "65e3a8e9dd922a0155f86e0b87b658a4",
"assets/assets/images/rmn.png": "ba16d79c7b941cbf5a6fb5be63b3fa98",
"assets/assets/images/rmn1.png": "8efabc7b334ab21426d4f3556998a3f9",
"assets/assets/images/saud.png": "4edde766c077f117db0cadceb977515f",
"assets/assets/images/saud1.png": "e56aa932df8f5bd1c90071b88a86f6f5",
"assets/assets/images/ste.png": "19309e05d37dcb62b3fd434ebcd12758",
"assets/assets/images/sw.png": "d2f3e4068e081f38912a0e2c60d540f9",
"assets/assets/images/sw1.png": "f1fb5d114e8210c10dcd224e389aae35",
"assets/assets/images/swd.png": "c7788121baf0187d99ee94333b7ac271",
"assets/assets/images/swd1.png": "e8e9657b197f60ddc6a0a4ecae7b1b58",
"assets/assets/images/tru.png": "a17ea4d2555b398d625ecaf82e63334c",
"assets/assets/images/tru1.png": "a0d7e97b1879cbe1a7937831bc969e92",
"assets/assets/images/uae.png": "aa3a8c3c4cd4d2da89ea5cad4c2c7925",
"assets/assets/images/uae1.png": "c27c1b5502ba48c8aa5de958693eaea9",
"assets/assets/images/unk.png": "8605a7f861516c7b10f88ef2428901b2",
"assets/assets/images/unk1.png": "e9d876f7a0adeaf5743e53d64af58633",
"assets/assets/images/usa.png": "decf409ce6a075d8246e125e63348da0",
"assets/assets/images/usa1.png": "6c58f61f6759c99fce5548ab0ac736dc",
"assets/assets/images/usd.png": "e52543c290bced9d0b6bc802c7319093",
"assets/assets/images/usdtg.png": "4d4967d8cf679007f76241743c6018c9",
"assets/assets/images/usdtg1.png": "c7202a68db433a3c31e9a57fa150e793",
"assets/assets/images/ustd.png": "9250821f8168c5dffe6a89a0d3a3765b",
"assets/assets/images/wan.png": "2d15b18f2d6b840ea84109c277a15869",
"assets/assets/images/wang.png": "6f846cb158f5aef4f2dc55cb6cd8fd29",
"assets/assets/images/wang1.png": "da047862d4a8f42b3349dacea9400e69",
"assets/assets/images/xlmg.png": "902a4f015062d620735ed87cebcf2927",
"assets/assets/images/xlmg1.png": "2dcfacd9bb768e8aecefaef86908d16d",
"assets/assets/images/xrp.png": "b848ca58f9c34bf2044c327122ec7477",
"assets/assets/images/xrpg.png": "20abae498aa144a75985b84b53542659",
"assets/assets/images/xrpg1.png": "bbee2bb7054f0d1f2b0dc6f47fb81a98",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/fonts/MaterialIcons-Regular.otf": "4e6447691c9509f7acdbf8a931a85ca1",
"assets/NOTICES": "e50d7d632d8ffa91da998e3d98c82cf9",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "6d342eb68f170c97609e9da345464e5e",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "70152bcae48d271a0115c5d0cf6e0b75",
"/": "70152bcae48d271a0115c5d0cf6e0b75",
"main.dart.js": "770833262d3dbcc0991d09271a029cab",
"manifest.json": "b0cba40927d4c281c664d5b6c13b8424",
"version.json": "ea28880aec04954eca25f9f715e2db7a"
};

// The application shell files that are downloaded before a service worker can
// start.
const CORE = [
  "/",
"main.dart.js",
"index.html",
"assets/NOTICES",
"assets/AssetManifest.json",
"assets/FontManifest.json"];
// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});

// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});

// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache.
        return response || fetch(event.request).then((response) => {
          cache.put(event.request, response.clone());
          return response;
        });
      })
    })
  );
});

self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});

// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}

// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
