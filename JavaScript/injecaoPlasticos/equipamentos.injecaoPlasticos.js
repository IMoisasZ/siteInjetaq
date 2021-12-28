const injecaoPlasticos = [
    { id: 1, qtde: 1, equipamento: 'Injetora Oriente - automática com microprocessador', capacidade: '180/350'},
    { id: 1, qtde: 1, equipamento: 'Injetora Oriente - automática com microprocessador', capacidade: '60/100'},
    { id: 1, qtde: 1, equipamento: 'Injetora PIC - automática',	capacidade: '51/110'},
    { id: 1, qtde: 1, equipamento: 'Injetora Ferbate - automática',	capacidade: '140/160'},
    { id: 1, qtde: 1, equipamento: 'Injetora PIC Petersen - automática', capacidade: '20/70'},
    { id: 1, qtde: 1, equipamento: 'Injetora Sinitron - automática', capacidade: '60/130'},
    { id: 1, qtde: 1, equipamento: 'Injetora Eurostec (BOLE)– automática', capacidade: '140/130'},
    { id: 1, qtde: 1, equipamento: 'Injetora Eurostec (BOLE) – automática',	capacidade: '100/320'},
    { id: 1, qtde: 1, equipamento: 'Injetora Eurostec (BOLE) – automática',	capacidade: '70/160'}
]

const equipInj = document.getElementById('equip-inj')

document.getElementById('inj-equipamento').addEventListener('click', () => {
    equipInj.innerText = ""
    injecaoPlasticos.map(equipamento => {
        equipInj.innerHTML += `
        <tr>
            <td>${equipamento.qtde}</td>
            <td>${equipamento.equipamento}</td>
            <td>${equipamento.capacidade}</td>
        </tr>
        `
        console.log(equipamento);
    })
})