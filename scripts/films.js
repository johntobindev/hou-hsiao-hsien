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
  new Film("Millennium Mambo", "millennium-mambo", 2001, "Working as a hostess in a trendy bar, a young beauty finds herself mercilessly torn between two men. Set against the intoxicating and decadent background of modern day Hong Kong, Millennium Mambo chronicles the fleeting, finite blooming of a young woman.", "1h 46m"),
  new Film("Daughter of the Nile", "daughter-of-the-nile", 1987, "Lin Hsiao-yang tries to keep her family together while working as a waitress at Kentucky Fried Chicken and going to night school. With no mother and her father currently working out of town, it is up to Lin Hsiao-yang to take care of her younger siblings, who are slipping into a life of crime.", "1h 24m"),
  new Film("Dust in the Wind", "dust-in-the-wind", 1986, "A-yuan and A-yun are both from the small mining town of Jio-fen. They move to Taipei, where A-yuan is an apprentice by day and goes to night school, and A-yun works as a helper at a tailors. Everyone thinks they are meant for each other, and so do they. They fail to see time and fate are beyond their control.", "1h 49m"),
  new Film("The Boys from Fengkuei", "the-boys-from-fengkuei", 1983, "Ah-Ching and his friends have just finished school in their island fishing village, and now spend most of their time drinking and fighting. Three of them decide to go to the port city of Kaohsiung to look for work. They find an apartment through relatives, and Ah-Ching is attracted to the girlfriend of a neighbor. There they face the harsh realities of the big city.", "1h 38m"),
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