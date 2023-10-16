const images = [
  {
    url: 'https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'White and Black Long Fur Cat',
  },
  {
    url: 'https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Orange and White Koi Fish Near Yellow Koi Fish',
  },
  {
    url: 'https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Group of Horses Running',
  },
];
const listRef = document.querySelector("ul.gallery");
const imgRef = document.createElement("img");
const imgCollectionRef = images
  .map(
    (element) =>
      `<li><img src = ${element.url} alt = ${element.alt} height=100px></img></li>`
  )
  .join(" ");
listRef.style.display = "flex";
listRef.style.gap = "10px";
listRef.style.listStyleType = "none";
listRef.insertAdjacentHTML("beforeend", imgCollectionRef);