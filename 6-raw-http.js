const http = require('http');
const url =
  'http://api.weatherstack.com/current?access_key=325d5f8462a2e853d9ba2d344336725f&query=45,-75&units=f';

const request = http.request(url, (response) => {
  let data = '';

  response.on('data', (chunk) => {
    data = data + chunk.toString();
  });

  response.on('end', () => {
    const body = JSON.parse(data);
    console.log(body);
  });
});

request.on('error', (error) => {
  console.log('An error', error);
});

request.end();
