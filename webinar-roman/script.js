window.addEventListener('scroll', function(){
    document.getElementById('mainNav').classList.toggle('scrolled', window.scrollY > 80);
  });

  function toggleFaq(q){ q.closest('.faq-item').classList.toggle('open'); }

  (function(){
    var f=document.getElementById('regFrame');
    if(!f)return;
    window.addEventListener('message',function(e){
      if(!e.data)return;
      var h=0;
      if(typeof e.data==='number') h=e.data;
      else if(typeof e.data==='object') h=e.data.height||e.data.frameHeight||e.data.scrollHeight||0;
      if(h>200) f.style.height=(h+32)+'px';
    });
    function trySameOriginResize(){
      try{
        var h=f.contentWindow.document.body.scrollHeight;
        if(h>200) f.style.height=(h+32)+'px';
      }catch(e){}
    }
    f.addEventListener('load', trySameOriginResize);
  })();