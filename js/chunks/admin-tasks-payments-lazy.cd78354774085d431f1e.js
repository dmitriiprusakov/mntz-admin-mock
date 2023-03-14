"use strict";(self.webpackChunkmonetize_frontend_admin_panel=self.webpackChunkmonetize_frontend_admin_panel||[]).push([[951],{44580:function(e,t,a){a.r(t),a.d(t,{default:function(){return _}}),a(15267);var n=a(64713),l=a(64478),r=a(67294),m=a(18983),c=a(75937),d=a(36406),o=a(1462),i=a(1586),s=a(81282),u=({error:e})=>{const t=(0,d.TL)(),a=(0,d.CG)(s.z);return r.createElement(m.xq,{error:e,retryRequest:()=>{t((0,i.cQ)(a))}})},p=()=>r.createElement(m.aN,null),E=(a(53294),a(56697)),y=(a(6373),a(82891)),I=(a(45673),a(8448)),f=(a(1025),a(65400)),k=(a(54214),a(12386)),C=(a(15144),a(2307)),h=a(15873);const{Column:v}=C.Z;var w=({data:e})=>{const t=(0,d.TL)(),[a,n]=(0,r.useState)(),{t:m}=(0,l.$)(),{t:c}=(0,l.$)("admin-tasks-payments"),u=(0,d.CG)(s.z),p=r.createElement(k.default,{onClick:({key:e})=>{a?.id&&t((0,i.Ww)({id:a.id,state:"rejected",rejectionReasonCode:e}))}},r.createElement(k.default.Item,{key:o.t.POOR_QUALITY},c(`rejection-reasons.${o.t.POOR_QUALITY}`)),r.createElement(k.default.Item,{key:o.t.INAPPROPRIATE},c(`rejection-reasons.${o.t.INAPPROPRIATE}`)),r.createElement(k.default.Item,{key:o.t.COPYRIGHT_VIOLATION},c(`rejection-reasons.${o.t.COPYRIGHT_VIOLATION}`)));return r.createElement("section",{className:"layout-tNcSQ"},r.createElement(C.Z,{dataSource:e,rowKey:"id",pagination:!1},r.createElement(v,{ellipsis:!0,title:c("columns.creator-id"),dataIndex:"creatorId",key:"creatorId",width:"10%"}),r.createElement(v,{ellipsis:!0,title:c("columns.amount"),dataIndex:"amount",key:"amount"}),r.createElement(v,{ellipsis:!0,title:c("columns.created-at"),dataIndex:"createdAt",key:"createdAt",width:"15%",render:e=>new Date(e).toLocaleString()||m("n/a")}),r.createElement(v,{ellipsis:!0,title:c("columns.payment-method-type"),dataIndex:"paymentMethodType",key:"paymentMethodType",width:"12%",render:e=>e||m("n/a")}),r.createElement(v,{ellipsis:!0,title:c("columns.state"),dataIndex:"state",key:"state",width:"10%"}),r.createElement(v,{ellipsis:!0,title:c("columns.payment-credentials"),dataIndex:"paymentMethodCredentials",key:"paymentMethodCredentials",className:"paymentCredentialsCell-wOcjZ",render:e=>r.createElement(r.Fragment,null,r.createElement("span",null,e.card_number||m("n/a")),r.createElement("span",null,e.holder_name||m("n/a")))}),r.createElement(v,{width:"80px",title:"",key:"action",render:(e,t)=>r.createElement(f.default,{className:"viewButton-cXPUF",type:"link",onClick:()=>{n(t)}},m("view"))})),r.createElement(E.Z,{className:"modal-O8IK6",title:c("review-modal.title"),visible:!!a,onCancel:()=>{n(void 0)},footer:null},r.createElement(I.default,{column:{xxl:2,xl:2,lg:2,md:1,sm:1,xs:1},size:"small",title:c("review-modal.description-title")},r.createElement(I.default.Item,{label:c("columns.payment-id")},a?.id||m("n/a")),r.createElement(I.default.Item,{label:c("columns.creator-id")},a?.creatorId||m("n/a")),r.createElement(I.default.Item,{label:c("columns.amount")},a?.amount||m("n/a")),r.createElement(I.default.Item,{label:c("columns.state")},a?.state||m("n/a")),r.createElement(I.default.Item,{label:c("columns.payment-method-type")},a?.paymentMethodType||m("n/a")),r.createElement(I.default.Item,{label:c("columns.created-at")},new Date(a?.createdAt||"").toLocaleString()||m("n/a")),r.createElement(I.default.Item,{label:c("columns.payment-credentials")},a?.paymentMethodCredentials.holder_name||m("n/a")),r.createElement(I.default.Item,{label:c("columns.payment-credentials")},a?.paymentMethodCredentials.card_number||m("n/a"))),r.createElement("div",{className:"modalControls-u6ag4"},u!==o.y.completed&&r.createElement(f.default,{icon:r.createElement(h.Z,null),onClick:()=>{a?.id&&t((0,i.Ww)({id:a.id,state:"completed"}))}},m("approve")),u!==o.y.rejected&&r.createElement(y.default.Button,{overlay:p},m("reject")))))};const g=(0,c.g_)((e=>r.createElement(w,{data:e})),(()=>r.createElement(r.Fragment,null)),(()=>r.createElement(p,null)),(e=>r.createElement(u,{error:e})));var _=()=>{const e=(0,d.TL)(),t=(0,d.CG)(s.y),a=(0,d.CG)(s.z),{t:u}=(0,l.$)("admin-tasks-payments"),{t:p}=(0,l.$)();return(0,r.useEffect)((()=>(e((0,i.cQ)(a)),()=>{e((0,i.HI)((0,c.Xi)()))})),[a,e]),r.createElement(r.Fragment,null,r.createElement(m.fi,{goBack:!0,title:u("title"),actions:[r.createElement(n.default.Group,{key:"radio",value:a,onChange:t=>{e((0,i.ak)(t.target.value))}},r.createElement(n.default.Button,{value:o.y.pending},p("pending")),r.createElement(n.default.Button,{value:o.y.rejected},p("rejected")),r.createElement(n.default.Button,{value:o.y.completed},p("approved")))]}),r.createElement(r.Fragment,null,g(t)))}}}]);
//# sourceMappingURL=js\chunks\admin-tasks-payments-lazy.cd78354774085d431f1e.js.map