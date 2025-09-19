// インストール処理
self.addEventListener('install', (event) => {
  event.waitUntil(self.skipWaiting());
});

// フェッチイベント
self.addEventListener('fetch', (event) => {
  event.respondWith(fetch(event.request));
});