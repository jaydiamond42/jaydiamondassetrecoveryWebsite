document.addEventListener('DOMContentLoaded',function(){
  var yearEl = document.getElementById('year'); if(yearEl){ yearEl.textContent = new Date().getFullYear(); }
  var c = document.getElementById('cookie'); if(c){ const key='jd_cookie_consent_v1'; const s=localStorage.getItem(key);
    if(!s) c.classList.add('show');
    var ca=document.getElementById('cookieAccept'); var cd=document.getElementById('cookieDecline');
    if(ca) ca.onclick=()=>{localStorage.setItem(key,'accepted'); c.remove();};
    if(cd) cd.onclick=()=>{localStorage.setItem(key,'declined'); c.remove();};
  }
});