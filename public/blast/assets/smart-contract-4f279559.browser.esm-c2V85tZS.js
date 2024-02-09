var z=Object.defineProperty;var J=(m,t,e)=>t in m?z(m,t,{enumerable:!0,configurable:!0,writable:!0,value:e}):m[t]=e;var i=(m,t,e)=>(J(m,typeof t!="symbol"?t+"":t,e),e);import{a as c,S as Z,E as Q}from"./assertEnabled-69ed68b5.browser.esm-Sg9bDpNb.js";import{d as h,b as j,G as X,C as b,a as k}from"./contract-appuri-29f0e515.browser.esm-Bhj1aaJC.js";import{B as f,c2 as D,c3 as l,t as d,c4 as I,af as L,c5 as tt,T as A,a6 as v,c6 as et,c7 as rt,A as w,c8 as M,V as T,c1 as at,c9 as O,ca as _,cb as U,cc as q,bp as x,cd as nt,ce as st,cf as it,cg as ot,ch as G,ci as H,cj as K,ck as ct,b7 as V,J as y,e as Y,cl as pt,aB as S,aL as dt,aK as $,p as mt,q as ht,aC as F,cm as ut,ac as gt,am as lt,ao as ft,ak as At,ae as yt,bd as wt,aU as Wt,ap as Et,aa as St,F as vt,x as Tt,y as Pt}from"./index-F1q1uS86.js";import{v as B}from"./index-6--8VpXu.js";import{C as xt}from"./contract-interceptor-d7b164a7.browser.esm-amNiAGmN.js";import{C as Ct,a as Rt}from"./contract-owner-4df2a33b.browser.esm-FxYE03Jn.js";import{C as bt}from"./contract-platform-fee-e278431a.browser.esm-q3QkqO0X.js";import{C as Ft}from"./contract-roles-1ae2927f.browser.esm-hIZ2fXHj.js";import{C as Dt}from"./contract-sales-cefc823c.browser.esm-4X3KBECC.js";import{a as It}from"./erc-1155-f44423d5.browser.esm-SNf0dw5g.js";import{E as Mt}from"./erc-20-c3294714.browser.esm-kSDRWI2w.js";import{a as Nt}from"./erc-721-434e5a52.browser.esm-WWq8ePP_.js";import{M as kt,a as Lt,b as Ot}from"./marketplacev3-offers-95bada01.browser.esm-YLCukpKl.js";import"./setErc20Allowance-bae9b83c.browser.esm-z_E0jvRU.js";import"./QueryParams-fe3080d5.browser.esm-fJsPL8BS.js";import"./drop-claim-conditions-036d1ce4.browser.esm-dW9hdmw5.js";import"./cleanCurrencyAddress-870d4ccc.browser.esm-y8jFHyeP.js";import"./marketplace-15a16d65.browser.esm-nGKuZjrc.js";let g=function(m){return m[m.None=0]="None",m[m.AddAdmin=1]="AddAdmin",m[m.RemoveAdmin=2]="RemoveAdmin",m}({});const C={startDate:f.from(0),expirationDate:f.from(0),approvedCallTargets:[],nativeTokenLimitPerTransaction:"0"},N=S.object({startDate:Z,expirationDate:Q,nativeTokenLimitPerTransaction:dt.default(0),approvedCallTargets:S.union([S.array($),S.literal("*")])}),_t=S.array(S.object({signer:$,makeAdmin:S.boolean(),permissions:N})),Ut=[{name:"signer",type:"address"},{name:"approvedTargets",type:"address[]"},{name:"nativeTokenLimitPerTransaction",type:"uint256"},{name:"permissionStartTimestamp",type:"uint128"},{name:"permissionEndTimestamp",type:"uint128"},{name:"reqValidityStartTimestamp",type:"uint128"},{name:"reqValidityEndTimestamp",type:"uint128"},{name:"uid",type:"bytes32"}],qt=[{name:"signer",type:"address"},{name:"isAdmin",type:"uint8"},{name:"approvedTargets",type:"address[]"},{name:"nativeTokenLimitPerTransaction",type:"uint256"},{name:"permissionStartTimestamp",type:"uint128"},{name:"permissionEndTimestamp",type:"uint128"},{name:"reqValidityStartTimestamp",type:"uint128"},{name:"reqValidityEndTimestamp",type:"uint128"},{name:"uid",type:"bytes32"}];class Vt{constructor(t){i(this,"featureName",l.name);i(this,"grantAdminPermissions",d(async t=>{const e=await y(t);return await this.sendSignerPermissionRequest(e,C,g.AddAdmin)}));i(this,"revokeAdminPermissions",d(async t=>{const e=await y(t);return await this.sendSignerPermissionRequest(e,C,g.RemoveAdmin)}));i(this,"grantPermissions",d(async(t,e)=>{const r=await y(t),a=await N.parseAsync(e);if(await this.isAdmin(r))throw new Error("Signer is already an admin. Cannot grant permissions to an existing admin.");if(await this.isSigner(r))throw new Error("Signer already has permissions. Cannot grant permissions to an existing signer. You can update permissions using `updatePermissions`.");return await this.sendSignerPermissionRequest(r,a,g.None)}));i(this,"updatePermissions",d(async(t,e)=>{const r=await y(t),a=await N.parseAsync(e);if(await this.isAdmin(r))throw new Error("Signer is already an admin. Cannot update permissions of an existing admin.");if(!await this.isSigner(r))throw new Error("Signer does not already have permissions. You can grant permissions using `grantPermissions`.");return await this.sendSignerPermissionRequest(r,a,g.None)}));i(this,"revokeAccess",d(async t=>{const e=await y(t);if(await this.isAdmin(e))throw new Error("Signer is already an admin. Cannot revoke permissions of an admin.");if(!await this.isSigner(e))throw new Error("Signer does not already have permissions. You can grant permissions using `grantPermissions`.");return await this.sendSignerPermissionRequest(e,{startDate:f.from(0),expirationDate:f.from(0),approvedCallTargets:[],nativeTokenLimitPerTransaction:"0"},g.None)}));i(this,"approveTargetForSigner",d(async(t,e)=>{const r=await y(t),a=await y(e);if(await this.isAdmin(r))throw new Error("Signer is already an admin. Cannot approve targets for an admin.");if(!await this.isSigner(r))throw new Error("Signer does not already have permissions. You can grant permissions using `grantPermissions`.");const n=await this.contractWrapper.read("getPermissionsForSigner",[r]);if(n.approvedTargets.includes(e))throw new Error("Target is already approved");const s=[...n.approvedTargets,a];return await this.sendSignerPermissionRequest(r,{startDate:f.from(n.startTimestamp),expirationDate:f.from(n.endTimestamp),approvedCallTargets:s,nativeTokenLimitPerTransaction:n.nativeTokenLimitPerTransaction.toString()},g.None)}));i(this,"disapproveTargetForSigner",d(async(t,e)=>{const r=await y(t),a=await y(e);if(await this.isAdmin(r))throw new Error("Signer is already an admin. Cannot approve targets for an admin.");if(!await this.isSigner(r))throw new Error("Signer does not already have permissions. You can grant permissions using `grantPermissions`.");const n=await this.contractWrapper.read("getPermissionsForSigner",[r]);if(!n.approvedTargets.includes(a))throw new Error("Target is currently not approved");const s=n.approvedTargets.filter(o=>Y(o)!==Y(a));return await this.sendSignerPermissionRequest(r,{startDate:f.from(n.startTimestamp),expirationDate:f.from(n.endTimestamp),approvedCallTargets:s,nativeTokenLimitPerTransaction:n.nativeTokenLimitPerTransaction.toString()},g.None)}));i(this,"resetAllPermissions",d(async t=>{const e=await _t.parseAsync(t);if(this.hasDuplicateSigners(e))throw new Error("Duplicate signers found in input.");const r=[],a=[],n=[],s=await this.getAllAdmins(),o=e.filter(p=>p.makeAdmin).map(p=>p.signer);s.forEach(async p=>{if(!o.includes(p)){const u=(await this.sendSignerPermissionRequest(p,C,g.RemoveAdmin)).encode();r.push(u)}});const W=await this.getAllSigners(),P=e.filter(p=>!p.makeAdmin).map(p=>p.signer);await Promise.all(W.map(async p=>{if(!P.includes(p.signer)){const u=(await this.sendSignerPermissionRequest(p.signer,C,g.None)).encode();n.push(u)}}));for(const p of e)if(p.makeAdmin)(await this.sendSignerPermissionRequest(p.signer,C,g.AddAdmin)).encode();else{const u=(await this.sendSignerPermissionRequest(p.signer,p.permissions,g.None)).encode();a.push(u)}const E=[];return r.forEach(p=>{E.push(p)}),n.forEach(p=>{E.push(p)}),a.forEach(p=>{E.push(p)}),A.fromContractWrapper({contractWrapper:this.contractWrapper,method:"multicall",args:[E]})}));this.contractWrapper=t}getAddress(){return this.contractWrapper.address}hasDuplicateSigners(t){const e={},r=t.map(a=>a.signer);for(const a of r)if(!e[a])e[a]=!0;else return!0;return!1}parseSignerPermissionsStruct(t){return{startDate:new Date(parseInt(t.startTimestamp.toString())*1e3),expirationDate:new Date(parseInt(t.endTimestamp.toString())*1e3),nativeTokenLimitPerTransaction:f.from(t.nativeTokenLimitPerTransaction),approvedCallTargets:t.approvedTargets}}async sendSignerPermissionRequest(t,e,r){if(h(this.contractWrapper,"AccountPermissionsV1")){if(r===g.AddAdmin||r===g.RemoveAdmin)return A.fromContractWrapper({contractWrapper:this.contractWrapper,method:"setAdmin",args:[t,r===g.AddAdmin]});{const{payload:s,signature:o}=await this.generateLegacyPayload(t,e);return A.fromContractWrapper({contractWrapper:this.contractWrapper,method:"setPermissionsForSigner",args:[s,o]})}}const{payload:a,signature:n}=await this.generatePayload(t,e,r);return A.fromContractWrapper({contractWrapper:this.contractWrapper,method:"setPermissionsForSigner",args:[a,n]})}async generatePayload(t,e,r){const a={signer:t,isAdmin:r.valueOf(),approvedTargets:e.approvedCallTargets==="*"?[ct]:e.approvedCallTargets,nativeTokenLimitPerTransaction:V(e.nativeTokenLimitPerTransaction),permissionStartTimestamp:e.startDate,permissionEndTimestamp:e.expirationDate,reqValidityStartTimestamp:0,reqValidityEndTimestamp:f.from(Math.floor(new Date(Date.now()+31536e7).getTime()/1e3)),uid:B(void 0)},n=await this.contractWrapper.getChainID(),s=this.contractWrapper.getSigner();T(s);const o=await this.contractWrapper.signTypedData(s,{name:"Account",version:"1",chainId:n,verifyingContract:this.getAddress()},{SignerPermissionRequest:qt},a);return{payload:a,signature:o}}async generateLegacyPayload(t,e){if(e.approvedCallTargets==="*")throw new Error("Wildcard call targets are not supported on legacy account permissions contract, please deploy an updated contract factory.");const r={signer:t,approvedTargets:e.approvedCallTargets,nativeTokenLimitPerTransaction:V(e.nativeTokenLimitPerTransaction),permissionStartTimestamp:e.startDate,permissionEndTimestamp:e.expirationDate,reqValidityStartTimestamp:0,reqValidityEndTimestamp:f.from(Math.floor(new Date(Date.now()+1e3*60*60*24*365*10).getTime()/1e3)),uid:B(void 0)},a=await this.contractWrapper.getChainID(),n=this.contractWrapper.getSigner();T(n);const s=await this.contractWrapper.signTypedData(n,{name:"Account",version:"1",chainId:a,verifyingContract:this.getAddress()},{SignerPermissionRequest:Ut},r);return{payload:r,signature:s}}async isAdmin(t){const e=await y(t);return await this.contractWrapper.read("isAdmin",[e])}async isSigner(t){const e=await y(t);return await this.contractWrapper.read("isActiveSigner",[e])}async getAllAdmins(){return await this.contractWrapper.read("getAllAdmins",[])}async getAllSigners(){const t=await this.contractWrapper.read("getAllActiveSigners",[]);return await Promise.all(t.map(async e=>{const r=e.signer,a=this.parseSignerPermissionsStruct(e);return{signer:r,permissions:a}}))}async getAllAdminsAndSigners(){const e=(await this.getAllAdmins()).map(a=>({isAdmin:!0,signer:a,permissions:{startDate:new Date(0),expirationDate:new Date(0),nativeTokenLimitPerTransaction:f.from(0),approvedCallTargets:[]}})),r=await this.getAllSigners();return[...e,...r]}}class Yt{constructor(t){i(this,"featureName",D.name);i(this,"grantAdminPermissions",d(async t=>c(this.accountPermissions,l).grantAdminPermissions.prepare(t)));i(this,"revokeAdminPermissions",d(async t=>c(this.accountPermissions,l).revokeAdminPermissions.prepare(t)));i(this,"grantPermissions",d(async(t,e)=>c(this.accountPermissions,l).grantPermissions.prepare(t,e)));i(this,"updatePermissions",d(async(t,e)=>c(this.accountPermissions,l).updatePermissions.prepare(t,e)));i(this,"revokeAccess",d(async t=>c(this.accountPermissions,l).revokeAccess.prepare(t)));i(this,"approveTargetForSigner",d(async(t,e)=>c(this.accountPermissions,l).approveTargetForSigner.prepare(t,e)));i(this,"disapproveTargetForSigner",d(async(t,e)=>c(this.accountPermissions,l).disapproveTargetForSigner.prepare(t,e)));i(this,"resetAllPermissions",d(async t=>c(this.accountPermissions,l).resetAllPermissions.prepare(t)));this.contractWrapper=t,this.accountPermissions=this.detectAccountPermissions()}detectAccountPermissions(){if(h(this.contractWrapper,"AccountPermissions")||h(this.contractWrapper,"AccountPermissionsV1"))return new Vt(this.contractWrapper)}getAddress(){return this.contractWrapper.address}async isAdmin(t){return c(this.accountPermissions,l).isAdmin(t)}async isSigner(t){return c(this.accountPermissions,l).isSigner(t)}async getAllAdmins(){return c(this.accountPermissions,l).getAllAdmins()}async getAllSigners(){return c(this.accountPermissions,l).getAllSigners()}async getAllAdminsAndSigners(){return c(this.accountPermissions,l).getAllAdminsAndSigners()}}class Bt{constructor(t){i(this,"featureName",I.name);i(this,"createAccount",d(async(t,e)=>{if(await this.isAccountDeployed(t,e))throw new Error(`Account already deployed for admin: ${t}`);let r=L("");return e&&(r=e),A.fromContractWrapper({contractWrapper:this.contractWrapper,method:"createAccount",args:[t,r],parse:a=>({address:this.contractWrapper.parseLogs("AccountCreated",a==null?void 0:a.logs)[0].args.account,receipt:a})})}));this.contractWrapper=t,this.events=new j(this.contractWrapper)}getAddress(){return this.contractWrapper.address}async predictAccountAddress(t,e){let r=L("");return e&&(r=e),this.contractWrapper.read("getAddress",[t,r])}async getAssociatedAccounts(t){return this.contractWrapper.read("getAccountsOfSigner",[t])}async getAllAccounts(){return await this.contractWrapper.read("getAllAccounts",[])}async isAccountDeployed(t,e){const r=await this.predictAccountAddress(t,e);return tt(r,this.contractWrapper.getProvider())}}function jt(m,t){const r=w.parse(m||[]).filter(n=>n.type==="event"),a=[];for(const n of r){const s=pt(n.name,t,"events");a.push({inputs:n.inputs||[],outputs:n.outputs||[],name:n.name||"unknown",comment:s})}return a}class Gt{constructor(t,e){this.contractWrapper=t,this.storage=e}async get(){return this._cachedMetadata?this._cachedMetadata:(this._cachedMetadata=await v(this.contractWrapper.address,this.contractWrapper.getProvider(),this.storage,this.contractWrapper.options),this._cachedMetadata)}async extractSources(){const t=await this.get();return et(t,this.storage)}async extractFunctions(){let t;try{t=await this.get()}catch{}return rt(w.parse(this.contractWrapper.abi),t==null?void 0:t.metadata)}async extractEvents(){let t;try{t=await this.get()}catch{}return jt(w.parse(this.contractWrapper.abi),t==null?void 0:t.metadata)}}class Ht{constructor(t){i(this,"featureName",M.name);i(this,"add",d(async t=>A.fromContractWrapper({contractWrapper:this.contractWrapper,method:"addExtension",args:[t.extension],parse:async e=>{if(this.contractWrapper.parseLogs("ExtensionAdded",e.logs).length<1)throw new Error("No ExtensionAdded event found");const a=t.extensionAbi?w.parse(t.extensionAbi):(await v(t.extension.metadata.implementation,this.contractWrapper.getProvider(),this.contractWrapper.storage)).abi,n=this.filterAbiForAdd(a,t.extension),s=O([w.parse(this.contractWrapper.abi),n]);return this.contractWrapper.updateAbi(s),e}})));i(this,"addDeployed",d(async t=>{let e=t.extensionAbi;e||(e=(await v(t.extensionAddress,this.contractWrapper.getProvider(),this.contractWrapper.storage,this.contractWrapper.options)).abi),T(e);let r="";if(t.extensionMetadata)if(typeof t.extensionMetadata=="string")r=t.extensionMetadata;else{const s=await _.parseAsync(t.extensionMetadata);r=await this.contractWrapper.storage.upload(s)}const a=U(w.parse(e)),n={metadata:{name:t.extensionName,metadataURI:r,implementation:t.extensionAddress},functions:a};return this.add.prepare({extension:n,extensionAbi:e})}));i(this,"addPublished",d(async t=>{const e=t.version||"latest",{deployedExtensionAddress:r,extensionMetadata:a}=await this.deployExtension(t.extensionName,t.publisherAddress||q,e);return this.addDeployed.prepare({extensionName:t.extensionName,extensionAddress:r,extensionMetadata:t.extensionMetadataOverride||a})}));i(this,"replace",d(async t=>A.fromContractWrapper({contractWrapper:this.contractWrapper,method:"replaceExtension",args:[t.extension],parse:async e=>{if(this.contractWrapper.parseLogs("ExtensionReplaced",e.logs).length<1)throw new Error("No ExtensionReplaced event found");const a=t.extensionAbi?w.parse(t.extensionAbi):(await v(t.extension.metadata.implementation,this.contractWrapper.getProvider(),this.contractWrapper.storage)).abi,n=this.filterAbiForRemove(w.parse(this.contractWrapper.abi),a),s=this.filterAbiForAdd(a,t.extension),o=O([n,s]);return this.contractWrapper.updateAbi(o),e}})));i(this,"replaceDeployed",d(async t=>{let e=t.extensionAbi;e||(e=(await v(t.extensionAddress,this.contractWrapper.getProvider(),this.contractWrapper.storage,this.contractWrapper.options)).abi),T(e);let r="";if(t.extensionMetadata)if(typeof t.extensionMetadata=="string")r=t.extensionMetadata;else{const s=await _.parseAsync(t.extensionMetadata);r=await this.contractWrapper.storage.upload(s)}const a=U(w.parse(e)),n={metadata:{name:t.extensionName,metadataURI:r,implementation:t.extensionAddress},functions:a};return this.replace.prepare({extension:n,extensionAbi:e})}));i(this,"replacePublished",d(async t=>{const e=t.version||"latest",{deployedExtensionAddress:r,extensionMetadata:a}=await this.deployExtension(t.extensionName,t.publisherAddress||q,e);return this.replaceDeployed.prepare({extensionName:t.extensionName,extensionAddress:r,extensionMetadata:t.extensionMetadataOverride||a})}));i(this,"remove",d(async t=>{const e=await this.getExtensionAddress(t.extensionName);return A.fromContractWrapper({contractWrapper:this.contractWrapper,method:"removeExtension",args:[t.extensionName],parse:async r=>{if(this.contractWrapper.parseLogs("ExtensionRemoved",r.logs).length<1)throw new Error("No ExtensionRemoved event found");const n=(await v(e,this.contractWrapper.getProvider(),this.contractWrapper.storage)).abi,s=this.filterAbiForRemove(w.parse(this.contractWrapper.abi),n);return this.contractWrapper.updateAbi(s),r}})}));this.contractWrapper=t}getAddress(){return this.contractWrapper.readContract.address}async getAll(){return await this.contractWrapper.readContract.getAllExtensions()}async get(t){return await this.contractWrapper.readContract.getExtension(t)}async getExtensionAddress(t){return(await this.get(t)).metadata.implementation}async getAllFunctions(t){return(await this.get(t)).functions}async getExtensionForFunction(t){let e=t.functionSelector;return e||(T(t.functionSignature),e=at(t.functionSignature).substring(0,10)),await this.contractWrapper.readContract.getMetadataForFunction(e)}async getExtensionAddressForFunction(t){return(await this.getExtensionForFunction(t)).implementation}filterAbiForAdd(t,e){const r=new x(t),a=e.functions.map(s=>s.functionSelector);return t.filter(s=>{const o=Object.values(new x([s]).functions);if(o.length===0)return!1;const W=r.getSighash(o[0]);return a.includes(W)})}filterAbiForRemove(t,e){const r=new x(t),a=new x(e),n=Object.values(a.functions).map(o=>a.getSighash(o));return t.filter(o=>{const W=Object.values(new x([o]).functions);if(W.length===0)return!1;const P=r.getSighash(W[0]);return!n.includes(P)})}async deployExtension(t,e){var p;let r=arguments.length>2&&arguments[2]!==void 0?arguments[2]:"latest";const a=await nt(e,t,r,this.contractWrapper.storage,this.contractWrapper.options.clientId,this.contractWrapper.options.secretKey),n=await st(a.metadataUri,this.contractWrapper.storage,this.contractWrapper.getProvider(),"",this.contractWrapper.options.clientId,this.contractWrapper.options.secretKey),s=(p=n.find(u=>u.type==="implementation"))==null?void 0:p.transaction.predictedAddress,o=n.filter(u=>u.transaction.data&&u.transaction.data.length>0),W=o.filter(u=>u.type!=="infra").map(u=>u.transaction),P=o.filter(u=>u.type==="infra").map(u=>u.transaction),E=this.contractWrapper.getSigner();T(E),await it(E,P,{});for(const u of W)try{await ot(E,u)}catch(R){console.debug(`Error deploying contract at ${u.predictedAddress}`,R==null?void 0:R.message)}return{deployedExtensionAddress:s,extensionMetadata:a.metadataUri}}}class Kt{constructor(t){i(this,"featureName",G.name);i(this,"drop",d(async(t,e,r)=>A.fromContractWrapper({contractWrapper:this.contractWrapper,method:"airdropERC20",args:[t,e,r],parse:a=>{const s=this.contractWrapper.parseLogs("AirdropFailed",a.logs).map(o=>({recipient:o.args.recipient,amount:o.args.amount.toString()}));return{successfulDropCount:r.length-s.length,failedDropCount:s.length,failedDrops:s}}})));this.contractWrapper=t}getAddress(){return this.contractWrapper.address}}class $t{constructor(t){i(this,"featureName",H.name);i(this,"drop",d(async(t,e,r)=>A.fromContractWrapper({contractWrapper:this.contractWrapper,method:"airdropERC721",args:[t,e,r],parse:a=>{const s=this.contractWrapper.parseLogs("AirdropFailed",a.logs).map(o=>({recipient:o.args.recipient,tokenId:o.args.tokenId.toNumber()}));return{successfulDropCount:r.length-s.length,failedDropCount:s.length,failedDrops:s}}})));this.contractWrapper=t}getAddress(){return this.contractWrapper.address}}class zt{constructor(t){i(this,"featureName",K.name);i(this,"drop",d(async(t,e,r)=>A.fromContractWrapper({contractWrapper:this.contractWrapper,method:"airdropERC1155",args:[t,e,r],parse:a=>{const s=this.contractWrapper.parseLogs("AirdropFailed",a.logs).map(o=>({recipient:o.args.recipient,tokenId:o.args.tokenId.toNumber(),amount:o.args.amount.toString()}));return{successfulDropCount:r.length-s.length,failedDropCount:s.length,failedDrops:s}}})));this.contractWrapper=t}getAddress(){return this.contractWrapper.address}}class le{get abi(){return w.parse(this.contractWrapper.abi||[])}get royalties(){return c(this.detectRoyalties(),gt)}get roles(){return c(this.detectRoles(),lt)}get sales(){return c(this.detectPrimarySales(),ft)}get platformFees(){return c(this.detectPlatformFees(),At)}get owner(){return c(this.detectOwnable(),yt)}get erc20(){return c(this.detectErc20(),wt)}get erc721(){return c(this.detectErc721(),Wt)}get erc1155(){return c(this.detectErc1155(),Et)}get app(){return c(this.detectApp(),St)}get directListings(){return c(this.detectDirectListings(),vt)}get englishAuctions(){return c(this.detectEnglishAuctions(),Tt)}get offers(){return c(this.detectOffers(),Pt)}get airdrop20(){return c(this.detectAirdrop20(),G)}get airdrop721(){return c(this.detectAirdrop721(),H)}get airdrop1155(){return c(this.detectAirdrop1155(),K)}get accountFactory(){return c(this.detectAccountFactory(),I)}get account(){return c(this.detectAccount(),D)}get extensions(){return c(this.detectBaseRouter(),M)}get chainId(){return this._chainId}constructor(t,e,r,a){let n=arguments.length>4&&arguments[4]!==void 0?arguments[4]:{},s=arguments.length>5?arguments[5]:void 0,o=arguments.length>6&&arguments[6]!==void 0?arguments[6]:new mt(t,e,r,n,a);this._chainId=s,this.storage=a,this.contractWrapper=o,this.events=new j(this.contractWrapper),this.encoder=new ht(this.contractWrapper),this.interceptor=new xt(this.contractWrapper),this.estimator=new X(this.contractWrapper),this.publishedMetadata=new Gt(this.contractWrapper,this.storage),this.metadata=new b(this.contractWrapper,F,this.storage)}onNetworkUpdated(t){this.contractWrapper.updateSignerOrProvider(t)}getAddress(){return this.contractWrapper.address}prepare(t,e,r){return A.fromContractWrapper({contractWrapper:this.contractWrapper,method:t,args:e,overrides:r})}async call(t,e,r){return this.contractWrapper.call(t,e,r)}detectRoyalties(){if(h(this.contractWrapper,"Royalty")){const t=new b(this.contractWrapper,F,this.storage);return new Ct(this.contractWrapper,t)}}detectRoles(){if(h(this.contractWrapper,"Permissions"))return new Ft(this.contractWrapper,ut)}detectPrimarySales(){if(h(this.contractWrapper,"PrimarySale"))return new Dt(this.contractWrapper)}detectPlatformFees(){if(h(this.contractWrapper,"PlatformFee"))return new bt(this.contractWrapper)}detectErc20(){if(h(this.contractWrapper,"ERC20"))return new Mt(this.contractWrapper,this.storage,this.chainId)}detectErc721(){if(h(this.contractWrapper,"ERC721"))return new Nt(this.contractWrapper,this.storage,this.chainId)}detectErc1155(){if(h(this.contractWrapper,"ERC1155"))return new It(this.contractWrapper,this.storage,this.chainId)}detectOwnable(){if(h(this.contractWrapper,"Ownable"))return new Rt(this.contractWrapper)}detectApp(){const t=new b(this.contractWrapper,F,this.storage);if(h(this.contractWrapper,"AppURI"))return new k(this.contractWrapper,t,this.storage);if(h(this.contractWrapper,"ContractMetadata"))return new k(this.contractWrapper,t,this.storage)}detectDirectListings(){if(h(this.contractWrapper,"DirectListings"))return new kt(this.contractWrapper,this.storage)}detectEnglishAuctions(){if(h(this.contractWrapper,"EnglishAuctions"))return new Lt(this.contractWrapper,this.storage)}detectOffers(){if(h(this.contractWrapper,"Offers"))return new Ot(this.contractWrapper,this.storage)}detectBaseRouter(){if(h(this.contractWrapper,M.name))return new Ht(this.contractWrapper)}detectAirdrop20(){if(h(this.contractWrapper,"AirdropERC20"))return new Kt(this.contractWrapper)}detectAirdrop721(){if(h(this.contractWrapper,"AirdropERC721"))return new $t(this.contractWrapper)}detectAirdrop1155(){if(h(this.contractWrapper,"AirdropERC1155"))return new zt(this.contractWrapper)}detectAccountFactory(){if(h(this.contractWrapper,I.name))return new Bt(this.contractWrapper)}detectAccount(){if(h(this.contractWrapper,D.name))return new Yt(this.contractWrapper)}}export{le as SmartContract};
