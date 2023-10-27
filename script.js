var ContainerTrabalhos = document.querySelector('#trabalhos')//os elemento serão anexados nesse

var ValorRecebido = document.createElement('div')//aqui está os valores recebidos por trabalho
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
        var numero = i + 1
        DadosTrabalho.innerHTML = 'fucionou ' + numero
        trabalhos.appendChild(DadosTrabalho)
    }    
}
window.addEventListener('load', AdicionarElementos)