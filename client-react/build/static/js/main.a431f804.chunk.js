(this["webpackJsonpweb-file-editor-reactjs"]=this["webpackJsonpweb-file-editor-reactjs"]||[]).push([[0],{100:function(e,t,n){e.exports=n(247)},105:function(e,t,n){},106:function(e,t,n){},247:function(e,t,n){"use strict";n.r(t);var a=n(0),o=n.n(a),r=n(18),i=n.n(r),c=(n(105),n(78)),s=n(79),l=n(97),u=n(98),f=(n(106),n(249)),m=n(251),h=n(48),d=n(45),v=n.n(d),p={getContentFile:function(){return v.a.get("/api/getcontentfile").then((function(e){return e})).catch((function(e){return e}))},saveContentFile:function(e){return console.log(e),v.a.post("/api/savefile",e).then((function(e){return e})).catch((function(e){return e}))}};var g=function(e){Object(u.a)(n,e);var t=Object(l.a)(n);function n(e){var a;return Object(c.a)(this,n),(a=t.call(this,e)).componentDidMount=function(){p.getContentFile().then((function(e){200===e.status?(console.log("response",e.data),a.setState({file:e.data})):console.log("erreur cot\xe9 serveur: ",e)}))},a.handleChange=function(e){var t=e.target,n=(t.name,t.value),o=a.state.file;o={name:o.name,content:n},a.setState({file:o})},a.handleSubmit=function(){p.saveContentFile(a.state.file).then((function(e){200===e.status?(a.setState({file:e.data}),console.log("response file modified",e.data)):console.log("erreur cot\xe9 serveur: ",e)}))},a.state={file:{}},a}return Object(s.a)(n,[{key:"render",value:function(){return o.a.createElement("div",{className:"App"},o.a.createElement(f.a,{onSubmitCapture:this.handleSubmit},o.a.createElement(m.a,{className:"namefile",value:this.state.file.name}),o.a.createElement(m.a.TextArea,{rows:25,className:"content",type:"text",value:this.state.file.content,name:"content",onChange:this.handleChange}),o.a.createElement(h.a,{type:"primary",htmlType:"submit",className:"savebtn"},"Save")))}}]),n}(a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));i.a.render(o.a.createElement("div",null,o.a.createElement(g,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[100,1,2]]]);
//# sourceMappingURL=main.a431f804.chunk.js.map