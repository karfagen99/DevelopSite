//Modal popup window
let popupBg = document.querySelector('.popup__content'); 
let popup = document.querySelector('.popup'); 
let openPopupButtons = document.querySelectorAll('.open-popup'); 
let closePopupButton = document.querySelector('.close__popup'); 
let cardname = document.querySelector('.card__name1');



openPopupButtons.forEach((button) => {
    button.addEventListener('click', (e) => {
        e.preventDefault();
        popupBg.classList.add('active');
        popup.classList.add('active');
        
    })
});

closePopupButton.addEventListener('click', () => {

    let updateInfo = document.querySelectorAll('.update__info');
    updateInfo.forEach(function(item)
    {
        item.classList.remove('active');

            let btnInfoClose = document.querySelectorAll('.btn__info');
            btnInfoClose.forEach(function(item)
            {
                item.classList.remove('active');
            })
    })
    popupBg.classList.remove('active');
    popup.classList.remove('active');
});

document.addEventListener('click', (e) => {
    if (e.target === popupBg) {
        popupBg.classList.remove('active');
        popup.classList.remove('active'); 
    }
});



//download buttons
let downloadLink = document.getElementsByClassName('download');
let card = document.getElementsByClassName('card__wrapper');

for (let i=0; i<card.length; i++)
{
    card[i].addEventListener('mouseover',function()
    {
        
        let state = card[i].querySelectorAll('.namecard, .download');
            for (let i=0; i<state.length; i++)
            {
                state[i].classList.add('active')
            }
    })

    card[i].addEventListener('mouseout', function()
    {
        let state = card[i].querySelectorAll('.namecard, .download');
        for (let i=0; i<state.length; i++)
            {
                state[i].classList.remove('active')
            }
    })
}

//changelog buttons
let buttons = document.querySelectorAll('.btn__info');
const updateItems = document.querySelectorAll('.update__info');

buttons.forEach(function(but)
{
    but.addEventListener('click', function()
    {
        let currentBtn = but;
        let tabId = currentBtn.getAttribute('data-tab')
        let currentTabInfo = document.querySelector(tabId)
        
            buttons.forEach(function(item)
            {
                item.classList.remove('active')
            });

            updateItems.forEach(function(item)
            {
                item.classList.remove('active')
                currentBtn.classList.remove('active')
            });

        currentBtn.classList.add('active')
        currentTabInfo.classList.add('active')


    })

})
function gir() {  
     nums = document.getElementById('nums_1').innerHTML;  
     console.log(nums);
    if(nums == 1) {document.getElementById('gir').className='gir_1';document.getElementById('nums_1').innerHTML='2'}  
    if(nums == 2) {document.getElementById('gir').className='gir_2';document.getElementById('nums_1').innerHTML='3'}  
    if(nums == 3) {document.getElementById('gir').className='gir_3';document.getElementById('nums_1').innerHTML='1'}  
    }  
    setInterval(function(){gir()}, 500)

    
