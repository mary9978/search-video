function filterCard(){
    const input=document.getElementById('filter').value.toUpperCase();
    const cardContainer=document.getElementById('card-lists');
    const cards=cardContainer.getElementsByClassName('card');
    for (let i=0;i<cards.length;i++){
        let title=cards[i].querySelector('.card-body h3.card-title');
        let textvalue=title.innerText.toUpperCase().indexOf(input) || title.textContent.toUpperCase().indexOf(input);
        if (textvalue>-1){
            cards[i].style.display= "";
        }
        else {
            cards[i].style.display= "none";
        }
    }
}