document.addEventListener('DOMContentLoaded', function() {
  const button1 = document.getElementById('btn1');
  const button2 = document.getElementById('btn2');
  const img = document.getElementById('charni');

  const imageUrls = ["https://scontent.fnbe1-2.fna.fbcdn.net/v/t1.15752-9/406871601_3187385361567494_46803981683175883_n.jpg?_nc_cat=111&ccb=1-7&_nc_sid=8cd0a2&_nc_ohc=irkM9RXFNsoAX_8_tLk&_nc_ht=scontent.fnbe1-2.fna&oh=03_AdQkwM5C3mn-zrlAMfnPAoKPHmK8mkyQTQivN1ER6z6jQw&oe=65EC892D",
'https://scontent.fnbe1-2.fna.fbcdn.net/v/t1.15752-9/426256726_700759385542207_8406908593283062613_n.png?_nc_cat=100&ccb=1-7&_nc_sid=8cd0a2&_nc_ohc=71dZzqGFPuMAX_VKIy0&_nc_ht=scontent.fnbe1-2.fna&oh=03_AdSd-X1FavEm0pl-txa8xZQlynScvJK_qIfp_Z9lvCMV_Q&oe=65EC7501',
'https://scontent.fnbe1-2.fna.fbcdn.net/v/t1.15752-9/416609375_2481044312074900_4516957029656434972_n.png?_nc_cat=104&ccb=1-7&_nc_sid=8cd0a2&_nc_ohc=fOpzBrmbuHoAX_QniXr&_nc_ht=scontent.fnbe1-2.fna&oh=03_AdS5g1aTaNrVNkKfJe1FSTKofQEThQZvan_Tt69-tn-qqw&oe=65ECA4D5'];
  function handleClickButton1() {
    console.log('Button 1 clicked');
    const randomIndex = Math.floor(Math.random() * imageUrls.length);
    const randomImageUrl = imageUrls[randomIndex];
    img.src = randomImageUrl;
    imageUrls.splice(randomIndex, 1);
    if (imageUrls.length === 0) {
        imageUrls.push('https://scontent.fnbe1-2.fna.fbcdn.net/v/t1.15752-9/406871601_3187385361567494_46803981683175883_n.jpg?_nc_cat=111&ccb=1-7&_nc_sid=8cd0a2&_nc_ohc=irkM9RXFNsoAX_8_tLk&_nc_ht=scontent.fnbe1-2.fna&oh=03_AdQkwM5C3mn-zrlAMfnPAoKPHmK8mkyQTQivN1ER6z6jQw&oe=65EC892D',
        'https://scontent.fnbe1-2.fna.fbcdn.net/v/t1.15752-9/426256726_700759385542207_8406908593283062613_n.png?_nc_cat=100&ccb=1-7&_nc_sid=8cd0a2&_nc_ohc=71dZzqGFPuMAX_VKIy0&_nc_ht=scontent.fnbe1-2.fna&oh=03_AdSd-X1FavEm0pl-txa8xZQlynScvJK_qIfp_Z9lvCMV_Q&oe=65EC7501',
        'https://scontent.fnbe1-2.fna.fbcdn.net/v/t1.15752-9/416609375_2481044312074900_4516957029656434972_n.png?_nc_cat=104&ccb=1-7&_nc_sid=8cd0a2&_nc_ohc=fOpzBrmbuHoAX_QniXr&_nc_ht=scontent.fnbe1-2.fna&oh=03_AdS5g1aTaNrVNkKfJe1FSTKofQEThQZvan_Tt69-tn-qqw&oe=65ECA4D5');
      }
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
