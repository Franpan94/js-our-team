const peoples = [
    {
        name: 'Wayne Barnett',
        role: 'Founder & CEO',
        photo: 'wayne-barnett-founder-ceo.jpg',
    },

    {
        name: 'Angela Caroll',
        role: 'Chief Editor',
        photo: 'angela-caroll-chief-editor.jpg',
    },

    {
        name: 'Walter Gordon',
        role: 'Office Manager',
        photo: 'walter-gordon-office-manager.jpg',
    },

    {
        name: 'Angela Lopez',
        role: 'Social Media Manager',
        photo: 'angela-lopez-social-media-manager.jpg',
    },

    {
        name: 'Scott Estrada',
        role: 'Developer',
        photo: 'scott-estrada-developer.jpg',
    },
];

const superoutput = document.getElementById('super-output');
superoutput.classList.add('d-flex');

const outputname = document.getElementById('outputname');
const outputrole = document.getElementById('outputrole');
const outputphoto = document.getElementById('outputphoto');

for (let i = 0; i < peoples.length; i++) {

    const subname = document.createElement('li');
    subname.classList.add('font-size');
    subname.innerHTML += `${peoples[i].name }`;
    outputname.append(subname);

    const subrole = document.createElement('li');
    subrole.classList.add('font-size');
    subrole.innerHTML += `${peoples[i].role }`;
    outputrole.append(subrole);

    const subphoto = document.createElement('li');
    subphoto.classList.add('font-size');
    subphoto.innerHTML += `${peoples[i].photo }`;
    outputphoto.append(subphoto);

    console.log(peoples[i].name);
    console.log(peoples[i].role);
    console.log(peoples[i].photo);
}