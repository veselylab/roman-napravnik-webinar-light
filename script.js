var heroImg=new Image();
  heroImg.onload=function(){document.getElementById('heroBg').style.backgroundImage='url('+this.src+')';};
  heroImg.src='https://raw.githubusercontent.com/veselylab/roman-napravnik-webinar-light/main/hero.jpg';
  (function(){
    var img=document.getElementById('romanProkohoImg');
    if(!img)return;
    var src='https://raw.githubusercontent.com/veselylab/roman-napravnik-webinar-light/main/roman.jpg';
    img.src=src;
  })();
  window.addEventListener('scroll',function(){document.getElementById('mainNav').classList.toggle('scrolled',window.scrollY>80);});
  function toggleFaq(q){q.closest('.faq-item').classList.toggle('open')}
  (function(){var f=document.getElementById('regFrame');if(!f)return;f.addEventListener('load',function(){try{var h=f.contentWindow.document.body.scrollHeight;if(h>500)f.style.height=(h+40)+'px';}catch(e){}});})();