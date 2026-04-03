// Hero bg
  var heroImg=new Image();
  heroImg.onload=function(){document.getElementById('heroBg').style.backgroundImage='url('+this.src+')';};
  heroImg.src='https://app.vesely.ai/objects/generated-images/95/1775130104648-9d28d925e043fa8b.png';
  // Prokoho section — Roman's real photo injected via JS
  (function(){
    var img=document.getElementById('romanProkohoImg');
    if(!img)return;
    var src='ROMAN_PHOTO_B64';
    img.src=src;
  })();
  window.addEventListener('scroll',function(){document.getElementById('mainNav').classList.toggle('scrolled',window.scrollY>80);});
  function toggleFaq(q){q.closest('.faq-item').classList.toggle('open')}
  (function(){var f=document.getElementById('regFrame');if(!f)return;f.addEventListener('load',function(){try{var h=f.contentWindow.document.body.scrollHeight;if(h>500)f.style.height=(h+40)+'px';}catch(e){}});})();