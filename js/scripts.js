const Lien = {
    pageAcceuil: '<a href="index.html"><li id="lienPageAcceuilCouleur">Acceuil</li></a>',
    pageMonLore: '<a href="html/pageMusique.html"><li id="lienPageMusiqueCouleur">Musique</li></a>',
    pageMusique: '<a href="html/pageMonLore.html"><li id="lienPageMonLoreCouleur">Mon lore</li></a>',
    pageNews: '<a href="html/pageNews.html"><li id="lienPageNews">News !</li></a>',
    pageReseaux: '<a href="html/pageReseaux.html"><li id="lienPageReseaux">Réseaux</li></a>',
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

// Youtube API

// const apiKey1 = 'AIzaSyDZ0S7orN0fS11fOL0c78qrVn2niFXrEWI';
// const apiKey2 = 'AIzaSyBKZPm-m2oURe-W-GS9Q_-r9XtagVFUTJs';
// const playlistId1 = 'PLKC6RJj08gB-RPI9RuX10odCGYEW66twJ';
// const playlistId2 = 'PLKC6RJj08gB8Ojs4BHj7CGMhBxQ2ocxBb';
// const videoId2 = 'videoseries?si=U2KGhGIaP0erQtfM';
// const videoId1 = 'videoseries?si=9N5PsQQ8ygvsSZur';

// const videoContainer1 = document.getElementById('video-container1');
// const videoContainer2 = document.getElementById('video-container2');

// // video2
// async function fetchPlaylistVideos() {
//     try {
//         const response = await fetch(`https://www.googleapis.com/youtube/v3/playlistItems?part=snippet&playlistId=${playlistId2}&key=${apiKey2}`);
//         if (!response.ok) {
//             throw new Error('Erreur lors du chargement de la playlist');
//         }
//         const data = await response.json();
//         displayVideos(data.items);
//     } catch (error) {
//         console.error('Error:', error);
//         videoContainer2.innerHTML = '<p>Erreur lors du chargement de la playlist.</p>';
//     }
// }

// function displayVideos(videos) {
//     const uniqueVideos = new Set();

//     videos.forEach(video => {
//         const videoId2 = video.snippet.resourceId.videoId2;

//         if (!uniqueVideos.has(videoId2)) {
//             uniqueVideos.add(videoId2);

//             videoContainer2.innerHTML += `
//                         <iframe id="iFrameVideo" width="100%" height="250px" src="https://www.youtube.com/embed/${videoId2}" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen target="_blank"></iframe>
//                         `;
//         }
//     });

//     if (uniqueVideos.size === 0) {
//         videoContainer2.innerHTML = '<p>Aucune vidéo disponible dans cette playlist.</p>';
//     }
// }
// fetchPlaylistVideos();
// // Video1
// async function fetchPlaylistVideos() {
//     try {
//         const response = await fetch(`https://www.googleapis.com/youtube/v3/playlistItems?part=snippet&playlistId=${playlistId1}&key=${apiKey1}`);
//         if (!response.ok) {
//             throw new Error('Erreur lors du chargement de la playlist');
//         }
//         const data = await response.json();
//         displayVideos(data.items);
//     } catch (error) {
//         console.error('Error:', error);
//         videoContainer1.innerHTML = '<p>Erreur lors du chargement de la playlist.</p>';
//     }
// }

// function displayVideos(videos) {
//     const uniqueVideos = new Set();

//     videos.forEach(video => {
//         const videoId1 = video.snippet.resourceId.videoId1;

//         if (!uniqueVideos.has(videoId1)) {
//             uniqueVideos.add(videoId1);

//             videoContainer1.innerHTML += `
//                         <iframe id="iFrameVideo" width="100%" height="250px" src="https://www.youtube.com/embed/${videoId1}" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen target="_blank"></iframe>
//                         `;
//         }
//     });

//     if (uniqueVideos.size === 0) {
//         videoContainer1.innerHTML = '<p>Aucune vidéo disponible dans cette playlist.</p>';
//     }
// }
// fetchPlaylistVideos();