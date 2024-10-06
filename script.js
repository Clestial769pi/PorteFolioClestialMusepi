// Bouton A
const blocABouton=document.querySelector("#blocABouton")
console.log(blocABouton)

const cadreOptionABCFonctionA=document.querySelector('.cadreOptionABCFonctionA')
console.log(cadreOptionABCFonctionA)

blocABouton.addEventListener('click',function(){
    cadreOptionABCFonctionA.classList.toggle("cadreOptionABCFonctionAAction")
    console.log("cadreOptionABCFonctionAAction")
});

// Bouton B
const blocBBouton=document.querySelector("#blocBBouton")
console.log(blocBBouton)

const cadreOptionABCFonctionB=document.querySelector('.cadreOptionABCFonctionB')
console.log(cadreOptionABCFonctionB)

blocBBouton.addEventListener('click',function(){
    cadreOptionABCFonctionB.classList.toggle("cadreOptionABCFonctionBAction")
    console.log("cadreOptionABCFonctionBAction")
});

// Bouton C
const blocCBouton=document.querySelector("#blocCBouton")
console.log(blocCBouton)

const cadreOptionABCFonctionC=document.querySelector('.cadreOptionABCFonctionC')
console.log(cadreOptionABCFonctionC)

blocCBouton.addEventListener('click',function(){
    cadreOptionABCFonctionC.classList.toggle("cadreOptionABCFonctionCAction")
    console.log("cadreOptionABCFonctionCAction")
});