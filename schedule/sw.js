'use strict';

importScripts('sw-toolbox.js');

toolbox.precache(["schedule/","schedule/index.html","schedule/style.css","schedule/script.css"]);

toolbox.router.get('/*', toolbox.cacheFirst);

toolbox.router.get('/*', toolbox.networkFirst, {
  networkTimeoutSeconds: 5
});
