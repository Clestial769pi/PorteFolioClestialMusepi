const Lien = {
    pageAcceuil: '<a href="../index.html"><li id="lienPageAcceuilCouleur">Acceuil</li></a>',
    pageMonLore: '<a href="../html/pageMusique.html"><li id="lienPageMusiqueCouleur">Musique</li></a>',
    pageMusique: '<a href="../html/pageMonLore.html"><li id="lienPageMonLoreCouleur">Mon lore</li></a>',
    pageNews: '<a href="../html/pageNews.html"><li id="lienPageNewsCouleur">News !</li></a>',
    pageReseaux: '<a href="../html/pageReseaux.html"><li id="lienPageReseauxCouleur">Réseaux</li></a>',
    pageToDoList: '<a href="../html/pageToDoList.html"><li id="lienPageToDoListCouleur">To Do List</li></a>',
    pageCommissionsOuvertes: '<a href="../html/pageCommissionsOuvertes.html"><li id="lienPageCommissionsOuvertes">Commissions Ouvertes !</li></a>',
    paddingDown : '<div id="bottomPadding"></div>',
}
const listLiens = 
`
<ul style="list-style: none;">
    ${Lien.pageAcceuil}
    ${Lien.pageMusique}
    ${Lien.pageReseaux}
    ${Lien.pageMonLore}
    ${Lien.pageToDoList}
    ${Lien.pageCommissionsOuvertes}
    ${Lien.pageNews}
    ${Lien.paddingDown}
</ul> 
`
// Application des liens sur ID > #lesLiensJS
document.querySelector('#lesLiensJS').innerHTML = listLiens;