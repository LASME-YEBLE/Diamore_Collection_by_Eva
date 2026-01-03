const produits = [
  {

    prix: "45000",
    image: "/Coupe/Coupe 1  - Copie.jpg"
  },
  {
    prix: "60€",
    image: "/Coupe/Coupe 10.jpg"
  },
  {
    prix: "55€",
    image: "/Coupe/Coupe 2.jpg"
  },
  {
    prix: "60€",
    image: "/Coupe/Coupe 3.jpg"
  },
  {
    prix: "55€",
    image: "/Coupe/Coupe 4.jpg"
  },
  {
    prix: "60€",
    image: "/Coupe/Coupe 5.jpg"
  },
  {
    prix: "55€",
    image: "/Coupe/Coupe 6 - Copie.jpg"
  },
  {
    prix: "60€",
    image: "/Coupe/Coupe 7.jpg"
  },
  {
    prix: "55€",
    image: "/Coupe/Coupe 8.jpg"
  },
  {
    prix: "60€",
    image: "/Coupe/WhatsApp Image 2025-11-19 à 16.49.26_462be233.jpg"
  },
  {
    prix: "55€",
    image: "/Coupe/WhatsApp Image 2025-11-19 à 16.49.26_3179354e.jpg"
  },
  {
    prix: "60€",
    image: "/Coupe/WhatsApp Image 2025-11-19 à 16.49.25_f23f38a8.jpg"
  },
  {
    prix: "55€",
    image: "/Coupe/WhatsApp Image 2025-11-19 à 16.49.25_d76cb01a.jpg"
  },
  {
    prix: "60€",
    image: "/Coupe/WhatsApp Image 2025-11-19 à 16.49.25_11ca0b81.jpg"
  },
  {
    prix: "55€",
    image: "/Coupe/WhatsApp Image 2025-11-19 à 16.49.24_a3b01a58.jpg"
  },
  {
    prix: "60€",
    image: "/Coupe/WhatsApp Image 2025-11-19 à 16.49.23_78216027.jpg"
  },
  {
    prix: "55€",
    image: "/Coupe/WhatsApp Image 2025-11-19 à 16.49.23_64682123.jpg"
  },
  {
    prix: "60€",
    image: "/Coupe/WhatsApp Image 2025-11-19 à 16.49.23_230a41a4.jpg"
  },
  {
    prix: "55€",
    image: "/Coupe/WhatsApp Image 2025-11-19 à 16.49.23_1a1467b3.jpg"
  },
  {
    prix: "60€",
    image: "/Coupe/WhatsApp Image 2025-11-19 à 16.49.22_38c09e6b.jpg"
  },
  {
    prix: "55€",
    image: "/Coupe/WhatsApp Image 2025-11-19 à 16.49.21_e9727417.jpg"
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