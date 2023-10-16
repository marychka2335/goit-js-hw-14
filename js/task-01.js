const catRef = document.querySelector("#categories");
console.log("Number of categories: ", catRef.children.length);

const itemNames = document.querySelectorAll("li.item");
itemNames.forEach(function (item) {
  console.log("Category: ", item.querySelector("h2").textContent);
  console.log("Elements: ", item.querySelectorAll("li").length);
});
