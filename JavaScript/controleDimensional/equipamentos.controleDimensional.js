/** @format */

const controleDimensional = [
	{
		id: 1,
		qtde: 2,
		equipamento: 'Máquina Tridimensional SMM - Cabeçote modelo: RENISHAW PH10M',
		dimensaoCapacidade: 'Campo de medição: X = 6000 Y = 3000 Z = 2000',
	},
	{
		id: 2,
		qtde: 1,
		equipamento:
			'Braço Tridimensional HEXAGON Absolute Arm Serie 8335 7 eixos c/ Scanner Externo RS5 (H00007293)',
		dimensaoCapacidade: 'Campo de medição: Diâmetro de 4m',
	},
	{
		id: 3,
		qtde: 1,
		equipamento:
			'Scanner Peel 3D - Escaneamento 3D portátil de nível profissional',
		dimensaoCapacidade: 'Campo de medição: Volume de 3m',
	},
]

const equipControleDimensional = document.getElementById('equip-ctrl')

document.getElementById('ctrl-equipamento').addEventListener('click', () => {
	equipControleDimensional.innerText = ''
	controleDimensional.map((equipamento) => {
		equipControleDimensional.innerHTML += `
        <tr>
        <td>${equipamento.qtde}</td>
        <td>${equipamento.equipamento.toUpperCase()}</td>
        <td>${equipamento.dimensaoCapacidade.toUpperCase()}</td>
        </tr>
        `
		console.log(controleDimensional)
	})
})
