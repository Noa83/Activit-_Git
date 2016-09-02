/*
Activité 2
*/

// Liste des liens Web à afficher. Un lien est défini par :
// - son titre
// - son URL
// - son auteur (la personne qui l'a publié)
var listeLiens = [
    {
        titre: "So Foot",
        url: "http://sofoot.com",
        auteur: "yann.usaille"
    },
    {
        titre: "Guide d'autodéfense numérique",
        url: "http://guide.boum.org",
        auteur: "paulochon"
    },
    {
        titre: "L'encyclopédie en ligne Wikipedia",
        url: "http://Wikipedia.org",
        auteur: "annie.zette"
    }
];

// Crée et renvoie un élément DOM affichant les données d'un lien
// Le paramètre lien est un objet JS représentant un lien
function creerElementLien(lien) {
    var titreLien = document.createElement("a");
    titreLien.href = lien.url;
    titreLien.style.color = "#428bca";
    titreLien.style.textDecoration = "none";
    titreLien.style.marginRight = "5px";
    titreLien.appendChild(document.createTextNode(lien.titre));

    var urlLien = document.createElement("span");
    urlLien.appendChild(document.createTextNode(lien.url));

    // Cette ligne contient le titre et l'URL du lien
    var ligneTitre = document.createElement("h4");
    ligneTitre.style.margin = "0px";
    ligneTitre.appendChild(titreLien);
    ligneTitre.appendChild(urlLien);

    // Cette ligne contient l'auteur
    var ligneDetails = document.createElement("span");
    ligneDetails.appendChild(document.createTextNode("Ajouté par " + lien.auteur));

    var divLien = document.createElement("div");
    divLien.classList.add("lien");
    divLien.appendChild(ligneTitre);
    divLien.appendChild(ligneDetails);

    return divLien;
}

var contenu = document.getElementById("contenu");

// Parcours de la liste des liens et ajout d'un élément au DOM pour chaque lien
listeLiens.forEach(function (lien) {
    var elementLien = creerElementLien(lien);
    contenu.appendChild(elementLien);
});

// Creation du bouton initial et de sa fonction associée
var boutonElt = document.getElementById("bouton");

// ajout gestionnaire pour l'evenement click
boutonElt.addEventListener("click", function (){
    var form = document.getElementById("form");
    form.style.display = "block";
    var bouton1 = document.getElementById("bouton");
    bouton1.style.display = "none";
});

//gestion de l'action du bouton d'ajout du formulaire
var boutonSubmit = document.getElementById("soumettre");

//ajout du gestionnaire pour l'evenment click
boutonSubmit.addEventListener("click", function(){

    //gestion validite champs
    if (document.getElementById("form").checkValidity()){


        //gestion de l'ajout du http://
        var urlInitiale = document.getElementById("url").value;
        var validiteUrl1 = urlInitiale.indexOf('http://');
        var validiteUrl2 = urlInitiale.indexOf('https://');
            if (validiteUrl1 == 0) {
                var urlFinale = urlInitiale;
            } else if (validiteUrl2 == 0){
                var urlFinale = urlInitiale; 
            }else{
                var urlFinale = "http://"+ urlInitiale;
            };

        // creation du nouveau lien
        var NouveauLien = {
            titre : document.getElementById("titre").value,
            url : urlFinale,
            auteur : document.getElementById("nom").value, 
        };
        //insertion du nouveau lien   
        var nouveauElementLien = creerElementLien(NouveauLien);
        var precedent = contenu.firstChild;
        contenu.insertBefore(nouveauElementLien, precedent); 
        
        //affichage de la confirmation d'ajout
        var encadre = document.createElement("div");
        encadre.id = "message";
        var titreEncadre = document.getElementById("titre").value;
        encadre.innerText = "Le lien "+ titreEncadre +" a bien été ajouté";
        encadre.style.color = "black";
        encadre.style.fontSize = "1,5em";
        encadre.style.padding = "15px";
        encadre.style.backgroundColor = "#5ec8dd";
        encadre.style.marginBottom = "20px";
        var bouton = document.getElementById("bouton");
        cadre.insertBefore(encadre, bouton);

        //reinit du bouton base + vider formulaire
        var form = document.getElementById("form");
        form.style.display = "none";
        var bouton1 = document.getElementById("bouton");
        bouton1.style.display = "block";
        document.getElementById("titre").value = "";
        document.getElementById("url").value = "";
        document.getElementById("nom").value = "";

       

    }

});