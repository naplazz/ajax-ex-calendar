$(document).ready(function() {


  var date = "2018-01-05";
  var moment_date = moment(date);

  var giorni = moment_date.daysInMonth();
  // var mese = moment_date.month()


  for (var i = 1; i <= giorni; i++) {
    $('#giorni').append('<li>'+ i + '</li>')
  }
  $('h1').text(moment_date.format('MMMM')+1);

  $('#successivo').click(function(){

// console.log(moment(moment_date).add(1, 'months').calendar());
console.log(moment_date);

  });












});
// // inizio hendlebars-------------------------
// var source = document.getElementById("entry-template").innerHTML;
// var template = Handlebars.compile(source);
// var context = {
//   mese: mese,
//   giorno: giorni[i],
// };
// var html = template(context);
// $('.entry').text(html)
// // fine hendlebars----------------------------
