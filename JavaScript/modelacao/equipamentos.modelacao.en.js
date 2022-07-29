const modelacao = [
	{
		id: 1,
		quantity: 4,
		equipment: 'Machining Machine CNC',
		dimensionCapacity: 'X = 2,50m Y = 5,10m Z = 1,10m',
	},
	{
		id: 2,
		quantity: 3,
		equipment: 'Band saws',
		dimensionCapacity: 'Diameter 80 cm steering wheel',
	},
	{
		id: 3,
		quantity: 1,
		equipment: 'Trowel',
		dimensionCapacity: 'Table 2,10 x 0,30',
	},
	{
		id: 4,
		quantity: 2,
		equipment: 'Column drills',
		dimensionCapacity: '--',
	},
	{
		id: 5,
		quantity: 2,
		equipment: 'Disc sander',
		dimensionCapacity: 'Diameter 0,80m',
	},
	{
		id: 6,
		quantity: 30,
		equipment: 'Benches',
		dimensionCapacity: '1,60m x 2,20m',
	},
	{
		id: 7,
		quantity: 2,
		equipment: 'Circular saws',
		dimensionCapacity: '--',
	},
	{
		id: 8,
		quantity: 5,
		equipment: 'Steel performances',
		dimensionCapacity: '2,00 x 1,00m',
	},
]

const equipMod = document.getElementById('equip-mod')

document.getElementById('mod-equipamento').addEventListener('click', () => {
	equipMod.innerText = ''
	modelacao.map((equipamento) => {
		equipMod.innerHTML += `
        <tr>
            <td>${equipamento.quantity}</td>
            <td>${equipamento.equipment.toUpperCase()}</td>
            <td>${equipamento.dimensionCapacity.toUpperCase()}</td>
        </tr>
        `
	})
})
