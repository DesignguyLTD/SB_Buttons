import{j as s}from"./jsx-runtime-AgcCsxC8.js";import{r as M}from"./index-XiNr8FW2.js";import{G as v}from"./iconBase-uAdzZPYo.js";import"./_commonjsHelpers-5-cIlDoe.js";function N(t){return v({tag:"svg",attr:{viewBox:"0 0 24 24",strokeWidth:"2",stroke:"currentColor",fill:"none",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{stroke:"none",d:"M0 0h24v24H0z",fill:"none"},child:[]},{tag:"path",attr:{d:"M19.933 13.041a8 8 0 1 1 -9.925 -8.788c3.899 -1 7.935 1.007 9.425 4.747"},child:[]},{tag:"path",attr:{d:"M20 4v5h-5"},child:[]}]})(t)}function _(t){return v({tag:"svg",attr:{viewBox:"0 0 32 32"},child:[{tag:"path",attr:{d:"M 6 6 L 6 8.15625 L 22.53125 16 L 6 23.84375 L 6 26 L 26 16.78125 L 26 15.21875 Z"},child:[]}]})(t)}const b=t=>{const[a,n]=M.useState("not-clicked"),{variant:B,disabled:c,children:L,...S}=t,j=()=>{c||(a==="clicked"||a==="loading"?n("not-clicked"):(n("clicked"),setTimeout(()=>{n("loading")},3e3)))};return s.jsxs("button",{className:`button ${a==="not-clicked"?"inactive":a==="clicked"?"active":"loading"} ${B} ${c?"disable":""}`,...S,onClick:j,children:[L,a==="loading"?s.jsx(N,{className:"icon"}):s.jsx(_,{className:"icon"})]})},x=b;b.__docgenInfo={description:"",methods:[],displayName:"Button"};const G={title:"Button/Primary",component:x,args:{children:"Button"}},i=t=>s.jsx(x,{...t}),e=i.bind({});e.args={variant:"normal",disabled:!1};const r=i.bind({});r.args={variant:"medium",disabled:!1};const o=i.bind({});o.args={variant:"small",disabled:!1};var d,l,m;e.parameters={...e.parameters,docs:{...(d=e.parameters)==null?void 0:d.docs,source:{originalSource:"args => <Button {...args} />",...(m=(l=e.parameters)==null?void 0:l.docs)==null?void 0:m.source}}};var u,p,g;r.parameters={...r.parameters,docs:{...(u=r.parameters)==null?void 0:u.docs,source:{originalSource:"args => <Button {...args} />",...(g=(p=r.parameters)==null?void 0:p.docs)==null?void 0:g.source}}};var h,k,f;o.parameters={...o.parameters,docs:{...(h=o.parameters)==null?void 0:h.docs,source:{originalSource:"args => <Button {...args} />",...(f=(k=o.parameters)==null?void 0:k.docs)==null?void 0:f.source}}};const w=["Normal","Medium","Small"];export{r as Medium,e as Normal,o as Small,w as __namedExportsOrder,G as default};
