var cxPrincipal = document.querySelector(".cx-principal");
var cxPerguntas = document.querySelector(".cx-perguntas");
var cxAlternativas = document.querySelector(".cx-alternativas");
var cxResultado = document.querySelector(".cx-resultado");
var txResultado = document.querySelector(".tx-resultado");
var perguntas = [
    {
        enunciado: "A IA pode automatizar tarefas repetitivas.",
        alternativas: [

            {
                Text:"Vai eliminar tarefas motonas",
                afirmação:""
            },
            {
                Text:"Vai tirar muitos empregos",
                afirmação:""
            },
        ]
    },
    {
        enunciado: "A IA pode tomar decisões baseadas em dados.",
        alternativas: [
       
            
            {
                Text:"Vai ser maravilhoso",
                afirmação:""
            },
            {
                Text:"Vai ser assustador",
                afirmação:""
            }
        ],

    },
    {
        enunciado: "A IA pode substituir certos empregos.",
        alternativas: [
            
            {
                Text:"Não vejo problemas",
                afirmação:""
            },
            {
                Text:"É o fim dos empregos como conheçemos hoje",
                afirmação:""
            }
        ],
    },
    {
        enunciado: "A IA pode ajudar a prever tendências de mercado.",
        alternativas: [
           
          
            
            {
                Text:"Vai ser incrivel",
                afirmação:""
            },
            {
                Text:"Vai ser sinistro",
                afirmação:""
            }
        ],
    },
    {
        enunciado: "A IA pode trabalhar 24/7 sem pausas.",
        alternativas: [
    
            {
                Text:"Vai ser surpreendente",
                afirmação:""
            },
            {
                Text:"É uma mão de obra barata",
                afirmação:""
            }
        ],
    }
];

var posiçãoAtual = 0;
var perguntaAtual;

mostraPergunta();

function mostraPergunta(){
    perguntaAtual = perguntas[posiçãoAtual];
    cxPerguntas.textContent = perguntaAtual.enunciado;
    mostraAlternativas();
}

function mostraAlternativas() {
    for (var alternativa of perguntaAtual.alternativas) {
        var botaoAlternativas = document.createElement("button");
        botaoAlternativas.textContent = alternativa;
        cxAlternativas.appendChild(botaoAlternativas);
    }
}