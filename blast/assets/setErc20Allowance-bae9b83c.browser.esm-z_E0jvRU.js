import{aI as _,l as f,p as N,aB as n,aM as l,aN as I,aO as c}from"./index-F1q1uS86.js";const r=n.object({}).catchall(n.union([c,n.unknown()])),u=n.union([n.array(r),r]).optional().nullable(),O=n.object({name:n.union([n.string(),n.number()]).optional().nullable(),description:n.string().nullable().optional().nullable(),image:l.nullable().optional(),animation_url:l.optional().nullable()}),p=O.extend({external_url:l.nullable().optional(),background_color:I.optional().nullable(),properties:u,attributes:u}).catchall(n.union([c,n.unknown()])),C=n.union([p,n.string()]),S=p.extend({id:n.string(),uri:n.string(),image:n.string().nullable().optional(),external_url:n.string().nullable().optional(),animation_url:n.string().nullable().optional()});async function B(a,t,e,o){if(_(e))o.value=t;else{const g=(await f(()=>import("./index-F1q1uS86.js").then(w=>w.dn),__vite__mapDeps([0,1]))).default,b=a.getSigner(),m=a.getProvider(),i=new N(b||m,e,g,a.options,a.storage),d=await a.getSignerAddress(),s=a.address;return(await i.read("allowance",[d,s])).lt(t)&&await i.sendTransaction("approve",[s,t]),o}}export{O as B,p as C,C as N,S as a,B as s};
function __vite__mapDeps(indexes) {
  if (!__vite__mapDeps.viteFileDeps) {
    __vite__mapDeps.viteFileDeps = ["assets/index-F1q1uS86.js","assets/index-c80T-W6z.css"]
  }
  return indexes.map((i) => __vite__mapDeps.viteFileDeps[i])
}
