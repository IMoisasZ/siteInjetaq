const injecaoPlasticos = [
	{
		id: 1,
		quantity: 1,
		equipment: 'INJECTION MACHINE BRAND ORIENT – AUTOMÁTICA C / MICROPROCESSOR',
		capacity: '180/350',
	},
	{
		id: 1,
		quantity: 1,
		equipment:
			'INJECTION MACHINE MARCA ORIENTE – AUTOMÁTICA C / MICROPROCESSOR',
		capacity: '60/100',
	},
	{
		id: 1,
		quantity: 1,
		equipment: 'INJECTION MACHINE PIC – AUTOMATIC C/ MICROPROCESSOR',
		capacity: '51/110',
	},
	{
		id: 1,
		quantity: 1,
		equipment: 'INJECTION MACHINE BATTENFELD – AUTOMATIC',
		capacity: '140/160',
	},
	{
		id: 1,
		quantity: 1,
		equipment: 'INJECTION MACHINE PIC PETERSEN – AUTOMATIC',
		capacity: '20/70',
	},
	{
		id: 1,
		quantity: 1,
		equipment: 'INJECTION MACHINE BRAND SINITRON SYA – AUTOMATIC',
		capacity: '60/130',
	},
	{
		id: 1,
		quantity: 1,
		equipment: 'INJECTION MACHINE EUROSTEC (BOLE) – AUTOMATIC',
		capacity: '140/130',
	},
	{
		id: 1,
		quantity: 1,
		equipment: 'INJECTION MACHINE EUROSTEC (BOLE) – AUTOMATIC',
		capacity: '100/320',
	},
	{
		id: 1,
		quantity: 1,
		equipment: 'INJECTION MACHINE EUROSTEC (BOLE) – AUTOMATIC',
		capacity: '70/160',
	},
]

const equipInj = document.getElementById('equip-inj')

document.getElementById('inj-equipamento').addEventListener('click', () => {
	equipInj.innerText = ''
	injecaoPlasticos.map((equipamento) => {
		equipInj.innerHTML += `
        <tr>
            <td>${equipamento.quantity}</td>
            <td>${equipamento.equipment.toUpperCase()}</td>
            <td>${equipamento.capacity.toUpperCase()}</td>
        </tr>
        `
		console.log(equipamento)
	})
})
