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

const galleryRef = document.querySelector('.gallery');
const onAddGallery = (imgArray) => {
  return imgArray.map(img => {
    const imgEl = `<li class="img-task-03"><img src="${img.url}" alt="${img.alt}" width = "200px"></li>`
    return imgEl})}
galleryRef.insertAdjacentHTML('afterbegin',onAddGallery(images).join(""))



onAddGallery(images)


    // const imgItem = document.createElement('li');
    // const imgEl = document.createElement('img');
    // imgArray.alt = img.alt;
    // imgArray.src = img.url;
    //   imgItem.appendChild(imgEl)