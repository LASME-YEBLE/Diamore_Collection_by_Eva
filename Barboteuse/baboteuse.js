const produits = [
  {

    prix: "45000",
    image: "/Barboteuse/WhatsApp Image 2025-11-19 à 16.48.34_dc370438.jpg"
  },
  {
    prix: "60€",
    image: "/Barboteuse/WhatsApp Image 2025-11-19 à 16.48.35_62f8b178.jpg"
  },
  {
    prix: "55€",
    image: "/Barboteuse/WhatsApp Image 2025-11-19 à 16.48.35_cf1dfed4.jpg"
  },

  {
    prix: "55€",
    image: "/Barboteuse/WhatsApp Image 2025-11-19 à 16.48.35_ec76ba0d.jpg"
  },
  {
    prix: "60€",
    image: "/Barboteuse/WhatsApp Image 2025-11-19 à 16.48.36_0b5ae861.jpg"
  },
  {
    prix: "55€",
    image: "/Barboteuse/WhatsApp Image 2025-11-19 à 16.48.36_efa78f3e.jpg"
  },
  {
    prix: "60€",
    image: "/Barboteuse/WhatsApp Image 2025-11-19 à 16.48.37_79ac65e8.jpg"
  },

  {
    prix: "60€",
    image: "/Barboteuse/WhatsApp Image 2025-11-19 à 16.48.37_89015149.jpg"
  },

  {
    prix: "60€",
    image: "/Barboteuse/Baboteuse 1 - Copie.jpg"
  },
  {
    prix: "55€",
    image: "/Barboteuse/Baboteuse 2 - Copie.jpg"
  },
  {
    prix: "60€",
    image: "/Barboteuse/Baboteuse 3 - Copie.jpg"
  },
  {
    prix: "55€",
    image: "/Barboteuse/Baboteuse 4.jpg"
  },
  {
    prix: "60€",
    image: "/Barboteuse/Baboteuse 5.jpg"
  },
  {
    prix: "55€",
    image: "/Barboteuse/Baboteuse 6.jpg"
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
  <h2>${produit.nom || 'article'}</h2>
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