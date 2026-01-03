// ...existing code...
document.addEventListener("DOMContentLoaded", () => {
  const isAdmin = new URLSearchParams(window.location.search).get('admin') === '1';

  // Tableau des articles (images relatives au dossier Accueil) + lien vers chaque page
  let articles = [
    { id: 1, name: "BARBOTEUSE", image: "Baboteuse 7 - Copie.jpg", link: "/Barboteuse/barboteuse.html" },
    { id: 2, name: "CHAUSSURE", image: "Chaussure 6.jpg", link: "../CHAUSSURE/chaussure.html" },
    { id: 3, name: "COMPLET DEUX PIECES", image: "complet 2 Pièce 3.jpg", link: "../complet deux pieces/complet.html" },
    { id: 4, name: "COUPE", image: "Coupe 9.jpg", link: "../Coupe/coupe.html" },
    { id: 5, name: "KHALKHAL", image: "Perle au pieds 3.jpg", link: "../chaine au pieds/khalkhal.html" },
    { id: 6, name: "TABLEAU", image: "TABLEAU3.jpg", link: "/Tableau/tableau.html" },
    { id: 7, name: "TASSE", image: "Tasse7.jpg", link: "../tasse/tasse.html" },
    { id: 7, name: "Accessoire", image: "assesoire.jpg", link: "/accessoire/accesoire.html" },
  ];

  const catalogueSection = document.getElementById("catalogue");
  const productsContainer = document.querySelector(".products");

  // Fonction pour afficher les articles (image cliquable vers la page correspondante)
  function displayArticles() {
    // Retirer ancien bouton "Ajouter" s'il existe (pour éviter duplications)
    const existingAdd = catalogueSection.querySelector(".add-btn");
    if (existingAdd) existingAdd.remove();

    productsContainer.innerHTML = ""; // Efface les articles existants
    articles.forEach(article => {
      const productDiv = document.createElement("div");
      productDiv.className = "product";

      // Lien autour de l'image qui mène à la page de la catégorie
      const link = document.createElement("a");
      link.href = article.link;
      link.title = 'Voir ${article.name}';
      link.className = "product-link";

      const img = document.createElement("img");
      img.src = article.image;
      img.alt = article.name;

      link.appendChild(img);

      const name = document.createElement("h3");
      name.textContent = article.name;


      productDiv.appendChild(link); // image cliquable
      productDiv.appendChild(name);

      // Si l'utilisateur est un administrateur, afficher les boutons Modifier et Supprimer
      if (isAdmin) {
        const editButton = document.createElement("button");
        editButton.textContent = "Modifier";
        editButton.className = "edit-btn";
        editButton.addEventListener("click", () => editArticle(article.id));

        const deleteButton = document.createElement("button");
        deleteButton.textContent = "Supprimer";
        deleteButton.className = "delete-btn";
        deleteButton.addEventListener("click", () => deleteArticle(article.id));

        productDiv.appendChild(editButton);
        productDiv.appendChild(deleteButton);
      }

      productsContainer.appendChild(productDiv);
    });

    // Si l'utilisateur est un administrateur, ajouter un bouton pour ajouter un nouvel article
    if (isAdmin) {
      const addButton = document.createElement("button");
      addButton.textContent = "Ajouter un article";
      addButton.className = "add-btn";
      addButton.addEventListener("click", () => {
        const name = prompt("Nom de l'article :");
        const image = prompt("Chemin de l'image (relatif au dossier Accueil) :");
        const price = prompt("Prix de l'article :");
        const link = prompt("Lien vers la page (ex: ../Barboteuse/barboteuse.html) :");
        if (name && image && price && link) {
          addArticle(name, image, price, link);
        }
      });

      catalogueSection.appendChild(addButton);
    }
  }

  // Fonction pour ajouter un article (avec lien)
  function addArticle(name, image, price, link) {
    const newId = articles.length > 0 ? articles[articles.length - 1].id + 1 : 1;
    articles.push({ id: newId, name, image, price, link });
    displayArticles();
  }

  // Fonction pour modifier un article
  function editArticle(id) {
    const article = articles.find(a => a.id === id);
    if (article) {
      const newName = prompt("Modifier le nom :", article.name);
      const newImage = prompt("Modifier l'image (chemin) :", article.image);
      const newPrice = prompt("Modifier le prix :", article.price);
      const newLink = prompt("Modifier le lien :", article.link);

      if (newName) article.name = newName;
      if (newImage) article.image = newImage;
      if (newPrice) article.price = newPrice;
      if (newLink) article.link = newLink;

      displayArticles();
    }
  }

  // Fonction pour supprimer un article
  function deleteArticle(id) {
    articles = articles.filter(article => article.id !== id);
    displayArticles();
  }

  // Afficher directement le catalogue (connexion supprimée)
  catalogueSection.classList.remove("hidden");
  displayArticles();
});
// ...existing code...
