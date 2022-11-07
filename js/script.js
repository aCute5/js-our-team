// SOLUZIONE 1 CREO UN ARRAY DI OGGETTO CON 3 VALORI CHE OSNO LE FOTO POI FACCIO ITERARE LA CARD CON INDICE I VALORI DEGLI OGGETTI FINO A CHE NON FINISCONO. 
const cards = [
    {
        name: 'Wayne Barnett',
        job: 'Founder & CEO',
        imgUser: 'wayne-barnett-founder-ceo.jpg'
    },

    {
        name: 'Angela Caroll',
        job: 'Chief Editor',
        imgUser: 'angela-caroll-chief-editor.jpg'
    },

    {
        name: 'Walter Gordon',
        job: 'Office Manager',
        imgUser: 'walter-gordon-office-manager.jpg'
    },

    {
        name: 'Angela Lopez',
        job: 'Social Media Manager',
        imgUser: 'angela-lopez-social-media-manager.jpg'
    },

    {
        name: 'Scott Estrada',
        job: 'Developer',
        imgUser: 'scott-estrada-developer.jpg'
    },

    {
        name: 'Barbara Ramos',
        job: 'Graphic Designer',
        imgUser: 'barbara-ramos-graphic-designer.jpg'
    }
]
const container = document.getElementById("containercards");

for(let i=0; i<cards.length; i++){
    container.innerHTML += `<div class="card" style="width: 25rem;"> <img class="img-top" src="img/${cards[i].imgUser}"> <div class="card-body"> <h4>${cards[i].name}</h4> <span>${cards[i].job}</span> </div> </div>`
}


// SOLUZIONE 2 CREO UNA FUNCTION CHE CERCA DI RICREARE LE CARDS