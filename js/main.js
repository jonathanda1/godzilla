console.log("JS loaded")

var health = 100
var healthStr = health.toString()
var hit

$('<img id = "hpimg" src="./img/'+healthStr+'.png">').appendTo('#healthbar')

function winCheck () {
  if (health <= 0) {
    $('.container1').hide()
    $('.container2').hide()
    $('.containerWin').show()
    console.log("Godzilla is dead")
  }
}

$(".dmg40").on('click', function(e) {
  hit = 40
  health-=40
  console.log(health)
  $('.container').hide()
  $('#hpimg').remove()
  $('<img id = "hpimg" src="./img/'+health.toString()+'.png">').appendTo('#healthbar')
  winCheck();
})

$(".dmg20").on('click', function(e) {
  hit = 20
  health-=20
  console.log(health)
  $('.container').hide()
  $('.container2').show(400)
  $('#hpimg').remove()
  $('<img id = "hpimg" src="./img/'+health.toString()+'.png">').appendTo('#healthbar')
  winCheck();

})

$(".dmg10").on('click', function(e) {
  hit = 10
  health-=10
  console.log(health)
  $('.container').hide()
  $('#fact1').show(400)
  $('#hpimg').remove()
  $('<img id = "hpimg" src="./img/'+health.toString()+'.png">').appendTo('#healthbar')
  winCheck();

})

$(".dmg0").on('click', function(e) {
  hit = 0
  health-=0
  console.log(health)
  $('.container').hide()
  $('.container2').show(400)
  $('#hpimg').remove()
  $('<img id = "hpimg" src="./img/'+health.toString()+'.png">').appendTo('#healthbar')
  winCheck();

})

$(".Q1").on('click', function(e) {
  $('#fact1').show()
  $('<img src = ./img/'+hit+'dmg.jpg>').appendTo('#fact1')
})

$("#fact1").on('click', function(e) {
  $('')
}

$(".Q2").on('click', function(e) {
  $('#fact2').show()
})

$(".Q3").on('click', function(e) {
  $('#fact3').show()
})

$(".Q4").on('click', function(e) {
  $('#fact4').show()
})

$(".Q5").on('click', function(e) {
  $('#fact5').show()
})
