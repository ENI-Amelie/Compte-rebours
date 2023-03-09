var dateLimite = new Date("jun 15, 2023 23:59:59").getTime();

var x = setInterval(function () {
  var now = new Date().getTime();
  var t = dateLimite - now;
  var jours = Math.floor(t / (1000 * 60 * 60 * 24));
  var heures = Math.floor((t % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutes = Math.floor((t % (1000 * 60 * 60)) / (1000 * 60));
  var secondes = Math.floor((t % (1000 * 60)) / 1000);
  document.getElementById("jour").innerHTML = jours;
  document.getElementById("heure").innerHTML = heures;
  document.getElementById("minute").innerHTML = minutes;
  document.getElementById("seconde").innerHTML = secondes;

  if (t < 0) {
    clearInterval(x);
    document.getElementById("fin").innerHTML = "Finiiiiiiiiiii !!";

    document.getElementById("jour").innerHTML = "0";
    document.getElementById("heure").innerHTML = "0";
    document.getElementById("minute").innerHTML = "0";
    document.getElementById("seconde").innerHTML = "0";
  }
}, 1000);
