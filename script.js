var ContainerTrabalhos = document.querySelector('#trabalhos')//os elemento serão anexados nesse


var NumJobs = document.querySelector('#NumJobs')

var NumTratado = NumJobs.innerHTML.replace(/\D/g, ''); // Remove todos os não dígitos
var numCards = Number(NumTratado);

function AdicionarElementos(){
    for( i = 0; i < numCards; i++){
        var trabalhos = document.createElement('div')
        trabalhos.setAttribute('id', 'cardTrabalho'+ i)
        trabalhos.setAttribute('class', 'CardTrabalhoClass')
        ContainerTrabalhos.appendChild(trabalhos)
        
        var DadosTrabalho = document.createElement('div')//as três primeiras palavras
        DadosTrabalho.setAttribute('id', 'DadosTrabalho')
        var ValorRecebido = document.createElement('div')//aqui está os valores recebidos por trabalho
        ValorRecebido.setAttribute('id', 'ValorRecebido')

        var DadosJob = document.createElement('div')
        var DadosClient = document.createElement('div')
        var DadosData = document.createElement('div')
        DadosData.setAttribute('id', 'DadosData')
        var DadosValor = document.createElement('div')

        var numero = i + 1
        DadosJob.innerHTML = 'Job '+ numero
        DadosClient.innerHTML = 'Client' + numero
        DadosData.innerHTML = '__/__/____'
        DadosValor.innerHTML = '$00,00'

        
        trabalhos.appendChild(DadosTrabalho)
        trabalhos.appendChild(ValorRecebido)
        DadosTrabalho.appendChild(DadosJob)
        DadosTrabalho.appendChild(DadosClient)
        DadosTrabalho.appendChild(DadosData)
        ValorRecebido.appendChild(DadosValor)
    }    
}
window.addEventListener('load', AdicionarElementos)