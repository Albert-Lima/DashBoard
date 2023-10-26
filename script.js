var ContainerTrabalhos = document.querySelector('#trabalhos')
var trabalhos = document.createElement('div')
var DadosTrabalho = document.createElement('div')
var ValorRecebido = document.createElement('div')
var DJob = document.createElement('div')
var DClient = document.createElement('div')
var DData = document.createElement('div')
var DRecebido = document.createElement('div')

trabalhos.setAttribute('id', 'cardJobs')
DadosTrabalho.setAttribute('id', 'DadosTrabalho')
ValorRecebido.setAttribute('id', 'ValorRecebido')
DData.setAttribute('class', 'dadosJOBS')
DClient.setAttribute('class', 'dadosJOBS')
DJob.setAttribute('class', 'dadosJOBS')
DRecebido.setAttribute('class', 'dadosJOBS')

function adicionarElementos(){
    ContainerTrabalhos.appendChild(trabalhos)
    trabalhos.appendChild(DadosTrabalho)
    trabalhos.appendChild(ValorRecebido)

    DadosTrabalho.appendChild(DJob)
    DadosTrabalho.appendChild(DClient)
    DadosTrabalho.appendChild(DData)
    ValorRecebido.appendChild(DRecebido)

    DJob.innerHTML = 'Job'
    DClient.innerHTML = 'Client'
    DData.innerHTML = 'Data'
    DRecebido.innerHTML = 'Recebido'
}
window.addEventListener('load', adicionarElementos)