console.log(document.querySelectorAll('.projects__item img'));

console.log(document.querySelector('.popup-image'))


document.querySelectorAll('.projects__item img').forEach((image) => {
  image.onclick = () => {
    let firstPopup = document.querySelector('.popup-image').style.display = 'block';
    console.log(firstPopup);
    let secondPopup = document.querySelector('.popup-image img').src = image.getAttribute('src');
    console.log(secondPopup);
  };

  document.querySelector('.popup-image span').onclick = () =>{
    document.querySelector('.popup-image').style.display = 'none';
  }
});


console.log(document.querySelector('.process'));

console.log(document.querySelector('.popup-message'));

function toggle(){
  let blur = document.querySelector('.main');
  blur.classList.toggle('active');

  let popup = document.querySelector('.popup-message');
  popup.classList.toggle('close');
}