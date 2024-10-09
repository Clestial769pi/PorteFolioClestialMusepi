// Bouton A
const blocABouton=document.querySelector("#blocABouton");
console.log(blocABouton);

const cadreOptionABCFonctionA=document.querySelector('.cadreOptionABCFonctionA');
console.log(cadreOptionABCFonctionA);

// blocABouton.addEventListener('click',function(){
//     cadreOptionABCFonctionA.classList.toggle("cadreOptionABCFonctionAAction");
//     console.log("cadreOptionABCFonctionAAction");
// });

// Bouton B
const blocBBouton=document.querySelector("#blocBBouton");
console.log(blocBBouton);

const cadreOptionABCFonctionB=document.querySelector('.cadreOptionABCFonctionB');
console.log(cadreOptionABCFonctionB);

// blocBBouton.addEventListener('click',function(){
//     cadreOptionABCFonctionB.classList.toggle("cadreOptionABCFonctionBAction");
//     console.log("cadreOptionABCFonctionBAction");
// });

// Bouton C
const blocCBouton=document.querySelector("#blocCBouton")
console.log(blocCBouton);

const cadreOptionABCFonctionC=document.querySelector('.cadreOptionABCFonctionC');
console.log(cadreOptionABCFonctionC);


// fONCTION
function activationDesactivation(activation,desactivation){
    if(activation.style.display === 'block') {
            activation.style.display ='none';
        } else {
            activation.style.display = 'block';
            desactivation.style.display='none';
        }
};

// function activationDesactivation(activation,desactivation){
//     if(activation.style.display='block'){
//         activation.style.display='none';
//     }else{
//         activation.style.display='block';
//         desactivation.style.display='none';
//     }
// }

// blocABouton.addEventListener('click', function(){
//     activationDesactivation(cadreOptionABCFonctionA,cadreOptionABCFonctionB);
// })
// blocBBouton.addEventListener('click', function(){
//     activationDesactivation(cadreOptionABCFonctionB,cadreOptionABCFonctionA);
// });

// Fonction pour gérer l'affichage des fenêtres
// function activationDesactivation(activation, desactivation) {
//     if (activation.style.display === 'block') {
//         activation.style.display = 'none'; // Ferme la fenêtre
//         } else {
//             activation.style.display = 'block';
//             desactivation.style.display = 'none';
//         }
// };

// Ajout d'événements de clic aux boutons
// blocABouton.addEventListener('click', () => {
//     activationDesactivation(cadreOptionABCFonctionA, cadreOptionABCFonctionB);
// });

// blocBBouton.addEventListener('click', () => {
//     activationDesactivation(cadreOptionABCFonctionB, cadreOptionABCFonctionA);
// });

// blocCBouton.addEventListener('click', () => {
//     activationDesactivation(cadreOptionABCFonctionC, cadreOptionABCFonctionA,cadreOptionABCFonctionB);
// });

function activationDesactivation(activation, ...desactivation) {
    activation.style.display = (activation.style.display === 'block') ? 'none' : 'block';
    desactivation.forEach(fenetre => {
        fenetre.style.display = 'none';
    });
}

blocABouton.addEventListener('click', () => {
    activationDesactivation(cadreOptionABCFonctionA, cadreOptionABCFonctionB, cadreOptionABCFonctionC);
});

blocBBouton.addEventListener('click', () => {
    activationDesactivation(cadreOptionABCFonctionB, cadreOptionABCFonctionA, cadreOptionABCFonctionC);
});

blocCBouton.addEventListener('click', () => {
    activationDesactivation(cadreOptionABCFonctionC, cadreOptionABCFonctionA, cadreOptionABCFonctionB);
});


// function activationDesactivation(activation,desactivation) {
//     activation.style.display = (activation.style.display === 'block');
//     desactivation.forEach(cadreOptionABCFonctionA,cadreOptionABCFonctionB => { 
//         cadreOptionABCFonctionA.style.display = 'none';
//         cadreOptionABCFonctionB.style.display = 'none';
//     });
// }
// blocCBouton.addEventListener('click', () => {
//     activationDesactivation(cadreOptionABCFonctionC, cadreOptionABCFonctionA, cadreOptionABCFonctionB);
// });



// blocCBouton.addEventListener('click',function(){
//     cadreOptionABCFonctionC.classList.toggle("cadreOptionABCFonctionCAction");
//     console.log("cadreOptionABCFonctionCAction");
// });

