mapboxgl.accessToken =
  "pk.eyJ1IjoibHRkZWJlbGVuIiwiYSI6ImNrNXR3dnI5ZDBkbnAzZWswcnhiZGdreW4ifQ.A1lEOQax-dFQIcsfH0HtRg";
var map = new mapboxgl.Map({
  container: "map",
  style: "mapbox://styles/ltdebelen/ck5vptaqe5dlk1is7zm67z8eg",
  center: [-94.578331, 39.099724],
  zoom: 12
});

var marker = new mapboxgl.Marker()
  .setLngLat([-94.578331, 39.099724])
  .addTo(map);

var geocoder = new MapboxGeocoder({
  // Initialize the geocoder
  accessToken: mapboxgl.accessToken, // Set the access token
  placeholder: "Search for book stores in KC",
  mapboxgl: mapboxgl, // Set the mapbox-gl instance
  marker: false, // Do not use the default marker style
  bbox: [-94.613789, 38.883686, -94.586323, 39.343992], //boundaries for KC
  proximity: {
    longitude: -94.578331,
    latitutde: 39.099724
  }
});

// Add the geocoder to the map
map.addControl(geocoder);

// After the map style has loaded on the page,
// add a source layer and default styling for a single point
map.on("load", function() {
  map.addSource("single-point", {
    type: "geojson",
    data: {
      type: "FeatureCollection",
      features: []
    }
  });

  map.addLayer({
    id: "point",
    source: "single-point",
    type: "circle",
    paint: {
      "circle-radius": 10,
      "circle-color": "#448ee4"
    }
  });

  // Listen for the `result` event from the Geocoder
  // `result` event is triggered when a user makes a selection
  //  Add a marker at the result's coordinates
  geocoder.on("result", function(e) {
    map.getSource("single-point").setData(e.result.geometry);
  });
});
