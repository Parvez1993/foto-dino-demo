(this["webpackJsonpfoto-dino"]=this["webpackJsonpfoto-dino"]||[]).push([[0],{48:function(e,t,n){},49:function(e,t,n){"use strict";n.r(t);var a=n(1),c=n(22),s=n.n(c),l=n(3),i=n(8),o=n(4),r=n.n(o),d=n(6),m=n(2),u=n(7),b=n.n(u),j=n(0),h=function(e){var t=e.setSortType,n=e.setSearchCity,c=e.searchCity,s=e.cities,o=e.setAddCity,r=e.setCities,d=Object(a.useState)(""),u=Object(m.a)(d,2),b=u[0],h=u[1];return Object(j.jsx)("nav",{className:"navbar navbar-expand-lg navbar-light bg-light fixed-top",style:{zIndex:"100"},children:Object(j.jsxs)("div",{className:"container-fluid",children:[Object(j.jsx)("h1",{className:"navbar-brand",children:"Foto Dino"}),Object(j.jsx)("button",{className:"navbar-toggler",type:"button","data-bs-toggle":"collapse","data-bs-target":"#navbarSupportedContent","aria-controls":"navbarSupportedContent","aria-expanded":"false","aria-label":"Toggle navigation",children:Object(j.jsx)("span",{className:"navbar-toggler-icon"})}),Object(j.jsxs)("div",{className:"collapse navbar-collapse justify-content-end",id:"navbarSupportedContent",children:[Object(j.jsxs)("form",{className:"d-flex mx-5",onSubmit:function(e){e.preventDefault();var t=new RegExp(b.toLowerCase(),"g"),a=s.filter((function(e){return e.name.toLowerCase().match(t)}));n(Object(l.a)(Object(l.a)({},c),{},{cities:a,text:b,searching:!0})),h("")},children:[Object(j.jsx)("input",{className:"form-control me-2",type:"search",placeholder:"Search a city","aria-label":"Search",value:b,onChange:function(e){return h(e.target.value)},style:{width:"300px"}}),Object(j.jsx)("button",{className:"btn btn-success",type:"submit",children:"Search"})]}),Object(j.jsxs)("div",{className:"mx-5",children:[Object(j.jsx)("p",{className:"my-auto mx-2",children:"Sort by: "}),Object(j.jsx)("ul",{className:"navbar-nav",children:Object(j.jsxs)("select",{onChange:function(e){var n;"name"!==(n=e.target.value)?"id"!==n?"id2"!==n||r((function(e){return Object(i.a)(e.sort((function(e,t){return t.id-e.id})))})):r((function(e){return Object(i.a)(e.sort((function(e,t){return e.id-t.id})))})):r((function(e){return Object(i.a)(e.sort((function(e,t){return e.name>t.name?1:-1})))})),t(e.target.value)},className:"form-select",children:[Object(j.jsx)("option",{className:"dropdown-item",value:"id",children:"Last Added"}),Object(j.jsx)("option",{className:"dropdown-item",value:"name",children:"Name"}),Object(j.jsx)("option",{className:"dropdown-item",value:"id2",children:"Newly Added"})]})})]}),Object(j.jsxs)("button",{className:"btn btn-warning mx-3","aria-current":"page",onClick:function(){return o(!0)},children:[Object(j.jsx)("i",{className:"fa fa-plus"})," Add City"]})]})]})})},f=function(e){var t=e.city,n=t.id,a=t.code,c=t.name,s=t.locations,l=e.city,i=e.deleteCity,o=e.setUpdatingCity,r=e.fetchLocations,d=e.setCity,m=e.setAddCity;return Object(j.jsxs)("div",{className:"cityItem mx-auto p-3",children:[Object(j.jsx)("img",{alt:"location",src:"https://images-platform.99static.com//6lGOzEAYLsS0U1etk92iqtXunGw=/1145x1239:1844x1938/fit-in/500x500/99designs-contests-attachments/110/110086/attachment_110086393"}),Object(j.jsxs)("div",{className:"d-flex flex-column",style:{width:"100%"},children:[Object(j.jsx)("h1",{children:n+". "+c}),Object(j.jsx)("h2",{children:s.length+" locations to visit"}),Object(j.jsxs)("div",{className:"d-flex justify-content-between",children:[Object(j.jsx)("h3",{children:"code: "+a}),Object(j.jsxs)("div",{children:[Object(j.jsx)("button",{className:"btn btn-outline-success ml-1",onClick:function(){o(l),m(!0)},children:Object(j.jsx)("i",{className:"fa fa-edit"})}),Object(j.jsx)("button",{className:"btn btn-outline-danger mx-1",onClick:function(){return i(n)},children:Object(j.jsx)("i",{className:"fa fa-trash"})}),Object(j.jsx)("button",{className:"btn btn-sm btn-outline-primary",onClick:function(){r(n),d(l)},children:"Locations"})]})]})]})]})},x=function(e){var t=e.cities,n=e.deleteCity,a=e.setUpdatingCity,c=e.fetchLocations,s=e.setCity,i=e.setAddCity,o=e.setSearchCity,r=e.searchCity;return Object(j.jsxs)("div",{className:"cities d-flex flex-column py-5 m-5",children:[Object(j.jsxs)("div",{className:"d-flex flex-row justify-content-between px-5",children:[Object(j.jsx)("h1",{children:"Cities"}),r.searching&&Object(j.jsx)("button",{className:"btn btn-danger",style:{height:"40px"},children:Object(j.jsx)("i",{className:"fa fa-times",onClick:function(){o(Object(l.a)(Object(l.a)({},r),{},{searching:!1,text:"",cities:[]}))}})})]}),r.searching&&0===r.cities.length?Object(j.jsx)("p",{className:"text-center",children:"Not record found"}):t.map((function(e){return Object(j.jsx)(f,{city:e,deleteCity:n,setUpdatingCity:a,fetchLocations:c,setCity:s,setAddCity:i},e.id)}))]})},p=function(e){var t=e.createCity,n=e.updatingCity,c=e.setUpdatingCity,s=e.updateCity,l=e.setAddCity,i=Object(a.useState)(0),o=Object(m.a)(i,2),r=o[0],d=o[1],u=Object(a.useState)(""),b=Object(m.a)(u,2),h=b[0],f=b[1];Object(a.useEffect)((function(){d(n.code?n.code:0),f(n.name?n.name:"")}),[n]);return Object(j.jsxs)("form",{className:"city-form mx-auto my-5",onSubmit:function(e){e.preventDefault(),h?r?(void 0!==n.id?s({code:r,name:h},n.id):(console.log("null"),t({code:r,name:h})),l(!1),c({}),d(0),f("")):alert("Please add a code"):alert("Please add a name")},children:[Object(j.jsxs)("div",{className:"d-flex flex-row justify-content-between",children:[Object(j.jsx)("h2",{children:"City Form"}),Object(j.jsx)("button",{className:"btn btn-danger",onClick:function(){l(!1),c({})},children:Object(j.jsx)("i",{className:"fa fa-times"})})]}),Object(j.jsxs)("div",{className:"mb-3 d-flex flex-column",children:[Object(j.jsx)("label",{htmlFor:"code",className:"form-label",children:"Code"}),Object(j.jsx)("input",{type:"number",className:"form-control",id:"code",placeholder:"Code",value:r,onChange:function(e){return d(e.target.value)}})]}),Object(j.jsxs)("div",{className:"mb-3 d-flex flex-column",children:[Object(j.jsx)("label",{htmlFor:"Name",className:"form-label",children:"Name"}),Object(j.jsx)("input",{type:"text",className:"form-control",id:"Name",placeholder:"Name",value:h,onChange:function(e){return f(e.target.value)}})]}),n.id?Object(j.jsx)("button",{type:"submit",className:"btn btn-outline-primary",children:"Update"}):Object(j.jsx)("button",{type:"submit",className:"btn btn-outline-primary",children:"Submit"}),Object(j.jsx)("button",{type:"reset",onClick:function(){c({})},className:"btn btn-outline-warning mx-2",children:"Clear"})]})},O=function(e){var t=e.location,n=t.email,a=t.phone,c=t.postal_code,s=t.id,l=e.setViewLocation,i=e.deleteLocation,o=e.setUpdateLocation,r=e.location,d=e.setAddLocation;return Object(j.jsxs)(j.Fragment,{children:[Object(j.jsx)("h6",{children:"Email: "+n}),Object(j.jsx)("h6",{children:"Phone: "+a}),Object(j.jsx)("h6",{children:"Postal Code: "+c}),Object(j.jsxs)("div",{style:{marginLeft:"auto"},children:[Object(j.jsx)("button",{className:"btn btn-outline-warning btn-sm",style:{width:"40px"},onClick:function(){o(r),d(!1)},children:Object(j.jsx)("i",{className:"fa fa-edit"})}),Object(j.jsx)("button",{className:"btn btn-outline-danger btn-sm mx-1",style:{width:"40px"},onClick:function(){return i(s)},children:Object(j.jsx)("i",{className:"fa fa-trash"})}),Object(j.jsx)("button",{className:"btn btn-outline-secondary btn-sm",style:{width:"40px"},onClick:function(){return l(!1)},children:Object(j.jsx)("i",{className:"fa fa-angle-up"})})," "]})]})},v=function(e){var t=e.location,n=t.name,c=t.rent,s=t.street_name,l=t.status,i=e.setUpdateLocation,o=e.location,r=e.deleteLocation,d=e.setAddLocation,u=Object(a.useState)(!1),b=Object(m.a)(u,2),h=b[0],f=b[1];return Object(j.jsxs)("div",{className:"location-item justify-content-between align-items-end",children:[Object(j.jsxs)("div",{className:"d-flex flex-column",style:{width:"100%"},children:[Object(j.jsx)("h4",{children:n}),Object(j.jsx)("h5",{children:"Rent: $"+c}),Object(j.jsx)("h6",{children:"Address: "+s}),h&&Object(j.jsx)(O,{location:o,setViewLocation:f,deleteLocation:r,setUpdateLocation:i,setAddLocation:d}),"Available"===l&&Object(j.jsxs)("h6",{children:[Object(j.jsx)("i",{className:"fa fa-circle",style:{color:"green"}})," ","Available"]}),"Unavailable"===l&&Object(j.jsxs)("h6",{children:[Object(j.jsx)("i",{className:"fa fa-circle",style:{color:"red"}})," ","Unavailable"]}),"Active"===l&&Object(j.jsxs)("h6",{children:[Object(j.jsx)("i",{className:"fa fa-circle",style:{color:"yellow"}})," Active"]})]}),!h&&Object(j.jsx)("button",{className:"btn btn-outline-primary btn-sm",onClick:function(){f(!0)},children:Object(j.jsx)("i",{className:"fa fa-eye"})})]})},N=function(e){var t=e.city,n=t.name,a=t.code,c=e.locations,s=e.setCity,l=e.setLocations,i=e.setUpdateLocation,o=e.setAddLocation,r=e.deleteLocation;return Object(j.jsx)("div",{className:"back",children:Object(j.jsxs)("div",{className:"city d-flex flex-column my-5",children:[Object(j.jsx)("button",{className:"btn btn-sm btn-danger",onClick:function(){s({}),l([]),o(!1),i(!1)},children:Object(j.jsx)("i",{className:"fa fa-times"})}),Object(j.jsx)("h1",{children:n}),Object(j.jsx)("h2",{children:"- code: "+a}),Object(j.jsx)("h3",{children:"Places to visit"}),Object(j.jsxs)("button",{className:"btn btn-primary",onClick:function(){o(!0),i({})},children:[Object(j.jsx)("i",{className:"fa fa-plus"})," Add a location"]}),c.map((function(e){return Object(j.jsx)(v,{location:e,setUpdateLocation:i,deleteLocation:r,setAddLocation:o})}))]})})},y=(n(48),n(9)),C=function(e){var t=e.createLocation,n=e.setAddLocation,c=Object(a.useState)({name:"",rent:"",email:"",phone:"",coordinates:"",street_number:0,street_name:"",postal_code:0,status:"Available"}),s=Object(m.a)(c,2),i=s[0],o=s[1],r=i.name,d=i.rent,u=i.email,b=i.phone,h=i.coordinates,f=i.street_number,x=i.street_name,p=i.postal_code,O=i.status,v=function(e){return o(Object(l.a)(Object(l.a)({},i),{},Object(y.a)({},e.target.name,e.target.value)))};return Object(j.jsxs)("div",{className:"p-5 d-flex flex-column location-form",children:[Object(j.jsxs)("div",{className:"d-flex justify-content-between",children:[Object(j.jsx)("h2",{children:"Location Form"}),Object(j.jsx)("button",{className:"btn btn-danger",onClick:function(){return n(!1)},children:Object(j.jsx)("i",{className:"fa fa-times"})})]}),Object(j.jsxs)("form",{onSubmit:function(e){return function(e){e.preventDefault(),t(i),n(!1)}(e)},children:[Object(j.jsxs)("div",{className:"mb-3 d-flex flex-column",children:[Object(j.jsx)("label",{htmlFor:"Name",className:"form-label",children:"Name"}),Object(j.jsx)("input",{type:"text",className:"form-control",id:"Name",placeholder:"Name",name:"name",value:r,onChange:function(e){return v(e)}})]}),Object(j.jsxs)("div",{className:"mb-3 d-flex flex-column",children:[Object(j.jsx)("label",{htmlFor:"Rent",className:"form-label",children:"Rent"}),Object(j.jsx)("input",{type:"number",className:"form-control",id:"Rent",placeholder:"Rent",name:"rent",value:d,onChange:function(e){return v(e)}})]}),Object(j.jsxs)("div",{className:"mb-3 d-flex flex-column",children:[Object(j.jsx)("label",{htmlFor:"Email",className:"form-label",children:"Email"}),Object(j.jsx)("input",{type:"text",className:"form-control",id:"Email",placeholder:"Email",name:"email",value:u,onChange:function(e){return v(e)}})]}),Object(j.jsxs)("div",{className:"mb-3 d-flex flex-column",children:[Object(j.jsx)("label",{htmlFor:"Phone",className:"form-label",children:"Phone"}),Object(j.jsx)("input",{type:"text",className:"form-control",id:"Phone",placeholder:"Phone",name:"phone",value:b,onChange:function(e){return v(e)}})]}),Object(j.jsxs)("div",{className:"mb-3 d-flex flex-column",children:[Object(j.jsx)("label",{htmlFor:"Coordinates",className:"form-label",children:"Coordinates"}),Object(j.jsx)("input",{type:"text",className:"form-control",id:"Coordinates",placeholder:"Coordinates",name:"coordinates",value:h,onChange:function(e){return v(e)}})]}),Object(j.jsxs)("div",{className:"mb-3 d-flex flex-column",children:[Object(j.jsx)("label",{htmlFor:"Street-number",className:"form-label",children:"Street number"}),Object(j.jsx)("input",{type:"text",className:"form-control",id:"Street-number",placeholder:"Street number",name:"street_number",value:f,onChange:function(e){return v(e)}})]}),Object(j.jsxs)("div",{className:"mb-3 d-flex flex-column",children:[Object(j.jsx)("label",{htmlFor:"Street-name",className:"form-label",children:"Street name"}),Object(j.jsx)("input",{type:"text",className:"form-control",id:"Street-name",placeholder:"Street name",name:"street_name",value:x,onChange:function(e){return v(e)}})]}),Object(j.jsxs)("div",{className:"mb-3 d-flex flex-column",children:[Object(j.jsx)("label",{htmlFor:"Postal-code",className:"form-label",children:"Postal code"}),Object(j.jsx)("input",{type:"text",className:"form-control",id:"Postal-code",placeholder:"Postal code",name:"postal_code",value:p,onChange:function(e){return v(e)}})]}),Object(j.jsxs)("div",{className:"mb-3 d-flex flex-column",children:[Object(j.jsx)("label",{htmlFor:"status",className:"form-label",children:"Status"}),Object(j.jsxs)("select",{className:"form-select","aria-label":"Default select example",id:"status",name:"status",value:O,onChange:function(e){return v(e)},children:[Object(j.jsx)("option",{selected:!0,value:"Available",children:"Available"}),Object(j.jsx)("option",{value:"Unavailable",children:"Unavailable"}),Object(j.jsx)("option",{value:"Active",children:"Active"})]})]}),Object(j.jsx)("button",{type:"submit",className:"btn btn-outline-primary",children:"Submit"})]})]})},g=function(e){var t=e.updateLocation,n=e.updatingLocation,c=e.setUpdateLocation,s=Object(a.useState)({name:"",rent:"",email:"",phone:"",coordinates:"",street_number:0,street_name:"",postal_code:0,status:"Available"}),i=Object(m.a)(s,2),o=i[0],r=i[1];Object(a.useEffect)((function(){r({name:t.name?t.name:"",rent:t.rent?t.rent:"",email:t.email?t.email:"",phone:t.phone?t.phone:"",coordinates:t.coordinates?t.coordinates:"",street_number:t.street_number?t.street_number:0,street_name:t.street_name?t.street_name:"",postal_code:t.postal_code?t.postal_code:0,status:t.status?t.status:"Available"})}),[t]);var d=o.name,u=o.rent,b=o.email,h=o.phone,f=o.coordinates,x=o.street_number,p=o.street_name,O=o.postal_code,v=o.status,N=function(e){return r(Object(l.a)(Object(l.a)({},o),{},Object(y.a)({},e.target.name,e.target.value)))};return Object(j.jsxs)("div",{className:"p-5 d-flex flex-column location-form",children:[Object(j.jsxs)("div",{className:"d-flex justify-content-between",children:[Object(j.jsx)("h2",{children:"Update Location"}),Object(j.jsx)("button",{className:"btn btn-danger",onClick:function(){return c(!1)},children:Object(j.jsx)("i",{className:"fa fa-times"})})]}),Object(j.jsxs)("form",{onSubmit:function(e){return function(e){e.preventDefault(),c({}),n(o,t.id)}(e)},children:[Object(j.jsxs)("div",{className:"mb-3 d-flex flex-column",children:[Object(j.jsx)("label",{htmlFor:"Name",className:"form-label",children:"Name"}),Object(j.jsx)("input",{type:"text",className:"form-control",id:"Name",placeholder:"Name",name:"name",value:d,onChange:function(e){return N(e)}})]}),Object(j.jsxs)("div",{className:"mb-3 d-flex flex-column",children:[Object(j.jsx)("label",{htmlFor:"Rent",className:"form-label",children:"Rent"}),Object(j.jsx)("input",{type:"number",className:"form-control",id:"Rent",placeholder:"Rent",name:"rent",value:u,onChange:function(e){return N(e)}})]}),Object(j.jsxs)("div",{className:"mb-3 d-flex flex-column",children:[Object(j.jsx)("label",{htmlFor:"Email",className:"form-label",children:"Email"}),Object(j.jsx)("input",{type:"text",className:"form-control",id:"Email",placeholder:"Email",name:"email",value:b,onChange:function(e){return N(e)}})]}),Object(j.jsxs)("div",{className:"mb-3 d-flex flex-column",children:[Object(j.jsx)("label",{htmlFor:"Phone",className:"form-label",children:"Phone"}),Object(j.jsx)("input",{type:"text",className:"form-control",id:"Phone",placeholder:"Phone",name:"phone",value:h,onChange:function(e){return N(e)}})]}),Object(j.jsxs)("div",{className:"mb-3 d-flex flex-column",children:[Object(j.jsx)("label",{htmlFor:"Coordinates",className:"form-label",children:"Coordinates"}),Object(j.jsx)("input",{type:"text",className:"form-control",id:"Coordinates",placeholder:"Coordinates",name:"coordinates",value:f,onChange:function(e){return N(e)}})]}),Object(j.jsxs)("div",{className:"mb-3 d-flex flex-column",children:[Object(j.jsx)("label",{htmlFor:"Street-number",className:"form-label",children:"Street number"}),Object(j.jsx)("input",{type:"text",className:"form-control",id:"Street-number",placeholder:"Street number",name:"street_number",value:x,onChange:function(e){return N(e)}})]}),Object(j.jsxs)("div",{className:"mb-3 d-flex flex-column",children:[Object(j.jsx)("label",{htmlFor:"Street-name",className:"form-label",children:"Street name"}),Object(j.jsx)("input",{type:"text",className:"form-control",id:"Street-name",placeholder:"Street name",name:"street_name",value:p,onChange:function(e){return N(e)}})]}),Object(j.jsxs)("div",{className:"mb-3 d-flex flex-column",children:[Object(j.jsx)("label",{htmlFor:"Postal-code",className:"form-label",children:"Postal code"}),Object(j.jsx)("input",{type:"text",className:"form-control",id:"Postal-code",placeholder:"Postal code",name:"postal_code",value:O,onChange:function(e){return N(e)}})]}),Object(j.jsxs)("div",{className:"mb-3 d-flex flex-column",children:[Object(j.jsx)("label",{htmlFor:"status",className:"form-label",children:"Status"}),Object(j.jsxs)("select",{className:"form-select","aria-label":"Default select example",id:"status",name:"status",value:v,onChange:function(e){return N(e)},children:[Object(j.jsx)("option",{selected:!0,value:"Available",children:"Available"}),Object(j.jsx)("option",{value:"Unavailable",children:"Unavailable"}),Object(j.jsx)("option",{value:"Active",children:"Active"})]})]}),Object(j.jsx)("button",{type:"submit",className:"btn btn-outline-primary",children:"Submit"})]})]})},S=function(){var e=Object(a.useState)(!0),t=Object(m.a)(e,2),n=t[0],c=t[1],s=Object(a.useState)([{}]),o=Object(m.a)(s,2),u=o[0],f=o[1],O=Object(a.useState)({}),v=Object(m.a)(O,2),y=v[0],S=v[1],w=Object(a.useState)({text:"",cities:[],searching:!1}),L=Object(m.a)(w,2),A=L[0],_=L[1],k=Object(a.useState)(!1),F=Object(m.a)(k,2),U=F[0],P=F[1],E=Object(a.useState)("id"),R=Object(m.a)(E,2),D=R[0],T=R[1],I=Object(a.useState)({}),z=Object(m.a)(I,2),G=z[0],J=z[1],V=Object(a.useState)({}),q=Object(m.a)(V,2),B=q[0],X=q[1],Y=Object(a.useState)([]),$=Object(m.a)(Y,2),H=$[0],K=$[1],M=Object(a.useState)(!1),Q=Object(m.a)(M,2),W=Q[0],Z=Q[1];Object(a.useEffect)((function(){var e=function(){var e=Object(d.a)(r.a.mark((function e(){var t;return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,ee();case 2:t=e.sent,f(t),c(!1);case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();e()}),[]);var ee=function(){var e=Object(d.a)(r.a.mark((function e(){var t,n;return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,b.a.get("cities/");case 2:return t=e.sent,e.next=5,t.data;case 5:return n=e.sent,e.abrupt("return",n);case 7:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),te=function(){var e=Object(d.a)(r.a.mark((function e(t){var n;return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n={headers:{"Content-Type":"application/json"}},e.next=3,b.a.post("https://api.photodino.com/locations/cities/",t,n).then((function(e){var t=e.data;f("id2"===D?[t].concat(Object(i.a)(u)):[].concat(Object(i.a)(u),[t]))}));case 3:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),ne=function(){var e=Object(d.a)(r.a.mark((function e(t,n){var a;return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a={headers:{"Content-Type":"application/json"}},e.next=3,b.a.put("https://api.photodino.com/locations/cities/".concat(n,"/"),t,a).then((function(e){var t=e.data;f(u.map((function(e){return e.id===n?Object(l.a)(Object(l.a)({},e),{},{name:t.name,code:t.code}):e})))}));case 3:case"end":return e.stop()}}),e)})));return function(t,n){return e.apply(this,arguments)}}(),ae=function(){var e=Object(d.a)(r.a.mark((function e(t){return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,b.a.delete("https://api.photodino.com/locations/cities/".concat(t,"/"));case 2:f(u.filter((function(e){return e.id!==t})));case 3:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),ce=function(){var e=Object(d.a)(r.a.mark((function e(t){return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,b.a.get("https://api.photodino.com/locations/locations/",{params:{city_id:t}}).then((function(e){var t=e.data;K(t)}));case 2:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),se=function(){var e=Object(d.a)(r.a.mark((function e(t){var n;return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=Object(l.a)(Object(l.a)({},t),{},{city:y.id}),console.log(t),n={headers:{"Content-Type":"application/json"}},e.next=5,b.a.post("https://api.photodino.com/locations/locations/",t,n).then((function(e){var t=e.data;K([t].concat(Object(i.a)(H)))}));case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),le=function(){var e=Object(d.a)(r.a.mark((function e(t,n){var a;return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=Object(l.a)(Object(l.a)({},t),{},{city:y.id}),a={headers:{"Content-Type":"application/json"}},e.next=4,b.a.put("https://api.photodino.com/locations/locations/".concat(n,"/"),t,a).then((function(e){var t=e.data;K(H.map((function(e){return e.id===n?t:e})))}));case 4:case"end":return e.stop()}}),e)})));return function(t,n){return e.apply(this,arguments)}}(),ie=function(){var e=Object(d.a)(r.a.mark((function e(t){return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,b.a.delete("https://api.photodino.com/locations/locations/".concat(t,"/"));case 2:K(H.filter((function(e){return e.id!==t})));case 3:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return Object(j.jsx)("div",{className:"App",children:Object(j.jsxs)(a.Fragment,{children:[Object(j.jsx)(h,{setSortType:T,searchCity:A,setSearchCity:_,cities:u,setAddCity:P,setCities:f}),U&&Object(j.jsx)(p,{createCity:te,updatingCity:G,setUpdatingCity:J,updateCity:ne,setAddCity:P}),Object(j.jsxs)("div",{className:"d-flex flex-column",children:[W&&Object(j.jsx)(C,{createLocation:se,setAddLocation:Z}),B.id&&Object(j.jsx)(g,{updateLocation:B,updatingLocation:le,setUpdateLocation:X})]}),Object(j.jsxs)("div",{className:"justify-content-center",children:[n?Object(j.jsx)("img",{className:"mx-auto",src:"https://www.icegif.com/wp-content/uploads/loading-icegif-1.gif",alt:"loading"}):!W&&!B.id&&!U&&Object(j.jsx)(x,{cities:A.searching?A.cities:u,deleteCity:ae,setUpdatingCity:J,fetchLocations:ce,setCity:S,setAddCity:P,searchCity:A,setSearchCity:_}),y.id&&!W&&!B.id&&Object(j.jsx)(N,{city:y,locations:H,setCity:S,setLocations:K,setUpdateLocation:X,setAddLocation:Z,deleteLocation:ie})]})," "]})})};s.a.render(Object(j.jsx)(S,{}),document.getElementById("root"))}},[[49,1,2]]]);
//# sourceMappingURL=main.83e4279c.chunk.js.map