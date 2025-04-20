const motsClasses2 = {
    "A":"couleur1",
    "B":"couleur2",
    "C":"couleur3",
    "Bleu":"couleur1",
    "Rouge":"couleur2",
    "Violet":"couleur3",
};
        function appliquerClassesTexte(element) {
            let ABC = element.innerHTML;
        // Le span
            for (const [mot, classe] of Object.entries(motsClasses2)) {
                const regex = new RegExp(`\\b${mot}\\b`, "g");
                ABC = ABC.replace(regex, `<span class="${classe}">${mot}</span>`);
            }
        
            element.innerHTML = ABC;
        }
        // Le id ABC dans body
        const elementABC = document.getElementById("ABC");
        appliquerClassesTexte(elementABC);