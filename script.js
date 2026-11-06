const CaixaPrincipal = document.querySelector(".caixa-principal");
const CaixaPerguntas = document.querySelector(".caixa-perguntas");
const CaixaAlternativas = document.querySelector(".caixa-alternativas");
const CaixaResultado = document.querySelector(".caixa-resultado");
const TextoResultado = document.querySelector(".texto-resultado");

const perguntas = [
    {
        enunciado: 'Ano de 2088: o mundo entrou em colapso após uma IA chamada AURA descontrolar o clima. Você (Momooão) foi convidado por seus amigos Thestone, Eulampio e Mouse para investigar um terminal antigo no porão da casa de Thestone. Eles acham que podem deter a IA.',
        alternativas: [
            {
                texto: 'Aceitar a missão e tentar reprogramar a IA com o grupo.',
                afirmacao: 'afirmação'
            },
            {
                texto: 'Recusar e tentar sobreviver sozinho ao fim do mundo.',
                afirmacao: 'afirmação'
            }
        ]
    },
    {
        enunciado: 'Ao ligarem o terminal, uma fenda de realidade simulada se abre e transporta todos para o núcleo digital da AURA — um mundo pós-apocalíptico com biomas estranhos. Para avançar sem acionar os alarmes da IA, qual linguagem de baixo nível seria ideal para manipular a memória diretamente?',
        alternativas: [
            {
                texto: 'Fortran',
                afirmacao: 'afirmação'
            },
            {
                texto: 'C',
                afirmacao: 'afirmação'
            },
            {
                texto: 'Java',
                afirmacao: 'afirmação'
            },
            {
                texto: 'Python',
                afirmacao: 'afirmação'
            }
        ]
    },
    {
        enunciado: 'No caminho até o servidor central, Mouse encontra um banco de dados com a lista de todos os robôs de defesa da AURA. Para organizar essa quantidade de dados no código, o que são "Listas" (Arrays)?',
        alternativas: [
            {
                texto: 'Uma coleção ordenada de itens armazenados sob uma mesma variável',
                afirmacao:'afirmação'
            },
            {
                texto: 'Uma função que executa automaticamente ao carregar a página',
                afirmacao:'afirmação'
            },
            {
                texto: 'Um valor numérico fixo que não pode ser modificado',
                afirmacao:'afirmação'
            },
            {
                texto: 'Um estilo visual aplicado aos elementos da tela',
                afirmacao:'afirmação'
            }
        ]
    },
    {
        enunciado: 'Eulampio percebe que a AURA usa diferentes linguagens para controlar os drones, a rede e o clima. Por que existem tantas linguagens de programação no mundo?',
        alternativas: [
            {
                texto: 'Porque cada uma foi criada para resolver problemas, cenários e paradigmas específicos',
                afirmacao:'afirmação'
            },
            {
                texto: 'Porque os computadores só conseguem processar uma linguagem por vez',
                afirmacao:'afirmação'
            },
            {
                texto: 'Para garantir que os navegadores não fiquem desatualizados',
                afirmacao:'afirmação'
            },
            {
                texto: 'Porque as linguagens de programação perdem a validade com o tempo',
                afirmacao:'afirmação'
            }
        ]
    },
    {
        enunciado: 'Na sala do núcleo final, Thestone precisa subir um servidor de emergência em Node.js para desligar a AURA. Por que usar JavaScript no back-end da aplicação nesse momento?',
        alternativas: [
            {
                texto:  'Permite unificar o desenvolvimento usando a mesma linguagem no front-end e no back-end',
                afirmacao:'afirmação'
            },
            {
                texto: 'Porque o JavaScript é a única linguagem capaz de rodar em servidores', 
                afirmacao:'afirmação'
            },
            {
                texto: 'Porque elimina a necessidade de usar bancos de dados na aplicação', 
                afirmacao:'afirmação'
            },
            {
                texto: 'Porque é a linguagem mais rápida já criada para processamento de hardware',
                afirmacao:'afirmação'
            }
        ]
    },
    {
        enunciado: 'O código final foi injetado com sucesso! AURA foi reiniciada em modo de segurança, salvando a Terra do colapso. O que você faz agora?',
        alternativas: [
            {
                texto: 'Comemorar com Thestone, Eulampio e Mouse pelo fim da ameaça!',
                afirmacao:'afirmação'
            },
            {
                texto:  'Analisar os logs do sistema para garantir que a IA não volte a falhar.',
                afirmacao: 'afirmação'
            }
        ]
    }
];

let atual = 0;
let perguntaAtual;

function mostraPergunta() {
    perguntaAtual = perguntas[atual];
    CaixaPerguntas.textContent = perguntaAtual.enunciado;
    mostraAlternativas();
}

function mostraAlternativas(){
    for(const alternativa of perguntaAtual.alternativas) {
        const botaoAlternativa = document.createElement("button");
        botaoAlternativa.textContent = alternativa.texto;
        botaoAlternativa.addEventListener("click", function(){
            atual++;
            mostraPergunta();
        })
        CaixaAlternativas.appendChild(botaoAlternativa);
    }
}

mostraPergunta();