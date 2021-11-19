function filterCard(){
    const input=document.getElementById('filter').value.toUpperCase();
    const cardContainer=document.getElementById('card-lists');
    const cards=cardContainer.getElementsByClassName('card');
    for (let i=0;i<cards.length;i++){
        let title=cards[i].querySelector('h3');
        let h5_content=cards[i].querySelector('h5');
        let h4_content=cards[i].querySelector('h4');
        let textvalue=title.innerText.toUpperCase().indexOf(input) || title.textContent.toUpperCase().indexOf(input);
        let textvalue1=h5_content.innerText.toUpperCase().indexOf(input) || h5_content.textContent.toUpperCase().indexOf(input);
        let textvalue2=h4_content.innerText.toUpperCase().indexOf(input) || h4_content.textContent.toUpperCase().indexOf(input);
        if (textvalue>-1 || textvalue1>-1 || textvalue2>-1){
            cards[i].style.display= "";
        }
        else {
            cards[i].style.display= "none";
        }
    }
}