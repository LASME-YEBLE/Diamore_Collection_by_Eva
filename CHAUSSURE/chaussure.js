// Liste des produits
const produits = [
  {

    prix: "45000",
    image: "/CHAUSSURE/WhatsApp Image 2025-11-19 à 16.48.36_75a7c4a5.jpg"
  },
  {
    prix: "60€",
    image: "/CHAUSSURE/WhatsApp Image 2025-11-19 à 16.48.31_eb88943d.jpg"
  },
  {
    prix: "55€",
    image: "/CHAUSSURE/WhatsApp Image 2025-11-19 à 16.48.31_bffb9369.jpg"
  },
  {
    prix: "60€",
    image: "/CHAUSSURE/WhatsApp Image 2025-11-19 à 16.48.30_9c97dc1d.jpg"
  },
  {
    prix: "55€",
    image: "/CHAUSSURE/WhatsApp Image 2025-11-19 à 16.48.29_d16dfc2f.jpg"
  },
  {
    prix: "60€",
    image: "/CHAUSSURE/WhatsApp Image 2025-11-19 à 16.48.29_5b3c9e4e.jpg"
  },
  {
    prix: "55€",
    image: "/CHAUSSURE/WhatsApp Image 2025-11-19 à 16.48.28_866b3769.jpg"
  },
  {
    prix: "60€",
    image: "/CHAUSSURE/WhatsApp Image 2025-11-19 à 16.48.28_719d141d.jpg"
  },
  {
    prix: "55€",
    image: "/CHAUSSURE/Chaussure 3.jpg"
  },
  {
    prix: "60€",
    image: "/CHAUSSURE/WhatsApp Image 2025-11-19 à 16.48.28_21acde14.jpg"
  },
  {
    prix: "55€",
    image: "/CHAUSSURE/WhatsApp Image 2025-11-19 à 16.48.27_c5a53982.jpg"
  },
  {
    prix: "60€",
    image: "/CHAUSSURE/WhatsApp Image 2025-11-19 à 16.48.27_bc1f64d1.jpg"
  },
  {
    prix: "55€",
    image: "/CHAUSSURE/WhatsApp Image 2025-11-19 à 16.48.27_3a49cc24.jpg"
  },
  {
    prix: "60€",
    image: "/CHAUSSURE/Chaussure 10 - Copie.jpg"
  },
  {
    prix: "55€",
    image: "/CHAUSSURE/Chaussure 11.jpg"
  },
  {
    nom: "Chaussures de Ville",
    prix: "60€",
    image: "/CHAUSSURE/WhatsApp Image 2025-11-19 à 16.48.23_fe1fc93f.jpg"
  },
  {
    prix: "55€",
    image: "/CHAUSSURE/WhatsApp Image 2025-11-19 à 16.48.24_591bca8d.jpg"
  },
  {
    prix: "60€",
    image: "/CHAUSSURE/WhatsApp Image 2025-11-19 à 16.48.24_7b3a8839.jpg"
  },
  {
    prix: "55€",
    image: "/CHAUSSURE/WhatsApp Image 2025-11-19 à 16.48.24_ba52e142.jpg"
  },
  {
    prix: "60€",
    image: "/CHAUSSURE/WhatsApp Image 2025-11-19 à 16.48.25_86170432.jpg"
  },
  {
    prix: "55€",
    image: "/CHAUSSURE/WhatsApp Image 2025-11-19 à 16.48.25_abbb251d.jpg"
  }
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