'use strict';

importScripts('sw-toolbox.js');

toolbox.precache(["schedule/index.html","schedule/style.css","schedule/script.css"]);

toolbox.router.get('/images/*', toolbox.cacheFirst);

toolbox.router.get('/*', toolbox.networkFirst, {
  networkTimeoutSeconds: 5
});
