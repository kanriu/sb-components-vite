import{j as E}from"./jsx-runtime-94f6e698.js";import"./index-8db94870.js";import"./_commonjsHelpers-042e6b4d.js";const t=({label:l,size:_="normal",allCaps:q=!1,color:h="primary",fontColor:x})=>E.jsx("span",{className:`label ${_} text-${h}`,style:{color:x},children:q?l.toLocaleUpperCase():l});try{t.displayName="MyLabel",t.__docgenInfo={description:"",displayName:"MyLabel",props:{label:{defaultValue:null,description:"Este es el mensaje a mostrar en la etiqueta bla",name:"label",required:!0,type:{name:"string"}},size:{defaultValue:{value:"normal"},description:"Este es el tamaño de la etiqueta",name:"size",required:!1,type:{name:"enum",value:[{value:'"normal"'},{value:'"h1"'},{value:'"h2"'},{value:'"h3"'}]}},allCaps:{defaultValue:{value:"false"},description:"Si quiere todo capitalizado",name:"allCaps",required:!1,type:{name:"boolean"}},color:{defaultValue:{value:"primary"},description:"Colores básicos del color",name:"color",required:!1,type:{name:"enum",value:[{value:'"primary"'},{value:'"secondary"'},{value:'"tertiary"'}]}},fontColor:{defaultValue:null,description:"Color personalizado de la fuente",name:"fontColor",required:!1,type:{name:"string"}}}}}catch{}const V={title:"UI/MyLabel",component:t,tags:["autodocs"],argTypes:{color:{control:"select"}}},e={args:{label:"Basic",size:"normal"}},a={args:{label:"Allcaps",allCaps:!0,size:"normal"}},r={args:{label:"Secondary",size:"normal",color:"secondary"}},o={args:{label:"Tertiary",size:"normal",color:"tertiary"}},s={args:{fontColor:"#5517ac",size:"h1",label:"CustomFontColor"}};var n,c,i;e.parameters={...e.parameters,docs:{...(n=e.parameters)==null?void 0:n.docs,source:{originalSource:`{
  args: {
    label: "Basic",
    size: "normal"
  }
}`,...(i=(c=e.parameters)==null?void 0:c.docs)==null?void 0:i.source}}};var m,u,p;a.parameters={...a.parameters,docs:{...(m=a.parameters)==null?void 0:m.docs,source:{originalSource:`{
  args: {
    label: "Allcaps",
    allCaps: true,
    size: "normal"
  }
}`,...(p=(u=a.parameters)==null?void 0:u.docs)==null?void 0:p.source}}};var d,y,g;r.parameters={...r.parameters,docs:{...(d=r.parameters)==null?void 0:d.docs,source:{originalSource:`{
  args: {
    label: "Secondary",
    size: "normal",
    color: "secondary" //
  }
}`,...(g=(y=r.parameters)==null?void 0:y.docs)==null?void 0:g.source}}};var C,b,f;o.parameters={...o.parameters,docs:{...(C=o.parameters)==null?void 0:C.docs,source:{originalSource:`{
  args: {
    label: "Tertiary",
    size: "normal",
    color: "tertiary"
  }
}`,...(f=(b=o.parameters)==null?void 0:b.docs)==null?void 0:f.source}}};var z,v,S;s.parameters={...s.parameters,docs:{...(z=s.parameters)==null?void 0:z.docs,source:{originalSource:`{
  args: {
    fontColor: "#5517ac",
    size: "h1",
    label: "CustomFontColor"
  }
}`,...(S=(v=s.parameters)==null?void 0:v.docs)==null?void 0:S.source}}};const j=["Basic","AllCaps","Secondary","Tertiary","CustomFontColor"];export{a as AllCaps,e as Basic,s as CustomFontColor,r as Secondary,o as Tertiary,j as __namedExportsOrder,V as default};
//# sourceMappingURL=MyLabel.stories-fd1e4923.js.map
