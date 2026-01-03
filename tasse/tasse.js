const produits = [
  {

    prix: "45000",
    image: "/tasse/Tasse 10 - Copie.jpg"
  },
  {
    prix: "60€",
    image: "/tasse/Tasse1.jpg"
  },
  {
    prix: "55€",
    image: "/tasse/Tasse11.jpg"
  },
  {
    prix: "60€",
    image: "/tasse/Tasse12.jpg"
  },
  {
    prix: "55€",
    image: "/tasse/Tasse2.jpg"
  },
  {
    prix: "60€",
    image: "/tasse/Tasse3.jpg"
  },
  {
    prix: "55€",
    image: "/tasse/Tasse4.jpg"
  },
  {
    prix: "60€",
    image: "/tasse/Tasse5.jpg"
  },
  {
    prix: "55€",
    image: "/tasse/Tasse6.jpg"
  },
  {
    prix: "60€",
    image: "/tasse/Tasse8.jpg"
  },
  {
    prix: "55€",
    image: "/tasse/Tasse9.jpg"
  },
  {
    prix: "60€",
    image: "/tasse/WhatsApp Image 2025-11-19 à 16.49.38_dbcda0cb.jpg"
  },
  {
    prix: "55€",
    image: "/tasse/WhatsApp Image 2025-11-19 à 16.49.38_b53eb90f.jpg"
  },
  {
    prix: "60€",
    image: "/tasse/WhatsApp Image 2025-11-19 à 16.49.37_e8140e88.jpg"
  },
  {
    prix: "55€",
    image: "/tasse/WhatsApp Image 2025-11-19 à 16.49.37_99a00915.jpg"
  },
  {
    prix: "60€",
    image: "/tasse/WhatsApp Image 2025-11-19 à 16.49.37_8a4da8c5.jpg"
  },
  {
    prix: "55€",
    image: "/tasse/WhatsApp Image 2025-11-19 à 16.49.37_492e4482.jpg"
  },
  {
    prix: "60€",
    image: "/tasse/WhatsApp Image 2025-11-19 à 16.49.36_ed3ca288.jpg"
  },
  {
    prix: "55€",
    image: "/CHAUSSURE/WhatsApp Image 2025-11-19 à 16.48.24_ba52e142.jpg"
  },
  {
    prix: "60€",
    image: "/tasse/WhatsApp Image 2025-11-19 à 16.49.36_78e2a0c3.jpg"
  },
  {
    prix: "55€",
    image: "/tasse/WhatsApp Image 2025-11-19 à 16.49.36_3e7a28c4.jpg"
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