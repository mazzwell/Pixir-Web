import{l,p as w}from"./index-F1q1uS86.js";async function g(e,a,n){const t=e.getProvider(),r=(await l(()=>import("./index-F1q1uS86.js").then(i=>i.dn),__vite__mapDeps([0,1]))).default,s=new w(t,a,r,{},e.storage),o=await e.getSignerAddress(),d=e.address;return(await s.read("allowance",[o,d])).gte(n)}export{g as h};
function __vite__mapDeps(indexes) {
  if (!__vite__mapDeps.viteFileDeps) {
    __vite__mapDeps.viteFileDeps = ["assets/index-F1q1uS86.js","assets/index-c80T-W6z.css"]
  }
  return indexes.map((i) => __vite__mapDeps.viteFileDeps[i])
}
