const peoples = [
    {
        name: 'Wayne Barnett',
        role: 'Founder & CEO',
        photo: './img/wayne-barnett-founder-ceo.jpg',
    },

    {
        name: 'Angela Caroll',
        role: 'Chief Editor',
        photo: './img/angela-caroll-chief-editor.jpg'
    },

    {
        name: 'Walter Gordon',
        role: 'Office Manager',
        photo: './img/walter-gordon-office-manager.jpg',
    },

    {
        name: 'Angela Lopez',
        role: 'Social Media Manager',
        photo: './img/angela-lopez-social-media-manager.jpg',
    },

    {
        name: 'Scott Estrada',
        role: 'Developer',
        photo: './img/scott-estrada-developer.jpg',
    },
];

const superoutput = document.getElementById('super-output');
superoutput.classList.add('d-flex', 'width');

const outputname = document.getElementById('output-name');
const outputrole = document.getElementById('output-role');
const outputphoto = document.getElementById('output-photo');


for (let i = 0; i < peoples.length; i++) {

    const imgphoto = document.createElement('img');
    imgphoto.classList.add('width-img');
    imgphoto.setAttribute('src', peoples[i].photo);
    outputname.append(imgphoto);

    const subname = document.createElement('div');
    subname.classList.add('font-size');
    subname.innerHTML += `${peoples[i].name }`;
    outputname.append(subname);

    const subrole = document.createElement('div');
    subrole.classList.add('font-size', 'padding-bottom');
    subrole.innerHTML += `${peoples[i].role }`;
    outputname.append(subrole);

    

    console.log(peoples[i].name);
    console.log(peoples[i].role);
    console.log(peoples[i].photo);
}