const faqs = [{
                question:'Como agendar uma consulta',
                answer:'Para agendar uma consulta pode ligar para o nosso contacto telefónico. Se preferir pode enviar um e-mail ou preencher o formulário em “marcar consulta”, e assim ser contactado no prazo de 24h.'
                },
                {
                    question:'O que esperar da primeira consulta',
                    answer:'Na primeira consulta será atendido pelo psicólogo com quem agendou a consulta. Será convidado a contar o que o levou a procurar o Psic Center, as suas preocupações e experiências de vida, assim como as suas expetativas. O psicólogo irá recolher alguns dados sobre si, nomeadamente o seu nome completo, a sua morada, os seus contactos e o seu número de Bilhete de Identidade para a faturação do serviço prestado. A consulta tem a duração de 50 minutos. '
                },
                {
                    question:'Cancelamento e Sessões perdidas',
                    answer:`Quando o cliente procede ao agendamento, automaticamente reservamos um momento para si. Caso não possa comparecer, é necessário avisar o terminal de marcações de consultas do Psic Center (Centro de Psicologia), até 24 horas antes da hora agendada. 
                    Os nossos serviços permitem atendimento sem sair de casa. Se optar por consultas online, (deverá ter uma boa ligação à internet, webcam, som e microfone). 
                    
                     `
                },
                {
                        question:'Qual é a política de gestão de faltas do PsicCenter',
                        answer:'Quando as consultas são agendadas, esse momento está reservado para si. Caso não possa comparecer, é necessário avisar o seu psicólogo até 24h antes da hora agendada. Um prazo inferior a 24h não permite que o psicólogo consiga reagendar essa hora com um outro paciente e por essa razão terá que ser pago o valor da consulta. '
                },
                {
                    question:'O que devo fazer se não puder ir a uma sessão que já estava marcada',
                    answer:'Se não puder ir a uma sessão que já estava marcada deve avisar o terminal de marcações do PsicCenter e ser-lhe-á proposto um outro dia e hora para repor a sessão em falta. Na impossibilidade de se encontrar um horário alternativo, a consulta não será realizada, e será ou não cobrada consoante o tempo que tiver dado de pré-aviso. '
                 },
                 {
                question:'O que é o contrato terapêutico',
                answer:'O contrato terapêutico é o acordo que o paciente e o psicólogo fazem relativamente ao processo terapêutico. Ou seja, em conjunto, paciente e terapeuta combinam o número de sessões por semana, o preço por sessão, o horário estabelecido e as normas relativas às faltas e interrupções das sessões. Uma vez estabelecido, o contrato terapêutico deve ser escrupulosamente cumprido tanto pelo psicólogo como pelo paciente. '
                 },
                {
                question:'Aquilo que disser numa consulta será confidencial',
                answer:'Sim. Tudo aquilo que disser a um psicólogo numa sessão será totalmente confidencial. O Psic Center rege-se pelas normas e princípios éticos e deontológicos estabelecidos no Código Deontológico da Ordem dos Psicólogos de Angola. O psicólogo está eticamente obrigado a manter em rigoroso sigilo tudo aquilo que lhe disser. Apenas poderá revelar alguma informação a outras pessoas caso o peça ou em total concordância consigo. '
                 },
                {
                question:'O que é psicoterapia',
                answer:'A psicoterapia tem como finalidade auxiliar o paciente a lidar com as suas emoções e com os seus conflitos, promovendo o aumento do auto-conhecimento criando uma maior adaptação pessoal e social. A psicoterapia utiliza técnicas e intervenções psicológicas, com o objetivo de regular as suas necessidades psicológicas e o seu bem-estar e, assim, restabelecer a qualidade de vida. '
                },
                {
                    question:'Quantas consultas ou sessões são precisas para resolver um problema',
                    answer:'Não é possível saber no início do processo terapêutico, o número exato de sessões necessárias. Irá depender de diversos fatores, tais como: o problema em si, a variedade e a complexidade do que está na origem do sofrimento da pessoa e a capacidade de mudança (que inclui a motivação para o tratamento e a qualidade da relação estabelecida). '
                },
                {
                    question:'Porque é que a psicoterapia pode ser um processo longo',
                    answer:'A psicoterapia pode ser um processo longo porque não há uma mudança rápida nem fácil na mente humana. Todos nos habituamos a ver o mundo de uma determinada maneira e a sentir certas emoções como boas ou más. Ao longo da nossa vida vamos criando padrões que vão ficando mais intrínsecos em nós e promover a modificação desses padrões é algo que demora tempo, variando de pessoa para pessoa. É importante ver a psicoterapia como um espaço de reflexão e como um investimento em si. O tempo necessário para alcançar a mudança que se deseja é proveitoso e benéfico a longo prazo, visto que os resultados alcançados após o processo terapêutico são estáveis e duradouros.'
                },
                {
                    question:'Nas consultas de psicologia são receitados medicamentos',
                    answer:'Não, nas consultas de psicologia nunca são receitados medicamentos. Se a pessoa pretende ser medicada deverá ser consultado por um psiquiatra. '
                },
                {
                    question:'Qual a diferença entre psicólogos e psiquiatras',
                    answer:'Os psicólogos são profissionais com formação superior em psicologia, habilitados a ajudar as pessoas nas suas dificuldades psicológicas e emocionais. Entendem os problemas psicológicos enquanto consequências de experiências de vida, relacionadas com a forma como foi construída a sua forma de lidar consigo e com os outros. No processo psicoterapêutico exploram-se novas abordagens e estratégias para superar esses problemas psicológicos, sem recurso a medicamentos. Os psiquiatras são médicos de formação que se especializam em Psiquiatria (identificação, diagnóstico e tratamento medicamentoso das perturbações mentais). E abordam-nas considerando-as resultado de modificações bioquímicas cerebrais, prescrevendo medicamentos para repor o seu equilíbrio psíquico. Psiquiatras e psicólogos trabalham muitas vezes em parceria. Por um lado, os psiquiatras medicam o paciente, garantindo um equilíbrio bioquímico, e por outro lado, os psicólogos apoiam o paciente na exploração de novas perspetivas para que seja cada vez mais capaz de regular as suas necessidades psicológicas e atingir o seu bem-estar. '
                }
]

let maindiv = document.querySelector('.maincontent')
faqs.forEach(elem =>{
    let divs = document.createElement('div')
    divs.classList.add('questionsdiv')
    divs.innerHTML = `
    <div id="quest" class="questions">
        <div class="questandlogo">
            <img src="../Pictures/icons8-question-mark-100.png" alt="">
            <p id="titles">${elem.question}</p>
        </div>
        <div class="buttonchange">
            <img id="buttons" src="../Pictures/icons8-down-100.png" alt="">
        </div>
    </div>
    <div id="answer" class="answer">
    ${elem.answer}
    </div> `
    maindiv.appendChild(divs)
})


function change(){
    const questionDiv = event.currentTarget;
    const answerDiv = questionDiv.children[1];
    const button = questionDiv.querySelector('.buttonchange img');
    answerDiv.classList.toggle('active');
    questionDiv.querySelector('.questandlogo p').classList.toggle('activecolor');
    button.classList.toggle('activedeg');
}

let Btn = document.querySelectorAll('.questionsdiv')
Btn.forEach(elem =>{
    elem.addEventListener('click',change)
})



let search = document.querySelector('.pesquisar')
const updatereal =  () =>{
    maindiv.innerHTML=''
    faqs.forEach(elem=>{
        if(elem.question.toLowerCase().includes(search.value) || elem.question.toUpperCase().includes(search.value)){
            let divs = document.createElement('div')
        divs.classList.add('questionsdiv')
        divs.innerHTML = `
        <div id="quest" class="questions">
            <div class="questandlogo">
                <img src="../Pictures/icons8-question-mark-100.png" alt="">
                <p id="titles">${elem.question}</p>
            </div>
            <div class="buttonchange">
                <img id="buttons" src="../Pictures/icons8-down-100.png" alt="">
            </div>
        </div>
        <div id="answer" class="answer">
        ${elem.answer}
        </div> `
        maindiv.appendChild(divs)
        }   
    })
} 
search.oninput=updatereal
let searchlogo = document.querySelector('.searchlogo')
const opensearch = () =>{
    search.classList.toggle('pesquisaractive')
}
searchlogo.addEventListener('click', opensearch)

let header = document.getElementById('header')
window.addEventListener('scroll',()=>{
    window.pageYOffset > 0? header.classList.add('scrolling'):header.classList.remove('scrolling')
})



