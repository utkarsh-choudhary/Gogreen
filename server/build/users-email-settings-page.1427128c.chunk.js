"use strict";(self.webpackChunkserver=self.webpackChunkserver||[]).push([[3064],{42761:(P,h,a)=>{a.r(h),a.d(h,{default:()=>le});var t=a(92132),d=a(21272),i=a(70230),o=a(55794),c=a(43121),e=a(32559),s=a(39747),p=a(54894),g=a(74930),v=a(69224),l=a(46215),r=a(50642),y=a(6479),S=a(53900),m=a(57564),n=a(68065),K=a(168),L=a(32161),O=a(69564),J=a(35601),F=a(83286),X=a(61535),Z=a(33544),f=a.n(Z),A=a(12083);const k=A.Ik().shape({options:A.Ik().shape({from:A.Ik().shape({name:A.Yj().required(s.iW.required),email:A.Yj().email(s.iW.email).required(s.iW.required)}).required(),response_email:A.Yj().email(s.iW.email),object:A.Yj().required(s.iW.required),message:A.Yj().required(s.iW.required)}).required(s.iW.required)}),D=({template:u,onToggle:T,onSubmit:x})=>{const{formatMessage:j}=(0,p.A)();return(0,t.jsxs)(r.k,{onClose:T,labelledBy:`${j({id:(0,l.gT)("PopUpForm.header.edit.email-templates"),defaultMessage:"Edit email template"})}, ${j({id:(0,l.gT)(u.display),defaultMessage:u.display})}`,children:[(0,t.jsx)(y.r,{children:(0,t.jsxs)(J.B,{label:`${j({id:(0,l.gT)("PopUpForm.header.edit.email-templates"),defaultMessage:"Edit email template"})}, ${j({id:(0,l.gT)(u.display),defaultMessage:u.display})}`,children:[(0,t.jsx)(F.m,{children:j({id:(0,l.gT)("PopUpForm.header.edit.email-templates"),defaultMessage:"Edit email template"})}),(0,t.jsx)(F.m,{isCurrent:!0,children:j({id:(0,l.gT)(u.display),defaultMessage:u.display})})]})}),(0,t.jsx)(X.l1,{onSubmit:x,initialValues:u,validateOnChange:!1,validationSchema:k,enableReinitialize:!0,children:({errors:M,values:b,handleChange:C,isSubmitting:R})=>(0,t.jsxs)(s.lV,{children:[(0,t.jsx)(S.c,{children:(0,t.jsxs)(m.x,{gap:5,children:[(0,t.jsx)(n.E,{col:6,s:12,children:(0,t.jsx)(s.ah,{intlLabel:{id:(0,l.gT)("PopUpForm.Email.options.from.name.label"),defaultMessage:"Shipper name"},name:"options.from.name",onChange:C,value:b.options.from.name,error:M?.options?.from?.name,type:"text"})}),(0,t.jsx)(n.E,{col:6,s:12,children:(0,t.jsx)(s.ah,{intlLabel:{id:(0,l.gT)("PopUpForm.Email.options.from.email.label"),defaultMessage:"Shipper email"},name:"options.from.email",onChange:C,value:b.options.from.email,error:M?.options?.from?.email,type:"text"})}),(0,t.jsx)(n.E,{col:6,s:12,children:(0,t.jsx)(s.ah,{intlLabel:{id:(0,l.gT)("PopUpForm.Email.options.response_email.label"),defaultMessage:"Response email"},name:"options.response_email",onChange:C,value:b.options.response_email,error:M?.options?.response_email,type:"text"})}),(0,t.jsx)(n.E,{col:6,s:12,children:(0,t.jsx)(s.ah,{intlLabel:{id:(0,l.gT)("PopUpForm.Email.options.object.label"),defaultMessage:"Subject"},name:"options.object",onChange:C,value:b.options.object,error:M?.options?.object,type:"text"})}),(0,t.jsx)(n.E,{col:12,s:12,children:(0,t.jsx)(K.T,{label:j({id:(0,l.gT)("PopUpForm.Email.options.message.label"),defaultMessage:"Message"}),id:"options.message",onChange:C,value:b.options.message,error:M?.options?.message&&j({id:M.options.message,defaultMessage:M.options.message})})})]})}),(0,t.jsx)(L.j,{startActions:(0,t.jsx)(O.$,{onClick:T,variant:"tertiary",children:"Cancel"}),endActions:(0,t.jsx)(O.$,{loading:R,type:"submit",children:"Finish"})})]})})]})};D.propTypes={template:f().shape({display:f().string,icon:f().string,options:f().shape({from:f().shape({name:f().string,email:f().string}),message:f().string,object:f().string,response_email:f().string})}).isRequired,onSubmit:f().func.isRequired,onToggle:f().func.isRequired};const q=D;var _=a(79318),ee=a(70768),z=a(34508),E=a(21270),W=a(96586),B=a(57842),se=a(83314),U=a(27026),H=a(19106),te=a(4032),N=a(31708),ae=a(13333);const Q=({canUpdate:u,onEditClick:T})=>{const{formatMessage:x}=(0,p.A)();return(0,t.jsxs)(_.X,{colCount:3,rowCount:3,children:[(0,t.jsx)(ee.d,{children:(0,t.jsxs)(z.Tr,{children:[(0,t.jsx)(E.Th,{width:"1%",children:(0,t.jsx)(W.s,{children:x({id:(0,l.gT)("Email.template.table.icon.label"),defaultMessage:"icon"})})}),(0,t.jsx)(E.Th,{children:(0,t.jsx)(B.o,{variant:"sigma",textColor:"neutral600",children:x({id:(0,l.gT)("Email.template.table.name.label"),defaultMessage:"name"})})}),(0,t.jsx)(E.Th,{width:"1%",children:(0,t.jsx)(W.s,{children:x({id:(0,l.gT)("Email.template.table.action.label"),defaultMessage:"action"})})})]})}),(0,t.jsxs)(se.N,{children:[(0,t.jsxs)(z.Tr,{...(0,s.qM)({fn:()=>T("reset_password")}),children:[(0,t.jsx)(E.Td,{children:(0,t.jsx)(U.I,{children:(0,t.jsx)(te.A,{"aria-label":x({id:"global.reset-password",defaultMessage:"Reset password"})})})}),(0,t.jsx)(E.Td,{children:(0,t.jsx)(B.o,{children:x({id:"global.reset-password",defaultMessage:"Reset password"})})}),(0,t.jsx)(E.Td,{...s.dG,children:(0,t.jsx)(H.K,{onClick:()=>T("reset_password"),label:x({id:(0,l.gT)("Email.template.form.edit.label"),defaultMessage:"Edit a template"}),noBorder:!0,icon:u&&(0,t.jsx)(N.A,{})})})]}),(0,t.jsxs)(z.Tr,{...(0,s.qM)({fn:()=>T("email_confirmation")}),children:[(0,t.jsx)(E.Td,{children:(0,t.jsx)(U.I,{children:(0,t.jsx)(ae.A,{"aria-label":x({id:(0,l.gT)("Email.template.email_confirmation"),defaultMessage:"Email address confirmation"})})})}),(0,t.jsx)(E.Td,{children:(0,t.jsx)(B.o,{children:x({id:(0,l.gT)("Email.template.email_confirmation"),defaultMessage:"Email address confirmation"})})}),(0,t.jsx)(E.Td,{...s.dG,children:(0,t.jsx)(H.K,{onClick:()=>T("email_confirmation"),label:x({id:(0,l.gT)("Email.template.form.edit.label"),defaultMessage:"Edit a template"}),noBorder:!0,icon:u&&(0,t.jsx)(N.A,{})})})]})]})]})};Q.propTypes={canUpdate:f().bool.isRequired,onEditClick:f().func.isRequired};const ie=Q,ne=()=>(0,t.jsx)(s.kz,{permissions:v.J.readEmailTemplates,children:(0,t.jsx)(oe,{})}),oe=()=>{const{formatMessage:u}=(0,p.A)(),{trackUsage:T}=(0,s.z1)(),{notifyStatus:x}=(0,i.W)(),j=(0,s.hN)(),{lockApp:M,unlockApp:b}=(0,s.MA)(),C=(0,g.useQueryClient)(),{get:R,put:re}=(0,s.ry)(),{formatAPIError:w}=(0,s.wq)();(0,s.L4)();const[de,me]=d.useState(!1),[V,ce]=d.useState(null),{isLoading:pe,allowedActions:{canUpdate:ge}}=(0,s.ec)({update:v.J.updateEmailTemplates}),{isLoading:he,data:G}=(0,g.useQuery)(["users-permissions","email-templates"],async()=>{const{data:$}=await R("/users-permissions/email-templates");return $},{onSuccess(){x(u({id:(0,l.gT)("Email.template.data.loaded"),defaultMessage:"Email templates has been loaded"}))},onError($){j({type:"warning",message:w($)})}}),ue=pe||he,I=()=>{me($=>!$)},fe=$=>{ce($),I()},Y=(0,g.useMutation)($=>re("/users-permissions/email-templates",{"email-templates":$}),{async onSuccess(){await C.invalidateQueries(["users-permissions","email-templates"]),j({type:"success",message:{id:"notification.success.saved",defaultMessage:"Saved"}}),T("didEditEmailTemplates"),b(),I()},onError($){j({type:"warning",message:w($)}),b()},refetchActive:!0}),xe=$=>{M(),T("willEditEmailTemplates");const $e={...G,[V]:$};Y.mutate($e)};return ue?(0,t.jsxs)(o.g,{"aria-busy":"true",children:[(0,t.jsx)(s.x7,{name:u({id:(0,l.gT)("HeaderNav.link.emailTemplates"),defaultMessage:"Email templates"})}),(0,t.jsx)(c.Q,{title:u({id:(0,l.gT)("HeaderNav.link.emailTemplates"),defaultMessage:"Email templates"})}),(0,t.jsx)(e.s,{children:(0,t.jsx)(s.Bl,{})})]}):(0,t.jsxs)(o.g,{"aria-busy":Y.isLoading,children:[(0,t.jsx)(s.x7,{name:u({id:(0,l.gT)("HeaderNav.link.emailTemplates"),defaultMessage:"Email templates"})}),(0,t.jsx)(c.Q,{title:u({id:(0,l.gT)("HeaderNav.link.emailTemplates"),defaultMessage:"Email templates"})}),(0,t.jsxs)(e.s,{children:[(0,t.jsx)(ie,{onEditClick:fe,canUpdate:ge}),de&&(0,t.jsx)(q,{template:G[V],onToggle:I,onSubmit:xe})]})]})},le=ne},46215:(P,h,a)=>{a.d(h,{mr:()=>o,gT:()=>c.A});var t=a(77965),d=a.n(t);const o=e=>Object.keys(e).reduce((s,p)=>{const g=e[p].controllers,v=Object.keys(g).reduce((l,r)=>(d()(g[r])||(l[r]=g[r]),l),{});return d()(v)||(s[p]={controllers:v}),s},{});var c=a(34075)},77030:(P,h,a)=>{a.d(h,{a:()=>c});var t=a(63891),d=a(17297),i=a(52718);const o={color:!0,cursor:!0,height:!0,width:!0},c=t.Ay.div.withConfig({shouldForwardProp:(e,s)=>!o[e]&&s(e)})`
  // Font
  font-size: ${({fontSize:e,theme:s})=>(0,i.K)(s.fontSizes,e,e)};

  // Colors
  background: ${({theme:e,background:s})=>(0,i.K)(e.colors,s,s)};
  color: ${({theme:e,color:s})=>(0,i.K)(e.colors,s,void 0)};

  // Spaces
  ${({theme:e,padding:s})=>(0,d.A)("padding",s,e)}
  ${({theme:e,paddingTop:s})=>(0,d.A)("padding-top",s,e)}
  ${({theme:e,paddingRight:s})=>(0,d.A)("padding-right",s,e)}
  ${({theme:e,paddingBottom:s})=>(0,d.A)("padding-bottom",s,e)}
  ${({theme:e,paddingLeft:s})=>(0,d.A)("padding-left",s,e)}
  ${({theme:e,marginLeft:s})=>(0,d.A)("margin-left",s,e)}
  ${({theme:e,marginRight:s})=>(0,d.A)("margin-right",s,e)}
  ${({theme:e,marginTop:s})=>(0,d.A)("margin-top",s,e)}
  ${({theme:e,marginBottom:s})=>(0,d.A)("margin-bottom",s,e)}

  // Responsive hiding
  ${({theme:e,hiddenS:s})=>s?`${e.mediaQueries.tablet} { display: none; }`:void 0}
  ${({theme:e,hiddenXS:s})=>s?`${e.mediaQueries.mobile} { display: none; }`:void 0}
  

  // Borders
  border-radius: ${({theme:e,hasRadius:s,borderRadius:p})=>s?e.borderRadius:p};
  border-style: ${({borderStyle:e})=>e};
  border-width: ${({borderWidth:e})=>e};
  border-color: ${({borderColor:e,theme:s})=>(0,i.K)(s.colors,e,void 0)};
  border: ${({theme:e,borderColor:s,borderStyle:p,borderWidth:g})=>{if(s&&!p&&typeof g>"u")return`1px solid ${e.colors[s]}`}};

  // Shadows
  box-shadow: ${({theme:e,shadow:s})=>(0,i.K)(e.shadows,s,void 0)};

  // Handlers
  pointer-events: ${({pointerEvents:e})=>e};
  &:hover {
    ${({_hover:e,theme:s})=>e?e(s):void 0}
  }

  // Display
  display: ${({display:e})=>e};

  // Position
  position: ${({position:e})=>e};
  left: ${({left:e,theme:s})=>(0,i.K)(s.spaces,e,e)};
  right: ${({right:e,theme:s})=>(0,i.K)(s.spaces,e,e)};
  top: ${({top:e,theme:s})=>(0,i.K)(s.spaces,e,e)};
  bottom: ${({bottom:e,theme:s})=>(0,i.K)(s.spaces,e,e)};
  z-index: ${({zIndex:e})=>e};
  overflow: ${({overflow:e})=>e};

  // Size
  width: ${({width:e,theme:s})=>(0,i.K)(s.spaces,e,e)};
  max-width: ${({maxWidth:e,theme:s})=>(0,i.K)(s.spaces,e,e)};
  min-width: ${({minWidth:e,theme:s})=>(0,i.K)(s.spaces,e,e)};
  height: ${({height:e,theme:s})=>(0,i.K)(s.spaces,e,e)};
  max-height: ${({maxHeight:e,theme:s})=>(0,i.K)(s.spaces,e,e)};
  min-height: ${({minHeight:e,theme:s})=>(0,i.K)(s.spaces,e,e)};

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
  line-height: ${({theme:e,lineHeight:s})=>(0,i.K)(e.lineHeights,s,s)};

  // Cursor
  cursor: ${({cursor:e})=>e};
`},85574:(P,h,a)=>{a.d(h,{o:()=>S});var t=a(63891);const d="alpha",i="beta",o="delta",c="epsilon",e="omega",s="pi",p="sigma",g=[d,i,o,c,e,s,p],v=({ellipsis:m=!1})=>m&&`
    display: block;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  `,l=({variant:m=e,theme:n})=>{switch(m){case d:return`
        font-weight: ${n.fontWeights.bold};
        font-size: ${n.fontSizes[5]};
        line-height: ${n.lineHeights[2]};
      `;case i:return`
        font-weight: ${n.fontWeights.bold};
        font-size: ${n.fontSizes[4]};
        line-height: ${n.lineHeights[1]};
      `;case o:return`
        font-weight: ${n.fontWeights.semiBold};
        font-size: ${n.fontSizes[3]};
        line-height: ${n.lineHeights[2]};
      `;case c:return`
        font-size: ${n.fontSizes[3]};
        line-height: ${n.lineHeights[6]};
      `;case e:return`
        font-size: ${n.fontSizes[2]};
        line-height: ${n.lineHeights[4]};
      `;case s:return`
        font-size: ${n.fontSizes[1]};
        line-height: ${n.lineHeights[3]};
      `;case p:return`
        font-weight: ${n.fontWeights.bold};
        font-size: ${n.fontSizes[0]};
        line-height: ${n.lineHeights[5]};
        text-transform: uppercase;
      `;default:return`
        font-size: ${n.fontSizes[2]};
      `}};var r=a(52718);const y={fontSize:!0,fontWeight:!0},S=t.Ay.span.withConfig({shouldForwardProp:(m,n)=>!y[m]&&n(m)})`
  ${l}
  ${v}

  // These properties need to come after {variantStyle}, because they might
  // overwrite a variant attribute
  font-weight: ${({theme:m,fontWeight:n})=>(0,r.K)(m.fontWeights,n,void 0)};
  font-size: ${({theme:m,fontSize:n})=>(0,r.K)(m.fontSizes,n,void 0)};
  line-height: ${({theme:m,lineHeight:n})=>(0,r.K)(m.lineHeights,n,n)};
  color: ${({theme:m,textColor:n})=>m.colors[n||"neutral800"]};
  text-align: ${({textAlign:m})=>m};
  text-decoration: ${({textDecoration:m})=>m};
  text-transform: ${({textTransform:m})=>m};
`},17297:(P,h,a)=>{a.d(h,{A:()=>t});const t=(d,i,o)=>{if(!i)return;if(typeof i=="object")return(Array.isArray(i)?i:[i?.desktop,i?.tablet,i?.mobile]).reduce((p,g,v)=>{if(g)switch(v){case 0:return`${p}${d}: ${o.spaces[g]};`;case 1:return`${p}${o.mediaQueries.tablet}{${d}: ${o.spaces[g]};}`;case 2:return`${p}${o.mediaQueries.mobile}{${d}: ${o.spaces[g]};}`;default:return p}return p},"");const c=o.spaces[i]??i;return`${d}: ${c};`}},52718:(P,h,a)=>{a.d(h,{K:()=>i});function t(o,c){return typeof o=="string"?!1:c in o}function d(o){return o&&typeof o=="object"&&!Array.isArray(o)}function i(o,c,e){return c&&t(o,c)?o[c]:e}},35601:(P,h,a)=>{a.d(h,{B:()=>l});var t=a(92132),d=a(21272),i=a(63891),o=a(77030),c=a(85574);const e=()=>(0,t.jsx)(o.a,{"aria-hidden":!0,paddingLeft:1,paddingRight:1,children:(0,t.jsx)(c.o,{variant:"pi",textColor:"neutral500",children:"/"})});e.displayName="Divider";var s=a(17297);const p={direction:!0},g=(0,i.Ay)(o.a).withConfig({shouldForwardProp:(r,y)=>!p[r]&&y(r)})`
  align-items: ${({alignItems:r="center"})=>r};
  display: ${({display:r="flex",inline:y})=>y?"inline-flex":r};
  flex-direction: ${({direction:r="row"})=>r};
  flex-shrink: ${({shrink:r})=>r};
  flex-wrap: ${({wrap:r})=>r};
  ${({gap:r,theme:y})=>(0,s.A)("gap",r,y)};
  justify-content: ${({justifyContent:r})=>r};
`,v=(0,i.Ay)(g)`
  // CrumbLinks do have padding-x, because they need to have a
  // interaction effect, which mis-aligns the breadcrumbs on the left.
  // This normalizes the behavior by moving the first item to left by
  // the same amount it has inner padding
  :first-child {
    margin-left: ${({theme:r})=>`calc(-1*${r.spaces[2]})`};
  }
`,l=({label:r,children:y,...S})=>{const m=d.Children.toArray(y);return(0,t.jsx)(o.a,{"aria-label":r,...S,children:(0,t.jsx)(v,{as:"ol",children:d.Children.map(m,(n,K)=>{const L=m.length>1&&K+1<m.length;return(0,t.jsxs)(g,{inline:!0,as:"li",children:[n,L&&(0,t.jsx)(e,{})]})})})})};l.displayName="Breadcrumbs"},83286:(P,h,a)=>{a.d(h,{m:()=>o});var t=a(92132),d=a(77030),i=a(85574);const o=({children:c,isCurrent:e=!1,...s})=>(0,t.jsx)(d.a,{paddingLeft:2,paddingRight:2,paddingTop:1,paddingBottom:1,children:(0,t.jsx)(i.o,{variant:"pi",textColor:"neutral800",fontWeight:e?"bold":"normal","aria-current":e,...s,children:c})});o.displayName="Crumb"}}]);
