import{_ as e}from"./preload-helper-08cc8e69.js";let r=null;async function t(){if(r)return r;if("undefined"!=typeof window){const t=(await e((()=>import("./index.esm-94381c55.js")),["chunks/index.esm-94381c55.js","chunks/vendor-84d358ea.js"])).default;return r=t.firestore(),r}return(await e((()=>import("./index.esm-6bb6a4cb.js")),["chunks/index.esm-6bb6a4cb.js","chunks/vendor-84d358ea.js"])).apps[0].firestore()}export{t as f};