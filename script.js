window.addEventListener('scroll',function(){document.getElementById('mainNav').classList.toggle('scrolled',window.scrollY>80);});
  function toggleFaq(q){q.closest('.faq-item').classList.toggle('open')}
  // Hero background — loaded dynamically so it can be easily replaced
  document.getElementById('heroBg').style.backgroundImage="url('https://42cd338b43.clvaw-cdnwnd.com/21a6c64f9c0ea01eee8120e8d426c940/200000008-92c7f92c80/RN8.jpeg')";
  (function(){var f=document.getElementById('regFrame');if(!f)return;f.addEventListener('load',function(){try{var h=f.contentWindow.document.body.scrollHeight;if(h>500)f.style.height=(h+40)+'px';}catch(e){}});})();