const controleDimensional = [
    { id: 1, qtde: 2, equipamento: 'Máquina Tridimensional SMM - Cabeçote modelo: RENISHAW PH10M', dimensaoCapacidade: 'Campo de medição: X = 6000 Y = 3000 Z = 2000' },
    { id: 2, qtde: 1, equipamento: 'Braço Tridimensional HEXAGON Absolute Arm Serie 8335 7 eixos c/ Scanner Externo RS5 (H00007293)', dimensaoCapacidade: 'Campo de medição: Diâmetro de 3m'}
]

const equipControleDimensional = document.getElementById('equip-ctrl')

document.getElementById('ctrl-equipamento').addEventListener('click', () => {
    equipControleDimensional.innerText = ""
    controleDimensional.map(equipamento => {
        equipControleDimensional.innerHTML += `
        <tr>
        <td>${equipamento.qtde}</td>
        <td>${equipamento.equipamento}</td>
        <td>${equipamento.dimensaoCapacidade}</td>
        </tr>
        `
        console.log(controleDimensional);
    })
})