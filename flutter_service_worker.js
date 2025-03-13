'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"canvaskit/skwasm_st.js": "d1326ceef381ad382ab492ba5d96f04d",
"canvaskit/skwasm.js": "f2ad9363618c5f62e813740099a80e63",
"canvaskit/skwasm.js.symbols": "80806576fa1056b43dd6d0b445b4b6f7",
"canvaskit/canvaskit.js.symbols": "68eb703b9a609baef8ee0e413b442f33",
"canvaskit/skwasm.wasm": "f0dfd99007f989368db17c9abeed5a49",
"canvaskit/chromium/canvaskit.js.symbols": "5a23598a2a8efd18ec3b60de5d28af8f",
"canvaskit/chromium/canvaskit.js": "ba4a8ae1a65ff3ad81c6818fd47e348b",
"canvaskit/chromium/canvaskit.wasm": "64a386c87532ae52ae041d18a32a3635",
"canvaskit/skwasm_st.js.symbols": "c7e7aac7cd8b612defd62b43e3050bdd",
"canvaskit/canvaskit.js": "6cfe36b4647fbfa15683e09e7dd366bc",
"canvaskit/canvaskit.wasm": "efeeba7dcc952dae57870d4df3111fad",
"canvaskit/skwasm_st.wasm": "56c3973560dfcbf28ce47cebe40f3206",
"flutter.js": "76f08d47ff9f5715220992f993002504",
"flutter_bootstrap.js": "4bc4e9e3eb23e3b376e710bbb831de99",
"index.html": "cfe44316a73fd9e2e522303e92821b19",
"/": "cfe44316a73fd9e2e522303e92821b19",
"main.dart.js": "6e10d31cd5fbc2c1e94a22143604c2de",
"version.json": "8b14dfe06ee7279df2d55aa79e41d377",
"assets/assets/images/vietmap.jpg": "53a8c8ad7b9aad2c4a4bda6405509fa2",
"assets/assets/images/vietmap_vector.png": "082f3df023c324acee44721a0bd2d7b9",
"assets/assets/images/google_satellite.png": "856563b496452c7dd9d61890c41a97cb",
"assets/assets/images/vietmap_raster.png": "082f3df023c324acee44721a0bd2d7b9",
"assets/assets/images/google.png": "e139c8ef9da0276aa439c9fcdbca32c4",
"assets/assets/images/vm_demo.png": "7957956d0e3e335a8510ccbd79d66179",
"assets/assets/images/marker.png": "ac872c4036523f31d3ba0f6e8fcf4fab",
"assets/assets/navigation_symbol/continue_slight_left.svg": "dab3e543b976183ee0d38ed25036e95a",
"assets/assets/navigation_symbol/continue_sharp_left.svg": "55ac32eb35e0b8c43ef485f3d3cc7c7a",
"assets/assets/navigation_symbol/continue_sharp_right.svg": "6422c1846fe0328493cdcfab01766a3b",
"assets/assets/navigation_symbol/arrive_right.svg": "65ec7b4ec7d3ded020fc68a98a354de9",
"assets/assets/navigation_symbol/continue_left.svg": "70b7481f2b631c8a97422b2ac8081306",
"assets/assets/navigation_symbol/continue_uturn.svg": "ad27ee5ac1312a0ea7efb13f954e8efe",
"assets/assets/navigation_symbol/exit_right.svg": "36c907c05f9a595d0d3a120923dc32ab",
"assets/assets/navigation_symbol/exit_slight_left.svg": "dcc2c97ccfbe671e77022ae404614813",
"assets/assets/navigation_symbol/continue_slight_right.svg": "a95d7d8ed4a92bdca835cb60af1f2d6f",
"assets/assets/navigation_symbol/fork_left.svg": "44b4d84a16575ff10e63800f6098ea29",
"assets/assets/navigation_symbol/arrive_left.svg": "21833477d575cc1b17e987edf0b50746",
"assets/assets/navigation_symbol/flag.svg": "9c2c62fcbb2566e0d744b79796cc036b",
"assets/assets/navigation_symbol/arrive_straight.svg": "dcb7f08a30cda47788235f142115f761",
"assets/assets/navigation_symbol/end_of_road_right.svg": "a23ac3d8d08b1a3451aef535f8f8368b",
"assets/assets/navigation_symbol/fork_right.svg": "b12966b0de73b2762c60632db6853cab",
"assets/assets/navigation_symbol/bidirectional.svg": "90456c9e6e707dfae62596af2bdd6810",
"assets/assets/navigation_symbol/exit_left.svg": "b47f56cf36eebb7cb4c9c0b26f432a90",
"assets/assets/navigation_symbol/continue_right.svg": "70b7481f2b631c8a97422b2ac8081306",
"assets/assets/navigation_symbol/end_of_road_left.svg": "94bf21191c74646c35f650c1dbfbf17d",
"assets/assets/navigation_symbol/continue_straight.svg": "70b7481f2b631c8a97422b2ac8081306",
"assets/assets/navigation_symbol/depart_left.svg": "03f09b2dcdea51546f08613d4f90ea30",
"assets/assets/navigation_symbol/depart_right.svg": "f8bde65136c134debfe11a3a66e8d7a3",
"assets/assets/navigation_symbol/exit_slight_right.svg": "55be65c9c9d9beb416bbed07b02cbe6c",
"assets/assets/navigation_symbol/depart_straight.svg": "f8c96bcfd99acb60116b47ddd0dee0e0",
"assets/assets/navigation_symbol/fork.svg": "4a79c35e561ce61df5f243498b36b824",
"assets/assets/navigation_symbol/keep_left_us.svg": "0d2eea84453141e4a25e5eb4e08cbd15",
"assets/assets/navigation_symbol/fork_straight.svg": "d824f003c9c14c96450171b01afc3a77",
"assets/assets/navigation_symbol/keep_left.svg": "14ab67989945e23f661ed5c21f744df8",
"assets/assets/navigation_symbol/fork_slight_left.svg": "414965675d11d97f9d3210f78bcf51db",
"assets/assets/navigation_symbol/fork_slight_left-1.svg": "22ac26541a448e9d0305c25e29f327ee",
"assets/assets/navigation_symbol/fork_slight_right.svg": "13c3a5c1ad4236aa4764805550c8b219",
"assets/assets/navigation_symbol/keep_right.svg": "8a005097ac2c68bfdd4dc779bb2edf71",
"assets/assets/navigation_symbol/turn_sharp_right.svg": "6422c1846fe0328493cdcfab01766a3b",
"assets/assets/navigation_symbol/roundabout_left.svg": "520ca5bc625df1f401f6157802afd923",
"assets/assets/navigation_symbol/turn_left.svg": "461e61eac522bfcb0222aad7a7a018df",
"assets/assets/navigation_symbol/merge_straight.svg": "02670183407ad0a23766895e3bf09d25",
"assets/assets/navigation_symbol/turn_straight.svg": "70b7481f2b631c8a97422b2ac8081306",
"assets/assets/navigation_symbol/keep_right_uk.svg": "2b0fd6491b46ad808bc5407596c6ce89",
"assets/assets/navigation_symbol/turn_slight_right.svg": "a95d7d8ed4a92bdca835cb60af1f2d6f",
"assets/assets/navigation_symbol/progress_arrow.svg": "d41d8cd98f00b204e9800998ecf8427e",
"assets/assets/navigation_symbol/uturn_right.svg": "c8ccd16e8dc188a638b62b0311aa8003",
"assets/assets/navigation_symbol/turn_slight_left.svg": "dab3e543b976183ee0d38ed25036e95a",
"assets/assets/navigation_symbol/merge_slight_left.svg": "3aed9103889a3060e2f07f003f49ffa2",
"assets/assets/navigation_symbol/rotary_right.svg": "a3fdbfa71723bce888d30741b5336a23",
"assets/assets/navigation_symbol/turn_right.svg": "7f83a8e9105a91b7ed78136410bc04ee",
"assets/assets/navigation_symbol/merge_left.svg": "98e25fd449c04833b3f27a41980db270",
"assets/assets/navigation_symbol/uturn.svg": "ad27ee5ac1312a0ea7efb13f954e8efe",
"assets/assets/navigation_symbol/turn_sharp_left.svg": "55ac32eb35e0b8c43ef485f3d3cc7c7a",
"assets/assets/navigation_symbol/uturn_left.svg": "ad27ee5ac1312a0ea7efb13f954e8efe",
"assets/assets/navigation_symbol/merge_right.svg": "139a35bfdf10fef520da2a88c15da37f",
"assets/assets/navigation_symbol/merge_slight_right.svg": "202f70e33a8a45feade62ff2816f44d9",
"assets/assets/navigation_symbol/merge.svg": "b7bef55fb086c98e6e17528ad6b8ed70",
"assets/assets/navigation_symbol/rotary_left.svg": "6a1b869bf4bdbb8cf3d027ec2ecdf3e0",
"assets/assets/navigation_symbol/roundabout_right.svg": "67413919dfd32e2a4bd577054495b1d4",
"assets/assets/tiles/google_satellite.json": "b66974121ed84c32c71a57e7c9aa7a55",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "33b7d9392238c04c131b6ce224e13711",
"assets/fonts/MaterialIcons-Regular.otf": "f123afbce3e6e16c48f02595b7b729db",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"assets/AssetManifest.json": "a52fdbf0eb050d3a32ca3c401d6e9f81",
"assets/AssetManifest.bin": "b1d10cef4f719baeaa142666291baf2c",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/AssetManifest.bin.json": "b92ce971aa4591f5d3236724511902cd",
"assets/NOTICES": "f27577f16aeec031986eb2cba34896d7",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"manifest.json": "544e4dbc44d263e3a72d46b3d38d8dd1",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"CNAME": "db7660e247606c2e4ca2e1a5646d8921"};
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
