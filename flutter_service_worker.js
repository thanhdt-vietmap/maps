'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"canvaskit/skwasm.js": "5d4f9263ec93efeb022bb14a3881d240",
"canvaskit/skwasm.js.symbols": "c3c05bd50bdf59da8626bbe446ce65a3",
"canvaskit/canvaskit.js.symbols": "74a84c23f5ada42fe063514c587968c6",
"canvaskit/skwasm.wasm": "4051bfc27ba29bf420d17aa0c3a98bce",
"canvaskit/chromium/canvaskit.js.symbols": "ee7e331f7f5bbf5ec937737542112372",
"canvaskit/chromium/canvaskit.js": "901bb9e28fac643b7da75ecfd3339f3f",
"canvaskit/chromium/canvaskit.wasm": "399e2344480862e2dfa26f12fa5891d7",
"canvaskit/canvaskit.js": "738255d00768497e86aa4ca510cce1e1",
"canvaskit/canvaskit.wasm": "9251bb81ae8464c4df3b072f84aa969b",
"canvaskit/skwasm.worker.js": "bfb704a6c714a75da9ef320991e88b03",
"flutter.js": "383e55f7f3cce5be08fcf1f3881f585c",
"flutter_bootstrap.js": "31d84bf9c3d8d2e5239ee7e50bc33711",
"index.html": "02d5ac2b082d4dc873a07216d96df14f",
"/": "02d5ac2b082d4dc873a07216d96df14f",
"main.dart.js": "5ab137a793b7ddbbb60ff47c2982287f",
"version.json": "8b14dfe06ee7279df2d55aa79e41d377",
"assets/assets/images/vietmap.jpg": "53a8c8ad7b9aad2c4a4bda6405509fa2",
"assets/assets/images/google.png": "e139c8ef9da0276aa439c9fcdbca32c4",
"assets/assets/images/google_satellite.png": "856563b496452c7dd9d61890c41a97cb",
"assets/assets/images/vm_demo.png": "7957956d0e3e335a8510ccbd79d66179",
"assets/assets/images/vietmap_raster.png": "082f3df023c324acee44721a0bd2d7b9",
"assets/assets/images/vietmap_vector.png": "082f3df023c324acee44721a0bd2d7b9",
"assets/assets/navigation_symbol/depart_right.svg": "f8bde65136c134debfe11a3a66e8d7a3",
"assets/assets/navigation_symbol/arrive_straight.svg": "dcb7f08a30cda47788235f142115f761",
"assets/assets/navigation_symbol/arrive_left.svg": "21833477d575cc1b17e987edf0b50746",
"assets/assets/navigation_symbol/continue_slight_right.svg": "a95d7d8ed4a92bdca835cb60af1f2d6f",
"assets/assets/navigation_symbol/continue_right.svg": "70b7481f2b631c8a97422b2ac8081306",
"assets/assets/navigation_symbol/continue_straight.svg": "70b7481f2b631c8a97422b2ac8081306",
"assets/assets/navigation_symbol/continue_uturn.svg": "ad27ee5ac1312a0ea7efb13f954e8efe",
"assets/assets/navigation_symbol/end_of_road_right.svg": "a23ac3d8d08b1a3451aef535f8f8368b",
"assets/assets/navigation_symbol/exit_slight_left.svg": "dcc2c97ccfbe671e77022ae404614813",
"assets/assets/navigation_symbol/bidirectional.svg": "90456c9e6e707dfae62596af2bdd6810",
"assets/assets/navigation_symbol/flag.svg": "9c2c62fcbb2566e0d744b79796cc036b",
"assets/assets/navigation_symbol/continue_sharp_right.svg": "6422c1846fe0328493cdcfab01766a3b",
"assets/assets/navigation_symbol/fork_right.svg": "b12966b0de73b2762c60632db6853cab",
"assets/assets/navigation_symbol/exit_left.svg": "b47f56cf36eebb7cb4c9c0b26f432a90",
"assets/assets/navigation_symbol/depart_straight.svg": "f8c96bcfd99acb60116b47ddd0dee0e0",
"assets/assets/navigation_symbol/continue_left.svg": "70b7481f2b631c8a97422b2ac8081306",
"assets/assets/navigation_symbol/continue_slight_left.svg": "dab3e543b976183ee0d38ed25036e95a",
"assets/assets/navigation_symbol/exit_right.svg": "36c907c05f9a595d0d3a120923dc32ab",
"assets/assets/navigation_symbol/fork_slight_left-1.svg": "22ac26541a448e9d0305c25e29f327ee",
"assets/assets/navigation_symbol/end_of_road_left.svg": "94bf21191c74646c35f650c1dbfbf17d",
"assets/assets/navigation_symbol/exit_slight_right.svg": "55be65c9c9d9beb416bbed07b02cbe6c",
"assets/assets/navigation_symbol/fork_left.svg": "44b4d84a16575ff10e63800f6098ea29",
"assets/assets/navigation_symbol/fork.svg": "4a79c35e561ce61df5f243498b36b824",
"assets/assets/navigation_symbol/continue_sharp_left.svg": "55ac32eb35e0b8c43ef485f3d3cc7c7a",
"assets/assets/navigation_symbol/depart_left.svg": "03f09b2dcdea51546f08613d4f90ea30",
"assets/assets/navigation_symbol/arrive_right.svg": "65ec7b4ec7d3ded020fc68a98a354de9",
"assets/assets/navigation_symbol/keep_right_uk.svg": "2b0fd6491b46ad808bc5407596c6ce89",
"assets/assets/navigation_symbol/keep_left.svg": "14ab67989945e23f661ed5c21f744df8",
"assets/assets/navigation_symbol/keep_right.svg": "8a005097ac2c68bfdd4dc779bb2edf71",
"assets/assets/navigation_symbol/fork_slight_left.svg": "414965675d11d97f9d3210f78bcf51db",
"assets/assets/navigation_symbol/keep_left_us.svg": "0d2eea84453141e4a25e5eb4e08cbd15",
"assets/assets/navigation_symbol/fork_straight.svg": "d824f003c9c14c96450171b01afc3a77",
"assets/assets/navigation_symbol/rotary_right.svg": "a3fdbfa71723bce888d30741b5336a23",
"assets/assets/navigation_symbol/turn_straight.svg": "70b7481f2b631c8a97422b2ac8081306",
"assets/assets/navigation_symbol/merge_straight.svg": "02670183407ad0a23766895e3bf09d25",
"assets/assets/navigation_symbol/uturn.svg": "ad27ee5ac1312a0ea7efb13f954e8efe",
"assets/assets/navigation_symbol/turn_slight_left.svg": "dab3e543b976183ee0d38ed25036e95a",
"assets/assets/navigation_symbol/uturn_left.svg": "ad27ee5ac1312a0ea7efb13f954e8efe",
"assets/assets/navigation_symbol/turn_slight_right.svg": "a95d7d8ed4a92bdca835cb60af1f2d6f",
"assets/assets/navigation_symbol/turn_right.svg": "7f83a8e9105a91b7ed78136410bc04ee",
"assets/assets/navigation_symbol/turn_sharp_right.svg": "6422c1846fe0328493cdcfab01766a3b",
"assets/assets/navigation_symbol/roundabout_left.svg": "520ca5bc625df1f401f6157802afd923",
"assets/assets/navigation_symbol/merge_right.svg": "139a35bfdf10fef520da2a88c15da37f",
"assets/assets/navigation_symbol/progress_arrow.svg": "d41d8cd98f00b204e9800998ecf8427e",
"assets/assets/navigation_symbol/turn_left.svg": "461e61eac522bfcb0222aad7a7a018df",
"assets/assets/navigation_symbol/merge_left.svg": "98e25fd449c04833b3f27a41980db270",
"assets/assets/navigation_symbol/rotary_left.svg": "6a1b869bf4bdbb8cf3d027ec2ecdf3e0",
"assets/assets/navigation_symbol/fork_slight_right.svg": "13c3a5c1ad4236aa4764805550c8b219",
"assets/assets/navigation_symbol/roundabout_right.svg": "67413919dfd32e2a4bd577054495b1d4",
"assets/assets/navigation_symbol/turn_sharp_left.svg": "55ac32eb35e0b8c43ef485f3d3cc7c7a",
"assets/assets/navigation_symbol/merge_slight_left.svg": "3aed9103889a3060e2f07f003f49ffa2",
"assets/assets/navigation_symbol/merge_slight_right.svg": "202f70e33a8a45feade62ff2816f44d9",
"assets/assets/navigation_symbol/merge.svg": "b7bef55fb086c98e6e17528ad6b8ed70",
"assets/assets/navigation_symbol/uturn_right.svg": "c8ccd16e8dc188a638b62b0311aa8003",
"assets/assets/tiles/google_satellite.json": "b66974121ed84c32c71a57e7c9aa7a55",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "e986ebe42ef785b27164c36a9abc7818",
"assets/fonts/MaterialIcons-Regular.otf": "1f4ce3543ba02f78fc27b1363159b680",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"assets/AssetManifest.json": "04976e1d3289e1d5a6ae466be6cc9b42",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/NOTICES": "fb44601ea57d04f9c70adee37fdb735b",
"assets/AssetManifest.bin": "b85e3a7b2ad2b47a3abe9ed67d6a582d",
"assets/AssetManifest.bin.json": "3812969e7cf124d9d6cf348fbd0097db",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"manifest.json": "544e4dbc44d263e3a72d46b3d38d8dd1",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"flutter_bootstrap.js",
"assets/AssetManifest.bin.json",
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
        // Claim client to enable caching on first launch
        self.clients.claim();
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
      // Claim client to enable caching on first launch
      self.clients.claim();
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
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
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
