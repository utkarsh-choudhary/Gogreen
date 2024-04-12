"use strict";(self.webpackChunkserver=self.webpackChunkserver||[]).push([[8750],{91784:(E,v,t)=>{t.r(v),t.d(v,{ProvidersPage:()=>oe,default:()=>Le});var i=t(92132),l=t(21272),a=t(53432),d=t(55794),g=t(43121),e=t(32559),s=t(79318),p=t(70768),f=t(34508),x=t(21270),y=t(57842),c=t(96586),P=t(83314),D=t(19106),n=t(39747),r=t(31708),F=t(39404),Y=t.n(F),N=t(54894),H=t(74930),he=t(50642),ge=t(6479),pe=t(53900),fe=t(43242),me=t(57564),ve=t(68065),be=t(32161),ee=t(69564),xe=t(35601),$e=t(83286),ye=t(61535),je=t(33544),o=t.n(je),Pe=t(44158),Te=t(81926);const Q=({description:b,disabled:K,intlLabel:z,error:A,name:M,onChange:B,placeholder:m,providerToEditName:R,type:C,value:T})=>{const{formatMessage:j}=(0,N.A)(),S=M==="noName"?`${window.strapi.backendURL}/api/connect/${R}/callback`:T,O=j({id:z.id,defaultMessage:z.defaultMessage},{provider:R,...z.values}),L=b?j({id:b.id,defaultMessage:b.defaultMessage},{provider:R,...b.values}):"";if(C==="bool")return(0,i.jsx)(Pe.l,{"aria-label":M,checked:T,disabled:K,hint:L,label:O,name:M,offLabel:j({id:"app.components.ToggleCheckbox.off-label",defaultMessage:"Off"}),onLabel:j({id:"app.components.ToggleCheckbox.on-label",defaultMessage:"On"}),onChange:U=>{B({target:{name:M,value:U.target.checked}})}});const k=m?j({id:m.id,defaultMessage:m.defaultMessage},{...m.values}):"",Z=A?j({id:A,defaultMessage:A}):"";return(0,i.jsx)(Te.k,{"aria-label":M,disabled:K,error:Z,label:O,name:M,onChange:B,placeholder:k,type:C,value:S})};Q.defaultProps={description:null,disabled:!1,error:"",placeholder:null,value:""},Q.propTypes={description:o().shape({id:o().string.isRequired,defaultMessage:o().string.isRequired,values:o().object}),disabled:o().bool,error:o().string,intlLabel:o().shape({id:o().string.isRequired,defaultMessage:o().string.isRequired,values:o().object}).isRequired,name:o().string.isRequired,onChange:o().func.isRequired,placeholder:o().shape({id:o().string.isRequired,defaultMessage:o().string.isRequired,values:o().object}),providerToEditName:o().string.isRequired,type:o().string.isRequired,value:o().oneOfType([o().bool,o().string])};const Me=Q,V=({headerBreadcrumbs:b,initialData:K,isSubmiting:z,layout:A,isOpen:M,onSubmit:B,onToggle:m,providerToEditName:R})=>{const{formatMessage:C}=(0,N.A)();return M?(0,i.jsxs)(he.k,{onClose:m,labelledBy:"title",children:[(0,i.jsx)(ge.r,{children:(0,i.jsx)(xe.B,{label:b.join(", "),children:b.map((T,j,S)=>(0,i.jsx)($e.m,{isCurrent:j===S.length-1,children:T},T))})}),(0,i.jsx)(ye.l1,{onSubmit:T=>B(T),initialValues:K,validationSchema:A.schema,validateOnChange:!1,children:({errors:T,handleChange:j,values:S})=>(0,i.jsxs)(n.lV,{children:[(0,i.jsx)(pe.c,{children:(0,i.jsx)(fe.s,{direction:"column",alignItems:"stretch",gap:1,children:(0,i.jsx)(me.x,{gap:5,children:A.form.map(O=>O.map(L=>(0,i.jsx)(ve.E,{col:L.size,xs:12,children:(0,i.jsx)(Me,{...L,error:T[L.name],onChange:j,value:S[L.name],providerToEditName:R})},L.name)))})})}),(0,i.jsx)(be.j,{startActions:(0,i.jsx)(ee.$,{variant:"tertiary",onClick:m,type:"button",children:C({id:"app.components.Button.cancel",defaultMessage:"Cancel"})}),endActions:(0,i.jsx)(ee.$,{type:"submit",loading:z,children:C({id:"global.save",defaultMessage:"Save"})})})]})})]}):null};V.defaultProps={initialData:null,providerToEditName:null},V.propTypes={headerBreadcrumbs:o().arrayOf(o().string).isRequired,initialData:o().object,layout:o().shape({form:o().arrayOf(o().array),schema:o().object}).isRequired,isOpen:o().bool.isRequired,isSubmiting:o().bool.isRequired,onSubmit:o().func.isRequired,onToggle:o().func.isRequired,providerToEditName:o().string};const Ae=V;var se=t(69224),$=t(46215),u=t(12083);const te={id:(0,$.gT)("PopUpForm.Providers.redirectURL.front-end.label"),defaultMessage:"The redirect URL to your front-end app"},ie={id:"http://www.client-app.com",defaultMessage:"http://www.client-app.com"},G={id:(0,$.gT)("PopUpForm.Providers.enabled.description"),defaultMessage:"If disabled, users won't be able to use this provider."},J={id:(0,$.gT)("PopUpForm.Providers.enabled.label"),defaultMessage:"Enable"},ne={id:(0,$.gT)("PopUpForm.Providers.key.label"),defaultMessage:"Client ID"},ae={id:(0,$.gT)("PopUpForm.Providers.redirectURL.label"),defaultMessage:"The redirect URL to add in your {provider} application configurations"},I={id:(0,$.gT)("PopUpForm.Providers.key.placeholder"),defaultMessage:"TEXT"},re={id:(0,$.gT)("PopUpForm.Providers.secret.label"),defaultMessage:"Client Secret"},X={email:{form:[[{intlLabel:J,name:"enabled",type:"bool",description:G,size:6}]],schema:u.Ik().shape({enabled:u.lc().required(n.iW.required)})},providers:{form:[[{intlLabel:J,name:"enabled",type:"bool",description:G,size:6,validations:{required:!0}}],[{intlLabel:ne,name:"key",type:"text",placeholder:I,size:12,validations:{required:!0}}],[{intlLabel:re,name:"secret",type:"text",placeholder:I,size:12,validations:{required:!0}}],[{intlLabel:te,placeholder:ie,name:"callback",type:"text",size:12,validations:{required:!0}}],[{intlLabel:ae,name:"noName",type:"text",validations:{},size:12,disabled:!0}]],schema:u.Ik().shape({enabled:u.lc().required(n.iW.required),key:u.Yj().when("enabled",{is:!0,then:u.Yj().required(n.iW.required),otherwise:u.Yj()}),secret:u.Yj().when("enabled",{is:!0,then:u.Yj().required(n.iW.required),otherwise:u.Yj()}),callback:u.Yj().when("enabled",{is:!0,then:u.Yj().required(n.iW.required),otherwise:u.Yj()})})},providersWithSubdomain:{form:[[{intlLabel:J,name:"enabled",type:"bool",description:G,size:6,validations:{required:!0}}],[{intlLabel:ne,name:"key",type:"text",placeholder:I,size:12,validations:{required:!0}}],[{intlLabel:re,name:"secret",type:"text",placeholder:I,size:12,validations:{required:!0}}],[{intlLabel:{id:(0,$.gT)({id:"PopUpForm.Providers.jwksurl.label"}),defaultMessage:"JWKS URL"},name:"jwksurl",type:"text",placeholder:I,size:12,validations:{required:!1}}],[{intlLabel:{id:(0,$.gT)("PopUpForm.Providers.subdomain.label"),defaultMessage:"Host URI (Subdomain)"},name:"subdomain",type:"text",placeholder:{id:(0,$.gT)("PopUpForm.Providers.subdomain.placeholder"),defaultMessage:"my.subdomain.com"},size:12,validations:{required:!0}}],[{intlLabel:te,placeholder:ie,name:"callback",type:"text",size:12,validations:{required:!0}}],[{intlLabel:ae,name:"noName",type:"text",validations:{},size:12,disabled:!0}]],schema:u.Ik().shape({enabled:u.lc().required(n.iW.required),key:u.Yj().when("enabled",{is:!0,then:u.Yj().required(n.iW.required),otherwise:u.Yj()}),secret:u.Yj().when("enabled",{is:!0,then:u.Yj().required(n.iW.required),otherwise:u.Yj()}),subdomain:u.Yj().when("enabled",{is:!0,then:u.Yj().required(n.iW.required),otherwise:u.Yj()}),callback:u.Yj().when("enabled",{is:!0,then:u.Yj().required(n.iW.required),otherwise:u.Yj()})})}},oe=()=>{const{formatMessage:b,locale:K}=(0,N.A)(),z=(0,H.useQueryClient)(),{trackUsage:A}=(0,n.z1)(),[M,B]=l.useState(!1),[m,R]=l.useState(null),C=(0,n.hN)(),{lockApp:T,unlockApp:j}=(0,n.MA)(),{get:S,put:O}=(0,n.ry)(),{formatAPIError:L}=(0,n.wq)(),k=(0,n.QM)(K,{sensitivity:"base"});(0,n.L4)();const{isLoading:Z,allowedActions:{canUpdate:U}}=(0,n.ec)({update:se.J.updateProviders}),{isLoading:Ce,data:q}=(0,H.useQuery)(["users-permissions","get-providers"],async()=>{const{data:h}=await S("/users-permissions/providers");return h},{initialData:{}}),de=(0,H.useMutation)(h=>O("/users-permissions/providers",h),{async onSuccess(){await z.invalidateQueries(["users-permissions","providers"]),C({type:"success",message:{id:(0,$.gT)("notification.success.submit")}}),A("didEditAuthenticationProvider"),_(),j()},onError(h){C({type:"warning",message:L(h)}),j()},refetchActive:!1}),w=Object.entries(q).reduce((h,[W,Se])=>{const{icon:ue,enabled:Ke,subdomain:Be}=Se;return h.push({name:W,icon:ue==="envelope"?["fas","envelope"]:["fab",ue],enabled:Ke,subdomain:Be}),h},[]).sort((h,W)=>k.compare(h.name,W.name)),Ee=Ce||Z,le=l.useMemo(()=>m?!!w.find(W=>W.name===m)?.subdomain:!1,[w,m]),ze=l.useMemo(()=>m==="email"?X.email:le?X.providersWithSubdomain:X.providers,[m,le]),_=()=>{B(h=>!h)},ce=h=>{U&&(R(h.name),_())},Re=async h=>{T(),A("willEditAuthenticationProvider"),de.mutate({providers:{...q,[m]:h}})};return(0,i.jsxs)(a.P,{children:[(0,i.jsx)(n.x7,{name:b({id:(0,$.gT)("HeaderNav.link.providers"),defaultMessage:"Providers"})}),(0,i.jsxs)(d.g,{children:[(0,i.jsx)(g.Q,{title:b({id:(0,$.gT)("HeaderNav.link.providers"),defaultMessage:"Providers"})}),Ee?(0,i.jsx)(n.Bl,{}):(0,i.jsx)(e.s,{children:(0,i.jsxs)(s.X,{colCount:3,rowCount:w.length+1,children:[(0,i.jsx)(p.d,{children:(0,i.jsxs)(f.Tr,{children:[(0,i.jsx)(x.Th,{children:(0,i.jsx)(y.o,{variant:"sigma",textColor:"neutral600",children:b({id:"global.name",defaultMessage:"Name"})})}),(0,i.jsx)(x.Th,{children:(0,i.jsx)(y.o,{variant:"sigma",textColor:"neutral600",children:b({id:(0,$.gT)("Providers.status"),defaultMessage:"Status"})})}),(0,i.jsx)(x.Th,{children:(0,i.jsx)(y.o,{variant:"sigma",children:(0,i.jsx)(c.s,{children:b({id:"global.settings",defaultMessage:"Settings"})})})})]})}),(0,i.jsx)(P.N,{children:w.map(h=>(0,i.jsxs)(f.Tr,{...(0,n.qM)({fn:()=>ce(h),condition:U}),children:[(0,i.jsx)(x.Td,{width:"45%",children:(0,i.jsx)(y.o,{fontWeight:"semiBold",textColor:"neutral800",children:h.name})}),(0,i.jsx)(x.Td,{width:"65%",children:(0,i.jsx)(y.o,{textColor:h.enabled?"success600":"danger600","data-testid":`enable-${h.name}`,children:h.enabled?b({id:"global.enabled",defaultMessage:"Enabled"}):b({id:"global.disabled",defaultMessage:"Disabled"})})}),(0,i.jsx)(x.Td,{...n.dG,children:U&&(0,i.jsx)(D.K,{onClick:()=>ce(h),noBorder:!0,icon:(0,i.jsx)(r.A,{}),label:"Edit"})})]},h.name))})]})})]}),(0,i.jsx)(Ae,{initialData:q[m],isOpen:M,isSubmiting:de.isLoading,layout:ze,headerBreadcrumbs:[b({id:(0,$.gT)("PopUpForm.header.edit.providers"),defaultMessage:"Edit Provider"}),Y()(m)],onToggle:_,onSubmit:Re,providerToEditName:m})]})},Le=()=>(0,i.jsx)(n.kz,{permissions:se.J.readProviders,children:(0,i.jsx)(oe,{})})},46215:(E,v,t)=>{t.d(v,{mr:()=>d,gT:()=>g.A});var i=t(77965),l=t.n(i);const d=e=>Object.keys(e).reduce((s,p)=>{const f=e[p].controllers,x=Object.keys(f).reduce((y,c)=>(l()(f[c])||(y[c]=f[c]),y),{});return l()(x)||(s[p]={controllers:x}),s},{});var g=t(34075)},77030:(E,v,t)=>{t.d(v,{a:()=>g});var i=t(63891),l=t(17297),a=t(52718);const d={color:!0,cursor:!0,height:!0,width:!0},g=i.Ay.div.withConfig({shouldForwardProp:(e,s)=>!d[e]&&s(e)})`
  // Font
  font-size: ${({fontSize:e,theme:s})=>(0,a.K)(s.fontSizes,e,e)};

  // Colors
  background: ${({theme:e,background:s})=>(0,a.K)(e.colors,s,s)};
  color: ${({theme:e,color:s})=>(0,a.K)(e.colors,s,void 0)};

  // Spaces
  ${({theme:e,padding:s})=>(0,l.A)("padding",s,e)}
  ${({theme:e,paddingTop:s})=>(0,l.A)("padding-top",s,e)}
  ${({theme:e,paddingRight:s})=>(0,l.A)("padding-right",s,e)}
  ${({theme:e,paddingBottom:s})=>(0,l.A)("padding-bottom",s,e)}
  ${({theme:e,paddingLeft:s})=>(0,l.A)("padding-left",s,e)}
  ${({theme:e,marginLeft:s})=>(0,l.A)("margin-left",s,e)}
  ${({theme:e,marginRight:s})=>(0,l.A)("margin-right",s,e)}
  ${({theme:e,marginTop:s})=>(0,l.A)("margin-top",s,e)}
  ${({theme:e,marginBottom:s})=>(0,l.A)("margin-bottom",s,e)}

  // Responsive hiding
  ${({theme:e,hiddenS:s})=>s?`${e.mediaQueries.tablet} { display: none; }`:void 0}
  ${({theme:e,hiddenXS:s})=>s?`${e.mediaQueries.mobile} { display: none; }`:void 0}
  

  // Borders
  border-radius: ${({theme:e,hasRadius:s,borderRadius:p})=>s?e.borderRadius:p};
  border-style: ${({borderStyle:e})=>e};
  border-width: ${({borderWidth:e})=>e};
  border-color: ${({borderColor:e,theme:s})=>(0,a.K)(s.colors,e,void 0)};
  border: ${({theme:e,borderColor:s,borderStyle:p,borderWidth:f})=>{if(s&&!p&&typeof f>"u")return`1px solid ${e.colors[s]}`}};

  // Shadows
  box-shadow: ${({theme:e,shadow:s})=>(0,a.K)(e.shadows,s,void 0)};

  // Handlers
  pointer-events: ${({pointerEvents:e})=>e};
  &:hover {
    ${({_hover:e,theme:s})=>e?e(s):void 0}
  }

  // Display
  display: ${({display:e})=>e};

  // Position
  position: ${({position:e})=>e};
  left: ${({left:e,theme:s})=>(0,a.K)(s.spaces,e,e)};
  right: ${({right:e,theme:s})=>(0,a.K)(s.spaces,e,e)};
  top: ${({top:e,theme:s})=>(0,a.K)(s.spaces,e,e)};
  bottom: ${({bottom:e,theme:s})=>(0,a.K)(s.spaces,e,e)};
  z-index: ${({zIndex:e})=>e};
  overflow: ${({overflow:e})=>e};

  // Size
  width: ${({width:e,theme:s})=>(0,a.K)(s.spaces,e,e)};
  max-width: ${({maxWidth:e,theme:s})=>(0,a.K)(s.spaces,e,e)};
  min-width: ${({minWidth:e,theme:s})=>(0,a.K)(s.spaces,e,e)};
  height: ${({height:e,theme:s})=>(0,a.K)(s.spaces,e,e)};
  max-height: ${({maxHeight:e,theme:s})=>(0,a.K)(s.spaces,e,e)};
  min-height: ${({minHeight:e,theme:s})=>(0,a.K)(s.spaces,e,e)};

  // Animation
  transition: ${({transition:e})=>e};
  transform: ${({transform:e})=>e};
  animation: ${({animation:e})=>e};

  //Flexbox children props
  flex-shrink: ${({shrink:e})=>e};
  flex-grow: ${({grow:e})=>e};
  flex-basis: ${({basis:e})=>e};
  flex: ${({flex:e})=>e};

  // Text
  text-align: ${({textAlign:e})=>e};
  text-transform: ${({textTransform:e})=>e};
  line-height: ${({theme:e,lineHeight:s})=>(0,a.K)(e.lineHeights,s,s)};

  // Cursor
  cursor: ${({cursor:e})=>e};
`},85574:(E,v,t)=>{t.d(v,{o:()=>D});var i=t(63891);const l="alpha",a="beta",d="delta",g="epsilon",e="omega",s="pi",p="sigma",f=[l,a,d,g,e,s,p],x=({ellipsis:n=!1})=>n&&`
    display: block;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  `,y=({variant:n=e,theme:r})=>{switch(n){case l:return`
        font-weight: ${r.fontWeights.bold};
        font-size: ${r.fontSizes[5]};
        line-height: ${r.lineHeights[2]};
      `;case a:return`
        font-weight: ${r.fontWeights.bold};
        font-size: ${r.fontSizes[4]};
        line-height: ${r.lineHeights[1]};
      `;case d:return`
        font-weight: ${r.fontWeights.semiBold};
        font-size: ${r.fontSizes[3]};
        line-height: ${r.lineHeights[2]};
      `;case g:return`
        font-size: ${r.fontSizes[3]};
        line-height: ${r.lineHeights[6]};
      `;case e:return`
        font-size: ${r.fontSizes[2]};
        line-height: ${r.lineHeights[4]};
      `;case s:return`
        font-size: ${r.fontSizes[1]};
        line-height: ${r.lineHeights[3]};
      `;case p:return`
        font-weight: ${r.fontWeights.bold};
        font-size: ${r.fontSizes[0]};
        line-height: ${r.lineHeights[5]};
        text-transform: uppercase;
      `;default:return`
        font-size: ${r.fontSizes[2]};
      `}};var c=t(52718);const P={fontSize:!0,fontWeight:!0},D=i.Ay.span.withConfig({shouldForwardProp:(n,r)=>!P[n]&&r(n)})`
  ${y}
  ${x}

  // These properties need to come after {variantStyle}, because they might
  // overwrite a variant attribute
  font-weight: ${({theme:n,fontWeight:r})=>(0,c.K)(n.fontWeights,r,void 0)};
  font-size: ${({theme:n,fontSize:r})=>(0,c.K)(n.fontSizes,r,void 0)};
  line-height: ${({theme:n,lineHeight:r})=>(0,c.K)(n.lineHeights,r,r)};
  color: ${({theme:n,textColor:r})=>n.colors[r||"neutral800"]};
  text-align: ${({textAlign:n})=>n};
  text-decoration: ${({textDecoration:n})=>n};
  text-transform: ${({textTransform:n})=>n};
`},17297:(E,v,t)=>{t.d(v,{A:()=>i});const i=(l,a,d)=>{if(!a)return;if(typeof a=="object")return(Array.isArray(a)?a:[a?.desktop,a?.tablet,a?.mobile]).reduce((p,f,x)=>{if(f)switch(x){case 0:return`${p}${l}: ${d.spaces[f]};`;case 1:return`${p}${d.mediaQueries.tablet}{${l}: ${d.spaces[f]};}`;case 2:return`${p}${d.mediaQueries.mobile}{${l}: ${d.spaces[f]};}`;default:return p}return p},"");const g=d.spaces[a]??a;return`${l}: ${g};`}},52718:(E,v,t)=>{t.d(v,{K:()=>a});function i(d,g){return typeof d=="string"?!1:g in d}function l(d){return d&&typeof d=="object"&&!Array.isArray(d)}function a(d,g,e){return g&&i(d,g)?d[g]:e}},35601:(E,v,t)=>{t.d(v,{B:()=>y});var i=t(92132),l=t(21272),a=t(63891),d=t(77030),g=t(85574);const e=()=>(0,i.jsx)(d.a,{"aria-hidden":!0,paddingLeft:1,paddingRight:1,children:(0,i.jsx)(g.o,{variant:"pi",textColor:"neutral500",children:"/"})});e.displayName="Divider";var s=t(17297);const p={direction:!0},f=(0,a.Ay)(d.a).withConfig({shouldForwardProp:(c,P)=>!p[c]&&P(c)})`
  align-items: ${({alignItems:c="center"})=>c};
  display: ${({display:c="flex",inline:P})=>P?"inline-flex":c};
  flex-direction: ${({direction:c="row"})=>c};
  flex-shrink: ${({shrink:c})=>c};
  flex-wrap: ${({wrap:c})=>c};
  ${({gap:c,theme:P})=>(0,s.A)("gap",c,P)};
  justify-content: ${({justifyContent:c})=>c};
`,x=(0,a.Ay)(f)`
  // CrumbLinks do have padding-x, because they need to have a
  // interaction effect, which mis-aligns the breadcrumbs on the left.
  // This normalizes the behavior by moving the first item to left by
  // the same amount it has inner padding
  :first-child {
    margin-left: ${({theme:c})=>`calc(-1*${c.spaces[2]})`};
  }
`,y=({label:c,children:P,...D})=>{const n=l.Children.toArray(P);return(0,i.jsx)(d.a,{"aria-label":c,...D,children:(0,i.jsx)(x,{as:"ol",children:l.Children.map(n,(r,F)=>{const Y=n.length>1&&F+1<n.length;return(0,i.jsxs)(f,{inline:!0,as:"li",children:[r,Y&&(0,i.jsx)(e,{})]})})})})};y.displayName="Breadcrumbs"},83286:(E,v,t)=>{t.d(v,{m:()=>d});var i=t(92132),l=t(77030),a=t(85574);const d=({children:g,isCurrent:e=!1,...s})=>(0,i.jsx)(l.a,{paddingLeft:2,paddingRight:2,paddingTop:1,paddingBottom:1,children:(0,i.jsx)(a.o,{variant:"pi",textColor:"neutral800",fontWeight:e?"bold":"normal","aria-current":e,...s,children:g})});d.displayName="Crumb"}}]);
