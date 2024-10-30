

const motsClasses = {
"si":"couleur3",
"locale":"couleur1",
    };
    
    
    function appliquerClassesTexte(element) {
        let ABC = element.innerHTML;
    
        // <span>
        for (const [mot, classe] of Object.entries(motsClasses)) {
            const regex = new RegExp(`\\b${mot}\\b`, "g");
            ABC = ABC.replace(regex, `<span class="${classe}">${mot}</span>`);
        }
    
        element.innerHTML = ABC;
    }
    
    // La fonction sur le ID
    const elementABC = document.getElementById("ABC");
    appliquerClassesTexte(elementABC);