let boutonPartageOuverture = document.querySelector(".button-share-container")

boutonPartageOuverture.addEventListener("click", () => {


    let divContenuHidden = document.querySelector(".sharing-container")
    divContenuHidden.style.display = "flex"

    let changementCouleurBoutonOuverture = document.querySelector (".button-share-container img")

    changementCouleurBoutonOuverture.style.filter = "brightness(0) invert(1)"
    changementCouleurBoutonOuverture.style.border = "none"
    boutonPartageOuverture.style.backgroundColor = " hsl(214, 17%, 51%)"
})


let boutonPartageFermeture = document.querySelector (".button-share-hidden-container")


boutonPartageFermeture.addEventListener("click", () => {


    let divContenuHidden = document.querySelector(".sharing-container")
    divContenuHidden.style.display = "none"

 

})




let sharingContainerHidden = document.querySelector(".sharing-container")


document.querySelector("body").addEventListener("click", (event) => {
    
    if (!sharingContainerHidden.contains(event.target) && 
        !boutonPartageOuverture.contains(event.target)){


        let divContenuHidden = document.querySelector(".sharing-container")
        divContenuHidden.style.display = "none"

        let changementCouleurBoutonOuverture = document.querySelector (".button-share-container img")
        boutonPartageOuverture.style.backgroundColor = "hsl(210, 46%, 95%)"
        changementCouleurBoutonOuverture.style.filter = "none"

    

    }

})
