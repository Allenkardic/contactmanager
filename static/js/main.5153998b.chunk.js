(window["webpackJsonpcontact-manager"]=window["webpackJsonpcontact-manager"]||[]).push([[0],{30:function(e,t,a){},35:function(e,t,a){e.exports=a(64)},40:function(e,t,a){},46:function(e,t,a){},64:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(31),l=a.n(c),o=a(2),i=a(3),s=a(5),m=a(4),u=a(6),h=(a(40),a(10)),p=function(e){function t(){var e,a;Object(o.a)(this,t);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(a=Object(s.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(r)))).state={menuToggle:!1},a.navMenuToggle=function(){a.setState({menuToggle:!a.state.menuToggle})},a}return Object(u.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){var e=this.props,t=e.home,a=e.listContacts,n=e.about,c=e.brand;return r.a.createElement("div",null,r.a.createElement("div",{className:"navbar-des"},r.a.createElement("div",{className:"navbar-des-one"},r.a.createElement("h2",{className:"brand"},r.a.createElement("span",{style:{color:"gold"}},c," "))),r.a.createElement("div",{className:"navbar-des-two"},r.a.createElement("ul",{className:"navbar-des-ul"},r.a.createElement("li",{className:"navbar-des-li"},r.a.createElement("div",{className:"navbar-des-a"}," ",r.a.createElement(h.b,{to:"/",style:{textDecoration:"none",color:"white"}},t))),r.a.createElement("li",{className:"navbar-des-li"},r.a.createElement("div",{className:"navbar-des-a"}," ",r.a.createElement(h.b,{to:"/contact",style:{textDecoration:"none",color:"white"}},a))),r.a.createElement("li",{className:"navbar-des-li"},r.a.createElement("div",{className:"navbar-des-a"}," ",r.a.createElement(h.b,{to:"/about",style:{textDecoration:"none",color:"white"}},n)))))),r.a.createElement("div",{className:"navbar-mob"},r.a.createElement("div",{className:"navbar-mob-one"},r.a.createElement("h2",null,r.a.createElement("span",{style:{color:"gold"}},c," "),r.a.createElement("i",{onClick:this.navMenuToggle,className:"fas fa-bars hamburger"}))),r.a.createElement("div",{className:"navbar-mob-two"},this.state.menuToggle?r.a.createElement("ul",{className:"navbar-mob-ul"},r.a.createElement("li",{className:"navbar-mob-li"},r.a.createElement("div",{className:"navbar-mob-a"},r.a.createElement(h.b,{to:"/",style:{textDecoration:"none",color:"white"}},t))),r.a.createElement("li",{className:"navbar-mob-li"},r.a.createElement("div",{className:"navbar-mob-a"},r.a.createElement(h.b,{to:"/contact",style:{textDecoration:"none",color:"white"}},a))),r.a.createElement("li",{className:"navbar-mob-li"},r.a.createElement("div",{className:"navbar-mob-a"},r.a.createElement(h.b,{to:"/about",style:{textDecoration:"none",color:"white"}},n)))):null)))}}]),t}(n.Component),d=(a(46),a(12)),b=a.n(d),E=a(34),v=a(14);function f(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function g(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?f(a,!0).forEach((function(t){Object(v.a)(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):f(a).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}var y=r.a.createContext(),O=function(e,t){switch(t.type){case"DELETE_CONTACT":return g({},e,{items:e.items.filter((function(e){return e.id!==t.payload}))});case"ADD_CONTACT":return g({},e,{items:[t.payload].concat(Object(E.a)(e.items))});case"UPDATE_CONTACT":return g({},e,{items:e.items.map((function(e){return e.id===t.payload.id?e=t.payload:e}))});default:return e}},j=function(e){function t(){var e,a;Object(o.a)(this,t);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(a=Object(s.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(r)))).state={items:[],dispatch:function(e){return a.setState((function(t){return O(t,e)}))}},a}return Object(u.a)(t,e),Object(i.a)(t,[{key:"componentDidMount",value:function(){var e=this;b.a.get("http://jsonplaceholder.typicode.com/users").then((function(t){return e.setState({items:t.data})}))}},{key:"render",value:function(){return r.a.createElement(y.Provider,{value:this.state},this.props.children)}}]),t}(n.Component),C=y.Consumer,N=function(e){function t(){var e,a;Object(o.a)(this,t);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(a=Object(s.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(r)))).state={contactToggle:!0},a.onClickToggle=function(){a.setState({contactToggle:!a.state.contactToggle})},a.onDeleteClick=function(e,t){b.a.delete("http://jsonplaceholder.typicode.com/users/".concat(e)).then((function(a){return t({type:"DELETE_CONTACT",payload:e})}))},a}return Object(u.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){var e=this,t=this.props.content,a=t.id,n=t.name,c=t.email,l=t.phone;return r.a.createElement(C,null,(function(t){var o=t.dispatch;return r.a.createElement("div",{className:"container"},r.a.createElement("h1",{className:"contact-h1"},"name: ",n," ",r.a.createElement("i",{onClick:e.onClickToggle,class:"fas fa-caret-down"}),r.a.createElement("i",{onClick:e.onDeleteClick.bind(e,a,o),class:"fas fa-trash-alt",style:{float:"right",color:"red"}}),r.a.createElement(h.b,{to:"contact/edit/".concat(a)},r.a.createElement("i",{style:{float:"right",marginRight:"0.5rem",color:"blue"},class:"fas fa-user-edit"}))),e.state.contactToggle?r.a.createElement("ul",{className:"container-inner"},r.a.createElement("li",{className:"container-inner-li"},c),r.a.createElement("li",{className:"container-inner-li"},l)):null)}))}}]),t}(n.Component),w=function(e){function t(){return Object(o.a)(this,t),Object(s.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){return r.a.createElement(C,null,(function(e){var t=e.items;return r.a.createElement(r.a.Fragment,null,t.map((function(e){return r.a.createElement(N,{key:e.id,content:e})})))}))}}]),t}(n.Component),T=(a(30),function(e){function t(){var e,a;Object(o.a)(this,t);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(a=Object(s.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(r)))).state={name:"",email:"",phone:""},a.handleChange=function(e){a.setState(Object(v.a)({},e.target.name,e.target.value))},a.handleSubmit=function(e,t){t.preventDefault();var n=a.state,r={name:n.name,email:n.email,phone:n.phone};b.a.post("http://jsonplaceholder.typicode.com/users/",r).then((function(t){return e({type:"ADD_CONTACT",payload:t.data})})),a.setState({name:"",email:"",phone:""}),a.props.history.push("/contact")},a}return Object(u.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){var e=this,t=this.state,a=t.name,n=t.email,c=t.phone;return r.a.createElement(C,null,(function(t){var l=t.dispatch;return r.a.createElement("div",{className:"container-form"},r.a.createElement("form",{onSubmit:e.handleSubmit.bind(e,l)},r.a.createElement("h1",{className:"add-contact"},"Add Contacts"),r.a.createElement("label",{htmlFor:""},"Name:"),r.a.createElement("input",{className:"input-inner",type:"text",name:"name",value:a,onChange:e.handleChange,placeholder:"Enter name",required:!0}),r.a.createElement("br",null),r.a.createElement("label",{htmlFor:""},"Email:"),r.a.createElement("input",{className:"input-inner",type:"email",name:"email",value:n,onChange:e.handleChange,placeholder:"Enter email",required:!0}),r.a.createElement("br",null),r.a.createElement("label",{htmlFor:""},"Phone no:"),r.a.createElement("input",{className:"input-inner",type:"text",name:"phone",value:c,onChange:e.handleChange,placeholder:"Enter phone",required:!0}),r.a.createElement("br",null),r.a.createElement("button",{className:"btn",type:"submit"},"Add contact")))}))}}]),t}(n.Component)),k=function(e){function t(){var e,a;Object(o.a)(this,t);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(a=Object(s.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(r)))).state={name:"",email:"",phone:""},a.handleSubmit=function(e,t){t.preventDefault();var n=a.state,r={name:n.name,email:n.email,phone:n.phone},c=a.props.match.params.id;b.a.put("http://jsonplaceholder.typicode.com/users/".concat(c),r).then((function(t){return e({type:"UPDATE_CONTACT",payload:t.data})})),a.setState({name:"",email:"",phone:""}),a.props.history.push("/contact")},a.handleChange=function(e){a.setState(Object(v.a)({},e.target.name,e.target.value))},a}return Object(u.a)(t,e),Object(i.a)(t,[{key:"componentDidMount",value:function(){var e=this,t=this.props.match.params.id;b.a.get("http://jsonplaceholder.typicode.com/users/".concat(t)).then((function(t){return e.setState({name:t.data.name,email:t.data.email,phone:t.data.phone})}))}},{key:"render",value:function(){var e=this,t=this.state,a=t.name,n=t.email,c=t.phone;return r.a.createElement(C,null,(function(t){var l=t.dispatch;return r.a.createElement("div",{className:"container-form"},r.a.createElement("form",{onSubmit:e.handleSubmit.bind(e,l)},r.a.createElement("h1",{className:"add-contact"},"Edit Contacts"),r.a.createElement("label",{htmlFor:""},"Name:"),r.a.createElement("input",{className:"input-inner",type:"text",name:"name",value:a,onChange:e.handleChange,placeholder:"Enter name",required:!0}),r.a.createElement("br",null),r.a.createElement("label",{htmlFor:""},"Email:"),r.a.createElement("input",{className:"input-inner",type:"email",name:"email",value:n,onChange:e.handleChange,placeholder:"Enter email",required:!0}),r.a.createElement("br",null),r.a.createElement("label",{htmlFor:""},"Phone no:"),r.a.createElement("input",{className:"input-inner",type:"text",name:"phone",value:c,onChange:e.handleChange,placeholder:"Enter phone",required:!0}),r.a.createElement("br",null),r.a.createElement("button",{className:"btn",type:"submit"},"Update contact")))}))}}]),t}(n.Component);function D(){return r.a.createElement("div",null,r.a.createElement("h1",null,"this is a contact management app"),r.a.createElement("p",null,"it get contacts info from a fake rest api know as jsonplaceholder and contacts can be deleted or added to the list"," "))}var A=function(e){function t(){var e,a;Object(o.a)(this,t);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(a=Object(s.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(r)))).state={title:"",userId:""},a}return Object(u.a)(t,e),Object(i.a)(t,[{key:"componentDidMount",value:function(){var e=this;fetch("https://jsonplaceholder.typicode.com/posts/1").then((function(e){return e.json()})).then((function(t){return e.setState({title:t.title,userId:t.userId})}))}},{key:"render",value:function(){var e=this.state,t=e.title,a=e.userId;return r.a.createElement("div",null,r.a.createElement("h1",null,t),r.a.createElement("h1",null,a))}}]),t}(n.Component);var x=function(){return r.a.createElement("div",null,r.a.createElement("h1",null,"this page does not exist"))},S=a(13);var P=function(){return r.a.createElement(j,null,r.a.createElement(h.a,null," ",r.a.createElement("div",{className:"App"},r.a.createElement(p,{brand:"brand",home:"addContact",listContacts:"listContacts",about:"About"}),r.a.createElement(S.c,null,r.a.createElement(S.a,{exact:!0,path:"/",component:T}),r.a.createElement(S.a,{exact:!0,path:"/contact/edit/:id",component:k}),r.a.createElement(S.a,{exact:!0,path:"/contact",component:w}),r.a.createElement(S.a,{exact:!0,path:"/about",component:D}),r.a.createElement(S.a,{exact:!0,path:"/test",component:A}),r.a.createElement(S.a,{component:x})))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));l.a.render(r.a.createElement(P,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}},[[35,1,2]]]);
//# sourceMappingURL=main.5153998b.chunk.js.map