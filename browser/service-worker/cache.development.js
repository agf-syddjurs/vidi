/*
 * @author     Alexander Shumilov
 * @copyright  2013-2018 MapCentia ApS
 * @license    http://www.gnu.org/licenses/#AGPL  GNU AFFERO GENERAL PUBLIC LICENSE 3
 */

/**
 * Development assets to cache
 */

let urlsToCache = [
    '/index.html',
    '/js/lib/leaflet/images/marker-icon.png',
    '/js/lib/leaflet/images/marker-icon-2x.png',
    '/js/lib/leaflet/images/marker-shadow.png',
    '/js/lib/Leaflet.awesome-markers/images/markers-soft.png',
    '/js/lib/Leaflet.awesome-markers/images/markers-soft@2x.png',
    '/js/lib/Leaflet.awesome-markers/images/markers-shadow.png',
    '/js/lib/Leaflet.awesome-markers/images/markers-shadow@2x.png',
    'https://netdna.bootstrapcdn.com/font-awesome/4.5.0/css/font-awesome.min.css',
    'https://netdna.bootstrapcdn.com/font-awesome/4.5.0/fonts/fontawesome-webfont.woff2?v=4.5.0',
    'https://cdn.polyfill.io/v2/polyfill.min.js?features=Element.prototype.classList,WeakMap,MutationObserver,URL,Array.from',
    '/js/lib/momentjs/moment-with-locales.js',
    '/js/lib/Leaflet.awesome-markers/leaflet.awesome-markers.js',
    '/js/lib/es5-shim/es5-shim.js',
    '/js/lib/d3/d3.js',
    '/js/lib/bootstrap-table/bootstrap-table.js',
    '/js/lib/bootstrap-table/extensions/export/bootstrap-table-export.min.js',
    '/js/lib/bootstrap-table/extensions/filter-control/bootstrap-table-filter-control.min.js',
    '/js/lib/bootstrap-table/bootstrap-table-locale-all.min.js',
    '/js/lib/bootstrap-colorpicker/img/bootstrap-colorpicker/hue.png',
    '/js/lib/bootstrap-colorpicker/img/bootstrap-colorpicker/alpha.png',
    '/js/lib/bootstrap-colorpicker/img/bootstrap-colorpicker/saturation.png',
    '/js/lib/leaflet-measure/images/check.png',
    '/js/lib/leaflet-measure/images/cancel.png',
    '/js/lib/leaflet-measure/images/start.png',
    '/js/lib/leaflet/images/layers.png',
    '/fonts/roboto-v18-latin-italic.ttf',
    '/fonts/roboto-v18-latin-regular.ttf',
    '/fonts/roboto-v18-latin-500.ttf',
    '/fonts/roboto-v18-latin-italic.woff',
    '/fonts/roboto-v18-latin-regular.woff2',
    '/fonts/roboto-v18-latin-500.woff2',
    '/fonts/roboto-v18-latin-regular.woff',
    '/fonts/roboto-v18-latin-500.woff',
    '/fonts/roboto-v18-latin-italic.woff2',
    '/fonts/fa-regular-400.woff',
    '/fonts/fa-regular-400.woff2',
    '/fonts/fa-regular-400.ttf',
    '/fonts/fa-regular-400.svg',
    '/fonts/fa-solid-900.woff',
    '/fonts/fa-solid-900.woff2',
    '/fonts/fa-solid-900.ttf',
    '/fonts/fa-solid-900.svg',
    '/fonts/fonts.css',
    '/icons/MaterialIcons-Regular.woff2',
    '/icons/MaterialIcons-Regular.woff',
    '/icons/MaterialIcons-Regular.ttf',
    '/icons/material-icons.css',
    '/js/lib/tableExport.jquery.plugin/tableExport.js',
    '/js/lib/typeahead.js/typeahead.jquery.js',
    '/js/lib/backbone/backbone.js',
    '/js/lib/raphael/raphael.min.js',
    '/js/lib/underscore/underscore.js',
    '/js/lib/jrespond/jRespond.js',
    '/js/lib/mustache.js/mustache.js',
    '/js/lib/jquery/jquery.js',
    '/js/lib/jquery-ui/jquery-ui.min.js',
    '/js/lib/jquery-ui-touch/jquery.ui.touch-punch.min.js',
    '/js/lib/jquery.canvasResize.js/jquery.canvasResize.js',
    '/js/lib/jquery.canvasResize.js/jquery.exif.js',
    '/js/lib/q-cluster/src/clustering.js',
    '/js/lib/Leaflet.GridLayer.GoogleMutant/Leaflet.GoogleMutant.js',
    '/js/lib/leaflet-side-by-side/leaflet-side-by-side.min.js',
    '/js/lib/leaflet-plugins/Bing.js',
    '/js/lib/leaflet-plugins/Yandex.js',
    '/js/lib/Leaflet.utfgrid/leaflet.utfgrid.js',
    '/js/lib/Leaflet.extra-markers/css/leaflet.extra-markers.css',
    '/js/lib/Leaflet.extra-markers/leaflet.extra-markers.js',
    '/js/lib/leaflet-measure/leaflet-measure.min.js',
    '/js/lib/leaflet-boxzoom/leaflet-boxzoom.js',
    '/js/lib/leaflet-history/leaflet-history.js',
    '/js/lib/leaflet-draw/leaflet.draw.js',
    '/js/lib/leaflet-geometryutil/leaflet.geometryutil.js',
    '/js/lib/leaflet-snap/leaflet.snap.js',
    '/js/lib/leaflet-vector-grid/Leaflet.VectorGrid.bundled.min.js',
    '/js/lib/es6-shim/es6-shim.js',
    '/js/lib/q-cluster/src/utils.js',
    '/js/lib/bootstrap-table/bootstrap-table-locale-all.js',
    '/js/lib/bootstrap-colorpicker/js/bootstrap-colorpicker.js',
    '/js/lib/bootstrap-colorpicker/css/bootstrap-colorpicker.css',
    '/js/lib/bootstrap/dist/css/bootstrap.css',
    '/js/lib/bootstrap-select/bootstrap-select.css',
    '/js/lib/bootstrap-select/bootstrap-select.js',
    '/js/lib/bootstrap-material-datetimepicker/bootstrap-material-datetimepicker.js',
    '/js/lib/bootstrap-material-datetimepicker/bootstrap-material-datetimepicker.css',
    '/js/lib/bootstrap-material-design/dist/js/material.js',
    '/js/lib/bootstrap-material-design/dist/css/bootstrap-material-design.css',
    '/js/lib/bootstrap-material-design/dist/css/ripples.css',
    '/js/lib/bootstrap-material-design/dist/js/ripples.js',
    '/js/lib/hogan.js/hogan-3.0.2.js',
    '/js/lib/bootstrap-table/bootstrap-table.css',
    '/js/lib/bootstrap/dist/css/bootstrap.min.css',
    '/js/lib/q-cluster/css/q-cluster.css',
    '/js/lib/snackbarjs/snackbar.min.css',
    '/js/lib/leaflet-history/leaflet-history.css',
    '/js/lib/leaflet-boxzoom/leaflet-boxzoom.css',
    '/js/lib/leaflet-measure/leaflet-measure.css',
    '/js/lib/leaflet-measure-path/leaflet-measure-path.css',
    '/js/lib/Leaflet.awesome-markers/leaflet.awesome-markers.css',
    '/js/lib/leaflet-draw/leaflet.draw.css',
    '/js/lib/leaflet.locatecontrol/L.Control.Locate.css',
    '/js/lib/leaflet.locatecontrol/L.Control.Locate.js',
    '/js/lib/leaflet.toolbar/leaflet.toolbar.css',
    '/js/lib/leaflet.toolbar/leaflet.toolbar.js',
    '/js/lib/leaflet/leaflet.css',
    '/js/lib/leaflet-measure/leaflet-measure.js',
    '/js/lib/leaflet-measure-path/leaflet-measure-path.js',
    '/js/lib/leaflet.editable/Leaflet.Editable.js',
    '/js/lib/leaflet-draw/leaflet.draw-src.js',
    '/js/lib/Path.Drag.js/src/Path.Drag.js',
    '/js/lib/leaflet/leaflet-src.js',
    '/js/lib/leaflet-measure/images/rulers.png',
    '/js/lib/localforage/localforage.js',
    '/js/templates.js',
    '/js/vidi.js',
    '/locale',
    '/api/config/vidi.json',
    '/js/leaflet-easybutton/easy-button.css',
    '/fonts/roboto-v18-latin-300.woff2',
    '/js/point-clusterer.js',
    '/js/leaflet-easybutton/easy-button.js',
    '/js/proj4js-combined.js',
    '/js/gc2/gc2table.js',
    '/js/gc2/geocloud.js',
    '/js/point-clusterer.js',
    '/js/bundle.js',
    '/js/lib/jquery-ui/jquery-ui.min.css',
    '/css/styles.css',
    '/css/styles.css',
    '/css/font-awesome.v520.regular.css',
    '/css/font-awesome.v520.css',
];

module.exports = urlsToCache;