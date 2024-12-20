var wms_layers = [];

var lyr_output_hh_0 = new ol.layer.Image({
                            opacity: 1,
                            title: "output_hh",
                            
                            
                            source: new ol.source.ImageStatic({
                               url: "./layers/output_hh_0.png",
    attributions: ' ',
                                projection: 'EPSG:3857',
                                alwaysInRange: true,
                                imageExtent: [1320048.166046, 5682270.830808, 1325459.530182, 5688304.552465]
                            })
                        });

        var lyr_OpenStreetMap_1 = new ol.layer.Tile({
            'title': 'OpenStreetMap',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' ',
                url: 'https://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });
var format_information_2 = new ol.format.GeoJSON();
var features_information_2 = format_information_2.readFeatures(json_information_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_information_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_information_2.addFeatures(features_information_2);
var lyr_information_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_information_2, 
                style: style_information_2,
                popuplayertitle: "information",
                interactive: true,
                title: '<img src="styles/legend/information_2.png" /> information'
            });
var format_startingandendingsheigth_3 = new ol.format.GeoJSON();
var features_startingandendingsheigth_3 = format_startingandendingsheigth_3.readFeatures(json_startingandendingsheigth_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_startingandendingsheigth_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_startingandendingsheigth_3.addFeatures(features_startingandendingsheigth_3);
var lyr_startingandendingsheigth_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_startingandendingsheigth_3, 
                style: style_startingandendingsheigth_3,
                popuplayertitle: "starting and ending's heigth",
                interactive: true,
                title: '<img src="styles/legend/startingandendingsheigth_3.png" /> starting and ending\'s heigth'
            });
var format_maxandminsheigth_4 = new ol.format.GeoJSON();
var features_maxandminsheigth_4 = format_maxandminsheigth_4.readFeatures(json_maxandminsheigth_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_maxandminsheigth_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_maxandminsheigth_4.addFeatures(features_maxandminsheigth_4);
var lyr_maxandminsheigth_4 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_maxandminsheigth_4, 
                style: style_maxandminsheigth_4,
                popuplayertitle: "max and min's heigth",
                interactive: true,
                title: '<img src="styles/legend/maxandminsheigth_4.png" /> max and min\'s heigth'
            });
var format_itinerary_5 = new ol.format.GeoJSON();
var features_itinerary_5 = format_itinerary_5.readFeatures(json_itinerary_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_itinerary_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_itinerary_5.addFeatures(features_itinerary_5);
var lyr_itinerary_5 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_itinerary_5, 
                style: style_itinerary_5,
                popuplayertitle: "itinerary",
                interactive: true,
                title: '<img src="styles/legend/itinerary_5.png" /> itinerary'
            });

lyr_output_hh_0.setVisible(true);lyr_OpenStreetMap_1.setVisible(true);lyr_information_2.setVisible(true);lyr_startingandendingsheigth_3.setVisible(false);lyr_maxandminsheigth_4.setVisible(false);lyr_itinerary_5.setVisible(true);
var layersList = [lyr_output_hh_0,lyr_OpenStreetMap_1,lyr_information_2,lyr_startingandendingsheigth_3,lyr_maxandminsheigth_4,lyr_itinerary_5];
lyr_information_2.set('fieldAliases', {'id': 'id', '@id': '@id', 'highway': 'highway', 'lanes': 'lanes', 'lit': 'lit', 'maxspeed': 'maxspeed', 'name': 'name', 'oneway': 'oneway', 'smoothness': 'smoothness', 'surface': 'surface', 'left sidewalk (cycle)': 'left sidewalk (cycle)', 'right sidewalk': 'right sidewalk', 'parking on the left': 'parking on the left', 'parking on the right': 'parking on the right', 'length': 'length', 'total length': 'total length', });
lyr_startingandendingsheigth_3.set('fieldAliases', {'fid': 'fid', 'heigth1': 'heigth1', 'diff': 'diff', 'id ': 'id ', });
lyr_maxandminsheigth_4.set('fieldAliases', {'fid': 'fid', 'id': 'id', 'distance': 'distance', 'heigth': 'heigth', });
lyr_itinerary_5.set('fieldAliases', {'fid': 'fid', 'id': 'id', 'description': 'description', 'latitude': 'latitude', 'longitude': 'longitude', 'image': 'image', 'caption': 'caption', 'image   ': 'image   ', 'caption  ': 'caption  ', 'image           ': 'image           ', 'caption                   ': 'caption                   ', 'audio': 'audio', });
lyr_information_2.set('fieldImages', {'id': 'TextEdit', '@id': 'TextEdit', 'highway': 'TextEdit', 'lanes': 'TextEdit', 'lit': 'TextEdit', 'maxspeed': 'TextEdit', 'name': 'TextEdit', 'oneway': 'TextEdit', 'smoothness': 'TextEdit', 'surface': 'TextEdit', 'left sidewalk (cycle)': '', 'right sidewalk': '', 'parking on the left': '', 'parking on the right': '', 'length': 'TextEdit', 'total length': '', });
lyr_startingandendingsheigth_3.set('fieldImages', {'fid': 'TextEdit', 'heigth1': 'TextEdit', 'diff': '', 'id ': '', });
lyr_maxandminsheigth_4.set('fieldImages', {'fid': 'TextEdit', 'id': 'TextEdit', 'distance': 'TextEdit', 'heigth': 'TextEdit', });
lyr_itinerary_5.set('fieldImages', {'fid': 'TextEdit', 'id': 'TextEdit', 'description': 'TextEdit', 'latitude': 'TextEdit', 'longitude': 'TextEdit', 'image': 'ExternalResource', 'caption': 'TextEdit', 'image   ': 'ExternalResource', 'caption  ': 'TextEdit', 'image           ': 'ExternalResource', 'caption                   ': 'TextEdit', 'audio': 'ExternalResource', });
lyr_information_2.set('fieldLabels', {'id': 'inline label - always visible', '@id': 'hidden field', 'highway': 'inline label - visible with data', 'lanes': 'inline label - always visible', 'lit': 'inline label - always visible', 'maxspeed': 'inline label - always visible', 'name': 'hidden field', 'oneway': 'inline label - always visible', 'smoothness': 'inline label - always visible', 'surface': 'inline label - always visible', 'left sidewalk (cycle)': 'inline label - always visible', 'right sidewalk': 'inline label - always visible', 'parking on the left': 'inline label - always visible', 'parking on the right': 'inline label - always visible', 'length': 'inline label - always visible', 'total length': 'no label', });
lyr_startingandendingsheigth_3.set('fieldLabels', {'fid': 'hidden field', 'heigth1': 'no label', 'diff': 'hidden field', 'id ': 'inline label - always visible', });
lyr_maxandminsheigth_4.set('fieldLabels', {'fid': 'hidden field', 'id': 'inline label - always visible', 'distance': 'no label', 'heigth': 'no label', });
lyr_itinerary_5.set('fieldLabels', {'fid': 'hidden field', 'id': 'inline label - always visible', 'description': 'inline label - visible with data', 'latitude': 'hidden field', 'longitude': 'hidden field', 'image': 'inline label - visible with data', 'caption': 'inline label - visible with data', 'image   ': 'inline label - visible with data', 'caption  ': 'inline label - visible with data', 'image           ': 'inline label - visible with data', 'caption                   ': 'inline label - visible with data', 'audio': 'inline label - visible with data', });
lyr_itinerary_5.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});