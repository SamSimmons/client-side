var xhr = require('xhr')
var nasa = require('./views/nasa.hbs')
var cat = require('./views/cat.hbs')

xhr.get('https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY', function(err, data) {
  if (err) console.log(err) // do something

  var result = JSON.parse(data.body)
  
  document.querySelector('.wrapper').innerHTML = nasa(result)
})

var catButton = document.querySelector('.cat-btn')
catButton.addEventListener('click', function() {
  xhr.get('http://localhost:3000/v1/cats/', function (err, data) {

    var results = JSON.parse(data.body)
    document.querySelector('.wrapper').innerHTML = cat(results)
    catButton.remove()

  })
})

