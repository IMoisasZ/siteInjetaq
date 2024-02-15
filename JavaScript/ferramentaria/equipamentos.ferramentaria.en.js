const ferramentaria = [
	{
		id: 1,
		quantity: 2,
		equipment: 'Machining Machine CNC ZAYER - Comand FIDIA KF 3000',
		dimensionCapacity: '3000 x 1200 x 1000',
	},
	{
		id: 2,
		quantity: 1,
		equipment: 'Machining Machine CNC FADAL 4020',
		dimensionCapacity: '1000 x 500 x 500',
	},
	{
		id: 3,
		quantity: 1,
		equipment: 'Machining Machine CNC FADAL 4525',
		dimensionCapacity: '1400 x 630 x 600',
	},
	{
		id: 4,
		quantity: 1,
		equipment: 'Machining Machine CNC FADAL 6030',
		dimensionCapacity: '1500 x 760 x 760',
	},
	{
		id: 5,
		quantity: 1,
		equipment: 'Machining Machine CNC Leaderway LX 3220',
		dimensionCapacity: '3200 x 2200 x 800',
	},
	{
		id: 6,
		quantity: 1,
		equipment: 'Machining Machine CNC HARTFORD PRO-2150',
		dimensionCapacity: '2060 x 1560 x 780',
	},
	{
		id: 7,
		quantity: 1,
		equipment: 'Machining Machine CNC HARTFORD HSA323EA',
		dimensionCapacity: '3000 x 2300 x 1000',
	},
	{
		id: 7,
		quantity: 1,
		equipment: 'Machining Machine CNC HARTFORD W635',
		dimensionCapacity: '6000 x 3500 x 1080',
	},
	{
		id: 8,
		quantity: 1,
		equipment: 'Machining Machine CNC ATM-TAQ',
		dimensionCapacity: '2500 x 5000 x 1100',
	},
	{
		id: 9,
		quantity: 1,
		equipment: 'Tool Presetter - EZSet-IC1',
		dimensionCapacity: '--',
	},
	{
		id: 10,
		quantity: 1,
		equipment: 'Boring Machine – HBN-110 (Turning Table)',
		dimensionCapacity: '1600 x 1000 x 1250',
	},
	{
		id: 11,
		quantity: 3,
		equipment: 'Milling machines',
		dimensionCapacity: '--',
	},
	{
		id: 12,
		quantity: 2,
		equipment: 'Mechanical Lathes',
		dimensionCapacity: 'Ø440 x 1500',
	},
	{
		id: 13,
		quantity: 1,
		equipment: 'Flat grinder Mello',
		dimensionCapacity: '550 x 250 x 250',
	},
	{
		id: 14,
		quantity: 6,
		equipment: 'Radial column drills',
		dimensionCapacity: 'Table (900 x 1500)',
	},
	{
		id: 15,
		quantity: 1,
		equipment: 'Overhead crane',
		dimensionCapacity: '15 TON + 7TON (Hook Aux.)',
	},
	{
		id: 16,
		quantity: 3,
		equipment: 'Overhead crane',
		dimensionCapacity: '20 TON + 7 TON (Hook Aux.)',
	},
	{
		id: 17,
		quantity: 2,
		equipment: 'Hydraulic press - JONASA',
		dimensionCapacity: 'Table 2000 x 3000 / 500 TON',
	},
	{
		id: 18,
		quantity: 1,
		equipment: 'Hydraulic press - MULLER',
		dimensionCapacity: 'Table 2000 x 2500 / 630 TON',
	},
	{
		id: 19,
		quantity: 1,
		equipment: 'hydraulic press Double acting - INNOCENTINI BLANCH',
		dimensionCapacity: 'Table 2285 x 3505 / 1250-750 TON',
	},
]

const equipFerr = document.getElementById('equip-ferr')

document.getElementById('ferr-equipamento').addEventListener('click', () => {
	equipFerr.innerText = ''
	ferramentaria.map((equipamento) => {
		equipFerr.innerHTML += `
        <tr>
            <td>${equipamento.quantity}</td>
            <td>${equipamento.equipment.toUpperCase()}</td>
            <td>${equipamento.dimensionCapacity.toUpperCase()}</td>
        </tr>
        `
	})
})
