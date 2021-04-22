var url = "https://earthquake.usgs.gov/earthquakes/feed/v1.0/summary/4.5_month.geojson";

d3.json(url).then(function(data){
    createFeatures(data.feautures);
});

function createFeatures(eqData){

    function onEachFeature(feature, layer){
        layer.bindPopup(`<h2>${feature.properties.place}</h2><hr><h3>Time: ${feauture.properties.place}<br>Magnitude: ${feature.properties.mag}`);
    }


    var earthquakes = L.geoJSON(eqData, {
        onEachFeature: onEachFeature
    });

    createMap(earthquakes);
}

function createMap(earthquakes){
    var satMap = L.tileLayer("https://api.mapbox.com/v4/mapbox.satellite/1/0/0@2x.jpg90?access_token=pk.eyJ1IjoiYWxhbm5haG1hcmllIiwiYSI6ImNrbnA2OTZydzFkNTMyd21vdzFqMzZ6dXMifQ.SPq6RqoYv945Bp6prUdoGg"){
        // have to fix the attribution!!
        attribution: "© <a href='https://www.mapbox.com/about/maps/'>Mapbox</a> © <a href='http://www.openstreetmap.org/copyright'>OpenStreetMap</a> <strong><a href='https://www.mapbox.com/map-feedback/' target='_blank'>Improve this map</a></strong>",
        tileSize: 512, 
        maxZoom: 18, 
        zoomOffset: -1,
        id: "mapbox/satellite-v10"
    }



}