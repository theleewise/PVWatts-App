(this["webpackJsonppvwatts-app"]=this["webpackJsonppvwatts-app"]||[]).push([[0],{18:function(e,t,a){"use strict";a.r(t);var n=a(0),c=a(1),s=a.n(c),r=a(8),l=a.n(r),i=a(5),u=a(2),o=(a(16),a(7)),d=a.n(o),j=a(9),b=a(10);function m(e){var t=e.acMonthly,a=e.poa,c=function(e,t){for(var a=[],n=e.length,c=0;c<n;)a.push(e.slice(c,c+=t));return a}(a,24);return Object(n.jsxs)("div",{children:[t&&Object(n.jsxs)("table",{className:"table table-sm table-striped table-dark table-bordered",children:[Object(n.jsx)("thead",{children:Object(n.jsxs)("tr",{children:[Object(n.jsx)("th",{children:"Month"}),Object(n.jsx)("th",{children:"AC System Output (kWhac)"})]})}),Object(n.jsx)("tbody",{children:t.map((function(e,t){return Object(n.jsxs)("tr",{children:[Object(n.jsx)("td",{children:(a=t,["Janaruy","Febuary","March","April","May","June","July","August","September","October","November","December"][a])}),Object(n.jsx)("td",{children:e})]},t);var a}))})]}),c&&Object(n.jsxs)("table",{className:"table table-responsive table-sm table-striped table-dark table-bordered",children:[Object(n.jsx)("thead",{children:Object(n.jsxs)("tr",{children:[Object(n.jsx)("th",{children:"Day"}),Object(b.a)(Array(24)).map((function(e,t){return Object(n.jsx)("th",{children:"Hour ".concat(t+1)},t)}))]})}),Object(n.jsx)("tbody",{children:c.map((function(e,t){return Object(n.jsxs)("tr",{children:[Object(n.jsx)("td",{children:"Day ".concat(t+1)}),e.map((function(e,t){return Object(n.jsx)("td",{children:e>0&&e},t)}))]},t)}))})]})]})}function h(e){var t=e.label,a=e.id,s=e.name,r=e.value,l=e.min,i=e.max,o=e.step,d=e.showInput,j=void 0===d||d,b=e.handleValue,m=Object(c.useState)(r),h=Object(u.a)(m,2),O=h[0],p=h[1],v=Object(c.useState)(""),x=Object(u.a)(v,2),f=x[0],y=x[1];Object(c.useEffect)((function(){return p(r)}),[r]);var g=function(e){e.preventDefault();var t=e.target.value;t>i?(y("Maximum is ".concat(i)),p(i)):t<l?(y("Minimum is ".concat(l)),p(l)):(y(""),p(t))},N=function(e){e.preventDefault();var t=e.target.name,a=e.target.value;p(a),b(t,a)};return Object(n.jsxs)("div",{className:"row",children:[Object(n.jsx)("div",{className:"col",children:Object(n.jsxs)("div",{className:"form-group",children:[Object(n.jsx)("label",{htmlFor:a,children:t}),Object(n.jsx)("input",{id:a,name:s,type:"range",min:l,max:i,step:o,className:"form-control-range ".concat(f.length>0?"is-invalid":""),onChange:g,onMouseUp:N,value:O}),f.length>0&&Object(n.jsx)("div",{className:"invalid-feedback",children:f})]})}),j&&Object(n.jsx)("div",{className:"col-4",children:Object(n.jsx)("input",{className:"form-control ".concat(f.length>0?"is-invalid":""),type:"number",value:O,onChange:g,onBlur:N})})]})}function O(e){var t=e.label,a=e.id,s=e.name,r=e.value,l=e.isRequired,i=e.handleValue,o=Object(c.useState)(r),d=Object(u.a)(o,2),j=d[0],b=d[1],m=Object(c.useState)(""),h=Object(u.a)(m,2),O=h[0],p=h[1];Object(c.useEffect)((function(){return b(r)}),[r]);return Object(n.jsxs)("div",{className:"form-group",children:[Object(n.jsx)("label",{htmlFor:a,children:t}),Object(n.jsx)("input",{type:"text",className:"form-control ".concat(O.length>0?"is-invalid":""),id:a,value:j,onChange:function(e){e.preventDefault();var t=e.target.name,a=e.target.value;p(""),b(a),i(t,a)},name:s,required:l}),O.length>0&&Object(n.jsx)("div",{className:"invalid-feedback",children:O})]})}function p(e){var t=e.label,a=e.id,s=e.name,r=e.value,l=e.options,i=e.isRequired,o=e.handleValue,d=Object(c.useState)(r),j=Object(u.a)(d,2),b=j[0],m=j[1],h=Object(c.useState)(""),O=Object(u.a)(h,2),p=O[0],v=O[1];Object(c.useEffect)((function(){return m(r)}),[r]);return Object(n.jsxs)("div",{className:"form-group",children:[Object(n.jsx)("label",{htmlFor:a,children:t}),Object(n.jsxs)("select",{className:"custom-select form-control ".concat(p.length>0?"is-invalid":""),id:a,value:b,onChange:function(e){e.preventDefault();var t=e.target.name,a=e.target.value;v(""),m(a),o(t,a)},name:s,required:i,children:[Object(n.jsx)("option",{disabled:i,value:"",children:"Choose..."}),l.map((function(e,t){var c="object"===typeof e?e.length>1?e[1]:e[0]:e,s="object"===typeof e?e[0]:e;return Object(n.jsx)("option",{value:c,children:s},"".concat(a,"-key-").concat(t))}))]}),p.length>0&&Object(n.jsx)("div",{className:"invalid-feedback",children:p})]})}function v(e){var t=e.handleSubmit,a=e.handleInputChange,s=Object(c.useState)({}),r=Object(u.a)(s,2),l=r[0],o=r[1],d=function(e,t){o((function(a){var n=Object(i.a)({},a);return n[e]=t,n})),a(e,t)};return Object(n.jsxs)("div",{className:"my-4",children:[Object(n.jsxs)("div",{className:"row",children:[Object(n.jsx)("div",{className:"col-md-4",children:Object(n.jsx)(O,{id:"addressInput",label:"Address",name:"address",value:l.address,isRequired:!0,handleValue:d})}),Object(n.jsx)("div",{className:"col-md-4",children:Object(n.jsx)(p,{id:"moduleTypeInput",label:"Module Type",value:l.module_type,name:"module_type",options:[["Standard",0],["Premium",1],["Thin film",2]],isRequired:!0,handleValue:d})}),Object(n.jsx)("div",{className:"col-md-4",children:Object(n.jsx)(p,{id:"arrayTypeInput",label:"Array Type",value:l.array_type,name:"array_type",options:[["Fixed - Open Rack",0],["Fixed - Roof Mounted",1],["1-Axis",2],["1-Axis Backtracking",3],["2-Axis",4]],isRequired:!0,handleValue:d})})]}),Object(n.jsxs)("div",{className:"row",children:[Object(n.jsx)("div",{className:"col-md-6",children:Object(n.jsx)(h,{id:"systemCapacityInput",value:l.system_capacity,name:"system_capacity",label:"Nameplate Capacity (kW).",min:.05,max:5e5,step:10,handleValue:d})}),Object(n.jsx)("div",{className:"col-md-6",children:Object(n.jsx)(h,{id:"systemLossesInput",value:l.losses,name:"losses",label:"System Losses (percent)",min:-5,max:99,handleValue:d})})]}),Object(n.jsxs)("div",{className:"row",children:[Object(n.jsx)("div",{className:"col-md-6",children:Object(n.jsx)(h,{id:"titleInput",value:l.tilt,name:"tilt",label:"Title Angle (degrees)",min:0,max:99,handleValue:d})}),Object(n.jsx)("div",{className:"col-md-6",children:Object(n.jsx)(h,{id:"azimuthAngleInput",value:l.azimuth,name:"azimuth",label:"Azimuth Angle (degrees)",min:0,max:99,handleValue:d})})]}),Object(n.jsx)("button",{type:"submit",className:"btn btn-primary",onClick:t,children:"Submit"}),Object.keys(l).length>0&&Object(n.jsx)("button",{type:"button",className:"btn btn-secondary",onClick:function(e){e.preventDefault(),o({})},children:"Reset"})]})}function x(){var e={api_key:"Pe94WWsLk3PoPXObJEX4yxGcfXRNiDIwxVdZwCzq",timeframe:"hourly",format:"json"},t=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},a=arguments.length>2&&void 0!==arguments[2]&&arguments[2],n=Object(c.useRef)(!1),s=Object(c.useState)(e),r=Object(u.a)(s,2),l=r[0],i=r[1],o=Object(c.useState)(t),b=Object(u.a)(o,2),m=b[0],h=b[1],O=Object(c.useState)(null),p=Object(u.a)(O,2),v=p[0],x=p[1],f=Object(c.useState)(!1),y=Object(u.a)(f,2),g=y[0],N=y[1],k=Object(c.useState)(!1),S=Object(u.a)(k,2),w=S[0],C=S[1],I=Object(c.useState)(""),R=Object(u.a)(I,2),A=R[0],M=R[1],V=Object(c.useState)(0),q=Object(u.a)(V,2),E=q[0],D=q[1],P=Object.keys(m).map((function(e){return"".concat(encodeURIComponent(e),"=").concat(encodeURIComponent(m[e]))})).join("&"),_=function(){return D((function(e){return e+1}))};return Object(c.useEffect)((function(){!function(){var e=Object(j.a)(d.a.mark((function e(){var t,c;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!a||n.current){e.next=3;break}return n.current=!0,e.abrupt("return");case 3:return N(!0),e.prev=4,e.next=7,fetch("".concat(l).concat(P));case 7:return t=e.sent,e.next=10,t.json();case 10:c=e.sent,t.ok?x(c):(C(!0),M(c)),e.next=18;break;case 14:e.prev=14,e.t0=e.catch(4),C(!0),M(e.t0.message);case 18:return e.prev=18,N(!1),e.finish(18);case 21:case"end":return e.stop()}}),e,null,[[4,14,18,21]])})));return function(){return e.apply(this,arguments)}}()()}),[l,m,E]),{data:v,isLoading:g,hasError:w,errorMessage:A,updateUrl:i,updateParams:h,refetch:_}}("https://developer.nrel.gov/api/pvwatts/v6.json?",e,!0),a=t.data,s=t.isLoading,r=t.updateParams,l=t.hasError,o=t.errorMessage,b=Object(c.useState)(e),h=Object(u.a)(b,2),O=h[0],p=h[1],x=Object(c.useState)(!1),f=Object(u.a)(x,2),y=f[0],g=f[1];Object(c.useEffect)((function(){o&&console.error(o.errors)}),[o]),Object(c.useEffect)((function(){!l&&a&&a.outputs&&g(!0)}),[l,a]);return Object(n.jsxs)("div",{className:"container",children:[l&&!s&&Object(n.jsxs)("div",{className:"mt-4 alert alert-danger",role:"alert",children:[Object(n.jsx)("strong",{children:"Oh No!"}),"Something went wrong.",o.errors&&Object(n.jsx)("ul",{children:o.errors.map((function(e){return Object(n.jsx)("li",{children:e})}))})]}),!y&&!s&&Object(n.jsx)(v,{handleSubmit:function(){return r(O)},handleInputChange:function(e,t){e.length<=0||(g(!1),p((function(a){var n=Object(i.a)({},a);return n[e]=t,n})))}}),s&&Object(n.jsx)("div",{className:"py-5 text-center",children:Object(n.jsx)("div",{className:"spinner-border text-primary",role:"status",children:Object(n.jsx)("span",{className:"sr-only",children:"Loading..."})})}),a&&y&&!s&&Object(n.jsxs)("div",{className:"my-4",children:[Object(n.jsx)(m,{acMonthly:a.outputs.ac_monthly,poa:a.outputs.poa}),Object(n.jsx)("button",{type:"button",className:"btn btn-secondary",onClick:function(){return g(!1)},children:"Back to Form"})]})]})}h.defaultProps={value:0,step:1,showInput:!0},O.defaultProps={value:"",isRequired:!1},p.defaultProps={value:"",isRequired:!1},l.a.render(Object(n.jsx)(s.a.StrictMode,{children:Object(n.jsx)(x,{})}),document.getElementById("root"))}},[[18,1,2]]]);
//# sourceMappingURL=main.6eb28d3e.chunk.js.map