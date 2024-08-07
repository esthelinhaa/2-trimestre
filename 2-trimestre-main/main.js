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
                afirmação:"A IA é habilidosa em lidar com tarefas rotineiras e previsíveis. Ela não se cansa, não comete erros por distração e pode executar essas tarefas de forma consistente e rápida."
            },
            {
                Text:"Vai tirar muitos empregos",
                afirmação:"Em vez de pensar na automação como uma ameaça, podemos considerá-la como uma mudança no cenário profissional.                "
            },
        ]
    },
    {
        enunciado: "A IA pode tomar decisões baseadas em dados.",
        alternativas: [
       
            
            {
                Text:"Vai ser maravilhoso",
                afirmação:"IA pode processar enormes quantidades de dados em tempo recorde. Ela não se deixa levar por emoções ou preconceitos."
            },
            {
                Text:"Vai ser assustador",
                afirmação:"Isso pode ser assustador quando pensamos em decisões que afetam vidas, como diagnósticos médicos ou aprovações de crédito."
            }
        ],

    },
    {
        enunciado: "A IA pode substituir certos empregos.",
        alternativas: [
            
            {
                Text:"Não vejo problemas",
                afirmação:"A automação impulsionada pela IA está mudando a paisagem profissional. Tarefas repetitivas e previsíveis estão sendo gradualmente assumidas por máquinas.                "
            },
            {
                Text:"É o fim dos empregos como conheçemos hoje",
                afirmação:"A automação e a IA estão transformando o cenário de empregos, mas não necessariamente significam o fim de todos os empregos.                "
            }
        ],
    },
    {
        enunciado: "A IA pode ajudar a prever tendências de mercado.",
        alternativas: [
           
          
            
            {
                Text:"Vai ser incrivel",
                afirmação:"A IA pode processar enormes volumes de dados em tempo real. Ela examina padrões, correlações e mudanças sutis que seriam impossíveis para um ser humano acompanhar.                "
            },
            {
                Text:"Vai ser sinistro",
                afirmação:"No entanto, o mercado financeiro é complexo e muitas vezes imprevisível. Mesmo a IA não pode prever eventos inesperados, como crises econômicas ou pandemias."
            }
        ],
    },
    {
        enunciado: "A IA pode trabalhar 24/7 sem pausas.",
        alternativas: [
    
            {
                Text:"Vai ser surpreendente",
                afirmação:"Enquanto nós, seres humanos, precisamos de pausas para descansar, tomar café e recarregar nossas energias, a IA não tem essas limitações.                "
            },
            {
                Text:"É uma mão de obra barata",
                afirmação:"A questão é como equilibramos essa eficiência com a responsabilidade ética. A IA não deve ser apenas uma ferramenta de corte de custos, mas sim uma aliada na busca por melhores resultados.                "
            }
        ],
    }
];

var posiçãoAtual = 0;
var perguntaAtual;

mostraPergunta();

function mostraPergunta(){
    if (atual >= perguntas.length){
        mostraResultado();
        return;
    }
    perguntaAtual = perguntas[posiçãoAtual];
    cxPerguntas.textContent = perguntaAtual.enunciado
    mostraAlternativas();
}

function mostraAlternativas() {
    for (var alternativa of perguntaAtual.alternativas) {
        var botaoAlternativas = document.createElement("button");
        botaoAlternativas.textContent = alternativa;
        cxAlternativas.appendChild(botaoAlternativas);
    }
}