var wms_layers = [];


        var lyr_GoogleSatellite_0 = new ol.layer.Tile({
            'title': 'Google Satellite',
            'type':'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' &nbsp &middot; <a href="https://www.google.at/permissions/geoguidelines/attr-guide.html">Map data ©2015 Google</a>',
                url: 'https://mt1.google.com/vt/lyrs=s&x={x}&y={y}&z={z}'
            })
        });
var format_Departamentos_1 = new ol.format.GeoJSON();
var features_Departamentos_1 = format_Departamentos_1.readFeatures(json_Departamentos_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Departamentos_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Departamentos_1.addFeatures(features_Departamentos_1);
var lyr_Departamentos_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Departamentos_1, 
                style: style_Departamentos_1,
                popuplayertitle: 'Departamentos',
                interactive: false,
                title: '<img src="styles/legend/Departamentos_1.png" /> Departamentos'
            });
var format_Municipios_2 = new ol.format.GeoJSON();
var features_Municipios_2 = format_Municipios_2.readFeatures(json_Municipios_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Municipios_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Municipios_2.addFeatures(features_Municipios_2);
var lyr_Municipios_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Municipios_2,
maxResolution:168.0267969135718,
 
                style: style_Municipios_2,
                popuplayertitle: 'Municipios',
                interactive: false,
                title: '<img src="styles/legend/Municipios_2.png" /> Municipios'
            });
var format_PerimetroABA_3 = new ol.format.GeoJSON();
var features_PerimetroABA_3 = format_PerimetroABA_3.readFeatures(json_PerimetroABA_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_PerimetroABA_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_PerimetroABA_3.addFeatures(features_PerimetroABA_3);
var lyr_PerimetroABA_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_PerimetroABA_3, 
                style: style_PerimetroABA_3,
                popuplayertitle: 'Perimetro ABA',
                interactive: true,
                title: '<img src="styles/legend/PerimetroABA_3.png" /> Perimetro ABA'
            });
var format_RECORRIDO_4 = new ol.format.GeoJSON();
var features_RECORRIDO_4 = format_RECORRIDO_4.readFeatures(json_RECORRIDO_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_RECORRIDO_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_RECORRIDO_4.addFeatures(features_RECORRIDO_4);
var lyr_RECORRIDO_4 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_RECORRIDO_4, 
                style: style_RECORRIDO_4,
                popuplayertitle: 'RECORRIDO',
                interactive: true,
    title: 'RECORRIDO<br />\
    <img src="styles/legend/RECORRIDO_4_0.png" /> Muy Baja (9 m. - 200 m.)<br />\
    <img src="styles/legend/RECORRIDO_4_1.png" /> Baja (201 m. - 500 m.)<br />\
    <img src="styles/legend/RECORRIDO_4_2.png" /> Media (501 m. - 2.000 m.)<br />\
    <img src="styles/legend/RECORRIDO_4_3.png" /> Alta (2.001 m. - 10.000 m.)<br />\
    <img src="styles/legend/RECORRIDO_4_4.png" /> Muy Alta (10.000 m. - 144.000 m.)<br />' });
var format_BOLETAUPAFIN_5 = new ol.format.GeoJSON();
var features_BOLETAUPAFIN_5 = format_BOLETAUPAFIN_5.readFeatures(json_BOLETAUPAFIN_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_BOLETAUPAFIN_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_BOLETAUPAFIN_5.addFeatures(features_BOLETAUPAFIN_5);
cluster_BOLETAUPAFIN_5 = new ol.source.Cluster({
  distance: 30,
  source: jsonSource_BOLETAUPAFIN_5
});
var lyr_BOLETAUPAFIN_5 = new ol.layer.Vector({
                declutter: false,
                source:cluster_BOLETAUPAFIN_5, 
                style: style_BOLETAUPAFIN_5,
                popuplayertitle: 'BOLETA UPA FIN',
                interactive: true,
                title: '<img src="styles/legend/BOLETAUPAFIN_5.png" /> BOLETA UPA FIN'
            });
var format_BOLETAUPAINICIO_6 = new ol.format.GeoJSON();
var features_BOLETAUPAINICIO_6 = format_BOLETAUPAINICIO_6.readFeatures(json_BOLETAUPAINICIO_6, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_BOLETAUPAINICIO_6 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_BOLETAUPAINICIO_6.addFeatures(features_BOLETAUPAINICIO_6);
cluster_BOLETAUPAINICIO_6 = new ol.source.Cluster({
  distance: 30,
  source: jsonSource_BOLETAUPAINICIO_6
});
var lyr_BOLETAUPAINICIO_6 = new ol.layer.Vector({
                declutter: false,
                source:cluster_BOLETAUPAINICIO_6, 
                style: style_BOLETAUPAINICIO_6,
                popuplayertitle: 'BOLETA UPA INICIO',
                interactive: true,
                title: '<img src="styles/legend/BOLETAUPAINICIO_6.png" /> BOLETA UPA INICIO'
            });
var format_BOLETAUPAORIGEN_7 = new ol.format.GeoJSON();
var features_BOLETAUPAORIGEN_7 = format_BOLETAUPAORIGEN_7.readFeatures(json_BOLETAUPAORIGEN_7, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_BOLETAUPAORIGEN_7 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_BOLETAUPAORIGEN_7.addFeatures(features_BOLETAUPAORIGEN_7);
cluster_BOLETAUPAORIGEN_7 = new ol.source.Cluster({
  distance: 30,
  source: jsonSource_BOLETAUPAORIGEN_7
});
var lyr_BOLETAUPAORIGEN_7 = new ol.layer.Vector({
                declutter: false,
                source:cluster_BOLETAUPAORIGEN_7, 
                style: style_BOLETAUPAORIGEN_7,
                popuplayertitle: 'BOLETA UPA ORIGEN',
                interactive: true,
                title: '<img src="styles/legend/BOLETAUPAORIGEN_7.png" /> BOLETA UPA ORIGEN'
            });

lyr_GoogleSatellite_0.setVisible(true);lyr_Departamentos_1.setVisible(false);lyr_Municipios_2.setVisible(false);lyr_PerimetroABA_3.setVisible(false);lyr_RECORRIDO_4.setVisible(false);lyr_BOLETAUPAFIN_5.setVisible(false);lyr_BOLETAUPAINICIO_6.setVisible(false);lyr_BOLETAUPAORIGEN_7.setVisible(false);
var layersList = [lyr_GoogleSatellite_0,lyr_Departamentos_1,lyr_Municipios_2,lyr_PerimetroABA_3,lyr_RECORRIDO_4,lyr_BOLETAUPAFIN_5,lyr_BOLETAUPAINICIO_6,lyr_BOLETAUPAORIGEN_7];
lyr_Departamentos_1.set('fieldAliases', {'departamen': 'departamen', });
lyr_Municipios_2.set('fieldAliases', {'id': 'id', 'gid': 'gid', 'c_ut': 'c_ut', 'departamen': 'departamen', 'provincia': 'provincia', 'municipio': 'municipio', 'n°_ley': 'n°_ley', 'fecha_ley': 'fecha_ley', 'zona': 'zona', 'id_ut': 'id_ut', 'bl_comli_m': 'bl_comli_m', 'capital': 'capital', 'c_siot': 'c_siot', 'tioc_aioc': 'tioc_aioc', 'visor': 'visor', });
lyr_PerimetroABA_3.set('fieldAliases', {'Depto.': 'Depto.', 'Provincia': 'Provincia', 'Municipio': 'Municipio', 'Comunidad': 'Comunidad', });
lyr_RECORRIDO_4.set('fieldAliases', {'Productor': 'Productor', 'Recorrido': 'Recorrido', });
lyr_BOLETAUPAFIN_5.set('fieldAliases', {'Productor': 'Productor', 'Estado': 'Estado', });
lyr_BOLETAUPAINICIO_6.set('fieldAliases', {'Productor': 'Productor', 'Estado': 'Estado', });
lyr_BOLETAUPAORIGEN_7.set('fieldAliases', {'Productor': 'Productor', 'Depto': 'Depto', 'Provincia': 'Provincia', 'Municipio': 'Municipio', 'Tipo': 'Tipo', 'Estado': 'Estado', });
lyr_Departamentos_1.set('fieldImages', {'departamen': 'TextEdit', });
lyr_Municipios_2.set('fieldImages', {'id': 'TextEdit', 'gid': 'TextEdit', 'c_ut': 'TextEdit', 'departamen': 'TextEdit', 'provincia': 'TextEdit', 'municipio': 'TextEdit', 'n°_ley': 'TextEdit', 'fecha_ley': 'DateTime', 'zona': 'TextEdit', 'id_ut': 'TextEdit', 'bl_comli_m': 'TextEdit', 'capital': 'TextEdit', 'c_siot': 'TextEdit', 'tioc_aioc': 'TextEdit', 'visor': '', });
lyr_PerimetroABA_3.set('fieldImages', {'Depto.': 'TextEdit', 'Provincia': 'TextEdit', 'Municipio': 'TextEdit', 'Comunidad': 'TextEdit', });
lyr_RECORRIDO_4.set('fieldImages', {'Productor': 'TextEdit', 'Recorrido': 'TextEdit', });
lyr_BOLETAUPAFIN_5.set('fieldImages', {'Productor': 'TextEdit', 'Estado': 'TextEdit', });
lyr_BOLETAUPAINICIO_6.set('fieldImages', {'Productor': 'TextEdit', 'Estado': 'TextEdit', });
lyr_BOLETAUPAORIGEN_7.set('fieldImages', {'Productor': 'TextEdit', 'Depto': 'TextEdit', 'Provincia': 'TextEdit', 'Municipio': 'TextEdit', 'Tipo': 'TextEdit', 'Estado': 'TextEdit', });
lyr_Departamentos_1.set('fieldLabels', {'departamen': 'no label', });
lyr_Municipios_2.set('fieldLabels', {'id': 'no label', 'gid': 'no label', 'c_ut': 'no label', 'departamen': 'no label', 'provincia': 'no label', 'municipio': 'no label', 'n°_ley': 'no label', 'fecha_ley': 'no label', 'zona': 'no label', 'id_ut': 'no label', 'bl_comli_m': 'no label', 'capital': 'no label', 'c_siot': 'no label', 'tioc_aioc': 'no label', 'visor': 'no label', });
lyr_PerimetroABA_3.set('fieldLabels', {'Depto.': 'inline label - always visible', 'Provincia': 'inline label - always visible', 'Municipio': 'inline label - always visible', 'Comunidad': 'inline label - always visible', });
lyr_RECORRIDO_4.set('fieldLabels', {'Productor': 'inline label - always visible', 'Recorrido': 'inline label - always visible', });
lyr_BOLETAUPAFIN_5.set('fieldLabels', {'Productor': 'inline label - always visible', 'Estado': 'inline label - always visible', });
lyr_BOLETAUPAINICIO_6.set('fieldLabels', {'Productor': 'inline label - always visible', 'Estado': 'inline label - always visible', });
lyr_BOLETAUPAORIGEN_7.set('fieldLabels', {'Productor': 'inline label - always visible', 'Depto': 'inline label - always visible', 'Provincia': 'inline label - always visible', 'Municipio': 'inline label - always visible', 'Tipo': 'inline label - always visible', 'Estado': 'inline label - always visible', });
lyr_BOLETAUPAORIGEN_7.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});