// const popupLinks = document.querySelectorAll('.popup-link');
// const body = document.querySelector('body');
// const lockPadding = document.querySelectorAll(".lock-padding");

// let unlock = true;

// const timeout = 800;

// if (popupLinks.length > 0) {
//     for (let index = 0; index < popupLinks.length; index++) {
//         const popupLink = popupLinks[index];
//         popupLink.addEventListener("click", function (e) {
//             const popupName = popupLink.getAttribute('href').replace('#', '');
//             const curentPopup = document.getElementById(popupName);
//             popupOpen(curentPopup);
//             e.preventDefault();
//         });
//     }
// }

// const popupCloseIcon = document.querySelectorAll('.close-popup');
// if (popupCloseIcon > 0) {
//     for (let index = 0; index < popupCloseIcon.length; index++) {
//         const el = popupCloseIcon[index];
//         el.addEventListener('click', function (e) {
//             popupCloseIcon(el.closest('.popup'));
//             e.preventDefault();
//         });
//     }
// }

// function popupOpen (curentPopup) {
//     if (curentPopup && unlock) {
//         const popupActive = document.querySelector('.popup.open');
//         if (popupActive) {
//             popupCloseIcon(popupActive, false);
//         }   else {
//             bodyLock();
//         }
//         curentPopup.classList.add('open');
//         curentPopup.addEventListener("click", function (e) {
//             if (!e.target.closest('.popup__content')) {
//                 popupCloseIcon(e.target.closest('.popup'));
//             }
//         });
//     }
// }

// function bodyLock() {
//     const lockPaddingValue = window.innerWidth - document.querySelector('.wrapper').offsetWidth + 'px';

//     for (let index = 0; index < lockPadding.length; index++) {
//         const el = lockPadding[index];
//         el.style.paddingRight = lockPaddingValue;
        
//     }
//     el.style.paddingRight = lockPaddingValue;
//     body.classList.add('lock');

//     unlock = false;
//     setTimeout(function () {
//         unlock = true;
//     }, timeout);
// }

//в пизду эту залупу нихуя не понял как работает, может еще пригодится 


let popupBg = document.querySelector('.popup__content'); // Фон попап окна
let popup = document.querySelector('.popup'); // Само окно
let openPopupButtons = document.querySelectorAll('.open-popup'); // Кнопки для показа окна
let closePopupButton = document.querySelector('.close__popup'); // Кнопка для скрытия окна

openPopupButtons.forEach((button) => {
    button.addEventListener('click', (e) => {
        e.preventDefault();
        popupBg.classList.add('active');
        popup.classList.add('active');
    })
});

closePopupButton.addEventListener('click', () => {
    popupBg.classList.remove('active');
    popup.classList.remove('active');
})

document.addEventListener('click', (e) => {
    if (e.target === popupBg) {
        popupBg.classList.remove('active');
        popup.classList.remove('active'); 
    }
});