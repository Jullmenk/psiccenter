const ourteam = document.querySelector('.members')

const members = [
    {
        name:`José Damião`,
        picture:`joao.jpeg`,
        text:`Licenciado em Psicologia Clínica pela Universidade Privada de Angola (CEP.00103), Pós-Graduado em Formação Avançada de Intervenção em Psicologia Clínica e da Saúde, pela CESPU, Mestre em Psicologia Social pela Universidade Dr. António Agostinho Neto e Especialista em Psicoterapias Cognitivo-Comportamental pela Universidade Católica de Angola. `,
    },
    {
        name:`Hérman Manuel`,
        picture:`herman.png`,
        text:`Licenciado em Psicologia Criminal pela Universidade Dr. Agostinho Neto, Faculdade de Ciências Sociais. `,
        code:1
    },
    {
        name:`Erick de Oliveira`,
        picture:`erick.jpeg`,
        text:`Licenciado em Psicologia Clínica pela Universidade Óscar Ribas .`,
        code:2
    },
    {
        name:`Ernestina Manuel`,
        picture:`ernestina.jpeg`,
        text:`Licenciada em Psicóloga Clínica, Mestre em Psicologia Social pela Universidade Dr. António Agostinho Neto, Mestre em Saúde e Intervenção Comunitária, e Pós-Graduada em Avaliação Psicológica pelo Instituto Superior Piaget em Viseu/Portugal, Pós-Graduada em Formação Avançada de Intervenção em Psicologia Clínica e da Saúde, pela CESPU, Pós-Graduada em Terapia Familiar Sistémica. `,           
        code:1
    },
    {
        name:`Hamilton Aliado`,
        picture:`hamilton.jpeg`,
        text:`Licenciado em Psicologia do Trabalho, pelo Instituto Superior Kalandula de Angola.`,
        code:2
    },
    {
        name:`Kelson Daniel`,
        picture:`kelson.jpeg`,
        text:`Licenciado em Psicologia Clínica, pelo Instituto Superior Kalandula de Angola.`,
        code:1
    },
    {
        name:`João David Domingos`,
        picture:`damiao.jpeg`,
        text:`Licenciado em Psicologia Clínica pela Universidade Privada de Angola (CEP.00101), Pós-Graduado em Formação Avançada de Intervenção em Psicologia Clínica e da Saúde, pela CESPU e Mestre em Psicologia Social, pela Universidade Dr. António Agostinho Neto e Especialista em Psicoterapias Cognitivo-Comportamental pela Universidade Católica de Angola. `,
        code:2
    },
]

members.forEach((elem,index)=>{
    let member = document.createElement('div')
    let memberclass=elem.code==1?'members2':'member'
    let seta = elem.code==1?'topset':'downset'
    member.classList.add(memberclass,`number${index}`,'numb')
    member.innerHTML=`<img src="../Pictures/${elem.picture}" alt="">
    <div class="memberinfo">
        <h1>
            ${elem.name}
        </h1>
        <p>
            ${elem.text}
        </p>
        <p class="${seta}">
        >
        </p>
    </div>`
    ourteam.append(member)
})

const numbclasses = document.querySelectorAll('.numb')

numbclasses.forEach(elem=>{
    elem.addEventListener('mouseenter',()=>{
        numbclasses.forEach(lee=>{
            lee.classList.add('mousing')
        })
        event.target.classList.remove('mousing')
    })
    elem.addEventListener('mouseleave',()=>{
        numbclasses.forEach(lee=>{
            lee.classList.remove('mousing')
        })
    })
})

