const https = require('https');
const fs = require('fs');
const path = require('path');

function getAPOD() {
  https
    .get('https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY', (resp) => {
      let data = '';

      resp.setEncoding('utf8');
      //trozos de información recibida
      resp.on('data', (chunk) => {
        data += chunk;
      });

      // La respuesta completa ha sido recibida. Imprime el resultado
      resp.on('end', () => {
        let body = JSON.parse(data);
        console.log(body);
        console.log(' Título:', body.explanation);
        console.log('\n Explicación', body.explanation);
        console.log('\n URL:', body.url);

        titulo = `${body.title}.jpeg`;
        url = body.url;

        fs.writeFile(
          path.join(__dirname, 'img', titulo),
          url,
          { encoding: 'utf-8' },
          (err) => {
            if (err) throw err;
            console.log('writeFile:', 'Archivo creado!');
          }
        );
      });
    })
    .on('error', (err) => {
      console.log('Error: ' + err.message);
    });
}

getAPOD();