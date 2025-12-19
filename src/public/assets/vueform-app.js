import{h as He,r as ce,i as j,j as S,k as ue,l as f,m as V,p as We,q as J,a as p,b as d,s as M,u as De,e as ya,x as rt,o as Mr,y as je,f as $n,c as C,d as k,z as Le,n as h,F as ie,A as de,t as Re,B as Ue,T as Ko,w as Te,C as Ve,D as N,E as rn,G as oi,v as Id,H as Go,I as si,J as Bd,K as Kl,L as Dd,M as Gn,N as Rd,O as Fd,P as Od,g as $d,Q as Hd,R as Gl,S as Pd}from"./chunks/index.js";const zd=["innerHTML"],Nd=["innerHTML"],Vd=["innerHTML"],jd=["innerHTML"],Ud=["innerHTML"],Wd=["innerHTML"],qd=["innerHTML"],Qd={__name:"CaptchaElementInline",props:{data:{type:Object,required:!0}},emits:["change"],setup(t,{emit:e}){const{proxy:n}=He(),r=t,i=ce([]),l=j(()=>r.data??{}),a=j(()=>{const o={...l.value??{}},s=o.name||"captcha";i.value=o.slots||[];const u={};return Object.entries(l.value).forEach(([m,E])=>{if(m.startsWith("@")){const g=m.slice(1);u[g]=b=>n.$handleEvent(E,b),delete o["@"+g]}}),delete o.slot,delete o.slots,{...{name:s,id:s,...n.$appendDefaults(s),...o},eventsOnly:u}});return(o,s)=>{const u=J("CaptchaElement");return p(),S(u,V({name:a.value.name,modelValue:a.value.name,"onUpdate:modelValue":s[0]||(s[0]=c=>a.value.name=c)},a.value,We(a.value.eventsOnly)),ue({default:f(()=>[M(o.$slots,"default")]),_:2},[i.value.label?{name:"label",fn:f(()=>[d("span",{innerHTML:i.value.label.template},null,8,zd)]),key:"0"}:void 0,i.value.info?{name:"info",fn:f(()=>[d("span",{innerHTML:i.value.info.template},null,8,Nd)]),key:"1"}:void 0,i.value.required?{name:"required",fn:f(()=>[d("span",{innerHTML:i.value.required.template},null,8,Vd)]),key:"2"}:void 0,i.value.description?{name:"description",fn:f(()=>[d("span",{innerHTML:i.value.description.template},null,8,jd)]),key:"3"}:void 0,i.value.before?{name:"before",fn:f(()=>[d("span",{innerHTML:i.value.before.template},null,8,Ud)]),key:"4"}:void 0,i.value.between?{name:"between",fn:f(()=>[d("span",{innerHTML:i.value.between.template},null,8,Wd)]),key:"5"}:void 0,i.value.after?{name:"after",fn:f(()=>[d("span",{innerHTML:i.value.after.template},null,8,qd)]),key:"6"}:void 0]),1040,["name","modelValue"])}}},Kd=Object.freeze(Object.defineProperty({__proto__:null,default:Qd},Symbol.toStringTag,{value:"Module"})),Gd=["innerHTML"],Jd=["innerHTML"],Yd=["innerHTML"],Xd=["innerHTML"],Zd=["innerHTML"],ec=["innerHTML"],tc=["innerHTML"],nc=["innerHTML"],rc={__name:"CheckboxElementInline",props:{data:{type:Object,required:!0}},emits:["change"],setup(t,{emit:e}){const{proxy:n}=He(),r=t,i=ce([]),l=j(()=>r.data??{}),a=j(()=>{const o={...l.value??{}},s=o.name||"checkbox";i.value=o.slots||[];const u={};return Object.entries(l.value).forEach(([m,E])=>{if(m.startsWith("@")){const g=m.slice(1);u[g]=b=>n.$handleEvent(E,b),delete o["@"+g]}}),delete o.slot,delete o.slots,{...{name:s,id:s,...n.$appendDefaults(s),...o},eventsOnly:u}});return(o,s)=>{const u=J("CheckboxElement");return p(),S(u,V({name:a.value.name,modelValue:a.value.name,"onUpdate:modelValue":s[0]||(s[0]=c=>a.value.name=c)},a.value,We(a.value.eventsOnly)),ue({default:f(()=>[M(o.$slots,"default")]),_:2},[i.value.default?{name:"default",fn:f(()=>[d("span",{innerHTML:i.value.default.template},null,8,Gd)]),key:"0"}:void 0,i.value.label?{name:"label",fn:f(()=>[d("span",{innerHTML:i.value.label.template},null,8,Jd)]),key:"1"}:void 0,i.value.info?{name:"info",fn:f(()=>[d("span",{innerHTML:i.value.info.template},null,8,Yd)]),key:"2"}:void 0,i.value.required?{name:"required",fn:f(()=>[d("span",{innerHTML:i.value.required.template},null,8,Xd)]),key:"3"}:void 0,i.value.description?{name:"description",fn:f(()=>[d("span",{innerHTML:i.value.description.template},null,8,Zd)]),key:"4"}:void 0,i.value.before?{name:"before",fn:f(()=>[d("span",{innerHTML:i.value.before.template},null,8,ec)]),key:"5"}:void 0,i.value.between?{name:"between",fn:f(()=>[d("span",{innerHTML:i.value.between.template},null,8,tc)]),key:"6"}:void 0,i.value.after?{name:"after",fn:f(()=>[d("span",{innerHTML:i.value.after.template},null,8,nc)]),key:"7"}:void 0]),1040,["name","modelValue"])}}},ic=Object.freeze(Object.defineProperty({__proto__:null,default:rc},Symbol.toStringTag,{value:"Module"})),ac=["innerHTML"],lc=["innerHTML"],oc=["innerHTML"],sc=["innerHTML"],uc=["innerHTML"],dc=["innerHTML"],cc=["innerHTML"],pc=["innerHTML"],fc={__name:"CheckboxgroupElementInline",props:{data:{type:Object,required:!0}},emits:["change"],setup(t,{emit:e}){const{proxy:n}=He(),r=t,i=ce([]),l=j(()=>r.data??{}),a=j(()=>{const o={...l.value??{}},s=o.name||"checkboxgroup";i.value=o.slots||[];const u={};return Object.entries(l.value).forEach(([m,E])=>{if(m.startsWith("@")){const g=m.slice(1);u[g]=b=>n.$handleEvent(E,b),delete o["@"+g]}}),delete o.slot,delete o.slots,{...{name:s,id:s,...n.$appendDefaults(s),...o},eventsOnly:u}});return(o,s)=>{const u=J("CheckboxgroupElement");return p(),S(u,V({name:a.value.name,modelValue:a.value.name,"onUpdate:modelValue":s[0]||(s[0]=c=>a.value.name=c)},a.value,We(a.value.eventsOnly)),ue({default:f(()=>[M(o.$slots,"default")]),_:2},[i.value.checkbox?{name:"checkbox",fn:f(()=>[d("span",{innerHTML:i.value.checkbox.template},null,8,ac)]),key:"0"}:void 0,i.value.label?{name:"label",fn:f(()=>[d("span",{innerHTML:i.value.label.template},null,8,lc)]),key:"1"}:void 0,i.value.info?{name:"info",fn:f(()=>[d("span",{innerHTML:i.value.info.template},null,8,oc)]),key:"2"}:void 0,i.value.required?{name:"required",fn:f(()=>[d("span",{innerHTML:i.value.required.template},null,8,sc)]),key:"3"}:void 0,i.value.description?{name:"description",fn:f(()=>[d("span",{innerHTML:i.value.description.template},null,8,uc)]),key:"4"}:void 0,i.value.before?{name:"before",fn:f(()=>[d("span",{innerHTML:i.value.before.template},null,8,dc)]),key:"5"}:void 0,i.value.between?{name:"between",fn:f(()=>[d("span",{innerHTML:i.value.between.template},null,8,cc)]),key:"6"}:void 0,i.value.after?{name:"after",fn:f(()=>[d("span",{innerHTML:i.value.after.template},null,8,pc)]),key:"7"}:void 0]),1040,["name","modelValue"])}}},vc=Object.freeze(Object.defineProperty({__proto__:null,default:fc},Symbol.toStringTag,{value:"Module"})),hc=["innerHTML"],mc=["innerHTML"],gc=["innerHTML"],bc=["innerHTML"],wc=["innerHTML"],yc=["innerHTML"],kc=["innerHTML"],Cc=["innerHTML"],Ec=["innerHTML"],Ac={__name:"DateElementInline",props:{data:{type:Object,required:!0}},emits:["change"],setup(t,{emit:e}){const{proxy:n}=He(),r=t,i=ce([]),l=j(()=>r.data??{}),a=j(()=>{const o={...l.value??{}},s=o.name||"date";i.value=o.slots||[];const u={};return Object.entries(l.value).forEach(([m,E])=>{if(m.startsWith("@")){const g=m.slice(1);u[g]=b=>n.$handleEvent(E,b),delete o["@"+g]}}),delete o.slot,delete o.slots,{...{name:s,id:s,...n.$appendDefaults(s),...o},eventsOnly:u}});return(o,s)=>{const u=J("DateElement");return p(),S(u,V({name:a.value.name,modelValue:a.value.name,"onUpdate:modelValue":s[0]||(s[0]=c=>a.value.name=c)},a.value,We(a.value.eventsOnly)),ue({default:f(()=>[M(o.$slots,"default")]),_:2},[i.value.label?{name:"label",fn:f(()=>[d("span",{innerHTML:i.value.label.template},null,8,hc)]),key:"0"}:void 0,i.value.info?{name:"info",fn:f(()=>[d("span",{innerHTML:i.value.info.template},null,8,mc)]),key:"1"}:void 0,i.value.required?{name:"required",fn:f(()=>[d("span",{innerHTML:i.value.required.template},null,8,gc)]),key:"2"}:void 0,i.value.description?{name:"description",fn:f(()=>[d("span",{innerHTML:i.value.description.template},null,8,bc)]),key:"3"}:void 0,i.value.before?{name:"before",fn:f(()=>[d("span",{innerHTML:i.value.before.template},null,8,wc)]),key:"4"}:void 0,i.value.between?{name:"between",fn:f(()=>[d("span",{innerHTML:i.value.between.template},null,8,yc)]),key:"5"}:void 0,i.value.after?{name:"after",fn:f(()=>[d("span",{innerHTML:i.value.after.template},null,8,kc)]),key:"6"}:void 0,i.value["addon-before"]?{name:"addon-before",fn:f(()=>[d("span",{innerHTML:i.value["addon-before"].template},null,8,Cc)]),key:"7"}:void 0,i.value["addon-after"]?{name:"addon-after",fn:f(()=>[d("span",{innerHTML:i.value["addon-after"].template},null,8,Ec)]),key:"8"}:void 0]),1040,["name","modelValue"])}}},Lc=Object.freeze(Object.defineProperty({__proto__:null,default:Ac},Symbol.toStringTag,{value:"Module"})),xc=["innerHTML"],Tc=["innerHTML"],Sc=["innerHTML"],_c=["innerHTML"],Mc=["innerHTML"],Ic=["innerHTML"],Bc=["innerHTML"],Dc=["innerHTML"],Rc=["innerHTML"],Fc={__name:"DatesElementInline",props:{data:{type:Object,required:!0}},emits:["change"],setup(t,{emit:e}){const{proxy:n}=He(),r=t,i=ce([]),l=j(()=>r.data??{}),a=j(()=>{const o={...l.value??{}},s=o.name||"dates";i.value=o.slots||[];const u={};return Object.entries(l.value).forEach(([m,E])=>{if(m.startsWith("@")){const g=m.slice(1);u[g]=b=>n.$handleEvent(E,b),delete o["@"+g]}}),delete o.slot,delete o.slots,{...{name:s,id:s,...n.$appendDefaults(s),...o},eventsOnly:u}});return(o,s)=>{const u=J("DatesElement");return p(),S(u,V({name:a.value.name,modelValue:a.value.name,"onUpdate:modelValue":s[0]||(s[0]=c=>a.value.name=c)},a.value,We(a.value.eventsOnly)),ue({default:f(()=>[M(o.$slots,"default")]),_:2},[i.value.label?{name:"label",fn:f(()=>[d("span",{innerHTML:i.value.label.template},null,8,xc)]),key:"0"}:void 0,i.value.info?{name:"info",fn:f(()=>[d("span",{innerHTML:i.value.info.template},null,8,Tc)]),key:"1"}:void 0,i.value.required?{name:"required",fn:f(()=>[d("span",{innerHTML:i.value.required.template},null,8,Sc)]),key:"2"}:void 0,i.value.description?{name:"description",fn:f(()=>[d("span",{innerHTML:i.value.description.template},null,8,_c)]),key:"3"}:void 0,i.value.before?{name:"before",fn:f(()=>[d("span",{innerHTML:i.value.before.template},null,8,Mc)]),key:"4"}:void 0,i.value.between?{name:"between",fn:f(()=>[d("span",{innerHTML:i.value.between.template},null,8,Ic)]),key:"5"}:void 0,i.value.after?{name:"after",fn:f(()=>[d("span",{innerHTML:i.value.after.template},null,8,Bc)]),key:"6"}:void 0,i.value["addon-before"]?{name:"addon-before",fn:f(()=>[d("span",{innerHTML:i.value["addon-before"].template},null,8,Dc)]),key:"7"}:void 0,i.value["addon-after"]?{name:"addon-after",fn:f(()=>[d("span",{innerHTML:i.value["addon-after"].template},null,8,Rc)]),key:"8"}:void 0]),1040,["name","modelValue"])}}},Oc=Object.freeze(Object.defineProperty({__proto__:null,default:Fc},Symbol.toStringTag,{value:"Module"})),$c=["innerHTML"],Hc=["innerHTML"],Pc=["innerHTML"],zc=["innerHTML"],Nc=["innerHTML"],Vc=["innerHTML"],jc=["innerHTML"],Uc={__name:"EditorElementInline",props:{data:{type:Object,required:!0}},emits:["change"],setup(t,{emit:e}){const{proxy:n}=He(),r=t,i=ce([]),l=j(()=>r.data??{}),a=j(()=>{const o={...l.value??{}},s=o.name||"editor";i.value=o.slots||[];const u={};return Object.entries(l.value).forEach(([m,E])=>{if(m.startsWith("@")){const g=m.slice(1);u[g]=b=>n.$handleEvent(E,b),delete o["@"+g]}}),delete o.slot,delete o.slots,{...{name:s,id:s,...n.$appendDefaults(s),...o},eventsOnly:u}});return(o,s)=>{const u=J("EditorElement");return p(),S(u,V({name:a.value.name,modelValue:a.value.name,"onUpdate:modelValue":s[0]||(s[0]=c=>a.value.name=c)},a.value,We(a.value.eventsOnly)),ue({default:f(()=>[M(o.$slots,"default")]),_:2},[i.value.label?{name:"label",fn:f(()=>[d("span",{innerHTML:i.value.label.template},null,8,$c)]),key:"0"}:void 0,i.value.info?{name:"info",fn:f(()=>[d("span",{innerHTML:i.value.info.template},null,8,Hc)]),key:"1"}:void 0,i.value.required?{name:"required",fn:f(()=>[d("span",{innerHTML:i.value.required.template},null,8,Pc)]),key:"2"}:void 0,i.value.description?{name:"description",fn:f(()=>[d("span",{innerHTML:i.value.description.template},null,8,zc)]),key:"3"}:void 0,i.value.before?{name:"before",fn:f(()=>[d("span",{innerHTML:i.value.before.template},null,8,Nc)]),key:"4"}:void 0,i.value.between?{name:"between",fn:f(()=>[d("span",{innerHTML:i.value.between.template},null,8,Vc)]),key:"5"}:void 0,i.value.after?{name:"after",fn:f(()=>[d("span",{innerHTML:i.value.after.template},null,8,jc)]),key:"6"}:void 0]),1040,["name","modelValue"])}}},Wc=Object.freeze(Object.defineProperty({__proto__:null,default:Uc},Symbol.toStringTag,{value:"Module"})),qc=["innerHTML"],Qc=["innerHTML"],Kc=["innerHTML"],Gc=["innerHTML"],Jc=["innerHTML"],Yc=["innerHTML"],Xc=["innerHTML"],Zc={__name:"FileElementInline",props:{data:{type:Object,required:!0}},emits:["change"],setup(t,{emit:e}){const{proxy:n}=He(),r=t,i=ce([]),l=j(()=>r.data??{}),a=j(()=>{const o={...l.value??{}},s=o.name||"file";i.value=o.slots||[];const u={};return Object.entries(l.value).forEach(([m,E])=>{if(m.startsWith("@")){const g=m.slice(1);u[g]=b=>n.$handleEvent(E,b),delete o["@"+g]}}),delete o.slot,delete o.slots,{...{name:s,id:s,...n.$appendDefaults(s),...o},eventsOnly:u}});return(o,s)=>{const u=J("FileElement");return p(),S(u,V({name:a.value.name,modelValue:a.value.name,"onUpdate:modelValue":s[0]||(s[0]=c=>a.value.name=c)},a.value,We(a.value.eventsOnly)),ue({default:f(()=>[M(o.$slots,"default")]),_:2},[i.value.label?{name:"label",fn:f(()=>[d("span",{innerHTML:i.value.label.template},null,8,qc)]),key:"0"}:void 0,i.value.info?{name:"info",fn:f(()=>[d("span",{innerHTML:i.value.info.template},null,8,Qc)]),key:"1"}:void 0,i.value.required?{name:"required",fn:f(()=>[d("span",{innerHTML:i.value.required.template},null,8,Kc)]),key:"2"}:void 0,i.value.description?{name:"description",fn:f(()=>[d("span",{innerHTML:i.value.description.template},null,8,Gc)]),key:"3"}:void 0,i.value.before?{name:"before",fn:f(()=>[d("span",{innerHTML:i.value.before.template},null,8,Jc)]),key:"4"}:void 0,i.value.between?{name:"between",fn:f(()=>[d("span",{innerHTML:i.value.between.template},null,8,Yc)]),key:"5"}:void 0,i.value.after?{name:"after",fn:f(()=>[d("span",{innerHTML:i.value.after.template},null,8,Xc)]),key:"6"}:void 0]),1040,["name","modelValue"])}}},ep=Object.freeze(Object.defineProperty({__proto__:null,default:Zc},Symbol.toStringTag,{value:"Module"})),tp={__name:"HiddenElementInline",props:{data:{type:Object,required:!0}},emits:["change"],setup(t,{emit:e}){const{proxy:n}=He(),r=t,i=ce([]),l=j(()=>r.data??{}),a=j(()=>{const o={...l.value??{}},s=o.name||"hidden";i.value=o.slots||[];const u={};return Object.entries(l.value).forEach(([m,E])=>{if(m.startsWith("@")){const g=m.slice(1);u[g]=b=>n.$handleEvent(E,b),delete o["@"+g]}}),delete o.slot,delete o.slots,{...{name:s,id:s,...n.$appendDefaults(s),...o},eventsOnly:u}});return(o,s)=>{const u=J("HiddenElement");return p(),S(u,V({name:a.value.name,modelValue:a.value.name,"onUpdate:modelValue":s[0]||(s[0]=c=>a.value.name=c)},a.value,We(a.value.eventsOnly)),{default:f(()=>[M(o.$slots,"default")]),_:3},16,["name","modelValue"])}}},np=Object.freeze(Object.defineProperty({__proto__:null,default:tp},Symbol.toStringTag,{value:"Module"})),rp=["innerHTML"],ip=["innerHTML"],ap=["innerHTML"],lp=["innerHTML"],op=["innerHTML"],sp=["innerHTML"],up=["innerHTML"],dp=["innerHTML"],cp=["innerHTML"],pp={__name:"LocationElementInline",props:{data:{type:Object,required:!0}},emits:["change"],setup(t,{emit:e}){const{proxy:n}=He(),r=t,i=ce([]),l=j(()=>r.data??{}),a=j(()=>{const o={...l.value??{}},s=o.name||"location";i.value=o.slots||[];const u={};return Object.entries(l.value).forEach(([m,E])=>{if(m.startsWith("@")){const g=m.slice(1);u[g]=b=>n.$handleEvent(E,b),delete o["@"+g]}}),delete o.slot,delete o.slots,{...{name:s,id:s,...n.$appendDefaults(s),...o},eventsOnly:u}});return(o,s)=>{const u=J("LocationElement");return p(),S(u,V({name:a.value.name,modelValue:a.value.name,"onUpdate:modelValue":s[0]||(s[0]=c=>a.value.name=c)},a.value,We(a.value.eventsOnly)),ue({default:f(()=>[M(o.$slots,"default")]),_:2},[i.value.label?{name:"label",fn:f(()=>[d("span",{innerHTML:i.value.label.template},null,8,rp)]),key:"0"}:void 0,i.value.info?{name:"info",fn:f(()=>[d("span",{innerHTML:i.value.info.template},null,8,ip)]),key:"1"}:void 0,i.value.required?{name:"required",fn:f(()=>[d("span",{innerHTML:i.value.required.template},null,8,ap)]),key:"2"}:void 0,i.value.description?{name:"description",fn:f(()=>[d("span",{innerHTML:i.value.description.template},null,8,lp)]),key:"3"}:void 0,i.value.before?{name:"before",fn:f(()=>[d("span",{innerHTML:i.value.before.template},null,8,op)]),key:"4"}:void 0,i.value.between?{name:"between",fn:f(()=>[d("span",{innerHTML:i.value.between.template},null,8,sp)]),key:"5"}:void 0,i.value.after?{name:"after",fn:f(()=>[d("span",{innerHTML:i.value.after.template},null,8,up)]),key:"6"}:void 0,i.value["addon-before"]?{name:"addon-before",fn:f(()=>[d("span",{innerHTML:i.value["addon-before"].template},null,8,dp)]),key:"7"}:void 0,i.value["addon-after"]?{name:"addon-after",fn:f(()=>[d("span",{innerHTML:i.value["addon-after"].template},null,8,cp)]),key:"8"}:void 0]),1040,["name","modelValue"])}}},fp=Object.freeze(Object.defineProperty({__proto__:null,default:pp},Symbol.toStringTag,{value:"Module"})),vp=["innerHTML"],hp=["innerHTML"],mp=["innerHTML"],gp=["innerHTML"],bp=["innerHTML"],wp=["innerHTML"],yp=["innerHTML"],kp={__name:"MultifileElementInline",props:{data:{type:Object,required:!0}},emits:["change"],setup(t,{emit:e}){const{proxy:n}=He(),r=t,i=ce([]),l=j(()=>r.data??{}),a=j(()=>{const o={...l.value??{}},s=o.name||"files";i.value=o.slots||[];const u={};return Object.entries(l.value).forEach(([m,E])=>{if(m.startsWith("@")){const g=m.slice(1);u[g]=b=>n.$handleEvent(E,b),delete o["@"+g]}}),delete o.slot,delete o.slots,{...{name:s,id:s,...n.$appendDefaults(s),...o},eventsOnly:u}});return(o,s)=>{const u=J("MultifileElement");return p(),S(u,V({name:a.value.name,modelValue:a.value.name,"onUpdate:modelValue":s[0]||(s[0]=c=>a.value.name=c)},a.value,We(a.value.eventsOnly)),ue({default:f(()=>[M(o.$slots,"default")]),_:2},[i.value.label?{name:"label",fn:f(()=>[d("span",{innerHTML:i.value.label.template},null,8,vp)]),key:"0"}:void 0,i.value.info?{name:"info",fn:f(()=>[d("span",{innerHTML:i.value.info.template},null,8,hp)]),key:"1"}:void 0,i.value.required?{name:"required",fn:f(()=>[d("span",{innerHTML:i.value.required.template},null,8,mp)]),key:"2"}:void 0,i.value.description?{name:"description",fn:f(()=>[d("span",{innerHTML:i.value.description.template},null,8,gp)]),key:"3"}:void 0,i.value.before?{name:"before",fn:f(()=>[d("span",{innerHTML:i.value.before.template},null,8,bp)]),key:"4"}:void 0,i.value.between?{name:"between",fn:f(()=>[d("span",{innerHTML:i.value.between.template},null,8,wp)]),key:"5"}:void 0,i.value.after?{name:"after",fn:f(()=>[d("span",{innerHTML:i.value.after.template},null,8,yp)]),key:"6"}:void 0]),1040,["name","modelValue"])}}},Cp=Object.freeze(Object.defineProperty({__proto__:null,default:kp},Symbol.toStringTag,{value:"Module"})),Ep=["innerHTML"],Ap=["innerHTML"],Lp=["innerHTML"],xp=["innerHTML"],Tp=["innerHTML"],Sp=["innerHTML"],_p=["innerHTML"],Mp=["innerHTML"],Ip=["innerHTML"],Bp=["innerHTML"],Dp=["innerHTML"],Rp=["innerHTML"],Fp=["innerHTML"],Op=["innerHTML"],$p=["innerHTML"],Hp=["innerHTML"],Pp=["innerHTML"],zp=["innerHTML"],Np={__name:"MultiselectElementInline",props:{data:{type:Object,required:!0}},emits:["change"],setup(t,{emit:e}){const{proxy:n}=He(),r=t,i=ce([]),l=j(()=>r.data??{}),a=j(()=>{const o={...l.value??{}},s=o.name||"multiselect";i.value=o.slots||[];const u={};return Object.entries(l.value).forEach(([m,E])=>{if(m.startsWith("@")){const g=m.slice(1);u[g]=b=>n.$handleEvent(E,b),delete o["@"+g]}}),delete o.slot,delete o.slots,{...{name:s,id:s,...n.$appendDefaults(s),...o},eventsOnly:u}});return(o,s)=>{const u=J("MultiselectElement");return p(),S(u,V({name:a.value.name,modelValue:a.value.name,"onUpdate:modelValue":s[0]||(s[0]=c=>a.value.name=c)},a.value,We(a.value.eventsOnly)),ue({default:f(()=>[M(o.$slots,"default")]),_:2},[i.value.option?{name:"option",fn:f(()=>[d("span",{innerHTML:i.value.option.template},null,8,Ep)]),key:"0"}:void 0,i.value.multiple-o.label?{name:"multiple-label",fn:f(()=>[d("span",{innerHTML:i.value.multiple-o.label.template},null,8,Ap)]),key:"1"}:void 0,i.value.placeholder?{name:"placeholder",fn:f(()=>[d("span",{innerHTML:i.value.placeholder.template},null,8,Lp)]),key:"2"}:void 0,i.value["group-label"]?{name:"group-label",fn:f(()=>[d("span",{innerHTML:i.value["group-label"].template},null,8,xp)]),key:"3"}:void 0,i.value["before-list"]?{name:"before-list",fn:f(()=>[d("span",{innerHTML:i.value["before-list"].template},null,8,Tp)]),key:"4"}:void 0,i.value["after-list"]?{name:"after-list",fn:f(()=>[d("span",{innerHTML:i.value["after-list"].template},null,8,Sp)]),key:"5"}:void 0,i.value["no-results"]?{name:"no-results",fn:f(()=>[d("span",{innerHTML:i.value["no-results"].template},null,8,_p)]),key:"6"}:void 0,i.value["no-options"]?{name:"no-options",fn:f(()=>[d("span",{innerHTML:i.value["no-options"].template},null,8,Mp)]),key:"7"}:void 0,i.value.caret?{name:"caret",fn:f(()=>[d("span",{innerHTML:i.value.caret.template},null,8,Ip)]),key:"8"}:void 0,i.value.spinner?{name:"spinner",fn:f(()=>[d("span",{innerHTML:i.value.spinner.template},null,8,Bp)]),key:"9"}:void 0,i.value.clear?{name:"clear",fn:f(()=>[d("span",{innerHTML:i.value.clear.template},null,8,Dp)]),key:"10"}:void 0,i.value.label?{name:"label",fn:f(()=>[d("span",{innerHTML:i.value.label.template},null,8,Rp)]),key:"11"}:void 0,i.value.info?{name:"info",fn:f(()=>[d("span",{innerHTML:i.value.info.template},null,8,Fp)]),key:"12"}:void 0,i.value.required?{name:"required",fn:f(()=>[d("span",{innerHTML:i.value.required.template},null,8,Op)]),key:"13"}:void 0,i.value.description?{name:"description",fn:f(()=>[d("span",{innerHTML:i.value.description.template},null,8,$p)]),key:"14"}:void 0,i.value.before?{name:"before",fn:f(()=>[d("span",{innerHTML:i.value.before.template},null,8,Hp)]),key:"15"}:void 0,i.value.between?{name:"between",fn:f(()=>[d("span",{innerHTML:i.value.between.template},null,8,Pp)]),key:"16"}:void 0,i.value.after?{name:"after",fn:f(()=>[d("span",{innerHTML:i.value.after.template},null,8,zp)]),key:"17"}:void 0]),1040,["name","modelValue"])}}},Vp=Object.freeze(Object.defineProperty({__proto__:null,default:Np},Symbol.toStringTag,{value:"Module"})),jp=["innerHTML"],Up=["innerHTML"],Wp=["innerHTML"],qp=["innerHTML"],Qp=["innerHTML"],Kp=["innerHTML"],Gp=["innerHTML"],Jp={__name:"PhoneElementInline",props:{data:{type:Object,required:!0}},emits:["change"],setup(t,{emit:e}){const{proxy:n}=He(),r=t,i=ce([]),l=j(()=>r.data??{}),a=j(()=>{const o={...l.value??{}},s=o.name||"phone";i.value=o.slots||[];const u={};return Object.entries(l.value).forEach(([m,E])=>{if(m.startsWith("@")){const g=m.slice(1);u[g]=b=>n.$handleEvent(E,b),delete o["@"+g]}}),delete o.slot,delete o.slots,{...{name:s,id:s,...n.$appendDefaults(s),...o},eventsOnly:u}});return(o,s)=>{const u=J("PhoneElement");return p(),S(u,V({name:a.value.name,modelValue:a.value.name,"onUpdate:modelValue":s[0]||(s[0]=c=>a.value.name=c)},a.value,We(a.value.eventsOnly)),ue({default:f(()=>[M(o.$slots,"default")]),_:2},[i.value.label?{name:"label",fn:f(()=>[d("span",{innerHTML:i.value.label.template},null,8,jp)]),key:"0"}:void 0,i.value.info?{name:"info",fn:f(()=>[d("span",{innerHTML:i.value.info.template},null,8,Up)]),key:"1"}:void 0,i.value.required?{name:"required",fn:f(()=>[d("span",{innerHTML:i.value.required.template},null,8,Wp)]),key:"2"}:void 0,i.value.description?{name:"description",fn:f(()=>[d("span",{innerHTML:i.value.description.template},null,8,qp)]),key:"3"}:void 0,i.value.before?{name:"before",fn:f(()=>[d("span",{innerHTML:i.value.before.template},null,8,Qp)]),key:"4"}:void 0,i.value.between?{name:"between",fn:f(()=>[d("span",{innerHTML:i.value.between.template},null,8,Kp)]),key:"5"}:void 0,i.value.after?{name:"after",fn:f(()=>[d("span",{innerHTML:i.value.after.template},null,8,Gp)]),key:"6"}:void 0]),1040,["name","modelValue"])}}},Yp=Object.freeze(Object.defineProperty({__proto__:null,default:Jp},Symbol.toStringTag,{value:"Module"})),Xp=["innerHTML"],Zp=["innerHTML"],ef=["innerHTML"],tf=["innerHTML"],nf=["innerHTML"],rf=["innerHTML"],af=["innerHTML"],lf=["innerHTML"],of={__name:"RadioElementInline",props:{data:{type:Object,required:!0}},emits:["change"],setup(t,{emit:e}){const{proxy:n}=He(),r=t,i=ce([]),l=j(()=>r.data??{}),a=j(()=>{const o={...l.value??{}},s=o.name||"radio";i.value=o.slots||[];const u={};return Object.entries(l.value).forEach(([m,E])=>{if(m.startsWith("@")){const g=m.slice(1);u[g]=b=>n.$handleEvent(E,b),delete o["@"+g]}}),delete o.slot,delete o.slots,{...{name:s,id:s,...n.$appendDefaults(s),...o},eventsOnly:u}});return(o,s)=>{const u=J("RadioElement");return p(),S(u,V({name:a.value.name,modelValue:a.value.name,"onUpdate:modelValue":s[0]||(s[0]=c=>a.value.name=c)},a.value,We(a.value.eventsOnly)),ue({default:f(()=>[M(o.$slots,"default")]),_:2},[i.value.default?{name:"default",fn:f(()=>[d("span",{innerHTML:i.value.default.template},null,8,Xp)]),key:"0"}:void 0,i.value.label?{name:"label",fn:f(()=>[d("span",{innerHTML:i.value.label.template},null,8,Zp)]),key:"1"}:void 0,i.value.info?{name:"info",fn:f(()=>[d("span",{innerHTML:i.value.info.template},null,8,ef)]),key:"2"}:void 0,i.value.required?{name:"required",fn:f(()=>[d("span",{innerHTML:i.value.required.template},null,8,tf)]),key:"3"}:void 0,i.value.description?{name:"description",fn:f(()=>[d("span",{innerHTML:i.value.description.template},null,8,nf)]),key:"4"}:void 0,i.value.before?{name:"before",fn:f(()=>[d("span",{innerHTML:i.value.before.template},null,8,rf)]),key:"5"}:void 0,i.value.between?{name:"between",fn:f(()=>[d("span",{innerHTML:i.value.between.template},null,8,af)]),key:"6"}:void 0,i.value.after?{name:"after",fn:f(()=>[d("span",{innerHTML:i.value.after.template},null,8,lf)]),key:"7"}:void 0]),1040,["name","modelValue"])}}},sf=Object.freeze(Object.defineProperty({__proto__:null,default:of},Symbol.toStringTag,{value:"Module"})),uf=["innerHTML"],df=["innerHTML"],cf=["innerHTML"],pf=["innerHTML"],ff=["innerHTML"],vf=["innerHTML"],hf=["innerHTML"],mf=["innerHTML"],gf={__name:"RadiogroupElementInline",props:{data:{type:Object,required:!0}},emits:["change"],setup(t,{emit:e}){const{proxy:n}=He(),r=t,i=ce([]),l=j(()=>r.data??{}),a=j(()=>{const o={...l.value??{}},s=o.name||"radiogroup";i.value=o.slots||[];const u={};return Object.entries(l.value).forEach(([m,E])=>{if(m.startsWith("@")){const g=m.slice(1);u[g]=b=>n.$handleEvent(E,b),delete o["@"+g]}}),delete o.slot,delete o.slots,{...{name:s,id:s,...n.$appendDefaults(s),...o},eventsOnly:u}});return(o,s)=>{const u=J("RadiogroupElement");return p(),S(u,V({name:a.value.name,modelValue:a.value.name,"onUpdate:modelValue":s[0]||(s[0]=c=>a.value.name=c)},a.value,We(a.value.eventsOnly)),ue({default:f(()=>[M(o.$slots,"default")]),_:2},[i.value.radio?{name:"radio",fn:f(()=>[d("span",{innerHTML:i.value.radio.template},null,8,uf)]),key:"0"}:void 0,i.value.label?{name:"label",fn:f(()=>[d("span",{innerHTML:i.value.label.template},null,8,df)]),key:"1"}:void 0,i.value.info?{name:"info",fn:f(()=>[d("span",{innerHTML:i.value.info.template},null,8,cf)]),key:"2"}:void 0,i.value.required?{name:"required",fn:f(()=>[d("span",{innerHTML:i.value.required.template},null,8,pf)]),key:"3"}:void 0,i.value.description?{name:"description",fn:f(()=>[d("span",{innerHTML:i.value.description.template},null,8,ff)]),key:"4"}:void 0,i.value.before?{name:"before",fn:f(()=>[d("span",{innerHTML:i.value.before.template},null,8,vf)]),key:"5"}:void 0,i.value.between?{name:"between",fn:f(()=>[d("span",{innerHTML:i.value.between.template},null,8,hf)]),key:"6"}:void 0,i.value.after?{name:"after",fn:f(()=>[d("span",{innerHTML:i.value.after.template},null,8,mf)]),key:"7"}:void 0]),1040,["name","modelValue"])}}},bf=Object.freeze(Object.defineProperty({__proto__:null,default:gf},Symbol.toStringTag,{value:"Module"})),wf=["innerHTML"],yf=["innerHTML"],kf=["innerHTML"],Cf=["innerHTML"],Ef=["innerHTML"],Af=["innerHTML"],Lf=["innerHTML"],xf=["innerHTML"],Tf=["innerHTML"],Sf=["innerHTML"],_f=["innerHTML"],Mf=["innerHTML"],If=["innerHTML"],Bf=["innerHTML"],Df=["innerHTML"],Rf=["innerHTML"],Ff=["innerHTML"],Of=["innerHTML"],$f={__name:"SelectElementInline",props:{data:{type:Object,required:!0}},emits:["change"],setup(t,{emit:e}){const{proxy:n}=He(),r=t,i=ce([]),l=j(()=>r.data??{}),a=j(()=>{const o={...l.value??{}},s=o.name||"select";i.value=o.slots||[];const u={};return Object.entries(l.value).forEach(([m,E])=>{if(m.startsWith("@")){const g=m.slice(1);u[g]=b=>n.$handleEvent(E,b),delete o["@"+g]}}),delete o.slot,delete o.slots,{...{name:s,id:s,...n.$appendDefaults(s),...o},eventsOnly:u}});return(o,s)=>{const u=J("SelectElement");return p(),S(u,V({name:a.value.name,modelValue:a.value.name,"onUpdate:modelValue":s[0]||(s[0]=c=>a.value.name=c)},a.value,We(a.value.eventsOnly)),ue({default:f(()=>[M(o.$slots,"default")]),_:2},[i.value.option?{name:"option",fn:f(()=>[d("span",{innerHTML:i.value.option.template},null,8,wf)]),key:"0"}:void 0,i.value["single-label"]?{name:"single-label",fn:f(()=>[d("span",{innerHTML:i.value["single-label"].template},null,8,yf)]),key:"1"}:void 0,i.value.placeholder?{name:"placeholder",fn:f(()=>[d("span",{innerHTML:i.value.placeholder.template},null,8,kf)]),key:"2"}:void 0,i.value["group-label"]?{name:"group-label",fn:f(()=>[d("span",{innerHTML:i.value["group-label"].template},null,8,Cf)]),key:"3"}:void 0,i.value["before-list"]?{name:"before-list",fn:f(()=>[d("span",{innerHTML:i.value["before-list"].template},null,8,Ef)]),key:"4"}:void 0,i.value["after-list"]?{name:"after-list",fn:f(()=>[d("span",{innerHTML:i.value["after-list"].template},null,8,Af)]),key:"5"}:void 0,i.value["no-results"]?{name:"no-results",fn:f(()=>[d("span",{innerHTML:i.value["no-results"].template},null,8,Lf)]),key:"6"}:void 0,i.value["no-options"]?{name:"no-options",fn:f(()=>[d("span",{innerHTML:i.value["no-options"].template},null,8,xf)]),key:"7"}:void 0,i.value.caret?{name:"caret",fn:f(()=>[d("span",{innerHTML:i.value.caret.template},null,8,Tf)]),key:"8"}:void 0,i.value.spinner?{name:"spinner",fn:f(()=>[d("span",{innerHTML:i.value.spinner.template},null,8,Sf)]),key:"9"}:void 0,i.value.clear?{name:"clear",fn:f(()=>[d("span",{innerHTML:i.value.clear.template},null,8,_f)]),key:"10"}:void 0,i.value.label?{name:"label",fn:f(()=>[d("span",{innerHTML:i.value.label.template},null,8,Mf)]),key:"11"}:void 0,i.value.info?{name:"info",fn:f(()=>[d("span",{innerHTML:i.value.info.template},null,8,If)]),key:"12"}:void 0,i.value.required?{name:"required",fn:f(()=>[d("span",{innerHTML:i.value.required.template},null,8,Bf)]),key:"13"}:void 0,i.value.description?{name:"description",fn:f(()=>[d("span",{innerHTML:i.value.description.template},null,8,Df)]),key:"14"}:void 0,i.value.before?{name:"before",fn:f(()=>[d("span",{innerHTML:i.value.before.template},null,8,Rf)]),key:"15"}:void 0,i.value.between?{name:"between",fn:f(()=>[d("span",{innerHTML:i.value.between.template},null,8,Ff)]),key:"16"}:void 0,i.value.after?{name:"after",fn:f(()=>[d("span",{innerHTML:i.value.after.template},null,8,Of)]),key:"17"}:void 0]),1040,["name","modelValue"])}}},Hf=Object.freeze(Object.defineProperty({__proto__:null,default:$f},Symbol.toStringTag,{value:"Module"})),Pf=["innerHTML"],zf=["innerHTML"],Nf=["innerHTML"],Vf=["innerHTML"],jf=["innerHTML"],Uf=["innerHTML"],Wf=["innerHTML"],qf=["innerHTML"],Qf=["innerHTML"],Kf={__name:"SignatureElementInline",props:{data:{type:Object,required:!0}},emits:["change"],setup(t,{emit:e}){const{proxy:n}=He(),r=t,i=ce([]),l=j(()=>r.data??{}),a=j(()=>{const o={...l.value??{}},s=o.name||"signature";i.value=o.slots||[];const u={};return Object.entries(l.value).forEach(([m,E])=>{if(m.startsWith("@")){const g=m.slice(1);u[g]=b=>n.$handleEvent(E,b),delete o["@"+g]}}),delete o.slot,delete o.slots,{...{name:s,id:s,...n.$appendDefaults(s),...o},eventsOnly:u}});return(o,s)=>{const u=J("SignatureElement");return p(),S(u,V({name:a.value.name,modelValue:a.value.name,"onUpdate:modelValue":s[0]||(s[0]=c=>a.value.name=c)},a.value,We(a.value.eventsOnly)),ue({default:f(()=>[M(o.$slots,"default")]),_:2},[i.value.label?{name:"label",fn:f(()=>[d("span",{innerHTML:i.value.label.template},null,8,Pf)]),key:"0"}:void 0,i.value.info?{name:"info",fn:f(()=>[d("span",{innerHTML:i.value.info.template},null,8,zf)]),key:"1"}:void 0,i.value.required?{name:"required",fn:f(()=>[d("span",{innerHTML:i.value.required.template},null,8,Nf)]),key:"2"}:void 0,i.value.description?{name:"description",fn:f(()=>[d("span",{innerHTML:i.value.description.template},null,8,Vf)]),key:"3"}:void 0,i.value.before?{name:"before",fn:f(()=>[d("span",{innerHTML:i.value.before.template},null,8,jf)]),key:"4"}:void 0,i.value.between?{name:"between",fn:f(()=>[d("span",{innerHTML:i.value.between.template},null,8,Uf)]),key:"5"}:void 0,i.value.after?{name:"after",fn:f(()=>[d("span",{innerHTML:i.value.after.template},null,8,Wf)]),key:"6"}:void 0,i.value["addon-before"]?{name:"addon-before",fn:f(()=>[d("span",{innerHTML:i.value["addon-before"].template},null,8,qf)]),key:"7"}:void 0,i.value["addon-after"]?{name:"addon-after",fn:f(()=>[d("span",{innerHTML:i.value["addon-after"].template},null,8,Qf)]),key:"8"}:void 0]),1040,["name","modelValue"])}}},Gf=Object.freeze(Object.defineProperty({__proto__:null,default:Kf},Symbol.toStringTag,{value:"Module"})),Jf=["innerHTML"],Yf=["innerHTML"],Xf=["innerHTML"],Zf=["innerHTML"],ev=["innerHTML"],tv=["innerHTML"],nv=["innerHTML"],rv={__name:"SliderElementInline",props:{data:{type:Object,required:!0}},emits:["change"],setup(t,{emit:e}){const{proxy:n}=He(),r=t,i=ce([]),l=j(()=>r.data??{}),a=j(()=>{const o={...l.value??{}},s=o.name||"slider";i.value=o.slots||[];const u={};return Object.entries(l.value).forEach(([m,E])=>{if(m.startsWith("@")){const g=m.slice(1);u[g]=b=>n.$handleEvent(E,b),delete o["@"+g]}}),delete o.slot,delete o.slots,{...{name:s,id:s,...n.$appendDefaults(s),...o},eventsOnly:u}});return(o,s)=>{const u=J("SliderElement");return p(),S(u,V({name:a.value.name,modelValue:a.value.name,"onUpdate:modelValue":s[0]||(s[0]=c=>a.value.name=c)},a.value,We(a.value.eventsOnly)),ue({default:f(()=>[M(o.$slots,"default")]),_:2},[i.value.label?{name:"label",fn:f(()=>[d("span",{innerHTML:i.value.label.template},null,8,Jf)]),key:"0"}:void 0,i.value.info?{name:"info",fn:f(()=>[d("span",{innerHTML:i.value.info.template},null,8,Yf)]),key:"1"}:void 0,i.value.required?{name:"required",fn:f(()=>[d("span",{innerHTML:i.value.required.template},null,8,Xf)]),key:"2"}:void 0,i.value.description?{name:"description",fn:f(()=>[d("span",{innerHTML:i.value.description.template},null,8,Zf)]),key:"3"}:void 0,i.value.before?{name:"before",fn:f(()=>[d("span",{innerHTML:i.value.before.template},null,8,ev)]),key:"4"}:void 0,i.value.between?{name:"between",fn:f(()=>[d("span",{innerHTML:i.value.between.template},null,8,tv)]),key:"5"}:void 0,i.value.after?{name:"after",fn:f(()=>[d("span",{innerHTML:i.value.after.template},null,8,nv)]),key:"6"}:void 0]),1040,["name","modelValue"])}}},iv=Object.freeze(Object.defineProperty({__proto__:null,default:rv},Symbol.toStringTag,{value:"Module"})),av=["innerHTML"],lv=["innerHTML"],ov=["innerHTML"],sv=["innerHTML"],uv=["innerHTML"],dv=["innerHTML"],cv=["innerHTML"],pv=["innerHTML"],fv=["innerHTML"],vv=["innerHTML"],hv=["innerHTML"],mv=["innerHTML"],gv=["innerHTML"],bv=["innerHTML"],wv=["innerHTML"],yv=["innerHTML"],kv=["innerHTML"],Cv=["innerHTML"],Ev={__name:"TagsElementInline",props:{data:{type:Object,required:!0}},setup(t){const{proxy:e}=He(),n=t,r=ce([]),i=j(()=>n.data??{}),l=j(()=>{const u={...i.value??{}},c=u.name||"tags";r.value=u.slots;const m={};return Object.entries(i.value).forEach(([g,b])=>{if(g.startsWith("@")){const L=g.slice(1);m[L]=x=>e.$handleEvent(b,x),delete u["@"+L]}}),delete u.name,delete u.slot,delete u.slots,{...{type:"tags",closeOnSelect:!1,search:!0,inputType:"search",limit:5,max:5,fieldName:c,valueProp:"value",labelProp:"label",trackBy:"label",floating:!1,columns:{container:12,label:12,wrapper:12},id:c,...e.$appendDefaults(c),...u},eventsOnly:m}}),a=(u="")=>String(u).replace(/[&<>"']/g,c=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"})[c]);function o(u={},c=""){if(c)return c.split(".").reduce((m,E)=>{if(m==null)return;const g=E.match(/^([^\[]+)\[(\d+)\]$/);if(g){const b=g[1],L=Number(g[2]),x=m[b];return Array.isArray(x)?x[L]:void 0}return m[E]},u)}function s(u={},c,m){const E=r?.value?.tag.template??null;if(!E)return a(u.label??u.value??"");const g=/\{\{\s*option(?:\.([a-zA-Z0-9_\.]+)|\[['"]([^'"]+)['"]\])\s*\}\}/g;let b=E.replace(g,(L,x,I)=>{const _=o(u,x??I);return _==null?"":a(String(_))});return b=b.replace(/\{\{\s*disabled\s*\}\}/g,a(String(m))),b=b.replace(/\{\{\s*handleTagRemove\(([^)]*)\)\s*\}\}/g,()=>{const L="removebtn"+Math.random().toString(36).slice(2,9);return queueMicrotask(()=>{const x=document.getElementById(L);x&&(x.setAttribute("id",L),x.addEventListener("click",I=>c(u,I)))}),L}),b=b.replace(/v-if="!\{\{\s*disabled\s*\}\}"/g,m?'style="display:none;"':""),b=b.replace(/onclick="\{\{\s*handleTagRemove\(.*?\)\s*\}\}"/g,L=>{const x=b.match(/removebtn[a-z0-9]+/);return x?`id="${x[0]}"`:L}),b}return(u,c)=>{const m=J("TagsElement");return p(),S(m,V({name:n.data.name,modelValue:n.data.name,"onUpdate:modelValue":c[0]||(c[0]=E=>n.data.name=E)},l.value,We(l.value.eventsOnly)),ue({_:2},[r.value?.tag?{name:"tag",fn:f(({option:E,handleTagRemove:g,disabled:b})=>[d("span",{innerHTML:s(E,g,b)},null,8,av)]),key:"0"}:void 0,r.value?.option?{name:"option",fn:f(()=>[d("span",{innerHTML:r.value.option.template},null,8,lv)]),key:"1"}:void 0,r.value?.placeholder?{name:"placeholder",fn:f(()=>[d("span",{innerHTML:r.value.placeholder.template},null,8,ov)]),key:"2"}:void 0,r.value?.["group-label"]?{name:"group-label",fn:f(()=>[d("span",{innerHTML:r.value["group-label"].template},null,8,sv)]),key:"3"}:void 0,r.value?.["before-list"]?{name:"before-list",fn:f(()=>[d("span",{innerHTML:r.value["before-list"].template},null,8,uv)]),key:"4"}:void 0,r.value?.["after-list"]?{name:"after-list",fn:f(()=>[d("span",{innerHTML:r.value["after-list"].template},null,8,dv)]),key:"5"}:void 0,r.value?.["no-results"]?{name:"no-results",fn:f(()=>[d("span",{innerHTML:r.value["no-results"].template},null,8,cv)]),key:"6"}:void 0,r.value?.["no-options"]?{name:"no-options",fn:f(()=>[d("span",{innerHTML:r.value["no-options"].template},null,8,pv)]),key:"7"}:void 0,r.value?.caret?{name:"caret",fn:f(()=>[d("span",{innerHTML:r.value.caret.template},null,8,fv)]),key:"8"}:void 0,r.value?.spinner?{name:"spinner",fn:f(()=>[d("span",{innerHTML:r.value.spinner.template},null,8,vv)]),key:"9"}:void 0,r.value?.clear?{name:"clear",fn:f(()=>[d("span",{innerHTML:r.value.clear.template},null,8,hv)]),key:"10"}:void 0,r.value?.label?{name:"label",fn:f(()=>[d("span",{innerHTML:r.value.label.template},null,8,mv)]),key:"11"}:void 0,r.value?.info?{name:"info",fn:f(()=>[d("span",{innerHTML:r.value.info.template},null,8,gv)]),key:"12"}:void 0,r.value?.required?{name:"required",fn:f(()=>[d("span",{innerHTML:r.value.required.template},null,8,bv)]),key:"13"}:void 0,r.value?.description?{name:"description",fn:f(()=>[d("span",{innerHTML:r.value.description.template},null,8,wv)]),key:"14"}:void 0,r.value?.before?{name:"before",fn:f(()=>[d("span",{innerHTML:r.value.before.template},null,8,yv)]),key:"15"}:void 0,r.value?.between?{name:"between",fn:f(()=>[d("span",{innerHTML:r.value.between.template},null,8,kv)]),key:"16"}:void 0,r.value?.after?{name:"after",fn:f(()=>[d("span",{innerHTML:r.value.after.template},null,8,Cv)]),key:"17"}:void 0]),1040,["name","modelValue"])}}},Av=Object.freeze(Object.defineProperty({__proto__:null,default:Ev},Symbol.toStringTag,{value:"Module"})),Lv=["innerHTML"],xv=["innerHTML"],Tv=["innerHTML"],Sv=["innerHTML"],_v=["innerHTML"],Mv=["innerHTML"],Iv=["innerHTML"],Bv=["innerHTML"],Dv=["innerHTML"],Rv={__name:"TextElementInline",props:{data:{type:Object,required:!0}},emits:["change"],setup(t,{emit:e}){const{proxy:n}=He(),r=t,i=ce([]),l=j(()=>r.data??{}),a=j(()=>{const o={...l.value??{}},s=o.name||"text";i.value=o.slots||[];const u={};return Object.entries(l.value).forEach(([m,E])=>{if(m.startsWith("@")){const g=m.slice(1);u[g]=b=>n.$handleEvent(E,b),delete o["@"+g]}}),delete o.slot,delete o.slots,{...{name:s,id:l.value.dataPath||s,...n.$appendDefaults(s),...o},eventsOnly:u}});return(o,s)=>{const u=J("TextElement");return p(),S(u,V({name:a.value.name,modelValue:a.value.name,"onUpdate:modelValue":s[0]||(s[0]=c=>a.value.name=c)},a.value,We(a.value.eventsOnly)),ue({default:f(()=>[M(o.$slots,"default")]),_:2},[i.value.label?{name:"label",fn:f(()=>[d("span",{innerHTML:i.value.label.template},null,8,Lv)]),key:"0"}:void 0,i.value.info?{name:"info",fn:f(()=>[d("span",{innerHTML:i.value.info.template},null,8,xv)]),key:"1"}:void 0,i.value.required?{name:"required",fn:f(()=>[d("span",{innerHTML:i.value.required.template},null,8,Tv)]),key:"2"}:void 0,i.value.description?{name:"description",fn:f(()=>[d("span",{innerHTML:i.value.description.template},null,8,Sv)]),key:"3"}:void 0,i.value.before?{name:"before",fn:f(()=>[d("span",{innerHTML:i.value.before.template},null,8,_v)]),key:"4"}:void 0,i.value.between?{name:"between",fn:f(()=>[d("span",{innerHTML:i.value.between.template},null,8,Mv)]),key:"5"}:void 0,i.value.after?{name:"after",fn:f(()=>[d("span",{innerHTML:i.value.after.template},null,8,Iv)]),key:"6"}:void 0,i.value["addon-before"]?{name:"addon-before",fn:f(()=>[d("span",{innerHTML:i.value["addon-before"].template},null,8,Bv)]),key:"7"}:void 0,i.value["addon-after"]?{name:"addon-after",fn:f(()=>[d("span",{innerHTML:i.value["addon-after"].template},null,8,Dv)]),key:"8"}:void 0]),1040,["name","modelValue"])}}},Fv=Object.freeze(Object.defineProperty({__proto__:null,default:Rv},Symbol.toStringTag,{value:"Module"})),Ov=["innerHTML"],$v=["innerHTML"],Hv=["innerHTML"],Pv=["innerHTML"],zv=["innerHTML"],Nv=["innerHTML"],Vv=["innerHTML"],jv=["innerHTML"],Uv=["innerHTML"],Wv={__name:"TextareaElementInline",props:{data:{type:Object,required:!0}},emits:["change"],setup(t,{emit:e}){const{proxy:n}=He(),r=t,i=ce([]),l=j(()=>r.data??{}),a=j(()=>{const o={...l.value??{}},s=o.name||"textarea";i.value=o.slots||[];const u={};return Object.entries(l.value).forEach(([m,E])=>{if(m.startsWith("@")){const g=m.slice(1);u[g]=b=>n.$handleEvent(E,b),delete o["@"+g]}}),delete o.slot,delete o.slots,{...{name:s,id:s,...n.$appendDefaults(s),...o},eventsOnly:u}});return(o,s)=>{const u=J("TextareaElement");return p(),S(u,V({name:a.value.name,modelValue:a.value.name,"onUpdate:modelValue":s[0]||(s[0]=c=>a.value.name=c)},a.value,We(a.value.eventsOnly),{dataPath:a.value.name}),ue({default:f(()=>[M(o.$slots,"default")]),_:2},[i.value.label?{name:"label",fn:f(()=>[d("span",{innerHTML:i.value.label.template},null,8,Ov)]),key:"0"}:void 0,i.value.info?{name:"info",fn:f(()=>[d("span",{innerHTML:i.value.info.template},null,8,$v)]),key:"1"}:void 0,i.value.required?{name:"required",fn:f(()=>[d("span",{innerHTML:i.value.required.template},null,8,Hv)]),key:"2"}:void 0,i.value.description?{name:"description",fn:f(()=>[d("span",{innerHTML:i.value.description.template},null,8,Pv)]),key:"3"}:void 0,i.value.before?{name:"before",fn:f(()=>[d("span",{innerHTML:i.value.before.template},null,8,zv)]),key:"4"}:void 0,i.value.between?{name:"between",fn:f(()=>[d("span",{innerHTML:i.value.between.template},null,8,Nv)]),key:"5"}:void 0,i.value.after?{name:"after",fn:f(()=>[d("span",{innerHTML:i.value.after.template},null,8,Vv)]),key:"6"}:void 0,i.value["addon-before"]?{name:"addon-before",fn:f(()=>[d("span",{innerHTML:i.value["addon-before"].template},null,8,jv)]),key:"7"}:void 0,i.value["addon-after"]?{name:"addon-after",fn:f(()=>[d("span",{innerHTML:i.value["addon-after"].template},null,8,Uv)]),key:"8"}:void 0]),1040,["name","modelValue","dataPath"])}}},qv=Object.freeze(Object.defineProperty({__proto__:null,default:Wv},Symbol.toStringTag,{value:"Module"})),Qv=["innerHTML"],Kv=["innerHTML"],Gv=["innerHTML"],Jv={__name:"ButtonElementInline",props:{data:{type:Object,required:!0}},setup(t){const{proxy:e}=He(),n=t,r=ce([]),i=j(()=>n.data??{}),l=j(()=>{const a={...i.value??{}},o=a.name||"button";r.value=a.slots||[];const s={};return Object.entries(i.value).forEach(([c,m])=>{if(c.startsWith("@")){const E=c.slice(1);s[E]=g=>e.$handleEvent(m,g),delete a["@"+E]}}),delete a.slot,delete a.slots,{...{buttonLabel:a.buttonLabel||"Submit",name:o,id:o,...a},eventsOnly:s}});return(a,o)=>{const s=J("ButtonElement");return p(),S(s,V({name:l.value.name,modelValue:l.value.name,"onUpdate:modelValue":o[0]||(o[0]=u=>l.value.name=u)},l.value,We(l.value.eventsOnly),{"add-class":{button:"rounded-md bg-white/10 px-3 py-2 text-sm font-semibold text-white inset-ring inset-ring-white/5"}}),ue({default:f(()=>[M(a.$slots,"default")]),_:2},[r.value.label?{name:"label",fn:f(()=>[d("span",{innerHTML:r.value.label.template},null,8,Qv)]),key:"0"}:void 0,r.value.info?{name:"info",fn:f(()=>[d("span",{innerHTML:r.value.info.template},null,8,Kv)]),key:"1"}:void 0,r.value.description?{name:"description",fn:f(()=>[d("span",{innerHTML:r.value.description.template},null,8,Gv)]),key:"2"}:void 0]),1040,["name","modelValue"])}}},Yv=Object.freeze(Object.defineProperty({__proto__:null,default:Jv},Symbol.toStringTag,{value:"Module"})),Xv=["innerHTML"],Zv=["innerHTML"],eh=["innerHTML"],th=["innerHTML"],nh=["innerHTML"],rh=["innerHTML"],ih=["innerHTML"],ah={__name:"StaticElementInline",props:{data:{type:Object,required:!0}},emits:["change"],setup(t,{emit:e}){const{proxy:n}=He(),r=t,i=ce([]),l=j(()=>r.data??{}),a=j(()=>{const o={...l.value??{}},s=o.name||"static";i.value=o.slots||[];const u={};return Object.entries(l.value).forEach(([m,E])=>{if(m.startsWith("@")){const g=m.slice(1);u[g]=b=>n.$handleEvent(E,b),delete o["@"+g]}}),delete o.slot,delete o.slots,{...{name:s,id:s,...o},eventsOnly:u}});return(o,s)=>{const u=J("StaticElement");return p(),S(u,V({name:a.value.name,modelValue:a.value.name,"onUpdate:modelValue":s[0]||(s[0]=c=>a.value.name=c)},a.value,We(a.value.eventsOnly)),ue({default:f(()=>[M(o.$slots,"default")]),_:2},[i.value.default?{name:"default",fn:f(()=>[d("span",{innerHTML:i.value.default.template},null,8,Xv)]),key:"0"}:void 0,i.value.label?{name:"label",fn:f(()=>[d("span",{innerHTML:i.value.label.template},null,8,Zv)]),key:"1"}:void 0,i.value.info?{name:"info",fn:f(()=>[d("span",{innerHTML:i.value.info.template},null,8,eh)]),key:"2"}:void 0,i.value.description?{name:"description",fn:f(()=>[d("span",{innerHTML:i.value.description.template},null,8,th)]),key:"3"}:void 0,i.value.before?{name:"before",fn:f(()=>[d("span",{innerHTML:i.value.before.template},null,8,nh)]),key:"4"}:void 0,i.value.between?{name:"between",fn:f(()=>[d("span",{innerHTML:i.value.between.template},null,8,rh)]),key:"5"}:void 0,i.value.after?{name:"after",fn:f(()=>[d("span",{innerHTML:i.value.after.template},null,8,ih)]),key:"6"}:void 0]),1040,["name","modelValue"])}}},lh=Object.freeze(Object.defineProperty({__proto__:null,default:ah},Symbol.toStringTag,{value:"Module"})),oh=["innerHTML"],sh=["innerHTML"],uh=["innerHTML"],dh=["innerHTML"],ch=["innerHTML"],ph=["innerHTML"],fh=["innerHTML"],vh={__name:"GridElementInline",props:{data:{type:Object,required:!0}},emits:["change"],setup(t,{emit:e}){const{proxy:n}=He(),r=t,i=ce([]),l=j(()=>r.data??{}),a=j(()=>{const o={...l.value??{}},s=o.name||"grid";i.value=o.slots||[];const u={};return Object.entries(l.value).forEach(([m,E])=>{if(m.startsWith("@")){const g=m.slice(1);u[g]=b=>n.$handleEvent(E,b),delete o["@"+g]}}),delete o.slot,delete o.slots,{...{name:s,id:s,...o},eventsOnly:u}});return(o,s)=>{const u=J("GridElement");return p(),S(u,V({name:a.value.name,modelValue:a.value.name,"onUpdate:modelValue":s[0]||(s[0]=c=>a.value.name=c)},a.value,We(a.value.eventsOnly)),ue({default:f(()=>[M(o.$slots,"default")]),_:2},[i.value.label?{name:"label",fn:f(()=>[d("span",{innerHTML:i.value.label.template},null,8,oh)]),key:"0"}:void 0,i.value.info?{name:"info",fn:f(()=>[d("span",{innerHTML:i.value.info.template},null,8,sh)]),key:"1"}:void 0,i.value.required?{name:"required",fn:f(()=>[d("span",{innerHTML:i.value.required.template},null,8,uh)]),key:"2"}:void 0,i.value.description?{name:"description",fn:f(()=>[d("span",{innerHTML:i.value.description.template},null,8,dh)]),key:"3"}:void 0,i.value.before?{name:"before",fn:f(()=>[d("span",{innerHTML:i.value.before.template},null,8,ch)]),key:"4"}:void 0,i.value.between?{name:"between",fn:f(()=>[d("span",{innerHTML:i.value.between.template},null,8,ph)]),key:"5"}:void 0,i.value.after?{name:"after",fn:f(()=>[d("span",{innerHTML:i.value.after.template},null,8,fh)]),key:"6"}:void 0]),1040,["name","modelValue"])}}},hh=Object.freeze(Object.defineProperty({__proto__:null,default:vh},Symbol.toStringTag,{value:"Module"})),mh=["innerHTML"],gh=["innerHTML"],bh=["innerHTML"],wh={__name:"GroupElementInline",props:{data:{type:Object,required:!0}},emits:["change"],setup(t,{emit:e}){const{proxy:n}=He(),r=t,i=ce([]),l=j(()=>r.data??{}),a=j(()=>{const o={...l.value??{}},s=o.name||"group";i.value=o.slots||[];const u={};return Object.entries(l.value).forEach(([m,E])=>{if(m.startsWith("@")){const g=m.slice(1);u[g]=b=>n.$handleEvent(E,b),delete o["@"+g]}}),delete o.slot,delete o.slots,{...{name:s,id:s,...o},eventsOnly:u}});return(o,s)=>{const u=J("GroupElement");return p(),S(u,V({name:a.value.name,modelValue:a.value.name,"onUpdate:modelValue":s[0]||(s[0]=c=>a.value.name=c)},a.value,We(a.value.eventsOnly),{schema:r.data.schema}),ue({default:f(()=>[M(o.$slots,"default")]),_:2},[i.value.label?{name:"label",fn:f(()=>[d("span",{innerHTML:i.value.label.template},null,8,mh)]),key:"0"}:void 0,i.value.info?{name:"info",fn:f(()=>[d("span",{innerHTML:i.value.info.template},null,8,gh)]),key:"1"}:void 0,i.value.description?{name:"description",fn:f(()=>[d("span",{innerHTML:i.value.description.template},null,8,bh)]),key:"2"}:void 0]),1040,["name","modelValue","schema"])}}},yh=Object.freeze(Object.defineProperty({__proto__:null,default:wh},Symbol.toStringTag,{value:"Module"})),kh=["innerHTML"],Ch=["innerHTML"],Eh=["innerHTML"],Ah=["innerHTML"],Lh=["innerHTML"],xh=["innerHTML"],Th=["innerHTML"],Sh={__name:"ListElementInline",props:{data:{type:Object,required:!0}},emits:["change"],setup(t,{emit:e}){const{proxy:n}=He(),r=t,i=ce([]),l=j(()=>r.data??{}),a=j(()=>{const o={...l.value??{}},s=o.name||"list";i.value=o.slots||[];const u=o.schema||[],c={};return Object.entries(l.value).forEach(([E,g])=>{if(E.startsWith("@")){const b=E.slice(1);c[b]=L=>n.$handleEvent(g,L),delete o["@"+b]}}),delete o.slot,delete o.slots,delete o.schema,delete o.element,{...{name:s,element:u,...o},eventsOnly:c}});return(o,s)=>{const u=J("ObjectElement"),c=J("ListElement");return p(),S(c,V({name:a.value.name,modelValue:a.value.name,"onUpdate:modelValue":s[0]||(s[0]=m=>a.value.name=m)},a.value,We(a.value.eventsOnly)),{default:f(({index:m})=>[De(u,{name:m},ue({default:f(()=>[M(o.$slots,"default")]),_:2},[i.value.label?{name:"label",fn:f(()=>[d("span",{innerHTML:i.value.label.template},null,8,kh)]),key:"0"}:void 0,i.value.info?{name:"info",fn:f(()=>[d("span",{innerHTML:i.value.info.template},null,8,Ch)]),key:"1"}:void 0,i.value.required?{name:"required",fn:f(()=>[d("span",{innerHTML:i.value.required.template},null,8,Eh)]),key:"2"}:void 0,i.value.description?{name:"description",fn:f(()=>[d("span",{innerHTML:i.value.description.template},null,8,Ah)]),key:"3"}:void 0,i.value.before?{name:"before",fn:f(()=>[d("span",{innerHTML:i.value.before.template},null,8,Lh)]),key:"4"}:void 0,i.value.between?{name:"between",fn:f(()=>[d("span",{innerHTML:i.value.between.template},null,8,xh)]),key:"5"}:void 0,i.value.after?{name:"after",fn:f(()=>[d("span",{innerHTML:i.value.after.template},null,8,Th)]),key:"6"}:void 0]),1032,["name"])]),_:3},16,["name","modelValue"])}}},_h=Object.freeze(Object.defineProperty({__proto__:null,default:Sh},Symbol.toStringTag,{value:"Module"})),Mh=["innerHTML"],Ih=["innerHTML"],Bh=["innerHTML"],Dh=["innerHTML"],Rh=["innerHTML"],Fh=["innerHTML"],Oh=["innerHTML"],$h={__name:"ObjectElementInline",props:{data:{type:Object,required:!0}},emits:["change"],setup(t,{emit:e}){const{proxy:n}=He(),r=t,i=ce([]),l=j(()=>r.data??{}),a=j(()=>{const o={...l.value??{}},s=o.name||"object";i.value=o.slots||[];const u={};return Object.entries(l.value).forEach(([m,E])=>{if(m.startsWith("@")){const g=m.slice(1);u[g]=b=>n.$handleEvent(E,b),delete o["@"+g]}}),delete o.slot,delete o.slots,{...{name:s,id:s,...o},eventsOnly:u}});return(o,s)=>{const u=J("ObjectElement");return p(),S(u,V({name:a.value.name,modelValue:a.value.name,"onUpdate:modelValue":s[0]||(s[0]=c=>a.value.name=c)},a.value,We(a.value.eventsOnly)),ue({default:f(()=>[M(o.$slots,"default")]),_:2},[i.value.label?{name:"label",fn:f(()=>[d("span",{innerHTML:i.value.label.template},null,8,Mh)]),key:"0"}:void 0,i.value.info?{name:"info",fn:f(()=>[d("span",{innerHTML:i.value.info.template},null,8,Ih)]),key:"1"}:void 0,i.value.required?{name:"required",fn:f(()=>[d("span",{innerHTML:i.value.required.template},null,8,Bh)]),key:"2"}:void 0,i.value.description?{name:"description",fn:f(()=>[d("span",{innerHTML:i.value.description.template},null,8,Dh)]),key:"3"}:void 0,i.value.before?{name:"before",fn:f(()=>[d("span",{innerHTML:i.value.before.template},null,8,Rh),s[1]||(s[1]=ya("∏ ",-1))]),key:"4"}:void 0,i.value.between?{name:"between",fn:f(()=>[d("span",{innerHTML:i.value.between.template},null,8,Fh)]),key:"5"}:void 0,i.value.after?{name:"after",fn:f(()=>[d("span",{innerHTML:i.value.after.template},null,8,Oh)]),key:"6"}:void 0]),1040,["name","modelValue"])}}},Hh=Object.freeze(Object.defineProperty({__proto__:null,default:$h},Symbol.toStringTag,{value:"Module"})),Ph=["innerHTML"],zh=["innerHTML"],Nh={__name:"VueFormInline",props:{data:{type:Object,required:!0}},emits:["change"],setup(t,{emit:e}){const{proxy:n}=He(),r=t,i=ce([]),l=j(()=>r.data??{}),a=j(()=>{const b={...l.value??{}},L=b.name||"form-element",x=b.action||window.location.href;i.value=b.slots||[];const I={};return Object.entries(l.value).forEach(([_,O])=>{if(_.startsWith("@")){const H=_.slice(1);I[H]=R=>n.$handleEvent(O,R),delete b["@"+H]}}),delete b.slot,delete b.slots,delete b.action,{...{name:L,id:L,endpoint:x,formKey:L,validateOn:"change|step",displayMessages:!1,...b},eventsOnly:I}}),o=ce([]),s=(b,L,x)=>{x.clearMessages(),o.value=[],Object.entries(x.elements$).forEach(([I,B])=>{B.el$.dataPath?b.response.data?.errors[I]!=null&&(o.value.push(B.el$.dataPath+"."+I),x.el$(B.el$.dataPath+"."+I).messageBag.append(b.response.data?.errors[I])):B?.children$?u(B?.children$,x,b.response.data.errors,I):u(B,x,b.response.data.errors,I)}),b.response.data?.message&&x.messageBag.append(b.response.data?.message)},u=function(b,L,x,I=""){Object.entries(b).forEach(([B,_])=>{if(_?.dataPath){if(I!="")var O=I+"."+B;else var O=_?.dataPath+"."+B;x[B]&&o.value.push(O),L.el$(O).messageBag.append(x[B])}else _?.children$&&u(_?.children$,L,x,I+"."+B)})};function c(b,L){if(!L||!b)return null;if(typeof b!="object")return b!==L?"":null;for(const x in b)if(JSON.stringify(b[x])!==JSON.stringify(L[x]))return x;return null}const m=function(b,L,x){const I=c(b,L);if(!I)return;let B=o.value;Array.isArray(B)||(B=[]);const _=B.some(H=>H.endsWith("."+I)||H===I),O=B.find(H=>H.endsWith("."+I)||H===I);_&&(o.value=o.value.filter(H=>H!==O),x.el$(O).clearMessages()),o.value.length===0&&x.clearMessages()},E=function(b,L){if(a.value.ajax===!1){const x=document.createElement("form");if(x.method="POST",x.action=a.value.endpoint||window.location.href,a.value.method&&a.value.method!=="POST"){const _=document.createElement("input");_.type="hidden",_.name="_method",_.value=a.value.method,x.appendChild(_)}const I=document.querySelector('meta[name="csrf-token"]');if(I){const _=document.createElement("input");_.type="hidden",_.name="_token",_.value=I.getAttribute("content"),x.appendChild(_)}const B=(_,O="")=>{Object.entries(_).forEach(([H,R])=>{const Z=O?`${O}[${H}]`:H;if(Array.isArray(R))R.forEach((U,P)=>B({[P]:U},Z));else if(R!==null&&typeof R=="object")B(R,Z);else{const U=document.createElement("input");U.type="hidden",U.name=Z,U.value=R??"",x.appendChild(U)}})};B(b.data),document.body.appendChild(x),x.submit();return}},g=(b,L)=>{L.clearMessages(),L.reset(),o.value=[]};return(b,L)=>{const x=J("Vueform");return p(),S(x,V({name:a.value.name},a.value,We(a.value.eventsOnly),{"add-class":"vueform-laravel",onError:s,onChange:m,onSubmit:E,onSuccess:g}),ue({default:f(()=>[M(b.$slots,"default")]),_:2},[i.value.default?{name:"default",fn:f(()=>[d("span",{innerHTML:i.value.default.template},null,8,Ph)]),key:"0"}:void 0,i.value.empty?{name:"empty",fn:f(()=>[d("span",{innerHTML:i.value.empty.template},null,8,zh)]),key:"1"}:void 0]),1040,["name"])}}},Vh=Object.freeze(Object.defineProperty({__proto__:null,default:Nh},Symbol.toStringTag,{value:"Module"})),jh={vueform:{elements:{list:{add:"+ Add",remove:"&times;"},file:{defaultName:"File",dndTitle:"Upload file",dndDescription:"Drop file or click here to upload",removeConfirm:"By removing the file it will be permanently deleted. Are you sure to continue?",select:"Select file",upload:"Upload"},multifile:{uploadButton:"Upload files",dndTitle:"Upload files",dndDescription:"Drop files or click here to upload"},gallery:{uploadButton:"Upload images",dndTitle:"Upload images",dndDescription:"Drop images or click here to upload"},phone:{ariaLabel:"Select a country"},signature:{type:"Type",draw:"Draw",upload:"Upload",font:"Select typeface",fontPlaceholder:"Your Name",placeholder:"Sign here",unsupportedFormat:"Unsupported file format. Accepted extenions are: :extensions",maxSizeError:"Max file size is :max KBs",imgAlt:"Signature",imgTitle:"Signature",undo:"Undo",redo:"Redo",dnd:"Drop an image here or",uploadButton:"Select image",modeSelectorAriaLabel:"Select signature mode",fontSelectorAriaLabel:"Select typeface",wrapperAriaLabel:"Signature input",inputAriaLabel:"Type your signature here",padAriaLabel:"Draw your signature in the box. Seek assistance if you need to.",clearAriaLabel:"Clear signature",colorAriaLabel:"Select color: "}},steps:{finish:"Finish",next:"Next",previous:"Previous"},editor:{acceptedMimesError:"Accepted mimes are: :mimes",acceptedExtensionsError:"Accepted extenions are: :extensions"},datepicker:{weekdays:{shorthand:["Sun","Mon","Tue","Wed","Thu","Fri","Sat"],longhand:["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"]},months:{shorthand:["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],longhand:["January","February","March","April","May","June","July","August","September","October","November","December"]},daysInMonth:[31,28,31,30,31,30,31,31,30,31,30,31],firstDayOfWeek:0,ordinal:function(t){var e=t%100;if(e>3&&e<21)return"th";switch(e%10){case 1:return"st";case 2:return"nd";case 3:return"rd";default:return"th"}},rangeSeparator:" to ",weekAbbreviation:"Wk",scrollTitle:"Scroll to increment",toggleTitle:"Click to toggle",amPM:["AM","PM"],yearAriaLabel:"Year",monthAriaLabel:"Month",hourAriaLabel:"Hour",minuteAriaLabel:"Minute"},dateFormats:{datetimeSeconds24:"YYYY-MM-DD HH:mm:ss",datetimeSeconds12:"YYYY-MM-DD hh:mm:ss a",datetime24:"YYYY-MM-DD HH:mm",datetime12:"YYYY-MM-DD hh:mm a",timeSeconds24:"HH:mm:ss",timeSeconds12:"hh:mm:ss a",time24:"HH:mm",time12:"hh:mm a",date:"YYYY-MM-DD"},multiselect:{multipleLabelOne:"1 option selected",multipleLabelMore:":options options selected",noResults:"No options found",noOptions:"The list is empty"},defaultMessage:"Invalid field",a11y:{file:{description:"Press Backspace to remove"},list:{remove:"Remove item button"}},countries:{AF:"Afghanistan",AL:"Albania",DZ:"Algeria",AS:"American Samoa",AD:"Andorra",AO:"Angola",AI:"Anguilla",AG:"Antigua & Barbuda",AR:"Argentina",AM:"Armenia",AW:"Aruba",AC:"Ascension Island",AU:"Australia",AT:"Austria",AZ:"Azerbaijan",BS:"Bahamas",BH:"Bahrain",BD:"Bangladesh",BB:"Barbados",BY:"Belarus",BE:"Belgium",BZ:"Belize",BJ:"Benin",BM:"Bermuda",BT:"Bhutan",BO:"Bolivia",BA:"Bosnia & Herzegovina",BW:"Botswana",BR:"Brazil",IO:"British Indian Ocean Territory",VG:"British Virgin Islands",BN:"Brunei",BG:"Bulgaria",BF:"Burkina Faso",BI:"Burundi",KH:"Cambodia",CM:"Cameroon",CA:"Canada",CV:"Cape Verde",BQ:"Caribbean Netherlands",KY:"Cayman Islands",CF:"Central African Republic",TD:"Chad",CL:"Chile",CN:"China",CO:"Colombia",KM:"Comoros",CG:"Congo - Brazzaville",CD:"Congo - Kinshasa",CK:"Cook Islands",CR:"Costa Rica",CI:"Côte d’Ivoire",HR:"Croatia",CU:"Cuba",CW:"Curaçao",CY:"Cyprus",CZ:"Czechia",DK:"Denmark",DJ:"Djibouti",DM:"Dominica",DO:"Dominican Republic",EC:"Ecuador",EG:"Egypt",SV:"El Salvador",GQ:"Equatorial Guinea",ER:"Eritrea",EE:"Estonia",SZ:"Eswatini",ET:"Ethiopia",FK:"Falkland Islands (Islas Malvinas)",FO:"Faroe Islands",FJ:"Fiji",FI:"Finland",FR:"France",GF:"French Guiana",PF:"French Polynesia",GA:"Gabon",GM:"Gambia",GE:"Georgia",DE:"Germany",GH:"Ghana",GI:"Gibraltar",GR:"Greece",GL:"Greenland",GD:"Grenada",GP:"Guadeloupe",GU:"Guam",GT:"Guatemala",GN:"Guinea",GW:"Guinea-Bissau",GY:"Guyana",HT:"Haiti",HN:"Honduras",HK:"Hong Kong",HU:"Hungary",IS:"Iceland",IN:"India",ID:"Indonesia",IR:"Iran",IQ:"Iraq",IE:"Ireland",IL:"Israel",IT:"Italy",JM:"Jamaica",JP:"Japan",JO:"Jordan",KZ:"Kazakhstan",KE:"Kenya",KI:"Kiribati",XK:"Kosovo",KW:"Kuwait",KG:"Kyrgyzstan",LA:"Laos",LV:"Latvia",LB:"Lebanon",LS:"Lesotho",LR:"Liberia",LY:"Libya",LI:"Liechtenstein",LT:"Lithuania",LU:"Luxembourg",MO:"Macao",MG:"Madagascar",MW:"Malawi",MY:"Malaysia",MV:"Maldives",ML:"Mali",MT:"Malta",MH:"Marshall Islands",MQ:"Martinique",MR:"Mauritania",MU:"Mauritius",MX:"Mexico",FM:"Micronesia",MD:"Moldova",MC:"Monaco",MN:"Mongolia",ME:"Montenegro",MS:"Montserrat",MA:"Morocco",MZ:"Mozambique",MM:"Myanmar (Burma)",NA:"Namibia",NR:"Nauru",NP:"Nepal",NL:"Netherlands",NC:"New Caledonia",NZ:"New Zealand",NI:"Nicaragua",NE:"Niger",NG:"Nigeria",NU:"Niue",NF:"Norfolk Island",KP:"North Korea",MK:"North Macedonia",MP:"Northern Mariana Islands",NO:"Norway",OM:"Oman",PK:"Pakistan",PW:"Palau",PS:"Palestine",PA:"Panama",PG:"Papua New Guinea",PY:"Paraguay",PE:"Peru",PH:"Philippines",PL:"Poland",PT:"Portugal",PR:"Puerto Rico",QA:"Qatar",RE:"Réunion",RO:"Romania",RU:"Russia",RW:"Rwanda",WS:"Samoa",SM:"San Marino",ST:"São Tomé & Príncipe",SA:"Saudi Arabia",SN:"Senegal",RS:"Serbia",SC:"Seychelles",SL:"Sierra Leone",SG:"Singapore",SX:"Sint Maarten",SK:"Slovakia",SI:"Slovenia",SB:"Solomon Islands",SO:"Somalia",ZA:"South Africa",KR:"South Korea",SS:"South Sudan",ES:"Spain",LK:"Sri Lanka",BL:"St. Barthélemy",SH:"St. Helena",KN:"St. Kitts & Nevis",LC:"St. Lucia",MF:"St. Martin",PM:"St. Pierre & Miquelon",VC:"St. Vincent & Grenadines",SD:"Sudan",SR:"Suriname",SE:"Sweden",CH:"Switzerland",SY:"Syria",TW:"Taiwan",TJ:"Tajikistan",TZ:"Tanzania",TH:"Thailand",TL:"Timor-Leste",TG:"Togo",TK:"Tokelau",TO:"Tonga",TT:"Trinidad & Tobago",TN:"Tunisia",TR:"Türkiye",TM:"Turkmenistan",TC:"Turks & Caicos Islands",TV:"Tuvalu",VI:"U.S. Virgin Islands",UG:"Uganda",UA:"Ukraine",AE:"United Arab Emirates",GB:"United Kingdom",US:"United States",UY:"Uruguay",UZ:"Uzbekistan",VU:"Vanuatu",VA:"Vatican City",VE:"Venezuela",VN:"Vietnam",WF:"Wallis & Futuna",YE:"Yemen",ZM:"Zambia",ZW:"Zimbabwe"}},validation:{accepted:"The :attribute must be accepted.",active_url:"The :attribute is not a valid URL.",after:"The :attribute must be a date after :date.",after_or_equal:"The :attribute must be a date after or equal to :date.",alpha:"The :attribute may only contain letters.",alpha_dash:"The :attribute may only contain letters, numbers, dashes and underscores.",alpha_num:"The :attribute may only contain letters and numbers.",array:"The :attribute must be an array.",before:"The :attribute must be a date before :date.",before_or_equal:"The :attribute must be a date before or equal to :date.",between:{numeric:"The :attribute must be between :min and :max.",file:"The :attribute must be between :min and :max kilobytes.",string:"The :attribute must be between :min and :max characters.",array:"The :attribute must have between :min and :max items."},boolean:"The :attribute field must be true or false.",captcha:"Please verify that you are not a robot.",completed:"Please fill in a valid phone number.",confirmed:"The :attribute confirmation does not match.",date:"The :attribute is not a valid date.",date_format:"The :attribute does not match the format :format.",date_equals:"The :attribute must be equal to :date.",different:"The :attribute and :other must be different.",digits:"The :attribute must be :digits digits.",digits_between:"The :attribute must be between :min and :max digits.",dimensions:"The :attribute has invalid image dimensions.",distinct:"The :attribute field has a duplicate value.",email:"The :attribute must be a valid email address.",exists:"The selected :attribute is invalid.",file:"The :attribute must be a file.",filled:"The :attribute field must have a value.",gt:{numeric:"The :attribute must be greater than :value.",file:"The :attribute must be greater than :value kilobytes.",string:"The :attribute must be greater than :value characters.",array:"The :attribute must have more than :value items."},gte:{numeric:"The :attribute must be greater than or equal :value.",file:"The :attribute must be greater than or equal :value kilobytes.",string:"The :attribute must be greater than or equal :value characters.",array:"The :attribute must have :value items or more."},image:"The :attribute must be an image.",in:"The selected :attribute is invalid.",in_array:"The :attribute field does not exist in :other.",integer:"The :attribute must be an integer.",ip:"The :attribute must be a valid IP address.",ipv4:"The :attribute must be a valid IPv4 address.",ipv6:"The :attribute must be a valid IPv6 address.",json:"The :attribute must be a valid JSON string.",lt:{numeric:"The :attribute must be less than :value.",file:"The :attribute must be less than :value kilobytes.",string:"The :attribute must be less than :value characters.",array:"The :attribute must have less than :value items."},lte:{numeric:"The :attribute must be less than or equal :value.",file:"The :attribute must be less than or equal :value kilobytes.",string:"The :attribute must be less than or equal :value characters.",array:"The :attribute must not have more than :value items."},max:{numeric:"The :attribute may not be greater than :max.",file:"The :attribute may not be greater than :max kilobytes.",string:"The :attribute may not be greater than :max characters.",array:"The :attribute may not have more than :max items."},mimes:"The :attribute must be a file of type: :values.",mimetypes:"The :attribute must be a file of type: :values.",min:{numeric:"The :attribute must be at least :min.",file:"The :attribute must be at least :min kilobytes.",string:"The :attribute must be at least :min characters.",array:"The :attribute must have at least :min items."},not_in:"The selected :attribute is invalid.",not_regex:"The :attribute format is invalid.",numeric:"The :attribute must be a number.",present:"The :attribute field must be present.",regex:"The :attribute format is invalid.",required:"The :attribute field is required.",required_if:"The :attribute field is required when :other is :value.",required_unless:"The :attribute field is required unless :other is in :values.",required_with:"The :attribute field is required when :values is present.",required_with_all:"The :attribute field is required when :values are present.",required_without:"The :attribute field is required when :values is not present.",required_without_all:"The :attribute field is required when none of :values are present.",same:"The :attribute and :other must match.",size:{numeric:"The :attribute must be :size.",file:"The :attribute must be :size kilobytes.",string:"The :attribute must be :size characters.",array:"The :attribute must contain :size items."},string:"The :attribute must be a string.",timezone:"The :attribute must be a valid zone.",unique:"The :attribute has already been taken.",uploaded:"The :attribute failed to upload.",url:"The :attribute format is invalid.",uuid:"The :attribute must be a valid UUID.",remote:"The :attribute field is invalid."}};function An(t){return typeof t=="string"||t instanceof String}function Jl(t){var e;return typeof t=="object"&&t!=null&&(t==null||(e=t.constructor)==null?void 0:e.name)==="Object"}function Jo(t,e){return Array.isArray(e)?Jo(t,(n,r)=>e.includes(r)):Object.entries(t).reduce((n,r)=>{let[i,l]=r;return e(l,i)&&(n[i]=l),n},{})}const oe={NONE:"NONE",LEFT:"LEFT",FORCE_LEFT:"FORCE_LEFT",RIGHT:"RIGHT",FORCE_RIGHT:"FORCE_RIGHT"};function Uh(t){switch(t){case oe.LEFT:return oe.FORCE_LEFT;case oe.RIGHT:return oe.FORCE_RIGHT;default:return t}}function Ti(t){return t.replace(/([.*+?^=!:${}()|[\]/\\])/g,"\\$1")}function Jr(t,e){if(e===t)return!0;const n=Array.isArray(e),r=Array.isArray(t);let i;if(n&&r){if(e.length!=t.length)return!1;for(i=0;i<e.length;i++)if(!Jr(e[i],t[i]))return!1;return!0}if(n!=r)return!1;if(e&&t&&typeof e=="object"&&typeof t=="object"){const l=e instanceof Date,a=t instanceof Date;if(l&&a)return e.getTime()==t.getTime();if(l!=a)return!1;const o=e instanceof RegExp,s=t instanceof RegExp;if(o&&s)return e.toString()==t.toString();if(o!=s)return!1;const u=Object.keys(e);for(i=0;i<u.length;i++)if(!Object.prototype.hasOwnProperty.call(t,u[i]))return!1;for(i=0;i<u.length;i++)if(!Jr(t[u[i]],e[u[i]]))return!1;return!0}else if(e&&t&&typeof e=="function"&&typeof t=="function")return e.toString()===t.toString();return!1}class Wh{constructor(e){for(Object.assign(this,e);this.value.slice(0,this.startChangePos)!==this.oldValue.slice(0,this.startChangePos);)--this.oldSelection.start;if(this.insertedCount)for(;this.value.slice(this.cursorPos)!==this.oldValue.slice(this.oldSelection.end);)this.value.length-this.cursorPos<this.oldValue.length-this.oldSelection.end?++this.oldSelection.end:++this.cursorPos}get startChangePos(){return Math.min(this.cursorPos,this.oldSelection.start)}get insertedCount(){return this.cursorPos-this.startChangePos}get inserted(){return this.value.substr(this.startChangePos,this.insertedCount)}get removedCount(){return Math.max(this.oldSelection.end-this.startChangePos||this.oldValue.length-this.value.length,0)}get removed(){return this.oldValue.substr(this.startChangePos,this.removedCount)}get head(){return this.value.substring(0,this.startChangePos)}get tail(){return this.value.substring(this.startChangePos+this.insertedCount)}get removeDirection(){return!this.removedCount||this.insertedCount?oe.NONE:(this.oldSelection.end===this.cursorPos||this.oldSelection.start===this.cursorPos)&&this.oldSelection.end===this.oldSelection.start?oe.RIGHT:oe.LEFT}}function Ce(t,e){return new Ce.InputMask(t,e)}function Yo(t){if(t==null)throw new Error("mask property should be defined");return t instanceof RegExp?Ce.MaskedRegExp:An(t)?Ce.MaskedPattern:t===Date?Ce.MaskedDate:t===Number?Ce.MaskedNumber:Array.isArray(t)||t===Array?Ce.MaskedDynamic:Ce.Masked&&t.prototype instanceof Ce.Masked?t:Ce.Masked&&t instanceof Ce.Masked?t.constructor:t instanceof Function?Ce.MaskedFunction:(console.warn("Mask not found for mask",t),Ce.Masked)}function Lr(t){if(!t)throw new Error("Options in not defined");if(Ce.Masked){if(t.prototype instanceof Ce.Masked)return{mask:t};const{mask:e=void 0,...n}=t instanceof Ce.Masked?{mask:t}:Jl(t)&&t.mask instanceof Ce.Masked?t:{};if(e){const r=e.mask;return{...Jo(e,(i,l)=>!l.startsWith("_")),mask:e.constructor,_mask:r,...n}}}return Jl(t)?{...t}:{mask:t}}function hn(t){if(Ce.Masked&&t instanceof Ce.Masked)return t;const e=Lr(t),n=Yo(e.mask);if(!n)throw new Error("Masked class is not found for provided mask "+e.mask+", appropriate module needs to be imported manually before creating mask.");return e.mask===n&&delete e.mask,e._mask&&(e.mask=e._mask,delete e._mask),new n(e)}Ce.createMask=hn;class ka{get selectionStart(){let e;try{e=this._unsafeSelectionStart}catch{}return e??this.value.length}get selectionEnd(){let e;try{e=this._unsafeSelectionEnd}catch{}return e??this.value.length}select(e,n){if(!(e==null||n==null||e===this.selectionStart&&n===this.selectionEnd))try{this._unsafeSelect(e,n)}catch{}}get isActive(){return!1}}Ce.MaskElement=ka;const Yl=90,qh=89;class ui extends ka{constructor(e){super(),this.input=e,this._onKeydown=this._onKeydown.bind(this),this._onInput=this._onInput.bind(this),this._onBeforeinput=this._onBeforeinput.bind(this),this._onCompositionEnd=this._onCompositionEnd.bind(this)}get rootElement(){var e,n,r;return(e=(n=(r=this.input).getRootNode)==null?void 0:n.call(r))!=null?e:document}get isActive(){return this.input===this.rootElement.activeElement}bindEvents(e){this.input.addEventListener("keydown",this._onKeydown),this.input.addEventListener("input",this._onInput),this.input.addEventListener("beforeinput",this._onBeforeinput),this.input.addEventListener("compositionend",this._onCompositionEnd),this.input.addEventListener("drop",e.drop),this.input.addEventListener("click",e.click),this.input.addEventListener("focus",e.focus),this.input.addEventListener("blur",e.commit),this._handlers=e}_onKeydown(e){if(this._handlers.redo&&(e.keyCode===Yl&&e.shiftKey&&(e.metaKey||e.ctrlKey)||e.keyCode===qh&&e.ctrlKey))return e.preventDefault(),this._handlers.redo(e);if(this._handlers.undo&&e.keyCode===Yl&&(e.metaKey||e.ctrlKey))return e.preventDefault(),this._handlers.undo(e);e.isComposing||this._handlers.selectionChange(e)}_onBeforeinput(e){if(e.inputType==="historyUndo"&&this._handlers.undo)return e.preventDefault(),this._handlers.undo(e);if(e.inputType==="historyRedo"&&this._handlers.redo)return e.preventDefault(),this._handlers.redo(e)}_onCompositionEnd(e){this._handlers.input(e)}_onInput(e){e.isComposing||this._handlers.input(e)}unbindEvents(){this.input.removeEventListener("keydown",this._onKeydown),this.input.removeEventListener("input",this._onInput),this.input.removeEventListener("beforeinput",this._onBeforeinput),this.input.removeEventListener("compositionend",this._onCompositionEnd),this.input.removeEventListener("drop",this._handlers.drop),this.input.removeEventListener("click",this._handlers.click),this.input.removeEventListener("focus",this._handlers.focus),this.input.removeEventListener("blur",this._handlers.commit),this._handlers={}}}Ce.HTMLMaskElement=ui;class Qh extends ui{constructor(e){super(e),this.input=e}get _unsafeSelectionStart(){return this.input.selectionStart!=null?this.input.selectionStart:this.value.length}get _unsafeSelectionEnd(){return this.input.selectionEnd}_unsafeSelect(e,n){this.input.setSelectionRange(e,n)}get value(){return this.input.value}set value(e){this.input.value=e}}Ce.HTMLMaskElement=ui;class Xo extends ui{get _unsafeSelectionStart(){const e=this.rootElement,n=e.getSelection&&e.getSelection(),r=n&&n.anchorOffset,i=n&&n.focusOffset;return i==null||r==null||r<i?r:i}get _unsafeSelectionEnd(){const e=this.rootElement,n=e.getSelection&&e.getSelection(),r=n&&n.anchorOffset,i=n&&n.focusOffset;return i==null||r==null||r>i?r:i}_unsafeSelect(e,n){if(!this.rootElement.createRange)return;const r=this.rootElement.createRange();r.setStart(this.input.firstChild||this.input,e),r.setEnd(this.input.lastChild||this.input,n);const i=this.rootElement,l=i.getSelection&&i.getSelection();l&&(l.removeAllRanges(),l.addRange(r))}get value(){return this.input.textContent||""}set value(e){this.input.textContent=e}}Ce.HTMLContenteditableMaskElement=Xo;class di{constructor(){this.states=[],this.currentIndex=0}get currentState(){return this.states[this.currentIndex]}get isEmpty(){return this.states.length===0}push(e){this.currentIndex<this.states.length-1&&(this.states.length=this.currentIndex+1),this.states.push(e),this.states.length>di.MAX_LENGTH&&this.states.shift(),this.currentIndex=this.states.length-1}go(e){return this.currentIndex=Math.min(Math.max(this.currentIndex+e,0),this.states.length-1),this.currentState}undo(){return this.go(-1)}redo(){return this.go(1)}clear(){this.states.length=0,this.currentIndex=0}}di.MAX_LENGTH=100;class Kh{constructor(e,n){this.el=e instanceof ka?e:e.isContentEditable&&e.tagName!=="INPUT"&&e.tagName!=="TEXTAREA"?new Xo(e):new Qh(e),this.masked=hn(n),this._listeners={},this._value="",this._unmaskedValue="",this._rawInputValue="",this.history=new di,this._saveSelection=this._saveSelection.bind(this),this._onInput=this._onInput.bind(this),this._onChange=this._onChange.bind(this),this._onDrop=this._onDrop.bind(this),this._onFocus=this._onFocus.bind(this),this._onClick=this._onClick.bind(this),this._onUndo=this._onUndo.bind(this),this._onRedo=this._onRedo.bind(this),this.alignCursor=this.alignCursor.bind(this),this.alignCursorFriendly=this.alignCursorFriendly.bind(this),this._bindEvents(),this.updateValue(),this._onChange()}maskEquals(e){var n;return e==null||((n=this.masked)==null?void 0:n.maskEquals(e))}get mask(){return this.masked.mask}set mask(e){if(this.maskEquals(e))return;if(!(e instanceof Ce.Masked)&&this.masked.constructor===Yo(e)){this.masked.updateOptions({mask:e});return}const n=e instanceof Ce.Masked?e:hn({mask:e});n.unmaskedValue=this.masked.unmaskedValue,this.masked=n}get value(){return this._value}set value(e){this.value!==e&&(this.masked.value=e,this.updateControl("auto"))}get unmaskedValue(){return this._unmaskedValue}set unmaskedValue(e){this.unmaskedValue!==e&&(this.masked.unmaskedValue=e,this.updateControl("auto"))}get rawInputValue(){return this._rawInputValue}set rawInputValue(e){this.rawInputValue!==e&&(this.masked.rawInputValue=e,this.updateControl(),this.alignCursor())}get typedValue(){return this.masked.typedValue}set typedValue(e){this.masked.typedValueEquals(e)||(this.masked.typedValue=e,this.updateControl("auto"))}get displayValue(){return this.masked.displayValue}_bindEvents(){this.el.bindEvents({selectionChange:this._saveSelection,input:this._onInput,drop:this._onDrop,click:this._onClick,focus:this._onFocus,commit:this._onChange,undo:this._onUndo,redo:this._onRedo})}_unbindEvents(){this.el&&this.el.unbindEvents()}_fireEvent(e,n){const r=this._listeners[e];r&&r.forEach(i=>i(n))}get selectionStart(){return this._cursorChanging?this._changingCursorPos:this.el.selectionStart}get cursorPos(){return this._cursorChanging?this._changingCursorPos:this.el.selectionEnd}set cursorPos(e){!this.el||!this.el.isActive||(this.el.select(e,e),this._saveSelection())}_saveSelection(){this.displayValue!==this.el.value&&console.warn("Element value was changed outside of mask. Syncronize mask using `mask.updateValue()` to work properly."),this._selection={start:this.selectionStart,end:this.cursorPos}}updateValue(){this.masked.value=this.el.value,this._value=this.masked.value,this._unmaskedValue=this.masked.unmaskedValue,this._rawInputValue=this.masked.rawInputValue}updateControl(e){const n=this.masked.unmaskedValue,r=this.masked.value,i=this.masked.rawInputValue,l=this.displayValue,a=this.unmaskedValue!==n||this.value!==r||this._rawInputValue!==i;this._unmaskedValue=n,this._value=r,this._rawInputValue=i,this.el.value!==l&&(this.el.value=l),e==="auto"?this.alignCursor():e!=null&&(this.cursorPos=e),a&&this._fireChangeEvents(),!this._historyChanging&&(a||this.history.isEmpty)&&this.history.push({unmaskedValue:n,selection:{start:this.selectionStart,end:this.cursorPos}})}updateOptions(e){const{mask:n,...r}=e,i=!this.maskEquals(n),l=this.masked.optionsIsChanged(r);i&&(this.mask=n),l&&this.masked.updateOptions(r),(i||l)&&this.updateControl()}updateCursor(e){e!=null&&(this.cursorPos=e,this._delayUpdateCursor(e))}_delayUpdateCursor(e){this._abortUpdateCursor(),this._changingCursorPos=e,this._cursorChanging=setTimeout(()=>{this.el&&(this.cursorPos=this._changingCursorPos,this._abortUpdateCursor())},10)}_fireChangeEvents(){this._fireEvent("accept",this._inputEvent),this.masked.isComplete&&this._fireEvent("complete",this._inputEvent)}_abortUpdateCursor(){this._cursorChanging&&(clearTimeout(this._cursorChanging),delete this._cursorChanging)}alignCursor(){this.cursorPos=this.masked.nearestInputPos(this.masked.nearestInputPos(this.cursorPos,oe.LEFT))}alignCursorFriendly(){this.selectionStart===this.cursorPos&&this.alignCursor()}on(e,n){return this._listeners[e]||(this._listeners[e]=[]),this._listeners[e].push(n),this}off(e,n){if(!this._listeners[e])return this;if(!n)return delete this._listeners[e],this;const r=this._listeners[e].indexOf(n);return r>=0&&this._listeners[e].splice(r,1),this}_onInput(e){this._inputEvent=e,this._abortUpdateCursor();const n=new Wh({value:this.el.value,cursorPos:this.cursorPos,oldValue:this.displayValue,oldSelection:this._selection}),r=this.masked.rawInputValue,i=this.masked.splice(n.startChangePos,n.removed.length,n.inserted,n.removeDirection,{input:!0,raw:!0}).offset,l=r===this.masked.rawInputValue?n.removeDirection:oe.NONE;let a=this.masked.nearestInputPos(n.startChangePos+i,l);l!==oe.NONE&&(a=this.masked.nearestInputPos(a,oe.NONE)),this.updateControl(a),delete this._inputEvent}_onChange(){this.displayValue!==this.el.value&&this.updateValue(),this.masked.doCommit(),this.updateControl(),this._saveSelection()}_onDrop(e){e.preventDefault(),e.stopPropagation()}_onFocus(e){this.alignCursorFriendly()}_onClick(e){this.alignCursorFriendly()}_onUndo(){this._applyHistoryState(this.history.undo())}_onRedo(){this._applyHistoryState(this.history.redo())}_applyHistoryState(e){e&&(this._historyChanging=!0,this.unmaskedValue=e.unmaskedValue,this.el.select(e.selection.start,e.selection.end),this._saveSelection(),this._historyChanging=!1)}destroy(){this._unbindEvents(),this._listeners.length=0,delete this.el}}Ce.InputMask=Kh;class xe{static normalize(e){return Array.isArray(e)?e:[e,new xe]}constructor(e){Object.assign(this,{inserted:"",rawInserted:"",tailShift:0,skip:!1},e)}aggregate(e){return this.inserted+=e.inserted,this.rawInserted+=e.rawInserted,this.tailShift+=e.tailShift,this.skip=this.skip||e.skip,this}get offset(){return this.tailShift+this.inserted.length}get consumed(){return!!this.rawInserted||this.skip}equals(e){return this.inserted===e.inserted&&this.tailShift===e.tailShift&&this.rawInserted===e.rawInserted&&this.skip===e.skip}}Ce.ChangeDetails=xe;class an{constructor(e,n,r){e===void 0&&(e=""),n===void 0&&(n=0),this.value=e,this.from=n,this.stop=r}toString(){return this.value}extend(e){this.value+=String(e)}appendTo(e){return e.append(this.toString(),{tail:!0}).aggregate(e._appendPlaceholder())}get state(){return{value:this.value,from:this.from,stop:this.stop}}set state(e){Object.assign(this,e)}unshift(e){if(!this.value.length||e!=null&&this.from>=e)return"";const n=this.value[0];return this.value=this.value.slice(1),n}shift(){if(!this.value.length)return"";const e=this.value[this.value.length-1];return this.value=this.value.slice(0,-1),e}}class gt{constructor(e){this._value="",this._update({...gt.DEFAULTS,...e}),this._initialized=!0}updateOptions(e){this.optionsIsChanged(e)&&this.withValueRefresh(this._update.bind(this,e))}_update(e){Object.assign(this,e)}get state(){return{_value:this.value,_rawInputValue:this.rawInputValue}}set state(e){this._value=e._value}reset(){this._value=""}get value(){return this._value}set value(e){this.resolve(e,{input:!0})}resolve(e,n){n===void 0&&(n={input:!0}),this.reset(),this.append(e,n,""),this.doCommit()}get unmaskedValue(){return this.value}set unmaskedValue(e){this.resolve(e,{})}get typedValue(){return this.parse?this.parse(this.value,this):this.unmaskedValue}set typedValue(e){this.format?this.value=this.format(e,this):this.unmaskedValue=String(e)}get rawInputValue(){return this.extractInput(0,this.displayValue.length,{raw:!0})}set rawInputValue(e){this.resolve(e,{raw:!0})}get displayValue(){return this.value}get isComplete(){return!0}get isFilled(){return this.isComplete}nearestInputPos(e,n){return e}totalInputPositions(e,n){return e===void 0&&(e=0),n===void 0&&(n=this.displayValue.length),Math.min(this.displayValue.length,n-e)}extractInput(e,n,r){return e===void 0&&(e=0),n===void 0&&(n=this.displayValue.length),this.displayValue.slice(e,n)}extractTail(e,n){return e===void 0&&(e=0),n===void 0&&(n=this.displayValue.length),new an(this.extractInput(e,n),e)}appendTail(e){return An(e)&&(e=new an(String(e))),e.appendTo(this)}_appendCharRaw(e,n){return e?(this._value+=e,new xe({inserted:e,rawInserted:e})):new xe}_appendChar(e,n,r){n===void 0&&(n={});const i=this.state;let l;if([e,l]=this.doPrepareChar(e,n),e&&(l=l.aggregate(this._appendCharRaw(e,n)),!l.rawInserted&&this.autofix==="pad")){const a=this.state;this.state=i;let o=this.pad(n);const s=this._appendCharRaw(e,n);o=o.aggregate(s),s.rawInserted||o.equals(l)?l=o:this.state=a}if(l.inserted){let a,o=this.doValidate(n)!==!1;if(o&&r!=null){const s=this.state;if(this.overwrite===!0){a=r.state;for(let c=0;c<l.rawInserted.length;++c)r.unshift(this.displayValue.length-l.tailShift)}let u=this.appendTail(r);if(o=u.rawInserted.length===r.toString().length,!(o&&u.inserted)&&this.overwrite==="shift"){this.state=s,a=r.state;for(let c=0;c<l.rawInserted.length;++c)r.shift();u=this.appendTail(r),o=u.rawInserted.length===r.toString().length}o&&u.inserted&&(this.state=s)}o||(l=new xe,this.state=i,r&&a&&(r.state=a))}return l}_appendPlaceholder(){return new xe}_appendEager(){return new xe}append(e,n,r){if(!An(e))throw new Error("value should be string");const i=An(r)?new an(String(r)):r;n!=null&&n.tail&&(n._beforeTailState=this.state);let l;[e,l]=this.doPrepare(e,n);for(let a=0;a<e.length;++a){const o=this._appendChar(e[a],n,i);if(!o.rawInserted&&!this.doSkipInvalid(e[a],n,i))break;l.aggregate(o)}return(this.eager===!0||this.eager==="append")&&n!=null&&n.input&&e&&l.aggregate(this._appendEager()),i!=null&&(l.tailShift+=this.appendTail(i).tailShift),l}remove(e,n){return e===void 0&&(e=0),n===void 0&&(n=this.displayValue.length),this._value=this.displayValue.slice(0,e)+this.displayValue.slice(n),new xe}withValueRefresh(e){if(this._refreshing||!this._initialized)return e();this._refreshing=!0;const n=this.rawInputValue,r=this.value,i=e();return this.rawInputValue=n,this.value&&this.value!==r&&r.indexOf(this.value)===0&&(this.append(r.slice(this.displayValue.length),{},""),this.doCommit()),delete this._refreshing,i}runIsolated(e){if(this._isolated||!this._initialized)return e(this);this._isolated=!0;const n=this.state,r=e(this);return this.state=n,delete this._isolated,r}doSkipInvalid(e,n,r){return!!this.skipInvalid}doPrepare(e,n){return n===void 0&&(n={}),xe.normalize(this.prepare?this.prepare(e,this,n):e)}doPrepareChar(e,n){return n===void 0&&(n={}),xe.normalize(this.prepareChar?this.prepareChar(e,this,n):e)}doValidate(e){return(!this.validate||this.validate(this.value,this,e))&&(!this.parent||this.parent.doValidate(e))}doCommit(){this.commit&&this.commit(this.value,this)}splice(e,n,r,i,l){r===void 0&&(r=""),i===void 0&&(i=oe.NONE),l===void 0&&(l={input:!0});const a=e+n,o=this.extractTail(a),s=this.eager===!0||this.eager==="remove";let u;s&&(i=Uh(i),u=this.extractInput(0,a,{raw:!0}));let c=e;const m=new xe;if(i!==oe.NONE&&(c=this.nearestInputPos(e,n>1&&e!==0&&!s?oe.NONE:i),m.tailShift=c-e),m.aggregate(this.remove(c)),s&&i!==oe.NONE&&u===this.rawInputValue)if(i===oe.FORCE_LEFT){let E;for(;u===this.rawInputValue&&(E=this.displayValue.length);)m.aggregate(new xe({tailShift:-1})).aggregate(this.remove(E-1))}else i===oe.FORCE_RIGHT&&o.unshift();return m.aggregate(this.append(r,l,o))}maskEquals(e){return this.mask===e}optionsIsChanged(e){return!Jr(this,e)}typedValueEquals(e){const n=this.typedValue;return e===n||gt.EMPTY_VALUES.includes(e)&&gt.EMPTY_VALUES.includes(n)||(this.format?this.format(e,this)===this.format(this.typedValue,this):!1)}pad(e){return new xe}}gt.DEFAULTS={skipInvalid:!0};gt.EMPTY_VALUES=[void 0,null,""];Ce.Masked=gt;class Fn{constructor(e,n){e===void 0&&(e=[]),n===void 0&&(n=0),this.chunks=e,this.from=n}toString(){return this.chunks.map(String).join("")}extend(e){if(!String(e))return;e=An(e)?new an(String(e)):e;const n=this.chunks[this.chunks.length-1],r=n&&(n.stop===e.stop||e.stop==null)&&e.from===n.from+n.toString().length;if(e instanceof an)r?n.extend(e.toString()):this.chunks.push(e);else if(e instanceof Fn){if(e.stop==null){let i;for(;e.chunks.length&&e.chunks[0].stop==null;)i=e.chunks.shift(),i.from+=e.from,this.extend(i)}e.toString()&&(e.stop=e.blockIndex,this.chunks.push(e))}}appendTo(e){if(!(e instanceof Ce.MaskedPattern))return new an(this.toString()).appendTo(e);const n=new xe;for(let r=0;r<this.chunks.length;++r){const i=this.chunks[r],l=e._mapPosToBlock(e.displayValue.length),a=i.stop;let o;if(a!=null&&(!l||l.index<=a)&&((i instanceof Fn||e._stops.indexOf(a)>=0)&&n.aggregate(e._appendPlaceholder(a)),o=i instanceof Fn&&e._blocks[a]),o){const s=o.appendTail(i);n.aggregate(s);const u=i.toString().slice(s.rawInserted.length);u&&n.aggregate(e.append(u,{tail:!0}))}else n.aggregate(e.append(i.toString(),{tail:!0}))}return n}get state(){return{chunks:this.chunks.map(e=>e.state),from:this.from,stop:this.stop,blockIndex:this.blockIndex}}set state(e){const{chunks:n,...r}=e;Object.assign(this,r),this.chunks=n.map(i=>{const l="chunks"in i?new Fn:new an;return l.state=i,l})}unshift(e){if(!this.chunks.length||e!=null&&this.from>=e)return"";const n=e!=null?e-this.from:e;let r=0;for(;r<this.chunks.length;){const i=this.chunks[r],l=i.unshift(n);if(i.toString()){if(!l)break;++r}else this.chunks.splice(r,1);if(l)return l}return""}shift(){if(!this.chunks.length)return"";let e=this.chunks.length-1;for(;0<=e;){const n=this.chunks[e],r=n.shift();if(n.toString()){if(!r)break;--e}else this.chunks.splice(e,1);if(r)return r}return""}}class Gh{constructor(e,n){this.masked=e,this._log=[];const{offset:r,index:i}=e._mapPosToBlock(n)||(n<0?{index:0,offset:0}:{index:this.masked._blocks.length,offset:0});this.offset=r,this.index=i,this.ok=!1}get block(){return this.masked._blocks[this.index]}get pos(){return this.masked._blockStartPos(this.index)+this.offset}get state(){return{index:this.index,offset:this.offset,ok:this.ok}}set state(e){Object.assign(this,e)}pushState(){this._log.push(this.state)}popState(){const e=this._log.pop();return e&&(this.state=e),e}bindBlock(){this.block||(this.index<0&&(this.index=0,this.offset=0),this.index>=this.masked._blocks.length&&(this.index=this.masked._blocks.length-1,this.offset=this.block.displayValue.length))}_pushLeft(e){for(this.pushState(),this.bindBlock();0<=this.index;--this.index,this.offset=((n=this.block)==null?void 0:n.displayValue.length)||0){var n;if(e())return this.ok=!0}return this.ok=!1}_pushRight(e){for(this.pushState(),this.bindBlock();this.index<this.masked._blocks.length;++this.index,this.offset=0)if(e())return this.ok=!0;return this.ok=!1}pushLeftBeforeFilled(){return this._pushLeft(()=>{if(!(this.block.isFixed||!this.block.value)&&(this.offset=this.block.nearestInputPos(this.offset,oe.FORCE_LEFT),this.offset!==0))return!0})}pushLeftBeforeInput(){return this._pushLeft(()=>{if(!this.block.isFixed)return this.offset=this.block.nearestInputPos(this.offset,oe.LEFT),!0})}pushLeftBeforeRequired(){return this._pushLeft(()=>{if(!(this.block.isFixed||this.block.isOptional&&!this.block.value))return this.offset=this.block.nearestInputPos(this.offset,oe.LEFT),!0})}pushRightBeforeFilled(){return this._pushRight(()=>{if(!(this.block.isFixed||!this.block.value)&&(this.offset=this.block.nearestInputPos(this.offset,oe.FORCE_RIGHT),this.offset!==this.block.value.length))return!0})}pushRightBeforeInput(){return this._pushRight(()=>{if(!this.block.isFixed)return this.offset=this.block.nearestInputPos(this.offset,oe.NONE),!0})}pushRightBeforeRequired(){return this._pushRight(()=>{if(!(this.block.isFixed||this.block.isOptional&&!this.block.value))return this.offset=this.block.nearestInputPos(this.offset,oe.NONE),!0})}}class Zo{constructor(e){Object.assign(this,e),this._value="",this.isFixed=!0}get value(){return this._value}get unmaskedValue(){return this.isUnmasking?this.value:""}get rawInputValue(){return this._isRawInput?this.value:""}get displayValue(){return this.value}reset(){this._isRawInput=!1,this._value=""}remove(e,n){return e===void 0&&(e=0),n===void 0&&(n=this._value.length),this._value=this._value.slice(0,e)+this._value.slice(n),this._value||(this._isRawInput=!1),new xe}nearestInputPos(e,n){n===void 0&&(n=oe.NONE);const r=0,i=this._value.length;switch(n){case oe.LEFT:case oe.FORCE_LEFT:return r;case oe.NONE:case oe.RIGHT:case oe.FORCE_RIGHT:default:return i}}totalInputPositions(e,n){return e===void 0&&(e=0),n===void 0&&(n=this._value.length),this._isRawInput?n-e:0}extractInput(e,n,r){return e===void 0&&(e=0),n===void 0&&(n=this._value.length),r===void 0&&(r={}),r.raw&&this._isRawInput&&this._value.slice(e,n)||""}get isComplete(){return!0}get isFilled(){return!!this._value}_appendChar(e,n){if(n===void 0&&(n={}),this.isFilled)return new xe;const r=this.eager===!0||this.eager==="append",l=this.char===e&&(this.isUnmasking||n.input||n.raw)&&(!n.raw||!r)&&!n.tail,a=new xe({inserted:this.char,rawInserted:l?this.char:""});return this._value=this.char,this._isRawInput=l&&(n.raw||n.input),a}_appendEager(){return this._appendChar(this.char,{tail:!0})}_appendPlaceholder(){const e=new xe;return this.isFilled||(this._value=e.inserted=this.char),e}extractTail(){return new an("")}appendTail(e){return An(e)&&(e=new an(String(e))),e.appendTo(this)}append(e,n,r){const i=this._appendChar(e[0],n);return r!=null&&(i.tailShift+=this.appendTail(r).tailShift),i}doCommit(){}get state(){return{_value:this._value,_rawInputValue:this.rawInputValue}}set state(e){this._value=e._value,this._isRawInput=!!e._rawInputValue}pad(e){return this._appendPlaceholder()}}class Yr{constructor(e){const{parent:n,isOptional:r,placeholderChar:i,displayChar:l,lazy:a,eager:o,...s}=e;this.masked=hn(s),Object.assign(this,{parent:n,isOptional:r,placeholderChar:i,displayChar:l,lazy:a,eager:o})}reset(){this.isFilled=!1,this.masked.reset()}remove(e,n){return e===void 0&&(e=0),n===void 0&&(n=this.value.length),e===0&&n>=1?(this.isFilled=!1,this.masked.remove(e,n)):new xe}get value(){return this.masked.value||(this.isFilled&&!this.isOptional?this.placeholderChar:"")}get unmaskedValue(){return this.masked.unmaskedValue}get rawInputValue(){return this.masked.rawInputValue}get displayValue(){return this.masked.value&&this.displayChar||this.value}get isComplete(){return!!this.masked.value||this.isOptional}_appendChar(e,n){if(n===void 0&&(n={}),this.isFilled)return new xe;const r=this.masked.state;let i=this.masked._appendChar(e,this.currentMaskFlags(n));return i.inserted&&this.doValidate(n)===!1&&(i=new xe,this.masked.state=r),!i.inserted&&!this.isOptional&&!this.lazy&&!n.input&&(i.inserted=this.placeholderChar),i.skip=!i.inserted&&!this.isOptional,this.isFilled=!!i.inserted,i}append(e,n,r){return this.masked.append(e,this.currentMaskFlags(n),r)}_appendPlaceholder(){return this.isFilled||this.isOptional?new xe:(this.isFilled=!0,new xe({inserted:this.placeholderChar}))}_appendEager(){return new xe}extractTail(e,n){return this.masked.extractTail(e,n)}appendTail(e){return this.masked.appendTail(e)}extractInput(e,n,r){return e===void 0&&(e=0),n===void 0&&(n=this.value.length),this.masked.extractInput(e,n,r)}nearestInputPos(e,n){n===void 0&&(n=oe.NONE);const r=0,i=this.value.length,l=Math.min(Math.max(e,r),i);switch(n){case oe.LEFT:case oe.FORCE_LEFT:return this.isComplete?l:r;case oe.RIGHT:case oe.FORCE_RIGHT:return this.isComplete?l:i;case oe.NONE:default:return l}}totalInputPositions(e,n){return e===void 0&&(e=0),n===void 0&&(n=this.value.length),this.value.slice(e,n).length}doValidate(e){return this.masked.doValidate(this.currentMaskFlags(e))&&(!this.parent||this.parent.doValidate(this.currentMaskFlags(e)))}doCommit(){this.masked.doCommit()}get state(){return{_value:this.value,_rawInputValue:this.rawInputValue,masked:this.masked.state,isFilled:this.isFilled}}set state(e){this.masked.state=e.masked,this.isFilled=e.isFilled}currentMaskFlags(e){var n;return{...e,_beforeTailState:(e==null||(n=e._beforeTailState)==null?void 0:n.masked)||e?._beforeTailState}}pad(e){return new xe}}Yr.DEFAULT_DEFINITIONS={0:/\d/,a:/[\u0041-\u005A\u0061-\u007A\u00AA\u00B5\u00BA\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02C1\u02C6-\u02D1\u02E0-\u02E4\u02EC\u02EE\u0370-\u0374\u0376\u0377\u037A-\u037D\u0386\u0388-\u038A\u038C\u038E-\u03A1\u03A3-\u03F5\u03F7-\u0481\u048A-\u0527\u0531-\u0556\u0559\u0561-\u0587\u05D0-\u05EA\u05F0-\u05F2\u0620-\u064A\u066E\u066F\u0671-\u06D3\u06D5\u06E5\u06E6\u06EE\u06EF\u06FA-\u06FC\u06FF\u0710\u0712-\u072F\u074D-\u07A5\u07B1\u07CA-\u07EA\u07F4\u07F5\u07FA\u0800-\u0815\u081A\u0824\u0828\u0840-\u0858\u08A0\u08A2-\u08AC\u0904-\u0939\u093D\u0950\u0958-\u0961\u0971-\u0977\u0979-\u097F\u0985-\u098C\u098F\u0990\u0993-\u09A8\u09AA-\u09B0\u09B2\u09B6-\u09B9\u09BD\u09CE\u09DC\u09DD\u09DF-\u09E1\u09F0\u09F1\u0A05-\u0A0A\u0A0F\u0A10\u0A13-\u0A28\u0A2A-\u0A30\u0A32\u0A33\u0A35\u0A36\u0A38\u0A39\u0A59-\u0A5C\u0A5E\u0A72-\u0A74\u0A85-\u0A8D\u0A8F-\u0A91\u0A93-\u0AA8\u0AAA-\u0AB0\u0AB2\u0AB3\u0AB5-\u0AB9\u0ABD\u0AD0\u0AE0\u0AE1\u0B05-\u0B0C\u0B0F\u0B10\u0B13-\u0B28\u0B2A-\u0B30\u0B32\u0B33\u0B35-\u0B39\u0B3D\u0B5C\u0B5D\u0B5F-\u0B61\u0B71\u0B83\u0B85-\u0B8A\u0B8E-\u0B90\u0B92-\u0B95\u0B99\u0B9A\u0B9C\u0B9E\u0B9F\u0BA3\u0BA4\u0BA8-\u0BAA\u0BAE-\u0BB9\u0BD0\u0C05-\u0C0C\u0C0E-\u0C10\u0C12-\u0C28\u0C2A-\u0C33\u0C35-\u0C39\u0C3D\u0C58\u0C59\u0C60\u0C61\u0C85-\u0C8C\u0C8E-\u0C90\u0C92-\u0CA8\u0CAA-\u0CB3\u0CB5-\u0CB9\u0CBD\u0CDE\u0CE0\u0CE1\u0CF1\u0CF2\u0D05-\u0D0C\u0D0E-\u0D10\u0D12-\u0D3A\u0D3D\u0D4E\u0D60\u0D61\u0D7A-\u0D7F\u0D85-\u0D96\u0D9A-\u0DB1\u0DB3-\u0DBB\u0DBD\u0DC0-\u0DC6\u0E01-\u0E30\u0E32\u0E33\u0E40-\u0E46\u0E81\u0E82\u0E84\u0E87\u0E88\u0E8A\u0E8D\u0E94-\u0E97\u0E99-\u0E9F\u0EA1-\u0EA3\u0EA5\u0EA7\u0EAA\u0EAB\u0EAD-\u0EB0\u0EB2\u0EB3\u0EBD\u0EC0-\u0EC4\u0EC6\u0EDC-\u0EDF\u0F00\u0F40-\u0F47\u0F49-\u0F6C\u0F88-\u0F8C\u1000-\u102A\u103F\u1050-\u1055\u105A-\u105D\u1061\u1065\u1066\u106E-\u1070\u1075-\u1081\u108E\u10A0-\u10C5\u10C7\u10CD\u10D0-\u10FA\u10FC-\u1248\u124A-\u124D\u1250-\u1256\u1258\u125A-\u125D\u1260-\u1288\u128A-\u128D\u1290-\u12B0\u12B2-\u12B5\u12B8-\u12BE\u12C0\u12C2-\u12C5\u12C8-\u12D6\u12D8-\u1310\u1312-\u1315\u1318-\u135A\u1380-\u138F\u13A0-\u13F4\u1401-\u166C\u166F-\u167F\u1681-\u169A\u16A0-\u16EA\u1700-\u170C\u170E-\u1711\u1720-\u1731\u1740-\u1751\u1760-\u176C\u176E-\u1770\u1780-\u17B3\u17D7\u17DC\u1820-\u1877\u1880-\u18A8\u18AA\u18B0-\u18F5\u1900-\u191C\u1950-\u196D\u1970-\u1974\u1980-\u19AB\u19C1-\u19C7\u1A00-\u1A16\u1A20-\u1A54\u1AA7\u1B05-\u1B33\u1B45-\u1B4B\u1B83-\u1BA0\u1BAE\u1BAF\u1BBA-\u1BE5\u1C00-\u1C23\u1C4D-\u1C4F\u1C5A-\u1C7D\u1CE9-\u1CEC\u1CEE-\u1CF1\u1CF5\u1CF6\u1D00-\u1DBF\u1E00-\u1F15\u1F18-\u1F1D\u1F20-\u1F45\u1F48-\u1F4D\u1F50-\u1F57\u1F59\u1F5B\u1F5D\u1F5F-\u1F7D\u1F80-\u1FB4\u1FB6-\u1FBC\u1FBE\u1FC2-\u1FC4\u1FC6-\u1FCC\u1FD0-\u1FD3\u1FD6-\u1FDB\u1FE0-\u1FEC\u1FF2-\u1FF4\u1FF6-\u1FFC\u2071\u207F\u2090-\u209C\u2102\u2107\u210A-\u2113\u2115\u2119-\u211D\u2124\u2126\u2128\u212A-\u212D\u212F-\u2139\u213C-\u213F\u2145-\u2149\u214E\u2183\u2184\u2C00-\u2C2E\u2C30-\u2C5E\u2C60-\u2CE4\u2CEB-\u2CEE\u2CF2\u2CF3\u2D00-\u2D25\u2D27\u2D2D\u2D30-\u2D67\u2D6F\u2D80-\u2D96\u2DA0-\u2DA6\u2DA8-\u2DAE\u2DB0-\u2DB6\u2DB8-\u2DBE\u2DC0-\u2DC6\u2DC8-\u2DCE\u2DD0-\u2DD6\u2DD8-\u2DDE\u2E2F\u3005\u3006\u3031-\u3035\u303B\u303C\u3041-\u3096\u309D-\u309F\u30A1-\u30FA\u30FC-\u30FF\u3105-\u312D\u3131-\u318E\u31A0-\u31BA\u31F0-\u31FF\u3400-\u4DB5\u4E00-\u9FCC\uA000-\uA48C\uA4D0-\uA4FD\uA500-\uA60C\uA610-\uA61F\uA62A\uA62B\uA640-\uA66E\uA67F-\uA697\uA6A0-\uA6E5\uA717-\uA71F\uA722-\uA788\uA78B-\uA78E\uA790-\uA793\uA7A0-\uA7AA\uA7F8-\uA801\uA803-\uA805\uA807-\uA80A\uA80C-\uA822\uA840-\uA873\uA882-\uA8B3\uA8F2-\uA8F7\uA8FB\uA90A-\uA925\uA930-\uA946\uA960-\uA97C\uA984-\uA9B2\uA9CF\uAA00-\uAA28\uAA40-\uAA42\uAA44-\uAA4B\uAA60-\uAA76\uAA7A\uAA80-\uAAAF\uAAB1\uAAB5\uAAB6\uAAB9-\uAABD\uAAC0\uAAC2\uAADB-\uAADD\uAAE0-\uAAEA\uAAF2-\uAAF4\uAB01-\uAB06\uAB09-\uAB0E\uAB11-\uAB16\uAB20-\uAB26\uAB28-\uAB2E\uABC0-\uABE2\uAC00-\uD7A3\uD7B0-\uD7C6\uD7CB-\uD7FB\uF900-\uFA6D\uFA70-\uFAD9\uFB00-\uFB06\uFB13-\uFB17\uFB1D\uFB1F-\uFB28\uFB2A-\uFB36\uFB38-\uFB3C\uFB3E\uFB40\uFB41\uFB43\uFB44\uFB46-\uFBB1\uFBD3-\uFD3D\uFD50-\uFD8F\uFD92-\uFDC7\uFDF0-\uFDFB\uFE70-\uFE74\uFE76-\uFEFC\uFF21-\uFF3A\uFF41-\uFF5A\uFF66-\uFFBE\uFFC2-\uFFC7\uFFCA-\uFFCF\uFFD2-\uFFD7\uFFDA-\uFFDC]/,"*":/./};class Jh extends gt{updateOptions(e){super.updateOptions(e)}_update(e){const n=e.mask;n&&(e.validate=r=>r.search(n)>=0),super._update(e)}}Ce.MaskedRegExp=Jh;class bt extends gt{constructor(e){super({...bt.DEFAULTS,...e,definitions:Object.assign({},Yr.DEFAULT_DEFINITIONS,e?.definitions)})}updateOptions(e){super.updateOptions(e)}_update(e){e.definitions=Object.assign({},this.definitions,e.definitions),super._update(e),this._rebuildMask()}_rebuildMask(){const e=this.definitions;this._blocks=[],this.exposeBlock=void 0,this._stops=[],this._maskedBlocks={};const n=this.mask;if(!n||!e)return;let r=!1,i=!1;for(let l=0;l<n.length;++l){if(this.blocks){const u=n.slice(l),c=Object.keys(this.blocks).filter(E=>u.indexOf(E)===0);c.sort((E,g)=>g.length-E.length);const m=c[0];if(m){const{expose:E,repeat:g,...b}=Lr(this.blocks[m]),L={lazy:this.lazy,eager:this.eager,placeholderChar:this.placeholderChar,displayChar:this.displayChar,overwrite:this.overwrite,autofix:this.autofix,...b,repeat:g,parent:this},x=g!=null?new Ce.RepeatBlock(L):hn(L);x&&(this._blocks.push(x),E&&(this.exposeBlock=x),this._maskedBlocks[m]||(this._maskedBlocks[m]=[]),this._maskedBlocks[m].push(this._blocks.length-1)),l+=m.length-1;continue}}let a=n[l],o=a in e;if(a===bt.STOP_CHAR){this._stops.push(this._blocks.length);continue}if(a==="{"||a==="}"){r=!r;continue}if(a==="["||a==="]"){i=!i;continue}if(a===bt.ESCAPE_CHAR){if(++l,a=n[l],!a)break;o=!1}const s=o?new Yr({isOptional:i,lazy:this.lazy,eager:this.eager,placeholderChar:this.placeholderChar,displayChar:this.displayChar,...Lr(e[a]),parent:this}):new Zo({char:a,eager:this.eager,isUnmasking:r});this._blocks.push(s)}}get state(){return{...super.state,_blocks:this._blocks.map(e=>e.state)}}set state(e){if(!e){this.reset();return}const{_blocks:n,...r}=e;this._blocks.forEach((i,l)=>i.state=n[l]),super.state=r}reset(){super.reset(),this._blocks.forEach(e=>e.reset())}get isComplete(){return this.exposeBlock?this.exposeBlock.isComplete:this._blocks.every(e=>e.isComplete)}get isFilled(){return this._blocks.every(e=>e.isFilled)}get isFixed(){return this._blocks.every(e=>e.isFixed)}get isOptional(){return this._blocks.every(e=>e.isOptional)}doCommit(){this._blocks.forEach(e=>e.doCommit()),super.doCommit()}get unmaskedValue(){return this.exposeBlock?this.exposeBlock.unmaskedValue:this._blocks.reduce((e,n)=>e+=n.unmaskedValue,"")}set unmaskedValue(e){if(this.exposeBlock){const n=this.extractTail(this._blockStartPos(this._blocks.indexOf(this.exposeBlock))+this.exposeBlock.displayValue.length);this.exposeBlock.unmaskedValue=e,this.appendTail(n),this.doCommit()}else super.unmaskedValue=e}get value(){return this.exposeBlock?this.exposeBlock.value:this._blocks.reduce((e,n)=>e+=n.value,"")}set value(e){if(this.exposeBlock){const n=this.extractTail(this._blockStartPos(this._blocks.indexOf(this.exposeBlock))+this.exposeBlock.displayValue.length);this.exposeBlock.value=e,this.appendTail(n),this.doCommit()}else super.value=e}get typedValue(){return this.exposeBlock?this.exposeBlock.typedValue:super.typedValue}set typedValue(e){if(this.exposeBlock){const n=this.extractTail(this._blockStartPos(this._blocks.indexOf(this.exposeBlock))+this.exposeBlock.displayValue.length);this.exposeBlock.typedValue=e,this.appendTail(n),this.doCommit()}else super.typedValue=e}get displayValue(){return this._blocks.reduce((e,n)=>e+=n.displayValue,"")}appendTail(e){return super.appendTail(e).aggregate(this._appendPlaceholder())}_appendEager(){var e;const n=new xe;let r=(e=this._mapPosToBlock(this.displayValue.length))==null?void 0:e.index;if(r==null)return n;this._blocks[r].isFilled&&++r;for(let i=r;i<this._blocks.length;++i){const l=this._blocks[i]._appendEager();if(!l.inserted)break;n.aggregate(l)}return n}_appendCharRaw(e,n){n===void 0&&(n={});const r=this._mapPosToBlock(this.displayValue.length),i=new xe;if(!r)return i;for(let a=r.index,o;o=this._blocks[a];++a){var l;const s=o._appendChar(e,{...n,_beforeTailState:(l=n._beforeTailState)==null||(l=l._blocks)==null?void 0:l[a]});if(i.aggregate(s),s.consumed)break}return i}extractTail(e,n){e===void 0&&(e=0),n===void 0&&(n=this.displayValue.length);const r=new Fn;return e===n||this._forEachBlocksInRange(e,n,(i,l,a,o)=>{const s=i.extractTail(a,o);s.stop=this._findStopBefore(l),s.from=this._blockStartPos(l),s instanceof Fn&&(s.blockIndex=l),r.extend(s)}),r}extractInput(e,n,r){if(e===void 0&&(e=0),n===void 0&&(n=this.displayValue.length),r===void 0&&(r={}),e===n)return"";let i="";return this._forEachBlocksInRange(e,n,(l,a,o,s)=>{i+=l.extractInput(o,s,r)}),i}_findStopBefore(e){let n;for(let r=0;r<this._stops.length;++r){const i=this._stops[r];if(i<=e)n=i;else break}return n}_appendPlaceholder(e){const n=new xe;if(this.lazy&&e==null)return n;const r=this._mapPosToBlock(this.displayValue.length);if(!r)return n;const i=r.index,l=e??this._blocks.length;return this._blocks.slice(i,l).forEach(a=>{if(!a.lazy||e!=null){var o;n.aggregate(a._appendPlaceholder((o=a._blocks)==null?void 0:o.length))}}),n}_mapPosToBlock(e){let n="";for(let r=0;r<this._blocks.length;++r){const i=this._blocks[r],l=n.length;if(n+=i.displayValue,e<=n.length)return{index:r,offset:e-l}}}_blockStartPos(e){return this._blocks.slice(0,e).reduce((n,r)=>n+=r.displayValue.length,0)}_forEachBlocksInRange(e,n,r){n===void 0&&(n=this.displayValue.length);const i=this._mapPosToBlock(e);if(i){const l=this._mapPosToBlock(n),a=l&&i.index===l.index,o=i.offset,s=l&&a?l.offset:this._blocks[i.index].displayValue.length;if(r(this._blocks[i.index],i.index,o,s),l&&!a){for(let u=i.index+1;u<l.index;++u)r(this._blocks[u],u,0,this._blocks[u].displayValue.length);r(this._blocks[l.index],l.index,0,l.offset)}}}remove(e,n){e===void 0&&(e=0),n===void 0&&(n=this.displayValue.length);const r=super.remove(e,n);return this._forEachBlocksInRange(e,n,(i,l,a,o)=>{r.aggregate(i.remove(a,o))}),r}nearestInputPos(e,n){if(n===void 0&&(n=oe.NONE),!this._blocks.length)return 0;const r=new Gh(this,e);if(n===oe.NONE)return r.pushRightBeforeInput()||(r.popState(),r.pushLeftBeforeInput())?r.pos:this.displayValue.length;if(n===oe.LEFT||n===oe.FORCE_LEFT){if(n===oe.LEFT){if(r.pushRightBeforeFilled(),r.ok&&r.pos===e)return e;r.popState()}if(r.pushLeftBeforeInput(),r.pushLeftBeforeRequired(),r.pushLeftBeforeFilled(),n===oe.LEFT){if(r.pushRightBeforeInput(),r.pushRightBeforeRequired(),r.ok&&r.pos<=e||(r.popState(),r.ok&&r.pos<=e))return r.pos;r.popState()}return r.ok?r.pos:n===oe.FORCE_LEFT?0:(r.popState(),r.ok||(r.popState(),r.ok)?r.pos:0)}return n===oe.RIGHT||n===oe.FORCE_RIGHT?(r.pushRightBeforeInput(),r.pushRightBeforeRequired(),r.pushRightBeforeFilled()?r.pos:n===oe.FORCE_RIGHT?this.displayValue.length:(r.popState(),r.ok||(r.popState(),r.ok)?r.pos:this.nearestInputPos(e,oe.LEFT))):e}totalInputPositions(e,n){e===void 0&&(e=0),n===void 0&&(n=this.displayValue.length);let r=0;return this._forEachBlocksInRange(e,n,(i,l,a,o)=>{r+=i.totalInputPositions(a,o)}),r}maskedBlock(e){return this.maskedBlocks(e)[0]}maskedBlocks(e){const n=this._maskedBlocks[e];return n?n.map(r=>this._blocks[r]):[]}pad(e){const n=new xe;return this._forEachBlocksInRange(0,this.displayValue.length,r=>n.aggregate(r.pad(e))),n}}bt.DEFAULTS={...gt.DEFAULTS,lazy:!0,placeholderChar:"_"};bt.STOP_CHAR="`";bt.ESCAPE_CHAR="\\";bt.InputDefinition=Yr;bt.FixedDefinition=Zo;Ce.MaskedPattern=bt;class Vr extends bt{get _matchFrom(){return this.maxLength-String(this.from).length}constructor(e){super(e)}updateOptions(e){super.updateOptions(e)}_update(e){const{to:n=this.to||0,from:r=this.from||0,maxLength:i=this.maxLength||0,autofix:l=this.autofix,...a}=e;this.to=n,this.from=r,this.maxLength=Math.max(String(n).length,i),this.autofix=l;const o=String(this.from).padStart(this.maxLength,"0"),s=String(this.to).padStart(this.maxLength,"0");let u=0;for(;u<s.length&&s[u]===o[u];)++u;a.mask=s.slice(0,u).replace(/0/g,"\\0")+"0".repeat(this.maxLength-u),super._update(a)}get isComplete(){return super.isComplete&&!!this.value}boundaries(e){let n="",r="";const[,i,l]=e.match(/^(\D*)(\d*)(\D*)/)||[];return l&&(n="0".repeat(i.length)+l,r="9".repeat(i.length)+l),n=n.padEnd(this.maxLength,"0"),r=r.padEnd(this.maxLength,"9"),[n,r]}doPrepareChar(e,n){n===void 0&&(n={});let r;return[e,r]=super.doPrepareChar(e.replace(/\D/g,""),n),e||(r.skip=!this.isComplete),[e,r]}_appendCharRaw(e,n){if(n===void 0&&(n={}),!this.autofix||this.value.length+1>this.maxLength)return super._appendCharRaw(e,n);const r=String(this.from).padStart(this.maxLength,"0"),i=String(this.to).padStart(this.maxLength,"0"),[l,a]=this.boundaries(this.value+e);return Number(a)<this.from?super._appendCharRaw(r[this.value.length],n):Number(l)>this.to?!n.tail&&this.autofix==="pad"&&this.value.length+1<this.maxLength?super._appendCharRaw(r[this.value.length],n).aggregate(this._appendCharRaw(e,n)):super._appendCharRaw(i[this.value.length],n):super._appendCharRaw(e,n)}doValidate(e){const n=this.value;if(n.search(/[^0]/)===-1&&n.length<=this._matchFrom)return!0;const[i,l]=this.boundaries(n);return this.from<=Number(l)&&Number(i)<=this.to&&super.doValidate(e)}pad(e){const n=new xe;if(this.value.length===this.maxLength)return n;const r=this.value,i=this.maxLength-this.value.length;if(i){this.reset();for(let l=0;l<i;++l)n.aggregate(super._appendCharRaw("0",e));r.split("").forEach(l=>this._appendCharRaw(l))}return n}}Ce.MaskedRange=Vr;const Yh="d{.}`m{.}`Y";class pn extends bt{static extractPatternOptions(e){const{mask:n,pattern:r,...i}=e;return{...i,mask:An(n)?n:r}}constructor(e){super(pn.extractPatternOptions({...pn.DEFAULTS,...e}))}updateOptions(e){super.updateOptions(e)}_update(e){const{mask:n,pattern:r,blocks:i,...l}={...pn.DEFAULTS,...e},a=Object.assign({},pn.GET_DEFAULT_BLOCKS());e.min&&(a.Y.from=e.min.getFullYear()),e.max&&(a.Y.to=e.max.getFullYear()),e.min&&e.max&&a.Y.from===a.Y.to&&(a.m.from=e.min.getMonth()+1,a.m.to=e.max.getMonth()+1,a.m.from===a.m.to&&(a.d.from=e.min.getDate(),a.d.to=e.max.getDate())),Object.assign(a,this.blocks,i),super._update({...l,mask:An(n)?n:r,blocks:a})}doValidate(e){const n=this.date;return super.doValidate(e)&&(!this.isComplete||this.isDateExist(this.value)&&n!=null&&(this.min==null||this.min<=n)&&(this.max==null||n<=this.max))}isDateExist(e){return this.format(this.parse(e,this),this).indexOf(e)>=0}get date(){return this.typedValue}set date(e){this.typedValue=e}get typedValue(){return this.isComplete?super.typedValue:null}set typedValue(e){super.typedValue=e}maskEquals(e){return e===Date||super.maskEquals(e)}optionsIsChanged(e){return super.optionsIsChanged(pn.extractPatternOptions(e))}}pn.GET_DEFAULT_BLOCKS=()=>({d:{mask:Vr,from:1,to:31,maxLength:2},m:{mask:Vr,from:1,to:12,maxLength:2},Y:{mask:Vr,from:1900,to:9999}});pn.DEFAULTS={...bt.DEFAULTS,mask:Date,pattern:Yh,format:(t,e)=>{if(!t)return"";const n=String(t.getDate()).padStart(2,"0"),r=String(t.getMonth()+1).padStart(2,"0"),i=t.getFullYear();return[n,r,i].join(".")},parse:(t,e)=>{const[n,r,i]=t.split(".").map(Number);return new Date(i,r-1,n)}};Ce.MaskedDate=pn;class ci extends gt{constructor(e){super({...ci.DEFAULTS,...e}),this.currentMask=void 0}updateOptions(e){super.updateOptions(e)}_update(e){super._update(e),"mask"in e&&(this.exposeMask=void 0,this.compiledMasks=Array.isArray(e.mask)?e.mask.map(n=>{const{expose:r,...i}=Lr(n),l=hn({overwrite:this._overwrite,eager:this._eager,skipInvalid:this._skipInvalid,...i});return r&&(this.exposeMask=l),l}):[])}_appendCharRaw(e,n){n===void 0&&(n={});const r=this._applyDispatch(e,n);return this.currentMask&&r.aggregate(this.currentMask._appendChar(e,this.currentMaskFlags(n))),r}_applyDispatch(e,n,r){e===void 0&&(e=""),n===void 0&&(n={}),r===void 0&&(r="");const i=n.tail&&n._beforeTailState!=null?n._beforeTailState._value:this.value,l=this.rawInputValue,a=n.tail&&n._beforeTailState!=null?n._beforeTailState._rawInputValue:l,o=l.slice(a.length),s=this.currentMask,u=new xe,c=s?.state;return this.currentMask=this.doDispatch(e,{...n},r),this.currentMask&&(this.currentMask!==s?(this.currentMask.reset(),a&&(this.currentMask.append(a,{raw:!0}),u.tailShift=this.currentMask.value.length-i.length),o&&(u.tailShift+=this.currentMask.append(o,{raw:!0,tail:!0}).tailShift)):c&&(this.currentMask.state=c)),u}_appendPlaceholder(){const e=this._applyDispatch();return this.currentMask&&e.aggregate(this.currentMask._appendPlaceholder()),e}_appendEager(){const e=this._applyDispatch();return this.currentMask&&e.aggregate(this.currentMask._appendEager()),e}appendTail(e){const n=new xe;return e&&n.aggregate(this._applyDispatch("",{},e)),n.aggregate(this.currentMask?this.currentMask.appendTail(e):super.appendTail(e))}currentMaskFlags(e){var n,r;return{...e,_beforeTailState:((n=e._beforeTailState)==null?void 0:n.currentMaskRef)===this.currentMask&&((r=e._beforeTailState)==null?void 0:r.currentMask)||e._beforeTailState}}doDispatch(e,n,r){return n===void 0&&(n={}),r===void 0&&(r=""),this.dispatch(e,this,n,r)}doValidate(e){return super.doValidate(e)&&(!this.currentMask||this.currentMask.doValidate(this.currentMaskFlags(e)))}doPrepare(e,n){n===void 0&&(n={});let[r,i]=super.doPrepare(e,n);if(this.currentMask){let l;[r,l]=super.doPrepare(r,this.currentMaskFlags(n)),i=i.aggregate(l)}return[r,i]}doPrepareChar(e,n){n===void 0&&(n={});let[r,i]=super.doPrepareChar(e,n);if(this.currentMask){let l;[r,l]=super.doPrepareChar(r,this.currentMaskFlags(n)),i=i.aggregate(l)}return[r,i]}reset(){var e;(e=this.currentMask)==null||e.reset(),this.compiledMasks.forEach(n=>n.reset())}get value(){return this.exposeMask?this.exposeMask.value:this.currentMask?this.currentMask.value:""}set value(e){this.exposeMask?(this.exposeMask.value=e,this.currentMask=this.exposeMask,this._applyDispatch()):super.value=e}get unmaskedValue(){return this.exposeMask?this.exposeMask.unmaskedValue:this.currentMask?this.currentMask.unmaskedValue:""}set unmaskedValue(e){this.exposeMask?(this.exposeMask.unmaskedValue=e,this.currentMask=this.exposeMask,this._applyDispatch()):super.unmaskedValue=e}get typedValue(){return this.exposeMask?this.exposeMask.typedValue:this.currentMask?this.currentMask.typedValue:""}set typedValue(e){if(this.exposeMask){this.exposeMask.typedValue=e,this.currentMask=this.exposeMask,this._applyDispatch();return}let n=String(e);this.currentMask&&(this.currentMask.typedValue=e,n=this.currentMask.unmaskedValue),this.unmaskedValue=n}get displayValue(){return this.currentMask?this.currentMask.displayValue:""}get isComplete(){var e;return!!((e=this.currentMask)!=null&&e.isComplete)}get isFilled(){var e;return!!((e=this.currentMask)!=null&&e.isFilled)}remove(e,n){const r=new xe;return this.currentMask&&r.aggregate(this.currentMask.remove(e,n)).aggregate(this._applyDispatch()),r}get state(){var e;return{...super.state,_rawInputValue:this.rawInputValue,compiledMasks:this.compiledMasks.map(n=>n.state),currentMaskRef:this.currentMask,currentMask:(e=this.currentMask)==null?void 0:e.state}}set state(e){const{compiledMasks:n,currentMaskRef:r,currentMask:i,...l}=e;n&&this.compiledMasks.forEach((a,o)=>a.state=n[o]),r!=null&&(this.currentMask=r,this.currentMask.state=i),super.state=l}extractInput(e,n,r){return this.currentMask?this.currentMask.extractInput(e,n,r):""}extractTail(e,n){return this.currentMask?this.currentMask.extractTail(e,n):super.extractTail(e,n)}doCommit(){this.currentMask&&this.currentMask.doCommit(),super.doCommit()}nearestInputPos(e,n){return this.currentMask?this.currentMask.nearestInputPos(e,n):super.nearestInputPos(e,n)}get overwrite(){return this.currentMask?this.currentMask.overwrite:this._overwrite}set overwrite(e){this._overwrite=e}get eager(){return this.currentMask?this.currentMask.eager:this._eager}set eager(e){this._eager=e}get skipInvalid(){return this.currentMask?this.currentMask.skipInvalid:this._skipInvalid}set skipInvalid(e){this._skipInvalid=e}get autofix(){return this.currentMask?this.currentMask.autofix:this._autofix}set autofix(e){this._autofix=e}maskEquals(e){return Array.isArray(e)?this.compiledMasks.every((n,r)=>{if(!e[r])return;const{mask:i,...l}=e[r];return Jr(n,l)&&n.maskEquals(i)}):super.maskEquals(e)}typedValueEquals(e){var n;return!!((n=this.currentMask)!=null&&n.typedValueEquals(e))}}ci.DEFAULTS={...gt.DEFAULTS,dispatch:(t,e,n,r)=>{if(!e.compiledMasks.length)return;const i=e.rawInputValue,l=e.compiledMasks.map((a,o)=>{const s=e.currentMask===a,u=s?a.displayValue.length:a.nearestInputPos(a.displayValue.length,oe.FORCE_LEFT);return a.rawInputValue!==i?(a.reset(),a.append(i,{raw:!0})):s||a.remove(u),a.append(t,e.currentMaskFlags(n)),a.appendTail(r),{index:o,weight:a.rawInputValue.length,totalInputPositions:a.totalInputPositions(0,Math.max(u,a.nearestInputPos(a.displayValue.length,oe.FORCE_LEFT)))}});return l.sort((a,o)=>o.weight-a.weight||o.totalInputPositions-a.totalInputPositions),e.compiledMasks[l[0].index]}};Ce.MaskedDynamic=ci;class pi extends bt{constructor(e){super({...pi.DEFAULTS,...e})}updateOptions(e){super.updateOptions(e)}_update(e){const{enum:n,...r}=e;if(n){const i=n.map(o=>o.length),l=Math.min(...i),a=Math.max(...i)-l;r.mask="*".repeat(l),a&&(r.mask+="["+"*".repeat(a)+"]"),this.enum=n}super._update(r)}_appendCharRaw(e,n){n===void 0&&(n={});const r=Math.min(this.nearestInputPos(0,oe.FORCE_RIGHT),this.value.length),i=this.enum.filter(l=>this.matchValue(l,this.unmaskedValue+e,r));if(i.length){i.length===1&&this._forEachBlocksInRange(0,this.value.length,(a,o)=>{const s=i[0][o];o>=this.value.length||s===a.value||(a.reset(),a._appendChar(s,n))});const l=super._appendCharRaw(i[0][this.value.length],n);return i.length===1&&i[0].slice(this.unmaskedValue.length).split("").forEach(a=>l.aggregate(super._appendCharRaw(a))),l}return new xe({skip:!this.isComplete})}extractTail(e,n){return e===void 0&&(e=0),n===void 0&&(n=this.displayValue.length),new an("",e)}remove(e,n){if(e===void 0&&(e=0),n===void 0&&(n=this.displayValue.length),e===n)return new xe;const r=Math.min(super.nearestInputPos(0,oe.FORCE_RIGHT),this.value.length);let i;for(i=e;i>=0&&!(this.enum.filter(o=>this.matchValue(o,this.value.slice(r,i),r)).length>1);--i);const l=super.remove(i,n);return l.tailShift+=i-e,l}get isComplete(){return this.enum.indexOf(this.value)>=0}}pi.DEFAULTS={...bt.DEFAULTS,matchValue:(t,e,n)=>t.indexOf(e,n)===n};Ce.MaskedEnum=pi;class Xh extends gt{updateOptions(e){super.updateOptions(e)}_update(e){super._update({...e,validate:e.mask})}}Ce.MaskedFunction=Xh;var es;class Pt extends gt{constructor(e){super({...Pt.DEFAULTS,...e})}updateOptions(e){super.updateOptions(e)}_update(e){super._update(e),this._updateRegExps()}_updateRegExps(){const e="^"+(this.allowNegative?"[+|\\-]?":""),n="\\d*",r=(this.scale?"("+Ti(this.radix)+"\\d{0,"+this.scale+"})?":"")+"$";this._numberRegExp=new RegExp(e+n+r),this._mapToRadixRegExp=new RegExp("["+this.mapToRadix.map(Ti).join("")+"]","g"),this._thousandsSeparatorRegExp=new RegExp(Ti(this.thousandsSeparator),"g")}_removeThousandsSeparators(e){return e.replace(this._thousandsSeparatorRegExp,"")}_insertThousandsSeparators(e){const n=e.split(this.radix);return n[0]=n[0].replace(/\B(?=(\d{3})+(?!\d))/g,this.thousandsSeparator),n.join(this.radix)}doPrepareChar(e,n){n===void 0&&(n={});const[r,i]=super.doPrepareChar(this._removeThousandsSeparators(this.scale&&this.mapToRadix.length&&(n.input&&n.raw||!n.input&&!n.raw)?e.replace(this._mapToRadixRegExp,this.radix):e),n);return e&&!r&&(i.skip=!0),r&&!this.allowPositive&&!this.value&&r!=="-"&&i.aggregate(this._appendChar("-")),[r,i]}_separatorsCount(e,n){n===void 0&&(n=!1);let r=0;for(let i=0;i<e;++i)this._value.indexOf(this.thousandsSeparator,i)===i&&(++r,n&&(e+=this.thousandsSeparator.length));return r}_separatorsCountFromSlice(e){return e===void 0&&(e=this._value),this._separatorsCount(this._removeThousandsSeparators(e).length,!0)}extractInput(e,n,r){return e===void 0&&(e=0),n===void 0&&(n=this.displayValue.length),[e,n]=this._adjustRangeWithSeparators(e,n),this._removeThousandsSeparators(super.extractInput(e,n,r))}_appendCharRaw(e,n){n===void 0&&(n={});const r=n.tail&&n._beforeTailState?n._beforeTailState._value:this._value,i=this._separatorsCountFromSlice(r);this._value=this._removeThousandsSeparators(this.value);const l=this._value;this._value+=e;const a=this.number;let o=!isNaN(a),s=!1;if(o){let E;this.min!=null&&this.min<0&&this.number<this.min&&(E=this.min),this.max!=null&&this.max>0&&this.number>this.max&&(E=this.max),E!=null&&(this.autofix?(this._value=this.format(E,this).replace(Pt.UNMASKED_RADIX,this.radix),s||(s=l===this._value&&!n.tail)):o=!1),o&&(o=!!this._value.match(this._numberRegExp))}let u;o?u=new xe({inserted:this._value.slice(l.length),rawInserted:s?"":e,skip:s}):(this._value=l,u=new xe),this._value=this._insertThousandsSeparators(this._value);const c=n.tail&&n._beforeTailState?n._beforeTailState._value:this._value,m=this._separatorsCountFromSlice(c);return u.tailShift+=(m-i)*this.thousandsSeparator.length,u}_findSeparatorAround(e){if(this.thousandsSeparator){const n=e-this.thousandsSeparator.length+1,r=this.value.indexOf(this.thousandsSeparator,n);if(r<=e)return r}return-1}_adjustRangeWithSeparators(e,n){const r=this._findSeparatorAround(e);r>=0&&(e=r);const i=this._findSeparatorAround(n);return i>=0&&(n=i+this.thousandsSeparator.length),[e,n]}remove(e,n){e===void 0&&(e=0),n===void 0&&(n=this.displayValue.length),[e,n]=this._adjustRangeWithSeparators(e,n);const r=this.value.slice(0,e),i=this.value.slice(n),l=this._separatorsCount(r.length);this._value=this._insertThousandsSeparators(this._removeThousandsSeparators(r+i));const a=this._separatorsCountFromSlice(r);return new xe({tailShift:(a-l)*this.thousandsSeparator.length})}nearestInputPos(e,n){if(!this.thousandsSeparator)return e;switch(n){case oe.NONE:case oe.LEFT:case oe.FORCE_LEFT:{const r=this._findSeparatorAround(e-1);if(r>=0){const i=r+this.thousandsSeparator.length;if(e<i||this.value.length<=i||n===oe.FORCE_LEFT)return r}break}case oe.RIGHT:case oe.FORCE_RIGHT:{const r=this._findSeparatorAround(e);if(r>=0)return r+this.thousandsSeparator.length}}return e}doCommit(){if(this.value){const e=this.number;let n=e;this.min!=null&&(n=Math.max(n,this.min)),this.max!=null&&(n=Math.min(n,this.max)),n!==e&&(this.unmaskedValue=this.format(n,this));let r=this.value;this.normalizeZeros&&(r=this._normalizeZeros(r)),this.padFractionalZeros&&this.scale>0&&(r=this._padFractionalZeros(r)),this._value=r}super.doCommit()}_normalizeZeros(e){const n=this._removeThousandsSeparators(e).split(this.radix);return n[0]=n[0].replace(/^(\D*)(0*)(\d*)/,(r,i,l,a)=>i+a),e.length&&!/\d$/.test(n[0])&&(n[0]=n[0]+"0"),n.length>1&&(n[1]=n[1].replace(/0*$/,""),n[1].length||(n.length=1)),this._insertThousandsSeparators(n.join(this.radix))}_padFractionalZeros(e){if(!e)return e;const n=e.split(this.radix);return n.length<2&&n.push(""),n[1]=n[1].padEnd(this.scale,"0"),n.join(this.radix)}doSkipInvalid(e,n,r){n===void 0&&(n={});const i=this.scale===0&&e!==this.thousandsSeparator&&(e===this.radix||e===Pt.UNMASKED_RADIX||this.mapToRadix.includes(e));return super.doSkipInvalid(e,n,r)&&!i}get unmaskedValue(){return this._removeThousandsSeparators(this._normalizeZeros(this.value)).replace(this.radix,Pt.UNMASKED_RADIX)}set unmaskedValue(e){super.unmaskedValue=e}get typedValue(){return this.parse(this.unmaskedValue,this)}set typedValue(e){this.rawInputValue=this.format(e,this).replace(Pt.UNMASKED_RADIX,this.radix)}get number(){return this.typedValue}set number(e){this.typedValue=e}get allowNegative(){return this.min!=null&&this.min<0||this.max!=null&&this.max<0}get allowPositive(){return this.min!=null&&this.min>0||this.max!=null&&this.max>0}typedValueEquals(e){return(super.typedValueEquals(e)||Pt.EMPTY_VALUES.includes(e)&&Pt.EMPTY_VALUES.includes(this.typedValue))&&!(e===0&&this.value==="")}}es=Pt;Pt.UNMASKED_RADIX=".";Pt.EMPTY_VALUES=[...gt.EMPTY_VALUES,0];Pt.DEFAULTS={...gt.DEFAULTS,mask:Number,radix:",",thousandsSeparator:"",mapToRadix:[es.UNMASKED_RADIX],min:Number.MIN_SAFE_INTEGER,max:Number.MAX_SAFE_INTEGER,scale:2,normalizeZeros:!0,padFractionalZeros:!1,parse:Number,format:t=>t.toLocaleString("en-US",{useGrouping:!1,maximumFractionDigits:20})};Ce.MaskedNumber=Pt;const ta={MASKED:"value",UNMASKED:"unmaskedValue",TYPED:"typedValue"};function ts(t,e,n){e===void 0&&(e=ta.MASKED),n===void 0&&(n=ta.MASKED);const r=hn(t);return i=>r.runIsolated(l=>(l[e]=i,l[n]))}function Zh(t,e,n,r){return ts(e,n,r)(t)}Ce.PIPE_TYPE=ta;Ce.createPipe=ts;Ce.pipe=Zh;class em extends bt{get repeatFrom(){var e;return(e=Array.isArray(this.repeat)?this.repeat[0]:this.repeat===1/0?0:this.repeat)!=null?e:0}get repeatTo(){var e;return(e=Array.isArray(this.repeat)?this.repeat[1]:this.repeat)!=null?e:1/0}constructor(e){super(e)}updateOptions(e){super.updateOptions(e)}_update(e){var n,r,i;const{repeat:l,...a}=Lr(e);this._blockOpts=Object.assign({},this._blockOpts,a);const o=hn(this._blockOpts);this.repeat=(n=(r=l??o.repeat)!=null?r:this.repeat)!=null?n:1/0,super._update({mask:"m".repeat(Math.max(this.repeatTo===1/0&&((i=this._blocks)==null?void 0:i.length)||0,this.repeatFrom)),blocks:{m:o},eager:o.eager,overwrite:o.overwrite,skipInvalid:o.skipInvalid,lazy:o.lazy,placeholderChar:o.placeholderChar,displayChar:o.displayChar})}_allocateBlock(e){if(e<this._blocks.length)return this._blocks[e];if(this.repeatTo===1/0||this._blocks.length<this.repeatTo)return this._blocks.push(hn(this._blockOpts)),this.mask+="m",this._blocks[this._blocks.length-1]}_appendCharRaw(e,n){n===void 0&&(n={});const r=new xe;for(let s=(i=(l=this._mapPosToBlock(this.displayValue.length))==null?void 0:l.index)!=null?i:Math.max(this._blocks.length-1,0),u,c;u=(a=this._blocks[s])!=null?a:c=!c&&this._allocateBlock(s);++s){var i,l,a,o;const m=u._appendChar(e,{...n,_beforeTailState:(o=n._beforeTailState)==null||(o=o._blocks)==null?void 0:o[s]});if(m.skip&&c){this._blocks.pop(),this.mask=this.mask.slice(1);break}if(r.aggregate(m),m.consumed)break}return r}_trimEmptyTail(e,n){var r,i;e===void 0&&(e=0);const l=Math.max(((r=this._mapPosToBlock(e))==null?void 0:r.index)||0,this.repeatFrom,0);let a;n!=null&&(a=(i=this._mapPosToBlock(n))==null?void 0:i.index),a==null&&(a=this._blocks.length-1);let o=0;for(let s=a;l<=s&&!this._blocks[s].unmaskedValue;--s,++o);o&&(this._blocks.splice(a-o+1,o),this.mask=this.mask.slice(o))}reset(){super.reset(),this._trimEmptyTail()}remove(e,n){e===void 0&&(e=0),n===void 0&&(n=this.displayValue.length);const r=super.remove(e,n);return this._trimEmptyTail(e,n),r}totalInputPositions(e,n){return e===void 0&&(e=0),n==null&&this.repeatTo===1/0?1/0:super.totalInputPositions(e,n)}get state(){return super.state}set state(e){this._blocks.length=e._blocks.length,this.mask=this.mask.slice(0,this._blocks.length),super.state=e}}Ce.RepeatBlock=em;try{globalThis.IMask=Ce}catch{}var tm=(t={},e=null)=>({apply:["TextElement","PhoneElement"],props:{mask:{required:!1,type:[String,Object,Array,Function]},unmask:{require:!1,type:Boolean,default:!1},allowIncomplete:{require:!1,type:Boolean,default:!1}},setup(n,r,i){const{formatLoad:l,mask:a,inputType:o,unmask:s,allowIncomplete:u,name:c}=rt(n),{nullValue:m,value:E,el$:g,path:b,form$:L,defaultValue:x,resetting:I,resetValidators:B,input:_,mask:O,inputType:H}=i;let R=j((()=>!a.value&&O?O.value:a.value)),Z=j((()=>!o?.value&&H?H.value:o.value));if(!R?.value)return i;const U=ce(null),P=ce(E.value),ae=ce([]),ne=ce(!1),K=j((()=>typeof t=="function"?t(e):t)),le=j((()=>{let D=typeof R.value=="function"?st(R.value):me(R.value);return K.value.definitions&&(D={...D,definitions:ge({...K.value.definitions,...D.definitions})}),K.value.blocks&&(D={...D,blocks:ge({...K.value.blocks,...D.blocks})}),D.definitions&&(D={...D,definitions:ge(D.definitions)}),D.blocks&&(D={...D,blocks:ge(D.blocks)}),D})),we=j({get:()=>P.value,set:D=>P.value=D}),he=j((()=>[void 0,null,""].indexOf(we.value)!==-1)),me=D=>typeof D=="string"?{mask:ve(D)}:D instanceof RegExp?{mask:D}:Array.isArray(D)?D.map(me):D&&typeof D=="object"?Ye(D):{mask:D},ge=D=>Object.keys(D).reduce(((se,_e)=>({...se,[_e]:me(D[_e])})),{}),Ye=D=>{let se={...D};return D.mask==="number"&&(se.mask=Number),D.mask==="range"&&(se.mask=e.MaskedRange),D.mask==="enum"&&(se.mask=e.MaskedEnum),D.mask==="date"&&(se.mask=Date),D.placeholder!==void 0&&(se.lazy=!se.placeholder),D.caseInsensitive===void 0||D.matchValue||(se.matchValue=pe),D.dispatch&&(se.dispatch=(_e,tt)=>D.dispatch(_e,tt,g.value,L.value)),Array.isArray(D.mask)&&(se.mask=D.mask.map(me),se.dispatch||(D.mask.some((_e=>_e.startsWith))&&(se.dispatch=(_e,tt)=>{const wt=(tt.value+_e).replace(/\D/g,"");return tt.compiledMasks.find((ut=>Array.isArray(ut.startsWith)?ut.startsWith.some((yt=>wt.indexOf(yt)===0)):wt.indexOf(ut.startsWith)===0))}),D.element&&(se.dispatch=(_e,tt)=>{let wt=L.value.el$(D.element)?.value;return tt.compiledMasks.find((ut=>ut.when==wt||!ut.when))}))),D.blocks&&(se.blocks=Object.keys(D.blocks).reduce(((_e,tt)=>({..._e,[tt]:me(D.blocks[tt])})),{})),se},be=()=>{we.value=U.value.displayValue,u.value||U.value.masked.isComplete?E.value=s.value?U.value.masked.unmaskedValue:U.value.value:E.value=m.value},fe=()=>{U.value&&W(),U.value=e(g.value.input,le.value),U.value.on("accept",(()=>{be()})),g.value.resetting=!0,be(),$n((()=>{g.value.resetting=!1})),ae.value.map((D=>D())),le.value?.element&&ae.value.push(je(j((()=>L.value.el$(le.value.element).value)),(()=>{ne.value?ne.value=!1:we.value=m.value,re()})))},W=()=>{U.value&&U.value.destroy()},re=()=>{$n((()=>{fe()}))},st=D=>me(D(e)),ve=D=>D.replace(/\\\\/g,"\\"),pe=(D,se,_e)=>e.MaskedEnum.DEFAULTS.matchValue(D.toLowerCase(),se.toLowerCase(),_e),F=()=>Z.value==="text"||(console.error(`Input mask only works with type="text" (found at: '${b.value}').`),!1);return Mr((()=>{F()&&fe()})),je(Z,(D=>{F()})),je(le,((D,se)=>{U.value&&JSON.stringify(D)!==JSON.stringify(se)&&fe()}),{deep:!0}),{...i,Mask:U,destroyMask:W,initMask:fe,syncMask:be,refreshMask:re,handleInput:()=>{},model:we,load:(D,se=!1)=>{ne.value=!0,E.value=m.value;let _e=se&&l.value?l.value(D,L.value):D;E.value=_e,U.value&&(U.value[s.value?"unmaskedValue":"value"]=typeof _e=="number"?_e.toString():_e)},update:D=>{ne.value=!0,E.value=m.value,E.value=D,U.value&&(U.value[s.value?"unmaskedValue":"value"]=typeof D=="number"?D.toString():D)},clear:()=>{_.value.value="",we.value=m.value,E.value=m.value,fe()},reset:()=>{I.value=!0,_.value.value=x.value,we.value=x.value,E.value=x.value,B(),fe()},empty:he}}}),nm=t=>tm(t,Ce);var Ca={};function rm(t,e,n,r,i,l){const a=J("FormElements");return p(),C("form",{class:h(t.classes.form),onSubmit:e[0]||(e[0]=Le((...o)=>t.submit&&t.submit(...o),["prevent"]))},[M(t.$slots,"empty",{classes:t.classes},()=>[t.showMessages?(p(),S(N("FormMessages"),{key:0})):k("v-if",!0),t.showErrors?(p(),S(N("FormErrors"),{key:1})):k("v-if",!0),t.showLanguages?(p(),S(N("FormLanguages"),{key:2})):k("v-if",!0),t.showTabs?(p(),S(N("FormTabs"),{key:3})):k("v-if",!0),t.showSteps?(p(),S(N("FormSteps"),{key:4})):k("v-if",!0),De(a,null,{default:f(()=>[M(t.$slots,"default")]),_:3}),t.showStepsControls?(p(),S(N("FormStepsControls"),{key:5})):k("v-if",!0)])],34)}Ca.render=rm;Ca.__file="themes/blank/templates/Vueform.vue";var ns={name:"Vueform",render:Ca.render,data(){return{merge:!0,defaultClasses:{form:""}}}};ns.__file="themes/vueform/templates/Vueform.vue";var Ea={};const im=["innerHTML"];function am(t,e,n,r,i,l){return p(),C("div",{class:h(t.classes.container)},[(p(!0),C(ie,null,de(t.errors,(a,o,s)=>(p(),C("div",{class:h(t.classes.error),innerHTML:a,key:s},null,10,im))),128))],2)}Ea.render=am;Ea.__file="themes/blank/templates/FormErrors.vue";var rs={name:"FormErrors",render:Ea.render,data(){return{merge:!0,defaultClasses:{container:"vf-errors",container_sm:"vf-errors-sm",container_md:"",container_lg:"vf-errors-lg",error:"",$container:(t,{Size:e})=>[t.container,t[`container_${e}`]]}}}};function te(t,e){e===void 0&&(e={});var n=e.insertAt;if(!(!t||typeof document>"u")){var r=document.head||document.getElementsByTagName("head")[0],i=document.createElement("style");i.type="text/css",n==="top"&&r.firstChild?r.insertBefore(i,r.firstChild):r.appendChild(i),i.styleSheet?i.styleSheet.cssText=t:i.appendChild(document.createTextNode(t))}}var lm=`.vf-errors {
  background: var(--vf-bg-danger);
  color: var(--vf-color-danger);
  border-radius: var(--vf-radius-input);
  margin-bottom: var(--vf-gutter);
  font-size: var(--vf-font-size);
  line-height: var(--vf-line-height);
  letter-spacing: var(--vf-letter-spacing);
  padding: 0.5rem 0.75rem;
}

.vf-errors.vf-errors-sm {
  border-radius: var(--vf-radius-input-sm);
  margin-bottom: var(--vf-gutter-sm);
  font-size: var(--vf-font-size-sm);
  line-height: var(--vf-line-height-sm);
  letter-spacing: var(--vf-letter-spacing-sm);
  padding: 0.5rem 0.75rem;
}

.vf-errors.vf-errors-lg {
  border-radius: var(--vf-radius-input-lg);
  margin-bottom: var(--vf-gutter-lg);
  font-size: var(--vf-font-size-lg);
  line-height: var(--vf-line-height-lg);
  letter-spacing: var(--vf-letter-spacing-lg);
  padding: 0.75rem 1rem;
}`;te(lm);rs.__file="themes/vueform/templates/FormErrors.vue";var Aa={};const om=["innerHTML"];function sm(t,e,n,r,i,l){return p(),C("div",{class:h(t.classes.container)},[(p(!0),C(ie,null,de(t.messages,(a,o,s)=>(p(),C("div",{class:h(t.classes.message),innerHTML:a,key:s},null,10,om))),128))],2)}Aa.render=sm;Aa.__file="themes/blank/templates/FormMessages.vue";var is={name:"FormMessages",render:Aa.render,data(){return{merge:!0,defaultClasses:{container:"vf-messages",container_sm:"vf-messages-sm",container_md:"",container_lg:"vf-messages-lg",message:"",$container:(t,{Size:e})=>[t.container,t[`container_${e}`]]}}}},um=`.vf-messages {
  background: var(--vf-bg-success);
  color: var(--vf-color-success);
  border-radius: var(--vf-radius-input);
  margin-bottom: var(--vf-gutter);
  font-size: var(--vf-font-size);
  line-height: var(--vf-line-height);
  letter-spacing: var(--vf-letter-spacing);
  padding: 0.5rem 0.75rem;
}

.vf-messages.vf-messages-sm {
  border-radius: var(--vf-radius-input-sm);
  margin-bottom: var(--vf-gutter-sm);
  font-size: var(--vf-font-size-sm);
  line-height: var(--vf-line-height-sm);
  letter-spacing: var(--vf-letter-spacing-sm);
  padding: 0.5rem 0.75rem;
}

.vf-messages.vf-messages-lg {
  border-radius: var(--vf-radius-input-lg);
  margin-bottom: var(--vf-gutter-lg);
  font-size: var(--vf-font-size-lg);
  line-height: var(--vf-line-height-lg);
  letter-spacing: var(--vf-letter-spacing-lg);
  padding: 0.75rem 1rem;
}`;te(um);is.__file="themes/vueform/templates/FormMessages.vue";var La={};function dm(t,e,n,r,i,l){const a=J("FormLanguage");return p(),C("ul",{class:h(t.classes.container)},[M(t.$slots,"default",{},()=>[(p(!0),C(ie,null,de(t.languages,(o,s,u)=>(p(),S(a,{language:o,code:s,key:u,onSelect:t.handleSelect},null,8,["language","code","onSelect"]))),128))])],2)}La.render=dm;La.__file="themes/blank/templates/FormLanguages.vue";var as={name:"FormLanguages",render:La.render,data(){return{merge:!0,defaultClasses:{container:"vf-languages",container_sm:"vf-languages-sm",container_md:"",container_lg:"vf-languages-lg",$container:(t,{Size:e})=>[t.container,t[`container_${e}`]]}}}},cm=`.vf-languages {
  display: flex;
  align-items: center;
  justify-content: space-between;
  list-style: none;
  padding: 0;
  margin: 0 0 var(--vf-gutter-lg) 0;
  font-size: var(--vf-font-size);
  line-height: var(--vf-line-height);
  letter-spacing: var(--vf-letter-spacing);
}

.vf-languages.vf-languages-sm {
  margin: 0 0 var(--vf-gutter) 0;
  font-size: var(--vf-font-size-sm);
  line-height: var(--vf-line-height-sm);
  letter-spacing: var(--vf-letter-spacing-sm);
}

.vf-languages.vf-languages-lg {
  margin: 0 0 var(--vf-gutter-lg) 0;
  font-size: var(--vf-font-size-lg);
  line-height: var(--vf-line-height-lg);
  letter-spacing: var(--vf-letter-spacing-lg);
}`;te(cm);as.__file="themes/vueform/templates/FormLanguages.vue";var xa={};function pm(t,e,n,r,i,l){return p(),C("li",{class:h(t.classes.container)},[d("a",{href:"#",class:h(t.classes.wrapper),onClick:e[0]||(e[0]=Le((...a)=>t.select&&t.select(...a),["prevent"]))},Re(t.language),3)],2)}xa.render=pm;xa.__file="themes/blank/templates/FormLanguage.vue";var ls={name:"FormLanguage",render:xa.render,data(){return{merge:!0,defaultClasses:{container:"vf-language",wrapper:"vf-language-wrapper",wrapper_sm:"vf-language-wrapper-sm",wrapper_md:"",wrapper_lg:"vf-language-wrapper-lg",wrapper_active:"vf-language-wrapper-active",wrapper_inactive:"",$wrapper:(t,{selected:e,Size:n})=>[t.wrapper,t[`wrapper_${n}`],e?t.wrapper_active:t.wrapper_inactive]}}}},fm=`.vf-language {
  flex-grow: 1;
  flex-shrink: 1;
  width: 100%;
}

.vf-language-wrapper {
  padding: 0.5rem 1rem;
  display: block;
  margin-left: 1px;
  margin-right: 1px;
  text-decoration: none;
  border-bottom: 2px solid transparent;
  color: var(--vf-color-input);
  text-align: center;
}

.vf-language-wrapper:hover {
  text-decoration: none;
}

.vf-language-wrapper.vf-language-wrapper-sm {
  padding: 0.375rem 0.875rem;
}

.vf-language-wrapper.vf-language-wrapper-lg {
  padding: 0.5rem 1rem;
}

.vf-language-wrapper.vf-language-wrapper-active {
  border-color: var(--vf-primary);
}

.vf-language-wrapper.vf-language-wrapper-invalid {
  border-color: var(--vf-danger);
  color: var(--vf-color-danger);
}`;te(fm);ls.__file="themes/vueform/templates/FormLanguage.vue";var Ta={};function vm(t,e,n,r,i,l){const a=J("FormTab");return p(),C("ul",{class:h(t.classes.container),role:"tablist"},[M(t.$slots,"default",{},()=>[(p(!0),C(ie,null,de(t.tabs,(o,s,u)=>(p(),S(a,V({ref_for:!0},o,{name:s,index:u,key:s}),null,16,["name","index"]))),128))])],2)}Ta.render=vm;Ta.__file="themes/blank/templates/FormTabs.vue";var os={name:"FormTabs",render:Ta.render,data(){return{merge:!0,defaultClasses:{container:"vf-tabs",container_sm:"vf-tabs-sm",container_md:"",container_lg:"vf-tabs-lg",$container:(t,{Size:e})=>[t.container,t[`container_${e}`]]}}}},hm=`.vf-tabs {
  display: flex;
  align-items: flex-end;
  list-style: none;
  padding: 0;
  margin: 0 0 var(--vf-gutter) 0;
  font-size: var(--vf-font-size);
  line-height: var(--vf-line-height);
  letter-spacing: var(--vf-letter-spacing);
}

.vf-tabs.vf-tabs-sm {
  margin: 0 0 var(--vf-gutter) 0;
  font-size: var(--vf-font-size-sm);
  line-height: var(--vf-line-height-sm);
  letter-spacing: var(--vf-letter-spacing-sm);
}

.vf-tabs.vf-tabs-lg {
  margin: 0 0 var(--vf-gutter-lg) 0;
  font-size: var(--vf-font-size-lg);
  line-height: var(--vf-line-height-lg);
  letter-spacing: var(--vf-letter-spacing-lg);
}`;te(hm);os.__file="themes/vueform/templates/FormTabs.vue";var Sa={};const mm=["aria-selected"],gm={key:0},bm=["innerHTML"];function wm(t,e,n,r,i,l){return Te((p(),C("li",{class:h(t.classes.container)},[d("div",{class:h(t.classes.wrapper),tabindex:"0",role:"tab","aria-selected":t.active,onClick:e[0]||(e[0]=Le((...a)=>t.select&&t.select(...a),["prevent"])),onKeypress:e[1]||(e[1]=Ue(Le((...a)=>t.select&&t.select(...a),["prevent"]),["enter","space"]))},[M(t.$slots,"default",{},()=>[k(" If label is a component "),t.isLabelComponent?(p(),C("span",gm,[(p(),S(N(t.tabLabel),{form$:t.form$},null,8,["form$"]))])):(p(),C(ie,{key:1},[k(" If label is HTML "),d("span",{innerHTML:t.tabLabel},null,8,bm)],2112))])],42,mm)],2)),[[Ve,t.visible]])}Sa.render=wm;Sa.__file="themes/blank/templates/FormTab.vue";var ss={name:"FormTab",render:Sa.render,data(){return{merge:!0,defaultClasses:{container:"vf-tab",wrapper:"vf-tab-wrapper",wrapper_active:"vf-tab-wrapper-active",wrapper_inactive:"",wrapper_valid:"",wrapper_invalid:"vf-tab-wrapper-invalid",wrapper_sm:"vf-tab-wrapper-sm",wrapper_md:"",wrapper_lg:"vf-tab-wrapper-lg",$container:(t,{})=>[t.container],$wrapper:(t,{active:e,invalid:n,Size:r})=>[t.wrapper,t[`wrapper_${r}`],e?t.wrapper_active:t.wrapper_inactive,n?t.wrapper_invalid:t.wrapper_valid]}}}},ym=`.vf-tab-wrapper {
  padding: 0.5rem 1rem;
  display: block;
  margin-left: 1px;
  margin-right: 1px;
  text-decoration: none;
  border-bottom: 2px solid transparent;
  color: var(--vf-color-input);
}

.vf-tab-wrapper:hover {
  text-decoration: none;
}

.vf-tab-wrapper.vf-tab-wrapper-sm {
  padding: 0.375rem 0.875rem;
}

.vf-tab-wrapper.vf-tab-wrapper-lg {
  padding: 0.5rem 1rem;
}

.vf-tab-wrapper.vf-tab-wrapper-active {
  border-color: var(--vf-primary);
}

.vf-tab-wrapper.vf-tab-wrapper-invalid {
  border-color: var(--vf-danger);
  color: var(--vf-color-danger);
}`;te(ym);ss.__file="themes/vueform/templates/FormTab.vue";var _a={};function km(t,e,n,r,i,l){const a=J("FormStep");return p(),C("div",{class:h(t.classes.container)},[d("ul",{class:h(t.classes.wrapper),role:"tablist"},[M(t.$slots,"default",{},()=>[(p(!0),C(ie,null,de(t.steps,(o,s)=>(p(),S(a,V({ref_for:!0},o,{name:s,key:s}),null,16,["name"]))),128))])],2)],2)}_a.render=km;_a.__file="themes/blank/templates/FormSteps.vue";var us={name:"FormSteps",render:_a.render,data(){return{merge:!0,defaultClasses:{container:"vf-steps-container",container_sm:"vf-steps-container-sm",container_md:"",container_lg:"vf-steps-container-lg",wrapper:"vf-steps-wrapper",$container:(t,{Size:e})=>[t.container,t[`container_${e}`]]}}}},Cm=`.vf-steps-container {
  width: 100%;
  position: relative;
  margin: 0 0 var(--vf-gutter-lg) 0;
  font-size: var(--vf-font-size);
  line-height: var(--vf-line-height);
  letter-spacing: var(--vf-letter-spacing);
}

.vf-steps-container:before {
  content: " ";
  display: inline-block;
  background: var(--vf-bg-passive);
  position: absolute;
  top: 0.375rem;
  left: 0.125rem;
  right: 0.125rem;
  height: 0.25rem;
}

.vf-steps-container.vf-steps-container-sm {
  margin: 0 0 var(--vf-gutter) 0;
  font-size: var(--vf-font-size-sm);
  line-height: var(--vf-line-height-sm);
  letter-spacing: var(--vf-letter-spacing-sm);
}

.vf-steps-container.vf-steps-container-lg {
  margin: 0 0 var(--vf-gutter-lg) 0;
  font-size: var(--vf-font-size-lg);
  line-height: var(--vf-line-height-lg);
  letter-spacing: var(--vf-letter-spacing-lg);
}

.vf-steps-wrapper {
  list-style: none;
  display: flex;
  justify-content: space-between;
  padding: 0;
  overflow-x: auto;
}`;te(Cm);us.__file="themes/vueform/templates/FormSteps.vue";var Ma={};function Em(t,e,n,r,i,l){const a=J("FormStepsControl");return p(),C("div",{class:h(t.classes.container)},[De(a,{type:"previous",labels:t.labels},{default:f(()=>[M(t.$slots,"previous")]),_:3},8,["labels"]),De(a,{type:"next",labels:t.labels},{default:f(()=>[M(t.$slots,"next")]),_:3},8,["labels"]),De(a,{type:"finish",labels:t.labels},{default:f(()=>[M(t.$slots,"finish")]),_:3},8,["labels"])],2)}Ma.render=Em;Ma.__file="themes/blank/templates/FormStepsControls.vue";var ds={name:"FormStepsControls",render:Ma.render,data(){return{merge:!0,defaultClasses:{container:"vf-steps-controls",container_sm:"vf-steps-controls-sm",container_md:"",container_lg:"vf-steps-controls-lg",$container:(t,{Size:e})=>[t.container,t[`container_${e}`]]}}}},Am=`.vf-steps-controls {
  display: flex;
  justify-content: space-between;
  margin: var(--vf-gutter-lg) 0 0 0;
  font-size: var(--vf-font-size);
  line-height: var(--vf-line-height);
  letter-spacing: var(--vf-letter-spacing);
}

.vf-steps-controls.vf-steps-controls-sm {
  margin: var(--vf-gutter) 0 0 0;
  font-size: var(--vf-font-size-sm);
  line-height: var(--vf-line-height-sm);
  letter-spacing: var(--vf-letter-spacing-md);
}

.vf-steps-controls.vf-steps-controls-lg {
  margin: var(--vf-gutter-lg) 0 0 0;
  font-size: var(--vf-font-size-lg);
  line-height: var(--vf-line-height-lg);
  letter-spacing: var(--vf-letter-spacing-lg);
}`;te(Am);ds.__file="themes/vueform/templates/FormStepsControls.vue";var Ia={};const Lm=["disabled"],xm=["innerHTML","disabled"],Tm=["disabled"];function Sm(t,e,n,r,i,l){return p(),C(ie,null,[k(" If label is a component "),t.visible&&t.label&&t.isLabelComponent?(p(),C("button",{key:0,disabled:t.isDisabled,class:h(t.classes.button),onClick:e[0]||(e[0]=Le((...a)=>t.handleClick&&t.handleClick(...a),["prevent"])),onKeypress:e[1]||(e[1]=Ue(Le((...a)=>t.handleClick&&t.handleClick(...a),["prevent"]),["enter","space"]))},[(p(),S(N(t.label),{step$:t.current$},null,8,["step$"]))],42,Lm)):t.visible&&t.label?(p(),C(ie,{key:1},[k(" If label is HTML "),d("button",{innerHTML:t.label,disabled:t.isDisabled,class:h(t.classes.button),onClick:e[2]||(e[2]=Le((...a)=>t.handleClick&&t.handleClick(...a),["prevent"])),onKeypress:e[3]||(e[3]=Ue(Le((...a)=>t.handleClick&&t.handleClick(...a),["prevent"]),["enter","space"]))},null,42,xm)],2112)):t.visible?(p(),C(ie,{key:2},[k(" If label is a slot "),d("button",{disabled:t.isDisabled,class:h(t.classes.button),onClick:e[4]||(e[4]=Le((...a)=>t.handleClick&&t.handleClick(...a),["prevent"])),onKeypress:e[5]||(e[5]=Ue(Le((...a)=>t.handleClick&&t.handleClick(...a),["prevent"]),["enter","space"]))},[M(t.$slots,"default")],42,Tm)],2112)):k("v-if",!0)],2112)}Ia.render=Sm;Ia.__file="themes/blank/templates/FormStepsControl.vue";var cs={name:"FormStepsControl",render:Ia.render,data(){return{merge:!0,defaultClasses:{button:"vf-btn",button_previous:"",button_previous_enabled:"vf-btn-secondary",button_previous_disabled:"vf-btn-secondary vf-btn-disabled",button_next:"",button_next_enabled:"vf-btn-primary",button_next_disabled:"vf-btn-primary vf-btn-disabled",button_next_loading:"vf-btn-loading vf-btn-loading-primary",button_finish:"",button_finish_enabled:"vf-btn-primary",button_finish_disabled:"vf-btn-primary vf-btn-disabled",button_finish_loading:"vf-btn-loading vf-btn-loading-primary",button_sm:"vf-btn-sm",button_md:"",button_lg:"vf-btn-lg",$button:(t,{isDisabled:e,isLoading:n,type:r,Size:i})=>[t.button,t[`button_${i}`],t[`button_${r}`],e?t[`button_${r}_disabled`]:t[`button_${r}_enabled`],n?t[`button_${r}_loading`]:null]}}}};cs.__file="themes/vueform/templates/FormStepsControl.vue";var Ba={};const _m=["tabindex","aria-selected"],Mm={key:0},Im=["innerHTML"];function Bm(t,e,n,r,i,l){return t.visible?(p(),C("li",{key:0,class:h(t.classes.container)},[d("a",{href:"",class:h(t.classes.wrapper),tabindex:t.isDisabled?-1:0,role:"tab","aria-selected":t.active,onClick:e[0]||(e[0]=Le((...a)=>t.select&&t.select(...a),["prevent"])),onKeypress:e[1]||(e[1]=Ue(Le((...a)=>t.select&&t.select(...a),["prevent"]),["enter","space"]))},[M(t.$slots,"default",{},()=>[k(" If label is a component "),t.isLabelComponent?(p(),C("span",Mm,[(p(),S(N(t.stepLabel),{form$:t.form$},null,8,["form$"]))])):(p(),C(ie,{key:1},[k(" If label is HTML "),d("span",{innerHTML:t.stepLabel},null,8,Im)],2112))])],42,_m)],2)):k("v-if",!0)}Ba.render=Bm;Ba.__file="themes/blank/templates/FormStep.vue";var ps={name:"FormStep",render:Ba.render,data(){return{merge:!0,defaultClasses:{container:"vf-step",wrapper:"",container_active:"vf-step-active",container_inactive:"",container_invalid:"vf-step-invalid",container_valid:"",container_disabled:"vf-step-disabled",container_enabled:"",container_completed:"vf-step-completed",container_incompleted:"",container_pending:"vf-step-pending",$container:(t,{active:e,isDisabled:n,completed:r,invalid:i,pending:l})=>[t.container,e?t.container_active:t.container_inactive,n?t.container_disabled:t.container_enabled,r?t.container_completed:t.container_incompleted,i?t.container_invalid:t.container_valid,l?t.container_pending:null]}}}},Dm=`.vf-step {
  display: block;
  position: relative;
  white-space: nowrap;
  flex: 1 1;
  text-align: center;
  padding: 1.25rem 0.625rem 0;
}

.vf-step a {
  text-decoration: none !important;
  color: inherit;
}

.vf-step a:hover, .vf-step a:focus, .vf-step a:active {
  text-decoration: none !important;
  color: inherit;
}

.vf-step a:before {
  content: " ";
  display: inline-block;
  width: 1rem;
  height: 1rem;
  position: absolute;
  background: var(--vf-primary);
  border-radius: 50%;
  left: 50%;
  transform: translateX(-50%);
  top: 0px;
}

.vf-step a:after {
  content: " ";
  display: inline-block;
  width: 0.5rem;
  height: 0.5rem;
  position: absolute;
  background: #FFFFFF;
  border-radius: 50%;
  left: calc(50% - 0.25rem);
  transform: scale(0);
  top: 0.25rem;
  transition: transform 0.3s ease-in-out;
}

.vf-step:first-of-type {
  padding-left: 0;
  text-align: left;
}

.vf-step:first-of-type:before {
  display: none;
}

.vf-step:first-of-type:after {
  left: 0;
}

.vf-step:first-of-type a:before {
  left: 0;
  transform: none;
}

.vf-step:first-of-type a:after {
  left: 0.25rem;
  transform: scale(0);
}

.vf-step:last-of-type {
  padding-right: 0;
  text-align: right;
}

.vf-step:last-of-type:after {
  display: none;
}

.vf-step:last-of-type:before {
  right: 0;
}

.vf-step:last-of-type a:before {
  right: 0;
  left: auto;
  left: initial;
  transform: none;
}

.vf-step:last-of-type a:after {
  left: auto;
  left: initial;
  transform: scale(0);
  right: 0.25rem;
}

.vf-step.vf-step-disabled:before {
  background: var(--vf-bg-passive);
  left: -100%;
}

.vf-step.vf-step-disabled a {
  color: var(--vf-color-passive);
}

.vf-step.vf-step-disabled a:before {
  background: var(--vf-bg-passive);
}

.vf-step.vf-step-completed + .vf-step:not(.vf-step-completed):before {
  content: " ";
  display: inline-block;
  background: var(--vf-primary);
  position: absolute;
  top: 0.375rem;
  left: 0px;
  right: 50%;
  height: 0.25rem;
}

.vf-step.vf-step-completed + .vf-step:last-of-type:before {
  right: 0px;
}

.vf-step.vf-step-completed:before {
  content: " ";
  display: inline-block;
  background: var(--vf-primary);
  position: absolute;
  top: 0.375rem;
  left: 0px;
  right: 0px;
  height: 0.25rem;
}

.vf-step.vf-step-completed a:after {
  mask-image: url('data:image/svg+xml;utf8,<svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="check" class="svg-inline--fa fa-check fa-w-16" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path fill="white" d="M173.898 439.404l-166.4-166.4c-9.997-9.997-9.997-26.206 0-36.204l36.203-36.204c9.997-9.998 26.207-9.998 36.204 0L192 312.69 432.095 72.596c9.997-9.997 26.207-9.997 36.204 0l36.203 36.204c9.997 9.997 9.997 26.206 0 36.204l-294.4 294.401c-9.998 9.997-26.207 9.997-36.204-.001z"></path></svg>');
  -webkit-mask-image: url('data:image/svg+xml;utf8,<svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="check" class="svg-inline--fa fa-check fa-w-16" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path fill="white" d="M173.898 439.404l-166.4-166.4c-9.997-9.997-9.997-26.206 0-36.204l36.203-36.204c9.997-9.998 26.207-9.998 36.204 0L192 312.69 432.095 72.596c9.997-9.997 26.207-9.997 36.204 0l36.203 36.204c9.997 9.997 9.997 26.206 0 36.204l-294.4 294.401c-9.998 9.997-26.207 9.997-36.204-.001z"></path></svg>');
  mask-size: 0.5rem 0.5rem;
  -webkit-mask-size: 0.5rem 0.5rem;
  mask-position: 0 0;
  -webkit-mask-position: 0 0;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: var(--vf-color-on-primary);
  border-radius: 0;
  transform: scale(1);
}

.vf-step.vf-step-active a:after {
  mask-image: none;
  -webkit-mask-image: none;
  background-color: var(--vf-color-on-primary);
  top: 0.25rem;
  transform: scale(1);
  border-radius: 50%;
}

.vf-step.vf-step-invalid a {
  color: var(--vf-bg-btn-danger);
}

.vf-step.vf-step-invalid a:before {
  background-color: var(--vf-bg-btn-danger);
}

.vf-step.vf-step-invalid a:after {
  mask-image: url('data:image/svg+xml;utf8,<svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="exclamation" class="svg-inline--fa fa-exclamation fa-w-6" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 192 512"><path fill="white" d="M176 432c0 44.112-35.888 80-80 80s-80-35.888-80-80 35.888-80 80-80 80 35.888 80 80zM25.26 25.199l13.6 272C39.499 309.972 50.041 320 62.83 320h66.34c12.789 0 23.331-10.028 23.97-22.801l13.6-272C167.425 11.49 156.496 0 142.77 0H49.23C35.504 0 24.575 11.49 25.26 25.199z"></path></svg>');
  -webkit-mask-image: url('data:image/svg+xml;utf8,<svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="exclamation" class="svg-inline--fa fa-exclamation fa-w-6" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 192 512"><path fill="white" d="M176 432c0 44.112-35.888 80-80 80s-80-35.888-80-80 35.888-80 80-80 80 35.888 80 80zM25.26 25.199l13.6 272C39.499 309.972 50.041 320 62.83 320h66.34c12.789 0 23.331-10.028 23.97-22.801l13.6-272C167.425 11.49 156.496 0 142.77 0H49.23C35.504 0 24.575 11.49 25.26 25.199z"></path></svg>');
  mask-size: 0.5rem 0.5rem;
  -webkit-mask-size: 0.5rem 0.5rem;
  mask-position: 0 0;
  -webkit-mask-position: 0 0;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: var(--vf-color-btn-danger);
  width: 0.5rem;
  height: 0.5rem;
  top: 0.25rem;
  border-radius: 0;
}

.vf-step.vf-step-invalid.vf-step-active a:after {
  mask-image: none;
  -webkit-mask-image: none;
  background-color: var(--vf-color-on-primary);
  transform: scale(1);
  border-radius: 50%;
}

.vf-step.vf-step-pending a:after {
  animation: 1s linear infinite step-loading;
  background: var(--vf-color-btn-danger);
  top: 0.25rem;
  border-radius: 50%;
}

@keyframes step-loading {
  0% {
    transform: scale(0.5);
  }

  20% {
    transform: scale(1.2);
  }

  100% {
    transform: scale(0.5);
  }
}`;te(Dm);ps.__file="themes/vueform/templates/FormStep.vue";var Da={};function Rm(t,e,n,r,i,l){return p(),C("div",{class:h(t.classes.container)},[M(t.$slots,"default",{},()=>[(p(!0),C(ie,null,de(t.schema,(a,o)=>(p(),S(N(t.component(a)),V({ref_for:!0},a,{name:o,key:o}),null,16,["name"]))),128))])],2)}Da.render=Rm;Da.__file="themes/blank/templates/FormElements.vue";var fs={name:"FormElements",render:Da.render,data(){return{merge:!0,defaultClasses:{container:"vf-row",container_sm:"vf-row-sm",container_md:"",container_lg:"vf-row-lg",$container:(t,{Size:e})=>[t.container,t[`container_${e}`]]}}}},Fm="/* Some styles are contained in Vueform.vue */";te(Fm);fs.__file="themes/vueform/templates/FormElements.vue";var Ra={};function Om(t,e,n,r,i,l){const a=J("ElementLabel"),o=J("ElementText"),s=J("ElementDescription"),u=J("ElementError"),c=J("ElementMessage");return Te((p(),C("div",{class:h(t.classes.container)},[d("div",{class:h(t.classes.outerWrapper)},[De(a,null,{default:f(()=>[M(t.$slots,"label")]),info:f(()=>[M(t.$slots,"info")]),required:f(()=>[M(t.$slots,"required")]),_:3}),d("div",{class:h(t.classes.innerContainer)},[d("div",{class:h(t.classes.innerWrapperBefore)},[De(o,{type:"before"},{default:f(()=>[M(t.$slots,"before")]),_:3})],2),d("div",{class:h(t.classes.innerWrapper)},[M(t.$slots,"element")],2),d("div",{class:h(t.classes.innerWrapperAfter)},[De(o,{type:"between"},{default:f(()=>[M(t.$slots,"between")]),_:3}),De(s,null,{default:f(()=>[M(t.$slots,"description")]),_:3}),De(u),De(c),De(o,{type:"after"},{default:f(()=>[M(t.$slots,"after")]),_:3})],2)],2)],2)],2)),[[Ve,t.visible]])}Ra.render=Om;Ra.__file="themes/blank/templates/ElementLayout.vue";var vs={name:"ElementLayout",render:Ra.render,data(){return{merge:!0,defaultClasses:{container:"vf-element-layout",container_sm:"vf-element-layout-sm",container_md:"",container_lg:"vf-element-layout-lg",container_error:"vf-element-layout-error",outerWrapper:"vf-element-layout-outer-wrapper",innerContainer:"vf-layout-inner-container",innerWrapperBefore:"vf-layout-inner-wrapper-before",innerWrapper:"vf-layout-inner-wrapper",innerWrapperAfter:"vf-layout-inner-wrapper-after",$container:(t,{el$:e,Size:n})=>[t.container,t[`container_${n}`],e.columnsClasses.container,e.classes.container,!e.isStatic&&e.errors&&e.errors.length?t.container_error:null],$innerContainer:(t,{el$:e})=>[t.innerContainer,e.columnsClasses.innerContainer],$innerWrapper:(t,{el$:e})=>[t.innerWrapper,e.columnsClasses.wrapper]}}}},$m=`/* Some styles are contained in Vueform.vue */

.vf-element-layout {
  font-size: var(--vf-font-size);
  line-height: var(--vf-line-height);
  letter-spacing: var(--vf-letter-spacing);
}

.vf-element-layout.vf-element-layout-sm {
  font-size: var(--vf-font-size-sm);
  line-height: var(--vf-line-height-sm);
  letter-spacing: var(--vf-letter-spacing-sm);
}

.vf-element-layout.vf-element-layout-lg {
  font-size: var(--vf-font-size-lg);
  line-height: var(--vf-line-height-lg);
  letter-spacing: var(--vf-letter-spacing-lg);
}

.vf-layout-inner-container {
  flex: 1 1 0%;
  display: grid;
  grid-template-columns: repeat(12, minmax(0, 1fr));
}

.vf-layout-inner-container .vf-layout-inner-wrapper,
.vf-layout-inner-container .vf-layout-inner-wrapper-before,
.vf-layout-inner-container .vf-layout-inner-wrapper-after {
  padding-left: 0;
  padding-right: 0;
}

.vf-layout-inner-wrapper-before,
.vf-layout-inner-wrapper-after {
  grid-column: span 12/span 12;
  padding-left: var(--vf-gutter);
  padding-right: var(--vf-gutter);
}

.vf-element-layout-outer-wrapper {
  display: grid;
  grid-template-columns: repeat(12, minmax(0, 1fr));
}`;te($m);vs.__file="themes/vueform/templates/ElementLayout.vue";var Fa={};function Hm(t,e,n,r,i,l){const a=J("ElementLabel"),o=J("ElementText"),s=J("ElementDescription"),u=J("ElementError"),c=J("ElementMessage");return Te((p(),C("span",{class:h(t.classes.container)},[De(a,null,{default:f(()=>[M(t.$slots,"label")]),_:3}),De(o,{type:"before"},{default:f(()=>[M(t.$slots,"before")]),_:3}),M(t.$slots,"element"),De(o,{type:"between"},{default:f(()=>[M(t.$slots,"between")]),_:3}),De(s,null,{default:f(()=>[M(t.$slots,"description")]),_:3}),De(u),De(c),De(o,{type:"after"},{default:f(()=>[M(t.$slots,"after")]),_:3})],2)),[[Ve,t.visible]])}Fa.render=Hm;Fa.__file="themes/blank/templates/ElementLayoutInline.vue";var hs={name:"ElementLayoutInline",render:Fa.render,data(){return{merge:!0,defaultClasses:{container:"vf-inline-layout",container_error:"has-error",$container:(t,{el$:e})=>[t.container,!e.isStatic&&e.errors&&e.errors.length?t.container_error:null]}}}},Pm=`.vf-inline-layout {
  display: flex;
}`;te(Pm);hs.__file="themes/vueform/templates/ElementLayoutInline.vue";var Oa={};function zm(t,e,n,r,i,l){return p(),C("div",{class:h(t.classes.container)},[d("span",{class:h(t.classes.loader)},null,2)],2)}Oa.render=zm;Oa.__file="themes/blank/templates/ElementLoader.vue";var ms={name:"ElementLoader",render:Oa.render,data(){return{merge:!0,defaultClasses:{container:"vf-element-loader-container",loader:"vf-element-loader",loader_sm:"vf-element-loader-sm",loader_md:"",loader_lg:"vf-element-loader-lg",$loader:(t,{Size:e})=>[t.loader,t[`loader_${e}`]]}}}},Nm=`.vf-element-loader-container {
  position: relative;
  z-index: 1;
  order: 1;
}

.vf-element-loader {
  position: absolute;
  width: 1rem;
  height: 1rem;
  display: block;
  right: var(--vf-px-input);
  top: 50%;
  transform: translateY(-50%);
}

.vf-element-loader:before, .vf-element-loader:after {
  position: absolute;
  content: "";
  top: 50%;
  left: 50%;
  margin: -0.5rem 0 0 -0.5rem;
  width: 1rem;
  height: 1rem;
  border-radius: 100%;
  border-color: var(--vf-primary) transparent transparent;
  border-style: solid;
  border-width: 2px;
  box-shadow: 0 0 0 1px transparent;
  box-sizing: border-box;
}

.vf-element-loader:before {
  animation: vf-element-loader 2.4s infinite cubic-bezier(0.41, 0.26, 0.2, 0.62);
}

.vf-element-loader:after {
  animation: vf-element-loader 2.4s infinite cubic-bezier(0.51, 0.09, 0.21, 0.8);
}

.vf-element-loader.vf-element-loader-sm {
  right: var(--vf-px-input-sm);
}

.vf-element-loader.vf-element-loader-lg {
  right: var(--vf-px-input-lg);
}

@keyframes vf-element-loader {
  from {
    transform: rotate(0);
  }

  to {
    transform: rotate(2turn);
  }
}`;te(Nm);ms.__file="themes/vueform/templates/ElementLoader.vue";var $a={};const Vm=["innerHTML"];function jm(t,e,n,r,i,l){return p(),C("div",{class:h(t.classes.container)},[d("span",{class:h(t.classes.label),innerHTML:t.floating},null,10,Vm)],2)}$a.render=jm;$a.__file="themes/blank/templates/ElementLabelFloating.vue";var gs={name:"ElementLabelFloating",render:$a.render,data(){return{merge:!0,defaultClasses:{container:"vf-floating-wrapper",label:"vf-floating-label",label_enabled:"",label_disabled:"vf-floating-label-disabled",label_danger:"vf-floating-label-danger",label_success:"vf-floating-label-success",label_focused:"vf-floating-label-focus",label_sm:"vf-floating-label-sm",label_md:"",label_lg:"vf-floating-label-lg",label_invisible:"",label_visible:"vf-floating-label-visible",$label:(t,{visible:e,Size:n,el$:r})=>[t.label,t[`label_${n}`],e?t.label_visible:t.label_invisible,r.focused?t.label_focused:null,!r.isDisabled&&!r.isDanger&&!r.isSuccess?t.label_enabled:null,r.isDisabled?t.label_disabled:null,r.isDanger?t.label_danger:null,r.isSuccess?t.label_success:null]}}}},Um=`.vf-floating-wrapper {
  position: relative;
}

.vf-floating-label {
  position: absolute;
  z-index: 1;
  left: var(--vf-px-input);
  font-size: 0.6875rem;
  background-color: var(--vf-bg-input);
  padding: 0 1px;
  line-height: 1px;
  transition-property: box-shadow, color, background-color, border-color;
  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
  transition-duration: 200ms;
  opacity: 0;
  visibility: hidden;
  white-space: nowrap;
  color: var(--vf-color-floating);
  margin-top: var(--vf-floating-top);
}

.vf-floating-label.vf-floating-label-visible {
  opacity: 1;
  visibility: visible;
}

.vf-floating-label.vf-floating-label-sm {
  left: var(--vf-px-input-sm);
  margin-top: var(--vf-floating-top-sm);
}

.vf-floating-label.vf-floating-label-lg {
  left: var(--vf-px-input-lg);
  margin-top: var(--vf-floating-top-lg);
  background-color: transparent !important;
}

.vf-floating-label.vf-floating-label-disabled {
  background-color: var(--vf-bg-disabled);
}

.vf-floating-label.vf-floating-label-focus {
  background-color: var(--vf-bg-input-focus);
  color: var(--vf-color-floating-focus);
}

.vf-floating-label.vf-floating-label-danger {
  background-color: var(--vf-bg-input-danger);
  color: var(--vf-color-floating-danger);
}

.vf-floating-label.vf-floating-label-success {
  background-color: var(--vf-bg-input-success);
  color: var(--vf-color-floating-success);
}

.vf-input-group .vf-floating-label {
  top: calc(var(--vf-border-width-input-t) * -1);
}

[dir=rtl] .vf-floating-label {
  left: auto;
  right: var(--vf-px-input);
}

[dir=rtl] .vf-floating-label.vf-floating-label-sm {
  left: auto;
  right: var(--vf-px-input-sm);
}

[dir=rtl] .vf-floating-label.vf-floating-label-lg {
  left: auto;
  right: var(--vf-px-input-lg);
}`;te(Um);gs.__file="themes/vueform/templates/ElementLabelFloating.vue";var Ha={};const Wm=["for","id"],qm=["for","id"],Qm=["innerHTML"],Km=["for","id"],Gm=["for","id"];function Jm(t,e,n,r,i,l){const a=J("ElementInfo"),o=J("ElementRequired");return p(),C(ie,null,[k(" If label is a component "),t.label&&t.isLabelComponent?(p(),C("label",{key:0,class:h(t.classes.container),for:t.name,id:t.id},[d("span",{class:h(t.classes.wrapper)},[t.isLabelComponent?(p(),S(N(t.label),{key:0})):k("v-if",!0)],2),De(a,null,{default:f(()=>[M(t.$slots,"info")]),_:3}),De(o,null,{default:f(()=>[M(t.$slots,"required")]),_:3})],10,Wm)):t.label?(p(),C(ie,{key:1},[k(" If label is HTML "),d("label",{class:h(t.classes.container),for:t.name,id:t.id},[d("span",{class:h(t.classes.wrapper),innerHTML:t.label},null,10,Qm),De(a,null,{default:f(()=>[M(t.$slots,"info")]),_:3}),De(o,null,{default:f(()=>[M(t.$slots,"required")]),_:3})],10,qm)],2112)):t.isSlot?(p(),C(ie,{key:2},[k(" If label is a slot "),d("label",{class:h(t.classes.container),for:t.name,id:t.id},[d("span",{class:h(t.classes.wrapper)},[M(t.$slots,"default")],2),De(a,null,{default:f(()=>[M(t.$slots,"info")]),_:3}),De(o,null,{default:f(()=>[M(t.$slots,"required")]),_:3})],10,Km)],2112)):t.hasLabel?(p(),C(ie,{key:3},[k(" If labels are forced but has no value "),d("label",{class:h(t.classes.container),for:t.name,id:t.id},null,10,Gm)],2112)):k("v-if",!0)],2112)}Ha.render=Jm;Ha.__file="themes/blank/templates/ElementLabel.vue";var bs={name:"ElementLabel",render:Ha.render,data(){return{merge:!0,defaultClasses:{container:"vf-label",container_sm:"vf-label-sm",container_md:"",container_lg:"vf-label-lg",container_horizontal_sm:"vf-horizontal-label-sm",container_horizontal_md:"vf-horizontal-label",container_horizontal_lg:"vf-horizontal-label-lg",container_vertical_sm:"vf-vertical-label-sm",container_vertical_md:"vf-vertical-label",container_vertical_lg:"vf-vertical-label-lg",wrapper:"",$container:(t,{el$:e,Size:n})=>[t.container,t[`container_${n}`],e.inline?null:e.columnsClasses.label,e.computedCols.default.label<12?t[`container_horizontal_${n}`]:t[`container_vertical_${n}`],...Object.keys(e.computedCols).length>1?(e.$vueform.config.breakpoints||["sm","md","lg","xl","2xl"]).map(r=>e.computedCols[r]?.label?e.computedCols[r].label<12?t[`container_horizontal_${n}`].map(i=>`vf-${r}:${i}`).join(" "):t[`container_vertical_${n}`].map(i=>`vf-${r}:${i}`).join(" "):null):[]]}}}},Ym="/* Styles can be found at scss/_label.scss */";te(Ym);bs.__file="themes/vueform/templates/ElementLabel.vue";var Pa={};const Xm=["id"],Zm=["innerHTML"];function eg(t,e,n,r,i,l){return t.info||t.isSlot?(p(),C("span",{key:0,class:h(t.classes.container),onMouseover:e[0]||(e[0]=(...a)=>t.handleMouseOver&&t.handleMouseOver(...a))},[d("div",{class:h(t.classes.wrapper),id:t.id},[t.isSlot?(p(),C("span",{key:0,class:h(t.classes.content)},[M(t.$slots,"default")],2)):(p(),C("span",{key:1,class:h(t.classes.content),innerHTML:t.info},null,10,Zm))],10,Xm)],34)):k("v-if",!0)}Pa.render=eg;Pa.__file="themes/blank/templates/ElementInfo.vue";var ws={name:"ElementInfo",render:Pa.render,data(){return{merge:!0,defaultClasses:{container:"vf-element-info",wrapper:"vf-element-info-wrapper",wrapper_left:"vf-element-info-wrapper-left",wrapper_right:"vf-element-info-wrapper-right",wrapper_top:"vf-element-info-wrapper-top",wrapper_bottom:"vf-element-info-wrapper-bottom",content:"vf-element-info-content",$wrapper:(t,{position:e})=>[t.wrapper,t[`wrapper_${e}`]]}}}},tg=`.vf-element-info {
  margin-left: 0.25rem;
  position: relative;
  top: 1px;
  cursor: pointer;
}

.vf-element-info:before {
  content: "";
  mask-image: url("data:image/svg+xml,%3C%3Fxml version='1.0' encoding='UTF-8'%3F%3E%3Csvg width='15px' height='14px' viewBox='0 0 15 14' version='1.1' xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink'%3E%3Cg stroke='none' stroke-width='1' fill='none' fill-rule='evenodd'%3E%3Cpath d='M7.40520349,0.18129431 C11.1501134,0.18129431 14.1864373,3.21871306 14.1864373,6.96252814 C14.1864373,10.7085329 11.1501134,13.743762 7.40520349,13.743762 C3.6602936,13.743762 0.62396966,10.7085329 0.62396966,6.96252814 C0.62396966,3.21871306 3.6602936,0.18129431 7.40520349,0.18129431 Z M7.40520349,3.18909964 C6.77093148,3.18909964 6.25676873,3.70326238 6.25676873,4.3375344 C6.25676873,4.97180642 6.77093148,5.48596916 7.40520349,5.48596916 C8.03947551,5.48596916 8.55363825,4.97180642 8.55363825,4.3375344 C8.55363825,3.70326238 8.03947551,3.18909964 7.40520349,3.18909964 Z M8.93644984,10.1343956 L8.93644984,9.47814714 C8.93644984,9.29694183 8.78953094,9.15002293 8.60832562,9.15002293 L8.28020141,9.15002293 L8.28020141,6.41565445 C8.28020141,6.23444913 8.13328251,6.08753023 7.95207719,6.08753023 L6.20208136,6.08753023 C6.02087604,6.08753023 5.87395714,6.23444913 5.87395714,6.41565445 L5.87395714,7.07190288 C5.87395714,7.2531082 6.02087604,7.4000271 6.20208136,7.4000271 L6.53020558,7.4000271 L6.53020558,9.15002293 L6.20208136,9.15002293 C6.02087604,9.15002293 5.87395714,9.29694183 5.87395714,9.47814714 L5.87395714,10.1343956 C5.87395714,10.3156009 6.02087604,10.4625198 6.20208136,10.4625198 L8.60832562,10.4625198 C8.78953094,10.4625198 8.93644984,10.3156009 8.93644984,10.1343956 Z' id='info-circle' fill='currentColor'%3E%3C/path%3E%3C/g%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3C%3Fxml version='1.0' encoding='UTF-8'%3F%3E%3Csvg width='15px' height='14px' viewBox='0 0 15 14' version='1.1' xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink'%3E%3Cg stroke='none' stroke-width='1' fill='none' fill-rule='evenodd'%3E%3Cpath d='M7.40520349,0.18129431 C11.1501134,0.18129431 14.1864373,3.21871306 14.1864373,6.96252814 C14.1864373,10.7085329 11.1501134,13.743762 7.40520349,13.743762 C3.6602936,13.743762 0.62396966,10.7085329 0.62396966,6.96252814 C0.62396966,3.21871306 3.6602936,0.18129431 7.40520349,0.18129431 Z M7.40520349,3.18909964 C6.77093148,3.18909964 6.25676873,3.70326238 6.25676873,4.3375344 C6.25676873,4.97180642 6.77093148,5.48596916 7.40520349,5.48596916 C8.03947551,5.48596916 8.55363825,4.97180642 8.55363825,4.3375344 C8.55363825,3.70326238 8.03947551,3.18909964 7.40520349,3.18909964 Z M8.93644984,10.1343956 L8.93644984,9.47814714 C8.93644984,9.29694183 8.78953094,9.15002293 8.60832562,9.15002293 L8.28020141,9.15002293 L8.28020141,6.41565445 C8.28020141,6.23444913 8.13328251,6.08753023 7.95207719,6.08753023 L6.20208136,6.08753023 C6.02087604,6.08753023 5.87395714,6.23444913 5.87395714,6.41565445 L5.87395714,7.07190288 C5.87395714,7.2531082 6.02087604,7.4000271 6.20208136,7.4000271 L6.53020558,7.4000271 L6.53020558,9.15002293 L6.20208136,9.15002293 C6.02087604,9.15002293 5.87395714,9.29694183 5.87395714,9.47814714 L5.87395714,10.1343956 C5.87395714,10.3156009 6.02087604,10.4625198 6.20208136,10.4625198 L8.60832562,10.4625198 C8.78953094,10.4625198 8.93644984,10.3156009 8.93644984,10.1343956 Z' id='info-circle' fill='currentColor'%3E%3C/path%3E%3C/g%3E%3C/svg%3E");
  mask-position: center center;
  -webkit-mask-position: center center;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  mask-size: contain;
  -webkit-mask-size: contain;
  background-color: var(--vf-bg-passive);
  width: 0.875rem;
  height: 0.875rem;
  display: inline-block;
}

.vf-element-info:hover .vf-element-info-wrapper {
  opacity: 1;
  visibility: visible;
}

.vf-element-info-wrapper {
  position: absolute;
  opacity: 0;
  visibility: hidden;
  transition: 0.3s;
  z-index: 1000;
  width: 12.5rem;
}

.vf-element-info-wrapper.vf-element-info-wrapper-left {
  top: -0.5625rem;
  right: 1.375rem;
}

.vf-element-info-wrapper.vf-element-info-wrapper-right {
  top: -0.5625rem;
  left: 1.375rem;
}

.vf-element-info-wrapper.vf-element-info-wrapper-top {
  bottom: 1.375rem;
  left: 50%;
  transform: translateX(-50%);
}

.vf-element-info-wrapper.vf-element-info-wrapper-bottom {
  top: 1.375rem;
  left: 50%;
  transform: translateX(-50%);
}

.vf-element-info-content {
  background: rgba(0, 0, 0, 0.85);
  color: #FFFFFF;
  border-radius: var(--vf-radius-small);
  font-size: var(--vf-font-size-small);
  line-height: var(--vf-line-height-small);
  letter-spacing: var(--vf-letter-spacing-small);
  padding: 0.3125rem 0.625rem;
  font-style: normal;
  display: inline-block;
  position: relative;
}

.vf-element-info-content:after {
  right: 100%;
  top: 0.625rem;
  border: solid transparent;
  content: "";
  height: 0;
  width: 0;
  position: absolute;
  pointer-events: none;
  border-color: rgba(0, 0, 0, 0);
  border-right-color: rgba(0, 0, 0, 0.85);
  border-width: 5px;
}`;te(tg);ws.__file="themes/vueform/templates/ElementInfo.vue";var za={};const ng=["innerHTML","id"],rg=["id"];function ig(t,e,n,r,i,l){return p(),C(ie,null,[k(" If description is HTML "),t.description?(p(),C("div",{key:0,class:h(t.classes.container),innerHTML:t.description,id:t.id},null,10,ng)):t.isSlot?(p(),C(ie,{key:1},[k(" If description is a slot "),d("div",{class:h(t.classes.container),id:t.id},[M(t.$slots,"default")],10,rg)],2112)):k("v-if",!0)],2112)}za.render=ig;za.__file="themes/blank/templates/ElementDescription.vue";var ys={name:"ElementDescription",render:za.render,data(){return{merge:!0,defaultClasses:{container:"vf-description",container_sm:"vf-description-sm",container_md:"",container_lg:"vf-description-lg",$container:(t,{Size:e})=>[t.container,t[`container_${e}`]]}}}},ag=`.vf-description {
  font-size: var(--vf-font-size-small);
  line-height: var(--vf-line-height-small);
  letter-spacing: var(--vf-letter-spacing-small);
  color: var(--vf-color-muted);
  margin-top: 0.25rem;
}

.vf-description.vf-description-sm {
  font-size: var(--vf-font-size-small-sm);
  line-height: var(--vf-line-height-small-sm);
  letter-spacing: var(--vf-letter-spacing-small-sm);
  margin-top: 0.125rem;
}

.vf-description.vf-description-lg {
  font-size: var(--vf-font-size-small-lg);
  line-height: var(--vf-line-height-small-lg);
  letter-spacing: var(--vf-letter-spacing-small-lg);
}`;te(ag);ys.__file="themes/vueform/templates/ElementDescription.vue";var Na={};const lg=["id","innerHTML"];function og(t,e,n,r,i,l){return t.showError?(p(),C("div",{key:0,class:h(t.classes.container),id:t.id,"aria-live":"assertive",innerHTML:t.error},null,10,lg)):k("v-if",!0)}Na.render=og;Na.__file="themes/blank/templates/ElementError.vue";var ks={name:"ElementError",render:Na.render,data(){return{merge:!0,defaultClasses:{container:"vf-element-error",container_sm:"vf-element-error-sm",container_md:"",container_lg:"vf-element-error-lg",$container:(t,{Size:e})=>[t.container,t[`container_${e}`]]}}}},sg=`.vf-element-error {
  font-size: var(--vf-font-size-small);
  line-height: var(--vf-line-height-small);
  letter-spacing: var(--vf-letter-spacing-small);
  color: var(--vf-color-danger);
  margin-top: 0.25rem;
}

.vf-element-error.vf-element-error-sm {
  font-size: var(--vf-font-size-small-sm);
  line-height: var(--vf-line-height-small-sm);
  letter-spacing: var(--vf-letter-spacing-small-sm);
  margin-top: 0.125rem;
}

.vf-element-error.vf-element-error-lg {
  font-size: var(--vf-font-size-small-lg);
  line-height: var(--vf-line-height-small-lg);
  letter-spacing: var(--vf-letter-spacing-small-lg);
}`;te(sg);ks.__file="themes/vueform/templates/ElementError.vue";var Va={};const ug=["innerHTML"];function dg(t,e,n,r,i,l){return t.message?(p(),C("div",{key:0,class:h(t.classes.container),innerHTML:t.message},null,10,ug)):k("v-if",!0)}Va.render=dg;Va.__file="themes/blank/templates/ElementMessage.vue";var Cs={name:"ElementMessage",render:Va.render,data(){return{merge:!0,defaultClasses:{container:"vf-element-message",container_sm:"vf-element-message-sm",container_md:"",container_lg:"vf-element-message-lg",$container:(t,{Size:e})=>[t.container,t[`container_${e}`]]}}}},cg=`.vf-element-message {
  font-size: var(--vf-font-size-small);
  line-height: var(--vf-line-height-small);
  letter-spacing: var(--vf-letter-spacing-small);
  color: var(--vf-color-success);
  margin-top: 0.25rem;
}

.vf-element-message.vf-element-message-sm {
  font-size: var(--vf-font-size-small-sm);
  line-height: var(--vf-line-height-small-sm);
  letter-spacing: var(--vf-letter-spacing-small-sm);
  margin-top: 0.125rem;
}

.vf-element-message.vf-element-message-lg {
  font-size: var(--vf-font-size-small-lg);
  line-height: var(--vf-line-height-small-lg);
  letter-spacing: var(--vf-letter-spacing-small-lg);
}`;te(cg);Cs.__file="themes/vueform/templates/ElementMessage.vue";var ja={};function pg(t,e,n,r,i,l){return t.visible?(p(),C("div",{key:0,class:h(t.classes.container)},[M(t.$slots,"default",{},()=>[e[0]||(e[0]=ya("*",-1))])],2)):k("v-if",!0)}ja.render=pg;ja.__file="themes/blank/templates/ElementRequired.vue";var Es={name:"ElementRequired",render:ja.render,data(){return{merge:!0,defaultClasses:{container:"vf-element-required"}}}},fg="";te(fg);Es.__file="themes/vueform/templates/ElementRequired.vue";var Ua={};const vg=["innerHTML"];function hg(t,e,n,r,i,l){return p(),C(ie,null,[k(" If content is HTML "),t.content?(p(),C("div",{key:0,class:h(t.classes.container),innerHTML:t.content},null,10,vg)):t.isSlot?(p(),C(ie,{key:1},[k(" If content is a slot "),d("div",{class:h(t.classes.container)},[M(t.$slots,"default")],2)],2112)):k("v-if",!0)],2112)}Ua.render=hg;Ua.__file="themes/blank/templates/ElementText.vue";var As={name:"ElementText",render:Ua.render,data(){return{merge:!0,defaultClasses:{container:"",container_before:"",container_between:"",container_after:"",$container:(t,{type:e})=>[t.container,t[`container_${e}`]]}}}};As.__file="themes/vueform/templates/ElementText.vue";var Wa={};const mg=["innerHTML"];function gg(t,e,n,r,i,l){return p(),C(ie,null,[k(" If addon is a component "),t.addon&&t.isAddonComponent?(p(),C("div",{key:0,class:h(t.classes.container)},[d("div",{class:h(t.classes.wrapper)},[(p(),S(N(t.addon)))],2)],2)):t.addon?(p(),C(ie,{key:1},[k(" If addon is HTML "),d("div",{class:h(t.classes.container)},[d("div",{class:h(t.classes.wrapper),innerHTML:t.addon},null,10,mg)],2)],2112)):t.isSlot?(p(),C(ie,{key:2},[k(" If addon is a slot "),d("div",{class:h(t.classes.container)},[d("div",{class:h(t.classes.wrapper)},[M(t.$slots,"default")],2)],2)],2112)):k("v-if",!0)],2112)}Wa.render=gg;Wa.__file="themes/blank/templates/ElementAddon.vue";var Ls={name:"ElementAddon",render:Wa.render,data(){return{merge:!0,defaultClasses:{container:"vf-addon",container_before:"vf-addon-before",container_after:"vf-addon-after",container_sm:"vf-addon-sm",container_md:"",container_lg:"vf-addon-lg",container_before_sm:"",container_before_md:"",container_before_lg:"",container_after_sm:"",container_after_md:"",container_after_lg:"",wrapper:"vf-addon-wrapper",$container:(t,{type:e,Size:n})=>[t.container,t[`container_${n}`],t[`container_${e}`],t[`container_${e}_${n}`]]}}}},bg=`.vf-addon {
  background: var(--vf-bg-addon);
  color: var(--vf-color-addon);
  border-radius: var(--vf-radius-input);
  display: flex;
  align-items: center;
  justify-content: center;
  flex: 0 0 0%;
}

.vf-addon.vf-addon-before {
  border-top-right-radius: 0;
  border-bottom-right-radius: 0;
  padding: 0 var(--vf-space-addon) 0 var(--vf-px-input);
}

.vf-addon.vf-addon-before.vf-addon-sm {
  padding: 0 var(--vf-space-addon-sm) 0 var(--vf-px-input-sm);
}

.vf-addon.vf-addon-before.vf-addon-lg {
  padding: 0 var(--vf-space-addon-lg) 0 var(--vf-px-input-lg);
}

.vf-addon.vf-addon-after {
  border-top-left-radius: 0;
  border-bottom-left-radius: 0;
  padding: 0 var(--vf-px-input) 0 var(--vf-space-addon);
  order: 2;
}

.vf-addon.vf-addon-after.vf-addon-sm {
  padding: 0 var(--vf-px-input-sm) 0 var(--vf-space-addon-sm);
}

.vf-addon.vf-addon-after.vf-addon-lg {
  padding: 0 var(--vf-px-input-lg) 0 var(--vf-space-addon-lg);
}

.vf-addon-wrapper {
  display: flex;
  align-items: center;
  justify-content: center;
}`;te(bg);Ls.__file="themes/vueform/templates/ElementAddon.vue";var qa={};const wg=["aria-expanded","aria-controls","tabindex"],yg=["innerHTML"],kg=["innerHTML"],Cg=["innerHTML"],Eg=["innerHTML"],Ag=["data-dropdown-for","id"],Lg=["onMouseover","onClick"],xg=["innerHTML","data-index","data-selected","tabindex","aria-selected"],Tg=["innerHTML","data-index","data-selected","tabindex","aria-selected"];function Sg(t,e,n,r,i,l){return p(),C("div",{class:h(t.classes.container)},[d("div",V({class:t.classes.wrapper,onClick:e[0]||(e[0]=(...a)=>t.handleSelectorClick&&t.handleSelectorClick(...a)),onKeydown:e[1]||(e[1]=(...a)=>t.handleSelectorKeydown&&t.handleSelectorKeydown(...a))},t.aria,{"aria-expanded":t.isOpen,"aria-haspopup":"listbox","aria-controls":`dropdown-${t.el$.fieldId}`,role:"button",tabindex:t.el$.isDisabled||t.el$.isReadonly?void 0:0,ref:"selector"}),[Object.keys(t.selected).length?(p(),C(ie,{key:0},[t.selected.valueDisplay&&typeof t.selected.valueDisplay=="object"&&[t.selected.valueDisplay.render||t.selected.valueDisplay.template]?(p(),S(N(t.selected.valueDisplay),{key:0,el$:t.el$,option:t.selected},null,8,["el$","option"])):t.selected.valueDisplay&&typeof t.selected.valueDisplay=="function"?(p(),C("div",{key:1,innerHTML:t.selected.valueDisplay(t.selected,t.el$)},null,8,yg)):(p(),C("div",{key:2,innerHTML:t.selected.label},null,8,kg))],64)):(p(),C(ie,{key:1},[t.placeholder&&typeof t.placeholder=="object"&&[t.placeholder.render||t.placeholder.template]?(p(),S(N(t.placeholder),{key:0,el$:t.el$,option:t.selected},null,8,["el$","option"])):t.placeholder&&typeof t.placeholder=="function"?(p(),C("div",{key:1,innerHTML:t.placeholder(t.selected,t.el$)},null,8,Cg)):(p(),C("div",{key:2,innerHTML:t.placeholder},null,8,Eg))],64)),d("div",{class:h(t.classes.caret)},null,2),(p(),S(Ko,{to:"body"},[t.isOpen?(p(),C("div",{key:0,"data-dropdown-for":t.el$.fieldId,id:`dropdown-${t.el$.fieldId}`,class:h(t.classes.dropdown),style:rn(t.style),ref:"dropdown",role:"listbox",tabindex:"-1"},[(p(!0),C(ie,null,de(t.options,(a,o)=>(p(),C("div",{class:h(t.classes.optionWrapper),key:a.value,onMouseover:s=>t.handleOptionPoint(a),onClick:s=>t.handleOptionClick(a)},[a.display&&typeof a.display=="object"&&[a.display.render||a.display.template]?(p(),S(N(a.display),{key:0,el$:t.el$,option:a,index:o,selected:t.selected.index===a.index,pointed:t.pointed.index===a.index,"data-index":a.index,"data-selected":t.selected.index===a.index,role:"option",tabindex:t.pointed.index===a.index?0:-1,"aria-selected":t.selected.index===a.index},null,8,["el$","option","index","selected","pointed","data-index","data-selected","tabindex","aria-selected"])):a.display&&typeof a.display=="function"?(p(),C("div",{key:1,innerHTML:a.display(a,o,t.selected.index===a.index,t.pointed.index===a.index,t.el$),class:h(t.classes.option(a,o,t.el$)),"data-index":a.index,"data-selected":t.selected.index===a.index,role:"option",tabindex:t.pointed.index===a.index?0:-1,"aria-selected":t.selected.index===a.index},null,10,xg)):(p(),C("div",{key:2,innerHTML:a.label,class:h(t.classes.option(a,o,t.el$)),"data-index":a.index,"data-selected":t.selected.index===a.index,role:"option",tabindex:t.pointed.index===a.index?0:-1,"aria-selected":t.selected.index===a.index},null,10,Tg))],42,Lg))),128))],14,Ag)):k("v-if",!0)]))],16,wg)],2)}qa.render=Sg;qa.__file="themes/blank/templates/ElementAddonOptions.vue";var xs={name:"ElementAddonOptions",render:qa.render,data(){return{merge:!0,defaultClasses:{container:"vf-addon-options",container_sm:"vf-addon-options-sm",container_md:"",container_lg:"vf-addon-options-lg",container_disabled:"vf-addon-options-disabled",wrapper:"vf-addon-options-wrapper",wrapper_relaxed:"vf-addon-options-wrapper-relaxed",caret:"vf-addon-options-caret",dropdown:"vf-addon-options-dropdown",option:"vf-addon-options-option",option_active:"vf-addon-options-option-active",$container:(t,{Size:e,el$:n})=>[t.container,t[`container_${e}`],n.isDisabled||n.readonly?t.container_disabled:null],$wrapper:(t,{relaxed:e})=>[t.wrapper,e?t.wrapper_relaxed:t.wrapper_default],$option:(t,{selected:e,pointed:n})=>r=>[t.option,e.index===r.index||n.index===r.index?t.option_active:null]}}}},_g=`.vf-addon-options {
  display: flex;
  align-items: center;
  font-size: var(--vf-font-size);
  line-height: var(--vf-line-height);
  letter-spacing: var(--vf-letter-spacing);
}

.vf-addon-options.vf-addon-options-sm {
  font-size: var(--vf-font-size-sm);
  line-height: var(--vf-line-height-sm);
  letter-spacing: var(--vf-letter-spacing-sm);
}

.vf-addon-options.vf-addon-options-lg {
  font-size: var(--vf-font-size-lg);
  line-height: var(--vf-line-height-lg);
  letter-spacing: var(--vf-letter-spacing-lg);
}

.vf-addon-options.vf-addon-options-disabled {
  opacity: 0.5;
  cursor: initial;
  pointer-events: none;
}

.vf-addon-options-wrapper {
  display: flex;
  align-items: center;
  border-radius: 4px;
  padding: 4px 4px;
  cursor: pointer;
  transition-property: all;
  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
  transition-duration: 150ms;
  outline: none;
}

.vf-addon-options-wrapper:hover, .vf-addon-options-wrapper:focus {
  background: var(--vf-bg-selected);
}

.vf-addon-options-wrapper.vf-addon-options-wrapper-relaxed {
  padding: 6px 12px;
}

.vf-addon-options-caret {
  mask-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 320 512' fill='currentColor' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M31.3 192h257.3c17.8 0 26.7 21.5 14.1 34.1L174.1 354.8c-7.8 7.8-20.5 7.8-28.3 0L17.2 226.1C4.6 213.5 13.5 192 31.3 192z'%3E%3C/path%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 320 512' fill='currentColor' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M31.3 192h257.3c17.8 0 26.7 21.5 14.1 34.1L174.1 354.8c-7.8 7.8-20.5 7.8-28.3 0L17.2 226.1C4.6 213.5 13.5 192 31.3 192z'%3E%3C/path%3E%3C/svg%3E");
  mask-position: center center;
  -webkit-mask-position: center center;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: var(--vf-bg-icon);
  color: var(--vf-color-input);
  width: 0.625rem;
  height: 1rem;
  padding: 1px 0;
  margin-left: 0.5rem;
}

.vf-addon-options-dropdown {
  background-color: var(--vf-bg-input);
  border-width: var(--vf-border-width-dropdown);
  border-style: solid;
  border-color: var(--vf-border-color-input);
  box-shadow: var(--vf-shadow-dropdown);
  color: var(--vf-color-input);
  position: fixed;
  z-index: 1002;
  overflow-x: scroll;
  max-height: calc(100vh - 2rem);
}

.vf-addon-options-option {
  display: flex;
  align-items: center;
  cursor: pointer;
  padding: 0.3125rem 0.75rem;
  white-space: nowrap;
}

.vf-addon-options-option-active {
  background: var(--vf-bg-selected);
}

[dir=rtl] .vf-addon-options-caret {
  margin-left: 0;
  margin-right: 0.5rem;
}`;te(_g);xs.__file="themes/vueform/templates/ElementAddonOptions.vue";var Qa={};const Mg=["tabindex","disabled"],Ig=["innerHTML","tabindex","disabled"],Bg=["tabindex","disabled"],Dg=["tabindex"],Rg=["innerHTML","tabindex"],Fg=["tabindex"];function Og(t,e,n,r,i,l){return p(),S(N(t.elementLayout),{ref:"container"},ue({element:f(()=>[k(" Use `button` tag "),t.buttonType==="button"?(p(),C(ie,{key:0},[k(" Use it as a component "),t.buttonLabel&&t.isButtonLabelComponent?(p(),C("button",V({key:0},{...t.button,...t.aria},{tabindex:t.isDisabled||t.isLoading?-1:void 0,disabled:t.isDisabled,class:t.classes.button,onClick:e[0]||(e[0]=Le((...a)=>t.handleClick&&t.handleClick(...a),["prevent"]))}),[(p(),S(N(t.buttonLabel)))],16,Mg)):t.buttonLabel?(p(),C(ie,{key:1},[k(" Use it as HTML "),d("button",V({...t.button,...t.aria},{innerHTML:t.resolvedButtonLabel,tabindex:t.isDisabled||t.isLoading?-1:void 0,class:t.classes.button,disabled:t.isDisabled,onClick:e[1]||(e[1]=Le((...a)=>t.handleClick&&t.handleClick(...a),["prevent"]))}),null,16,Ig)],2112)):(p(),C(ie,{key:2},[k(" Use it as slot "),d("button",V({...t.button,...t.aria},{tabindex:t.isDisabled||t.isLoading?-1:void 0,class:t.classes.button,disabled:t.isDisabled,onClick:e[2]||(e[2]=Le((...a)=>t.handleClick&&t.handleClick(...a),["prevent"]))}),[M(t.$slots,"default",{el$:t.el$},()=>[(p(),S(N(t.fieldSlots.default),{el$:t.el$},null,8,["el$"]))])],16,Bg)],2112))],64)):(p(),C(ie,{key:1},[k(" Use `anchor` tag "),k(" Use it as a component "),t.buttonLabel&&t.isButtonLabelComponent?(p(),C("a",V({key:0},{...t.button,...t.aria},{tabindex:t.isDisabled||t.isLoading?-1:void 0,class:t.classes.button,onClick:e[3]||(e[3]=(...a)=>t.handleClick&&t.handleClick(...a))}),[(p(),S(N(t.buttonLabel)))],16,Dg)):t.buttonLabel?(p(),C(ie,{key:1},[k(" Use it as HTML "),d("a",V({...t.button,...t.aria},{innerHTML:t.resolvedButtonLabel,tabindex:t.isDisabled||t.isLoading?-1:void 0,class:t.classes.button,onClick:e[4]||(e[4]=(...a)=>t.handleClick&&t.handleClick(...a))}),null,16,Rg)],2112)):(p(),C(ie,{key:2},[k(" Use it as slot "),d("a",V({...t.button,...t.aria},{tabindex:t.isDisabled||t.isLoading?-1:void 0,class:t.classes.button,onClick:e[5]||(e[5]=(...a)=>t.handleClick&&t.handleClick(...a))}),[M(t.$slots,"default",{el$:t.el$},()=>[(p(),S(N(t.fieldSlots.default),{el$:t.el$},null,8,["el$"]))])],16,Fg)],2112))],64))]),_:2},[de(t.elementSlots,(a,o)=>({name:o,fn:f(()=>[M(t.$slots,o,{el$:t.el$},()=>[(p(),S(N(a),{el$:t.el$},null,8,["el$"]))])])}))]),1536)}Qa.render=Og;Qa.__file="themes/blank/templates/elements/ButtonElement.vue";var Ts={name:"ButtonElement",render:Qa.render,data(){return{merge:!0,defaultClasses:{container:"vf-text-type",button:"vf-btn",button_enabled:"",button_disabled:"vf-btn-disabled",button_loading:"vf-btn-loading",button_loading_primary:"vf-btn-loading-primary",button_loading_secondary:"vf-btn-loading-secondary",button_loading_danger:"vf-btn-loading-danger",button_primary:"vf-btn-primary",button_secondary:"vf-btn-secondary",button_danger:"vf-btn-danger",button_full:"vf-btn-full",button_not_full:"",button_left:"vf-btn-left",button_center:"vf-btn-center",button_right:"vf-btn-right",button_sm:"vf-btn-sm",button_md:"",button_lg:"vf-btn-lg",$button:(t,{isDisabled:e,isLoading:n,buttonClass:r,Size:i,danger:l,secondary:a,full:o,align:s})=>[t.button,l?t.button_danger:null,a?t.button_secondary:null,!l&&!a?t.button_primary:null,t[`button_${i}`],e?t.button_disabled:null,!e&&!n?t.button_enabled:null,n?t.button_loading:null,n&&l?t.button_loading_danger:null,n&&a?t.button_loading_secondary:null,n&&!a&&!l?t.button_loading_primary:null,o?t.button_full:t.button_not_full,s==="left"?t.button_left:null,s==="center"?t.button_center:null,s==="right"?t.button_right:null,r]}}}},$g="/* Some styles are contained in Vueform.vue */";te($g);Ts.__file="themes/vueform/templates/elements/ButtonElement.vue";var Ka={};const Hg=["id"];function Pg(t,e,n,r,i,l){return p(),S(N(t.elementLayout),{ref:"container"},ue({element:f(()=>[t.shouldVerify?(p(),C("div",{key:0,class:h(t.classes.wrapper)},[d("div",{id:t.fieldId,class:h(t.classes.captcha),ref:"input"},null,10,Hg)],2)):k("v-if",!0)]),_:2},[de(t.elementSlots,(a,o)=>({name:o,fn:f(()=>[M(t.$slots,o,{el$:t.el$},()=>[(p(),S(N(a),{el$:t.el$},null,8,["el$"]))])])}))]),1536)}Ka.render=Pg;Ka.__file="themes/blank/templates/elements/CaptchaElement.vue";var Ss={name:"CaptchaElement",render:Ka.render,data(){return{merge:!0,defaultClasses:{container:"",wrapper:"",captcha:""}}}};Ss.__file="themes/vueform/templates/elements/CaptchaElement.vue";var Ga={};const zg=["name","id","true-value","false-value","disabled"],Ng=["innerHTML"];function Vg(t,e,n,r,i,l){return p(),S(N(t.elementLayout),{ref:"container"},ue({element:f(()=>[d("label",{class:h(t.classes.wrapper)},[Te(d("input",V({type:"checkbox","onUpdate:modelValue":e[0]||(e[0]=a=>t.value=a)},t.aria,{class:t.classes.input,name:t.path,id:t.fieldId,"true-value":t.trueValue,"false-value":t.falseValue,disabled:t.isDisabled,ref:"input"}),null,16,zg),[[oi,t.value]]),k(" If label is HTML "),t.Text?(p(),C("span",{key:0,class:h(t.classes.text),innerHTML:t.Text},null,10,Ng)):(p(),C(ie,{key:1},[k(" If label is slot "),d("span",{class:h(t.classes.text)},[M(t.$slots,"default",{el$:t.el$},()=>[(p(),S(N(t.fieldSlots.default),{el$:t.el$},null,8,["el$"]))])],2)],2112))],2)]),_:2},[de(t.elementSlots,(a,o)=>({name:o,fn:f(()=>[M(t.$slots,o,{el$:t.el$},()=>[(p(),S(N(a),{el$:t.el$},null,8,["el$"]))])])}))]),1536)}Ga.render=Vg;Ga.__file="themes/blank/templates/elements/CheckboxElement.vue";var _s={name:"CheckboxElement",render:Ga.render,data(){return{merge:!0,defaultClasses:{container:"vf-contains-link",wrapper:"vf-checkbox-wrapper",wrapper_sm:"vf-checkbox-wrapper-sm",wrapper_md:"",wrapper_lg:"vf-checkbox-wrapper-lg",wrapper_left:"vf-checkbox-wrapper-left",wrapper_right:"vf-checkbox-wrapper-right",input:"vf-checkbox",input_enabled:"",input_disabled:"",input_danger:"vf-checkbox-danger",input_sm:"vf-checkbox-sm",input_md:"",input_lg:"vf-checkbox-lg",input_left:"vf-checkbox-left",input_right:"vf-checkbox-right",input_standalone:"vf-checkbox-standalone",text:"vf-checkbox-text",text_left:"vf-checkbox-text-left",text_right:"vf-checkbox-text-right",$wrapper:(t,{Size:e,align:n})=>[t.wrapper,t[`wrapper_${e}`],n==="left"?t.wrapper_left:null,n==="right"?t.wrapper_right:null],$input:(t,{isDisabled:e,Size:n,isDanger:r,align:i,standalone:l})=>[t.input,t[`input_${n}`],e?t.input_disabled:t.input_enabled,!e&&r?t.input_danger:null,i==="left"?t.input_left:null,i==="right"?t.input_right:null,l?t.input_standalone:null],$text:(t,{align:e})=>[t.text,e==="left"?t.text_left:null,e==="right"?t.text_right:null]}}}},jg="/* Some styles are contained in Vueform.vue */";te(jg);_s.__file="themes/vueform/templates/elements/CheckboxElement.vue";var Ir={};const Ug=["aria-labelledby"];function Wg(t,e,n,r,i,l){const a=J("CheckboxgroupCheckbox");return p(),S(N(t.elementLayout),{ref:"container"},ue({element:f(()=>[d("div",{class:h(t.classes.wrapper),"aria-labelledby":t.labelId,role:"group"},[(p(!0),C(ie,null,de(t.resolvedOptions,(o,s,u)=>(p(),S(a,{items:t.resolvedOptions,index:s,item:o,value:o.value,key:u,attrs:t.aria},{default:f(c=>[M(t.$slots,"checkbox",V({ref_for:!0},c,{el$:t.el$}),()=>[(p(),S(N(t.fieldSlots.checkbox),V({ref_for:!0},c,{el$:t.el$}),null,16,["el$"]))])]),_:3},8,["items","index","item","value","attrs"]))),128))],10,Ug)]),_:2},[de(t.elementSlots,(o,s)=>({name:s,fn:f(()=>[M(t.$slots,s,{el$:t.el$},()=>[(p(),S(N(o),{el$:t.el$},null,8,["el$"]))])])}))]),1536)}Ir.render=Wg;Ir.__file="themes/blank/templates/elements/CheckboxgroupElement.vue";var Ms={name:"CheckboxgroupElement",render:Ir.render,data(){return{merge:!0,defaultClasses:{container:"vf-checkboxgroup-view-default",wrapper:"vf-checkboxgroup-wrapper",wrapper_sm:"vf-checkboxgroup-wrapper-sm",wrapper_md:"",wrapper_lg:"vf-checkboxgroup-wrapper-lg",$wrapper:(t,{Size:e})=>[t.wrapper,t[`wrapper_${e}`]]}}}},qg=`.vf-checkboxgroup-wrapper {
  cursor: pointer;
}

.vf-checkboxgroup-wrapper .vf-checkbox-container {
  padding-top: 0;
}`;te(qg);Ms.__file="themes/vueform/templates/elements/CheckboxgroupElement.vue";var Is={name:"CheckboxgroupElement_tabs",render:Ir.render,data(){return{merge:!0,defaultClasses:{container:"vf-checkboxgroup-view-tabs vf-text-type",wrapper:"vf-checkboxgroup-tabs-wrapper",wrapper_sm:"vf-checkboxgroup-tabs-wrapper-sm",wrapper_md:"",wrapper_lg:"vf-checkboxgroup-tabs-wrapper-lg",$wrapper:(t,{Size:e})=>[t.wrapper,t[`wrapper_${e}`]]}}}},Qg=`.vf-checkboxgroup-tabs-wrapper {
  display: grid;
  grid-auto-flow: column;
  box-shadow: var(--vf-shadow-input);
  border-radius: var(--vf-radius-large);
}

.vf-checkboxgroup-tabs-wrapper.vf-checkboxgroup-tabs-wrapper-sm {
  border-radius: var(--vf-radius-large-sm);
}

.vf-checkboxgroup-tabs-wrapper.vf-checkboxgroup-tabs-wrapper-lg {
  border-radius: var(--vf-radius-large-lg);
}`;te(Qg);Is.__file="themes/vueform/templates/elements/CheckboxgroupElement_tabs.vue";var Bs={name:"CheckboxgroupElement_blocks",render:Ir.render,data(){return{merge:!0,defaultClasses:{container:"vf-checkboxgroup-view-blocks",wrapper:"vf-checkboxgroup-blocks-wrapper",wrapper_sm:"vf-checkboxgroup-blocks-wrapper-sm",wrapper_md:"",wrapper_lg:"vf-checkboxgroup-blocks-wrapper-lg",$wrapper:(t,{Size:e})=>[t.wrapper,t[`wrapper_${e}`]]}}}},Kg=`.vf-checkboxgroup-blocks-wrapper {
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  box-shadow: var(--vf-shadow-input);
  border-radius: var(--vf-radius-large);
}

.vf-checkboxgroup-blocks-wrapper.vf-checkboxgroup-blocks-wrapper-sm {
  border-radius: var(--vf-radius-large-sm);
}

.vf-checkboxgroup-blocks-wrapper.vf-checkboxgroup-blocks-wrapper-lg {
  border-radius: var(--vf-radius-large-lg);
}`;te(Kg);Bs.__file="themes/vueform/templates/elements/CheckboxgroupElement_blocks.vue";var fi={};function Gg(t,e,n,r,i,l){const a=J("ElementAddon"),o=J("ElementLabelFloating"),s=J("DatepickerWrapper");return p(),S(N(t.elementLayout),{ref:"container"},ue({element:f(()=>[d("div",{class:h(t.classes.inputContainer)},[t.hasAddonBefore?(p(),S(a,{key:0,type:"before"},{default:f(()=>[M(t.$slots,"addon-before",{},()=>[(p(),S(N(t.fieldSlots["addon-before"]),{el$:t.el$},null,8,["el$"]))])]),_:3})):k("v-if",!0),t.hasAddonAfter?(p(),S(a,{key:1,type:"after"},{default:f(()=>[M(t.$slots,"addon-after",{},()=>[(p(),S(N(t.fieldSlots["addon-after"]),{el$:t.el$},null,8,["el$"]))])]),_:3})):k("v-if",!0),t.hasFloating&&!t.empty?(p(),S(o,{key:2,visible:!t.empty},null,8,["visible"])):k("v-if",!0),d("div",{class:h(t.classes.inputWrapper)},[De(s,{value:t.model,options:t.fieldOptions,id:t.fieldId,class:h(t.classes.input),placeholder:t.Placeholder,autocomplete:t.autocomplete,disabled:t.isDisabled,readonly:t.isReadonly,attrs:t.aria,onChange:t.handleChange,ref:"input"},null,8,["value","options","id","class","placeholder","autocomplete","disabled","readonly","attrs","onChange"])],2)],2)]),_:2},[de(t.elementSlots,(u,c)=>({name:c,fn:f(()=>[M(t.$slots,c,{el$:t.el$},()=>[(p(),S(N(u),{el$:t.el$},null,8,["el$"]))])])}))]),1536)}fi.render=Gg;fi.__file="themes/blank/templates/elements/DateElement.vue";var Ds={name:"DateElement",render:fi.render,data(){return{merge:!0,defaultClasses:{container:"vf-text-type",inputContainer:"vf-input-group",inputContainer_sm:"vf-input-group-sm",inputContainer_md:"",inputContainer_lg:"vf-input-group-lg",inputContainer_default:"",inputContainer_disabled:"vf-input-group-disabled",inputContainer_focused:"vf-input-group-focused",inputContainer_success:"vf-input-group-success",inputContainer_danger:"vf-input-group-danger",inputWrapper:"vf-datepicker-wrapper",input:"vf-input-field",input_sm:"",input_md:"",input_lg:"",input_enabled:"",input_disabled:"",input_focused:"",input_success:"",input_danger:"",$inputContainer:(t,{isDisabled:e,Size:n,isSuccess:r,isDanger:i,focused:l})=>[t.inputContainer,t[`inputContainer_${n}`],e?t.inputContainer_disabled:null,!e&&!r&&!i?t.inputContainer_default:null,!e&&l?t.inputContainer_focused:null,!e&&r?t.inputContainer_success:null,!e&&i?t.inputContainer_danger:null],$input:(t,{isDisabled:e,Size:n,isSuccess:r,isDanger:i,focused:l})=>[t.input,t[`input_${n}`],e?t.input_disabled:null,!e&&!r&&!i&&!l?t.input_enabled:null,!e&&l&&!r&&!i?t.input_focused:null,!e&&i?t.input_danger:null,!e&&r?t.input_success:null]}}}},Jg=`/* Some styles are contained in Vueform.vue & DatepickerWrapper.vue */

.vf-datepicker-wrapper {
  display: block;
  width: 100%;
  height: 100%;
}`;te(Jg);Ds.__file="themes/vueform/templates/elements/DateElement.vue";var Rs={render:fi.render};Rs.__file="themes/blank/templates/elements/DatesElement.vue";var Fs={name:"DatesElement",render:Rs.render,data(){return{merge:!0,defaultClasses:{container:"vf-text-type",inputContainer:"vf-input-group",inputContainer_sm:"vf-input-group-sm",inputContainer_md:"",inputContainer_lg:"vf-input-group-lg",inputContainer_default:"",inputContainer_disabled:"vf-input-group-disabled",inputContainer_focused:"vf-input-group-focused",inputContainer_success:"vf-input-group-success",inputContainer_danger:"vf-input-group-danger",inputWrapper:"vf-datepicker-wrapper",input:"vf-input-field",input_sm:"",input_md:"",input_lg:"",input_enabled:"",input_disabled:"",input_focused:"",input_success:"",input_danger:"",$inputContainer:(t,{isDisabled:e,Size:n,isSuccess:r,isDanger:i,focused:l})=>[t.inputContainer,t[`inputContainer_${n}`],e?t.inputContainer_disabled:null,!e&&!r&&!i?t.inputContainer_default:null,!e&&l?t.inputContainer_focused:null,!e&&r?t.inputContainer_success:null,!e&&i?t.inputContainer_danger:null],$input:(t,{isDisabled:e,Size:n,isSuccess:r,isDanger:i,focused:l})=>[t.input,t[`input_${n}`],e?t.input_disabled:null,!e&&!r&&!i&&!l?t.input_enabled:null,!e&&l&&!r&&!i?t.input_focused:null,!e&&i?t.input_danger:null,!e&&r?t.input_success:null]}}}},Yg="/* Some styles are contained in Vueform.vue & DatepickerWrapper.vue */";te(Yg);Fs.__file="themes/vueform/templates/elements/DatesElement.vue";var Ja={};const Xg=["aria-labelledby","aria-placeholder"],Zg=["id","accept"];function e0(t,e,n,r,i,l){const a=J("DragAndDrop"),o=J("FilePreview");return p(),S(N(t.elementLayout),{ref:"container"},ue({element:f(()=>[k(" Drag n drop "),t.drop&&t.canDrop&&t.canSelect?(p(),S(a,{key:0,title:t.form$.translations.vueform.elements[t.type].dndTitle,description:t.form$.translations.vueform.elements[t.type].dndDescription,disabled:t.isDisabled,onClick:t.handleClick,onDrop:t.handleDrop},null,8,["title","description","disabled","onClick","onDrop"])):t.canSelect?(p(),C(ie,{key:1},[k(" Upload button "),d("div",V(t.aria,{class:t.classes.button,"aria-labelledby":t.labelId,"aria-placeholder":t.form$.translations.vueform.elements[t.type].select,onClick:e[0]||(e[0]=Le((...s)=>t.handleClick&&t.handleClick(...s),["prevent"])),onKeypress:e[1]||(e[1]=Ue((...s)=>t.handleClick&&t.handleClick(...s),["enter","space"])),role:"button",tabindex:"0"}),Re(t.form$.translations.vueform.elements[t.type].select),17,Xg)],2112)):k("v-if",!0),k(" Hidden file input "),t.canSelect&&!t.isDisabled&&!t.preparing?Te((p(),C("input",{key:2,id:t.fieldId,type:"file",accept:t.accept,onChange:e[2]||(e[2]=(...s)=>t.handleChange&&t.handleChange(...s)),ref:"input"},null,40,Zg)),[[Ve,!1]]):k("v-if",!0),k(" Preview "),M(t.$slots,"preview",{},()=>[(p(),S(o,{key:t.view,attrs:t.aria},null,8,["attrs"]))])]),_:2},[de(t.elementSlots,(s,u)=>({name:u,fn:f(()=>[M(t.$slots,u,{el$:t.el$},()=>[(p(),S(N(s),{el$:t.el$},null,8,["el$"]))])])}))]),1536)}Ja.render=e0;Ja.__file="themes/blank/templates/elements/FileElement.vue";var Os={name:"FileElement",render:Ja.render,data(){return{merge:!0,defaultClasses:{container:"vf-file vf-text-type",container_removing:"vf-file-removing",button:"vf-btn vf-btn-secondary",button_enabled:"",button_disabled:"vf-btn-disabled",button_sm:"vf-btn-sm",button_md:"",button_lg:"vf-btn-lg",assertiveText:"vf-assertive-text",$container:(t,{removing:e})=>[t.container,e?t.container_removing:null],$button:(t,{isDisabled:e,preparing:n,Size:r})=>[t.button,t[`button_${r}`],!e&&!n?t.button_enabled:null,e||n?t.button_disabled:null]}}}},t0="/* Some styles are contained in Vueform.vue */";te(t0);Os.__file="themes/vueform/templates/elements/FileElement.vue";var Ya={};const n0=["aria-labelledby"],r0=["data-col","data-row","data-col-start","data-col-end","data-row-start","data-row-end"],i0=["innerHTML"];function a0(t,e,n,r,i,l){return p(),S(N(t.elementLayout),{multiple:!0,ref:"container"},ue({element:f(()=>[d("div",{class:h(t.classes.grid),style:rn(t.gridStyle),role:"group","aria-labelledby":t.labelId},[(p(!0),C(ie,null,de(t.cells,(a,o)=>(p(),C("div",V({class:t.classes.cell(a),style:a.style},{ref_for:!0},a.attrs,{"data-col":a.col,"data-row":a.row,"data-col-start":a.colStart,"data-col-end":a.colEnd,"data-row-start":a.rowStart,"data-row-end":a.rowEnd}),[a.schema?(p(),C("div",{key:0,class:h(t.classes.fieldWrapper(a))},[M(t.$slots,a.slot,{},()=>[(p(),S(N(a.component),V({name:a.name,key:a.name},{ref_for:!0},a.schema),null,16,["name"]))])],2)):(p(),C("div",{key:1,class:h(t.classes.textWrapper(a))},[M(t.$slots,a.slot,{},()=>[a.content?(p(),C("span",{key:0,class:h(t.classes.text),innerHTML:a.content},null,10,i0)):k("v-if",!0)])],2))],16,r0))),256))],14,n0)]),_:2},[de(t.elementSlots,(a,o)=>({name:o,fn:f(()=>[M(t.$slots,o,{el$:t.el$},()=>[(p(),S(N(a),{el$:t.el$},null,8,["el$"]))])])}))]),1536)}Ya.render=a0;Ya.__file="themes/blank/templates/elements/GridElement.vue";var $s={name:"GridElement",render:Ya.render,data(){return{merge:!0,defaultClasses:{container:"vf-grid-container",container_scrollable:"vf-grid-container-scrollable",grid:"vf-grid",grid_sm:"vf-grid-sm",grid_md:"",grid_lg:"vf-grid-lg",grid_fit:"vf-grid-fit",grid_nofit:"",cell:"vf-grid-cell",fieldWrapper:"vf-grid-field-wrapper",fieldWrapper_sm:"vf-grid-field-wrapper-sm",fieldWrapper_md:"",fieldWrapper_lg:"vf-grid-field-wrapper-lg",fieldWrapper_left:"vf-grid-field-wrapper-left",fieldWrapper_center:"vf-grid-field-wrapper-center",fieldWrapper_right:"vf-grid-field-wrapper-right",fieldWrapper_top:"vf-grid-field-wrapper-top",fieldWrapper_middle:"vf-grid-field-wrapper-middle",fieldWrapper_bottom:"vf-grid-field-wrapper-bottom",fieldWrapper_baseline:"vf-grid-field-wrapper-baseline",textWrapper:"vf-grid-text-wrapper",textWrapper_sm:"vf-grid-text-wrapper-sm",textWrapper_md:"",textWrapper_lg:"vf-grid-text-wrapper-lg",textWrapper_left:"vf-grid-text-wrapper-left",textWrapper_center:"vf-grid-text-wrapper-center",textWrapper_right:"vf-grid-text-wrapper-right",textWrapper_justify:"vf-grid-text-wrapper-justify",textWrapper_top:"vf-grid-text-wrapper-top",textWrapper_middle:"vf-grid-text-wrapper-middle",textWrapper_bottom:"vf-grid-text-wrapper-bottom",textWrapper_baseline:"vf-grid-text-wrapper-baseline",text:"vf-grid-text",$container:(t,{scrollable:e})=>[t.container,e?t.container_scrollable:null],$grid:(t,{Size:e,align:n,fitWidth:r})=>[t.grid,t[`grid_${e}`],r?t.grid_fit:t.grid_nofit],$cell:(t,{})=>()=>[t.cell],$fieldWrapper:(t,{Size:e})=>({schema:n,align:r,valign:i,rowIndex:l,colIndex:a})=>[t.fieldWrapper,t[`fieldWrapper_${e}`],t[`fieldWrapper_${r}`],t[`fieldWrapper_${i}`]],$textWrapper:(t,{Size:e})=>({align:n,valign:r,rowIndex:i,colIndex:l})=>[t.textWrapper,t[`textWrapper_${e}`],t[`textWrapper_${n}`],t[`textWrapper_${r}`]]}}}},l0=`/* Some styles are contained in _table.scss */

.vf-grid-container-scrollable {
  overflow-x: auto;
  overflow-y: visible;
}

.vf-grid {
  display: grid;
  -moz-column-gap: min(8.3333333333%, var(--vf-gutter));
       column-gap: min(8.3333333333%, var(--vf-gutter));
  row-gap: var(--vf-gutter);
}

.vf-grid-sm {
  -moz-column-gap: min(8.3333333333%, var(--vf-gutter-sm));
       column-gap: min(8.3333333333%, var(--vf-gutter-sm));
  row-gap: var(--vf-gutter-sm);
}

.vf-grid-lg {
  -moz-column-gap: min(8.3333333333%, var(--vf-gutter-lg));
       column-gap: min(8.3333333333%, var(--vf-gutter-lg));
  row-gap: var(--vf-gutter-lg);
}

.vf-grid-fit {
  width: -moz-fit-content;
  width: fit-content;
}

.vf-grid-cell {
  position: relative;
}

.vf-grid-field-wrapper {
  width: 100%;
  height: 100%;
  display: grid;
  min-height: var(--vf-min-height-input);
}

.vf-grid-field-wrapper-sm {
  min-height: var(--vf-min-height-input-sm);
}

.vf-grid-field-wrapper-lg {
  min-height: var(--vf-min-height-input-lg);
}

.vf-grid-field-wrapper-left {
  text-align: left;
}

.vf-grid-field-wrapper-center {
  text-align: center;
}

.vf-grid-field-wrapper-right {
  text-align: right;
}

.vf-grid-field-wrapper-top {
  align-items: flex-start;
}

.vf-grid-field-wrapper-middle {
  align-items: center;
}

.vf-grid-field-wrapper-bottom {
  align-items: flex-end;
}

.vf-grid-field-wrapper-baseline {
  align-items: stretch;
}

.vf-grid-text-wrapper {
  width: 100%;
  height: 100%;
  display: flex;
  min-height: var(--vf-min-height-input);
  padding: var(--vf-py-input) var(--vf-px-input);
  overflow-wrap: break-word;
}

.vf-grid-text-wrapper-sm {
  min-height: var(--vf-min-height-input-sm);
  padding: var(--vf-py-input-sm) var(--vf-px-input-sm);
}

.vf-grid-text-wrapper-lg {
  min-height: var(--vf-min-height-input-lg);
  padding: var(--vf-py-input-lg) var(--vf-px-input-lg);
}

.vf-grid-text-wrapper-left {
  justify-content: flex-start;
  text-align: left;
}

.vf-grid-text-wrapper-center {
  justify-content: center;
  text-align: center;
}

.vf-grid-text-wrapper-right {
  justify-content: flex-end;
  text-align: right;
}

.vf-grid-text-wrapper-justify {
  justify-content: stretch;
  text-align: justify;
}

.vf-grid-text-wrapper-top {
  align-items: start;
}

.vf-grid-text-wrapper-middle {
  align-items: center;
}

.vf-grid-text-wrapper-bottom {
  align-items: end;
}

.vf-grid-text-wrapper-baseline {
  align-items: stretch;
}

.vf-grid-text {
  width: 100%;
}`;te(l0);$s.__file="themes/vueform/templates/elements/GridElement.vue";var Xa={};const o0=["aria-labelledby"];function s0(t,e,n,r,i,l){return p(),S(N(t.elementLayout),{multiple:!0,ref:"container"},ue({element:f(()=>[d("div",{class:h(t.classes.wrapper),role:"group","aria-labelledby":t.labelId},[M(t.$slots,"default",{},()=>[(p(!0),C(ie,null,de(t.children,(a,o)=>(p(),S(N(t.component(a)),V({ref_for:!0},a,{name:o,key:o}),null,16,["name"]))),128))])],10,o0)]),_:2},[de(t.elementSlots,(a,o)=>({name:o,fn:f(()=>[M(t.$slots,o,{el$:t.el$},()=>[(p(),S(N(a),{el$:t.el$},null,8,["el$"]))])])}))]),1536)}Xa.render=s0;Xa.__file="themes/blank/templates/elements/GroupElement.vue";var Hs={name:"GroupElement",render:Xa.render,data(){return{merge:!0,defaultClasses:{container:"",wrapper:"vf-row",wrapper_sm:"vf-row-sm",wrapper_md:"",wrapper_lg:"vf-row-lg",$wrapper:(t,{Size:e})=>[t.wrapper,t[`wrapper_${e}`]]}}}},u0="/* Some styles are contained in Vueform.vue */";te(u0);Hs.__file="themes/vueform/templates/elements/GroupElement.vue";var Za={};const d0={key:0,ref:"container"},c0=["name","id"];function p0(t,e,n,r,i,l){return t.meta?k("v-if",!0):(p(),C("span",d0,[Te(d("input",{"onUpdate:modelValue":e[0]||(e[0]=a=>t.value=a),type:"hidden",name:t.name,id:t.fieldId,ref:"input"},null,8,c0),[[Id,t.value]])],512))}Za.render=p0;Za.__file="themes/blank/templates/elements/HiddenElement.vue";var Ps={name:"HiddenElement",render:Za.render,data(){return{merge:!0,defaultClasses:{}}}};Ps.__file="themes/vueform/templates/elements/HiddenElement.vue";var el={};const f0=["aria-labelledby"],v0=["data-id"],h0=["aria-roledescription","id","onClick","onKeypress"],m0=["id","innerHTML"];function g0(t,e,n,r,i,l){return p(),S(N(t.elementLayout),{ref:"container"},ue({element:f(()=>[k(" Sorting container "),d("div",{class:h(t.classes.list),role:"list","aria-labelledby":t.labelId,ref:"list"},[(p(!0),C(ie,null,de(t.value,(a,o)=>(p(),C("div",{key:o,class:h(t.classes.listItem),role:"listitem","data-id":`${t.path}-${o}`},[M(t.$slots,"default",{index:o},()=>[t.prototype.type?(p(),S(N(t.component(t.prototype)),V({key:0,ref_for:!0},t.prototype,{name:o,key:o}),null,16,["name"])):k("v-if",!0)]),k(" Sort handle "),t.hasSort?(p(),C("span",{key:0,class:h(t.classes.handle),"data-handle":""},[d("span",{class:h(t.classes.handleIcon)},null,2)],2)):k("v-if",!0),k(" Remove button "),t.hasRemove?(p(),C("div",{key:1,"aria-roledescription":t.form$.translations.vueform.a11y.list.remove,class:h(t.classes.remove),id:`${t.path}-${o}-remove-button`,onClick:Le(s=>t.handleRemove(o),["prevent"]),onKeypress:Ue(s=>t.handleRemove(o),["space","enter"]),role:"button",tabindex:"0"},[d("span",{class:h(t.classes.removeIcon)},null,2)],42,h0)):k("v-if",!0)],10,v0))),128))],10,f0),k(" Add button "),t.hasAdd?(p(),C("div",{key:0,class:h(t.classes.add),id:`${t.fieldId}-add-button`,onClick:e[0]||(e[0]=Le((...a)=>t.handleAdd&&t.handleAdd(...a),["prevent"])),onKeypress:e[1]||(e[1]=Ue((...a)=>t.handleAdd&&t.handleAdd(...a),["enter","space"])),innerHTML:t.addLabel,role:"button",tabindex:"0"},null,42,m0)):k("v-if",!0)]),_:2},[de(t.elementSlots,(a,o)=>({name:o,fn:f(()=>[M(t.$slots,o,{el$:t.el$},()=>[(p(),S(N(a),{el$:t.el$},null,8,["el$"]))])])}))]),1536)}el.render=g0;el.__file="themes/blank/templates/elements/ListElement.vue";var zs={name:"ListElement",render:el.render,data(){return{merge:!0,defaultClasses:{container:"",list:"vf-rowset",list_sm:"vf-rowset-sm",list_md:"",list_lg:"vf-rowset-lg",list_disabled:"vf-list-disabled",list_sorting:"vf-list-sorting",listItem:"vf-row",listItem_sm:"vf-row-sm",listItem_md:"",listItem_lg:"vf-row-lg",handle:"vf-list-handle",handle_sm:"vf-list-handle-sm",handle_md:"",handle_lg:"vf-list-handle-lg",handleIcon:"vf-list-handle-icon",remove:"vf-list-remove",removeIcon:"vf-list-remove-icon",add:"vf-btn vf-btn-primary vf-btn-small vf-btn-list-add",add_sm:"vf-btn-small-sm vf-btn-list-add-sm",add_md:"",add_lg:"vf-btn-small-lg vf-btn-list-add-lg",$list:(t,{isDisabled:e,sorting:n,Size:r})=>[t.list,t[`list_${r}`],e?t.list_disabled:null,n?t.list_sorting:null],$listItem:(t,{Size:e})=>[t.listItem,t[`listItem_${e}`]],$handle:(t,{Size:e})=>[t.handle,t[`handle_${e}`]],$add:(t,{Size:e})=>[t.add,t[`add_${e}`]]}}}},b0=`/* Some styles are contained in Vueform.vue */

.vf-rowset > .vf-row {
  position: relative;
}

.vf-rowset > .vf-row:hover > .vf-list-remove, .vf-rowset > .vf-row:hover > .vf-list-handle {
  visibility: visible;
  opacity: 1;
}

.vf-rowset.vf-list-sorting > div:hover .vf-list-handle, .vf-rowset.vf-list-sorting > div:hover .vf-list-remove {
  visibility: hidden;
  opacity: 0;
}

.vf-list-remove, .vf-list-handle {
  opacity: 0;
  transition: 0.3s;
}

.vf-list-remove span, .vf-list-handle span {
  display: flex;
  align-items: center;
  justify-content: center;
  background-repeat: no-repeat;
  background-position: center center;
}

.vf-list-remove {
  position: absolute;
  left: 0;
  transform: translateX(-50%) translateY(-50%);
  top: 0;
  z-index: 999;
  background-color: var(--vf-bg-passive);
  border-radius: 999px;
  transition: 0.15s;
}

.vf-list-remove:hover {
  filter: brightness(0.9);
}

.vf-list-remove:focus {
  opacity: 1;
}

.vf-list-remove-icon {
  display: flex;
  width: 1.125rem;
  height: 1.125rem;
  align-items: center;
  justify-content: center;
  mask-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 320 512' fill='currentColor' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M207.6 256l107.72-107.72c6.23-6.23 6.23-16.34 0-22.58l-25.03-25.03c-6.23-6.23-16.34-6.23-22.58 0L160 208.4 52.28 100.68c-6.23-6.23-16.34-6.23-22.58 0L4.68 125.7c-6.23 6.23-6.23 16.34 0 22.58L112.4 256 4.68 363.72c-6.23 6.23-6.23 16.34 0 22.58l25.03 25.03c6.23 6.23 16.34 6.23 22.58 0L160 303.6l107.72 107.72c6.23 6.23 16.34 6.23 22.58 0l25.03-25.03c6.23-6.23 6.23-16.34 0-22.58L207.6 256z'%3E%3C/path%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 320 512' fill='currentColor' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M207.6 256l107.72-107.72c6.23-6.23 6.23-16.34 0-22.58l-25.03-25.03c-6.23-6.23-16.34-6.23-22.58 0L160 208.4 52.28 100.68c-6.23-6.23-16.34-6.23-22.58 0L4.68 125.7c-6.23 6.23-6.23 16.34 0 22.58L112.4 256 4.68 363.72c-6.23 6.23-6.23 16.34 0 22.58l25.03 25.03c6.23 6.23 16.34 6.23 22.58 0L160 303.6l107.72 107.72c6.23 6.23 16.34 6.23 22.58 0l25.03-25.03c6.23-6.23 6.23-16.34 0-22.58L207.6 256z'%3E%3C/path%3E%3C/svg%3E");
  mask-size: 0.75rem 0.75rem;
  -webkit-mask-size: 0.75rem 0.75rem;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  mask-position: center center;
  -webkit-mask-position: center center;
  background-color: var(--vf-color-passive);
}

.vf-list-handle {
  position: absolute;
  left: 0;
  transform: translateX(-100%);
  top: 0;
  cursor: grab;
  z-index: 999;
}

.vf-list-handle:active {
  cursor: grabbing;
}

.vf-list-handle-icon {
  width: var(--vf-min-height-input);
  height: var(--vf-min-height-input);
  mask-image: url("data:image/svg+xml,%3C%3Fxml version='1.0' encoding='UTF-8'%3F%3E%3Csvg width='11px' height='9px' viewBox='0 0 11 9' version='1.1' xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink'%3E%3C!-- Generator: Sketch 52.6 (67491) - http://www.bohemiancoding.com/sketch --%3E%3Ctitle%3Ebars%3C/title%3E%3Cdesc%3ECreated with Sketch.%3C/desc%3E%3Cg id='Page-1' stroke='none' stroke-width='1' fill='none' fill-rule='evenodd'%3E%3Cpath d='M10.0418527,0.894571939 L0.309709821,0.894571939 C0.235791888,0.894571939 0.17578125,0.834156736 0.17578125,0.759740479 L0.17578125,0.220414636 C0.17578125,0.145998379 0.235791888,0.0855831754 0.309709821,0.0855831754 L10.0418527,0.0855831754 C10.1157706,0.0855831754 10.1757812,0.145998379 10.1757812,0.220414636 L10.1757812,0.759740479 C10.1757812,0.834156736 10.1157706,0.894571939 10.0418527,0.894571939 Z M10.0418527,4.8049452 L0.309709821,4.8049452 C0.235791888,4.8049452 0.17578125,4.74453 0.17578125,4.67011374 L0.17578125,4.1307879 C0.17578125,4.05637164 0.235791888,3.99595644 0.309709821,3.99595644 L10.0418527,3.99595644 C10.1157706,3.99595644 10.1757812,4.05637164 10.1757812,4.1307879 L10.1757812,4.67011374 C10.1757812,4.74453 10.1157706,4.8049452 10.0418527,4.8049452 Z M10.0418527,8.80953919 L0.309709821,8.80953919 C0.235791888,8.80953919 0.17578125,8.74912399 0.17578125,8.67470773 L0.17578125,8.13538189 C0.17578125,8.06096563 0.235791888,8.00055043 0.309709821,8.00055043 L10.0418527,8.00055043 C10.1157706,8.00055043 10.1757812,8.06096563 10.1757812,8.13538189 L10.1757812,8.67470773 C10.1757812,8.74912399 10.1157706,8.80953919 10.0418527,8.80953919 Z' id='bars' fill='currentColor' %3E%3C/path%3E%3C/g%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3C%3Fxml version='1.0' encoding='UTF-8'%3F%3E%3Csvg width='11px' height='9px' viewBox='0 0 11 9' version='1.1' xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink'%3E%3C!-- Generator: Sketch 52.6 (67491) - http://www.bohemiancoding.com/sketch --%3E%3Ctitle%3Ebars%3C/title%3E%3Cdesc%3ECreated with Sketch.%3C/desc%3E%3Cg id='Page-1' stroke='none' stroke-width='1' fill='none' fill-rule='evenodd'%3E%3Cpath d='M10.0418527,0.894571939 L0.309709821,0.894571939 C0.235791888,0.894571939 0.17578125,0.834156736 0.17578125,0.759740479 L0.17578125,0.220414636 C0.17578125,0.145998379 0.235791888,0.0855831754 0.309709821,0.0855831754 L10.0418527,0.0855831754 C10.1157706,0.0855831754 10.1757812,0.145998379 10.1757812,0.220414636 L10.1757812,0.759740479 C10.1757812,0.834156736 10.1157706,0.894571939 10.0418527,0.894571939 Z M10.0418527,4.8049452 L0.309709821,4.8049452 C0.235791888,4.8049452 0.17578125,4.74453 0.17578125,4.67011374 L0.17578125,4.1307879 C0.17578125,4.05637164 0.235791888,3.99595644 0.309709821,3.99595644 L10.0418527,3.99595644 C10.1157706,3.99595644 10.1757812,4.05637164 10.1757812,4.1307879 L10.1757812,4.67011374 C10.1757812,4.74453 10.1157706,4.8049452 10.0418527,4.8049452 Z M10.0418527,8.80953919 L0.309709821,8.80953919 C0.235791888,8.80953919 0.17578125,8.74912399 0.17578125,8.67470773 L0.17578125,8.13538189 C0.17578125,8.06096563 0.235791888,8.00055043 0.309709821,8.00055043 L10.0418527,8.00055043 C10.1157706,8.00055043 10.1757812,8.06096563 10.1757812,8.13538189 L10.1757812,8.67470773 C10.1757812,8.74912399 10.1157706,8.80953919 10.0418527,8.80953919 Z' id='bars' fill='currentColor' %3E%3C/path%3E%3C/g%3E%3C/svg%3E");
  mask-size: 0.7rem 0.7rem;
  -webkit-mask-size: 0.7rem 0.7rem;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  mask-position: center center;
  -webkit-mask-position: center center;
  background-color: var(--vf-color-passive);
}

.vf-list-handle-sm .vf-list-handle-icon {
  width: var(--vf-min-height-input-sm);
  height: var(--vf-min-height-input-sm);
}

.vf-list-handle-lg .vf-list-handle-icon {
  width: var(--vf-min-height-input-lg);
  height: var(--vf-min-height-input-lg);
}

.vf-btn-list-add {
  margin-top: var(--vf-gutter);
}

.vf-btn-list-add.vf-btn-list-add-sm {
  margin-top: var(--vf-gutter-sm);
}

.vf-btn-list-add.vf-btn-list-add-lg {
  margin-top: var(--vf-gutter-lg);
}

.sortable-ghost {
  opacity: 0.6;
}`;te(b0);zs.__file="themes/vueform/templates/elements/ListElement.vue";var tl={};const w0=["name","id","placeholder","disabled","readonly","aria-labelledby"];function y0(t,e,n,r,i,l){const a=J("ElementAddon"),o=J("ElementLabelFloating");return p(),S(N(t.elementLayout),{ref:"container"},ue({element:f(()=>[d("div",{class:h(t.classes.inputContainer)},[t.hasAddonBefore?(p(),S(a,{key:0,type:"before"},{default:f(()=>[M(t.$slots,"addon-before",{},()=>[(p(),S(N(t.fieldSlots["addon-before"]),{el$:t.el$},null,8,["el$"]))])]),_:3})):k("v-if",!0),t.hasAddonAfter?(p(),S(a,{key:1,type:"after"},{default:f(()=>[M(t.$slots,"addon-after",{},()=>[(p(),S(N(t.fieldSlots["addon-after"]),{el$:t.el$},null,8,["el$"]))])]),_:3})):k("v-if",!0),t.hasFloating&&!t.empty?(p(),S(o,{key:2,visible:!t.empty},null,8,["visible"])):k("v-if",!0),d("input",V({type:"search",name:t.name,id:t.fieldId,class:t.classes.input,placeholder:t.Placeholder,disabled:t.isDisabled,readonly:t.isReadonly,"aria-labelledby":t.labelId,autocomplete:"off"},t.attrs,{ref:"input",onBlur:e[0]||(e[0]=(...s)=>t.handleLocationBlur&&t.handleLocationBlur(...s))}),null,16,w0)],2)]),_:2},[de(t.elementSlots,(s,u)=>({name:u,fn:f(()=>[M(t.$slots,u,{el$:t.el$},()=>[(p(),S(N(s),{el$:t.el$},null,8,["el$"]))])])}))]),1536)}tl.render=y0;tl.__file="themes/blank/templates/elements/LocationElement.vue";var Ns={name:"LocationElement",render:tl.render,data(){return{merge:!0,defaultClasses:{container:"vf-text-type",inputContainer:"vf-input-group",inputContainer_sm:"vf-input-group-sm",inputContainer_md:"",inputContainer_lg:"vf-input-group-lg",inputContainer_default:"",inputContainer_disabled:"vf-input-group-disabled",inputContainer_focused:"vf-input-group-focused",inputContainer_success:"vf-input-group-success",inputContainer_danger:"vf-input-group-danger",input:"vf-input-field",input_sm:"",input_md:"",input_lg:"",input_enabled:"",input_disabled:"",input_focused:"",input_success:"",input_danger:"",$inputContainer:(t,{isDisabled:e,Size:n,isSuccess:r,isDanger:i,focused:l})=>[t.inputContainer,t[`inputContainer_${n}`],e?t.inputContainer_disabled:null,!e&&!r&&!i?t.inputContainer_default:null,!e&&l?t.inputContainer_focused:null,!e&&r?t.inputContainer_success:null,!e&&i?t.inputContainer_danger:null],$input:(t,{isDisabled:e,Size:n,isSuccess:r,isDanger:i,focused:l})=>[t.input,t[`input_${n}`],e?t.input_disabled:null,!e&&!r&&!i&&!l?t.input_enabled:null,!e&&l&&!r&&!i?t.input_focused:null,!e&&i?t.input_danger:null,!e&&r?t.input_success:null]}}}},k0=`/* Google */

.pac-container {
  border-color: var(--vf-border-color-input);
  background: var(--vf-bg-input);
}

.pac-item {
  display: flex;
  align-items: center;
  padding: 0.375rem 0.75rem;
  border-color: var(--vf-border-color-input);
  background: var(--vf-bg-input);
  color: var(--vf-color-input);
  cursor: pointer;
}

.pac-item > span:last-of-type {
  font-size: 0.75rem;
  color: var(--vf-color-muted);
}

.pac-item:hover, .pac-item.pac-item-selected {
  background: var(--vf-bg-selected);
}

.pac-item-query {
  font-size: 0.875rem;
  line-height: 1;
  margin-right: 0.25rem;
  padding-right: 0.25rem;
  color: var(--vf-color-input);
}

.pac-icon-marker {
  mask-image: url("data:image/svg+xml,%3csvg viewBox='0 0 384 512' fill='currentColor' xmlns='http://www.w3.org/2000/svg'%3e%3cpath d='M172.268 501.67C26.97 291.031 0 269.413 0 192 0 85.961 85.961 0 192 0s192 85.961 192 192c0 77.413-26.97 99.031-172.268 309.67-9.535 13.774-29.93 13.773-39.464 0zM192 272c44.183 0 80-35.817 80-80s-35.817-80-80-80-80 35.817-80 80 35.817 80 80 80z'%3e%3c/path%3e%3c/svg%3e");
  -webkit-mask-image: url("data:image/svg+xml,%3csvg viewBox='0 0 384 512' fill='currentColor' xmlns='http://www.w3.org/2000/svg'%3e%3cpath d='M172.268 501.67C26.97 291.031 0 269.413 0 192 0 85.961 85.961 0 192 0s192 85.961 192 192c0 77.413-26.97 99.031-172.268 309.67-9.535 13.774-29.93 13.773-39.464 0zM192 272c44.183 0 80-35.817 80-80s-35.817-80-80-80-80 35.817-80 80 35.817 80 80 80z'%3e%3c/path%3e%3c/svg%3e");
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  mask-position: center center;
  -webkit-mask-position: center center;
  mask-size: contain;
  -webkit-mask-size: contain;
  background: var(--vf-bg-icon);
  width: 0.875rem;
  width: 0.875rem;
  margin-right: 0.75rem;
  margin-top: 0;
  padding-top: 1px;
  padding-bottom: 1px;
  box-sizing: content-box !important;
  flex-shrink: 0;
}

.pac-logo:after {
  margin-left: 0.625rem;
  margin-right: 0.625rem;
  margin-bottom: 0.625rem;
}

.pac-icon, .hdpi .pac-icon {
  background-image: none;
}`;te(k0);Ns.__file="themes/vueform/templates/elements/LocationElement.vue";var nl={};const C0=["innerHTML"],E0=["innerHTML"],A0=["aria-roledescription","id","onClick","onKeypress"],L0=["id","innerHTML"];function x0(t,e,n,r,i,l){return p(),S(N(t.elementLayout),{ref:"container"},ue({element:f(()=>[d("div",{class:h(t.classes.grid),style:rn(t.gridStyle),ref:"grid"},[k(" Header row "),k(" First empty column "),t.rowsVisible&&t.colsVisible?(p(),C("div",{key:0,class:h(t.classes.headerFirst)},null,2)):k("v-if",!0),k(" Column headers "),(p(!0),C(ie,null,de(t.resolvedColumns,(a,o)=>(p(),C(ie,null,[t.colsVisible?Te((p(),C("div",{key:0,innerHTML:a.label,class:h(t.classes.header)},null,10,C0)),[[Ve,a.available.value]]):k("v-if",!0)],64))),256)),k(" Remove column "),t.allowRemove&&t.colsVisible?(p(),C("div",{key:1,class:h(t.classes.headerRemove)},null,2)):k("v-if",!0),k(" Content rows "),(p(!0),C(ie,null,de(t.resolvedRows,(a,o)=>(p(),C(ie,null,[k(" Row label "),t.rowsVisible?Te((p(),C("div",{key:0,innerHTML:a.label,class:h(t.classes.rowLabel)},null,10,E0)),[[Ve,a.available.value]]):k("v-if",!0),k(" Input cells "),(p(!0),C(ie,null,de(t.resolvedColumns,(s,u)=>Te((p(),C("div",{class:h(t.classes.cell)},[d("div",{class:h(t.classes.cellWrapper(t.resolveColType(s),t.resolveComponentName(o,u)))},[(p(),S(N(t.resolveComponentType(s)),V({ref_for:!0},t.cells[o][u],{key:t.cells[o][u].name}),null,16))],2)],2)),[[Ve,a.available.value&&s.available.value]])),256)),k(" Remove column "),t.allowRemove?(p(),C("div",{key:1,class:h(t.classes.rowRemove)},[d("div",{"aria-roledescription":t.form$.translations.vueform.a11y.list.remove,class:h(t.classes.remove),id:`${t.path}-${o}-remove-button`,onClick:Le(s=>t.handleRemove(o),["prevent"]),onKeypress:Ue(s=>t.handleRemove(o),["space","enter"]),role:"button",tabindex:"0"},[d("span",{class:h(t.classes.removeIcon)},null,2)],42,A0)],2)):k("v-if",!0)],64))),256))],6),k(" Add button "),t.allowAdd?(p(),C("div",{key:0,class:h(t.classes.add),id:`${t.fieldId}-add-button`,onClick:e[0]||(e[0]=Le((...a)=>t.handleAdd&&t.handleAdd(...a),["prevent"])),onKeypress:e[1]||(e[1]=Ue((...a)=>t.handleAdd&&t.handleAdd(...a),["enter","space"])),innerHTML:t.addLabel,role:"button",tabindex:"0"},null,42,L0)):k("v-if",!0)]),_:2},[de(t.elementSlots,(a,o)=>({name:o,fn:f(()=>[M(t.$slots,o,{el$:t.el$},()=>[(p(),S(N(a),{el$:t.el$},null,8,["el$"]))])])}))]),1536)}nl.render=x0;nl.__file="themes/blank/templates/elements/MatrixElement.vue";var Vs={name:"MatrixElement",render:nl.render,data(){return{merge:!0,defaultClasses:{container:"vf-matrix-container",grid:"vf-matrix-grid",grid_scrollable:"is-scrollable",headerFirst:"vf-matrix-header-first",header:"vf-matrix-header",header_padding:"has-padding",header_sticky:"is-sticky",header_not_sticky:"is-not-sticky",header_wrap:"is-wrap",header_nowrap:"is-nowrap",header_sm:"vf-matrix-header-sm",header_md:"",header_lg:"vf-matrix-header-lg",headerRemove:"vf-matrix-header-remove",rowLabel:"vf-matrix-row-label",rowLabel_sticky:"is-sticky",rowLabel_not_sticky:"is-not-sticky",rowLabel_wrap:"is-wrap",rowLabel_nowrap:"is-nowrap",cell:"vf-matrix-cell",cell_sm:"vf-matrix-cell-sm",cell_md:"",cell_lg:"vf-matrix-cell-lg",cellWrapper:"vf-matrix-cell-wrapper",cellWrapper_padding:"has-padding",cellWrapper_centered:"is-centered",cellWrapper_error:"has-error",cellWrapper_success:"has-success",rowRemove:"vf-matrix-row-remove",remove:"vf-matrix-remove",removeIcon:"vf-matrix-remove-icon",add:"vf-btn vf-btn-primary vf-btn-small vf-matrix-add",add_sm:"vf-btn-small-sm vf-matrix-add-sm",add_md:"",add_lg:"vf-btn-small-lg vf-matrix-add-lg",$grid:(t,{scrollable:e})=>[t.grid,e?t.grid_scrollable:null],$header:(t,{Size:e,padding:n,stickyCols:r,colWrap:i})=>[t.header,t[`header_${e}`],n?t.header_padding:null,r?t.header_sticky:null,i?t.header_wrap:t.header_nowrap],$rowLabel:(t,{stickyRows:e,rowWrap:n})=>[t.rowLabel,e?t.rowLabel_sticky:null,n?t.rowLabel_wrap:t.rowLabel_nowrap],$cell:(t,{Size:e})=>[t.cell,t[`cell_${e}`]],$cellWrapper:(t,{padding:e,centered:n,cells$:r})=>(i,l)=>[t.cellWrapper,e?t.cellWrapper_padding:null,["radio","checkbox","toggle"].includes(i)?t.cellWrapper_centered:null,r[l]?.error?t.cellWrapper_error:null,r[l]?.isSuccess?t.cellWrapper_success:null],$add:(t,{Size:e})=>[t.add,t[`add_${e}`]],$remove:(t,{removeHover:e})=>[t.remove,e?t.remove_hover:null]}}}},T0=`/* Some styles are contained in _table.scss */

.vf-matrix-grid {
  display: grid;
}

.vf-matrix-grid.is-scrollable {
  overflow: auto;
}

.vf-matrix-header {
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  min-height: var(--vf-min-height-input);
}

.vf-matrix-header.has-padding {
  padding-left: 0.5rem;
  padding-right: 0.5rem;
}

.vf-matrix-header.is-sticky {
  position: sticky;
  top: 0;
  backdrop-filter: blur(64px);
  z-index: 1;
}

.vf-matrix-header.is-nowrap {
  white-space: nowrap;
}

.vf-matrix-header.vf-matrix-header-sm {
  min-height: var(--vf-min-height-input-sm);
}

.vf-matrix-header.vf-matrix-header-lg {
  min-height: var(--vf-min-height-input-lg);
}

.vf-matrix-row-label {
  display: flex;
  align-items: center;
  padding-right: 0.5rem;
}

.vf-matrix-row-label.is-sticky {
  position: sticky;
  left: 0;
  backdrop-filter: blur(64px);
  z-index: 1;
}

.vf-matrix-row-label.is-nowrap {
  white-space: nowrap;
}

.vf-matrix-cell {
  display: grid;
  align-items: center;
  min-height: var(--vf-min-height-input);
}

.vf-matrix-cell.vf-matrix-cell-sm {
  min-height: var(--vf-min-height-input-sm);
}

.vf-matrix-cell.vf-matrix-cell-lg {
  min-height: var(--vf-min-height-input-lg);
}

.vf-matrix-cell-wrapper {
  width: 100%;
  height: 100%;
  display: grid;
  align-items: center;
}

.vf-matrix-cell-wrapper.has-padding {
  padding-left: 0.5rem;
  padding-right: 0.5rem;
}

.vf-matrix-cell-wrapper.is-centered {
  justify-content: center;
}

.vf-matrix-row-remove {
  position: sticky;
  right: 0;
  backdrop-filter: blur(64px);
  z-index: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 2.5rem;
}

.vf-matrix-remove {
  width: 1rem;
  height: 1rem;
  padding: 0.125rem;
  box-sizing: content-box !important;
  background-color: var(--vf-bg-passive);
  border-radius: 999px;
  transition: 0.15s;
}

.vf-matrix-remove:hover {
  filter: brightness(0.9);
}

.vf-matrix-remove-icon {
  display: flex;
  width: 100%;
  height: 100%;
  align-items: center;
  justify-content: center;
  mask-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 320 512' fill='currentColor' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M207.6 256l107.72-107.72c6.23-6.23 6.23-16.34 0-22.58l-25.03-25.03c-6.23-6.23-16.34-6.23-22.58 0L160 208.4 52.28 100.68c-6.23-6.23-16.34-6.23-22.58 0L4.68 125.7c-6.23 6.23-6.23 16.34 0 22.58L112.4 256 4.68 363.72c-6.23 6.23-6.23 16.34 0 22.58l25.03 25.03c6.23 6.23 16.34 6.23 22.58 0L160 303.6l107.72 107.72c6.23 6.23 16.34 6.23 22.58 0l25.03-25.03c6.23-6.23 6.23-16.34 0-22.58L207.6 256z'%3E%3C/path%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 320 512' fill='currentColor' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M207.6 256l107.72-107.72c6.23-6.23 6.23-16.34 0-22.58l-25.03-25.03c-6.23-6.23-16.34-6.23-22.58 0L160 208.4 52.28 100.68c-6.23-6.23-16.34-6.23-22.58 0L4.68 125.7c-6.23 6.23-6.23 16.34 0 22.58L112.4 256 4.68 363.72c-6.23 6.23-6.23 16.34 0 22.58l25.03 25.03c6.23 6.23 16.34 6.23 22.58 0L160 303.6l107.72 107.72c6.23 6.23 16.34 6.23 22.58 0l25.03-25.03c6.23-6.23 6.23-16.34 0-22.58L207.6 256z'%3E%3C/path%3E%3C/svg%3E");
  mask-size: 0.75rem 0.75rem;
  -webkit-mask-size: 0.75rem 0.75rem;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  mask-position: center center;
  -webkit-mask-position: center center;
  background-color: var(--vf-color-passive);
}

.vf-matrix-add {
  margin-top: var(--vf-gutter);
}

.vf-matrix-add.vf-matrix-add-sm {
  margin-top: var(--vf-gutter-sm);
}

.vf-matrix-add.vf-matrix-add-lg {
  margin-top: var(--vf-gutter-lg);
}`;te(T0);Vs.__file="themes/vueform/templates/elements/MatrixElement.vue";var rl={};const S0=["aria-labelledby","aria-placeholder"],_0=["id","accept","disabled"];function M0(t,e,n,r,i,l){const a=J("DragAndDrop");return p(),S(N(t.elementLayout),{multiple:!0,ref:"container"},ue({element:f(()=>[k(" Drag n drop "),t.drop&&t.canDrop&&t.hasAdd?(p(),S(a,{key:0,title:t.form$.translations.vueform.elements[t.type].dndTitle,description:t.form$.translations.vueform.elements[t.type].dndDescription,disabled:t.isDisabled,class:h(t.classes.dnd),onClick:t.handleClick,onDrop:t.handleDrop},null,8,["title","description","disabled","class","onClick","onDrop"])):t.hasAdd?(p(),C(ie,{key:1},[k(" Upload button "),d("div",V(t.aria,{class:t.classes.button,"aria-labelledby":t.labelId,"aria-placeholder":t.form$.translations.vueform.elements.multifile.uploadButton,onClick:e[0]||(e[0]=Le((...o)=>t.handleClick&&t.handleClick(...o),["prevent"])),onKeypress:e[1]||(e[1]=Ue((...o)=>t.handleClick&&t.handleClick(...o),["enter","space"])),role:"button",tabindex:"0"}),Re(t.form$.translations.vueform.elements.multifile.uploadButton),17,S0)],2112)):k("v-if",!0),k(" Actual input field "),Te(d("input",{multiple:"",id:t.fieldId,type:"file",onChange:e[2]||(e[2]=(...o)=>t.handleChange&&t.handleChange(...o)),accept:t.accept,disabled:t.isDisabled,ref:"input"},null,40,_0),[[Ve,!1]]),Te((p(),C("div",{class:h(t.classes.list),key:`${t.fieldId}-${t.length}`,ref:"list"},[(p(!0),C(ie,null,de(t.value,(o,s)=>(p(),C("div",{key:s,class:h(t.classes.listItem)},[t.prototype.type?(p(),S(N(t.component(t.prototype)),V({key:0,ref_for:!0},t.prototype,{disabled:!t.hasRemove,embed:!0,name:s,onRemove:u=>t.remove(s)}),null,16,["disabled","name","onRemove"])):k("v-if",!0),k(" Sort handle "),t.hasSort?(p(),C("span",{key:1,class:h(t.classes.handle),"data-handle":""},[d("span",{class:h(t.classes.handleIcon)},null,2)],2)):k("v-if",!0)],2))),128))],2)),[[Ve,!t.empty]])]),_:2},[de(t.elementSlots,(o,s)=>({name:s,fn:f(()=>[M(t.$slots,s,{el$:t.el$},()=>[(p(),S(N(o),{el$:t.el$},null,8,["el$"]))])])}))]),1536)}rl.render=M0;rl.__file="themes/blank/templates/elements/MultifileElement.vue";var js={name:"MultifileElement",render:rl.render,data(){return{merge:!0,defaultClasses:{container:"vf-text-type",list:"vf-multifile-list",list_sm:"vf-multifile-list-sm",list_md:"",list_lg:"vf-multifile-list-lg",list_file:"vf-multifile-list-file",list_file_sm:"",list_file_md:"",list_file_lg:"",list_image:"vf-multifile-list-image",list_image_sm:"vf-multifile-list-image-sm",list_image_md:"",list_image_lg:"vf-multifile-list-image-lg",list_gallery:"vf-multifile-list-gallery",list_gallery_sm:"vf-multifile-list-gallery-sm",list_gallery_md:"",list_gallery_lg:"vf-multifile-list-gallery-lg",list_disabled:"vf-multifile-list-disabled",list_sorting:"vf-multifile-list-sorting",listItem:"",handle:"",handle_file:"vf-multifile-handle-file",handle_file_sm:"vf-multifile-handle-file-sm",handle_file_md:"",handle_file_lg:"vf-multifile-handle-file-lg",handle_image:"vf-multifile-handle-image",handle_image_sm:"vf-multifile-handle-image-sm",handle_image_md:"",handle_image_lg:"vf-multifile-handle-image-lg",handle_gallery:"vf-multifile-handle-gallery",handle_gallery_sm:"",handle_gallery_md:"",handle_gallery_lg:"",handleIcon:"",handleIcon_file:"vf-multifile-handle-icon-file",handleIcon_image:"vf-multifile-handle-icon-image",handleIcon_gallery:"vf-multifile-handle-icon-gallery",dnd:"",button:"vf-btn vf-btn-secondary",button_enabled:"",button_disabled:"vf-btn-disabled",button_sm:"vf-btn-sm",button_md:"",button_lg:"vf-btn-lg",$list:(t,{isDisabled:e,sorting:n,view:r,Size:i})=>[t.list,t[`list_${i}`],e?t.list_disabled:null,n?t.list_sorting:null,t[`list_${r}`],t[`list_${r}_${i}`]],$handle:(t,{view:e,Size:n})=>[t.handle,t[`handle_${e}`],t[`handle_${e}_${n}`]],$handleIcon:(t,{view:e})=>[t.handleIcon,t[`handleIcon_${e}`]],$button:(t,{isDisabled:e,preparing:n,Size:r})=>[t.button,t[`button_${r}`],!e&&!n?t.button_enabled:null,e||n?t.button_disabled:null]}}}},I0=`/* Some styles are contained in Vueform.vue */

.vf-multifile-list {
  margin-top: var(--vf-gutter);
}

.vf-multifile-list.vf-multifile-list-sm {
  margin-top: var(--vf-gutter-sm);
}

.vf-multifile-list.vf-multifile-list-lg {
  margin-top: var(--vf-gutter-lg);
}

.vf-multifile-list-file,
.vf-multifile-list-image {
  display: grid;
}

.vf-multifile-list-file > .vf-row,
.vf-multifile-list-image > .vf-row {
  position: relative;
}

.vf-multifile-list-file > .vf-row:hover .vf-multifile-handle-file,
.vf-multifile-list-file > .vf-row:hover .vf-multifile-handle-image,
.vf-multifile-list-image > .vf-row:hover .vf-multifile-handle-file,
.vf-multifile-list-image > .vf-row:hover .vf-multifile-handle-image {
  visibility: visible;
  opacity: 1;
}

.vf-multifile-list-file.vf-multifile-list-sorting > div:hover .vf-multifile-handle-file,
.vf-multifile-list-file.vf-multifile-list-sorting > div:hover .vf-multifile-handle-image,
.vf-multifile-list-image.vf-multifile-list-sorting > div:hover .vf-multifile-handle-file,
.vf-multifile-list-image.vf-multifile-list-sorting > div:hover .vf-multifile-handle-image {
  visibility: hidden;
  opacity: 0;
}

.vf-multifile-list-file {
  row-gap: calc(var(--vf-gutter) / 2);
}

.vf-multifile-list-file.vf-multifile-list-file-sm {
  row-gap: calc(var(--vf-gutter-sm) / 2);
}

.vf-multifile-list-file.vf-multifile-list-file-lg {
  row-gap: calc(var(--vf-gutter-lg) / 2);
}

.vf-multifile-list-image {
  row-gap: calc(var(--vf-gutter) / 2);
}

.vf-multifile-list-image.vf-multifile-list-image-sm {
  row-gap: calc(var(--vf-gutter-sm) / 2);
}

.vf-multifile-list-image.vf-multifile-list-image-lg {
  row-gap: calc(var(--vf-gutter-lg) / 2);
}

.vf-multifile-list-gallery {
  display: flex;
  flex-wrap: wrap;
  gap: calc(var(--vf-gutter) / 2);
}

.vf-multifile-list-gallery.vf-multifile-list-sorting > div:hover .vf-multifile-handle-gallery {
  visibility: hidden;
  opacity: 0;
}

.vf-multifile-list-gallery > div {
  position: relative;
}

.vf-multifile-list-gallery > div:hover .vf-multifile-handle-gallery {
  visibility: visible;
  opacity: 1;
}

.vf-multifile-handle-file,
.vf-multifile-handle-image {
  position: absolute;
  left: var(--vf-gutter);
  transform: translateX(-100%);
  top: 0;
  cursor: grab;
  visibility: hidden;
  opacity: 0;
  transition: 0.3s;
}

.vf-multifile-handle-file:active,
.vf-multifile-handle-image:active {
  cursor: grabbing;
}

.vf-multifile-handle-icon-file,
.vf-multifile-handle-icon-image {
  display: flex;
  align-items: center;
  justify-content: center;
  background-repeat: no-repeat;
  background-position: center center;
  width: var(--vf-min-height-input);
  height: var(--vf-min-height-input);
  mask-image: url("data:image/svg+xml,%3C%3Fxml version='1.0' encoding='UTF-8'%3F%3E%3Csvg width='11px' height='9px' viewBox='0 0 11 9' version='1.1' xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink'%3E%3C!-- Generator: Sketch 52.6 (67491) - http://www.bohemiancoding.com/sketch --%3E%3Ctitle%3Ebars%3C/title%3E%3Cdesc%3ECreated with Sketch.%3C/desc%3E%3Cg id='Page-1' stroke='none' stroke-width='1' fill='none' fill-rule='evenodd'%3E%3Cpath d='M10.0418527,0.894571939 L0.309709821,0.894571939 C0.235791888,0.894571939 0.17578125,0.834156736 0.17578125,0.759740479 L0.17578125,0.220414636 C0.17578125,0.145998379 0.235791888,0.0855831754 0.309709821,0.0855831754 L10.0418527,0.0855831754 C10.1157706,0.0855831754 10.1757812,0.145998379 10.1757812,0.220414636 L10.1757812,0.759740479 C10.1757812,0.834156736 10.1157706,0.894571939 10.0418527,0.894571939 Z M10.0418527,4.8049452 L0.309709821,4.8049452 C0.235791888,4.8049452 0.17578125,4.74453 0.17578125,4.67011374 L0.17578125,4.1307879 C0.17578125,4.05637164 0.235791888,3.99595644 0.309709821,3.99595644 L10.0418527,3.99595644 C10.1157706,3.99595644 10.1757812,4.05637164 10.1757812,4.1307879 L10.1757812,4.67011374 C10.1757812,4.74453 10.1157706,4.8049452 10.0418527,4.8049452 Z M10.0418527,8.80953919 L0.309709821,8.80953919 C0.235791888,8.80953919 0.17578125,8.74912399 0.17578125,8.67470773 L0.17578125,8.13538189 C0.17578125,8.06096563 0.235791888,8.00055043 0.309709821,8.00055043 L10.0418527,8.00055043 C10.1157706,8.00055043 10.1757812,8.06096563 10.1757812,8.13538189 L10.1757812,8.67470773 C10.1757812,8.74912399 10.1157706,8.80953919 10.0418527,8.80953919 Z' id='bars' fill='currentColor' %3E%3C/path%3E%3C/g%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3C%3Fxml version='1.0' encoding='UTF-8'%3F%3E%3Csvg width='11px' height='9px' viewBox='0 0 11 9' version='1.1' xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink'%3E%3C!-- Generator: Sketch 52.6 (67491) - http://www.bohemiancoding.com/sketch --%3E%3Ctitle%3Ebars%3C/title%3E%3Cdesc%3ECreated with Sketch.%3C/desc%3E%3Cg id='Page-1' stroke='none' stroke-width='1' fill='none' fill-rule='evenodd'%3E%3Cpath d='M10.0418527,0.894571939 L0.309709821,0.894571939 C0.235791888,0.894571939 0.17578125,0.834156736 0.17578125,0.759740479 L0.17578125,0.220414636 C0.17578125,0.145998379 0.235791888,0.0855831754 0.309709821,0.0855831754 L10.0418527,0.0855831754 C10.1157706,0.0855831754 10.1757812,0.145998379 10.1757812,0.220414636 L10.1757812,0.759740479 C10.1757812,0.834156736 10.1157706,0.894571939 10.0418527,0.894571939 Z M10.0418527,4.8049452 L0.309709821,4.8049452 C0.235791888,4.8049452 0.17578125,4.74453 0.17578125,4.67011374 L0.17578125,4.1307879 C0.17578125,4.05637164 0.235791888,3.99595644 0.309709821,3.99595644 L10.0418527,3.99595644 C10.1157706,3.99595644 10.1757812,4.05637164 10.1757812,4.1307879 L10.1757812,4.67011374 C10.1757812,4.74453 10.1157706,4.8049452 10.0418527,4.8049452 Z M10.0418527,8.80953919 L0.309709821,8.80953919 C0.235791888,8.80953919 0.17578125,8.74912399 0.17578125,8.67470773 L0.17578125,8.13538189 C0.17578125,8.06096563 0.235791888,8.00055043 0.309709821,8.00055043 L10.0418527,8.00055043 C10.1157706,8.00055043 10.1757812,8.06096563 10.1757812,8.13538189 L10.1757812,8.67470773 C10.1757812,8.74912399 10.1157706,8.80953919 10.0418527,8.80953919 Z' id='bars' fill='currentColor' %3E%3C/path%3E%3C/g%3E%3C/svg%3E");
  mask-size: 0.7rem 0.7rem;
  -webkit-mask-size: 0.7rem 0.7rem;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  mask-position: center center;
  -webkit-mask-position: center center;
  background-color: currentColor;
}

.vf-multifile-handle-file.vf-multifile-handle-file-sm .vf-multifile-handle-icon-file {
  width: var(--vf-min-height-input-sm);
  height: var(--vf-min-height-input-sm);
}

.vf-multifile-handle-file.vf-multifile-handle-file-lg .vf-multifile-handle-icon-file {
  width: var(--vf-min-height-input-lg);
  height: var(--vf-min-height-input-lg);
}

.vf-multifile-handle-image.vf-multifile-handle-image-sm .vf-multifile-handle-icon-image {
  width: var(--vf-min-height-input-sm);
  height: var(--vf-min-height-input-sm);
}

.vf-multifile-handle-image.vf-multifile-handle-image-lg .vf-multifile-handle-icon-image {
  width: var(--vf-min-height-input-lg);
  height: var(--vf-min-height-input-lg);
}

.vf-multifile-handle-gallery {
  position: absolute;
  cursor: grab;
  visibility: hidden;
  opacity: 0;
  transition: 0.3s;
  border-radius: 999px;
  left: 0.1875rem;
  top: 0.1875rem;
  transform: none;
  background: var(--vf-gray-200);
}

.vf-multifile-handle-gallery:active {
  cursor: grabbing;
}

.vf-multifile-handle-gallery:hover {
  background-color: var(--vf-gray-300);
}

.vf-multifile-handle-icon-gallery {
  display: flex;
  align-items: center;
  justify-content: center;
  background-repeat: no-repeat;
  background-position: center center;
  width: 1rem;
  height: 1rem;
  mask-size: 0.75rem 0.75rem;
  -webkit-mask-size: 0.75rem 0.75rem;
  mask-image: url("data:image/svg+xml,%3C%3Fxml version='1.0' encoding='UTF-8'%3F%3E%3Csvg width='12px' height='13px' viewBox='0 0 12 13' version='1.1' xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink'%3E%3Cg stroke='none' stroke-width='1' fill='%236B7280' fill-rule='evenodd'%3E%3Cpath d='M7.93929644,10.4886534 L6.22140503,12.2179202 C6.11156489,12.3277374 5.93349525,12.3277374 5.82363223,12.2179202 L4.10576371,10.4886534 C3.99594646,10.3788132 3.99594646,10.2007436 4.10576371,10.0909263 L4.27147376,9.92521629 C4.381291,9.81537616 4.55938354,9.81537616 4.66922367,9.92521629 L5.62409352,10.89137 L5.64753097,10.89137 L5.64753097,6.67528507 L1.43144605,6.67528507 L1.43144605,6.69872252 L2.39762264,7.65359237 C2.50746277,7.76340962 2.50746277,7.94150215 2.39762264,8.05134228 L2.2318897,8.21705233 C2.12207245,8.32686958 1.94400281,8.32686958 1.83416268,8.21705233 L0.104918753,6.49916092 C-0.0048984896,6.38932079 -0.0048984896,6.21125115 0.104918753,6.10138813 L1.83418557,4.38349671 C1.9440257,4.27367947 2.12209534,4.27367947 2.23193547,4.38349671 L2.39766841,4.54922966 C2.50750855,4.6590469 2.50750855,4.83713943 2.39766841,4.94697956 L1.43144605,5.90184942 L1.43144605,5.92528686 L5.64753097,5.92528686 L5.64753097,1.70920194 L5.62409352,1.70920194 L4.66922367,2.67537853 C4.55940642,2.78521867 4.38131389,2.78521867 4.27147376,2.67537853 L4.10576371,2.50964559 C3.99594646,2.39982835 3.99592358,2.2217587 4.10576371,2.11191857 L5.82365512,0.382651762 C5.93349525,0.272834518 6.11156489,0.272834518 6.22142791,0.382651762 L7.93931933,2.11191857 C8.04913657,2.2217587 8.04913657,2.39982835 7.93931933,2.50966848 L7.77358638,2.67540142 C7.66376914,2.78524155 7.48567661,2.78524155 7.37583648,2.67540142 L6.42096662,1.70920194 L6.39752918,1.70920194 L6.39752918,5.92528686 L10.6136141,5.92528686 L10.6136141,5.90184942 L9.64743751,4.94697956 C9.53759737,4.83716232 9.53759737,4.65906979 9.64743751,4.54922966 L9.81317045,4.3835196 C9.92298769,4.27370236 10.1010573,4.27370236 10.2108975,4.3835196 L11.9401643,6.10141102 C12.0500044,6.21125115 12.0499815,6.38932079 11.9401643,6.49918381 L10.2108975,8.21707522 C10.1010573,8.32689246 9.92298769,8.32689246 9.81317045,8.21707522 L9.64743751,8.05136517 C9.53759737,7.94154792 9.53759737,7.76345539 9.64743751,7.65361526 L10.6136141,6.69872252 L10.6136141,6.67528507 L6.39752918,6.67528507 L6.39752918,10.89137 L6.42096662,10.89137 L7.37583648,9.9251934 C7.48565372,9.81535327 7.66374625,9.81535327 7.77358638,9.9251934 L7.93929644,10.0909263 C8.04911368,10.2007207 8.04911368,10.3787903 7.93929644,10.4886534 Z' id='arrows' fill='currentColor'%3E%3C/path%3E%3C/g%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3C%3Fxml version='1.0' encoding='UTF-8'%3F%3E%3Csvg width='12px' height='13px' viewBox='0 0 12 13' version='1.1' xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink'%3E%3Cg stroke='none' stroke-width='1' fill='%236B7280' fill-rule='evenodd'%3E%3Cpath d='M7.93929644,10.4886534 L6.22140503,12.2179202 C6.11156489,12.3277374 5.93349525,12.3277374 5.82363223,12.2179202 L4.10576371,10.4886534 C3.99594646,10.3788132 3.99594646,10.2007436 4.10576371,10.0909263 L4.27147376,9.92521629 C4.381291,9.81537616 4.55938354,9.81537616 4.66922367,9.92521629 L5.62409352,10.89137 L5.64753097,10.89137 L5.64753097,6.67528507 L1.43144605,6.67528507 L1.43144605,6.69872252 L2.39762264,7.65359237 C2.50746277,7.76340962 2.50746277,7.94150215 2.39762264,8.05134228 L2.2318897,8.21705233 C2.12207245,8.32686958 1.94400281,8.32686958 1.83416268,8.21705233 L0.104918753,6.49916092 C-0.0048984896,6.38932079 -0.0048984896,6.21125115 0.104918753,6.10138813 L1.83418557,4.38349671 C1.9440257,4.27367947 2.12209534,4.27367947 2.23193547,4.38349671 L2.39766841,4.54922966 C2.50750855,4.6590469 2.50750855,4.83713943 2.39766841,4.94697956 L1.43144605,5.90184942 L1.43144605,5.92528686 L5.64753097,5.92528686 L5.64753097,1.70920194 L5.62409352,1.70920194 L4.66922367,2.67537853 C4.55940642,2.78521867 4.38131389,2.78521867 4.27147376,2.67537853 L4.10576371,2.50964559 C3.99594646,2.39982835 3.99592358,2.2217587 4.10576371,2.11191857 L5.82365512,0.382651762 C5.93349525,0.272834518 6.11156489,0.272834518 6.22142791,0.382651762 L7.93931933,2.11191857 C8.04913657,2.2217587 8.04913657,2.39982835 7.93931933,2.50966848 L7.77358638,2.67540142 C7.66376914,2.78524155 7.48567661,2.78524155 7.37583648,2.67540142 L6.42096662,1.70920194 L6.39752918,1.70920194 L6.39752918,5.92528686 L10.6136141,5.92528686 L10.6136141,5.90184942 L9.64743751,4.94697956 C9.53759737,4.83716232 9.53759737,4.65906979 9.64743751,4.54922966 L9.81317045,4.3835196 C9.92298769,4.27370236 10.1010573,4.27370236 10.2108975,4.3835196 L11.9401643,6.10141102 C12.0500044,6.21125115 12.0499815,6.38932079 11.9401643,6.49918381 L10.2108975,8.21707522 C10.1010573,8.32689246 9.92298769,8.32689246 9.81317045,8.21707522 L9.64743751,8.05136517 C9.53759737,7.94154792 9.53759737,7.76345539 9.64743751,7.65361526 L10.6136141,6.69872252 L10.6136141,6.67528507 L6.39752918,6.67528507 L6.39752918,10.89137 L6.42096662,10.89137 L7.37583648,9.9251934 C7.48565372,9.81535327 7.66374625,9.81535327 7.77358638,9.9251934 L7.93929644,10.0909263 C8.04911368,10.2007207 8.04911368,10.3787903 7.93929644,10.4886534 Z' id='arrows' fill='currentColor'%3E%3C/path%3E%3C/g%3E%3C/svg%3E");
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  mask-position: center center;
  -webkit-mask-position: center center;
  background-color: var(--vf-gray-600);
}

.sortable-ghost {
  opacity: 0.6;
}`;te(I0);js.__file="themes/vueform/templates/elements/MultifileElement.vue";function nn(t){return t==null}function B0(t,e,n){const{object:r,valueProp:i,mode:l}=rt(t),a=He().proxy,o=n.iv,s=(m,E=!0)=>{o.value=c(m);const g=u(m);e.emit("change",g,a),E&&(e.emit("input",g),e.emit("update:modelValue",g))},u=m=>r.value||nn(m)?m:Array.isArray(m)?m.map(E=>E[i.value]):m[i.value],c=m=>nn(m)?l.value==="single"?{}:[]:m;return{update:s}}function et(t){return Fd(()=>({get:t,set:()=>{}}))}function D0(t,e){const{value:n,modelValue:r,mode:i,valueProp:l}=rt(t),a=ce(i.value!=="single"?[]:{}),o=et(()=>r.value!==void 0?r.value:n.value),s=j(()=>i.value==="single"?a.value[l.value]:a.value.map(c=>c[l.value])),u=et(()=>i.value!=="single"?a.value.map(c=>c[l.value]).join(","):a.value[l.value]);return{iv:a,internalValue:a,ev:o,externalValue:o,textValue:u,plainValue:s}}function R0(t,e,n){const{regex:r}=rt(t),i=He().proxy,l=n.isOpen,a=n.open,o=ce(null),s=()=>{o.value=""},u=E=>{o.value=E.target.value},c=E=>{if(r.value){let g=r.value;typeof g=="string"&&(g=new RegExp(g)),E.key.match(g)||E.preventDefault()}},m=E=>{if(r.value){let b=(E.clipboardData||window.clipboardData).getData("Text"),L=r.value;typeof L=="string"&&(L=new RegExp(L)),b.split("").every(x=>!!x.match(L))||E.preventDefault()}e.emit("paste",E,i)};return je(o,E=>{!l.value&&E&&a(),e.emit("search-change",E,i)}),{search:o,clearSearch:s,handleSearchInput:u,handleKeypress:c,handlePaste:m}}function F0(t,e,n){const{groupSelect:r,mode:i,groups:l,disabledProp:a}=rt(t),o=ce(null),s=c=>{c===void 0||c!==null&&c[a.value]||l.value&&c&&c.group&&(i.value==="single"||!r.value)||(o.value=c)};return{pointer:o,setPointer:s,clearPointer:()=>{s(null)}}}function Si(t,e=!0){return e?String(t).toLowerCase().trim():String(t).toLowerCase().normalize("NFD").trim().replace(/æ/g,"ae").replace(/œ/g,"oe").replace(/ø/g,"o").replace(new RegExp("\\p{Diacritic}","gu"),"")}function O0(t){return Object.prototype.toString.call(t)==="[object Object]"}function $0(t,e){if(t.length!==e.length)return!1;const n=e.slice().sort();return t.slice().sort().every(function(r,i){return r===n[i]})}const Us=(t,e)=>{if(t===e)return!0;if(typeof t!="object"||t===null||typeof e!="object"||e===null)return!1;const n=Object.keys(t),r=Object.keys(e);if(n.length!==r.length)return!1;for(let i of n)if(!r.includes(i)||!Us(t[i],e[i]))return!1;return!0};var H0=Us;function P0(t,e,n){const{options:r,mode:i,trackBy:l,limit:a,hideSelected:o,createTag:s,createOption:u,label:c,appendNewTag:m,appendNewOption:E,multipleLabel:g,object:b,loading:L,delay:x,resolveOnLoad:I,minChars:B,filterResults:_,clearOnSearch:O,clearOnSelect:H,valueProp:R,allowAbsent:Z,groupLabel:U,canDeselect:P,max:ae,strict:ne,closeOnSelect:K,closeOnDeselect:le,groups:we,reverse:he,infinite:me,groupOptions:ge,groupHideEmpty:Ye,groupSelect:be,onCreate:fe,disabledProp:W,searchStart:re,searchFilter:st}=rt(t),ve=He().proxy,pe=n.iv,F=n.ev,D=n.search,se=n.clearSearch,_e=n.update,tt=n.pointer,wt=n.setPointer,ut=n.clearPointer,yt=n.focus,Qt=n.deactivate,dt=n.close,Zt=n.localize,It=ce([]),it=ce([]),ct=ce(!1),pt=ce(null),Bt=ce(me.value&&a.value===-1?10:a.value),Ft=j({get:()=>it.value,set:w=>it.value=w}),Pe=et(()=>s.value||u.value||!1),vt=et(()=>m.value!==void 0?m.value:E.value!==void 0?E.value:!0),nt=j(()=>{if(we.value){let w=Vt.value||[],$=[];return w.forEach(ye=>{Je(ye[ge.value]).forEach($e=>{$.push(Object.assign({},$e,ye[W.value]?{[W.value]:!0}:{}))})}),$}else{let w=Je(it.value||[]);return It.value.length&&(w=w.concat(It.value)),w}}),kt=j(()=>{let w=nt.value;return he.value&&(w=w.reverse()),Et.value.length&&(w=Et.value.concat(w)),Ge(w)}),Dt=j(()=>{let w=kt.value;return Bt.value>0&&(w=w.slice(0,Bt.value)),w}),Vt=j(()=>{if(!we.value)return[];let w=[],$=it.value||[];return It.value.length&&w.push({[U.value]:" ",[ge.value]:[...It.value],__CREATE__:!0}),w.concat($)}),gn=j(()=>{let w=[...Vt.value].map($=>({...$}));return Et.value.length&&(w[0]&&w[0].__CREATE__?w[0][ge.value]=[...Et.value,...w[0][ge.value]]:w=[{[U.value]:" ",[ge.value]:[...Et.value],__CREATE__:!0}].concat(w)),w}),Ct=j(()=>{if(!we.value)return[];let w=gn.value;return at((w||[]).map(($,ye)=>{const $e=Je($[ge.value]);return{...$,index:ye,group:!0,[ge.value]:Ge($e,!1).map(Xe=>Object.assign({},Xe,$[W.value]?{[W.value]:!0}:{})),__VISIBLE__:Ge($e).map(Xe=>Object.assign({},Xe,$[W.value]?{[W.value]:!0}:{}))}}))}),jt=j(()=>{switch(i.value){case"single":return!nn(pe.value[R.value]);case"multiple":case"tags":return!nn(pe.value)&&pe.value.length>0}}),un=j(()=>g.value!==void 0?g.value(pe.value,ve):pe.value&&pe.value.length>1?`${pe.value.length} options selected`:"1 option selected"),Kt=et(()=>!nt.value.length&&!ct.value&&!Et.value.length),Ot=et(()=>nt.value.length>0&&Dt.value.length==0&&(D.value&&we.value||!we.value)),Et=j(()=>Pe.value===!1||!D.value?[]:Ne(D.value)!==-1?[]:[{[R.value]:D.value,[Rt.value[0]]:D.value,[c.value]:D.value,__CREATE__:!0}]),Rt=j(()=>l.value?Array.isArray(l.value)?l.value:[l.value]:[c.value]),Mn=et(()=>{switch(i.value){case"single":return null;case"multiple":case"tags":return[]}}),Kn=et(()=>L.value||ct.value),$t=w=>{switch(typeof w!="object"&&(w=Me(w)),i.value){case"single":_e(w);break;case"multiple":case"tags":_e(pe.value.concat(w));break}e.emit("select",In(w),w,ve)},Ht=w=>{switch(typeof w!="object"&&(w=Me(w)),i.value){case"single":qe();break;case"tags":case"multiple":_e(Array.isArray(w)?pe.value.filter($=>w.map(ye=>ye[R.value]).indexOf($[R.value])===-1):pe.value.filter($=>$[R.value]!=w[R.value]));break}e.emit("deselect",In(w),w,ve)},In=w=>b.value?w:w[R.value],en=w=>{Ht(w)},lr=(w,$)=>{if($.button!==0){$.preventDefault();return}en(w)},qe=()=>{_e(Mn.value),e.emit("clear",ve)},v=w=>{if(w.group!==void 0)return i.value==="single"?!1:Oe(w[ge.value])&&w[ge.value].length;switch(i.value){case"single":return!nn(pe.value)&&(pe.value[R.value]==w[R.value]||typeof pe.value[R.value]=="object"&&typeof w[R.value]=="object"&&H0(pe.value[R.value],w[R.value]));case"tags":case"multiple":return!nn(pe.value)&&pe.value.map($=>$[R.value]).indexOf(w[R.value])!==-1}},A=w=>w[W.value]===!0,T=()=>ae===void 0||ae.value===-1||!jt.value&&ae.value>0?!1:pe.value.length>=ae.value,z=w=>{if(!A(w)){if(fe.value&&!v(w)&&w.__CREATE__&&(w={...w},delete w.__CREATE__,w=fe.value(w,ve),w instanceof Promise)){ct.value=!0,w.then($=>{ct.value=!1,q($)});return}q(w)}},q=w=>{switch(w.__CREATE__&&(w={...w},delete w.__CREATE__),i.value){case"single":if(w&&v(w)){P.value&&Ht(w),le.value&&(ut(),dt());return}w&&ee(w),H.value&&se(),K.value&&(ut(),dt()),w&&$t(w);break;case"multiple":if(w&&v(w)){Ht(w),le.value&&(ut(),dt());return}if(T()){e.emit("max",ve);return}w&&(ee(w),$t(w)),H.value&&se(),o.value&&ut(),K.value&&dt();break;case"tags":if(w&&v(w)){Ht(w),le.value&&(ut(),dt());return}if(T()){e.emit("max",ve);return}w&&ee(w),H.value&&se(),w&&$t(w),o.value&&ut(),K.value&&dt();break}K.value||yt()},Q=w=>{if(!(A(w)||i.value==="single"||!be.value)){switch(i.value){case"multiple":case"tags":Fe(w[ge.value])?Ht(w[ge.value]):$t(w[ge.value].filter($=>pe.value.map(ye=>ye[R.value]).indexOf($[R.value])===-1).filter($=>!$[W.value]).filter(($,ye)=>pe.value.length+1+ye<=ae.value||ae.value===-1)),o.value&&tt.value&&wt(Ct.value.filter($=>!$[W.value])[tt.value.index]);break}K.value&&Qt()}},ee=w=>{Me(w[R.value])===void 0&&Pe.value&&(e.emit("tag",w[R.value],ve),e.emit("option",w[R.value],ve),e.emit("create",w[R.value],ve),vt.value&&Ke(w),se())},Y=()=>{i.value!=="single"&&$t(Dt.value.filter(w=>!w.disabled&&!v(w)))},Fe=w=>w.find($=>!v($)&&!$[W.value])===void 0,Oe=w=>w.find($=>!v($))===void 0,Me=w=>nt.value[nt.value.map($=>String($[R.value])).indexOf(String(w))],Ne=w=>nt.value.findIndex($=>Rt.value.some(ye=>(parseInt($[ye])==$[ye]?parseInt($[ye]):$[ye])===(parseInt(w)==w?parseInt(w):w))),Ee=w=>["tags","multiple"].indexOf(i.value)!==-1&&o.value&&v(w),Ke=w=>{It.value.push(w)},at=w=>Ye.value?w.filter($=>D.value?$.__VISIBLE__.length:$[ge.value].length):w.filter($=>D.value?$.__VISIBLE__.length:!0),Ge=(w,$=!0)=>{let ye=w;if(D.value&&_.value){let $e=st.value;$e||($e=(Xe,or,xi)=>Rt.value.some(Md=>{let Ql=Si(Zt(Xe[Md]),ne.value);return re.value?Ql.startsWith(Si(or,ne.value)):Ql.indexOf(Si(or,ne.value))!==-1})),ye=ye.filter(Xe=>$e(Xe,D.value,ve))}return o.value&&$&&(ye=ye.filter($e=>!Ee($e))),ye},Je=w=>{let $=w;return O0($)&&($=Object.keys($).map(ye=>{let $e=$[ye];return{[R.value]:ye,[Rt.value[0]]:$e,[c.value]:$e}})),$&&Array.isArray($)?$=$.map(ye=>typeof ye=="object"?ye:{[R.value]:ye,[Rt.value[0]]:ye,[c.value]:ye}):$=[],$},tn=()=>{nn(F.value)||(pe.value=ke(F.value))},y=w=>(ct.value=!0,new Promise(($,ye)=>{r.value(D.value,ve).then($e=>{it.value=$e||[],typeof w=="function"&&w($e),ct.value=!1}).catch($e=>{console.error($e),it.value=[],ct.value=!1}).finally(()=>{$()})})),X=()=>{if(jt.value)if(i.value==="single"){let w=Me(pe.value[R.value]);if(w!==void 0){let $=w[c.value];pe.value[c.value]=$,b.value&&(F.value[c.value]=$)}}else pe.value.forEach((w,$)=>{let ye=Me(pe.value[$][R.value]);if(ye!==void 0){let $e=ye[c.value];pe.value[$][c.value]=$e,b.value&&(F.value[$][c.value]=$e)}})},G=w=>{y(w)},ke=w=>nn(w)?i.value==="single"?{}:[]:b.value?w:i.value==="single"?Me(w)||(Z.value?{[c.value]:w,[R.value]:w,[Rt.value[0]]:w}:{}):w.filter($=>!!Me($)||Z.value).map($=>Me($)||{[c.value]:$,[R.value]:$,[Rt.value[0]]:$}),Ie=()=>{pt.value=je(D,w=>{w.length<B.value||!w&&B.value!==0||(ct.value=!0,O.value&&(it.value=[]),setTimeout(()=>{w==D.value&&r.value(D.value,ve).then($=>{(w==D.value||!D.value)&&(it.value=$,tt.value=Dt.value.filter(ye=>ye[W.value]!==!0)[0]||null,ct.value=!1)}).catch($=>{console.error($)})},x.value))},{flush:"sync"})};if(i.value!=="single"&&!nn(F.value)&&!Array.isArray(F.value))throw new Error(`v-model must be an array when using "${i.value}" mode`);return r&&typeof r.value=="function"?I.value?y(tn):b.value==!0&&tn():(it.value=r.value,tn()),x.value>-1&&Ie(),je(x,(w,$)=>{pt.value&&pt.value(),w>=0&&Ie()}),je(F,w=>{if(nn(w)){_e(ke(w),!1);return}switch(i.value){case"single":(b.value?w[R.value]!=pe.value[R.value]:w!=pe.value[R.value])&&_e(ke(w),!1);break;case"multiple":case"tags":$0(b.value?w.map($=>$[R.value]):w,pe.value.map($=>$[R.value]))||_e(ke(w),!1);break}},{deep:!0}),je(r,(w,$)=>{typeof t.options=="function"?I.value&&(!$||w&&w.toString()!==$.toString())&&y():(it.value=t.options,Object.keys(pe.value).length||tn(),X())}),je(c,X),je(a,(w,$)=>{Bt.value=me.value&&w===-1?10:w}),{resolvedOptions:Ft,pfo:kt,fo:Dt,filteredOptions:Dt,hasSelected:jt,multipleLabelText:un,eo:nt,extendedOptions:nt,eg:Vt,extendedGroups:Vt,fg:Ct,filteredGroups:Ct,noOptions:Kt,noResults:Ot,resolving:ct,busy:Kn,offset:Bt,select:$t,deselect:Ht,remove:en,selectAll:Y,clear:qe,isSelected:v,isDisabled:A,isMax:T,getOption:Me,handleOptionClick:z,handleGroupClick:Q,handleTagRemove:lr,refreshOptions:G,resolveOptions:y,refreshLabels:X}}function z0(t,e,n){const{valueProp:r,showOptions:i,searchable:l,groupLabel:a,groups:o,mode:s,groupSelect:u,disabledProp:c,groupOptions:m}=rt(t),E=n.fo,g=n.fg,b=n.handleOptionClick,L=n.handleGroupClick,x=n.search,I=n.pointer,B=n.setPointer,_=n.clearPointer,O=n.multiselect,H=n.isOpen,R=j(()=>E.value.filter(F=>!F[c.value])),Z=j(()=>g.value.filter(F=>!F[c.value])),U=et(()=>s.value!=="single"&&u.value),P=et(()=>I.value&&I.value.group),ae=j(()=>ve(I.value)),ne=j(()=>{const F=P.value?I.value:ve(I.value),D=Z.value.map(_e=>_e[a.value]).indexOf(F[a.value]);let se=Z.value[D-1];return se===void 0&&(se=le.value),se}),K=j(()=>{let F=Z.value.map(D=>D.label).indexOf(P.value?I.value[a.value]:ve(I.value)[a.value])+1;return Z.value.length<=F&&(F=0),Z.value[F]}),le=j(()=>[...Z.value].slice(-1)[0]),we=j(()=>I.value.__VISIBLE__.filter(F=>!F[c.value])[0]),he=j(()=>{const F=ae.value.__VISIBLE__.filter(D=>!D[c.value]);return F[F.map(D=>D[r.value]).indexOf(I.value[r.value])-1]}),me=j(()=>{const F=ve(I.value).__VISIBLE__.filter(D=>!D[c.value]);return F[F.map(D=>D[r.value]).indexOf(I.value[r.value])+1]}),ge=j(()=>[...ne.value.__VISIBLE__.filter(F=>!F[c.value])].slice(-1)[0]),Ye=j(()=>[...le.value.__VISIBLE__.filter(F=>!F[c.value])].slice(-1)[0]),be=F=>I.value&&(!F.group&&I.value[r.value]===F[r.value]||F.group!==void 0&&I.value[a.value]===F[a.value])?!0:void 0,fe=()=>{B(R.value[0]||null)},W=()=>{!I.value||I.value[c.value]===!0||(P.value?L(I.value):b(I.value))},re=()=>{if(I.value===null)B((o.value&&U.value?Z.value[0].__CREATE__?R.value[0]:Z.value[0]:R.value[0])||null);else if(o.value&&U.value){let F=P.value?we.value:me.value;F===void 0&&(F=K.value,F.__CREATE__&&(F=F[m.value][0])),B(F||null)}else{let F=R.value.map(D=>D[r.value]).indexOf(I.value[r.value])+1;R.value.length<=F&&(F=0),B(R.value[F]||null)}$n(()=>{pe()})},st=()=>{if(I.value===null){let F=R.value[R.value.length-1];o.value&&U.value&&(F=Ye.value,F===void 0&&(F=le.value)),B(F||null)}else if(o.value&&U.value){let F=P.value?ge.value:he.value;F===void 0&&(F=P.value?ne.value:ae.value,F.__CREATE__&&(F=ge.value,F===void 0&&(F=ne.value))),B(F||null)}else{let F=R.value.map(D=>D[r.value]).indexOf(I.value[r.value])-1;F<0&&(F=R.value.length-1),B(R.value[F]||null)}$n(()=>{pe()})},ve=F=>Z.value.find(D=>D.__VISIBLE__.map(se=>se[r.value]).indexOf(F[r.value])!==-1),pe=()=>{let F=O.value.querySelector("[data-pointed]");if(!F)return;let D=F.parentElement.parentElement;o.value&&(D=P.value?F.parentElement.parentElement.parentElement:F.parentElement.parentElement.parentElement.parentElement),F.offsetTop+F.offsetHeight>D.clientHeight+D.scrollTop&&(D.scrollTop=F.offsetTop+F.offsetHeight-D.clientHeight),F.offsetTop<D.scrollTop&&(D.scrollTop=F.offsetTop)};return je(x,F=>{l.value&&(F.length&&i.value?fe():_())}),je(H,F=>{if(F&&O&&O.value){let D=O.value.querySelectorAll("[data-selected]")[0];if(!D)return;let se=D.parentElement.parentElement;$n(()=>{se.scrollTop=D.offsetTop})}}),{pointer:I,canPointGroups:U,isPointed:be,setPointerFirst:fe,selectPointer:W,forwardPointer:re,backwardPointer:st}}function Nt(t){if(t==null)return window;if(t.toString()!=="[object Window]"){var e=t.ownerDocument;return e&&e.defaultView||window}return t}function Nn(t){var e=Nt(t).Element;return t instanceof e||t instanceof Element}function Wt(t){var e=Nt(t).HTMLElement;return t instanceof e||t instanceof HTMLElement}function il(t){if(typeof ShadowRoot>"u")return!1;var e=Nt(t).ShadowRoot;return t instanceof e||t instanceof ShadowRoot}var Hn=Math.max,Xr=Math.min,Zn=Math.round;function na(){var t=navigator.userAgentData;return t!=null&&t.brands&&Array.isArray(t.brands)?t.brands.map(function(e){return e.brand+"/"+e.version}).join(" "):navigator.userAgent}function Ws(){return!/^((?!chrome|android).)*safari/i.test(na())}function er(t,e,n){e===void 0&&(e=!1),n===void 0&&(n=!1);var r=t.getBoundingClientRect(),i=1,l=1;e&&Wt(t)&&(i=t.offsetWidth>0&&Zn(r.width)/t.offsetWidth||1,l=t.offsetHeight>0&&Zn(r.height)/t.offsetHeight||1);var a=Nn(t)?Nt(t):window,o=a.visualViewport,s=!Ws()&&n,u=(r.left+(s&&o?o.offsetLeft:0))/i,c=(r.top+(s&&o?o.offsetTop:0))/l,m=r.width/i,E=r.height/l;return{width:m,height:E,top:c,right:u+m,bottom:c+E,left:u,x:u,y:c}}function al(t){var e=Nt(t),n=e.pageXOffset,r=e.pageYOffset;return{scrollLeft:n,scrollTop:r}}function N0(t){return{scrollLeft:t.scrollLeft,scrollTop:t.scrollTop}}function V0(t){return t===Nt(t)||!Wt(t)?al(t):N0(t)}function on(t){return t?(t.nodeName||"").toLowerCase():null}function _n(t){return((Nn(t)?t.ownerDocument:t.document)||window.document).documentElement}function ll(t){return er(_n(t)).left+al(t).scrollLeft}function mn(t){return Nt(t).getComputedStyle(t)}function ol(t){var e=mn(t),n=e.overflow,r=e.overflowX,i=e.overflowY;return/auto|scroll|overlay|hidden/.test(n+i+r)}function j0(t){var e=t.getBoundingClientRect(),n=Zn(e.width)/t.offsetWidth||1,r=Zn(e.height)/t.offsetHeight||1;return n!==1||r!==1}function U0(t,e,n){n===void 0&&(n=!1);var r=Wt(e),i=Wt(e)&&j0(e),l=_n(e),a=er(t,i,n),o={scrollLeft:0,scrollTop:0},s={x:0,y:0};return(r||!r&&!n)&&((on(e)!=="body"||ol(l))&&(o=V0(e)),Wt(e)?(s=er(e,!0),s.x+=e.clientLeft,s.y+=e.clientTop):l&&(s.x=ll(l))),{x:a.left+o.scrollLeft-s.x,y:a.top+o.scrollTop-s.y,width:a.width,height:a.height}}function qs(t){var e=er(t),n=t.offsetWidth,r=t.offsetHeight;return Math.abs(e.width-n)<=1&&(n=e.width),Math.abs(e.height-r)<=1&&(r=e.height),{x:t.offsetLeft,y:t.offsetTop,width:n,height:r}}function vi(t){return on(t)==="html"?t:t.assignedSlot||t.parentNode||(il(t)?t.host:null)||_n(t)}function Qs(t){return["html","body","#document"].indexOf(on(t))>=0?t.ownerDocument.body:Wt(t)&&ol(t)?t:Qs(vi(t))}function gr(t,e){var n;e===void 0&&(e=[]);var r=Qs(t),i=r===((n=t.ownerDocument)==null?void 0:n.body),l=Nt(r),a=i?[l].concat(l.visualViewport||[],ol(r)?r:[]):r,o=e.concat(a);return i?o:o.concat(gr(vi(a)))}function W0(t){return["table","td","th"].indexOf(on(t))>=0}function Xl(t){return!Wt(t)||mn(t).position==="fixed"?null:t.offsetParent}function q0(t){var e=/firefox/i.test(na()),n=/Trident/i.test(na());if(n&&Wt(t)){var r=mn(t);if(r.position==="fixed")return null}var i=vi(t);for(il(i)&&(i=i.host);Wt(i)&&["html","body"].indexOf(on(i))<0;){var l=mn(i);if(l.transform!=="none"||l.perspective!=="none"||l.contain==="paint"||["transform","perspective"].indexOf(l.willChange)!==-1||e&&l.willChange==="filter"||e&&l.filter&&l.filter!=="none")return i;i=i.parentNode}return null}function hi(t){for(var e=Nt(t),n=Xl(t);n&&W0(n)&&mn(n).position==="static";)n=Xl(n);return n&&(on(n)==="html"||on(n)==="body"&&mn(n).position==="static")?e:n||q0(t)||e}var Yt="top",sn="bottom",xn="right",vn="left",sl="auto",mi=[Yt,sn,xn,vn],tr="start",xr="end",Q0="clippingParents",Ks="viewport",sr="popper",K0="reference",Zl=mi.reduce(function(t,e){return t.concat([e+"-"+tr,e+"-"+xr])},[]),G0=[].concat(mi,[sl]).reduce(function(t,e){return t.concat([e,e+"-"+tr,e+"-"+xr])},[]),J0="beforeRead",Y0="read",X0="afterRead",Z0="beforeMain",e1="main",t1="afterMain",n1="beforeWrite",r1="write",i1="afterWrite",a1=[J0,Y0,X0,Z0,e1,t1,n1,r1,i1];function l1(t){var e=new Map,n=new Set,r=[];t.forEach(function(l){e.set(l.name,l)});function i(l){n.add(l.name);var a=[].concat(l.requires||[],l.requiresIfExists||[]);a.forEach(function(o){if(!n.has(o)){var s=e.get(o);s&&i(s)}}),r.push(l)}return t.forEach(function(l){n.has(l.name)||i(l)}),r}function o1(t){var e=l1(t);return a1.reduce(function(n,r){return n.concat(e.filter(function(i){return i.phase===r}))},[])}function s1(t){var e;return function(){return e||(e=new Promise(function(n){Promise.resolve().then(function(){e=void 0,n(t())})})),e}}function u1(t){var e=t.reduce(function(n,r){var i=n[r.name];return n[r.name]=i?Object.assign({},i,r,{options:Object.assign({},i.options,r.options),data:Object.assign({},i.data,r.data)}):r,n},{});return Object.keys(e).map(function(n){return e[n]})}function d1(t,e){var n=Nt(t),r=_n(t),i=n.visualViewport,l=r.clientWidth,a=r.clientHeight,o=0,s=0;if(i){l=i.width,a=i.height;var u=Ws();(u||!u&&e==="fixed")&&(o=i.offsetLeft,s=i.offsetTop)}return{width:l,height:a,x:o+ll(t),y:s}}function c1(t){var e,n=_n(t),r=al(t),i=(e=t.ownerDocument)==null?void 0:e.body,l=Hn(n.scrollWidth,n.clientWidth,i?i.scrollWidth:0,i?i.clientWidth:0),a=Hn(n.scrollHeight,n.clientHeight,i?i.scrollHeight:0,i?i.clientHeight:0),o=-r.scrollLeft+ll(t),s=-r.scrollTop;return mn(i||n).direction==="rtl"&&(o+=Hn(n.clientWidth,i?i.clientWidth:0)-l),{width:l,height:a,x:o,y:s}}function p1(t,e){var n=e.getRootNode&&e.getRootNode();if(t.contains(e))return!0;if(n&&il(n)){var r=e;do{if(r&&t.isSameNode(r))return!0;r=r.parentNode||r.host}while(r)}return!1}function ra(t){return Object.assign({},t,{left:t.x,top:t.y,right:t.x+t.width,bottom:t.y+t.height})}function f1(t,e){var n=er(t,!1,e==="fixed");return n.top=n.top+t.clientTop,n.left=n.left+t.clientLeft,n.bottom=n.top+t.clientHeight,n.right=n.left+t.clientWidth,n.width=t.clientWidth,n.height=t.clientHeight,n.x=n.left,n.y=n.top,n}function eo(t,e,n){return e===Ks?ra(d1(t,n)):Nn(e)?f1(e,n):ra(c1(_n(t)))}function v1(t){var e=gr(vi(t)),n=["absolute","fixed"].indexOf(mn(t).position)>=0,r=n&&Wt(t)?hi(t):t;return Nn(r)?e.filter(function(i){return Nn(i)&&p1(i,r)&&on(i)!=="body"}):[]}function h1(t,e,n,r){var i=e==="clippingParents"?v1(t):[].concat(e),l=[].concat(i,[n]),a=l[0],o=l.reduce(function(s,u){var c=eo(t,u,r);return s.top=Hn(c.top,s.top),s.right=Xr(c.right,s.right),s.bottom=Xr(c.bottom,s.bottom),s.left=Hn(c.left,s.left),s},eo(t,a,r));return o.width=o.right-o.left,o.height=o.bottom-o.top,o.x=o.left,o.y=o.top,o}function Ln(t){return t.split("-")[0]}function nr(t){return t.split("-")[1]}function Gs(t){return["top","bottom"].indexOf(t)>=0?"x":"y"}function Js(t){var e=t.reference,n=t.element,r=t.placement,i=r?Ln(r):null,l=r?nr(r):null,a=e.x+e.width/2-n.width/2,o=e.y+e.height/2-n.height/2,s;switch(i){case Yt:s={x:a,y:e.y-n.height};break;case sn:s={x:a,y:e.y+e.height};break;case xn:s={x:e.x+e.width,y:o};break;case vn:s={x:e.x-n.width,y:o};break;default:s={x:e.x,y:e.y}}var u=i?Gs(i):null;if(u!=null){var c=u==="y"?"height":"width";switch(l){case tr:s[u]=s[u]-(e[c]/2-n[c]/2);break;case xr:s[u]=s[u]+(e[c]/2-n[c]/2);break}}return s}function Ys(){return{top:0,right:0,bottom:0,left:0}}function m1(t){return Object.assign({},Ys(),t)}function g1(t,e){return e.reduce(function(n,r){return n[r]=t,n},{})}function ul(t,e){e===void 0&&(e={});var n=e,r=n.placement,i=r===void 0?t.placement:r,l=n.strategy,a=l===void 0?t.strategy:l,o=n.boundary,s=o===void 0?Q0:o,u=n.rootBoundary,c=u===void 0?Ks:u,m=n.elementContext,E=m===void 0?sr:m,g=n.altBoundary,b=g===void 0?!1:g,L=n.padding,x=L===void 0?0:L,I=m1(typeof x!="number"?x:g1(x,mi)),B=E===sr?K0:sr,_=t.rects.popper,O=t.elements[b?B:E],H=h1(Nn(O)?O:O.contextElement||_n(t.elements.popper),s,c,a),R=er(t.elements.reference),Z=Js({reference:R,element:_,placement:i}),U=ra(Object.assign({},_,Z)),P=E===sr?U:R,ae={top:H.top-P.top+I.top,bottom:P.bottom-H.bottom+I.bottom,left:H.left-P.left+I.left,right:P.right-H.right+I.right},ne=t.modifiersData.offset;if(E===sr&&ne){var K=ne[i];Object.keys(ae).forEach(function(le){var we=[xn,sn].indexOf(le)>=0?1:-1,he=[Yt,sn].indexOf(le)>=0?"y":"x";ae[le]+=K[he]*we})}return ae}var to={placement:"bottom",modifiers:[],strategy:"absolute"};function no(){for(var t=arguments.length,e=new Array(t),n=0;n<t;n++)e[n]=arguments[n];return!e.some(function(r){return!(r&&typeof r.getBoundingClientRect=="function")})}function b1(t){t===void 0&&(t={});var e=t,n=e.defaultModifiers,r=n===void 0?[]:n,i=e.defaultOptions,l=i===void 0?to:i;return function(o,s,u){u===void 0&&(u=l);var c={placement:"bottom",orderedModifiers:[],options:Object.assign({},to,l),modifiersData:{},elements:{reference:o,popper:s},attributes:{},styles:{}},m=[],E=!1,g={state:c,setOptions:function(I){var B=typeof I=="function"?I(c.options):I;L(),c.options=Object.assign({},l,c.options,B),c.scrollParents={reference:Nn(o)?gr(o):o.contextElement?gr(o.contextElement):[],popper:gr(s)};var _=o1(u1([].concat(r,c.options.modifiers)));return c.orderedModifiers=_.filter(function(O){return O.enabled}),b(),g.update()},forceUpdate:function(){if(!E){var I=c.elements,B=I.reference,_=I.popper;if(no(B,_)){c.rects={reference:U0(B,hi(_),c.options.strategy==="fixed"),popper:qs(_)},c.reset=!1,c.placement=c.options.placement,c.orderedModifiers.forEach(function(ae){return c.modifiersData[ae.name]=Object.assign({},ae.data)});for(var O=0;O<c.orderedModifiers.length;O++){if(c.reset===!0){c.reset=!1,O=-1;continue}var H=c.orderedModifiers[O],R=H.fn,Z=H.options,U=Z===void 0?{}:Z,P=H.name;typeof R=="function"&&(c=R({state:c,options:U,name:P,instance:g})||c)}}}},update:s1(function(){return new Promise(function(x){g.forceUpdate(),x(c)})}),destroy:function(){L(),E=!0}};if(!no(o,s))return g;g.setOptions(u).then(function(x){!E&&u.onFirstUpdate&&u.onFirstUpdate(x)});function b(){c.orderedModifiers.forEach(function(x){var I=x.name,B=x.options,_=B===void 0?{}:B,O=x.effect;if(typeof O=="function"){var H=O({state:c,name:I,instance:g,options:_}),R=function(){};m.push(H||R)}})}function L(){m.forEach(function(x){return x()}),m=[]}return g}}var Or={passive:!0};function w1(t){var e=t.state,n=t.instance,r=t.options,i=r.scroll,l=i===void 0?!0:i,a=r.resize,o=a===void 0?!0:a,s=Nt(e.elements.popper),u=[].concat(e.scrollParents.reference,e.scrollParents.popper);return l&&u.forEach(function(c){c.addEventListener("scroll",n.update,Or)}),o&&s.addEventListener("resize",n.update,Or),function(){l&&u.forEach(function(c){c.removeEventListener("scroll",n.update,Or)}),o&&s.removeEventListener("resize",n.update,Or)}}var y1={name:"eventListeners",enabled:!0,phase:"write",fn:function(){},effect:w1,data:{}};function k1(t){var e=t.state,n=t.name;e.modifiersData[n]=Js({reference:e.rects.reference,element:e.rects.popper,placement:e.placement})}var C1={name:"popperOffsets",enabled:!0,phase:"read",fn:k1,data:{}},E1={top:"auto",right:"auto",bottom:"auto",left:"auto"};function A1(t,e){var n=t.x,r=t.y,i=e.devicePixelRatio||1;return{x:Zn(n*i)/i||0,y:Zn(r*i)/i||0}}function ro(t){var e,n=t.popper,r=t.popperRect,i=t.placement,l=t.variation,a=t.offsets,o=t.position,s=t.gpuAcceleration,u=t.adaptive,c=t.roundOffsets,m=t.isFixed,E=a.x,g=E===void 0?0:E,b=a.y,L=b===void 0?0:b,x=typeof c=="function"?c({x:g,y:L}):{x:g,y:L};g=x.x,L=x.y;var I=a.hasOwnProperty("x"),B=a.hasOwnProperty("y"),_=vn,O=Yt,H=window;if(u){var R=hi(n),Z="clientHeight",U="clientWidth";if(R===Nt(n)&&(R=_n(n),mn(R).position!=="static"&&o==="absolute"&&(Z="scrollHeight",U="scrollWidth")),R=R,i===Yt||(i===vn||i===xn)&&l===xr){O=sn;var P=m&&R===H&&H.visualViewport?H.visualViewport.height:R[Z];L-=P-r.height,L*=s?1:-1}if(i===vn||(i===Yt||i===sn)&&l===xr){_=xn;var ae=m&&R===H&&H.visualViewport?H.visualViewport.width:R[U];g-=ae-r.width,g*=s?1:-1}}var ne=Object.assign({position:o},u&&E1),K=c===!0?A1({x:g,y:L},Nt(n)):{x:g,y:L};if(g=K.x,L=K.y,s){var le;return Object.assign({},ne,(le={},le[O]=B?"0":"",le[_]=I?"0":"",le.transform=(H.devicePixelRatio||1)<=1?"translate("+g+"px, "+L+"px)":"translate3d("+g+"px, "+L+"px, 0)",le))}return Object.assign({},ne,(e={},e[O]=B?L+"px":"",e[_]=I?g+"px":"",e.transform="",e))}function L1(t){var e=t.state,n=t.options,r=n.gpuAcceleration,i=r===void 0?!0:r,l=n.adaptive,a=l===void 0?!0:l,o=n.roundOffsets,s=o===void 0?!0:o,u={placement:Ln(e.placement),variation:nr(e.placement),popper:e.elements.popper,popperRect:e.rects.popper,gpuAcceleration:i,isFixed:e.options.strategy==="fixed"};e.modifiersData.popperOffsets!=null&&(e.styles.popper=Object.assign({},e.styles.popper,ro(Object.assign({},u,{offsets:e.modifiersData.popperOffsets,position:e.options.strategy,adaptive:a,roundOffsets:s})))),e.modifiersData.arrow!=null&&(e.styles.arrow=Object.assign({},e.styles.arrow,ro(Object.assign({},u,{offsets:e.modifiersData.arrow,position:"absolute",adaptive:!1,roundOffsets:s})))),e.attributes.popper=Object.assign({},e.attributes.popper,{"data-popper-placement":e.placement})}var x1={name:"computeStyles",enabled:!0,phase:"beforeWrite",fn:L1,data:{}};function T1(t){var e=t.state;Object.keys(e.elements).forEach(function(n){var r=e.styles[n]||{},i=e.attributes[n]||{},l=e.elements[n];!Wt(l)||!on(l)||(Object.assign(l.style,r),Object.keys(i).forEach(function(a){var o=i[a];o===!1?l.removeAttribute(a):l.setAttribute(a,o===!0?"":o)}))})}function S1(t){var e=t.state,n={popper:{position:e.options.strategy,left:"0",top:"0",margin:"0"},arrow:{position:"absolute"},reference:{}};return Object.assign(e.elements.popper.style,n.popper),e.styles=n,e.elements.arrow&&Object.assign(e.elements.arrow.style,n.arrow),function(){Object.keys(e.elements).forEach(function(r){var i=e.elements[r],l=e.attributes[r]||{},a=Object.keys(e.styles.hasOwnProperty(r)?e.styles[r]:n[r]),o=a.reduce(function(s,u){return s[u]="",s},{});!Wt(i)||!on(i)||(Object.assign(i.style,o),Object.keys(l).forEach(function(s){i.removeAttribute(s)}))})}}var _1={name:"applyStyles",enabled:!0,phase:"write",fn:T1,effect:S1,requires:["computeStyles"]},M1=[y1,C1,x1,_1],I1=b1({defaultModifiers:M1});function B1(t){return t==="x"?"y":"x"}function jr(t,e,n){return Hn(t,Xr(e,n))}function D1(t,e,n){var r=jr(t,e,n);return r>n?n:r}function R1(t){var e=t.state,n=t.options,r=t.name,i=n.mainAxis,l=i===void 0?!0:i,a=n.altAxis,o=a===void 0?!1:a,s=n.boundary,u=n.rootBoundary,c=n.altBoundary,m=n.padding,E=n.tether,g=E===void 0?!0:E,b=n.tetherOffset,L=b===void 0?0:b,x=ul(e,{boundary:s,rootBoundary:u,padding:m,altBoundary:c}),I=Ln(e.placement),B=nr(e.placement),_=!B,O=Gs(I),H=B1(O),R=e.modifiersData.popperOffsets,Z=e.rects.reference,U=e.rects.popper,P=typeof L=="function"?L(Object.assign({},e.rects,{placement:e.placement})):L,ae=typeof P=="number"?{mainAxis:P,altAxis:P}:Object.assign({mainAxis:0,altAxis:0},P),ne=e.modifiersData.offset?e.modifiersData.offset[e.placement]:null,K={x:0,y:0};if(R){if(l){var le,we=O==="y"?Yt:vn,he=O==="y"?sn:xn,me=O==="y"?"height":"width",ge=R[O],Ye=ge+x[we],be=ge-x[he],fe=g?-U[me]/2:0,W=B===tr?Z[me]:U[me],re=B===tr?-U[me]:-Z[me],st=e.elements.arrow,ve=g&&st?qs(st):{width:0,height:0},pe=e.modifiersData["arrow#persistent"]?e.modifiersData["arrow#persistent"].padding:Ys(),F=pe[we],D=pe[he],se=jr(0,Z[me],ve[me]),_e=_?Z[me]/2-fe-se-F-ae.mainAxis:W-se-F-ae.mainAxis,tt=_?-Z[me]/2+fe+se+D+ae.mainAxis:re+se+D+ae.mainAxis,wt=e.elements.arrow&&hi(e.elements.arrow),ut=wt?O==="y"?wt.clientTop||0:wt.clientLeft||0:0,yt=(le=ne?.[O])!=null?le:0,Qt=ge+_e-yt-ut,dt=ge+tt-yt,Zt=jr(g?Xr(Ye,Qt):Ye,ge,g?Hn(be,dt):be);R[O]=Zt,K[O]=Zt-ge}if(o){var It,it=O==="x"?Yt:vn,ct=O==="x"?sn:xn,pt=R[H],Bt=H==="y"?"height":"width",Ft=pt+x[it],Pe=pt-x[ct],vt=[Yt,vn].indexOf(I)!==-1,nt=(It=ne?.[H])!=null?It:0,kt=vt?Ft:pt-Z[Bt]-U[Bt]-nt+ae.altAxis,Dt=vt?pt+Z[Bt]+U[Bt]-nt-ae.altAxis:Pe,Vt=g&&vt?D1(kt,pt,Dt):jr(g?kt:Ft,pt,g?Dt:Pe);R[H]=Vt,K[H]=Vt-pt}e.modifiersData[r]=K}}var F1={name:"preventOverflow",enabled:!0,phase:"main",fn:R1,requiresIfExists:["offset"]},O1={left:"right",right:"left",bottom:"top",top:"bottom"};function Ur(t){return t.replace(/left|right|bottom|top/g,function(e){return O1[e]})}var $1={start:"end",end:"start"};function io(t){return t.replace(/start|end/g,function(e){return $1[e]})}function H1(t,e){e===void 0&&(e={});var n=e,r=n.placement,i=n.boundary,l=n.rootBoundary,a=n.padding,o=n.flipVariations,s=n.allowedAutoPlacements,u=s===void 0?G0:s,c=nr(r),m=c?o?Zl:Zl.filter(function(b){return nr(b)===c}):mi,E=m.filter(function(b){return u.indexOf(b)>=0});E.length===0&&(E=m);var g=E.reduce(function(b,L){return b[L]=ul(t,{placement:L,boundary:i,rootBoundary:l,padding:a})[Ln(L)],b},{});return Object.keys(g).sort(function(b,L){return g[b]-g[L]})}function P1(t){if(Ln(t)===sl)return[];var e=Ur(t);return[io(t),e,io(e)]}function z1(t){var e=t.state,n=t.options,r=t.name;if(!e.modifiersData[r]._skip){for(var i=n.mainAxis,l=i===void 0?!0:i,a=n.altAxis,o=a===void 0?!0:a,s=n.fallbackPlacements,u=n.padding,c=n.boundary,m=n.rootBoundary,E=n.altBoundary,g=n.flipVariations,b=g===void 0?!0:g,L=n.allowedAutoPlacements,x=e.options.placement,I=Ln(x),B=I===x,_=s||(B||!b?[Ur(x)]:P1(x)),O=[x].concat(_).reduce(function(ve,pe){return ve.concat(Ln(pe)===sl?H1(e,{placement:pe,boundary:c,rootBoundary:m,padding:u,flipVariations:b,allowedAutoPlacements:L}):pe)},[]),H=e.rects.reference,R=e.rects.popper,Z=new Map,U=!0,P=O[0],ae=0;ae<O.length;ae++){var ne=O[ae],K=Ln(ne),le=nr(ne)===tr,we=[Yt,sn].indexOf(K)>=0,he=we?"width":"height",me=ul(e,{placement:ne,boundary:c,rootBoundary:m,altBoundary:E,padding:u}),ge=we?le?xn:vn:le?sn:Yt;H[he]>R[he]&&(ge=Ur(ge));var Ye=Ur(ge),be=[];if(l&&be.push(me[K]<=0),o&&be.push(me[ge]<=0,me[Ye]<=0),be.every(function(ve){return ve})){P=ne,U=!1;break}Z.set(ne,be)}if(U)for(var fe=b?3:1,W=function(pe){var F=O.find(function(D){var se=Z.get(D);if(se)return se.slice(0,pe).every(function(_e){return _e})});if(F)return P=F,"break"},re=fe;re>0;re--){var st=W(re);if(st==="break")break}e.placement!==P&&(e.modifiersData[r]._skip=!0,e.placement=P,e.reset=!0)}}var N1={name:"flip",enabled:!0,phase:"main",fn:z1,requiresIfExists:["offset"],data:{_skip:!1}};function V1(t,e,n){const{disabled:r,appendTo:i,appendToBody:l,openDirection:a}=rt(t),o=He().proxy,s=n.multiselect,u=n.dropdown,c=ce(!1),m=ce(null),E=ce(null),g=et(()=>i.value||l.value),b=et(()=>a.value==="top"&&E.value==="bottom"||a.value==="bottom"&&E.value!=="top"?"bottom":"top"),L=()=>{c.value||r.value||(c.value=!0,e.emit("open",o),g.value&&$n(()=>{I()}))},x=()=>{c.value&&(c.value=!1,e.emit("close",o))},I=()=>{if(!m.value)return;let _=parseInt(window.getComputedStyle(u.value).borderTopWidth.replace("px","")),O=parseInt(window.getComputedStyle(u.value).borderBottomWidth.replace("px",""));m.value.setOptions(H=>({...H,modifiers:[...H.modifiers,{name:"offset",options:{offset:[0,(b.value==="top"?_:O)*-1]}}]})),m.value.update()},B=_=>{for(;_&&_!==document.body;){if(getComputedStyle(_).position==="fixed")return!0;_=_.parentElement}return!1};return Mr(()=>{g.value&&(m.value=I1(s.value,u.value,{strategy:B(s.value)?"fixed":void 0,placement:a.value,modifiers:[F1,N1,{name:"sameWidth",enabled:!0,phase:"beforeWrite",requires:["computeStyles"],fn:({state:_})=>{_.styles.popper.width=`${_.rects.reference.width}px`},effect:({state:_})=>{_.elements.popper.style.width=`${_.elements.reference.offsetWidth}px`}},{name:"toggleClass",enabled:!0,phase:"write",fn({state:_}){E.value=_.placement}}]}))}),Rd(()=>{!g.value||!m.value||(m.value.destroy(),m.value=null)}),{popper:m,isOpen:c,open:L,close:x,placement:b,updatePopper:I}}function j1(t,e,n){const{searchable:r,disabled:i,clearOnBlur:l}=rt(t),a=n.input,o=n.open,s=n.close,u=n.clearSearch,c=n.isOpen,m=n.wrapper,E=n.tags,g=ce(!1),b=ce(!1),L=et(()=>r.value||i.value?-1:0),x=()=>{r.value&&a.value.blur(),m.value.blur()},I=()=>{r.value&&!i.value&&a.value.focus()},B=(U=!0)=>{i.value||(g.value=!0,U&&o())},_=()=>{g.value=!1,setTimeout(()=>{g.value||(s(),l.value&&u())},1)};return{tabindex:L,isActive:g,mouseClicked:b,blur:x,focus:I,activate:B,deactivate:_,handleFocusIn:U=>{U.target.closest("[data-tags]")&&U.target.nodeName!=="INPUT"||U.target.closest("[data-clear]")||B(b.value)},handleFocusOut:()=>{_()},handleCaretClick:()=>{_(),x()},handleMousedown:U=>{b.value=!0,c.value&&(U.target.isEqualNode(m.value)||U.target.isEqualNode(E.value))?setTimeout(()=>{_()},0):!c.value&&(document.activeElement.isEqualNode(m.value)||document.activeElement.isEqualNode(a.value))&&B(),setTimeout(()=>{b.value=!1},0)}}}function U1(t,e,n){const{mode:r,addTagOn:i,openDirection:l,searchable:a,showOptions:o,valueProp:s,groups:u,addOptionOn:c,createTag:m,createOption:E,reverse:g}=rt(t),b=He().proxy,L=n.iv,x=n.update,I=n.deselect,B=n.search,_=n.setPointer,O=n.selectPointer,H=n.backwardPointer,R=n.forwardPointer,Z=n.multiselect,U=n.wrapper,P=n.tags,ae=n.isOpen,ne=n.open,K=n.blur,le=n.fo,we=et(()=>m.value||E.value||!1),he=et(()=>i.value!==void 0?i.value:c.value!==void 0?c.value:["enter"]),me=()=>{r.value==="tags"&&!o.value&&we.value&&a.value&&!u.value&&_(le.value[le.value.map(be=>be[s.value]).indexOf(B.value)])};return{handleKeydown:be=>{e.emit("keydown",be,b);let fe,W;switch(["ArrowLeft","ArrowRight","Enter"].indexOf(be.key)!==-1&&r.value==="tags"&&(fe=[...Z.value.querySelectorAll("[data-tags] > *")].filter(re=>re!==P.value),W=fe.findIndex(re=>re===document.activeElement)),be.key){case"Backspace":if(r.value==="single"||a.value&&[null,""].indexOf(B.value)===-1||L.value.length===0)return;let re=L.value.filter(st=>!st.disabled&&st.remove!==!1);re.length&&I(re[re.length-1]);break;case"Enter":if(be.preventDefault(),be.keyCode===229)return;if(W!==-1&&W!==void 0){x([...L.value].filter((st,ve)=>ve!==W)),W===fe.length-1&&(fe.length-1?fe[fe.length-2].focus():a.value?P.value.querySelector("input").focus():U.value.focus());return}if(he.value.indexOf("enter")===-1&&we.value)return;me(),O();break;case" ":if(!we.value&&!a.value){be.preventDefault(),me(),O();return}if(!we.value)return!1;if(he.value.indexOf("space")===-1&&we.value)return;be.preventDefault(),me(),O();break;case"Tab":case";":case",":if(he.value.indexOf(be.key.toLowerCase())===-1||!we.value)return;me(),O(),be.preventDefault();break;case"Escape":K();break;case"ArrowUp":if(be.preventDefault(),!o.value)return;ae.value||ne(),H();break;case"ArrowDown":if(be.preventDefault(),!o.value)return;ae.value||ne(),R();break;case"ArrowLeft":if(a.value&&P.value&&P.value.querySelector("input").selectionStart||be.shiftKey||r.value!=="tags"||!L.value||!L.value.length)return;be.preventDefault(),W===-1?fe[fe.length-1].focus():W>0&&fe[W-1].focus();break;case"ArrowRight":if(W===-1||be.shiftKey||r.value!=="tags"||!L.value||!L.value.length)return;be.preventDefault(),fe.length>W+1?fe[W+1].focus():a.value?P.value.querySelector("input").focus():a.value||U.value.focus();break}},handleKeyup:be=>{e.emit("keyup",be,b)},preparePointer:me}}function W1(t,e,n){const{classes:r,disabled:i,showOptions:l,breakTags:a}=rt(t),o=n.isOpen,s=n.isPointed,u=n.isSelected,c=n.isDisabled,m=n.isActive,E=n.canPointGroups,g=n.resolving,b=n.fo,L=n.placement,x=et(()=>({container:"multiselect",containerDisabled:"is-disabled",containerOpen:"is-open",containerOpenTop:"is-open-top",containerActive:"is-active",wrapper:"multiselect-wrapper",singleLabel:"multiselect-single-label",singleLabelText:"multiselect-single-label-text",multipleLabel:"multiselect-multiple-label",search:"multiselect-search",tags:"multiselect-tags",tag:"multiselect-tag",tagWrapper:"multiselect-tag-wrapper",tagWrapperBreak:"multiselect-tag-wrapper-break",tagDisabled:"is-disabled",tagRemove:"multiselect-tag-remove",tagRemoveIcon:"multiselect-tag-remove-icon",tagsSearchWrapper:"multiselect-tags-search-wrapper",tagsSearch:"multiselect-tags-search",tagsSearchCopy:"multiselect-tags-search-copy",placeholder:"multiselect-placeholder",caret:"multiselect-caret",caretOpen:"is-open",clear:"multiselect-clear",clearIcon:"multiselect-clear-icon",spinner:"multiselect-spinner",inifinite:"multiselect-inifite",inifiniteSpinner:"multiselect-inifite-spinner",dropdown:"multiselect-dropdown",dropdownTop:"is-top",dropdownHidden:"is-hidden",options:"multiselect-options",optionsTop:"is-top",group:"multiselect-group",groupLabel:"multiselect-group-label",groupLabelPointable:"is-pointable",groupLabelPointed:"is-pointed",groupLabelSelected:"is-selected",groupLabelDisabled:"is-disabled",groupLabelSelectedPointed:"is-selected is-pointed",groupLabelSelectedDisabled:"is-selected is-disabled",groupOptions:"multiselect-group-options",option:"multiselect-option",optionPointed:"is-pointed",optionSelected:"is-selected",optionDisabled:"is-disabled",optionSelectedPointed:"is-selected is-pointed",optionSelectedDisabled:"is-selected is-disabled",noOptions:"multiselect-no-options",noResults:"multiselect-no-results",fakeInput:"multiselect-fake-input",assist:"multiselect-assistive-text",spacer:"multiselect-spacer",...r.value})),I=et(()=>!!(o.value&&l.value&&(!g.value||g.value&&b.value.length)));return{classList:j(()=>{const _=x.value;return{container:[_.container].concat(i.value?_.containerDisabled:[]).concat(I.value&&L.value==="top"?_.containerOpenTop:[]).concat(I.value&&L.value!=="top"?_.containerOpen:[]).concat(m.value?_.containerActive:[]),wrapper:_.wrapper,spacer:_.spacer,singleLabel:_.singleLabel,singleLabelText:_.singleLabelText,multipleLabel:_.multipleLabel,search:_.search,tags:_.tags,tag:[_.tag].concat(i.value?_.tagDisabled:[]),tagWrapper:[_.tagWrapper,a.value?_.tagWrapperBreak:null],tagDisabled:_.tagDisabled,tagRemove:_.tagRemove,tagRemoveIcon:_.tagRemoveIcon,tagsSearchWrapper:_.tagsSearchWrapper,tagsSearch:_.tagsSearch,tagsSearchCopy:_.tagsSearchCopy,placeholder:_.placeholder,caret:[_.caret].concat(o.value?_.caretOpen:[]),clear:_.clear,clearIcon:_.clearIcon,spinner:_.spinner,inifinite:_.inifinite,inifiniteSpinner:_.inifiniteSpinner,dropdown:[_.dropdown].concat(L.value==="top"?_.dropdownTop:[]).concat(!o.value||!l.value||!I.value?_.dropdownHidden:[]),options:[_.options].concat(L.value==="top"?_.optionsTop:[]),group:_.group,groupLabel:O=>{let H=[_.groupLabel];return s(O)?H.push(u(O)?_.groupLabelSelectedPointed:_.groupLabelPointed):u(O)&&E.value?H.push(c(O)?_.groupLabelSelectedDisabled:_.groupLabelSelected):c(O)&&H.push(_.groupLabelDisabled),E.value&&H.push(_.groupLabelPointable),H},groupOptions:_.groupOptions,option:(O,H)=>{let R=[_.option];return s(O)?R.push(u(O)?_.optionSelectedPointed:_.optionPointed):u(O)?R.push(c(O)?_.optionSelectedDisabled:_.optionSelected):(c(O)||H&&c(H))&&R.push(_.optionDisabled),R},noOptions:_.noOptions,noResults:_.noResults,assist:_.assist,fakeInput:_.fakeInput}}),showDropdown:I}}function q1(t,e,n){const{limit:r,infinite:i}=rt(t),l=n.isOpen,a=n.offset,o=n.search,s=n.pfo,u=n.eo,c=ce(null),m=Gn(null),E=et(()=>a.value<s.value.length),g=L=>{const{isIntersecting:x,target:I}=L[0];if(x){const B=I.offsetParent,_=B.scrollTop;a.value+=r.value==-1?10:r.value,$n(()=>{B.scrollTop=_})}},b=()=>{l.value&&a.value<s.value.length?c.value.observe(m.value):!l.value&&c.value&&c.value.disconnect()};return je(l,()=>{i.value&&b()}),je(o,()=>{i.value&&(a.value=r.value,b())},{flush:"post"}),je(u,()=>{i.value&&b()},{immediate:!1,flush:"post"}),Mr(()=>{window&&window.IntersectionObserver&&(c.value=new IntersectionObserver(g))}),{hasMore:E,infiniteLoader:m}}function Q1(t,e,n){const{placeholder:r,id:i,valueProp:l,label:a,mode:o,groupLabel:s,aria:u,searchable:c}=rt(t),m=n.pointer,E=n.iv,g=n.hasSelected,b=n.multipleLabelText,L=ce(null),x=et(()=>`${i.value?i.value+"-":""}assist`),I=et(()=>`${i.value?i.value+"-":""}multiselect-options`),B=et(()=>{if(m.value){let K=i.value?`${i.value}-`:"";return K+=`${m.value.group?"multiselect-group":"multiselect-option"}-`,K+=m.value.group?m.value.index:m.value[l.value],K}}),_=et(()=>r.value),O=et(()=>o.value!=="single"),H=j(()=>o.value==="single"&&g.value?E.value[a.value]:o.value==="multiple"&&g.value?b.value:o.value==="tags"&&g.value?E.value.map(K=>K[a.value]).join(", "):""),R=j(()=>{let K={...u.value};return c.value&&(K["aria-labelledby"]=K["aria-labelledby"]?`${x.value} ${K["aria-labelledby"]}`:x.value,H.value&&K["aria-label"]&&(K["aria-label"]=`${H.value}, ${K["aria-label"]}`)),K}),Z=K=>`${i.value?i.value+"-":""}multiselect-option-${K[l.value]}`,U=K=>`${i.value?i.value+"-":""}multiselect-group-${K.index}`,P=K=>`${K}`,ae=K=>`${K}`,ne=K=>`${K} ❎`;return Mr(()=>{if(i.value&&document&&document.querySelector){let K=document.querySelector(`[for="${i.value}"]`);L.value=K?K.innerText:null}}),{arias:R,ariaLabel:H,ariaAssist:x,ariaControls:I,ariaPlaceholder:_,ariaMultiselectable:O,ariaActiveDescendant:B,ariaOptionId:Z,ariaOptionLabel:P,ariaGroupId:U,ariaGroupLabel:ae,ariaTagLabel:ne}}function K1(t,e,n){const{locale:r,fallbackLocale:i}=rt(t);return{localize:a=>!a||typeof a!="object"?a:a&&a[r.value]?a[r.value]:a&&r.value&&a[r.value.toUpperCase()]?a[r.value.toUpperCase()]:a&&a[i.value]?a[i.value]:a&&i.value&&a[i.value.toUpperCase()]?a[i.value.toUpperCase()]:a&&Object.keys(a)[0]?a[Object.keys(a)[0]]:""}}function G1(t,e,n){const r=Gn(null),i=Gn(null),l=Gn(null),a=Gn(null),o=Gn(null);return{multiselect:r,wrapper:i,tags:l,input:a,dropdown:o}}function J1(t,e,n,r={}){return n.forEach(i=>{r={...r,...i(t,e,r)}}),r}var Br={name:"Multiselect",emits:["paste","open","close","select","deselect","input","search-change","tag","option","update:modelValue","change","clear","keydown","keyup","max","create"],props:{value:{required:!1},modelValue:{required:!1},options:{type:[Array,Object,Function],required:!1,default:()=>[]},id:{type:[String,Number],required:!1,default:void 0},name:{type:[String,Number],required:!1,default:"multiselect"},disabled:{type:Boolean,required:!1,default:!1},label:{type:String,required:!1,default:"label"},trackBy:{type:[String,Array],required:!1,default:void 0},valueProp:{type:String,required:!1,default:"value"},placeholder:{type:String,required:!1,default:null},mode:{type:String,required:!1,default:"single"},searchable:{type:Boolean,required:!1,default:!1},limit:{type:Number,required:!1,default:-1},hideSelected:{type:Boolean,required:!1,default:!0},createTag:{type:Boolean,required:!1,default:void 0},createOption:{type:Boolean,required:!1,default:void 0},appendNewTag:{type:Boolean,required:!1,default:void 0},appendNewOption:{type:Boolean,required:!1,default:void 0},addTagOn:{type:Array,required:!1,default:void 0},addOptionOn:{type:Array,required:!1,default:void 0},caret:{type:Boolean,required:!1,default:!0},loading:{type:Boolean,required:!1,default:!1},noOptionsText:{type:[String,Object],required:!1,default:"The list is empty"},noResultsText:{type:[String,Object],required:!1,default:"No results found"},multipleLabel:{type:Function,required:!1,default:void 0},object:{type:Boolean,required:!1,default:!1},delay:{type:Number,required:!1,default:-1},minChars:{type:Number,required:!1,default:0},resolveOnLoad:{type:Boolean,required:!1,default:!0},filterResults:{type:Boolean,required:!1,default:!0},clearOnSearch:{type:Boolean,required:!1,default:!1},clearOnSelect:{type:Boolean,required:!1,default:!0},canDeselect:{type:Boolean,required:!1,default:!0},canClear:{type:Boolean,required:!1,default:!0},max:{type:Number,required:!1,default:-1},showOptions:{type:Boolean,required:!1,default:!0},required:{type:Boolean,required:!1,default:!1},openDirection:{type:String,required:!1,default:"bottom"},nativeSupport:{type:Boolean,required:!1,default:!1},classes:{type:Object,required:!1,default:()=>({})},strict:{type:Boolean,required:!1,default:!0},closeOnSelect:{type:Boolean,required:!1,default:!0},closeOnDeselect:{type:Boolean,required:!1,default:!1},autocomplete:{type:String,required:!1,default:void 0},groups:{type:Boolean,required:!1,default:!1},groupLabel:{type:String,required:!1,default:"label"},groupOptions:{type:String,required:!1,default:"options"},groupHideEmpty:{type:Boolean,required:!1,default:!1},groupSelect:{type:Boolean,required:!1,default:!0},inputType:{type:String,required:!1,default:"text"},attrs:{required:!1,type:Object,default:()=>({})},onCreate:{required:!1,type:Function,default:void 0},disabledProp:{type:String,required:!1,default:"disabled"},searchStart:{type:Boolean,required:!1,default:!1},reverse:{type:Boolean,required:!1,default:!1},regex:{type:[Object,String,RegExp],required:!1,default:void 0},rtl:{type:Boolean,required:!1,default:!1},infinite:{type:Boolean,required:!1,default:!1},aria:{required:!1,type:Object,default:()=>({})},clearOnBlur:{required:!1,type:Boolean,default:!0},locale:{required:!1,type:String,default:null},fallbackLocale:{required:!1,type:String,default:"en"},searchFilter:{required:!1,type:Function,default:null},allowAbsent:{required:!1,type:Boolean,default:!1},appendToBody:{required:!1,type:Boolean,default:!1},closeOnScroll:{required:!1,type:Boolean,default:!1},breakTags:{required:!1,type:Boolean,default:!1},appendTo:{required:!1,type:String,default:void 0}},setup(t,e){return J1(t,e,[G1,K1,D0,F0,V1,R0,B0,j1,P0,q1,z0,U1,W1,Q1])},beforeMount(){(this.$root.constructor&&this.$root.constructor.version&&this.$root.constructor.version.match(/^2\./)||this.vueVersionMs===2)&&(this.$options.components.Teleport||(this.$options.components.Teleport={render(){return this.$slots.default?this.$slots.default[0]:null}}))}};const Y1=["id","dir"],X1=["tabindex","aria-controls","aria-placeholder","aria-expanded","aria-activedescendant","aria-multiselectable","role"],Z1=["type","modelValue","value","autocomplete","id","aria-controls","aria-placeholder","aria-expanded","aria-activedescendant","aria-multiselectable"],eb=["onKeyup","aria-label"],tb=["onClick"],nb=["type","modelValue","value","id","autocomplete","aria-controls","aria-placeholder","aria-expanded","aria-activedescendant","aria-multiselectable"],rb=["innerHTML"],ib=["id"],ab=["id"],lb=["id","aria-label","aria-selected"],ob=["data-pointed","onMouseenter","onClick"],sb=["innerHTML"],ub=["aria-label"],db=["data-pointed","data-selected","onMouseenter","onClick","id","aria-selected","aria-label"],cb=["data-pointed","data-selected","onMouseenter","onClick","id","aria-selected","aria-label"],pb=["innerHTML"],fb=["innerHTML"],vb=["value"],hb=["name","value"],mb=["name","value"],gb=["id"];function bb(t,e,n,r,i,l){return p(),C("div",{ref:"multiselect",class:h(t.classList.container),id:n.searchable?void 0:n.id,dir:n.rtl?"rtl":void 0,onFocusin:e[12]||(e[12]=(...a)=>t.handleFocusIn&&t.handleFocusIn(...a)),onFocusout:e[13]||(e[13]=(...a)=>t.handleFocusOut&&t.handleFocusOut(...a)),onKeyup:e[14]||(e[14]=(...a)=>t.handleKeyup&&t.handleKeyup(...a)),onKeydown:e[15]||(e[15]=(...a)=>t.handleKeydown&&t.handleKeydown(...a))},[d("div",V({class:t.classList.wrapper,onMousedown:e[9]||(e[9]=(...a)=>t.handleMousedown&&t.handleMousedown(...a)),ref:"wrapper",tabindex:t.tabindex,"aria-controls":n.searchable?void 0:t.ariaControls,"aria-placeholder":n.searchable?void 0:t.ariaPlaceholder,"aria-expanded":n.searchable?void 0:t.isOpen,"aria-activedescendant":n.searchable?void 0:t.ariaActiveDescendant,"aria-multiselectable":n.searchable?void 0:t.ariaMultiselectable,role:n.searchable?void 0:"combobox"},n.searchable?{}:t.arias),[k(" Search "),n.mode!=="tags"&&n.searchable&&!n.disabled?(p(),C("input",V({key:0,type:n.inputType,modelValue:t.search,value:t.search,class:t.classList.search,autocomplete:n.autocomplete,id:n.searchable?n.id:void 0,onInput:e[0]||(e[0]=(...a)=>t.handleSearchInput&&t.handleSearchInput(...a)),onKeypress:e[1]||(e[1]=(...a)=>t.handleKeypress&&t.handleKeypress(...a)),onPaste:e[2]||(e[2]=Le((...a)=>t.handlePaste&&t.handlePaste(...a),["stop"])),ref:"input","aria-controls":t.ariaControls,"aria-placeholder":t.ariaPlaceholder,"aria-expanded":t.isOpen,"aria-activedescendant":t.ariaActiveDescendant,"aria-multiselectable":t.ariaMultiselectable,role:"combobox"},{...n.attrs,...t.arias}),null,16,Z1)):k("v-if",!0),k(" Tags (with search) "),n.mode=="tags"?(p(),C("div",{key:1,class:h(t.classList.tags),"data-tags":""},[(p(!0),C(ie,null,de(t.iv,(a,o,s)=>M(t.$slots,"tag",{option:a,handleTagRemove:t.handleTagRemove,disabled:n.disabled},()=>[(p(),C("span",{class:h([t.classList.tag,a.disabled?t.classList.tagDisabled:null]),tabindex:"-1",onKeyup:Ue(u=>t.handleTagRemove(a,u),["enter"]),key:s,"aria-label":t.ariaTagLabel(t.localize(a[n.label]))},[d("span",{class:h(t.classList.tagWrapper)},Re(t.localize(a[n.label])),3),!n.disabled&&!a.disabled?(p(),C("span",{key:0,class:h(t.classList.tagRemove),onClick:Le(u=>t.handleTagRemove(a,u),["stop"])},[d("span",{class:h(t.classList.tagRemoveIcon)},null,2)],10,tb)):k("v-if",!0)],42,eb))])),256)),d("div",{class:h(t.classList.tagsSearchWrapper),ref:"tags"},[k(" Used for measuring search width "),d("span",{class:h(t.classList.tagsSearchCopy)},Re(t.search),3),k(" Actual search input "),n.searchable&&!n.disabled?(p(),C("input",V({key:0,type:n.inputType,modelValue:t.search,value:t.search,class:t.classList.tagsSearch,id:n.searchable?n.id:void 0,autocomplete:n.autocomplete,onInput:e[3]||(e[3]=(...a)=>t.handleSearchInput&&t.handleSearchInput(...a)),onKeypress:e[4]||(e[4]=(...a)=>t.handleKeypress&&t.handleKeypress(...a)),onPaste:e[5]||(e[5]=Le((...a)=>t.handlePaste&&t.handlePaste(...a),["stop"])),ref:"input","aria-controls":t.ariaControls,"aria-placeholder":t.ariaPlaceholder,"aria-expanded":t.isOpen,"aria-activedescendant":t.ariaActiveDescendant,"aria-multiselectable":t.ariaMultiselectable,role:"combobox"},{...n.attrs,...t.arias}),null,16,nb)):k("v-if",!0)],2)],2)):k("v-if",!0),k(" Single label "),n.mode=="single"&&t.hasSelected&&!t.search&&t.iv?M(t.$slots,"singlelabel",{key:2,value:t.iv},()=>[d("div",{class:h(t.classList.singleLabel)},[d("span",{class:h(t.classList.singleLabelText)},Re(t.localize(t.iv[n.label])),3)],2)]):k("v-if",!0),k(" Multiple label "),n.mode=="multiple"&&t.hasSelected&&!t.search?M(t.$slots,"multiplelabel",{key:3,values:t.iv},()=>[d("div",{class:h(t.classList.multipleLabel),innerHTML:t.multipleLabelText},null,10,rb)]):k("v-if",!0),k(" Placeholder "),n.placeholder&&!t.hasSelected&&!t.search?M(t.$slots,"placeholder",{key:4},()=>[d("div",{class:h(t.classList.placeholder),"aria-hidden":"true"},Re(n.placeholder),3)]):k("v-if",!0),k(" Spinner "),n.loading||t.resolving?M(t.$slots,"spinner",{key:5},()=>[d("span",{class:h(t.classList.spinner),"aria-hidden":"true"},null,2)]):k("v-if",!0),k(" Clear "),t.hasSelected&&!n.disabled&&n.canClear&&!t.busy?M(t.$slots,"clear",{key:6,clear:t.clear},()=>[d("span",{"aria-hidden":"true",tabindex:"0",role:"button","data-clear":"","aria-roledescription":"❎",class:h(t.classList.clear),onClick:e[6]||(e[6]=(...a)=>t.clear&&t.clear(...a)),onKeyup:e[7]||(e[7]=Ue((...a)=>t.clear&&t.clear(...a),["enter"]))},[d("span",{class:h(t.classList.clearIcon)},null,2)],34)]):k("v-if",!0),k(" Caret "),n.caret&&n.showOptions?M(t.$slots,"caret",{key:7,handleCaretClick:t.handleCaretClick,isOpen:t.isOpen},()=>[d("span",{class:h(t.classList.caret),onClick:e[8]||(e[8]=(...a)=>t.handleCaretClick&&t.handleCaretClick(...a)),"aria-hidden":"true"},null,2)]):k("v-if",!0)],16,X1),k(" Options "),(p(),S(Ko,{to:n.appendTo||"body",disabled:!n.appendToBody&&!n.appendTo},[d("div",{id:n.id?`${n.id}-dropdown`:void 0,class:h(t.classList.dropdown),tabindex:"-1",ref:"dropdown",onFocusin:e[10]||(e[10]=(...a)=>t.handleFocusIn&&t.handleFocusIn(...a)),onFocusout:e[11]||(e[11]=(...a)=>t.handleFocusOut&&t.handleFocusOut(...a))},[M(t.$slots,"beforelist",{options:t.fo}),d("ul",{class:h(t.classList.options),id:t.ariaControls,role:"listbox"},[n.groups?(p(!0),C(ie,{key:0},de(t.fg,(a,o,s)=>(p(),C("li",{class:h(t.classList.group),key:s,id:t.ariaGroupId(a),"aria-label":t.ariaGroupLabel(t.localize(a[n.groupLabel])),"aria-selected":t.isSelected(a),role:"option"},[a.__CREATE__?k("v-if",!0):(p(),C("div",{key:0,class:h(t.classList.groupLabel(a)),"data-pointed":t.isPointed(a),onMouseenter:u=>t.setPointer(a,o),onClick:u=>t.handleGroupClick(a)},[M(t.$slots,"grouplabel",{group:a,isSelected:t.isSelected,isPointed:t.isPointed},()=>[d("span",{innerHTML:t.localize(a[n.groupLabel])},null,8,sb)])],42,ob)),d("ul",{class:h(t.classList.groupOptions),"aria-label":t.ariaGroupLabel(t.localize(a[n.groupLabel])),role:"group"},[(p(!0),C(ie,null,de(a.__VISIBLE__,(u,c,m)=>(p(),C("li",{class:h(t.classList.option(u,a)),"data-pointed":t.isPointed(u),"data-selected":t.isSelected(u)||void 0,key:m,onMouseenter:E=>t.setPointer(u),onClick:E=>t.handleOptionClick(u),id:t.ariaOptionId(u),"aria-selected":t.isSelected(u),"aria-label":t.ariaOptionLabel(t.localize(u[n.label])),role:"option"},[M(t.$slots,"option",{option:u,isSelected:t.isSelected,isPointed:t.isPointed,search:t.search},()=>[d("span",null,Re(t.localize(u[n.label])),1)])],42,db))),128))],10,ub)],10,lb))),128)):(p(!0),C(ie,{key:1},de(t.fo,(a,o,s)=>(p(),C("li",{class:h(t.classList.option(a)),"data-pointed":t.isPointed(a),"data-selected":t.isSelected(a)||void 0,key:s,onMouseenter:u=>t.setPointer(a),onClick:u=>t.handleOptionClick(a),id:t.ariaOptionId(a),"aria-selected":t.isSelected(a),"aria-label":t.ariaOptionLabel(t.localize(a[n.label])),role:"option"},[M(t.$slots,"option",{option:a,isSelected:t.isSelected,isPointed:t.isPointed,search:t.search},()=>[d("span",null,Re(t.localize(a[n.label])),1)])],42,cb))),128))],10,ab),t.noOptions?M(t.$slots,"nooptions",{key:0},()=>[d("div",{class:h(t.classList.noOptions),innerHTML:t.localize(n.noOptionsText)},null,10,pb)]):k("v-if",!0),t.noResults?M(t.$slots,"noresults",{key:1},()=>[d("div",{class:h(t.classList.noResults),innerHTML:t.localize(n.noResultsText)},null,10,fb)]):k("v-if",!0),n.infinite&&t.hasMore?(p(),C("div",{key:2,class:h(t.classList.inifinite),ref:"infiniteLoader"},[M(t.$slots,"infinite",{},()=>[d("span",{class:h(t.classList.inifiniteSpinner)},null,2)])],2)):k("v-if",!0),M(t.$slots,"afterlist",{options:t.fo})],42,ib)],8,["to","disabled"])),k(" Hacky input element to show HTML5 required warning "),n.required?(p(),C("input",{key:0,class:h(t.classList.fakeInput),tabindex:"-1",value:t.textValue,required:""},null,10,vb)):k("v-if",!0),k(" Native input support "),n.nativeSupport?(p(),C(ie,{key:1},[n.mode=="single"?(p(),C("input",{key:0,type:"hidden",name:n.name,value:t.plainValue!==void 0?t.plainValue:""},null,8,hb)):(p(!0),C(ie,{key:1},de(t.plainValue,(a,o)=>(p(),C("input",{type:"hidden",name:`${n.name}[]`,value:a,key:o},null,8,mb))),128))],64)):k("v-if",!0),k(" Screen reader assistive text "),n.searchable&&t.hasSelected?(p(),C("div",{key:2,class:h(t.classList.assist),id:t.ariaAssist,"aria-hidden":"true"},Re(t.ariaLabel),11,gb)):k("v-if",!0),k(" Create height for empty input "),d("div",{class:h(t.classList.spacer)},null,2)],42,Y1)}Br.render=bb;Br.__file="node_modules/@vueform/multiselect/src/Multiselect.vue";var dl={};const wb=["name","id","disabled"],yb=["value"];function kb(t,e,n,r,i,l){const a=J("ElementLabelFloating"),o=J("Multiselect");return p(),S(N(t.elementLayout),{ref:"container"},ue({element:f(()=>[t.hasFloating&&!t.empty?(p(),S(a,{key:0,visible:!t.empty},null,8,["visible"])):k("v-if",!0),k(" Native select "),t.isNative?(p(),C("div",{key:1,class:h(t.classes.inputWrapper)},[Te(d("select",V({"onUpdate:modelValue":e[0]||(e[0]=s=>t.value=s),class:t.classes.input,name:t.name,id:t.fieldId,multiple:!0,disabled:t.isDisabled},{...t.attrs,...t.aria},{ref:"input"}),[(p(!0),C(ie,null,de(t.resolvedOptions,(s,u)=>(p(),C("option",{value:s.value,key:u},Re(s.label),9,yb))),128))],16,wb),[[Go,t.value]]),t.placeholder&&t.empty&&!t.isDisabled&&t.type=="select"?(p(),C("span",{key:0,class:h(t.classes.inputPlaceholder)},Re(t.Placeholder),3)):k("v-if",!0)],2)):(p(),C(ie,{key:2},[k(" @vueform/multiselect copmonent "),De(o,V(t.fieldOptions,{modelValue:t.value,"onUpdate:modelValue":e[1]||(e[1]=s=>t.value=s),classes:t.classes.select,id:t.fieldId,name:t.name,options:t.resolvedOptions,disabled:t.isDisabled,placeholder:t.Placeholder,attrs:t.attrs,aria:t.aria,locale:t.form$.locale$,onSelect:t.handleSelect,onDeselect:t.handleDeselect,onSearchChange:t.handleSearchChange,onTag:t.handleTag,onOpen:t.handleOpen,onClose:t.handleClose,onClear:t.handleClear,onPaste:t.handlePaste,ref:"input"}),ue({_:2},[de({option:"option",noresults:"no-results",nooptions:"no-options",afterlist:"after-list",beforelist:"before-list",placeholder:"placeholder",grouplabel:"group-label",caret:"caret",clear:"clear",spinner:"spinner",default:"default"},(s,u)=>({name:u,fn:f(c=>[M(t.$slots,s,V(c,{el$:t.el$}),()=>[(p(),S(N(t.fieldSlots[s]),V(c,{el$:t.el$}),null,16,["el$"]))])])})),t.fieldOptions.mode=="multiple"?{name:"multiplelabel",fn:f(({values:s})=>[M(t.$slots,"multiple-label",{values:s,el$:t.el$},()=>[(p(),S(N(t.fieldSlots["multiple-label"]),{values:s,el$:t.el$},null,8,["values","el$"]))])]),key:"0"}:void 0]),1040,["modelValue","classes","id","name","options","disabled","placeholder","attrs","aria","locale","onSelect","onDeselect","onSearchChange","onTag","onOpen","onClose","onClear","onPaste"])],2112))]),_:2},[de(t.elementSlots,(s,u)=>({name:u,fn:f(()=>[M(t.$slots,u,{el$:t.el$},()=>[(p(),S(N(s),{el$:t.el$},null,8,["el$"]))])])}))]),1536)}dl.render=kb;dl.__file="themes/blank/templates/elements/MultiselectElement.vue";var Xs={name:"MultiselectElement",components:{Multiselect:Br},render:dl.render,data(){return{merge:!0,defaultClasses:{container:"vf-text-type",input:"vf-input vf-native-multiselect",input_enabled:"",input_disabled:"",input_success:"vf-input-success",input_danger:"vf-input-danger",input_sm:"vf-input-sm",input_md:"",input_lg:"vf-input-lg",inputWrapper:"vf-native-multiselect-wrapper",select:{multipleLabel:"vf-multiselect-multiple-label",multipleLabel_sm:"vf-multiselect-multiple-label-sm",multipleLabel_md:"",multipleLabel_lg:"vf-multiselect-multiple-label-lg",multipleLabel_noClear:"vf-multiselect-multiple-label-no-clear",multipleLabel_noCaret:"vf-multiselect-multiple-label-no-caret",container:"vf-multiselect",container_enabled:"",container_disabled:"vf-multiselect-disabled",container_success:"vf-multiselect-success",container_danger:"vf-multiselect-danger",container_sm:"vf-multiselect-sm",container_md:"",container_lg:"vf-multiselect-lg",containerDisabled:"",containerOpen:"vf-multiselect-open",containerOpenTop:"vf-multiselect-open-top",containerActive:"vf-multiselect-active",containerActive_enabled:"",wrapper:"vf-multiselect-wrapper",wrapper_sm:"vf-multiselect-wrapper-sm",wrapper_md:"",wrapper_lg:"vf-multiselect-wrapper-lg",search:"vf-multiselect-search",search_sm:"vf-multiselect-search-sm",search_md:"",search_lg:"vf-multiselect-search-lg",placeholder:"vf-multiselect-placeholder",placeholder_sm:"vf-multiselect-placeholder-sm",placeholder_md:"",placeholder_lg:"vf-multiselect-placeholder-lg",caret:"vf-multiselect-caret",caret_sm:"vf-multiselect-caret-sm",caret_md:"",caret_lg:"vf-multiselect-caret-lg",caretOpen:"vf-multiselect-caret-open",clear:"vf-multiselect-clear",clear_sm:"vf-multiselect-clear-sm",clear_md:"",clear_lg:"vf-multiselect-clear-lg",clearIcon:"vf-multiselect-clear-icon",spinner:"vf-multiselect-spinner",spinner_sm:"vf-multiselect-spinner-sm",spinner_md:"",spinner_lg:"vf-multiselect-spinner-lg",infinite:"vf-multiselect-infinite",infinite_sm:"vf-multiselect-infinite-sm",infinite_md:"",infinite_lg:"vf-multiselect-infinite-lg",infiniteSpinner:"vf-multiselect-infinite-spinner",dropdown:"vf-multiselect-dropdown",dropdown_sm:"vf-multiselect-dropdown-sm",dropdown_md:"",dropdown_lg:"vf-multiselect-dropdown-lg",dropdownTop:"vf-multiselect-dropdown-top",dropdownTop_sm:"vf-multiselect-dropdown-top-sm",dropdownTop_md:"",dropdownTop_lg:"vf-multiselect-dropdown-top-lg",dropdownHidden:"vf-multiselect-dropdown-hidden",options:"vf-multiselect-options",optionsTop:"vf-multiselect-options-top",group:"vf-multiselect-group",groupLabel:"vf-multiselect-group-label",groupLabel_sm:"vf-multiselect-group-label-sm",groupLabel_md:"",groupLabel_lg:"vf-multiselect-group-label-lg",groupLabelPointable:"vf-multiselect-group-label-pointable",groupLabelPointed:"vf-multiselect-group-label-pointed",groupLabelSelected:"vf-multiselect-group-label-selected",groupLabelDisabled:"vf-multiselect-group-label-disabled",groupLabelSelectedPointed:"vf-multiselect-group-label-selected vf-multiselect-group-label-pointed",groupLabelSelectedDisabled:"vf-multiselect-group-label-selected vf-multiselect-group-label-disabled",groupOptions:"vf-multiselect-group-options",option:"vf-multiselect-option",option_sm:"vf-multiselect-option-sm",option_md:"",option_lg:"vf-multiselect-option-lg",optionPointed:"vf-multiselect-option-pointed",optionSelected:"vf-multiselect-option-selected",optionDisabled:"vf-multiselect-option-disabled",optionSelectedPointed:"vf-multiselect-option-selected vf-multiselect-option-pointed",optionSelectedDisabled:"vf-multiselect-option-selected vf-multiselect-option-disabled",noOptions:"vf-multiselect-no-options",noOptions_sm:"vf-multiselect-no-options-sm",noOptions_md:"",noOptions_lg:"vf-multiselect-no-options-lg",noResults:"vf-multiselect-no-results",noResults_sm:"vf-multiselect-no-results-sm",noResults_md:"",noResults_lg:"vf-multiselect-no-results-lg",fakeInput:"vf-multiselect-fake-input",assist:"vf-assistive-text",spacer:"vf-multiselect-spacer",spacer_sm:"vf-multiselect-spacer-sm",spacer_md:"",spacer_lg:"vf-multiselect-spacer-lg",$container:(t,{Size:e,isDanger:n,isSuccess:r,isDisabled:i})=>[t.select.container,t.select[`container_${e}`],i?t.select.container_disabled:null,!i&&!r&&!n?t.select.container_enabled:null,!i&&n?t.select.container_danger:null,!i&&r?t.select.container_success:null],$containerActive:(t,{Size:e,isDanger:n,isSuccess:r,isDisabled:i})=>[t.select.containerActive,t.select[`container_${e}`],!i&&!r&&!n?t.select.containerActive_enabled:null],$wrapper:(t,{Size:e})=>[t.select.wrapper,t.select[`wrapper_${e}`]],$search:(t,{Size:e})=>[t.select.search,t.select[`search_${e}`]],$placeholder:(t,{Size:e})=>[t.select.placeholder,t.select[`placeholder_${e}`]],$caret:(t,{Size:e})=>[t.select.caret,t.select[`caret_${e}`]],$clear:(t,{Size:e})=>[t.select.clear,t.select[`clear_${e}`]],$spinner:(t,{Size:e})=>[t.select.spinner,t.select[`spinner_${e}`]],$infinite:(t,{Size:e})=>[t.select.infinite,t.select[`infinite_${e}`]],$dropdown:(t,{Size:e})=>[t.select.dropdown,t.select[`dropdown_${e}`]],$dropdownTop:(t,{Size:e})=>[t.select.dropdownTop,t.select[`dropdownTop_${e}`]],$groupLabel:(t,{Size:e})=>[t.select.groupLabel,t.select[`groupLabel_${e}`]],$option:(t,{Size:e})=>[t.select.option,t.select[`option_${e}`]],$spacer:(t,{Size:e})=>[t.select.spacer,t.select[`spacer_${e}`]],$noOptions:(t,{Size:e})=>[t.select.noOptions,t.select[`noOptions_${e}`]],$noResults:(t,{Size:e})=>[t.select.noResults,t.select[`noResults_${e}`]],$multipleLabel:(t,{Size:e,canClear:n,caret:r})=>[t.select.multipleLabel,t.select[`multipleLabel_${e}`],n?null:t.select.multipleLabel_noClear,r?null:t.select.multipleLabel_noCaret]},$input:(t,{isDisabled:e,Size:n,isDanger:r,isSuccess:i})=>[t.input,t[`input_${n}`],e?t.input_disabled:null,!e&&!i&&!r?t.input_enabled:null,!e&&r?t.input_danger:null,!e&&i?t.input_success:null]}}}},Cb=`/* Some styles are contained in Vueform.vue & SelectElement.vue */

.vf-multiselect-multiple-label {
  display: flex;
  align-items: center;
  height: 100%;
  position: absolute;
  left: 0;
  top: 0;
  pointer-events: none;
  background: transparent;
  padding-left: var(--vf-px-input);
  padding-right: calc(var(--vf-px-input) * 2.5 + 20px);
}

.vf-multiselect-multiple-label.vf-multiselect-multiple-label-no-caret, .vf-multiselect-multiple-label.vf-multiselect-multiple-label-no-clear {
  padding-right: calc(var(--vf-px-input) * 1.5 + 10px);
}

.vf-multiselect-multiple-label.vf-multiselect-multiple-label-no-caret.vf-multiselect-multiple-label-no-clear {
  padding-right: var(--vf-px-input);
}

.vf-multiselect-multiple-label.vf-multiselect-multiple-label-sm {
  padding-left: var(--vf-px-input-sm);
  padding-right: calc(var(--vf-px-input-sm) * 1.5 + 20px);
}

.vf-multiselect-multiple-label.vf-multiselect-multiple-label-sm.vf-multiselect-multiple-label-no-caret, .vf-multiselect-multiple-label.vf-multiselect-multiple-label-sm.vf-multiselect-multiple-label-no-clear {
  padding-right: calc(var(--vf-px-input-sm) * 1.5 + 10px);
}

.vf-multiselect-multiple-label.vf-multiselect-multiple-label-sm.vf-multiselect-multiple-label-no-caret.vf-multiselect-multiple-label-no-clear {
  padding-right: var(--vf-px-input-sm);
}

.vf-multiselect-multiple-label.vf-multiselect-multiple-label-lg {
  padding-left: var(--vf-px-input-lg);
  padding-right: calc(var(--vf-px-input-lg) * 2.5 + 20px);
}

.vf-multiselect-multiple-label.vf-multiselect-multiple-label-lg.vf-multiselect-multiple-label-no-caret, .vf-multiselect-multiple-label.vf-multiselect-multiple-label-lg.vf-multiselect-multiple-label-no-clear {
  padding-right: calc(var(--vf-px-input-lg) * 1.5 + 10px);
}

.vf-multiselect-multiple-label.vf-multiselect-multiple-label-lg.vf-multiselect-multiple-label-no-caret.vf-multiselect-multiple-label-no-clear {
  padding-right: var(--vf-px-input-lg);
}

.vf-floating-wrapper ~ .vf-multiselect-multiple-label,
.vf-floating-wrapper ~ div .vf-multiselect-multiple-label {
  padding-top: calc(var(--vf-py-input) + var(--vf-floating-top) / 2);
  padding-bottom: calc(var(--vf-py-input) - var(--vf-floating-top) / 2);
}

.vf-floating-wrapper ~ .vf-multiselect-multiple-label-sm,
.vf-floating-wrapper ~ div .vf-multiselect-multiple-label-sm {
  padding-top: calc(var(--vf-py-input-sm) + var(--vf-floating-top-sm) / 2);
  padding-bottom: calc(var(--vf-py-input-sm) - var(--vf-floating-top-sm) / 2);
}

.vf-floating-wrapper ~ .vf-multiselect-multiple-label-lg,
.vf-floating-wrapper ~ div .vf-multiselect-multiple-label-lg {
  padding-top: calc(var(--vf-py-input-lg) + var(--vf-floating-top-lg) / 2);
  padding-bottom: calc(var(--vf-py-input-lg) - var(--vf-floating-top-lg) / 2);
}

[dir=rtl] .vf-multiselect-multiple-label {
  padding-left: calc(var(--vf-px-input) * 2.5 + 20px);
  padding-right: var(--vf-px-input);
  left: auto;
  right: 0;
}

[dir=rtl] .vf-multiselect-multiple-label.vf-multiselect-multiple-label-no-caret, [dir=rtl] .vf-multiselect-multiple-label.vf-multiselect-multiple-label-no-clear {
  padding-left: calc(var(--vf-px-input) * 1.5 + 10px);
  padding-right: var(--vf-px-input);
}

[dir=rtl] .vf-multiselect-multiple-label.vf-multiselect-multiple-label-no-caret.vf-multiselect-multiple-label-no-clear {
  padding-left: var(--vf-px-input);
  padding-right: var(--vf-px-input);
}

[dir=rtl] .vf-multiselect-multiple-label.vf-multiselect-multiple-label-sm {
  padding-left: calc(var(--vf-px-input-sm) * 2.5 + 20px);
  padding-right: var(--vf-px-input-sm);
}

[dir=rtl] .vf-multiselect-multiple-label.vf-multiselect-multiple-label-sm.vf-multiselect-multiple-label-no-caret, [dir=rtl] .vf-multiselect-multiple-label.vf-multiselect-multiple-label-sm.vf-multiselect-multiple-label-no-clear {
  padding-left: calc(var(--vf-px-input-sm) * 1.5 + 10px);
  padding-right: var(--vf-px-input-sm);
}

[dir=rtl] .vf-multiselect-multiple-label.vf-multiselect-multiple-label-sm.vf-multiselect-multiple-label-no-caret.vf-multiselect-multiple-label-no-clear {
  padding-left: var(--vf-px-input-sm);
  padding-right: var(--vf-px-input-sm);
}

[dir=rtl] .vf-multiselect-multiple-label.vf-multiselect-multiple-label-lg {
  padding-left: calc(var(--vf-px-input-lg) * 2.5 + 20px);
  padding-right: var(--vf-px-input-lg);
}

[dir=rtl] .vf-multiselect-multiple-label.vf-multiselect-multiple-label-lg.vf-multiselect-multiple-label-no-caret, [dir=rtl] .vf-multiselect-multiple-label.vf-multiselect-multiple-label-lg.vf-multiselect-multiple-label-no-clear {
  padding-left: calc(var(--vf-px-input-lg) * 1.5 + 10px);
  padding-right: var(--vf-px-input-lg);
}

[dir=rtl] .vf-multiselect-multiple-label.vf-multiselect-multiple-label-lg.vf-multiselect-multiple-label-no-caret.vf-multiselect-multiple-label-no-clear {
  padding-left: var(--vf-px-input-lg);
  padding-right: var(--vf-px-input-lg);
}`;te(Cb);Xs.__file="themes/vueform/templates/elements/MultiselectElement.vue";var cl={};const Eb=["aria-labelledby"];function Ab(t,e,n,r,i,l){return p(),S(N(t.elementLayout),{multiple:!0,ref:"container"},ue({element:f(()=>[d("div",{class:h(t.classes.wrapper),role:"group","aria-labelledby":t.labelId},[M(t.$slots,"default",{},()=>[(p(!0),C(ie,null,de(t.children,(a,o)=>(p(),S(N(t.component(a)),V({ref_for:!0},a,{embed:t.embed,name:o,key:o,onRemove:e[0]||(e[0]=s=>t.$emit("remove",s))}),null,16,["embed","name"]))),128))])],10,Eb)]),_:2},[de(t.elementSlots,(a,o)=>({name:o,fn:f(()=>[M(t.$slots,o,{el$:t.el$},()=>[(p(),S(N(a),{el$:t.el$},null,8,["el$"]))])])}))]),1536)}cl.render=Ab;cl.__file="themes/blank/templates/elements/ObjectElement.vue";var Zs={name:"ObjectElement",render:cl.render,data(){return{merge:!0,defaultClasses:{container:"",wrapper:"vf-row",wrapper_sm:"vf-row-sm",wrapper_md:"",wrapper_lg:"vf-row-lg",wrapper_embed:"vf-row-embed",$wrapper:(t,{Size:e,embed:n})=>[t.wrapper,t[`wrapper_${e}`],n?t.wrapper_embed:null]}}}},Lb="/* Some styles are contained in Vueform.vue */";te(Lb);Zs.__file="themes/vueform/templates/elements/ObjectElement.vue";var pl={};const xb=["value","type","name","id","placeholder","autocomplete","disabled","readonly"];function Tb(t,e,n,r,i,l){const a=J("ElementAddonOptions"),o=J("ElementLabelFloating"),s=J("ElementLoader");return p(),S(N(t.elementLayout),{ref:"container"},ue({element:f(()=>[d("div",{class:h(t.classes.inputContainer)},[d("div",{class:h(t.classes.optionsWrapper)},[De(a,{options:t.addonOptions,placeholder:t.addonPlaceholder,aria:t.optionsAria,onSelect:t.handleOptionSelect,onOpen:t.handleOpen,onClose:t.handleClose,ref:"options$"},null,8,["options","placeholder","aria","onSelect","onOpen","onClose"])],2),t.hasFloating&&!t.empty?(p(),S(o,{key:0,visible:!t.empty},null,8,["visible"])):k("v-if",!0),t.isLoading?(p(),S(s,{key:1})):k("v-if",!0),d("input",V({value:t.model,type:t.inputType,name:t.name,id:t.fieldId,class:t.classes.input,placeholder:t.Placeholder,autocomplete:t.autocomplete,disabled:t.isDisabled,readonly:t.isReadonly},{...t.attrs,...t.aria},{onKeydown:e[0]||(e[0]=(...u)=>t.handleKeydown&&t.handleKeydown(...u)),onInput:e[1]||(e[1]=(...u)=>t.handleInput&&t.handleInput(...u)),onSelect:e[2]||(e[2]=(...u)=>t.handleInput&&t.handleInput(...u)),onBlur:e[3]||(e[3]=(...u)=>t.handleBlur&&t.handleBlur(...u)),onFocus:e[4]||(e[4]=(...u)=>t.handleFocus&&t.handleFocus(...u)),ref:"input"}),null,16,xb)],2)]),_:2},[de(t.elementSlots,(u,c)=>({name:c,fn:f(()=>[M(t.$slots,c,{el$:t.el$},()=>[(p(),S(N(u),{el$:t.el$},null,8,["el$"]))])])}))]),1536)}pl.render=Tb;pl.__file="themes/blank/templates/elements/PhoneElement.vue";var eu={name:"PhoneElement",render:pl.render,data(){return{merge:!0,defaultClasses:{container:"vf-text-type",inputContainer:"vf-input-group",inputContainer_sm:"vf-input-group-sm",inputContainer_md:"",inputContainer_lg:"vf-input-group-lg",inputContainer_default:"",inputContainer_disabled:"vf-input-group-disabled",inputContainer_focused:"vf-input-group-focused",inputContainer_success:"vf-input-group-success",inputContainer_danger:"vf-input-group-danger",input:"vf-input-field",input_sm:"",input_md:"",input_lg:"",input_enabled:"",input_disabled:"",input_focused:"",input_success:"",input_danger:"",optionsWrapper:"vf-phone-options-wrapper",optionsWrapper_sm:"vf-phone-options-wrapper-sm",optionsWrapper_md:"",optionsWrapper_lg:"vf-phone-options-wrapper-lg",optionWrapper:"",option:"vf-phone-option",option_active:"vf-phone-option-active",optionWrapper:"vf-phone-option-wrapper",flag:"vf-phone-flag",country:"vf-phone-country",number:"vf-phone-number",placeholder:"vf-phone-flag vf-phone-flag-placeholder",$optionsWrapper:(t,{Size:e})=>[t.optionsWrapper,t[`optionsWrapper_${e}`]],$option:t=>e=>[t.option,e?t.option_active:null],$inputContainer:(t,{isDisabled:e,Size:n,isSuccess:r,isDanger:i,focused:l})=>[t.inputContainer,t[`inputContainer_${n}`],e?t.inputContainer_disabled:null,!e&&!r&&!i?t.inputContainer_default:null,!e&&l?t.inputContainer_focused:null,!e&&r?t.inputContainer_success:null,!e&&i?t.inputContainer_danger:null],$input:(t,{isDisabled:e,Size:n,isSuccess:r,isDanger:i,focused:l})=>[t.input,t[`input_${n}`],e?t.input_disabled:null,!e&&!r&&!i&&!l?t.input_enabled:null,!e&&l&&!r&&!i?t.input_focused:null,!e&&i?t.input_danger:null,!e&&r?t.input_success:null]}}}},Sb=`/* Some styles are contained in Vueform.vue */

.vf-phone-option {
  display: flex;
  align-items: center;
  cursor: pointer;
  padding: 0.3125rem 0.75rem;
  white-space: nowrap;
}

.vf-phone-option-active {
  background: var(--vf-bg-selected);
}

.vf-phone-options-wrapper {
  display: flex;
  align-items: center;
  margin-left: var(--vf-px-input);
}

.vf-phone-options-wrapper.vf-phone-options-wrapper-sm {
  margin-left: var(--vf-px-input-sm);
}

.vf-phone-options-wrapper.vf-phone-options-wrapper-lg {
  margin-left: var(--vf-px-input-lg);
}

.vf-phone-option-wrapper {
  display: flex;
  align-items: center;
}

.vf-phone-flag {
  background: no-repeat 0 0;
  background-image: url("data:image/png;base64,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");
  background-size: 24px 4716px;
  width: 24px;
  height: 16px;
  overflow: hidden;
}

.vf-phone-flag-placeholder {
  opacity: 0.6;
}

.vf-phone-country {
  margin-left: 0.75rem;
  font-weight: 600;
  font-size: 15px;
  display: flex;
}

.vf-phone-number {
  margin-left: 0.5rem;
  color: var(--vf-color-muted);
}

[dir=rtl] .vf-addon-options-wrapper {
  margin-left: 0;
  margin-right: var(--vf-px-input);
}

[dir=rtl] .vf-addon-options-wrapper.vf-addon-options-wrapper-sm {
  margin-left: 0;
  margin-right: var(--vf-px-input-sm);
}

[dir=rtl] .vf-addon-options-wrapper.vf-addon-options-wrapper-lg {
  margin-left: 0;
  margin-right: var(--vf-px-input-lg);
}

[dir=rtl] .vf-phone-country {
  margin-left: 0;
  margin-right: 0.75rem;
}

[dir=rtl] .vf-phone-number {
  margin-left: 0;
  margin-right: 0.5rem;
}`;te(Sb);eu.__file="themes/vueform/templates/elements/PhoneElement.vue";var fl={};const _b=["value","name","id","disabled"],Mb=["innerHTML"];function Ib(t,e,n,r,i,l){return p(),S(N(t.elementLayout),{ref:"container"},ue({element:f(()=>[d("label",{class:h(t.classes.wrapper)},[Te(d("input",V({type:"radio","onUpdate:modelValue":e[0]||(e[0]=a=>t.value=a)},t.aria,{value:t.radioValue,class:t.classes.input,name:t.inputName,id:t.fieldId,disabled:t.isDisabled,ref:"input"}),null,16,_b),[[si,t.value]]),k(" If label is HTML "),t.Text?(p(),C("span",{key:0,class:h(t.classes.text),innerHTML:t.Text},null,10,Mb)):(p(),C(ie,{key:1},[k(" If label is slot "),d("span",{class:h(t.classes.text)},[M(t.$slots,"default",{el$:t.el$},()=>[(p(),S(N(t.fieldSlots.default),{el$:t.el$},null,8,["el$"]))])],2)],2112))],2)]),_:2},[de(t.elementSlots,(a,o)=>({name:o,fn:f(()=>[M(t.$slots,o,{el$:t.el$},()=>[(p(),S(N(a),{el$:t.el$},null,8,["el$"]))])])}))]),1536)}fl.render=Ib;fl.__file="themes/blank/templates/elements/RadioElement.vue";var tu={name:"RadioElement",render:fl.render,data(){return{merge:!0,defaultClasses:{container:"",wrapper:"vf-radio-wrapper",wrapper_sm:"vf-radio-wrapper-sm",wrapper_md:"",wrapper_lg:"vf-radio-wrapper-lg",wrapper_left:"vf-radio-wrapper-left",wrapper_right:"vf-radio-wrapper-right",input:"vf-radio",input_enabled:"",input_disabled:"",input_danger:"vf-radio-danger",input_sm:"vf-radio-sm",input_md:"",input_lg:"vf-radio-lg",input_left:"vf-radio-left",input_right:"vf-radio-right",input_standalone:"vf-radio-standalone",text:"vf-radio-text",text_left:"vf-radio-text-left",text_right:"vf-radio-text-right",$wrapper:(t,{Size:e,align:n})=>[t.wrapper,t[`wrapper_${e}`],n==="left"?t.wrapper_left:null,n==="right"?t.wrapper_right:null],$input:(t,{isDisabled:e,Size:n,isDanger:r,align:i,standalone:l})=>[t.input,t[`input_${n}`],e?t.input_disabled:t.input_enabled,!e&&r?t.input_danger:null,i==="left"?t.input_left:null,i==="right"?t.input_right:null,l?t.input_standalone:null],$text:(t,{align:e})=>[t.text,e==="left"?t.text_left:null,e==="right"?t.text_right:null]}}}},Bb="/* Some styles are contained in Vueform.vue */";te(Bb);tu.__file="themes/vueform/templates/elements/RadioElement.vue";var Dr={};const Db=["aria-labelledby"];function Rb(t,e,n,r,i,l){const a=J("RadiogroupRadio");return p(),S(N(t.elementLayout),{ref:"container"},ue({element:f(()=>[d("div",{class:h(t.classes.wrapper),"aria-labelledby":t.labelId,role:"radiogroup"},[(p(!0),C(ie,null,de(t.resolvedOptions,(o,s,u)=>(p(),S(a,{items:t.resolvedOptions,index:s,item:o,value:o.value,key:u,attrs:t.aria},{default:f(c=>[M(t.$slots,"radio",V({ref_for:!0},c,{el$:t.el$}),()=>[(p(),S(N(t.fieldSlots.radio),V({ref_for:!0},c,{el$:t.el$}),null,16,["el$"]))])]),_:3},8,["items","index","item","value","attrs"]))),128))],10,Db)]),_:2},[de(t.elementSlots,(o,s)=>({name:s,fn:f(()=>[M(t.$slots,s,{el$:t.el$},()=>[(p(),S(N(o),{el$:t.el$},null,8,["el$"]))])])}))]),1536)}Dr.render=Rb;Dr.__file="themes/blank/templates/elements/RadiogroupElement.vue";var nu={name:"RadiogroupElement",render:Dr.render,data(){return{merge:!0,defaultClasses:{container:"vf-radiogroup-view-default",wrapper:"vf-radiogroup-wrapper",wrapper_sm:"vf-radiogroup-wrapper-sm",wrapper_md:"",wrapper_lg:"vf-radiogroup-wrapper-lg",$wrapper:(t,{Size:e})=>[t.wrapper,t[`wrapper_${e}`]]}}}},Fb=`.vf-radiogroup-wrapper {
  cursor: pointer;
}

.vf-radiogroup-wrapper .vf-radio-container {
  padding-top: 0;
}`;te(Fb);nu.__file="themes/vueform/templates/elements/RadiogroupElement.vue";var ru={name:"RadiogroupElement",render:Dr.render,data(){return{merge:!0,defaultClasses:{container:"vf-radiogroup-view-tabs vf-text-type",wrapper:"vf-radiogroup-tabs-wrapper",wrapper_sm:"vf-radiogroup-tabs-wrapper-sm",wrapper_md:"",wrapper_lg:"vf-radiogroup-tabs-wrapper-lg",$wrapper:(t,{Size:e})=>[t.wrapper,t[`wrapper_${e}`]]}}}},Ob=`.vf-radiogroup-tabs-wrapper {
  display: grid;
  grid-auto-flow: column;
  box-shadow: var(--vf-shadow-input);
  border-radius: var(--vf-radius-large);
}

.vf-radiogroup-tabs-wrapper.vf-radiogroup-tabs-wrapper-sm {
  border-radius: var(--vf-radius-large-sm);
}

.vf-radiogroup-tabs-wrapper.vf-radiogroup-tabs-wrapper-lg {
  border-radius: var(--vf-radius-large-lg);
}`;te(Ob);ru.__file="themes/vueform/templates/elements/RadiogroupElement_tabs.vue";var iu={name:"RadiogroupElement",render:Dr.render,data(){return{merge:!0,defaultClasses:{container:"vf-radiogroup-view-blocks",wrapper:"vf-radiogroup-blocks-wrapper",wrapper_sm:"vf-radiogroup-blocks-wrapper-sm",wrapper_md:"",wrapper_lg:"vf-radiogroup-blocks-wrapper-lg",$wrapper:(t,{Size:e})=>[t.wrapper,t[`wrapper_${e}`]]}}}},$b=`.vf-radiogroup-blocks-wrapper {
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  box-shadow: var(--vf-shadow-input);
  border-radius: var(--vf-radius-large);
}

.vf-radiogroup-blocks-wrapper.vf-radiogroup-blocks-wrapper-sm {
  border-radius: var(--vf-radius-large-sm);
}

.vf-radiogroup-blocks-wrapper.vf-radiogroup-blocks-wrapper-lg {
  border-radius: var(--vf-radius-large-lg);
}`;te($b);iu.__file="themes/vueform/templates/elements/RadiogroupElement_blocks.vue";var vl={};const Hb=["name","id","disabled"],Pb=["value","disabled"];function zb(t,e,n,r,i,l){const a=J("ElementLabelFloating"),o=J("Multiselect");return p(),S(N(t.elementLayout),{ref:"container"},ue({element:f(()=>[t.hasFloating&&!t.empty?(p(),S(a,{key:0,visible:!t.empty},null,8,["visible"])):k("v-if",!0),k(" Native select "),t.isNative?(p(),C("div",{key:1,class:h(t.classes.inputWrapper)},[Te(d("select",V({"onUpdate:modelValue":e[0]||(e[0]=s=>t.value=s),class:t.classes.input,name:t.name,id:t.fieldId,disabled:t.isDisabled},{...t.attrs,...t.aria},{ref:"input"}),[(p(!0),C(ie,null,de(t.resolvedOptions,(s,u)=>(p(),C("option",{value:s.value,disabled:s.disabled,key:u},Re(s.label),9,Pb))),128))],16,Hb),[[Go,t.value]]),t.placeholder&&t.empty&&!t.isDisabled&&t.type=="select"?(p(),C("span",{key:0,class:h(t.classes.inputPlaceholder)},Re(t.Placeholder),3)):k("v-if",!0),d("span",{class:h(t.classes.inputCaret)},null,2)],2)):(p(),C(ie,{key:2},[k(" @vueform/multiselect copmonent "),De(o,V(t.fieldOptions,{modelValue:t.value,"onUpdate:modelValue":e[1]||(e[1]=s=>t.value=s),classes:t.classes.select,id:t.fieldId,name:t.name,options:t.resolvedOptions,disabled:t.isDisabled,placeholder:t.Placeholder,attrs:t.attrs,aria:t.aria,locale:t.form$.locale$,onSelect:t.handleSelect,onDeselect:t.handleDeselect,onSearchChange:t.handleSearchChange,onTag:t.handleTag,onOpen:t.handleOpen,onClose:t.handleClose,onClear:t.handleClear,onPaste:t.handlePaste,ref:"input"}),ue({_:2},[de({option:"option",noresults:"no-results",nooptions:"no-options",afterlist:"after-list",beforelist:"before-list",placeholder:"placeholder",grouplabel:"group-label",caret:"caret",clear:"clear",spinner:"spinner",default:"default"},(s,u)=>({name:u,fn:f(c=>[M(t.$slots,s,V(c,{el$:t.el$}),()=>[(p(),S(N(t.fieldSlots[s]),V(c,{el$:t.el$}),null,16,["el$"]))])])})),t.fieldOptions.mode=="single"?{name:"singlelabel",fn:f(({value:s})=>[M(t.$slots,"single-label",{value:s,el$:t.el$},()=>[(p(),S(N(t.fieldSlots["single-label"]),{value:s,el$:t.el$},null,8,["value","el$"]))])]),key:"0"}:void 0]),1040,["modelValue","classes","id","name","options","disabled","placeholder","attrs","aria","locale","onSelect","onDeselect","onSearchChange","onTag","onOpen","onClose","onClear","onPaste"])],2112))]),_:2},[de(t.elementSlots,(s,u)=>({name:u,fn:f(()=>[M(t.$slots,u,{el$:t.el$},()=>[(p(),S(N(s),{el$:t.el$},null,8,["el$"]))])])}))]),1536)}vl.render=zb;vl.__file="themes/blank/templates/elements/SelectElement.vue";var au={name:"SelectElement",render:vl.render,components:{Multiselect:Br},data(){return{merge:!0,defaultClasses:{container:"vf-text-type",input:"vf-input vf-native-select",input_enabled:"",input_disabled:"",input_success:"vf-input-success",input_danger:"vf-input-danger",input_sm:"vf-input-sm",input_md:"",input_lg:"vf-input-lg",inputWrapper:"vf-native-select-wrapper",inputWrapper_sm:"vf-native-select-wrapper-sm",inputWrapper_md:"",inputWrapper_lg:"vf-native-select-wrapper-lg",inputPlaceholder:"vf-native-select-placeholder",inputPlaceholder_sm:"vf-native-select-placeholder-sm",inputPlaceholder_md:"",inputPlaceholder_lg:"vf-native-select-placeholder-lg",inputCaret:"vf-native-select-caret",inputCaret_sm:"vf-native-select-caret-sm",inputCaret_md:"",inputCaret_lg:"vf-native-select-caret-lg",select:{singleLabel:"vf-multiselect-single-label",singleLabel_sm:"vf-multiselect-single-label-sm",singleLabel_md:"",singleLabel_lg:"vf-multiselect-single-label-lg",singleLabel_noClear:"vf-multiselect-single-label-no-clear",singleLabel_noCaret:"vf-multiselect-single-label-no-caret",singleLabelText:"vf-multiselect-single-label-text",singleLabelText_truncate:"vf-multiselect-single-label-text-truncate",container:"vf-multiselect",container_enabled:"",container_disabled:"vf-multiselect-disabled",container_success:"vf-multiselect-success",container_danger:"vf-multiselect-danger",container_sm:"vf-multiselect-sm",container_md:"",container_lg:"vf-multiselect-lg",containerDisabled:"",containerOpen:"vf-multiselect-open",containerOpenTop:"vf-multiselect-open-top",containerActive:"vf-multiselect-active",containerActive_enabled:"",wrapper:"vf-multiselect-wrapper",wrapper_sm:"vf-multiselect-wrapper-sm",wrapper_md:"",wrapper_lg:"vf-multiselect-wrapper-lg",search:"vf-multiselect-search",search_sm:"vf-multiselect-search-sm",search_md:"",search_lg:"vf-multiselect-search-lg",placeholder:"vf-multiselect-placeholder",placeholder_sm:"vf-multiselect-placeholder-sm",placeholder_md:"",placeholder_lg:"vf-multiselect-placeholder-lg",caret:"vf-multiselect-caret",caret_sm:"vf-multiselect-caret-sm",caret_md:"",caret_lg:"vf-multiselect-caret-lg",caretOpen:"vf-multiselect-caret-open",clear:"vf-multiselect-clear",clear_sm:"vf-multiselect-clear-sm",clear_md:"",clear_lg:"vf-multiselect-clear-lg",clearIcon:"vf-multiselect-clear-icon",spinner:"vf-multiselect-spinner",spinner_sm:"vf-multiselect-spinner-sm",spinner_md:"",spinner_lg:"vf-multiselect-spinner-lg",infinite:"vf-multiselect-infinite",infinite_sm:"vf-multiselect-infinite-sm",infinite_md:"",infinite_lg:"vf-multiselect-infinite-lg",infiniteSpinner:"vf-multiselect-infinite-spinner",dropdown:"vf-multiselect-dropdown",dropdown_sm:"vf-multiselect-dropdown-sm",dropdown_md:"",dropdown_lg:"vf-multiselect-dropdown-lg",dropdownTop:"vf-multiselect-dropdown-top",dropdownTop_sm:"vf-multiselect-dropdown-top-sm",dropdownTop_md:"",dropdownTop_lg:"vf-multiselect-dropdown-top-lg",dropdownHidden:"vf-multiselect-dropdown-hidden",options:"vf-multiselect-options",optionsTop:"vf-multiselect-options-top",group:"vf-multiselect-group",groupLabel:"vf-multiselect-group-label",groupLabel_sm:"vf-multiselect-group-label-sm",groupLabel_md:"",groupLabel_lg:"vf-multiselect-group-label-lg",groupLabelPointable:"vf-multiselect-group-label-pointable",groupLabelPointed:"vf-multiselect-group-label-pointed",groupLabelSelected:"vf-multiselect-group-label-selected",groupLabelDisabled:"vf-multiselect-group-label-disabled",groupLabelSelectedPointed:"vf-multiselect-group-label-selected vf-multiselect-group-label-pointed",groupLabelSelectedDisabled:"vf-multiselect-group-label-selected vf-multiselect-group-label-disabled",groupOptions:"vf-multiselect-group-options",option:"vf-multiselect-option",option_sm:"vf-multiselect-option-sm",option_md:"",option_lg:"vf-multiselect-option-lg",optionPointed:"vf-multiselect-option-pointed",optionSelected:"vf-multiselect-option-selected",optionDisabled:"vf-multiselect-option-disabled",optionSelectedPointed:"vf-multiselect-option-selected vf-multiselect-option-pointed",optionSelectedDisabled:"vf-multiselect-option-selected vf-multiselect-option-disabled",noOptions:"vf-multiselect-no-options",noOptions_sm:"vf-multiselect-no-options-sm",noOptions_md:"",noOptions_lg:"vf-multiselect-no-options-lg",noResults:"vf-multiselect-no-results",noResults_sm:"vf-multiselect-no-results-sm",noResults_md:"",noResults_lg:"vf-multiselect-no-results-lg",fakeInput:"vf-multiselect-fake-input",assist:"vf-assistive-text",spacer:"vf-multiselect-spacer",spacer_sm:"vf-multiselect-spacer-sm",spacer_md:"",spacer_lg:"vf-multiselect-spacer-lg",$container:(t,{Size:e,isDanger:n,isSuccess:r,isDisabled:i})=>[t.select.container,t.select[`container_${e}`],i?t.select.container_disabled:null,!i&&!r&&!n?t.select.container_enabled:null,!i&&n?t.select.container_danger:null,!i&&r?t.select.container_success:null],$containerActive:(t,{Size:e,isDanger:n,isSuccess:r,isDisabled:i})=>[t.select.containerActive,t.select[`container_${e}`],!i&&!r&&!n?t.select.containerActive_enabled:null],$wrapper:(t,{Size:e})=>[t.select.wrapper,t.select[`wrapper_${e}`]],$search:(t,{Size:e})=>[t.select.search,t.select[`search_${e}`]],$placeholder:(t,{Size:e})=>[t.select.placeholder,t.select[`placeholder_${e}`]],$caret:(t,{Size:e})=>[t.select.caret,t.select[`caret_${e}`]],$clear:(t,{Size:e})=>[t.select.clear,t.select[`clear_${e}`]],$spinner:(t,{Size:e})=>[t.select.spinner,t.select[`spinner_${e}`]],$infinite:(t,{Size:e})=>[t.select.infinite,t.select[`infinite_${e}`]],$dropdown:(t,{Size:e})=>[t.select.dropdown,t.select[`dropdown_${e}`]],$dropdownTop:(t,{Size:e})=>[t.select.dropdownTop,t.select[`dropdownTop_${e}`]],$groupLabel:(t,{Size:e})=>[t.select.groupLabel,t.select[`groupLabel_${e}`]],$option:(t,{Size:e})=>[t.select.option,t.select[`option_${e}`]],$spacer:(t,{Size:e})=>[t.select.spacer,t.select[`spacer_${e}`]],$noOptions:(t,{Size:e})=>[t.select.noOptions,t.select[`noOptions_${e}`]],$noResults:(t,{Size:e})=>[t.select.noResults,t.select[`noResults_${e}`]],$singleLabel:(t,{Size:e,canClear:n,caret:r})=>[t.select.singleLabel,t.select[`singleLabel_${e}`],n?null:t.select.singleLabel_noClear,r?null:t.select.singleLabel_noCaret],$singleLabelText:(t,{truncate:e})=>[t.select.singleLabelText,e?t.select.singleLabelText_truncate:null]},$input:(t,{isDisabled:e,Size:n,isDanger:r,isSuccess:i,caret:l})=>[t.input,t[`input_${n}`],e?t.input_disabled:null,!e&&!i&&!r?t.input_enabled:null,!e&&r?t.input_danger:null,!e&&i?t.input_success:null],$inputWrapper:(t,{Size:e})=>[t.inputWrapper,t[`inputWrapper_${e}`]],$inputPlaceholder:(t,{Size:e})=>[t.inputPlaceholder,t[`inputPlaceholder_${e}`]],$inputCaret:(t,{Size:e})=>[t.inputCaret,t[`inputCaret_${e}`]]}}}},Nb=`.vf-native-select {
  -webkit-appearance: none;
     -moz-appearance: none;
          appearance: none;
}

.vf-native-select::-webkit-search-decoration, .vf-native-select::-webkit-search-cancel-button, .vf-native-select::-webkit-search-results-button, .vf-native-select::-webkit-search-results-decoration {
  -webkit-appearance: none;
}

.vf-input.vf-native-select {
  padding-right: calc(var(--vf-px-input) * 2);
}

.vf-input-sm.vf-native-select {
  padding-right: calc(var(--vf-px-input-sm) * 2);
}

.vf-input-lg.vf-native-select {
  padding-right: calc(var(--vf-px-input-lg) * 2);
}

.vf-native-select-wrapper {
  position: relative;
}

.vf-native-select-wrapper.vf-native-select-wrapper-sm:before {
  width: var(--vf-min-height-input-sm);
  height: var(--vf-min-height-input-sm);
}

.vf-native-select-wrapper.vf-native-select-wrapper-lg:before {
  width: var(--vf-min-height-input-lg);
  height: var(--vf-min-height-input-lg);
}

.vf-native-select-placeholder {
  position: absolute;
  top: 0;
  left: var(--vf-px-input);
  bottom: 0;
  display: flex;
  align-items: center;
  margin-left: 1px;
  font-family: inherit;
  font-size: inherit;
  font-weight: inherit;
  line-height: inherit;
  color: var(--vf-color-placeholder);
  cursor: default;
  pointer-events: none;
}

.vf-native-select-placeholder.vf-native-select-placeholder-sm {
  left: var(--vf-px-input-sm);
}

.vf-native-select-placeholder.vf-native-select-placeholder-lg {
  left: var(--vf-px-input-lg);
}

.vf-native-select-caret {
  mask-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 320 512' fill='currentColor' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M31.3 192h257.3c17.8 0 26.7 21.5 14.1 34.1L174.1 354.8c-7.8 7.8-20.5 7.8-28.3 0L17.2 226.1C4.6 213.5 13.5 192 31.3 192z'%3E%3C/path%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 320 512' fill='currentColor' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M31.3 192h257.3c17.8 0 26.7 21.5 14.1 34.1L174.1 354.8c-7.8 7.8-20.5 7.8-28.3 0L17.2 226.1C4.6 213.5 13.5 192 31.3 192z'%3E%3C/path%3E%3C/svg%3E");
  mask-position: center center;
  -webkit-mask-position: center center;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: var(--vf-bg-icon);
  position: absolute;
  right: 0;
  top: 50%;
  width: 0.625rem;
  height: 1rem;
  padding: 1px 0;
  box-sizing: content-box !important;
  display: inline-block;
  pointer-events: none;
  transform: translateY(-50%);
  transition: transform 150ms ease-in-out;
  margin-right: var(--vf-px-input);
}

.vf-native-select-caret.vf-native-select-caret-sm {
  margin-right: var(--vf-px-input-sm);
}

.vf-native-select-caret.vf-native-select-caret-lg {
  margin-right: var(--vf-px-input-lg);
}

/* @vueform/multiselect styles */

.vf-multiselect {
  position: relative;
  display: flex;
  width: 100%;
  margin: 0 auto;
  align-items: center;
  justify-content: flex-end;
  box-sizing: border-box;
  cursor: pointer;
  outline: 0px solid var(--vf-ring-color);
  outline-offset: 0;
  transition: box-shadow 0.2s ease-in-out, color 0.2s ease-in-out, background-color 0.2s ease-in-out, border-color 0.2s ease-in-out;
  font-size: var(--vf-font-size);
  line-height: var(--vf-line-height);
  letter-spacing: var(--vf-letter-spacing);
  background-color: var(--vf-bg-input);
  color: var(--vf-color-input);
  border-color: var(--vf-border-color-input);
  box-shadow: var(--vf-shadow-input);
  min-height: var(--vf-min-height-input);
  border-radius: var(--vf-radius-input);
  border-width: var(--vf-border-width-input-t) var(--vf-border-width-input-r) var(--vf-border-width-input-b) var(--vf-border-width-input-l);
  border-style: solid;
}

.vf-multiselect.vf-multiselect-open {
  border-bottom-left-radius: 0;
  border-bottom-right-radius: 0;
}

.vf-multiselect.vf-multiselect-open-top {
  border-top-left-radius: 0;
  border-top-right-radius: 0;
}

.vf-multiselect.vf-multiselect-disabled {
  cursor: default;
  background-color: var(--vf-bg-disabled);
  color: var(--vf-color-disabled);
  pointer-events: none;
}

.vf-multiselect.vf-multiselect-success {
  background-color: var(--vf-bg-input-success);
  color: var(--vf-color-input-success);
  border-color: var(--vf-border-color-input-success);
}

.vf-multiselect.vf-multiselect-danger {
  background-color: var(--vf-bg-input-danger);
  color: var(--vf-color-input-danger);
  border-color: var(--vf-border-color-input-danger);
}

.vf-multiselect:hover {
  box-shadow: var(--vf-shadow-input-hover);
}

.vf-multiselect:hover:not(.vf-multiselect-success):not(.vf-multiselect-danger) {
  background-color: var(--vf-bg-input-hover);
  color: var(--vf-color-input-hover);
  border-color: var(--vf-border-color-input-hover);
}

.vf-multiselect.vf-multiselect-active {
  box-shadow: var(--vf-shadow-input-focus);
  outline: var(--vf-ring-width) solid var(--vf-ring-color);
}

.vf-multiselect.vf-multiselect-active:not(.vf-multiselect-success):not(.vf-multiselect-danger) {
  border-color: var(--vf-border-color-input-focus);
  background-color: var(--vf-bg-input-focus);
  color: var(--vf-color-input-focus);
}

.vf-multiselect.vf-multiselect-sm {
  min-height: var(--vf-min-height-input-sm);
  border-radius: var(--vf-radius-input-sm);
  font-size: var(--vf-font-size-sm);
  line-height: var(--vf-line-height-sm);
  letter-spacing: var(--vf-letter-spacing-sm);
}

.vf-multiselect.vf-multiselect-lg {
  min-height: var(--vf-min-height-input-lg);
  border-radius: var(--vf-radius-input-lg);
  font-size: var(--vf-font-size-lg);
  line-height: var(--vf-line-height-lg);
  letter-spacing: var(--vf-letter-spacing-lg);
}

.vf-multiselect-wrapper {
  position: relative;
  margin: 0 auto;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  box-sizing: border-box;
  cursor: pointer;
  outline: none;
  min-height: calc(var(--vf-min-height-input) - var(--vf-border-width-input-t) - var(--vf-border-width-input-b));
}

.vf-multiselect-wrapper.vf-multiselect-wrapper-sm {
  min-height: calc(var(--vf-min-height-input-sm) - var(--vf-border-width-input-t) - var(--vf-border-width-input-b));
}

.vf-multiselect-wrapper.vf-multiselect-wrapper-lg {
  min-height: calc(var(--vf-min-height-input-lg) - var(--vf-border-width-input-t) - var(--vf-border-width-input-b));
}

.vf-multiselect-single-label,
.vf-multiselect-placeholder {
  display: flex;
  align-items: center;
  height: 100%;
  position: absolute;
  left: 0;
  top: 0;
  pointer-events: none;
  background: transparent;
  box-sizing: border-box;
  max-width: 100%;
  padding-left: var(--vf-px-input);
  padding-right: calc(var(--vf-px-input) * 2.5 + 20px);
}

.vf-multiselect-single-label.vf-multiselect-single-label-no-caret, .vf-multiselect-single-label.vf-multiselect-single-label-no-clear {
  padding-right: calc(var(--vf-px-input) * 1.5 + 10px);
}

.vf-multiselect-single-label.vf-multiselect-single-label-no-caret.vf-multiselect-single-label-no-clear {
  padding-right: var(--vf-px-input);
}

.vf-multiselect-single-label.vf-multiselect-single-label-sm {
  padding-left: var(--vf-px-input-sm);
  padding-right: calc(var(--vf-px-input-sm) * 2.5 + 20px);
}

.vf-multiselect-single-label.vf-multiselect-single-label-sm.vf-multiselect-single-label-no-caret, .vf-multiselect-single-label.vf-multiselect-single-label-sm.vf-multiselect-single-label-no-clear {
  padding-right: calc(var(--vf-px-input-sm) * 1.5 + 10px);
}

.vf-multiselect-single-label.vf-multiselect-single-label-sm.vf-multiselect-single-label-no-caret.vf-multiselect-single-label-no-clear {
  padding-right: var(--vf-px-input-sm);
}

.vf-multiselect-single-label.vf-multiselect-single-label-lg {
  padding-left: var(--vf-px-input-lg);
  padding-right: calc(var(--vf-px-input-lg) * 2.5 + 20px);
}

.vf-multiselect-single-label.vf-multiselect-single-label-lg.vf-multiselect-single-label-no-caret, .vf-multiselect-single-label.vf-multiselect-single-label-lg.vf-multiselect-single-label-no-clear {
  padding-right: calc(var(--vf-px-input-lg) * 1.5 + 10px);
}

.vf-multiselect-single-label.vf-multiselect-single-label-lg.vf-multiselect-single-label-no-caret.vf-multiselect-single-label-no-clear {
  padding-right: var(--vf-px-input-lg);
}

.vf-floating-wrapper ~ .vf-multiselect-single-label,
.vf-floating-wrapper ~ div .vf-multiselect-single-label {
  padding-top: calc(var(--vf-py-input) + var(--vf-floating-top) / 2);
  padding-bottom: calc(var(--vf-py-input) - var(--vf-floating-top) / 2);
}

.vf-floating-wrapper ~ .vf-multiselect-single-label-sm,
.vf-floating-wrapper ~ div .vf-multiselect-single-label-sm {
  padding-top: calc(var(--vf-py-input-sm) + var(--vf-floating-top-sm) / 2);
  padding-bottom: calc(var(--vf-py-input-sm) - var(--vf-floating-top-sm) / 2);
}

.vf-floating-wrapper ~ .vf-multiselect-single-label-lg,
.vf-floating-wrapper ~ div .vf-multiselect-single-label-lg {
  padding-top: calc(var(--vf-py-input-lg) + var(--vf-floating-top-lg) / 2);
  padding-bottom: calc(var(--vf-py-input-lg) - var(--vf-floating-top-lg) / 2);
}

.vf-multiselect-placeholder {
  color: var(--vf-color-placeholder);
}

.vf-multiselect-placeholder.vf-multiselect-placeholder-sm {
  padding-left: var(--vf-px-input-sm);
  padding-right: calc(var(--vf-px-input-sm) * 2.5 + 20px);
}

.vf-multiselect-placeholder.vf-multiselect-placeholder-lg {
  padding-left: var(--vf-px-input-lg);
  padding-right: calc(var(--vf-px-input-lg) * 2.5 + 20px);
}

.vf-multiselect-single-label-text {
  overflow: hidden;
  display: block;
  white-space: nowrap;
  max-width: 100%;
}

.vf-multiselect-single-label-text-truncate {
  text-overflow: ellipsis;
}

.vf-multiselect-search {
  width: 100%;
  height: 100%; /* for FF */
  position: absolute;
  top: 0px;
  bottom: 0px;
  left: 0px;
  right: 0px;
  outline: none;
  box-sizing: border-box;
  border: 0;
  -webkit-appearance: none;
     -moz-appearance: none;
          appearance: none;
  font-family: inherit;
  background: transparent;
  font-size: var(--vf-font-size);
  line-height: var(--vf-line-height);
  letter-spacing: var(--vf-letter-spacing);
  border-radius: var(--vf-radius-input);
  padding-left: var(--vf-px-input);
  padding-right: calc(var(--vf-px-input) * 2.5 + 20px);
  color: var(--vf-color-input);
}

.vf-multiselect-search::-webkit-search-decoration, .vf-multiselect-search::-webkit-search-cancel-button, .vf-multiselect-search::-webkit-search-results-button, .vf-multiselect-search::-webkit-search-results-decoration {
  -webkit-appearance: none;
}

.vf-multiselect-search.vf-multiselect-search-sm {
  border-radius: var(--vf-radius-input-sm);
  padding-left: var(--vf-px-input-sm);
  padding-right: calc(var(--vf-px-input-sm) * 2.5 + 20px);
  font-size: var(--vf-font-size-sm);
  line-height: var(--vf-line-height-sm);
  letter-spacing: var(--vf-letter-spacing-sm);
}

.vf-multiselect-search.vf-multiselect-search-lg {
  border-radius: var(--vf-radius-input-lg);
  padding-left: var(--vf-px-input-lg);
  padding-right: calc(var(--vf-px-input-lg) * 2.5 + 20px);
  font-size: var(--vf-font-size-lg);
  line-height: var(--vf-line-height-lg);
  letter-spacing: var(--vf-letter-spacing-lg);
}

.vf-floating-wrapper ~ .vf-multiselect-search-lg,
.vf-floating-wrapper ~ div .vf-multiselect-search-lg,
.vf-floating-wrapper ~ span .vf-multiselect-search-lg {
  padding-left: var(--vf-px-input-lg);
  padding-right: var(--vf-px-input-lg);
  padding-top: calc(var(--vf-py-input-lg) + var(--vf-floating-top-lg) / 2);
  padding-bottom: calc(var(--vf-py-input-lg) - var(--vf-floating-top-lg) / 2);
}

.vf-multiselect-spinner {
  mask-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 512 512' fill='currentColor' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M456.433 371.72l-27.79-16.045c-7.192-4.152-10.052-13.136-6.487-20.636 25.82-54.328 23.566-118.602-6.768-171.03-30.265-52.529-84.802-86.621-144.76-91.424C262.35 71.922 256 64.953 256 56.649V24.56c0-9.31 7.916-16.609 17.204-15.96 81.795 5.717 156.412 51.902 197.611 123.408 41.301 71.385 43.99 159.096 8.042 232.792-4.082 8.369-14.361 11.575-22.424 6.92z'%3E%3C/path%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 512 512' fill='currentColor' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M456.433 371.72l-27.79-16.045c-7.192-4.152-10.052-13.136-6.487-20.636 25.82-54.328 23.566-118.602-6.768-171.03-30.265-52.529-84.802-86.621-144.76-91.424C262.35 71.922 256 64.953 256 56.649V24.56c0-9.31 7.916-16.609 17.204-15.96 81.795 5.717 156.412 51.902 197.611 123.408 41.301 71.385 43.99 159.096 8.042 232.792-4.082 8.369-14.361 11.575-22.424 6.92z'%3E%3C/path%3E%3C/svg%3E");
  mask-position: center;
  -webkit-mask-position: center;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  mask-size: contain;
  -webkit-mask-size: contain;
  background-color: var(--vf-primary);
  width: 1rem;
  height: 1rem;
  margin: 0 var(--vf-px-input) 0 0;
  animation: multiselect-spin 1s linear infinite;
  flex-shrink: 0;
  flex-grow: 0;
}

.vf-multiselect-spinner.vf-multiselect-spinner-sm {
  margin: 0 var(--vf-px-input-sm) 0 0;
}

.vf-multiselect-spinner.vf-multiselect-spinner-lg {
  margin: 0 var(--vf-px-input-lg) 0 0;
}

.vf-multiselect-inifite {
  display: flex;
  width: 100%;
  justify-content: center;
  align-items: center;
  height: var(--vf-min-height-input);
}

.vf-multiselect-inifite.vf-multiselect-inifite-sm {
  height: var(--vf-min-height-input-sm);
}

.vf-multiselect-inifite.vf-multiselect-inifite-lg {
  height: var(--vf-min-height-input-lg);
}

.vf-multiselect-inifite-spinner {
  mask-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 512 512' fill='currentColor' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M456.433 371.72l-27.79-16.045c-7.192-4.152-10.052-13.136-6.487-20.636 25.82-54.328 23.566-118.602-6.768-171.03-30.265-52.529-84.802-86.621-144.76-91.424C262.35 71.922 256 64.953 256 56.649V24.56c0-9.31 7.916-16.609 17.204-15.96 81.795 5.717 156.412 51.902 197.611 123.408 41.301 71.385 43.99 159.096 8.042 232.792-4.082 8.369-14.361 11.575-22.424 6.92z'%3E%3C/path%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 512 512' fill='currentColor' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M456.433 371.72l-27.79-16.045c-7.192-4.152-10.052-13.136-6.487-20.636 25.82-54.328 23.566-118.602-6.768-171.03-30.265-52.529-84.802-86.621-144.76-91.424C262.35 71.922 256 64.953 256 56.649V24.56c0-9.31 7.916-16.609 17.204-15.96 81.795 5.717 156.412 51.902 197.611 123.408 41.301 71.385 43.99 159.096 8.042 232.792-4.082 8.369-14.361 11.575-22.424 6.92z'%3E%3C/path%3E%3C/svg%3E");
  mask-position: center;
  -webkit-mask-position: center;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  mask-size: contain;
  -webkit-mask-size: contain;
  background-color: var(--vf-primary);
  width: 1rem;
  height: 1rem;
  animation: multiselect-spin 1s linear infinite;
  flex-shrink: 0;
  flex-grow: 0;
}

.vf-multiselect-clear {
  margin: 0 var(--vf-px-input) 0 0px;
  position: relative;
  opacity: 1;
  transition: 0.3s;
  flex-shrink: 0;
  flex-grow: 0;
  display: flex;
}

.vf-multiselect-clear:hover .vf-multiselect-clear-icon {
  opacity: 1;
}

.vf-multiselect-clear.vf-multiselect-clear-sm {
  margin: 0 var(--vf-px-input-sm) 0 0px;
}

.vf-multiselect-clear.vf-multiselect-clear-lg {
  margin: 0 var(--vf-px-input-lg) 0 0px;
}

.vf-multiselect-clear-icon {
  mask-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 320 512' fill='currentColor' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M207.6 256l107.72-107.72c6.23-6.23 6.23-16.34 0-22.58l-25.03-25.03c-6.23-6.23-16.34-6.23-22.58 0L160 208.4 52.28 100.68c-6.23-6.23-16.34-6.23-22.58 0L4.68 125.7c-6.23 6.23-6.23 16.34 0 22.58L112.4 256 4.68 363.72c-6.23 6.23-6.23 16.34 0 22.58l25.03 25.03c6.23 6.23 16.34 6.23 22.58 0L160 303.6l107.72 107.72c6.23 6.23 16.34 6.23 22.58 0l25.03-25.03c6.23-6.23 6.23-16.34 0-22.58L207.6 256z'%3E%3C/path%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 320 512' fill='currentColor' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M207.6 256l107.72-107.72c6.23-6.23 6.23-16.34 0-22.58l-25.03-25.03c-6.23-6.23-16.34-6.23-22.58 0L160 208.4 52.28 100.68c-6.23-6.23-16.34-6.23-22.58 0L4.68 125.7c-6.23 6.23-6.23 16.34 0 22.58L112.4 256 4.68 363.72c-6.23 6.23-6.23 16.34 0 22.58l25.03 25.03c6.23 6.23 16.34 6.23 22.58 0L160 303.6l107.72 107.72c6.23 6.23 16.34 6.23 22.58 0l25.03-25.03c6.23-6.23 6.23-16.34 0-22.58L207.6 256z'%3E%3C/path%3E%3C/svg%3E");
  mask-position: center;
  -webkit-mask-position: center;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  mask-size: contain;
  -webkit-mask-size: contain;
  background-color: var(--vf-bg-icon);
  width: 0.625rem;
  height: 1.125rem;
  display: inline-block;
  transition: 0.3s;
  opacity: 0.5;
}

.vf-multiselect-caret {
  transform: rotate(0deg);
  transition: 0.3s transform;
  mask-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 320 512' fill='currentColor' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M31.3 192h257.3c17.8 0 26.7 21.5 14.1 34.1L174.1 354.8c-7.8 7.8-20.5 7.8-28.3 0L17.2 226.1C4.6 213.5 13.5 192 31.3 192z'%3E%3C/path%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 320 512' fill='currentColor' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M31.3 192h257.3c17.8 0 26.7 21.5 14.1 34.1L174.1 354.8c-7.8 7.8-20.5 7.8-28.3 0L17.2 226.1C4.6 213.5 13.5 192 31.3 192z'%3E%3C/path%3E%3C/svg%3E");
  mask-position: center;
  -webkit-mask-position: center;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  mask-size: contain;
  -webkit-mask-size: contain;
  background-color: var(--vf-bg-icon);
  width: 0.625rem;
  height: 1.125rem;
  margin: 0 var(--vf-px-input) 0 0;
  position: relative;
  flex-shrink: 0;
  flex-grow: 0;
  pointer-events: none;
}

.vf-multiselect-caret.vf-multiselect-caret-open {
  transform: rotate(180deg);
  pointer-events: auto;
}

.vf-multiselect-caret.vf-multiselect-caret-sm {
  margin: 0 var(--vf-px-input-sm) 0 0;
}

.vf-multiselect-caret.vf-multiselect-caret-lg {
  margin: 0 var(--vf-px-input-lg) 0 0;
}

.vf-multiselect-dropdown {
  position: absolute;
  left: calc(var(--vf-border-width-input-l) * -1);
  right: calc(var(--vf-border-width-input-r) * -1);
  bottom: 0;
  transform: translateY(100%);
  border-width: var(--vf-border-width-dropdown);
  border-style: solid;
  border-color: var(--vf-border-color-input);
  margin-top: calc(var(--vf-border-width-input-t) * -1);
  max-height: 15rem;
  overflow-y: scroll;
  -webkit-overflow-scrolling: touch;
  z-index: 999;
  background: var(--vf-bg-input);
  display: flex;
  flex-direction: column;
  border-radius: var(--vf-radius-input);
  border-top-left-radius: 0;
  border-top-right-radius: 0;
  outline: none;
  box-shadow: var(--vf-shadow-dropdown);
}

.vf-multiselect-dropdown.vf-multiselect-dropdown-top {
  transform: translateY(-100%);
  top: 0;
  margin-top: 0;
  bottom: auto;
  border-radius: var(--vf-radius-input);
  border-bottom-left-radius: 0;
  border-bottom-right-radius: 0;
}

.vf-multiselect-dropdown.vf-multiselect-dropdown-hidden {
  display: none;
}

v .vf-multiselect-dropdown.vf-multiselect-dropdown-sm {
  border-radius: var(--vf-radius-input-sm);
  border-top-left-radius: 0;
  border-top-right-radius: 0;
}

v .vf-multiselect-dropdown.vf-multiselect-dropdown-sm.vf-multiselect-dropdown-top-sm {
  border-radius: var(--vf-radius-input-sm);
  border-bottom-left-radius: 0;
  border-bottom-right-radius: 0;
}

.vf-multiselect-dropdown.vf-multiselect-dropdown-lg {
  border-radius: var(--vf-radius-input-lg);
  border-top-left-radius: 0;
  border-top-right-radius: 0;
}

.vf-multiselect-dropdown.vf-multiselect-dropdown-lg.vf-multiselect-dropdown-top-lg {
  border-radius: var(--vf-radius-input-lg);
  border-bottom-left-radius: 0;
  border-bottom-right-radius: 0;
}

.vf-multiselect-options {
  padding: 0;
  margin: 0;
  list-style: none;
  display: flex;
  flex-direction: column;
  color: var(--vf-color-input);
}

.vf-multiselect-group {
  padding: 0;
  margin: 0;
}

.vf-multiselect-group-label {
  font-weight: 600;
  color: #374151;
  cursor: default;
  display: flex;
  box-sizing: border-box;
  text-decoration: none;
  align-items: center;
  justify-content: flex-start;
  text-align: left;
  font-size: var(--vf-font-size-small);
  line-height: var(--vf-line-height-small);
  letter-spacing: var(--vf-letter-spacing-small);
  padding: calc(var(--vf-py-input) * 0.5) var(--vf-px-input);
  color: var(--vf-color-input);
  background: var(--vf-bg-selected);
  filter: brightness(0.9);
}

.vf-multiselect-group-label.vf-multiselect-group-label-pointable {
  cursor: pointer;
}

.vf-multiselect-group-label.vf-multiselect-group-label-pointed {
  filter: brightness(0.95);
}

.vf-multiselect-group-label.vf-multiselect-group-label-selected {
  background: var(--vf-primary-darker);
  color: var(--vf-color-on-primary);
  filter: brightness(1);
}

.vf-multiselect-group-label.vf-multiselect-group-label-disabled {
  background: var(--vf-bg-disabled);
  color: var(--vf-color-disabled);
  cursor: not-allowed;
}

.vf-multiselect-group-label.vf-multiselect-group-label-selected.vf-multiselect-group-label-pointed {
  opacity: 0.9;
}

.vf-multiselect-group-label.vf-multiselect-group-label-selected.vf-multiselect-group-label-disabled {
  opacity: 0.5;
}

.vf-multiselect-group-label.vf-multiselect-group-label-sm {
  font-size: var(--vf-font-size-small-sm);
  line-height: var(--vf-line-height-small-sm);
  letter-spacing: var(--vf-letter-spacing-small-sm);
  padding: calc(var(--vf-py-input-sm) * 0.5) var(--vf-px-input-sm);
}

.vf-multiselect-group-label.vf-multiselect-group-label-lg {
  font-size: var(--vf-font-size-small-lg);
  line-height: var(--vf-line-height-small-lg);
  letter-spacing: var(--vf-letter-spacing-small-lg);
  padding: calc(var(--vf-py-input-lg) * 0.5) var(--vf-px-input-lg);
}

.vf-multiselect-group-options {
  padding: 0;
  margin: 0;
}

.vf-multiselect-option {
  padding: calc(var(--vf-py-input) + var(--vf-border-width-input-t)) var(--vf-px-input) calc(var(--vf-py-input) + var(--vf-border-width-input-t));
  cursor: pointer;
  display: flex;
  box-sizing: border-box;
  text-decoration: none;
  align-items: center;
  justify-content: flex-start;
  text-align: left;
}

.vf-multiselect-option.vf-multiselect-option-pointed {
  background: var(--vf-bg-selected);
  color: var(--vf-color-input);
}

.vf-multiselect-option.vf-multiselect-option-selected {
  background: var(--vf-primary);
  color: var(--vf-color-on-primary);
}

.vf-multiselect-option.vf-multiselect-option-disabled {
  background: var(--vf-bg-disabled);
  color: var(--vf-color-disabled);
  cursor: not-allowed;
}

.vf-multiselect-option.vf-multiselect-option-selected.vf-multiselect-option-pointed {
  opacity: 0.9;
}

.vf-multiselect-option.vf-multiselect-option-selected.vf-multiselect-option-disabled {
  opacity: 0.5;
}

.vf-multiselect-option.vf-multiselect-option-sm {
  padding: calc(var(--vf-py-input-sm) + var(--vf-border-width-input-t)) var(--vf-px-input-sm) calc(var(--vf-py-input-sm) + var(--vf-border-width-input-t));
}

.vf-multiselect-option.vf-multiselect-option-lg {
  padding: calc(var(--vf-py-input-lg) + var(--vf-border-width-input-t)) var(--vf-px-input-lg) calc(var(--vf-py-input-lg) + var(--vf-border-width-input-t));
}

.vf-multiselect-no-options,
.vf-multiselect-no-results {
  padding: var(--vf-py-input) var(--vf-px-input);
  color: var(--vf-color-muted);
}

.vf-multiselect-no-options.vf-multiselect-no-options-sm {
  padding: var(--vf-py-input-sm) var(--vf-px-input-sm);
}

.vf-multiselect-no-options.vf-multiselect-no-options-lg {
  padding: var(--vf-py-input-lg) var(--vf-px-input-lg);
}

.vf-multiselect-no-results.vf-multiselect-no-results-sm {
  padding: var(--vf-py-input-sm) var(--vf-px-input-sm);
}

.vf-multiselect-no-results.vf-multiselect-no-results-lg {
  padding: var(--vf-py-input-lg) var(--vf-px-input-lg);
}

.vf-multiselect-fake-input {
  background: transparent;
  position: absolute;
  left: 0;
  right: 0;
  bottom: -1px;
  width: 100%;
  height: 1px;
  border: 0;
  padding: 0;
  font-size: 0;
  outline: none;
}

.vf-multiselect-fake-input:active, .vf-multiselect-fake-input:focus {
  outline: none;
}

.vf-multiselect-spacer {
  display: none;
}

[dir=rtl] .vf-input.vf-native-select {
  padding-right: var(--vf-px-input);
  padding-left: calc(var(--vf-px-input) * 2);
}

[dir=rtl] .vf-input-sm.vf-native-select {
  padding-right: var(--vf-px-input);
  padding-left: calc(var(--vf-px-input-sm) * 2);
}

[dir=rtl] .vf-input-lg.vf-native-select {
  padding-right: var(--vf-px-input);
  padding-left: calc(var(--vf-px-input-lg) * 2);
}

[dir=rtl] .vf-native-select-placeholder {
  left: auto;
  right: var(--vf-px-input);
}

[dir=rtl] .vf-native-select-caret {
  right: auto;
  left: 0;
  margin-right: 0;
  margin-left: var(--vf-px-input);
}

[dir=rtl] .vf-native-select-caret.vf-native-select-caret-sm {
  margin-right: 0;
  margin-left: var(--vf-px-input-sm);
}

[dir=rtl] .vf-native-select-caret.vf-native-select-caret-lg {
  margin-right: 0;
  margin-left: var(--vf-px-input-lg);
}

[dir=rtl] .vf-multiselect-single-label {
  padding-left: calc(var(--vf-px-input) * 4);
  padding-right: var(--vf-px-input);
  left: auto;
  right: 0;
}

[dir=rtl] .vf-multiselect-single-label.vf-multiselect-single-label-no-caret, [dir=rtl] .vf-multiselect-single-label.vf-multiselect-single-label-no-clear {
  padding-left: calc(var(--vf-px-input) * 2);
  padding-right: var(--vf-px-input);
}

[dir=rtl] .vf-multiselect-single-label.vf-multiselect-single-label-no-caret.vf-multiselect-single-label-no-clear {
  padding-left: var(--vf-px-input);
  padding-right: var(--vf-px-input);
}

[dir=rtl] .vf-multiselect-single-label.vf-multiselect-single-label-sm {
  padding-left: calc(var(--vf-px-input-sm) * 4);
  padding-right: var(--vf-px-input-sm);
}

[dir=rtl] .vf-multiselect-single-label.vf-multiselect-single-label-sm.vf-multiselect-single-label-no-caret, [dir=rtl] .vf-multiselect-single-label.vf-multiselect-single-label-sm.vf-multiselect-single-label-no-clear {
  padding-left: calc(var(--vf-px-input-sm) * 2);
  padding-right: var(--vf-px-input-sm);
}

[dir=rtl] .vf-multiselect-single-label.vf-multiselect-single-label-sm.vf-multiselect-single-label-no-caret.vf-multiselect-single-label-no-clear {
  padding-left: var(--vf-px-input-sm);
  padding-right: var(--vf-px-input-sm);
}

[dir=rtl] .vf-multiselect-single-label.vf-multiselect-single-label-lg {
  padding-left: calc(var(--vf-px-input-lg) * 4);
  padding-right: var(--vf-px-input-lg);
}

[dir=rtl] .vf-multiselect-single-label.vf-multiselect-single-label-lg.vf-multiselect-single-label-no-caret, [dir=rtl] .vf-multiselect-single-label.vf-multiselect-single-label-lg.vf-multiselect-single-label-no-clear {
  padding-left: calc(var(--vf-px-input-lg) * 2);
  padding-right: var(--vf-px-input-lg);
}

[dir=rtl] .vf-multiselect-single-label.vf-multiselect-single-label-lg.vf-multiselect-single-label-no-caret.vf-multiselect-single-label-no-clear {
  padding-left: var(--vf-px-input-lg);
  padding-right: var(--vf-px-input-lg);
}

[dir=rtl] .vf-multiselect-placeholder {
  padding-left: var(--vf-min-height-input);
  padding-right: var(--vf-px-input);
  left: auto;
  right: 0;
}

[dir=rtl] .vf-multiselect-placeholder.vf-multiselect-placeholder-sm {
  padding-left: calc(1.25rem + var(--vf-px-input-sm) * 3);
  padding-right: var(--vf-px-input-sm);
}

[dir=rtl] .vf-multiselect-placeholder.vf-multiselect-placeholder-lg {
  padding-left: calc(1.25rem + var(--vf-px-input-lg) * 3);
  padding-right: var(--vf-px-input-lg);
}

[dir=rtl] .vf-multiselect-search {
  padding-left: 0;
  padding-right: var(--vf-px-input);
}

[dir=rtl] .vf-multiselect-search.vf-multiselect-search-sm {
  padding-left: 0;
  padding-right: var(--vf-px-input-sm);
}

[dir=rtl] .vf-multiselect-search.vf-multiselect-search-lg {
  padding-left: 0;
  padding-right: var(--vf-px-input-lg);
}

[dir=rtl] .vf-multiselect-spinner {
  margin: 0 0 0 var(--vf-px-input);
}

[dir=rtl] .vf-multiselect-caret {
  margin: 0 0 0 var(--vf-px-input);
}

[dir=rtl] .vf-multiselect-clear {
  padding: 0 0 0 var(--vf-px-input);
}

@keyframes multiselect-spin {
  from {
    transform: rotate(0);
  }

  to {
    transform: rotate(360deg);
  }
}`;te(Nb);au.__file="themes/vueform/templates/elements/SelectElement.vue";var hl={};const Vb=["tabindex","aria-label","id"],jb=["src","alt","title"],Ub=["title","tabindex","aria-label"],Wb=["title","tabindex","aria-label"],qb=["value","disabled","readonly","aria-label"],Qb=["innerHTML"],Kb=["tabindex","aria-label"],Gb=["accept"],Jb=["width","height"],Yb=["width","height","tabindex","aria-label"],Xb=["tabindex","aria-label","aria-selected","onClick","onKeydown"],Zb=["fill"],e2=["tabindex","aria-label"];function t2(t,e,n,r,i,l){const a=J("ElementAddonOptions");return p(),S(N(t.elementLayout),{ref:"container"},ue({element:f(()=>[d("div",{class:h(t.classes.wrapper),style:rn(t.wrapperStyle),tabindex:t.isDisabled?void 0:0,"aria-label":t.wrapperAriaLabel,id:t.id,onKeydown:e[11]||(e[11]=Ue((...o)=>t.handleMouseLeave&&t.handleMouseLeave(...o),["tab","escape"])),onMouseleave:e[12]||(e[12]=(...o)=>t.handleMouseLeave&&t.handleMouseLeave(...o)),ref:"input"},[k(" Line "),Te(d("hr",{class:h(t.classes.line),style:rn(t.lineStyle),"aria-hidden":"true"},null,6),[[Ve,t.showLine]]),k(" Loaded preview "),Te(d("div",{class:h(t.classes.loadedWrapper)},[d("img",{src:t.value,alt:t.imgAltText,title:t.imgTitleText,class:h(t.classes.loadedImg)},null,10,jb)],2),[[Ve,t.uploaded]]),k(" Not loaded actions "),Te(d("div",{class:h(t.classes.innerWrapper)},[k(" Actions "),d("div",{class:h(t.classes.actions)},[k(" Mode "),Te(De(a,{options:t.resolvedModes,placeholder:"",position:"bottom",relaxed:"",aria:t.modeSelectorAria,onSelect:t.handleModeSelect,ref:"mode$"},null,8,["options","aria","onSelect"]),[[Ve,t.showModes]]),k(" Fonts "),Te(De(a,{options:t.resolvedFonts,placeholder:t.fontText,position:"bottom",relaxed:"",aria:t.fontSelectorAria,onSelect:t.handleFontSelect,ref:"font$"},null,8,["options","placeholder","aria","onSelect"]),[[Ve,t.showFonts]]),k(" Undos "),Te(d("div",{class:h(t.classes.undosWrapper)},[k(" Undo "),d("div",{class:h(t.classes.undo),title:t.undoText,role:"button",tabindex:t.undosLeft?t.tabindex:void 0,"aria-label":t.undoText,onClick:e[0]||(e[0]=Le((...o)=>t.handleUndo&&t.handleUndo(...o),["stop"])),onKeydown:e[1]||(e[1]=Ue(Le((...o)=>t.handleUndo&&t.handleUndo(...o),["prevent"]),["space","enter"]))},null,42,Ub),k(" Redo "),d("div",{class:h(t.classes.redo),title:t.redoText,role:"button",tabindex:t.redos.length?t.tabindex:void 0,"aria-label":t.redoText,onClick:e[2]||(e[2]=Le((...o)=>t.handleRedo&&t.handleRedo(...o),["stop"])),onKeydown:e[3]||(e[3]=Ue(Le((...o)=>t.handleRedo&&t.handleRedo(...o),["prevent"]),["space","enter"]))},null,42,Wb)],2),[[Ve,t.showUndos]])],2),k(" Input "),Te(d("input",{value:t.text,type:"text",spellcheck:"false",class:h(t.classes.input),disabled:t.isDisabled,readonly:t.isReadonly,style:rn(t.inputStyle),"aria-label":t.inputAriaLabel,onInput:e[4]||(e[4]=(...o)=>t.handleInput&&t.handleInput(...o)),onSelect:e[5]||(e[5]=(...o)=>t.handleInput&&t.handleInput(...o)),ref:"input$"},null,46,qb),[[Ve,t.showInput]]),k(" Placeholder "),Te(d("div",{class:h(t.classes.placeholder),innerHTML:t.placeholderText},null,10,Qb),[[Ve,t.showPlaceholder]]),k(" Upload container "),Te(d("div",{class:h(t.classes.uploadContainer),ref:"upload$"},[k(" File upload "),Te(d("div",{class:h(t.classes.uploadWrapper)},[k(" DnD text "),t.droppable?(p(),C("div",{key:0,class:h(t.classes.dndText)},Re(t.dndText),3)):k("v-if",!0),k(" Select button "),d("div",{class:h(t.classes.uploadButton),tabindex:t.tabindex,role:"button","aria-label":t.uploadButtonText,onClick:e[6]||(e[6]=(...o)=>t.handleSelectClick&&t.handleSelectClick(...o)),onKeydown:e[7]||(e[7]=Ue(Le((...o)=>t.handleSelectClick&&t.handleSelectClick(...o),["prevent"]),["space","enter"])),ref:"uploadButton$"},Re(t.uploadButtonText),43,Kb),k(" Hidden file input "),Te(d("input",{type:"file",accept:t.fileAccept,onChange:e[8]||(e[8]=(...o)=>t.handleFileSelect&&t.handleFileSelect(...o)),ref:"file$"},null,40,Gb),[[Ve,!1]])],2),[[Ve,t.showUpload]]),k(" Preview "),Te(d("canvas",{width:t.uploadWidth,height:t.uploadHeight,class:h(t.classes.uploadPreview),ref:"preview$"},null,10,Jb),[[Ve,t.showPreview]])],2),[[Ve,t.showUploadContainer]]),k(" Pad "),Te(d("canvas",{width:t.padWidth,height:t.padHeight,style:rn(t.padStyle),class:h(t.classes.pad),tabindex:t.tabindex,"aria-label":t.padAriaLabel,ref:"pad$"},null,14,Yb),[[Ve,t.showPad]]),k(" Colors "),Te(d("div",{class:h(t.classes.colors),role:"listbox"},[(p(!0),C(ie,null,de(t.colors,o=>(p(),C("svg",{width:"12",height:"12",class:h(t.classes.color(o)),role:"option",tabindex:t.tabindex,"aria-label":`${t.colorAriaLabel} ${o}`,"aria-selected":o===t.color,onClick:s=>t.handleColorSelect(o),onKeydown:Ue(Le(s=>t.handleColorSelect(o),["prevent"]),["space","enter"])},[d("circle",{cx:"6",cy:"6",r:"6",fill:o},null,8,Zb)],42,Xb))),256))],2),[[Ve,t.showColors]])],2),[[Ve,!t.uploaded]]),k(" Clear "),t.showClear?(p(),C("div",{key:0,class:h(t.classes.clearWrapper)},[d("div",{class:h(t.classes.clear),tabindex:t.tabindex,role:"button","aria-label":t.clearAriaLabel,onClick:e[9]||(e[9]=(...o)=>t.handleClear&&t.handleClear(...o)),onKeydown:e[10]||(e[10]=Ue(Le((...o)=>t.handleClear&&t.handleClear(...o),["prevent"]),["enter","space"]))},null,42,e2)],2)):k("v-if",!0)],46,Vb)]),_:2},[de(t.elementSlots,(o,s)=>({name:s,fn:f(()=>[M(t.$slots,s,{el$:t.el$},()=>[(p(),S(N(o),{el$:t.el$},null,8,["el$"]))])])}))]),1536)}hl.render=t2;hl.__file="themes/blank/templates/elements/SignatureElement.vue";var lu={name:"SignatureElement",render:hl.render,data(){return{merge:!0,defaultClasses:{container:"",wrapper:"vf-signature",wrapper_sm:"vf-signature-sm",wrapper_md:"",wrapper_lg:"vf-signature-lg",wrapper_disabled:"vf-signature-disabled",wrapper_enabled:"",wrapper_readonly:"vf-signature-readonly",line:"vf-signature-line",loadedWrapper:"vf-signature-loaded-wrapper",loadedWrapper_disabled:"vf-signature-loaded-wrapper-disabled",loadedWrapper_enabled:"",loadedImg:"vf-signature-loaded-img",innerWrapper:"vf-signature-inner-wrapper",innerWrapper_disabled:"vf-signature-inner-wrapper-disabled",innerWrapper_enabled:"",input:"vf-signature-input",input_invert:"vf-signature-input-invert",placeholder:"vf-signature-placeholder",uploadContainer:"vf-signature-upload-container",uploadContainer_dragging:"vf-signature-upload-container-dragging",uploadContainer_not_dragging:"",uploadWrapper:"vf-signature-upload-wrapper",uploadWrapper_processing:"vf-signature-upload-wrapper-processing",dndText:"vf-signature-dnd-text",uploadButton:"vf-btn vf-btn-secondary",uploadPreview:"vf-signature-upload-preview",pad:"vf-signature-pad",pad_invert:"vf-signature-pad-invert",colors:"vf-signature-colors",color:"vf-signature-color",color_invert:"vf-signature-color-invert",color_active:"vf-signature-color-active",color_inactive:"",actions:"vf-signature-actions",undosWrapper:"vf-signature-undos-wrapper",undo:"vf-signature-undo",undo_enabled:"",undo_disabled:"vf-signature-undo-disabled",redo:"vf-signature-redo",redo_enabled:"",redo_disabled:"vf-signature-redo-disabled",clearWrapper:"vf-signature-clear-wrapper",clear:"vf-signature-clear",$wrapper:(t,{isDisabled:e,readonly:n,Size:r})=>[t.wrapper,t[`wrapper_${r}`],e?t.wrapper_disabled:t.wrapper_enabled,n?t.wrapper_readonly:null],$loadedWrapper:(t,{isDisabled:e})=>[t.loadedWrapper,e?t.loadedWrapper_disabled:t.loadedWrapper_enabled],$innerWrapper:(t,{isDisabled:e})=>[t.innerWrapper,e?t.innerWrapper_disabled:t.innerWrapper_enabled],$input:(t,{invertColors:e,color:n})=>[t.input,e.indexOf(n)!==-1?t.input_invert:null],$uploadContainer:(t,{dragging:e})=>[t.uploadContainer,e?t.uploadContainer_dragging:t.uploadContainer_not_dragging],$uploadWrapper:(t,{processing:e})=>[t.uploadWrapper,e?t.uploadWrapper_processing:null],$pad:(t,{invertColors:e,color:n})=>[t.pad,e.indexOf(n)!==-1?t.pad_invert:null],$color:(t,{color:e,invertColors:n,mode:r})=>i=>[t.color,i===e?t.color_active:t.color_inactive,n.indexOf(i)!==-1&&r!=="upload"?t.color_invert:null],$undo:(t,{undosLeft:e})=>[t.undo,e?t.undo_enabled:t.undo_disabled],$redo:(t,{redos:e})=>[t.redo,e.length?t.redo_enabled:t.redo_disabled]}}}},n2=`.vf-signature {
  position: relative;
  font-family: inherit;
  transition-property: box-shadow, color, background-color, border-color;
  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
  transition-duration: 200ms;
  border-style: solid;
  border-width: var(--vf-border-width-input-t) var(--vf-border-width-input-r) var(--vf-border-width-input-b) var(--vf-border-width-input-l);
  background-color: var(--vf-bg-input);
  color: var(--vf-color-input);
  border-color: var(--vf-border-color-input);
  font-size: var(--vf-font-size);
  line-height: var(--vf-line-height);
  letter-spacing: var(--vf-letter-spacing);
  border-radius: var(--vf-radius-large);
}

.vf-signature:focus {
  outline: var(--vf-ring-width) solid var(--vf-ring-color);
  border-color: var(--vf-border-color-input-focus);
}

.vf-signature.vf-signature-sm {
  font-size: var(--vf-font-size-sm);
  line-height: var(--vf-line-height-sm);
  letter-spacing: var(--vf-letter-spacing-sm);
  border-radius: var(--vf-radius-large-sm);
}

.vf-signature.vf-signature-lg {
  font-size: var(--vf-font-size-lg);
  line-height: var(--vf-line-height-lg);
  letter-spacing: var(--vf-letter-spacing-lg);
  border-radius: var(--vf-radius-large-lg);
}

.vf-signature.vf-signature-disabled {
  background-color: var(--vf-bg-disabled);
  color: var(--vf-color-disabled);
  cursor: not-allowed;
  pointer-events: none;
}

.vf-signature.vf-signature-readonly {
  pointer-events: none;
}

.vf-signature-line {
  position: absolute;
  top: 50%;
  left: 1.5rem;
  right: 1.5rem;
  border-color: var(--vf-border-color-signature-hr);
}

.vf-signature-loaded-wrapper {
  position: absolute;
  left: 2.25rem;
  right: 2.25rem;
  top: 0;
  bottom: 0;
  display: flex;
  align-items: center;
  justify-content: center;
}

.vf-signature-loaded-wrapper.vf-signature-loaded-wrapper-disabled {
  opacity: 0.5;
}

.vf-signature-inner-wrapper.vf-signature-inner-wrapper-disabled {
  opacity: 0.5;
}

.vf-signature-input {
  background: transparent;
  position: absolute;
  top: 50%;
  left: 0;
  right: 0;
  transform: translateY(-50%);
  padding: 0 2.25rem 0 0;
  text-align: center;
  text-indent: 2.25rem;
  transition-property: box-shadow, color, background-color, border-color;
  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
  transition-duration: 200ms;
  height: 8.5rem;
}

.vf-signature-placeholder {
  position: absolute;
  left: 0;
  right: 0;
  bottom: 50%;
  transform: translateY(50%);
  pointer-events: none;
  -webkit-user-select: none;
     -moz-user-select: none;
          user-select: none;
  color: var(--vf-color-placeholder);
  text-align: center;
}

.vf-signature-upload-container {
  position: absolute;
  left: 2.25rem;
  right: 2.25rem;
  bottom: 50%;
  transform: translateY(50%);
  transition-property: opacity;
  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
  transition-duration: 200ms;
}

.vf-signature-upload-container.vf-signature-upload-container-dragging {
  opacity: 0.5;
}

.vf-signature-upload-wrapper {
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
}

.vf-signature-upload-wrapper.vf-signature-upload-wrapper-processing {
  opacity: 0.6;
  pointer-events: none;
}

.vf-signature-dnd-text {
  color: var(--vf-text-700);
}

.vf-signature-upload-preview {
  width: 100%;
  margin: 0 auto;
}

.vf-signature-pad {
  position: absolute;
  left: 0;
  right: 0;
  bottom: 0;
  top: 0;
}

.vf-signature-colors {
  position: absolute;
  bottom: 1.25rem;
  left: 50%;
  transform: translateX(-50%);
  display: flex;
  flex-direction: row;
  gap: 0.5rem;
}

.vf-signature-color {
  transition-property: transform;
  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
  transition-duration: 200ms;
  cursor: pointer;
  outline: none;
  border-radius: 50%;
}

.vf-signature-color:hover, .vf-signature-color.vf-signature-color-active {
  transform: scale(1.4);
}

.vf-signature-color:focus-visible {
  outline: var(--vf-ring-width) solid var(--vf-ring-color);
}

.vf-signature-actions {
  position: absolute;
  top: 0.5rem;
  left: 0.75rem;
  right: 0.75rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  -webkit-user-select: none;
     -moz-user-select: none;
          user-select: none;
  opacity: 0.5;
  transition-property: opacity;
  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
  transition-duration: 200ms;
  z-index: 1;
}

.vf-signature-actions:hover {
  opacity: 1;
}

.vf-signature-undos-wrapper {
  position: absolute;
  right: 0.75rem;
  top: 0.75rem;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.75rem;
}

.vf-signature-undo,
.vf-signature-redo {
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  mask-position: center center;
  -webkit-mask-position: center center;
  mask-size: contain;
  -webkit-mask-size: contain;
  background-color: var(--vf-bg-icon);
  cursor: pointer;
  width: 0.75rem;
  height: 0.75rem;
}

.vf-signature-undo:focus-visible,
.vf-signature-redo:focus-visible {
  opacity: 0.8;
}

.vf-signature-undo {
  mask-image: url("data:image/svg+xml,%3csvg viewBox='0 0 512 512' fill='currentColor' xmlns='http://www.w3.org/2000/svg'%3e%3cpath d='M255.545 8c-66.269.119-126.438 26.233-170.86 68.685L48.971 40.971C33.851 25.851 8 36.559 8 57.941V192c0 13.255 10.745 24 24 24h134.059c21.382 0 32.09-25.851 16.971-40.971l-41.75-41.75c30.864-28.899 70.801-44.907 113.23-45.273 92.398-.798 170.283 73.977 169.484 169.442C423.236 348.009 349.816 424 256 424c-41.127 0-79.997-14.678-110.63-41.556-4.743-4.161-11.906-3.908-16.368.553L89.34 422.659c-4.872 4.872-4.631 12.815.482 17.433C133.798 479.813 192.074 504 256 504c136.966 0 247.999-111.033 248-247.998C504.001 119.193 392.354 7.755 255.545 8z'%3e%3c/path%3e%3c/svg%3e");
  -webkit-mask-image: url("data:image/svg+xml,%3csvg viewBox='0 0 512 512' fill='currentColor' xmlns='http://www.w3.org/2000/svg'%3e%3cpath d='M255.545 8c-66.269.119-126.438 26.233-170.86 68.685L48.971 40.971C33.851 25.851 8 36.559 8 57.941V192c0 13.255 10.745 24 24 24h134.059c21.382 0 32.09-25.851 16.971-40.971l-41.75-41.75c30.864-28.899 70.801-44.907 113.23-45.273 92.398-.798 170.283 73.977 169.484 169.442C423.236 348.009 349.816 424 256 424c-41.127 0-79.997-14.678-110.63-41.556-4.743-4.161-11.906-3.908-16.368.553L89.34 422.659c-4.872 4.872-4.631 12.815.482 17.433C133.798 479.813 192.074 504 256 504c136.966 0 247.999-111.033 248-247.998C504.001 119.193 392.354 7.755 255.545 8z'%3e%3c/path%3e%3c/svg%3e");
}

.vf-signature-undo.vf-signature-undo-disabled {
  cursor: not-allowed;
  opacity: 0.5;
}

.vf-signature-redo {
  mask-image: url("data:image/svg+xml,%3csvg viewBox='0 0 512 512' fill='currentColor' xmlns='http://www.w3.org/2000/svg'%3e%3cpath d='M256.455 8c66.269.119 126.437 26.233 170.859 68.685l35.715-35.715C478.149 25.851 504 36.559 504 57.941V192c0 13.255-10.745 24-24 24H345.941c-21.382 0-32.09-25.851-16.971-40.971l41.75-41.75c-30.864-28.899-70.801-44.907-113.23-45.273-92.398-.798-170.283 73.977-169.484 169.442C88.764 348.009 162.184 424 256 424c41.127 0 79.997-14.678 110.629-41.556 4.743-4.161 11.906-3.908 16.368.553l39.662 39.662c4.872 4.872 4.631 12.815-.482 17.433C378.202 479.813 319.926 504 256 504 119.034 504 8.001 392.967 8 256.002 7.999 119.193 119.646 7.755 256.455 8z'%3e%3c/path%3e%3c/svg%3e");
  -webkit-mask-image: url("data:image/svg+xml,%3csvg viewBox='0 0 512 512' fill='currentColor' xmlns='http://www.w3.org/2000/svg'%3e%3cpath d='M256.455 8c66.269.119 126.437 26.233 170.859 68.685l35.715-35.715C478.149 25.851 504 36.559 504 57.941V192c0 13.255-10.745 24-24 24H345.941c-21.382 0-32.09-25.851-16.971-40.971l41.75-41.75c-30.864-28.899-70.801-44.907-113.23-45.273-92.398-.798-170.283 73.977-169.484 169.442C88.764 348.009 162.184 424 256 424c41.127 0 79.997-14.678 110.629-41.556 4.743-4.161 11.906-3.908 16.368.553l39.662 39.662c4.872 4.872 4.631 12.815-.482 17.433C378.202 479.813 319.926 504 256 504 119.034 504 8.001 392.967 8 256.002 7.999 119.193 119.646 7.755 256.455 8z'%3e%3c/path%3e%3c/svg%3e");
}

.vf-signature-redo.vf-signature-redo-disabled {
  cursor: not-allowed;
  opacity: 0.5;
}

.vf-signature-clear-wrapper {
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  right: 1rem;
  font-size: 14px;
}

.vf-signature-clear {
  mask-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 320 512' fill='currentColor' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M207.6 256l107.72-107.72c6.23-6.23 6.23-16.34 0-22.58l-25.03-25.03c-6.23-6.23-16.34-6.23-22.58 0L160 208.4 52.28 100.68c-6.23-6.23-16.34-6.23-22.58 0L4.68 125.7c-6.23 6.23-6.23 16.34 0 22.58L112.4 256 4.68 363.72c-6.23 6.23-6.23 16.34 0 22.58l25.03 25.03c6.23 6.23 16.34 6.23 22.58 0L160 303.6l107.72 107.72c6.23 6.23 16.34 6.23 22.58 0l25.03-25.03c6.23-6.23 6.23-16.34 0-22.58L207.6 256z'%3E%3C/path%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 320 512' fill='currentColor' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M207.6 256l107.72-107.72c6.23-6.23 6.23-16.34 0-22.58l-25.03-25.03c-6.23-6.23-16.34-6.23-22.58 0L160 208.4 52.28 100.68c-6.23-6.23-16.34-6.23-22.58 0L4.68 125.7c-6.23 6.23-6.23 16.34 0 22.58L112.4 256 4.68 363.72c-6.23 6.23-6.23 16.34 0 22.58l25.03 25.03c6.23 6.23 16.34 6.23 22.58 0L160 303.6l107.72 107.72c6.23 6.23 16.34 6.23 22.58 0l25.03-25.03c6.23-6.23 6.23-16.34 0-22.58L207.6 256z'%3E%3C/path%3E%3C/svg%3E");
  mask-position: center;
  -webkit-mask-position: center;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  mask-size: contain;
  -webkit-mask-size: contain;
  background-color: var(--vf-color-input);
  width: 0.75rem;
  height: 1rem;
  padding: 1px 0;
  box-sizing: content-box !important;
  display: inline-block;
  cursor: pointer;
}

.vf-signature-clear:focus-visible {
  opacity: 0.8;
}

.dark .vf-signature-input-invert,
.dark .vf-signature-pad-invert,
.dark .vf-signature-color-invert {
  filter: invert(1);
}

.dark .vf-signature-dnd-text {
  color: var(--vf-dark-200);
}

.dark .vf-signature-undo,
.dark .vf-signature-redo {
  background: var(--vf-dark-300);
}

[dir=rtl] .vf-signature-input {
  padding: 0 0 0 2.25rem;
}

[dir=rtl] .vf-signature-undos-wrapper {
  right: auto;
  left: 0.75rem;
}`;te(n2);lu.__file="themes/vueform/templates/elements/SignatureElement.vue";function Wr(t){return[null,void 0,!1].indexOf(t)!==-1}function r2(t,e,n){const{value:r,modelValue:i,min:l}=rt(t);let a=i&&i.value!==void 0?i:r;const o=ce(a.value);if(Wr(a.value)&&(a=ce(l.value)),Array.isArray(a.value)&&a.value.length==0)throw new Error("Slider v-model must not be an empty array");return{value:a,initialValue:o}}function i2(t,e,n){const{classes:r,showTooltip:i,tooltipPosition:l,orientation:a}=rt(t),o=j(()=>({target:"slider-target",focused:"slider-focused",tooltipFocus:"slider-tooltip-focus",tooltipDrag:"slider-tooltip-drag",ltr:"slider-ltr",rtl:"slider-rtl",horizontal:"slider-horizontal",vertical:"slider-vertical",textDirectionRtl:"slider-txt-dir-rtl",textDirectionLtr:"slider-txt-dir-ltr",base:"slider-base",connects:"slider-connects",connect:"slider-connect",origin:"slider-origin",handle:"slider-handle",handleLower:"slider-handle-lower",handleUpper:"slider-handle-upper",touchArea:"slider-touch-area",tooltip:"slider-tooltip",tooltipTop:"slider-tooltip-top",tooltipBottom:"slider-tooltip-bottom",tooltipLeft:"slider-tooltip-left",tooltipRight:"slider-tooltip-right",tooltipHidden:"slider-tooltip-hidden",active:"slider-active",draggable:"slider-draggable",tap:"slider-state-tap",drag:"slider-state-drag",pips:"slider-pips",pipsHorizontal:"slider-pips-horizontal",pipsVertical:"slider-pips-vertical",marker:"slider-marker",markerHorizontal:"slider-marker-horizontal",markerVertical:"slider-marker-vertical",markerNormal:"slider-marker-normal",markerLarge:"slider-marker-large",markerSub:"slider-marker-sub",value:"slider-value",valueHorizontal:"slider-value-horizontal",valueVertical:"slider-value-vertical",valueNormal:"slider-value-normal",valueLarge:"slider-value-large",valueSub:"slider-value-sub",...r.value}));return{classList:j(()=>{const u={...o.value};return Object.keys(u).forEach(c=>{u[c]=Array.isArray(u[c])?u[c].filter(m=>m!==null).join(" "):u[c]}),i.value!=="always"&&(u.target+=` ${i.value==="drag"?u.tooltipDrag:u.tooltipFocus}`),a.value==="horizontal"&&(u.tooltip+=l.value==="bottom"?` ${u.tooltipBottom}`:` ${u.tooltipTop}`),a.value==="vertical"&&(u.tooltip+=l.value==="right"?` ${u.tooltipRight}`:` ${u.tooltipLeft}`),u})}}var ou={exports:{}};(function(t,e){(function(n){t.exports=n()})(function(){var n=["decimals","thousand","mark","prefix","suffix","encoder","decoder","negativeBefore","negative","edit","undo"];function r(b){return b.split("").reverse().join("")}function i(b,L){return b.substring(0,L.length)===L}function l(b,L){return b.slice(-1*L.length)===L}function a(b,L,x){if((b[L]||b[x])&&b[L]===b[x])throw new Error(L)}function o(b){return typeof b=="number"&&isFinite(b)}function s(b,L){return b=b.toString().split("e"),b=Math.round(+(b[0]+"e"+(b[1]?+b[1]+L:L))),b=b.toString().split("e"),(+(b[0]+"e"+(b[1]?+b[1]-L:-L))).toFixed(L)}function u(b,L,x,I,B,_,O,H,R,Z,U,P){var ae=P,ne,K,le,we="",he="";return _&&(P=_(P)),o(P)?(b!==!1&&parseFloat(P.toFixed(b))===0&&(P=0),P<0&&(ne=!0,P=Math.abs(P)),b!==!1&&(P=s(P,b)),P=P.toString(),P.indexOf(".")!==-1?(K=P.split("."),le=K[0],x&&(we=x+K[1])):le=P,L&&(le=r(le).match(/.{1,3}/g),le=r(le.join(r(L)))),ne&&H&&(he+=H),I&&(he+=I),ne&&R&&(he+=R),he+=le,he+=we,B&&(he+=B),Z&&(he=Z(he,ae)),he):!1}function c(b,L,x,I,B,_,O,H,R,Z,U,P){var ae,ne="";return U&&(P=U(P)),!P||typeof P!="string"||(H&&i(P,H)&&(P=P.replace(H,""),ae=!0),I&&i(P,I)&&(P=P.replace(I,"")),R&&i(P,R)&&(P=P.replace(R,""),ae=!0),B&&l(P,B)&&(P=P.slice(0,-1*B.length)),L&&(P=P.split(L).join("")),x&&(P=P.replace(x,".")),ae&&(ne+="-"),ne+=P,ne=ne.replace(/[^0-9\.\-.]/g,""),ne==="")||(ne=Number(ne),O&&(ne=O(ne)),!o(ne))?!1:ne}function m(b){var L,x,I,B={};for(b.suffix===void 0&&(b.suffix=b.postfix),L=0;L<n.length;L+=1)if(x=n[L],I=b[x],I===void 0)x==="negative"&&!B.negativeBefore?B[x]="-":x==="mark"&&B.thousand!=="."?B[x]=".":B[x]=!1;else if(x==="decimals")if(I>=0&&I<8)B[x]=I;else throw new Error(x);else if(x==="encoder"||x==="decoder"||x==="edit"||x==="undo")if(typeof I=="function")B[x]=I;else throw new Error(x);else if(typeof I=="string")B[x]=I;else throw new Error(x);return a(B,"mark","thousand"),a(B,"prefix","negative"),a(B,"prefix","negativeBefore"),B}function E(b,L,x){var I,B=[];for(I=0;I<n.length;I+=1)B.push(b[n[I]]);return B.push(x),L.apply("",B)}function g(b){if(!(this instanceof g))return new g(b);typeof b=="object"&&(b=m(b),this.to=function(L){return E(b,u,L)},this.from=function(L){return E(b,c,L)})}return g})})(ou);var ao=ou.exports;function a2(t,e,n){const{format:r,step:i}=rt(t),l=n.value,a=n.classList,o=j(()=>!r||!r.value?ao({decimals:i.value>=0?0:2}):typeof r.value=="function"?{to:r.value}:ao({...r.value})),s=j(()=>Array.isArray(l.value)?l.value.map(c=>o.value):o.value);return{tooltipFormat:o,tooltipsFormat:s,tooltipsMerge:(c,m,E)=>{var g=getComputedStyle(c).direction==="rtl",b=c.noUiSlider.options.direction==="rtl",L=c.noUiSlider.options.orientation==="vertical",x=c.noUiSlider.getTooltips(),I=c.noUiSlider.getOrigins();x.forEach(function(B,_){B&&I[_].appendChild(B)}),c.noUiSlider.on("update",function(B,_,O,H,R){var Z=[[]],U=[[]],P=[[]],ae=0;x[0]&&(Z[0][0]=0,U[0][0]=R[0],P[0][0]=o.value.to(parseFloat(B[0])));for(var ne=1;ne<B.length;ne++)(!x[ne]||B[ne]-B[ne-1]>m)&&(ae++,Z[ae]=[],P[ae]=[],U[ae]=[]),x[ne]&&(Z[ae].push(ne),P[ae].push(o.value.to(parseFloat(B[ne]))),U[ae].push(R[ne]));Z.forEach(function(K,le){for(var we=K.length,he=0;he<we;he++){var me=K[he];if(he===we-1){var ge=0;U[le].forEach(function(W){ge+=1e3-W});var Ye=L?"bottom":"right",be=b?0:we-1,fe=1e3-U[le][be];ge=(g&&!L?100:0)+ge/we-fe,x[me].innerHTML=P[le].join(E),x[me].style.display="block",x[me].style[Ye]=ge+"%",a.value.tooltipHidden.split(" ").forEach(W=>{x[me].classList.contains(W)&&x[me].classList.remove(W)})}else x[me].style.display="none",a.value.tooltipHidden.split(" ").forEach(W=>{x[me].classList.add(W)})}})})}}}var kn;(function(t){t.Range="range",t.Steps="steps",t.Positions="positions",t.Count="count",t.Values="values"})(kn||(kn={}));var Lt;(function(t){t[t.None=-1]="None",t[t.NoValue=0]="NoValue",t[t.LargeValue=1]="LargeValue",t[t.SmallValue=2]="SmallValue"})(Lt||(Lt={}));function l2(t){return Zr(t)&&typeof t.from=="function"}function Zr(t){return typeof t=="object"&&typeof t.to=="function"}function lo(t){t.parentElement.removeChild(t)}function ia(t){return t!=null}function oo(t){t.preventDefault()}function o2(t){return t.filter(function(e){return this[e]?!1:this[e]=!0},{})}function s2(t,e){return Math.round(t/e)*e}function u2(t,e){var n=t.getBoundingClientRect(),r=t.ownerDocument,i=r.documentElement,l=su(r);return/webkit.*Chrome.*Mobile/i.test(navigator.userAgent)&&(l.x=0),e?n.top+l.y-i.clientTop:n.left+l.x-i.clientLeft}function Xt(t){return typeof t=="number"&&!isNaN(t)&&isFinite(t)}function so(t,e,n){n>0&&(mt(t,e),setTimeout(function(){qr(t,e)},n))}function uo(t){return Math.max(Math.min(t,100),0)}function gi(t){return Array.isArray(t)?t:[t]}function d2(t){t=String(t);var e=t.split(".");return e.length>1?e[1].length:0}function mt(t,e){t.classList&&!/\s/.test(e)?t.classList.add(e):t.className+=" "+e}function qr(t,e){t.classList&&!/\s/.test(e)?t.classList.remove(e):t.className=t.className.replace(new RegExp("(^|\\b)"+e.split(" ").join("|")+"(\\b|$)","gi")," ")}function c2(t,e){return t.classList?t.classList.contains(e):new RegExp("\\b"+e+"\\b").test(t.className)}function su(t){var e=window.pageXOffset!==void 0,n=(t.compatMode||"")==="CSS1Compat",r=e?window.pageXOffset:n?t.documentElement.scrollLeft:t.body.scrollLeft,i=e?window.pageYOffset:n?t.documentElement.scrollTop:t.body.scrollTop;return{x:r,y:i}}function p2(){return window.navigator.pointerEnabled?{start:"pointerdown",move:"pointermove",end:"pointerup"}:window.navigator.msPointerEnabled?{start:"MSPointerDown",move:"MSPointerMove",end:"MSPointerUp"}:{start:"mousedown touchstart",move:"mousemove touchmove",end:"mouseup touchend"}}function f2(){var t=!1;try{var e=Object.defineProperty({},"passive",{get:function(){t=!0}});window.addEventListener("test",null,e)}catch{}return t}function v2(){return window.CSS&&CSS.supports&&CSS.supports("touch-action","none")}function ml(t,e){return 100/(e-t)}function aa(t,e,n){return e*100/(t[n+1]-t[n])}function h2(t,e){return aa(t,t[0]<0?e+Math.abs(t[0]):e-t[0],0)}function m2(t,e){return e*(t[1]-t[0])/100+t[0]}function Tr(t,e){for(var n=1;t>=e[n];)n+=1;return n}function g2(t,e,n){if(n>=t.slice(-1)[0])return 100;var r=Tr(n,t),i=t[r-1],l=t[r],a=e[r-1],o=e[r];return a+h2([i,l],n)/ml(a,o)}function b2(t,e,n){if(n>=100)return t.slice(-1)[0];var r=Tr(n,e),i=t[r-1],l=t[r],a=e[r-1],o=e[r];return m2([i,l],(n-a)*ml(a,o))}function w2(t,e,n,r){if(r===100)return r;var i=Tr(r,t),l=t[i-1],a=t[i];return n?r-l>(a-l)/2?a:l:e[i-1]?t[i-1]+s2(r-t[i-1],e[i-1]):r}var uu=(function(){function t(e,n,r){this.xPct=[],this.xVal=[],this.xSteps=[],this.xNumSteps=[],this.xHighestCompleteStep=[],this.xSteps=[r||!1],this.xNumSteps=[!1],this.snap=n;var i,l=[];for(Object.keys(e).forEach(function(a){l.push([gi(e[a]),a])}),l.sort(function(a,o){return a[0][0]-o[0][0]}),i=0;i<l.length;i++)this.handleEntryPoint(l[i][1],l[i][0]);for(this.xNumSteps=this.xSteps.slice(0),i=0;i<this.xNumSteps.length;i++)this.handleStepPoint(i,this.xNumSteps[i])}return t.prototype.getDistance=function(e){for(var n=[],r=0;r<this.xNumSteps.length-1;r++)n[r]=aa(this.xVal,e,r);return n},t.prototype.getAbsoluteDistance=function(e,n,r){var i=0;if(e<this.xPct[this.xPct.length-1])for(;e>this.xPct[i+1];)i++;else e===this.xPct[this.xPct.length-1]&&(i=this.xPct.length-2);!r&&e===this.xPct[i+1]&&i++,n===null&&(n=[]);var l,a=1,o=n[i],s=0,u=0,c=0,m=0;for(r?l=(e-this.xPct[i])/(this.xPct[i+1]-this.xPct[i]):l=(this.xPct[i+1]-e)/(this.xPct[i+1]-this.xPct[i]);o>0;)s=this.xPct[i+1+m]-this.xPct[i+m],n[i+m]*a+100-l*100>100?(u=s*l,a=(o-100*l)/n[i+m],l=1):(u=n[i+m]*s/100*a,a=0),r?(c=c-u,this.xPct.length+m>=1&&m--):(c=c+u,this.xPct.length-m>=1&&m++),o=n[i+m]*a;return e+c},t.prototype.toStepping=function(e){return e=g2(this.xVal,this.xPct,e),e},t.prototype.fromStepping=function(e){return b2(this.xVal,this.xPct,e)},t.prototype.getStep=function(e){return e=w2(this.xPct,this.xSteps,this.snap,e),e},t.prototype.getDefaultStep=function(e,n,r){var i=Tr(e,this.xPct);return(e===100||n&&e===this.xPct[i-1])&&(i=Math.max(i-1,1)),(this.xVal[i]-this.xVal[i-1])/r},t.prototype.getNearbySteps=function(e){var n=Tr(e,this.xPct);return{stepBefore:{startValue:this.xVal[n-2],step:this.xNumSteps[n-2],highestStep:this.xHighestCompleteStep[n-2]},thisStep:{startValue:this.xVal[n-1],step:this.xNumSteps[n-1],highestStep:this.xHighestCompleteStep[n-1]},stepAfter:{startValue:this.xVal[n],step:this.xNumSteps[n],highestStep:this.xHighestCompleteStep[n]}}},t.prototype.countStepDecimals=function(){var e=this.xNumSteps.map(d2);return Math.max.apply(null,e)},t.prototype.hasNoSize=function(){return this.xVal[0]===this.xVal[this.xVal.length-1]},t.prototype.convert=function(e){return this.getStep(this.toStepping(e))},t.prototype.handleEntryPoint=function(e,n){var r;if(e==="min"?r=0:e==="max"?r=100:r=parseFloat(e),!Xt(r)||!Xt(n[0]))throw new Error("noUiSlider: 'range' value isn't numeric.");this.xPct.push(r),this.xVal.push(n[0]);var i=Number(n[1]);r?this.xSteps.push(isNaN(i)?!1:i):isNaN(i)||(this.xSteps[0]=i),this.xHighestCompleteStep.push(0)},t.prototype.handleStepPoint=function(e,n){if(n){if(this.xVal[e]===this.xVal[e+1]){this.xSteps[e]=this.xHighestCompleteStep[e]=this.xVal[e];return}this.xSteps[e]=aa([this.xVal[e],this.xVal[e+1]],n,0)/ml(this.xPct[e],this.xPct[e+1]);var r=(this.xVal[e+1]-this.xVal[e])/this.xNumSteps[e],i=Math.ceil(Number(r.toFixed(3))-1),l=this.xVal[e]+this.xNumSteps[e]*i;this.xHighestCompleteStep[e]=l}},t})(),co={to:function(t){return t===void 0?"":t.toFixed(2)},from:Number},du={target:"target",base:"base",origin:"origin",handle:"handle",handleLower:"handle-lower",handleUpper:"handle-upper",touchArea:"touch-area",horizontal:"horizontal",vertical:"vertical",background:"background",connect:"connect",connects:"connects",ltr:"ltr",rtl:"rtl",textDirectionLtr:"txt-dir-ltr",textDirectionRtl:"txt-dir-rtl",draggable:"draggable",drag:"state-drag",tap:"state-tap",active:"active",tooltip:"tooltip",pips:"pips",pipsHorizontal:"pips-horizontal",pipsVertical:"pips-vertical",marker:"marker",markerHorizontal:"marker-horizontal",markerVertical:"marker-vertical",markerNormal:"marker-normal",markerLarge:"marker-large",markerSub:"marker-sub",value:"value",valueHorizontal:"value-horizontal",valueVertical:"value-vertical",valueNormal:"value-normal",valueLarge:"value-large",valueSub:"value-sub"},bn={tooltips:".__tooltips",aria:".__aria"};function y2(t,e){if(!Xt(e))throw new Error("noUiSlider: 'step' is not numeric.");t.singleStep=e}function k2(t,e){if(!Xt(e))throw new Error("noUiSlider: 'keyboardPageMultiplier' is not numeric.");t.keyboardPageMultiplier=e}function C2(t,e){if(!Xt(e))throw new Error("noUiSlider: 'keyboardMultiplier' is not numeric.");t.keyboardMultiplier=e}function E2(t,e){if(!Xt(e))throw new Error("noUiSlider: 'keyboardDefaultStep' is not numeric.");t.keyboardDefaultStep=e}function A2(t,e){if(typeof e!="object"||Array.isArray(e))throw new Error("noUiSlider: 'range' is not an object.");if(e.min===void 0||e.max===void 0)throw new Error("noUiSlider: Missing 'min' or 'max' in 'range'.");t.spectrum=new uu(e,t.snap||!1,t.singleStep)}function L2(t,e){if(e=gi(e),!Array.isArray(e)||!e.length)throw new Error("noUiSlider: 'start' option is incorrect.");t.handles=e.length,t.start=e}function x2(t,e){if(typeof e!="boolean")throw new Error("noUiSlider: 'snap' option must be a boolean.");t.snap=e}function T2(t,e){if(typeof e!="boolean")throw new Error("noUiSlider: 'animate' option must be a boolean.");t.animate=e}function S2(t,e){if(typeof e!="number")throw new Error("noUiSlider: 'animationDuration' option must be a number.");t.animationDuration=e}function cu(t,e){var n=[!1],r;if(e==="lower"?e=[!0,!1]:e==="upper"&&(e=[!1,!0]),e===!0||e===!1){for(r=1;r<t.handles;r++)n.push(e);n.push(!1)}else{if(!Array.isArray(e)||!e.length||e.length!==t.handles+1)throw new Error("noUiSlider: 'connect' option doesn't match handle count.");n=e}t.connect=n}function _2(t,e){switch(e){case"horizontal":t.ort=0;break;case"vertical":t.ort=1;break;default:throw new Error("noUiSlider: 'orientation' option is invalid.")}}function pu(t,e){if(!Xt(e))throw new Error("noUiSlider: 'margin' option must be numeric.");e!==0&&(t.margin=t.spectrum.getDistance(e))}function M2(t,e){if(!Xt(e))throw new Error("noUiSlider: 'limit' option must be numeric.");if(t.limit=t.spectrum.getDistance(e),!t.limit||t.handles<2)throw new Error("noUiSlider: 'limit' option is only supported on linear sliders with 2 or more handles.")}function I2(t,e){var n;if(!Xt(e)&&!Array.isArray(e))throw new Error("noUiSlider: 'padding' option must be numeric or array of exactly 2 numbers.");if(Array.isArray(e)&&!(e.length===2||Xt(e[0])||Xt(e[1])))throw new Error("noUiSlider: 'padding' option must be numeric or array of exactly 2 numbers.");if(e!==0){for(Array.isArray(e)||(e=[e,e]),t.padding=[t.spectrum.getDistance(e[0]),t.spectrum.getDistance(e[1])],n=0;n<t.spectrum.xNumSteps.length-1;n++)if(t.padding[0][n]<0||t.padding[1][n]<0)throw new Error("noUiSlider: 'padding' option must be a positive number(s).");var r=e[0]+e[1],i=t.spectrum.xVal[0],l=t.spectrum.xVal[t.spectrum.xVal.length-1];if(r/(l-i)>1)throw new Error("noUiSlider: 'padding' option must not exceed 100% of the range.")}}function B2(t,e){switch(e){case"ltr":t.dir=0;break;case"rtl":t.dir=1;break;default:throw new Error("noUiSlider: 'direction' option was not recognized.")}}function D2(t,e){if(typeof e!="string")throw new Error("noUiSlider: 'behaviour' must be a string containing options.");var n=e.indexOf("tap")>=0,r=e.indexOf("drag")>=0,i=e.indexOf("fixed")>=0,l=e.indexOf("snap")>=0,a=e.indexOf("hover")>=0,o=e.indexOf("unconstrained")>=0,s=e.indexOf("invert-connects")>=0,u=e.indexOf("drag-all")>=0,c=e.indexOf("smooth-steps")>=0;if(i){if(t.handles!==2)throw new Error("noUiSlider: 'fixed' behaviour must be used with 2 handles");pu(t,t.start[1]-t.start[0])}if(s&&t.handles!==2)throw new Error("noUiSlider: 'invert-connects' behaviour must be used with 2 handles");if(o&&(t.margin||t.limit))throw new Error("noUiSlider: 'unconstrained' behaviour cannot be used with margin or limit");t.events={tap:n||l,drag:r,dragAll:u,smoothSteps:c,fixed:i,snap:l,hover:a,unconstrained:o,invertConnects:s}}function R2(t,e){if(e!==!1)if(e===!0||Zr(e)){t.tooltips=[];for(var n=0;n<t.handles;n++)t.tooltips.push(e)}else{if(e=gi(e),e.length!==t.handles)throw new Error("noUiSlider: must pass a formatter for all handles.");e.forEach(function(r){if(typeof r!="boolean"&&!Zr(r))throw new Error("noUiSlider: 'tooltips' must be passed a formatter or 'false'.")}),t.tooltips=e}}function F2(t,e){if(e.length!==t.handles)throw new Error("noUiSlider: must pass a attributes for all handles.");t.handleAttributes=e}function O2(t,e){if(!Zr(e))throw new Error("noUiSlider: 'ariaFormat' requires 'to' method.");t.ariaFormat=e}function $2(t,e){if(!l2(e))throw new Error("noUiSlider: 'format' requires 'to' and 'from' methods.");t.format=e}function H2(t,e){if(typeof e!="boolean")throw new Error("noUiSlider: 'keyboardSupport' option must be a boolean.");t.keyboardSupport=e}function P2(t,e){t.documentElement=e}function z2(t,e){if(typeof e!="string"&&e!==!1)throw new Error("noUiSlider: 'cssPrefix' must be a string or `false`.");t.cssPrefix=e}function N2(t,e){if(typeof e!="object")throw new Error("noUiSlider: 'cssClasses' must be an object.");typeof t.cssPrefix=="string"?(t.cssClasses={},Object.keys(e).forEach(function(n){t.cssClasses[n]=t.cssPrefix+e[n]})):t.cssClasses=e}function fu(t){var e={margin:null,limit:null,padding:null,animate:!0,animationDuration:300,ariaFormat:co,format:co},n={step:{r:!1,t:y2},keyboardPageMultiplier:{r:!1,t:k2},keyboardMultiplier:{r:!1,t:C2},keyboardDefaultStep:{r:!1,t:E2},start:{r:!0,t:L2},connect:{r:!0,t:cu},direction:{r:!0,t:B2},snap:{r:!1,t:x2},animate:{r:!1,t:T2},animationDuration:{r:!1,t:S2},range:{r:!0,t:A2},orientation:{r:!1,t:_2},margin:{r:!1,t:pu},limit:{r:!1,t:M2},padding:{r:!1,t:I2},behaviour:{r:!0,t:D2},ariaFormat:{r:!1,t:O2},format:{r:!1,t:$2},tooltips:{r:!1,t:R2},keyboardSupport:{r:!0,t:H2},documentElement:{r:!1,t:P2},cssPrefix:{r:!0,t:z2},cssClasses:{r:!0,t:N2},handleAttributes:{r:!1,t:F2}},r={connect:!1,direction:"ltr",behaviour:"tap",orientation:"horizontal",keyboardSupport:!0,cssPrefix:"noUi-",cssClasses:du,keyboardPageMultiplier:5,keyboardMultiplier:1,keyboardDefaultStep:10};t.format&&!t.ariaFormat&&(t.ariaFormat=t.format),Object.keys(n).forEach(function(s){if(!ia(t[s])&&r[s]===void 0){if(n[s].r)throw new Error("noUiSlider: '"+s+"' is required.");return}n[s].t(e,ia(t[s])?t[s]:r[s])}),e.pips=t.pips;var i=document.createElement("div"),l=i.style.msTransform!==void 0,a=i.style.transform!==void 0;e.transformRule=a?"transform":l?"msTransform":"webkitTransform";var o=[["left","top"],["right","bottom"]];return e.style=o[e.dir][e.ort],e}function V2(t,e,n){var r=p2(),i=v2(),l=i&&f2(),a=t,o,s,u,c,m,E,g=e.spectrum,b=[],L=[],x=[],I=0,B={},_=!1,O=t.ownerDocument,H=e.documentElement||O.documentElement,R=O.body,Z=O.dir==="rtl"||e.ort===1?0:100;function U(v,A){var T=O.createElement("div");return A&&mt(T,A),v.appendChild(T),T}function P(v,A){var T=U(v,e.cssClasses.origin),z=U(T,e.cssClasses.handle);if(U(z,e.cssClasses.touchArea),z.setAttribute("data-handle",String(A)),e.keyboardSupport&&(z.setAttribute("tabindex","0"),z.addEventListener("keydown",function(Q){return it(Q,A)})),e.handleAttributes!==void 0){var q=e.handleAttributes[A];Object.keys(q).forEach(function(Q){z.setAttribute(Q,q[Q])})}return z.setAttribute("role","slider"),z.setAttribute("aria-orientation",e.ort?"vertical":"horizontal"),A===0?mt(z,e.cssClasses.handleLower):A===e.handles-1&&mt(z,e.cssClasses.handleUpper),T.handle=z,T}function ae(v,A){return A?U(v,e.cssClasses.connect):!1}function ne(v,A){s=U(A,e.cssClasses.connects),u=[],c=[],c.push(ae(s,v[0]));for(var T=0;T<e.handles;T++)u.push(P(A,T)),x[T]=T,c.push(ae(s,v[T+1]))}function K(v){mt(v,e.cssClasses.target),e.dir===0?mt(v,e.cssClasses.ltr):mt(v,e.cssClasses.rtl),e.ort===0?mt(v,e.cssClasses.horizontal):mt(v,e.cssClasses.vertical);var A=getComputedStyle(v).direction;return A==="rtl"?mt(v,e.cssClasses.textDirectionRtl):mt(v,e.cssClasses.textDirectionLtr),U(v,e.cssClasses.base)}function le(v,A){return!e.tooltips||!e.tooltips[A]?!1:U(v.firstChild,e.cssClasses.tooltip)}function we(){return a.hasAttribute("disabled")}function he(v){var A=u[v];return A.hasAttribute("disabled")}function me(v){v!=null?(u[v].setAttribute("disabled",""),u[v].handle.removeAttribute("tabindex")):(a.setAttribute("disabled",""),u.forEach(function(A){A.handle.removeAttribute("tabindex")}))}function ge(v){v!=null?(u[v].removeAttribute("disabled"),u[v].handle.setAttribute("tabindex","0")):(a.removeAttribute("disabled"),u.forEach(function(A){A.removeAttribute("disabled"),A.handle.setAttribute("tabindex","0")}))}function Ye(){E&&(Ft("update"+bn.tooltips),E.forEach(function(v){v&&lo(v)}),E=null)}function be(){Ye(),E=u.map(le),pt("update"+bn.tooltips,function(v,A,T){if(!(!E||!e.tooltips)&&E[A]!==!1){var z=v[A];e.tooltips[A]!==!0&&(z=e.tooltips[A].to(T[A])),E[A].innerHTML=z}})}function fe(){Ft("update"+bn.aria),pt("update"+bn.aria,function(v,A,T,z,q){x.forEach(function(Q){var ee=u[Q],Y=vt(L,Q,0,!0,!0,!0),Fe=vt(L,Q,100,!0,!0,!0),Oe=q[Q],Me=String(e.ariaFormat.to(T[Q]));Y=g.fromStepping(Y).toFixed(1),Fe=g.fromStepping(Fe).toFixed(1),Oe=g.fromStepping(Oe).toFixed(1),ee.children[0].setAttribute("aria-valuemin",Y),ee.children[0].setAttribute("aria-valuemax",Fe),ee.children[0].setAttribute("aria-valuenow",Oe),ee.children[0].setAttribute("aria-valuetext",Me)})})}function W(v){if(v.mode===kn.Range||v.mode===kn.Steps)return g.xVal;if(v.mode===kn.Count){if(v.values<2)throw new Error("noUiSlider: 'values' (>= 2) required for mode 'count'.");for(var A=v.values-1,T=100/A,z=[];A--;)z[A]=A*T;return z.push(100),re(z,v.stepped)}return v.mode===kn.Positions?re(v.values,v.stepped):v.mode===kn.Values?v.stepped?v.values.map(function(q){return g.fromStepping(g.getStep(g.toStepping(q)))}):v.values:[]}function re(v,A){return v.map(function(T){return g.fromStepping(A?g.getStep(T):T)})}function st(v){function A(Oe,Me){return Number((Oe+Me).toFixed(7))}var T=W(v),z={},q=g.xVal[0],Q=g.xVal[g.xVal.length-1],ee=!1,Y=!1,Fe=0;return T=o2(T.slice().sort(function(Oe,Me){return Oe-Me})),T[0]!==q&&(T.unshift(q),ee=!0),T[T.length-1]!==Q&&(T.push(Q),Y=!0),T.forEach(function(Oe,Me){var Ne,Ee,Ke,at=Oe,Ge=T[Me+1],Je,tn,y,X,G,ke,Ie,w=v.mode===kn.Steps;for(w&&(Ne=g.xNumSteps[Me]),Ne||(Ne=Ge-at),Ge===void 0&&(Ge=at),Ne=Math.max(Ne,1e-7),Ee=at;Ee<=Ge;Ee=A(Ee,Ne)){for(Je=g.toStepping(Ee),tn=Je-Fe,G=tn/(v.density||1),ke=Math.round(G),Ie=tn/ke,Ke=1;Ke<=ke;Ke+=1)y=Fe+Ke*Ie,z[y.toFixed(5)]=[g.fromStepping(y),0];X=T.indexOf(Ee)>-1?Lt.LargeValue:w?Lt.SmallValue:Lt.NoValue,!Me&&ee&&Ee!==Ge&&(X=0),Ee===Ge&&Y||(z[Je.toFixed(5)]=[Ee,X]),Fe=Je}}),z}function ve(v,A,T){var z,q,Q=O.createElement("div"),ee=(z={},z[Lt.None]="",z[Lt.NoValue]=e.cssClasses.valueNormal,z[Lt.LargeValue]=e.cssClasses.valueLarge,z[Lt.SmallValue]=e.cssClasses.valueSub,z),Y=(q={},q[Lt.None]="",q[Lt.NoValue]=e.cssClasses.markerNormal,q[Lt.LargeValue]=e.cssClasses.markerLarge,q[Lt.SmallValue]=e.cssClasses.markerSub,q),Fe=[e.cssClasses.valueHorizontal,e.cssClasses.valueVertical],Oe=[e.cssClasses.markerHorizontal,e.cssClasses.markerVertical];mt(Q,e.cssClasses.pips),mt(Q,e.ort===0?e.cssClasses.pipsHorizontal:e.cssClasses.pipsVertical);function Me(Ee,Ke){var at=Ke===e.cssClasses.value,Ge=at?Fe:Oe,Je=at?ee:Y;return Ke+" "+Ge[e.ort]+" "+Je[Ee]}function Ne(Ee,Ke,at){if(at=A?A(Ke,at):at,at!==Lt.None){var Ge=U(Q,!1);Ge.className=Me(at,e.cssClasses.marker),Ge.style[e.style]=Ee+"%",at>Lt.NoValue&&(Ge=U(Q,!1),Ge.className=Me(at,e.cssClasses.value),Ge.setAttribute("data-value",String(Ke)),Ge.style[e.style]=Ee+"%",Ge.innerHTML=String(T.to(Ke)))}}return Object.keys(v).forEach(function(Ee){Ne(Ee,v[Ee][0],v[Ee][1])}),Q}function pe(){m&&(lo(m),m=null)}function F(v){pe();var A=st(v),T=v.filter,z=v.format||{to:function(q){return String(Math.round(q))}};return m=a.appendChild(ve(A,T,z)),m}function D(){var v=o.getBoundingClientRect(),A="offset"+["Width","Height"][e.ort];return e.ort===0?v.width||o[A]:v.height||o[A]}function se(v,A,T,z){var q=function(ee){var Y=_e(ee,z.pageOffset,z.target||A);if(!Y||we()&&!z.doNotReject||c2(a,e.cssClasses.tap)&&!z.doNotReject||v===r.start&&Y.buttons!==void 0&&Y.buttons>1||z.hover&&Y.buttons)return!1;l||Y.preventDefault(),Y.calcPoint=Y.points[e.ort],T(Y,z)},Q=[];return v.split(" ").forEach(function(ee){A.addEventListener(ee,q,l?{passive:!0}:!1),Q.push([ee,q])}),Q}function _e(v,A,T){var z=v.type.indexOf("touch")===0,q=v.type.indexOf("mouse")===0,Q=v.type.indexOf("pointer")===0,ee=0,Y=0;if(v.type.indexOf("MSPointer")===0&&(Q=!0),v.type==="mousedown"&&!v.buttons&&!v.touches)return!1;if(z){var Fe=function(Ne){var Ee=Ne.target;return Ee===T||T.contains(Ee)||v.composed&&v.composedPath().shift()===T};if(v.type==="touchstart"){var Oe=Array.prototype.filter.call(v.touches,Fe);if(Oe.length>1)return!1;ee=Oe[0].pageX,Y=Oe[0].pageY}else{var Me=Array.prototype.find.call(v.changedTouches,Fe);if(!Me)return!1;ee=Me.pageX,Y=Me.pageY}}return A=A||su(O),(q||Q)&&(ee=v.clientX+A.x,Y=v.clientY+A.y),v.pageOffset=A,v.points=[ee,Y],v.cursor=q||Q,v}function tt(v){var A=v-u2(o,e.ort),T=A*100/D();return T=uo(T),e.dir?100-T:T}function wt(v){var A=100,T=!1;return u.forEach(function(z,q){if(!he(q)){var Q=L[q],ee=Math.abs(Q-v),Y=ee===100&&A===100,Fe=ee<A,Oe=ee<=A&&v>Q;(Fe||Oe||Y)&&(T=q,A=ee)}}),T}function ut(v,A){v.type==="mouseout"&&v.target.nodeName==="HTML"&&v.relatedTarget===null&&Qt(v,A)}function yt(v,A){if(navigator.appVersion.indexOf("MSIE 9")===-1&&v.buttons===0&&A.buttonsProperty!==0)return Qt(v,A);var T=(e.dir?-1:1)*(v.calcPoint-A.startCalcPoint),z=T*100/A.baseSize;kt(T>0,z,A.locations,A.handleNumbers,A.connect)}function Qt(v,A){A.handle&&(qr(A.handle,e.cssClasses.active),I-=1),A.listeners.forEach(function(T){H.removeEventListener(T[0],T[1])}),I===0&&(qr(a,e.cssClasses.drag),gn(),v.cursor&&(R.style.cursor="",R.removeEventListener("selectstart",oo))),e.events.smoothSteps&&(A.handleNumbers.forEach(function(T){Ct(T,L[T],!0,!0,!1,!1)}),A.handleNumbers.forEach(function(T){Pe("update",T)})),A.handleNumbers.forEach(function(T){Pe("change",T),Pe("set",T),Pe("end",T)})}function dt(v,A){if(!A.handleNumbers.some(he)){var T;if(A.handleNumbers.length===1){var z=u[A.handleNumbers[0]];T=z.children[0],I+=1,mt(T,e.cssClasses.active)}v.stopPropagation();var q=[],Q=se(r.move,H,yt,{target:v.target,handle:T,connect:A.connect,listeners:q,startCalcPoint:v.calcPoint,baseSize:D(),pageOffset:v.pageOffset,handleNumbers:A.handleNumbers,buttonsProperty:v.buttons,locations:L.slice()}),ee=se(r.end,H,Qt,{target:v.target,handle:T,listeners:q,doNotReject:!0,handleNumbers:A.handleNumbers}),Y=se("mouseout",H,ut,{target:v.target,handle:T,listeners:q,doNotReject:!0,handleNumbers:A.handleNumbers});q.push.apply(q,Q.concat(ee,Y)),v.cursor&&(R.style.cursor=getComputedStyle(v.target).cursor,u.length>1&&mt(a,e.cssClasses.drag),R.addEventListener("selectstart",oo,!1)),A.handleNumbers.forEach(function(Fe){Pe("start",Fe)})}}function Zt(v){v.stopPropagation();var A=tt(v.calcPoint),T=wt(A);T!==!1&&(e.events.snap||so(a,e.cssClasses.tap,e.animationDuration),Ct(T,A,!0,!0),gn(),Pe("slide",T,!0),Pe("update",T,!0),e.events.snap?dt(v,{handleNumbers:[T]}):(Pe("change",T,!0),Pe("set",T,!0)))}function It(v){var A=tt(v.calcPoint),T=g.getStep(A),z=g.fromStepping(T);Object.keys(B).forEach(function(q){q.split(".")[0]==="hover"&&B[q].forEach(function(Q){Q.call(qe,z)})})}function it(v,A){if(we()||he(A))return!1;var T=["Left","Right"],z=["Down","Up"],q=["PageDown","PageUp"],Q=["Home","End"];e.dir&&!e.ort?T.reverse():e.ort&&!e.dir&&(z.reverse(),q.reverse());var ee=v.key.replace("Arrow",""),Y=ee===q[0],Fe=ee===q[1],Oe=ee===z[0]||ee===T[0]||Y,Me=ee===z[1]||ee===T[1]||Fe,Ne=ee===Q[0],Ee=ee===Q[1];if(!Oe&&!Me&&!Ne&&!Ee)return!0;v.preventDefault();var Ke;if(Me||Oe){var at=Oe?0:1,Ge=Kn(A),Je=Ge[at];if(Je===null)return!1;Je===!1&&(Je=g.getDefaultStep(L[A],Oe,e.keyboardDefaultStep)),Fe||Y?Je*=e.keyboardPageMultiplier:Je*=e.keyboardMultiplier,Je=Math.max(Je,1e-7),Je=(Oe?-1:1)*Je,Ke=b[A]+Je}else Ee?Ke=e.spectrum.xVal[e.spectrum.xVal.length-1]:Ke=e.spectrum.xVal[0];return Ct(A,g.toStepping(Ke),!0,!0),Pe("slide",A),Pe("update",A),Pe("change",A),Pe("set",A),!1}function ct(v){v.fixed||u.forEach(function(A,T){se(r.start,A.children[0],dt,{handleNumbers:[T]})}),v.tap&&se(r.start,o,Zt,{}),v.hover&&se(r.move,o,It,{hover:!0}),v.drag&&c.forEach(function(A,T){if(!(A===!1||T===0||T===c.length-1)){var z=u[T-1],q=u[T],Q=[A],ee=[z,q],Y=[T-1,T];mt(A,e.cssClasses.draggable),v.fixed&&(Q.push(z.children[0]),Q.push(q.children[0])),v.dragAll&&(ee=u,Y=x),Q.forEach(function(Fe){se(r.start,Fe,dt,{handles:ee,handleNumbers:Y,connect:A})})}})}function pt(v,A){B[v]=B[v]||[],B[v].push(A),v.split(".")[0]==="update"&&u.forEach(function(T,z){Pe("update",z)})}function Bt(v){return v===bn.aria||v===bn.tooltips}function Ft(v){var A=v&&v.split(".")[0],T=A?v.substring(A.length):v;Object.keys(B).forEach(function(z){var q=z.split(".")[0],Q=z.substring(q.length);(!A||A===q)&&(!T||T===Q)&&(!Bt(Q)||T===Q)&&delete B[z]})}function Pe(v,A,T){Object.keys(B).forEach(function(z){var q=z.split(".")[0];v===q&&B[z].forEach(function(Q){Q.call(qe,b.map(e.format.to),A,b.slice(),T||!1,L.slice(),qe)})})}function vt(v,A,T,z,q,Q,ee){var Y;return u.length>1&&!e.events.unconstrained&&(z&&A>0&&(Y=g.getAbsoluteDistance(v[A-1],e.margin,!1),T=Math.max(T,Y)),q&&A<u.length-1&&(Y=g.getAbsoluteDistance(v[A+1],e.margin,!0),T=Math.min(T,Y))),u.length>1&&e.limit&&(z&&A>0&&(Y=g.getAbsoluteDistance(v[A-1],e.limit,!1),T=Math.min(T,Y)),q&&A<u.length-1&&(Y=g.getAbsoluteDistance(v[A+1],e.limit,!0),T=Math.max(T,Y))),e.padding&&(A===0&&(Y=g.getAbsoluteDistance(0,e.padding[0],!1),T=Math.max(T,Y)),A===u.length-1&&(Y=g.getAbsoluteDistance(100,e.padding[1],!0),T=Math.min(T,Y))),ee||(T=g.getStep(T)),T=uo(T),T===v[A]&&!Q?!1:T}function nt(v,A){var T=e.ort;return(T?A:v)+", "+(T?v:A)}function kt(v,A,T,z,q){var Q=T.slice(),ee=z[0],Y=e.events.smoothSteps,Fe=[!v,v],Oe=[v,!v];z=z.slice(),v&&z.reverse(),z.length>1?z.forEach(function(Ne,Ee){var Ke=vt(Q,Ne,Q[Ne]+A,Fe[Ee],Oe[Ee],!1,Y);Ke===!1?A=0:(A=Ke-Q[Ne],Q[Ne]=Ke)}):Fe=Oe=[!0];var Me=!1;z.forEach(function(Ne,Ee){Me=Ct(Ne,T[Ne]+A,Fe[Ee],Oe[Ee],!1,Y)||Me}),Me&&(z.forEach(function(Ne){Pe("update",Ne),Pe("slide",Ne)}),q!=null&&Pe("drag",ee))}function Dt(v,A){return e.dir?100-v-A:v}function Vt(v,A){L[v]=A,b[v]=g.fromStepping(A);var T=Dt(A,0)-Z,z="translate("+nt(T+"%","0")+")";if(u[v].style[e.transformRule]=z,e.events.invertConnects&&L.length>1){var q=L.every(function(Q,ee,Y){return ee===0||Q>=Y[ee-1]});if(_!==!q){en();return}}jt(v),jt(v+1),_&&(jt(v-1),jt(v+2))}function gn(){x.forEach(function(v){var A=L[v]>50?-1:1,T=3+(u.length+A*v);u[v].style.zIndex=String(T)})}function Ct(v,A,T,z,q,Q){return q||(A=vt(L,v,A,T,z,!1,Q)),A===!1?!1:(Vt(v,A),!0)}function jt(v){if(c[v]){var A=L.slice();_&&A.sort(function(Y,Fe){return Y-Fe});var T=0,z=100;v!==0&&(T=A[v-1]),v!==c.length-1&&(z=A[v]);var q=z-T,Q="translate("+nt(Dt(T,q)+"%","0")+")",ee="scale("+nt(q/100,"1")+")";c[v].style[e.transformRule]=Q+" "+ee}}function un(v,A){return v===null||v===!1||v===void 0||(typeof v=="number"&&(v=String(v)),v=e.format.from(v),v!==!1&&(v=g.toStepping(v)),v===!1||isNaN(v))?L[A]:v}function Kt(v,A,T){var z=gi(v),q=L[0]===void 0;A=A===void 0?!0:A,e.animate&&!q&&so(a,e.cssClasses.tap,e.animationDuration),x.forEach(function(Y){Ct(Y,un(z[Y],Y),!0,!1,T)});var Q=x.length===1?0:1;if(q&&g.hasNoSize()&&(T=!0,L[0]=0,x.length>1)){var ee=100/(x.length-1);x.forEach(function(Y){L[Y]=Y*ee})}for(;Q<x.length;++Q)x.forEach(function(Y){Ct(Y,L[Y],!0,!0,T)});gn(),x.forEach(function(Y){Pe("update",Y),z[Y]!==null&&A&&Pe("set",Y)})}function Ot(v){Kt(e.start,v)}function Et(v,A,T,z){if(v=Number(v),!(v>=0&&v<x.length))throw new Error("noUiSlider: invalid handle number, got: "+v);Ct(v,un(A,v),!0,!0,z),Pe("update",v),T&&Pe("set",v)}function Rt(v){if(v===void 0&&(v=!1),v)return b.length===1?b[0]:b.slice(0);var A=b.map(e.format.to);return A.length===1?A[0]:A}function Mn(){for(Ft(bn.aria),Ft(bn.tooltips),Object.keys(e.cssClasses).forEach(function(v){qr(a,e.cssClasses[v])});a.firstChild;)a.removeChild(a.firstChild);delete a.noUiSlider}function Kn(v){var A=L[v],T=g.getNearbySteps(A),z=b[v],q=T.thisStep.step,Q=null;if(e.snap)return[z-T.stepBefore.startValue||null,T.stepAfter.startValue-z||null];q!==!1&&z+q>T.stepAfter.startValue&&(q=T.stepAfter.startValue-z),z>T.thisStep.startValue?Q=T.thisStep.step:T.stepBefore.step===!1?Q=!1:Q=z-T.stepBefore.highestStep,A===100?q=null:A===0&&(Q=null);var ee=g.countStepDecimals();return q!==null&&q!==!1&&(q=Number(q.toFixed(ee))),Q!==null&&Q!==!1&&(Q=Number(Q.toFixed(ee))),[Q,q]}function $t(){return x.map(Kn)}function Ht(v,A){var T=Rt(),z=["margin","limit","padding","range","animate","snap","step","format","pips","tooltips","connect"];z.forEach(function(Q){v[Q]!==void 0&&(n[Q]=v[Q])});var q=fu(n);z.forEach(function(Q){v[Q]!==void 0&&(e[Q]=q[Q])}),g=q.spectrum,e.margin=q.margin,e.limit=q.limit,e.padding=q.padding,e.pips?F(e.pips):pe(),e.tooltips?be():Ye(),L=[],Kt(ia(v.start)?v.start:T,A),v.connect&&In()}function In(){for(;s.firstChild;)s.removeChild(s.firstChild);for(var v=0;v<=e.handles;v++)c[v]=ae(s,e.connect[v]),jt(v);ct({drag:e.events.drag,fixed:!0})}function en(){_=!_,cu(e,e.connect.map(function(v){return!v})),In()}function lr(){o=K(a),ne(e.connect,o),ct(e.events),Kt(e.start),e.pips&&F(e.pips),e.tooltips&&be(),fe()}lr();var qe={destroy:Mn,steps:$t,on:pt,off:Ft,get:Rt,set:Kt,setHandle:Et,reset:Ot,disable:me,enable:ge,__moveHandles:function(v,A,T){kt(v,A,L,T)},options:n,updateOptions:Ht,target:a,removePips:pe,removeTooltips:Ye,getPositions:function(){return L.slice()},getTooltips:function(){return E},getOrigins:function(){return u},pips:F};return qe}function j2(t,e){if(!t||!t.nodeName)throw new Error("noUiSlider: create requires a single element, got: "+t);if(t.noUiSlider)throw new Error("noUiSlider: Slider was already initialized.");var n=fu(e),r=V2(t,n,e);return t.noUiSlider=r,r}var U2={__spectrum:uu,cssClasses:du,create:j2};function po(t,e){if(!Array.isArray(t)||!Array.isArray(e))return!1;const n=e.slice().sort();return t.length===e.length&&t.slice().sort().every(function(r,i){return r===n[i]})}function W2(t,e,n){const{orientation:r,direction:i,tooltips:l,step:a,min:o,max:s,merge:u,id:c,disabled:m,options:E,classes:g,format:b,lazy:L,ariaLabelledby:x,aria:I}=rt(t),B=n.value,_=n.initialValue,O=n.tooltipsFormat,H=n.tooltipsMerge,R=n.tooltipFormat,Z=n.classList,U=ce(null),P=ce(null),ae=ce(!1),ne=j(()=>{let W={cssPrefix:"",cssClasses:Z.value,orientation:r.value,direction:i.value,tooltips:l.value?O.value:!1,connect:"lower",start:Wr(B.value)?o.value:B.value,range:{min:o.value,max:s.value}};if(a.value>0&&(W.step=a.value),Array.isArray(B.value)&&(W.connect=!0),x&&x.value||I&&Object.keys(I.value).length){let re=Array.isArray(B.value)?B.value:[B.value];W.handleAttributes=re.map(st=>Object.assign({},I.value,x&&x.value?{"aria-labelledby":x.value}:{}))}return b.value&&(W.ariaFormat=R.value),W}),K=j(()=>{let W={id:c&&c.value?c.value:void 0};return m.value&&(W.disabled=!0),W}),le=j(()=>Array.isArray(B.value)),we=()=>{ge(_.value)},he=()=>{let W=P.value.get();return Array.isArray(W)?W.map(re=>parseFloat(re)):parseFloat(W)},me=(W,re=!0)=>{P.value.set(W,re)},ge=W=>{e.emit("input",W),e.emit("update:modelValue",W),e.emit("update",W)},Ye=()=>{P.value=U2.create(U.value,Object.assign({},ne.value,E.value)),l.value&&le.value&&u.value>=0&&H(U.value,u.value," - "),P.value.on("set",()=>{const W=he();e.emit("change",W),e.emit("set",W),L.value&&ge(W)}),P.value.on("update",()=>{if(!ae.value)return;const W=he();if(le.value&&po(B.value,W)||!le.value&&B.value==W){e.emit("update",W);return}L.value||ge(W)}),P.value.on("start",()=>{e.emit("start",he())}),P.value.on("end",()=>{e.emit("end",he())}),P.value.on("slide",()=>{e.emit("slide",he())}),P.value.on("drag",()=>{e.emit("drag",he())}),U.value.querySelectorAll("[data-handle]").forEach(W=>{W.onblur=()=>{U.value&&Z.value.focused.split(" ").forEach(re=>{U.value.classList.remove(re)})},W.onfocus=()=>{Z.value.focused.split(" ").forEach(re=>{U.value.classList.add(re)})}}),ae.value=!0},be=()=>{P.value.off(),P.value.destroy(),P.value=null},fe=(W,re)=>{ae.value=!1,be(),Ye()};return Mr(Ye),Bd(be),je(le,fe,{immediate:!1}),je(o,fe,{immediate:!1}),je(s,fe,{immediate:!1}),je(a,fe,{immediate:!1}),je(r,fe,{immediate:!1}),je(i,fe,{immediate:!1}),je(l,fe,{immediate:!1}),je(u,fe,{immediate:!1}),je(b,fe,{immediate:!1,deep:!0}),je(E,fe,{immediate:!1,deep:!0}),je(g,fe,{immediate:!1,deep:!0}),je(B,(W,re)=>{re&&(typeof re=="object"&&typeof W=="object"&&W&&Object.keys(re)>Object.keys(W)||typeof re=="object"&&typeof W!="object"||Wr(W))&&fe()},{immediate:!1}),je(B,W=>{if(Wr(W)){me(o.value,!1);return}let re=he();le.value&&!Array.isArray(re)&&(re=[re]),(le.value&&!po(W,re)||!le.value&&W!=re)&&me(W,!1)},{deep:!0}),{slider:U,slider$:P,isRange:le,sliderProps:K,init:Ye,destroy:be,refresh:fe,update:me,reset:we}}const q2={value:{validator:function(t){return e=>typeof e=="number"||e instanceof Array||e===null||e===void 0||e===!1},required:!1},modelValue:{validator:function(t){return e=>typeof e=="number"||e instanceof Array||e===null||e===void 0||e===!1},required:!1}};var gl={name:"Slider",emits:["input","update:modelValue","start","slide","drag","update","change","set","end"],props:{...q2,id:{type:[String,Number],required:!1},disabled:{type:Boolean,required:!1,default:!1},min:{type:Number,required:!1,default:0},max:{type:Number,required:!1,default:100},step:{type:Number,required:!1,default:1},orientation:{type:String,required:!1,default:"horizontal"},direction:{type:String,required:!1,default:"ltr"},tooltips:{type:Boolean,required:!1,default:!0},options:{type:Object,required:!1,default:()=>({})},merge:{type:Number,required:!1,default:-1},format:{type:[Object,Function,Boolean],required:!1,default:null},classes:{type:Object,required:!1,default:()=>({})},showTooltip:{type:String,required:!1,default:"always"},tooltipPosition:{type:String,required:!1,default:null},lazy:{type:Boolean,required:!1,default:!0},ariaLabelledby:{type:String,required:!1,default:void 0},aria:{required:!1,type:Object,default:()=>({})}},setup(t,e){const n=r2(t),r=i2(t),i=a2(t,e,{value:n.value,classList:r.classList}),l=W2(t,e,{value:n.value,initialValue:n.initialValue,tooltipFormat:i.tooltipFormat,tooltipsFormat:i.tooltipsFormat,tooltipsMerge:i.tooltipsMerge,classList:r.classList});return{...r,...i,...l}}};function Q2(t,e,n,r,i,l){return p(),C("div",V(t.sliderProps,{ref:"slider"}),null,16)}gl.render=Q2;gl.__file="node_modules/@vueform/slider/src/Slider.vue";var bl={};function K2(t,e,n,r,i,l){const a=J("Slider");return p(),S(N(t.elementLayout),{ref:"container"},ue({element:f(()=>[d("div",{class:h(t.classes.wrapper)},[k(" @vueform/slider component "),De(a,V({value:t.value,modelValue:t.value},t.fieldOptions,{aria:t.aria,classes:t.classes.slider,id:t.fieldId,ref:"input",onUpdate:t.handleUpdate,onChange:t.handleChange}),null,16,["value","modelValue","aria","classes","id","onUpdate","onChange"])],2)]),_:2},[de(t.elementSlots,(o,s)=>({name:s,fn:f(()=>[M(t.$slots,s,{el$:t.el$},()=>[(p(),S(N(o),{el$:t.el$},null,8,["el$"]))])])}))]),1536)}bl.render=K2;bl.__file="themes/blank/templates/elements/SliderElement.vue";var vu={name:"SliderElement",render:bl.render,components:{Slider:gl},data(){return{merge:!0,defaultClasses:{container:"",wrapper:"vf-slider-wrapper",wrapper_sm:"vf-slider-wrapper-sm",wrapper_md:"",wrapper_lg:"vf-slider-wrapper-lg",slider:{target:"vf-slider-target",target_sm:"vf-slider-target-sm",target_md:"vf-slider-target-md",target_lg:"vf-slider-target-lg",focused:"vf-slider-focused",tooltipFocus:"vf-slider-tooltip-focus",tooltipDrag:"vf-slider-tooltip-drag",ltr:"vf-slider-ltr",rtl:"vf-slider-rtl",horizontal:"vf-slider-horizontal",horizontal_sm:"vf-slider-horizontal-sm",horizontal_md:"vf-slider-horizontal-md",horizontal_lg:"vf-slider-horizontal-lg",vertical:"vf-slider-vertical",vertical_sm:"vf-slider-vertical-sm",vertical_md:"vf-slider-vertical-md",vertical_lg:"vf-slider-vertical-lg",textDirectionRtl:"vf-slider-txt-dir-rtl",textDirectionLtr:"vf-slider-txt-dir-ltr",base:"vf-slider-base",base_sm:"vf-slider-base-sm",base_md:"vf-slider-base-md",base_lg:"vf-slider-base-lg",connects:"vf-slider-connects",connects_sm:"vf-slider-connects-sm",connects_md:"vf-slider-connects-md",connects_lg:"vf-slider-connects-lg",connect:"vf-slider-connect",connect_sm:"vf-slider-connect-sm",connect_md:"vf-slider-connect-md",connect_lg:"vf-slider-connect-lg",origin:"vf-slider-origin",handle:"vf-slider-handle",handle_sm:"vf-slider-handle-sm",handle_md:"vf-slider-handle-md",handle_lg:"vf-slider-handle-lg",handleUpper:"vf-handle-upper",handleLower:"vf-handle-lower",touchArea:"vf-slider-touch-area",tooltip:"vf-slider-tooltip",tooltip_sm:"vf-slider-tooltip-sm",tooltip_md:"vf-slider-tooltip-md",tooltip_lg:"vf-slider-tooltip-lg",tooltipTop:"vf-slider-tooltip-top",tooltipTop_sm:"vf-slider-tooltip-top-sm",tooltipTop_md:"vf-slider-tooltip-top-md",tooltipTop_lg:"vf-slider-tooltip-top-lg",tooltipBottom:"vf-slider-tooltip-bottom",tooltipBottom_sm:"vf-slider-tooltip-bottom-sm",tooltipBottom_md:"vf-slider-tooltip-bottom-md",tooltipBottom_lg:"vf-slider-tooltip-bottom-lg",tooltipLeft:"vf-slider-tooltip-left",tooltipLeft_sm:"vf-slider-tooltip-left-sm",tooltipLeft_md:"vf-slider-tooltip-left-md",tooltipLeft_lg:"vf-slider-tooltip-left-lg",tooltipRight:"vf-slider-tooltip-right",tooltipRight_sm:"vf-slider-tooltip-right-sm",tooltipRight_md:"vf-slider-tooltip-right-md",tooltipRight_lg:"vf-slider-tooltip-right-lg",tooltipHidden:"vf-slider-tooltip-hidden",active:"vf-slider-active",draggable:"vf-slider-draggable",tap:"vf-slider-state-tap",drag:"vf-slider-state-drag",$slider:(t,{Size:e})=>[t.slider.slider,t.slider[`slider_${e}`]],$horizontal:(t,{Size:e})=>[t.slider.horizontal,t.slider[`horizontal_${e}`]],$vertical:(t,{Size:e})=>[t.slider.vertical,t.slider[`vertical_${e}`]],$base:(t,{Size:e})=>[t.slider.base,t.slider[`base_${e}`]],$connects:(t,{Size:e})=>[t.slider.connects,t.slider[`connects_${e}`]],$connect:(t,{Size:e})=>[t.slider.connect,t.slider[`connect_${e}`]],$handle:(t,{Size:e})=>[t.slider.handle,t.slider[`handle_${e}`]],$tooltip:(t,{Size:e})=>[t.slider.tooltip,t.slider[`tooltip_${e}`]],$tooltipTop:(t,{Size:e})=>[t.slider.tooltipTop,t.slider[`tooltipTop_${e}`]],$tooltipBottom:(t,{Size:e})=>[t.slider.tooltipBottom,t.slider[`tooltipBottom_${e}`]],$tooltipLeft:(t,{Size:e})=>[t.slider.tooltipLeft,t.slider[`tooltipLeft_${e}`]],$tooltipRight:(t,{Size:e})=>[t.slider.tooltipRight,t.slider[`tooltipRight_${e}`]]},$wrapper:(t,{Size:e})=>[t.wrapper,t[`wrapper_${e}`]]}}}},G2=`.vf-slider-wrapper {
  margin-top: calc((var(--vf-min-height-input) - var(--vf-slider-height)) / 2);
}

.vf-slider-wrapper.vf-slider-wrapper-sm {
  margin-top: calc((var(--vf-min-height-input-sm) - var(--vf-slider-height)) / 2);
  margin-bottom: 0.25rem;
}

.vf-slider-wrapper.vf-slider-wrapper-lg {
  margin-top: calc((var(--vf-min-height-input-lg) - var(--vf-slider-height)) / 2);
}

/* @vueform/slider styles */

.vf-slider-target,
.vf-slider-target * {
  -webkit-touch-callout: none;
  -webkit-tap-highlight-color: transparent;
  -webkit-user-select: none;
  touch-action: none;
  -moz-user-select: none;
  user-select: none;
  box-sizing: border-box;
}

.vf-slider-target {
  position: relative;
  margin: calc((var(--vf-line-height) - var(--vf-slider-height)) / 2) 0;
}

.vf-slider-target[disabled] {
  opacity: 0.5;
  cursor: not-allowed;
}

.vf-slider-target.vf-slider-target-sm {
  margin: calc((var(--vf-line-height-sm) - var(--vf-slider-height-sm)) / 2) 0;
}

.vf-slider-target.vf-slider-target-lg {
  margin: calc((var(--vf-line-height-lg) - var(--vf-slider-height-lg)) / 2) 0;
}

.vf-slider-target.vf-slider-horizontal {
  height: var(--vf-slider-height);
}

.vf-slider-target.vf-slider-horizontal.vf-slider-horizontal-sm {
  height: var(--vf-slider-height-sm);
}

.vf-slider-target.vf-slider-horizontal.vf-slider-horizontal-lg {
  height: var(--vf-slider-height-lg);
}

.vf-slider-target.vf-slider-vertical {
  width: var(--vf-slider-height);
  height: var(--vf-slider-height-vertical);
}

.vf-slider-target.vf-slider-vertical.vf-slider-vertical-sm {
  width: var(--vf-slider-height-sm);
  height: var(--vf-slider-height-vertical-sm);
}

.vf-slider-target.vf-slider-vertical.vf-slider-vertical-lg {
  width: var(--vf-slider-height-lg);
  height: var(--vf-slider-height-vertical-lg);
}

.vf-slider-target.vf-slider-state-drag * {
  cursor: inherit !important;
}

.vf-slider-base,
.vf-slider-connects {
  width: 100%;
  height: 100%;
  position: relative;
}

.vf-slider-base {
  box-shadow: var(--vf-shadow-input);
  background-color: var(--vf-bg-passive);
  border-radius: var(--vf-radius-slider);
  z-index: 1;
}

.vf-slider-base.vf-slider-base-sm {
  border-radius: var(--vf-radius-slider-sm);
}

.vf-slider-base.vf-slider-base-lg {
  border-radius: var(--vf-radius-slider-lg);
}

.vf-slider-connects {
  overflow: hidden;
  z-index: 0;
  border-radius: var(--vf-radius-slider);
}

.vf-slider-connects.vf-slider-connects-sm {
  border-radius: var(--vf-radius-slider-sm);
}

.vf-slider-connects.vf-slider-connects-lg {
  border-radius: var(--vf-radius-slider-lg);
}

.vf-slider-connect,
.vf-slider-origin {
  will-change: transform;
  position: absolute;
  z-index: 1;
  top: 0;
  right: 0;
  height: 100%;
  width: 100%;
  -ms-transform-origin: 0 0;
  -webkit-transform-origin: 0 0;
  -webkit-transform-style: preserve-3d;
  transform-origin: 0 0;
  transform-style: flat;
}

.vf-slider-connect {
  background: var(--vf-primary);
  border-radius: var(--vf-radius-slider);
  cursor: pointer;
}

.vf-slider-connect.vf-slider-connect-sm {
  border-radius: var(--vf-radius-slider-sm);
}

.vf-slider-connect.vf-slider-connect-lg {
  border-radius: var(--vf-radius-slider-lg);
}

[disabled] .vf-slider-connect {
  background: var(--vf-slider-connect-bg-disabled);
}

.vf-slider-txt-dir-rtl.vf-slider-horizontal .vf-slider-origin {
  left: 0;
  right: auto;
}

.vf-slider-vertical .vf-slider-origin {
  top: -100%;
  width: 0;
}

.vf-slider-horizontal .vf-slider-origin {
  height: 0;
}

.vf-slider-state-tap .vf-slider-connect,
.vf-slider-state-tap .vf-slider-origin {
  transition: transform 0.3s;
}

.vf-slider-handle {
  backface-visibility: hidden;
  position: absolute;
  width: var(--vf-slider-handle-size);
  height: var(--vf-slider-handle-size);
  background-color: var(--vf-bg-slider-handle);
  border-radius: 999px;
  box-shadow: var(--vf-shadow-handles);
  outline: 0px solid var(--vf-ring-color);
  outline-offset: 0;
  cursor: grab;
  transition: box-shadow 0.2s ease-in-out, color 0.2s ease-in-out, background-color 0.2s ease-in-out, border-color 0.2s ease-in-out;
}

.vf-slider-handle:focus {
  box-shadow: var(--vf-shadow-handles-focus);
  outline: var(--vf-ring-width) solid var(--vf-ring-color);
}

.vf-slider-handle:hover {
  box-shadow: var(--vf-shadow-handles-hover);
}

.vf-slider-handle.vf-slider-handle-sm {
  height: var(--vf-slider-handle-size-sm);
  width: var(--vf-slider-handle-size-sm);
}

.vf-slider-handle.vf-slider-handle-lg {
  height: var(--vf-slider-handle-size-lg);
  width: var(--vf-slider-handle-size-lg);
}

.vf-slider-horizontal .vf-slider-handle {
  top: calc((var(--vf-slider-handle-size) - var(--vf-slider-height)) / 2 * -1);
  right: calc(var(--vf-slider-handle-size) / 2 * -1);
}

.vf-slider-horizontal .vf-slider-handle.vf-slider-handle-sm {
  top: calc((var(--vf-slider-handle-size-sm) - var(--vf-slider-height-sm)) / 2 * -1);
  right: calc(var(--vf-slider-handle-size-sm) / 2 * -1);
}

.vf-slider-horizontal .vf-slider-handle.vf-slider-handle-lg {
  top: calc((var(--vf-slider-handle-size-lg) - var(--vf-slider-height-lg)) / 2 * -1);
  right: calc(var(--vf-slider-handle-size-lg) / 2 * -1);
}

.vf-slider-horizontal.vf-slider-txt-dir-rtl .vf-slider-handle {
  left: calc(var(--vf-slider-handle-width) / 2 * -1);
  right: auto;
}

.vf-slider-horizontal.vf-slider-txt-dir-rtl .vf-slider-handle.vf-slider-handle-sm {
  left: calc(var(--vf-slider-handle-width-sm) / 2 * -1);
}

.vf-slider-horizontal.vf-slider-txt-dir-rtl .vf-slider-handle.vf-slider-handle-lg {
  left: calc(var(--vf-slider-handle-width-lg) / 2 * -1);
}

.vf-slider-vertical {
  width: var(--vf-slider-height);
  height: var(--vf-slider-vertical-height);
}

.vf-slider-vertical .vf-slider-handle {
  bottom: calc(var(--vf-slider-handle-size) / 2 * -1);
  right: calc((var(--vf-slider-handle-size) - var(--vf-slider-height)) / 2 * -1);
}

.vf-slider-vertical .vf-slider-handle.vf-slider-handle-sm {
  bottom: calc(var(--vf-slider-handle-size-sm) / 2 * -1);
  right: calc((var(--vf-slider-handle-size-sm) - var(--vf-slider-height-sm)) / 2 * -1);
}

.vf-slider-vertical .vf-slider-handle.vf-slider-handle-lg {
  bottom: calc(var(--vf-slider-handle-size-lg) / 2 * -1);
  right: calc((var(--vf-slider-handle-size-lg) - var(--vf-slider-height-lg)) / 2 * -1);
}

.vf-slider-touch-area {
  height: 100%;
  width: 100%;
}

.vf-slider-tooltip {
  position: absolute;
  display: block;
  font-weight: 600;
  white-space: nowrap;
  min-width: 1.25rem;
  text-align: center;
  border: 1px solid var(--vf-border-color-slider-tooltip);
  background: var(--vf-primary);
  color: var(--vf-color-on-primary);
  font-size: var(--vf-font-size-small);
  line-height: var(--vf-line-height-small);
  letter-spacing: var(--vf-letter-spacing-small);
  padding: var(--vf-py-slider-tooltip) var(--vf-px-slider-tooltip);
  border-radius: var(--vf-radius-small);
}

.vf-slider-tooltip.vf-slider-tooltip-sm {
  font-size: var(--vf-font-size-small-sm);
  line-height: var(--vf-line-height-small-sm);
  letter-spacing: var(--vf-letter-spacing-small-sm);
  padding: var(--vf-py-slider-tooltip-sm) var(--vf-px-slider-tooltip-sm);
  border-radius: var(--vf-radius-small-sm);
}

.vf-slider-tooltip.vf-slider-tooltip-lg {
  font-size: var(--vf-font-size-small-lg);
  line-height: var(--vf-line-height-small-lg);
  letter-spacing: var(--vf-letter-spacing-small-lg);
  padding: var(--vf-py-slider-tooltip-lg) var(--vf-px-slider-tooltip-lg);
  border-radius: var(--vf-radius-small-lg);
}

.vf-slider-tooltip-focus .vf-slider-tooltip,
.vf-slider-tooltip-drag .vf-slider-tooltip {
  display: none !important;
}

.vf-slider-tooltip-focus.vf-slider-focused .vf-slider-tooltip:not(.vf-slider-tooltip-hidden),
.vf-slider-tooltip-drag.vf-slider-state-drag .vf-slider-tooltip:not(.vf-slider-tooltip-hidden),
.vf-slider-tooltip-drag .vf-slider-active .vf-slider-tooltip {
  display: block !important;
}

[disabled].vf-slider-target,
[disabled].vf-slider-handle,
[disabled] .vf-slider-handle {
  cursor: not-allowed;
}

.vf-slider-horizontal .vf-slider-tooltip-top {
  transform: translate(-50%, 0);
  left: 50%;
  bottom: calc(var(--vf-slider-handle-size) + var(--vf-slider-tooltip-distance));
}

.vf-slider-horizontal .vf-slider-tooltip-top:before {
  content: "";
  position: absolute;
  left: 50%;
  width: 0;
  height: 0;
  transform: translate(-50%);
  bottom: calc(var(--vf-slider-tooltip-arrow-size) * -2);
  border: var(--vf-slider-tooltip-arrow-size) solid transparent;
  border-top-color: inherit;
}

.vf-slider-horizontal .vf-slider-tooltip-top.vf-slider-tooltip-top-sm {
  bottom: calc(var(--vf-slider-handle-size-sm) + var(--vf-slider-tooltip-distance-sm));
}

.vf-slider-horizontal .vf-slider-tooltip-top.vf-slider-tooltip-top-sm:before {
  bottom: calc(var(--vf-slider-tooltip-arrow-size-sm) * -2);
  border: var(--vf-slider-tooltip-arrow-size-sm) solid transparent;
  border-top-color: inherit;
}

.vf-slider-horizontal .vf-slider-tooltip-top.vf-slider-tooltip-top-lg {
  bottom: calc(var(--vf-slider-handle-size-lg) + var(--vf-slider-tooltip-distance-lg));
}

.vf-slider-horizontal .vf-slider-tooltip-top.vf-slider-tooltip-top-lg:before {
  bottom: calc(var(--vf-slider-tooltip-arrow-size-lg) * -2);
  border: var(--vf-slider-tooltip-arrow-size-lg) solid transparent;
  border-top-color: inherit;
}

.vf-slider-horizontal .vf-slider-origin > .vf-slider-tooltip-top {
  bottom: calc((var(--vf-slider-handle-size) - var(--vf-slider-height)) / 2 + var(--vf-slider-tooltip-distance));
}

.vf-slider-horizontal .vf-slider-origin > .vf-slider-tooltip-top.vf-slider-tooltip-top-sm {
  bottom: calc((var(--vf-slider-handle-size-sm) - var(--vf-slider-height-sm)) / 2 + var(--vf-slider-tooltip-distance-sm));
}

.vf-slider-horizontal .vf-slider-origin > .vf-slider-tooltip-top.vf-slider-tooltip-top-lg {
  bottom: calc((var(--vf-slider-handle-size-lg) - var(--vf-slider-height-lg)) / 2 + var(--vf-slider-tooltip-distance-lg));
}

.vf-slider-horizontal .vf-slider-tooltip-bottom {
  transform: translate(-50%, 0);
  left: 50%;
  top: calc(var(--vf-slider-handle-size) + var(--vf-slider-tooltip-distance));
}

.vf-slider-horizontal .vf-slider-tooltip-bottom:before {
  content: "";
  position: absolute;
  left: 50%;
  width: 0;
  height: 0;
  transform: translate(-50%);
  top: calc(var(--vf-slider-tooltip-arrow-size) * -2);
  border: var(--vf-slider-tooltip-arrow-size) solid transparent;
  border-bottom-color: inherit;
}

.vf-slider-horizontal .vf-slider-tooltip-bottom.vf-slider-tooltip-bottom-sm {
  top: calc(var(--vf-slider-handle-size-sm) + var(--vf-slider-tooltip-distance-sm));
}

.vf-slider-horizontal .vf-slider-tooltip-bottom.vf-slider-tooltip-bottom-sm:before {
  top: calc(var(--vf-slider-tooltip-arrow-size-sm) * -2);
  border: var(--vf-slider-tooltip-arrow-size-sm) solid transparent;
  border-bottom-color: inherit;
}

.vf-slider-horizontal .vf-slider-tooltip-bottom.vf-slider-tooltip-bottom-lg {
  top: calc(var(--vf-slider-handle-size-lg) + var(--vf-slider-tooltip-distance-lg));
}

.vf-slider-horizontal .vf-slider-tooltip-bottom.vf-slider-tooltip-bottom-lg:before {
  top: calc(var(--vf-slider-tooltip-arrow-size-lg) * -2);
  border: var(--vf-slider-tooltip-arrow-size-lg) solid transparent;
  border-bottom-color: inherit;
}

.vf-slider-horizontal .vf-slider-origin > .vf-slider-tooltip-bottom {
  top: calc((var(--vf-slider-handle-size) - var(--vf-slider-height)) / 2 + var(--vf-slider-height) + var(--vf-slider-tooltip-distance));
}

.vf-slider-horizontal .vf-slider-origin > .vf-slider-tooltip-bottom.vf-slider-tooltip-bottom-sm {
  top: calc((var(--vf-slider-handle-size-sm) - var(--vf-slider-height-sm)) / 2 + var(--vf-slider-height-sm) + var(--vf-slider-tooltip-distance-sm));
}

.vf-slider-horizontal .vf-slider-origin > .vf-slider-tooltip-bottom.vf-slider-tooltip-bottom-lg {
  top: calc((var(--vf-slider-handle-size-lg) - var(--vf-slider-height-lg)) / 2 + var(--vf-slider-height-lg) + var(--vf-slider-tooltip-distance-lg));
}

.vf-slider-vertical .vf-slider-tooltip-left {
  transform: translate(0, -50%);
  top: 50%;
  right: calc(var(--vf-slider-handle-size) + var(--vf-slider-tooltip-distance));
}

.vf-slider-vertical .vf-slider-tooltip-left:before {
  content: "";
  position: absolute;
  top: 50%;
  width: 0;
  height: 0;
  transform: translateY(-50%);
  right: calc(var(--vf-slider-tooltip-arrow-size) * -2);
  border: var(--vf-slider-tooltip-arrow-size) solid transparent;
  border-left-color: inherit;
}

.vf-slider-vertical .vf-slider-tooltip-left.vf-slider-tooltip-left-sm {
  right: calc(var(--vf-slider-handle-size-sm) + var(--vf-slider-tooltip-distance-sm));
}

.vf-slider-vertical .vf-slider-tooltip-left.vf-slider-tooltip-left-sm:before {
  right: calc(var(--vf-slider-tooltip-arrow-size-sm) * -2);
  border: var(--vf-slider-tooltip-arrow-size-sm) solid transparent;
  border-left-color: inherit;
}

.vf-slider-vertical .vf-slider-tooltip-left.vf-slider-tooltip-left-lg {
  right: calc(var(--vf-slider-handle-siz-lg) + var(--vf-slider-tooltip-distanc-lg));
}

.vf-slider-vertical .vf-slider-tooltip-left.vf-slider-tooltip-left-lg:before {
  right: calc(var(--vf-slider-tooltip-arrow-size-sm) * -2);
  border: var(--vf-slider-tooltip-arrow-size-sm) solid transparent;
  border-left-color: inherit;
}

.vf-slider-vertical .vf-slider-origin > .vf-slider-tooltip-left {
  right: calc((var(--vf-slider-handle-size) - var(--vf-slider-height)) / 2 + var(--vf-slider-height) + var(--vf-slider-tooltip-distance));
}

.vf-slider-vertical .vf-slider-origin > .vf-slider-tooltip-left.vf-slider-tooltip-left-sm {
  right: calc((var(--vf-slider-handle-size-sm) - var(--vf-slider-height-sm)) / 2 + var(--vf-slider-height-sm) + var(--vf-slider-tooltip-distance-sm));
}

.vf-slider-vertical .vf-slider-origin > .vf-slider-tooltip-left.vf-slider-tooltip-left-lg {
  right: calc((var(--vf-slider-handle-size-lg) - var(--vf-slider-height-lg)) / 2 + var(--vf-slider-height-lg) + var(--vf-slider-tooltip-distance-lg));
}

.vf-slider-vertical .vf-slider-tooltip-right {
  transform: translate(0, -50%);
  top: 50%;
  left: calc(var(--vf-slider-handle-size) + var(--vf-slider-tooltip-distance));
}

.vf-slider-vertical .vf-slider-tooltip-right:before {
  content: "";
  position: absolute;
  top: 50%;
  width: 0;
  height: 0;
  transform: translateY(-50%);
  left: calc(var(--vf-slider-tooltip-arrow-size) * -2);
  border: var(--vf-slider-tooltip-arrow-size) solid transparent;
  border-right-color: inherit;
}

.vf-slider-vertical .vf-slider-tooltip-right.vf-slider-tooltip-right-sm {
  left: calc(var(--vf-slider-handle-size-sm) + var(--vf-slider-tooltip-distance-sm));
}

.vf-slider-vertical .vf-slider-tooltip-right.vf-slider-tooltip-right-sm:before {
  left: calc(var(--vf-slider-tooltip-arrow-size-sm) * -2);
  border: var(--vf-slider-tooltip-arrow-size-sm) solid transparent;
  border-right-color: inherit;
}

.vf-slider-vertical .vf-slider-tooltip-right.vf-slider-tooltip-right-lg {
  left: calc(var(--vf-slider-handle-size-lg) + var(--vf-slider-tooltip-distance-lg));
}

.vf-slider-vertical .vf-slider-tooltip-right.vf-slider-tooltip-right-lg:before {
  left: calc(var(--vf-slider-tooltip-arrow-size-lg) * -2);
  border: var(--vf-slider-tooltip-arrow-size-lg) solid transparent;
  border-right-color: inherit;
}

.vf-slider-vertical .vf-slider-origin > .vf-slider-tooltip-right {
  left: calc((var(--vf-slider-handle-size) - var(--vf-slider-height)) / 2 + var(--vf-slider-tooltip-distance));
}

.vf-slider-vertical .vf-slider-origin > .vf-slider-tooltip-right.vf-slider-tooltip-right-sm {
  left: calc((var(--vf-slider-handle-size-sm) - var(--vf-slider-height-sm)) / 2 + var(--vf-slider-tooltip-distance-sm));
}

.vf-slider-vertical .vf-slider-origin > .vf-slider-tooltip-right.vf-slider-tooltip-right-lg {
  left: calc((var(--vf-slider-handle-size-lg) - var(--vf-slider-height-lg)) / 2 + var(--vf-slider-tooltip-distance-lg));
}

.vf-slider-horizontal .vf-slider-origin > .vf-slider-tooltip {
  transform: translate(50%, 0);
  left: auto;
}

.vf-slider-vertical .vf-slider-origin > .vf-slider-tooltip {
  transform: translate(0, 50%);
  top: auto;
}

.vf-slider-active {
  cursor: grabbing;
}

.vf-slider-draggable {
  cursor: ew-resize;
}

.vf-slider-vertical .vf-slider-draggable {
  cursor: ns-resize;
}`;te(G2);vu.__file="themes/vueform/templates/elements/SliderElement.vue";var wl={};const J2=["innerHTML"],Y2=["href","target","innerHTML"],X2=["href","target"],Z2=["href","target"],e3=["src","alt","title","width","height"],t3=["src","alt","title","width","height"],n3=["innerHTML"];function r3(t,e,n,r,i,l){return t.wrap?(p(),S(N(t.elementLayout),{key:0,ref:"container"},ue({element:f(()=>[k(" If content is HTML "),t.isHtml&&(t.resolvedContent||["img","hr"].indexOf(t.tag)!==-1)?(p(),C(ie,{key:0},[!t.tag&&t.allowHtml?(p(),C("div",V({key:0,class:t.classes.content,innerHTML:t.resolvedContent},t.attrs),null,16,J2)):k("v-if",!0),!t.tag&&!t.allowHtml?(p(),C("div",V({key:1,class:t.classes.content},t.attrs),Re(t.content),17)):k("v-if",!0),t.tag==="a"?(p(),C("div",{key:2,class:h(t.classes.tag)},[t.allowHtml?(p(),C("a",V({key:0,href:t.href,target:t.target},t.attrs,{innerHTML:t.resolvedContent}),null,16,Y2)):(p(),C("a",V({key:1,href:t.href,target:t.target},t.attrs),Re(t.resolvedContent),17,X2))],2)):t.tag==="hr"?(p(),C("div",{key:3,class:h(t.classes.tag)},[d("hr",Kl(Dd(t.attrs)),null,16)],2)):t.tag==="img"?(p(),C("div",{key:4,class:h(t.classes.tag)},[t.href?(p(),C("a",{key:0,href:t.href,target:t.target},[d("img",V({src:t.src,alt:t.alt,title:t.title,width:t.width,height:t.height},t.attrs),null,16,e3)],8,Z2)):(p(),C("img",V({key:1,src:t.src,alt:t.alt,title:t.title,width:t.width,height:t.height},t.attrs),null,16,t3))],2)):t.tag?(p(),C("div",{key:5,class:h(t.classes.tag)},[t.allowHtml?(p(),S(N(t.tag),V({key:0,innerHTML:t.resolvedContent},t.attrs),null,16,["innerHTML"])):(p(),S(N(t.tag),Kl(V({key:1},t.attrs)),{default:f(()=>[ya(Re(t.resolvedContent),1)]),_:1},16))],2)):k("v-if",!0)],64)):t.resolvedContent?(p(),C(ie,{key:1},[k(" If content is component "),(p(),S(N(t.componentContent),{el$:t.el$},null,8,["el$"]))],2112)):(p(),C(ie,{key:2},[k(" If content is a slot "),M(t.$slots,"default",{el$:t.el$},()=>[(p(),S(N(t.slotContent),{el$:t.el$},null,8,["el$"]))])],2112))]),_:2},[de(t.elementSlots,(a,o)=>({name:o,fn:f(()=>[M(t.$slots,o,{el$:t.el$},()=>[(p(),S(N(a),{el$:t.el$},null,8,["el$"]))])])}))]),1536)):t.content&&t.isHtml?(p(),C("div",{key:1,class:h(t.classes.content),innerHTML:t.resolvedContent},null,10,n3)):t.content?(p(),S(N(t.componentContent),{key:2,ref:"container"},null,512)):(p(),C("div",{key:3,class:h(t.classes.container),ref:"container"},[M(t.$slots,"default",{el$:t.el$},()=>[(p(),S(N(t.slotContent),{el$:t.el$},null,8,["el$"]))])],2))}wl.render=r3;wl.__file="themes/blank/templates/elements/StaticElement.vue";var hu={name:"StaticElement",render:wl.render,data(){return{merge:!0,defaultClasses:{container:"vf-contains-link",content:"vf-static",content_sm:"vf-static-sm",content_md:"",content_lg:"vf-static-lg",content_top_1:"vf-static-tag-top-1",content_top_2:"vf-static-tag-top-2",content_top_3:"vf-static-tag-top-3",content_bottom_1:"vf-static-tag-bottom-1",content_bottom_2:"vf-static-tag-bottom-2",content_bottom_3:"vf-static-tag-bottom-3",tag:"vf-static-tag",tag_sm:"vf-static-tag-sm",tag_md:"",tag_lg:"vf-static-tag-lg",tag_top_1:"vf-static-tag-top-1",tag_top_2:"vf-static-tag-top-2",tag_top_3:"vf-static-tag-top-3",tag_bottom_1:"vf-static-tag-bottom-1",tag_bottom_2:"vf-static-tag-bottom-2",tag_bottom_3:"vf-static-tag-bottom-3",tag_left:"vf-static-tag-left",tag_center:"vf-static-tag-center",tag_right:"vf-static-tag-right",tag_p:"vf-static-tag-p",tag_h1:"vf-static-tag-h1",tag_h2:"vf-static-tag-h2",tag_h3:"vf-static-tag-h3",tag_h4:"vf-static-tag-h4",tag_blockquote:"vf-static-tag-blockquote",tag_a:"vf-static-tag-a",tag_hr:"vf-static-tag-hr",tag_img:"vf-static-tag-img",$content:(t,{Size:e,top:n,bottom:r})=>[t.content,t[`content_${e}`],n>=1?t[`content_top_${n}`]:null,r>=1?t[`content_bottom_${r}`]:null],$tag:(t,{Size:e,tag:n,align:r,top:i,bottom:l})=>[t.tag,t[`tag_${e}`],t[`tag_${n}`],r==="left"?t.tag_left:null,r==="center"?t.tag_center:null,r==="right"?t.tag_right:null,i>=1?t[`tag_top_${i}`]:null,l>=1?t[`tag_bottom_${l}`]:null]}}}},i3="/* Styles contained in scss/_static.scss */";te(i3);hu.__file="themes/vueform/templates/elements/StaticElement.vue";var yl={};function a3(t,e,n,r,i,l){const a=J("ElementLabelFloating"),o=J("Multiselect");return p(),S(N(t.elementLayout),{ref:"container"},ue({element:f(()=>[t.hasFloating&&!t.empty?(p(),S(a,{key:0,visible:!t.empty},null,8,["visible"])):k("v-if",!0),k(" @vueform/multiselect copmonent "),De(o,V(t.fieldOptions,{modelValue:t.value,"onUpdate:modelValue":e[0]||(e[0]=s=>t.value=s),classes:t.classes.select,id:t.fieldId,name:t.name,options:t.resolvedOptions,disabled:t.isDisabled,placeholder:t.Placeholder,attrs:t.attrs,aria:t.aria,locale:t.form$.locale$,onSelect:t.handleSelect,onDeselect:t.handleDeselect,onSearchChange:t.handleSearchChange,onTag:t.handleTag,onOpen:t.handleOpen,onClose:t.handleClose,onClear:t.handleClear,onPaste:t.handlePaste,ref:"input"}),ue({_:2},[de({option:"option",noresults:"no-results",nooptions:"no-options",afterlist:"after-list",beforelist:"before-list",placeholder:"placeholder",grouplabel:"group-label",caret:"caret",clear:"clear",spinner:"spinner",default:"default"},(s,u)=>({name:u,fn:f(c=>[M(t.$slots,s,V(c,{el$:t.el$}),()=>[(p(),S(N(t.fieldSlots[s]),V(c,{el$:t.el$}),null,16,["el$"]))])])})),t.fieldOptions.mode=="tags"?{name:"tag",fn:f(({option:s,handleTagRemove:u,disabled:c})=>[M(t.$slots,"tag",{option:s,handleTagRemove:u,disabled:c,el$:t.el$},()=>[(p(),S(N(t.fieldSlots.tag),{option:s,handleTagRemove:u,disabled:c,el$:t.el$},null,8,["option","handleTagRemove","disabled","el$"]))])]),key:"0"}:void 0]),1040,["modelValue","classes","id","name","options","disabled","placeholder","attrs","aria","locale","onSelect","onDeselect","onSearchChange","onTag","onOpen","onClose","onClear","onPaste"])]),_:2},[de(t.elementSlots,(s,u)=>({name:u,fn:f(()=>[M(t.$slots,u,{el$:t.el$},()=>[(p(),S(N(s),{el$:t.el$},null,8,["el$"]))])])}))]),1536)}yl.render=a3;yl.__file="themes/blank/templates/elements/TagsElement.vue";var mu={name:"TagsElement",render:yl.render,components:{Multiselect:Br},data(){return{merge:!0,defaultClasses:{container:"vf-text-type",select:{tags:"vf-multiselect-tags",tags_sm:"vf-multiselect-tags-sm",tags_md:"",tags_lg:"vf-multiselect-tags-lg",tag:"vf-multiselect-tag",tag_sm:"vf-multiselect-tag-sm",tag_md:"",tag_lg:"vf-multiselect-tag-lg",tagDisabled:"vf-multiselect-tag-disabled",tagDisabled_sm:"",tagDisabled_md:"",tagDisabled_lg:"",tagWrapper:"vf-multiselect-tag-wrapper",tagWrapperBreak:"vf-multiselect-tag-wrapper-break",tagRemove:"vf-multiselect-tag-remove",tagRemove_sm:"vf-multiselect-tag-remove-sm",tagRemove_md:"",tagRemove_lg:"vf-multiselect-tag-remove-lg",tagRemoveIcon:"vf-multiselect-tag-remove-icon",tagsSearchWrapper:"vf-multiselect-tags-search-wrapper",tagsSearchWrapper_sm:"",tagsSearchWrapper_md:"",tagsSearchWrapper_lg:"",tagsSearch:"vf-multiselect-tags-search",tagsSearch_sm:"vf-multiselect-tags-search-sm",tagsSearch_md:"",tagsSearch_lg:"vf-multiselect-tags-search-lg",tagsSearchCopy:"vf-multiselect-tags-search-copy",container:"vf-multiselect",container_enabled:"",container_disabled:"vf-multiselect-disabled",container_success:"vf-multiselect-success",container_danger:"vf-multiselect-danger",container_sm:"vf-multiselect-sm",container_md:"",container_lg:"vf-multiselect-lg",containerDisabled:"",containerOpen:"vf-multiselect-open",containerOpenTop:"vf-multiselect-open-top",containerActive:"vf-multiselect-active",containerActive_enabled:"",wrapper:"vf-multiselect-wrapper",wrapper_sm:"vf-multiselect-wrapper-sm",wrapper_md:"",wrapper_lg:"vf-multiselect-wrapper-lg",search:"vf-multiselect-search",search_sm:"vf-multiselect-search-sm",search_md:"",search_lg:"vf-multiselect-search-lg",placeholder:"vf-multiselect-placeholder",placeholder_sm:"vf-multiselect-placeholder-sm",placeholder_md:"",placeholder_lg:"vf-multiselect-placeholder-lg",caret:"vf-multiselect-caret",caret_sm:"vf-multiselect-caret-sm",caret_md:"",caret_lg:"vf-multiselect-caret-lg",caretOpen:"vf-multiselect-caret-open",clear:"vf-multiselect-clear",clear_sm:"vf-multiselect-clear-sm",clear_md:"",clear_lg:"vf-multiselect-clear-lg",clearIcon:"vf-multiselect-clear-icon",spinner:"vf-multiselect-spinner",spinner_sm:"vf-multiselect-spinner-sm",spinner_md:"",spinner_lg:"vf-multiselect-spinner-lg",infinite:"vf-multiselect-infinite",infinite_sm:"vf-multiselect-infinite-sm",infinite_md:"",infinite_lg:"vf-multiselect-infinite-lg",infiniteSpinner:"vf-multiselect-infinite-spinner",dropdown:"vf-multiselect-dropdown",dropdown_sm:"vf-multiselect-dropdown-sm",dropdown_md:"",dropdown_lg:"vf-multiselect-dropdown-lg",dropdownTop:"vf-multiselect-dropdown-top",dropdownTop_sm:"vf-multiselect-dropdown-top-sm",dropdownTop_md:"",dropdownTop_lg:"vf-multiselect-dropdown-top-lg",dropdownHidden:"vf-multiselect-dropdown-hidden",options:"vf-multiselect-options",optionsTop:"vf-multiselect-options-top",group:"vf-multiselect-group",groupLabel:"vf-multiselect-group-label",groupLabel_sm:"vf-multiselect-group-label-sm",groupLabel_md:"",groupLabel_lg:"vf-multiselect-group-label-lg",groupLabelPointable:"vf-multiselect-group-label-pointable",groupLabelPointed:"vf-multiselect-group-label-pointed",groupLabelSelected:"vf-multiselect-group-label-selected",groupLabelDisabled:"vf-multiselect-group-label-disabled",groupLabelSelectedPointed:"vf-multiselect-group-label-selected vf-multiselect-group-label-pointed",groupLabelSelectedDisabled:"vf-multiselect-group-label-selected vf-multiselect-group-label-disabled",groupOptions:"vf-multiselect-group-options",option:"vf-multiselect-option",option_sm:"vf-multiselect-option-sm",option_md:"",option_lg:"vf-multiselect-option-lg",optionPointed:"vf-multiselect-option-pointed",optionSelected:"vf-multiselect-option-selected",optionDisabled:"vf-multiselect-option-disabled",optionSelectedPointed:"vf-multiselect-option-selected vf-multiselect-option-pointed",optionSelectedDisabled:"vf-multiselect-option-selected vf-multiselect-option-disabled",noOptions:"vf-multiselect-no-options",noOptions_sm:"vf-multiselect-no-options-sm",noOptions_md:"",noOptions_lg:"vf-multiselect-no-options-lg",noResults:"vf-multiselect-no-results",noResults_sm:"vf-multiselect-no-results-sm",noResults_md:"",noResults_lg:"vf-multiselect-no-results-lg",fakeInput:"vf-multiselect-fake-input",assist:"vf-assistive-text",spacer:"vf-multiselect-spacer",spacer_sm:"vf-multiselect-spacer-sm",spacer_md:"",spacer_lg:"vf-multiselect-spacer-lg",$container:(t,{Size:e,isDanger:n,isSuccess:r,isDisabled:i})=>[t.select.container,t.select[`container_${e}`],i?t.select.container_disabled:null,!i&&!r&&!n?t.select.container_enabled:null,!i&&n?t.select.container_danger:null,!i&&r?t.select.container_success:null],$containerActive:(t,{Size:e,isDanger:n,isSuccess:r,isDisabled:i})=>[t.select.containerActive,t.select[`container_${e}`],!i&&!r&&!n?t.select.containerActive_enabled:null],$wrapper:(t,{Size:e})=>[t.select.wrapper,t.select[`wrapper_${e}`]],$search:(t,{Size:e})=>[t.select.search,t.select[`search_${e}`]],$placeholder:(t,{Size:e})=>[t.select.placeholder,t.select[`placeholder_${e}`]],$caret:(t,{Size:e})=>[t.select.caret,t.select[`caret_${e}`]],$clear:(t,{Size:e})=>[t.select.clear,t.select[`clear_${e}`]],$spinner:(t,{Size:e})=>[t.select.spinner,t.select[`spinner_${e}`]],$infinite:(t,{Size:e})=>[t.select.infinite,t.select[`infinite_${e}`]],$dropdown:(t,{Size:e})=>[t.select.dropdown,t.select[`dropdown_${e}`]],$dropdownTop:(t,{Size:e})=>[t.select.dropdownTop,t.select[`dropdownTop_${e}`]],$groupLabel:(t,{Size:e})=>[t.select.groupLabel,t.select[`groupLabel_${e}`]],$option:(t,{Size:e})=>[t.select.option,t.select[`option_${e}`]],$spacer:(t,{Size:e})=>[t.select.spacer,t.select[`spacer_${e}`]],$noOptions:(t,{Size:e})=>[t.select.noOptions,t.select[`noOptions_${e}`]],$noResults:(t,{Size:e})=>[t.select.noResults,t.select[`noResults_${e}`]],$tags:(t,{Size:e})=>[t.select.tags,t.select[`tags_${e}`]],$tag:(t,{Size:e})=>[t.select.tag,t.select[`tag_${e}`]],$tagDisabled:(t,{Size:e})=>[t.select.tagDisabled,t.select[`tagDisabled_${e}`]],$tagRemove:(t,{Size:e})=>[t.select.tagRemove,t.select[`tagRemove_${e}`]],$tagsSearchWrapper:(t,{Size:e})=>[t.select.tagsSearchWrapper,t.select[`tagsSearchWrapper_${e}`]],$tagsSearch:(t,{Size:e})=>[t.select.tagsSearch,t.select[`tagsSearch_${e}`]]},$input:(t,{isDisabled:e,Size:n,isDanger:r,isSuccess:i})=>[t.input,t[`input_${n}`],e?t.input_disabled:null,!e&&!i&&!r?t.input_enabled:null,!e&&r?t.input_danger:null,!e&&i?t.input_success:null],$inputWrapper:(t,{Size:e})=>[t.inputWrapper,t[`inputWrapper_${e}`]]}}}},l3=`/* Some styles are contained in SelectElement.vue */

.vf-multiselect-tags {
  flex-grow: 1;
  flex-shrink: 1;
  display: flex;
  flex-wrap: wrap;
  margin: var(--vf-space-tags) 0 0;
  padding-left: var(--vf-py-input);
  align-items: center;
  min-width: 0;
}

.vf-multiselect-tags.vf-multiselect-tags-sm {
  padding-left: var(--vf-py-input-sm);
}

.vf-multiselect-tags.vf-multiselect-tags-lg {
  padding-left: var(--vf-py-input-lg);
}

.vf-floating-wrapper ~ .vf-multiselect-tags,
.vf-floating-wrapper ~ div .vf-multiselect-tags {
  padding-left: var(--vf-px-input);
  margin: calc(var(--vf-space-tags) + var(--vf-floating-top) + 0.34375rem - 1px) 0 0;
}

.vf-floating-wrapper ~ .vf-multiselect-tags-sm,
.vf-floating-wrapper ~ div .vf-multiselect-tags-sm {
  padding-left: var(--vf-px-input-sm);
  margin: calc(var(--vf-space-tags-sm) + var(--vf-floating-top-sm) + 0.34375rem - 1px) 0 0;
}

.vf-floating-wrapper ~ .vf-multiselect-tags-lg,
.vf-floating-wrapper ~ div .vf-multiselect-tags-lg {
  padding-left: var(--vf-px-input-lg);
  margin: calc(var(--vf-space-tags-lg) + var(--vf-floating-top-lg) + 0.34375rem - 1px) 0 0;
}

.vf-multiselect-tag {
  background: var(--vf-bg-tag);
  color: var(--vf-color-tag);
  border-style: solid;
  border-width: var(--vf-border-width-tag);
  border-color: var(--vf-border-color-tag);
  font-size: var(--vf-font-size-small);
  line-height: var(--vf-line-height-small);
  letter-spacing: var(--vf-letter-spacing-small);
  font-weight: 600;
  padding: var(--vf-py-tag) 0 var(--vf-py-tag) var(--vf-px-tag);
  border-radius: var(--vf-radius-tag);
  margin-right: var(--vf-space-tags);
  margin-bottom: var(--vf-space-tags);
  display: flex;
  align-items: center;
  white-space: nowrap;
  min-width: 0;
}

.vf-multiselect-tag.vf-multiselect-tag-disabled {
  padding-right: var(--vf-px-tag);
  opacity: 0.5;
}

.vf-multiselect-tag.vf-multiselect-tag-sm {
  font-size: var(--vf-font-size-small-sm);
  line-height: var(--vf-line-height-small-sm);
  letter-spacing: var(--vf-letter-spacing-small-sm);
  border-radius: var(--vf-radius-tag-sm);
  padding: var(--vf-py-tag-sm) 0 var(--vf-py-tag-sm) var(--vf-px-tag-sm);
}

.vf-multiselect-tag.vf-multiselect-tag-sm.vf-multiselect-tag-disabled {
  padding-right: var(--vf-px-tag-sm);
}

.vf-multiselect-tag.vf-multiselect-tag-lg {
  font-size: var(--vf-font-size-small-lg);
  line-height: var(--vf-line-height-small-lg);
  letter-spacing: var(--vf-letter-spacing-small-lg);
  border-radius: var(--vf-radius-tag-lg);
  padding: var(--vf-py-tag-lg) 0 var(--vf-py-tag-lg) var(--vf-px-tag-lg);
}

.vf-multiselect-tag.vf-multiselect-tag-lg.vf-multiselect-tag-disabled {
  padding-right: var(--vf-px-tag-lg);
}

.vf-multiselect-tag-wrapper {
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}

.vf-multiselect-tag-wrapper-break {
  white-space: normal;
  word-break: break-all;
}

.vf-multiselect-tag-remove {
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0.25rem;
  margin: 0 0.125rem;
  border-radius: var(--vf-radius-tag);
}

.vf-multiselect-tag-remove:hover {
  background: rgba(0, 0, 0, 0.1);
}

.vf-multiselect-tag-remove.vf-multiselect-tag-remove-sm {
  border-radius: var(--vf-radius-tag-sm);
}

.vf-multiselect-tag-remove.vf-multiselect-tag-remove-lg {
  border-radius: var(--vf-radius-tag-lg);
}

.vf-multiselect-tag-remove-icon {
  mask-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 320 512' fill='currentColor' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M207.6 256l107.72-107.72c6.23-6.23 6.23-16.34 0-22.58l-25.03-25.03c-6.23-6.23-16.34-6.23-22.58 0L160 208.4 52.28 100.68c-6.23-6.23-16.34-6.23-22.58 0L4.68 125.7c-6.23 6.23-6.23 16.34 0 22.58L112.4 256 4.68 363.72c-6.23 6.23-6.23 16.34 0 22.58l25.03 25.03c6.23 6.23 16.34 6.23 22.58 0L160 303.6l107.72 107.72c6.23 6.23 16.34 6.23 22.58 0l25.03-25.03c6.23-6.23 6.23-16.34 0-22.58L207.6 256z'%3E%3C/path%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 320 512' fill='currentColor' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M207.6 256l107.72-107.72c6.23-6.23 6.23-16.34 0-22.58l-25.03-25.03c-6.23-6.23-16.34-6.23-22.58 0L160 208.4 52.28 100.68c-6.23-6.23-16.34-6.23-22.58 0L4.68 125.7c-6.23 6.23-6.23 16.34 0 22.58L112.4 256 4.68 363.72c-6.23 6.23-6.23 16.34 0 22.58l25.03 25.03c6.23 6.23 16.34 6.23 22.58 0L160 303.6l107.72 107.72c6.23 6.23 16.34 6.23 22.58 0l25.03-25.03c6.23-6.23 6.23-16.34 0-22.58L207.6 256z'%3E%3C/path%3E%3C/svg%3E");
  mask-position: center;
  -webkit-mask-position: center;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  mask-size: contain;
  -webkit-mask-size: contain;
  background-color: currentColor;
  display: inline-block;
  width: 0.75rem;
  height: 0.75rem;
}

.vf-multiselect-tags-search-wrapper {
  display: inline-block;
  position: relative;
  margin: 0 var(--vf-space-tags) var(--vf-space-tags);
  flex-grow: 1;
  flex-shrink: 1;
  height: 100%;
  max-width: 100%;
}

.vf-multiselect-tags-search-copy {
  visibility: hidden;
  white-space: pre-wrap;
  display: inline-block;
  height: 1px;
  width: 100%;
}

.vf-multiselect-tags-search {
  position: absolute;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  border: 0;
  -webkit-appearance: none;
     -moz-appearance: none;
          appearance: none;
  outline: none;
  padding: 0;
  font-size: inherit;
  font-family: inherit;
  box-sizing: border-box;
  width: 100%;
  appearance: none;
  font-size: var(--vf-font-size);
  line-height: var(--vf-line-height);
  letter-spacing: var(--vf-letter-spacing);
  background-color: transparent;
  padding-right: 0.5rem;
}

.vf-multiselect-tags-search::-webkit-search-decoration, .vf-multiselect-tags-search::-webkit-search-cancel-button, .vf-multiselect-tags-search::-webkit-search-results-button, .vf-multiselect-tags-search::-webkit-search-results-decoration {
  -webkit-appearance: none;
}

.vf-multiselect-tags-search.vf-multiselect-tags-search-sm {
  font-size: var(--vf-font-size-sm);
  line-height: var(--vf-line-height-sm);
  letter-spacing: var(--vf-letter-spacing-sm);
}

.vf-multiselect-tags-search.vf-multiselect-tags-search-lg {
  font-size: var(--vf-font-size-lg);
  line-height: var(--vf-line-height-lg);
  letter-spacing: var(--vf-letter-spacing-lg);
}

[dir=rtl] .vf-multiselect-tags {
  padding-left: 0;
  padding-right: var(--vf-py-input);
}

[dir=rtl] .vf-multiselect-tags.vf-multiselect-tags-sm {
  padding-right: var(--vf-py-input-sm);
}

[dir=rtl] .vf-multiselect-tags.vf-multiselect-tags-lg {
  padding-right: var(--vf-py-input-lg);
}

[dir=rtl] .vf-floating-wrapper ~ .vf-multiselect-tags,
[dir=rtl] .vf-floating-wrapper ~ div .vf-multiselect-tags {
  padding-left: 0;
  padding-right: var(--vf-px-input);
}

[dir=rtl] .vf-floating-wrapper ~ .vf-multiselect-tags-sm,
[dir=rtl] .vf-floating-wrapper ~ div .vf-multiselect-tags-sm {
  padding-left: 0;
  padding-right: var(--vf-px-input-sm);
}

[dir=rtl] .vf-floating-wrapper ~ .vf-multiselect-tags-lg,
[dir=rtl] .vf-floating-wrapper ~ div .vf-multiselect-tags-lg {
  padding-left: 0;
  padding-right: var(--vf-px-input-lg);
}

[dir=rtl] .vf-multiselect-tag {
  padding: var(--vf-py-tag) var(--vf-px-tag) var(--vf-py-tag) 0;
  margin-right: 0;
  margin-left: var(--vf-space-tags);
}

[dir=rtl] .vf-multiselect-tag.is-disabled {
  padding-left: ar(--vf-px-tag);
}`;te(l3);mu.__file="themes/vueform/templates/elements/TagsElement.vue";var bi={};const o3=["value","name","id","placeholder","disabled","readonly","rows","data-autogrow"];function s3(t,e,n,r,i,l){const a=J("ElementAddon"),o=J("ElementLabelFloating"),s=J("ElementLoader");return p(),S(N(t.elementLayout),{ref:"container"},ue({element:f(()=>[d("div",{class:h(t.classes.inputContainer)},[t.hasAddonBefore?(p(),S(a,{key:0,type:"before"},{default:f(()=>[M(t.$slots,"addon-before",{},()=>[(p(),S(N(t.fieldSlots["addon-before"]),{el$:t.el$},null,8,["el$"]))])]),_:3})):k("v-if",!0),t.hasAddonAfter?(p(),S(a,{key:1,type:"after"},{default:f(()=>[M(t.$slots,"addon-after",{},()=>[(p(),S(N(t.fieldSlots["addon-after"]),{el$:t.el$},null,8,["el$"]))])]),_:3})):k("v-if",!0),t.hasFloating&&!t.empty?(p(),S(o,{key:2,visible:!t.empty},null,8,["visible"])):k("v-if",!0),Te(De(s,null,null,512),[[Ve,t.pending]]),d("textarea",V({value:t.model,name:t.name,id:t.fieldId,class:t.classes.input,placeholder:t.Placeholder,disabled:t.isDisabled,readonly:t.isReadonly,rows:t.rows},{...t.attrs,...t.aria},{"data-autogrow":t.autogrow||void 0,onKeydown:e[0]||(e[0]=(...u)=>t.handleKeydown&&t.handleKeydown(...u)),onKeyup:e[1]||(e[1]=(...u)=>t.handleKeyup&&t.handleKeyup(...u)),onKeypress:e[2]||(e[2]=(...u)=>t.handleKeypress&&t.handleKeypress(...u)),onInput:e[3]||(e[3]=(...u)=>t.handleInput&&t.handleInput(...u)),onBlur:e[4]||(e[4]=(...u)=>t.handleBlur&&t.handleBlur(...u)),onFocus:e[5]||(e[5]=(...u)=>t.handleFocus&&t.handleFocus(...u)),ref:"input"}),null,16,o3)],2)]),_:2},[de(t.elementSlots,(u,c)=>({name:c,fn:f(()=>[M(t.$slots,c,{el$:t.el$},()=>[(p(),S(N(u),{el$:t.el$},null,8,["el$"]))])])}))]),1536)}bi.render=s3;bi.__file="themes/blank/templates/elements/TextareaElement.vue";var gu={name:"TextareaElement",render:bi.render,data(){return{merge:!0,defaultClasses:{container:"vf-text-type",inputContainer:"vf-input-group vf-input-group-textarea",inputContainer_sm:"vf-input-group-sm",inputContainer_md:"",inputContainer_lg:"vf-input-group-lg",inputContainer_default:"",inputContainer_disabled:"vf-input-group-disabled",inputContainer_focused:"vf-input-group-focused",inputContainer_success:"vf-input-group-success",inputContainer_danger:"vf-input-group-danger",input:"vf-input-field",input_sm:"",input_md:"",input_lg:"",input_enabled:"",input_disabled:"",input_focused:"",input_success:"",input_danger:"",$inputContainer:(t,{isDisabled:e,Size:n,isSuccess:r,isDanger:i,focused:l})=>[t.inputContainer,t[`inputContainer_${n}`],e?t.inputContainer_disabled:null,!e&&!r&&!i?t.inputContainer_default:null,!e&&l?t.inputContainer_focused:null,!e&&r?t.inputContainer_success:null,!e&&i?t.inputContainer_danger:null],$input:(t,{isDisabled:e,Size:n,isSuccess:r,isDanger:i,focused:l})=>[t.input,t[`input_${n}`],e?t.input_disabled:null,!e&&!r&&!i&&!l?t.input_enabled:null,!e&&l&&!r&&!i?t.input_focused:null,!e&&i?t.input_danger:null,!e&&r?t.input_success:null]}}}},u3="/* Some styles are contained in Vueform.vue */";te(u3);gu.__file="themes/vueform/templates/elements/TextareaElement.vue";var wi={};const d3=["value","type","name","id","placeholder","autocomplete","disabled","readonly"];function c3(t,e,n,r,i,l){const a=J("ElementAddon"),o=J("ElementLabelFloating"),s=J("ElementLoader");return p(),S(N(t.elementLayout),{ref:"container"},ue({element:f(()=>[d("div",{class:h(t.classes.inputContainer)},[t.hasAddonBefore?(p(),S(a,{key:0,type:"before"},{default:f(()=>[M(t.$slots,"addon-before",{},()=>[(p(),S(N(t.fieldSlots["addon-before"]),{el$:t.el$},null,8,["el$"]))])]),_:3})):k("v-if",!0),t.hasAddonAfter?(p(),S(a,{key:1,type:"after"},{default:f(()=>[M(t.$slots,"addon-after",{},()=>[(p(),S(N(t.fieldSlots["addon-after"]),{el$:t.el$},null,8,["el$"]))])]),_:3})):k("v-if",!0),t.hasFloating&&!t.empty?(p(),S(o,{key:2,visible:!t.empty},null,8,["visible"])):k("v-if",!0),t.isLoading?(p(),S(s,{key:3})):k("v-if",!0),d("input",V({value:t.model,type:t.inputType,name:t.name,id:t.fieldId,class:t.classes.input,placeholder:t.Placeholder,autocomplete:t.autocomplete,disabled:t.isDisabled,readonly:t.isReadonly},{...t.attrs,...t.aria},{onKeydown:e[0]||(e[0]=(...u)=>t.handleKeydown&&t.handleKeydown(...u)),onKeyup:e[1]||(e[1]=(...u)=>t.handleKeyup&&t.handleKeyup(...u)),onKeypress:e[2]||(e[2]=(...u)=>t.handleKeypress&&t.handleKeypress(...u)),onInput:e[3]||(e[3]=(...u)=>t.handleInput&&t.handleInput(...u)),onSelect:e[4]||(e[4]=(...u)=>t.handleInput&&t.handleInput(...u)),onBlur:e[5]||(e[5]=(...u)=>t.handleBlur&&t.handleBlur(...u)),onFocus:e[6]||(e[6]=(...u)=>t.handleFocus&&t.handleFocus(...u)),ref:"input"}),null,16,d3)],2)]),_:2},[de(t.elementSlots,(u,c)=>({name:c,fn:f(()=>[M(t.$slots,c,{el$:t.el$},()=>[(p(),S(N(u),{el$:t.el$},null,8,["el$"]))])])}))]),1536)}wi.render=c3;wi.__file="themes/blank/templates/elements/TextElement.vue";var bu={name:"TextElement",render:wi.render,data(){return{merge:!0,defaultClasses:{container:"vf-text-type",inputContainer:"vf-input-group",inputContainer_sm:"vf-input-group-sm",inputContainer_md:"",inputContainer_lg:"vf-input-group-lg",inputContainer_default:"",inputContainer_disabled:"vf-input-group-disabled",inputContainer_focused:"vf-input-group-focused",inputContainer_success:"vf-input-group-success",inputContainer_danger:"vf-input-group-danger",input:"vf-input-field",input_sm:"",input_md:"",input_lg:"",input_enabled:"",input_disabled:"",input_focused:"",input_success:"",input_danger:"",$inputContainer:(t,{isDisabled:e,Size:n,isSuccess:r,isDanger:i,focused:l})=>[t.inputContainer,t[`inputContainer_${n}`],e?t.inputContainer_disabled:null,!e&&!r&&!i?t.inputContainer_default:null,!e&&l?t.inputContainer_focused:null,!e&&r?t.inputContainer_success:null,!e&&i?t.inputContainer_danger:null],$input:(t,{isDisabled:e,Size:n,isSuccess:r,isDanger:i,focused:l})=>[t.input,t[`input_${n}`],e?t.input_disabled:null,!e&&!r&&!i&&!l?t.input_enabled:null,!e&&l&&!r&&!i?t.input_focused:null,!e&&i?t.input_danger:null,!e&&r?t.input_success:null]}}}},p3="/* Some styles are contained in Vueform.vue */";te(p3);bu.__file="themes/vueform/templates/elements/TextElement.vue";function f3(t,e,n){const{value:r,modelValue:i,falseValue:l,trueValue:a,disabled:o}=rt(t),s=i&&i.value!==void 0?i:r,u=j(()=>s.value===a.value),c=L=>{e.emit("input",L),e.emit("update:modelValue",L),e.emit("change",L)},m=()=>{c(a.value)},E=()=>{c(l.value)},g=L=>{c(L.target.checked?a.value:l.value)},b=()=>{o.value||(u.value?E():m())};return[null,void 0,!1,0,"0","off"].indexOf(s.value)!==-1&&[l.value,a.value].indexOf(s.value)===-1&&E(),[!0,1,"1","on"].indexOf(s.value)!==-1&&[l.value,a.value].indexOf(s.value)===-1&&m(),{externalValue:s,checked:u,update:c,check:m,uncheck:E,handleInput:g,handleClick:b}}function v3(t,e,n){const{trueValue:r,falseValue:i,onLabel:l,offLabel:a}=rt(t),o=n.checked,s=n.update;return{label:j(()=>{let g=o.value?l.value:a.value;return g||(g="&nbsp;"),g}),toggle:()=>{s(o.value?i.value:r.value)},on:()=>{s(r.value)},off:()=>{s(i.value)}}}function h3(t,e,n){const r=rt(t),i=r.disabled,l=n.checked,a=j(()=>({container:"toggle-container",toggle:"toggle",toggleOn:"toggle-on",toggleOff:"toggle-off",toggleOnDisabled:"toggle-on-disabled",toggleOffDisabled:"toggle-off-disabled",handle:"toggle-handle",handleOn:"toggle-handle-on",handleOff:"toggle-handle-off",handleOnDisabled:"toggle-handle-on-disabled",handleOffDisabled:"toggle-handle-off-disabled",label:"toggle-label",...r.classes.value}));return{classList:j(()=>({container:a.value.container,toggle:[a.value.toggle,i.value?l.value?a.value.toggleOnDisabled:a.value.toggleOffDisabled:l.value?a.value.toggleOn:a.value.toggleOff],handle:[a.value.handle,i.value?l.value?a.value.handleOnDisabled:a.value.handleOffDisabled:l.value?a.value.handleOn:a.value.handleOff],label:a.value.label}))}}function m3(t,e,n){const{disabled:r}=rt(t),i=n.check,l=n.uncheck,a=n.checked;return{handleSpace:()=>{r.value||(a.value?l():i())}}}const g3={value:{validator:function(t){return e=>["number","string","boolean"].indexOf(typeof e)!==-1||e===null||e===void 0},required:!1},modelValue:{validator:function(t){return e=>["number","string","boolean"].indexOf(typeof e)!==-1||e===null||e===void 0},required:!1}};var kl={name:"Toggle",emits:["input","update:modelValue","change"],props:{...g3,id:{type:[String,Number],required:!1,default:"toggle"},name:{type:[String,Number],required:!1,default:"toggle"},disabled:{type:Boolean,required:!1,default:!1},required:{type:Boolean,required:!1,default:!1},falseValue:{type:[String,Number,Boolean],required:!1,default:!1},trueValue:{type:[String,Number,Boolean],required:!1,default:!0},onLabel:{type:[String,Object],required:!1,default:""},offLabel:{type:[String,Object],required:!1,default:""},classes:{type:Object,required:!1,default:()=>({})},labelledby:{type:String,required:!1},describedby:{type:String,required:!1},aria:{required:!1,type:Object,default:()=>({})}},setup(t,e){const n=f3(t,e),r=v3(t,e,{checked:n.checked,update:n.update}),i=h3(t,e,{checked:n.checked}),l=m3(t,e,{check:n.check,uncheck:n.uncheck,checked:n.checked});return{...n,...i,...r,...l}}};const b3=["tabindex","aria-checked","aria-describedby","aria-labelledby"],w3=["id","name","value","checked","disabled"],y3=["innerHTML"],k3=["checked"];function C3(t,e,n,r,i,l){return p(),C("div",V({class:t.classList.container,tabindex:n.disabled?void 0:0,"aria-checked":t.checked,"aria-describedby":n.describedby,"aria-labelledby":n.labelledby,role:"switch"},n.aria,{onKeypress:e[1]||(e[1]=Ue(Le((...a)=>t.handleSpace&&t.handleSpace(...a),["prevent"]),["space"]))}),[Te(d("input",{type:"checkbox",id:n.id,name:n.name,value:n.trueValue,checked:t.checked,disabled:n.disabled},null,8,w3),[[Ve,!1]]),d("div",{class:h(t.classList.toggle),onClick:e[0]||(e[0]=(...a)=>t.handleClick&&t.handleClick(...a))},[d("span",{class:h(t.classList.handle)},null,2),M(t.$slots,"label",{checked:t.checked,classList:t.classList},()=>[d("span",{class:h(t.classList.label),innerHTML:t.label},null,10,y3)]),n.required?(p(),C("input",{key:0,type:"checkbox",style:{appearance:"none",height:"1px",margin:"0",padding:"0",fontSize:"0",background:"transparent",position:"absolute",width:"100%",bottom:"0",outline:"none"},checked:t.checked,"aria-hidden":"true",tabindex:"-1",required:""},null,8,k3)):k("v-if",!0)],2)],16,b3)}kl.render=C3;kl.__file="node_modules/@vueform/toggle/src/Toggle.vue";var Cl={};const E3=["innerHTML"];function A3(t,e,n,r,i,l){const a=J("Toggle");return p(),S(N(t.elementLayout),{ref:"container"},ue({element:f(()=>[d("div",{class:h(t.classes.wrapper)},[k(" @vueform/toggle component "),De(a,V({value:t.value,modelValue:t.value},t.fieldOptions,{classes:t.classes.toggle,name:t.name,id:t.fieldId,aria:t.aria,onInput:t.handleChange,ref:"input"}),null,16,["value","modelValue","classes","name","id","aria","onInput"]),!t.standalone&&t.Text?(p(),C("span",{key:0,class:h(t.classes.text),innerHTML:t.Text},null,10,E3)):t.standalone?k("v-if",!0):(p(),C("span",{key:1,class:h(t.classes.text)},[M(t.$slots,"default",{el$:t.el$},()=>[(p(),S(N(t.fieldSlots.default),{el$:t.el$},null,8,["el$"]))])],2))],2)]),_:2},[de(t.elementSlots,(o,s)=>({name:s,fn:f(()=>[M(t.$slots,s,{el$:t.el$},()=>[(p(),S(N(o),{el$:t.el$},null,8,["el$"]))])])}))]),1536)}Cl.render=A3;Cl.__file="themes/blank/templates/elements/ToggleElement.vue";var wu={name:"ToggleElement",render:Cl.render,components:{Toggle:kl},data(){return{merge:!0,defaultClasses:{container:"vf-contains-link",wrapper:"vf-toggle-wrapper",wrapper_left:"vf-toggle-wrapper-left",wrapper_right:"vf-toggle-wrapper-right",text:"vf-toggle-text",text_sm:"vf-toggle-text-sm",text_md:"",text_lg:"vf-toggle-text-lg",text_left:"vf-toggle-text-left",text_right:"vf-toggle-text-right",toggle:{container:"vf-toggle-container",container_enabled:"",container_disabled:"vf-toggle-container-disabled",toggle:"vf-toggle",toggle_sm:"vf-toggle-sm",toggle_md:"",toggle_lg:"vf-toggle-lg",toggleOn:"vf-toggle-on",toggleOff:"vf-toggle-off",toggleOnDisabled:"vf-toggle-on-disabled",toggleOffDisabled:"vf-toggle-off-disabled",handle:"vf-toggle-handle",handle_sm:"vf-toggle-handle-sm",handle_md:"",handle_lg:"vf-toggle-handle-lg",handleOn:"vf-toggle-handle-on",handleOff:"vf-toggle-handle-off",handleOnDisabled:"vf-toggle-handle-on-disabled",handleOffDisabled:"vf-toggle-handle-off-disabled",label:"vf-toggle-label",label_sm:"vf-toggle-label-sm",label_md:"",label_lg:"vf-toggle-label-lg",$container:(t,{Size:e,isDisabled:n})=>[t.toggle.container,t.toggle[`container_${e}`],n?t.toggle.container_disabled:t.toggle.container_enabled],$toggle:(t,{Size:e})=>[t.toggle.toggle,t.toggle[`toggle_${e}`]],$handle:(t,{Size:e})=>[t.toggle.handle,t.toggle[`handle_${e}`]],$label:(t,{Size:e})=>[t.toggle.label,t.toggle[`label_${e}`]]},$text:(t,{Size:e,align:n})=>[t.text,t[`text_${e}`],n==="left"?t.text_left:null,n==="right"?t.text_right:null],$wrapper:(t,{align:e})=>[t.wrapper,e==="left"?t.wrapper_left:null,e==="right"?t.wrapper_right:null]}}}},L3=`.vf-toggle-wrapper {
  display: flex;
  align-items: flex-start;
  width: 100%;
}

.vf-toggle-text {
  margin-left: var(--vf-space-checkbox);
}

.vf-toggle-text.vf-toggle-text-sm {
  margin-left: var(--vf-space-checkbox-sm);
}

.vf-toggle-text.vf-toggle-text-lg {
  margin-left: var(--vf-space-checkbox-lg);
}

/* @vueform/toggle styles */

.vf-toggle-container {
  display: inline-block;
  outline: 0px solid var(--vf-ring-color);
  outline-offset: 0;
  border-radius: 9999px;
  transition: box-shadow 0.15s ease-in-out, color 0.15s ease-in-out, background-color 0.15s ease-in-out, border-color 0.15s ease-in-out;
  box-shadow: var(--vf-shadow-handles);
}

.vf-toggle-container:hover:not(.vf-toggle-container-disabled) {
  box-shadow: var(--vf-shadow-handles-hover);
}

.vf-toggle-container:focus {
  box-shadow: var(--vf-shadow-handles-focus);
  outline: var(--vf-ring-width) solid var(--vf-ring-color);
}

.vf-toggle-container.vf-toggle-container-disabled {
  opacity: 0.5;
  cursor: not-allowed;
}

.vf-toggle {
  display: flex;
  border-radius: 999px;
  position: relative;
  cursor: pointer;
  transition: 0.3s all;
  align-items: center;
  box-sizing: content-box !important;
  border-width: var(--vf-border-width-toggle);
  border-style: solid;
  font-size: 0.75rem;
  width: var(--vf-toggle-width);
  height: var(--vf-toggle-height);
  line-height: 1;
}

.vf-toggle.vf-toggle-sm {
  width: var(--vf-toggle-width-sm);
  height: var(--vf-toggle-height-sm);
  font-size: 0.75rem;
}

.vf-toggle.vf-toggle-lg {
  width: var(--vf-toggle-width-lg);
  height: var(--vf-toggle-height-lg);
  font-size: 0.8125rem;
}

.vf-toggle-on {
  background: var(--vf-primary);
  border-color: var(--vf-primary);
  justify-content: flex-start;
  color: var(--vf-color-on-primary);
}

.vf-toggle-off {
  background: var(--vf-bg-passive);
  border-color: var(--vf-bg-passive);
  justify-content: flex-end;
  color: var(--vf-color-passive);
}

.vf-toggle-on-disabled {
  background: var(--vf-primary);
  border-color: var(--vf-primary);
  justify-content: flex-start;
  color: var(--vf-color-on-primary);
}

.vf-toggle-off-disabled {
  background: var(--vf-bg-passive);
  border-color: var(--vf-bg-passive);
  justify-content: flex-end;
  color: var(--vf-color-passive);
}

.vf-toggle-handle {
  display: inline-block;
  background: var(--vf-bg-toggle-handle);
  width: var(--vf-toggle-height);
  height: var(--vf-toggle-height);
  top: 0;
  border-radius: 50%;
  position: absolute;
  transition-property: all;
  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
  transition-duration: 150ms;
}

.vf-toggle-handle.vf-toggle-handle-sm {
  width: var(--vf-toggle-height-sm);
  height: var(--vf-toggle-height-sm);
}

.vf-toggle-handle.vf-toggle-handle-lg {
  width: var(--vf-toggle-height-lg);
  height: var(--vf-toggle-height-lg);
}

.vf-toggle-handle-on {
  left: 100%;
  transform: translateX(-100%);
}

.vf-toggle-handle-off {
  left: 0%;
}

.vf-toggle-handle-on-disabled {
  left: 100%;
  transform: translateX(-100%);
  background: var(--vf-bg-toggle-handle);
}

.vf-toggle-handle-off-disabled {
  left: 0%;
  background: var(--vf-bg-toggle-handle);
}

.vf-toggle-label {
  text-align: center;
  width: calc(var(--vf-toggle-width) - var(--vf-toggle-height));
  box-sizing: border-box;
  white-space: nowrap;
  -webkit-user-select: none;
     -moz-user-select: none;
          user-select: none;
}

.vf-toggle-label.vf-toggle-label-sm {
  width: calc(var(--vf-toggle-width-sm) - var(--vf-toggle-height-sm));
}

.vf-toggle-label.vf-toggle-label-lg {
  width: calc(var(--vf-toggle-width-lg) - var(--vf-toggle-height-lg));
}

body:not([dir=rtl]) .vf-toggle-wrapper-right {
  justify-content: flex-end;
}

body:not([dir=rtl]) .vf-toggle-text-right {
  margin-left: 0;
  margin-right: var(--vf-space-checkbox);
  order: -1;
}

body:not([dir=rtl]) .vf-toggle-text-right.vf-toggle-text-sm {
  margin-left: 0;
  margin-right: var(--vf-space-checkbox-sm);
}

body:not([dir=rtl]) .vf-toggle-text-right.vf-toggle-text-lg {
  margin-left: 0;
  margin-right: var(--vf-space-checkbox-lg);
}

body[dir=rtl] .vf-toggle-wrapper-left {
  justify-content: flex-end;
}

body[dir=rtl] .vf-toggle-text {
  margin-left: 0;
  margin-right: var(--vf-space-checkbox);
}

body[dir=rtl] .vf-toggle-text.vf-toggle-text-sm {
  margin-left: 0;
  margin-right: var(--vf-space-checkbox-sm);
}

body[dir=rtl] .vf-toggle-text.vf-toggle-text-lg {
  margin-left: 0;
  margin-right: var(--vf-space-checkbox-lg);
}

body[dir=rtl] .vf-toggle-text.vf-toggle-text-left {
  margin-right: 0;
  margin-left: var(--vf-space-checkbox);
  order: -1;
}

body[dir=rtl] .vf-toggle-text.vf-toggle-text-left.vf-toggle-text-sm {
  margin-right: 0;
  margin-left: var(--vf-space-checkbox-sm);
}

body[dir=rtl] .vf-toggle-text.vf-toggle-text-left.vf-toggle-text-lg {
  margin-right: 0;
  margin-left: var(--vf-space-checkbox-lg);
}`;te(L3);wu.__file="themes/vueform/templates/elements/ToggleElement.vue";var yi={};function x3(t,e,n,r,i,l){const a=J("EditorWrapper");return p(),S(N(t.elementLayout),{ref:"container"},ue({element:f(()=>[De(a,{value:t.model,placeholder:t.Placeholder,id:t.fieldId,accept:t.accept,"accept-mimes":t.acceptMimes,endpoint:t.editorEndpoint,method:t.editorMethod,disabled:t.isDisabled,"hide-tools":t.hideTools,class:h(t.classes.input),attrs:t.aria,onInput:t.handleInput,onAlert:t.handleAlert,onError:t.handleError,onBlur:t.handleBlur,ref:"input"},null,8,["value","placeholder","id","accept","accept-mimes","endpoint","method","disabled","hide-tools","class","attrs","onInput","onAlert","onError","onBlur"])]),_:2},[de(t.elementSlots,(o,s)=>({name:s,fn:f(()=>[M(t.$slots,s,{el$:t.el$},()=>[(p(),S(N(o),{el$:t.el$},null,8,["el$"]))])])}))]),1536)}yi.render=x3;yi.__file="themes/blank/templates/elements/EditorElement.vue";var yu={name:"EditorElement",render:yi.render,data(){return{merge:!0,defaultClasses:{container:"vf-text-type",input:"vf-editor",input_enabled:"",input_disabled:"vf-editor-disabled",input_success:"vf-editor-success",input_danger:"vf-editor-danger",input_focused:"vf-editor-focused",input_sm:"vf-editor-sm",input_md:"",input_lg:"vf-editor-lg",$input:(t,{isDisabled:e,focused:n,Size:r,isSuccess:i,isDanger:l})=>[t.input,t[`input_${r}`],e?t.input_disabled:null,!e&&!i&&!l?t.input_default:null,!e&&n?t.input_focused:null,!e&&i?t.input_success:null,!e&&l?t.input_danger:null]}}}},T3=`.vf-editor {
  outline: 0px solid var(--vf-ring-color);
  outline-offset: 0;
  border-style: solid;
  transition: box-shadow 0.2s ease-in-out, color 0.2s ease-in-out, background-color 0.2s ease-in-out, border-color 0.2s ease-in-out;
  font-size: var(--vf-font-size);
  line-height: var(--vf-line-height);
  letter-spacing: var(--vf-letter-spacing);
  background-color: var(--vf-bg-input);
  color: var(--vf-color-input);
  border-color: var(--vf-border-color-input);
  box-shadow: var(--vf-shadow-input);
  border-width: var(--vf-border-width-input-t) var(--vf-border-width-input-r) var(--vf-border-width-input-b) var(--vf-border-width-input-l);
  border-radius: var(--vf-radius-input);
}

.vf-editor.vf-editor-disabled {
  background-color: var(--vf-bg-disabled);
  color: var(--vf-color-disabled);
}

.vf-editor.vf-editor-success {
  background-color: var(--vf-bg-input-success);
  color: var(--vf-color-input-success);
  border-color: var(--vf-border-color-input-success);
}

.vf-editor.vf-editor-danger {
  background-color: var(--vf-bg-input-danger);
  color: var(--vf-color-input-danger);
  border-color: var(--vf-border-color-input-danger);
}

.vf-editor:hover:not(.vf-editor-disabled) {
  box-shadow: var(--vf-shadow-input-hover);
}

.vf-editor:hover:not(.vf-editor-disabled):not(.vf-editor-success):not(.vf-editor-danger) {
  background-color: var(--vf-bg-input-hover);
  color: var(--vf-color-input-hover);
  border-color: var(--vf-border-color-input-hover);
}

.vf-editor.vf-editor-focused {
  box-shadow: var(--vf-shadow-input-focus);
  outline: var(--vf-ring-width) solid var(--vf-ring-color);
  border-color: var(--vf-border-color-input-focus);
}

.vf-editor.vf-editor-focused:not(.vf-editor-success):not(.vf-editor-danger), .vf-editor.vf-editor-focused:not(.vf-editor-disabled):not(.vf-editor-success):not(.vf-editor-danger) {
  background-color: var(--vf-bg-input-focus);
  color: var(--vf-color-input-focus);
}`;te(T3);yu.__file="themes/vueform/templates/elements/EditorElement.vue";var ku={render:bi.render};ku.__file="themes/blank/templates/elements/TTextareaElement.vue";var Cu={name:"TTextareaElement",render:ku.render,data(){return{merge:!0,defaultClasses:{container:"vf-text-type",inputContainer:"vf-input-group vf-input-group-textarea",inputContainer_sm:"vf-input-group-sm",inputContainer_md:"",inputContainer_lg:"vf-input-group-lg",inputContainer_default:"",inputContainer_disabled:"vf-input-group-disabled",inputContainer_focused:"vf-input-group-focused",inputContainer_success:"vf-input-group-success",inputContainer_danger:"vf-input-group-danger",input:"vf-input-field",input_sm:"",input_md:"",input_lg:"",input_enabled:"",input_disabled:"",input_focused:"",input_success:"",input_danger:"",$inputContainer:(t,{isDisabled:e,Size:n,isSuccess:r,isDanger:i,focused:l})=>[t.inputContainer,t[`inputContainer_${n}`],e?t.inputContainer_disabled:null,!e&&!r&&!i?t.inputContainer_default:null,!e&&l?t.inputContainer_focused:null,!e&&r?t.inputContainer_success:null,!e&&i?t.inputContainer_danger:null],$input:(t,{isDisabled:e,Size:n,isSuccess:r,isDanger:i,focused:l})=>[t.input,t[`input_${n}`],e?t.input_disabled:null,!e&&!r&&!i&&!l?t.input_enabled:null,!e&&l&&!r&&!i?t.input_focused:null,!e&&i?t.input_danger:null,!e&&r?t.input_success:null]}}}},S3="/* Some styles are contained in Vueform.vue */";te(S3);Cu.__file="themes/vueform/templates/elements/TTextareaElement.vue";var Eu={render:wi.render};Eu.__file="themes/blank/templates/elements/TTextElement.vue";var Au={name:"TTextElement",render:Eu.render,data(){return{merge:!0,defaultClasses:{container:"vf-text-type",inputContainer:"vf-input-group",inputContainer_sm:"vf-input-group-sm",inputContainer_md:"",inputContainer_lg:"vf-input-group-lg",inputContainer_default:"",inputContainer_disabled:"vf-input-group-disabled",inputContainer_focused:"vf-input-group-focused",inputContainer_success:"vf-input-group-success",inputContainer_danger:"vf-input-group-danger",input:"vf-input-field",input_sm:"",input_md:"",input_lg:"",input_enabled:"",input_disabled:"",input_focused:"",input_success:"",input_danger:"",$inputContainer:(t,{isDisabled:e,Size:n,isSuccess:r,isDanger:i,focused:l})=>[t.inputContainer,t[`inputContainer_${n}`],e?t.inputContainer_disabled:null,!e&&!r&&!i?t.inputContainer_default:null,!e&&l?t.inputContainer_focused:null,!e&&r?t.inputContainer_success:null,!e&&i?t.inputContainer_danger:null],$input:(t,{isDisabled:e,Size:n,isSuccess:r,isDanger:i,focused:l})=>[t.input,t[`input_${n}`],e?t.input_disabled:null,!e&&!r&&!i&&!l?t.input_enabled:null,!e&&l&&!r&&!i?t.input_focused:null,!e&&i?t.input_danger:null,!e&&r?t.input_success:null]}}}},_3="/* Some styles are contained in Vueform.vue */";te(_3);Au.__file="themes/vueform/templates/elements/TTextElement.vue";var Lu={render:yi.render};Lu.__file="themes/blank/templates/elements/TEditorElement.vue";var xu={name:"TEditorElement",render:Lu.render,data(){return{merge:!0,defaultClasses:{container:"vf-text-type",input:"vf-editor",input_enabled:"",input_disabled:"vf-editor-disabled",input_success:"vf-editor-success",input_danger:"vf-editor-danger",input_focused:"vf-editor-focused",input_focused_success:"vf-editor-focused-success",input_focused_danger:"vf-editor-focused-danger",input_sm:"vf-editor-sm",input_md:"",input_lg:"vf-editor-lg",$input:(t,{isDisabled:e,focused:n,Size:r,isSuccess:i,isDanger:l})=>[t.input,t[`input_${r}`],e?t.input_disabled:null,!e&&!i&&!l&&!n?t.input_enabled:null,!e&&l?t.input_danger:null,!e&&i?t.input_success:null,n&&!l&&!i?t.input_focused:null,n&&i?t.input_focused_success:null,n&&l?t.input_focused_danger:null]}}}},M3="/* Some styles are contained in EditorElement.vue */";te(M3);xu.__file="themes/vueform/templates/elements/TEditorElement.vue";var El={};const I3=["value","name","id","disabled","aria-label"],B3=["innerHTML"];function D3(t,e,n,r,i,l){return p(),C("label",{class:h(t.classes.container)},[M(t.$slots,"default",V({name:t.name},{classes:t.classes,isDisabled:t.isDisabled,id:t.id,item:t.item,value:t.value,items:t.items,index:t.index}),()=>[Te(d("input",V({type:"checkbox","onUpdate:modelValue":e[0]||(e[0]=a=>t.el$.model=a)},t.attrs,{value:t.value,class:t.classes.input,name:t.name,id:t.id,disabled:t.isDisabled,"aria-label":t.item.label}),null,16,I3),[[oi,t.el$.model]]),d("span",{class:h(t.classes.text),innerHTML:t.item.label},null,10,B3)])],2)}El.render=D3;El.__file="themes/blank/templates/elements/partials/CheckboxgroupCheckbox.vue";var Tu={name:"CheckboxgroupCheckbox",render:El.render,data(){return{merge:!0,defaultClasses:{container:"vf-checkbox-container",input:"vf-checkbox",input_enabled:"",input_disabled:"",input_sm:"vf-checkbox-sm",input_md:"",input_lg:"vf-checkbox-lg",text:"vf-checkbox-text",$input:(t,{isDisabled:e,Size:n})=>[t.input,t[`input_${n}`],e?t.input_disabled:t.input_enabled]}}}},R3="/* Some styles are contained in Vueform.vue & CheckboxgroupElement.vue */";te(R3);Tu.__file="themes/vueform/templates/elements/partials/CheckboxgroupCheckbox.vue";var Al={};const F3=["aria-checked"],O3=["title"],$3=["value","id","name","disabled"],H3=["innerHTML"];function P3(t,e,n,r,i,l){return p(),C("label",V(t.attrs,{class:t.classes.container,tabindex:"0",role:"checkbox","aria-checked":t.checked,onKeypress:e[1]||(e[1]=Ue(Le(a=>t.el$.toggle(t.value),["prevent"]),["space"])),onKeydown:e[2]||(e[2]=(...a)=>t.handleKeydown&&t.handleKeydown(...a))}),[M(t.$slots,"default",V({name:t.name},{classes:t.classes,isDisabled:t.isDisabled,id:t.id,item:t.item,value:t.value,items:t.items,index:t.index}),()=>[d("div",{class:h(t.classes.wrapper),title:t.item.label},[Te(d("input",{type:"checkbox","onUpdate:modelValue":e[0]||(e[0]=a=>t.el$.model=a),value:t.value,id:t.id,class:h(t.classes.input),name:t.name,disabled:t.isDisabled},null,10,$3),[[oi,t.el$.model]]),d("span",{class:h(t.classes.text),innerHTML:`${t.item.label}`},null,10,H3)],10,O3)])],16,F3)}Al.render=P3;Al.__file="themes/blank/templates/elements/partials/CheckboxgroupCheckbox_tabs.vue";var Su={name:"CheckboxgroupCheckbox_tabs",render:Al.render,data(){return{merge:!0,defaultClasses:{container:"vf-checkbox-tabs-container",wrapper:"vf-checkbox-tabs",wrapper_not_last:"vf-checkbox-tabs-not-last",wrapper_first:"vf-checkbox-tabs-first",wrapper_first_sm:"vf-checkbox-tabs-first-sm",wrapper_first_md:"",wrapper_first_lg:"vf-checkbox-tabs-first-lg",wrapper_last:"vf-checkbox-tabs-last",wrapper_last_sm:"vf-checkbox-tabs-last-sm",wrapper_last_md:"",wrapper_last_lg:"vf-checkbox-tabs-last-lg",wrapper_selected:"vf-checkbox-tabs-selected",wrapper_unselected:"vf-checkbox-tabs-unselected",wrapper_disabled:"vf-checkbox-tabs-disabled",wrapper_sm:"vf-checkbox-tabs-sm",wrapper_md:"",wrapper_lg:"vf-checkbox-tabs-lg",input:"vf-checkbox-tabs-input",text:"",$wrapper:(t,{index:e,items:n,el$:r,value:i,isDisabled:l,Size:a})=>[t.wrapper,t[`wrapper_${a}`],e<Object.keys(n).length-1?t.wrapper_not_last:null,e===0?t.wrapper_first:null,e===0?t[`wrapper_first_${a}`]:null,e===Object.keys(n).length-1?t.wrapper_last:null,e===Object.keys(n).length-1?t[`wrapper_last_${a}`]:null,r.value?.indexOf(i)!==-1?t.wrapper_selected:t.wrapper_unselected,l?t.wrapper_disabled:null]}}}},z3=`/* Some styles are contained in Vueform.vue & CheckboxgroupElement.vue */

.vf-checkbox-tabs-container {
  display: flex;
  cursor: pointer;
}

.vf-checkbox-tabs {
  display: flex;
  align-items: center;
  justify-content: center;
  border-style: solid;
  border-width: var(--vf-border-width-input-t) var(--vf-border-width-input-r) var(--vf-border-width-input-b) var(--vf-border-width-input-l);
  border-color: var(--vf-border-color-input);
  padding: var(--vf-py-group-tabs) var(--vf-px-group-tabs);
  width: 100%;
  background: var(--vf-bg-input);
  color: var(--vf-color-input);
  font-size: var(--vf-font-size);
  line-height: var(--vf-line-height);
  letter-spacing: var(--vf-letter-spacing);
}

.vf-checkbox-tabs.vf-checkbox-tabs-not-last {
  border-right: 0;
}

.vf-checkbox-tabs.vf-checkbox-tabs-first {
  border-radius: var(--vf-radius-input);
  border-top-right-radius: 0;
  border-bottom-right-radius: 0;
}

.vf-checkbox-tabs.vf-checkbox-tabs-first.vf-checkbox-tabs-first-sm {
  border-radius: var(--vf-radius-input-sm);
  border-top-right-radius: 0;
  border-bottom-right-radius: 0;
}

.vf-checkbox-tabs.vf-checkbox-tabs-first.vf-checkbox-tabs-first-lg {
  border-radius: var(--vf-radius-input-lg);
  border-top-right-radius: 0;
  border-bottom-right-radius: 0;
}

.vf-checkbox-tabs.vf-checkbox-tabs-last {
  border-radius: var(--vf-radius-input-lg);
  border-top-left-radius: 0;
  border-bottom-left-radius: 0;
}

.vf-checkbox-tabs.vf-checkbox-tabs-last.vf-checkbox-tabs-last-sm {
  border-radius: var(--vf-radius-input-sm);
  border-top-left-radius: 0;
  border-bottom-left-radius: 0;
}

.vf-checkbox-tabs.vf-checkbox-tabs-last.vf-checkbox-tabs-last-lg {
  border-radius: var(--vf-radius-input-lg);
  border-top-left-radius: 0;
  border-bottom-left-radius: 0;
}

.vf-checkbox-tabs.vf-checkbox-tabs-selected {
  background-color: var(--vf-primary);
  border-color: rgba(0, 0, 0, 0.15);
  color: var(--vf-color-on-primary);
}

.vf-checkbox-tabs.vf-checkbox-tabs-unselected {
  border-color: var(--vf-border-color-input);
}

.vf-checkbox-tabs.vf-checkbox-tabs-unselected:hover:not(.vf-radio-tabs-disabled) {
  background-color: var(--vf-bg-input-hover);
  color: var(--vf-color-input-hover);
}

.vf-checkbox-tabs.vf-checkbox-tabs-disabled {
  opacity: 0.5;
}

.vf-checkbox-tabs.vf-checkbox-tabs-sm {
  padding: var(--vf-py-group-tabs-sm) var(--vf-px-group-tabs-sm);
  font-size: var(--vf-font-size-sm);
  line-height: var(--vf-line-height-sm);
  letter-spacing: var(--vf-letter-spacing-sm);
}

.vf-checkbox-tabs.vf-checkbox-tabs-lg {
  padding: var(--vf-py-group-tabs-lg) var(--vf-px-group-tabs-lg);
  font-size: var(--vf-font-size-lg);
  line-height: var(--vf-line-height-lg);
  letter-spacing: var(--vf-letter-spacing-lg);
}

.vf-checkbox-tabs-input {
  display: none;
}`;te(z3);Su.__file="themes/vueform/templates/elements/partials/CheckboxgroupCheckbox_tabs.vue";var Ll={};const N3=["value","name","id","disabled"],V3=["innerHTML"],j3=["innerHTML"];function U3(t,e,n,r,i,l){return p(),C("label",{class:h(t.classes.container)},[M(t.$slots,"default",V({name:t.name},{classes:t.classes,isDisabled:t.isDisabled,id:t.id,item:t.item,value:t.value,items:t.items,index:t.index}),()=>[d("div",{class:h(t.classes.wrapper)},[Te(d("input",V({type:"checkbox","onUpdate:modelValue":e[0]||(e[0]=a=>t.el$.model=a)},t.attrs,{value:t.value,class:t.classes.input,name:t.name,id:t.id,disabled:t.isDisabled}),null,16,N3),[[oi,t.el$.model]]),d("div",{class:h(t.classes.text_wrapper)},[d("div",{class:h(t.classes.text),innerHTML:t.item.label},null,10,V3),d("div",{class:h(t.classes.description),innerHTML:t.item.description},null,10,j3)],2)],2)])],2)}Ll.render=U3;Ll.__file="themes/blank/templates/elements/partials/CheckboxgroupCheckbox_blocks.vue";var _u={name:"CheckboxgroupCheckbox_blocks",render:Ll.render,data(){return{merge:!0,defaultClasses:{container:"vf-checkbox-blocks-container",container_sm:"vf-checkbox-blocks-container-sm",container_md:"",container_lg:"vf-checkbox-blocks-container-lg",wrapper:"vf-checkbox-blocks",wrapper_not_last:"vf-checkbox-blocks-not-last",wrapper_first:"vf-checkbox-blocks-first",wrapper_first_sm:"vf-checkbox-blocks-first-sm",wrapper_first_md:"",wrapper_first_lg:"vf-checkbox-blocks-first-lg",wrapper_last:"vf-checkbox-blocks-last",wrapper_last_sm:"vf-checkbox-blocks-last-sm",wrapper_last_md:"",wrapper_last_lg:"vf-checkbox-blocks-last-lg",wrapper_selected:"vf-checkbox-blocks-selected",wrapper_unselected:"vf-checkbox-blocks-unselected",wrapper_disabled:"vf-checkbox-blocks-disabled",wrapper_sm:"vf-checkbox-blocks-sm",wrapper_md:"",wrapper_lg:"vf-checkbox-blocks-lg",input:"vf-checkbox",input_enabled:"",input_disabled:"",input_sm:"vf-checkbox-sm",input_md:"",input_lg:"vf-checkbox-lg",text_wrapper:"vf-checkbox-blocks-text-wrapper",text:"vf-checkbox-blocks-text",description:"vf-checkbox-blocks-description",description_sm:"vf-checkbox-blocks-description-sm",description_md:"",description_lg:"vf-checkbox-blocks-description-lg",$container:(t,{Size:e})=>[t.container,t[`container_${e}`]],$wrapper:(t,{index:e,items:n,el$:r,value:i,isDisabled:l,Size:a})=>[t.wrapper,t[`wrapper_${a}`],e<Object.keys(n).length-1?t.wrapper_not_last:null,e===0?t.wrapper_first:null,e===0?t[`wrapper_first_${a}`]:null,e===Object.keys(n).length-1?t.wrapper_last:null,e===Object.keys(n).length-1?t[`wrapper_last_${a}`]:null,r.value&&r.value?.indexOf(i)!==-1?t.wrapper_selected:t.wrapper_unselected,l?t.wrapper_disabled:null],$input:(t,{isDisabled:e,Size:n})=>[t.input,t[`input_${n}`],e?t.input_disabled:t.input_enabled],$description:(t,{Size:e})=>[t.description,t[`description_${e}`]]}}}},W3=`/* Some styles are contained in Vueform.vue & CheckboxgroupElement.vue */

.vf-checkbox-blocks-container {
  display: flex;
  align-items: flex-start;
  cursor: pointer;
  border-radius: var(--vf-radius-large);
}

.vf-checkbox-blocks-container .vf-checkbox {
  margin-top: 0;
}

.vf-checkbox-blocks-container.vf-checkbox-blocks-container-sm {
  border-radius: var(--vf-radius-large-sm);
}

.vf-checkbox-blocks-container.vf-checkbox-blocks-container-lg {
  border-radius: var(--vf-radius-large-lg);
}

.vf-checkbox-blocks {
  display: flex;
  align-items: center;
  border-style: solid;
  border-width: var(--vf-border-width-input-t) var(--vf-border-width-input-r) var(--vf-border-width-input-b) var(--vf-border-width-input-l);
  border-color: var(--vf-border-color-input);
  width: 100%;
  padding: var(--vf-py-group-blocks) var(--vf-px-group-blocks);
  color: var(--vf-color-input);
  font-size: var(--vf-font-size);
  line-height: var(--vf-line-height);
  letter-spacing: var(--vf-letter-spacing);
  background: var(--vf-bg-input);
}

.vf-checkbox-blocks.vf-checkbox-blocks-not-last {
  border-bottom-width: 0;
}

.vf-checkbox-blocks.vf-checkbox-blocks-first {
  border-radius: var(--vf-radius-large);
  border-bottom-left-radius: 0;
  border-bottom-right-radius: 0;
}

.vf-checkbox-blocks.vf-checkbox-blocks-first.vf-checkbox-blocks-first-sm {
  border-radius: var(--vf-radius-large-sm);
  border-bottom-left-radius: 0;
  border-bottom-right-radius: 0;
}

.vf-checkbox-blocks.vf-checkbox-blocks-first.vf-checkbox-blocks-first-lg {
  border-radius: var(--vf-radius-large-lg);
  border-bottom-left-radius: 0;
  border-bottom-right-radius: 0;
}

.vf-checkbox-blocks.vf-checkbox-blocks-last {
  border-radius: var(--vf-radius-large);
  border-top-left-radius: 0;
  border-top-right-radius: 0;
}

.vf-checkbox-blocks.vf-checkbox-blocks-last.vf-checkbox-blocks-last-sm {
  border-radius: var(--vf-radius-large-sm);
  border-top-left-radius: 0;
  border-top-right-radius: 0;
}

.vf-checkbox-blocks.vf-checkbox-blocks-last.vf-checkbox-blocks-last-lg {
  border-radius: var(--vf-radius-large-lg);
  border-top-left-radius: 0;
  border-top-right-radius: 0;
}

.vf-checkbox-blocks.vf-checkbox-blocks-selected {
  background-color: var(--vf-bg-selected);
}

.vf-checkbox-blocks.vf-checkbox-blocks-disabled {
  opacity: 0.5;
}

.vf-checkbox-blocks.vf-checkbox-blocks-sm {
  padding: var(--vf-py-group-blocks-sm) var(--vf-px-group-blocks-sm);
  font-size: var(--vf-font-size-sm);
  line-height: var(--vf-line-height-sm);
  letter-spacing: var(--vf-letter-spacing-sm);
}

.vf-checkbox-blocks.vf-checkbox-blocks-lg {
  padding: var(--vf-py-group-blocks-lg) var(--vf-px-group-blocks-lg);
  font-size: var(--vf-font-size-lg);
  line-height: var(--vf-line-height-lg);
  letter-spacing: var(--vf-letter-spacing-lg);
}

.vf-checkbox-blocks-text-wrapper {
  margin-left: 0.5rem;
}

.vf-checkbox-blocks-description {
  color: var(--vf-color-muted);
  font-size: var(--vf-font-size-small);
  line-height: var(--vf-line-height-small);
  letter-spacing: var(--vf-letter-spacing-small);
  margin-top: -0.125rem;
}

.vf-checkbox-blocks-description.vf-checkbox-blocks-description-sm {
  font-size: var(--vf-font-size-small-sm);
  line-height: var(--vf-line-height-small-sm);
  letter-spacing: var(--vf-letter-spacing-small-sm);
  margin-top: -0.125rem;
}

.vf-checkbox-blocks-description.vf-checkbox-blocks-description-lg {
  font-size: var(--vf-font-size-small-lg);
  line-height: var(--vf-line-height-small-lg);
  letter-spacing: var(--vf-letter-spacing-small-lg);
  margin-top: -0.125rem;
}`;te(W3);_u.__file="themes/vueform/templates/elements/partials/CheckboxgroupCheckbox_blocks.vue";var xl={};function q3(t,e,n,r,i,l){return p(),C("div",{class:h(t.classes.container),onClick:e[0]||(e[0]=Le((...a)=>t.handleClick&&t.handleClick(...a),["prevent"])),ref:"area"},[d("span",{class:h(t.classes.icon)},null,2),t.title?(p(),C("span",{key:0,class:h(t.classes.title)},Re(t.title),3)):k("v-if",!0),t.description?(p(),C("span",{key:1,class:h(t.classes.description)},Re(t.description),3)):k("v-if",!0)],2)}xl.render=q3;xl.__file="themes/blank/templates/elements/partials/DragAndDrop.vue";var Mu={name:"DragAndDrop",render:xl.render,data(){return{merge:!0,defaultClasses:{container:"vf-dnd",container_sm:"vf-dnd-sm",container_md:"",container_lg:"vf-dnd-lg",container_inactive:"",container_active:"is-active",container_enabled:"",container_disabled:"is-disabled",icon:"vf-dnd-icon-upload",title:"vf-dnd-title",description:"vf-dnd-description",$container:(t,{dragging:e,disabled:n,Size:r})=>[t.container,t[`container_${r}`],e?t.container_active:t.container_inactive,n?t.container_disabled:t.container_enabled]}}}},Q3=`.vf-dnd {
  background-color: #FFFFFF;
  transition: 0.3s;
  border-width: var(--vf-border-width-input-t) var(--vf-border-width-input-r) var(--vf-border-width-input-b) var(--vf-border-width-input-l);
  border-style: dashed;
  border-color: var(--vf-border-color-input);
  padding: 1.5rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  font-weight: inherit;
  line-height: inherit;
  color: inherit;
  font-size: inherit;
  box-sizing: border-box;
  cursor: pointer;
  text-align: center;
  position: relative;
  transition: 0.3s;
  background-color: var(--vf-bg-input);
  color: var(--vf-color-input);
  border-radius: var(--vf-radius-large);
  box-shadow: var(--vf-shadow-input);
  text-align: center;
}

.vf-dnd.vf-dnd-sm {
  border-radius: var(--vf-radius-large);
}

.vf-dnd.is-disabled {
  opacity: 0.5;
  cursor: not-allowed;
}

.vf-dnd.is-active {
  border-color: var(--vf-primary);
}

.vf-dnd-icon-upload {
  display: flex;
  width: 2.25rem;
  height: 2rem;
  align-items: center;
  justify-content: center;
  background: var(--vf-primary);
  mask-image: url("data:image/svg+xml,%3C%3Fxml version='1.0' encoding='UTF-8'%3F%3E%3Csvg width='36px' height='32px' viewBox='0 0 36 32' version='1.1' xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink'%3E%3Cg stroke='none' stroke-width='1' fill='none' fill-rule='evenodd'%3E%3Cpath d='M35.0499042,20.6125054 C35.656165,21.1750041 35.9999142,21.9687644 35.9999142,22.8000002 L35.9999142,28.9999976 C35.9999142,30.6562437 34.6561674,31.9999905 32.9999213,31.9999905 L2.99999285,31.9999905 C1.3437468,31.9999905 0,30.6562437 0,28.9999976 L0,22.8000002 C0,21.9687644 0.34374918,21.1750041 0.950009942,20.6125054 L6.86247143,15.0687564 C7.01249549,14.9313056 7.24998271,14.9375311 7.39372016,15.0875552 L8.24998033,16.0000286 C8.38749221,16.1500527 8.3812056,16.3875399 8.23124258,16.5312773 L4.52501363,20.0062446 L11.7374598,20.0062446 L13.737455,24.0062351 L22.2624591,24.0062351 L24.2624544,20.0062446 L31.4811871,20.0062446 L27.7749582,16.5312773 C27.6249341,16.3875399 27.612422,16.1500527 27.7561594,16.0000286 L28.606194,15.0875552 C28.7499315,14.9375311 28.9874187,14.925019 29.1374427,15.0687564 L35.0499042,20.6125054 Z M33.9999189,28.9999976 L33.9999189,23.0000119 C33.9999189,22.4500254 33.5499078,22.0000143 32.9999213,22.0000143 L25.4999392,22.0000143 L23.499944,26.0000048 L12.4999702,26.0000048 L10.499975,22.0000143 L2.99999285,22.0000143 C2.45000637,22.0000143 1.99999523,22.4500254 1.99999523,23.0000119 L1.99999523,28.9999976 C1.99999523,29.5499841 2.45000637,29.9999952 2.99999285,29.9999952 L32.9999213,29.9999952 C33.5499078,29.9999952 33.9999189,29.5499841 33.9999189,28.9999976 Z M25.999938,8.00004768 C27.7811838,8.00004768 28.6686939,10.1562925 27.4186968,11.4125151 L19.4187159,19.4124961 C18.6374678,20.1937442 17.368733,20.1937442 16.5874849,19.4124961 L8.58750394,11.4125151 C7.32499474,10.1562925 8.22495598,8.00004768 9.99997616,8.00004768 L13.9999666,8.00004768 L13.9999666,1.50006318 C13.9999666,0.675052941 14.6749528,6.67572021e-05 15.499963,6.67572021e-05 L20.4999511,6.67572021e-05 C21.3249614,6.67572021e-05 21.9999475,0.675052941 21.9999475,1.50006318 L21.9999475,8.00004768 L25.999938,8.00004768 Z M17.9999571,18.0000238 L25.999938,10.0000429 L19.9999523,10.0000429 L19.9999523,2.00006199 L15.9999619,2.00006199 L15.9999619,10.0000429 L9.99997616,10.0000429 L17.9999571,18.0000238 Z' id='inbox-in' fill='currentColor'%3E%3C/path%3E%3C/g%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3C%3Fxml version='1.0' encoding='UTF-8'%3F%3E%3Csvg width='36px' height='32px' viewBox='0 0 36 32' version='1.1' xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink'%3E%3Cg stroke='none' stroke-width='1' fill='none' fill-rule='evenodd'%3E%3Cpath d='M35.0499042,20.6125054 C35.656165,21.1750041 35.9999142,21.9687644 35.9999142,22.8000002 L35.9999142,28.9999976 C35.9999142,30.6562437 34.6561674,31.9999905 32.9999213,31.9999905 L2.99999285,31.9999905 C1.3437468,31.9999905 0,30.6562437 0,28.9999976 L0,22.8000002 C0,21.9687644 0.34374918,21.1750041 0.950009942,20.6125054 L6.86247143,15.0687564 C7.01249549,14.9313056 7.24998271,14.9375311 7.39372016,15.0875552 L8.24998033,16.0000286 C8.38749221,16.1500527 8.3812056,16.3875399 8.23124258,16.5312773 L4.52501363,20.0062446 L11.7374598,20.0062446 L13.737455,24.0062351 L22.2624591,24.0062351 L24.2624544,20.0062446 L31.4811871,20.0062446 L27.7749582,16.5312773 C27.6249341,16.3875399 27.612422,16.1500527 27.7561594,16.0000286 L28.606194,15.0875552 C28.7499315,14.9375311 28.9874187,14.925019 29.1374427,15.0687564 L35.0499042,20.6125054 Z M33.9999189,28.9999976 L33.9999189,23.0000119 C33.9999189,22.4500254 33.5499078,22.0000143 32.9999213,22.0000143 L25.4999392,22.0000143 L23.499944,26.0000048 L12.4999702,26.0000048 L10.499975,22.0000143 L2.99999285,22.0000143 C2.45000637,22.0000143 1.99999523,22.4500254 1.99999523,23.0000119 L1.99999523,28.9999976 C1.99999523,29.5499841 2.45000637,29.9999952 2.99999285,29.9999952 L32.9999213,29.9999952 C33.5499078,29.9999952 33.9999189,29.5499841 33.9999189,28.9999976 Z M25.999938,8.00004768 C27.7811838,8.00004768 28.6686939,10.1562925 27.4186968,11.4125151 L19.4187159,19.4124961 C18.6374678,20.1937442 17.368733,20.1937442 16.5874849,19.4124961 L8.58750394,11.4125151 C7.32499474,10.1562925 8.22495598,8.00004768 9.99997616,8.00004768 L13.9999666,8.00004768 L13.9999666,1.50006318 C13.9999666,0.675052941 14.6749528,6.67572021e-05 15.499963,6.67572021e-05 L20.4999511,6.67572021e-05 C21.3249614,6.67572021e-05 21.9999475,0.675052941 21.9999475,1.50006318 L21.9999475,8.00004768 L25.999938,8.00004768 Z M17.9999571,18.0000238 L25.999938,10.0000429 L19.9999523,10.0000429 L19.9999523,2.00006199 L15.9999619,2.00006199 L15.9999619,10.0000429 L9.99997616,10.0000429 L17.9999571,18.0000238 Z' id='inbox-in' fill='currentColor'%3E%3C/path%3E%3C/g%3E%3C/svg%3E");
  mask-size: cover;
  -webkit-mask-size: cover;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  mask-position: center center;
  -webkit-mask-position: center center;
}

.vf-dnd-title {
  font-weight: 600;
  margin-top: 0.75rem;
}`;te(Q3);Mu.__file="themes/vueform/templates/elements/partials/DragAndDrop.vue";var Tl={};const K3=["aria-labelledby","aria-placeholder","aria-describedby"],G3=["id"],J3=["href","title"],Y3=["title"];function X3(t,e,n,r,i,l){return Te((p(),C("div",V({class:t.classes.container},t.attrs,{tabindex:"0",role:"button","aria-labelledby":t.ariaLabelledby,"aria-placeholder":t.ariaPlaceholder,"aria-describedby":`${t.el$.fieldId}-file-description`,onKeyup:e[3]||(e[3]=(...a)=>t.handleKeyup&&t.handleKeyup(...a))}),[d("span",{id:`${t.el$.fieldId}-file-description`,class:h(t.classes.assistiveText),"aria-hidden":""},Re(t.form$.translations.vueform.a11y.file.description),11,G3),d("div",{class:h(t.classes.wrapper)},[d("div",{class:h(t.classes.file)},[k(" Filename "),t.hasLink&&t.clickable?(p(),C("a",{key:0,href:t.link,class:h(t.classes.filenameLink),title:t.filename,target:"_blank",rel:"nofollow noopener"},Re(t.filename),11,J3)):(p(),C("span",{key:1,class:h(t.classes.filenameStatic),title:t.filename},Re(t.filename),11,Y3))],2),d("div",{class:h(t.classes.actions)},[k(" Remove "),t.canRemove?(p(),C("div",{key:0,class:h(t.classes.remove),onClick:e[0]||(e[0]=Le((...a)=>t.remove&&t.remove(...a),["prevent"])),onKeypress:e[1]||(e[1]=Ue((...a)=>t.remove&&t.remove(...a),["enter","space"])),"aria-roledescription":"❎",role:"button",tabindex:"0"},[d("span",{class:h(t.classes.removeIcon)},null,2)],34)):k("v-if",!0),k(" Progress "),t.uploading?(p(),C("div",{key:1,class:h(t.classes.percent)},Re(t.progress)+"%",3)):k("v-if",!0),k(" Error "),t.hasError?(p(),C("span",{key:2,class:h(t.classes.warning)},[d("span",{class:h(t.classes.warningIcon)},null,2)],2)):k("v-if",!0),k(" Upload button "),t.canUploadTemp?(p(),C("div",{key:3,class:h(t.classes.upload),onClick:e[2]||(e[2]=Le((...a)=>t.upload&&t.upload(...a),["prevent"])),tabindex:"-1"},Re(t.uploadText),3)):t.el$.stage>1?(p(),C(ie,{key:4},[k(" Success "),d("span",{class:h(t.classes.uploaded)},[d("span",{class:h(t.classes.uploadedIcon)},null,2)],2)],2112)):k("v-if",!0)],2)],2),t.uploading?(p(),C("div",{key:0,class:h(t.classes.progressBar)},[d("div",{class:h(t.classes.progress),style:rn({width:t.progress+"%"})},null,6)],2)):k("v-if",!0)],16,K3)),[[Ve,t.visible]])}Tl.render=X3;Tl.__file="themes/blank/templates/elements/partials/FilePreview.vue";var Iu={name:"FilePreview",render:Tl.render,data(){return{merge:!0,defaultClasses:{container:"vf-file-preview",container_sm:"vf-file-preview-sm",container_md:"",container_lg:"vf-file-preview-lg",wrapper:"vf-file-preview-wrapper",file:"vf-file-preview-file",filenameLink:"vf-file-preview-filename-link",filenameStatic:"vf-file-preview-filename",actions:"vf-file-preview-actions",percent:"vf-file-preview-percent",upload:"vf-file-preview-upload",progressBar:"vf-file-preview-progress-bar",progress:"vf-file-preview-progress",warning:"vf-file-preview-warning",warningIcon:"vf-file-preview-warning-icon",uploaded:"vf-file-preview-uploaded",uploadedIcon:"vf-file-preview-uploaded-icon",remove:"vf-file-preview-remove",removeIcon:"vf-file-preview-remove-icon",assistiveText:"vf-assistive-text",$container:(t,{Size:e})=>[t.container,t[`container_${e}`]]}}}},Z3=`.vf-file-preview {
  font-family: inherit;
  font-size: inherit;
  line-height: inherit;
  color: inherit;
  min-height: var(--vf-min-height-input);
  display: flex;
  justify-content: center;
  flex-direction: column;
  position: relative;
}

.vf-file-preview:hover .vf-file-preview-uploaded,
.vf-file-preview:hover .vf-file-preview-warning,
.vf-file-preview:hover .vf-file-preview-percent {
  display: none;
}

.vf-file-preview:hover .vf-file-preview-remove {
  display: inline-block;
}

.vf-file-preview.vf-file-preview-sm {
  padding-top: calc(var(--vf-py-input-sm) + var(--vf-border-width-input-t));
  min-height: var(--vf-min-height-input-sm);
}

.vf-file-preview.vf-file-preview-lg {
  padding-top: calc(var(--vf-py-input-lg) + var(--vf-border-width-input-t));
  min-height: var(--vf-min-height-input-lg);
}

.vf-file-preview-wrapper {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.vf-file-preview-file {
  display: flex;
  align-items: center;
  overflow: hidden;
}

.vf-file-preview-filename {
  overflow: hidden;
  text-overflow: ellipsis;
}

.vf-file-preview-filename-link {
  text-decoration: none;
  color: inherit;
  overflow: hidden;
  text-overflow: ellipsis;
}

.vf-file-preview-filename-link:hover, .vf-file-preview-filename-link:focus, .vf-file-preview-filename-link:active {
  color: inherit;
}

.vf-file-preview-filename-link:hover {
  text-decoration: underline;
}

.vf-file-preview-actions {
  display: flex;
  align-items: center;
}

.vf-file-preview-upload {
  font-size: 0.75rem;
  margin-left: 0.5rem;
  white-space: nowrap;
  padding: 0.0625rem 0.4375rem;
  background: var(--vf-primary);
  color: var(--vf-color-on-primary);
  border-radius: var(--vf-radius-small);
  text-decoration: none;
  transition: 0.15s;
  outline: 0px solid var(--vf-ring-color);
  outline-offset: 0;
}

.vf-file-preview-upload:hover {
  transform: scale(1.05);
}

.vf-file-preview-upload:focus {
  outline: var(--vf-ring-width) solid var(--vf-ring-color);
}

.vf-file-preview-percent {
  font-size: 0.875rem;
  color: var(--vf-color-muted);
  margin-left: 0.375rem;
}

.vf-file-preview-progress-bar {
  margin-top: 0.625rem;
  border-radius: 0;
  height: 0.1875rem;
  background: var(--vf-bg-passive);
  position: absolute;
  bottom: 0;
  width: 100%;
}

.vf-file-preview-progress {
  border-radius: 0;
  height: 100%;
  background: var(--vf-primary);
  transition: 0.6s ease;
}

.vf-file-preview-warning,
.vf-file-preview-uploaded,
.vf-file-preview-remove {
  display: flex;
  width: 1rem;
  height: 1rem;
  align-items: center;
  justify-content: center;
  border-radius: 999px;
}

.vf-file-preview-warning-icon,
.vf-file-preview-uploaded-icon,
.vf-file-preview-remove-icon {
  width: 100%;
  height: 100%;
  display: block;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  mask-position: center center;
  -webkit-mask-position: center center;
}

.vf-file-preview-remove {
  display: none;
  margin-left: 0.375rem;
  background-color: var(--vf-bg-passive);
  transition: 0.15s;
}

.vf-file-preview-remove:hover {
  filter: brightness(0.9);
}

.vf-file-preview-remove-icon {
  mask-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 320 512' fill='currentColor' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M207.6 256l107.72-107.72c6.23-6.23 6.23-16.34 0-22.58l-25.03-25.03c-6.23-6.23-16.34-6.23-22.58 0L160 208.4 52.28 100.68c-6.23-6.23-16.34-6.23-22.58 0L4.68 125.7c-6.23 6.23-6.23 16.34 0 22.58L112.4 256 4.68 363.72c-6.23 6.23-6.23 16.34 0 22.58l25.03 25.03c6.23 6.23 16.34 6.23 22.58 0L160 303.6l107.72 107.72c6.23 6.23 16.34 6.23 22.58 0l25.03-25.03c6.23-6.23 6.23-16.34 0-22.58L207.6 256z'%3E%3C/path%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 320 512' fill='currentColor' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M207.6 256l107.72-107.72c6.23-6.23 6.23-16.34 0-22.58l-25.03-25.03c-6.23-6.23-16.34-6.23-22.58 0L160 208.4 52.28 100.68c-6.23-6.23-16.34-6.23-22.58 0L4.68 125.7c-6.23 6.23-6.23 16.34 0 22.58L112.4 256 4.68 363.72c-6.23 6.23-6.23 16.34 0 22.58l25.03 25.03c6.23 6.23 16.34 6.23 22.58 0L160 303.6l107.72 107.72c6.23 6.23 16.34 6.23 22.58 0l25.03-25.03c6.23-6.23 6.23-16.34 0-22.58L207.6 256z'%3E%3C/path%3E%3C/svg%3E");
  mask-size: 0.75rem 0.75rem;
  -webkit-mask-size: 0.75rem 0.75rem;
  background-color: var(--vf-color-passive);
}

.vf-file-preview-uploaded {
  background-color: var(--vf-bg-success);
}

.vf-file-preview-uploaded-icon {
  mask-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 512 512' fill='currentColor' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M173.898 439.404l-166.4-166.4c-9.997-9.997-9.997-26.206 0-36.204l36.203-36.204c9.997-9.998 26.207-9.998 36.204 0L192 312.69 432.095 72.596c9.997-9.997 26.207-9.997 36.204 0l36.203 36.204c9.997 9.997 9.997 26.206 0 36.204l-294.4 294.401c-9.998 9.997-26.207 9.997-36.204-.001z'%3E%3C/path%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 512 512' fill='currentColor' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M173.898 439.404l-166.4-166.4c-9.997-9.997-9.997-26.206 0-36.204l36.203-36.204c9.997-9.998 26.207-9.998 36.204 0L192 312.69 432.095 72.596c9.997-9.997 26.207-9.997 36.204 0l36.203 36.204c9.997 9.997 9.997 26.206 0 36.204l-294.4 294.401c-9.998 9.997-26.207 9.997-36.204-.001z'%3E%3C/path%3E%3C/svg%3E");
  mask-size: 0.625rem 0.625rem;
  -webkit-mask-size: 0.625rem 0.625rem;
  background-color: var(--vf-color-success);
}

.vf-file-preview-warning {
  background-color: var(--vf-bg-danger);
}

.vf-file-preview-warning-icon {
  mask-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 192 512' fill='currentColor' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M176 432c0 44.112-35.888 80-80 80s-80-35.888-80-80 35.888-80 80-80 80 35.888 80 80zM25.26 25.199l13.6 272C39.499 309.972 50.041 320 62.83 320h66.34c12.789 0 23.331-10.028 23.97-22.801l13.6-272C167.425 11.49 156.496 0 142.77 0H49.23C35.504 0 24.575 11.49 25.26 25.199z'%3E%3C/path%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 192 512' fill='currentColor' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M176 432c0 44.112-35.888 80-80 80s-80-35.888-80-80 35.888-80 80-80 80 35.888 80 80zM25.26 25.199l13.6 272C39.499 309.972 50.041 320 62.83 320h66.34c12.789 0 23.331-10.028 23.97-22.801l13.6-272C167.425 11.49 156.496 0 142.77 0H49.23C35.504 0 24.575 11.49 25.26 25.199z'%3E%3C/path%3E%3C/svg%3E");
  mask-size: 0.625rem 0.625rem;
  -webkit-mask-size: 0.625rem 0.625rem;
  background-color: var(--vf-color-danger);
}

.vf-file-removing .vf-file-preview {
  opacity: 0.6;
}`;te(Z3);Iu.__file="themes/vueform/templates/elements/partials/FilePreview.vue";var Sl={};const e6=["aria-labelledby","aria-placeholder","aria-describedby"],t6=["id"],n6=["href"],r6=["src","alt","title"],i6=["src","alt","title"],a6=["href"];function l6(t,e,n,r,i,l){return Te((p(),C("div",V({class:t.classes.container,tabindex:"0",role:"button"},t.attrs,{"aria-labelledby":t.ariaLabelledby,"aria-placeholder":t.ariaPlaceholder,"aria-describedby":`${t.el$.fieldId}-file-description`,onKeyup:e[4]||(e[4]=(...a)=>t.handleKeyup&&t.handleKeyup(...a))}),[d("span",{id:`${t.el$.fieldId}-file-description`,class:h(t.classes.assistiveText),"aria-hidden":""},Re(t.form$.translations.vueform.a11y.file.description),11,t6),d("div",{class:h(t.classes.wrapper)},[k(" Image "),t.uploaded&&t.hasLink&&t.clickable?(p(),C("a",{key:0,href:t.link,class:h(t.classes.image),target:"_blank",rel:"nofollow noopener"},[d("img",{class:h(t.classes.img),src:t.preview,alt:t.filename,title:t.filename,"aria-hidden":"true"},null,10,r6)],10,n6)):(p(),C("span",{key:1,class:h(t.classes.image)},[d("img",{class:h(t.classes.img),src:t.preview,alt:t.filename,title:t.filename,"aria-hidden":"true"},null,10,i6)],2)),d("div",{class:h(t.classes.file)},[k(" Filename "),t.hasLink&&t.clickable?(p(),C("a",{key:0,href:t.link,class:h(t.classes.filenameLink),target:"_blank",rel:"nofollow noopener"},Re(t.filename),11,a6)):(p(),C("span",{key:1,class:h(t.classes.filenameStatic)},Re(t.filename),3))],2),d("div",{class:h(t.classes.actions)},[k(" Remove "),t.canRemove?(p(),C("div",{key:0,class:h(t.classes.remove),onClick:e[0]||(e[0]=Le((...a)=>t.remove&&t.remove(...a),["prevent"])),onKeypress:e[1]||(e[1]=Ue((...a)=>t.remove&&t.remove(...a),["enter","space"])),"aria-roledescription":"❎",role:"button",tabindex:"0"},[d("span",{class:h(t.classes.removeIcon)},null,2)],34)):k("v-if",!0),k(" Progress "),t.uploading?(p(),C("div",{key:1,class:h(t.classes.percent)},Re(t.progress)+"%",3)):k("v-if",!0),k(" Error "),t.hasError?(p(),C("span",{key:2,class:h(t.classes.warning)},[d("span",{class:h(t.classes.warningIcon)},null,2)],2)):k("v-if",!0),k(" Upload button "),t.canUploadTemp?(p(),C("div",{key:3,class:h(t.classes.upload),onClick:e[2]||(e[2]=Le((...a)=>t.upload&&t.upload(...a),["prevent"])),onKeypress:e[3]||(e[3]=Ue((...a)=>t.upload&&t.upload(...a),["enter","space"])),tabindex:"-1",role:"button"},Re(t.uploadText),35)):t.el$.stage>1?(p(),C(ie,{key:4},[k(" Success "),d("span",{class:h(t.classes.uploaded)},[d("span",{class:h(t.classes.uploadedIcon)},null,2)],2)],2112)):k("v-if",!0)],2)],2),t.uploading?(p(),C("div",{key:0,class:h(t.classes.progressBar)},[d("div",{class:h(t.classes.progress),style:rn({width:t.progress+"%"})},null,6)],2)):k("v-if",!0)],16,e6)),[[Ve,t.visible]])}Sl.render=l6;Sl.__file="themes/blank/templates/elements/partials/FilePreview_image.vue";var Bu={name:"ImagePreview",render:Sl.render,data(){return{merge:!0,defaultClasses:{container:"vf-file-preview-image",wrapper:"vf-file-preview-image-wrapper",image:"vf-file-preview-image-image",image_link:"",image_static:"",image_sm:"vf-file-preview-image-image-sm",image_md:"",image_lg:"vf-file-preview-image-image-lg",img:"vf-file-preview-image-img",img_sm:"vf-file-preview-image-img-sm",img_md:"",img_lg:"vf-file-preview-image-img-lg",file:"vf-file-preview-image-file",filenameLink:"vf-file-preview-image-filename-link",filenameStatic:"vf-file-preview-image-filename",actions:"vf-file-preview-image-actions",percent:"vf-file-preview-image-percent",upload:"vf-file-preview-image-upload",progressBar:"vf-file-preview-image-progress-bar",progressBar_sm:"vf-file-preview-image-progress-bar-sm",progressBar_md:"",progressBar_lg:"vf-file-preview-image-progress-bar-lg",progress:"vf-file-preview-image-progress",warning:"vf-file-preview-image-warning",warningIcon:"vf-file-preview-image-warning-icon",uploaded:"vf-file-preview-image-uploaded",uploadedIcon:"vf-file-preview-image-uploaded-icon",remove:"vf-file-preview-image-remove",removeIcon:"vf-file-preview-image-remove-icon",assistiveText:"vf-assistive-text",$image:(t,{hasLink:e,Size:n})=>[t.image,t[`image_${n}`],e?t.image_link:t.image_static],$img:(t,{Size:e})=>[t.img,t[`img_${e}`]],$progressBar:(t,{Size:e})=>[t.progressBar,t[`progressBar_${e}`]]}}}},o6=`.vf-file-preview-image {
  font-family: inherit;
  font-size: inherit;
  line-height: inherit;
  color: inherit;
  display: flex;
  justify-content: flex-start;
  flex-direction: row;
  position: relative;
}

.vf-file-preview-image:hover .vf-file-preview-image-uploaded,
.vf-file-preview-image:hover .vf-file-preview-image-warning,
.vf-file-preview-image:hover .vf-file-preview-image-percent {
  display: none;
}

.vf-file-preview-image:hover .vf-file-preview-image-remove {
  display: inline-block;
}

.vf-file-preview-image-image {
  display: flex;
  align-items: center;
  flex: 0 0 auto;
  background: var(--vf-bg-passive);
  border-radius: var(--vf-radius-image);
  outline: 0px solid var(--vf-ring-color);
  outline-offset: 0;
  box-shadow: var(--vf-shadow-input);
}

.vf-file-preview-image-image:focus {
  outline: var(--vf-ring-width) solid var(--vf-ring-color);
}

.vf-file-preview-image-image.vf-file-preview-image-image-sm {
  border-radius: var(--vf-radius-image-sm);
}

.vf-file-preview-image-image.vf-file-preview-image-image-lg {
  border-radius: var(--vf-radius-image-lg);
}

.vf-file-preview-image-img {
  -o-object-fit: cover;
     object-fit: cover;
  width: var(--vf-min-height-input);
  height: var(--vf-min-height-input);
  border-radius: var(--vf-radius-image);
  border: 0;
}

.vf-file-preview-image-img[src=""], .vf-file-preview-image-img[src="data:"], .vf-file-preview-image-img:not([src]) {
  opacity: 0;
}

.vf-file-preview-image-img.vf-file-preview-image-img-sm {
  width: var(--vf-min-height-input-sm);
  height: var(--vf-min-height-input-sm);
  border-radius: var(--vf-radius-image-sm);
}

.vf-file-preview-image-img.vf-file-preview-image-img-lg {
  width: var(--vf-min-height-input-lg);
  height: var(--vf-min-height-input-lg);
  border-radius: var(--vf-radius-image-lg);
}

.vf-file-preview-image-wrapper {
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
}

.vf-file-preview-image-file {
  display: flex;
  align-items: center;
  margin-left: 0.625rem;
  flex: 1 1 auto;
}

.vf-file-preview-image-filename-link {
  text-decoration: none;
  color: inherit;
}

.vf-file-preview-image-filename-link:hover, .vf-file-preview-image-filename-link:focus, .vf-file-preview-image-filename-link:active {
  color: inherit;
}

.vf-file-preview-image-filename-link:hover {
  text-decoration: underline;
}

.vf-file-preview-image-actions {
  display: flex;
  align-items: center;
}

.vf-file-preview-image-upload {
  font-size: 0.75rem;
  margin-left: 0.5rem;
  white-space: nowrap;
  padding: 0.0625rem 0.4375rem;
  background: var(--vf-primary);
  color: var(--vf-color-on-primary);
  border-radius: var(--vf-radius-small);
  text-decoration: none;
  transition: 0.15s;
  outline: 0px solid var(--vf-ring-color);
  outline-offset: 0;
}

.vf-file-preview-image-upload:hover {
  transform: scale(1.05);
}

.vf-file-preview-image-upload:focus {
  outline: var(--vf-ring-width) solid var(--vf-ring-color);
}

.vf-file-preview-image-percent {
  font-size: 0.875rem;
  color: var(--vf-color-muted);
  margin-left: 0.375rem;
}

.vf-file-preview-image-progress-bar {
  margin-top: 0.625rem;
  border-radius: 0;
  height: 0.1875rem;
  background: var(--vf-bg-passive);
  position: absolute;
  bottom: 0;
  left: calc(var(--vf-min-height-input) + 0.625rem);
  right: 0;
}

.vf-file-preview-image-progress-bar.vf-file-preview-image-progress-bar-sm {
  left: calc(var(--vf-min-height-input-sm) + 0.625rem);
}

.vf-file-preview-image-progress-bar.vf-file-preview-image-progress-bar-lg {
  left: calc(var(--vf-min-height-input-lg) + 0.625rem);
}

.vf-file-preview-image-progress {
  border-radius: 0;
  display: block;
  height: 100%;
  background: var(--vf-primary);
  transition: 0.6s ease;
}

.vf-file-preview-image-warning,
.vf-file-preview-image-uploaded,
.vf-file-preview-image-remove {
  display: flex;
  width: 1rem;
  height: 1rem;
  align-items: center;
  justify-content: center;
  border-radius: 999px;
}

.vf-file-preview-image-warning-icon,
.vf-file-preview-image-uploaded-icon,
.vf-file-preview-image-remove-icon {
  width: 100%;
  height: 100%;
  display: block;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  mask-position: center center;
  -webkit-mask-position: center center;
}

.vf-file-preview-image-remove {
  display: none;
  margin-left: 0.375rem;
  background-color: var(--vf-bg-passive);
  transition: 0.15s;
}

.vf-file-preview-image-remove:hover {
  filter: brightness(0.9);
}

.vf-file-preview-image-remove-icon {
  mask-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 320 512' fill='currentColor' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M207.6 256l107.72-107.72c6.23-6.23 6.23-16.34 0-22.58l-25.03-25.03c-6.23-6.23-16.34-6.23-22.58 0L160 208.4 52.28 100.68c-6.23-6.23-16.34-6.23-22.58 0L4.68 125.7c-6.23 6.23-6.23 16.34 0 22.58L112.4 256 4.68 363.72c-6.23 6.23-6.23 16.34 0 22.58l25.03 25.03c6.23 6.23 16.34 6.23 22.58 0L160 303.6l107.72 107.72c6.23 6.23 16.34 6.23 22.58 0l25.03-25.03c6.23-6.23 6.23-16.34 0-22.58L207.6 256z'%3E%3C/path%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 320 512' fill='currentColor' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M207.6 256l107.72-107.72c6.23-6.23 6.23-16.34 0-22.58l-25.03-25.03c-6.23-6.23-16.34-6.23-22.58 0L160 208.4 52.28 100.68c-6.23-6.23-16.34-6.23-22.58 0L4.68 125.7c-6.23 6.23-6.23 16.34 0 22.58L112.4 256 4.68 363.72c-6.23 6.23-6.23 16.34 0 22.58l25.03 25.03c6.23 6.23 16.34 6.23 22.58 0L160 303.6l107.72 107.72c6.23 6.23 16.34 6.23 22.58 0l25.03-25.03c6.23-6.23 6.23-16.34 0-22.58L207.6 256z'%3E%3C/path%3E%3C/svg%3E");
  mask-size: 0.75rem 0.75rem;
  -webkit-mask-size: 0.75rem 0.75rem;
  background-color: var(--vf-color-passive);
}

.vf-file-preview-image-uploaded {
  background-color: var(--vf-bg-success);
}

.vf-file-preview-image-uploaded-icon {
  mask-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 512 512' fill='currentColor' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M173.898 439.404l-166.4-166.4c-9.997-9.997-9.997-26.206 0-36.204l36.203-36.204c9.997-9.998 26.207-9.998 36.204 0L192 312.69 432.095 72.596c9.997-9.997 26.207-9.997 36.204 0l36.203 36.204c9.997 9.997 9.997 26.206 0 36.204l-294.4 294.401c-9.998 9.997-26.207 9.997-36.204-.001z'%3E%3C/path%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 512 512' fill='currentColor' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M173.898 439.404l-166.4-166.4c-9.997-9.997-9.997-26.206 0-36.204l36.203-36.204c9.997-9.998 26.207-9.998 36.204 0L192 312.69 432.095 72.596c9.997-9.997 26.207-9.997 36.204 0l36.203 36.204c9.997 9.997 9.997 26.206 0 36.204l-294.4 294.401c-9.998 9.997-26.207 9.997-36.204-.001z'%3E%3C/path%3E%3C/svg%3E");
  mask-size: 0.625rem 0.625rem;
  -webkit-mask-size: 0.625rem 0.625rem;
  background-color: var(--vf-color-success);
}

.vf-file-preview-image-warning {
  background-color: var(--vf-bg-danger);
}

.vf-file-preview-image-warning-icon {
  mask-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 192 512' fill='currentColor' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M176 432c0 44.112-35.888 80-80 80s-80-35.888-80-80 35.888-80 80-80 80 35.888 80 80zM25.26 25.199l13.6 272C39.499 309.972 50.041 320 62.83 320h66.34c12.789 0 23.331-10.028 23.97-22.801l13.6-272C167.425 11.49 156.496 0 142.77 0H49.23C35.504 0 24.575 11.49 25.26 25.199z'%3E%3C/path%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 192 512' fill='currentColor' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M176 432c0 44.112-35.888 80-80 80s-80-35.888-80-80 35.888-80 80-80 80 35.888 80 80zM25.26 25.199l13.6 272C39.499 309.972 50.041 320 62.83 320h66.34c12.789 0 23.331-10.028 23.97-22.801l13.6-272C167.425 11.49 156.496 0 142.77 0H49.23C35.504 0 24.575 11.49 25.26 25.199z'%3E%3C/path%3E%3C/svg%3E");
  mask-size: 0.625rem 0.625rem;
  -webkit-mask-size: 0.625rem 0.625rem;
  background-color: var(--vf-color-danger);
}

.vf-file-removing .vf-file-preview-image {
  opacity: 0.6;
}`;te(o6);Bu.__file="themes/vueform/templates/elements/partials/FilePreview_image.vue";var _l={};const s6=["aria-labelledby","aria-placeholder","aria-role","aria-describedby"],u6=["id"],d6=["href"],c6=["src","alt","title"],p6=["src","alt","title"];function f6(t,e,n,r,i,l){return Te((p(),C("div",V({class:t.classes.container,tabindex:"0",role:"button"},t.attrs,{"aria-labelledby":t.ariaLabelledby,"aria-placeholder":t.ariaPlaceholder,"aria-role":t.ariaRoledescription,"aria-describedby":`${t.el$.fieldId}-file-description`,onKeyup:e[4]||(e[4]=(...a)=>t.handleKeyup&&t.handleKeyup(...a))}),[d("span",{id:`${t.el$.fieldId}-file-description`,class:h(t.classes.assistiveText),"aria-hidden":""},Re(t.form$.translations.vueform.a11y.file.description),11,u6),k(" Image  "),t.uploaded&&t.hasLink&&t.clickable?(p(),C("a",{key:0,class:h(t.classes.image),href:t.link,target:"_blank",rel:"nofollow noopener"},[d("img",{src:t.preview,class:h(t.classes.img),alt:t.filename,title:t.filename,"aria-hidden":"true"},null,10,c6)],10,d6)):(p(),C("div",{key:1,class:h(t.classes.image)},[d("img",{class:h(t.classes.img),src:t.preview,alt:t.filename,title:t.filename,"aria-hidden":"true"},null,10,p6)],2)),k(" Overlay "),!t.uploaded&&!t.uploading?(p(),C("div",{key:2,class:h(t.classes.overlay)},[t.canUploadTemp?(p(),C("div",{key:0,class:h(t.classes.upload),onClick:e[0]||(e[0]=Le((...a)=>t.upload&&t.upload(...a),["prevent"])),onKeypress:e[1]||(e[1]=Ue((...a)=>t.upload&&t.upload(...a),["enter","space"])),tabindex:"-1",role:"button"},Re(t.uploadText),35)):k("v-if",!0)],2)):k("v-if",!0),k(" Error "),t.hasError?(p(),C("span",{key:3,class:h(t.classes.warning)},[d("span",{class:h(t.classes.warningIcon)},null,2)],2)):t.el$.stage>1?(p(),C(ie,{key:4},[k(" Success "),d("span",{class:h(t.classes.uploaded)},[d("span",{class:h(t.classes.uploadedIcon)},null,2)],2)],2112)):k("v-if",!0),k(" Remove "),t.canRemove?(p(),C("div",{key:5,class:h(t.classes.remove),onClick:e[2]||(e[2]=Le((...a)=>t.remove&&t.remove(...a),["prevent"])),onKeypress:e[3]||(e[3]=Ue((...a)=>t.remove&&t.remove(...a),["enter","space"])),"aria-roledescription":"❎",role:"button",tabindex:"0"},[d("span",{class:h(t.classes.removeIcon)},null,2)],34)):k("v-if",!0),k(" Progress "),t.uploading?(p(),C("div",{key:6,class:h(t.classes.progressBar)},[d("div",{class:h(t.classes.progress),style:rn({width:t.progress+"%"})},null,6)],2)):k("v-if",!0)],16,s6)),[[Ve,t.visible]])}_l.render=f6;_l.__file="themes/blank/templates/elements/partials/FilePreview_gallery.vue";var Du={name:"GalleryPreview",render:_l.render,data(){return{merge:!0,defaultClasses:{container:"vf-file-preview-gallery",container_sm:"vf-file-preview-gallery-sm",container_md:"",container_lg:"vf-file-preview-gallery-lg",image:"vf-file-preview-gallery-image",image_sm:"vf-file-preview-gallery-image-sm",image_md:"",image_lg:"vf-file-preview-gallery-image-lg",image_link:"",image_static:"",img:"vf-file-preview-gallery-img",img_sm:"vf-file-preview-gallery-img-sm",img_md:"",img_lg:"vf-file-preview-gallery-img-lg",overlay:"vf-file-preview-gallery-overlay",overlay_sm:"vf-file-preview-gallery-overlay-sm",overlay_md:"",overlay_lg:"vf-file-preview-gallery-overlay-lg",upload:"vf-file-preview-gallery-upload",progressBar:"vf-file-preview-gallery-progress-bar",progress:"vf-file-preview-gallery-progress",warning:"vf-file-preview-gallery-warning",warningIcon:"vf-file-preview-gallery-warning-icon",uploaded:"vf-file-preview-gallery-uploaded",uploadedIcon:"vf-file-preview-gallery-uploaded-icon",remove:"vf-file-preview-gallery-remove",removeIcon:"vf-file-preview-gallery-remove-icon",assistiveText:"vf-assistive-text",$container:(t,{Size:e})=>[t.container,t[`container_${e}`]],$image:(t,{Size:e})=>[t.image,t[`image_${e}`]],$img:(t,{Size:e})=>[t.img,t[`img_${e}`]],$overlay:(t,{Size:e})=>[t.overlay,t[`overlay_${e}`]]}}}},v6=`.vf-file-preview-gallery {
  font-family: inherit;
  font-size: inherit;
  line-height: inherit;
  color: inherit;
  display: flex;
  justify-content: flex-start;
  flex-direction: column;
  transition: 0.2s background;
  width: var(--vf-gallery-size);
  height: var(--vf-gallery-size);
  position: relative;
}

.vf-file-preview-gallery:hover .vf-file-preview-gallery-overlay {
  opacity: 1;
  visibility: visible;
}

.vf-file-preview-gallery:hover .vf-file-preview-gallery-remove {
  opacity: 1;
  visibility: visible;
}

.vf-file-preview-gallery.vf-file-preview-gallery-sm {
  width: var(--vf-gallery-size-sm);
  height: var(--vf-gallery-size-sm);
}

.vf-file-preview-gallery.vf-file-preview-gallery-lg {
  width: var(--vf-gallery-size-lg);
  height: var(--vf-gallery-size-lg);
}

.vf-file-preview-gallery-overlay {
  position: absolute;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  background: rgba(255, 255, 255, 0.5);
  transition: 0.3s;
  opacity: 0;
  visibility: hidden;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: row;
  padding: 0.75rem;
  border-radius: var(--vf-radius-gallery);
}

.vf-file-preview-gallery-overlay.vf-file-preview-gallery-overlay-sm {
  border-radius: var(--vf-radius-gallery-sm);
}

.vf-file-preview-gallery-overlay.vf-file-preview-gallery-overlay-lg {
  border-radius: var(--vf-radius-gallery-lg);
}

.vf-file-preview-gallery-upload {
  font-size: 0.75rem;
  white-space: nowrap;
  background: #FFFFFF;
  padding: 0.0625rem 0.4375rem;
  background: var(--vf-primary);
  color: var(--vf-color-on-primary);
  border-radius: var(--vf-radius-small);
  text-decoration: none;
  transition: 0.15s;
  outline: 0px solid var(--vf-ring-color);
  outline-offset: 0;
}

.vf-file-preview-gallery-upload:hover {
  transform: scale(1.05);
}

.vf-file-preview-gallery-upload:focus {
  outline: var(--vf-ring-width) solid var(--vf-ring-color);
}

.vf-file-preview-gallery-image {
  width: 100%;
  height: 100%;
  font-size: 0;
  background: var(--vf-bg-passive);
  border-radius: var(--vf-radius-gallery);
  outline: none;
}

.vf-file-preview-gallery-image.vf-file-preview-gallery-image-sm {
  border-radius: var(--vf-radius-gallery-sm);
}

.vf-file-preview-gallery-image.vf-file-preview-gallery-image-lg {
  border-radius: var(--vf-radius-gallery-lg);
}

.vf-file-preview-gallery-img {
  width: 100%;
  height: 100%;
  -o-object-fit: cover;
     object-fit: cover;
  border-radius: var(--vf-radius-gallery);
}

.vf-file-preview-gallery-img[src=""], .vf-file-preview-gallery-img[src="data:"], .vf-file-preview-gallery-img:not([src]) {
  opacity: 0;
}

.vf-file-preview-gallery-img.vf-file-preview-gallery-img-sm {
  border-radius: var(--vf-radius-gallery-sm);
}

.vf-file-preview-gallery-img.vf-file-preview-gallery-img-lg {
  border-radius: var(--vf-radius-gallery-lg);
}

.vf-file-preview-gallery-progress-bar {
  border-radius: 0;
  height: 0.1875rem;
  position: absolute;
  left: 0.1875rem;
  bottom: 0.1875rem;
  z-index: 1;
  background: #FFFFFF;
  right: 0.1875rem;
}

.vf-file-preview-gallery-progress {
  border-radius: 0;
  height: 100%;
  background: var(--vf-primary);
  transition: 0.6s ease;
}

.vf-file-preview-gallery-remove,
.vf-file-preview-gallery-uploaded,
.vf-file-preview-gallery-warning {
  display: flex;
  width: 1rem;
  height: 1rem;
  align-items: center;
  justify-content: center;
}

.vf-file-preview-gallery-remove-icon,
.vf-file-preview-gallery-uploaded-icon,
.vf-file-preview-gallery-warning-icon {
  width: 100%;
  height: 100%;
  display: block;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  mask-position: center center;
  -webkit-mask-position: center center;
}

.vf-file-preview-gallery-remove {
  position: absolute;
  right: 0.1875rem;
  top: 0.1875rem;
  opacity: 0;
  visibility: hidden;
  background-color: var(--vf-bg-passive);
  border-radius: 999px;
  transition: 0.15s;
}

.vf-file-preview-gallery-remove:hover {
  filter: brightness(0.9);
}

.vf-file-preview-gallery-remove-icon {
  mask-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 320 512' fill='currentColor' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M207.6 256l107.72-107.72c6.23-6.23 6.23-16.34 0-22.58l-25.03-25.03c-6.23-6.23-16.34-6.23-22.58 0L160 208.4 52.28 100.68c-6.23-6.23-16.34-6.23-22.58 0L4.68 125.7c-6.23 6.23-6.23 16.34 0 22.58L112.4 256 4.68 363.72c-6.23 6.23-6.23 16.34 0 22.58l25.03 25.03c6.23 6.23 16.34 6.23 22.58 0L160 303.6l107.72 107.72c6.23 6.23 16.34 6.23 22.58 0l25.03-25.03c6.23-6.23 6.23-16.34 0-22.58L207.6 256z'%3E%3C/path%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 320 512' fill='currentColor' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M207.6 256l107.72-107.72c6.23-6.23 6.23-16.34 0-22.58l-25.03-25.03c-6.23-6.23-16.34-6.23-22.58 0L160 208.4 52.28 100.68c-6.23-6.23-16.34-6.23-22.58 0L4.68 125.7c-6.23 6.23-6.23 16.34 0 22.58L112.4 256 4.68 363.72c-6.23 6.23-6.23 16.34 0 22.58l25.03 25.03c6.23 6.23 16.34 6.23 22.58 0L160 303.6l107.72 107.72c6.23 6.23 16.34 6.23 22.58 0l25.03-25.03c6.23-6.23 6.23-16.34 0-22.58L207.6 256z'%3E%3C/path%3E%3C/svg%3E");
  mask-size: 0.75rem 0.75rem;
  -webkit-mask-size: 0.75rem 0.75rem;
  background-color: var(--vf-color-passive);
}

.vf-file-preview-gallery-uploaded {
  position: absolute;
  right: 0.1875rem;
  bottom: 0.1875rem;
  border-radius: 999px;
  background-color: var(--vf-bg-success);
}

.vf-file-preview-gallery-uploaded-icon {
  mask-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 512 512' fill='currentColor' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M173.898 439.404l-166.4-166.4c-9.997-9.997-9.997-26.206 0-36.204l36.203-36.204c9.997-9.998 26.207-9.998 36.204 0L192 312.69 432.095 72.596c9.997-9.997 26.207-9.997 36.204 0l36.203 36.204c9.997 9.997 9.997 26.206 0 36.204l-294.4 294.401c-9.998 9.997-26.207 9.997-36.204-.001z'%3E%3C/path%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 512 512' fill='currentColor' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M173.898 439.404l-166.4-166.4c-9.997-9.997-9.997-26.206 0-36.204l36.203-36.204c9.997-9.998 26.207-9.998 36.204 0L192 312.69 432.095 72.596c9.997-9.997 26.207-9.997 36.204 0l36.203 36.204c9.997 9.997 9.997 26.206 0 36.204l-294.4 294.401c-9.998 9.997-26.207 9.997-36.204-.001z'%3E%3C/path%3E%3C/svg%3E");
  mask-size: 0.625rem 0.625rem;
  -webkit-mask-size: 0.625rem 0.625rem;
  background-color: var(--vf-color-success);
}

.vf-file-preview-gallery-warning {
  position: absolute;
  right: 0.1875rem;
  bottom: 0.1875rem;
  border-radius: 999px;
  background-color: var(--vf-bg-danger);
}

.vf-file-preview-gallery-warning-icon {
  mask-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 192 512' fill='currentColor' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M176 432c0 44.112-35.888 80-80 80s-80-35.888-80-80 35.888-80 80-80 80 35.888 80 80zM25.26 25.199l13.6 272C39.499 309.972 50.041 320 62.83 320h66.34c12.789 0 23.331-10.028 23.97-22.801l13.6-272C167.425 11.49 156.496 0 142.77 0H49.23C35.504 0 24.575 11.49 25.26 25.199z'%3E%3C/path%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 192 512' fill='currentColor' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M176 432c0 44.112-35.888 80-80 80s-80-35.888-80-80 35.888-80 80-80 80 35.888 80 80zM25.26 25.199l13.6 272C39.499 309.972 50.041 320 62.83 320h66.34c12.789 0 23.331-10.028 23.97-22.801l13.6-272C167.425 11.49 156.496 0 142.77 0H49.23C35.504 0 24.575 11.49 25.26 25.199z'%3E%3C/path%3E%3C/svg%3E");
  mask-size: 0.625rem 0.625rem;
  -webkit-mask-size: 0.625rem 0.625rem;
  background-color: var(--vf-color-danger);
}

.vf-file-removing .vf-file-preview-gallery {
  opacity: 0.6;
}

.is-sorting .vf-file-preview-gallery:hover .vf-file-preview-gallery-overlay, .vf-gallery.is-disabled .vf-file-preview-gallery:hover .vf-file-preview-gallery-overlay {
  opacity: 0;
  visibility: hidden;
}

.is-sorting .vf-file-preview-gallery:hover .vf-file-preview-gallery-remove, .vf-gallery.is-disabled .vf-file-preview-gallery:hover .vf-file-preview-gallery-remove {
  opacity: 0;
  visibility: hidden;
}`;te(v6);Du.__file="themes/vueform/templates/elements/partials/FilePreview_gallery.vue";var Ml={};const h6=["value","name","id","disabled","aria-label"],m6=["innerHTML"];function g6(t,e,n,r,i,l){return p(),C("label",{class:h(t.classes.container)},[M(t.$slots,"default",V({name:t.name},{classes:t.classes,isDisabled:t.isDisabled,id:t.id,item:t.item,value:t.value,items:t.items,index:t.index}),()=>[Te(d("input",V({type:"radio","onUpdate:modelValue":e[0]||(e[0]=a=>t.el$.value=a)},t.attrs,{value:t.value,class:t.classes.input,name:t.name,id:t.id,disabled:t.isDisabled,"aria-label":t.item.label}),null,16,h6),[[si,t.el$.value]]),d("span",{class:h(t.classes.text),innerHTML:t.item.label},null,10,m6)])],2)}Ml.render=g6;Ml.__file="themes/blank/templates/elements/partials/RadiogroupRadio.vue";var Ru={name:"RadiogroupRadio",render:Ml.render,data(){return{merge:!0,defaultClasses:{container:"vf-radio-container",input:"vf-radio",input_enabled:"",input_disabled:"",input_sm:"vf-radio-sm",input_md:"",input_lg:"vf-radio-lg",text:"vf-radio-text",$input:(t,{isDisabled:e,Size:n})=>[t.input,t[`input_${n}`],e?t.input_disabled:t.input_enabled]}}}},b6="/* Some styles are contained in Vueform.vue & RadiogroupElement.vue */";te(b6);Ru.__file="themes/vueform/templates/elements/partials/RadiogroupRadio.vue";var Il={};const w6=["aria-checked"],y6=["title"],k6=["value","name","id","disabled"],C6=["innerHTML"];function E6(t,e,n,r,i,l){return p(),C("label",V(t.attrs,{class:t.classes.container,tabindex:"0",role:"radio","aria-checked":t.checked,onKeypress:e[1]||(e[1]=Ue(Le(a=>t.el$.update(t.value),["prevent"]),["space"])),onKeydown:e[2]||(e[2]=(...a)=>t.handleKeydown&&t.handleKeydown(...a))}),[M(t.$slots,"default",V({name:t.name},{classes:t.classes,isDisabled:t.isDisabled,id:t.id,item:t.item,value:t.value,items:t.items,index:t.index}),()=>[d("div",{class:h(t.classes.wrapper),title:t.item.label},[Te(d("input",{type:"radio","onUpdate:modelValue":e[0]||(e[0]=a=>t.el$.model=a),value:t.value,class:h(t.classes.input),name:t.name,id:t.id,disabled:t.isDisabled},null,10,k6),[[si,t.el$.model]]),d("span",{class:h(t.classes.text),innerHTML:`${t.item.label}`},null,10,C6)],10,y6)])],16,w6)}Il.render=E6;Il.__file="themes/blank/templates/elements/partials/RadiogroupRadio_tabs.vue";var Fu={name:"RadiogroupRadio_tabs",render:Il.render,data(){return{merge:!0,defaultClasses:{container:"vf-radio-tabs-container",wrapper:"vf-radio-tabs",wrapper_not_last:"vf-radio-tabs-not-last",wrapper_first:"vf-radio-tabs-first",wrapper_first_sm:"vf-radio-tabs-first-sm",wrapper_first_md:"",wrapper_first_lg:"vf-radio-tabs-first-lg",wrapper_last:"vf-radio-tabs-last",wrapper_last_sm:"vf-radio-tabs-last-sm",wrapper_last_md:"",wrapper_last_lg:"vf-radio-tabs-last-lg",wrapper_selected:"vf-radio-tabs-selected",wrapper_unselected:"vf-radio-tabs-unselected",wrapper_disabled:"vf-radio-tabs-disabled",wrapper_sm:"vf-radio-tabs-sm",wrapper_md:"",wrapper_lg:"vf-radio-tabs-lg",input:"vf-radio-tabs-input",text:"",$wrapper:(t,{index:e,items:n,el$:r,value:i,isDisabled:l,Size:a})=>[t.wrapper,t[`wrapper_${a}`],e<Object.keys(n).length-1?t.wrapper_not_last:null,e===0?t.wrapper_first:null,e===Object.keys(n).length-1?t.wrapper_last:null,r.value==i?t.wrapper_selected:t.wrapper_unselected,l?t.wrapper_disabled:null]}}}},A6=`/* Some styles are contained in Vueform.vue & RadiogroupElement.vue */

.vf-radio-tabs-container {
  display: flex;
  cursor: pointer;
}

.vf-radio-tabs {
  display: flex;
  align-items: center;
  justify-content: center;
  border-style: solid;
  border-width: var(--vf-border-width-input-t) var(--vf-border-width-input-r) var(--vf-border-width-input-b) var(--vf-border-width-input-l);
  border-color: var(--vf-border-color-input);
  padding: var(--vf-py-group-tabs) var(--vf-px-group-tabs);
  width: 100%;
  background: var(--vf-bg-input);
  color: var(--vf-color-input);
  font-size: var(--vf-font-size);
  line-height: var(--vf-line-height);
  letter-spacing: var(--vf-letter-spacing);
}

.vf-radio-tabs.vf-radio-tabs-not-last {
  border-right: 0;
}

.vf-radio-tabs.vf-radio-tabs-first {
  border-radius: var(--vf-radius-input);
  border-top-right-radius: 0;
  border-bottom-right-radius: 0;
}

.vf-radio-tabs.vf-radio-tabs-first.vf-radio-tabs-first-sm {
  border-radius: var(--vf-radius-input-sm);
  border-top-right-radius: 0;
  border-bottom-right-radius: 0;
}

.vf-radio-tabs.vf-radio-tabs-first.vf-radio-tabs-first-lg {
  border-radius: var(--vf-radius-input-lg);
  border-top-right-radius: 0;
  border-bottom-right-radius: 0;
}

.vf-radio-tabs.vf-radio-tabs-last {
  border-radius: var(--vf-radius-input-lg);
  border-top-left-radius: 0;
  border-bottom-left-radius: 0;
}

.vf-radio-tabs.vf-radio-tabs-last.vf-radio-tabs-last-sm {
  border-radius: var(--vf-radius-input-sm);
  border-top-left-radius: 0;
  border-bottom-left-radius: 0;
}

.vf-radio-tabs.vf-radio-tabs-last.vf-radio-tabs-last-lg {
  border-radius: var(--vf-radius-input-lg);
  border-top-left-radius: 0;
  border-bottom-left-radius: 0;
}

.vf-radio-tabs.vf-radio-tabs-selected {
  background-color: var(--vf-primary);
  border-color: rgba(0, 0, 0, 0.15);
  color: var(--vf-color-on-primary);
}

.vf-radio-tabs.vf-radio-tabs-unselected {
  border-color: var(--vf-border-color-input);
}

.vf-radio-tabs.vf-radio-tabs-unselected:hover:not(.vf-radio-tabs-disabled) {
  background-color: var(--vf-bg-input-hover);
  color: var(--vf-color-input-hover);
}

.vf-radio-tabs.vf-radio-tabs-disabled {
  opacity: 0.5;
}

.vf-radio-tabs.vf-radio-tabs-sm {
  padding: var(--vf-py-group-tabs-sm) var(--vf-px-group-tabs-sm);
  font-size: var(--vf-font-size-sm);
  line-height: var(--vf-line-height-sm);
  letter-spacing: var(--vf-letter-spacing-sm);
}

.vf-radio-tabs.vf-radio-tabs-lg {
  padding: var(--vf-py-group-tabs-lg) var(--vf-px-group-tabs-lg);
  font-size: var(--vf-font-size-lg);
  line-height: var(--vf-line-height-lg);
  letter-spacing: var(--vf-letter-spacing-lg);
}

.vf-radio-tabs-input {
  display: none;
}`;te(A6);Fu.__file="themes/vueform/templates/elements/partials/RadiogroupRadio_tabs.vue";var Bl={};const L6=["value","name","id","disabled"],x6=["innerHTML"],T6=["innerHTML"];function S6(t,e,n,r,i,l){return p(),C("label",{class:h(t.classes.container)},[M(t.$slots,"default",V({name:t.name},{classes:t.classes,isDisabled:t.isDisabled,id:t.id,item:t.item,value:t.value,items:t.items,index:t.index}),()=>[d("div",{class:h(t.classes.wrapper)},[Te(d("input",V({type:"radio","onUpdate:modelValue":e[0]||(e[0]=a=>t.el$.model=a)},t.attrs,{value:t.value,class:t.classes.input,name:t.name,id:t.id,disabled:t.isDisabled}),null,16,L6),[[si,t.el$.model]]),d("div",{class:h(t.classes.text_wrapper)},[d("div",{class:h(t.classes.text),innerHTML:t.item.label},null,10,x6),d("div",{class:h(t.classes.description),innerHTML:t.item.description},null,10,T6)],2)],2)])],2)}Bl.render=S6;Bl.__file="themes/blank/templates/elements/partials/RadiogroupRadio_blocks.vue";var Ou={name:"RadiogroupRadio_blocks",render:Bl.render,data(){return{merge:!0,defaultClasses:{container:"vf-radio-blocks-container",container_sm:"vf-radio-blocks-container-sm",container_md:"",container_lg:"vf-radio-blocks-container-lg",wrapper:"vf-radio-blocks",wrapper_not_last:"vf-radio-blocks-not-last",wrapper_first:"vf-radio-blocks-first",wrapper_first_sm:"vf-radio-blocks-first-sm",wrapper_first_md:"",wrapper_first_lg:"vf-radio-blocks-first-lg",wrapper_last:"vf-radio-blocks-last",wrapper_last_sm:"vf-radio-blocks-last-sm",wrapper_last_md:"",wrapper_last_lg:"vf-radio-blocks-last-lg",wrapper_selected:"vf-radio-blocks-selected",wrapper_unselected:"vf-radio-blocks-unselected",wrapper_disabled:"vf-radio-blocks-disabled",wrapper_sm:"vf-radio-blocks-sm",wrapper_md:"",wrapper_lg:"vf-radio-blocks-lg",input:"vf-radio",input_enabled:"",input_disabled:"",input_sm:"vf-radio-sm",input_md:"",input_lg:"vf-radio-lg",text_wrapper:"vf-radio-blocks-text-wrapper",text:"vf-radio-blocks-text",description:"vf-radio-blocks-description",description_sm:"vf-radio-blocks-description-sm",description_md:"",description_lg:"vf-radio-blocks-description-lg",$container:(t,{Size:e})=>[t.container,t[`container_${e}`]],$wrapper:(t,{index:e,items:n,el$:r,value:i,isDisabled:l,Size:a})=>[t.wrapper,t[`wrapper_${a}`],e<Object.keys(n).length-1?t.wrapper_not_last:null,e===0?t.wrapper_first:null,e===0?t[`wrapper_first_${a}`]:null,e===Object.keys(n).length-1?t.wrapper_last:null,e===Object.keys(n).length-1?t[`wrapper_last_${a}`]:null,r.value==i?t.wrapper_selected:t.wrapper_unselected,l?t.wrapper_disabled:null],$input:(t,{isDisabled:e,Size:n})=>[t.input,t[`input_${n}`],e?t.input_disabled:t.input_enabled],$description:(t,{Size:e})=>[t.description,t[`description_${e}`]]}}}},_6=`/* Some styles are contained in Vueform.vue & RadiogroupElement.vue */

.vf-radio-blocks-container {
  display: flex;
  align-items: flex-start;
  cursor: pointer;
  background: var(--vf-bg-input);
  border-radius: var(--vf-radius-large);
}

.vf-radio-blocks-container .vf-radio {
  margin-top: 0;
}

.vf-radio-blocks-container.vf-radio-blocks-container-sm {
  border-radius: var(--vf-radius-large-sm);
}

.vf-radio-blocks-container.vf-radio-blocks-container-lg {
  border-radius: var(--vf-radius-large-lg);
}

.vf-radio-blocks {
  display: flex;
  align-items: center;
  border-style: solid;
  border-width: var(--vf-border-width-input-t) var(--vf-border-width-input-r) var(--vf-border-width-input-b) var(--vf-border-width-input-l);
  border-color: var(--vf-border-color-input);
  width: 100%;
  padding: var(--vf-py-group-blocks) var(--vf-px-group-blocks);
  background: var(--vf-bg-input);
  color: var(--vf-color-input);
  font-size: var(--vf-font-size);
  line-height: var(--vf-line-height);
  letter-spacing: var(--vf-letter-spacing);
}

.vf-radio-blocks.vf-radio-blocks-not-last {
  border-bottom-width: 0;
}

.vf-radio-blocks.vf-radio-blocks-first {
  border-radius: var(--vf-radius-large);
  border-bottom-left-radius: 0;
  border-bottom-right-radius: 0;
}

.vf-radio-blocks.vf-radio-blocks-first.vf-radio-blocks-first-sm {
  border-radius: var(--vf-radius-large-sm);
  border-bottom-left-radius: 0;
  border-bottom-right-radius: 0;
}

.vf-radio-blocks.vf-radio-blocks-first.vf-radio-blocks-first-lg {
  border-radius: var(--vf-radius-large-lg);
  border-bottom-left-radius: 0;
  border-bottom-right-radius: 0;
}

.vf-radio-blocks.vf-radio-blocks-last {
  border-radius: var(--vf-radius-large);
  border-top-left-radius: 0;
  border-top-right-radius: 0;
}

.vf-radio-blocks.vf-radio-blocks-last.vf-radio-blocks-last-sm {
  border-radius: var(--vf-radius-large-sm);
  border-top-left-radius: 0;
  border-top-right-radius: 0;
}

.vf-radio-blocks.vf-radio-blocks-last.vf-radio-blocks-last-lg {
  border-radius: var(--vf-radius-large-lg);
  border-top-left-radius: 0;
  border-top-right-radius: 0;
}

.vf-radio-blocks.vf-radio-blocks-selected {
  background-color: var(--vf-bg-selected);
}

.vf-radio-blocks.vf-radio-blocks-disabled {
  opacity: 0.5;
}

.vf-radio-blocks.vf-radio-blocks-sm {
  padding: var(--vf-py-group-blocks-sm) var(--vf-px-group-blocks-sm);
  font-size: var(--vf-font-size-sm);
  line-height: var(--vf-line-height-sm);
  letter-spacing: var(--vf-letter-spacing-sm);
}

.vf-radio-blocks.vf-radio-blocks-lg {
  padding: var(--vf-py-group-blocks-lg) var(--vf-px-group-blocks-lg);
  font-size: var(--vf-font-size-lg);
  line-height: var(--vf-line-height-lg);
  letter-spacing: var(--vf-letter-spacing-lg);
}

.vf-radio-blocks-text-wrapper {
  margin-left: 0.5rem;
}

.vf-radio-blocks-description {
  color: var(--vf-color-muted);
  font-size: var(--vf-font-size-small);
  line-height: var(--vf-line-height-small);
  letter-spacing: var(--vf-letter-spacing-small);
  margin-top: -0.125rem;
}

.vf-radio-blocks-description.vf-radio-blocks-description-sm {
  font-size: var(--vf-font-size-small-sm);
  line-height: var(--vf-line-height-small-sm);
  letter-spacing: var(--vf-letter-spacing-small-sm);
  margin-top: -0.125rem;
}

.vf-radio-blocks-description.vf-radio-blocks-description-lg {
  font-size: var(--vf-font-size-small-lg);
  line-height: var(--vf-line-height-small-lg);
  letter-spacing: var(--vf-letter-spacing-small-lg);
  margin-top: -0.125rem;
}`;te(_6);Ou.__file="themes/vueform/templates/elements/partials/RadiogroupRadio_blocks.vue";var Dl={};const M6=["id","placeholder","autocomplete"];function I6(t,e,n,r,i,l){return p(),C("input",V({type:"text",class:t.classes.datepicker,id:t.id,placeholder:t.placeholder,autocomplete:t.autocomplete},t.attrs,{ref:"input"}),null,16,M6)}Dl.render=I6;Dl.__file="themes/blank/templates/wrappers/DatepickerWrapper.vue";var $u={name:"DatepickerWrapper",render:Dl.render,data(){return{merge:!0,defaultClasses:{datepicker:"",calendarContainer:"flatpickr-calendar-container"}}}},B6=`.flatpickr-wrapper {
  width: 100%;
  height: 100%;
}

.flatpickr-calendar {
  background: transparent;
  opacity: 0;
  display: none;
  text-align: center;
  visibility: hidden;
  padding: 0;
  animation: none;
  direction: ltr;
  border: 0;
  font-size: 14px;
  line-height: 24px;
  border-radius: 5px;
  position: absolute;
  width: 307.875px;
  box-sizing: border-box;
  touch-action: manipulation;
  box-shadow: 0 3px 13px rgba(0, 0, 0, 0.08);
  color: var(--vf-color-input);
}

.flatpickr-calendar.open,
.flatpickr-calendar.inline {
  opacity: 1;
  max-height: 640px;
  visibility: visible;
}

.flatpickr-calendar.open {
  display: inline-block;
  z-index: 999;
}

.flatpickr-calendar.animate.open {
  animation: fpFadeInDown 300ms cubic-bezier(0.23, 1, 0.32, 1);
}

.flatpickr-calendar.inline {
  display: block;
  position: relative;
  top: 2px;
}

.flatpickr-calendar.rightMost {
  left: auto;
  right: 0;
}

.flatpickr-calendar.static {
  position: absolute;
  top: calc(100% + 2px);
}

.flatpickr-calendar.static.open {
  z-index: 999;
  display: block;
}

.flatpickr-calendar.multiMonth .flatpickr-days .dayContainer:nth-child(n+1) .flatpickr-day.inRange:nth-child(7n+7) {
  box-shadow: none !important;
}

.flatpickr-calendar.multiMonth .flatpickr-days .dayContainer:nth-child(n+2) .flatpickr-day.inRange:nth-child(7n+1) {
  box-shadow: -2px 0 0 var(--vf-bg-selected), 5px 0 0 var(--vf-bg-selected);
}

.flatpickr-calendar .hasWeeks .dayContainer,
.flatpickr-calendar .hasTime .dayContainer {
  border-bottom: 0;
  border-bottom-right-radius: 0;
  border-bottom-left-radius: 0;
}

.flatpickr-calendar .hasWeeks .dayContainer {
  border-left: 0;
}

.flatpickr-calendar.hasTime .flatpickr-time {
  height: 40px;
  border-top: 1px solid var(--vf-border-color-input);
}

.flatpickr-calendar.hasTime .flatpickr-innerContainer {
  border-bottom: 0;
}

.flatpickr-calendar.noCalendar.hasTime .flatpickr-time {
  height: auto;
}

.flatpickr-calendar:before,
.flatpickr-calendar:after {
  position: absolute;
  display: block;
  pointer-events: none;
  border: solid transparent;
  content: "";
  height: 0;
  width: 0;
  left: 22px;
}

.flatpickr-calendar.rightMost:before,
.flatpickr-calendar.arrowRight:before,
.flatpickr-calendar.rightMost:after,
.flatpickr-calendar.arrowRight:after {
  left: auto;
  right: 22px;
}

.flatpickr-calendar.arrowCenter:before,
.flatpickr-calendar.arrowCenter:after {
  left: 50%;
  right: 50%;
}

.flatpickr-calendar:before {
  border-width: 5px;
  margin: 0 -5px;
  box-sizing: border-box;
}

.flatpickr-calendar:after {
  border-width: 4px;
  margin: 0 -4px;
  box-sizing: border-box;
}

.flatpickr-calendar.arrowTop:before,
.flatpickr-calendar.arrowTop:after {
  bottom: 100%;
}

.flatpickr-calendar.arrowTop:before {
  border-bottom-color: var(--vf-bg-date-head);
  box-sizing: border-box;
}

.flatpickr-calendar.arrowTop:after {
  border-bottom-color: var(--vf-bg-date-head);
  box-sizing: border-box;
}

.flatpickr-calendar.arrowBottom:before,
.flatpickr-calendar.arrowBottom:after {
  top: 100%;
}

.flatpickr-calendar.arrowBottom:before {
  border-top-color: var(--vf-bg-date-head);
}

.flatpickr-calendar.arrowBottom:after {
  border-top-color: var(--vf-bg-date-head);
}

.flatpickr-calendar:focus {
  outline: 0;
}

.flatpickr-wrapper {
  position: relative;
  display: flex;
}

.flatpickr-months {
  display: flex;
}

.flatpickr-months .flatpickr-month {
  border-radius: 5px 5px 0 0;
  background: var(--vf-bg-date-head);
  color: var(--vf-color-date-head);
  fill: var(--vf-color-date-head);
  height: 34px;
  line-height: 1;
  text-align: center;
  position: relative;
  -webkit-user-select: none;
  -moz-user-select: none;
  user-select: none;
  overflow: hidden;
  flex: 1;
}

.flatpickr-months .flatpickr-prev-month,
.flatpickr-months .flatpickr-next-month {
  text-decoration: none;
  cursor: pointer;
  position: absolute;
  top: 0;
  height: 34px;
  padding: 10px;
  z-index: 1;
  color: var(--vf-color-date-head);
  fill: var(--vf-color-date-head);
}

.flatpickr-months .flatpickr-prev-month.flatpickr-disabled,
.flatpickr-months .flatpickr-next-month.flatpickr-disabled {
  display: none;
}

.flatpickr-months .flatpickr-prev-month i,
.flatpickr-months .flatpickr-next-month i {
  position: relative;
}

.flatpickr-months .flatpickr-prev-month.flatpickr-prev-month,
.flatpickr-months .flatpickr-next-month.flatpickr-prev-month {
  left: 0;
}

.flatpickr-months .flatpickr-prev-month.flatpickr-next-month,
.flatpickr-months .flatpickr-next-month.flatpickr-next-month {
  right: 0;
}

.flatpickr-months .flatpickr-prev-month:hover,
.flatpickr-months .flatpickr-next-month:hover {
  color: var(--vf-color-date-head);
}

.flatpickr-months .flatpickr-prev-month:hover svg,
.flatpickr-months .flatpickr-next-month:hover svg {
  opacity: 1;
}

.flatpickr-months .flatpickr-prev-month svg,
.flatpickr-months .flatpickr-next-month svg {
  width: 14px;
  height: 14px;
  opacity: 0.7;
  display: block;
}

.flatpickr-months .flatpickr-prev-month svg path,
.flatpickr-months .flatpickr-next-month svg path {
  transition: fill 0.1s;
  fill: inherit;
}

.numInputWrapper {
  position: relative;
  height: auto;
}

.numInputWrapper input,
.numInputWrapper span {
  display: inline-block;
}

.numInputWrapper input {
  width: 100%;
}

.numInputWrapper input::-ms-clear {
  display: none;
}

.numInputWrapper input::-webkit-outer-spin-button,
.numInputWrapper input::-webkit-inner-spin-button {
  margin: 0;
  -webkit-appearance: none;
}

.numInputWrapper span {
  position: absolute;
  right: 0;
  width: 14px;
  padding: 0 4px 0 2px;
  height: 50%;
  line-height: 50%;
  opacity: 0;
  cursor: pointer;
  border: 1px solid var(--vf-border-color-input);
  box-sizing: border-box;
}

.numInputWrapper span:hover {
  background: var(--vf-bg-selected);
}

.numInputWrapper span:active {
  background: var(--vf-bg-selected);
}

.numInputWrapper span:after {
  display: block;
  content: "";
  position: absolute;
}

.numInputWrapper span.arrowUp {
  top: 0;
  border-bottom: 0;
}

.numInputWrapper span.arrowUp:after {
  border-left: 4px solid transparent;
  border-right: 4px solid transparent;
  border-bottom: 4px solid var(--vf-color-input);
  top: 26%;
  box-sizing: border-box;
}

.numInputWrapper span.arrowDown {
  top: 50%;
}

.numInputWrapper span.arrowDown:after {
  border-left: 4px solid transparent;
  border-right: 4px solid transparent;
  border-top: 4px solid var(--vf-color-input);
  top: 40%;
  box-sizing: border-box;
}

.numInputWrapper span svg {
  width: inherit;
  height: auto;
}

.numInputWrapper span svg path {
  fill: var(--vf-color-input);
}

.numInputWrapper:hover {
  background: rgba(0, 0, 0, 0.05);
}

.numInputWrapper:hover span {
  opacity: 1;
}

.flatpickr-current-month {
  font-size: 135%;
  line-height: inherit;
  font-weight: 300;
  color: inherit;
  position: absolute;
  width: 75%;
  left: 12.5%;
  padding: 7.48px 0 0 0;
  line-height: 1;
  height: 34px;
  display: inline-block;
  text-align: center;
  transform: translate3d(0px, 0px, 0px);
}

.flatpickr-current-month span.cur-month {
  font-family: inherit;
  font-weight: 700;
  color: inherit;
  display: inline-block;
  margin-left: 0.5ch;
  padding: 0;
}

.flatpickr-current-month span.cur-month:hover {
  background: rgba(0, 0, 0, 0.05);
}

.flatpickr-current-month .numInputWrapper {
  width: 6ch;
  width: 7ch\\0 ;
  display: inline-block;
}

.flatpickr-current-month .numInputWrapper span.arrowUp:after {
  border-bottom-color: var(--vf-color-date-head);
}

.flatpickr-current-month .numInputWrapper span.arrowDown:after {
  border-top-color: var(--vf-color-date-head);
}

.flatpickr-current-month input.cur-year {
  background: transparent;
  box-sizing: border-box;
  color: inherit;
  cursor: text;
  padding: 0 0 0 0.5ch;
  margin: 0;
  display: inline-block;
  font-size: inherit;
  font-family: inherit;
  font-weight: 300;
  line-height: inherit;
  height: auto;
  border: 0;
  border-radius: 0;
  vertical-align: initial;
  -webkit-appearance: textfield;
  -moz-appearance: textfield;
  appearance: textfield;
}

.flatpickr-current-month input.cur-year:focus {
  outline: 0;
}

.flatpickr-current-month input.cur-year[disabled],
.flatpickr-current-month input.cur-year[disabled]:hover {
  font-size: 100%;
  color: var(--vf-gray-300);
  background: transparent;
  pointer-events: none;
}

.flatpickr-current-month .flatpickr-monthDropdown-months {
  appearance: menulist;
  background: var(--vf-bg-date-head);
  border: none;
  border-radius: 0;
  box-sizing: border-box;
  color: inherit;
  cursor: pointer;
  font-size: inherit;
  font-family: inherit;
  font-weight: 300;
  height: auto;
  line-height: inherit;
  margin: -1px 0 0 0;
  outline: none;
  padding: 0 0 0 0.5ch;
  position: relative;
  vertical-align: initial;
  -webkit-box-sizing: border-box;
  -webkit-appearance: menulist;
  -moz-appearance: menulist;
  width: auto;
}

.flatpickr-current-month .flatpickr-monthDropdown-months:focus,
.flatpickr-current-month .flatpickr-monthDropdown-months:active {
  outline: none;
}

.flatpickr-current-month .flatpickr-monthDropdown-months:hover {
  background: rgba(0, 0, 0, 0.1);
}

.flatpickr-current-month .flatpickr-monthDropdown-months .flatpickr-monthDropdown-month {
  background-color: var(--vf-bg-date-head);
  outline: none;
  padding: 0;
}

.flatpickr-weekdays {
  background: var(--vf-bg-date-head);
  text-align: center;
  overflow: hidden;
  width: 100%;
  display: flex;
  align-items: center;
  height: 28px;
}

.flatpickr-weekdays .flatpickr-weekdaycontainer {
  display: flex;
  flex: 1;
}

span.flatpickr-weekday {
  cursor: default;
  font-size: 90%;
  background: var(--vf-bg-date-head);
  color: var(--vf-color-date-head);
  line-height: 1;
  margin: 0;
  text-align: center;
  display: block;
  flex: 1;
  font-weight: bolder;
}

.dayContainer,
.flatpickr-weeks {
  padding: 1px 0 0 0;
}

.flatpickr-days {
  position: relative;
  overflow: hidden;
  display: flex;
  align-items: flex-start;
  width: 307.875px;
  background-color: var(--vf-bg-input);
}

.flatpickr-days:focus {
  outline: 0;
}

.dayContainer {
  padding: 0;
  outline: 0;
  text-align: left;
  width: 307.875px;
  min-width: 307.875px;
  max-width: 307.875px;
  box-sizing: border-box;
  display: inline-block;
  display: flex;
  flex-wrap: wrap;
  -ms-flex-wrap: wrap;
  justify-content: space-around;
  transform: translate3d(0px, 0px, 0px);
  opacity: 1;
}

.dayContainer + .dayContainer {
  box-shadow: -1px 0 0 var(--vf-gray-200);
}

.flatpickr-day {
  background: none;
  border: 1px solid transparent;
  border-radius: 150px;
  box-sizing: border-box;
  cursor: pointer;
  font-weight: 400;
  width: 14.2857143%;
  flex-basis: 14.2857143%;
  max-width: 39px;
  height: 39px;
  line-height: 38px;
  margin: 0;
  display: inline-block;
  position: relative;
  justify-content: center;
  text-align: center;
}

.flatpickr-day.inRange,
.flatpickr-day.prevMonthDay.inRange,
.flatpickr-day.nextMonthDay.inRange,
.flatpickr-day.today.inRange,
.flatpickr-day.prevMonthDay.today.inRange,
.flatpickr-day.nextMonthDay.today.inRange,
.flatpickr-day:hover,
.flatpickr-day.prevMonthDay:hover,
.flatpickr-day.nextMonthDay:hover,
.flatpickr-day:focus,
.flatpickr-day.prevMonthDay:focus,
.flatpickr-day.nextMonthDay:focus {
  cursor: pointer;
  outline: 0;
  background: var(--vf-bg-selected);
  border-color: var(--vf-bg-selected);
}

.flatpickr-day.today {
  border-color: var(--vf-bg-selected);
}

.flatpickr-day.today:hover,
.flatpickr-day.today:focus {
  border-color: var(--vf-bg-selected);
  background: var(--vf-bg-selected);
}

.flatpickr-day.selected,
.flatpickr-day.startRange,
.flatpickr-day.endRange,
.flatpickr-day.selected.inRange,
.flatpickr-day.startRange.inRange,
.flatpickr-day.endRange.inRange,
.flatpickr-day.selected:focus,
.flatpickr-day.startRange:focus,
.flatpickr-day.endRange:focus,
.flatpickr-day.selected:hover,
.flatpickr-day.startRange:hover,
.flatpickr-day.endRange:hover,
.flatpickr-day.selected.prevMonthDay,
.flatpickr-day.startRange.prevMonthDay,
.flatpickr-day.endRange.prevMonthDay,
.flatpickr-day.selected.nextMonthDay,
.flatpickr-day.startRange.nextMonthDay,
.flatpickr-day.endRange.nextMonthDay {
  background: var(--vf-primary);
  box-shadow: none;
  color: #fff;
  border-color: var(--vf-primary);
}

.flatpickr-day.selected.startRange,
.flatpickr-day.startRange.startRange,
.flatpickr-day.endRange.startRange {
  border-radius: 50px 0 0 50px;
}

.flatpickr-day.selected.endRange,
.flatpickr-day.startRange.endRange,
.flatpickr-day.endRange.endRange {
  border-radius: 0 50px 50px 0;
}

.flatpickr-day.selected.startRange + .endRange:not(:nth-child(7n+1)),
.flatpickr-day.startRange.startRange + .endRange:not(:nth-child(7n+1)),
.flatpickr-day.endRange.startRange + .endRange:not(:nth-child(7n+1)) {
  box-shadow: -10px 0 0 var(--vf-primary);
}

.flatpickr-day.selected.startRange.endRange,
.flatpickr-day.startRange.startRange.endRange,
.flatpickr-day.endRange.startRange.endRange {
  border-radius: 50px;
}

.flatpickr-day.inRange {
  border-radius: 0;
  box-shadow: -5px 0 0 var(--vf-bg-selected), 5px 0 0 var(--vf-bg-selected);
}

.flatpickr-day.flatpickr-disabled,
.flatpickr-day.flatpickr-disabled:hover,
.flatpickr-day.prevMonthDay,
.flatpickr-day.nextMonthDay,
.flatpickr-day.notAllowed,
.flatpickr-day.notAllowed.prevMonthDay,
.flatpickr-day.notAllowed.nextMonthDay {
  color: var(--vf-color-disabled);
  background: transparent;
  border-color: transparent;
  cursor: default;
}

.flatpickr-day.flatpickr-disabled,
.flatpickr-day.flatpickr-disabled:hover {
  cursor: not-allowed;
  color: var(--vf-color-disabled);
}

.flatpickr-day.week.selected {
  border-radius: 0;
  box-shadow: -5px 0 0 var(--vf-primary), 5px 0 0 var(--vf-primary);
}

.flatpickr-day.hidden {
  visibility: hidden;
}

.rangeMode .flatpickr-day {
  margin-top: 1px;
}

.flatpickr-weekwrapper {
  float: left;
}

.flatpickr-weekwrapper .flatpickr-weeks {
  padding: 0 12px;
}

.flatpickr-weekwrapper .flatpickr-weekday {
  float: none;
  width: 100%;
  line-height: 28px;
}

.flatpickr-weekwrapper span.flatpickr-day,
.flatpickr-weekwrapper span.flatpickr-day:hover {
  display: block;
  width: 100%;
  max-width: none;
  color: var(--vf-gray-300);
  background: transparent;
  cursor: default;
  border: none;
}

.flatpickr-innerContainer {
  display: block;
  display: flex;
  box-sizing: border-box;
  overflow: hidden;
  background: var(--vf-bg-input);
}

.flatpickr-rContainer {
  display: inline-block;
  padding: 0;
  box-sizing: border-box;
}

.flatpickr-time {
  text-align: center;
  outline: 0;
  display: block;
  height: 0;
  line-height: 40px;
  max-height: 40px;
  box-sizing: border-box;
  overflow: hidden;
  display: flex;
  background: var(--vf-bg-input);
  border-radius: 0 0 5px 5px;
  color: var(--vf-color-input);
}

.flatpickr-time:after {
  content: "";
  display: table;
  clear: both;
}

.flatpickr-time .numInputWrapper {
  flex: 1;
  width: 40%;
  height: 40px;
  float: left;
}

.flatpickr-time .numInputWrapper span.arrowUp:after {
  border-bottom-color: var(--vf-color-input);
  box-sizing: border-box;
}

.flatpickr-time .numInputWrapper span.arrowDown:after {
  border-top-color: var(--vf-color-input);
  box-sizing: border-box;
}

.flatpickr-time.hasSeconds .numInputWrapper {
  width: 26%;
}

.flatpickr-time.time24hr .numInputWrapper {
  width: 49%;
}

.flatpickr-time input {
  background: transparent;
  box-shadow: none;
  border: 0;
  border-radius: 0;
  text-align: center;
  margin: 0;
  padding: 0;
  height: inherit;
  line-height: inherit;
  font-size: 14px;
  position: relative;
  box-sizing: border-box;
  -webkit-appearance: textfield;
  -moz-appearance: textfield;
  appearance: textfield;
  color: var(--vf-color-input);
  background: var(--vf-bg-input);
}

.flatpickr-time input.flatpickr-hour {
  font-weight: bold;
}

.flatpickr-time input.flatpickr-minute,
.flatpickr-time input.flatpickr-second {
  font-weight: 400;
}

.flatpickr-time input:focus {
  outline: 0;
  border: 0;
}

.flatpickr-time .flatpickr-time-separator,
.flatpickr-time .flatpickr-am-pm {
  height: inherit;
  float: left;
  line-height: inherit;
  font-weight: bold;
  width: 2%;
  -webkit-user-select: none;
  -moz-user-select: none;
  user-select: none;
  align-self: center;
  background: var(--vf-bg-input);
}

.flatpickr-time .flatpickr-am-pm {
  outline: 0;
  width: 18%;
  cursor: pointer;
  text-align: center;
  font-weight: 400;
}

.flatpickr-time input:hover,
.flatpickr-time .flatpickr-am-pm:hover,
.flatpickr-time input:focus,
.flatpickr-time .flatpickr-am-pm:focus {
  background: var(--vf-bg-selected);
}

.flatpickr-input[readonly] {
  cursor: pointer;
}

@keyframes fpFadeInDown {
  from {
    opacity: 0;
    transform: translate3d(0, -20px, 0);
  }

  to {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }
}

span.flatpickr-day.selected {
  font-weight: bold;
}`;te(B6);$u.__file="themes/vueform/templates/wrappers/DatepickerWrapper.vue";var D6="2.1.15";const Pn="[data-trix-attachment]",Rl={preview:{presentation:"gallery",caption:{name:!0,size:!0}},file:{caption:{size:!0}}},Tt={default:{tagName:"div",parse:!1},quote:{tagName:"blockquote",nestable:!0},heading1:{tagName:"h1",terminal:!0,breakOnReturn:!0,group:!1},code:{tagName:"pre",terminal:!0,htmlAttributes:["language"],text:{plaintext:!0}},bulletList:{tagName:"ul",parse:!1},bullet:{tagName:"li",listAttribute:"bulletList",group:!1,nestable:!0,test(t){return fo(t.parentNode)===Tt[this.listAttribute].tagName}},numberList:{tagName:"ol",parse:!1},number:{tagName:"li",listAttribute:"numberList",group:!1,nestable:!0,test(t){return fo(t.parentNode)===Tt[this.listAttribute].tagName}},attachmentGallery:{tagName:"div",exclusive:!0,terminal:!0,parse:!1,group:!1}},fo=t=>{var e;return t==null||(e=t.tagName)===null||e===void 0?void 0:e.toLowerCase()},vo=navigator.userAgent.match(/android\s([0-9]+.*Chrome)/i),_i=vo&&parseInt(vo[1]);var Rr={composesExistingText:/Android.*Chrome/.test(navigator.userAgent),recentAndroid:_i&&_i>12,samsungAndroid:_i&&navigator.userAgent.match(/Android.*SM-/),forcesObjectResizing:/Trident.*rv:11/.test(navigator.userAgent),supportsInputEvents:typeof InputEvent<"u"&&["data","getTargetRanges","inputType"].every((t=>t in InputEvent.prototype))},Hu={ADD_ATTR:["language"],SAFE_FOR_XML:!1,RETURN_DOM:!0},Ae={attachFiles:"Attach Files",bold:"Bold",bullets:"Bullets",byte:"Byte",bytes:"Bytes",captionPlaceholder:"Add a caption…",code:"Code",heading1:"Heading",indent:"Increase Level",italic:"Italic",link:"Link",numbers:"Numbers",outdent:"Decrease Level",quote:"Quote",redo:"Redo",remove:"Remove",strike:"Strikethrough",undo:"Undo",unlink:"Unlink",url:"URL",urlPlaceholder:"Enter a URL…",GB:"GB",KB:"KB",MB:"MB",PB:"PB",TB:"TB"};const R6=[Ae.bytes,Ae.KB,Ae.MB,Ae.GB,Ae.TB,Ae.PB];var Pu={prefix:"IEC",precision:2,formatter(t){switch(t){case 0:return"0 ".concat(Ae.bytes);case 1:return"1 ".concat(Ae.byte);default:let e;this.prefix==="SI"?e=1e3:this.prefix==="IEC"&&(e=1024);const n=Math.floor(Math.log(t)/Math.log(e)),r=(t/Math.pow(e,n)).toFixed(this.precision).replace(/0*$/,"").replace(/\.$/,"");return"".concat(r," ").concat(R6[n])}}};const ki="\uFEFF",En=" ",zu=function(t){for(const e in t){const n=t[e];this[e]=n}return this},Fl=document.documentElement,F6=Fl.matches,Ze=function(t){let{onElement:e,matchingSelector:n,withCallback:r,inPhase:i,preventDefault:l,times:a}=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};const o=e||Fl,s=n,u=i==="capturing",c=function(m){a!=null&&--a==0&&c.destroy();const E=Tn(m.target,{matchingSelector:s});E!=null&&(r?.call(E,m,E),l&&m.preventDefault())};return c.destroy=()=>o.removeEventListener(t,c,u),o.addEventListener(t,c,u),c},br=function(t){let{onElement:e,bubbles:n,cancelable:r,attributes:i}=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};const l=e??Fl;n=n!==!1,r=r!==!1;const a=document.createEvent("Events");return a.initEvent(t,n,r),i!=null&&zu.call(a,i),l.dispatchEvent(a)},Nu=function(t,e){if(t?.nodeType===1)return F6.call(t,e)},Tn=function(t){let{matchingSelector:e,untilNode:n}=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};for(;t&&t.nodeType!==Node.ELEMENT_NODE;)t=t.parentNode;if(t!=null){if(e==null)return t;if(t.closest&&n==null)return t.closest(e);for(;t&&t!==n;){if(Nu(t,e))return t;t=t.parentNode}}},Ol=t=>document.activeElement!==t&&On(t,document.activeElement),On=function(t,e){if(t&&e)for(;e;){if(e===t)return!0;e=e.parentNode}},Mi=function(t){var e;if((e=t)===null||e===void 0||!e.parentNode)return;let n=0;for(t=t.previousSibling;t;)n++,t=t.previousSibling;return n},Sn=t=>{var e;return t==null||(e=t.parentNode)===null||e===void 0?void 0:e.removeChild(t)},ei=function(t){let{onlyNodesOfType:e,usingFilter:n,expandEntityReferences:r}=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};const i=(()=>{switch(e){case"element":return NodeFilter.SHOW_ELEMENT;case"text":return NodeFilter.SHOW_TEXT;case"comment":return NodeFilter.SHOW_COMMENT;default:return NodeFilter.SHOW_ALL}})();return document.createTreeWalker(t,i,n??null,r===!0)},xt=t=>{var e;return t==null||(e=t.tagName)===null||e===void 0?void 0:e.toLowerCase()},Se=function(t){let e,n,r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};typeof t=="object"?(r=t,t=r.tagName):r={attributes:r};const i=document.createElement(t);if(r.editable!=null&&(r.attributes==null&&(r.attributes={}),r.attributes.contenteditable=r.editable),r.attributes)for(e in r.attributes)n=r.attributes[e],i.setAttribute(e,n);if(r.style)for(e in r.style)n=r.style[e],i.style[e]=n;if(r.data)for(e in r.data)n=r.data[e],i.dataset[e]=n;return r.className&&r.className.split(" ").forEach((l=>{i.classList.add(l)})),r.textContent&&(i.textContent=r.textContent),r.childNodes&&[].concat(r.childNodes).forEach((l=>{i.appendChild(l)})),i};let ur;const wr=function(){if(ur!=null)return ur;ur=[];for(const t in Tt){const e=Tt[t];e.tagName&&ur.push(e.tagName)}return ur},Ii=t=>Yn(t?.firstChild),ho=function(t){let{strict:e}=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{strict:!0};return e?Yn(t):Yn(t)||!Yn(t.firstChild)&&(function(n){return wr().includes(xt(n))&&!wr().includes(xt(n.firstChild))})(t)},Yn=t=>O6(t)&&t?.data==="block",O6=t=>t?.nodeType===Node.COMMENT_NODE,Xn=function(t){let{name:e}=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};if(t)return yr(t)?t.data===ki?!e||t.parentNode.dataset.trixCursorTarget===e:void 0:Xn(t.firstChild)},zn=t=>Nu(t,Pn),Vu=t=>yr(t)&&t?.data==="",yr=t=>t?.nodeType===Node.TEXT_NODE,$l={level2Enabled:!0,getLevel(){return this.level2Enabled&&Rr.supportsInputEvents?2:0},pickFiles(t){const e=Se("input",{type:"file",multiple:!0,hidden:!0,id:this.fileInputId});e.addEventListener("change",(()=>{t(e.files),Sn(e)})),Sn(document.getElementById(this.fileInputId)),document.body.appendChild(e),e.click()}};var Qr={removeBlankTableCells:!1,tableCellSeparator:" | ",tableRowSeparator:`
`},Vn={bold:{tagName:"strong",inheritable:!0,parser(t){const e=window.getComputedStyle(t);return e.fontWeight==="bold"||e.fontWeight>=600}},italic:{tagName:"em",inheritable:!0,parser:t=>window.getComputedStyle(t).fontStyle==="italic"},href:{groupTagName:"a",parser(t){const e="a:not(".concat(Pn,")"),n=t.closest(e);if(n)return n.getAttribute("href")}},strike:{tagName:"del",inheritable:!0},frozen:{style:{backgroundColor:"highlight"}}},ju={getDefaultHTML:()=>`<div class="trix-button-row">
      <span class="trix-button-group trix-button-group--text-tools" data-trix-button-group="text-tools">
        <button type="button" class="trix-button trix-button--icon trix-button--icon-bold" data-trix-attribute="bold" data-trix-key="b" title="`.concat(Ae.bold,'" tabindex="-1">').concat(Ae.bold,`</button>
        <button type="button" class="trix-button trix-button--icon trix-button--icon-italic" data-trix-attribute="italic" data-trix-key="i" title="`).concat(Ae.italic,'" tabindex="-1">').concat(Ae.italic,`</button>
        <button type="button" class="trix-button trix-button--icon trix-button--icon-strike" data-trix-attribute="strike" title="`).concat(Ae.strike,'" tabindex="-1">').concat(Ae.strike,`</button>
        <button type="button" class="trix-button trix-button--icon trix-button--icon-link" data-trix-attribute="href" data-trix-action="link" data-trix-key="k" title="`).concat(Ae.link,'" tabindex="-1">').concat(Ae.link,`</button>
      </span>

      <span class="trix-button-group trix-button-group--block-tools" data-trix-button-group="block-tools">
        <button type="button" class="trix-button trix-button--icon trix-button--icon-heading-1" data-trix-attribute="heading1" title="`).concat(Ae.heading1,'" tabindex="-1">').concat(Ae.heading1,`</button>
        <button type="button" class="trix-button trix-button--icon trix-button--icon-quote" data-trix-attribute="quote" title="`).concat(Ae.quote,'" tabindex="-1">').concat(Ae.quote,`</button>
        <button type="button" class="trix-button trix-button--icon trix-button--icon-code" data-trix-attribute="code" title="`).concat(Ae.code,'" tabindex="-1">').concat(Ae.code,`</button>
        <button type="button" class="trix-button trix-button--icon trix-button--icon-bullet-list" data-trix-attribute="bullet" title="`).concat(Ae.bullets,'" tabindex="-1">').concat(Ae.bullets,`</button>
        <button type="button" class="trix-button trix-button--icon trix-button--icon-number-list" data-trix-attribute="number" title="`).concat(Ae.numbers,'" tabindex="-1">').concat(Ae.numbers,`</button>
        <button type="button" class="trix-button trix-button--icon trix-button--icon-decrease-nesting-level" data-trix-action="decreaseNestingLevel" title="`).concat(Ae.outdent,'" tabindex="-1">').concat(Ae.outdent,`</button>
        <button type="button" class="trix-button trix-button--icon trix-button--icon-increase-nesting-level" data-trix-action="increaseNestingLevel" title="`).concat(Ae.indent,'" tabindex="-1">').concat(Ae.indent,`</button>
      </span>

      <span class="trix-button-group trix-button-group--file-tools" data-trix-button-group="file-tools">
        <button type="button" class="trix-button trix-button--icon trix-button--icon-attach" data-trix-action="attachFiles" title="`).concat(Ae.attachFiles,'" tabindex="-1">').concat(Ae.attachFiles,`</button>
      </span>

      <span class="trix-button-group-spacer"></span>

      <span class="trix-button-group trix-button-group--history-tools" data-trix-button-group="history-tools">
        <button type="button" class="trix-button trix-button--icon trix-button--icon-undo" data-trix-action="undo" data-trix-key="z" title="`).concat(Ae.undo,'" tabindex="-1">').concat(Ae.undo,`</button>
        <button type="button" class="trix-button trix-button--icon trix-button--icon-redo" data-trix-action="redo" data-trix-key="shift+z" title="`).concat(Ae.redo,'" tabindex="-1">').concat(Ae.redo,`</button>
      </span>
    </div>

    <div class="trix-dialogs" data-trix-dialogs>
      <div class="trix-dialog trix-dialog--link" data-trix-dialog="href" data-trix-dialog-attribute="href">
        <div class="trix-dialog__link-fields">
          <input type="url" name="href" class="trix-input trix-input--dialog" placeholder="`).concat(Ae.urlPlaceholder,'" aria-label="').concat(Ae.url,`" data-trix-validate-href required data-trix-input>
          <div class="trix-button-group">
            <input type="button" class="trix-button trix-button--dialog" value="`).concat(Ae.link,`" data-trix-method="setAttribute">
            <input type="button" class="trix-button trix-button--dialog" value="`).concat(Ae.unlink,`" data-trix-method="removeAttribute">
          </div>
        </div>
      </div>
    </div>`)};const la={interval:5e3};var Fr=Object.freeze({__proto__:null,attachments:Rl,blockAttributes:Tt,browser:Rr,css:{attachment:"attachment",attachmentCaption:"attachment__caption",attachmentCaptionEditor:"attachment__caption-editor",attachmentMetadata:"attachment__metadata",attachmentMetadataContainer:"attachment__metadata-container",attachmentName:"attachment__name",attachmentProgress:"attachment__progress",attachmentSize:"attachment__size",attachmentToolbar:"attachment__toolbar",attachmentGallery:"attachment-gallery"},dompurify:Hu,fileSize:Pu,input:$l,keyNames:{8:"backspace",9:"tab",13:"return",27:"escape",37:"left",39:"right",46:"delete",68:"d",72:"h",79:"o"},lang:Ae,parser:Qr,textAttributes:Vn,toolbar:ju,undo:la});class ft{static proxyMethod(e){const{name:n,toMethod:r,toProperty:i,optional:l}=$6(e);this.prototype[n]=function(){let a,o;var s,u;return r?o=l?(s=this[r])===null||s===void 0?void 0:s.call(this):this[r]():i&&(o=this[i]),l?(a=(u=o)===null||u===void 0?void 0:u[n],a?mo.call(a,o,arguments):void 0):(a=o[n],mo.call(a,o,arguments))}}}const $6=function(t){const e=t.match(H6);if(!e)throw new Error("can't parse @proxyMethod expression: ".concat(t));const n={name:e[4]};return e[2]!=null?n.toMethod=e[1]:n.toProperty=e[1],e[3]!=null&&(n.optional=!0),n},{apply:mo}=Function.prototype,H6=new RegExp("^(.+?)(\\(\\))?(\\?)?\\.(.+?)$");var Bi,Di,Ri;class Sr extends ft{static box(){let e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:"";return e instanceof this?e:this.fromUCS2String(e?.toString())}static fromUCS2String(e){return new this(e,oa(e))}static fromCodepoints(e){return new this(sa(e),e)}constructor(e,n){super(...arguments),this.ucs2String=e,this.codepoints=n,this.length=this.codepoints.length,this.ucs2Length=this.ucs2String.length}offsetToUCS2Offset(e){return sa(this.codepoints.slice(0,Math.max(0,e))).length}offsetFromUCS2Offset(e){return oa(this.ucs2String.slice(0,Math.max(0,e))).length}slice(){return this.constructor.fromCodepoints(this.codepoints.slice(...arguments))}charAt(e){return this.slice(e,e+1)}isEqualTo(e){return this.constructor.box(e).ucs2String===this.ucs2String}toJSON(){return this.ucs2String}getCacheKey(){return this.ucs2String}toString(){return this.ucs2String}}const P6=((Bi=Array.from)===null||Bi===void 0?void 0:Bi.call(Array,"👼").length)===1,z6=((Di=" ".codePointAt)===null||Di===void 0?void 0:Di.call(" ",0))!=null,N6=((Ri=String.fromCodePoint)===null||Ri===void 0?void 0:Ri.call(String,32,128124))===" 👼";let oa,sa;oa=P6&&z6?t=>Array.from(t).map((e=>e.codePointAt(0))):function(t){const e=[];let n=0;const{length:r}=t;for(;n<r;){let i=t.charCodeAt(n++);if(55296<=i&&i<=56319&&n<r){const l=t.charCodeAt(n++);(64512&l)==56320?i=((1023&i)<<10)+(1023&l)+65536:n--}e.push(i)}return e},sa=N6?t=>String.fromCodePoint(...Array.from(t||[])):function(t){return(()=>{const e=[];return Array.from(t).forEach((n=>{let r="";n>65535&&(n-=65536,r+=String.fromCharCode(n>>>10&1023|55296),n=56320|1023&n),e.push(r+String.fromCharCode(n))})),e})().join("")};let V6=0;class Wn extends ft{static fromJSONString(e){return this.fromJSON(JSON.parse(e))}constructor(){super(...arguments),this.id=++V6}hasSameConstructorAs(e){return this.constructor===e?.constructor}isEqualTo(e){return this===e}inspect(){const e=[],n=this.contentsForInspection()||{};for(const r in n){const i=n[r];e.push("".concat(r,"=").concat(i))}return"#<".concat(this.constructor.name,":").concat(this.id).concat(e.length?" ".concat(e.join(", ")):"",">")}contentsForInspection(){}toJSONString(){return JSON.stringify(this)}toUTF16String(){return Sr.box(this)}getCacheKey(){return this.id.toString()}}const jn=function(){let t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:[],e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:[];if(t.length!==e.length)return!1;for(let n=0;n<t.length;n++)if(t[n]!==e[n])return!1;return!0},Hl=function(t){const e=t.slice(0);for(var n=arguments.length,r=new Array(n>1?n-1:0),i=1;i<n;i++)r[i-1]=arguments[i];return e.splice(...r),e},j6=/[\u05BE\u05C0\u05C3\u05D0-\u05EA\u05F0-\u05F4\u061B\u061F\u0621-\u063A\u0640-\u064A\u066D\u0671-\u06B7\u06BA-\u06BE\u06C0-\u06CE\u06D0-\u06D5\u06E5\u06E6\u200F\u202B\u202E\uFB1F-\uFB28\uFB2A-\uFB36\uFB38-\uFB3C\uFB3E\uFB40\uFB41\uFB43\uFB44\uFB46-\uFBB1\uFBD3-\uFD3D\uFD50-\uFD8F\uFD92-\uFDC7\uFDF0-\uFDFB\uFE70-\uFE72\uFE74\uFE76-\uFEFC]/,U6=(function(){const t=Se("input",{dir:"auto",name:"x",dirName:"x.dir"}),e=Se("textarea",{dir:"auto",name:"y",dirName:"y.dir"}),n=Se("form");n.appendChild(t),n.appendChild(e);const r=(function(){try{return new FormData(n).has(e.dirName)}catch{return!1}})(),i=(function(){try{return t.matches(":dir(ltr),:dir(rtl)")}catch{return!1}})();return r?function(l){return e.value=l,new FormData(n).get(e.dirName)}:i?function(l){return t.value=l,t.matches(":dir(rtl)")?"rtl":"ltr"}:function(l){const a=l.trim().charAt(0);return j6.test(a)?"rtl":"ltr"}})();let Fi=null,Oi=null,$i=null,$r=null;const ua=()=>(Fi||(Fi=q6().concat(W6())),Fi),ot=t=>Tt[t],W6=()=>(Oi||(Oi=Object.keys(Tt)),Oi),da=t=>Vn[t],q6=()=>($i||($i=Object.keys(Vn)),$i),Uu=function(t,e){Q6(t).textContent=e.replace(/%t/g,t)},Q6=function(t){const e=document.createElement("style");e.setAttribute("type","text/css"),e.setAttribute("data-tag-name",t.toLowerCase());const n=K6();return n&&e.setAttribute("nonce",n),document.head.insertBefore(e,document.head.firstChild),e},K6=function(){const t=go("trix-csp-nonce")||go("csp-nonce");if(t){const{nonce:e,content:n}=t;return e==""?n:e}},go=t=>document.head.querySelector("meta[name=".concat(t,"]")),bo={"application/x-trix-feature-detection":"test"},Wu=function(t){const e=t.getData("text/plain"),n=t.getData("text/html");if(!e||!n)return e?.length;{const{body:r}=new DOMParser().parseFromString(n,"text/html");if(r.textContent===e)return!r.querySelector("*")}},qu=/Mac|^iP/.test(navigator.platform)?t=>t.metaKey:t=>t.ctrlKey,Pl=t=>setTimeout(t,1),Qu=function(){let t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};const e={};for(const n in t){const r=t[n];e[n]=r}return e},ir=function(){let t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};if(Object.keys(t).length!==Object.keys(e).length)return!1;for(const n in t)if(t[n]!==e[n])return!1;return!0},ze=function(t){if(t!=null)return Array.isArray(t)||(t=[t,t]),[wo(t[0]),wo(t[1]!=null?t[1]:t[0])]},fn=function(t){if(t==null)return;const[e,n]=ze(t);return ca(e,n)},ti=function(t,e){if(t==null||e==null)return;const[n,r]=ze(t),[i,l]=ze(e);return ca(n,i)&&ca(r,l)},wo=function(t){return typeof t=="number"?t:Qu(t)},ca=function(t,e){return typeof t=="number"?t===e:ir(t,e)};class Ku extends ft{constructor(){super(...arguments),this.update=this.update.bind(this),this.selectionManagers=[]}start(){this.started||(this.started=!0,document.addEventListener("selectionchange",this.update,!0))}stop(){if(this.started)return this.started=!1,document.removeEventListener("selectionchange",this.update,!0)}registerSelectionManager(e){if(!this.selectionManagers.includes(e))return this.selectionManagers.push(e),this.start()}unregisterSelectionManager(e){if(this.selectionManagers=this.selectionManagers.filter((n=>n!==e)),this.selectionManagers.length===0)return this.stop()}notifySelectionManagersOfSelectionChange(){return this.selectionManagers.map((e=>e.selectionDidChange()))}update(){this.notifySelectionManagersOfSelectionChange()}reset(){this.update()}}const Un=new Ku,Gu=function(){const t=window.getSelection();if(t.rangeCount>0)return t},kr=function(){var t;const e=(t=Gu())===null||t===void 0?void 0:t.getRangeAt(0);if(e&&!G6(e))return e},Ju=function(t){const e=window.getSelection();return e.removeAllRanges(),e.addRange(t),Un.update()},G6=t=>yo(t.startContainer)||yo(t.endContainer),yo=t=>!Object.getPrototypeOf(t),mr=t=>t.replace(new RegExp("".concat(ki),"g"),"").replace(new RegExp("".concat(En),"g")," "),zl=new RegExp("[^\\S".concat(En,"]")),Nl=t=>t.replace(new RegExp("".concat(zl.source),"g")," ").replace(/\ {2,}/g," "),ko=function(t,e){if(t.isEqualTo(e))return["",""];const n=Hi(t,e),{length:r}=n.utf16String;let i;if(r){const{offset:l}=n,a=t.codepoints.slice(0,l).concat(t.codepoints.slice(l+r));i=Hi(e,Sr.fromCodepoints(a))}else i=Hi(e,t);return[n.utf16String.toString(),i.utf16String.toString()]},Hi=function(t,e){let n=0,r=t.length,i=e.length;for(;n<r&&t.charAt(n).isEqualTo(e.charAt(n));)n++;for(;r>n+1&&t.charAt(r-1).isEqualTo(e.charAt(i-1));)r--,i--;return{utf16String:t.slice(n,r),offset:n}};class zt extends Wn{static fromCommonAttributesOfObjects(){let e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:[];if(!e.length)return new this;let n=dr(e[0]),r=n.getKeys();return e.slice(1).forEach((i=>{r=n.getKeysCommonToHash(dr(i)),n=n.slice(r)})),n}static box(e){return dr(e)}constructor(){let e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};super(...arguments),this.values=Kr(e)}add(e,n){return this.merge(J6(e,n))}remove(e){return new zt(Kr(this.values,e))}get(e){return this.values[e]}has(e){return e in this.values}merge(e){return new zt(Y6(this.values,X6(e)))}slice(e){const n={};return Array.from(e).forEach((r=>{this.has(r)&&(n[r]=this.values[r])})),new zt(n)}getKeys(){return Object.keys(this.values)}getKeysCommonToHash(e){return e=dr(e),this.getKeys().filter((n=>this.values[n]===e.values[n]))}isEqualTo(e){return jn(this.toArray(),dr(e).toArray())}isEmpty(){return this.getKeys().length===0}toArray(){if(!this.array){const e=[];for(const n in this.values){const r=this.values[n];e.push(e.push(n,r))}this.array=e.slice(0)}return this.array}toObject(){return Kr(this.values)}toJSON(){return this.toObject()}contentsForInspection(){return{values:JSON.stringify(this.values)}}}const J6=function(t,e){const n={};return n[t]=e,n},Y6=function(t,e){const n=Kr(t);for(const r in e){const i=e[r];n[r]=i}return n},Kr=function(t,e){const n={};return Object.keys(t).sort().forEach((r=>{r!==e&&(n[r]=t[r])})),n},dr=function(t){return t instanceof zt?t:new zt(t)},X6=function(t){return t instanceof zt?t.values:t};class Vl{static groupObjects(){let e,n=arguments.length>0&&arguments[0]!==void 0?arguments[0]:[],{depth:r,asTree:i}=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};i&&r==null&&(r=0);const l=[];return Array.from(n).forEach((a=>{var o;if(e){var s,u,c;if((s=a.canBeGrouped)!==null&&s!==void 0&&s.call(a,r)&&(u=(c=e[e.length-1]).canBeGroupedWith)!==null&&u!==void 0&&u.call(c,a,r))return void e.push(a);l.push(new this(e,{depth:r,asTree:i})),e=null}(o=a.canBeGrouped)!==null&&o!==void 0&&o.call(a,r)?e=[a]:l.push(a)})),e&&l.push(new this(e,{depth:r,asTree:i})),l}constructor(){let e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:[],{depth:n,asTree:r}=arguments.length>1?arguments[1]:void 0;this.objects=e,r&&(this.depth=n,this.objects=this.constructor.groupObjects(this.objects,{asTree:r,depth:this.depth+1}))}getObjects(){return this.objects}getDepth(){return this.depth}getCacheKey(){const e=["objectGroup"];return Array.from(this.getObjects()).forEach((n=>{e.push(n.getCacheKey())})),e.join("/")}}class Z6 extends ft{constructor(){let e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:[];super(...arguments),this.objects={},Array.from(e).forEach((n=>{const r=JSON.stringify(n);this.objects[r]==null&&(this.objects[r]=n)}))}find(e){const n=JSON.stringify(e);return this.objects[n]}}class e4{constructor(e){this.reset(e)}add(e){const n=Co(e);this.elements[n]=e}remove(e){const n=Co(e),r=this.elements[n];if(r)return delete this.elements[n],r}reset(){let e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:[];return this.elements={},Array.from(e).forEach((n=>{this.add(n)})),e}}const Co=t=>t.dataset.trixStoreKey;class ni extends ft{isPerforming(){return this.performing===!0}hasPerformed(){return this.performed===!0}hasSucceeded(){return this.performed&&this.succeeded}hasFailed(){return this.performed&&!this.succeeded}getPromise(){return this.promise||(this.promise=new Promise(((e,n)=>(this.performing=!0,this.perform(((r,i)=>{this.succeeded=r,this.performing=!1,this.performed=!0,this.succeeded?e(i):n(i)})))))),this.promise}perform(e){return e(!1)}release(){var e,n;(e=this.promise)===null||e===void 0||(n=e.cancel)===null||n===void 0||n.call(e),this.promise=null,this.performing=null,this.performed=null,this.succeeded=null}}ni.proxyMethod("getPromise().then"),ni.proxyMethod("getPromise().catch");class qn extends ft{constructor(e){let n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};super(...arguments),this.object=e,this.options=n,this.childViews=[],this.rootView=this}getNodes(){return this.nodes||(this.nodes=this.createNodes()),this.nodes.map((e=>e.cloneNode(!0)))}invalidate(){var e;return this.nodes=null,this.childViews=[],(e=this.parentView)===null||e===void 0?void 0:e.invalidate()}invalidateViewForObject(e){var n;return(n=this.findViewForObject(e))===null||n===void 0?void 0:n.invalidate()}findOrCreateCachedChildView(e,n,r){let i=this.getCachedViewForObject(n);return i?this.recordChildView(i):(i=this.createChildView(...arguments),this.cacheViewForObject(i,n)),i}createChildView(e,n){let r=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{};n instanceof Vl&&(r.viewClass=e,e=t4);const i=new e(n,r);return this.recordChildView(i)}recordChildView(e){return e.parentView=this,e.rootView=this.rootView,this.childViews.push(e),e}getAllChildViews(){let e=[];return this.childViews.forEach((n=>{e.push(n),e=e.concat(n.getAllChildViews())})),e}findElement(){return this.findElementForObject(this.object)}findElementForObject(e){const n=e?.id;if(n)return this.rootView.element.querySelector("[data-trix-id='".concat(n,"']"))}findViewForObject(e){for(const n of this.getAllChildViews())if(n.object===e)return n}getViewCache(){return this.rootView!==this?this.rootView.getViewCache():this.isViewCachingEnabled()?(this.viewCache||(this.viewCache={}),this.viewCache):void 0}isViewCachingEnabled(){return this.shouldCacheViews!==!1}enableViewCaching(){this.shouldCacheViews=!0}disableViewCaching(){this.shouldCacheViews=!1}getCachedViewForObject(e){var n;return(n=this.getViewCache())===null||n===void 0?void 0:n[e.getCacheKey()]}cacheViewForObject(e,n){const r=this.getViewCache();r&&(r[n.getCacheKey()]=e)}garbageCollectCachedViews(){const e=this.getViewCache();if(e){const n=this.getAllChildViews().concat(this).map((r=>r.object.getCacheKey()));for(const r in e)n.includes(r)||delete e[r]}}}class t4 extends qn{constructor(){super(...arguments),this.objectGroup=this.object,this.viewClass=this.options.viewClass,delete this.options.viewClass}getChildViews(){return this.childViews.length||Array.from(this.objectGroup.getObjects()).forEach((e=>{this.findOrCreateCachedChildView(this.viewClass,e,this.options)})),this.childViews}createNodes(){const e=this.createContainerElement();return this.getChildViews().forEach((n=>{Array.from(n.getNodes()).forEach((r=>{e.appendChild(r)}))})),[e]}createContainerElement(){let e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:this.objectGroup.getDepth();return this.getChildViews()[0].createContainerElement(e)}}const{entries:Yu,setPrototypeOf:Eo,isFrozen:n4,getPrototypeOf:r4,getOwnPropertyDescriptor:i4}=Object;let{freeze:_t,seal:qt,create:Xu}=Object,{apply:pa,construct:fa}=typeof Reflect<"u"&&Reflect;_t||(_t=function(t){return t}),qt||(qt=function(t){return t}),pa||(pa=function(t,e,n){return t.apply(e,n)}),fa||(fa=function(t,e){return new t(...e)});const Hr=Mt(Array.prototype.forEach),a4=Mt(Array.prototype.lastIndexOf),Ao=Mt(Array.prototype.pop),cr=Mt(Array.prototype.push),l4=Mt(Array.prototype.splice),Gr=Mt(String.prototype.toLowerCase),Pi=Mt(String.prototype.toString),Lo=Mt(String.prototype.match),pr=Mt(String.prototype.replace),o4=Mt(String.prototype.indexOf),s4=Mt(String.prototype.trim),Gt=Mt(Object.prototype.hasOwnProperty),At=Mt(RegExp.prototype.test),fr=(xo=TypeError,function(){for(var t=arguments.length,e=new Array(t),n=0;n<t;n++)e[n]=arguments[n];return fa(xo,e)});var xo;function Mt(t){return function(e){e instanceof RegExp&&(e.lastIndex=0);for(var n=arguments.length,r=new Array(n>1?n-1:0),i=1;i<n;i++)r[i-1]=arguments[i];return pa(t,e,r)}}function Be(t,e){let n=arguments.length>2&&arguments[2]!==void 0?arguments[2]:Gr;Eo&&Eo(t,null);let r=e.length;for(;r--;){let i=e[r];if(typeof i=="string"){const l=n(i);l!==i&&(n4(e)||(e[r]=l),i=l)}t[i]=!0}return t}function u4(t){for(let e=0;e<t.length;e++)Gt(t,e)||(t[e]=null);return t}function Dn(t){const e=Xu(null);for(const[n,r]of Yu(t))Gt(t,n)&&(Array.isArray(r)?e[n]=u4(r):r&&typeof r=="object"&&r.constructor===Object?e[n]=Dn(r):e[n]=r);return e}function vr(t,e){for(;t!==null;){const n=i4(t,e);if(n){if(n.get)return Mt(n.get);if(typeof n.value=="function")return Mt(n.value)}t=r4(t)}return function(){return null}}const To=_t(["a","abbr","acronym","address","area","article","aside","audio","b","bdi","bdo","big","blink","blockquote","body","br","button","canvas","caption","center","cite","code","col","colgroup","content","data","datalist","dd","decorator","del","details","dfn","dialog","dir","div","dl","dt","element","em","fieldset","figcaption","figure","font","footer","form","h1","h2","h3","h4","h5","h6","head","header","hgroup","hr","html","i","img","input","ins","kbd","label","legend","li","main","map","mark","marquee","menu","menuitem","meter","nav","nobr","ol","optgroup","option","output","p","picture","pre","progress","q","rp","rt","ruby","s","samp","section","select","shadow","small","source","spacer","span","strike","strong","style","sub","summary","sup","table","tbody","td","template","textarea","tfoot","th","thead","time","tr","track","tt","u","ul","var","video","wbr"]),zi=_t(["svg","a","altglyph","altglyphdef","altglyphitem","animatecolor","animatemotion","animatetransform","circle","clippath","defs","desc","ellipse","filter","font","g","glyph","glyphref","hkern","image","line","lineargradient","marker","mask","metadata","mpath","path","pattern","polygon","polyline","radialgradient","rect","stop","style","switch","symbol","text","textpath","title","tref","tspan","view","vkern"]),Ni=_t(["feBlend","feColorMatrix","feComponentTransfer","feComposite","feConvolveMatrix","feDiffuseLighting","feDisplacementMap","feDistantLight","feDropShadow","feFlood","feFuncA","feFuncB","feFuncG","feFuncR","feGaussianBlur","feImage","feMerge","feMergeNode","feMorphology","feOffset","fePointLight","feSpecularLighting","feSpotLight","feTile","feTurbulence"]),d4=_t(["animate","color-profile","cursor","discard","font-face","font-face-format","font-face-name","font-face-src","font-face-uri","foreignobject","hatch","hatchpath","mesh","meshgradient","meshpatch","meshrow","missing-glyph","script","set","solidcolor","unknown","use"]),Vi=_t(["math","menclose","merror","mfenced","mfrac","mglyph","mi","mlabeledtr","mmultiscripts","mn","mo","mover","mpadded","mphantom","mroot","mrow","ms","mspace","msqrt","mstyle","msub","msup","msubsup","mtable","mtd","mtext","mtr","munder","munderover","mprescripts"]),c4=_t(["maction","maligngroup","malignmark","mlongdiv","mscarries","mscarry","msgroup","mstack","msline","msrow","semantics","annotation","annotation-xml","mprescripts","none"]),So=_t(["#text"]),_o=_t(["accept","action","align","alt","autocapitalize","autocomplete","autopictureinpicture","autoplay","background","bgcolor","border","capture","cellpadding","cellspacing","checked","cite","class","clear","color","cols","colspan","controls","controlslist","coords","crossorigin","datetime","decoding","default","dir","disabled","disablepictureinpicture","disableremoteplayback","download","draggable","enctype","enterkeyhint","face","for","headers","height","hidden","high","href","hreflang","id","inputmode","integrity","ismap","kind","label","lang","list","loading","loop","low","max","maxlength","media","method","min","minlength","multiple","muted","name","nonce","noshade","novalidate","nowrap","open","optimum","pattern","placeholder","playsinline","popover","popovertarget","popovertargetaction","poster","preload","pubdate","radiogroup","readonly","rel","required","rev","reversed","role","rows","rowspan","spellcheck","scope","selected","shape","size","sizes","span","srclang","start","src","srcset","step","style","summary","tabindex","title","translate","type","usemap","valign","value","width","wrap","xmlns","slot"]),ji=_t(["accent-height","accumulate","additive","alignment-baseline","amplitude","ascent","attributename","attributetype","azimuth","basefrequency","baseline-shift","begin","bias","by","class","clip","clippathunits","clip-path","clip-rule","color","color-interpolation","color-interpolation-filters","color-profile","color-rendering","cx","cy","d","dx","dy","diffuseconstant","direction","display","divisor","dur","edgemode","elevation","end","exponent","fill","fill-opacity","fill-rule","filter","filterunits","flood-color","flood-opacity","font-family","font-size","font-size-adjust","font-stretch","font-style","font-variant","font-weight","fx","fy","g1","g2","glyph-name","glyphref","gradientunits","gradienttransform","height","href","id","image-rendering","in","in2","intercept","k","k1","k2","k3","k4","kerning","keypoints","keysplines","keytimes","lang","lengthadjust","letter-spacing","kernelmatrix","kernelunitlength","lighting-color","local","marker-end","marker-mid","marker-start","markerheight","markerunits","markerwidth","maskcontentunits","maskunits","max","mask","media","method","mode","min","name","numoctaves","offset","operator","opacity","order","orient","orientation","origin","overflow","paint-order","path","pathlength","patterncontentunits","patterntransform","patternunits","points","preservealpha","preserveaspectratio","primitiveunits","r","rx","ry","radius","refx","refy","repeatcount","repeatdur","restart","result","rotate","scale","seed","shape-rendering","slope","specularconstant","specularexponent","spreadmethod","startoffset","stddeviation","stitchtiles","stop-color","stop-opacity","stroke-dasharray","stroke-dashoffset","stroke-linecap","stroke-linejoin","stroke-miterlimit","stroke-opacity","stroke","stroke-width","style","surfacescale","systemlanguage","tabindex","tablevalues","targetx","targety","transform","transform-origin","text-anchor","text-decoration","text-rendering","textlength","type","u1","u2","unicode","values","viewbox","visibility","version","vert-adv-y","vert-origin-x","vert-origin-y","width","word-spacing","wrap","writing-mode","xchannelselector","ychannelselector","x","x1","x2","xmlns","y","y1","y2","z","zoomandpan"]),Mo=_t(["accent","accentunder","align","bevelled","close","columnsalign","columnlines","columnspan","denomalign","depth","dir","display","displaystyle","encoding","fence","frame","height","href","id","largeop","length","linethickness","lspace","lquote","mathbackground","mathcolor","mathsize","mathvariant","maxsize","minsize","movablelimits","notation","numalign","open","rowalign","rowlines","rowspacing","rowspan","rspace","rquote","scriptlevel","scriptminsize","scriptsizemultiplier","selection","separator","separators","stretchy","subscriptshift","supscriptshift","symmetric","voffset","width","xmlns"]),Pr=_t(["xlink:href","xml:id","xlink:title","xml:space","xmlns:xlink"]),p4=qt(/\{\{[\w\W]*|[\w\W]*\}\}/gm),f4=qt(/<%[\w\W]*|[\w\W]*%>/gm),v4=qt(/\$\{[\w\W]*/gm),h4=qt(/^data-[\-\w.\u00B7-\uFFFF]+$/),m4=qt(/^aria-[\-\w]+$/),Zu=qt(/^(?:(?:(?:f|ht)tps?|mailto|tel|callto|sms|cid|xmpp):|[^a-z]|[a-z+.\-]+(?:[^a-z+.\-:]|$))/i),g4=qt(/^(?:\w+script|data):/i),b4=qt(/[\u0000-\u0020\u00A0\u1680\u180E\u2000-\u2029\u205F\u3000]/g),ed=qt(/^html$/i),w4=qt(/^[a-z][.\w]*(-[.\w]+)+$/i);var Io=Object.freeze({__proto__:null,ARIA_ATTR:m4,ATTR_WHITESPACE:b4,CUSTOM_ELEMENT:w4,DATA_ATTR:h4,DOCTYPE_NAME:ed,ERB_EXPR:f4,IS_ALLOWED_URI:Zu,IS_SCRIPT_OR_DATA:g4,MUSTACHE_EXPR:p4,TMPLIT_EXPR:v4});const y4=1,k4=3,C4=7,E4=8,A4=9,L4=function(){return typeof window>"u"?null:window};var ri=(function t(){let e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:L4();const n=y=>t(y);if(n.version="3.2.5",n.removed=[],!e||!e.document||e.document.nodeType!==A4||!e.Element)return n.isSupported=!1,n;let{document:r}=e;const i=r,l=i.currentScript,{DocumentFragment:a,HTMLTemplateElement:o,Node:s,Element:u,NodeFilter:c,NamedNodeMap:m=e.NamedNodeMap||e.MozNamedAttrMap,HTMLFormElement:E,DOMParser:g,trustedTypes:b}=e,L=u.prototype,x=vr(L,"cloneNode"),I=vr(L,"remove"),B=vr(L,"nextSibling"),_=vr(L,"childNodes"),O=vr(L,"parentNode");if(typeof o=="function"){const y=r.createElement("template");y.content&&y.content.ownerDocument&&(r=y.content.ownerDocument)}let H,R="";const{implementation:Z,createNodeIterator:U,createDocumentFragment:P,getElementsByTagName:ae}=r,{importNode:ne}=i;let K={afterSanitizeAttributes:[],afterSanitizeElements:[],afterSanitizeShadowDOM:[],beforeSanitizeAttributes:[],beforeSanitizeElements:[],beforeSanitizeShadowDOM:[],uponSanitizeAttribute:[],uponSanitizeElement:[],uponSanitizeShadowNode:[]};n.isSupported=typeof Yu=="function"&&typeof O=="function"&&Z&&Z.createHTMLDocument!==void 0;const{MUSTACHE_EXPR:le,ERB_EXPR:we,TMPLIT_EXPR:he,DATA_ATTR:me,ARIA_ATTR:ge,IS_SCRIPT_OR_DATA:Ye,ATTR_WHITESPACE:be,CUSTOM_ELEMENT:fe}=Io;let{IS_ALLOWED_URI:W}=Io,re=null;const st=Be({},[...To,...zi,...Ni,...Vi,...So]);let ve=null;const pe=Be({},[..._o,...ji,...Mo,...Pr]);let F=Object.seal(Xu(null,{tagNameCheck:{writable:!0,configurable:!1,enumerable:!0,value:null},attributeNameCheck:{writable:!0,configurable:!1,enumerable:!0,value:null},allowCustomizedBuiltInElements:{writable:!0,configurable:!1,enumerable:!0,value:!1}})),D=null,se=null,_e=!0,tt=!0,wt=!1,ut=!0,yt=!1,Qt=!0,dt=!1,Zt=!1,It=!1,it=!1,ct=!1,pt=!1,Bt=!0,Ft=!1,Pe=!0,vt=!1,nt={},kt=null;const Dt=Be({},["annotation-xml","audio","colgroup","desc","foreignobject","head","iframe","math","mi","mn","mo","ms","mtext","noembed","noframes","noscript","plaintext","script","style","svg","template","thead","title","video","xmp"]);let Vt=null;const gn=Be({},["audio","video","img","source","image","track"]);let Ct=null;const jt=Be({},["alt","class","for","id","label","name","pattern","placeholder","role","summary","title","value","style","xmlns"]),un="http://www.w3.org/1998/Math/MathML",Kt="http://www.w3.org/2000/svg",Ot="http://www.w3.org/1999/xhtml";let Et=Ot,Rt=!1,Mn=null;const Kn=Be({},[un,Kt,Ot],Pi);let $t=Be({},["mi","mo","mn","ms","mtext"]),Ht=Be({},["annotation-xml"]);const In=Be({},["title","style","font","a","script"]);let en=null;const lr=["application/xhtml+xml","text/html"];let qe=null,v=null;const A=r.createElement("form"),T=function(y){return y instanceof RegExp||y instanceof Function},z=function(){let y=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};if(!v||v!==y){if(y&&typeof y=="object"||(y={}),y=Dn(y),en=lr.indexOf(y.PARSER_MEDIA_TYPE)===-1?"text/html":y.PARSER_MEDIA_TYPE,qe=en==="application/xhtml+xml"?Pi:Gr,re=Gt(y,"ALLOWED_TAGS")?Be({},y.ALLOWED_TAGS,qe):st,ve=Gt(y,"ALLOWED_ATTR")?Be({},y.ALLOWED_ATTR,qe):pe,Mn=Gt(y,"ALLOWED_NAMESPACES")?Be({},y.ALLOWED_NAMESPACES,Pi):Kn,Ct=Gt(y,"ADD_URI_SAFE_ATTR")?Be(Dn(jt),y.ADD_URI_SAFE_ATTR,qe):jt,Vt=Gt(y,"ADD_DATA_URI_TAGS")?Be(Dn(gn),y.ADD_DATA_URI_TAGS,qe):gn,kt=Gt(y,"FORBID_CONTENTS")?Be({},y.FORBID_CONTENTS,qe):Dt,D=Gt(y,"FORBID_TAGS")?Be({},y.FORBID_TAGS,qe):{},se=Gt(y,"FORBID_ATTR")?Be({},y.FORBID_ATTR,qe):{},nt=!!Gt(y,"USE_PROFILES")&&y.USE_PROFILES,_e=y.ALLOW_ARIA_ATTR!==!1,tt=y.ALLOW_DATA_ATTR!==!1,wt=y.ALLOW_UNKNOWN_PROTOCOLS||!1,ut=y.ALLOW_SELF_CLOSE_IN_ATTR!==!1,yt=y.SAFE_FOR_TEMPLATES||!1,Qt=y.SAFE_FOR_XML!==!1,dt=y.WHOLE_DOCUMENT||!1,it=y.RETURN_DOM||!1,ct=y.RETURN_DOM_FRAGMENT||!1,pt=y.RETURN_TRUSTED_TYPE||!1,It=y.FORCE_BODY||!1,Bt=y.SANITIZE_DOM!==!1,Ft=y.SANITIZE_NAMED_PROPS||!1,Pe=y.KEEP_CONTENT!==!1,vt=y.IN_PLACE||!1,W=y.ALLOWED_URI_REGEXP||Zu,Et=y.NAMESPACE||Ot,$t=y.MATHML_TEXT_INTEGRATION_POINTS||$t,Ht=y.HTML_INTEGRATION_POINTS||Ht,F=y.CUSTOM_ELEMENT_HANDLING||{},y.CUSTOM_ELEMENT_HANDLING&&T(y.CUSTOM_ELEMENT_HANDLING.tagNameCheck)&&(F.tagNameCheck=y.CUSTOM_ELEMENT_HANDLING.tagNameCheck),y.CUSTOM_ELEMENT_HANDLING&&T(y.CUSTOM_ELEMENT_HANDLING.attributeNameCheck)&&(F.attributeNameCheck=y.CUSTOM_ELEMENT_HANDLING.attributeNameCheck),y.CUSTOM_ELEMENT_HANDLING&&typeof y.CUSTOM_ELEMENT_HANDLING.allowCustomizedBuiltInElements=="boolean"&&(F.allowCustomizedBuiltInElements=y.CUSTOM_ELEMENT_HANDLING.allowCustomizedBuiltInElements),yt&&(tt=!1),ct&&(it=!0),nt&&(re=Be({},So),ve=[],nt.html===!0&&(Be(re,To),Be(ve,_o)),nt.svg===!0&&(Be(re,zi),Be(ve,ji),Be(ve,Pr)),nt.svgFilters===!0&&(Be(re,Ni),Be(ve,ji),Be(ve,Pr)),nt.mathMl===!0&&(Be(re,Vi),Be(ve,Mo),Be(ve,Pr))),y.ADD_TAGS&&(re===st&&(re=Dn(re)),Be(re,y.ADD_TAGS,qe)),y.ADD_ATTR&&(ve===pe&&(ve=Dn(ve)),Be(ve,y.ADD_ATTR,qe)),y.ADD_URI_SAFE_ATTR&&Be(Ct,y.ADD_URI_SAFE_ATTR,qe),y.FORBID_CONTENTS&&(kt===Dt&&(kt=Dn(kt)),Be(kt,y.FORBID_CONTENTS,qe)),Pe&&(re["#text"]=!0),dt&&Be(re,["html","head","body"]),re.table&&(Be(re,["tbody"]),delete D.tbody),y.TRUSTED_TYPES_POLICY){if(typeof y.TRUSTED_TYPES_POLICY.createHTML!="function")throw fr('TRUSTED_TYPES_POLICY configuration option must provide a "createHTML" hook.');if(typeof y.TRUSTED_TYPES_POLICY.createScriptURL!="function")throw fr('TRUSTED_TYPES_POLICY configuration option must provide a "createScriptURL" hook.');H=y.TRUSTED_TYPES_POLICY,R=H.createHTML("")}else H===void 0&&(H=(function(X,G){if(typeof X!="object"||typeof X.createPolicy!="function")return null;let ke=null;const Ie="data-tt-policy-suffix";G&&G.hasAttribute(Ie)&&(ke=G.getAttribute(Ie));const w="dompurify"+(ke?"#"+ke:"");try{return X.createPolicy(w,{createHTML:$=>$,createScriptURL:$=>$})}catch{return console.warn("TrustedTypes policy "+w+" could not be created."),null}})(b,l)),H!==null&&typeof R=="string"&&(R=H.createHTML(""));_t&&_t(y),v=y}},q=Be({},[...zi,...Ni,...d4]),Q=Be({},[...Vi,...c4]),ee=function(y){cr(n.removed,{element:y});try{O(y).removeChild(y)}catch{I(y)}},Y=function(y,X){try{cr(n.removed,{attribute:X.getAttributeNode(y),from:X})}catch{cr(n.removed,{attribute:null,from:X})}if(X.removeAttribute(y),y==="is")if(it||ct)try{ee(X)}catch{}else try{X.setAttribute(y,"")}catch{}},Fe=function(y){let X=null,G=null;if(It)y="<remove></remove>"+y;else{const w=Lo(y,/^[\r\n\t ]+/);G=w&&w[0]}en==="application/xhtml+xml"&&Et===Ot&&(y='<html xmlns="http://www.w3.org/1999/xhtml"><head></head><body>'+y+"</body></html>");const ke=H?H.createHTML(y):y;if(Et===Ot)try{X=new g().parseFromString(ke,en)}catch{}if(!X||!X.documentElement){X=Z.createDocument(Et,"template",null);try{X.documentElement.innerHTML=Rt?R:ke}catch{}}const Ie=X.body||X.documentElement;return y&&G&&Ie.insertBefore(r.createTextNode(G),Ie.childNodes[0]||null),Et===Ot?ae.call(X,dt?"html":"body")[0]:dt?X.documentElement:Ie},Oe=function(y){return U.call(y.ownerDocument||y,y,c.SHOW_ELEMENT|c.SHOW_COMMENT|c.SHOW_TEXT|c.SHOW_PROCESSING_INSTRUCTION|c.SHOW_CDATA_SECTION,null)},Me=function(y){return y instanceof E&&(typeof y.nodeName!="string"||typeof y.textContent!="string"||typeof y.removeChild!="function"||!(y.attributes instanceof m)||typeof y.removeAttribute!="function"||typeof y.setAttribute!="function"||typeof y.namespaceURI!="string"||typeof y.insertBefore!="function"||typeof y.hasChildNodes!="function")},Ne=function(y){return typeof s=="function"&&y instanceof s};function Ee(y,X,G){Hr(y,(ke=>{ke.call(n,X,G,v)}))}const Ke=function(y){let X=null;if(Ee(K.beforeSanitizeElements,y,null),Me(y))return ee(y),!0;const G=qe(y.nodeName);if(Ee(K.uponSanitizeElement,y,{tagName:G,allowedTags:re}),y.hasChildNodes()&&!Ne(y.firstElementChild)&&At(/<[/\w!]/g,y.innerHTML)&&At(/<[/\w!]/g,y.textContent)||y.nodeType===C4||Qt&&y.nodeType===E4&&At(/<[/\w]/g,y.data))return ee(y),!0;if(!re[G]||D[G]){if(!D[G]&&Ge(G)&&(F.tagNameCheck instanceof RegExp&&At(F.tagNameCheck,G)||F.tagNameCheck instanceof Function&&F.tagNameCheck(G)))return!1;if(Pe&&!kt[G]){const ke=O(y)||y.parentNode,Ie=_(y)||y.childNodes;if(Ie&&ke)for(let w=Ie.length-1;w>=0;--w){const $=x(Ie[w],!0);$.__removalCount=(y.__removalCount||0)+1,ke.insertBefore($,B(y))}}return ee(y),!0}return y instanceof u&&!(function(ke){let Ie=O(ke);Ie&&Ie.tagName||(Ie={namespaceURI:Et,tagName:"template"});const w=Gr(ke.tagName),$=Gr(Ie.tagName);return!!Mn[ke.namespaceURI]&&(ke.namespaceURI===Kt?Ie.namespaceURI===Ot?w==="svg":Ie.namespaceURI===un?w==="svg"&&($==="annotation-xml"||$t[$]):!!q[w]:ke.namespaceURI===un?Ie.namespaceURI===Ot?w==="math":Ie.namespaceURI===Kt?w==="math"&&Ht[$]:!!Q[w]:ke.namespaceURI===Ot?!(Ie.namespaceURI===Kt&&!Ht[$])&&!(Ie.namespaceURI===un&&!$t[$])&&!Q[w]&&(In[w]||!q[w]):!(en!=="application/xhtml+xml"||!Mn[ke.namespaceURI]))})(y)?(ee(y),!0):G!=="noscript"&&G!=="noembed"&&G!=="noframes"||!At(/<\/no(script|embed|frames)/i,y.innerHTML)?(yt&&y.nodeType===k4&&(X=y.textContent,Hr([le,we,he],(ke=>{X=pr(X,ke," ")})),y.textContent!==X&&(cr(n.removed,{element:y.cloneNode()}),y.textContent=X)),Ee(K.afterSanitizeElements,y,null),!1):(ee(y),!0)},at=function(y,X,G){if(Bt&&(X==="id"||X==="name")&&(G in r||G in A))return!1;if(!(tt&&!se[X]&&At(me,X))){if(!(_e&&At(ge,X))){if(!ve[X]||se[X]){if(!(Ge(y)&&(F.tagNameCheck instanceof RegExp&&At(F.tagNameCheck,y)||F.tagNameCheck instanceof Function&&F.tagNameCheck(y))&&(F.attributeNameCheck instanceof RegExp&&At(F.attributeNameCheck,X)||F.attributeNameCheck instanceof Function&&F.attributeNameCheck(X))||X==="is"&&F.allowCustomizedBuiltInElements&&(F.tagNameCheck instanceof RegExp&&At(F.tagNameCheck,G)||F.tagNameCheck instanceof Function&&F.tagNameCheck(G))))return!1}else if(!Ct[X]){if(!At(W,pr(G,be,""))){if((X!=="src"&&X!=="xlink:href"&&X!=="href"||y==="script"||o4(G,"data:")!==0||!Vt[y])&&!(wt&&!At(Ye,pr(G,be,"")))){if(G)return!1}}}}}return!0},Ge=function(y){return y!=="annotation-xml"&&Lo(y,fe)},Je=function(y){Ee(K.beforeSanitizeAttributes,y,null);const{attributes:X}=y;if(!X||Me(y))return;const G={attrName:"",attrValue:"",keepAttr:!0,allowedAttributes:ve,forceKeepAttr:void 0};let ke=X.length;for(;ke--;){const Ie=X[ke],{name:w,namespaceURI:$,value:ye}=Ie,$e=qe(w);let Xe=w==="value"?ye:s4(ye);if(G.attrName=$e,G.attrValue=Xe,G.keepAttr=!0,G.forceKeepAttr=void 0,Ee(K.uponSanitizeAttribute,y,G),Xe=G.attrValue,!Ft||$e!=="id"&&$e!=="name"||(Y(w,y),Xe="user-content-"+Xe),Qt&&At(/((--!?|])>)|<\/(style|title)/i,Xe)){Y(w,y);continue}if(G.forceKeepAttr||(Y(w,y),!G.keepAttr))continue;if(!ut&&At(/\/>/i,Xe)){Y(w,y);continue}yt&&Hr([le,we,he],(xi=>{Xe=pr(Xe,xi," ")}));const or=qe(y.nodeName);if(at(or,$e,Xe)){if(H&&typeof b=="object"&&typeof b.getAttributeType=="function"&&!$)switch(b.getAttributeType(or,$e)){case"TrustedHTML":Xe=H.createHTML(Xe);break;case"TrustedScriptURL":Xe=H.createScriptURL(Xe)}try{$?y.setAttributeNS($,w,Xe):y.setAttribute(w,Xe),Me(y)?ee(y):Ao(n.removed)}catch{}}}Ee(K.afterSanitizeAttributes,y,null)},tn=function y(X){let G=null;const ke=Oe(X);for(Ee(K.beforeSanitizeShadowDOM,X,null);G=ke.nextNode();)Ee(K.uponSanitizeShadowNode,G,null),Ke(G),Je(G),G.content instanceof a&&y(G.content);Ee(K.afterSanitizeShadowDOM,X,null)};return n.sanitize=function(y){let X=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},G=null,ke=null,Ie=null,w=null;if(Rt=!y,Rt&&(y="<!-->"),typeof y!="string"&&!Ne(y)){if(typeof y.toString!="function")throw fr("toString is not a function");if(typeof(y=y.toString())!="string")throw fr("dirty is not a string, aborting")}if(!n.isSupported)return y;if(Zt||z(X),n.removed=[],typeof y=="string"&&(vt=!1),vt){if(y.nodeName){const $e=qe(y.nodeName);if(!re[$e]||D[$e])throw fr("root node is forbidden and cannot be sanitized in-place")}}else if(y instanceof s)G=Fe("<!---->"),ke=G.ownerDocument.importNode(y,!0),ke.nodeType===y4&&ke.nodeName==="BODY"||ke.nodeName==="HTML"?G=ke:G.appendChild(ke);else{if(!it&&!yt&&!dt&&y.indexOf("<")===-1)return H&&pt?H.createHTML(y):y;if(G=Fe(y),!G)return it?null:pt?R:""}G&&It&&ee(G.firstChild);const $=Oe(vt?y:G);for(;Ie=$.nextNode();)Ke(Ie),Je(Ie),Ie.content instanceof a&&tn(Ie.content);if(vt)return y;if(it){if(ct)for(w=P.call(G.ownerDocument);G.firstChild;)w.appendChild(G.firstChild);else w=G;return(ve.shadowroot||ve.shadowrootmode)&&(w=ne.call(i,w,!0)),w}let ye=dt?G.outerHTML:G.innerHTML;return dt&&re["!doctype"]&&G.ownerDocument&&G.ownerDocument.doctype&&G.ownerDocument.doctype.name&&At(ed,G.ownerDocument.doctype.name)&&(ye="<!DOCTYPE "+G.ownerDocument.doctype.name+`>
`+ye),yt&&Hr([le,we,he],($e=>{ye=pr(ye,$e," ")})),H&&pt?H.createHTML(ye):ye},n.setConfig=function(){z(arguments.length>0&&arguments[0]!==void 0?arguments[0]:{}),Zt=!0},n.clearConfig=function(){v=null,Zt=!1},n.isValidAttribute=function(y,X,G){v||z({});const ke=qe(y),Ie=qe(X);return at(ke,Ie,G)},n.addHook=function(y,X){typeof X=="function"&&cr(K[y],X)},n.removeHook=function(y,X){if(X!==void 0){const G=a4(K[y],X);return G===-1?void 0:l4(K[y],G,1)[0]}return Ao(K[y])},n.removeHooks=function(y){K[y]=[]},n.removeAllHooks=function(){K={afterSanitizeAttributes:[],afterSanitizeElements:[],afterSanitizeShadowDOM:[],beforeSanitizeAttributes:[],beforeSanitizeElements:[],beforeSanitizeShadowDOM:[],uponSanitizeAttribute:[],uponSanitizeElement:[],uponSanitizeShadowNode:[]}},n})();ri.addHook("uponSanitizeAttribute",(function(t,e){/^data-trix-/.test(e.attrName)&&(e.forceKeepAttr=!0)}));const x4="style href src width height language class".split(" "),T4="javascript:".split(" "),S4="script iframe form noscript".split(" ");class Ci extends ft{static setHTML(e,n,r){const i=new this(n,r).sanitize(),l=i.getHTML?i.getHTML():i.outerHTML;e.innerHTML=l}static sanitize(e,n){const r=new this(e,n);return r.sanitize(),r}constructor(e){let{allowedAttributes:n,forbiddenProtocols:r,forbiddenElements:i,purifyOptions:l}=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};super(...arguments),this.allowedAttributes=n||x4,this.forbiddenProtocols=r||T4,this.forbiddenElements=i||S4,this.purifyOptions=l||{},this.body=_4(e)}sanitize(){this.sanitizeElements(),this.normalizeListElementNesting();const e=Object.assign({},Hu,this.purifyOptions);return ri.setConfig(e),this.body=ri.sanitize(this.body),this.body}getHTML(){return this.body.innerHTML}getBody(){return this.body}sanitizeElements(){const e=ei(this.body),n=[];for(;e.nextNode();){const r=e.currentNode;switch(r.nodeType){case Node.ELEMENT_NODE:this.elementIsRemovable(r)?n.push(r):this.sanitizeElement(r);break;case Node.COMMENT_NODE:n.push(r)}}return n.forEach((r=>Sn(r))),this.body}sanitizeElement(e){return e.hasAttribute("href")&&this.forbiddenProtocols.includes(e.protocol)&&e.removeAttribute("href"),Array.from(e.attributes).forEach((n=>{let{name:r}=n;this.allowedAttributes.includes(r)||r.indexOf("data-trix")===0||e.removeAttribute(r)})),e}normalizeListElementNesting(){return Array.from(this.body.querySelectorAll("ul,ol")).forEach((e=>{const n=e.previousElementSibling;n&&xt(n)==="li"&&n.appendChild(e)})),this.body}elementIsRemovable(e){if(e?.nodeType===Node.ELEMENT_NODE)return this.elementIsForbidden(e)||this.elementIsntSerializable(e)}elementIsForbidden(e){return this.forbiddenElements.includes(xt(e))}elementIsntSerializable(e){return e.getAttribute("data-trix-serialize")==="false"&&!zn(e)}}const _4=function(){let t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:"";t=t.replace(/<\/html[^>]*>[^]*$/i,"</html>");const e=document.implementation.createHTMLDocument("");return e.documentElement.innerHTML=t,Array.from(e.head.querySelectorAll("style")).forEach((n=>{e.body.appendChild(n)})),e.body},{css:wn}=Fr;class jl extends qn{constructor(){super(...arguments),this.attachment=this.object,this.attachment.uploadProgressDelegate=this,this.attachmentPiece=this.options.piece}createContentNodes(){return[]}createNodes(){let e;const n=e=Se({tagName:"figure",className:this.getClassName(),data:this.getData(),editable:!1}),r=this.getHref();return r&&(e=Se({tagName:"a",editable:!1,attributes:{href:r,tabindex:-1}}),n.appendChild(e)),this.attachment.hasContent()?Ci.setHTML(e,this.attachment.getContent()):this.createContentNodes().forEach((i=>{e.appendChild(i)})),e.appendChild(this.createCaptionElement()),this.attachment.isPending()&&(this.progressElement=Se({tagName:"progress",attributes:{class:wn.attachmentProgress,value:this.attachment.getUploadProgress(),max:100},data:{trixMutable:!0,trixStoreKey:["progressElement",this.attachment.id].join("/")}}),n.appendChild(this.progressElement)),[Bo("left"),n,Bo("right")]}createCaptionElement(){const e=Se({tagName:"figcaption",className:wn.attachmentCaption}),n=this.attachmentPiece.getCaption();if(n)e.classList.add("".concat(wn.attachmentCaption,"--edited")),e.textContent=n;else{let r,i;const l=this.getCaptionConfig();if(l.name&&(r=this.attachment.getFilename()),l.size&&(i=this.attachment.getFormattedFilesize()),r){const a=Se({tagName:"span",className:wn.attachmentName,textContent:r});e.appendChild(a)}if(i){r&&e.appendChild(document.createTextNode(" "));const a=Se({tagName:"span",className:wn.attachmentSize,textContent:i});e.appendChild(a)}}return e}getClassName(){const e=[wn.attachment,"".concat(wn.attachment,"--").concat(this.attachment.getType())],n=this.attachment.getExtension();return n&&e.push("".concat(wn.attachment,"--").concat(n)),e.join(" ")}getData(){const e={trixAttachment:JSON.stringify(this.attachment),trixContentType:this.attachment.getContentType(),trixId:this.attachment.id},{attributes:n}=this.attachmentPiece;return n.isEmpty()||(e.trixAttributes=JSON.stringify(n)),this.attachment.isPending()&&(e.trixSerialize=!1),e}getHref(){if(!M4(this.attachment.getContent(),"a"))return this.attachment.getHref()}getCaptionConfig(){var e;const n=this.attachment.getType(),r=Qu((e=Rl[n])===null||e===void 0?void 0:e.caption);return n==="file"&&(r.name=!0),r}findProgressElement(){var e;return(e=this.findElement())===null||e===void 0?void 0:e.querySelector("progress")}attachmentDidChangeUploadProgress(){const e=this.attachment.getUploadProgress(),n=this.findProgressElement();n&&(n.value=e)}}const Bo=t=>Se({tagName:"span",textContent:ki,data:{trixCursorTarget:t,trixSerialize:!1}}),M4=function(t,e){const n=Se("div");return Ci.setHTML(n,t||""),n.querySelector(e)};class td extends jl{constructor(){super(...arguments),this.attachment.previewDelegate=this}createContentNodes(){return this.image=Se({tagName:"img",attributes:{src:""},data:{trixMutable:!0}}),this.refresh(this.image),[this.image]}createCaptionElement(){const e=super.createCaptionElement(...arguments);return e.textContent||e.setAttribute("data-trix-placeholder",Ae.captionPlaceholder),e}refresh(e){var n;if(e||(e=(n=this.findElement())===null||n===void 0?void 0:n.querySelector("img")),e)return this.updateAttributesForImage(e)}updateAttributesForImage(e){const n=this.attachment.getURL(),r=this.attachment.getPreviewURL();if(e.src=r||n,r===n)e.removeAttribute("data-trix-serialized-attributes");else{const o=JSON.stringify({src:n});e.setAttribute("data-trix-serialized-attributes",o)}const i=this.attachment.getWidth(),l=this.attachment.getHeight();i!=null&&(e.width=i),l!=null&&(e.height=l);const a=["imageElement",this.attachment.id,e.src,e.width,e.height].join("/");e.dataset.trixStoreKey=a}attachmentDidChangeAttributes(){return this.refresh(this.image),this.refresh()}}class nd extends qn{constructor(){super(...arguments),this.piece=this.object,this.attributes=this.piece.getAttributes(),this.textConfig=this.options.textConfig,this.context=this.options.context,this.piece.attachment?this.attachment=this.piece.attachment:this.string=this.piece.toString()}createNodes(){let e=this.attachment?this.createAttachmentNodes():this.createStringNodes();const n=this.createElement();if(n){const r=(function(i){for(;(l=i)!==null&&l!==void 0&&l.firstElementChild;){var l;i=i.firstElementChild}return i})(n);Array.from(e).forEach((i=>{r.appendChild(i)})),e=[n]}return e}createAttachmentNodes(){const e=this.attachment.isPreviewable()?td:jl;return this.createChildView(e,this.piece.attachment,{piece:this.piece}).getNodes()}createStringNodes(){var e;if((e=this.textConfig)!==null&&e!==void 0&&e.plaintext)return[document.createTextNode(this.string)];{const n=[],r=this.string.split(`
`);for(let i=0;i<r.length;i++){const l=r[i];if(i>0){const a=Se("br");n.push(a)}if(l.length){const a=document.createTextNode(this.preserveSpaces(l));n.push(a)}}return n}}createElement(){let e,n,r;const i={};for(n in this.attributes){r=this.attributes[n];const a=da(n);if(a){if(a.tagName){var l;const o=Se(a.tagName);l?(l.appendChild(o),l=o):e=l=o}if(a.styleProperty&&(i[a.styleProperty]=r),a.style)for(n in a.style)r=a.style[n],i[n]=r}}if(Object.keys(i).length)for(n in e||(e=Se("span")),i)r=i[n],e.style[n]=r;return e}createContainerElement(){for(const e in this.attributes){const n=this.attributes[e],r=da(e);if(r&&r.groupTagName){const i={};return i[e]=n,Se(r.groupTagName,i)}}}preserveSpaces(e){return this.context.isLast&&(e=e.replace(/\ $/,En)),e=e.replace(/(\S)\ {3}(\S)/g,"$1 ".concat(En," $2")).replace(/\ {2}/g,"".concat(En," ")).replace(/\ {2}/g," ".concat(En)),(this.context.isFirst||this.context.followsWhitespace)&&(e=e.replace(/^\ /,En)),e}}class rd extends qn{constructor(){super(...arguments),this.text=this.object,this.textConfig=this.options.textConfig}createNodes(){const e=[],n=Vl.groupObjects(this.getPieces()),r=n.length-1;for(let l=0;l<n.length;l++){const a=n[l],o={};l===0&&(o.isFirst=!0),l===r&&(o.isLast=!0),I4(i)&&(o.followsWhitespace=!0);const s=this.findOrCreateCachedChildView(nd,a,{textConfig:this.textConfig,context:o});e.push(...Array.from(s.getNodes()||[]));var i=a}return e}getPieces(){return Array.from(this.text.getPieces()).filter((e=>!e.hasAttribute("blockBreak")))}}const I4=t=>/\s$/.test(t?.toString()),{css:Do}=Fr;class id extends qn{constructor(){super(...arguments),this.block=this.object,this.attributes=this.block.getAttributes()}createNodes(){const e=[document.createComment("block")];if(this.block.isEmpty())e.push(Se("br"));else{var n;const r=(n=ot(this.block.getLastAttribute()))===null||n===void 0?void 0:n.text,i=this.findOrCreateCachedChildView(rd,this.block.text,{textConfig:r});e.push(...Array.from(i.getNodes()||[])),this.shouldAddExtraNewlineElement()&&e.push(Se("br"))}if(this.attributes.length)return e;{let r;const{tagName:i}=Tt.default;this.block.isRTL()&&(r={dir:"rtl"});const l=Se({tagName:i,attributes:r});return e.forEach((a=>l.appendChild(a))),[l]}}createContainerElement(e){const n={};let r;const i=this.attributes[e],{tagName:l,htmlAttributes:a=[]}=ot(i);if(e===0&&this.block.isRTL()&&Object.assign(n,{dir:"rtl"}),i==="attachmentGallery"){const o=this.block.getBlockBreakPosition();r="".concat(Do.attachmentGallery," ").concat(Do.attachmentGallery,"--").concat(o)}return Object.entries(this.block.htmlAttributes).forEach((o=>{let[s,u]=o;a.includes(s)&&(n[s]=u)})),Se({tagName:l,className:r,attributes:n})}shouldAddExtraNewlineElement(){return/\n\n$/.test(this.block.toString())}}class Ei extends qn{static render(e){const n=Se("div"),r=new this(e,{element:n});return r.render(),r.sync(),n}constructor(){super(...arguments),this.element=this.options.element,this.elementStore=new e4,this.setDocument(this.object)}setDocument(e){e.isEqualTo(this.document)||(this.document=this.object=e)}render(){if(this.childViews=[],this.shadowElement=Se("div"),!this.document.isEmpty()){const e=Vl.groupObjects(this.document.getBlocks(),{asTree:!0});Array.from(e).forEach((n=>{const r=this.findOrCreateCachedChildView(id,n);Array.from(r.getNodes()).map((i=>this.shadowElement.appendChild(i)))}))}}isSynced(){return B4(this.shadowElement,this.element)}sync(){const e=this.createDocumentFragmentForSync();for(;this.element.lastChild;)this.element.removeChild(this.element.lastChild);return this.element.appendChild(e),this.didSync()}didSync(){return this.elementStore.reset(Ro(this.element)),Pl((()=>this.garbageCollectCachedViews()))}createDocumentFragmentForSync(){const e=document.createDocumentFragment();return Array.from(this.shadowElement.childNodes).forEach((n=>{e.appendChild(n.cloneNode(!0))})),Array.from(Ro(e)).forEach((n=>{const r=this.elementStore.remove(n);r&&n.parentNode.replaceChild(r,n)})),e}}const Ro=t=>t.querySelectorAll("[data-trix-store-key]"),B4=(t,e)=>Fo(t.innerHTML)===Fo(e.innerHTML),Fo=t=>t.replace(/&nbsp;/g," ");function St(t,e,n){return(e=D4(e))in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function D4(t){var e=(function(n,r){if(typeof n!="object"||n===null)return n;var i=n[Symbol.toPrimitive];if(i!==void 0){var l=i.call(n,r);if(typeof l!="object")return l;throw new TypeError("@@toPrimitive must return a primitive value.")}return(r==="string"?String:Number)(n)})(t,"string");return typeof e=="symbol"?e:String(e)}function Qe(t,e){return R4(t,ad(t,e,"get"))}function Ul(t,e,n){return F4(t,ad(t,e,"set"),n),n}function ad(t,e,n){if(!e.has(t))throw new TypeError("attempted to "+n+" private field on non-instance");return e.get(t)}function R4(t,e){return e.get?e.get.call(t):e.value}function F4(t,e,n){if(e.set)e.set.call(t,n);else{if(!e.writable)throw new TypeError("attempted to set read only private field");e.value=n}}function zr(t,e,n){if(!e.has(t))throw new TypeError("attempted to get private field on non-instance");return n}function ld(t,e){if(e.has(t))throw new TypeError("Cannot initialize the same private elements twice on an object")}function Cr(t,e,n){ld(t,e),e.set(t,n)}class Qn extends Wn{static registerType(e,n){n.type=e,this.types[e]=n}static fromJSON(e){const n=this.types[e.type];if(n)return n.fromJSON(e)}constructor(e){let n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};super(...arguments),this.attributes=zt.box(n)}copyWithAttributes(e){return new this.constructor(this.getValue(),e)}copyWithAdditionalAttributes(e){return this.copyWithAttributes(this.attributes.merge(e))}copyWithoutAttribute(e){return this.copyWithAttributes(this.attributes.remove(e))}copy(){return this.copyWithAttributes(this.attributes)}getAttribute(e){return this.attributes.get(e)}getAttributesHash(){return this.attributes}getAttributes(){return this.attributes.toObject()}hasAttribute(e){return this.attributes.has(e)}hasSameStringValueAsPiece(e){return e&&this.toString()===e.toString()}hasSameAttributesAsPiece(e){return e&&(this.attributes===e.attributes||this.attributes.isEqualTo(e.attributes))}isBlockBreak(){return!1}isEqualTo(e){return super.isEqualTo(...arguments)||this.hasSameConstructorAs(e)&&this.hasSameStringValueAsPiece(e)&&this.hasSameAttributesAsPiece(e)}isEmpty(){return this.length===0}isSerializable(){return!0}toJSON(){return{type:this.constructor.type,attributes:this.getAttributes()}}contentsForInspection(){return{type:this.constructor.type,attributes:this.attributes.inspect()}}canBeGrouped(){return this.hasAttribute("href")}canBeGroupedWith(e){return this.getAttribute("href")===e.getAttribute("href")}getLength(){return this.length}canBeConsolidatedWith(e){return!1}}St(Qn,"types",{});class od extends ni{constructor(e){super(...arguments),this.url=e}perform(e){const n=new Image;n.onload=()=>(n.width=this.width=n.naturalWidth,n.height=this.height=n.naturalHeight,e(!0,n)),n.onerror=()=>e(!1),n.src=this.url}}class ar extends Wn{static attachmentForFile(e){const n=new this(this.attributesForFile(e));return n.setFile(e),n}static attributesForFile(e){return new zt({filename:e.name,filesize:e.size,contentType:e.type})}static fromJSON(e){return new this(e)}constructor(){let e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};super(e),this.releaseFile=this.releaseFile.bind(this),this.attributes=zt.box(e),this.didChangeAttributes()}getAttribute(e){return this.attributes.get(e)}hasAttribute(e){return this.attributes.has(e)}getAttributes(){return this.attributes.toObject()}setAttributes(){let e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};const n=this.attributes.merge(e);var r,i,l,a;if(!this.attributes.isEqualTo(n))return this.attributes=n,this.didChangeAttributes(),(r=this.previewDelegate)===null||r===void 0||(i=r.attachmentDidChangeAttributes)===null||i===void 0||i.call(r,this),(l=this.delegate)===null||l===void 0||(a=l.attachmentDidChangeAttributes)===null||a===void 0?void 0:a.call(l,this)}didChangeAttributes(){if(this.isPreviewable())return this.preloadURL()}isPending(){return this.file!=null&&!(this.getURL()||this.getHref())}isPreviewable(){return this.attributes.has("previewable")?this.attributes.get("previewable"):ar.previewablePattern.test(this.getContentType())}getType(){return this.hasContent()?"content":this.isPreviewable()?"preview":"file"}getURL(){return this.attributes.get("url")}getHref(){return this.attributes.get("href")}getFilename(){return this.attributes.get("filename")||""}getFilesize(){return this.attributes.get("filesize")}getFormattedFilesize(){const e=this.attributes.get("filesize");return typeof e=="number"?Pu.formatter(e):""}getExtension(){var e;return(e=this.getFilename().match(/\.(\w+)$/))===null||e===void 0?void 0:e[1].toLowerCase()}getContentType(){return this.attributes.get("contentType")}hasContent(){return this.attributes.has("content")}getContent(){return this.attributes.get("content")}getWidth(){return this.attributes.get("width")}getHeight(){return this.attributes.get("height")}getFile(){return this.file}setFile(e){if(this.file=e,this.isPreviewable())return this.preloadFile()}releaseFile(){this.releasePreloadedFile(),this.file=null}getUploadProgress(){return this.uploadProgress!=null?this.uploadProgress:0}setUploadProgress(e){var n,r;if(this.uploadProgress!==e)return this.uploadProgress=e,(n=this.uploadProgressDelegate)===null||n===void 0||(r=n.attachmentDidChangeUploadProgress)===null||r===void 0?void 0:r.call(n,this)}toJSON(){return this.getAttributes()}getCacheKey(){return[super.getCacheKey(...arguments),this.attributes.getCacheKey(),this.getPreviewURL()].join("/")}getPreviewURL(){return this.previewURL||this.preloadingURL}setPreviewURL(e){var n,r,i,l;if(e!==this.getPreviewURL())return this.previewURL=e,(n=this.previewDelegate)===null||n===void 0||(r=n.attachmentDidChangeAttributes)===null||r===void 0||r.call(n,this),(i=this.delegate)===null||i===void 0||(l=i.attachmentDidChangePreviewURL)===null||l===void 0?void 0:l.call(i,this)}preloadURL(){return this.preload(this.getURL(),this.releaseFile)}preloadFile(){if(this.file)return this.fileObjectURL=URL.createObjectURL(this.file),this.preload(this.fileObjectURL)}releasePreloadedFile(){this.fileObjectURL&&(URL.revokeObjectURL(this.fileObjectURL),this.fileObjectURL=null)}preload(e,n){if(e&&e!==this.getPreviewURL())return this.preloadingURL=e,new od(e).then((r=>{let{width:i,height:l}=r;return this.getWidth()&&this.getHeight()||this.setAttributes({width:i,height:l}),this.preloadingURL=null,this.setPreviewURL(e),n?.()})).catch((()=>(this.preloadingURL=null,n?.())))}}St(ar,"previewablePattern",/^image(\/(gif|png|webp|jpe?g)|$)/);class rr extends Qn{static fromJSON(e){return new this(ar.fromJSON(e.attachment),e.attributes)}constructor(e){super(...arguments),this.attachment=e,this.length=1,this.ensureAttachmentExclusivelyHasAttribute("href"),this.attachment.hasContent()||this.removeProhibitedAttributes()}ensureAttachmentExclusivelyHasAttribute(e){this.hasAttribute(e)&&(this.attachment.hasAttribute(e)||this.attachment.setAttributes(this.attributes.slice([e])),this.attributes=this.attributes.remove(e))}removeProhibitedAttributes(){const e=this.attributes.slice(rr.permittedAttributes);e.isEqualTo(this.attributes)||(this.attributes=e)}getValue(){return this.attachment}isSerializable(){return!this.attachment.isPending()}getCaption(){return this.attributes.get("caption")||""}isEqualTo(e){var n;return super.isEqualTo(e)&&this.attachment.id===(e==null||(n=e.attachment)===null||n===void 0?void 0:n.id)}toString(){return"￼"}toJSON(){const e=super.toJSON(...arguments);return e.attachment=this.attachment,e}getCacheKey(){return[super.getCacheKey(...arguments),this.attachment.getCacheKey()].join("/")}toConsole(){return JSON.stringify(this.toString())}}St(rr,"permittedAttributes",["caption","presentation"]),Qn.registerType("attachment",rr);class Wl extends Qn{static fromJSON(e){return new this(e.string,e.attributes)}constructor(e){super(...arguments),this.string=(n=>n.replace(/\r\n?/g,`
`))(e),this.length=this.string.length}getValue(){return this.string}toString(){return this.string.toString()}isBlockBreak(){return this.toString()===`
`&&this.getAttribute("blockBreak")===!0}toJSON(){const e=super.toJSON(...arguments);return e.string=this.string,e}canBeConsolidatedWith(e){return e&&this.hasSameConstructorAs(e)&&this.hasSameAttributesAsPiece(e)}consolidateWith(e){return new this.constructor(this.toString()+e.toString(),this.attributes)}splitAtOffset(e){let n,r;return e===0?(n=null,r=this):e===this.length?(n=this,r=null):(n=new this.constructor(this.string.slice(0,e),this.attributes),r=new this.constructor(this.string.slice(e),this.attributes)),[n,r]}toConsole(){let{string:e}=this;return e.length>15&&(e=e.slice(0,14)+"…"),JSON.stringify(e.toString())}}Qn.registerType("string",Wl);class ii extends Wn{static box(e){return e instanceof this?e:new this(e)}constructor(){let e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:[];super(...arguments),this.objects=e.slice(0),this.length=this.objects.length}indexOf(e){return this.objects.indexOf(e)}splice(){for(var e=arguments.length,n=new Array(e),r=0;r<e;r++)n[r]=arguments[r];return new this.constructor(Hl(this.objects,...n))}eachObject(e){return this.objects.map(((n,r)=>e(n,r)))}insertObjectAtIndex(e,n){return this.splice(n,0,e)}insertSplittableListAtIndex(e,n){return this.splice(n,0,...e.objects)}insertSplittableListAtPosition(e,n){const[r,i]=this.splitObjectAtPosition(n);return new this.constructor(r).insertSplittableListAtIndex(e,i)}editObjectAtIndex(e,n){return this.replaceObjectAtIndex(n(this.objects[e]),e)}replaceObjectAtIndex(e,n){return this.splice(n,1,e)}removeObjectAtIndex(e){return this.splice(e,1)}getObjectAtIndex(e){return this.objects[e]}getSplittableListInRange(e){const[n,r,i]=this.splitObjectsAtRange(e);return new this.constructor(n.slice(r,i+1))}selectSplittableList(e){const n=this.objects.filter((r=>e(r)));return new this.constructor(n)}removeObjectsInRange(e){const[n,r,i]=this.splitObjectsAtRange(e);return new this.constructor(n).splice(r,i-r+1)}transformObjectsInRange(e,n){const[r,i,l]=this.splitObjectsAtRange(e),a=r.map(((o,s)=>i<=s&&s<=l?n(o):o));return new this.constructor(a)}splitObjectsAtRange(e){let n,[r,i,l]=this.splitObjectAtPosition($4(e));return[r,n]=new this.constructor(r).splitObjectAtPosition(H4(e)+l),[r,i,n-1]}getObjectAtPosition(e){const{index:n}=this.findIndexAndOffsetAtPosition(e);return this.objects[n]}splitObjectAtPosition(e){let n,r;const{index:i,offset:l}=this.findIndexAndOffsetAtPosition(e),a=this.objects.slice(0);if(i!=null)if(l===0)n=i,r=0;else{const o=this.getObjectAtIndex(i),[s,u]=o.splitAtOffset(l);a.splice(i,1,s,u),n=i+1,r=s.getLength()-l}else n=a.length,r=0;return[a,n,r]}consolidate(){const e=[];let n=this.objects[0];return this.objects.slice(1).forEach((r=>{var i,l;(i=(l=n).canBeConsolidatedWith)!==null&&i!==void 0&&i.call(l,r)?n=n.consolidateWith(r):(e.push(n),n=r)})),n&&e.push(n),new this.constructor(e)}consolidateFromIndexToIndex(e,n){const r=this.objects.slice(0).slice(e,n+1),i=new this.constructor(r).consolidate().toArray();return this.splice(e,r.length,...i)}findIndexAndOffsetAtPosition(e){let n,r=0;for(n=0;n<this.objects.length;n++){const i=r+this.objects[n].getLength();if(r<=e&&e<i)return{index:n,offset:e-r};r=i}return{index:null,offset:null}}findPositionAtIndexAndOffset(e,n){let r=0;for(let i=0;i<this.objects.length;i++){const l=this.objects[i];if(i<e)r+=l.getLength();else if(i===e){r+=n;break}}return r}getEndPosition(){return this.endPosition==null&&(this.endPosition=0,this.objects.forEach((e=>this.endPosition+=e.getLength()))),this.endPosition}toString(){return this.objects.join("")}toArray(){return this.objects.slice(0)}toJSON(){return this.toArray()}isEqualTo(e){return super.isEqualTo(...arguments)||O4(this.objects,e?.objects)}contentsForInspection(){return{objects:"[".concat(this.objects.map((e=>e.inspect())).join(", "),"]")}}}const O4=function(t){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:[];if(t.length!==e.length)return!1;let n=!0;for(let r=0;r<t.length;r++){const i=t[r];n&&!i.isEqualTo(e[r])&&(n=!1)}return n},$4=t=>t[0],H4=t=>t[1];class Jt extends Wn{static textForAttachmentWithAttributes(e,n){return new this([new rr(e,n)])}static textForStringWithAttributes(e,n){return new this([new Wl(e,n)])}static fromJSON(e){return new this(Array.from(e).map((n=>Qn.fromJSON(n))))}constructor(){let e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:[];super(...arguments);const n=e.filter((r=>!r.isEmpty()));this.pieceList=new ii(n)}copy(){return this.copyWithPieceList(this.pieceList)}copyWithPieceList(e){return new this.constructor(e.consolidate().toArray())}copyUsingObjectMap(e){const n=this.getPieces().map((r=>e.find(r)||r));return new this.constructor(n)}appendText(e){return this.insertTextAtPosition(e,this.getLength())}insertTextAtPosition(e,n){return this.copyWithPieceList(this.pieceList.insertSplittableListAtPosition(e.pieceList,n))}removeTextAtRange(e){return this.copyWithPieceList(this.pieceList.removeObjectsInRange(e))}replaceTextAtRange(e,n){return this.removeTextAtRange(n).insertTextAtPosition(e,n[0])}moveTextFromRangeToPosition(e,n){if(e[0]<=n&&n<=e[1])return;const r=this.getTextAtRange(e),i=r.getLength();return e[0]<n&&(n-=i),this.removeTextAtRange(e).insertTextAtPosition(r,n)}addAttributeAtRange(e,n,r){const i={};return i[e]=n,this.addAttributesAtRange(i,r)}addAttributesAtRange(e,n){return this.copyWithPieceList(this.pieceList.transformObjectsInRange(n,(r=>r.copyWithAdditionalAttributes(e))))}removeAttributeAtRange(e,n){return this.copyWithPieceList(this.pieceList.transformObjectsInRange(n,(r=>r.copyWithoutAttribute(e))))}setAttributesAtRange(e,n){return this.copyWithPieceList(this.pieceList.transformObjectsInRange(n,(r=>r.copyWithAttributes(e))))}getAttributesAtPosition(e){var n;return((n=this.pieceList.getObjectAtPosition(e))===null||n===void 0?void 0:n.getAttributes())||{}}getCommonAttributes(){const e=Array.from(this.pieceList.toArray()).map((n=>n.getAttributes()));return zt.fromCommonAttributesOfObjects(e).toObject()}getCommonAttributesAtRange(e){return this.getTextAtRange(e).getCommonAttributes()||{}}getExpandedRangeForAttributeAtOffset(e,n){let r,i=r=n;const l=this.getLength();for(;i>0&&this.getCommonAttributesAtRange([i-1,r])[e];)i--;for(;r<l&&this.getCommonAttributesAtRange([n,r+1])[e];)r++;return[i,r]}getTextAtRange(e){return this.copyWithPieceList(this.pieceList.getSplittableListInRange(e))}getStringAtRange(e){return this.pieceList.getSplittableListInRange(e).toString()}getStringAtPosition(e){return this.getStringAtRange([e,e+1])}startsWithString(e){return this.getStringAtRange([0,e.length])===e}endsWithString(e){const n=this.getLength();return this.getStringAtRange([n-e.length,n])===e}getAttachmentPieces(){return this.pieceList.toArray().filter((e=>!!e.attachment))}getAttachments(){return this.getAttachmentPieces().map((e=>e.attachment))}getAttachmentAndPositionById(e){let n=0;for(const i of this.pieceList.toArray()){var r;if(((r=i.attachment)===null||r===void 0?void 0:r.id)===e)return{attachment:i.attachment,position:n};n+=i.length}return{attachment:null,position:null}}getAttachmentById(e){const{attachment:n}=this.getAttachmentAndPositionById(e);return n}getRangeOfAttachment(e){const n=this.getAttachmentAndPositionById(e.id),r=n.position;if(e=n.attachment)return[r,r+1]}updateAttributesForAttachment(e,n){const r=this.getRangeOfAttachment(n);return r?this.addAttributesAtRange(e,r):this}getLength(){return this.pieceList.getEndPosition()}isEmpty(){return this.getLength()===0}isEqualTo(e){var n;return super.isEqualTo(e)||(e==null||(n=e.pieceList)===null||n===void 0?void 0:n.isEqualTo(this.pieceList))}isBlockBreak(){return this.getLength()===1&&this.pieceList.getObjectAtIndex(0).isBlockBreak()}eachPiece(e){return this.pieceList.eachObject(e)}getPieces(){return this.pieceList.toArray()}getPieceAtPosition(e){return this.pieceList.getObjectAtPosition(e)}contentsForInspection(){return{pieceList:this.pieceList.inspect()}}toSerializableText(){const e=this.pieceList.selectSplittableList((n=>n.isSerializable()));return this.copyWithPieceList(e)}toString(){return this.pieceList.toString()}toJSON(){return this.pieceList.toJSON()}toConsole(){return JSON.stringify(this.pieceList.toArray().map((e=>JSON.parse(e.toConsole()))))}getDirection(){return U6(this.toString())}isRTL(){return this.getDirection()==="rtl"}}class ln extends Wn{static fromJSON(e){return new this(Jt.fromJSON(e.text),e.attributes,e.htmlAttributes)}constructor(e,n,r){super(...arguments),this.text=P4(e||new Jt),this.attributes=n||[],this.htmlAttributes=r||{}}isEmpty(){return this.text.isBlockBreak()}isEqualTo(e){return!!super.isEqualTo(e)||this.text.isEqualTo(e?.text)&&jn(this.attributes,e?.attributes)&&ir(this.htmlAttributes,e?.htmlAttributes)}copyWithText(e){return new ln(e,this.attributes,this.htmlAttributes)}copyWithoutText(){return this.copyWithText(null)}copyWithAttributes(e){return new ln(this.text,e,this.htmlAttributes)}copyWithoutAttributes(){return this.copyWithAttributes(null)}copyUsingObjectMap(e){const n=e.find(this.text);return n?this.copyWithText(n):this.copyWithText(this.text.copyUsingObjectMap(e))}addAttribute(e){const n=this.attributes.concat(Oo(e));return this.copyWithAttributes(n)}addHTMLAttribute(e,n){const r=Object.assign({},this.htmlAttributes,{[e]:n});return new ln(this.text,this.attributes,r)}removeAttribute(e){const{listAttribute:n}=ot(e),r=Ho(Ho(this.attributes,e),n);return this.copyWithAttributes(r)}removeLastAttribute(){return this.removeAttribute(this.getLastAttribute())}getLastAttribute(){return $o(this.attributes)}getAttributes(){return this.attributes.slice(0)}getAttributeLevel(){return this.attributes.length}getAttributeAtLevel(e){return this.attributes[e-1]}hasAttribute(e){return this.attributes.includes(e)}hasAttributes(){return this.getAttributeLevel()>0}getLastNestableAttribute(){return $o(this.getNestableAttributes())}getNestableAttributes(){return this.attributes.filter((e=>ot(e).nestable))}getNestingLevel(){return this.getNestableAttributes().length}decreaseNestingLevel(){const e=this.getLastNestableAttribute();return e?this.removeAttribute(e):this}increaseNestingLevel(){const e=this.getLastNestableAttribute();if(e){const n=this.attributes.lastIndexOf(e),r=Hl(this.attributes,n+1,0,...Oo(e));return this.copyWithAttributes(r)}return this}getListItemAttributes(){return this.attributes.filter((e=>ot(e).listAttribute))}isListItem(){var e;return(e=ot(this.getLastAttribute()))===null||e===void 0?void 0:e.listAttribute}isTerminalBlock(){var e;return(e=ot(this.getLastAttribute()))===null||e===void 0?void 0:e.terminal}breaksOnReturn(){var e;return(e=ot(this.getLastAttribute()))===null||e===void 0?void 0:e.breakOnReturn}findLineBreakInDirectionFromPosition(e,n){const r=this.toString();let i;switch(e){case"forward":i=r.indexOf(`
`,n);break;case"backward":i=r.slice(0,n).lastIndexOf(`
`)}if(i!==-1)return i}contentsForInspection(){return{text:this.text.inspect(),attributes:this.attributes}}toString(){return this.text.toString()}toJSON(){return{text:this.text,attributes:this.attributes,htmlAttributes:this.htmlAttributes}}getDirection(){return this.text.getDirection()}isRTL(){return this.text.isRTL()}getLength(){return this.text.getLength()}canBeConsolidatedWith(e){return!this.hasAttributes()&&!e.hasAttributes()&&this.getDirection()===e.getDirection()}consolidateWith(e){const n=Jt.textForStringWithAttributes(`
`),r=this.getTextWithoutBlockBreak().appendText(n);return this.copyWithText(r.appendText(e.text))}splitAtOffset(e){let n,r;return e===0?(n=null,r=this):e===this.getLength()?(n=this,r=null):(n=this.copyWithText(this.text.getTextAtRange([0,e])),r=this.copyWithText(this.text.getTextAtRange([e,this.getLength()]))),[n,r]}getBlockBreakPosition(){return this.text.getLength()-1}getTextWithoutBlockBreak(){return sd(this.text)?this.text.getTextAtRange([0,this.getBlockBreakPosition()]):this.text.copy()}canBeGrouped(e){return this.attributes[e]}canBeGroupedWith(e,n){const r=e.getAttributes(),i=r[n],l=this.attributes[n];return l===i&&!(ot(l).group===!1&&!(()=>{if(!$r){$r=[];for(const a in Tt){const{listAttribute:o}=Tt[a];o!=null&&$r.push(o)}}return $r})().includes(r[n+1]))&&(this.getDirection()===e.getDirection()||e.isEmpty())}}const P4=function(t){return t=z4(t),t=V4(t)},z4=function(t){let e=!1;const n=t.getPieces();let r=n.slice(0,n.length-1);const i=n[n.length-1];return i?(r=r.map((l=>l.isBlockBreak()?(e=!0,j4(l)):l)),e?new Jt([...r,i]):t):t},N4=Jt.textForStringWithAttributes(`
`,{blockBreak:!0}),V4=function(t){return sd(t)?t:t.appendText(N4)},sd=function(t){const e=t.getLength();return e===0?!1:t.getTextAtRange([e-1,e]).isBlockBreak()},j4=t=>t.copyWithoutAttribute("blockBreak"),Oo=function(t){const{listAttribute:e}=ot(t);return e?[e,t]:[t]},$o=t=>t.slice(-1)[0],Ho=function(t,e){const n=t.lastIndexOf(e);return n===-1?t:Hl(t,n,1)};class Ut extends Wn{static fromJSON(e){return new this(Array.from(e).map((n=>ln.fromJSON(n))))}static fromString(e,n){const r=Jt.textForStringWithAttributes(e,n);return new this([new ln(r)])}constructor(){let e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:[];super(...arguments),e.length===0&&(e=[new ln]),this.blockList=ii.box(e)}isEmpty(){const e=this.getBlockAtIndex(0);return this.blockList.length===1&&e.isEmpty()&&!e.hasAttributes()}copy(){const e=(arguments.length>0&&arguments[0]!==void 0?arguments[0]:{}).consolidateBlocks?this.blockList.consolidate().toArray():this.blockList.toArray();return new this.constructor(e)}copyUsingObjectsFromDocument(e){const n=new Z6(e.getObjects());return this.copyUsingObjectMap(n)}copyUsingObjectMap(e){const n=this.getBlocks().map((r=>e.find(r)||r.copyUsingObjectMap(e)));return new this.constructor(n)}copyWithBaseBlockAttributes(){let e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:[];const n=this.getBlocks().map((r=>{const i=e.concat(r.getAttributes());return r.copyWithAttributes(i)}));return new this.constructor(n)}replaceBlock(e,n){const r=this.blockList.indexOf(e);return r===-1?this:new this.constructor(this.blockList.replaceObjectAtIndex(n,r))}insertDocumentAtRange(e,n){const{blockList:r}=e;n=ze(n);let[i]=n;const{index:l,offset:a}=this.locationFromPosition(i);let o=this;const s=this.getBlockAtPosition(i);return fn(n)&&s.isEmpty()&&!s.hasAttributes()?o=new this.constructor(o.blockList.removeObjectAtIndex(l)):s.getBlockBreakPosition()===a&&i++,o=o.removeTextAtRange(n),new this.constructor(o.blockList.insertSplittableListAtPosition(r,i))}mergeDocumentAtRange(e,n){let r,i;n=ze(n);const[l]=n,a=this.locationFromPosition(l),o=this.getBlockAtIndex(a.index).getAttributes(),s=e.getBaseBlockAttributes(),u=o.slice(-s.length);if(jn(s,u)){const E=o.slice(0,-s.length);r=e.copyWithBaseBlockAttributes(E)}else r=e.copy({consolidateBlocks:!0}).copyWithBaseBlockAttributes(o);const c=r.getBlockCount(),m=r.getBlockAtIndex(0);if(jn(o,m.getAttributes())){const E=m.getTextWithoutBlockBreak();if(i=this.insertTextAtRange(E,n),c>1){r=new this.constructor(r.getBlocks().slice(1));const g=l+E.getLength();i=i.insertDocumentAtRange(r,g)}}else i=this.insertDocumentAtRange(r,n);return i}insertTextAtRange(e,n){n=ze(n);const[r]=n,{index:i,offset:l}=this.locationFromPosition(r),a=this.removeTextAtRange(n);return new this.constructor(a.blockList.editObjectAtIndex(i,(o=>o.copyWithText(o.text.insertTextAtPosition(e,l)))))}removeTextAtRange(e){let n;e=ze(e);const[r,i]=e;if(fn(e))return this;const[l,a]=Array.from(this.locationRangeFromRange(e)),o=l.index,s=l.offset,u=this.getBlockAtIndex(o),c=a.index,m=a.offset,E=this.getBlockAtIndex(c);if(i-r==1&&u.getBlockBreakPosition()===s&&E.getBlockBreakPosition()!==m&&E.text.getStringAtPosition(m)===`
`)n=this.blockList.editObjectAtIndex(c,(g=>g.copyWithText(g.text.removeTextAtRange([m,m+1]))));else{let g;const b=u.text.getTextAtRange([0,s]),L=E.text.getTextAtRange([m,E.getLength()]),x=b.appendText(L);g=o!==c&&s===0&&u.getAttributeLevel()>=E.getAttributeLevel()?E.copyWithText(x):u.copyWithText(x);const I=c+1-o;n=this.blockList.splice(o,I,g)}return new this.constructor(n)}moveTextFromRangeToPosition(e,n){let r;e=ze(e);const[i,l]=e;if(i<=n&&n<=l)return this;let a=this.getDocumentAtRange(e),o=this.removeTextAtRange(e);const s=i<n;s&&(n-=a.getLength());const[u,...c]=a.getBlocks();return c.length===0?(r=u.getTextWithoutBlockBreak(),s&&(n+=1)):r=u.text,o=o.insertTextAtRange(r,n),c.length===0?o:(a=new this.constructor(c),n+=r.getLength(),o.insertDocumentAtRange(a,n))}addAttributeAtRange(e,n,r){let{blockList:i}=this;return this.eachBlockAtRange(r,((l,a,o)=>i=i.editObjectAtIndex(o,(function(){return ot(e)?l.addAttribute(e,n):a[0]===a[1]?l:l.copyWithText(l.text.addAttributeAtRange(e,n,a))})))),new this.constructor(i)}addAttribute(e,n){let{blockList:r}=this;return this.eachBlock(((i,l)=>r=r.editObjectAtIndex(l,(()=>i.addAttribute(e,n))))),new this.constructor(r)}removeAttributeAtRange(e,n){let{blockList:r}=this;return this.eachBlockAtRange(n,(function(i,l,a){ot(e)?r=r.editObjectAtIndex(a,(()=>i.removeAttribute(e))):l[0]!==l[1]&&(r=r.editObjectAtIndex(a,(()=>i.copyWithText(i.text.removeAttributeAtRange(e,l)))))})),new this.constructor(r)}updateAttributesForAttachment(e,n){const r=this.getRangeOfAttachment(n),[i]=Array.from(r),{index:l}=this.locationFromPosition(i),a=this.getTextAtIndex(l);return new this.constructor(this.blockList.editObjectAtIndex(l,(o=>o.copyWithText(a.updateAttributesForAttachment(e,n)))))}removeAttributeForAttachment(e,n){const r=this.getRangeOfAttachment(n);return this.removeAttributeAtRange(e,r)}setHTMLAttributeAtPosition(e,n,r){const i=this.getBlockAtPosition(e),l=i.addHTMLAttribute(n,r);return this.replaceBlock(i,l)}insertBlockBreakAtRange(e){let n;e=ze(e);const[r]=e,{offset:i}=this.locationFromPosition(r),l=this.removeTextAtRange(e);return i===0&&(n=[new ln]),new this.constructor(l.blockList.insertSplittableListAtPosition(new ii(n),r))}applyBlockAttributeAtRange(e,n,r){const i=this.expandRangeToLineBreaksAndSplitBlocks(r);let l=i.document;r=i.range;const a=ot(e);if(a.listAttribute){l=l.removeLastListAttributeAtRange(r,{exceptAttributeName:e});const o=l.convertLineBreaksToBlockBreaksInRange(r);l=o.document,r=o.range}else l=a.exclusive?l.removeBlockAttributesAtRange(r):a.terminal?l.removeLastTerminalAttributeAtRange(r):l.consolidateBlocksAtRange(r);return l.addAttributeAtRange(e,n,r)}removeLastListAttributeAtRange(e){let n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},{blockList:r}=this;return this.eachBlockAtRange(e,(function(i,l,a){const o=i.getLastAttribute();o&&ot(o).listAttribute&&o!==n.exceptAttributeName&&(r=r.editObjectAtIndex(a,(()=>i.removeAttribute(o))))})),new this.constructor(r)}removeLastTerminalAttributeAtRange(e){let{blockList:n}=this;return this.eachBlockAtRange(e,(function(r,i,l){const a=r.getLastAttribute();a&&ot(a).terminal&&(n=n.editObjectAtIndex(l,(()=>r.removeAttribute(a))))})),new this.constructor(n)}removeBlockAttributesAtRange(e){let{blockList:n}=this;return this.eachBlockAtRange(e,(function(r,i,l){r.hasAttributes()&&(n=n.editObjectAtIndex(l,(()=>r.copyWithoutAttributes())))})),new this.constructor(n)}expandRangeToLineBreaksAndSplitBlocks(e){let n;e=ze(e);let[r,i]=e;const l=this.locationFromPosition(r),a=this.locationFromPosition(i);let o=this;const s=o.getBlockAtIndex(l.index);if(l.offset=s.findLineBreakInDirectionFromPosition("backward",l.offset),l.offset!=null&&(n=o.positionFromLocation(l),o=o.insertBlockBreakAtRange([n,n+1]),a.index+=1,a.offset-=o.getBlockAtIndex(l.index).getLength(),l.index+=1),l.offset=0,a.offset===0&&a.index>l.index)a.index-=1,a.offset=o.getBlockAtIndex(a.index).getBlockBreakPosition();else{const u=o.getBlockAtIndex(a.index);u.text.getStringAtRange([a.offset-1,a.offset])===`
`?a.offset-=1:a.offset=u.findLineBreakInDirectionFromPosition("forward",a.offset),a.offset!==u.getBlockBreakPosition()&&(n=o.positionFromLocation(a),o=o.insertBlockBreakAtRange([n,n+1]))}return r=o.positionFromLocation(l),i=o.positionFromLocation(a),{document:o,range:e=ze([r,i])}}convertLineBreaksToBlockBreaksInRange(e){e=ze(e);let[n]=e;const r=this.getStringAtRange(e).slice(0,-1);let i=this;return r.replace(/.*?\n/g,(function(l){n+=l.length,i=i.insertBlockBreakAtRange([n-1,n])})),{document:i,range:e}}consolidateBlocksAtRange(e){e=ze(e);const[n,r]=e,i=this.locationFromPosition(n).index,l=this.locationFromPosition(r).index;return new this.constructor(this.blockList.consolidateFromIndexToIndex(i,l))}getDocumentAtRange(e){e=ze(e);const n=this.blockList.getSplittableListInRange(e).toArray();return new this.constructor(n)}getStringAtRange(e){let n;const r=e=ze(e);return r[r.length-1]!==this.getLength()&&(n=-1),this.getDocumentAtRange(e).toString().slice(0,n)}getBlockAtIndex(e){return this.blockList.getObjectAtIndex(e)}getBlockAtPosition(e){const{index:n}=this.locationFromPosition(e);return this.getBlockAtIndex(n)}getTextAtIndex(e){var n;return(n=this.getBlockAtIndex(e))===null||n===void 0?void 0:n.text}getTextAtPosition(e){const{index:n}=this.locationFromPosition(e);return this.getTextAtIndex(n)}getPieceAtPosition(e){const{index:n,offset:r}=this.locationFromPosition(e);return this.getTextAtIndex(n).getPieceAtPosition(r)}getCharacterAtPosition(e){const{index:n,offset:r}=this.locationFromPosition(e);return this.getTextAtIndex(n).getStringAtRange([r,r+1])}getLength(){return this.blockList.getEndPosition()}getBlocks(){return this.blockList.toArray()}getBlockCount(){return this.blockList.length}getEditCount(){return this.editCount}eachBlock(e){return this.blockList.eachObject(e)}eachBlockAtRange(e,n){let r,i;e=ze(e);const[l,a]=e,o=this.locationFromPosition(l),s=this.locationFromPosition(a);if(o.index===s.index)return r=this.getBlockAtIndex(o.index),i=[o.offset,s.offset],n(r,i,o.index);for(let u=o.index;u<=s.index;u++)if(r=this.getBlockAtIndex(u),r){switch(u){case o.index:i=[o.offset,r.text.getLength()];break;case s.index:i=[0,s.offset];break;default:i=[0,r.text.getLength()]}n(r,i,u)}}getCommonAttributesAtRange(e){e=ze(e);const[n]=e;if(fn(e))return this.getCommonAttributesAtPosition(n);{const r=[],i=[];return this.eachBlockAtRange(e,(function(l,a){if(a[0]!==a[1])return r.push(l.text.getCommonAttributesAtRange(a)),i.push(Po(l))})),zt.fromCommonAttributesOfObjects(r).merge(zt.fromCommonAttributesOfObjects(i)).toObject()}}getCommonAttributesAtPosition(e){let n,r;const{index:i,offset:l}=this.locationFromPosition(e),a=this.getBlockAtIndex(i);if(!a)return{};const o=Po(a),s=a.text.getAttributesAtPosition(l),u=a.text.getAttributesAtPosition(l-1),c=Object.keys(Vn).filter((m=>Vn[m].inheritable));for(n in u)r=u[n],(r===s[n]||c.includes(n))&&(o[n]=r);return o}getRangeOfCommonAttributeAtPosition(e,n){const{index:r,offset:i}=this.locationFromPosition(n),l=this.getTextAtIndex(r),[a,o]=Array.from(l.getExpandedRangeForAttributeAtOffset(e,i)),s=this.positionFromLocation({index:r,offset:a}),u=this.positionFromLocation({index:r,offset:o});return ze([s,u])}getBaseBlockAttributes(){let e=this.getBlockAtIndex(0).getAttributes();for(let n=1;n<this.getBlockCount();n++){const r=this.getBlockAtIndex(n).getAttributes(),i=Math.min(e.length,r.length);e=(()=>{const l=[];for(let a=0;a<i&&r[a]===e[a];a++)l.push(r[a]);return l})()}return e}getAttachmentById(e){for(const n of this.getAttachments())if(n.id===e)return n}getAttachmentPieces(){let e=[];return this.blockList.eachObject((n=>{let{text:r}=n;return e=e.concat(r.getAttachmentPieces())})),e}getAttachments(){return this.getAttachmentPieces().map((e=>e.attachment))}getRangeOfAttachment(e){let n=0;const r=this.blockList.toArray();for(let i=0;i<r.length;i++){const{text:l}=r[i],a=l.getRangeOfAttachment(e);if(a)return ze([n+a[0],n+a[1]]);n+=l.getLength()}}getLocationRangeOfAttachment(e){const n=this.getRangeOfAttachment(e);return this.locationRangeFromRange(n)}getAttachmentPieceForAttachment(e){for(const n of this.getAttachmentPieces())if(n.attachment===e)return n}findRangesForBlockAttribute(e){let n=0;const r=[];return this.getBlocks().forEach((i=>{const l=i.getLength();i.hasAttribute(e)&&r.push([n,n+l]),n+=l})),r}findRangesForTextAttribute(e){let{withValue:n}=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},r=0,i=[];const l=[];return this.getPieces().forEach((a=>{const o=a.getLength();(function(s){return n?s.getAttribute(e)===n:s.hasAttribute(e)})(a)&&(i[1]===r?i[1]=r+o:l.push(i=[r,r+o])),r+=o})),l}locationFromPosition(e){const n=this.blockList.findIndexAndOffsetAtPosition(Math.max(0,e));if(n.index!=null)return n;{const r=this.getBlocks();return{index:r.length-1,offset:r[r.length-1].getLength()}}}positionFromLocation(e){return this.blockList.findPositionAtIndexAndOffset(e.index,e.offset)}locationRangeFromPosition(e){return ze(this.locationFromPosition(e))}locationRangeFromRange(e){if(!(e=ze(e)))return;const[n,r]=Array.from(e),i=this.locationFromPosition(n),l=this.locationFromPosition(r);return ze([i,l])}rangeFromLocationRange(e){let n;e=ze(e);const r=this.positionFromLocation(e[0]);return fn(e)||(n=this.positionFromLocation(e[1])),ze([r,n])}isEqualTo(e){return this.blockList.isEqualTo(e?.blockList)}getTexts(){return this.getBlocks().map((e=>e.text))}getPieces(){const e=[];return Array.from(this.getTexts()).forEach((n=>{e.push(...Array.from(n.getPieces()||[]))})),e}getObjects(){return this.getBlocks().concat(this.getTexts()).concat(this.getPieces())}toSerializableDocument(){const e=[];return this.blockList.eachObject((n=>e.push(n.copyWithText(n.text.toSerializableText())))),new this.constructor(e)}toString(){return this.blockList.toString()}toJSON(){return this.blockList.toJSON()}toConsole(){return JSON.stringify(this.blockList.toArray().map((e=>JSON.parse(e.text.toConsole()))))}}const Po=function(t){const e={},n=t.getLastAttribute();return n&&(e[n]=!0),e},Ui=function(t){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};return{string:t=mr(t),attributes:e,type:"string"}},zo=(t,e)=>{try{return JSON.parse(t.getAttribute("data-trix-".concat(e)))}catch{return{}}};class _r extends ft{static parse(e,n){const r=new this(e,n);return r.parse(),r}constructor(e){let{referenceElement:n,purifyOptions:r}=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};super(...arguments),this.html=e,this.referenceElement=n,this.purifyOptions=r,this.blocks=[],this.blockElements=[],this.processedElements=[]}getDocument(){return Ut.fromJSON(this.blocks)}parse(){try{this.createHiddenContainer(),Ci.setHTML(this.containerElement,this.html,{purifyOptions:this.purifyOptions});const e=ei(this.containerElement,{usingFilter:W4});for(;e.nextNode();)this.processNode(e.currentNode);return this.translateBlockElementMarginsToNewlines()}finally{this.removeHiddenContainer()}}createHiddenContainer(){return this.referenceElement?(this.containerElement=this.referenceElement.cloneNode(!1),this.containerElement.removeAttribute("id"),this.containerElement.setAttribute("data-trix-internal",""),this.containerElement.style.display="none",this.referenceElement.parentNode.insertBefore(this.containerElement,this.referenceElement.nextSibling)):(this.containerElement=Se({tagName:"div",style:{display:"none"}}),document.body.appendChild(this.containerElement))}removeHiddenContainer(){return Sn(this.containerElement)}processNode(e){switch(e.nodeType){case Node.TEXT_NODE:if(!this.isInsignificantTextNode(e))return this.appendBlockForTextNode(e),this.processTextNode(e);break;case Node.ELEMENT_NODE:return this.appendBlockForElement(e),this.processElement(e)}}appendBlockForTextNode(e){const n=e.parentNode;if(n===this.currentBlockElement&&this.isBlockElement(e.previousSibling))return this.appendStringWithAttributes(`
`);if(n===this.containerElement||this.isBlockElement(n)){var r;const i=this.getBlockAttributes(n),l=this.getBlockHTMLAttributes(n);jn(i,(r=this.currentBlock)===null||r===void 0?void 0:r.attributes)||(this.currentBlock=this.appendBlockForAttributesWithElement(i,n,l),this.currentBlockElement=n)}}appendBlockForElement(e){const n=this.isBlockElement(e),r=On(this.currentBlockElement,e);if(n&&!this.isBlockElement(e.firstChild)){if(!this.isInsignificantTextNode(e.firstChild)||!this.isBlockElement(e.firstElementChild)){const i=this.getBlockAttributes(e),l=this.getBlockHTMLAttributes(e);if(e.firstChild){if(r&&jn(i,this.currentBlock.attributes))return this.appendStringWithAttributes(`
`);this.currentBlock=this.appendBlockForAttributesWithElement(i,e,l),this.currentBlockElement=e}}}else if(this.currentBlockElement&&!r&&!n){const i=this.findParentBlockElement(e);if(i)return this.appendBlockForElement(i);this.currentBlock=this.appendEmptyBlock(),this.currentBlockElement=null}}findParentBlockElement(e){let{parentElement:n}=e;for(;n&&n!==this.containerElement;){if(this.isBlockElement(n)&&this.blockElements.includes(n))return n;n=n.parentElement}return null}processTextNode(e){let n=e.data;var r;return No(e.parentNode)||(n=Nl(n),ud((r=e.previousSibling)===null||r===void 0?void 0:r.textContent)&&(n=q4(n))),this.appendStringWithAttributes(n,this.getTextAttributes(e.parentNode))}processElement(e){let n;if(zn(e)){if(n=zo(e,"attachment"),Object.keys(n).length){const r=this.getTextAttributes(e);this.appendAttachmentWithAttributes(n,r),e.innerHTML=""}return this.processedElements.push(e)}switch(xt(e)){case"br":return this.isExtraBR(e)||this.isBlockElement(e.nextSibling)||this.appendStringWithAttributes(`
`,this.getTextAttributes(e)),this.processedElements.push(e);case"img":n={url:e.getAttribute("src"),contentType:"image"};const r=(i=>{const l=i.getAttribute("width"),a=i.getAttribute("height"),o={};return l&&(o.width=parseInt(l,10)),a&&(o.height=parseInt(a,10)),o})(e);for(const i in r){const l=r[i];n[i]=l}return this.appendAttachmentWithAttributes(n,this.getTextAttributes(e)),this.processedElements.push(e);case"tr":if(this.needsTableSeparator(e))return this.appendStringWithAttributes(Qr.tableRowSeparator);break;case"td":if(this.needsTableSeparator(e))return this.appendStringWithAttributes(Qr.tableCellSeparator)}}appendBlockForAttributesWithElement(e,n){let r=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{};this.blockElements.push(n);const i=(function(){return{text:[],attributes:arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},htmlAttributes:arguments.length>1&&arguments[1]!==void 0?arguments[1]:{}}})(e,r);return this.blocks.push(i),i}appendEmptyBlock(){return this.appendBlockForAttributesWithElement([],null)}appendStringWithAttributes(e,n){return this.appendPiece(Ui(e,n))}appendAttachmentWithAttributes(e,n){return this.appendPiece((function(r){return{attachment:r,attributes:arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},type:"attachment"}})(e,n))}appendPiece(e){return this.blocks.length===0&&this.appendEmptyBlock(),this.blocks[this.blocks.length-1].text.push(e)}appendStringToTextAtIndex(e,n){const{text:r}=this.blocks[n],i=r[r.length-1];if(i?.type!=="string")return r.push(Ui(e));i.string+=e}prependStringToTextAtIndex(e,n){const{text:r}=this.blocks[n],i=r[0];if(i?.type!=="string")return r.unshift(Ui(e));i.string=e+i.string}getTextAttributes(e){let n;const r={};for(const i in Vn){const l=Vn[i];if(l.tagName&&Tn(e,{matchingSelector:l.tagName,untilNode:this.containerElement}))r[i]=!0;else if(l.parser){if(n=l.parser(e),n){let a=!1;for(const o of this.findBlockElementAncestors(e))if(l.parser(o)===n){a=!0;break}a||(r[i]=n)}}else l.styleProperty&&(n=e.style[l.styleProperty],n&&(r[i]=n))}if(zn(e)){const i=zo(e,"attributes");for(const l in i)n=i[l],r[l]=n}return r}getBlockAttributes(e){const n=[];for(;e&&e!==this.containerElement;){for(const i in Tt){const l=Tt[i];var r;l.parse!==!1&&xt(e)===l.tagName&&((r=l.test)!==null&&r!==void 0&&r.call(l,e)||!l.test)&&(n.push(i),l.listAttribute&&n.push(l.listAttribute))}e=e.parentNode}return n.reverse()}getBlockHTMLAttributes(e){const n={},r=Object.values(Tt).find((i=>i.tagName===xt(e)));return(r?.htmlAttributes||[]).forEach((i=>{e.hasAttribute(i)&&(n[i]=e.getAttribute(i))})),n}findBlockElementAncestors(e){const n=[];for(;e&&e!==this.containerElement;){const r=xt(e);wr().includes(r)&&n.push(e),e=e.parentNode}return n}isBlockElement(e){if(e?.nodeType===Node.ELEMENT_NODE&&!zn(e)&&!Tn(e,{matchingSelector:"td",untilNode:this.containerElement}))return wr().includes(xt(e))||window.getComputedStyle(e).display==="block"}isInsignificantTextNode(e){if(e?.nodeType!==Node.TEXT_NODE||!Q4(e.data))return;const{parentNode:n,previousSibling:r,nextSibling:i}=e;return U4(n.previousSibling)&&!this.isBlockElement(n.previousSibling)||No(n)?void 0:!r||this.isBlockElement(r)||!i||this.isBlockElement(i)}isExtraBR(e){return xt(e)==="br"&&this.isBlockElement(e.parentNode)&&e.parentNode.lastChild===e}needsTableSeparator(e){if(Qr.removeBlankTableCells){var n;const r=(n=e.previousSibling)===null||n===void 0?void 0:n.textContent;return r&&/\S/.test(r)}return e.previousSibling}translateBlockElementMarginsToNewlines(){const e=this.getMarginOfDefaultBlockElement();for(let n=0;n<this.blocks.length;n++){const r=this.getMarginOfBlockElementAtIndex(n);r&&(r.top>2*e.top&&this.prependStringToTextAtIndex(`
`,n),r.bottom>2*e.bottom&&this.appendStringToTextAtIndex(`
`,n))}}getMarginOfBlockElementAtIndex(e){const n=this.blockElements[e];if(n&&n.textContent&&!wr().includes(xt(n))&&!this.processedElements.includes(n))return Vo(n)}getMarginOfDefaultBlockElement(){const e=Se(Tt.default.tagName);return this.containerElement.appendChild(e),Vo(e)}}const No=function(t){const{whiteSpace:e}=window.getComputedStyle(t);return["pre","pre-wrap","pre-line"].includes(e)},U4=t=>t&&!ud(t.textContent),Vo=function(t){const e=window.getComputedStyle(t);if(e.display==="block")return{top:parseInt(e.marginTop),bottom:parseInt(e.marginBottom)}},W4=function(t){return xt(t)==="style"?NodeFilter.FILTER_REJECT:NodeFilter.FILTER_ACCEPT},q4=t=>t.replace(new RegExp("^".concat(zl.source,"+")),""),Q4=t=>new RegExp("^".concat(zl.source,"*$")).test(t),ud=t=>/\s$/.test(t),K4=["contenteditable","data-trix-id","data-trix-store-key","data-trix-mutable","data-trix-placeholder","tabindex"],va="data-trix-serialized-attributes",G4="[".concat(va,"]"),J4=new RegExp("<!--block-->","g"),Y4={"application/json":function(t){let e;if(t instanceof Ut)e=t;else{if(!(t instanceof HTMLElement))throw new Error("unserializable object");e=_r.parse(t.innerHTML).getDocument()}return e.toSerializableDocument().toJSONString()},"text/html":function(t){let e;if(t instanceof Ut)e=Ei.render(t);else{if(!(t instanceof HTMLElement))throw new Error("unserializable object");e=t.cloneNode(!0)}return Array.from(e.querySelectorAll("[data-trix-serialize=false]")).forEach((n=>{Sn(n)})),K4.forEach((n=>{Array.from(e.querySelectorAll("[".concat(n,"]"))).forEach((r=>{r.removeAttribute(n)}))})),Array.from(e.querySelectorAll(G4)).forEach((n=>{try{const r=JSON.parse(n.getAttribute(va));n.removeAttribute(va);for(const i in r){const l=r[i];n.setAttribute(i,l)}}catch{}})),e.innerHTML.replace(J4,"")}};var X4=Object.freeze({__proto__:null});class lt extends ft{constructor(e,n){super(...arguments),this.attachmentManager=e,this.attachment=n,this.id=this.attachment.id,this.file=this.attachment.file}remove(){return this.attachmentManager.requestRemovalOfAttachment(this.attachment)}}lt.proxyMethod("attachment.getAttribute"),lt.proxyMethod("attachment.hasAttribute"),lt.proxyMethod("attachment.setAttribute"),lt.proxyMethod("attachment.getAttributes"),lt.proxyMethod("attachment.setAttributes"),lt.proxyMethod("attachment.isPending"),lt.proxyMethod("attachment.isPreviewable"),lt.proxyMethod("attachment.getURL"),lt.proxyMethod("attachment.getHref"),lt.proxyMethod("attachment.getFilename"),lt.proxyMethod("attachment.getFilesize"),lt.proxyMethod("attachment.getFormattedFilesize"),lt.proxyMethod("attachment.getExtension"),lt.proxyMethod("attachment.getContentType"),lt.proxyMethod("attachment.getFile"),lt.proxyMethod("attachment.setFile"),lt.proxyMethod("attachment.releaseFile"),lt.proxyMethod("attachment.getUploadProgress"),lt.proxyMethod("attachment.setUploadProgress");class dd extends ft{constructor(){let e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:[];super(...arguments),this.managedAttachments={},Array.from(e).forEach((n=>{this.manageAttachment(n)}))}getAttachments(){const e=[];for(const n in this.managedAttachments){const r=this.managedAttachments[n];e.push(r)}return e}manageAttachment(e){return this.managedAttachments[e.id]||(this.managedAttachments[e.id]=new lt(this,e)),this.managedAttachments[e.id]}attachmentIsManaged(e){return e.id in this.managedAttachments}requestRemovalOfAttachment(e){var n,r;if(this.attachmentIsManaged(e))return(n=this.delegate)===null||n===void 0||(r=n.attachmentManagerDidRequestRemovalOfAttachment)===null||r===void 0?void 0:r.call(n,e)}unmanageAttachment(e){const n=this.managedAttachments[e.id];return delete this.managedAttachments[e.id],n}}class cd{constructor(e){this.composition=e,this.document=this.composition.document;const n=this.composition.getSelectedRange();this.startPosition=n[0],this.endPosition=n[1],this.startLocation=this.document.locationFromPosition(this.startPosition),this.endLocation=this.document.locationFromPosition(this.endPosition),this.block=this.document.getBlockAtIndex(this.endLocation.index),this.breaksOnReturn=this.block.breaksOnReturn(),this.previousCharacter=this.block.text.getStringAtPosition(this.endLocation.offset-1),this.nextCharacter=this.block.text.getStringAtPosition(this.endLocation.offset)}shouldInsertBlockBreak(){return this.block.hasAttributes()&&this.block.isListItem()&&!this.block.isEmpty()?this.startLocation.offset!==0:this.breaksOnReturn&&this.nextCharacter!==`
`}shouldBreakFormattedBlock(){return this.block.hasAttributes()&&!this.block.isListItem()&&(this.breaksOnReturn&&this.nextCharacter===`
`||this.previousCharacter===`
`)}shouldDecreaseListLevel(){return this.block.hasAttributes()&&this.block.isListItem()&&this.block.isEmpty()}shouldPrependListItem(){return this.block.isListItem()&&this.startLocation.offset===0&&!this.block.isEmpty()}shouldRemoveLastBlockAttribute(){return this.block.hasAttributes()&&!this.block.isListItem()&&this.block.isEmpty()}}class Cn extends ft{constructor(){super(...arguments),this.document=new Ut,this.attachments=[],this.currentAttributes={},this.revision=0}setDocument(e){var n,r;if(!e.isEqualTo(this.document))return this.document=e,this.refreshAttachments(),this.revision++,(n=this.delegate)===null||n===void 0||(r=n.compositionDidChangeDocument)===null||r===void 0?void 0:r.call(n,e)}getSnapshot(){return{document:this.document,selectedRange:this.getSelectedRange()}}loadSnapshot(e){var n,r,i,l;let{document:a,selectedRange:o}=e;return(n=this.delegate)===null||n===void 0||(r=n.compositionWillLoadSnapshot)===null||r===void 0||r.call(n),this.setDocument(a??new Ut),this.setSelection(o??[0,0]),(i=this.delegate)===null||i===void 0||(l=i.compositionDidLoadSnapshot)===null||l===void 0?void 0:l.call(i)}insertText(e){let{updatePosition:n}=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{updatePosition:!0};const r=this.getSelectedRange();this.setDocument(this.document.insertTextAtRange(e,r));const i=r[0],l=i+e.getLength();return n&&this.setSelection(l),this.notifyDelegateOfInsertionAtRange([i,l])}insertBlock(){let e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:new ln;const n=new Ut([e]);return this.insertDocument(n)}insertDocument(){let e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:new Ut;const n=this.getSelectedRange();this.setDocument(this.document.insertDocumentAtRange(e,n));const r=n[0],i=r+e.getLength();return this.setSelection(i),this.notifyDelegateOfInsertionAtRange([r,i])}insertString(e,n){const r=this.getCurrentTextAttributes(),i=Jt.textForStringWithAttributes(e,r);return this.insertText(i,n)}insertBlockBreak(){const e=this.getSelectedRange();this.setDocument(this.document.insertBlockBreakAtRange(e));const n=e[0],r=n+1;return this.setSelection(r),this.notifyDelegateOfInsertionAtRange([n,r])}insertLineBreak(){const e=new cd(this);if(e.shouldDecreaseListLevel())return this.decreaseListLevel(),this.setSelection(e.startPosition);if(e.shouldPrependListItem()){const n=new Ut([e.block.copyWithoutText()]);return this.insertDocument(n)}return e.shouldInsertBlockBreak()?this.insertBlockBreak():e.shouldRemoveLastBlockAttribute()?this.removeLastBlockAttribute():e.shouldBreakFormattedBlock()?this.breakFormattedBlock(e):this.insertString(`
`)}insertHTML(e){const n=_r.parse(e,{purifyOptions:{SAFE_FOR_XML:!0}}).getDocument(),r=this.getSelectedRange();this.setDocument(this.document.mergeDocumentAtRange(n,r));const i=r[0],l=i+n.getLength()-1;return this.setSelection(l),this.notifyDelegateOfInsertionAtRange([i,l])}replaceHTML(e){const n=_r.parse(e).getDocument().copyUsingObjectsFromDocument(this.document),r=this.getLocationRange({strict:!1}),i=this.document.rangeFromLocationRange(r);return this.setDocument(n),this.setSelection(i)}insertFile(e){return this.insertFiles([e])}insertFiles(e){const n=[];return Array.from(e).forEach((r=>{var i;if((i=this.delegate)!==null&&i!==void 0&&i.compositionShouldAcceptFile(r)){const l=ar.attachmentForFile(r);n.push(l)}})),this.insertAttachments(n)}insertAttachment(e){return this.insertAttachments([e])}insertAttachments(e){let n=new Jt;return Array.from(e).forEach((r=>{var i;const l=r.getType(),a=(i=Rl[l])===null||i===void 0?void 0:i.presentation,o=this.getCurrentTextAttributes();a&&(o.presentation=a);const s=Jt.textForAttachmentWithAttributes(r,o);n=n.appendText(s)})),this.insertText(n)}shouldManageDeletingInDirection(e){const n=this.getLocationRange();if(fn(n)){if(e==="backward"&&n[0].offset===0||this.shouldManageMovingCursorInDirection(e))return!0}else if(n[0].index!==n[1].index)return!0;return!1}deleteInDirection(e){let n,r,i,{length:l}=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};const a=this.getLocationRange();let o=this.getSelectedRange();const s=fn(o);if(s?r=e==="backward"&&a[0].offset===0:i=a[0].index!==a[1].index,r&&this.canDecreaseBlockAttributeLevel()){const u=this.getBlock();if(u.isListItem()?this.decreaseListLevel():this.decreaseBlockAttributeLevel(),this.setSelection(o[0]),u.isEmpty())return!1}return s&&(o=this.getExpandedRangeInDirection(e,{length:l}),e==="backward"&&(n=this.getAttachmentAtRange(o))),n?(this.editAttachment(n),!1):(this.setDocument(this.document.removeTextAtRange(o)),this.setSelection(o[0]),!r&&!i&&void 0)}moveTextFromRange(e){const[n]=Array.from(this.getSelectedRange());return this.setDocument(this.document.moveTextFromRangeToPosition(e,n)),this.setSelection(n)}removeAttachment(e){const n=this.document.getRangeOfAttachment(e);if(n)return this.stopEditingAttachment(),this.setDocument(this.document.removeTextAtRange(n)),this.setSelection(n[0])}removeLastBlockAttribute(){const[e,n]=Array.from(this.getSelectedRange()),r=this.document.getBlockAtPosition(n);return this.removeCurrentAttribute(r.getLastAttribute()),this.setSelection(e)}insertPlaceholder(){return this.placeholderPosition=this.getPosition(),this.insertString(" ")}selectPlaceholder(){if(this.placeholderPosition!=null)return this.setSelectedRange([this.placeholderPosition,this.placeholderPosition+1]),this.getSelectedRange()}forgetPlaceholder(){this.placeholderPosition=null}hasCurrentAttribute(e){const n=this.currentAttributes[e];return n!=null&&n!==!1}toggleCurrentAttribute(e){const n=!this.currentAttributes[e];return n?this.setCurrentAttribute(e,n):this.removeCurrentAttribute(e)}canSetCurrentAttribute(e){return ot(e)?this.canSetCurrentBlockAttribute(e):this.canSetCurrentTextAttribute(e)}canSetCurrentTextAttribute(e){const n=this.getSelectedDocument();if(n){for(const r of Array.from(n.getAttachments()))if(!r.hasContent())return!1;return!0}}canSetCurrentBlockAttribute(e){const n=this.getBlock();if(n)return!n.isTerminalBlock()}setCurrentAttribute(e,n){return ot(e)?this.setBlockAttribute(e,n):(this.setTextAttribute(e,n),this.currentAttributes[e]=n,this.notifyDelegateOfCurrentAttributesChange())}setHTMLAtributeAtPosition(e,n,r){var i;const l=this.document.getBlockAtPosition(e),a=(i=ot(l.getLastAttribute()))===null||i===void 0?void 0:i.htmlAttributes;if(l&&a!=null&&a.includes(n)){const o=this.document.setHTMLAttributeAtPosition(e,n,r);this.setDocument(o)}}setTextAttribute(e,n){const r=this.getSelectedRange();if(!r)return;const[i,l]=Array.from(r);if(i!==l)return this.setDocument(this.document.addAttributeAtRange(e,n,r));if(e==="href"){const a=Jt.textForStringWithAttributes(n,{href:n});return this.insertText(a)}}setBlockAttribute(e,n){const r=this.getSelectedRange();if(this.canSetCurrentAttribute(e))return this.setDocument(this.document.applyBlockAttributeAtRange(e,n,r)),this.setSelection(r)}removeCurrentAttribute(e){return ot(e)?(this.removeBlockAttribute(e),this.updateCurrentAttributes()):(this.removeTextAttribute(e),delete this.currentAttributes[e],this.notifyDelegateOfCurrentAttributesChange())}removeTextAttribute(e){const n=this.getSelectedRange();if(n)return this.setDocument(this.document.removeAttributeAtRange(e,n))}removeBlockAttribute(e){const n=this.getSelectedRange();if(n)return this.setDocument(this.document.removeAttributeAtRange(e,n))}canDecreaseNestingLevel(){var e;return((e=this.getBlock())===null||e===void 0?void 0:e.getNestingLevel())>0}canIncreaseNestingLevel(){var e;const n=this.getBlock();if(n){if((e=ot(n.getLastNestableAttribute()))===null||e===void 0||!e.listAttribute)return n.getNestingLevel()>0;{const r=this.getPreviousBlock();if(r)return(function(){let i=arguments.length>1&&arguments[1]!==void 0?arguments[1]:[];return jn((arguments.length>0&&arguments[0]!==void 0?arguments[0]:[]).slice(0,i.length),i)})(r.getListItemAttributes(),n.getListItemAttributes())}}}decreaseNestingLevel(){const e=this.getBlock();if(e)return this.setDocument(this.document.replaceBlock(e,e.decreaseNestingLevel()))}increaseNestingLevel(){const e=this.getBlock();if(e)return this.setDocument(this.document.replaceBlock(e,e.increaseNestingLevel()))}canDecreaseBlockAttributeLevel(){var e;return((e=this.getBlock())===null||e===void 0?void 0:e.getAttributeLevel())>0}decreaseBlockAttributeLevel(){var e;const n=(e=this.getBlock())===null||e===void 0?void 0:e.getLastAttribute();if(n)return this.removeCurrentAttribute(n)}decreaseListLevel(){let[e]=Array.from(this.getSelectedRange());const{index:n}=this.document.locationFromPosition(e);let r=n;const i=this.getBlock().getAttributeLevel();let l=this.document.getBlockAtIndex(r+1);for(;l&&l.isListItem()&&!(l.getAttributeLevel()<=i);)r++,l=this.document.getBlockAtIndex(r+1);e=this.document.positionFromLocation({index:n,offset:0});const a=this.document.positionFromLocation({index:r,offset:0});return this.setDocument(this.document.removeLastListAttributeAtRange([e,a]))}updateCurrentAttributes(){const e=this.getSelectedRange({ignoreLock:!0});if(e){const n=this.document.getCommonAttributesAtRange(e);if(Array.from(ua()).forEach((r=>{n[r]||this.canSetCurrentAttribute(r)||(n[r]=!1)})),!ir(n,this.currentAttributes))return this.currentAttributes=n,this.notifyDelegateOfCurrentAttributesChange()}}getCurrentAttributes(){return zu.call({},this.currentAttributes)}getCurrentTextAttributes(){const e={};for(const n in this.currentAttributes){const r=this.currentAttributes[n];r!==!1&&da(n)&&(e[n]=r)}return e}freezeSelection(){return this.setCurrentAttribute("frozen",!0)}thawSelection(){return this.removeCurrentAttribute("frozen")}hasFrozenSelection(){return this.hasCurrentAttribute("frozen")}setSelection(e){var n;const r=this.document.locationRangeFromRange(e);return(n=this.delegate)===null||n===void 0?void 0:n.compositionDidRequestChangingSelectionToLocationRange(r)}getSelectedRange(){const e=this.getLocationRange();if(e)return this.document.rangeFromLocationRange(e)}setSelectedRange(e){const n=this.document.locationRangeFromRange(e);return this.getSelectionManager().setLocationRange(n)}getPosition(){const e=this.getLocationRange();if(e)return this.document.positionFromLocation(e[0])}getLocationRange(e){return this.targetLocationRange?this.targetLocationRange:this.getSelectionManager().getLocationRange(e)||ze({index:0,offset:0})}withTargetLocationRange(e,n){let r;this.targetLocationRange=e;try{r=n()}finally{this.targetLocationRange=null}return r}withTargetRange(e,n){const r=this.document.locationRangeFromRange(e);return this.withTargetLocationRange(r,n)}withTargetDOMRange(e,n){const r=this.createLocationRangeFromDOMRange(e,{strict:!1});return this.withTargetLocationRange(r,n)}getExpandedRangeInDirection(e){let{length:n}=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},[r,i]=Array.from(this.getSelectedRange());return e==="backward"?n?r-=n:r=this.translateUTF16PositionFromOffset(r,-1):n?i+=n:i=this.translateUTF16PositionFromOffset(i,1),ze([r,i])}shouldManageMovingCursorInDirection(e){if(this.editingAttachment)return!0;const n=this.getExpandedRangeInDirection(e);return this.getAttachmentAtRange(n)!=null}moveCursorInDirection(e){let n,r;if(this.editingAttachment)r=this.document.getRangeOfAttachment(this.editingAttachment);else{const i=this.getSelectedRange();r=this.getExpandedRangeInDirection(e),n=!ti(i,r)}if(e==="backward"?this.setSelectedRange(r[0]):this.setSelectedRange(r[1]),n){const i=this.getAttachmentAtRange(r);if(i)return this.editAttachment(i)}}expandSelectionInDirection(e){let{length:n}=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};const r=this.getExpandedRangeInDirection(e,{length:n});return this.setSelectedRange(r)}expandSelectionForEditing(){if(this.hasCurrentAttribute("href"))return this.expandSelectionAroundCommonAttribute("href")}expandSelectionAroundCommonAttribute(e){const n=this.getPosition(),r=this.document.getRangeOfCommonAttributeAtPosition(e,n);return this.setSelectedRange(r)}selectionContainsAttachments(){var e;return((e=this.getSelectedAttachments())===null||e===void 0?void 0:e.length)>0}selectionIsInCursorTarget(){return this.editingAttachment||this.positionIsCursorTarget(this.getPosition())}positionIsCursorTarget(e){const n=this.document.locationFromPosition(e);if(n)return this.locationIsCursorTarget(n)}positionIsBlockBreak(e){var n;return(n=this.document.getPieceAtPosition(e))===null||n===void 0?void 0:n.isBlockBreak()}getSelectedDocument(){const e=this.getSelectedRange();if(e)return this.document.getDocumentAtRange(e)}getSelectedAttachments(){var e;return(e=this.getSelectedDocument())===null||e===void 0?void 0:e.getAttachments()}getAttachments(){return this.attachments.slice(0)}refreshAttachments(){const e=this.document.getAttachments(),{added:n,removed:r}=(function(){let i=arguments.length>0&&arguments[0]!==void 0?arguments[0]:[],l=arguments.length>1&&arguments[1]!==void 0?arguments[1]:[];const a=[],o=[],s=new Set;i.forEach((c=>{s.add(c)}));const u=new Set;return l.forEach((c=>{u.add(c),s.has(c)||a.push(c)})),i.forEach((c=>{u.has(c)||o.push(c)})),{added:a,removed:o}})(this.attachments,e);return this.attachments=e,Array.from(r).forEach((i=>{var l,a;i.delegate=null,(l=this.delegate)===null||l===void 0||(a=l.compositionDidRemoveAttachment)===null||a===void 0||a.call(l,i)})),(()=>{const i=[];return Array.from(n).forEach((l=>{var a,o;l.delegate=this,i.push((a=this.delegate)===null||a===void 0||(o=a.compositionDidAddAttachment)===null||o===void 0?void 0:o.call(a,l))})),i})()}attachmentDidChangeAttributes(e){var n,r;return this.revision++,(n=this.delegate)===null||n===void 0||(r=n.compositionDidEditAttachment)===null||r===void 0?void 0:r.call(n,e)}attachmentDidChangePreviewURL(e){var n,r;return this.revision++,(n=this.delegate)===null||n===void 0||(r=n.compositionDidChangeAttachmentPreviewURL)===null||r===void 0?void 0:r.call(n,e)}editAttachment(e,n){var r,i;if(e!==this.editingAttachment)return this.stopEditingAttachment(),this.editingAttachment=e,(r=this.delegate)===null||r===void 0||(i=r.compositionDidStartEditingAttachment)===null||i===void 0?void 0:i.call(r,this.editingAttachment,n)}stopEditingAttachment(){var e,n;this.editingAttachment&&((e=this.delegate)===null||e===void 0||(n=e.compositionDidStopEditingAttachment)===null||n===void 0||n.call(e,this.editingAttachment),this.editingAttachment=null)}updateAttributesForAttachment(e,n){return this.setDocument(this.document.updateAttributesForAttachment(e,n))}removeAttributeForAttachment(e,n){return this.setDocument(this.document.removeAttributeForAttachment(e,n))}breakFormattedBlock(e){let{document:n}=e;const{block:r}=e;let i=e.startPosition,l=[i-1,i];r.getBlockBreakPosition()===e.startLocation.offset?(r.breaksOnReturn()&&e.nextCharacter===`
`?i+=1:n=n.removeTextAtRange(l),l=[i,i]):e.nextCharacter===`
`?e.previousCharacter===`
`?l=[i-1,i+1]:(l=[i,i+1],i+=1):e.startLocation.offset-1!=0&&(i+=1);const a=new Ut([r.removeLastAttribute().copyWithoutText()]);return this.setDocument(n.insertDocumentAtRange(a,l)),this.setSelection(i)}getPreviousBlock(){const e=this.getLocationRange();if(e){const{index:n}=e[0];if(n>0)return this.document.getBlockAtIndex(n-1)}}getBlock(){const e=this.getLocationRange();if(e)return this.document.getBlockAtIndex(e[0].index)}getAttachmentAtRange(e){const n=this.document.getDocumentAtRange(e);if(n.toString()==="".concat("￼",`
`))return n.getAttachments()[0]}notifyDelegateOfCurrentAttributesChange(){var e,n;return(e=this.delegate)===null||e===void 0||(n=e.compositionDidChangeCurrentAttributes)===null||n===void 0?void 0:n.call(e,this.currentAttributes)}notifyDelegateOfInsertionAtRange(e){var n,r;return(n=this.delegate)===null||n===void 0||(r=n.compositionDidPerformInsertionAtRange)===null||r===void 0?void 0:r.call(n,e)}translateUTF16PositionFromOffset(e,n){const r=this.document.toUTF16String(),i=r.offsetFromUCS2Offset(e);return r.offsetToUCS2Offset(i+n)}}Cn.proxyMethod("getSelectionManager().getPointRange"),Cn.proxyMethod("getSelectionManager().setLocationRangeFromPointRange"),Cn.proxyMethod("getSelectionManager().createLocationRangeFromDOMRange"),Cn.proxyMethod("getSelectionManager().locationIsCursorTarget"),Cn.proxyMethod("getSelectionManager().selectionIsExpanded"),Cn.proxyMethod("delegate?.getSelectionManager");class ha extends ft{constructor(e){super(...arguments),this.composition=e,this.undoEntries=[],this.redoEntries=[]}recordUndoEntry(e){let{context:n,consolidatable:r}=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};const i=this.undoEntries.slice(-1)[0];if(!r||!Z4(i,e,n)){const l=this.createEntry({description:e,context:n});this.undoEntries.push(l),this.redoEntries=[]}}undo(){const e=this.undoEntries.pop();if(e){const n=this.createEntry(e);return this.redoEntries.push(n),this.composition.loadSnapshot(e.snapshot)}}redo(){const e=this.redoEntries.pop();if(e){const n=this.createEntry(e);return this.undoEntries.push(n),this.composition.loadSnapshot(e.snapshot)}}canUndo(){return this.undoEntries.length>0}canRedo(){return this.redoEntries.length>0}createEntry(){let{description:e,context:n}=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};return{description:e?.toString(),context:JSON.stringify(n),snapshot:this.composition.getSnapshot()}}}const Z4=(t,e,n)=>t?.description===e?.toString()&&t?.context===JSON.stringify(n),Wi="attachmentGallery";class pd{constructor(e){this.document=e.document,this.selectedRange=e.selectedRange}perform(){return this.removeBlockAttribute(),this.applyBlockAttribute()}getSnapshot(){return{document:this.document,selectedRange:this.selectedRange}}removeBlockAttribute(){return this.findRangesOfBlocks().map((e=>this.document=this.document.removeAttributeAtRange(Wi,e)))}applyBlockAttribute(){let e=0;this.findRangesOfPieces().forEach((n=>{n[1]-n[0]>1&&(n[0]+=e,n[1]+=e,this.document.getCharacterAtPosition(n[1])!==`
`&&(this.document=this.document.insertBlockBreakAtRange(n[1]),n[1]<this.selectedRange[1]&&this.moveSelectedRangeForward(),n[1]++,e++),n[0]!==0&&this.document.getCharacterAtPosition(n[0]-1)!==`
`&&(this.document=this.document.insertBlockBreakAtRange(n[0]),n[0]<this.selectedRange[0]&&this.moveSelectedRangeForward(),n[0]++,e++),this.document=this.document.applyBlockAttributeAtRange(Wi,!0,n))}))}findRangesOfBlocks(){return this.document.findRangesForBlockAttribute(Wi)}findRangesOfPieces(){return this.document.findRangesForTextAttribute("presentation",{withValue:"gallery"})}moveSelectedRangeForward(){this.selectedRange[0]+=1,this.selectedRange[1]+=1}}const fd=function(t){const e=new pd(t);return e.perform(),e.getSnapshot()},ew=[fd];class vd{constructor(e,n,r){this.insertFiles=this.insertFiles.bind(this),this.composition=e,this.selectionManager=n,this.element=r,this.undoManager=new ha(this.composition),this.filters=ew.slice(0)}loadDocument(e){return this.loadSnapshot({document:e,selectedRange:[0,0]})}loadHTML(){let e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:"";const n=_r.parse(e,{referenceElement:this.element}).getDocument();return this.loadDocument(n)}loadJSON(e){let{document:n,selectedRange:r}=e;return n=Ut.fromJSON(n),this.loadSnapshot({document:n,selectedRange:r})}loadSnapshot(e){return this.undoManager=new ha(this.composition),this.composition.loadSnapshot(e)}getDocument(){return this.composition.document}getSelectedDocument(){return this.composition.getSelectedDocument()}getSnapshot(){return this.composition.getSnapshot()}toJSON(){return this.getSnapshot()}deleteInDirection(e){return this.composition.deleteInDirection(e)}insertAttachment(e){return this.composition.insertAttachment(e)}insertAttachments(e){return this.composition.insertAttachments(e)}insertDocument(e){return this.composition.insertDocument(e)}insertFile(e){return this.composition.insertFile(e)}insertFiles(e){return this.composition.insertFiles(e)}insertHTML(e){return this.composition.insertHTML(e)}insertString(e){return this.composition.insertString(e)}insertText(e){return this.composition.insertText(e)}insertLineBreak(){return this.composition.insertLineBreak()}getSelectedRange(){return this.composition.getSelectedRange()}getPosition(){return this.composition.getPosition()}getClientRectAtPosition(e){const n=this.getDocument().locationRangeFromRange([e,e+1]);return this.selectionManager.getClientRectAtLocationRange(n)}expandSelectionInDirection(e){return this.composition.expandSelectionInDirection(e)}moveCursorInDirection(e){return this.composition.moveCursorInDirection(e)}setSelectedRange(e){return this.composition.setSelectedRange(e)}activateAttribute(e){let n=!(arguments.length>1&&arguments[1]!==void 0)||arguments[1];return this.composition.setCurrentAttribute(e,n)}attributeIsActive(e){return this.composition.hasCurrentAttribute(e)}canActivateAttribute(e){return this.composition.canSetCurrentAttribute(e)}deactivateAttribute(e){return this.composition.removeCurrentAttribute(e)}setHTMLAtributeAtPosition(e,n,r){this.composition.setHTMLAtributeAtPosition(e,n,r)}canDecreaseNestingLevel(){return this.composition.canDecreaseNestingLevel()}canIncreaseNestingLevel(){return this.composition.canIncreaseNestingLevel()}decreaseNestingLevel(){if(this.canDecreaseNestingLevel())return this.composition.decreaseNestingLevel()}increaseNestingLevel(){if(this.canIncreaseNestingLevel())return this.composition.increaseNestingLevel()}canRedo(){return this.undoManager.canRedo()}canUndo(){return this.undoManager.canUndo()}recordUndoEntry(e){let{context:n,consolidatable:r}=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};return this.undoManager.recordUndoEntry(e,{context:n,consolidatable:r})}redo(){if(this.canRedo())return this.undoManager.redo()}undo(){if(this.canUndo())return this.undoManager.undo()}}class hd{constructor(e){this.element=e}findLocationFromContainerAndOffset(e,n){let{strict:r}=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{strict:!0},i=0,l=!1;const a={index:0,offset:0},o=this.findAttachmentElementParentForNode(e);o&&(e=o.parentNode,n=Mi(o));const s=ei(this.element,{usingFilter:md});for(;s.nextNode();){const u=s.currentNode;if(u===e&&yr(e)){Xn(u)||(a.offset+=n);break}if(u.parentNode===e){if(i++===n)break}else if(!On(e,u)&&i>0)break;ho(u,{strict:r})?(l&&a.index++,a.offset=0,l=!0):a.offset+=qi(u)}return a}findContainerAndOffsetFromLocation(e){let n,r;if(e.index===0&&e.offset===0){for(n=this.element,r=0;n.firstChild;)if(n=n.firstChild,Ii(n)){r=1;break}return[n,r]}let[i,l]=this.findNodeAndOffsetFromLocation(e);if(i){if(yr(i))qi(i)===0?(n=i.parentNode.parentNode,r=Mi(i.parentNode),Xn(i,{name:"right"})&&r++):(n=i,r=e.offset-l);else{if(n=i.parentNode,!ho(i.previousSibling)&&!Ii(n))for(;i===n.lastChild&&(i=n,n=n.parentNode,!Ii(n)););r=Mi(i),e.offset!==0&&r++}return[n,r]}}findNodeAndOffsetFromLocation(e){let n,r,i=0;for(const l of this.getSignificantNodesForIndex(e.index)){const a=qi(l);if(e.offset<=i+a)if(yr(l)){if(n=l,r=i,e.offset===r&&Xn(n))break}else n||(n=l,r=i);if(i+=a,i>e.offset)break}return[n,r]}findAttachmentElementParentForNode(e){for(;e&&e!==this.element;){if(zn(e))return e;e=e.parentNode}}getSignificantNodesForIndex(e){const n=[],r=ei(this.element,{usingFilter:tw});let i=!1;for(;r.nextNode();){const a=r.currentNode;var l;if(Yn(a)){if(l!=null?l++:l=0,l===e)i=!0;else if(i)break}else i&&n.push(a)}return n}}const qi=function(t){return t.nodeType===Node.TEXT_NODE?Xn(t)?0:t.textContent.length:xt(t)==="br"||zn(t)?1:0},tw=function(t){return nw(t)===NodeFilter.FILTER_ACCEPT?md(t):NodeFilter.FILTER_REJECT},nw=function(t){return Vu(t)?NodeFilter.FILTER_REJECT:NodeFilter.FILTER_ACCEPT},md=function(t){return zn(t.parentNode)?NodeFilter.FILTER_REJECT:NodeFilter.FILTER_ACCEPT};class gd{createDOMRangeFromPoint(e){let n,{x:r,y:i}=e;if(document.caretPositionFromPoint){const{offsetNode:l,offset:a}=document.caretPositionFromPoint(r,i);return n=document.createRange(),n.setStart(l,a),n}if(document.caretRangeFromPoint)return document.caretRangeFromPoint(r,i);if(document.body.createTextRange){const l=kr();try{const a=document.body.createTextRange();a.moveToPoint(r,i),a.select()}catch{}return n=kr(),Ju(l),n}}getClientRectsForDOMRange(e){const n=Array.from(e.getClientRects());return[n[0],n[n.length-1]]}}class Rn extends ft{constructor(e){super(...arguments),this.didMouseDown=this.didMouseDown.bind(this),this.selectionDidChange=this.selectionDidChange.bind(this),this.element=e,this.locationMapper=new hd(this.element),this.pointMapper=new gd,this.lockCount=0,Ze("mousedown",{onElement:this.element,withCallback:this.didMouseDown})}getLocationRange(){let e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};return e.strict===!1?this.createLocationRangeFromDOMRange(kr()):e.ignoreLock?this.currentLocationRange:this.lockedLocationRange?this.lockedLocationRange:this.currentLocationRange}setLocationRange(e){if(this.lockedLocationRange)return;e=ze(e);const n=this.createDOMRangeFromLocationRange(e);n&&(Ju(n),this.updateCurrentLocationRange(e))}setLocationRangeFromPointRange(e){e=ze(e);const n=this.getLocationAtPoint(e[0]),r=this.getLocationAtPoint(e[1]);this.setLocationRange([n,r])}getClientRectAtLocationRange(e){const n=this.createDOMRangeFromLocationRange(e);if(n)return this.getClientRectsForDOMRange(n)[1]}locationIsCursorTarget(e){const n=Array.from(this.findNodeAndOffsetFromLocation(e))[0];return Xn(n)}lock(){this.lockCount++==0&&(this.updateCurrentLocationRange(),this.lockedLocationRange=this.getLocationRange())}unlock(){if(--this.lockCount==0){const{lockedLocationRange:e}=this;if(this.lockedLocationRange=null,e!=null)return this.setLocationRange(e)}}clearSelection(){var e;return(e=Gu())===null||e===void 0?void 0:e.removeAllRanges()}selectionIsCollapsed(){var e;return((e=kr())===null||e===void 0?void 0:e.collapsed)===!0}selectionIsExpanded(){return!this.selectionIsCollapsed()}createLocationRangeFromDOMRange(e,n){if(e==null||!this.domRangeWithinElement(e))return;const r=this.findLocationFromContainerAndOffset(e.startContainer,e.startOffset,n);if(!r)return;const i=e.collapsed?void 0:this.findLocationFromContainerAndOffset(e.endContainer,e.endOffset,n);return ze([r,i])}didMouseDown(){return this.pauseTemporarily()}pauseTemporarily(){let e;this.paused=!0;const n=()=>{if(this.paused=!1,clearTimeout(r),Array.from(e).forEach((i=>{i.destroy()})),On(document,this.element))return this.selectionDidChange()},r=setTimeout(n,200);e=["mousemove","keydown"].map((i=>Ze(i,{onElement:document,withCallback:n})))}selectionDidChange(){if(!this.paused&&!Ol(this.element))return this.updateCurrentLocationRange()}updateCurrentLocationRange(e){var n,r;if((e??(e=this.createLocationRangeFromDOMRange(kr())))&&!ti(e,this.currentLocationRange))return this.currentLocationRange=e,(n=this.delegate)===null||n===void 0||(r=n.locationRangeDidChange)===null||r===void 0?void 0:r.call(n,this.currentLocationRange.slice(0))}createDOMRangeFromLocationRange(e){const n=this.findContainerAndOffsetFromLocation(e[0]),r=fn(e)?n:this.findContainerAndOffsetFromLocation(e[1])||n;if(n!=null&&r!=null){const i=document.createRange();return i.setStart(...Array.from(n||[])),i.setEnd(...Array.from(r||[])),i}}getLocationAtPoint(e){const n=this.createDOMRangeFromPoint(e);var r;if(n)return(r=this.createLocationRangeFromDOMRange(n))===null||r===void 0?void 0:r[0]}domRangeWithinElement(e){return e.collapsed?On(this.element,e.startContainer):On(this.element,e.startContainer)&&On(this.element,e.endContainer)}}Rn.proxyMethod("locationMapper.findLocationFromContainerAndOffset"),Rn.proxyMethod("locationMapper.findContainerAndOffsetFromLocation"),Rn.proxyMethod("locationMapper.findNodeAndOffsetFromLocation"),Rn.proxyMethod("pointMapper.createDOMRangeFromPoint"),Rn.proxyMethod("pointMapper.getClientRectsForDOMRange");var bd=Object.freeze({__proto__:null,Attachment:ar,AttachmentManager:dd,AttachmentPiece:rr,Block:ln,Composition:Cn,Document:Ut,Editor:vd,HTMLParser:_r,HTMLSanitizer:Ci,LineBreakInsertion:cd,LocationMapper:hd,ManagedAttachment:lt,Piece:Qn,PointMapper:gd,SelectionManager:Rn,SplittableList:ii,StringPiece:Wl,Text:Jt,UndoManager:ha}),rw=Object.freeze({__proto__:null,ObjectView:qn,AttachmentView:jl,BlockView:id,DocumentView:Ei,PieceView:nd,PreviewableAttachmentView:td,TextView:rd});const{lang:Qi,css:Bn,keyNames:iw}=Fr,Ki=function(t){return function(){const e=t.apply(this,arguments);e.do(),this.undos||(this.undos=[]),this.undos.push(e.undo)}};class wd extends ft{constructor(e,n,r){let i=arguments.length>3&&arguments[3]!==void 0?arguments[3]:{};super(...arguments),St(this,"makeElementMutable",Ki((()=>({do:()=>{this.element.dataset.trixMutable=!0},undo:()=>delete this.element.dataset.trixMutable})))),St(this,"addToolbar",Ki((()=>{const l=Se({tagName:"div",className:Bn.attachmentToolbar,data:{trixMutable:!0},childNodes:Se({tagName:"div",className:"trix-button-row",childNodes:Se({tagName:"span",className:"trix-button-group trix-button-group--actions",childNodes:Se({tagName:"button",className:"trix-button trix-button--remove",textContent:Qi.remove,attributes:{title:Qi.remove},data:{trixAction:"remove"}})})})});return this.attachment.isPreviewable()&&l.appendChild(Se({tagName:"div",className:Bn.attachmentMetadataContainer,childNodes:Se({tagName:"span",className:Bn.attachmentMetadata,childNodes:[Se({tagName:"span",className:Bn.attachmentName,textContent:this.attachment.getFilename(),attributes:{title:this.attachment.getFilename()}}),Se({tagName:"span",className:Bn.attachmentSize,textContent:this.attachment.getFormattedFilesize()})]})})),Ze("click",{onElement:l,withCallback:this.didClickToolbar}),Ze("click",{onElement:l,matchingSelector:"[data-trix-action]",withCallback:this.didClickActionButton}),br("trix-attachment-before-toolbar",{onElement:this.element,attributes:{toolbar:l,attachment:this.attachment}}),{do:()=>this.element.appendChild(l),undo:()=>Sn(l)}}))),St(this,"installCaptionEditor",Ki((()=>{const l=Se({tagName:"textarea",className:Bn.attachmentCaptionEditor,attributes:{placeholder:Qi.captionPlaceholder},data:{trixMutable:!0}});l.value=this.attachmentPiece.getCaption();const a=l.cloneNode();a.classList.add("trix-autoresize-clone"),a.tabIndex=-1;const o=function(){a.value=l.value,l.style.height=a.scrollHeight+"px"};Ze("input",{onElement:l,withCallback:o}),Ze("input",{onElement:l,withCallback:this.didInputCaption}),Ze("keydown",{onElement:l,withCallback:this.didKeyDownCaption}),Ze("change",{onElement:l,withCallback:this.didChangeCaption}),Ze("blur",{onElement:l,withCallback:this.didBlurCaption});const s=this.element.querySelector("figcaption"),u=s.cloneNode();return{do:()=>{if(s.style.display="none",u.appendChild(l),u.appendChild(a),u.classList.add("".concat(Bn.attachmentCaption,"--editing")),s.parentElement.insertBefore(u,s),o(),this.options.editCaption)return Pl((()=>l.focus()))},undo(){Sn(u),s.style.display=null}}}))),this.didClickToolbar=this.didClickToolbar.bind(this),this.didClickActionButton=this.didClickActionButton.bind(this),this.didKeyDownCaption=this.didKeyDownCaption.bind(this),this.didInputCaption=this.didInputCaption.bind(this),this.didChangeCaption=this.didChangeCaption.bind(this),this.didBlurCaption=this.didBlurCaption.bind(this),this.attachmentPiece=e,this.element=n,this.container=r,this.options=i,this.attachment=this.attachmentPiece.attachment,xt(this.element)==="a"&&(this.element=this.element.firstChild),this.install()}install(){this.makeElementMutable(),this.addToolbar(),this.attachment.isPreviewable()&&this.installCaptionEditor()}uninstall(){var e;let n=this.undos.pop();for(this.savePendingCaption();n;)n(),n=this.undos.pop();(e=this.delegate)===null||e===void 0||e.didUninstallAttachmentEditor(this)}savePendingCaption(){if(this.pendingCaption!=null){const l=this.pendingCaption;var e,n,r,i;this.pendingCaption=null,l?(e=this.delegate)===null||e===void 0||(n=e.attachmentEditorDidRequestUpdatingAttributesForAttachment)===null||n===void 0||n.call(e,{caption:l},this.attachment):(r=this.delegate)===null||r===void 0||(i=r.attachmentEditorDidRequestRemovingAttributeForAttachment)===null||i===void 0||i.call(r,"caption",this.attachment)}}didClickToolbar(e){return e.preventDefault(),e.stopPropagation()}didClickActionButton(e){var n;if(e.target.getAttribute("data-trix-action")==="remove")return(n=this.delegate)===null||n===void 0?void 0:n.attachmentEditorDidRequestRemovalOfAttachment(this.attachment)}didKeyDownCaption(e){var n,r;if(iw[e.keyCode]==="return")return e.preventDefault(),this.savePendingCaption(),(n=this.delegate)===null||n===void 0||(r=n.attachmentEditorDidRequestDeselectingAttachment)===null||r===void 0?void 0:r.call(n,this.attachment)}didInputCaption(e){this.pendingCaption=e.target.value.replace(/\s/g," ").trim()}didChangeCaption(e){return this.savePendingCaption()}didBlurCaption(e){return this.savePendingCaption()}}class yd extends ft{constructor(e,n){super(...arguments),this.didFocus=this.didFocus.bind(this),this.didBlur=this.didBlur.bind(this),this.didClickAttachment=this.didClickAttachment.bind(this),this.element=e,this.composition=n,this.documentView=new Ei(this.composition.document,{element:this.element}),Ze("focus",{onElement:this.element,withCallback:this.didFocus}),Ze("blur",{onElement:this.element,withCallback:this.didBlur}),Ze("click",{onElement:this.element,matchingSelector:"a[contenteditable=false]",preventDefault:!0}),Ze("mousedown",{onElement:this.element,matchingSelector:Pn,withCallback:this.didClickAttachment}),Ze("click",{onElement:this.element,matchingSelector:"a".concat(Pn),preventDefault:!0})}didFocus(e){var n;const r=()=>{var i,l;if(!this.focused)return this.focused=!0,(i=this.delegate)===null||i===void 0||(l=i.compositionControllerDidFocus)===null||l===void 0?void 0:l.call(i)};return((n=this.blurPromise)===null||n===void 0?void 0:n.then(r))||r()}didBlur(e){this.blurPromise=new Promise((n=>Pl((()=>{var r,i;return Ol(this.element)||(this.focused=null,(r=this.delegate)===null||r===void 0||(i=r.compositionControllerDidBlur)===null||i===void 0||i.call(r)),this.blurPromise=null,n()}))))}didClickAttachment(e,n){var r,i;const l=this.findAttachmentForElement(n),a=!!Tn(e.target,{matchingSelector:"figcaption"});return(r=this.delegate)===null||r===void 0||(i=r.compositionControllerDidSelectAttachment)===null||i===void 0?void 0:i.call(r,l,{editCaption:a})}getSerializableElement(){return this.isEditingAttachment()?this.documentView.shadowElement:this.element}render(){var e,n,r,i,l,a;return this.revision!==this.composition.revision&&(this.documentView.setDocument(this.composition.document),this.documentView.render(),this.revision=this.composition.revision),this.canSyncDocumentView()&&!this.documentView.isSynced()&&((r=this.delegate)===null||r===void 0||(i=r.compositionControllerWillSyncDocumentView)===null||i===void 0||i.call(r),this.documentView.sync(),(l=this.delegate)===null||l===void 0||(a=l.compositionControllerDidSyncDocumentView)===null||a===void 0||a.call(l)),(e=this.delegate)===null||e===void 0||(n=e.compositionControllerDidRender)===null||n===void 0?void 0:n.call(e)}rerenderViewForObject(e){return this.invalidateViewForObject(e),this.render()}invalidateViewForObject(e){return this.documentView.invalidateViewForObject(e)}isViewCachingEnabled(){return this.documentView.isViewCachingEnabled()}enableViewCaching(){return this.documentView.enableViewCaching()}disableViewCaching(){return this.documentView.disableViewCaching()}refreshViewCache(){return this.documentView.garbageCollectCachedViews()}isEditingAttachment(){return!!this.attachmentEditor}installAttachmentEditorForAttachment(e,n){var r;if(((r=this.attachmentEditor)===null||r===void 0?void 0:r.attachment)===e)return;const i=this.documentView.findElementForObject(e);if(!i)return;this.uninstallAttachmentEditor();const l=this.composition.document.getAttachmentPieceForAttachment(e);this.attachmentEditor=new wd(l,i,this.element,n),this.attachmentEditor.delegate=this}uninstallAttachmentEditor(){var e;return(e=this.attachmentEditor)===null||e===void 0?void 0:e.uninstall()}didUninstallAttachmentEditor(){return this.attachmentEditor=null,this.render()}attachmentEditorDidRequestUpdatingAttributesForAttachment(e,n){var r,i;return(r=this.delegate)===null||r===void 0||(i=r.compositionControllerWillUpdateAttachment)===null||i===void 0||i.call(r,n),this.composition.updateAttributesForAttachment(e,n)}attachmentEditorDidRequestRemovingAttributeForAttachment(e,n){var r,i;return(r=this.delegate)===null||r===void 0||(i=r.compositionControllerWillUpdateAttachment)===null||i===void 0||i.call(r,n),this.composition.removeAttributeForAttachment(e,n)}attachmentEditorDidRequestRemovalOfAttachment(e){var n,r;return(n=this.delegate)===null||n===void 0||(r=n.compositionControllerDidRequestRemovalOfAttachment)===null||r===void 0?void 0:r.call(n,e)}attachmentEditorDidRequestDeselectingAttachment(e){var n,r;return(n=this.delegate)===null||n===void 0||(r=n.compositionControllerDidRequestDeselectingAttachment)===null||r===void 0?void 0:r.call(n,e)}canSyncDocumentView(){return!this.isEditingAttachment()}findAttachmentForElement(e){return this.composition.document.getAttachmentById(parseInt(e.dataset.trixId,10))}}class kd extends ft{}const Cd="data-trix-mutable",aw="[".concat(Cd,"]"),lw={attributes:!0,childList:!0,characterData:!0,characterDataOldValue:!0,subtree:!0};class Ed extends ft{constructor(e){super(e),this.didMutate=this.didMutate.bind(this),this.element=e,this.observer=new window.MutationObserver(this.didMutate),this.start()}start(){return this.reset(),this.observer.observe(this.element,lw)}stop(){return this.observer.disconnect()}didMutate(e){var n,r;if(this.mutations.push(...Array.from(this.findSignificantMutations(e)||[])),this.mutations.length)return(n=this.delegate)===null||n===void 0||(r=n.elementDidMutate)===null||r===void 0||r.call(n,this.getMutationSummary()),this.reset()}reset(){this.mutations=[]}findSignificantMutations(e){return e.filter((n=>this.mutationIsSignificant(n)))}mutationIsSignificant(e){if(this.nodeIsMutable(e.target))return!1;for(const n of Array.from(this.nodesModifiedByMutation(e)))if(this.nodeIsSignificant(n))return!0;return!1}nodeIsSignificant(e){return e!==this.element&&!this.nodeIsMutable(e)&&!Vu(e)}nodeIsMutable(e){return Tn(e,{matchingSelector:aw})}nodesModifiedByMutation(e){const n=[];switch(e.type){case"attributes":e.attributeName!==Cd&&n.push(e.target);break;case"characterData":n.push(e.target.parentNode),n.push(e.target);break;case"childList":n.push(...Array.from(e.addedNodes||[])),n.push(...Array.from(e.removedNodes||[]))}return n}getMutationSummary(){return this.getTextMutationSummary()}getTextMutationSummary(){const{additions:e,deletions:n}=this.getTextChangesFromCharacterData(),r=this.getTextChangesFromChildList();Array.from(r.additions).forEach((o=>{Array.from(e).includes(o)||e.push(o)})),n.push(...Array.from(r.deletions||[]));const i={},l=e.join("");l&&(i.textAdded=l);const a=n.join("");return a&&(i.textDeleted=a),i}getMutationsByType(e){return Array.from(this.mutations).filter((n=>n.type===e))}getTextChangesFromChildList(){let e,n;const r=[],i=[];Array.from(this.getMutationsByType("childList")).forEach((o=>{r.push(...Array.from(o.addedNodes||[])),i.push(...Array.from(o.removedNodes||[]))})),r.length===0&&i.length===1&&Yn(i[0])?(e=[],n=[`
`]):(e=ma(r),n=ma(i));const l=e.filter(((o,s)=>o!==n[s])).map(mr),a=n.filter(((o,s)=>o!==e[s])).map(mr);return{additions:l,deletions:a}}getTextChangesFromCharacterData(){let e,n;const r=this.getMutationsByType("characterData");if(r.length){const i=r[0],l=r[r.length-1],a=(function(o,s){let u,c;return o=Sr.box(o),(s=Sr.box(s)).length<o.length?[c,u]=ko(o,s):[u,c]=ko(s,o),{added:u,removed:c}})(mr(i.oldValue),mr(l.target.data));e=a.added,n=a.removed}return{additions:e?[e]:[],deletions:n?[n]:[]}}}const ma=function(){let t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:[];const e=[];for(const n of Array.from(t))switch(n.nodeType){case Node.TEXT_NODE:e.push(n.data);break;case Node.ELEMENT_NODE:xt(n)==="br"?e.push(`
`):e.push(...Array.from(ma(n.childNodes)||[]))}return e};class Ad extends ni{constructor(e){super(...arguments),this.file=e}perform(e){const n=new FileReader;return n.onerror=()=>e(!1),n.onload=()=>{n.onerror=null;try{n.abort()}catch{}return e(!0,this.file)},n.readAsArrayBuffer(this.file)}}class ow{constructor(e){this.element=e}shouldIgnore(e){return!!Rr.samsungAndroid&&(this.previousEvent=this.event,this.event=e,this.checkSamsungKeyboardBuggyModeStart(),this.checkSamsungKeyboardBuggyModeEnd(),this.buggyMode)}checkSamsungKeyboardBuggyModeStart(){this.insertingLongTextAfterUnidentifiedChar()&&sw(this.element.innerText,this.event.data)&&(this.buggyMode=!0,this.event.preventDefault())}checkSamsungKeyboardBuggyModeEnd(){this.buggyMode&&this.event.inputType!=="insertText"&&(this.buggyMode=!1)}insertingLongTextAfterUnidentifiedChar(){var e;return this.isBeforeInputInsertText()&&this.previousEventWasUnidentifiedKeydown()&&((e=this.event.data)===null||e===void 0?void 0:e.length)>50}isBeforeInputInsertText(){return this.event.type==="beforeinput"&&this.event.inputType==="insertText"}previousEventWasUnidentifiedKeydown(){var e,n;return((e=this.previousEvent)===null||e===void 0?void 0:e.type)==="keydown"&&((n=this.previousEvent)===null||n===void 0?void 0:n.key)==="Unidentified"}}const sw=(t,e)=>jo(t)===jo(e),uw=new RegExp("(".concat("￼","|").concat(ki,"|").concat(En,"|\\s)+"),"g"),jo=t=>t.replace(uw," ").trim();class Ai extends ft{constructor(e){super(...arguments),this.element=e,this.mutationObserver=new Ed(this.element),this.mutationObserver.delegate=this,this.flakyKeyboardDetector=new ow(this.element);for(const n in this.constructor.events)Ze(n,{onElement:this.element,withCallback:this.handlerFor(n)})}elementDidMutate(e){}editorWillSyncDocumentView(){return this.mutationObserver.stop()}editorDidSyncDocumentView(){return this.mutationObserver.start()}requestRender(){var e,n;return(e=this.delegate)===null||e===void 0||(n=e.inputControllerDidRequestRender)===null||n===void 0?void 0:n.call(e)}requestReparse(){var e,n;return(e=this.delegate)===null||e===void 0||(n=e.inputControllerDidRequestReparse)===null||n===void 0||n.call(e),this.requestRender()}attachFiles(e){const n=Array.from(e).map((r=>new Ad(r)));return Promise.all(n).then((r=>{this.handleInput((function(){var i,l;return(i=this.delegate)===null||i===void 0||i.inputControllerWillAttachFiles(),(l=this.responder)===null||l===void 0||l.insertFiles(r),this.requestRender()}))}))}handlerFor(e){return n=>{n.defaultPrevented||this.handleInput((()=>{if(!Ol(this.element)){if(this.flakyKeyboardDetector.shouldIgnore(n))return;this.eventName=e,this.constructor.events[e].call(this,n)}}))}}handleInput(e){try{var n;(n=this.delegate)===null||n===void 0||n.inputControllerWillHandleInput(),e.call(this)}finally{var r;(r=this.delegate)===null||r===void 0||r.inputControllerDidHandleInput()}}createLinkHTML(e,n){const r=document.createElement("a");return r.href=e,r.textContent=n||e,r.outerHTML}}var Gi;St(Ai,"events",{});const{browser:dw,keyNames:Ld}=Fr;let cw=0;class cn extends Ai{constructor(){super(...arguments),this.resetInputSummary()}setInputSummary(){let e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};this.inputSummary.eventName=this.eventName;for(const n in e){const r=e[n];this.inputSummary[n]=r}return this.inputSummary}resetInputSummary(){this.inputSummary={}}reset(){return this.resetInputSummary(),Un.reset()}elementDidMutate(e){var n,r;return this.isComposing()?(n=this.delegate)===null||n===void 0||(r=n.inputControllerDidAllowUnhandledInput)===null||r===void 0?void 0:r.call(n):this.handleInput((function(){return this.mutationIsSignificant(e)&&(this.mutationIsExpected(e)?this.requestRender():this.requestReparse()),this.reset()}))}mutationIsExpected(e){let{textAdded:n,textDeleted:r}=e;if(this.inputSummary.preferDocument)return!0;const i=n!=null?n===this.inputSummary.textAdded:!this.inputSummary.textAdded,l=r!=null?this.inputSummary.didDelete:!this.inputSummary.didDelete,a=[`
`,` 
`].includes(n)&&!i,o=r===`
`&&!l;if(a&&!o||o&&!a){const u=this.getSelectedRange();if(u){var s;const c=a?n.replace(/\n$/,"").length||-1:n?.length||1;if((s=this.responder)!==null&&s!==void 0&&s.positionIsBlockBreak(u[1]+c))return!0}}return i&&l}mutationIsSignificant(e){var n;const r=Object.keys(e).length>0,i=((n=this.compositionInput)===null||n===void 0?void 0:n.getEndData())==="";return r||!i}getCompositionInput(){if(this.isComposing())return this.compositionInput;this.compositionInput=new yn(this)}isComposing(){return this.compositionInput&&!this.compositionInput.isEnded()}deleteInDirection(e,n){var r;return((r=this.responder)===null||r===void 0?void 0:r.deleteInDirection(e))!==!1?this.setInputSummary({didDelete:!0}):n?(n.preventDefault(),this.requestRender()):void 0}serializeSelectionToDataTransfer(e){var n;if(!(function(i){if(i==null||!i.setData)return!1;for(const l in bo){const a=bo[l];try{if(i.setData(l,a),!i.getData(l)===a)return!1}catch{return!1}}return!0})(e))return;const r=(n=this.responder)===null||n===void 0?void 0:n.getSelectedDocument().toSerializableDocument();return e.setData("application/x-trix-document",JSON.stringify(r)),e.setData("text/html",Ei.render(r).innerHTML),e.setData("text/plain",r.toString().replace(/\n$/,"")),!0}canAcceptDataTransfer(e){const n={};return Array.from(e?.types||[]).forEach((r=>{n[r]=!0})),n.Files||n["application/x-trix-document"]||n["text/html"]||n["text/plain"]}getPastedHTMLUsingHiddenElement(e){const n=this.getSelectedRange(),r={position:"absolute",left:"".concat(window.pageXOffset,"px"),top:"".concat(window.pageYOffset,"px"),opacity:0},i=Se({style:r,tagName:"div",editable:!0});return document.body.appendChild(i),i.focus(),requestAnimationFrame((()=>{const l=i.innerHTML;return Sn(i),this.setSelectedRange(n),e(l)}))}}St(cn,"events",{keydown(t){this.isComposing()||this.resetInputSummary(),this.inputSummary.didInput=!0;const e=Ld[t.keyCode];if(e){var n;let i=this.keys;["ctrl","alt","shift","meta"].forEach((l=>{var a;t["".concat(l,"Key")]&&(l==="ctrl"&&(l="control"),i=(a=i)===null||a===void 0?void 0:a[l])})),((n=i)===null||n===void 0?void 0:n[e])!=null&&(this.setInputSummary({keyName:e}),Un.reset(),i[e].call(this,t))}if(qu(t)){const i=String.fromCharCode(t.keyCode).toLowerCase();if(i){var r;const l=["alt","shift"].map((a=>{if(t["".concat(a,"Key")])return a})).filter((a=>a));l.push(i),(r=this.delegate)!==null&&r!==void 0&&r.inputControllerDidReceiveKeyboardCommand(l)&&t.preventDefault()}}},keypress(t){if(this.inputSummary.eventName!=null||t.metaKey||t.ctrlKey&&!t.altKey)return;const e=vw(t);var n,r;return e?((n=this.delegate)===null||n===void 0||n.inputControllerWillPerformTyping(),(r=this.responder)===null||r===void 0||r.insertString(e),this.setInputSummary({textAdded:e,didDelete:this.selectionIsExpanded()})):void 0},textInput(t){const{data:e}=t,{textAdded:n}=this.inputSummary;if(n&&n!==e&&n.toUpperCase()===e){var r;const i=this.getSelectedRange();return this.setSelectedRange([i[0],i[1]+n.length]),(r=this.responder)===null||r===void 0||r.insertString(e),this.setInputSummary({textAdded:e}),this.setSelectedRange(i)}},dragenter(t){t.preventDefault()},dragstart(t){var e,n;return this.serializeSelectionToDataTransfer(t.dataTransfer),this.draggedRange=this.getSelectedRange(),(e=this.delegate)===null||e===void 0||(n=e.inputControllerDidStartDrag)===null||n===void 0?void 0:n.call(e)},dragover(t){if(this.draggedRange||this.canAcceptDataTransfer(t.dataTransfer)){t.preventDefault();const r={x:t.clientX,y:t.clientY};var e,n;if(!ir(r,this.draggingPoint))return this.draggingPoint=r,(e=this.delegate)===null||e===void 0||(n=e.inputControllerDidReceiveDragOverPoint)===null||n===void 0?void 0:n.call(e,this.draggingPoint)}},dragend(t){var e,n;(e=this.delegate)===null||e===void 0||(n=e.inputControllerDidCancelDrag)===null||n===void 0||n.call(e),this.draggedRange=null,this.draggingPoint=null},drop(t){var e,n;t.preventDefault();const r=(e=t.dataTransfer)===null||e===void 0?void 0:e.files,i=t.dataTransfer.getData("application/x-trix-document"),l={x:t.clientX,y:t.clientY};if((n=this.responder)===null||n===void 0||n.setLocationRangeFromPointRange(l),r!=null&&r.length)this.attachFiles(r);else if(this.draggedRange){var a,o;(a=this.delegate)===null||a===void 0||a.inputControllerWillMoveText(),(o=this.responder)===null||o===void 0||o.moveTextFromRange(this.draggedRange),this.draggedRange=null,this.requestRender()}else if(i){var s;const u=Ut.fromJSONString(i);(s=this.responder)===null||s===void 0||s.insertDocument(u),this.requestRender()}this.draggedRange=null,this.draggingPoint=null},cut(t){var e,n;if((e=this.responder)!==null&&e!==void 0&&e.selectionIsExpanded()&&(this.serializeSelectionToDataTransfer(t.clipboardData)&&t.preventDefault(),(n=this.delegate)===null||n===void 0||n.inputControllerWillCutText(),this.deleteInDirection("backward"),t.defaultPrevented))return this.requestRender()},copy(t){var e;(e=this.responder)!==null&&e!==void 0&&e.selectionIsExpanded()&&this.serializeSelectionToDataTransfer(t.clipboardData)&&t.preventDefault()},paste(t){const e=t.clipboardData||t.testClipboardData,n={clipboard:e};if(!e||hw(t))return void this.getPastedHTMLUsingHiddenElement((O=>{var H,R,Z;return n.type="text/html",n.html=O,(H=this.delegate)===null||H===void 0||H.inputControllerWillPaste(n),(R=this.responder)===null||R===void 0||R.insertHTML(n.html),this.requestRender(),(Z=this.delegate)===null||Z===void 0?void 0:Z.inputControllerDidPaste(n)}));const r=e.getData("URL"),i=e.getData("text/html"),l=e.getData("public.url-name");if(r){var a,o,s;let O;n.type="text/html",O=l?Nl(l).trim():r,n.html=this.createLinkHTML(r,O),(a=this.delegate)===null||a===void 0||a.inputControllerWillPaste(n),this.setInputSummary({textAdded:O,didDelete:this.selectionIsExpanded()}),(o=this.responder)===null||o===void 0||o.insertHTML(n.html),this.requestRender(),(s=this.delegate)===null||s===void 0||s.inputControllerDidPaste(n)}else if(Wu(e)){var u,c,m;n.type="text/plain",n.string=e.getData("text/plain"),(u=this.delegate)===null||u===void 0||u.inputControllerWillPaste(n),this.setInputSummary({textAdded:n.string,didDelete:this.selectionIsExpanded()}),(c=this.responder)===null||c===void 0||c.insertString(n.string),this.requestRender(),(m=this.delegate)===null||m===void 0||m.inputControllerDidPaste(n)}else if(i){var E,g,b;n.type="text/html",n.html=i,(E=this.delegate)===null||E===void 0||E.inputControllerWillPaste(n),(g=this.responder)===null||g===void 0||g.insertHTML(n.html),this.requestRender(),(b=this.delegate)===null||b===void 0||b.inputControllerDidPaste(n)}else if(Array.from(e.types).includes("Files")){var L,x;const O=(L=e.items)===null||L===void 0||(L=L[0])===null||L===void 0||(x=L.getAsFile)===null||x===void 0?void 0:x.call(L);if(O){var I,B,_;const H=pw(O);!O.name&&H&&(O.name="pasted-file-".concat(++cw,".").concat(H)),n.type="File",n.file=O,(I=this.delegate)===null||I===void 0||I.inputControllerWillAttachFiles(),(B=this.responder)===null||B===void 0||B.insertFile(n.file),this.requestRender(),(_=this.delegate)===null||_===void 0||_.inputControllerDidPaste(n)}}t.preventDefault()},compositionstart(t){return this.getCompositionInput().start(t.data)},compositionupdate(t){return this.getCompositionInput().update(t.data)},compositionend(t){return this.getCompositionInput().end(t.data)},beforeinput(t){this.inputSummary.didInput=!0},input(t){return this.inputSummary.didInput=!0,t.stopPropagation()}}),St(cn,"keys",{backspace(t){var e;return(e=this.delegate)===null||e===void 0||e.inputControllerWillPerformTyping(),this.deleteInDirection("backward",t)},delete(t){var e;return(e=this.delegate)===null||e===void 0||e.inputControllerWillPerformTyping(),this.deleteInDirection("forward",t)},return(t){var e,n;return this.setInputSummary({preferDocument:!0}),(e=this.delegate)===null||e===void 0||e.inputControllerWillPerformTyping(),(n=this.responder)===null||n===void 0?void 0:n.insertLineBreak()},tab(t){var e,n;(e=this.responder)!==null&&e!==void 0&&e.canIncreaseNestingLevel()&&((n=this.responder)===null||n===void 0||n.increaseNestingLevel(),this.requestRender(),t.preventDefault())},left(t){var e;if(this.selectionIsInCursorTarget())return t.preventDefault(),(e=this.responder)===null||e===void 0?void 0:e.moveCursorInDirection("backward")},right(t){var e;if(this.selectionIsInCursorTarget())return t.preventDefault(),(e=this.responder)===null||e===void 0?void 0:e.moveCursorInDirection("forward")},control:{d(t){var e;return(e=this.delegate)===null||e===void 0||e.inputControllerWillPerformTyping(),this.deleteInDirection("forward",t)},h(t){var e;return(e=this.delegate)===null||e===void 0||e.inputControllerWillPerformTyping(),this.deleteInDirection("backward",t)},o(t){var e,n;return t.preventDefault(),(e=this.delegate)===null||e===void 0||e.inputControllerWillPerformTyping(),(n=this.responder)===null||n===void 0||n.insertString(`
`,{updatePosition:!1}),this.requestRender()}},shift:{return(t){var e,n;(e=this.delegate)===null||e===void 0||e.inputControllerWillPerformTyping(),(n=this.responder)===null||n===void 0||n.insertString(`
`),this.requestRender(),t.preventDefault()},tab(t){var e,n;(e=this.responder)!==null&&e!==void 0&&e.canDecreaseNestingLevel()&&((n=this.responder)===null||n===void 0||n.decreaseNestingLevel(),this.requestRender(),t.preventDefault())},left(t){if(this.selectionIsInCursorTarget())return t.preventDefault(),this.expandSelectionInDirection("backward")},right(t){if(this.selectionIsInCursorTarget())return t.preventDefault(),this.expandSelectionInDirection("forward")}},alt:{backspace(t){var e;return this.setInputSummary({preferDocument:!1}),(e=this.delegate)===null||e===void 0?void 0:e.inputControllerWillPerformTyping()}},meta:{backspace(t){var e;return this.setInputSummary({preferDocument:!1}),(e=this.delegate)===null||e===void 0?void 0:e.inputControllerWillPerformTyping()}}}),cn.proxyMethod("responder?.getSelectedRange"),cn.proxyMethod("responder?.setSelectedRange"),cn.proxyMethod("responder?.expandSelectionInDirection"),cn.proxyMethod("responder?.selectionIsInCursorTarget"),cn.proxyMethod("responder?.selectionIsExpanded");const pw=t=>{var e;return(e=t.type)===null||e===void 0||(e=e.match(/\/(\w+)$/))===null||e===void 0?void 0:e[1]},fw=!((Gi=" ".codePointAt)===null||Gi===void 0||!Gi.call(" ",0)),vw=function(t){if(t.key&&fw&&t.key.codePointAt(0)===t.keyCode)return t.key;{let e;if(t.which===null?e=t.keyCode:t.which!==0&&t.charCode!==0&&(e=t.charCode),e!=null&&Ld[e]!=="escape")return Sr.fromCodepoints([e]).toString()}},hw=function(t){const e=t.clipboardData;if(e){if(e.types.includes("text/html")){for(const n of e.types){const r=/^CorePasteboardFlavorType/.test(n),i=/^dyn\./.test(n)&&e.getData(n);if(r||i)return!0}return!1}{const n=e.types.includes("com.apple.webarchive"),r=e.types.includes("com.apple.flat-rtfd");return n||r}}};class yn extends ft{constructor(e){super(...arguments),this.inputController=e,this.responder=this.inputController.responder,this.delegate=this.inputController.delegate,this.inputSummary=this.inputController.inputSummary,this.data={}}start(e){if(this.data.start=e,this.isSignificant()){var n,r;this.inputSummary.eventName==="keypress"&&this.inputSummary.textAdded&&((r=this.responder)===null||r===void 0||r.deleteInDirection("left")),this.selectionIsExpanded()||(this.insertPlaceholder(),this.requestRender()),this.range=(n=this.responder)===null||n===void 0?void 0:n.getSelectedRange()}}update(e){if(this.data.update=e,this.isSignificant()){const n=this.selectPlaceholder();n&&(this.forgetPlaceholder(),this.range=n)}}end(e){return this.data.end=e,this.isSignificant()?(this.forgetPlaceholder(),this.canApplyToDocument()?(this.setInputSummary({preferDocument:!0,didInput:!1}),(n=this.delegate)===null||n===void 0||n.inputControllerWillPerformTyping(),(r=this.responder)===null||r===void 0||r.setSelectedRange(this.range),(i=this.responder)===null||i===void 0||i.insertString(this.data.end),(l=this.responder)===null||l===void 0?void 0:l.setSelectedRange(this.range[0]+this.data.end.length)):this.data.start!=null||this.data.update!=null?(this.requestReparse(),this.inputController.reset()):void 0):this.inputController.reset();var n,r,i,l}getEndData(){return this.data.end}isEnded(){return this.getEndData()!=null}isSignificant(){return!dw.composesExistingText||this.inputSummary.didInput}canApplyToDocument(){var e,n;return((e=this.data.start)===null||e===void 0?void 0:e.length)===0&&((n=this.data.end)===null||n===void 0?void 0:n.length)>0&&this.range}}yn.proxyMethod("inputController.setInputSummary"),yn.proxyMethod("inputController.requestRender"),yn.proxyMethod("inputController.requestReparse"),yn.proxyMethod("responder?.selectionIsExpanded"),yn.proxyMethod("responder?.insertPlaceholder"),yn.proxyMethod("responder?.selectPlaceholder"),yn.proxyMethod("responder?.forgetPlaceholder");class Er extends Ai{constructor(){super(...arguments),this.render=this.render.bind(this)}elementDidMutate(){return this.scheduledRender?this.composing?(e=this.delegate)===null||e===void 0||(n=e.inputControllerDidAllowUnhandledInput)===null||n===void 0?void 0:n.call(e):void 0:this.reparse();var e,n}scheduleRender(){return this.scheduledRender?this.scheduledRender:this.scheduledRender=requestAnimationFrame(this.render)}render(){var e,n;cancelAnimationFrame(this.scheduledRender),this.scheduledRender=null,this.composing||(n=this.delegate)===null||n===void 0||n.render(),(e=this.afterRender)===null||e===void 0||e.call(this),this.afterRender=null}reparse(){var e;return(e=this.delegate)===null||e===void 0?void 0:e.reparse()}insertString(){var e;let n=arguments.length>0&&arguments[0]!==void 0?arguments[0]:"",r=arguments.length>1?arguments[1]:void 0;return(e=this.delegate)===null||e===void 0||e.inputControllerWillPerformTyping(),this.withTargetDOMRange((function(){var i;return(i=this.responder)===null||i===void 0?void 0:i.insertString(n,r)}))}toggleAttributeIfSupported(e){var n;if(ua().includes(e))return(n=this.delegate)===null||n===void 0||n.inputControllerWillPerformFormatting(e),this.withTargetDOMRange((function(){var r;return(r=this.responder)===null||r===void 0?void 0:r.toggleCurrentAttribute(e)}))}activateAttributeIfSupported(e,n){var r;if(ua().includes(e))return(r=this.delegate)===null||r===void 0||r.inputControllerWillPerformFormatting(e),this.withTargetDOMRange((function(){var i;return(i=this.responder)===null||i===void 0?void 0:i.setCurrentAttribute(e,n)}))}deleteInDirection(e){let{recordUndoEntry:n}=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{recordUndoEntry:!0};var r;n&&((r=this.delegate)===null||r===void 0||r.inputControllerWillPerformTyping());const i=()=>{var a;return(a=this.responder)===null||a===void 0?void 0:a.deleteInDirection(e)},l=this.getTargetDOMRange({minLength:this.composing?1:2});return l?this.withTargetDOMRange(l,i):i()}withTargetDOMRange(e,n){var r;return typeof e=="function"&&(n=e,e=this.getTargetDOMRange()),e?(r=this.responder)===null||r===void 0?void 0:r.withTargetDOMRange(e,n.bind(this)):(Un.reset(),n.call(this))}getTargetDOMRange(){var e,n;let{minLength:r}=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{minLength:0};const i=(e=(n=this.event).getTargetRanges)===null||e===void 0?void 0:e.call(n);if(i&&i.length){const l=mw(i[0]);if(r===0||l.toString().length>=r)return l}}withEvent(e,n){let r;this.event=e;try{r=n.call(this)}finally{this.event=null}return r}}St(Er,"events",{keydown(t){if(qu(t)){var e;const n=ww(t);(e=this.delegate)!==null&&e!==void 0&&e.inputControllerDidReceiveKeyboardCommand(n)&&t.preventDefault()}else{let n=t.key;t.altKey&&(n+="+Alt"),t.shiftKey&&(n+="+Shift");const r=this.constructor.keys[n];if(r)return this.withEvent(t,r)}},paste(t){var e;let n;const r=(e=t.clipboardData)===null||e===void 0?void 0:e.getData("URL");return xd(t)?(t.preventDefault(),this.attachFiles(t.clipboardData.files)):bw(t)?(t.preventDefault(),n={type:"text/plain",string:t.clipboardData.getData("text/plain")},(i=this.delegate)===null||i===void 0||i.inputControllerWillPaste(n),(l=this.responder)===null||l===void 0||l.insertString(n.string),this.render(),(a=this.delegate)===null||a===void 0?void 0:a.inputControllerDidPaste(n)):r?(t.preventDefault(),n={type:"text/html",html:this.createLinkHTML(r)},(o=this.delegate)===null||o===void 0||o.inputControllerWillPaste(n),(s=this.responder)===null||s===void 0||s.insertHTML(n.html),this.render(),(u=this.delegate)===null||u===void 0?void 0:u.inputControllerDidPaste(n)):void 0;var i,l,a,o,s,u},beforeinput(t){const e=this.constructor.inputTypes[t.inputType],n=(r=t,!(!/iPhone|iPad/.test(navigator.userAgent)||r.inputType&&r.inputType!=="insertParagraph"));var r;e&&(this.withEvent(t,e),n||this.scheduleRender()),n&&this.render()},input(t){Un.reset()},dragstart(t){var e,n;(e=this.responder)!==null&&e!==void 0&&e.selectionContainsAttachments()&&(t.dataTransfer.setData("application/x-trix-dragging",!0),this.dragging={range:(n=this.responder)===null||n===void 0?void 0:n.getSelectedRange(),point:Yi(t)})},dragenter(t){Ji(t)&&t.preventDefault()},dragover(t){if(this.dragging){t.preventDefault();const n=Yi(t);var e;if(!ir(n,this.dragging.point))return this.dragging.point=n,(e=this.responder)===null||e===void 0?void 0:e.setLocationRangeFromPointRange(n)}else Ji(t)&&t.preventDefault()},drop(t){var e,n;if(this.dragging)return t.preventDefault(),(e=this.delegate)===null||e===void 0||e.inputControllerWillMoveText(),(n=this.responder)===null||n===void 0||n.moveTextFromRange(this.dragging.range),this.dragging=null,this.scheduleRender();if(Ji(t)){var r;t.preventDefault();const i=Yi(t);return(r=this.responder)===null||r===void 0||r.setLocationRangeFromPointRange(i),this.attachFiles(t.dataTransfer.files)}},dragend(){var t;this.dragging&&((t=this.responder)===null||t===void 0||t.setSelectedRange(this.dragging.range),this.dragging=null)},compositionend(t){this.composing&&(this.composing=!1,Rr.recentAndroid||this.scheduleRender())}}),St(Er,"keys",{ArrowLeft(){var t,e;if((t=this.responder)!==null&&t!==void 0&&t.shouldManageMovingCursorInDirection("backward"))return this.event.preventDefault(),(e=this.responder)===null||e===void 0?void 0:e.moveCursorInDirection("backward")},ArrowRight(){var t,e;if((t=this.responder)!==null&&t!==void 0&&t.shouldManageMovingCursorInDirection("forward"))return this.event.preventDefault(),(e=this.responder)===null||e===void 0?void 0:e.moveCursorInDirection("forward")},Backspace(){var t,e,n;if((t=this.responder)!==null&&t!==void 0&&t.shouldManageDeletingInDirection("backward"))return this.event.preventDefault(),(e=this.delegate)===null||e===void 0||e.inputControllerWillPerformTyping(),(n=this.responder)===null||n===void 0||n.deleteInDirection("backward"),this.render()},Tab(){var t,e;if((t=this.responder)!==null&&t!==void 0&&t.canIncreaseNestingLevel())return this.event.preventDefault(),(e=this.responder)===null||e===void 0||e.increaseNestingLevel(),this.render()},"Tab+Shift"(){var t,e;if((t=this.responder)!==null&&t!==void 0&&t.canDecreaseNestingLevel())return this.event.preventDefault(),(e=this.responder)===null||e===void 0||e.decreaseNestingLevel(),this.render()}}),St(Er,"inputTypes",{deleteByComposition(){return this.deleteInDirection("backward",{recordUndoEntry:!1})},deleteByCut(){return this.deleteInDirection("backward")},deleteByDrag(){return this.event.preventDefault(),this.withTargetDOMRange((function(){var t;this.deleteByDragRange=(t=this.responder)===null||t===void 0?void 0:t.getSelectedRange()}))},deleteCompositionText(){return this.deleteInDirection("backward",{recordUndoEntry:!1})},deleteContent(){return this.deleteInDirection("backward")},deleteContentBackward(){return this.deleteInDirection("backward")},deleteContentForward(){return this.deleteInDirection("forward")},deleteEntireSoftLine(){return this.deleteInDirection("forward")},deleteHardLineBackward(){return this.deleteInDirection("backward")},deleteHardLineForward(){return this.deleteInDirection("forward")},deleteSoftLineBackward(){return this.deleteInDirection("backward")},deleteSoftLineForward(){return this.deleteInDirection("forward")},deleteWordBackward(){return this.deleteInDirection("backward")},deleteWordForward(){return this.deleteInDirection("forward")},formatBackColor(){return this.activateAttributeIfSupported("backgroundColor",this.event.data)},formatBold(){return this.toggleAttributeIfSupported("bold")},formatFontColor(){return this.activateAttributeIfSupported("color",this.event.data)},formatFontName(){return this.activateAttributeIfSupported("font",this.event.data)},formatIndent(){var t;if((t=this.responder)!==null&&t!==void 0&&t.canIncreaseNestingLevel())return this.withTargetDOMRange((function(){var e;return(e=this.responder)===null||e===void 0?void 0:e.increaseNestingLevel()}))},formatItalic(){return this.toggleAttributeIfSupported("italic")},formatJustifyCenter(){return this.toggleAttributeIfSupported("justifyCenter")},formatJustifyFull(){return this.toggleAttributeIfSupported("justifyFull")},formatJustifyLeft(){return this.toggleAttributeIfSupported("justifyLeft")},formatJustifyRight(){return this.toggleAttributeIfSupported("justifyRight")},formatOutdent(){var t;if((t=this.responder)!==null&&t!==void 0&&t.canDecreaseNestingLevel())return this.withTargetDOMRange((function(){var e;return(e=this.responder)===null||e===void 0?void 0:e.decreaseNestingLevel()}))},formatRemove(){this.withTargetDOMRange((function(){for(const n in(t=this.responder)===null||t===void 0?void 0:t.getCurrentAttributes()){var t,e;(e=this.responder)===null||e===void 0||e.removeCurrentAttribute(n)}}))},formatSetBlockTextDirection(){return this.activateAttributeIfSupported("blockDir",this.event.data)},formatSetInlineTextDirection(){return this.activateAttributeIfSupported("textDir",this.event.data)},formatStrikeThrough(){return this.toggleAttributeIfSupported("strike")},formatSubscript(){return this.toggleAttributeIfSupported("sub")},formatSuperscript(){return this.toggleAttributeIfSupported("sup")},formatUnderline(){return this.toggleAttributeIfSupported("underline")},historyRedo(){var t;return(t=this.delegate)===null||t===void 0?void 0:t.inputControllerWillPerformRedo()},historyUndo(){var t;return(t=this.delegate)===null||t===void 0?void 0:t.inputControllerWillPerformUndo()},insertCompositionText(){return this.composing=!0,this.insertString(this.event.data)},insertFromComposition(){return this.composing=!1,this.insertString(this.event.data)},insertFromDrop(){const t=this.deleteByDragRange;var e;if(t)return this.deleteByDragRange=null,(e=this.delegate)===null||e===void 0||e.inputControllerWillMoveText(),this.withTargetDOMRange((function(){var n;return(n=this.responder)===null||n===void 0?void 0:n.moveTextFromRange(t)}))},insertFromPaste(){const{dataTransfer:t}=this.event,e={dataTransfer:t},n=t.getData("URL"),r=t.getData("text/html");if(n){var i;let s;this.event.preventDefault(),e.type="text/html";const u=t.getData("public.url-name");s=u?Nl(u).trim():n,e.html=this.createLinkHTML(n,s),(i=this.delegate)===null||i===void 0||i.inputControllerWillPaste(e),this.withTargetDOMRange((function(){var c;return(c=this.responder)===null||c===void 0?void 0:c.insertHTML(e.html)})),this.afterRender=()=>{var c;return(c=this.delegate)===null||c===void 0?void 0:c.inputControllerDidPaste(e)}}else if(Wu(t)){var l;e.type="text/plain",e.string=t.getData("text/plain"),(l=this.delegate)===null||l===void 0||l.inputControllerWillPaste(e),this.withTargetDOMRange((function(){var s;return(s=this.responder)===null||s===void 0?void 0:s.insertString(e.string)})),this.afterRender=()=>{var s;return(s=this.delegate)===null||s===void 0?void 0:s.inputControllerDidPaste(e)}}else if(gw(this.event)){var a;e.type="File",e.file=t.files[0],(a=this.delegate)===null||a===void 0||a.inputControllerWillPaste(e),this.withTargetDOMRange((function(){var s;return(s=this.responder)===null||s===void 0?void 0:s.insertFile(e.file)})),this.afterRender=()=>{var s;return(s=this.delegate)===null||s===void 0?void 0:s.inputControllerDidPaste(e)}}else if(r){var o;this.event.preventDefault(),e.type="text/html",e.html=r,(o=this.delegate)===null||o===void 0||o.inputControllerWillPaste(e),this.withTargetDOMRange((function(){var s;return(s=this.responder)===null||s===void 0?void 0:s.insertHTML(e.html)})),this.afterRender=()=>{var s;return(s=this.delegate)===null||s===void 0?void 0:s.inputControllerDidPaste(e)}}},insertFromYank(){return this.insertString(this.event.data)},insertLineBreak(){return this.insertString(`
`)},insertLink(){return this.activateAttributeIfSupported("href",this.event.data)},insertOrderedList(){return this.toggleAttributeIfSupported("number")},insertParagraph(){var t;return(t=this.delegate)===null||t===void 0||t.inputControllerWillPerformTyping(),this.withTargetDOMRange((function(){var e;return(e=this.responder)===null||e===void 0?void 0:e.insertLineBreak()}))},insertReplacementText(){const t=this.event.dataTransfer.getData("text/plain"),e=this.event.getTargetRanges()[0];this.withTargetDOMRange(e,(()=>{this.insertString(t,{updatePosition:!1})}))},insertText(){var t;return this.insertString(this.event.data||((t=this.event.dataTransfer)===null||t===void 0?void 0:t.getData("text/plain")))},insertTranspose(){return this.insertString(this.event.data)},insertUnorderedList(){return this.toggleAttributeIfSupported("bullet")}});const mw=function(t){const e=document.createRange();return e.setStart(t.startContainer,t.startOffset),e.setEnd(t.endContainer,t.endOffset),e},Ji=t=>{var e;return Array.from(((e=t.dataTransfer)===null||e===void 0?void 0:e.types)||[]).includes("Files")},gw=t=>{var e;return((e=t.dataTransfer.files)===null||e===void 0?void 0:e[0])&&!xd(t)&&!(n=>{let{dataTransfer:r}=n;return r.types.includes("Files")&&r.types.includes("text/html")&&r.getData("text/html").includes("urn:schemas-microsoft-com:office:office")})(t)},xd=function(t){const e=t.clipboardData;if(e)return Array.from(e.types).filter((n=>n.match(/file/i))).length===e.types.length&&e.files.length>=1},bw=function(t){const e=t.clipboardData;if(e)return e.types.includes("text/plain")&&e.types.length===1},ww=function(t){const e=[];return t.altKey&&e.push("alt"),t.shiftKey&&e.push("shift"),e.push(t.key),e},Yi=t=>({x:t.clientX,y:t.clientY}),ga="[data-trix-attribute]",ba="[data-trix-action]",yw="".concat(ga,", ").concat(ba),Li="[data-trix-dialog]",kw="".concat(Li,"[data-trix-active]"),Cw="".concat(Li," [data-trix-method]"),Uo="".concat(Li," [data-trix-input]"),Wo=(t,e)=>(e||(e=Jn(t)),t.querySelector("[data-trix-input][name='".concat(e,"']"))),qo=t=>t.getAttribute("data-trix-action"),Jn=t=>t.getAttribute("data-trix-attribute")||t.getAttribute("data-trix-dialog-attribute");class Td extends ft{constructor(e){super(e),this.didClickActionButton=this.didClickActionButton.bind(this),this.didClickAttributeButton=this.didClickAttributeButton.bind(this),this.didClickDialogButton=this.didClickDialogButton.bind(this),this.didKeyDownDialogInput=this.didKeyDownDialogInput.bind(this),this.element=e,this.attributes={},this.actions={},this.resetDialogInputs(),Ze("mousedown",{onElement:this.element,matchingSelector:ba,withCallback:this.didClickActionButton}),Ze("mousedown",{onElement:this.element,matchingSelector:ga,withCallback:this.didClickAttributeButton}),Ze("click",{onElement:this.element,matchingSelector:yw,preventDefault:!0}),Ze("click",{onElement:this.element,matchingSelector:Cw,withCallback:this.didClickDialogButton}),Ze("keydown",{onElement:this.element,matchingSelector:Uo,withCallback:this.didKeyDownDialogInput})}didClickActionButton(e,n){var r;(r=this.delegate)===null||r===void 0||r.toolbarDidClickButton(),e.preventDefault();const i=qo(n);return this.getDialog(i)?this.toggleDialog(i):(l=this.delegate)===null||l===void 0?void 0:l.toolbarDidInvokeAction(i,n);var l}didClickAttributeButton(e,n){var r;(r=this.delegate)===null||r===void 0||r.toolbarDidClickButton(),e.preventDefault();const i=Jn(n);var l;return this.getDialog(i)?this.toggleDialog(i):(l=this.delegate)===null||l===void 0||l.toolbarDidToggleAttribute(i),this.refreshAttributeButtons()}didClickDialogButton(e,n){const r=Tn(n,{matchingSelector:Li});return this[n.getAttribute("data-trix-method")].call(this,r)}didKeyDownDialogInput(e,n){if(e.keyCode===13){e.preventDefault();const r=n.getAttribute("name"),i=this.getDialog(r);this.setAttribute(i)}if(e.keyCode===27)return e.preventDefault(),this.hideDialog()}updateActions(e){return this.actions=e,this.refreshActionButtons()}refreshActionButtons(){return this.eachActionButton(((e,n)=>{e.disabled=this.actions[n]===!1}))}eachActionButton(e){return Array.from(this.element.querySelectorAll(ba)).map((n=>e(n,qo(n))))}updateAttributes(e){return this.attributes=e,this.refreshAttributeButtons()}refreshAttributeButtons(){return this.eachAttributeButton(((e,n)=>(e.disabled=this.attributes[n]===!1,this.attributes[n]||this.dialogIsVisible(n)?(e.setAttribute("data-trix-active",""),e.classList.add("trix-active")):(e.removeAttribute("data-trix-active"),e.classList.remove("trix-active")))))}eachAttributeButton(e){return Array.from(this.element.querySelectorAll(ga)).map((n=>e(n,Jn(n))))}applyKeyboardCommand(e){const n=JSON.stringify(e.sort());for(const r of Array.from(this.element.querySelectorAll("[data-trix-key]"))){const i=r.getAttribute("data-trix-key").split("+");if(JSON.stringify(i.sort())===n)return br("mousedown",{onElement:r}),!0}return!1}dialogIsVisible(e){const n=this.getDialog(e);if(n)return n.hasAttribute("data-trix-active")}toggleDialog(e){return this.dialogIsVisible(e)?this.hideDialog():this.showDialog(e)}showDialog(e){var n,r;this.hideDialog(),(n=this.delegate)===null||n===void 0||n.toolbarWillShowDialog();const i=this.getDialog(e);i.setAttribute("data-trix-active",""),i.classList.add("trix-active"),Array.from(i.querySelectorAll("input[disabled]")).forEach((a=>{a.removeAttribute("disabled")}));const l=Jn(i);if(l){const a=Wo(i,e);a&&(a.value=this.attributes[l]||"",a.select())}return(r=this.delegate)===null||r===void 0?void 0:r.toolbarDidShowDialog(e)}setAttribute(e){var n;const r=Jn(e),i=Wo(e,r);return!i.willValidate||(i.setCustomValidity(""),i.checkValidity()&&this.isSafeAttribute(i))?((n=this.delegate)===null||n===void 0||n.toolbarDidUpdateAttribute(r,i.value),this.hideDialog()):(i.setCustomValidity("Invalid value"),i.setAttribute("data-trix-validate",""),i.classList.add("trix-validate"),i.focus())}isSafeAttribute(e){return!e.hasAttribute("data-trix-validate-href")||ri.isValidAttribute("a","href",e.value)}removeAttribute(e){var n;const r=Jn(e);return(n=this.delegate)===null||n===void 0||n.toolbarDidRemoveAttribute(r),this.hideDialog()}hideDialog(){const e=this.element.querySelector(kw);var n;if(e)return e.removeAttribute("data-trix-active"),e.classList.remove("trix-active"),this.resetDialogInputs(),(n=this.delegate)===null||n===void 0?void 0:n.toolbarDidHideDialog((r=>r.getAttribute("data-trix-dialog"))(e))}resetDialogInputs(){Array.from(this.element.querySelectorAll(Uo)).forEach((e=>{e.setAttribute("disabled","disabled"),e.removeAttribute("data-trix-validate"),e.classList.remove("trix-validate")}))}getDialog(e){return this.element.querySelector("[data-trix-dialog=".concat(e,"]"))}}class Ar extends kd{constructor(e){let{editorElement:n,document:r,html:i}=e;super(...arguments),this.editorElement=n,this.selectionManager=new Rn(this.editorElement),this.selectionManager.delegate=this,this.composition=new Cn,this.composition.delegate=this,this.attachmentManager=new dd(this.composition.getAttachments()),this.attachmentManager.delegate=this,this.inputController=$l.getLevel()===2?new Er(this.editorElement):new cn(this.editorElement),this.inputController.delegate=this,this.inputController.responder=this.composition,this.compositionController=new yd(this.editorElement,this.composition),this.compositionController.delegate=this,this.toolbarController=new Td(this.editorElement.toolbarElement),this.toolbarController.delegate=this,this.editor=new vd(this.composition,this.selectionManager,this.editorElement),r?this.editor.loadDocument(r):this.editor.loadHTML(i)}registerSelectionManager(){return Un.registerSelectionManager(this.selectionManager)}unregisterSelectionManager(){return Un.unregisterSelectionManager(this.selectionManager)}render(){return this.compositionController.render()}reparse(){return this.composition.replaceHTML(this.editorElement.innerHTML)}compositionDidChangeDocument(e){if(this.notifyEditorElement("document-change"),!this.handlingInput)return this.render()}compositionDidChangeCurrentAttributes(e){return this.currentAttributes=e,this.toolbarController.updateAttributes(this.currentAttributes),this.updateCurrentActions(),this.notifyEditorElement("attributes-change",{attributes:this.currentAttributes})}compositionDidPerformInsertionAtRange(e){this.pasting&&(this.pastedRange=e)}compositionShouldAcceptFile(e){return this.notifyEditorElement("file-accept",{file:e})}compositionDidAddAttachment(e){const n=this.attachmentManager.manageAttachment(e);return this.notifyEditorElement("attachment-add",{attachment:n})}compositionDidEditAttachment(e){this.compositionController.rerenderViewForObject(e);const n=this.attachmentManager.manageAttachment(e);return this.notifyEditorElement("attachment-edit",{attachment:n}),this.notifyEditorElement("change")}compositionDidChangeAttachmentPreviewURL(e){return this.compositionController.invalidateViewForObject(e),this.notifyEditorElement("change")}compositionDidRemoveAttachment(e){const n=this.attachmentManager.unmanageAttachment(e);return this.notifyEditorElement("attachment-remove",{attachment:n})}compositionDidStartEditingAttachment(e,n){return this.attachmentLocationRange=this.composition.document.getLocationRangeOfAttachment(e),this.compositionController.installAttachmentEditorForAttachment(e,n),this.selectionManager.setLocationRange(this.attachmentLocationRange)}compositionDidStopEditingAttachment(e){this.compositionController.uninstallAttachmentEditor(),this.attachmentLocationRange=null}compositionDidRequestChangingSelectionToLocationRange(e){if(!this.loadingSnapshot||this.isFocused())return this.requestedLocationRange=e,this.compositionRevisionWhenLocationRangeRequested=this.composition.revision,this.handlingInput?void 0:this.render()}compositionWillLoadSnapshot(){this.loadingSnapshot=!0}compositionDidLoadSnapshot(){this.compositionController.refreshViewCache(),this.render(),this.loadingSnapshot=!1}getSelectionManager(){return this.selectionManager}attachmentManagerDidRequestRemovalOfAttachment(e){return this.removeAttachment(e)}compositionControllerWillSyncDocumentView(){return this.inputController.editorWillSyncDocumentView(),this.selectionManager.lock(),this.selectionManager.clearSelection()}compositionControllerDidSyncDocumentView(){return this.inputController.editorDidSyncDocumentView(),this.selectionManager.unlock(),this.updateCurrentActions(),this.notifyEditorElement("sync")}compositionControllerDidRender(){this.requestedLocationRange&&(this.compositionRevisionWhenLocationRangeRequested===this.composition.revision&&this.selectionManager.setLocationRange(this.requestedLocationRange),this.requestedLocationRange=null,this.compositionRevisionWhenLocationRangeRequested=null),this.renderedCompositionRevision!==this.composition.revision&&(this.runEditorFilters(),this.composition.updateCurrentAttributes(),this.notifyEditorElement("render")),this.renderedCompositionRevision=this.composition.revision}compositionControllerDidFocus(){return this.isFocusedInvisibly()&&this.setLocationRange({index:0,offset:0}),this.toolbarController.hideDialog(),this.notifyEditorElement("focus")}compositionControllerDidBlur(){return this.notifyEditorElement("blur")}compositionControllerDidSelectAttachment(e,n){return this.toolbarController.hideDialog(),this.composition.editAttachment(e,n)}compositionControllerDidRequestDeselectingAttachment(e){const n=this.attachmentLocationRange||this.composition.document.getLocationRangeOfAttachment(e);return this.selectionManager.setLocationRange(n[1])}compositionControllerWillUpdateAttachment(e){return this.editor.recordUndoEntry("Edit Attachment",{context:e.id,consolidatable:!0})}compositionControllerDidRequestRemovalOfAttachment(e){return this.removeAttachment(e)}inputControllerWillHandleInput(){this.handlingInput=!0,this.requestedRender=!1}inputControllerDidRequestRender(){this.requestedRender=!0}inputControllerDidHandleInput(){if(this.handlingInput=!1,this.requestedRender)return this.requestedRender=!1,this.render()}inputControllerDidAllowUnhandledInput(){return this.notifyEditorElement("change")}inputControllerDidRequestReparse(){return this.reparse()}inputControllerWillPerformTyping(){return this.recordTypingUndoEntry()}inputControllerWillPerformFormatting(e){return this.recordFormattingUndoEntry(e)}inputControllerWillCutText(){return this.editor.recordUndoEntry("Cut")}inputControllerWillPaste(e){return this.editor.recordUndoEntry("Paste"),this.pasting=!0,this.notifyEditorElement("before-paste",{paste:e})}inputControllerDidPaste(e){return e.range=this.pastedRange,this.pastedRange=null,this.pasting=null,this.notifyEditorElement("paste",{paste:e})}inputControllerWillMoveText(){return this.editor.recordUndoEntry("Move")}inputControllerWillAttachFiles(){return this.editor.recordUndoEntry("Drop Files")}inputControllerWillPerformUndo(){return this.editor.undo()}inputControllerWillPerformRedo(){return this.editor.redo()}inputControllerDidReceiveKeyboardCommand(e){return this.toolbarController.applyKeyboardCommand(e)}inputControllerDidStartDrag(){this.locationRangeBeforeDrag=this.selectionManager.getLocationRange()}inputControllerDidReceiveDragOverPoint(e){return this.selectionManager.setLocationRangeFromPointRange(e)}inputControllerDidCancelDrag(){this.selectionManager.setLocationRange(this.locationRangeBeforeDrag),this.locationRangeBeforeDrag=null}locationRangeDidChange(e){return this.composition.updateCurrentAttributes(),this.updateCurrentActions(),this.attachmentLocationRange&&!ti(this.attachmentLocationRange,e)&&this.composition.stopEditingAttachment(),this.notifyEditorElement("selection-change")}toolbarDidClickButton(){if(!this.getLocationRange())return this.setLocationRange({index:0,offset:0})}toolbarDidInvokeAction(e,n){return this.invokeAction(e,n)}toolbarDidToggleAttribute(e){if(this.recordFormattingUndoEntry(e),this.composition.toggleCurrentAttribute(e),this.render(),!this.selectionFrozen)return this.editorElement.focus()}toolbarDidUpdateAttribute(e,n){if(this.recordFormattingUndoEntry(e),this.composition.setCurrentAttribute(e,n),this.render(),!this.selectionFrozen)return this.editorElement.focus()}toolbarDidRemoveAttribute(e){if(this.recordFormattingUndoEntry(e),this.composition.removeCurrentAttribute(e),this.render(),!this.selectionFrozen)return this.editorElement.focus()}toolbarWillShowDialog(e){return this.composition.expandSelectionForEditing(),this.freezeSelection()}toolbarDidShowDialog(e){return this.notifyEditorElement("toolbar-dialog-show",{dialogName:e})}toolbarDidHideDialog(e){return this.thawSelection(),this.editorElement.focus(),this.notifyEditorElement("toolbar-dialog-hide",{dialogName:e})}freezeSelection(){if(!this.selectionFrozen)return this.selectionManager.lock(),this.composition.freezeSelection(),this.selectionFrozen=!0,this.render()}thawSelection(){if(this.selectionFrozen)return this.composition.thawSelection(),this.selectionManager.unlock(),this.selectionFrozen=!1,this.render()}canInvokeAction(e){return!!this.actionIsExternal(e)||!((n=this.actions[e])===null||n===void 0||(n=n.test)===null||n===void 0||!n.call(this));var n}invokeAction(e,n){return this.actionIsExternal(e)?this.notifyEditorElement("action-invoke",{actionName:e,invokingElement:n}):(r=this.actions[e])===null||r===void 0||(r=r.perform)===null||r===void 0?void 0:r.call(this);var r}actionIsExternal(e){return/^x-./.test(e)}getCurrentActions(){const e={};for(const n in this.actions)e[n]=this.canInvokeAction(n);return e}updateCurrentActions(){const e=this.getCurrentActions();if(!ir(e,this.currentActions))return this.currentActions=e,this.toolbarController.updateActions(this.currentActions),this.notifyEditorElement("actions-change",{actions:this.currentActions})}runEditorFilters(){let e=this.composition.getSnapshot();if(Array.from(this.editor.filters).forEach((i=>{const{document:l,selectedRange:a}=e;e=i.call(this.editor,e)||{},e.document||(e.document=l),e.selectedRange||(e.selectedRange=a)})),n=e,r=this.composition.getSnapshot(),!ti(n.selectedRange,r.selectedRange)||!n.document.isEqualTo(r.document))return this.composition.loadSnapshot(e);var n,r}updateInputElement(){const e=(function(n,r){const i=Y4[r];if(i)return i(n);throw new Error("unknown content type: ".concat(r))})(this.compositionController.getSerializableElement(),"text/html");return this.editorElement.setFormValue(e)}notifyEditorElement(e,n){switch(e){case"document-change":this.documentChangedSinceLastRender=!0;break;case"render":this.documentChangedSinceLastRender&&(this.documentChangedSinceLastRender=!1,this.notifyEditorElement("change"));break;case"change":case"attachment-add":case"attachment-edit":case"attachment-remove":this.updateInputElement()}return this.editorElement.notify(e,n)}removeAttachment(e){return this.editor.recordUndoEntry("Delete Attachment"),this.composition.removeAttachment(e),this.render()}recordFormattingUndoEntry(e){const n=ot(e),r=this.selectionManager.getLocationRange();if(n||!fn(r))return this.editor.recordUndoEntry("Formatting",{context:this.getUndoContext(),consolidatable:!0})}recordTypingUndoEntry(){return this.editor.recordUndoEntry("Typing",{context:this.getUndoContext(this.currentAttributes),consolidatable:!0})}getUndoContext(){for(var e=arguments.length,n=new Array(e),r=0;r<e;r++)n[r]=arguments[r];return[this.getLocationContext(),this.getTimeContext(),...Array.from(n)]}getLocationContext(){const e=this.selectionManager.getLocationRange();return fn(e)?e[0].index:e}getTimeContext(){return la.interval>0?Math.floor(new Date().getTime()/la.interval):0}isFocused(){var e;return this.editorElement===((e=this.editorElement.ownerDocument)===null||e===void 0?void 0:e.activeElement)}isFocusedInvisibly(){return this.isFocused()&&!this.getLocationRange()}get actions(){return this.constructor.actions}}St(Ar,"actions",{undo:{test(){return this.editor.canUndo()},perform(){return this.editor.undo()}},redo:{test(){return this.editor.canRedo()},perform(){return this.editor.redo()}},link:{test(){return this.editor.canActivateAttribute("href")}},increaseNestingLevel:{test(){return this.editor.canIncreaseNestingLevel()},perform(){return this.editor.increaseNestingLevel()&&this.render()}},decreaseNestingLevel:{test(){return this.editor.canDecreaseNestingLevel()},perform(){return this.editor.decreaseNestingLevel()&&this.render()}},attachFiles:{test:()=>!0,perform(){return $l.pickFiles(this.editor.insertFiles)}}}),Ar.proxyMethod("getSelectionManager().setLocationRange"),Ar.proxyMethod("getSelectionManager().getLocationRange");var Ew=Object.freeze({__proto__:null,AttachmentEditorController:wd,CompositionController:yd,Controller:kd,EditorController:Ar,InputController:Ai,Level0InputController:cn,Level2InputController:Er,ToolbarController:Td}),Aw=Object.freeze({__proto__:null,MutationObserver:Ed,SelectionChangeObserver:Ku}),Lw=Object.freeze({__proto__:null,FileVerificationOperation:Ad,ImagePreloadOperation:od});Uu("trix-toolbar",`%t {
  display: block;
}

%t {
  white-space: nowrap;
}

%t [data-trix-dialog] {
  display: none;
}

%t [data-trix-dialog][data-trix-active] {
  display: block;
}

%t [data-trix-dialog] [data-trix-validate]:invalid {
  background-color: #ffdddd;
}`);class Sd extends HTMLElement{connectedCallback(){this.innerHTML===""&&(this.innerHTML=ju.getDefaultHTML())}}let xw=0;const Tw=function(t){if(!t.hasAttribute("contenteditable"))return t.setAttribute("contenteditable",""),(function(e){let n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};return n.times=1,Ze(e,n)})("focus",{onElement:t,withCallback:()=>Sw(t)})},Sw=function(t){return _w(t),Mw()},_w=function(t){var e,n;if((e=(n=document).queryCommandSupported)!==null&&e!==void 0&&e.call(n,"enableObjectResizing"))return document.execCommand("enableObjectResizing",!1,!1),Ze("mscontrolselect",{onElement:t,preventDefault:!0})},Mw=function(t){var e,n;if((e=(n=document).queryCommandSupported)!==null&&e!==void 0&&e.call(n,"DefaultParagraphSeparator")){const{tagName:r}=Tt.default;if(["div","p"].includes(r))return document.execCommand("DefaultParagraphSeparator",!1,r)}},Qo=Rr.forcesObjectResizing?{display:"inline",width:"auto"}:{display:"inline-block",width:"1px"};Uu("trix-editor",`%t {
    display: block;
}

%t:empty::before {
    content: attr(placeholder);
    color: graytext;
    cursor: text;
    pointer-events: none;
    white-space: pre-line;
}

%t a[contenteditable=false] {
    cursor: text;
}

%t img {
    max-width: 100%;
    height: auto;
}

%t `.concat(Pn,` figcaption textarea {
    resize: none;
}

%t `).concat(Pn,` figcaption textarea.trix-autoresize-clone {
    position: absolute;
    left: -9999px;
    max-height: 0px;
}

%t `).concat(Pn,` figcaption[data-trix-placeholder]:empty::before {
    content: attr(data-trix-placeholder);
    color: graytext;
}

%t [data-trix-cursor-target] {
    display: `).concat(Qo.display,` !important;
    width: `).concat(Qo.width,` !important;
    padding: 0 !important;
    margin: 0 !important;
    border: none !important;
}

%t [data-trix-cursor-target=left] {
    vertical-align: top !important;
    margin-left: -1px !important;
}

%t [data-trix-cursor-target=right] {
    vertical-align: bottom !important;
    margin-right: -1px !important;
}`));var dn=new WeakMap,hr=new WeakSet;class Iw{constructor(e){var n,r;ld(n=this,r=hr),r.add(n),Cr(this,dn,{writable:!0,value:void 0}),this.element=e,Ul(this,dn,e.attachInternals())}connectedCallback(){zr(this,hr,Nr).call(this)}disconnectedCallback(){}get labels(){return Qe(this,dn).labels}get disabled(){var e;return(e=this.element.inputElement)===null||e===void 0?void 0:e.disabled}set disabled(e){this.element.toggleAttribute("disabled",e)}get required(){return this.element.hasAttribute("required")}set required(e){this.element.toggleAttribute("required",e),zr(this,hr,Nr).call(this)}get validity(){return Qe(this,dn).validity}get validationMessage(){return Qe(this,dn).validationMessage}get willValidate(){return Qe(this,dn).willValidate}setFormValue(e){zr(this,hr,Nr).call(this)}checkValidity(){return Qe(this,dn).checkValidity()}reportValidity(){return Qe(this,dn).reportValidity()}setCustomValidity(e){zr(this,hr,Nr).call(this,e)}}function Nr(){let t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:"";const{required:e,value:n}=this.element,r=e&&!n,i=!!t,l=Se("input",{required:e}),a=t||l.validationMessage;Qe(this,dn).setValidity({valueMissing:r,customError:i},a)}var Xi=new WeakMap,Zi=new WeakMap,ea=new WeakMap;class Bw{constructor(e){Cr(this,Xi,{writable:!0,value:void 0}),Cr(this,Zi,{writable:!0,value:n=>{n.defaultPrevented||n.target===this.element.form&&this.element.reset()}}),Cr(this,ea,{writable:!0,value:n=>{if(n.defaultPrevented||this.element.contains(n.target))return;const r=Tn(n.target,{matchingSelector:"label"});r&&Array.from(this.labels).includes(r)&&this.element.focus()}}),this.element=e}connectedCallback(){Ul(this,Xi,(function(e){if(e.hasAttribute("aria-label")||e.hasAttribute("aria-labelledby"))return;const n=function(){const r=Array.from(e.labels).map((l=>{if(!l.contains(e))return l.textContent})).filter((l=>l)),i=r.join(" ");return i?e.setAttribute("aria-label",i):e.removeAttribute("aria-label")};return n(),Ze("focus",{onElement:e,withCallback:n})})(this.element)),window.addEventListener("reset",Qe(this,Zi),!1),window.addEventListener("click",Qe(this,ea),!1)}disconnectedCallback(){var e;(e=Qe(this,Xi))===null||e===void 0||e.destroy(),window.removeEventListener("reset",Qe(this,Zi),!1),window.removeEventListener("click",Qe(this,ea),!1)}get labels(){const e=[];this.element.id&&this.element.ownerDocument&&e.push(...Array.from(this.element.ownerDocument.querySelectorAll("label[for='".concat(this.element.id,"']"))||[]));const n=Tn(this.element,{matchingSelector:"label"});return n&&[this.element,null].includes(n.control)&&e.push(n),e}get disabled(){return console.warn("This browser does not support the [disabled] attribute for trix-editor elements."),!1}set disabled(e){console.warn("This browser does not support the [disabled] attribute for trix-editor elements.")}get required(){return console.warn("This browser does not support the [required] attribute for trix-editor elements."),!1}set required(e){console.warn("This browser does not support the [required] attribute for trix-editor elements.")}get validity(){return console.warn("This browser does not support the validity property for trix-editor elements."),null}get validationMessage(){return console.warn("This browser does not support the validationMessage property for trix-editor elements."),""}get willValidate(){return console.warn("This browser does not support the willValidate property for trix-editor elements."),!1}setFormValue(e){}checkValidity(){return console.warn("This browser does not support checkValidity() for trix-editor elements."),!0}reportValidity(){return console.warn("This browser does not support reportValidity() for trix-editor elements."),!0}setCustomValidity(e){console.warn("This browser does not support setCustomValidity(validationMessage) for trix-editor elements.")}}var ht=new WeakMap;class ai extends HTMLElement{constructor(){super(),Cr(this,ht,{writable:!0,value:void 0}),Ul(this,ht,this.constructor.formAssociated?new Iw(this):new Bw(this))}get trixId(){return this.hasAttribute("trix-id")?this.getAttribute("trix-id"):(this.setAttribute("trix-id",++xw),this.trixId)}get labels(){return Qe(this,ht).labels}get disabled(){return Qe(this,ht).disabled}set disabled(e){Qe(this,ht).disabled=e}get required(){return Qe(this,ht).required}set required(e){Qe(this,ht).required=e}get validity(){return Qe(this,ht).validity}get validationMessage(){return Qe(this,ht).validationMessage}get willValidate(){return Qe(this,ht).willValidate}get type(){return this.localName}get toolbarElement(){var e;if(this.hasAttribute("toolbar"))return(e=this.ownerDocument)===null||e===void 0?void 0:e.getElementById(this.getAttribute("toolbar"));if(this.parentNode){const n="trix-toolbar-".concat(this.trixId);return this.setAttribute("toolbar",n),this.internalToolbar=Se("trix-toolbar",{id:n}),this.parentNode.insertBefore(this.internalToolbar,this),this.internalToolbar}}get form(){var e;return(e=this.inputElement)===null||e===void 0?void 0:e.form}get inputElement(){var e;if(this.hasAttribute("input"))return(e=this.ownerDocument)===null||e===void 0?void 0:e.getElementById(this.getAttribute("input"));if(this.parentNode){const n="trix-input-".concat(this.trixId);this.setAttribute("input",n);const r=Se("input",{type:"hidden",id:n});return this.parentNode.insertBefore(r,this.nextElementSibling),r}}get editor(){var e;return(e=this.editorController)===null||e===void 0?void 0:e.editor}get name(){var e;return(e=this.inputElement)===null||e===void 0?void 0:e.name}get value(){var e;return(e=this.inputElement)===null||e===void 0?void 0:e.value}set value(e){var n;this.defaultValue=e,(n=this.editor)===null||n===void 0||n.loadHTML(this.defaultValue)}attributeChangedCallback(e,n,r){e==="connected"&&this.isConnected&&n!=null&&n!==r&&requestAnimationFrame((()=>this.reconnect()))}notify(e,n){if(this.editorController)return br("trix-".concat(e),{onElement:this,attributes:n})}setFormValue(e){this.inputElement&&(this.inputElement.value=e,Qe(this,ht).setFormValue(e))}connectedCallback(){this.hasAttribute("data-trix-internal")||(Tw(this),(function(e){e.hasAttribute("role")||e.setAttribute("role","textbox")})(this),this.editorController||(br("trix-before-initialize",{onElement:this}),this.editorController=new Ar({editorElement:this,html:this.defaultValue=this.value}),requestAnimationFrame((()=>br("trix-initialize",{onElement:this})))),this.editorController.registerSelectionManager(),Qe(this,ht).connectedCallback(),this.toggleAttribute("connected",!0),(function(e){!document.querySelector(":focus")&&e.hasAttribute("autofocus")&&document.querySelector("[autofocus]")===e&&e.focus()})(this))}disconnectedCallback(){var e;(e=this.editorController)===null||e===void 0||e.unregisterSelectionManager(),Qe(this,ht).disconnectedCallback(),this.toggleAttribute("connected",!1)}reconnect(){this.removeInternalToolbar(),this.disconnectedCallback(),this.connectedCallback()}removeInternalToolbar(){var e;(e=this.internalToolbar)===null||e===void 0||e.remove(),this.internalToolbar=null}checkValidity(){return Qe(this,ht).checkValidity()}reportValidity(){return Qe(this,ht).reportValidity()}setCustomValidity(e){Qe(this,ht).setCustomValidity(e)}formDisabledCallback(e){this.inputElement&&(this.inputElement.disabled=e),this.toggleAttribute("contenteditable",!e)}formResetCallback(){this.reset()}reset(){this.value=this.defaultValue}}St(ai,"formAssociated","ElementInternals"in window),St(ai,"observedAttributes",["connected"]);const li={VERSION:D6,config:Fr,core:X4,models:bd,views:rw,controllers:Ew,observers:Aw,operations:Lw,elements:Object.freeze({__proto__:null,TrixEditorElement:ai,TrixToolbarElement:Sd}),filters:Object.freeze({__proto__:null,Filter:pd,attachmentGalleryFilter:fd})};Object.assign(li,bd),window.Trix=li,setTimeout((function(){customElements.get("trix-toolbar")||customElements.define("trix-toolbar",Sd),customElements.get("trix-editor")||customElements.define("trix-editor",ai)}),0);typeof li?.elements?.TrixEditorElement?.formAssociated<"u"&&(li.elements.TrixEditorElement.formAssociated=!1);var ql={};const Dw=["id","value"];function Rw(t,e,n,r,i,l){const a=J("trix-editor");return p(),C("div",{class:h(t.classes.container)},[d("input",{id:`editor-input-${t.id}`,value:t.value,type:"hidden"},null,8,Dw),De(a,V(t.options,{onTrixChange:t.handleChange,onTrixBlur:t.handleBlur,onTrixFileAccept:t.handleFileAccept,onTrixAttachmentAdd:t.handleAttachmentAdd,ref:"trix$"}),null,16,["onTrixChange","onTrixBlur","onTrixFileAccept","onTrixAttachmentAdd"])],2)}ql.render=Rw;ql.__file="themes/blank/templates/wrappers/EditorWrapper.vue";var _d={name:"EditorWrapper",render:ql.render,data(){return{merge:!0,defaultClasses:{container:"",container_hideBold:"vf-editor-hide-bold",container_hideItalic:"vf-editor-hide-italic",container_hideStrike:"vf-editor-hide-strike",container_hideLink:"vf-editor-hide-link",container_hideHeading:"vf-editor-hide-heading",container_hideQuote:"vf-editor-hide-quote",container_hideCode:"vf-editor-hide-code",container_hideBulletList:"vf-editor-hide-bullet-list",container_hideNumberList:"vf-editor-hide-number-list",container_hideDecreaseNesting:"vf-editor-hide-decrease-nesting",container_hideIncreaseNesting:"vf-editor-hide-increase-nesting",container_hideAttach:"vf-editor-hide-attach",container_hideUndo:"vf-editor-hide-undo",container_hideRedo:"vf-editor-hide-redo",$container:(t,{hideTools:e})=>[t.container].concat(e.map(n=>t[`container_hide${n.split("-").map(r=>r.charAt(0).toUpperCase()+r.slice(1)).join("")}`]))}}}},Fw=`@charset "UTF-8";

trix-toolbar {
  padding: 0.5rem 0.375rem;
  border-radius: 0.25rem;
  flex-wrap: wrap;
}

trix-toolbar .trix-button-row {
  display: block;
  margin-bottom: -0.25rem;
  flex-wrap: nowrap;
  justify-content: space-between;
  overflow-x: auto;
}

trix-toolbar .trix-button-group {
  display: inline;
}

trix-toolbar .trix-button-group-spacer {
  display: hidden;
  flex-grow: 1;
}

trix-toolbar .trix-button {
  position: relative;
  margin-bottom: 0.25rem;
  color: var(--vf-bg-icon);
  padding-left: 0.5rem;
  padding-right: 0.5rem;
  outline: none;
  border-radius: 0.25rem;
  white-space: nowrap;
  float: left;
  border: 0;
  background: none;
  cursor: pointer;
}

trix-toolbar .trix-button.trix-active {
  background-color: var(--vf-bg-selected);
  filter: brightness(0.9);
}

trix-toolbar .trix-button:not(.trix-active):hover {
  background-color: var(--vf-bg-selected);
}

trix-toolbar .trix-button--icon {
  width: 2.5rem;
  height: 1.5rem;
  font-size: 0.75rem;
  line-height: 1rem;
  text-indent: -9999px;
}

trix-toolbar .trix-button--icon::before {
  position: absolute;
  top: 0px;
  right: 0px;
  bottom: 0px;
  left: 0px;
  display: inline-block;
  content: "";
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  mask-position: center center;
  -webkit-mask-position: center center;
  mask-size: contain;
  -webkit-mask-size: contain;
  background-color: var(--vf-bg-icon);
  top: 0.125rem;
  bottom: 0.125rem;
  margin-top: 0.125rem;
  margin-bottom: 0.125rem;
}

trix-toolbar .trix-button--icon.trix-active::before {
  opacity: 1;
}

trix-toolbar .trix-button--icon:disabled::before {
  opacity: 0.4;
}

trix-toolbar .trix-button--icon-attach::before {
  mask-image: url("data:image/svg+xml,%3csvg viewBox='0 0 512 512' fill='currentColor' xmlns='http://www.w3.org/2000/svg'%3e%3cpath d='M67.508 468.467c-58.005-58.013-58.016-151.92 0-209.943l225.011-225.04c44.643-44.645 117.279-44.645 161.92 0 44.743 44.749 44.753 117.186 0 161.944l-189.465 189.49c-31.41 31.413-82.518 31.412-113.926.001-31.479-31.482-31.49-82.453 0-113.944L311.51 110.491c4.687-4.687 12.286-4.687 16.972 0l16.967 16.971c4.685 4.686 4.685 12.283 0 16.969L184.983 304.917c-12.724 12.724-12.73 33.328 0 46.058 12.696 12.697 33.356 12.699 46.054-.001l189.465-189.489c25.987-25.989 25.994-68.06.001-94.056-25.931-25.934-68.119-25.932-94.049 0l-225.01 225.039c-39.249 39.252-39.258 102.795-.001 142.057 39.285 39.29 102.885 39.287 142.162-.028A739446.174 739446.174 0 0 1 439.497 238.49c4.686-4.687 12.282-4.684 16.969.004l16.967 16.971c4.685 4.686 4.689 12.279.004 16.965a755654.128 755654.128 0 0 0-195.881 195.996c-58.034 58.092-152.004 58.093-210.048.041z'%3e%3c/path%3e%3c/svg%3e");
  -webkit-mask-image: url("data:image/svg+xml,%3csvg viewBox='0 0 512 512' fill='currentColor' xmlns='http://www.w3.org/2000/svg'%3e%3cpath d='M67.508 468.467c-58.005-58.013-58.016-151.92 0-209.943l225.011-225.04c44.643-44.645 117.279-44.645 161.92 0 44.743 44.749 44.753 117.186 0 161.944l-189.465 189.49c-31.41 31.413-82.518 31.412-113.926.001-31.479-31.482-31.49-82.453 0-113.944L311.51 110.491c4.687-4.687 12.286-4.687 16.972 0l16.967 16.971c4.685 4.686 4.685 12.283 0 16.969L184.983 304.917c-12.724 12.724-12.73 33.328 0 46.058 12.696 12.697 33.356 12.699 46.054-.001l189.465-189.489c25.987-25.989 25.994-68.06.001-94.056-25.931-25.934-68.119-25.932-94.049 0l-225.01 225.039c-39.249 39.252-39.258 102.795-.001 142.057 39.285 39.29 102.885 39.287 142.162-.028A739446.174 739446.174 0 0 1 439.497 238.49c4.686-4.687 12.282-4.684 16.969.004l16.967 16.971c4.685 4.686 4.689 12.279.004 16.965a755654.128 755654.128 0 0 0-195.881 195.996c-58.034 58.092-152.004 58.093-210.048.041z'%3e%3c/path%3e%3c/svg%3e");
}

trix-toolbar .trix-button--icon-bold::before {
  mask-image: url("data:image/svg+xml,%3csvg viewBox='0 0 384 512' fill='currentColor' xmlns='http://www.w3.org/2000/svg'%3e%3cpath d='M333.49 238a122 122 0 0 0 27-65.21C367.87 96.49 308 32 233.42 32H34a16 16 0 0 0-16 16v48a16 16 0 0 0 16 16h31.87v288H34a16 16 0 0 0-16 16v48a16 16 0 0 0 16 16h209.32c70.8 0 134.14-51.75 141-122.4 4.74-48.45-16.39-92.06-50.83-119.6zM145.66 112h87.76a48 48 0 0 1 0 96h-87.76zm87.76 288h-87.76V288h87.76a56 56 0 0 1 0 112z'%3e%3c/path%3e%3c/svg%3e");
  -webkit-mask-image: url("data:image/svg+xml,%3csvg viewBox='0 0 384 512' fill='currentColor' xmlns='http://www.w3.org/2000/svg'%3e%3cpath d='M333.49 238a122 122 0 0 0 27-65.21C367.87 96.49 308 32 233.42 32H34a16 16 0 0 0-16 16v48a16 16 0 0 0 16 16h31.87v288H34a16 16 0 0 0-16 16v48a16 16 0 0 0 16 16h209.32c70.8 0 134.14-51.75 141-122.4 4.74-48.45-16.39-92.06-50.83-119.6zM145.66 112h87.76a48 48 0 0 1 0 96h-87.76zm87.76 288h-87.76V288h87.76a56 56 0 0 1 0 112z'%3e%3c/path%3e%3c/svg%3e");
}

trix-toolbar .trix-button--icon-italic::before {
  mask-image: url("data:image/svg+xml,%3csvg viewBox='0 0 320 512' fill='currentColor' xmlns='http://www.w3.org/2000/svg'%3e%3cpath d='M320 48v32a16 16 0 0 1-16 16h-62.76l-80 320H208a16 16 0 0 1 16 16v32a16 16 0 0 1-16 16H16a16 16 0 0 1-16-16v-32a16 16 0 0 1 16-16h62.76l80-320H112a16 16 0 0 1-16-16V48a16 16 0 0 1 16-16h192a16 16 0 0 1 16 16z'%3e%3c/path%3e%3c/svg%3e");
  -webkit-mask-image: url("data:image/svg+xml,%3csvg viewBox='0 0 320 512' fill='currentColor' xmlns='http://www.w3.org/2000/svg'%3e%3cpath d='M320 48v32a16 16 0 0 1-16 16h-62.76l-80 320H208a16 16 0 0 1 16 16v32a16 16 0 0 1-16 16H16a16 16 0 0 1-16-16v-32a16 16 0 0 1 16-16h62.76l80-320H112a16 16 0 0 1-16-16V48a16 16 0 0 1 16-16h192a16 16 0 0 1 16 16z'%3e%3c/path%3e%3c/svg%3e");
}

trix-toolbar .trix-button--icon-link::before {
  mask-image: url("data:image/svg+xml,%3csvg viewBox='0 0 512 512' fill='currentColor' xmlns='http://www.w3.org/2000/svg'%3e%3cpath d='M314.222 197.78c51.091 51.091 54.377 132.287 9.75 187.16-6.242 7.73-2.784 3.865-84.94 86.02-54.696 54.696-143.266 54.745-197.99 0-54.711-54.69-54.734-143.255 0-197.99 32.773-32.773 51.835-51.899 63.409-63.457 7.463-7.452 20.331-2.354 20.486 8.192a173.31 173.31 0 0 0 4.746 37.828c.966 4.029-.272 8.269-3.202 11.198L80.632 312.57c-32.755 32.775-32.887 85.892 0 118.8 32.775 32.755 85.892 32.887 118.8 0l75.19-75.2c32.718-32.725 32.777-86.013 0-118.79a83.722 83.722 0 0 0-22.814-16.229c-4.623-2.233-7.182-7.25-6.561-12.346 1.356-11.122 6.296-21.885 14.815-30.405l4.375-4.375c3.625-3.626 9.177-4.594 13.76-2.294 12.999 6.524 25.187 15.211 36.025 26.049zM470.958 41.04c-54.724-54.745-143.294-54.696-197.99 0-82.156 82.156-78.698 78.29-84.94 86.02-44.627 54.873-41.341 136.069 9.75 187.16 10.838 10.838 23.026 19.525 36.025 26.049 4.582 2.3 10.134 1.331 13.76-2.294l4.375-4.375c8.52-8.519 13.459-19.283 14.815-30.405.621-5.096-1.938-10.113-6.561-12.346a83.706 83.706 0 0 1-22.814-16.229c-32.777-32.777-32.718-86.065 0-118.79l75.19-75.2c32.908-32.887 86.025-32.755 118.8 0 32.887 32.908 32.755 86.025 0 118.8l-45.848 45.84c-2.93 2.929-4.168 7.169-3.202 11.198a173.31 173.31 0 0 1 4.746 37.828c.155 10.546 13.023 15.644 20.486 8.192 11.574-11.558 30.636-30.684 63.409-63.457 54.733-54.735 54.71-143.3-.001-197.991z'%3e%3c/path%3e%3c/svg%3e");
  -webkit-mask-image: url("data:image/svg+xml,%3csvg viewBox='0 0 512 512' fill='currentColor' xmlns='http://www.w3.org/2000/svg'%3e%3cpath d='M314.222 197.78c51.091 51.091 54.377 132.287 9.75 187.16-6.242 7.73-2.784 3.865-84.94 86.02-54.696 54.696-143.266 54.745-197.99 0-54.711-54.69-54.734-143.255 0-197.99 32.773-32.773 51.835-51.899 63.409-63.457 7.463-7.452 20.331-2.354 20.486 8.192a173.31 173.31 0 0 0 4.746 37.828c.966 4.029-.272 8.269-3.202 11.198L80.632 312.57c-32.755 32.775-32.887 85.892 0 118.8 32.775 32.755 85.892 32.887 118.8 0l75.19-75.2c32.718-32.725 32.777-86.013 0-118.79a83.722 83.722 0 0 0-22.814-16.229c-4.623-2.233-7.182-7.25-6.561-12.346 1.356-11.122 6.296-21.885 14.815-30.405l4.375-4.375c3.625-3.626 9.177-4.594 13.76-2.294 12.999 6.524 25.187 15.211 36.025 26.049zM470.958 41.04c-54.724-54.745-143.294-54.696-197.99 0-82.156 82.156-78.698 78.29-84.94 86.02-44.627 54.873-41.341 136.069 9.75 187.16 10.838 10.838 23.026 19.525 36.025 26.049 4.582 2.3 10.134 1.331 13.76-2.294l4.375-4.375c8.52-8.519 13.459-19.283 14.815-30.405.621-5.096-1.938-10.113-6.561-12.346a83.706 83.706 0 0 1-22.814-16.229c-32.777-32.777-32.718-86.065 0-118.79l75.19-75.2c32.908-32.887 86.025-32.755 118.8 0 32.887 32.908 32.755 86.025 0 118.8l-45.848 45.84c-2.93 2.929-4.168 7.169-3.202 11.198a173.31 173.31 0 0 1 4.746 37.828c.155 10.546 13.023 15.644 20.486 8.192 11.574-11.558 30.636-30.684 63.409-63.457 54.733-54.735 54.71-143.3-.001-197.991z'%3e%3c/path%3e%3c/svg%3e");
}

trix-toolbar .trix-button--icon-strike::before {
  mask-image: url("data:image/svg+xml,%3csvg viewBox='0 0 512 512' fill='currentColor' xmlns='http://www.w3.org/2000/svg'%3e%3cpath d='M496 224H293.9l-87.17-26.83A43.55 43.55 0 0 1 219.55 112h66.79A49.89 49.89 0 0 1 331 139.58a16 16 0 0 0 21.46 7.15l42.94-21.47a16 16 0 0 0 7.16-21.46l-.53-1A128 128 0 0 0 287.51 32h-68a123.68 123.68 0 0 0-123 135.64c2 20.89 10.1 39.83 21.78 56.36H16a16 16 0 0 0-16 16v32a16 16 0 0 0 16 16h480a16 16 0 0 0 16-16v-32a16 16 0 0 0-16-16zm-180.24 96A43 43 0 0 1 336 356.45 43.59 43.59 0 0 1 292.45 400h-66.79A49.89 49.89 0 0 1 181 372.42a16 16 0 0 0-21.46-7.15l-42.94 21.47a16 16 0 0 0-7.16 21.46l.53 1A128 128 0 0 0 224.49 480h68a123.68 123.68 0 0 0 123-135.64 114.25 114.25 0 0 0-5.34-24.36z'%3e%3c/path%3e%3c/svg%3e");
  -webkit-mask-image: url("data:image/svg+xml,%3csvg viewBox='0 0 512 512' fill='currentColor' xmlns='http://www.w3.org/2000/svg'%3e%3cpath d='M496 224H293.9l-87.17-26.83A43.55 43.55 0 0 1 219.55 112h66.79A49.89 49.89 0 0 1 331 139.58a16 16 0 0 0 21.46 7.15l42.94-21.47a16 16 0 0 0 7.16-21.46l-.53-1A128 128 0 0 0 287.51 32h-68a123.68 123.68 0 0 0-123 135.64c2 20.89 10.1 39.83 21.78 56.36H16a16 16 0 0 0-16 16v32a16 16 0 0 0 16 16h480a16 16 0 0 0 16-16v-32a16 16 0 0 0-16-16zm-180.24 96A43 43 0 0 1 336 356.45 43.59 43.59 0 0 1 292.45 400h-66.79A49.89 49.89 0 0 1 181 372.42a16 16 0 0 0-21.46-7.15l-42.94 21.47a16 16 0 0 0-7.16 21.46l.53 1A128 128 0 0 0 224.49 480h68a123.68 123.68 0 0 0 123-135.64 114.25 114.25 0 0 0-5.34-24.36z'%3e%3c/path%3e%3c/svg%3e");
}

trix-toolbar .trix-button--icon-quote::before {
  mask-image: url("data:image/svg+xml,%3csvg viewBox='0 0 512 512' fill='currentColor' xmlns='http://www.w3.org/2000/svg'%3e%3cpath d='M464 32H336c-26.5 0-48 21.5-48 48v128c0 26.5 21.5 48 48 48h80v64c0 35.3-28.7 64-64 64h-8c-13.3 0-24 10.7-24 24v48c0 13.3 10.7 24 24 24h8c88.4 0 160-71.6 160-160V80c0-26.5-21.5-48-48-48zm-288 0H48C21.5 32 0 53.5 0 80v128c0 26.5 21.5 48 48 48h80v64c0 35.3-28.7 64-64 64h-8c-13.3 0-24 10.7-24 24v48c0 13.3 10.7 24 24 24h8c88.4 0 160-71.6 160-160V80c0-26.5-21.5-48-48-48z'%3e%3c/path%3e%3c/svg%3e");
  -webkit-mask-image: url("data:image/svg+xml,%3csvg viewBox='0 0 512 512' fill='currentColor' xmlns='http://www.w3.org/2000/svg'%3e%3cpath d='M464 32H336c-26.5 0-48 21.5-48 48v128c0 26.5 21.5 48 48 48h80v64c0 35.3-28.7 64-64 64h-8c-13.3 0-24 10.7-24 24v48c0 13.3 10.7 24 24 24h8c88.4 0 160-71.6 160-160V80c0-26.5-21.5-48-48-48zm-288 0H48C21.5 32 0 53.5 0 80v128c0 26.5 21.5 48 48 48h80v64c0 35.3-28.7 64-64 64h-8c-13.3 0-24 10.7-24 24v48c0 13.3 10.7 24 24 24h8c88.4 0 160-71.6 160-160V80c0-26.5-21.5-48-48-48z'%3e%3c/path%3e%3c/svg%3e");
  top: 0.25rem;
  bottom: 0.25rem;
  margin-top: 1px;
  margin-bottom: 1px;
}

trix-toolbar .trix-button--icon-heading-1::before {
  mask-image: url("data:image/svg+xml,%3csvg viewBox='0 0 512 512' fill='currentColor' xmlns='http://www.w3.org/2000/svg'%3e%3cpath d='M448 96v320h32a16 16 0 0 1 16 16v32a16 16 0 0 1-16 16H320a16 16 0 0 1-16-16v-32a16 16 0 0 1 16-16h32V288H160v128h32a16 16 0 0 1 16 16v32a16 16 0 0 1-16 16H32a16 16 0 0 1-16-16v-32a16 16 0 0 1 16-16h32V96H32a16 16 0 0 1-16-16V48a16 16 0 0 1 16-16h160a16 16 0 0 1 16 16v32a16 16 0 0 1-16 16h-32v128h192V96h-32a16 16 0 0 1-16-16V48a16 16 0 0 1 16-16h160a16 16 0 0 1 16 16v32a16 16 0 0 1-16 16z'%3e%3c/path%3e%3c/svg%3e");
  -webkit-mask-image: url("data:image/svg+xml,%3csvg viewBox='0 0 512 512' fill='currentColor' xmlns='http://www.w3.org/2000/svg'%3e%3cpath d='M448 96v320h32a16 16 0 0 1 16 16v32a16 16 0 0 1-16 16H320a16 16 0 0 1-16-16v-32a16 16 0 0 1 16-16h32V288H160v128h32a16 16 0 0 1 16 16v32a16 16 0 0 1-16 16H32a16 16 0 0 1-16-16v-32a16 16 0 0 1 16-16h32V96H32a16 16 0 0 1-16-16V48a16 16 0 0 1 16-16h160a16 16 0 0 1 16 16v32a16 16 0 0 1-16 16h-32v128h192V96h-32a16 16 0 0 1-16-16V48a16 16 0 0 1 16-16h160a16 16 0 0 1 16 16v32a16 16 0 0 1-16 16z'%3e%3c/path%3e%3c/svg%3e");
}

trix-toolbar .trix-button--icon-code::before {
  mask-image: url("data:image/svg+xml,%3csvg viewBox='0 0 640 304' fill='currentColor' xmlns='http://www.w3.org/2000/svg'%3e%3cpath d='M165.9%2c291.3 L209.4%2c244.9 C214%2c240 213.7%2c232.2 208.6%2c227.7 L118%2c148 L208.6%2c68.3 C213.7%2c63.8 214.1%2c56 209.4%2c51.1 L165.9%2c4.7 C161.4%2c-0.1 153.8%2c-0.4 148.9%2c4.2 L4.8%2c139.2 C-0.3%2c143.9 -0.3%2c152 4.8%2c156.7 L148.9%2c291.8 C153.8%2c296.4 161.4%2c296.2 165.9%2c291.3 Z M493.1%2c291.9 L637.2%2c156.8 C642.3%2c152.1 642.3%2c144 637.2%2c139.3 L493.1%2c4.1 C488.3%2c-0.4 480.7%2c-0.2 476.1%2c4.6 L432.6%2c51 C428%2c55.9 428.3%2c63.7 433.4%2c68.2 L524%2c148 L433.4%2c227.7 C428.3%2c232.2 427.9%2c240 432.6%2c244.9 L476.1%2c291.3 C480.6%2c296.2 488.2%2c296.4 493.1%2c291.9 Z'%3e%3c/path%3e%3c/svg%3e");
  -webkit-mask-image: url("data:image/svg+xml,%3csvg viewBox='0 0 640 304' fill='currentColor' xmlns='http://www.w3.org/2000/svg'%3e%3cpath d='M165.9%2c291.3 L209.4%2c244.9 C214%2c240 213.7%2c232.2 208.6%2c227.7 L118%2c148 L208.6%2c68.3 C213.7%2c63.8 214.1%2c56 209.4%2c51.1 L165.9%2c4.7 C161.4%2c-0.1 153.8%2c-0.4 148.9%2c4.2 L4.8%2c139.2 C-0.3%2c143.9 -0.3%2c152 4.8%2c156.7 L148.9%2c291.8 C153.8%2c296.4 161.4%2c296.2 165.9%2c291.3 Z M493.1%2c291.9 L637.2%2c156.8 C642.3%2c152.1 642.3%2c144 637.2%2c139.3 L493.1%2c4.1 C488.3%2c-0.4 480.7%2c-0.2 476.1%2c4.6 L432.6%2c51 C428%2c55.9 428.3%2c63.7 433.4%2c68.2 L524%2c148 L433.4%2c227.7 C428.3%2c232.2 427.9%2c240 432.6%2c244.9 L476.1%2c291.3 C480.6%2c296.2 488.2%2c296.4 493.1%2c291.9 Z'%3e%3c/path%3e%3c/svg%3e");
  top: 0.375rem;
  bottom: 0.375rem;
  margin-top: 1px;
  margin-bottom: 1px;
}

trix-toolbar .trix-button--icon-bullet-list::before {
  mask-image: url("data:image/svg+xml,%3csvg viewBox='0 0 512 512' fill='currentColor' xmlns='http://www.w3.org/2000/svg'%3e%3cpath d='M48 48a48 48 0 1 0 48 48 48 48 0 0 0-48-48zm0 160a48 48 0 1 0 48 48 48 48 0 0 0-48-48zm0 160a48 48 0 1 0 48 48 48 48 0 0 0-48-48zm448 16H176a16 16 0 0 0-16 16v32a16 16 0 0 0 16 16h320a16 16 0 0 0 16-16v-32a16 16 0 0 0-16-16zm0-320H176a16 16 0 0 0-16 16v32a16 16 0 0 0 16 16h320a16 16 0 0 0 16-16V80a16 16 0 0 0-16-16zm0 160H176a16 16 0 0 0-16 16v32a16 16 0 0 0 16 16h320a16 16 0 0 0 16-16v-32a16 16 0 0 0-16-16z'%3e%3c/path%3e%3c/svg%3e");
  -webkit-mask-image: url("data:image/svg+xml,%3csvg viewBox='0 0 512 512' fill='currentColor' xmlns='http://www.w3.org/2000/svg'%3e%3cpath d='M48 48a48 48 0 1 0 48 48 48 48 0 0 0-48-48zm0 160a48 48 0 1 0 48 48 48 48 0 0 0-48-48zm0 160a48 48 0 1 0 48 48 48 48 0 0 0-48-48zm448 16H176a16 16 0 0 0-16 16v32a16 16 0 0 0 16 16h320a16 16 0 0 0 16-16v-32a16 16 0 0 0-16-16zm0-320H176a16 16 0 0 0-16 16v32a16 16 0 0 0 16 16h320a16 16 0 0 0 16-16V80a16 16 0 0 0-16-16zm0 160H176a16 16 0 0 0-16 16v32a16 16 0 0 0 16 16h320a16 16 0 0 0 16-16v-32a16 16 0 0 0-16-16z'%3e%3c/path%3e%3c/svg%3e");
  margin-top: 1px;
  margin-bottom: 1px;
}

trix-toolbar .trix-button--icon-number-list::before {
  mask-image: url("data:image/svg+xml,%3csvg viewBox='0 0 512 512' fill='currentColor' xmlns='http://www.w3.org/2000/svg'%3e%3cpath d='M61.77 401l17.5-20.15a19.92 19.92 0 0 0 5.07-14.19v-3.31C84.34 356 80.5 352 73 352H16a8 8 0 0 0-8 8v16a8 8 0 0 0 8 8h22.83a157.41 157.41 0 0 0-11 12.31l-5.61 7c-4 5.07-5.25 10.13-2.8 14.88l1.05 1.93c3 5.76 6.29 7.88 12.25 7.88h4.73c10.33 0 15.94 2.44 15.94 9.09 0 4.72-4.2 8.22-14.36 8.22a41.54 41.54 0 0 1-15.47-3.12c-6.49-3.88-11.74-3.5-15.6 3.12l-5.59 9.31c-3.72 6.13-3.19 11.72 2.63 15.94 7.71 4.69 20.38 9.44 37 9.44 34.16 0 48.5-22.75 48.5-44.12-.03-14.38-9.12-29.76-28.73-34.88zM496 224H176a16 16 0 0 0-16 16v32a16 16 0 0 0 16 16h320a16 16 0 0 0 16-16v-32a16 16 0 0 0-16-16zm0-160H176a16 16 0 0 0-16 16v32a16 16 0 0 0 16 16h320a16 16 0 0 0 16-16V80a16 16 0 0 0-16-16zm0 320H176a16 16 0 0 0-16 16v32a16 16 0 0 0 16 16h320a16 16 0 0 0 16-16v-32a16 16 0 0 0-16-16zM16 160h64a8 8 0 0 0 8-8v-16a8 8 0 0 0-8-8H64V40a8 8 0 0 0-8-8H32a8 8 0 0 0-7.14 4.42l-8 16A8 8 0 0 0 24 64h8v64H16a8 8 0 0 0-8 8v16a8 8 0 0 0 8 8zm-3.91 160H80a8 8 0 0 0 8-8v-16a8 8 0 0 0-8-8H41.32c3.29-10.29 48.34-18.68 48.34-56.44 0-29.06-25-39.56-44.47-39.56-21.36 0-33.8 10-40.46 18.75-4.37 5.59-3 10.84 2.8 15.37l8.58 6.88c5.61 4.56 11 2.47 16.12-2.44a13.44 13.44 0 0 1 9.46-3.84c3.33 0 9.28 1.56 9.28 8.75C51 248.19 0 257.31 0 304.59v4C0 316 5.08 320 12.09 320z'%3e%3c/path%3e%3c/svg%3e");
  -webkit-mask-image: url("data:image/svg+xml,%3csvg viewBox='0 0 512 512' fill='currentColor' xmlns='http://www.w3.org/2000/svg'%3e%3cpath d='M61.77 401l17.5-20.15a19.92 19.92 0 0 0 5.07-14.19v-3.31C84.34 356 80.5 352 73 352H16a8 8 0 0 0-8 8v16a8 8 0 0 0 8 8h22.83a157.41 157.41 0 0 0-11 12.31l-5.61 7c-4 5.07-5.25 10.13-2.8 14.88l1.05 1.93c3 5.76 6.29 7.88 12.25 7.88h4.73c10.33 0 15.94 2.44 15.94 9.09 0 4.72-4.2 8.22-14.36 8.22a41.54 41.54 0 0 1-15.47-3.12c-6.49-3.88-11.74-3.5-15.6 3.12l-5.59 9.31c-3.72 6.13-3.19 11.72 2.63 15.94 7.71 4.69 20.38 9.44 37 9.44 34.16 0 48.5-22.75 48.5-44.12-.03-14.38-9.12-29.76-28.73-34.88zM496 224H176a16 16 0 0 0-16 16v32a16 16 0 0 0 16 16h320a16 16 0 0 0 16-16v-32a16 16 0 0 0-16-16zm0-160H176a16 16 0 0 0-16 16v32a16 16 0 0 0 16 16h320a16 16 0 0 0 16-16V80a16 16 0 0 0-16-16zm0 320H176a16 16 0 0 0-16 16v32a16 16 0 0 0 16 16h320a16 16 0 0 0 16-16v-32a16 16 0 0 0-16-16zM16 160h64a8 8 0 0 0 8-8v-16a8 8 0 0 0-8-8H64V40a8 8 0 0 0-8-8H32a8 8 0 0 0-7.14 4.42l-8 16A8 8 0 0 0 24 64h8v64H16a8 8 0 0 0-8 8v16a8 8 0 0 0 8 8zm-3.91 160H80a8 8 0 0 0 8-8v-16a8 8 0 0 0-8-8H41.32c3.29-10.29 48.34-18.68 48.34-56.44 0-29.06-25-39.56-44.47-39.56-21.36 0-33.8 10-40.46 18.75-4.37 5.59-3 10.84 2.8 15.37l8.58 6.88c5.61 4.56 11 2.47 16.12-2.44a13.44 13.44 0 0 1 9.46-3.84c3.33 0 9.28 1.56 9.28 8.75C51 248.19 0 257.31 0 304.59v4C0 316 5.08 320 12.09 320z'%3e%3c/path%3e%3c/svg%3e");
  margin-top: 1px;
  margin-bottom: 1px;
}

trix-toolbar .trix-button--icon-undo::before {
  mask-image: url("data:image/svg+xml,%3csvg viewBox='0 0 512 512' fill='currentColor' xmlns='http://www.w3.org/2000/svg'%3e%3cpath d='M255.545 8c-66.269.119-126.438 26.233-170.86 68.685L48.971 40.971C33.851 25.851 8 36.559 8 57.941V192c0 13.255 10.745 24 24 24h134.059c21.382 0 32.09-25.851 16.971-40.971l-41.75-41.75c30.864-28.899 70.801-44.907 113.23-45.273 92.398-.798 170.283 73.977 169.484 169.442C423.236 348.009 349.816 424 256 424c-41.127 0-79.997-14.678-110.63-41.556-4.743-4.161-11.906-3.908-16.368.553L89.34 422.659c-4.872 4.872-4.631 12.815.482 17.433C133.798 479.813 192.074 504 256 504c136.966 0 247.999-111.033 248-247.998C504.001 119.193 392.354 7.755 255.545 8z'%3e%3c/path%3e%3c/svg%3e");
  -webkit-mask-image: url("data:image/svg+xml,%3csvg viewBox='0 0 512 512' fill='currentColor' xmlns='http://www.w3.org/2000/svg'%3e%3cpath d='M255.545 8c-66.269.119-126.438 26.233-170.86 68.685L48.971 40.971C33.851 25.851 8 36.559 8 57.941V192c0 13.255 10.745 24 24 24h134.059c21.382 0 32.09-25.851 16.971-40.971l-41.75-41.75c30.864-28.899 70.801-44.907 113.23-45.273 92.398-.798 170.283 73.977 169.484 169.442C423.236 348.009 349.816 424 256 424c-41.127 0-79.997-14.678-110.63-41.556-4.743-4.161-11.906-3.908-16.368.553L89.34 422.659c-4.872 4.872-4.631 12.815.482 17.433C133.798 479.813 192.074 504 256 504c136.966 0 247.999-111.033 248-247.998C504.001 119.193 392.354 7.755 255.545 8z'%3e%3c/path%3e%3c/svg%3e");
  top: 0.25rem;
  bottom: 0.25rem;
}

trix-toolbar .trix-button--icon-redo::before {
  mask-image: url("data:image/svg+xml,%3csvg viewBox='0 0 512 512' fill='currentColor' xmlns='http://www.w3.org/2000/svg'%3e%3cpath d='M256.455 8c66.269.119 126.437 26.233 170.859 68.685l35.715-35.715C478.149 25.851 504 36.559 504 57.941V192c0 13.255-10.745 24-24 24H345.941c-21.382 0-32.09-25.851-16.971-40.971l41.75-41.75c-30.864-28.899-70.801-44.907-113.23-45.273-92.398-.798-170.283 73.977-169.484 169.442C88.764 348.009 162.184 424 256 424c41.127 0 79.997-14.678 110.629-41.556 4.743-4.161 11.906-3.908 16.368.553l39.662 39.662c4.872 4.872 4.631 12.815-.482 17.433C378.202 479.813 319.926 504 256 504 119.034 504 8.001 392.967 8 256.002 7.999 119.193 119.646 7.755 256.455 8z'%3e%3c/path%3e%3c/svg%3e");
  -webkit-mask-image: url("data:image/svg+xml,%3csvg viewBox='0 0 512 512' fill='currentColor' xmlns='http://www.w3.org/2000/svg'%3e%3cpath d='M256.455 8c66.269.119 126.437 26.233 170.859 68.685l35.715-35.715C478.149 25.851 504 36.559 504 57.941V192c0 13.255-10.745 24-24 24H345.941c-21.382 0-32.09-25.851-16.971-40.971l41.75-41.75c-30.864-28.899-70.801-44.907-113.23-45.273-92.398-.798-170.283 73.977-169.484 169.442C88.764 348.009 162.184 424 256 424c41.127 0 79.997-14.678 110.629-41.556 4.743-4.161 11.906-3.908 16.368.553l39.662 39.662c4.872 4.872 4.631 12.815-.482 17.433C378.202 479.813 319.926 504 256 504 119.034 504 8.001 392.967 8 256.002 7.999 119.193 119.646 7.755 256.455 8z'%3e%3c/path%3e%3c/svg%3e");
  top: 0.25rem;
  bottom: 0.25rem;
}

trix-toolbar .trix-button--icon-decrease-nesting-level::before {
  mask-image: url("data:image/svg+xml,%3csvg viewBox='0 0 448 512' fill='currentColor' xmlns='http://www.w3.org/2000/svg'%3e%3cpath d='M100.682584%2c116.695158 L4.68258422%2c212.695158 C-1.56086141%2c218.942698 -1.56086141%2c229.067619 4.68258422%2c235.315158 L100.682584%2c331.315158 C110.722584%2c341.335158 127.992584%2c334.215158 127.992584%2c319.995158 L127.992584%2c127.995158 C127.992584%2c113.685158 110.662584%2c106.695158 100.682584%2c116.695158 Z M432%2c384 L16%2c384 C7.163444%2c384 1.082166e-15%2c391.163444 0%2c400 L0%2c432 C1.082166e-15%2c440.836556 7.163444%2c448 16%2c448 L432%2c448 C440.836556%2c448 448%2c440.836556 448%2c432 L448%2c400 C448%2c391.163444 440.836556%2c384 432%2c384 Z M204.83%2c256 C201.426459%2c255.997344 198.161555%2c257.348219 195.754887%2c259.754887 C193.348219%2c262.161555 191.997344%2c265.426459 192%2c268.83 L192%2c307.17 C191.997344%2c310.573541 193.348219%2c313.838445 195.754887%2c316.245113 C198.161555%2c318.651781 201.426459%2c320.002656 204.83%2c320 L435.17%2c320 C438.573541%2c320.002656 441.838445%2c318.651781 444.245113%2c316.245113 C446.651781%2c313.838445 448.002656%2c310.573541 448%2c307.17 L448%2c268.83 C448.002656%2c265.426459 446.651781%2c262.161555 444.245113%2c259.754887 C441.838445%2c257.348219 438.573541%2c255.997344 435.17%2c256 L204.83%2c256 Z M435.17%2c128 L204.83%2c128 C201.426459%2c127.997344 198.161555%2c129.348219 195.754887%2c131.754887 C193.348219%2c134.161555 191.997344%2c137.426459 192%2c140.83 L192%2c179.17 C191.997344%2c182.573541 193.348219%2c185.838445 195.754887%2c188.245113 C198.161555%2c190.651781 201.426459%2c192.002656 204.83%2c192 L435.17%2c192 C438.573541%2c192.002656 441.838445%2c190.651781 444.245113%2c188.245113 C446.651781%2c185.838445 448.002656%2c182.573541 448%2c179.17 L448%2c140.83 C448.002656%2c137.426459 446.651781%2c134.161555 444.245113%2c131.754887 C441.838445%2c129.348219 438.573541%2c127.997344 435.17%2c128 Z M432%2c0 L16%2c0 C7.163444%2c0 1.082166e-15%2c7.163444 0%2c16 L0%2c48 C1.082166e-15%2c56.836556 7.163444%2c64 16%2c64 L432%2c64 C440.836556%2c64 448%2c56.836556 448%2c48 L448%2c16 C448%2c7.163444 440.836556%2c0 432%2c0 Z'%3e%3c/path%3e%3c/svg%3e");
  -webkit-mask-image: url("data:image/svg+xml,%3csvg viewBox='0 0 448 512' fill='currentColor' xmlns='http://www.w3.org/2000/svg'%3e%3cpath d='M100.682584%2c116.695158 L4.68258422%2c212.695158 C-1.56086141%2c218.942698 -1.56086141%2c229.067619 4.68258422%2c235.315158 L100.682584%2c331.315158 C110.722584%2c341.335158 127.992584%2c334.215158 127.992584%2c319.995158 L127.992584%2c127.995158 C127.992584%2c113.685158 110.662584%2c106.695158 100.682584%2c116.695158 Z M432%2c384 L16%2c384 C7.163444%2c384 1.082166e-15%2c391.163444 0%2c400 L0%2c432 C1.082166e-15%2c440.836556 7.163444%2c448 16%2c448 L432%2c448 C440.836556%2c448 448%2c440.836556 448%2c432 L448%2c400 C448%2c391.163444 440.836556%2c384 432%2c384 Z M204.83%2c256 C201.426459%2c255.997344 198.161555%2c257.348219 195.754887%2c259.754887 C193.348219%2c262.161555 191.997344%2c265.426459 192%2c268.83 L192%2c307.17 C191.997344%2c310.573541 193.348219%2c313.838445 195.754887%2c316.245113 C198.161555%2c318.651781 201.426459%2c320.002656 204.83%2c320 L435.17%2c320 C438.573541%2c320.002656 441.838445%2c318.651781 444.245113%2c316.245113 C446.651781%2c313.838445 448.002656%2c310.573541 448%2c307.17 L448%2c268.83 C448.002656%2c265.426459 446.651781%2c262.161555 444.245113%2c259.754887 C441.838445%2c257.348219 438.573541%2c255.997344 435.17%2c256 L204.83%2c256 Z M435.17%2c128 L204.83%2c128 C201.426459%2c127.997344 198.161555%2c129.348219 195.754887%2c131.754887 C193.348219%2c134.161555 191.997344%2c137.426459 192%2c140.83 L192%2c179.17 C191.997344%2c182.573541 193.348219%2c185.838445 195.754887%2c188.245113 C198.161555%2c190.651781 201.426459%2c192.002656 204.83%2c192 L435.17%2c192 C438.573541%2c192.002656 441.838445%2c190.651781 444.245113%2c188.245113 C446.651781%2c185.838445 448.002656%2c182.573541 448%2c179.17 L448%2c140.83 C448.002656%2c137.426459 446.651781%2c134.161555 444.245113%2c131.754887 C441.838445%2c129.348219 438.573541%2c127.997344 435.17%2c128 Z M432%2c0 L16%2c0 C7.163444%2c0 1.082166e-15%2c7.163444 0%2c16 L0%2c48 C1.082166e-15%2c56.836556 7.163444%2c64 16%2c64 L432%2c64 C440.836556%2c64 448%2c56.836556 448%2c48 L448%2c16 C448%2c7.163444 440.836556%2c0 432%2c0 Z'%3e%3c/path%3e%3c/svg%3e");
  margin-bottom: 0;
}

trix-toolbar .trix-button--icon-increase-nesting-level::before {
  mask-image: url("data:image/svg+xml,%3csvg viewBox='0 0 448 512' fill='currentColor' xmlns='http://www.w3.org/2000/svg'%3e%3cpath d='M27.31 363.3l96-96a16 16 0 0 0 0-22.62l-96-96C17.27 138.66 0 145.78 0 160v192c0 14.31 17.33 21.3 27.31 11.3zM432 416H16a16 16 0 0 0-16 16v32a16 16 0 0 0 16 16h416a16 16 0 0 0 16-16v-32a16 16 0 0 0-16-16zm3.17-128H204.83A12.82 12.82 0 0 0 192 300.83v38.34A12.82 12.82 0 0 0 204.83 352h230.34A12.82 12.82 0 0 0 448 339.17v-38.34A12.82 12.82 0 0 0 435.17 288zm0-128H204.83A12.82 12.82 0 0 0 192 172.83v38.34A12.82 12.82 0 0 0 204.83 224h230.34A12.82 12.82 0 0 0 448 211.17v-38.34A12.82 12.82 0 0 0 435.17 160zM432 32H16A16 16 0 0 0 0 48v32a16 16 0 0 0 16 16h416a16 16 0 0 0 16-16V48a16 16 0 0 0-16-16z'%3e%3c/path%3e%3c/svg%3e");
  -webkit-mask-image: url("data:image/svg+xml,%3csvg viewBox='0 0 448 512' fill='currentColor' xmlns='http://www.w3.org/2000/svg'%3e%3cpath d='M27.31 363.3l96-96a16 16 0 0 0 0-22.62l-96-96C17.27 138.66 0 145.78 0 160v192c0 14.31 17.33 21.3 27.31 11.3zM432 416H16a16 16 0 0 0-16 16v32a16 16 0 0 0 16 16h416a16 16 0 0 0 16-16v-32a16 16 0 0 0-16-16zm3.17-128H204.83A12.82 12.82 0 0 0 192 300.83v38.34A12.82 12.82 0 0 0 204.83 352h230.34A12.82 12.82 0 0 0 448 339.17v-38.34A12.82 12.82 0 0 0 435.17 288zm0-128H204.83A12.82 12.82 0 0 0 192 172.83v38.34A12.82 12.82 0 0 0 204.83 224h230.34A12.82 12.82 0 0 0 448 211.17v-38.34A12.82 12.82 0 0 0 435.17 160zM432 32H16A16 16 0 0 0 0 48v32a16 16 0 0 0 16 16h416a16 16 0 0 0 16-16V48a16 16 0 0 0-16-16z'%3e%3c/path%3e%3c/svg%3e");
  margin-top: 1px;
  margin-bottom: 1px;
}

trix-toolbar .trix-dialogs {
  position: relative;
}

trix-toolbar .trix-dialog {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  font-size: 0.75rem;
  line-height: 1rem;
  padding: 1rem 0.625rem;
  background-color: var(--vf-bg-input);
  box-shadow: 0 0px 15px 0px rgba(0, 0, 0, 0.3);
  margin-top: 0.375rem;
  border-radius: 0.25rem;
  z-index: 2;
}

trix-toolbar .trix-input--dialog {
  padding: 0.375rem 0.75rem;
  border: 1px solid var(--vf-border-color-input);
  border-radius: 0.25rem;
  margin-right: 0.5rem;
  font-size: 0.75rem;
  line-height: 1rem;
  background: var(--vf-bg-input);
  color: var(--vf-color-input);
}

trix-toolbar .trix-input--dialog:focus {
  outline: var(--vf-ring-width) solid var(--vf-ring-color) !important;
}

trix-toolbar .trix-input--dialog.validate:invalid {
  border-color: var(--vf-color-danger);
}

trix-toolbar .trix-button--dialog {
  padding: 0.5rem;
  border-left-width: 1px;
  border-color: var(--vf-border-color-input);
  background-color: transparent;
  border-radius: 0;
}

trix-toolbar .trix-button--dialog:not(.trix-active):hover {
  background-color: transparent;
}

trix-toolbar .trix-button--dialog:first-of-type {
  border: 0;
}

trix-toolbar .trix-dialog--link {
  max-width: 36rem;
}

trix-toolbar .trix-dialog__link-fields {
  display: flex;
  align-items: center;
  width: 100%;
}

trix-toolbar .trix-dialog__link-fields .trix-input {
  flex: 1 1 0%;
}

trix-toolbar .trix-dialog__link-fields .trix-button-group {
  flex-grow: 0;
  flex-shrink: 0;
}

trix-editor {
  padding-left: var(--vf-px-input);
  padding-right: var(--vf-px-input);
  padding-bottom: var(--vf-py-input);
  border-radius: var(--vf-radius-large);
  outline: none;
  min-height: 6rem;
}

trix-editor:empty:not(:focus)::before {
  color: var(--vf-color-placeholder);
}

trix-editor [data-trix-mutable]:not(.attachment__caption-editor) {
  -webkit-user-select: none;
     -moz-user-select: none;
          user-select: none;
}

trix-editor [data-trix-mutable]::-moz-selection,
trix-editor [data-trix-cursor-target]::-moz-selection,
trix-editor [data-trix-mutable] ::-moz-selection {
  background-image: none;
}

trix-editor [data-trix-mutable]::-moz-selection, trix-editor [data-trix-cursor-target]::-moz-selection, trix-editor [data-trix-mutable] ::-moz-selection {
  background-image: none;
}

trix-editor [data-trix-mutable]::selection,
trix-editor [data-trix-cursor-target]::selection,
trix-editor [data-trix-mutable] ::selection {
  background-image: none;
}

trix-editor [data-trix-mutable].attachment__caption-editor:focus::-moz-selection {
  background: highlight;
}

trix-editor [data-trix-mutable].attachment__caption-editor:focus::selection {
  background: highlight;
}

trix-editor [data-trix-mutable].attachment.attachment--file {
  background-color: var(--vf-bg-selected);
}

trix-editor [data-trix-mutable].attachment img {
  box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06);
}

trix-editor .attachment {
  position: relative;
}

trix-editor .attachment:hover {
  cursor: default;
}

trix-editor .attachment--preview .attachment__caption:hover {
  cursor: text;
}

trix-editor .attachment__progress {
  position: absolute;
  z-index: 1;
  height: 1.25rem;
  top: 50%;
  left: 0;
  transform: translateY(-0.625rem);
  width: 100%;
  padding-left: 1rem;
  padding-right: 1rem;
  opacity: 0.2;
  transition-property: opacity;
  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
  transition-duration: 150ms;
}

trix-editor .attachment__progress[value="100"] {
  opacity: 0;
}

trix-editor .attachment__caption-editor {
  display: inline-block;
  padding: 0;
  margin: 0;
  font-size: 0.875rem;
  line-height: 1.25rem;
  text-align: center;
  vertical-align: top;
  width: 100%;
  border-width: 0;
  -webkit-appearance: none;
     -moz-appearance: none;
          appearance: none;
  outline: 0;
  background: var(--vf-bg-input);
  color: var(--vf-color-input);
  font-family: inherit;
}

trix-editor .attachment__toolbar {
  position: absolute;
  top: 0;
  left: 0;
  z-index: 1;
  transform: translateY(-50%);
  text-align: center;
  width: 100%;
}

trix-editor .trix-button-group {
  display: inline-flex;
}

trix-editor .trix-button {
  position: relative;
  padding-top: 0;
  padding-bottom: 0;
  padding-left: 0.75rem;
  padding-right: 0.75rem;
  margin: 0;
  background-color: transparent;
  color: var(--vf-bg-icon);
  font-size: 0.875rem;
  line-height: 1.25rem;
  white-space: nowrap;
  border-radius: 0;
  border-width: 0;
  outline: 0;
  cursor: pointer;
}

trix-editor .trix-button--remove {
  display: inline-block;
  overflow-x: hidden;
  padding: 0;
  background-color: var(--vf-bg-input);
  line-height: 1.75rem;
  border-color: var(--vf-color-selected);
  border-radius: 9999px;
  border-width: 1px;
  border-style: solid;
  outline: 0;
  text-indent: -9999px;
  width: 24px;
  height: 24px;
}

trix-editor .trix-button--remove:hover {
  background-color: var(--vf-bg-selected);
}

trix-editor .trix-button--remove::before {
  content: "";
  display: inline-block;
  position: absolute;
  top: 0.125rem;
  right: 0.125rem;
  bottom: 0.125rem;
  left: 0.125rem;
  background-color: var(--vf-color-input);
  opacity: 0.7;
  background-position: center;
  background-repeat: no-repeat;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  mask-position: center center;
  -webkit-mask-position: center center;
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-image: url("data:image/svg+xml,%3csvg viewBox='0 0 320 512' fill='currentColor' xmlns='http://www.w3.org/2000/svg'%3e%3cpath d='M193.94 256L296.5 153.44l21.15-21.15c3.12-3.12 3.12-8.19 0-11.31l-22.63-22.63c-3.12-3.12-8.19-3.12-11.31 0L160 222.06 36.29 98.34c-3.12-3.12-8.19-3.12-11.31 0L2.34 120.97c-3.12 3.12-3.12 8.19 0 11.31L126.06 256 2.34 379.71c-3.12 3.12-3.12 8.19 0 11.31l22.63 22.63c3.12 3.12 8.19 3.12 11.31 0L160 289.94 262.56 392.5l21.15 21.15c3.12 3.12 8.19 3.12 11.31 0l22.63-22.63c3.12-3.12 3.12-8.19 0-11.31L193.94 256z'%3e%3c/path%3e%3c/svg%3e");
  -webkit-mask-image: url("data:image/svg+xml,%3csvg viewBox='0 0 320 512' fill='currentColor' xmlns='http://www.w3.org/2000/svg'%3e%3cpath d='M193.94 256L296.5 153.44l21.15-21.15c3.12-3.12 3.12-8.19 0-11.31l-22.63-22.63c-3.12-3.12-8.19-3.12-11.31 0L160 222.06 36.29 98.34c-3.12-3.12-8.19-3.12-11.31 0L2.34 120.97c-3.12 3.12-3.12 8.19 0 11.31L126.06 256 2.34 379.71c-3.12 3.12-3.12 8.19 0 11.31l22.63 22.63c3.12 3.12 8.19 3.12 11.31 0L160 289.94 262.56 392.5l21.15 21.15c3.12 3.12 8.19 3.12 11.31 0l22.63-22.63c3.12-3.12 3.12-8.19 0-11.31L193.94 256z'%3e%3c/path%3e%3c/svg%3e");
}

trix-editor .attachment__metadata-container {
  position: relative;
}

trix-editor .attachment__metadata {
  position: absolute;
  top: 1rem;
  left: 50%;
  padding-top: 0.125rem;
  padding-bottom: 0.125rem;
  padding-left: 0.5rem;
  padding-right: 0.5rem;
  background-color: #000000;
  opacity: 0.7;
  transform: translateX(-50%);
  color: #ffffff;
  font-size: 0.875rem;
  line-height: 1.25rem;
  border-radius: 0.25rem;
}

trix-editor .attachment__metadata .attachment__name {
  display: inline-block;
  overflow: hidden;
  text-overflow: ellipsis;
  vertical-align: bottom;
  white-space: nowrap;
  max-width: 100%;
}

trix-editor .attachment__metadata .attachment__size {
  margin-left: 0.25rem;
  white-space: nowrap;
}

.trix-content h1,
trix-editor h1 {
  font-size: 1.875rem;
  line-height: 2.25rem;
  font-weight: 700;
  line-height: 1.25;
}

.trix-content a,
trix-editor a {
  color: var(--vf-primary);
}

.trix-content ul,
trix-editor ul {
  padding-left: 2.5rem;
  list-style-type: disc;
}

.trix-content [dir=rtl] ul,
trix-editor [dir=rtl] ul {
  padding-right: 2.5rem;
  list-style-type: disc;
}

.trix-content ol,
trix-editor ol {
  padding-left: 2.5rem;
  list-style-type: decimal;
}

.trix-content [dir=rtl] ol,
trix-editor [dir=rtl] ol {
  padding-right: 2.5rem;
  list-style-type: decimal;
}

.trix-content blockquote,
trix-editor blockquote {
  padding-left: 0.625rem;
  border-left-width: 4px;
  border-color: var(--vf-gray-300);
  border-left-style: solid;
  margin: 0;
}

.trix-content [dir=rtl] blockquote,
.trix-content blockquote[dir=rtl],
trix-editor [dir=rtl] blockquote,
trix-editor blockquote[dir=rtl] {
  padding-left: 0.625rem;
  border-left-width: 4px;
  border-color: var(--vf-gray-300);
}

.trix-content pre,
trix-editor pre {
  display: inline-block;
  overscroll-behavior-x: auto;
  padding: 0.5rem;
  background-color: var(--vf-gray-50);
  font-family: ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, "Liberation Mono", "Courier New", monospace;
  font-size: 0.875rem;
  line-height: 1.25rem;
  vertical-align: top;
  white-space: pre;
  width: 100%;
}

.trix-content img,
trix-editor img {
  max-width: 100%;
  height: auto;
}

.trix-content .attachment__caption,
trix-editor .attachment__caption {
  font-size: 0.875rem;
  line-height: 1.25rem;
  text-align: center;
}

.trix-content .attachment__caption .attachment__name + .attachment__size::before,
trix-editor .attachment__caption .attachment__name + .attachment__size::before {
  content: " · ";
}

.trix-content * {
  box-sizing: border-box;
  padding: 0;
  margin: 0;
}

.trix-content .attachment {
  display: inline-block;
  position: relative;
  max-width: 100%;
}

.trix-content .attachment a {
  text-decoration: none;
}

.trix-content .attachment--preview {
  text-align: center;
  width: 100%;
}

.trix-content .attachment--preview .attachment__caption {
  color: var(--vf-gray-500);
  font-size: 0.875rem;
  line-height: 1.25rem;
}

.trix-content .attachment--file {
  padding-top: 0.375rem;
  padding-bottom: 0.375rem;
  padding-left: 1rem;
  padding-right: 1rem;
  margin: 0.125rem;
  margin-top: 0;
  color: var(--vf-gray-700);
  line-height: 1;
  border-radius: 0.25rem;
  border-width: 1px;
  border-color: var(--vf-gray-300);
}

.trix-content .attachment-gallery {
  display: flex;
  position: relative;
  display: flex;
  flex-wrap: wrap;
}

.trix-content .attachment-gallery .attachment {
  padding-top: 0;
  padding-bottom: 0;
  padding-left: 0.5rem;
  padding-right: 0.5rem;
  flex-grow: 1;
  flex-shrink: 0;
  width: 33.333333%;
}

.trix-content .attachment-gallery.attachment-gallery--2 .attachment, .trix-content .attachment-gallery.attachment-gallery--4 .attachment {
  width: 50%;
}

.trix-content .attachment__progress {
  display: none;
}

.vf-editor-sm trix-editor {
  padding-left: var(--vf-px-input-sm);
  padding-right: var(--vf-px-input-sm);
  padding-bottom: var(--vf-py-input-sm);
  border-radius: var(--vf-radius-large-sm);
  min-height: 5rem;
}

.vf-editor-sm .trix-content h1,
.vf-editor-sm trix-editor h1 {
  font-size: 1.625rem;
  font-weight: 700;
  line-height: 1.25;
}

.vf-editor-sm trix-toolbar {
  padding: var(--vf-py-input-sm) var(--vf-py-input-sm);
}

.vf-editor-sm trix-toolbar .trix-button--icon {
  width: 2.25rem;
}

.vf-editor-lg trix-editor {
  padding-left: var(--vf-px-input-lg);
  padding-right: var(--vf-px-input-lg);
  padding-bottom: var(--vf-py-input-lg);
  border-radius: var(--vf-radius-large-lg);
}

.vf-editor-disabled trix-toolbar {
  pointer-events: none;
}

.vf-editor-hide-bold .trix-button--icon-bold {
  display: none;
}

.vf-editor-hide-italic .trix-button--icon-italic {
  display: none;
}

.vf-editor-hide-strike .trix-button--icon-strike {
  display: none;
}

.vf-editor-hide-link .trix-button--icon-link {
  display: none;
}

.vf-editor-hide-heading .trix-button--icon-heading-1 {
  display: none;
}

.vf-editor-hide-quote .trix-button--icon-quote {
  display: none;
}

.vf-editor-hide-code .trix-button--icon-code {
  display: none;
}

.vf-editor-hide-bullet-list .trix-button--icon-bullet-list {
  display: none;
}

.vf-editor-hide-number-list .trix-button--icon-number-list {
  display: none;
}

.vf-editor-hide-decrease-nesting .trix-button--icon-decrease-nesting-level {
  display: none;
}

.vf-editor-hide-increase-nesting .trix-button--icon-increase-nesting-level {
  display: none;
}

.vf-editor-hide-attach .trix-button--icon-attach {
  display: none;
}

.vf-editor-hide-undo .trix-button--icon-undo {
  display: none;
}

.vf-editor-hide-redo .trix-button--icon-redo {
  display: none;
}

.dark .trix-content blockquote,
.dark trix-editor blockquote {
  border-color: var(--vf-dark-700);
}

.dark .trix-content pre,
.dark trix-editor pre {
  background-color: var(--vf-dark-900);
}`;te(Fw);_d.__file="themes/vueform/templates/wrappers/EditorWrapper.vue";function Ow(t,e){switch(t){case"default":return"vf-col-".concat(e);default:return"vf-col-".concat(t,"-").concat(e)}}var $w={},Hw={"matrix-table":{addClasses:{MatrixElement:{container:"vf-matrix-table",cellWrapper_stretch:"is-stretch"}},overrideClasses:{MatrixElement:{$cellWrapper:(t,e)=>{var{padding:n,centered:r,cells$:i}=e;return(l,a)=>{var o,s,u=["radio","checkbox","toggle"].includes(l);return[t.cellWrapper,n?t.cellWrapper_padding:null,u?t.cellWrapper_centered:null,u?null:t.cellWrapper_stretch,(o=i[a])!==null&&o!==void 0&&o.error?t.cellWrapper_error:null,(s=i[a])!==null&&s!==void 0&&s.isSuccess?t.cellWrapper_success:null]}}}}},"grid-table":{addClasses:{GridElement:{container:"vf-grid-table"},ToggleElement:{wrapper_sm:"vf-toggle-wrapper-sm",wrapper_md:"",wrapper_lg:"vf-toggle-wrapper-lg"}},overrideClasses:{GridElement:{$cell:(t,e)=>{var{colHeader:n,rowHeader:r}=e;return i=>{var{colStart:l,rowStart:a}=i;return[t.cell,r&&l===0||n&&a===0?"form-bg-table-header form-color-table-header":null]}}},ToggleElement:{$wrapper:(t,e)=>{var{align:n,Size:r}=e;return[t.wrapper,t["wrapper_".concat(r)],n==="left"?t.wrapper_left:null,n==="right"?t.wrapper_right:null]}}}}},Pw={templates:{Vueform:ns,FormErrors:rs,FormMessages:is,FormLanguages:as,FormLanguage:ls,FormTabs:os,FormTab:ss,FormSteps:us,FormStepsControls:ds,FormStepsControl:cs,FormStep:ps,FormElements:fs,ElementLayout:vs,ElementLayoutInline:hs,ElementLoader:ms,ElementLabelFloating:gs,ElementLabel:bs,ElementInfo:ws,ElementDescription:ys,ElementError:ks,ElementMessage:Cs,ElementRequired:Es,ElementText:As,ElementAddon:Ls,ElementAddonOptions:xs,ButtonElement:Ts,CaptchaElement:Ss,CheckboxElement:_s,CheckboxgroupElement:Ms,CheckboxgroupElement_tabs:Is,CheckboxgroupElement_blocks:Bs,DateElement:Ds,DatesElement:Fs,FileElement:Os,GridElement:$s,GroupElement:Hs,HiddenElement:Ps,ListElement:zs,LocationElement:Ns,MatrixElement:Vs,MultifileElement:js,MultiselectElement:Xs,ObjectElement:Zs,PhoneElement:eu,RadioElement:tu,RadiogroupElement:nu,RadiogroupElement_tabs:ru,RadiogroupElement_blocks:iu,SelectElement:au,SignatureElement:lu,SliderElement:vu,StaticElement:hu,TagsElement:mu,TextareaElement:gu,TextElement:bu,ToggleElement:wu,EditorElement:yu,TTextareaElement:Cu,TTextElement:Au,TEditorElement:xu,CheckboxgroupCheckbox:Tu,CheckboxgroupCheckbox_tabs:Su,CheckboxgroupCheckbox_blocks:_u,DragAndDrop:Mu,FilePreview:Iu,FilePreview_image:Bu,FilePreview_gallery:Du,RadiogroupRadio:Ru,RadiogroupRadio_tabs:Fu,RadiogroupRadio_blocks:Ou,DatepickerWrapper:$u,EditorWrapper:_d},classes:$w,columns:Ow,presets:Hw};function zw(t,e){typeof window[t]=="function"?window[t](e):console.warn(`Function ${t} not found`)}function Nw(t){return t=t.replace(/_/g," ").replace(/\b\w/g,e=>e.toUpperCase()),{autocomplete:"off",label:t.charAt(0).toUpperCase()+t.slice(1),info:`Enter ${t}...`,placeholder:`Enter ${t}...`,floating:!1}}const wa={handleEvent:zw,appendDefaults:Nw},Vw=Od({theme:Pw,locales:{en:jh},locale:"en",functions:wa,plugins:[nm]}),jw=Object.assign({"./Elements/Form/CaptchaElementInline.vue":Kd,"./Elements/Form/CheckboxElementInline.vue":ic,"./Elements/Form/CheckboxgroupElementInline.vue":vc,"./Elements/Form/DateElementInline.vue":Lc,"./Elements/Form/DatesElementInline.vue":Oc,"./Elements/Form/EditorElementInline.vue":Wc,"./Elements/Form/FileElementInline.vue":ep,"./Elements/Form/HiddenElementInline.vue":np,"./Elements/Form/LocationElementInline.vue":fp,"./Elements/Form/MultifileElementInline.vue":Cp,"./Elements/Form/MultiselectElementInline.vue":Vp,"./Elements/Form/PhoneElementInline.vue":Yp,"./Elements/Form/RadioElementInline.vue":sf,"./Elements/Form/RadiogroupElementInline.vue":bf,"./Elements/Form/SelectElementInline.vue":Hf,"./Elements/Form/SignatureElementInline.vue":Gf,"./Elements/Form/SliderElementInline.vue":iv,"./Elements/Form/TagsElementInline.vue":Av,"./Elements/Form/TextElementInline.vue":Fv,"./Elements/Form/TextareaElementInline.vue":qv,"./Elements/Static/ButtonElementInline.vue":Yv,"./Elements/Static/StaticElementInline.vue":lh,"./Elements/Structure/GridElementInline.vue":hh,"./Elements/Structure/GroupElementInline.vue":yh,"./Elements/Structure/ListElementInline.vue":_h,"./Elements/Structure/ObjectElementInline.vue":Hh,"./Elements/VueFormInline.vue":Vh}),Uw=document.querySelectorAll(".vue-app");Uw.forEach(t=>{const e=$d({});Ww(),e.config.globalProperties.$handleEvent=wa.handleEvent,e.config.globalProperties.$appendDefaults=wa.appendDefaults,Object.entries(jw).forEach(([n,r])=>{const i=n.split("/").pop().replace(/\.\w+$/,"");e.component(i,r?.default)}),e.use(Hd,Vw),e.mount(t)});function Ww(){const t=localStorage.getItem("vueformStyles");let e=Gl(window.VUEFORM_STYLES||{});if(t)try{e=Gl(JSON.parse(t)),Pd(()=>{window.VUEFORM_STYLES&&Object.assign(e,window.VUEFORM_STYLES),localStorage.setItem("vueformStyles",JSON.stringify(e));const r=`

                        .vueform-laravel :after,
                        .vueform-laravel :before,
                        .vueform-laravel :root,
                        .vueform-laravel * {
                            ${Object.entries(e).map(([l,a])=>`${l}: ${a};`).join(`
  `)}
                        }`,i=document.createElement("style");i.id="vueform-laravel-dynamic-style",i.textContent=r,document.head.appendChild(i),window.VUEFORM_LOAD_CSS=!0})}catch{console.warn("Invalid vueformStyles in localStorage, resetting."),localStorage.removeItem("vueformStyles")}}
