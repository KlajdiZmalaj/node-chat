(this.webpackJsonpapp=this.webpackJsonpapp||[]).push([[0],{115:function(e,t,a){},163:function(e,t,a){e.exports=a(276)},225:function(e,t,a){},228:function(e,t,a){},276:function(e,t,a){"use strict";a.r(t);var n=a(0),o=a.n(n),r=a(16),c=a.n(r),i=a(36),s=a(3),l=a(52),u=Object(l.createActions)({setUnauthorization:[],getLogin:["username","password"],setLoginData:["loginData"],checkToken:["token"],submitMsg:["id","text","token","imgObj"],createRoom:["name","image","description","token","isPrivate","password","callBack"],deleteRoom:["id","token"],deleteMessage:["roomId","msgId","token"]}),m=(u.Types,u.Creators),d={loginData:JSON.parse(localStorage.getItem("loginData")||"{}")||{}},p=Object(l.createReducer)(d,{SET_LOGIN_DATA:function(e,t){var a=t.loginData;return Object(s.a)(Object(s.a)({},e),{},{loginData:a})},SET_UNAUTHORIZATION:function(){return localStorage.setItem("loginData","{}"),Object(s.a)(Object(s.a)({},d),{},{loginData:{}})}}),v=Object(l.createActions)({setRoomData:["roomData"],getRoomData:["id"],getRooms:[],setRooms:["rooms"],setActiveRoom:["activeRoom"],updateRoomMessages:["data"],getRegister:["username","password","redirectAndClear"],setLoadingData:["loadingData"]}),f=(v.Types,v.Creators),g=Object(l.createReducer)({roomData:{},rooms:[],activeRoom:"",loadingData:!1},{SET_LOADING_DATA:function(e,t){var a=t.loadingData;return Object(s.a)(Object(s.a)({},e),{},{loadingData:a})},SET_ROOM_DATA:function(e,t){var a=t.roomData;return Object(s.a)(Object(s.a)({},e),{},{roomData:a})},SET_ROOMS:function(e,t){var a=t.rooms;return Object(s.a)(Object(s.a)({},e),{},{rooms:a})},SET_ACTIVE_ROOM:function(e,t){var a=t.activeRoom;return Object(s.a)(Object(s.a)({},e),{},{activeRoom:a})}}),b=a(157),E=a(15),h=a(22),O=function(){return o.a.createElement("div",{className:"login-left"})},j=(a(115),Object(i.b)(null,m)((function(e){var t=e.getLogin,a=Object(n.useState)({}),r=Object(h.a)(a,2),c=r[0],i=r[1];return console.log("ca ka",c),o.a.createElement(o.a.Fragment,null,o.a.createElement(O,null),o.a.createElement("form",{className:"loginForm"},o.a.createElement("i",{className:"fal fa-user-circle","aria-hidden":"true"})," ",o.a.createElement("div",null,o.a.createElement("i",{className:"fal fa-user","aria-hidden":"true"}),o.a.createElement("input",{placeholder:"Username",type:"text",onChange:function(e){i(Object(s.a)(Object(s.a)({},c),{},{username:e.target.value}))}})),o.a.createElement("div",null,o.a.createElement("i",{className:"fal fa-lock","aria-hidden":"true"}),o.a.createElement("input",{placeholder:"Passcode",type:"password",readOnly:!0,onClick:function(e){return e.target.readOnly=!1},onChange:function(e){i(Object(s.a)(Object(s.a)({},c),{},{password:e.target.value}))}})),o.a.createElement("button",{onClick:function(e){e.preventDefault(),e.stopPropagation(),t(c.username,c.password)}},"Loggin"),o.a.createElement("p",null,"Dont have account?"," ",o.a.createElement("span",{onClick:function(){window.location.hash="register"}},"Register"))))}))),w=(a(225),function(e){var t=e.room,a=e.activeRoom,r=e.isAdmin,c=e.setActiveRoom,i=e.getRoomData,s=e.setValid,l=e.deleteRoom,u=e.setRoomData,m=e.loginData,d=Object(n.useState)(0),p=Object(h.a)(d,2),v=p[0],f=p[1];return o.a.createElement("div",{key:t._id,"room-id":t._id,className:"room".concat(a===t._id?" active":"").concat(v===t._id?" slideRight":""),draggable:r,onDragStart:function(e){f(0),f(e.clientX)},onDragEnd:function(e){console.log("ca ka e",e,e.clientX,e.clientY),e.clientX-v>=100&&f(t._id)},onClick:function(){t.isPrivate?s({popup:!0,password:t.password,roomId:t._id}):(c(t._id),i(t._id),a&&window.socket.emit("unsubscribe",a),window.socket.emit("subscribe",t._id))}},o.a.createElement("i",{onClick:function(e){e.preventDefault(),e.stopPropagation(),l(t._id,m.token)},className:"fal fa-times","aria-hidden":"true"}),o.a.createElement("img",{src:null===t||void 0===t?void 0:t.image,alt:""})," ",o.a.createElement("span",null,null===t||void 0===t?void 0:t.name),(null===t||void 0===t?void 0:t.isPrivate)&&o.a.createElement("i",{className:"fal fa-user-shield"}),a===t._id?o.a.createElement("i",{className:"fal fa-sign-out",onClick:function(e){e.preventDefault(),e.stopPropagation(),c(""),u({})}}):null)}),k=a(84),R=a(6),D=a.n(R),N=a(41),y=a(281),_=a(278),x=a(140),S=a.n(x),C=function(e){for(var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"",a=arguments.length>2&&void 0!==arguments[2]?arguments[2]:512,n=e.includes(",")?window.atob(e.split(",")[1]):window.atob(e),o=[],r=0;r<n.length;r+=a){for(var c=n.slice(r,r+a),i=new Array(c.length),s=0;s<c.length;s++)i[s]=c.charCodeAt(s);var l=new Uint8Array(i);o.push(l)}var u=new Blob(o,{type:t});return[URL.createObjectURL(u),u]},I=function(){var e=Object(N.a)(D.a.mark((function e(t){return D.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",new Promise((function(e,a){var n=new FileReader;n.onload=function(a){var n=a.target.result,o=C(n,t.type)[0],r=C(n,t.type)[1];e({file:t,id:"".concat(t.name).concat(t.size),name:t.name,url:o,blobi:r,type:t.type,base64:n})},n.readAsDataURL(t),n.onerror=a})));case 1:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),M=function(e){var t,a=e.roomData,r=e.loginData,c=e.activeRoom,i=e.submitMsg,s=e.setLoadingData,l=e.deleteMessage,u=Object(n.useState)(!1),m=Object(h.a)(u,2),d=m[0],p=m[1],v=Object(n.useState)([]),f=Object(h.a)(v,2),g=f[0],b=f[1],E=Object(n.useState)(""),O=Object(h.a)(E,2),j=O[0],w=O[1],R=Object(n.useState)([]),x=Object(h.a)(R,2),C=x[0],M=x[1],A=Object(n.useState)([]),P=Object(h.a)(A,2),T=P[0],U=P[1];return Object(n.useEffect)((function(){(function(){var e=Object(N.a)(D.a.mark((function e(){var t,a;return D.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://emoji-api.com/categories?access_key=134301967264b9e3817d636e2373d73d653a102d");case 2:return t=e.sent,e.next=5,t.json();case 5:a=e.sent,b(a),w(a[0].slug);case 8:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}})()()}),[]),Object(n.useEffect)((function(){s(!0),j&&function(){var e=Object(N.a)(D.a.mark((function e(){var t,a;return D.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return M([]),e.next=3,fetch("https://emoji-api.com/categories/".concat(j,"?access_key=134301967264b9e3817d636e2373d73d653a102d"));case 3:return t=e.sent,e.next=6,t.json();case 6:a=e.sent,M(null===a||void 0===a?void 0:a.slice(0,400)),s(!1);case 9:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}()()}),[j]),Object(n.useEffect)((function(){d||M([])}),[d]),console.log("stateFiles",T),o.a.createElement("div",{className:"homePage--right__messages"},o.a.createElement("div",{id:"msgWrapper",className:"msg-wrapper"},(null===a||void 0===a?void 0:a.messages)?null===a||void 0===a||null===(t=a.messages)||void 0===t?void 0:t.sort((function(e,t){return e-t})).map((function(e){var t,n,c,i;return o.a.createElement(y.a,{key:e.date,placement:(null===r||void 0===r?void 0:r.username)===(null===e||void 0===e||null===(t=e.user)||void 0===t?void 0:t.username)?"topRight":"topLeft",title:"Sent at ".concat(S()(e.date).format("MMMM Do YYYY, h:mm:ss a"))},o.a.createElement(_.a,{overlay:(null===r||void 0===r?void 0:r.username)===(null===e||void 0===e||null===(n=e.user)||void 0===n?void 0:n.username)?o.a.createElement("div",{className:"ddMenu",onClick:function(){l(a._id,e._id,r.token)}},"Delete Message ",o.a.createElement("i",{className:"fal fa-trash","aria-hidden":"true"})):o.a.createElement("span",null),trigger:["contextMenu"]},o.a.createElement("div",{className:"msg".concat((null===r||void 0===r?void 0:r.username)===(null===e||void 0===e||null===(c=e.user)||void 0===c?void 0:c.username)?" me":"")},o.a.createElement("div",{className:"userMsg"},null===e||void 0===e||null===(i=e.user)||void 0===i?void 0:i.username),e.image&&o.a.createElement("img",{src:e.image,alt:""}),o.a.createElement("div",{className:"text"},null===e||void 0===e?void 0:e.text))))})):o.a.createElement("span",null,c?"No messages yet in this room. Start typing your first message.":"No room selected.")),o.a.createElement("div",{className:c?"inputbar":"disable inputbar"},o.a.createElement(_.a,{trigger:["click"],onVisibleChange:p,visible:d,overlay:o.a.createElement("div",{className:"emojis"},o.a.createElement("div",{className:"emojis--categories"},g.map((function(e){return o.a.createElement("span",{key:e.slug,className:j===e.slug?"active":"",onClick:function(){w(e.slug)}},e.slug)}))),o.a.createElement("div",{className:"emojis--icons"},(null===C||void 0===C?void 0:C.length)>0?(C||[]).map((function(e){return o.a.createElement(y.a,{title:e.slug,key:e.slug},o.a.createElement("span",{onClick:function(){document.getElementById("inputMsg").value="".concat(document.getElementById("inputMsg").value).concat(e.character)}},e.character))})):o.a.createElement("div",null,"Loading Emojis..."))),placement:"topLeft",arrow:!0},o.a.createElement("i",{className:"far fa-grin-stars"})),o.a.createElement("div",{className:"uploadWrapper"},o.a.createElement("input",{id:"fileIcon",type:"file",multiple:!0,onChange:function(){var e=Object(N.a)(D.a.mark((function e(t){var a,n;return D.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a=[],Object(k.a)(t.target.files).map((function(e){return a.push(e)})),e.next=4,Promise.all(a.map(function(){var e=Object(N.a)(D.a.mark((function e(t){var a;return D.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,I(t);case 2:return a=e.sent,e.abrupt("return",a);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()));case 4:n=e.sent,U(n);case 6:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()}),o.a.createElement("label",{htmlFor:"fileIcon"},o.a.createElement("i",{className:"fa fa-upload","aria-hidden":"true"})),T.length&&T.map((function(e,t){return o.a.createElement("img",{key:t,src:e.url,alt:"",className:"preview"})})),T.length&&o.a.createElement("div",{className:"fileRemover",onClick:function(){U([])}}," ",o.a.createElement("i",{className:"fal fa-times","aria-hidden":"true"})," Remove ",T.length," files")),o.a.createElement("input",{type:"text",id:"inputMsg",name:"msgType",autoComplete:"off",onKeyPress:function(e){13==e.charCode&&e.target.value.length>0&&(U([]),i(a._id,e.target.value,null===r||void 0===r?void 0:r.token,T),e.target.value="")}}),o.a.createElement("i",{className:"fad fa-paper-plane",onClick:function(){document.getElementById("inputMsg").value.length>0&&(i(a._id,document.getElementById("inputMsg").value,null===r||void 0===r?void 0:r.token,T),document.getElementById("inputMsg").value="",U([]))}})))},A=function(e){var t=e.createRoom,a=e.getRooms,n=e.formData,r=e.setFormData,c=e.loginData;return o.a.createElement("div",{className:"popUpForm"},o.a.createElement("div",{className:"popUpForm--title"},"Create Room"," ",o.a.createElement("i",{onClick:function(){r(Object(s.a)(Object(s.a)({},n),{},{visible:!1}))},className:"fal fa-times","aria-hidden":"true"})," "),o.a.createElement("div",{className:"popUpForm--field"},o.a.createElement("span",null,"Name : ")," ",o.a.createElement("input",{type:"text",value:n.name,placeholder:"#",onChange:function(e){r(Object(s.a)(Object(s.a)({},n),{},{name:e.target.value}))}})),o.a.createElement("div",{className:"popUpForm--field"},o.a.createElement("span",null,"Description : ")," ",o.a.createElement("input",{type:"text",value:n.desc,placeholder:"#",onChange:function(e){r(Object(s.a)(Object(s.a)({},n),{},{desc:e.target.value}))}})),o.a.createElement("div",{className:"popUpForm--field"},o.a.createElement("span",null,"Image URL : ")," ",o.a.createElement("input",{type:"text",placeholder:"https://imageURL.com",value:n.img,onChange:function(e){r(Object(s.a)(Object(s.a)({},n),{},{img:e.target.value}))}})),o.a.createElement("div",{className:"popUpForm--field"},o.a.createElement("span",null,"Room Type : ")," ",o.a.createElement("i",{onClick:function(e){r(Object(s.a)(Object(s.a)({},n),{},{isPrivate:!0}))},className:"fal fa-lock"+(n.isPrivate?" active":""),"aria-hidden":"true"}),o.a.createElement("i",{onClick:function(e){r(Object(s.a)(Object(s.a)({},n),{},{isPrivate:!1}))},className:"fal fa-lock-open"+(n.isPrivate?"":" active")})),n.isPrivate&&o.a.createElement("div",{className:"popUpForm--field"},o.a.createElement("span",null,"Room Passcode : ")," ",o.a.createElement("input",{type:"password",readOnly:!0,onClick:function(e){return e.target.readOnly=!1},placeholder:"***",value:n.password,onChange:function(e){r(Object(s.a)(Object(s.a)({},n),{},{password:e.target.value}))}})),o.a.createElement("div",{className:"popUpForm--field"},o.a.createElement("button",{onClick:function(){t(n.name,n.img,n.desc,c.token,n.isPrivate,n.password,(function(){r({visible:!1}),a()}))}},"Submit")))},P=function(e){var t=e.setActiveRoom,a=e.getRoomData,n=e.activeRoom,r=e.setValid,c=e.validatePw;return o.a.createElement("div",{className:"popUpForm"},o.a.createElement("div",{className:"popUpForm--title"},"Room Password"," ",o.a.createElement("i",{onClick:function(){return r({popup:!1})},className:"fal fa-times","aria-hidden":"true"})," "),o.a.createElement("div",{className:"popUpForm--field"},o.a.createElement("span",null,"PIN : "),o.a.createElement("input",{type:"password",readOnly:!0,onClick:function(e){e.target.readOnly=!1},onChange:function(e){return r(Object(s.a)(Object(s.a)({},c),{},{passwordCheck:e.target.value}))}})),o.a.createElement("div",{className:"popUpForm--field"},o.a.createElement("button",{onClick:function(){c.password===c.passwordCheck&&(r({popup:!1}),t(c.roomId),a(c.roomId),n&&window.socket.emit("unsubscribe",n),window.socket.emit("subscribe",c.roomId))}},"Submit")))},T=Object(i.b)((function(e){var t=e.auth.loginData,a=e.main;return{loginData:t,rooms:a.rooms,activeRoom:a.activeRoom,roomData:a.roomData}}),Object(s.a)(Object(s.a)({},f),m))((function(e){var t=e.loginData,a=void 0===t?{}:t,r=e.setUnauthorization,c=e.getRooms,i=e.rooms,l=e.setActiveRoom,u=e.activeRoom,m=e.getRoomData,d=e.roomData,p=e.setRoomData,v=e.checkToken,f=e.submitMsg,g=e.createRoom,b=e.deleteRoom,E=e.setLoadingData,O=e.deleteMessage,j=a.isAdmin,k=Object(n.useState)({visible:!1,isPrivate:!1}),R=Object(h.a)(k,2),D=R[0],N=R[1],y=Object(n.useState)({popup:!1}),_=Object(h.a)(y,2),x=_[0],S=_[1];return Object(n.useEffect)((function(){v(a.token),c()}),[]),Object(n.useEffect)((function(){var e=document.querySelector(".msg:last-child");e&&setTimeout((function(){e.scrollIntoView({behavior:"smooth"})}),300)}),[null===d||void 0===d?void 0:d.name]),Object(n.useEffect)((function(){}),[x]),o.a.createElement("div",{className:"homePage"},o.a.createElement("div",{className:"homePage--left"},i.map((function(e){return o.a.createElement(w,{key:e._id,room:e,activeRoom:u,isAdmin:j,setActiveRoom:l,getRoomData:m,setValid:S,deleteRoom:b,setRoomData:p,loginData:a})})),j&&o.a.createElement("button",{onClick:function(){N(Object(s.a)(Object(s.a)({},D),{},{visible:!0}))},className:"createRoom"},"Create Room")),o.a.createElement("div",{className:"homePage--right"},o.a.createElement("div",{className:"homePage--right__top"},o.a.createElement("p",null,"Welcome ",o.a.createElement("span",null,a.username)," "),o.a.createElement("p",{id:"roomName"},(null===d||void 0===d?void 0:d.name)||"Select a Room"),o.a.createElement("button",{onClick:function(){r()}},o.a.createElement("i",{className:"fal fa-sign-out"})," Log OUT")),o.a.createElement("div",{className:"homePage--right__cover"},o.a.createElement("div",{style:{backgroundImage:"url(".concat(null===d||void 0===d?void 0:d.image,")")}},o.a.createElement("div",null),o.a.createElement("img",{src:null===d||void 0===d?void 0:d.image,alt:""}))),o.a.createElement(M,{roomData:d,loginData:a,activeRoom:u,submitMsg:f,setLoadingData:E,deleteMessage:O})),D.visible&&o.a.createElement(A,{createRoom:g,getRooms:c,formData:D,setFormData:N,loginData:a}),x.popup&&o.a.createElement(P,{setActiveRoom:l,getRoomData:m,activeRoom:u,roomData:d,validatePw:x,setValid:S}))})),U=a(279),L=Object(i.b)(null,f)((function(e){var t=e.getRegister,a=Object(n.useState)({}),r=Object(h.a)(a,2),c=r[0],i=r[1],l=function(){i({username:"",password:"",password2:""})};return o.a.createElement(o.a.Fragment,null,o.a.createElement(O,null),o.a.createElement("form",{className:"loginForm"},o.a.createElement("i",{className:"fal fa-user-plus","aria-hidden":"true"}),o.a.createElement("div",null,o.a.createElement("i",{className:"fal fa-user","aria-hidden":"true"}),o.a.createElement("input",{type:"text",placeholder:"UserName",value:c.username,onChange:function(e){i(Object(s.a)(Object(s.a)({},c),{},{username:e.target.value}))}})),o.a.createElement("div",null,o.a.createElement("i",{className:"fal fa-lock","aria-hidden":"true"}),o.a.createElement("input",{placeholder:"Passcode",type:"text",value:c.password,onChange:function(e){i(Object(s.a)(Object(s.a)({},c),{},{password:e.target.value}))}})),o.a.createElement("div",null,o.a.createElement("i",{className:"fal fa-lock","aria-hidden":"true"}),o.a.createElement("input",{placeholder:"Repeat Passcode",type:"text",value:c.password2,onChange:function(e){i(Object(s.a)(Object(s.a)({},c),{},{password2:e.target.value}))}})),o.a.createElement("button",{onClick:function(e){e.preventDefault(),e.stopPropagation(),c.username&&c.password&&c.password===c.password2?t(c.username,c.password,l):U.a.error({description:"Passwords are not the same",placement:window.innerWidth<=1024?"topRight":"bottomRight",duration:4})}},"Register"),o.a.createElement("p",null,"Already Signed Up?",o.a.createElement("span",{onClick:function(){window.location.hash="login"}},"Login"))))})),F=function(){return o.a.createElement("div",{"data-route":"login"},o.a.createElement(j,null))},G=function(){return o.a.createElement("div",{"data-route":"home"},o.a.createElement(T,null))},B=function(){return o.a.createElement("div",{"data-route":"login"},o.a.createElement(L,null))},W=(a(227),a(228),a(156)),V=window.location.href.match(/127|192|localhost/g),J=V?"http://localhost:5000/api":"https://chat-al.herokuapp.com/api/",X=function(e,t){var a,n,o,r;return(null===e||void 0===e||null===(a=e.response)||void 0===a?void 0:a.status)===parseInt(t)||(null===(n=e.error)||void 0===n||null===(o=n.response)||void 0===o?void 0:o.status)===parseInt(t)||(null===e||void 0===e||null===(r=e.response)||void 0===r?void 0:r.status)===parseInt(t)},Y=function(e){if(X(e,401))window.store.dispatch({type:"SET_UNAUTHORIZATION"});else if("Network Error"===(null===e||void 0===e?void 0:e.message));else if(X(e,445));else if(X(e,440));else if(X(e,429));else if(X(e,403));else{var t,a,n,o;U.a.error({message:(null===e||void 0===e||null===(t=e.response)||void 0===t||null===(a=t.data)||void 0===a?void 0:a.message)||"error Message",description:(null===e||void 0===e||null===(n=e.response)||void 0===n||null===(o=n.data)||void 0===o?void 0:o.errors)&&Object.values(e.response.data.errors),placement:window.innerWidth<=1024?"topRight":"bottomRight",duration:4})}return Promise.reject(e)},q=Object(i.b)((function(e){return{loginData:e.auth.loginData,loadingData:e.main.loadingData}}),Object(s.a)(Object(s.a)({},m),f))((function(e){var t=e.loginData,a=void 0===t?{}:t,r=e.loadingData;return Object(n.useEffect)((function(){!function(){var e=Object(W.io)(V?"http://localhost:5000":"https://chat-al.herokuapp.com");window.socket=e,e.on("connect",(function(){console.log("socket connected")})),e.on("FromAPI",(function(e){console.log("FromAPI",e)})),e.on("chat_msg",(function(e){console.log("chat_msg",e),window.store.dispatch({type:"UPDATE_ROOM_MESSAGES",data:e}),document.querySelector(".msg:last-child").scrollIntoView({behavior:"smooth"})})),e.on("message",(function(e){console.log("message",e)}))}()}),[]),o.a.createElement(o.a.Fragment,null,o.a.createElement("div",{className:"topLoading"+(r?" load":"")}),o.a.createElement(b.a,null,o.a.createElement(E.d,null,o.a.createElement(E.b,{exact:!0,path:"/"},a.token?o.a.createElement(E.a,{to:"/home"}):o.a.createElement(E.a,{to:"/login"})),o.a.createElement(E.b,{path:"/login",render:function(){return a.token?o.a.createElement(E.a,{to:"/home"}):o.a.createElement(F,null)}}),o.a.createElement(E.b,{path:"/register",render:function(){return a.token?o.a.createElement(E.a,{to:"/home"}):o.a.createElement(B,null)}}),o.a.createElement(E.b,{path:"/home"},a.token?o.a.createElement(G,null):o.a.createElement(E.a,{to:"/login"})))))})),z=a(43),H=a(159),K=a(11),Z=a(82),$=a.n(Z),Q=$.a.create({baseURL:J});Q.interceptors.request.use(function(){var e=Object(N.a)(D.a.mark((function e(t){return D.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.headers={Accept:"application/json","Sec-Fetch-Mode":"no-cors"},e.abrupt("return",t);case 2:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),(function(e){Promise.reject(e)})),Q.interceptors.response.use((function(e){return e}),(function(e){return Y(e)}));var ee=function(e,t){return Q.get("/login",{params:{username:e,password:t}}).catch((function(e){return{error:e}}))},te=function(e){return Q.get("/check",{params:{token:e}}).catch((function(e){return{error:e}}))},ae=function(e,t,a,n){return Q.post("/sendMsg",Object(s.a)({roomId:e,text:t,token:a},n.length?{images:n}:{})).catch((function(e){return{error:e}}))},ne=function(e,t,a,n,o,r){return Q.post("/createRoom",{name:e,image:t,description:a,isPrivate:n,password:o,token:r}).catch((function(e){return{error:e}}))},oe=function(e,t){return Q.post("/deleteRoom",{id:e,token:t}).catch((function(e){return{error:e}}))},re=function(e,t,a){return Q.post("/deleteMessage",{roomId:e,msgId:t,token:a}).catch((function(e){return{error:e}}))},ce=D.a.mark(de),ie=D.a.mark(pe),se=D.a.mark(ve),le=D.a.mark(fe),ue=D.a.mark(ge),me=D.a.mark(be);function de(e){var t,a,n,o;return D.a.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return t=e.username,a=e.password,r.next=3,Object(K.b)(ee,t,a);case 3:if(!(n=r.sent)){r.next=8;break}return r.next=7,Object(K.c)(m.setLoginData(n.data));case 7:(null===(o=n.data)||void 0===o?void 0:o.token)&&localStorage.setItem("loginData",JSON.stringify(n.data));case 8:case"end":return r.stop()}}),ce)}function pe(e){var t,a;return D.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return t=e.token,n.next=3,Object(K.b)(te,t);case 3:(null===(a=n.sent)||void 0===a?void 0:a.data)&&U.a.success({description:JSON.stringify(null===a||void 0===a?void 0:a.data),placement:window.innerWidth<=1024?"topRight":"bottomRight",duration:4});case 5:case"end":return n.stop()}}),ie)}function ve(e){var t,a,n,o;return D.a.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return t=e.id,a=e.text,n=e.token,o=e.imgObj,r.next=3,Object(K.b)(ae,t,a,n,o);case 3:r.sent.data;case 5:case"end":return r.stop()}}),se)}function fe(e){var t,a,n,o,r,c,i,s;return D.a.wrap((function(l){for(;;)switch(l.prev=l.next){case 0:return t=e.name,a=e.image,n=e.description,o=e.isPrivate,r=e.password,c=e.token,i=e.callBack,l.next=3,Object(K.b)(ne,t,a,n,o,r,c);case 3:(s=l.sent).data&&(U.a.success({description:JSON.stringify(null===s||void 0===s?void 0:s.data),placement:window.innerWidth<=1024?"topRight":"bottomRight",duration:4}),i());case 5:case"end":return l.stop()}}),le)}function ge(e){var t,a,n;return D.a.wrap((function(o){for(;;)switch(o.prev=o.next){case 0:return t=e.id,a=e.token,o.next=3,Object(K.b)(oe,t,a);case 3:if(!(n=o.sent).data){o.next=8;break}return U.a.success({description:JSON.stringify(null===n||void 0===n?void 0:n.data),placement:window.innerWidth<=1024?"topRight":"bottomRight",duration:4}),o.next=8,Object(K.c)({type:"GET_ROOMS"});case 8:case"end":return o.stop()}}),ue)}function be(e){var t,a,n;return D.a.wrap((function(o){for(;;)switch(o.prev=o.next){case 0:return t=e.roomId,a=e.msgId,n=e.token,o.next=3,Object(K.b)(re,t,a,n);case 3:if(!o.sent.data){o.next=7;break}return o.next=7,Object(K.c)({type:"GET_ROOM_DATA",id:t});case 7:case"end":return o.stop()}}),me)}var Ee=a(158),he=$.a.create({baseURL:J});he.interceptors.request.use(function(){var e=Object(N.a)(D.a.mark((function e(t){return D.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.headers={Accept:"application/json"},e.abrupt("return",t);case 2:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),(function(e){Promise.reject(e)})),he.interceptors.response.use((function(e){return e}),(function(e){return Y(e)}));var Oe=function(e,t){return he.post("/register",{username:e,password:t}).catch((function(e){return{error:e}}))},je=function(){return he.get("/getRooms").catch((function(e){return{error:e}}))},we=function(e){return he.get("/getRoomData/".concat(e)).catch((function(e){return{error:e}}))},ke=D.a.mark(ye),Re=D.a.mark(_e),De=D.a.mark(xe),Ne=D.a.mark(Se);function ye(e){var t,a,n,o,r,c,i,s,l,u,d,p,v,f,g,b;return D.a.wrap((function(E){for(;;)switch(E.prev=E.next){case 0:return t=e.username,a=e.password,n=e.redirectAndClear,E.next=3,Object(K.b)(Oe,t,a);case 3:if(!(o=E.sent).data){E.next=12;break}if(n(),U.a.success({description:null===o||void 0===o||null===(r=o.data)||void 0===r?void 0:r.message,placement:window.innerWidth<=1024?"topRight":"bottomRight",duration:4}),!(null===(c=o.data)||void 0===c?void 0:c.token)){E.next=12;break}return E.next=10,Object(K.c)(m.setLoginData({token:null===o||void 0===o||null===(i=o.data)||void 0===i?void 0:i.token,username:null===o||void 0===o||null===(s=o.data)||void 0===s||null===(l=s.userFound)||void 0===l?void 0:l.username,id:null===o||void 0===o||null===(u=o.data)||void 0===u||null===(d=u.userFound)||void 0===d?void 0:d._id}));case 10:localStorage.setItem("loginData",JSON.stringify({token:null===o||void 0===o||null===(p=o.data)||void 0===p?void 0:p.token,username:null===o||void 0===o||null===(v=o.data)||void 0===v||null===(f=v.userFound)||void 0===f?void 0:f.username,id:null===o||void 0===o||null===(g=o.data)||void 0===g||null===(b=g.userFound)||void 0===b?void 0:b._id})),window.location.hash="home";case 12:case"end":return E.stop()}}),ke)}function _e(e){var t,a;return D.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return Object(Ee.a)(e),n.next=3,Object(K.b)(je);case 3:if(!(t=n.sent).data){n.next=7;break}return n.next=7,Object(K.c)(f.setRooms(null===(a=t.data)||void 0===a?void 0:a.data));case 7:case"end":return n.stop()}}),Re)}function xe(e){var t,a,n;return D.a.wrap((function(o){for(;;)switch(o.prev=o.next){case 0:return t=e.id,o.next=3,Object(K.c)(f.setLoadingData(!0));case 3:return o.next=5,Object(K.b)(we,t);case 5:if(!(a=o.sent).data){o.next=11;break}return o.next=9,Object(K.c)(f.setRoomData(null===(n=a.data)||void 0===n?void 0:n.data));case 9:return o.next=11,Object(K.c)(f.setLoadingData(!1));case 11:case"end":return o.stop()}}),De)}function Se(e){var t,a;return D.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return t=e.data,n.next=3,Object(K.d)((function(e){return e.main.roomData}));case 3:return a=n.sent,a=Object(s.a)(Object(s.a)({},a),{},{messages:[].concat(Object(k.a)(a.messages),[t])}),n.next=7,Object(K.c)(f.setRoomData(a));case 7:case"end":return n.stop()}}),Ne)}var Ce=D.a.mark(Ie);function Ie(){return D.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(K.a)([Object(K.e)("GET_LOGIN",de),Object(K.e)("CHECK_TOKEN",pe),Object(K.e)("SUBMIT_MSG",ve),Object(K.e)("CREATE_ROOM",fe),Object(K.e)("DELETE_ROOM",ge),Object(K.e)("DELETE_MESSAGE",be)].concat([Object(K.e)("GET_REGISTER",ye),Object(K.e)("GET_ROOMS",_e),Object(K.e)("GET_ROOM_DATA",xe),Object(K.e)("UPDATE_ROOM_MESSAGES",Se)]));case 2:case"end":return e.stop()}}),Ce)}var Me=Object(z.c)({auth:p,main:g});var Ae=function(){var e=Object(H.a)(),t=("object"===typeof window&&window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__?window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({}):z.d)(Object(z.a)(e));return Object(s.a)(Object(s.a)({},Object(z.e)(Me,t)),{},{runSaga:e.run})}();Ae.runSaga(Ie),window.store=Ae;var Pe=function(){return o.a.createElement(i.a,{store:Ae},o.a.createElement(q,null))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(o.a.createElement(Pe,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[163,1,2]]]);
//# sourceMappingURL=main.6239f441.chunk.js.map