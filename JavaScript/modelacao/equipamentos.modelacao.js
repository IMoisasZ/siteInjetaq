const modelacao = [
    {"id": 1, "qtde": 4, "equipamento": "Copiadoras CNC", "dimensaoCapacidade": "X = 2,50m Y = 5,10m Z = 1,10m"},
    {"id": 2, "qtde": 3, "equipamento": "Serras de fita", "dimensaoCapacidade": "Diâmetro 80 cm volante"},
    {"id": 3, "qtde": 1, "equipamento": "Desempenadeira", "dimensaoCapacidade": "Mesa 2,10 x 0,30"},
    {"id": 4, "qtde": 2, "equipamento": "Furadeiras de coluna", "dimensaoCapacidade": "--"},
    {"id": 5, "qtde": 2, "equipamento": "Lixadeira de disco", "dimensaoCapacidade": "Diâmetro 0,80m"},
    {"id": 6, "qtde": 30, "equipamento": "Bancadas", "dimensaoCapacidade": "1,60m x 2,20m"},
    {"id": 7, "qtde": 2, "equipamento": "Serras circulares", "dimensaoCapacidade": "--"},
    {"id": 8, "qtde": 5, "equipamento": "Desempenos de aço", "dimensaoCapacidade": "2,00 x 1,00m"}
]

const equipMod = document.getElementById('equip-mod')

document.getElementById('mod-equipamento').addEventListener('click', () => {
    equipMod.innerText = ""
    modelacao.map(equipamento => {
        equipMod.innerHTML += `
        <tr>
            <td>${equipamento.qtde}</td>
            <td>${equipamento.equipamento}</td>
            <td>${equipamento.dimensaoCapacidade}</td>
        </tr>
        `
        console.log(equipamento);
    })
})

// modal equipamentos
const equipModal = document.getElementById('equipamentos-modal')

document.querySelector('.equipamento-modal').addEventListener('click', () => {
    equipModal.innerText = ""
    modelacao.map(equipamento => {
        equipModal.innerHTML += `
        <tr>
            <td>${equipamento.qtde}</td>
            <td>${equipamento.equipamento}</td>
            <td>${equipamento.dimensaoCapacidade}</td>
        </tr>
        `
        console.log(equipamento);
    })
})