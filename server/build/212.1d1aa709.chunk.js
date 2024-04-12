"use strict";(self.webpackChunkserver=self.webpackChunkserver||[]).push([[212],{62482:(K,L,t)=>{t.d(L,{F:()=>c});var s=t(92132),M=t(21272),h=t(44370),D=t(69564),E=t(39747),P=t(94013),g=t(54894);const c=({displayedFilters:p})=>{const[u,y]=M.useState(!1),{formatMessage:B}=(0,g.A)(),O=M.useRef(null),A=()=>{y(I=>!I)};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsxs)(h.a,{paddingTop:1,paddingBottom:1,children:[(0,s.jsx)(D.$,{variant:"tertiary",ref:O,startIcon:(0,s.jsx)(P.A,{}),onClick:A,size:"S",children:B({id:"app.utils.filters",defaultMessage:"Filters"})}),u&&(0,s.jsx)(E.LC,{displayedFilters:p,isVisible:u,onToggle:A,source:O})]}),(0,s.jsx)(E.cZ,{filtersSchema:p})]})}},212:(K,L,t)=>{t.d(L,{ProtectedListPage:()=>Et});var s=t(92132),M=t(50642),h=t(6479),D=t(53900),E=t(43242),P=t(62228),g=t(44370),c=t(57842),p=t(57564),u=t(51882),y=t(83314),B=t(34508),O=t(21270),A=t(19106),I=t(71262),x=t(37373),H=t(53432),V=t(32559),J=t(55794),X=t(43121),b=t(44494),l=t(39747),U=t(54894),R=t(73769),k=t(62482),j=t(21272),w=t(32372),q=t(714),tt=t(62490),st=t(8046),S=t(33544),mt=t(15126),gt=t(63299),Mt=t(67014),Dt=t(59080),Pt=t(79275),Ot=t(14718),ct=t(82437),ut=t(61535),Lt=t(5790),ht=t(12083),pt=t(35223),At=t(5409),Ct=t(74930),vt=t(2600),ft=t(48940),Tt=t(41286),yt=t(51187),Bt=t(56336),It=t(39404),Ut=t(58692),Rt=t(54257),Wt=t(501),Kt=t(57646),xt=t(23120),jt=t(44414),St=t(25962),Ft=t(14664),Nt=t(42588),$t=t(90325),Vt=t(62785),zt=t(87443),Gt=t(41032),Qt=t(22957),Yt=t(93179),Zt=t(73055),Ht=t(15747),Jt=t(85306),Xt=t(77965),bt=t(26509),kt=t(84624),wt=t(71210),qt=t(32058),ts=t(81185),ss=t(82261);const et=R.n.injectEndpoints({endpoints:e=>({getAuditLogs:e.query({query:i=>({url:"/admin/audit-logs",config:{params:i}})}),getAuditLog:e.query({query:i=>`/admin/audit-logs/${i}`})}),overrideExisting:!1}),{useGetAuditLogsQuery:at,useGetAuditLogQuery:nt}=et,z=()=>{const{formatDate:e}=(0,U.A)();return r=>{const a=(0,tt.A)(r),d=e(a,{dateStyle:"long"}),n=e(a,{timeStyle:"medium",hourCycle:"h24"});return`${d}, ${n}`}},G={"entry.create":"Create entry{model, select, undefined {} other { ({model})}}","entry.update":"Update entry{model, select, undefined {} other { ({model})}}","entry.delete":"Delete entry{model, select, undefined {} other { ({model})}}","entry.publish":"Publish entry{model, select, undefined {} other { ({model})}}","entry.unpublish":"Unpublish entry{model, select, undefined {} other { ({model})}}","media.create":"Create media","media.update":"Update media","media.delete":"Delete media","media-folder.create":"Create media folder","media-folder.update":"Update media folder","media-folder.delete":"Delete media folder","user.create":"Create user","user.update":"Update user","user.delete":"Delete user","admin.auth.success":"Admin login","admin.logout":"Admin logout","content-type.create":"Create content type","content-type.update":"Update content type","content-type.delete":"Delete content type","component.create":"Create component","component.update":"Update component","component.delete":"Delete component","role.create":"Create role","role.update":"Update role","role.delete":"Delete role","permission.create":"Create permission","permission.update":"Update permission","permission.delete":"Delete permission"},F=e=>G[e]||e,it=({handleClose:e,logId:i})=>{const r=(0,l.hN)(),{_unstableFormatAPIError:a}=(0,l.wq)(),{data:d,error:n,isLoading:o}=nt(i);j.useEffect(()=>{n&&(r({type:"warning",message:a(n)}),e())},[n,a,e,r]);const _=z(),m=d&&"date"in d?_(d.date):"";return(0,s.jsxs)(M.k,{onClose:e,labelledBy:"title",children:[(0,s.jsx)(h.r,{children:(0,s.jsx)(w.B,{label:m,id:"title",children:(0,s.jsx)(q.m,{isCurrent:!0,children:m})})}),(0,s.jsx)(D.c,{children:(0,s.jsx)(ot,{isLoading:o,data:d,formattedDate:m})})]})},ot=({isLoading:e,data:i,formattedDate:r})=>{const{formatMessage:a}=(0,U.A)();if(e)return(0,s.jsx)(E.s,{padding:7,justifyContent:"center",alignItems:"center",children:(0,s.jsx)(P.a,{children:"Loading content..."})});const{action:d,user:n,payload:o}=i;return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(g.a,{marginBottom:3,children:(0,s.jsx)(c.o,{variant:"delta",id:"title",children:a({id:"Settings.permissions.auditLogs.details",defaultMessage:"Log Details"})})}),(0,s.jsxs)(p.x,{gap:4,gridCols:2,paddingTop:4,paddingBottom:4,paddingLeft:6,paddingRight:6,marginBottom:4,background:"neutral100",hasRadius:!0,children:[(0,s.jsx)(W,{actionLabel:a({id:"Settings.permissions.auditLogs.action",defaultMessage:"Action"}),actionName:a({id:`Settings.permissions.auditLogs.${d}`,defaultMessage:F(d)},{model:o?.model})}),(0,s.jsx)(W,{actionLabel:a({id:"Settings.permissions.auditLogs.date",defaultMessage:"Date"}),actionName:r}),(0,s.jsx)(W,{actionLabel:a({id:"Settings.permissions.auditLogs.user",defaultMessage:"User"}),actionName:n?.displayName||"-"}),(0,s.jsx)(W,{actionLabel:a({id:"Settings.permissions.auditLogs.userId",defaultMessage:"User ID"}),actionName:n?.id.toString()||"-"})]}),(0,s.jsx)(u.j,{value:JSON.stringify(o,null,2),disabled:!0,label:a({id:"Settings.permissions.auditLogs.payload",defaultMessage:"Payload"})})]})},W=({actionLabel:e,actionName:i})=>(0,s.jsxs)(E.s,{direction:"column",alignItems:"baseline",gap:1,children:[(0,s.jsx)(c.o,{textColor:"neutral600",variant:"sigma",children:e}),(0,s.jsx)(c.o,{textColor:"neutral600",children:i})]}),dt=({pagination:e}={pagination:{page:1,pageCount:0,pageSize:50,total:0}})=>(0,s.jsx)(g.a,{paddingTop:4,children:(0,s.jsxs)(E.s,{alignItems:"flex-end",justifyContent:"space-between",children:[(0,s.jsx)(l._u,{}),(0,s.jsx)(l.W7,{pagination:e})]})}),N=({headers:e,rows:i,onOpenModal:r})=>{const{formatMessage:a}=(0,U.A)(),d=z(),n=({type:o,value:_,model:m})=>o==="date"?d(_):o==="action"?a({id:`Settings.permissions.auditLogs.${_}`,defaultMessage:F(_)},{model:m}):_||"-";return(0,s.jsx)(y.N,{children:i.map(o=>(0,s.jsxs)(B.Tr,{...(0,l.qM)({fn:()=>r(o.id)}),children:[e?.map(({key:_,name:m,cellFormatter:C})=>{const v=o[m];return(0,s.jsx)(O.Td,{children:(0,s.jsx)(c.o,{textColor:"neutral800",children:n({type:_,value:C?C(v):v,model:o.payload?.model})})},_)}),(0,s.jsx)(O.Td,{...l.dG,children:(0,s.jsx)(E.s,{justifyContent:"end",children:(0,s.jsx)(A.K,{onClick:()=>r(o.id),"aria-label":a({id:"app.component.table.view",defaultMessage:"{target} details"},{target:`${o.action} action`}),noBorder:!0,icon:(0,s.jsx)(st.A,{})})})})]},o.id))})};N.defaultProps={rows:[]},N.propTypes={headers:S.array.isRequired,rows:S.array,onOpenModal:S.func.isRequired};const rt=({canReadAuditLogs:e,canReadUsers:i})=>{const r=(0,l.hN)(),{_unstableFormatAPIError:a}=(0,l.wq)(),[{query:d}]=(0,l.sq)(),{data:n,error:o,isError:_,isLoading:m}=(0,R.k)({},{skip:!i,refetchOnMountOrArgChange:!0});j.useEffect(()=>{o&&r({type:"warning",message:a(o)})},[o,r,a]);const{data:C,isLoading:v,isError:$,error:f}=at(d,{refetchOnMountOrArgChange:!0,skip:!e});return j.useEffect(()=>{f&&r({type:"warning",message:a(f)})},[f,r,a]),{auditLogs:C,users:n?.users??[],isLoading:m||v,hasError:$||_}},Q=({value:e,options:i,onChange:r}={value:void 0})=>{const{formatMessage:a}=(0,U.A)(),d=a({id:"Settings.permissions.auditLogs.filter.aria-label",defaultMessage:"Search and select an option to filter"});return(0,s.jsx)(I.G3,{"aria-label":d,value:e,onChange:r,children:i?.map(({label:n,customValue:o})=>(0,s.jsx)(x.j,{value:o,children:n},o))})},Y=[{intlLabel:{id:"components.FilterOptions.FILTER_TYPES.$eq",defaultMessage:"is"},value:"$eq"},{intlLabel:{id:"components.FilterOptions.FILTER_TYPES.$ne",defaultMessage:"is not"},value:"$ne"}],lt=({formatMessage:e,users:i,canReadUsers:r})=>{const a=[{name:"action",metadatas:{customOperators:Y,label:e({id:"Settings.permissions.auditLogs.action",defaultMessage:"Action"}),customInput:Q,options:Object.keys(G).map(d=>({label:e({id:`Settings.permissions.auditLogs.${d}`,defaultMessage:F(d)},{model:void 0}),customValue:d}))},fieldSchema:{type:"enumeration"}},{name:"date",metadatas:{label:e({id:"Settings.permissions.auditLogs.date",defaultMessage:"Date"})},fieldSchema:{type:"datetime"}}];if(r&&i){const d=n=>n.username?n.username:n.firstname&&n.lastname?e({id:"Settings.permissions.auditLogs.user.fullname",defaultMessage:"{firstname} {lastname}"},{firstname:n.firstname,lastname:n.lastname}):n.email;return[...a,{name:"user",metadatas:{customOperators:Y,label:e({id:"Settings.permissions.auditLogs.user",defaultMessage:"User"}),options:i.map(n=>({label:d(n),customValue:n.id.toString()})),customInput:Q},fieldSchema:{type:"relation",mainField:{name:"id"}}}]}return a},_t=()=>{const{formatMessage:e}=(0,U.A)(),i=(0,R.j)(T=>T.admin_app.permissions.settings),{allowedActions:{canRead:r,canReadUsers:a},isLoading:d}=(0,l.ec)({...i?.auditLogs,readUsers:i?.users.read||[]}),[{query:n},o]=(0,l.sq)(),{auditLogs:_,users:m,isLoading:C,hasError:v}=rt({canReadAuditLogs:r,canReadUsers:a});(0,l.L4)();const $=lt({formatMessage:e,users:m,canReadUsers:a}),f=[{name:"action",key:"action",metadatas:{label:e({id:"Settings.permissions.auditLogs.action",defaultMessage:"Action"}),sortable:!0}},{name:"date",key:"date",metadatas:{label:e({id:"Settings.permissions.auditLogs.date",defaultMessage:"Date"}),sortable:!0}},{key:"user",name:"user",metadatas:{label:e({id:"Settings.permissions.auditLogs.user",defaultMessage:"User"}),sortable:!1},cellFormatter:T=>T?T.displayName:""}];if(v)return(0,s.jsx)(H.P,{children:(0,s.jsx)(V.s,{children:(0,s.jsx)(g.a,{paddingTop:8,children:(0,s.jsx)(l.hH,{})})})});const Z=C||d;return(0,s.jsxs)(J.g,{"aria-busy":Z,children:[(0,s.jsx)(l.x7,{name:e({id:"global.auditLogs",defaultMessage:"Audit Logs"})}),(0,s.jsx)(X.Q,{title:e({id:"global.auditLogs",defaultMessage:"Audit Logs"}),subtitle:e({id:"Settings.permissions.auditLogs.listview.header.subtitle",defaultMessage:"Logs of all the activities that happened in your environment"})}),(0,s.jsx)(b.B,{startActions:(0,s.jsx)(k.F,{displayedFilters:$})}),(0,s.jsxs)(V.s,{children:[(0,s.jsx)(l.Ee,{contentType:"Audit logs",headers:f,rows:_?.results||[],withBulkActions:!0,isLoading:Z,children:(0,s.jsx)(N,{headers:f,rows:_?.results||[],onOpenModal:T=>o({id:`${T}`})})}),_?.pagination&&(0,s.jsx)(dt,{pagination:_.pagination})]}),n?.id&&(0,s.jsx)(it,{handleClose:()=>o({id:null},"remove"),logId:n.id})]})},Et=()=>{const e=(0,R.j)(i=>i.admin_app.permissions.settings?.auditLogs?.main);return(0,s.jsx)(l.kz,{permissions:e,children:(0,s.jsx)(_t,{})})}},32372:(K,L,t)=>{t.d(L,{B:()=>p});var s=t(92132),M=t(21272),h=t(63891),D=t(44370),E=t(57842);const P=()=>(0,s.jsx)(D.a,{"aria-hidden":!0,paddingLeft:1,paddingRight:1,children:(0,s.jsx)(E.o,{variant:"pi",textColor:"neutral500",children:"/"})});P.displayName="Divider";var g=t(43242);const c=(0,h.Ay)(g.s)`
  // CrumbLinks do have padding-x, because they need to have a
  // interaction effect, which mis-aligns the breadcrumbs on the left.
  // This normalizes the behavior by moving the first item to left by
  // the same amount it has inner padding
  :first-child {
    margin-left: ${({theme:u})=>`calc(-1*${u.spaces[2]})`};
  }
`,p=({label:u,children:y,...B})=>{const O=M.Children.toArray(y);return(0,s.jsx)(D.a,{"aria-label":u,...B,children:(0,s.jsx)(c,{as:"ol",children:M.Children.map(O,(A,I)=>{const x=O.length>1&&I+1<O.length;return(0,s.jsxs)(g.s,{inline:!0,as:"li",children:[A,x&&(0,s.jsx)(P,{})]})})})})};p.displayName="Breadcrumbs"},714:(K,L,t)=>{t.d(L,{m:()=>D});var s=t(92132),M=t(44370),h=t(57842);const D=({children:E,isCurrent:P=!1,...g})=>(0,s.jsx)(M.a,{paddingLeft:2,paddingRight:2,paddingTop:1,paddingBottom:1,children:(0,s.jsx)(h.o,{variant:"pi",textColor:"neutral800",fontWeight:P?"bold":"normal","aria-current":P,...g,children:E})});D.displayName="Crumb"}}]);
