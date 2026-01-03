const produits = [
  {

    prix: "45000",
    image: "/complet deux pieces/complet 2 Pièce  - Copie.jpg"
  },
  {
    prix: "60€",
    image: "/complet deux pieces/complet 2 Pièce 4 - Copie.jpg"
  },
  {
    prix: "55€",
    image: "/complet deux pieces/WhatsApp Image 2025-11-19 à 16.48.31_46d65c42.jpg"
  },
  {
    prix: "60€",
    image: "/complet deux pieces/WhatsApp Image 2025-11-19 à 16.48.32_2c37fff6.jpg"
  },
  {
    prix: "55€",
    image: "/complet deux pieces/WhatsApp Image 2025-11-19 à 16.48.32_4813e697.jpg"
  },
  {
    nom: "Chaussures de Ville",
    prix: "60€",
    image: "/complet deux pieces/WhatsApp Image 2025-11-19 à 16.48.32_ce4f55e4.jpg"
  },
  {
    prix: "55€",
    image: "/complet deux pieces/WhatsApp Image 2025-11-19 à 16.48.33_1614e311.jpg"
  },

  {
    prix: "60€",
    image: "/complet deux pieces/WhatsApp Image 2025-11-19 à 16.48.33_211be565.jpg"
  },

  {
    prix: "60€",
    image: "/complet deux pieces/WhatsApp Image 2025-11-19 à 16.48.37_45532880.jpg"
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