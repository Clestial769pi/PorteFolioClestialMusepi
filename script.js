const motsClasses2 = {
    "A":"couleur1",
    "B":"couleur2",
    "C":"couleur3",
    "D":"couleur4",
    "Bleu":"couleur1",
    "Rouge":"couleur2",
    "Violet":"couleur3",
    "Jaune":"couleur4",
    "les côtés":"couleur4",
    "extrêmes":"couleur4",
    // "L'extrême":"couleur4",
    "Contradictions":"couleur4",
    "paradoxes":"couleur4",
    "pôles":"couleur3",
    "s'inverser":"couleur4",
    "convertir":"couleur3",
    "Positive":"couleur1",
    "Négative":"couleur2",
    "gentil":"couleur1",
    "méchant":"couleur2",
    "tôt":"couleur1",
    "tard":"couleur2",
    "tout":"couleur1",
    "rien":"couleur2",
    "ensembles":"couleur3",
    "extrême":"couleur4",
    "extrémités":"couleur4",
    "centre":"couleur3",
    "l'un":"couleur1",
    "l'autre":"couleur2",
    "variables":"couleur3",
    "compromis":"couleur3",
    "croisements":"couleur3",
    "Ordre":"couleur1",
    "Chaos":"couleur2",
    "anatomies":"couleur3",
    "binaires":"couleur3",
    "troisième":"couleur3",
    "métaphoriques":"couleur3",
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