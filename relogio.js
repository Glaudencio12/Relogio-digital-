setInterval(time, 1000)
var relogio = window.document.getElementById("relogio")

function time() {
    let time = new Date()
    let hora = time.getHours()
    let minutos = time.getMinutes()
    let segundos = time.getSeconds()
    am_pm = ""
  
    if (hora > 12) {
        hora -= 12;
        am_pm = "pm"
    }
    if (hora == 0) {
        hora = 12;
        am_pm = "am"
    }
  
    hora = hora < 10 ? "0" + hora : hora
    minutos = minutos < 10 ? "0" + minutos : minutos
    segundos = segundos < 10 ? "0" + segundos : segundos
  
    var final = hora + ":"  + minutos + ":" + segundos + am_pm
    relogio.innerHTML = final
}
time()