const myWord = [
    "BONJOUR",
    "BONSOIR",
    "AUREVOIR"
];

const allButton = document.querySelectorAll("button[data-letter]");

//On applique une ecoute au chargement de la page
window.addEventListener("DOMContentLoaded", function () {
    //On choisi un mot random dans notre tableaux
    let wordRandom = myWord[Math.floor(Math.random() * 3)];
    //On cree une boucle qui permet de selectionner chaque lettre du mot
    for (i = 0; i < wordRandom.length; i++) {
        //On cree une nouvelle div
        let createDiv = document.createElement("div");
        //On applique l'attribut data-letterguest a chaque lettre et on lui a aplique sa propre valeur
        createDiv.setAttribute("data-letterguest", wordRandom[i]);
        //On applique l'attribut class a chaque lettre et on appelle cette class invisible
        createDiv.setAttribute("class", "invisible");
        //On affiche un underscore a l'ecran
        createDiv.innerHTML = "_";
        //La nouvelle div devien l'enfant de la div wordGuest
        wordGuest.appendChild(createDiv);
    }
});

//On applique une ecoute au click du bouton reset
buttonReset.addEventListener("click", function () {
    const selectDiv = document.querySelectorAll("div[data-letterguest]");
    //On fait une condition qui dit que si la longueur de mon noeud est superieur a 1
    if (selectDiv.length > 1) {
        //On refresh la page
        location.reload();
        //     for (i = 0; i < selectDiv.length; i++) {
        //         selectDiv[i].remove();
    }
    //     let wordRandom = myWord[Math.floor(Math.random() * 3)];
    //     for (i = 0; i < wordRandom.length; i++) {
    //         let createDiv = document.createElement("div");
    //         createDiv.setAttribute("data-letterguest", wordRandom[i]);
    //         createDiv.setAttribute("class", "invisible");
    //         createDiv.innerHTML = wordRandom[i];
    //         wordGuest.appendChild(createDiv);
    //     }
    // }
});

let winCondition = 0;

//On parcours notre noeud de button defini plus haut
allButton.forEach(element => {
    //On applique un ecouteur au click de chaque bouton
    element.addEventListener("click", function () {
        const allDiv = document.querySelectorAll("div[data-letterguest]");
        //Je desactive le bouton apres chaque clic
        this.disabled = true;
        //On cree une boucle qui nous permet de parcourir les nouvelle div cree
        for (i = 0; i < allDiv.length; i++) {
            //On dit que si la data de la letre cliquer est egale a la data de la lettre parcouru
            if (this.dataset.letter == allDiv[i].dataset.letterguest) {
                //On applique une nouvelle classe a lettre
                allDiv[i].className = "visible";
                //On affiche sa propre lettre a l'ecran
                allDiv[i].innerHTML = this.dataset.letter;
                //On definit une valeur pour cette lettre
                this.value = 1;
                //On incremente la variable de win condition definit plus haut
                winCondition++;
                selectCasePilulle.className="pilulleAnimeTouche"
                setTimeout(pilluleMissing, 3200);
                        function pilluleMissing() {
                            selectCasePilulle.className="";
                        }
                setTimeout (visuelcaseVirusAnimeTouche,2300)
                function visuelcaseVirusAnimeTouche () {
                selectCaseVirus.className="visuelcaseVirusAnimeTouche"
                        }
                setTimeout (visuelcaseVirus,2500)
                function visuelcaseVirus () {
                selectCaseVirus.className="visuelcaseVirus"
                                }
                //On dit que si la variable win condition est egale a la longueur de notre noeud alors
                if (winCondition == allDiv.length) {
                    //On cree une boucle pour parcourir notre noeud de bouton
                    for (i = 0; i < allButton.length; i++) {
                        //On a gagner la partie on desactive tout les bouton
                        allButton[i].disabled = true;
                        //Applique classe pillule fin(animate) +delay + Applique classe virus fin + applique endingWin
                        
                        selectCasePilulle.className="pilulleAnime0"
                        setTimeout(youWin, 3200);
                        function youWin() {
                            end.innerHTML="YOU WIN";
                        }
                        setTimeout(endingWin, 2700)
                        function endingWin () {
                            end.className="endingWin";
                        }
                        setTimeout (visuelcaseVirusFin,2200)
                        function visuelcaseVirusFin () {
                            selectCaseVirus.className="visuelcaseVirusFin"
                        }
                        setTimeout(virusMissing, 2500)
                        function virusMissing () {
                        selectCaseVirus.className="virusMissing"
                        }
                    }
                }
            }
        }
        //On dit si la valeur de notre element est egal a 1 (defini dans la condition plus haut)
        if (this.value == 1 ) {
            //On change le background
            this.style.background = "green";
            //On change la couleur du text
            this.style.color = "white";
            // window.alert ("ok")
            // let envoie = 0
            // envoie++;
            // window.alert(envoie.value)
            // switch (envoie.value) {
            //     case "1":
            //         window.alert("ok")
            //         selectCasePilulle.className="pilulleAnime0"
            //         break 
            // }
        } else {
            //On change le background
            this.style.background = "red";
            //On change la couleur du text
            this.style.color = "white";
            // if (life.value == 1) {
            //     life.value = "0";
            //     for (i = 0; i < allButton.length; i++) {
            //         allButton[i].disabled = true;
            //     }
            // } else {
            //     life.value--;
            // }
            //On cree un switch pour notre compteur de lettre fausse
            switch (life.value) {
             // pour chaque cas on applique une classe contenant une inamation   
                case "8":
                    life.value--;
                    selectCasePilulle.className="pilulleAnime7"
                    break;
                case "7":
                    life.value--;
                    
                    selectCasePilulle.className="pilulleAnime6"
                    break;
                case "6":
                    life.value--;
                   
                    selectCasePilulle.className="pilulleAnime5"
                    break;
                case "5":
                    life.value--;
                   
                    selectCasePilulle.className="pilulleAnime4"
                    break;
                case "4":
                    life.value--;
                   
                    selectCasePilulle.className="pilulleAnime3"
                    break;
                case "3":
                    life.value--;
                    
                    selectCasePilulle.className="pilulleAnime2"
                    break;
                case "2":
                    life.value--;
                    selectCasePilulle.className="pilulleAnime1"
                    break;
                case "1":
                    // condition de défaite life=0 on applique nos classe contenant les animations
                    life.value = "0";
                    selectCaseVirus.className="visuelcaseVirusAnime"
                    selectCaseMario.className="visuelcaseMarioFin"
                    selectCasePilulle.className="pilulleLoose"
                    setTimeout(marioMissing,2000)
                    function marioMissing () {
                        selectCaseMario.className="marioMissing"
                        setTimeout(endingLoose, 2700)
                        function endingLoose () {
                            end.className="endingLoose";
                        }
                        setTimeout(youLoose, 3200)
                        function youLoose() {
                            end.innerHTML="YOU LOOSE";
                        }
                       
                    }
                    for (i = 0; i < allButton.length; i++) {
                        allButton[i].disabled = true;
                    }
                    break;
                default:
                    console.log("Vous avez fait une erreur");
                    break;
            }
        }
    });
});