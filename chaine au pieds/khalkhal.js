const produits = [
  {

    prix: "45000",
    image: "/chaine au pieds/Perle au pieds 2.jpg"
  },
  {
    prix: "60€",
    image: "/chaine au pieds/Perle au pieds 4.jpg"
  },
  {
    nom: "Baskets Sport",
    prix: "55€",
    image: "/chaine au pieds/Perle au pieds 5.jpg"
  },
  {
    nom: "Chaussures de Ville",
    prix: "60€",
    image: "/chaine au pieds/Perle au pieds 6.jpg"
  },
  {
    nom: "Baskets Sport",
    prix: "55€",
    image: "/chaine au pieds/Perle au pieds 7.jpg"
  },
  {
    nom: "Chaussures de Ville",
    prix: "60€",
    image: "/chaine au pieds/Perls au pieds 8.jpg"
  },
  {
    nom: "Baskets Sport",
    prix: "55€",
    image: "/chaine au pieds/Perls au pieds 8.jpg"
  },
  {
    nom: "Chaussures de Ville",
    prix: "60€",
    image: "/chaine au pieds/Pèle au pieds 1 - Copie.jpg"
  },
  {
    nom: "Baskets Sport",
    prix: "55€",
    image: "/chaine au pieds/WhatsApp Image 2025-11-19 à 16.48.22_ae0df750.jpg"
  },
  {
    nom: "Chaussures de Ville",
    prix: "60€",
    image: "/chaine au pieds/WhatsApp Image 2025-11-19 à 16.48.22_cfac58bf.jpg"
  },
  {
    nom: "Baskets Sport",
    prix: "55€",
    image: "/chaine au pieds/WhatsApp Image 2025-11-19 à 16.48.23_4cf9c5fd.jpg"
  },
  {
    nom: "Chaussures de Ville",
    prix: "60€",
    image: "/chaine au pieds/WhatsApp Image 2025-11-19 à 16.48.23_cc933af4.jpg"
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