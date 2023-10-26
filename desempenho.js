var NumJobs = document.querySelector('#NumJobs')
var NumPropostas = document.querySelector('#NumPropostas')
var Cpercent = document.querySelector('#Cpercent')
var NumPercent = document.querySelector('#numPercent')

function removerParentese1(){
    var numeroSemParenteses1 = NumJobs.innerHTML.replace(/\D/g, ''); // Remove todos os não dígitos
    var numero1 = Number(numeroSemParenteses1);
    NumJobs = numero1
    var numeroSemParenteses2 = NumPropostas.innerHTML.replace(/\D/g, ''); // Remove todos os não dígitos
    var numero2 = Number(numeroSemParenteses2);
    NumPropostas = numero2

    var step1 = NumJobs*100
    var fatorY = step1/NumPropostas

    var TotalDashArray = 440
    var porcento100 = 100

    var Parte1 = TotalDashArray*fatorY
    var NewDashOffset = Parte1 / porcento100

    var step2 = NewDashOffset * porcento100
    var NewPorcentagem = step2 / TotalDashArray
    var resultado = NewPorcentagem.toFixed(1)
    NumPercent.innerHTML = resultado+'%'

    Cpercent.style.strokeDashoffset = TotalDashArray - NewDashOffset
    Cpercent.style.transition = '1s'

}
window.addEventListener('load', removerParentese1)