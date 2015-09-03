
// topmenu affixed
$('#top-menu').affix({
    offset: {
        top: $('header').height()
    }
});

// scrollspy
$('body').scrollspy({
    target: '.navbar-collapse',
    offset: 100
});

// back-to-top button
$('body').scrollToTop({
    skin: 'cycle'
});

$(function() {

    // Initialize map
    var map = new L.Map('map').setView([-17.4000297, -66.165431], 14);

    /* Basemap Layers */
    var tileLayerData = {
      mapsurfer: {
        name: 'OpenMapSurfer',
        url: 'http://openmapsurfer.uni-hd.de/tiles/roads/x={x}&y={y}&z={z}',
        attribution: '<a href="http://giscience.uni-hd.de/" target="_blank">GIScience</a>',
        zoom: 19,
        default: true
      },
      satellite: {
        name: 'Satelite',
        url: 'http://{s}.tiles.mapbox.com/v3/51114u9.kogin3jb/{z}/{x}/{y}.png',
        attribution: '<a href="http://mapbox.com/" target="_blank">MapBox</a>',
        zoom: 17
      },
      hotosm: {
        name: 'Humanitario',
        url: 'http://{s}.tile.openstreetmap.fr/hot/{z}/{x}/{y}.png',
        attribution: '<a href="http://hot.openstreetmap.org/" target="_blank">HOTOSM</a>',
        zoom: 20
      },
      osmfr: {
        name: 'OSM Francia',
        url: 'http://{s}.tile.openstreetmap.fr/osmfr/{z}/{x}/{y}.png',
        attribution: '<a href="http://openstreetmap.fr/" target="_blank">OSM Francia</a>',
        zoom: 20
      },
      transport: {
        name: 'Transporte Público',
        url: 'http://{s}.tile.thunderforest.com/transport/{z}/{x}/{y}.png',
        attribution: '<a href="http://thunderforest.com/transport/" target="_blank">ThunderForest</a>',
        zoom: 20
      }
    };

    var attribution = 'Map data &#169; <a href="http://osm.org/copyright" target="_blank">OpenStreetMap</a> contributors';

    var tileLayers = {};
    var tileLayerDefault = '';

    for (tile in tileLayerData) {
      if (0 == tileLayerDefault.length)
        tileLayerDefault = tileLayerData[tile].name;
      if (tileLayerData[tile].default)
        tileLayerDefault = tileLayerData[tile].name;

      var tileAttribution = attribution + ' &mdash; ' + 'Tiles from ' + tileLayerData[tile].attribution;
      var tileSubDomains = tileLayerData[tile].subdomains ? tileLayerData[tile].subdomains : 'abc';
      var tileMaxZoom = tileLayerData[tile].zoom;

      tileLayers[tileLayerData[tile].name] = L.tileLayer(
        tileLayerData[tile].url, {
          maxZoom: 20,
          maxNativeZoom: tileMaxZoom,
          attribution: tileAttribution,
          subdomains: tileSubDomains
      });
    }

    tileLayers[tileLayerDefault].addTo(map);
    L.control.layers(tileLayers).addTo(map);

    // Define marker
    var marker = L.marker([-17.40003, -66.16543], {
        icon: L.icon({
            iconUrl: "img/favicon/favicon-32x32.png",
            iconSize: [32, 32]
        })
    }).addTo(map);

});



