document.addEventListener('DOMContentLoaded', function() {
  const button1 = document.getElementById('btn1');
  const button2 = document.getElementById('btn2');
  const img = document.getElementById('charni');


  function handleClickButton1() {
    window.location.href = "/forfun/yes.html"
  }

  function handleHoverButton2() {
    console.log('Button 2 clicked');
    const randomX = Math.random() * (window.innerWidth - button2.offsetWidth);
    const randomY = Math.random() * (window.innerHeight - button2.offsetHeight);
    button2.style.position = 'absolute';
    button2.style.top = randomY + 'px';
    button2.style.left = randomX + 'px';
  }

  button1.addEventListener('click', handleClickButton1);
  button2.addEventListener('mouseenter', handleHoverButton2);
});
