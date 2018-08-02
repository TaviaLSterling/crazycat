const mrSnibbly = {
    name: 'Mr. Snibbly',
    moods: [
      'Classy',
      'Sassy',
      'He Gone!'
    ],
    moodImgs: [
      'assets/cat.jpg',
      'assets/madcat.jpg',
      ""
    ],
    tolerance: 7,
    pets: 0,
    moodIndex: 0
  }
  const mittens = {
    name: 'Mittens',
    moods: [
      'Sleepy',
      'Bitey',
      'She Gone!'
    ],
    moodImgs: [
      'https://petcube.com/blog/content/images/2017/08/kitten-supplies-cover.jpg',
      'https://www.catster.com/wp-content/uploads/2017/12/A-gray-kitten-meowing.jpg',
      ""
    ],
    tolerance: 2,
    pets: 0,
    moodIndex: 0
  }
  let activeCat = mrSnibbly
  
  let cats = [mrSnibbly, mittens]
  
  const catImg = document.getElementById('cat-img')
  const catName = document.getElementById('name')
  const mood = document.getElementById('mood')
  const pets = document.getElementById('pets')
  const petButton = document.getElementById('pet-button')
  
  function draw() {
    catImg.setAttribute('src', activeCat.moodImgs[activeCat.moodIndex])
    catName.innerText = activeCat.name
    mood.innerText = activeCat.moods[activeCat.moodIndex]
    pets.innerText = activeCat.pets.toString()
    if (activeCat.pets >= activeCat.tolerance * 2) {
      petButton.disabled = true;
    }
  }
  
  function pet() {
    activeCat.pets++;
    if (activeCat.pets % activeCat.tolerance == 0) {
      activeCat.moodIndex++
    }
    draw();
  }
  
  function reset() {
    activeCat.pets = 0
    activeCat.moodIndex = 0
    petButton.disabled = false
    draw()
  }
  
  
  function drawButtons() {
    let template = ""
    for (let i = 0; i < cats.length; i++) {
      const cat = cats[i];
      template += `
      <button onclick= "setActiveCat(${i})">${cat.name}
      </button>
      `
  
    }
    document.getElementById("cat-buttons").innerHTML = template
  }
  
  function setActiveCat(catIndex) {
    activeCat = cats[catIndex]
  
    draw()
  }
  
  
  drawButtons()
  draw()