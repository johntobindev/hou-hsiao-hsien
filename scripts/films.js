class Film {
  constructor(title, image, year, description, duration) {
    this.title = title
    this.image = image
    this.year = year
    this.description = description
    this.duration = duration
  }
}

const films = [
  new Film("The Assassin", "assassin", 2015, "Set in seventh-century China during the last years of the Tang Dynasty following the Lushan Rebellion, and loosely based on the martial arts story \"Nie Yinniang\" by Pei Xing. A female assassin begins to question her loyalties when she falls in love with one of her targets.", "1h 45m"),
  new Film("Café Lumière", "cafe-lumiere", 2003, "Making her way through life by forming superficial relationships, Yoko keeps everyone at arm's length, whether it's her father and stepmother or Hajime, the owner of a small bookstore who could be the father of her unborn child. Yoko seems most at home when she's riding the train, speeding around the city with only her thoughts to entertain her.", "1h 43m"),
  new Film("Millennium Mambo", "millennium-mambo", 2001, "Working as a hostess in a trendy bar, a young beauty finds herself mercilessly torn between two men. Set against the intoxicating and decadent background of modern day Hong Kong, Millennium Mambo chronicles the fleeting, finite blooming of a young woman.", "1h 46m"),
  new Film("A City of Sadness", "city-of-sadness", 1989, "The story of a family embroiled in the \"White Terror\", mainland China's political repression that was wrought on the Taiwanese people by the Kuomintang government in the late 1940s.", "2h 39m"),
  new Film("Daughter of the Nile", "daughter-of-the-nile", 1987, "Lin Hsiao-yang tries to keep her family together while working as a waitress at Kentucky Fried Chicken and going to night school. With no mother and her father currently working out of town, it is up to Lin Hsiao-yang to take care of her younger siblings, who are slipping into a life of crime.", "1h 24m"),
  new Film("Dust in the Wind", "dust-in-the-wind", 1986, "A-yuan and A-yun are both from the small mining town of Jio-fen. They move to Taipei, where A-yuan is an apprentice by day and goes to night school, and A-yun works as a helper at a tailors. Everyone thinks they are meant for each other, and so do they. They fail to see time and fate are beyond their control.", "1h 49m"),
  new Film("The Time to Live and the Time to Die", "the-time-to-live-and-the-time-to-die", 1985, "When a family makes the move from China's mainland to Taiwan, the elder members struggle to adapt in their new environment while Ah-Ha, a young boy, gradually reaches maturity. The generation gap grows fearsomely wide, threatening to alienate the young man from his family and their traditions.", "2h 18m"),
  new Film("A Summer at Grandpa's", "a-summer-at-grandpas", 1984, "The film tells the semi-autobiographical exploits of a young brother and sister who spend a pivotal summer in the country with their grandparents while their mother is in critical care in the hospital.", "1h 33m"),
  new Film("The Boys from Fengkuei", "the-boys-from-fengkuei", 1983, "Ah-Ching and his friends have just finished school in their island fishing village, and now spend most of their time drinking and fighting. Three of them decide to go to the port city of Kaohsiung to look for work. There they face the harsh realities of the big city.", "1h 38m"),
  new Film("The Green, Green Grass of Home", "the-green-green-grass-of-home", 1982, "A substitute teacher from Taipei arrives in a country village to teach a class of mischievous students. He soon falls in love with nature, country life and a fellow teacher at the school.", "1h 31m"),
  new Film("Lovable You", "lovable-you", 1980, "The daughter of a wealthy man takes French lessons so she can go to France with her fiancée, but ends up falling for a poor man who studies civil engineering.", "1h 30m"),
]

let html = ''

for (let i = 0; i < films.length; i++) {
  html += `
    <div class="film">
      <div class="film-backdrop" style="background-image: url('./images/films/${films[i].image}-backdrop.jpg');"></div>

      <div class="film-header">
        <div class="film-info">
          <div class="film-title">${films[i].title}</div>
          <div class="film-details">${films[i].year} &middot; ${films[i].duration}</div>
        </div>

        <div class="film-poster" style="background-image: url('./images/films/${films[i].image}-poster.jpg');"></div>
      </div>

      <p class="film-description">${films[i].description}</p>
    </div>
  `
}

const filmsElem = document.getElementById('films')
filmsElem.innerHTML = html