const controleDimensional = [
	{
		id: 1,
		quantity: 2,
		equipment: 'Three-Dimensional SMM Machine - Model head: RENISHAW PH10M',
		dimensionCapacity: 'Measuring field: X = 6000 Y = 3000 Z = 2000',
	},
	{
		id: 2,
		quantity: 1,
		equipment:
			'Three-dimensional arm HEXAGON Absolute Arm Serie 8335 7 axios c/ Scanner Extern RS5 (H00007293)',
		dimensionCapacity: 'Measuring field: Diameter 3m',
	},
]

const equipControleDimensional = document.getElementById('equip-ctrl')

document.getElementById('ctrl-equipamento').addEventListener('click', () => {
	equipControleDimensional.innerText = ''
	controleDimensional.map((equipamento) => {
		equipControleDimensional.innerHTML += `
        <tr>
        <td>${equipamento.quantity}</td>
        <td>${equipamento.equipment.toUpperCase()}</td>
        <td>${equipamento.dimensionCapacity.toUpperCase()}</td>
        </tr>
        `
	})
})
