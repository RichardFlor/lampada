"use strict"

const lampada = document.getElementById("lampada")

function lampadaInteira(){
    return !lampada.src.includes("quebrada")
}

function botoesLigaDesliga(estadoLiga, estadoDesliga){

const ligar = document.getElementById("ligar")
const desligar = document.getElementById("desligar")
ligar.disabled = estadoLiga
desligar.disabled = estadoDesliga

}

function ligarLampada(){
    if(lampadaInteira()){
    lampada.src="img/ligada.jpg"
    botoesLigaDesliga(true, false)
    }
}

function desligarLampada(){
    if(lampadaInteira()){
    lampada.src="img/desligada.jpg"
    botoesLigaDesliga(false, true)
    }
}
function quebrarLampada(){
    lampada.src="img/quebrada.jpg"
    botoesLigaDesliga(true, true)
}

//eventos
document.getElementById("ligar").addEventListener("click", ligarLampada)
document.getElementById("desligar").addEventListener("click",desligarLampada)

document.getElementById("lampada").addEventListener("mouseover", ligarLampada)
document.getElementById("lampada").addEventListener("mouseout", desligarLampada)
document.getElementById("lampada").addEventListener("dblclick", quebrarLampada)