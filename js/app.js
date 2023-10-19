console.log(" our team");

// - Creare l’array di oggetti con le informazioni fornite.
const team = [
	{
		nome: 'Angela Caroll',
		ruolo: 'Chief Editor',
		foto: './img/angela-caroll-chief-editor.jpg',
	},
	{
		nome: 'Angela Lopez',
		ruolo: 'Social Media Manager',
		foto: './img/angela-lopez-social-media-manager.jpg',
	},
	{
		nome: 'Barbara Ramos',
		ruolo: 'Graphic Designer',
		foto: './img/barbara-ramos-graphic-designer.jpg',
	},
	{
		nome: 'Scott Estrada',
		ruolo: 'Developer',
		foto: './img/scott-estrada-developer.jpg',
	},
	{
		nome: 'Walter Gordon',
		ruolo: 'Office Manager',
		foto: './img/walter-gordon-office-manager.jpg',
	},
	{
		nome: 'Wayne Barnett',
		ruolo: 'Founder & CEO',
		foto: './img/wayne-barnett-founder-ceo.jpg',
	},
]
console.log(team);

// - Stampare su console, per ogni membro del team, le informazioni di nome, ruolo e la stringa della foto
// console.log(team[0],team[1], team[2], team[3], team[4], team[5]);
const cardElement = document.querySelector('.card');



for (let i = 0; i < team.length; i++) {
	let ourTeam = team[i];
	console.log(ourTeam);

	const nome = ourTeam.nome
	const ruolo = ourTeam.ruolo
	const foto = ourTeam.foto

	// - Stampare le informazioni di ogni membro su DOM sottoforma di stringhe
	const html = `
	<div class="card">
	  <img src="${foto}">
	  <h3>${nome}</h3>
	  <p>${ruolo}</p>
	</div>
	`
	cardElement.innerHTML += html
	console.log(cardElement);
}



