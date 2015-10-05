var lifx = require('lifx-api');
var client = new lifx(process.env.KEY);

function change() {
  var hue = Math.round(Math.random() * 360);
  var saturation = Math.round(Math.random() * 30) / 100;
  var brightness = "1.0";
  var color = "hue:"+hue+" saturation:"+saturation+" brightness:"+brightness;

  console.log('color', color);

  client.setColor('all', color, 2.0, false, function(body) {
    console.log('> ' + body);
  });
};

change();
