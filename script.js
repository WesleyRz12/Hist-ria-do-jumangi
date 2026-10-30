const CaixaPrincipal = document.querySelector(".caixa-principal");
const CaixaPerguntas = document.querySelector(".caixa-perguntas");
const CaixaAlternativas = document.querySelector(".caixa-alternativas");
const CaixaResultado = document.querySelector(".caixa-resultado");
const TextoResultado = document.querySelector(".texto-resultado");

const perguntas = [
    {
        enunciado: 'Você(Momooão) foi convidado por seu amigo Thestone e Eulampio e Mouse a ir para sua casa \n jogar um jogo de tabuleiro que encontrou no porão de sua casa.',
        alternativas: [
            'Você aceita! e começam a jogar',
            'Não aceita!',
        ]
    },
     {
        enunciado: 'Ao começarem a jogar todos ficam desacordados e ao despertar, \n caem em um mundo diferente da realidade \n aonde os animais são diferentes e diversidade de biomas é vasta \n ',
        alternativas: [
            'F',
            'C',
            'Java',
            'Python'
        ]
    },
    {
        enunciado: 'Ao começarem a jogar todos ficam desacordados e ao despertar, \n caem em um mundo diferente da realidade \n aonde os animais são diferentes e diversidade de biomas é vasta \n ',
        alternativas: [
            'F',
            'C',
            'Java',
            'Python'
        ]
    },
    {
        enunciado: 'Listas são como:',
        alternativas: [
            'Uma coleção ordenada de itens armazenados sob uma mesma variável',
            'Uma função que executa automaticamente ao carregar a página',
            'Um valor numérico fixo que não pode ser modificado',
            'Um estilo visual aplicado aos elementos da tela'
        ]
    },
    {
        enunciado: 'Por que existem tantas linguagens de programação ?',
        alternativas: [
            'Porque cada uma foi criada para resolver problemas, cenários e paradigmas específicos',
            'Porque os computadores só conseguem processar uma linguagem por vez',
            'Para garantir que os navegadores não fiquem desatualizados',
            'Porque as linguagens de programação perdem a validade com o tempo'
        ]
    },
    {
        enunciado: 'Por que usamos JavaScript para o back-end do site ao invés de outr linguagem?',
        alternativas: [
            'Permite unificar o desenvolvimento usando a mesma linguagem no front-end e no back-end',
            'Porque o JavaScript é a única linguagem capaz de rodar em servidores',
            'Porque elimina a necessidade de usar bancos de dados na aplicação',
            'Porque é a linguagem mais rápida já criada para processamento de hardware'
        ]
    }
];

let atual = 0;
let perguntaAtual;

function mostraPergunta() {
    perguntaAtual = perguntas[atual];
    CaixaPerguntas.textContent = perguntaAtual.enunciado;
}

mostraPergunta();