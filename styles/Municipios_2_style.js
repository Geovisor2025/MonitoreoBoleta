var size = 0;
var placement = 'point';

var style_Municipios_2 = function(feature, resolution){
    var context = {
        feature: feature,
        variables: {}
    };
    
    var labelText = ""; 
    var value = feature.get("");
    var labelFont = "19.5px \'Open Sans\', sans-serif";
    var labelFill = "#ff7f00";
    var bufferColor = "#fafafa";
    var bufferWidth = 3.0;
    var textAlign = "left";
    var offsetX = 0;
    var offsetY = 0;
    var placement = 'point';
    if (feature.get("municipio") !== null && resolution > 11 && resolution < 140) {
        labelText = String(feature.get("municipio"));
    }
    var style = [ new ol.style.Style({
        stroke: new ol.style.Stroke({color: 'rgba(235,94,12,1.0)', lineDash: [10.639999999999999,5.319999999999999], lineCap: 'square', lineJoin: 'bevel', width: 2.6599999999999997}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];

    return style;
};
