const categoriesList = document.getElementById('categories');
const categoryItems = categoriesList.querySelectorAll('li.item');
const numCategories = categoryItems.length;

console.log(`Number of categories: ${numCategories}`);
categoryItems.forEach(category => {
  const categoryName = category.querySelector('h2').textContent;
    const categoryElements = category.querySelectorAll('ul > li');
    const numElements = categoryElements.length;
  console.log(`\nCategory: ${categoryName}`);
  console.log(`Elements: ${numElements}`);
});
