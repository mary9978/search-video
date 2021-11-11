
function Card(title,rate,date,time, img) {
    this.rate=rate;
    this.date=date;
    this.time=time;
    this.title = title;
    this.img = img;
}

const cardsInfo = [];
cardsInfo.push(new Card('Avengers:Endgame', '8.8/10', 'SUN 8 SEP-10:00 PM','2h 40min','src/images/avengers.jpg'))
cardsInfo.push(new Card('Hobbs & Shaw', '9.7/10', 'Tue 4 July-05:00 PM','2h 13min','src/images/hobbs%20and%20shaw.jpg'))
cardsInfo.push(new Card('John Wick 3 ', '9.8/10','Wed 16 AUG-07:00 PM','2h 33min', 'src/images/John-Wick-3.jpg'))
cardsInfo.push(new Card('Deadpool 2', '7.3/10','MON 16 OCT-10:00 PM', '2h 10min','src/images/deadpool-2.jpg'))

cardsInfo.push(new Card('The lion King', '8.1/10','SUN 8 SEP-10:00 PM','2h 36min', 'src/images/the%20lion%20king.jpg'))
cardsInfo.push(new Card('Mad Max: Fury Road', '7.4/10','TUE 8 SEP-05:00 PM','2h 29min','src/images/mad-max.jpg'))
cardsInfo.push(new Card('Aquaman', '8.1/10','WED 16 AUG-07:00 PM','2h 14min', 'src/images/aquaman.jpg'))
cardsInfo.push(new Card('Mission Impossible', '7.8/10','MON 16 OCT-10:00 PM','2h 33min','src/images/mission-impossible.jpg'))

const cardView = (cardInfo) => {
    return `
    <div class="card">
                <img src="${cardInfo.img}" alt="${cardInfo.title}">
                <div class="card-body">
                    <h3 class="card-title">${cardInfo.title}<span>${cardInfo.rate}</span></h3>
                    <h5 style="color: gray">LAST UPDATE<span>PLANING TIME</span></h5>
                    <h4>${cardInfo.date}<span>${cardInfo.time}</span></h4>
                </div>
            </div>
`
}
const generateCards = (cardInfoList) => {
    return cardInfoList.map(cardInfo => {
        return cardView(cardInfo)
    }).join(' ');
}

const cardContainer = document.getElementById("card-lists");
cardContainer.innerHTML = generateCards(cardsInfo)


function onSearch(element) {
    const searchTerm = element.value;
    const filteredCards = cardsInfo.filter(card => {
        return card.title.includes(searchTerm) || card.description.includes(searchTerm)
    })
    cardContainer.innerHTML = generateCards(filteredCards)
}





