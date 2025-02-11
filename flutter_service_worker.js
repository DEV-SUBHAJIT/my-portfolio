'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {".git/COMMIT_EDITMSG": "5a3ab2f8281d9fa5d6cffcdd1570c614",
".git/config": "5edaf52d7e65b990b98706e4f5fab02d",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/FETCH_HEAD": "25f5341f48b7eee53f7b64e7689703c8",
".git/HEAD": "cf7dd3ce51958c5f13fece957cc417fb",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/fsmonitor-watchman.sample": "a0b2633a2c8e97501610bd3f73da66fc",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-commit.sample": "5029bfab85b1c39281aa9697379ea444",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
".git/hooks/sendemail-validate.sample": "4d67df3a8d5c98cb8565c07e42be0b04",
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/index": "33b6f908c5797fa7043d37cc85a01e1c",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "ec40c9929d571c225c8af70a993d79d2",
".git/logs/refs/heads/main": "58a618dc2dd8093aba69387ad4ad14d4",
".git/logs/refs/remotes/origin/main": "5dbeb9cf7e9d47d973f05ea666a6dc26",
".git/objects/01/bd31df9dfca08018c56ab11b7e1079db5d226c": "25f369f1a9f7adf5096c9299254c3a0e",
".git/objects/05/adb347614ac448998070548eb7d88ce8470a35": "448c53c1e0dc7ca44e91eac7f602e7c5",
".git/objects/07/9456be4b8119a2b697505886c64a4acdf64235": "5f761b3d97d635a3e155200752a3a297",
".git/objects/0a/50dbef4f108bc83341e52371859862d816c586": "9cfee9ebcb637ac883852fc37cd06eb2",
".git/objects/0b/761cfe8c3a592e9d7bb4d7f5f66bded02aa04e": "0b1dc0080bd5393c32ed5d4b3a3ec517",
".git/objects/13/35367e91a0d7554b913cd5de55de01d6f50f03": "226890b9cb7ff497ce6838beec8574e6",
".git/objects/14/9de1c6f791d79cd468ecded0fc22806c5d264e": "903384d7e7a1fe7b35c32f5723fda1d6",
".git/objects/1a/ea716b2e58df547dac15e3f9acc3c540ef25ad": "1827eeaa463fe89df02c3e0aa594d8f9",
".git/objects/1e/d9196028a370460099d6734d7d7b10e26b1647": "6009104953125c412d43474d8e2f7ee6",
".git/objects/24/267b32e1879acb26e9dd52a788fec9135b2ab9": "b3afc06dc356f500c3fe09005eb2ca9e",
".git/objects/2a/02d0cb62ca0ca30216c8fc9fdedf4fe088ba54": "526db3206257190cc05dbfc91e5098b5",
".git/objects/2b/c50e5037c5542a5f4391055f98b4ab7769749c": "c6098ae919e78c1400f621ad9b50341c",
".git/objects/3e/d0ddd7136a48520910e7e4bf665362facd60d4": "c8322669a78b5f07c75b1decdc05718d",
".git/objects/4f/c8ace72b8e6c39eeffc544d6ab339dc556230a": "c3ec364eb7d5a769d1779029466d6a29",
".git/objects/52/896f461139823daf687cc35421b4042e303fbc": "63a42eee682858c78a1735754a5479b4",
".git/objects/57/7946daf6467a3f0a883583abfb8f1e57c86b54": "846aff8094feabe0db132052fd10f62a",
".git/objects/59/90018fb069f3aed5d44dce6c21884e4ba9f745": "12d10a9000289194feb1f483b0223650",
".git/objects/5e/627891813c93d8f5e9330f4144def9a53263d4": "bb6c84b2a84d272c15f551f7845846a2",
".git/objects/5e/9c4c65616e39f5bf8082038cfc2fc5dd92bada": "e093726efaf4b8e34b8c509cfc9e22ba",
".git/objects/61/50f54f842af3935a122aaa760b0d5354774244": "617c0e0a900711a6d18877639dbb76bf",
".git/objects/6b/9862a1351012dc0f337c9ee5067ed3dbfbb439": "85896cd5fba127825eb58df13dfac82b",
".git/objects/6d/869c107ca1033cb5e3ee2996a92ad587e7df51": "d6d9483c81a341721ca602ae412a5fbe",
".git/objects/77/ff26235b819c8ee4fe2d96b370c8367fc6e294": "f2037b19d5d147d80739c6f7e9910831",
".git/objects/7b/7d772451248226a13d47879049e2495451a028": "ab1f1124f4164eeaed4b8a755c92d1ae",
".git/objects/7c/4b68ceb8186a199a8d63f228ee31f44396dfe0": "ae106fa8ef2a8f774e3086ba4dc12bd2",
".git/objects/7d/c2d66c63743c3d2dc2ab6ada78ae122983e910": "ff7cff7b6134431b826d816ade0a9293",
".git/objects/82/271d0896babedf145636d43c38b297fd7b14cc": "59cebba104601c6a82eef92fc1ef186f",
".git/objects/85/8772b80bcc076e8f302d5309eef1dab4a7998d": "e0a015b56ed1c9ad29e1affecc622c05",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/88/df5c34df76e38b072537058636f6fb62bc02f5": "00710d040503002924c4cb20ccb076db",
".git/objects/8a/51a9b155d31c44b148d7e287fc2872e0cafd42": "9f785032380d7569e69b3d17172f64e8",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/8c/4f2e16760f51ddd9622c5d55382f664c3528c9": "38c5ff72399be7c37e54bfaaefc07788",
".git/objects/91/ce64ec407a434b3c23820e7deda2415eea986b": "726780fb2dbd43447aa656c3fa297655",
".git/objects/9f/126f63a8f9dc3f638212c42d6cef65ad8fcea7": "0dab537bbc361d2981487b3a583c45b6",
".git/objects/9f/33c4871736aed54a4be73ef853163b7b4a9d01": "5ca44d29cc777ca4c224707b6032b12f",
".git/objects/a0/5bb63aa690fbd30a57c8a7934630945e42bd40": "8980fe6a2af769f823b79966caec0f01",
".git/objects/a1/8c6c696b18fcf3377482c387069cafa31e6430": "5214d54adeda624d11a945bf80994675",
".git/objects/a3/21b8183596964f7ab020d7538e88860e01295b": "3aea7b998892aed8e60d7ffd7bd82fe3",
".git/objects/a8/8c9340e408fca6e68e2d6cd8363dccc2bd8642": "11e9d76ebfeb0c92c8dff256819c0796",
".git/objects/aa/ee2d2125cddb56578915ab15658773d697824f": "c92dc2f2c409e8b0d754d8b33c3c0083",
".git/objects/ac/a2f66e3e7b989584d93d650ff6803096a58877": "78c5ea3410f87d8243c956c4864329b0",
".git/objects/ac/c27df3a014d40027e5df1e1c5d49c940891e3b": "e465a08bab10e4fc65383cc78947773c",
".git/objects/ad/17f71cbea192fca535acef186e8015fffa596c": "afd9c204889d086f646784cfecae9862",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/b9/2a0d854da9a8f73216c4a0ef07a0f0a44e4373": "f62d1eb7f51165e2a6d2ef1921f976f3",
".git/objects/cb/6b7a6137f8e01d986294349a6bc2fadc6d1849": "9df7d09456db8013ef6b3c4b23309f7a",
".git/objects/cc/5ca7f1b86714ef5bde399755954dcbdf48be50": "a423dcff530a5ffa8df7349d7a5e3757",
".git/objects/cd/25f8014db2f61f75beb2fdc263c04e09a33b7f": "6be3deb1a5e4b841c827521772542fee",
".git/objects/ce/49da099ff471126247c44538a24a98d4088826": "196b41815fc1b28945a4cf62f821d540",
".git/objects/d4/3532a2348cc9c26053ddb5802f0e5d4b8abc05": "3dad9b209346b1723bb2cc68e7e42a44",
".git/objects/d6/9c56691fbdb0b7efa65097c7cc1edac12a6d3e": "868ce37a3a78b0606713733248a2f579",
".git/objects/d7/7cfefdbe249b8bf90ce8244ed8fc1732fe8f73": "9c0876641083076714600718b0dab097",
".git/objects/e2/49245dbb76d0a69411623aec0698e275b1efd7": "4e2a7b0fac688483a7818ff10cad6241",
".git/objects/e5/07588520f38bf47fb5cd7570c45bef89175c3a": "645cd3445c16a3ceb76ced22d62b257d",
".git/objects/e9/94225c71c957162e2dcc06abe8295e482f93a2": "2eed33506ed70a5848a0b06f5b754f2c",
".git/objects/eb/3f41390d3a27d7644e76611ca9c4bd10fc5d08": "d2c4248f5fc863a608189de755cd8908",
".git/objects/eb/9b4d76e525556d5d89141648c724331630325d": "37c0954235cbe27c4d93e74fe9a578ef",
".git/objects/ed/58a819c8b4b7b45dc4ceebb273194e8b713fb4": "7090679316e9db2c78af58e32e245380",
".git/objects/ee/14a6d0b16906ca8313161f343e68b77dc615ac": "fbcf302aedcac70f23012358431c3304",
".git/objects/f2/04823a42f2d890f945f70d88b8e2d921c6ae26": "6b47f314ffc35cf6a1ced3208ecc857d",
".git/objects/f2/0773776cbf5930c5a3b1a0d0529834584c7046": "e953ab8945d86e7d7deff0ebb8e9c337",
".git/objects/f5/72b90ef57ee79b82dd846c6871359a7cb10404": "e68f5265f0bb82d792ff536dcb99d803",
".git/objects/fc/d20e5091df70f64df04fbe24698d95b494450e": "73c91497c0625108c4beea275dcea35c",
".git/objects/fe/bc549feeecf2498ac08a3fc7145f4dee4d1c6e": "29b6668d106526484011671f3c3c14dd",
".git/refs/heads/main": "e6379ef74ae4aeaf1cf94d8f1eb2ecef",
".git/refs/remotes/origin/main": "e6379ef74ae4aeaf1cf94d8f1eb2ecef",
"assets/AssetManifest.bin": "39eb556976e7aec095083e87a1ad26be",
"assets/AssetManifest.bin.json": "a45bef4ecbfcd53eca48aa250da4185e",
"assets/AssetManifest.json": "53dfec456b2821fc31e357452111cf85",
"assets/assets/fonts/GilroyBold.ttf": "b381c2abd2972024a6a7e3d882208d9b",
"assets/assets/fonts/GilroyRegular.ttf": "31ff7c1a62a300dbbf9656b4ba14a0d5",
"assets/assets/images/bg_image.png": "4adca58d3511074a1c447106e1818331",
"assets/assets/images/github.png": "b7e7a627717fd47f3aad7d992ac71384",
"assets/assets/images/linkedin.png": "641f1dc4d941c12ec1800f9e82134a5e",
"assets/assets/images/profile.jpg": "68053dae0490d70a0b263148373d60f3",
"assets/assets/images/stackoverflow.png": "8be82e75fdf56a607d7c24935e98c3a4",
"assets/FontManifest.json": "ab5838fccb05028ee661286e84cacb6f",
"assets/fonts/MaterialIcons-Regular.otf": "ec1a2727337b8e0f6c8d99851aa91b11",
"assets/NOTICES": "32a1a1ea7e90a3b44cb06f4030af5619",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "33b7d9392238c04c131b6ce224e13711",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"canvaskit/canvaskit.js": "d9252a0c6a6498261f19267314e95a47",
"canvaskit/canvaskit.js.symbols": "7e9893036c3fa7843429f59531f3b942",
"canvaskit/canvaskit.wasm": "5ddabdaf5ff10d64d4f06fbd522f4ff1",
"canvaskit/chromium/canvaskit.js": "417c635e514296a337033bbd95ba8332",
"canvaskit/chromium/canvaskit.js.symbols": "a1fea26b10a418991dc0fdd670d0a105",
"canvaskit/chromium/canvaskit.wasm": "4bed638ac5457a6ee18834aeaab3deb0",
"canvaskit/skwasm.js": "f2ad9363618c5f62e813740099a80e63",
"canvaskit/skwasm.js.symbols": "bd0e768fef31e76b4c56f7caa4efdd90",
"canvaskit/skwasm.wasm": "f65759a23ad54e185d6a3f17817b16ca",
"canvaskit/skwasm_st.js": "d1326ceef381ad382ab492ba5d96f04d",
"canvaskit/skwasm_st.js.symbols": "327a3060925e525407f4f2747a4712d6",
"canvaskit/skwasm_st.wasm": "809674c831d83f7f9c71d9dd93771403",
"favicon.png": "2149c94ea096e2dc9aae90d8c948b8ca",
"flutter.js": "76f08d47ff9f5715220992f993002504",
"flutter_bootstrap.js": "f918e195ba69dc090d9db7eec017f287",
"icons/Icon-192.png": "1c982547c1a113f5d6f8e7b491e08c69",
"icons/Icon-512.png": "1802141850a81742bf50835652225275",
"icons/Icon-maskable-192.png": "1c982547c1a113f5d6f8e7b491e08c69",
"icons/Icon-maskable-512.png": "1802141850a81742bf50835652225275",
"index.html": "a4df5ae49e44e28b44a12d8212e4c3cb",
"/": "a4df5ae49e44e28b44a12d8212e4c3cb",
"main.dart.js": "c2c512b12d93167b8712cb7b30a87c49",
"manifest.json": "dec711ed76373f85c63ed7fdb4c83080",
"version.json": "9b818ca9511483c901bed1545384376c"};
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
