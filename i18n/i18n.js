
window.SS_I18N=(function(){
  const key='ss_lang';
  function set(l){localStorage.setItem(key,l);location.reload();}
  function get(){return localStorage.getItem(key)||'en';}
  return {set,setLang:set,get,getLang:get};
})();