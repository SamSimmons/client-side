var xhr = require('xhr')
var nasa = require('./views/nasa.hbs')

xhr.get('https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY', function(err, data) {
  if (err) console.log(err) // do something

  // console.log(data.body)
  var result = JSON.parse(data.body)
  
  document.body.innerHTML = nasa(result)
})

