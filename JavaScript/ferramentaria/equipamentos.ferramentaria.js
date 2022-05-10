const ferramentaria = [
	{
		id: 1,
		qtde: 2,
		equipamento: 'Copiadora CNC Marca ZAYER com comando fídia KF 3000',
		dimensaoCapacidade: '3000 x 1200 x 1000',
	},
	{
		id: 2,
		qtde: 1,
		equipamento: 'Copiadora FADAL Mod. 4020',
		dimensaoCapacidade: '1000 x 500 x 500',
	},
	{
		id: 3,
		qtde: 1,
		equipamento: 'Copiadora FADAL Mod. 4525',
		dimensaoCapacidade: '1400 x 630 x 600',
	},
	{
		id: 4,
		qtde: 1,
		equipamento: 'Copiadora FADAL Mod. 6030',
		dimensaoCapacidade: '1500 x 760 x 760',
	},
	{
		id: 5,
		qtde: 1,
		equipamento: 'Copiadora CNC LX 3220 – Leaderway',
		dimensaoCapacidade: '3200 x 2200 x 800',
	},
	{
		id: 6,
		qtde: 1,
		equipamento: 'Copiadora CNC PRO-2150 – HARTFORD',
		dimensaoCapacidade: '2060 x 1560 x 780',
	},
	{
		id: 7,
		qtde: 1,
		equipamento: 'Copiadora HSA323EA – HARTFORD',
		dimensaoCapacidade: '3000 x 2300 x 1000',
	},
	{
		id: 7,
		qtde: 1,
		equipamento: 'Copiadora W635 – HARTFORD',
		dimensaoCapacidade: '6000 x 3500 x 1080',
	},
	{
		id: 8,
		qtde: 1,
		equipamento: 'Presetter de Ferramentas – Modelo EZSet-IC1',
		dimensaoCapacidade: '--',
	},
	{
		id: 9,
		qtde: 1,
		equipamento: 'Copiadora CNC ATM-TAQ',
		dimensaoCapacidade: '2500 x 5000 x 1100',
	},
	{
		id: 10,
		qtde: 1,
		equipamento: 'Mandrilhadora – HBN-110 (Mesa Giratoria)',
		dimensaoCapacidade: '1600 x 1000 x 1250',
	},
	{ id: 11, qtde: 3, equipamento: 'Fresadoras', dimensaoCapacidade: '--' },
	{
		id: 12,
		qtde: 2,
		equipamento: 'Tornos Mecânicos',
		dimensaoCapacidade: 'Ø440 x 1500',
	},
	{
		id: 13,
		qtde: 1,
		equipamento: 'Retífica plana Mello',
		dimensaoCapacidade: '550 x 250 x 250',
	},
	{
		id: 14,
		qtde: 6,
		equipamento: 'Furadeiras coluna Radial',
		dimensaoCapacidade: 'Mesa (900 x 1500)',
	},
	{
		id: 15,
		qtde: 1,
		equipamento: 'Ponte rolante',
		dimensaoCapacidade: '15 TON + 7TON (Gancho Aux.)',
	},
	{
		id: 16,
		qtde: 3,
		equipamento: 'Ponte rolante',
		dimensaoCapacidade: '20 TON + 7 TON (Gancho Aux.)',
	},
	{
		id: 17,
		qtde: 2,
		equipamento: 'Prensa hidráulica JONASA',
		dimensaoCapacidade: 'Mesa 2000 x 3000 / 500 TON',
	},
	{
		id: 18,
		qtde: 1,
		equipamento: 'Prensa hidráulica MULLER',
		dimensaoCapacidade: 'Mesa 2000 x 2500 / 630 TON',
	},
	{
		id: 19,
		qtde: 1,
		equipamento: 'Prensa hidráulica dupla ação - INNOCENTINI BLANCH',
		dimensaoCapacidade: 'Mesa 2285 x 3505 / 1250-750 TON',
	},
]

const equipFerr = document.getElementById('equip-ferr')

document.getElementById('ferr-equipamento').addEventListener('click', () => {
	equipFerr.innerText = ''
	ferramentaria.map((equipamento) => {
		equipFerr.innerHTML += `
        <tr>
            <td>${equipamento.qtde}</td>
            <td>${equipamento.equipamento.toUpperCase()}</td>
            <td>${equipamento.dimensaoCapacidade.toUpperCase()}</td>
        </tr>
        `
	})
})
