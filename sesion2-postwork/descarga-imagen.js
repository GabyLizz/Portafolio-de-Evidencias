var fs = require('fs');
var https = require('https');

// Función ejemplo para guardar una imagen de una url externa
function descargarImagen(url, localPath) {
  var fullUrl = url;
  var file = fs.createWriteStream(localPath);
  var request = https.get(url, function (response) {
    response.pipe(file);
  });
}

module.exports = descargarImagen();