(this.webpackJsonpclient=this.webpackJsonpclient||[]).push([[0],{18:function(e,t,n){},21:function(e,t,n){},39:function(e,t,n){},40:function(e,t,n){},69:function(e,t,n){},70:function(e,t,n){"use strict";n.r(t);var c=n(1),a=n.n(c),r=n(32),s=n.n(r),i=n(3),j=n.n(i),l=n(9),o=n(2),d=(n(39),n(40),n(8)),u=n(0),b=function(){return Object(u.jsx)("div",{className:"navbar",children:Object(u.jsxs)("ul",{children:[Object(u.jsx)("li",{children:Object(u.jsx)(d.b,{to:"/",children:"Home"})}),Object(u.jsx)("li",{children:Object(u.jsx)(d.b,{to:"/inventory",children:"\uc7ac\uace0\uc0c1\ud669"})}),Object(u.jsx)("li",{children:Object(u.jsx)(d.b,{to:"/event",children:"\uc774\ubca4\ud2b8 \ub85c\uadf8"})}),Object(u.jsx)("li",{children:Object(u.jsx)(d.b,{to:"/add",children:"\uc7ac\uace0\ucd94\uac00"})}),Object(u.jsx)("li",{children:Object(u.jsx)(d.b,{to:"/use",children:"\uc7ac\uace0\uc0ac\uc6a9"})}),Object(u.jsx)("li",{children:Object(u.jsx)(d.b,{to:"/user",children:"\uc0ac\uc6a9\uc790"})})]})})},v=n(16),O=n.n(v),x=n(7),h=n.n(x),p=a.a.createContext(""),m=a.a.createContext(""),f=a.a.createContext(""),y=a.a.createContext(""),_=a.a.createContext(""),g=function(e){var t=e.children,n=O()().format("YYYY-MM-DD"),a=Object(c.useState)([{id:0,inventory_name:"",inventory_type:"",inventory_amount:0,expiration_date:n,import_date:n,inventory_desc:"",events:[{event_type:"",event_desc:"",event_date:""}]}]),r=Object(o.a)(a,2),s=r[0],i=r[1],d=Object(c.useState)([{id:0,event_type:"",event_amount:0,event_date:n,event_desc:"",inventory_id:"",user_id:"",inventory:{inventory_name:"",inventory_type:""},user:{user_name:""}}]),b=Object(o.a)(d,2),v=b[0],x=b[1],g=Object(c.useCallback)(Object(l.a)(j.a.mark((function e(){var t,n;return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,h.a.get("/inventory/");case 3:return t=e.sent,e.next=6,t.data;case 6:return n=e.sent,e.next=9,n.forEach((function(e){e.expiration_date=C(e.expiration_date),e.import_date=C(e.import_date),e.events.forEach((function(e){e.event_date=C(e.event_date)}))}));case 9:return e.next=11,i(n);case 11:e.next=16;break;case 13:e.prev=13,e.t0=e.catch(0),console.log(e.t0);case 16:case"end":return e.stop()}}),e,null,[[0,13]])}))),[]),N=Object(c.useCallback)(Object(l.a)(j.a.mark((function e(){var t,n;return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,h.a.get("/event/");case 3:return t=e.sent,e.next=6,t.data;case 6:return n=e.sent,e.next=9,n.forEach((function(e){e.event_date=C(e.event_date)}));case 9:return e.next=11,x(n);case 11:e.next=16;break;case 13:e.prev=13,e.t0=e.catch(0),console.log(e.t0);case 16:case"end":return e.stop()}}),e,null,[[0,13]])}))),[]);return Object(u.jsx)(p.Provider,{value:n,children:Object(u.jsx)(m.Provider,{value:s,children:Object(u.jsx)(f.Provider,{value:g,children:Object(u.jsx)(y.Provider,{value:v,children:Object(u.jsx)(_.Provider,{value:N,children:t})})})})})};function C(e){var t=new Date(e),n=""+(t.getMonth()+1),c=""+t.getDate(),a=t.getFullYear();return n.length<2&&(n="0"+n),c.length<2&&(c="0"+c),[a,n,c].join("-")}n(21);var N=function(e){var t=e.inventorySelect;e.setDescComp;return Object(u.jsx)("div",{children:Object(u.jsxs)("div",{className:"table",children:[Object(u.jsx)("div",{className:"descHeader header",children:Object(u.jsx)("div",{className:"headerCell",children:Object(u.jsx)("h4",{children:t.inventory_name})})}),Object(u.jsx)("div",{className:"descRow",children:Object(u.jsxs)("div",{className:"descCell",children:[Object(u.jsxs)("p",{children:[Object(u.jsx)("b",{children:"\uc7ac\uace0\ud0c0\uc785:"})," ",t.inventory_type]}),Object(u.jsxs)("p",{children:[Object(u.jsx)("b",{children:"\uc7ac\uace0\uc591:"})," ",t.inventory_amount]}),Object(u.jsxs)("p",{children:[Object(u.jsx)("b",{children:"\uc720\ud1b5\uae30\ud55c:"})," ",t.expiration_date]}),Object(u.jsxs)("p",{children:[Object(u.jsx)("b",{children:"\uc785\uace0\ub0a0\uc9dc:"})," ",t.import_date]}),Object(u.jsx)("h3",{children:"\uc7ac\uace0\uc124\uba85"}),Object(u.jsx)("span",{children:t.inventory_desc})]})})]})})},S=function(e){var t=e.inventory,n=e.setInventorySelect,c=e.setDescComp,a=function(e){var a=e.target.getAttribute("data-value"),r=t.filter((function(e){return e.id===+a}));n(r[0]),c(!0)};return Object(u.jsxs)("div",{className:"table",children:[Object(u.jsxs)("div",{className:"inventoryHeader header",children:[Object(u.jsx)("div",{className:"headerCell",children:Object(u.jsx)("p",{children:"\uc774\ub984"})}),Object(u.jsx)("div",{className:"headerCell",children:Object(u.jsx)("p",{children:"\ud0c0\uc785"})}),Object(u.jsx)("div",{className:"headerCell",children:Object(u.jsx)("p",{children:"\uc7ac\uace0\uc591"})}),Object(u.jsx)("div",{className:"headerCell",children:Object(u.jsx)("p",{children:"\uc720\ud1b5\uae30\ud55c"})})]}),t.map((function(e){return Object(u.jsxs)("div",{className:"inventoryRow row",children:[Object(u.jsx)("div",{className:"cell",children:Object(u.jsx)("p",{"data-value":e.id,onClick:a,children:e.inventory_name})}),Object(u.jsx)("div",{className:"cell",children:Object(u.jsx)("p",{children:e.inventory_type})}),Object(u.jsx)("div",{className:"cell",children:Object(u.jsx)("p",{children:e.inventory_amount})}),Object(u.jsx)("div",{className:"cell",children:Object(u.jsx)("p",{children:e.expiration_date})})]},e.id)}))]})},w=function(e){var t=e.inventorySelect;return Object(u.jsxs)("div",{className:"table",children:[Object(u.jsxs)("div",{className:"inventoryEventsHeader header",children:[Object(u.jsx)("div",{className:"headerCell",children:Object(u.jsx)("p",{children:"\uc774\ubca4\ud2b8\ud0c0\uc785"})}),Object(u.jsx)("div",{className:"headerCell",children:Object(u.jsx)("p",{children:"\uc7ac\uace0\uc591"})}),Object(u.jsx)("div",{className:"headerCell",children:Object(u.jsx)("p",{children:"\ub0a0\uc9dc"})})]}),t.events.map((function(e,t){return Object(u.jsxs)("div",{className:"inventoryEventsRow row",children:[Object(u.jsx)("div",{className:"cell",children:Object(u.jsx)("p",{children:e.event_type})}),Object(u.jsx)("div",{className:"cell",children:Object(u.jsx)("p",{children:e.event_amount})}),Object(u.jsx)("div",{className:"cell",children:Object(u.jsx)("p",{children:e.event_date})})]},t)}))]})},k=n(13),D=n(4),E=(n(69),n(5)),I=function(e){var t=e.inventorySelect,n=Object(E.f)(),a=Object(c.useContext)(p),r=Object(c.useState)(t),s=Object(o.a)(r,2),i=s[0],d=s[1],b=Object(c.useState)(""),v=Object(o.a)(b,2),O=v[0],x=v[1],m=function(e){e.preventDefault(),d(Object(D.a)(Object(D.a)({},i),{},Object(k.a)({},e.target.name,e.target.value)))},f=function(){var e=Object(l.a)(j.a.mark((function e(c){return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return c.preventDefault(),e.prev=1,e.next=4,h.a.patch("/inventory/edit",i);case 4:return e.next=6,h.a.post("/event/edit",{event:{event_desc:O,today:a},prev:t,new:i});case 6:return e.next=8,n.push("/");case 8:e.next=13;break;case 10:e.prev=10,e.t0=e.catch(1),console.log(e.t0);case 13:case"end":return e.stop()}}),e,null,[[1,10]])})));return function(t){return e.apply(this,arguments)}}();return Object(c.useEffect)((function(){d(t),console.log(t)}),[t]),Object(u.jsx)("div",{children:Object(u.jsx)("div",{className:"editContainer",children:Object(u.jsxs)("div",{className:"table",children:[Object(u.jsx)("div",{className:"descHeader header",children:Object(u.jsx)("div",{className:"headerCell",children:Object(u.jsx)("h4",{children:"\uc7ac\uace0\ub0b4\uc6a9\ubcc0\uacbd"})})}),Object(u.jsxs)("form",{onSubmit:f,children:[Object(u.jsxs)("label",{children:["\uc7ac\uace0\uc774\ub984:",Object(u.jsx)("input",{name:"inventory_name",type:"text",onChange:m,value:i.inventory_name})]}),Object(u.jsxs)("label",{children:["\uc7ac\uace0\ud0c0\uc785:",Object(u.jsx)("input",{name:"inventory_type",type:"text",onChange:m,value:i.inventory_type})]}),Object(u.jsxs)("label",{children:["\uc7ac\uace0\uc591",Object(u.jsx)("input",{name:"inventory_amount",type:"number",onChange:m,value:i.inventory_amount})]}),Object(u.jsxs)("label",{children:["\uc720\ud1b5\uae30\ud55c",Object(u.jsx)("input",{name:"expiration_date",type:"date",onChange:m,value:i.expiration_date})]}),Object(u.jsxs)("label",{children:["\uc785\uace0\ub0a0\uc9dc",Object(u.jsx)("input",{name:"import_date",type:"date",onChange:m,value:i.import_date})]}),Object(u.jsxs)("label",{children:["\uc7ac\uace0\uc124\uba85",Object(u.jsx)("input",{name:"inventory_desc",type:"text",onChange:m,value:i.inventory_desc})]}),Object(u.jsxs)("label",{children:["\ub0b4\uc6a9\ubcc0\uacbd\uc774\uc720",Object(u.jsx)("input",{name:"event_desc",type:"text",onChange:function(e){return x(e.target.value)},value:O})]}),Object(u.jsx)("button",{children:"\ub0b4\uc6a9\ubcc0\uacbd\ud655\uc815"})]})]})})})},Y=function(e){var t=e.setInventory,n=O()().format("YYYY-MM"),a=Object(c.useContext)(m),r=Object(c.useState)("default"),s=Object(o.a)(r,2),i=s[0],j=s[1],l=Object(c.useState)(n),d=Object(o.a)(l,2),b=d[0],v=d[1],x=Object(c.useState)("default"),h=Object(o.a)(x,2),p=h[0],f=h[1];return Object(u.jsx)("div",{children:Object(u.jsxs)("form",{onSubmit:function(e){if(e.preventDefault(),"expire"===i){var n=a.filter((function(e){return e.expiration_date.includes(b)}));t(n)}else if("type"===i){if("default"===p)t(a);else{var c=a.filter((function(e){return e.inventory_type.includes(p)}));t(c)}console.log("type")}else"default"===i&&t(a)},children:[Object(u.jsxs)("select",{onChange:function(e){e.preventDefault(),j(e.target.value)},children:[Object(u.jsx)("option",{value:"default",children:"\uac80\uc0c9\ud56d\ubaa9\uc744 \uc120\ud0dd\ud558\uc138\uc694"}),Object(u.jsx)("option",{value:"expire",children:"\uc720\ud1b5\uae30\ud55c"}),Object(u.jsx)("option",{value:"type",children:"\ud0c0\uc785"})]}),"default"===i?"":"expire"===i?Object(u.jsxs)("label",{children:["expiration date by month",Object(u.jsx)("input",{type:"month",value:b,onChange:function(e){e.preventDefault(),v(e.target.value)}})]}):"type"===i?Object(u.jsxs)("label",{children:["inventory type",Object(u.jsxs)("select",{onChange:function(e){e.preventDefault(),f(e.target.value)},children:[Object(u.jsx)("option",{value:"default",children:"\ud0c0\uc785\uc744 \uc120\ud0dd\ud574\uc8fc\uc138\uc694"}),Object(u.jsx)("option",{value:"\ud649",children:"\ud649"}),Object(u.jsx)("option",{value:"\ubab0\ud2b8",children:"\ubab0\ud2b8"}),Object(u.jsx)("option",{value:"\uc774\uc2a4\ud2b8",children:"\uc774\uc2a4\ud2b8"}),Object(u.jsx)("option",{value:"\ubd80\uc7ac\ub8cc",children:"\ubd80\uc7ac\ub8cc"})]})]}):"",Object(u.jsx)("button",{children:"Search"})]})})},T=function(){var e=Object(c.useContext)(f),t=Object(c.useContext)(m),n=Object(c.useContext)(p),a=Object(c.useState)(!1),r=Object(o.a)(a,2),s=r[0],i=r[1],j=Object(c.useState)(!1),l=Object(o.a)(j,2),d=l[0],b=l[1],v=Object(c.useState)([{id:0,inventory_name:"",inventory_type:"",inventory_amount:0,expiration_date:n,import_date:n,inventory_desc:"",events:[{event_type:"",event_desc:"",event_date:""}]}]),O=Object(o.a)(v,2),x=O[0],h=O[1],y=Object(c.useState)({id:0,inventory_name:"",inventory_type:"",inventory_amount:0,expiration_date:n,import_date:n,inventory_desc:"",events:[{event_type:"",event_desc:"",event_date:""}]}),_=Object(o.a)(y,2),g=_[0],C=_[1];return Object(c.useEffect)((function(){e()}),[e]),Object(c.useEffect)((function(){h(t)}),[t]),Object(u.jsx)("div",{children:Object(u.jsxs)("div",{className:"tableContainer",children:[Object(u.jsx)("h2",{children:"\uc7ac\uace0\uc0c1\ud669"}),s?Object(u.jsxs)(u.Fragment,{children:[d?Object(u.jsx)(I,{inventorySelect:g}):Object(u.jsxs)(u.Fragment,{children:[Object(u.jsx)(N,{inventorySelect:g,setInventorySelect:C,setDescComp:i}),Object(u.jsx)(w,{inventorySelect:g})]}),Object(u.jsx)("button",{className:"editButton",onClick:function(e){e.preventDefault(),b(!d)},children:"\ub0b4\uc6a9\ubcc0\uacbd"}),Object(u.jsx)("button",{className:"closeButton",onClick:function(e){e.preventDefault(),i(!1)},children:"\ub2eb\uae30"})]}):"",Object(u.jsx)(S,{inventory:x,setInventory:h,setInventorySelect:C,setDescComp:i}),Object(u.jsx)(Y,{setInventory:h})]})})},F=function(e){var t=e.eventSelect,n=e.setEventSelect;return Object(u.jsxs)("div",{children:[Object(u.jsx)("h2",{children:"\uc774\ubca4\ud2b8 \uac1c\ubcc4\uc815\ubcf4"}),Object(u.jsxs)("div",{className:"table",children:[Object(u.jsx)("div",{className:"descHeader header",children:Object(u.jsx)("div",{className:"headerCell",children:Object(u.jsx)("h4",{children:t.inventory.inventory_name})})}),Object(u.jsxs)("div",{className:"descRow",children:[Object(u.jsxs)("div",{className:"descCell",children:[Object(u.jsxs)("p",{children:[Object(u.jsx)("b",{children:"\uc7ac\uace0\uc774\ub984:"})," ",t.inventory.inventory_name]}),Object(u.jsxs)("p",{children:[Object(u.jsx)("b",{children:"\uc774\ubca4\ud2b8\ub0a0\uc9dc:"})," ",t.event_date]}),Object(u.jsxs)("p",{children:[Object(u.jsx)("b",{children:"\ubcc0\uacbd\uc591:"})," ",t.event_amount]}),Object(u.jsx)("h3",{children:"\uc774\ubca4\ud2b8\uc124\uba85"}),Object(u.jsx)("span",{children:t.event_desc})]}),Object(u.jsx)("button",{className:"closeButton",onClick:function(e){e.preventDefault(),n(Object(D.a)(Object(D.a)({},t),{},{id:0}))},children:"\ub2eb\uae30"})]})]})]})},H=function(e){var t=e.events,n=e.setEventSelect,c=function(e){var c=e.target.getAttribute("data-value"),a=t.filter((function(e){return e.id===+c}));n(a[0])};return Object(u.jsxs)("div",{className:"table",children:[Object(u.jsxs)("div",{className:"eventHeader header",children:[Object(u.jsx)("div",{className:"headerCell",children:Object(u.jsx)("p",{children:"\ub0a0\uc9dc"})}),Object(u.jsx)("div",{className:"headerCell",children:Object(u.jsx)("p",{children:"\uc774\ubca4\ud2b8\ud0c0\uc785"})}),Object(u.jsx)("div",{className:"headerCell",children:Object(u.jsx)("p",{children:"\ubcc0\uacbd\uc591"})}),Object(u.jsx)("div",{className:"headerCell",children:Object(u.jsx)("p",{children:"\uc7ac\uace0\uc774\ub984"})}),Object(u.jsx)("div",{className:"headerCell",children:Object(u.jsx)("p",{children:"\uc7ac\uace0\ud0c0\uc785"})}),Object(u.jsx)("div",{className:"headerCell",children:Object(u.jsx)("p",{children:"\uc0ac\uc6a9\uc790"})})]}),t.map((function(e){return Object(u.jsxs)("div",{className:"eventRow row",children:[Object(u.jsx)("div",{className:"cell date",children:Object(u.jsx)("p",{children:e.event_date})}),Object(u.jsx)("div",{className:"cell",children:Object(u.jsx)("p",{children:e.event_type})}),Object(u.jsx)("div",{className:"cell",children:Object(u.jsx)("p",{children:e.event_amount})}),Object(u.jsx)("div",{className:"cell",children:Object(u.jsx)("p",{"data-value":e.id,onClick:c,children:e.inventory.inventory_name})}),Object(u.jsx)("div",{className:"cell",children:Object(u.jsx)("p",{children:e.inventory.inventory_type})}),Object(u.jsx)("div",{className:"cell",children:Object(u.jsx)("p",{children:e.user.user_name})})]},e.id)}))]})},M=function(e){var t=e.setEvents,n=O()().format("YYYY-MM"),a=(Object(c.useContext)(m),Object(c.useContext)(y)),r=Object(c.useState)("default"),s=Object(o.a)(r,2),i=s[0],j=s[1],l=Object(c.useState)(n),d=Object(o.a)(l,2),b=d[0],v=d[1],x=Object(c.useState)(""),h=Object(o.a)(x,2),p=h[0],f=h[1],_=Object(c.useState)(""),g=Object(o.a)(_,2),C=g[0],N=g[1],S=Object(c.useState)("default"),w=Object(o.a)(S,2),k=w[0],D=w[1];return Object(u.jsx)("div",{children:Object(u.jsxs)("form",{onSubmit:function(e){if(e.preventDefault(),"default"===i&&t(a),"eventDate"===i){var n=a.filter((function(e){return e.event_date.includes(b)}));t(n)}if("eventType"===i)if("default"===p)t(a);else{var c=a.filter((function(e){return e.event_type.includes(p)}));t(c)}if("inventoryType"===i){var r=a.filter((function(e){return e.inventory.inventory_type.includes(k)}));t(r)}if("userName"===i){var s=a.filter((function(e){return e.user.user_name.includes(C)}));t(s)}},children:[Object(u.jsxs)("select",{onChange:function(e){e.preventDefault(),j(e.target.value)},children:[Object(u.jsx)("option",{value:"default",children:"\uac80\uc0c9\ud56d\ubaa9\uc744 \uc120\ud0dd\ud558\uc138\uc694"}),Object(u.jsx)("option",{value:"eventDate",children:"\ub0a0\uc9dc"}),Object(u.jsx)("option",{value:"eventType",children:"\uc774\ubca4\ud2b8\ud0c0\uc785"}),Object(u.jsx)("option",{value:"inventoryType",children:"\uc7ac\uace0\ud0c0\uc785"}),Object(u.jsx)("option",{value:"userName",children:"\uc720\uc800\uc774\ub984"})]}),"default"===i?"":"eventDate"===i?Object(u.jsxs)("label",{children:["\ub0a0\uc9dc",Object(u.jsx)("input",{type:"month",value:b,onChange:function(e){e.preventDefault(),v(e.target.value)}})]}):"eventType"===i?Object(u.jsxs)("label",{children:["\uc774\ubca4\ud2b8\ud0c0\uc785",Object(u.jsx)("input",{type:"text",value:p,onChange:function(e){e.preventDefault(),f(e.target.value)}})]}):"inventoryType"===i?Object(u.jsxs)("label",{children:["\uc7ac\uace0\ud0c0\uc785",Object(u.jsxs)("select",{onChange:function(e){e.preventDefault(),D(e.target.value)},children:[Object(u.jsx)("option",{value:"default",children:"\ud0c0\uc785\uc744 \uc120\ud0dd\ud574\uc8fc\uc138\uc694"}),Object(u.jsx)("option",{value:"\ud649",children:"\ud649"}),Object(u.jsx)("option",{value:"\ubab0\ud2b8",children:"\ubab0\ud2b8"}),Object(u.jsx)("option",{value:"\uc774\uc2a4\ud2b8",children:"\uc774\uc2a4\ud2b8"}),Object(u.jsx)("option",{value:"\ubd80\uc7ac\ub8cc",children:"\ubd80\uc7ac\ub8cc"})]}),"            "]}):"userName"===i?Object(u.jsxs)("label",{children:["\uc0ac\uc6a9\uc790\uc774\ub984",Object(u.jsx)("input",{type:"text",value:C,onChange:function(e){e.preventDefault(),N(e.target.value)}})]}):"",Object(u.jsx)("button",{children:"Search"})]})})},P=function(){var e=Object(c.useContext)(y),t=Object(c.useContext)(_),n=Object(c.useContext)(p),a=Object(c.useState)([{id:0,event_type:"",event_amount:0,event_date:n,event_desc:"",inventory_id:"",user_id:"",inventory:{inventory_name:"",inventory_type:""},user:{user_name:""}}]),r=Object(o.a)(a,2),s=r[0],i=r[1],j=Object(c.useState)({id:0,event_type:"",event_amount:0,event_date:n,event_desc:"",inventory_id:"",user_id:"",inventory:{inventory_name:"",inventory_type:""},user:{user_name:""}}),l=Object(o.a)(j,2),d=l[0],b=l[1];return Object(c.useEffect)((function(){t()}),[t]),Object(c.useEffect)((function(){i(e)}),[e]),Object(u.jsx)("div",{children:Object(u.jsxs)("div",{className:"tableContainer",children:[0===d.id?"":Object(u.jsx)(F,{eventSelect:d,setEventSelect:b}),Object(u.jsx)("h2",{children:"\uc774\ubca4\ud2b8 \ub85c\uadf8"}),Object(u.jsx)(H,{events:s,setEventSelect:b}),Object(u.jsx)(M,{setEvents:i})]})})},B=(n(18),function(){var e=Object(E.f)(),t=Object(c.useContext)(p),n=Object(c.useState)(""),a=Object(o.a)(n,2),r=a[0],s=a[1],i=Object(c.useState)({inventory_name:"",inventory_type:"none",inventory_amount:0,expiration_date:t,import_date:t,inventory_desc:"",event_desc:"",event_type:"\uc7ac\ub8cc\ucd94\uac00",today:t}),d=Object(o.a)(i,2),b=d[0],v=d[1],O=function(e){e.preventDefault(),v(Object(D.a)(Object(D.a)({},b),{},Object(k.a)({},e.target.name,e.target.value)))},x=function(){var t=Object(l.a)(j.a.mark((function t(n){return j.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(n.preventDefault(),t.prev=1,""!==b.inventory_name&&"none"!==b.inventory_type){t.next=6;break}s("\uc774\ub984\uacfc \ud0c0\uc785\uc744 \uc801\uc5b4\uc8fc\uc138\uc694!"),t.next=11;break;case 6:return s("success!"),t.next=9,h.a.post("/inventory/new",b);case 9:return t.next=11,e.push("/");case 11:t.next=16;break;case 13:t.prev=13,t.t0=t.catch(1),console.log(t.t0);case 16:case"end":return t.stop()}}),t,null,[[1,13]])})));return function(e){return t.apply(this,arguments)}}();return Object(u.jsx)("div",{children:Object(u.jsxs)("div",{className:"formContainer",children:[Object(u.jsx)("h2",{children:"\uc7ac\uace0\ucd94\uac00"}),Object(u.jsxs)("form",{onSubmit:x,children:[Object(u.jsxs)("label",{children:["\uc774\ub984:",Object(u.jsx)("input",{type:"text",name:"inventory_name",value:b.inventory_name,onChange:O})]}),"\ud0c0\uc785:",Object(u.jsxs)("select",{name:"inventory_type",onChange:O,children:["\ud0c0\uc785:",Object(u.jsx)("option",{value:"none",children:"\uc7ac\ub8cc\ud0c0\uc785\uc744 \uc120\ud0dd\ud574\uc8fc\uc138\uc694"}),Object(u.jsx)("option",{children:"\ud649"}),Object(u.jsx)("option",{children:"\ubab0\ud2b8"}),Object(u.jsx)("option",{children:"\uc774\uc2a4\ud2b8"}),Object(u.jsx)("option",{children:"\ubd80\uc7ac\ub8cc"})]}),Object(u.jsxs)("label",{children:["\uc591:",Object(u.jsx)("input",{type:"number",name:"inventory_amount",value:b.inventory_amount,onChange:O})]}),Object(u.jsxs)("label",{children:["\uc720\ud1b5\uae30\ud55c:",Object(u.jsx)("input",{type:"date",name:"expiration_date",value:b.expiration_date,onChange:O})]}),Object(u.jsxs)("label",{children:["\uc785\uace0\ub0a0\uc9dc:",Object(u.jsx)("input",{type:"date",name:"import_date",value:b.import_date,onChange:O})]}),Object(u.jsxs)("label",{children:["\uc7ac\ub8cc\uc124\uba85:",Object(u.jsx)("input",{type:"text",name:"inventory_desc",value:b.inventory_desc,onChange:O})]}),Object(u.jsxs)("label",{children:["\ube44\uace0:",Object(u.jsx)("input",{type:"text",name:"event_desc",value:b.event_desc,onChange:O})]}),Object(u.jsx)("button",{children:"\uc7ac\ub8cc\ucd94\uac00"})]}),Object(u.jsx)("p",{className:"message",children:r})]})})}),R=function(){var e=Object(E.f)(),t=Object(c.useState)({userId:"",password:""}),n=Object(o.a)(t,2),a=n[0],r=n[1],s=function(e){e.preventDefault(),r(Object(D.a)(Object(D.a)({},a),{},Object(k.a)({},e.target.name,e.target.value)))},i=function(){var t=Object(l.a)(j.a.mark((function t(n){return j.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n.preventDefault(),t.prev=1,t.next=4,h.a.post("/auth/log_in",a);case 4:return t.next=6,e.push("/");case 6:return t.next=8,window.location.reload();case 8:t.next=13;break;case 10:t.prev=10,t.t0=t.catch(1),console.log(t.t0);case 13:case"end":return t.stop()}}),t,null,[[1,10]])})));return function(e){return t.apply(this,arguments)}}();return Object(u.jsx)("div",{children:Object(u.jsxs)("div",{children:[Object(u.jsx)("h2",{children:"\ub85c\uadf8\uc778"}),Object(u.jsxs)("form",{onSubmit:i,children:[Object(u.jsxs)("label",{children:["User Name:",Object(u.jsx)("input",{type:"text",name:"userId",onChange:s})]}),Object(u.jsxs)("label",{children:["Password:",Object(u.jsx)("input",{type:"password",name:"password",onChange:s})]}),Object(u.jsx)("button",{children:"LOG IN"})]})]})})},L=function(){var e=Object(E.f)(),t=Object(c.useState)({userId:"",password:"",password2:"",userName:"",code:""}),n=Object(o.a)(t,2),a=n[0],r=n[1],s=Object(c.useState)({message:"",validation:!1}),i=Object(o.a)(s,2),d=i[0],b=i[1],v=function(e){e.preventDefault(),r(Object(D.a)(Object(D.a)({},a),{},Object(k.a)({},e.target.name,e.target.value))),x()},O=function(){var t=Object(l.a)(j.a.mark((function t(n){return j.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(n.preventDefault(),!d.validation){t.next=10;break}return t.next=4,h.a.post("/auth/sign_up",a);case 4:return t.next=6,e.push("/");case 6:return t.next=8,window.location.reload();case 8:t.next=11;break;case 10:b(Object(D.a)(Object(D.a)({},d),{},{validation:!1}));case 11:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),x=function(){var e=a.userId,t=a.password,n=a.password2,c=a.userName,r=a.code;b(""===e||""===t||""===n||""===c||""===r?{message:"your field is empty",validation:!1}:t!==n?{message:"your passwords are not matching",validation:!1}:{message:"",validation:!0})};return Object(u.jsx)("div",{children:Object(u.jsxs)("div",{className:"signup",children:[Object(u.jsx)("h2",{children:"\ud68c\uc6d0\uac00\uc785"}),Object(u.jsxs)("form",{onSubmit:O,children:[Object(u.jsxs)("label",{children:["user id:",Object(u.jsx)("input",{name:"userId",onChange:v})]}),Object(u.jsxs)("label",{children:["\uc774\ub984:",Object(u.jsx)("input",{name:"userName",onChange:v})]}),Object(u.jsxs)("label",{children:["\ube44\ubc00\ubc88\ud638:",Object(u.jsx)("input",{name:"password",onChange:v})]}),Object(u.jsxs)("label",{children:["\ube44\ubc00\ubc88\ud638\ud655\uc778:",Object(u.jsx)("input",{name:"password2",onChange:v})]}),Object(u.jsxs)("label",{children:["\uac00\uc785\ucf54\ub4dc:",Object(u.jsx)("input",{name:"code",onChange:v})]}),Object(u.jsx)("button",{children:"\ud68c\uc6d0\uac00\uc785"})]}),Object(u.jsx)("p",{className:"message",children:d.message})]})})},G=function(){return Object(u.jsxs)("div",{className:"formContainer",children:[Object(u.jsx)(R,{}),Object(u.jsx)(L,{})]})},A=function(e){var t=e.userName,n=Object(E.f)(),c=function(){var e=Object(l.a)(j.a.mark((function e(){return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,h.a.get("/auth/log_out");case 3:return e.next=5,n.push("/");case 5:return e.next=7,window.location.reload();case 7:e.next=12;break;case 9:e.prev=9,e.t0=e.catch(0),console.log(e.t0);case 12:case"end":return e.stop()}}),e,null,[[0,9]])})));return function(){return e.apply(this,arguments)}}();return Object(u.jsxs)("div",{children:[Object(u.jsxs)("h2",{children:["\uc548\ub155\ud558\uc138\uc694 ",t,"\ub2d8!"]}),Object(u.jsx)("button",{className:"logOut",onClick:function(){return c()},children:"LOG OUT"})]})},J=function(){var e=Object(E.f)(),t=Object(c.useContext)(p),n=Object(c.useContext)(m),a=Object(c.useContext)(f),r=Object(c.useState)(""),s=Object(o.a)(r,2),i=s[0],d=s[1],b=Object(c.useState)({inventory_id:"",inventory_amount:0,event_amount:0,event_desc:"",event_type:"\uc7ac\uace0\uc0ac\uc6a9",event_date:t,today:t}),v=Object(o.a)(b,2),O=v[0],x=v[1],y=function(e){e.preventDefault(),x(Object(D.a)(Object(D.a)({},O),{},Object(k.a)({},e.target.name,e.target.value)))},_=function(){var t=Object(l.a)(j.a.mark((function t(n){return j.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(n.preventDefault(),t.prev=1,""!==O.inventory_id){t.next=6;break}d("\uc7ac\uace0\uc120\ud0dd\uc744 \ud574\uc8fc\uc138\uc694"),t.next=11;break;case 6:return d(""),t.next=9,h.a.patch("/inventory/use",O);case 9:return t.next=11,e.push("/");case 11:t.next=16;break;case 13:t.prev=13,t.t0=t.catch(1),console.log(t.t0);case 16:case"end":return t.stop()}}),t,null,[[1,13]])})));return function(e){return t.apply(this,arguments)}}();return Object(c.useEffect)((function(){a()}),[a]),Object(u.jsx)("div",{children:Object(u.jsxs)("div",{className:"formContainer",children:[Object(u.jsx)("h2",{children:"\uc7ac\uace0\uc0ac\uc6a9"}),Object(u.jsxs)("form",{onSubmit:_,children:["\uc0ac\uc6a9\uc7ac\uace0 \uc120\ud0dd:",Object(u.jsxs)("select",{name:"inventory_id",onChange:function(e){e.preventDefault(),x(Object(D.a)(Object(D.a)({},O),{},{inventory_id:n[e.target.value].id,inventory_amount:n[e.target.value].inventory_amount}))},children:[Object(u.jsx)("option",{children:"\uc7ac\uace0 \uc120\ud0dd\ud574\uc8fc\uc138\uc694."}),n.map((function(e,t){return Object(u.jsxs)("option",{value:t,children:[e.inventory_name," ",e.inventory_amount]},t)}))]}),Object(u.jsxs)("label",{children:["\uc0ac\uc6a9\uc591(kg or packet):",Object(u.jsx)("input",{type:"number",name:"event_amount",value:O.event_amount,onChange:y})]}),Object(u.jsxs)("label",{children:["\ube44\uace0:",Object(u.jsx)("input",{type:"text",name:"event_desc",value:O.event_desc,onChange:y})]}),Object(u.jsxs)("label",{children:["\uc0ac\uc6a9\ub0a0\uc9dc:",Object(u.jsx)("input",{type:"date",name:"event_date",value:O.event_date,onChange:y})]}),Object(u.jsx)("button",{children:"\uc7ac\uace0\uc0ac\uc6a9"})]}),Object(u.jsx)("p",{className:"message",children:i})]})})};var U=function(){var e=Object(c.useState)({userName:""}),t=Object(o.a)(e,2),n=t[0],a=t[1],r=function(){var e=Object(l.a)(j.a.mark((function e(){var t;return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,h.a.get("/auth/verify");case 3:(t=e.sent).data.user_name?(a(t.data.user_name),console.log("verify success")):"unauthorized"===t.data.msg&&a({userName:""}),e.next=11;break;case 7:e.prev=7,e.t0=e.catch(0),a({userName:""}),console.log(e.t0);case 11:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(){return e.apply(this,arguments)}}();return Object(c.useEffect)((function(){r()}),[]),Object(u.jsx)("div",{className:"app",children:Object(u.jsx)(d.a,{children:Object(u.jsx)(g,{children:Object(u.jsxs)(d.a,{children:[Object(u.jsx)("h1",{className:"Header",children:"Ggeek Inventory Tracker"}),""===n.userName?Object(u.jsx)(G,{}):Object(u.jsxs)(u.Fragment,{children:[Object(u.jsx)(b,{}),Object(u.jsxs)(E.c,{children:[Object(u.jsx)(E.a,{exact:!0,path:"/inventory",children:Object(u.jsx)(T,{})}),Object(u.jsx)(E.a,{exact:!0,path:"/event",children:Object(u.jsx)(P,{})}),Object(u.jsx)(E.a,{exact:!0,path:"/add",children:Object(u.jsx)(B,{})}),Object(u.jsx)(E.a,{exact:!0,path:"/use",children:Object(u.jsx)(J,{})}),Object(u.jsx)(E.a,{exact:!0,path:"/user",children:Object(u.jsx)(A,{userName:n})})]})]})]})})})})},z=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,71)).then((function(t){var n=t.getCLS,c=t.getFID,a=t.getFCP,r=t.getLCP,s=t.getTTFB;n(e),c(e),a(e),r(e),s(e)}))};s.a.render(Object(u.jsx)(a.a.StrictMode,{children:Object(u.jsx)(U,{})}),document.getElementById("root")),z()}},[[70,1,2]]]);
//# sourceMappingURL=main.18d328cb.chunk.js.map