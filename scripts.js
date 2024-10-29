const Lien = {
    pageAcceuil: '<a href="index.html"><li id="lienPageAcceuilCouleur">Acceuil</li></a>',
    pageMonLore: '<a href="pageMusique.html"><li id="lienPageMusiqueCouleur">Musique</li></a>',
    pageMusique: '<a href="pageMonLore.html"><li id="lienPageMonLoreCouleur">Mon lore</li></a>',
    pageNews: '<a href="pageNews.html"><li id="lienPageNews">News !</li></a>',
    pageReseaux: '<a href="pageReseaux.html"><li id="lienPageReseaux">Réseaux</li></a>',
}
const listLiens = 
`
<ul style="list-style: none;">
    ${Lien.pageAcceuil}
    ${Lien.pageMusique}
    ${Lien.pageReseaux}
    ${Lien.pageMonLore}
    ${Lien.pageNews}
</ul> 
`
// Application des liens sur ID > #lesLiensJS
document.querySelector('#lesLiensJS').innerHTML = listLiens;

const motsClasses = {
// A
"Liberté":"couleur1",
"l'Alpha":"couleur1",
"commencement":"couleur1",
"paradis":"couleur1",
"basse":"couleur1",
"Gauchiste":"couleur1",
"premier":"couleur1",
"1ᵉʳ groupe ":"couleur1",
"1ʳᵉ personne":"couleur1",
"petite":"couleur1",
"le paradis":"couleur1",
"Adam":"couleur1",
"dit : (gère)":"couleur1",
"vomir":"couleur1",
"Masculin":"couleur1",
"Catholique":"couleur1",
"Omnipotent":"couleur1",
"Le baptême":"couleur1",
"doigts":"couleur1",
"Patriarcat":"couleur1",
"Âme":"couleur1",
"racine":"couleur1",
"Dieu":"couleur1",
"dieu":"couleur1",
"Acheter":"couleur1",
"Prédateur":"couleur1",
"Faible":"couleur1",
"faible":"couleur1",
"Poison":"couleur1",
"Ange":"couleur1",
"X":"couleur1",
"soi-même":"couleur1",
"Je":"couleur1",
"je":"couleur1",
"Être":"couleur1",
"être":"couleur1",
"faune":"couleur1",
"bon":"couleur1",
"L'Entité 01":"couleur1",
"Occident":"couleur1",
"gentil":"couleur1",
"Moyen-Orient":"couleur1",
"0":"couleur1",
"Terre":"couleur1",
"terre":"couleur1",
"Naissent":"couleur1",
"naissent":"couleur1",
"Passé":"couleur1",
"passé":"couleur1",
"Licorne blanche":"couleur1",
"licorne blanche":"couleur1",
"Petit":"couleur1",
"petit":"couleur1",
"1":"couleur1",
"On":"couleur1",
"on":"couleur1",
"A": "couleur1",
"Bleu": "couleur1",
"bleu": "couleur1",
"Négative": "couleur1",
"négative": "couleur1",
"Négatif": "couleur1",
"négatif": "couleur1",
"Négatives": "couleur1",
"négatives": "couleur1",
"Négatifs": "couleur1",
"négatifs": "couleur1",
"Gauche": "couleur1",
"gauche": "couleur1",
"Moins": "couleur1",
"moins": "couleur1",
"Yang":"couleur1",
"yang":"couleur1",
"Homme":"couleur1",
"homme":"couleur1",
"Père":"couleur1",
"père":"couleur1",
"Ordre":"couleur1",
"ordre":"couleur1",
"Démocratie":"couleur1",
"démocratie":"couleur1",
"Producteur":"couleur1",
"Lune":"couleur1",
"l'alpha":"couleur1",
"haut":"couleur1",
"alchimique":"couleur1",
"solution":"couleur1",
"réalité":"couleur1",
"oui":"couleur1",
"vie":"couleur1",
"Vie":"couleur1",
"petits":"couleur1",
" zoom ":"couleur1",
" Zoom ":"couleur1",
// B
"fraternité":"couleur2",
"l'Oméga":"couleur2",
"fin":"couleur2",
"haute":"couleur2",
"grands":"couleur2",
"Droitard":"couleur2",
"dernier":"couleur2",
"2ᵉ groupe":"couleur2",
"2ᵉ personne":"couleur2",
"grande":"couleur2",
"enfer":"couleur2",
"Ève":"couleur2",
"(digère)":"couleur2",
"chier":"couleur2",
"féminin":"couleur2",
"opposition":"couleur2",
"Omniscient":"couleur2",
"Protestant":"couleur2",
"la confirmation":"couleur2",
"orteils":"couleur2",
"matriarcat":"couleur2",
"esprit":"couleur2",
"branches":"couleur2",
"Diable":"couleur2",
"diable":"couleur2",
"vendre":"couleur2",
"proie":"couleur2",
"Fort":"couleur2",
"fort":"couleur2",
"antidote":"couleur2",
"démon":"couleur2",
"Y":"couleur2",
"les autres":"couleur2",
"vous":"couleur2", 
"il":"couleur2", 
"elle":"couleur2", 
"ils":"couleur2", 
"elles":"couleur2",
"Tu":"couleur2",
"tu":"couleur2",
"Avoir":"couleur2",
"avoir":"couleur2",
"flore":"couleur2",
"mauvais":"couleur2",
"L'Entité 02":"couleur2",
"Proche-Orient":"couleur2",
"Orient":"couleur2",
"méchant":"couleur2",
"opposé":"couleur2",
"adversaire":"couleur2",
"Proche-Orient":"couleur2",
"1":"couleur2",
"Cieux":"couleur2",
"cieux":"couleur2",
"Ciel":"couleur2",
"ciel":"couleur2",
"Meurent":"couleur2",
"meurent":"couleur2",
"Futur":"couleur2",
"futur":"couleur2",
"Licorne rose":"couleur2",
"licorne rose":"couleur2",
"Grand":"couleur2",
"grand":"couleur2",
"2":"couleur2",
"Off":"couleur2",
"off":"couleur2",
"B": "couleur2",
"Rouge": "couleur2",
"rouge": "couleur2",
"Positive": "couleur2",
"positive": "couleur2",
"Positif": "couleur2",
"positif": "couleur2",
"Positives": "couleur2",
"positives": "couleur2",
"Positifs": "couleur2",
"positifs": "couleur2",
"Droite": "couleur2",
"droite": "couleur2",
"Droites": "couleur2",
"droites": "couleur2",
"Plus": "couleur2",
"plus": "couleur2",
"Yin":"couleur2",
"yin":"couleur2",
"Femme":"couleur2",
"femme":"couleur2",
"Mère":"couleur2",
"mère":"couleur2",
"Chaos":"couleur2",
"chaos":"couleur2",
"Dictature":"couleur2",
"dictature":"couleur2",
"consommateur":"couleur2",
"Soleil":"couleur2",
"L'oméga":"couleur2",
"bas":"couleur2",
"satanisme":"couleur2",
"dissolution":"couleur2",
"récit":"couleur2",
"non":"couleur2",
"mort":"couleur2",
"Mort":"couleur2",
"grand":"couleur2",
" dézoom ":"couleur2",
" Dézoom ":"couleur2",
"Satan":"couleur2",
// C
"égalité":"couleur3",
"équations":"couleur3",
"Centriste":"couleur3",
"3ᵉ groupe":"couleur3",
"3ᵉ personne":"couleur3",
"échelle":"couleur3",
"puissance":"couleur3",
"fusionnels":"couleur3",
"conflictuels":"couleur3",
"violent":"couleur3",
"taille":"couleur3",
"et":"couleur3",
"Omniprésent":"couleur3",
"Orthodoxe":"couleur3",
"la première communion":"couleur3",
"02":"couleur3",
"05":"couleur3",
"sens":"couleur3",
"membres":"couleur3",
"2 hémisphères":"couleur3",
"infiniment":"couleur3",
"corps":"couleur3",
"trident":"couleur3",
"Trinité":"couleur3",
"tronc":"couleur3",
"fruit":"couleur3",
"La France":"couleur3",
"intéractions":"couleur3",
"chromosomes":"couleur3",
"Nous":"couleur3",
"sommes":"couleur3",
"même":"couleur3",
"cohabitation":"couleur3",
"l'histoire":"couleur3",
"relations":"couleur3",
"L'énergie":"couleur3",
"énergie":"couleur3",
"longueur d'onde":"couleur3",
"être":"couleur3",
"binaire":"couleur3",
"binaires":"couleur3",
"anatomies":"couleur3",
"raisonnement":"couleur3",
"variables":"couleur3",
"ensembles":"couleur3",
"ensemble":"couleur3",
"Ensembles":"couleur3",
"Ensemble":"couleur3",
"compromis":"couleur3",
"croisements":"couleur3",
"entremêlé":"couleur3",
"éléments":"couleur3",
"rapports de force":"couleur3",
"Monde":"couleur3",
"monde":"couleur3",
"bête":"couleur3",
"Tiers":"couleur3",
"tiers":"couleur3",
"Entre-deux":"couleur3",
"entre-deux":"couleur3",
"3":"couleur3",
"C": "couleur3",
"Violet": "couleur3",
"violet": "couleur3",
"Plus / moins": "couleur3",
"plus / moins": "couleur3",
"Milieu": "couleur3",
"milieu": "couleur3",
"Entre-deux":"couleur3",
"Centre":"couleur3",
"centre":"couleur3",
"Ou": "couleur3",
"ou": "couleur3",
"Key":"couleur3",
"key":"couleur3",
"symétriques":"couleur3",
// D
"extrémités":"couleur4",
"vérité":"couleur4",
"homogènes":"couleur4",
"Paix":"couleur4",
"paix":"couleur4",
" D ": "couleur4",
"Cadre":"couleur4",
"cadre":"couleur4",
"limites":"couleur4",
// E
"E": "couleur5",

//C (spécial)
"pirate":"couleur3",
"bateau":"couleur3",
"symbolique":"couleur3",
"Mathématiques":"couleur3",
"Philosophique":"couleur3",
"Symbolique":"couleur3",
"fonction":"couleur3",
"longueurs d'onde":"couleur3",
"Fréquences":"couleur3",
"fréquences":"couleur3",
"Fréquence":"couleur3",
"fréquence":"couleur3",
"l'arc-en-ciel":"couleur3",
"discipline":"couleur3",
"Indika":"couleur3",
"Licorne":"couleur3",
"licorne":"couleur3",
"Licornes":"couleur3",
"licornes":"couleur3",
"Pensée":"couleur3",
"pensée":"couleur3",
"Pensées":"couleur3",
"pensées":"couleur3",
"Système":"couleur3",
"système":"couleur3",
"Guerre":"couleur3",
"guerre":"couleur3",
"Guerres":"couleur3",
"guerres":"couleur3",
"Génocides":"couleur3",
"génocides":"couleur3",
"Conflits":"couleur3",
"conflits":"couleur3",
"Sophisme":"couleur3",
"sophisme":"couleur3",
"Pi": "couleur3",
"pi": "couleur3",
"piquante": "couleur3",
"Piquante": "couleur3",
// "=":"couleur3",
"Mathématique": "couleur3",
"mathématique": "couleur3",
"Quanta": "couleur3",
"quanta": "couleur3",
"Quantité": "couleur3",
"quantité": "couleur3",
"Quantit&eacute":"couleur3",
"quantit&eacute":"couleur3",
"Quantique": "couleur3",
"quantique": "couleur3",
"Arme": "couleur3",
"arme": "couleur3",
"quantique": "couleur3",
"Quantique": "couleur3",
"Centrée": "couleur3",
"centrée": "couleur3",
"Art": "couleur3",
"art": "couleur3",
"Mettre": "couleur3",
"mettre": "couleur3",
"Émettre": "couleur3",
"émettre": "couleur3",
"Mètre": "couleur3",
"mètre": "couleur3",
"Maître": "couleur3",
"maître": "couleur3",
"Maîtrise": "couleur3",
"maîtrise": "couleur3",
"Perce": "couleur3",
"perce": "couleur3",
"Persévérance": "couleur3",
"persévérance": "couleur3",
"Sévère": "couleur3",
"sévère": "couleur3",
"Percer": "couleur3",
"percer": "couleur3",
"Perception": "couleur3",
"perception": "couleur3",
"Aiguille": "couleur3",
"aiguille": "couleur3",
"Aiguiller": "couleur3",
"aiguiller": "couleur3",
"Définir": "couleur3",
// "définir": "couleur3",
"Définition": "couleur3",
"définition": "couleur3",
"Finir": "couleur3",
"finir": "couleur3",
"Fini": "couleur3",
"fini": "couleur3",
"Mesure": "couleur3",
"mesure": "couleur3",
"Attention": "couleur3",
"attention": "couleur3",
"Intention": "couleur3",
"intention": "couleur3",
"Tension": "couleur3",
"tension": "couleur3",
"Attraction": "couleur3",
"attraction": "couleur3",
"Contraction": "couleur3",
"contraction": "couleur3",
"Contrat": "couleur3",
"contrat": "couleur3",
"Contact": "couleur3",
"contact": "couleur3",
"Tact": "couleur3",
"tact": "couleur3",
"Qualifier": "couleur3",
"qualifier": "couleur3",
"Qualité": "couleur3",
"qualité": "couleur3",
"Confier": "couleur3",
"confier": "couleur3",
"Confiance": "couleur3",
"confiance": "couleur3",
"Confidence": "couleur3",
"confidence": "couleur3",
"Confidentiel": "couleur3",
"confidentiel": "couleur3",
"Danse": "couleur3",
"danse": "couleur3",
// "Ciel": "couleur3",
// "ciel": "couleur3",
"∞":"couleur3",
"Espace et Temps":"couleur3",
"Symbole":"couleur3",
"symbole":"couleur3",
"Fiancée": "couleur3",
"fiancée": "couleur3",
"Fiabilité": "couleur3",
"fiabilité": "couleur3",
"Habilité": "couleur3",
"habilité": "couleur3",
"Responsabilité": "couleur3",
"responsabilité": "couleur3",
"Réponse": "couleur3",
"réponse": "couleur3",
"Pointe": "couleur3",
"pointe": "couleur3",
"Pointue": "couleur3",
"pointue": "couleur3",
"Point": "couleur3",
"point": "couleur3",
"Pointillé": "couleur3",
"pointillé": "couleur3",
"Trait": "couleur3",
"trait": "couleur3",
"Habilité": "couleur3",
"habilité": "couleur3",
"Responsabilité": "couleur3",
"responsabilité": "couleur3",
"Fiabilité": "couleur3",
"fiabilité": "couleur3",
"Concentration": "couleur3",
"concentration": "couleur3",
"Centration": "couleur3",
"centration": "couleur3",
"Dualité ":"couleur3",
"dualité ":"couleur3",
"Orientation":"couleur3",
"orientation":"couleur3",
"Progression":"couleur3",
"progression":"couleur3",
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
const monElement = document.getElementById("ABC");
appliquerClassesTexte(monElement);