const mrSnibbly = {
    name: 'Mr. Snibbly',
    moods: [
        'Classy',
        'Sassy',
        'Gone'
    ],
    tolerance: 7,
    pets: 0,
    moodIndex: 0,

    moodImgs: [
        'assets/cat.jpg',
        'assets/madcat.jpg'
    ]
}
const catImg = document.getElementById('cat-img')
const catName = document.getElementById('name')
const mood = document.getElementById('mood')
const pets = document.getElementById('pets')
const petButton = document.getElementById('pet-button')
function draw() {

    catImg.setAttribute('src', mrSnibbly.moodImgs[mrSnibbly.moodIndex])
    catName.innerText = mrSnibbly.name
    mood.innerText = mrSnibbly.moods[mrSnibbly.moodIndex]
    pets.innerText = mrSnibbly.pets
    if(mrSnibbly.pets >= mrSnibbly.tolerance*2){
        document.getElementById('pet-button').disabled = true;
    }
}

function pet() {
    mrSnibbly.pets++;
    if (mrSnibbly.pets % mrSnibbly.tolerance == 0) {
        mrSnibbly.moodIndex++;
    }
    draw();
}
function reset() {
mrSnibbly.pets = 0;
mrSnibbly.moodIndex = 0;
petButton.disabled = false;
draw();
}
draw();