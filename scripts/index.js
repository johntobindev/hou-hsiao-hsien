class Award {
  constructor(title, awarder, year) {
    this.title = title
    this.awarder = awarder
    this.year = year
  }
}

const awards = [
  new Award("Lifetime Achievement Award", "Golden Horse Film Festival", 2020),
  new Award("Best Director", "Cannes Film Festival", 2015),
  new Award("Director of the Decade", "Village Voice Film Poll", 1999),
  new Award("Best Foreign Language Film", "Kinema Junpo Awards", 1991),
  new Award("FIPRESCI Prize", "Berlin International Film Festival", 1986),
]

let html = ''

for (let i = 0; i < awards.length; i++) {
  html += `
  <div class="award">
    <div class="award-section">
      <div class="award-title">${awards[i].title}</div>
      <div class="award-awarder">${awards[i].awarder}</div>
    </div>
    <div class="award-year">${awards[i].year}</div>
  </div>
  `
}

document.addEventListener('DOMContentLoaded', () => {
  const awardsElem = document.getElementById('awards')
  awardsElem.innerHTML = html
})