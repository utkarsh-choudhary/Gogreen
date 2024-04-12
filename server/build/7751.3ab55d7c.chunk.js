"use strict";(self.webpackChunkserver=self.webpackChunkserver||[]).push([[7751],{62482:(J,A,s)=>{s.d(A,{F:()=>m});var t=s(92132),i=s(21272),E=s(44370),D=s(69564),O=s(39747),l=s(94013),r=s(54894);const m=({displayedFilters:o})=>{const[M,g]=i.useState(!1),{formatMessage:R}=(0,r.A)(),h=i.useRef(null),L=()=>{g(f=>!f)};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsxs)(E.a,{paddingTop:1,paddingBottom:1,children:[(0,t.jsx)(D.$,{variant:"tertiary",ref:h,startIcon:(0,t.jsx)(l.A,{}),onClick:L,size:"S",children:R({id:"app.utils.filters",defaultMessage:"Filters"})}),M&&(0,t.jsx)(O.LC,{displayedFilters:o,isVisible:M,onToggle:L,source:h})]}),(0,t.jsx)(O.cZ,{filtersSchema:o})]})}},77751:(J,A,s)=>{s.d(A,{ProtectedListPage:()=>fs,e:()=>rs});var t=s(92132),i=s(21272),E=s(69564),D=s(50642),O=s(6479),l=s(53900),r=s(43242),m=s(44370),o=s(57842),M=s(57564),g=s(68065),R=s(32161),h=s(83314),L=s(34508),f=s(21270),F=s(72182),T=s(19106),I=s(55794),$=s(43121),X=s(44494),b=s(32559),e=s(39747),j=s(5409),N=s(54894),ss=s(17703),P=s(73769),es=s(62482),U=s(2570),ds=s(31708),_s=s(39423),Es=s(32372),ms=s(714),Ms=s(61535),k=s(12083),is=s(7765),as=s(69511),Ts=s(15126),Is=s(63299),Us=s(67014),us=s(59080),xs=s(79275),Bs=s(14718),Rs=s(82437),js=s(5790),Ws=s(35223),Ks=s(74930),ps=s(2600),ys=s(48940),Ss=s(41286),Fs=s(51187),$s=s(56336),Ns=s(39404),Vs=s(58692),zs=s(54257),Ys=s(501),Hs=s(57646),Qs=s(23120),Zs=s(44414),Gs=s(25962),Js=s(14664),Xs=s(42588),bs=s(90325),ks=s(62785),ws=s(87443),qs=s(41032),st=s(22957),tt=s(93179),et=s(73055),at=s(15747),nt=s(85306),it=s(77965),ot=s(26509),rt=s(84624),lt=s(71210),dt=s(32058),_t=s(81185),Et=s(82261),mt=s(63209),Mt=s(55151),ct=s(79077);const cs=({onClick:a})=>{const{formatMessage:d}=(0,N.A)();return(0,t.jsx)(E.$,{onClick:a,startIcon:(0,t.jsx)(U.A,{}),size:"S",children:d({id:"Settings.permissions.users.create",defaultMessage:"Invite new user"})})},Ds=({onToggle:a})=>{const[d,p]=i.useState("create"),[z,Y]=i.useState(""),{formatMessage:v}=(0,N.A)(),u=(0,e.hN)(),{lockApp:H,unlockApp:W}=(0,e.MA)(),{_unstableFormatAPIError:Q,_unstableFormatValidationErrors:y}=(0,e.wq)(),n=(0,P.p)(Os,async()=>(await s.e(9971).then(s.bind(s,79971))).ROLE_LAYOUT,{combine(_,K){return[..._,...K]},defaultValue:[]}),V=(0,P.p)(os,async()=>(await s.e(9971).then(s.bind(s,79971))).FORM_INITIAL_VALUES,{combine(_,K){return{..._,...K}},defaultValue:os}),x=(0,P.p)(is.M,async()=>(await s.e(2466).then(s.bind(s,12466))).MagicLinkEE),[Z]=(0,P.H)(),S=v({id:"Settings.permissions.users.create",defaultMessage:"Invite new user"}),w=async(_,{setErrors:K})=>{H();const C=await Z({..._,roles:_.roles??[]});"data"in C?C.data.registrationToken?(Y(C.data.registrationToken),ts()):u({type:"warning",message:{id:"notification.error",defaultMessage:"An error occured"}}):(u({type:"warning",message:Q(C.error)}),(0,P.x)(C.error)&&C.error.name==="ValidationError"&&K(y(C.error))),W()},ts=()=>{c?p(c):a()},{buttonSubmitLabel:q,isDisabled:G,next:c}=hs[d];return x?(0,t.jsxs)(D.k,{onClose:a,labelledBy:"title",children:[(0,t.jsx)(O.r,{children:(0,t.jsx)(Es.B,{label:S,children:(0,t.jsx)(ms.m,{isCurrent:!0,children:S})})}),(0,t.jsx)(Ms.l1,{enableReinitialize:!0,initialValues:V??{},onSubmit:w,validationSchema:gs,validateOnChange:!1,children:({errors:_,handleChange:K,values:C,isSubmitting:ls})=>(0,t.jsxs)(e.lV,{children:[(0,t.jsx)(l.c,{children:(0,t.jsxs)(r.s,{direction:"column",alignItems:"stretch",gap:6,children:[d!=="create"&&(0,t.jsx)(x,{registrationToken:z}),(0,t.jsxs)(m.a,{children:[(0,t.jsx)(o.o,{variant:"beta",as:"h2",children:v({id:"app.components.Users.ModalCreateBody.block-title.details",defaultMessage:"User details"})}),(0,t.jsx)(m.a,{paddingTop:4,children:(0,t.jsx)(r.s,{direction:"column",alignItems:"stretch",gap:1,children:(0,t.jsx)(M.x,{gap:5,children:Ps.map(ns=>ns.map(B=>(0,t.jsx)(g.E,{...B.size,children:(0,t.jsx)(e.ah,{...B,disabled:G,error:_[B.name],onChange:K,value:C[B.name]})},B.name)))})})})]}),(0,t.jsxs)(m.a,{children:[(0,t.jsx)(o.o,{variant:"beta",as:"h2",children:v({id:"global.roles",defaultMessage:"User's role"})}),(0,t.jsx)(m.a,{paddingTop:4,children:(0,t.jsxs)(M.x,{gap:5,children:[(0,t.jsx)(g.E,{col:6,xs:12,children:(0,t.jsx)(is.S,{disabled:G,error:_.roles,onChange:K,value:C.roles??[]})}),n.map(ns=>ns.map(B=>(0,t.jsx)(g.E,{...B.size,children:(0,t.jsx)(e.ah,{...B,disabled:G,onChange:K,value:C[B.name]})},B.name)))]})})]})]})}),(0,t.jsx)(R.j,{startActions:(0,t.jsx)(E.$,{variant:"tertiary",onClick:a,type:"button",children:v({id:"app.components.Button.cancel",defaultMessage:"Cancel"})}),endActions:d==="create"?(0,t.jsx)(E.$,{type:"submit",loading:ls,children:v(q)}):(0,t.jsx)(E.$,{type:"button",loading:ls,onClick:a,children:v(q)})})]})})]}):null},os={firstname:"",lastname:"",email:"",roles:[]},Os=[],Ps=[[{intlLabel:{id:"Auth.form.firstname.label",defaultMessage:"First name"},name:"firstname",placeholder:{id:"Auth.form.firstname.placeholder",defaultMessage:"e.g. Kai"},type:"text",size:{col:6,xs:12},required:!0},{intlLabel:{id:"Auth.form.lastname.label",defaultMessage:"Last name"},name:"lastname",placeholder:{id:"Auth.form.lastname.placeholder",defaultMessage:"e.g. Doe"},type:"text",size:{col:6,xs:12}}],[{intlLabel:{id:"Auth.form.email.label",defaultMessage:"Email"},name:"email",placeholder:{id:"Auth.form.email.placeholder",defaultMessage:"e.g. kai.doe@strapi.io"},type:"email",size:{col:6,xs:12},required:!0}]],gs=k.Ik().shape({firstname:k.Yj().trim().required(e.iW.required),lastname:k.Yj(),email:k.Yj().email(e.iW.email).required(e.iW.required),roles:k.YO().min(1,e.iW.required).required(e.iW.required)}),hs={create:{buttonSubmitLabel:{id:"app.containers.Users.ModalForm.footer.button-success",defaultMessage:"Invite user"},isDisabled:!1,next:"magic-link"},"magic-link":{buttonSubmitLabel:{id:"global.finish",defaultMessage:"Finish"},isDisabled:!0,next:null}},As=({canDelete:a,headers:d=[],entriesToDelete:p=[],onClickDelete:z,onSelectRow:Y,withMainAction:v,withBulkActions:u,rows:H=[]})=>{const{push:W,location:{pathname:Q}}=(0,ss.W6)(),{formatMessage:y}=(0,N.A)();return(0,t.jsx)(h.N,{children:H.map(n=>{const V=p.findIndex(x=>x===n.id)!==-1;return(0,t.jsxs)(L.Tr,{...(0,e.qM)({fn:()=>W(`${Q}/${n.id}`),condition:u}),children:[v&&(0,t.jsx)(f.Td,{...e.dG,children:(0,t.jsx)(F.J,{"aria-label":y({id:"app.component.table.select.one-entry",defaultMessage:"Select {target}"},{target:(0,as.g)(n?.firstname??"",n.lastname)}),checked:V,onChange:()=>{Y&&Y({name:n.id,value:!V})}})}),d.map(({key:x,cellFormatter:Z,name:S,...w})=>(0,t.jsx)(f.Td,{children:typeof Z=="function"?Z(n,{key:x,name:S,formatMessage:y,...w}):(0,t.jsx)(o.o,{textColor:"neutral800",children:n[S]||"-"})},x)),u&&(0,t.jsx)(f.Td,{children:(0,t.jsxs)(r.s,{justifyContent:"end",children:[(0,t.jsx)(T.K,{onClick:()=>W(`${Q}/${n.id}`),label:y({id:"app.component.table.edit",defaultMessage:"Edit {target}"},{target:(0,as.g)(n.firstname??"",n.lastname)}),noBorder:!0,icon:(0,t.jsx)(ds.A,{})}),a&&(0,t.jsx)(m.a,{paddingLeft:1,...e.dG,children:(0,t.jsx)(T.K,{onClick:()=>{z&&z(n.id)},label:y({id:"global.delete-target",defaultMessage:"Delete {target}"},{target:(0,as.g)(n.firstname??"",n.lastname)}),noBorder:!0,icon:(0,t.jsx)(_s.A,{})})})]})})]},n.id)})})},rs=()=>{const{_unstableFormatAPIError:a}=(0,e.wq)(),[d,p]=i.useState(!1),z=(0,P.j)(c=>c.admin_app.permissions),{allowedActions:{canCreate:Y,canDelete:v,canRead:u}}=(0,e.ec)(z.settings?.users),H=(0,e.hN)(),{formatMessage:W}=(0,N.A)(),{search:Q}=(0,ss.zy)();(0,e.L4)();const{data:y,isError:n,isLoading:V}=(0,P.k)(j.parse(Q,{ignoreQueryPrefix:!0}),{skip:!u}),{pagination:x,users:Z}=y??{},S=(0,P.p)(cs,async()=>(await s.e(4178).then(s.bind(s,84178))).CreateActionEE),w=vs.map(c=>({...c,metadatas:{...c.metadatas,label:W(c.metadatas.label)}})),ts=W({id:"global.users",defaultMessage:"Users"}),q=()=>{p(c=>!c)},[G]=(0,P.J)();return S?(0,t.jsxs)(I.g,{"aria-busy":V,children:[(0,t.jsx)(e.x7,{name:"Users"}),(0,t.jsx)($.Q,{primaryAction:Y&&(0,t.jsx)(S,{onClick:q}),title:ts,subtitle:W({id:"Settings.permissions.users.listview.header.subtitle",defaultMessage:"All the users who have access to the Strapi admin panel"})}),u&&(0,t.jsx)(X.B,{startActions:(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(e.q7,{label:W({id:"app.component.search.label",defaultMessage:"Search for {target}"},{target:ts})}),(0,t.jsx)(es.F,{displayedFilters:Cs})]})}),(0,t.jsxs)(b.s,{children:[!u&&(0,t.jsx)(e.UW,{}),n&&(0,t.jsx)("div",{children:"TODO: An error occurred"}),u&&(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(e.Ee,{contentType:"Users",isLoading:V,onConfirmDeleteAll:async c=>{const _=await G({ids:c});"error"in _&&H({type:"warning",message:a(_.error)})},onConfirmDelete:async c=>{const _=await G({ids:[c]});"error"in _&&H({type:"warning",message:a(_.error)})},headers:w,rows:Z,withBulkActions:!0,withMainAction:v,children:(0,t.jsx)(As,{canDelete:v})}),x&&(0,t.jsx)(m.a,{paddingTop:4,children:(0,t.jsxs)(r.s,{alignItems:"flex-end",justifyContent:"space-between",children:[(0,t.jsx)(e._u,{}),(0,t.jsx)(e.W7,{pagination:x})]})})]})]}),d&&(0,t.jsx)(Ds,{onToggle:q})]}):null},vs=[{name:"firstname",key:"firstname",metadatas:{label:{id:"Settings.permissions.users.firstname",defaultMessage:"Firstname"},sortable:!0}},{name:"lastname",key:"lastname",metadatas:{label:{id:"Settings.permissions.users.lastname",defaultMessage:"Lastname"},sortable:!0}},{key:"email",name:"email",metadatas:{label:{id:"Settings.permissions.users.email",defaultMessage:"Email"},sortable:!0}},{key:"roles",name:"roles",metadatas:{label:{id:"Settings.permissions.users.roles",defaultMessage:"Roles"},sortable:!1},cellFormatter({roles:a},{formatMessage:d}){return(0,t.jsx)(o.o,{textColor:"neutral800",children:a.map(p=>d({id:`Settings.permissions.users.${p.code}`,defaultMessage:p.name})).join(`,
`)})}},{key:"username",name:"username",metadatas:{label:{id:"Settings.permissions.users.username",defaultMessage:"Username"},sortable:!0}},{key:"isActive",name:"isActive",metadatas:{label:{id:"Settings.permissions.users.user-status",defaultMessage:"User status"},sortable:!1},cellFormatter({isActive:a},{formatMessage:d}){return(0,t.jsxs)(r.s,{children:[(0,t.jsx)(e.nW,{variant:a?"success":"danger"}),(0,t.jsx)(o.o,{textColor:"neutral800",children:d({id:a?"Settings.permissions.users.active":"Settings.permissions.users.inactive",defaultMessage:a?"Active":"Inactive"})})]})}}],Cs=[{name:"firstname",metadatas:{label:"Firstname"},fieldSchema:{type:"string"}},{name:"lastname",metadatas:{label:"Lastname"},fieldSchema:{type:"string"}},{name:"email",metadatas:{label:"Email"},fieldSchema:{type:"email"}},{name:"username",metadatas:{label:"Username"},fieldSchema:{type:"string"}},{name:"isActive",metadatas:{label:"Active user"},fieldSchema:{type:"boolean"}}],Ls=()=>{const a=(0,P.p)(rs,async()=>(await s.e(7607).then(s.bind(s,17607))).UserListPageEE);return a?(0,t.jsx)(a,{}):null},fs=()=>{const a=(0,P.j)(d=>d.admin_app.permissions.settings?.users.main);return(0,t.jsx)(e.kz,{permissions:a,children:(0,t.jsx)(Ls,{})})}},7765:(J,A,s)=>{s.d(A,{M:()=>R,S:()=>h,a:()=>g});var t=s(92132),i=s(54894),E=s(73769),D=s(19106),O=s(5391),l=s(39747),r=s(72702),m=s(16034),o=s(63891),M=s(63209);const g=({children:T,target:I})=>{const $=(0,l.hN)(),{formatMessage:X}=(0,i.A)(),{copy:b}=(0,l.iD)(),e=X({id:"app.component.CopyToClipboard.label",defaultMessage:"Copy to clipboard"}),j=async()=>{await b(I)&&$({type:"info",message:{id:"notification.link-copied"}})};return(0,t.jsx)(l.bQ,{endAction:(0,t.jsx)(D.K,{label:e,noBorder:!0,icon:(0,t.jsx)(r.A,{}),onClick:j}),title:I,titleEllipsis:!0,subtitle:T,icon:(0,t.jsx)("span",{style:{fontSize:32},children:"\u2709\uFE0F"}),iconBackground:"neutral100"})},R=({registrationToken:T})=>{const{formatMessage:I}=(0,i.A)(),$=`${window.location.origin}${(0,E.K)()}/auth/register?registrationToken=${T}`;return(0,t.jsx)(g,{target:$,children:I({id:"app.components.Users.MagicLink.connect",defaultMessage:"Copy and share this link to give access to this user"})})},h=({disabled:T,error:I,onChange:$,value:X})=>{const{isLoading:b,roles:e}=(0,M.u)(),{formatMessage:j}=(0,i.A)(),N=I?j({id:I,defaultMessage:I}):"",ss=j({id:"app.components.Users.ModalCreateBody.block-title.roles",defaultMessage:"User's roles"}),P=j({id:"app.components.Users.ModalCreateBody.block-title.roles.description",defaultMessage:"A user can have one or several roles"}),es=j({id:"app.components.Select.placeholder",defaultMessage:"Select"});return(0,t.jsx)(O.KF,{id:"roles",disabled:T,error:N,hint:P,label:ss,name:"roles",onChange:U=>{$({target:{name:"roles",value:U}})},placeholder:es,startIcon:b?(0,t.jsx)(F,{}):void 0,value:X.map(U=>U.toString()),withTags:!0,required:!0,children:e.map(U=>(0,t.jsx)(O.fe,{value:U.id.toString(),children:j({id:`global.${U.code}`,defaultMessage:U.name})},U.id))})},L=(0,o.i7)`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(359deg);
  }
`,f=o.Ay.div`
  animation: ${L} 2s infinite linear;
`,F=()=>(0,t.jsx)(f,{children:(0,t.jsx)(m.A,{})})},63209:(J,A,s)=>{s.d(A,{u:()=>O});var t=s(21272),i=s(39747),E=s(54894),D=s(73769);const O=(l={},r)=>{const{locale:m}=(0,E.A)(),o=(0,i.QM)(m,{sensitivity:"base"}),{data:M,error:g,isError:R,isLoading:h,refetch:L}=(0,D.z)(l,r);return{roles:t.useMemo(()=>[...M??[]].sort((F,T)=>o.compare(F.name,T.name)),[M,o]),error:g,isError:R,isLoading:h,refetch:L}}},32372:(J,A,s)=>{s.d(A,{B:()=>o});var t=s(92132),i=s(21272),E=s(63891),D=s(44370),O=s(57842);const l=()=>(0,t.jsx)(D.a,{"aria-hidden":!0,paddingLeft:1,paddingRight:1,children:(0,t.jsx)(O.o,{variant:"pi",textColor:"neutral500",children:"/"})});l.displayName="Divider";var r=s(43242);const m=(0,E.Ay)(r.s)`
  // CrumbLinks do have padding-x, because they need to have a
  // interaction effect, which mis-aligns the breadcrumbs on the left.
  // This normalizes the behavior by moving the first item to left by
  // the same amount it has inner padding
  :first-child {
    margin-left: ${({theme:M})=>`calc(-1*${M.spaces[2]})`};
  }
`,o=({label:M,children:g,...R})=>{const h=i.Children.toArray(g);return(0,t.jsx)(D.a,{"aria-label":M,...R,children:(0,t.jsx)(m,{as:"ol",children:i.Children.map(h,(L,f)=>{const F=h.length>1&&f+1<h.length;return(0,t.jsxs)(r.s,{inline:!0,as:"li",children:[L,F&&(0,t.jsx)(l,{})]})})})})};o.displayName="Breadcrumbs"},714:(J,A,s)=>{s.d(A,{m:()=>D});var t=s(92132),i=s(44370),E=s(57842);const D=({children:O,isCurrent:l=!1,...r})=>(0,t.jsx)(i.a,{paddingLeft:2,paddingRight:2,paddingTop:1,paddingBottom:1,children:(0,t.jsx)(E.o,{variant:"pi",textColor:"neutral800",fontWeight:l?"bold":"normal","aria-current":l,...r,children:O})});D.displayName="Crumb"}}]);
