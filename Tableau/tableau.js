const produits = [
  {

    prix: "45000",
    image: "/tableau/TABLEAU2.jpg"
  },
  {
    prix: "60€",
    image: "/Tableau/TABLEAU4.jpg"
  },
  {
    prix: "55€",
    image: "/tableau/TABLEAU6.jpg"
  },
  {
    prix: "60€",
    image: "/tableau/WhatsApp Image 2025-11-19 à 16.49.26_7e4aeeb7.jpg"
  },
  {
    prix: "55€",
    image: "/tableau/WhatsApp Image 2025-11-19 à 16.49.27_c50abe3f.jpg"
  },
  {
    prix: "60€",
    image: "/tableau/WhatsApp Image 2025-11-19 à 16.49.27_d6f85207.jpg"
  },
  {
    nom: "Baskets Sport",
    prix: "55€",
    image: "/tableau/WhatsApp Image 2025-11-19 à 16.49.27_d6f85207.jpg"
  },
  {
    prix: "60€",
    image: "/tableau/WhatsApp Image 2025-11-19 à 16.49.28_1ff8dff9.jpg"
  },
  {
    prix: "55€",
    image: "/Tableau/WhatsApp Image 2025-11-19 à 16.49.28_89c89b90.jpg"
  },
  {
    prix: "60€",
    image: "/Tableau/WhatsApp Image 2025-11-19 à 16.49.28_faace464.jpg"
  },
  {
    prix: "55€",
    image: "/Tableau/WhatsApp Image 2025-11-19 à 16.49.29_07de3798.jpg"
  },
  {
    prix: "60€",
    image: "/tableau/WhatsApp Image 2025-11-19 à 16.49.29_1adc3fac.jpg"
  },
  {
    prix: "55€",
    image: "/tableau/WhatsApp Image 2025-11-19 à 16.49.29_f9749651.jpg"
  },
  {
    prix: "60€",
    image: "/Tableau/WhatsApp Image 2025-11-19 à 16.49.30_92d5299d.jpg"
  },
  {
    prix: "55€",
    image: "/tableau/WhatsApp Image 2025-11-19 à 16.49.30_ccdff47b.jpg"
  },
  {
    prix: "60€",
    image: "/Tableau/WhatsApp Image 2025-11-19 à 16.49.31_0e476e1d.jpg"
  },
  {
    prix: "55€",
    image: "/Tableau/WhatsApp Image 2025-11-19 à 16.49.31_33740300.jpg"
  },
  {
    prix: "60€",
    image: "/Tableau/WhatsApp Image 2025-11-19 à 16.49.31_33740300.jpg"
  },
  {
    prix: "55€",
    image: "/tableau/WhatsApp Image 2025-11-19 à 16.49.31_a924ca06.jpg"
  },
  {
    prix: "60€",
    image: "/tableau/WhatsApp Image 2025-11-19 à 16.49.39_d5e93f71.jpg"
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