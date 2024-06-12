const caixaPrincipal = document.querySelector(".caixa-principal");
const caixaPerguntas = document.querySelector(".caixa-perguntas");
const caixaAlternativas = document.querySelector(".caixa-alternativas");
const caixaResultado = document.querySelector(".caixa-resultado");
const textoResultado = document.querySelector(".texto-resultado");

const perguntas = [
    {
        enunciado: "O que causa a maioria dos tsnamis?",
        alternativas: [
            {
                texto: "A maioria dos tsunamis é causada por terremotos submarinos. quando as aplacas tectonicas se movem abruptamente sobre o oceano elas podem deslocar grandes volumes de agua criando ondas que se propagam em todas as direções. ",
                afirmacao: "Os tsunamis ocorrem geralmente nas bordas das placas tectonicas. E o oceano pacifico é um grande exemplo disso, onde é um local muito comun de ver esse evento."
            },
            {
                texto: "Além de terremotos, tsunamis podem ser gerados por erupções vulcanicas, delizamento de terras ou impacxto de meteoritos no oceano. Esses eventos pertubam a agua e criam ondas de tmanho variavel que viajam longas distâncias ",
                afirmacao: "Os tsunamis quando percorrem grandes distâncias eles perdem uma boa parte da força ou até mesmo se desfazem antes da costa."
            }
        ]
    },
    {
        enunciado: "Quais são os sinais de alerta de um tsunami eminente?",
        alternativas: [
            {
                texto: "Um sinal de aleta de um tsunami pode ser um recuo excessivo da água na praia. Isso acontece porque a agua é atraída para trás antes da chegada das ondas do tsunami, o que pode ser um avison natural para as pessoas se afastarem da costa.  ",
                afirmacao: "Também durante um pré tsunami é possível notar um comportamento agitado das aves que localizam na praia."
            },
            {
                texto: "Outra sinal pode ser um terremoto forte e prolongado em áreas costeiras, e especialmete localizado no fundo do mar. Terremotos são os principais causadores de tsunamis, e sentir o chão tremer pode ser um indicativo de que um tsunami pode acontecer. ",
                afirmacao: "Apesar de alguns terremotos serem imperceptiveis, existem tecnologias que auxíliam no aviso de um possível tsunami"
            }
        ]
    },
    {
        enunciado: "Após a elaboração do trabalho escrito, a professora realizou um debate entre a turma para entender como foi realizada a pesquisa e escrita. Nessa conversa também foi levantado um ponto muito importante: como a IA impacta o trabalho do futuro. Nesse debate, como você se posiciona?",
        alternativas: [
            {
                texto: "Defende a ideia de que a IA pode criar novas oportunidades de emprego e melhorar habilidades humanas.",
                afirmacao: "afirmação"
            },
            {
                texto: "Me preocupo com as pessoas que perderão seus empregos para máquinas e defendem a importância de proteger os trabalhadores.",
                afirmacao: "afirmação"
            }
        ]
    },
    {
        enunciado: "Ao final da discussão, você precisou criar uma imagem no computador que representasse o que pensa sobre IA. E agora?",
        alternativas: [
            {
                texto: "Criar uma imagem utilizando uma plataforma de design como o Paint.",
                afirmacao: "afirmação"
            },
            {
                texto: "Criar uma imagem utilizando um gerador de imagem de IA.",
                afirmacao: "afirmação"
            }
        ]
    },
    {
        enunciado: "Você tem um trabalho em grupo de biologia para entregar na semana seguinte, o andamento do trabalho está um pouco atrasado e uma pessoa do seu grupo decidiu fazer com ajuda da IA. O problema é que o trabalho está totalmente igual ao do chat. O que você faz? ",
        alternativas: [
            {
                texto: "Escrever comandos para o chat é uma forma de contribuir com o trabalho, por isso não é um problema utilizar o texto inteiro.",
                afirmacao: "afirmação"
            },
            {
                texto: "O chat pode ser uma tecnologia muito avançada, mas é preciso manter a atenção pois toda máquina erra, por isso revisar o trabalho e contribuir com as perspectivas pessoais é essencial.",
                afirmacao: "afirmação"
            }
        ]
    },
];


let atual = 0;
let perguntaAtual;
let historiaFinal = "";

function mostraPergunta() {
    if (atual >= perguntas.length) {
        mostraResultado();
        return;
    }
    perguntaAtual = perguntas[atual];
    caixaPerguntas.textContent = perguntaAtual.enunciado;
    caixaAlternativas.textContent = "";
    mostraAlternativas();
}

function mostraAlternativas(){
    for(const alternativa of perguntaAtual.alternativas) {
        const botaoAlternativas = document.createElement("button");
        botaoAlternativas.textContent = alternativa.texto;
        botaoAlternativas.addEventListener("click", () => respostaSelecionada(alternativa));
        caixaAlternativas.appendChild(botaoAlternativas);
    }
}

function respostaSelecionada(opcaoSelecionada) {
    const afirmacoes = opcaoSelecionada.afirmacao;
    historiaFinal += afirmacoes + " ";
    atual++;
    mostraPergunta();
}

function mostraResultado() {
    caixaPerguntas.textContent = "Em 2049...";
    textoResultado.textContent = historiaFinal;
    caixaAlternativas.textContent = "";
}

mostraPergunta();
