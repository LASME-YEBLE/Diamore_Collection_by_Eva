const produits = [
  {

    prix: "45000",
    image: "/accessoire/WhatsApp Image 2025-11-20 à 11.59.08_557bd1d5.jpg"
  },
  {
    prix: "60€",
    image: "/accessoire/WhatsApp Image 2025-11-20 à 11.59.08_663a8432.jpg"
  },
  {
    prix: "55€",
    image: "/accessoire/WhatsApp Image 2025-11-20 à 11.59.09_85d1f33a.jpg"
  },
  {
    prix: "60€",
    image: "/accessoire/WhatsApp Image 2025-11-20 à 11.59.09_eb83c484.jpg"
  },
  {
    prix: "55€",
    image: "/CHAUSSURE/WhatsApp Image 2025-11-19 à 16.48.29_d16dfc2f.jpg"
  },
  {
    prix: "60€",
    image: "/accessoire/WhatsApp Image 2025-11-20 à 11.59.10_0f21d663.jpg"
  },
  {
    prix: "55€",
    image: "/accessoire/WhatsApp Image 2025-11-20 à 11.59.10_24efc59f.jpg"
  },
  {
    prix: "60€",
    image: "/accessoire/WhatsApp Image 2025-11-20 à 11.59.10_761a7b99.jpg"
  },
  {
    prix: "55€",
    image: "/accessoire/WhatsApp Image 2025-11-20 à 11.59.10_91ac1ac1.jpg"
  },
  {
    nom: "Chaussures de Ville",
    prix: "60€",
    image: "/accessoire/WhatsApp Image 2025-11-20 à 11.59.11_011fbd56.jpg"
  },
  {
    nom: "Baskets Sport",
    prix: "55€",
    image: "/accessoire/WhatsApp Image 2025-11-20 à 11.59.16_fded15db.jpg"
  },
  {
    prix: "60€",
    image: "/accessoire/WhatsApp Image 2025-11-20 à 11.59.16_79f74638.jpg"
  },
  {
    prix: "55€",
    image: "/accessoire/WhatsApp Image 2025-11-20 à 11.59.15_e66ce79c.jpg"
  },
  {
    prix: "60€",
    image: "/accessoire/WhatsApp Image 2025-11-20 à 11.59.15_4ccdf039.jpg"
  },
  {
    prix: "55€",
    image: "/accessoire/WhatsApp Image 2025-11-20 à 11.59.14_445268d6.jpg"
  },
  {
    prix: "60€",
    image: "/accessoire/WhatsApp Image 2025-11-20 à 11.59.13_e689b3bd.jpg"
  },

];

// Fonction pour afficher les produits
function afficherProduits() {
  const sectionProduits = document.querySelector(".products");

  produits.forEach(produit => {
    const article = document.createElement("article");
    article.classList.add("produit");

    article.innerHTML = `
  <img src="${produit.image}" alt="${produit.nom || 'Produit'}" />
  <h2>${produit.nom || 'Article'}</h2>
  <p class="prix">${produit.prix.includes("€") ? produit.prix : produit.prix + " FCFA"}</p>
  <a 
    class="acheter" 
    href="https://wa.me/2250789458683?text=${encodeURIComponent(`Bonjour, je suis intéressé par ce produit : ${produit.nom || 'Produit'} au prix de ${produit.prix}. Voici l'image : ${produit.image}`)}" 
    target="_blank"
  >
    Acheter
  </a>
`;

    sectionProduits.appendChild(article);
  });
}

// Exécuter la fonction après le chargement de la page
document.addEventListener("DOMContentLoaded", afficherProduits);