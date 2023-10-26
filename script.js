var ContainerTrabalhos = document.querySelector('#trabalhos')
var trabalhos = document.createElement('div')
var trabalhosPart1 = document.createElement('div')
var trabalhosPart2 = document.createElement('div')
var Texto1 = ["job", "client", "date"]
var Texto2 = ["received"]

function AdicionarJobs(){
    ContainerTrabalhos.appendChild(trabalhos)
}
window.addEventListener('load', AdicionarJobs)