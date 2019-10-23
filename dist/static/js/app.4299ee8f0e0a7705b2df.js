webpackJsonp([1],{"//9l":function(e,t){},"/BVp":function(e,t){},"29an":function(e,t){},BXrJ:function(e,t){},BZDd:function(e,t){},NHnr:function(e,t,s){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var a=s("7+uW"),r={render:function(){var e=this.$createElement,t=this._self._c||e;return t("div",{attrs:{id:"app"}},[t("router-view")],1)},staticRenderFns:[]};var n=s("VU/8")({name:"App"},r,!1,function(e){s("hc2Z")},null,null).exports,i=s("/ocq"),o=s("kxiW"),u=s.n(o),c={name:"Login",data:function(){return{email:"",password:""}},methods:{login:function(){var e=this;u.a.auth().signInWithEmailAndPassword(this.email,this.password).then(function(t){u.a.firestore().collection("users").doc(t.user.uid).update({lastLogin:Date.now()}),e.$router.replace("home")},function(e){alert("Oops: "+e.message)})}}},l={render:function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{attrs:{id:"login"}},[s("h3",[e._v("Sign In")]),e._v(" "),s("input",{directives:[{name:"model",rawName:"v-model",value:e.email,expression:"email"}],attrs:{type:"text",placeholder:"email"},domProps:{value:e.email},on:{input:function(t){t.target.composing||(e.email=t.target.value)}}}),s("br"),e._v(" "),s("input",{directives:[{name:"model",rawName:"v-model",value:e.password,expression:"password"}],attrs:{type:"password",placeholder:"password"},domProps:{value:e.password},on:{input:function(t){t.target.composing||(e.password=t.target.value)}}}),s("br"),e._v(" "),s("button",{on:{click:e.login}},[e._v("Sign In")]),e._v(" "),s("p",[e._v("No account? Create "),s("router-link",{attrs:{to:"/sign-up"}},[e._v("one")]),e._v("!")],1)])},staticRenderFns:[]};var d=s("VU/8")(c,l,!1,function(e){s("bVOm")},"data-v-bd8e7e02",null).exports,m={name:"SignUp",data:function(){return{email:"",password:"",username:""}},methods:{signUp:function(){var e=this;u.a.auth().createUserWithEmailAndPassword(this.email,this.password).then(function(t){u.a.firestore().collection("users").doc(t.user.uid).set({lastLogin:Date.now(),email:e.email,username:e.username,userid:t.user.uid}),e.$router.replace("home")},function(e){alert("Oops: "+e.message)})}}},h={render:function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{attrs:{id:"login"}},[s("h3",[e._v("Sign Up")]),e._v(" "),s("input",{directives:[{name:"model",rawName:"v-model",value:e.email,expression:"email"}],attrs:{type:"text",placeholder:"email"},domProps:{value:e.email},on:{input:function(t){t.target.composing||(e.email=t.target.value)}}}),s("br"),e._v(" "),s("input",{directives:[{name:"model",rawName:"v-model",value:e.password,expression:"password"}],attrs:{type:"password",placeholder:"password"},domProps:{value:e.password},on:{input:function(t){t.target.composing||(e.password=t.target.value)}}}),s("br"),e._v(" "),s("input",{directives:[{name:"model",rawName:"v-model",value:e.username,expression:"username"}],attrs:{placeholder:"username",type:"text"},domProps:{value:e.username},on:{input:function(t){t.target.composing||(e.username=t.target.value)}}}),s("br"),e._v(" "),s("button",{on:{click:e.signUp}},[e._v("Sign Up")]),e._v(" "),s("p",[e._v("Already have an account? Click "),s("router-link",{attrs:{to:"/login"}},[e._v("here")]),e._v(" to login.")],1)])},staticRenderFns:[]};var p=s("VU/8")(m,h,!1,function(e){s("bauk")},"data-v-8ad83664",null).exports,v=s("Sfn0"),f={name:"Message",props:["name","message","id","uid","icon","image"],data:function(){return{auth:u.a.auth(),link:""}},mounted:function(){this.checkUrl(this.message)},methods:{checkUrl:function(e){var t=new RegExp("(^|[ \t\r\n])((ftp|http|https|gopher|mailto|news|nntp|telnet|wais|file|prospero|aim|webcal):(([A-Za-z0-9$_.+!*(),;/?:@&~=-])|%[A-Fa-f0-9]{2}){2,}(#([a-zA-Z0-9][a-zA-Z0-9$_.+!*(),;/?:@&~=%-]*))?([A-Za-z0-9$_+!*();/?:~-]))","g"),s=e.match(t);null!=s&&s.length>0&&(this.link=s[0].trim())}},components:{LinkPrevue:s.n(v).a}},g={render:function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{key:e.id,staticClass:"message",attrs:{id:e.id}},[e.auth.currentUser.uid===e.uid?s("div",{staticClass:"message-container mine"},["thumbs-up"!=e.icon?s("div",{staticClass:"message-text"},[s("span",[e._v(e._s(e.message))]),e._v(" "),""!=e.link?s("link-prevue",{attrs:{url:e.link},scopedSlots:e._u([{key:"default",fn:function(t){return[s("a",{attrs:{href:t.url}},[s("div",{staticClass:"unfurl"},[s("div",{staticClass:"unfurl-img"},[s("img",{attrs:{src:t.img,alt:t.title}})]),e._v(" "),s("div",{staticClass:"unfurl-block"},[s("h4",{staticClass:"unfurl-title"},[e._v(e._s(t.title))])])])])]}}],null,!1,3535046213)},[s("template",{slot:"loading"},[s("div",{staticClass:"unfurl"},[s("div",{staticClass:"unfurl-block"},[s("p",[e._v("Loading...")])])])])],2):e._e()],1):s("div",{staticClass:"thumbs-up",domProps:{innerHTML:e._s(e.message)}})]):s("div",{staticClass:"message-container theirs"},[s("div",{staticClass:"image"},[null!=e.image&&""!=e.image&&void 0!=e.image?s("img",{attrs:{src:e.image,alt:e.uid}}):e._e()]),e._v(" "),"thumbs-up"!=e.icon?s("div",{staticClass:"message-text"},[s("span",[e._v(e._s(e.message))]),e._v(" "),""!=e.link?s("link-prevue",{attrs:{url:e.link},scopedSlots:e._u([{key:"default",fn:function(t){return[s("a",{attrs:{href:t.url}},[s("div",{staticClass:"unfurl"},[s("div",{staticClass:"unfurl-img"},[s("img",{attrs:{src:t.img,alt:t.title}})]),e._v(" "),s("div",{staticClass:"unfurl-block"},[s("h4",{staticClass:"unfurl-title"},[e._v(e._s(t.title))])])])])]}}],null,!1,3535046213)},[s("template",{slot:"loading"},[s("div",{staticClass:"unfurl"},[s("div",{staticClass:"unfurl-block"},[s("p",[e._v("Loading...")])])])])],2):e._e()],1):s("div",{staticClass:"thumbs-up",domProps:{innerHTML:e._s(e.message)}})])])},staticRenderFns:[]};var _={name:"Messages",props:["authUserId","selectedUser"],data:function(){return{messages:[],db:u.a.firestore()}},computed:{sortedItems:function(){return this.messages.sort(function(e,t){return e.date-t.date}),this.messages}},watch:{"$route.params.id":function(e){"/home"!=this.$route.path&&this.getAllMessages()}},mounted:function(){"/home"!=this.$route.path&&this.getAllMessages()},methods:{getAllMessages:function(){var e=this;this.db.collection("chatrooms").doc(this.$route.params.id).collection("messages").orderBy("date","desc").limit(100).onSnapshot(function(t){e.messages=[],t.forEach(function(t){e.messages.push(t.data())})})}},components:{Message:s("VU/8")(f,g,!1,function(e){s("/BVp")},"data-v-721d0497",null).exports}},U={render:function(){var e=this.$createElement,t=this._self._c||e;return t("div",{staticClass:"current-room"},[0!=this.messages.length?t("div",this._l(this.sortedItems,function(e,s){return t("Message",{key:e.date,attrs:{uid:e.userid,icon:e.icon,image:e.image,name:e.name,message:e.message,date:e.date,id:e.date}})}),1):t("div",[t("p",[this._v("Be the first to send a message!")])])])},staticRenderFns:[]};var C=s("VU/8")(_,U,!1,function(e){s("BXrJ")},null,null).exports,b=s("upj4"),k={name:"SendMessage",props:["currentUserName","authUserId","selectedUser","currentChatroom","userImage"],data:function(){return{message:"",db:u.a.firestore(),interval:!1,count:0,search:""}},methods:{limitMessage:function(){return this.message.length>15?this.message.substring(0,25)+"...":this.message},sendMessage:function(){""!=this.message&&(this.db.collection("chatrooms").doc(this.$route.params.id).collection("messages").add({name:this.currentUserName,message:this.message.trim(),userid:this.authUserId,image:this.userImg(),date:u.a.firestore.Timestamp.fromDate(new Date).seconds+"."+u.a.firestore.Timestamp.fromDate(new Date).nanoseconds}).then(function(e){console.log(e.parent.parent.id)}).catch(function(e){console.error("Error adding document: ",e)}),u.a.firestore().collection("users").doc(this.authUserId).update({lastMessage:this.limitMessage()}),this.message="")},sendThumbsUp:function(){var e=this;this.db.collection("chatrooms").doc(this.$route.params.id).collection("messages").add({name:this.currentUserName,message:"<i style='font-size:"+this.determineFontSize()+"px' class='fas fa-thumbs-up'></i>",userid:this.authUserId,icon:"thumbs-up",date:u.a.firestore.Timestamp.fromDate(new Date).seconds+"."+u.a.firestore.Timestamp.fromDate(new Date).nanoseconds}).then(function(t){console.log(t),e.count=0}).catch(function(e){console.error("Error adding document: ",e)}),u.a.firestore().collection("users").doc(this.authUserId).update({lastMessage:this.limitMessage()}),this.message=""},start:function(){var e=this;this.interval||(this.interval=setInterval(function(){return e.count++},10))},stop:function(){clearInterval(this.interval),this.interval=!1},determineFontSize:function(){return this.count<=30?30:this.count>=80?80:this.count},append:function(e){this.message+=e},userImg:function(){return null!=this.userImage?this.userImage:""}},components:{EmojiPicker:s.n(b).a},directives:{focus:{inserted:function(e){e.focus()}}}},w={render:function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{attrs:{id:"sender"}},[s("input",{directives:[{name:"model",rawName:"v-model",value:e.message,expression:"message"}],attrs:{type:"text",placeholder:"Type a message..."},domProps:{value:e.message},on:{keyup:function(t){return!t.type.indexOf("key")&&e._k(t.keyCode,"enter",13,t.key,"Enter")?null:e.sendMessage(t)},input:function(t){t.target.composing||(e.message=t.target.value)}}}),s("br"),e._v(" "),s("i",{staticClass:"fal fa-file-image"}),e._v(" "),s("i",{staticClass:"fal fa-globe"}),e._v(" "),s("emoji-picker",{attrs:{search:e.search},on:{emoji:e.append},scopedSlots:e._u([{key:"emoji-invoker",fn:function(e){var t=e.events.click;return s("div",{staticClass:"emoji-invoker",on:{click:function(e){return e.stopPropagation(),t(e)}}},[s("i",{staticClass:"fal fa-smile"})])}},{key:"emoji-picker",fn:function(t){var a=t.emojis,r=t.insert;return t.display,s("div",{},[s("div",{staticClass:"emoji-picker"},[s("div",{staticClass:"emoji-picker__search"},[s("input",{directives:[{name:"model",rawName:"v-model",value:e.search,expression:"search"},{name:"focus",rawName:"v-focus"}],attrs:{type:"text"},domProps:{value:e.search},on:{input:function(t){t.target.composing||(e.search=t.target.value)}}})]),e._v(" "),s("div",e._l(a,function(t,a){return s("div",{key:a},[s("h5",[e._v(e._s(a))]),e._v(" "),s("div",{staticClass:"emojis"},e._l(t,function(t,a){return s("span",{key:a,attrs:{title:a},on:{click:function(e){return r(t)}}},[e._v("\n                "+e._s(t)+"\n              ")])}),0)])}),0)])])}}])}),e._v(" "),s("i",{staticClass:"fal fa-camera"}),e._v(" "),s("i",{staticClass:"fal fa-thumbs-up",on:{click:e.sendThumbsUp,mousedown:e.start,mouseleave:e.stop,mouseup:e.stop,touchstart:e.start,touchend:e.stop,touchcancel:e.stop}})],1)},staticRenderFns:[]};var y=s("VU/8")(k,w,!1,function(e){s("BZDd")},"data-v-071d99e0",null).exports,M={name:"User",props:["username","userid","lastMessage","image","id","email"],data:function(){return{db:u.a.firestore(),currentUser:u.a.auth().currentUser.uid,userChatroom:"",active:!1}},watch:{"$route.params.id":function(e){this.isActive()}},mounted:function(){this.getUserChatroom()},methods:{reserve:function(){var e=this;if(""==this.userChatroom||this.userChatroom=={}||this.userChatroom==[]){var t=this.roomNameGenerator(),s=[this.userid,u.a.auth().currentUser.uid];if(t){var a=0,r="",n="";s.forEach(function(i){0==a?(r=s[1],n=s[0]):(r=s[0],n=s[1]),e.db.collection("users").doc(r).collection("chatrooms").add({roomname:t,user:n}),a++}),this.db.collection("chatrooms").doc(t).collection("metadata").add({created:Date.now()}).then(function(t){console.log(t),e.$router.push("/"+e.userChatroom)})}}else this.$router.push("/"+this.userChatroom)},roomNameGenerator:function(){for(var e="",t="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",s=t.length,a=0;a<12;a++)e+=t.charAt(Math.floor(Math.random()*s));return e},getUserChatroom:function(){var e=this;this.db.collection("users").doc(this.userid).collection("chatrooms").onSnapshot(function(t){e.userChatroom=[],t.forEach(function(t){e.currentUser==t.data().user&&(e.userChatroom=t.data().roomname)}),e.isActive()})},isActive:function(){this.userChatroom==this.$route.params.id?this.active=!0:this.active=!1}}},x={render:function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{staticClass:"user",class:{active:e.active},on:{click:e.reserve}},[s("div",{staticClass:"image"},[s("img",{attrs:{src:e.image,alt:""}})]),e._v(" "),s("div",{staticClass:"info"},[s("h2",[e._v(e._s(e.username))]),e._v(" "),s("p",[e._v(e._s(e.email))])])])},staticRenderFns:[]};var I={name:"UserList",props:["authUser"],data:function(){return{db:u.a.firestore(),users:[],userChatrooms:[]}},mounted:function(){this.getAllUsers()},methods:{getAllUsers:function(){var e=this;this.db.collection("users").orderBy("username").onSnapshot(function(t){e.users=[],t.forEach(function(t){e.users.push(t.data())})})}},components:{User:s("VU/8")(M,x,!1,function(e){s("29an")},"data-v-2babbbcd",null).exports}},$={render:function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",e._l(e.users,function(t,a){return t.userid!==e.authUser.currentUser.uid?s("User",{key:t.userid,attrs:{username:t.username,email:t.email,userid:t.userid,image:t.image,lastMessage:t.lastMessage,id:a}}):e._e()}),1)},staticRenderFns:[]};var A={name:"HelloWorld",data:function(){return{msg:"Welcome to Your Vue.js App",db:u.a.firestore(),auth:u.a.auth(),selectedUser:"u7xIippDkcS6QgMdLr9PJ8MiyO63",data:[],info:!1,currentRoom:this.$route.params.id,currentUser:{email:"",lastLogin:"",userid:"",username:""}}},mounted:function(){this.getUserData()},methods:{logout:function(){var e=this;this.auth.signOut().then(function(){e.$router.replace("login")})},getUserData:function(){var e=this;this.db.collection("users").where("userid","==",this.auth.currentUser.uid).get().then(function(t){t.forEach(function(t){e.currentUser=t.data(),console.log(t.data())})})},showInfo:function(){0==this.info?this.info=!0:this.info=!1}},components:{Messages:C,SendMessage:y,UserList:s("VU/8")(I,$,!1,function(e){s("stU7")},"data-v-0a64ff8a",null).exports}},S={render:function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{staticClass:"container"},[s("aside",[e._m(0),e._v(" "),s("UserList",{attrs:{authUser:e.auth}})],1),e._v(" "),s("div",{attrs:{id:"messageContainer"}},[s("div",{staticClass:"container"},[s("div",{attrs:{id:"messageOptions"}},[s("span",[e._v(e._s(e.currentUser.username)),s("br"),s("span",{staticClass:"light"},[e._v(e._s(e.currentUser.email))])]),e._v(" "),s("button",{on:{click:e.logout}},[e._v("Logout")]),e._v(" "),s("i",{staticClass:"fal fa-info-circle",on:{click:e.showInfo}})]),e._v(" "),s("div",{attrs:{id:"allMessages"}},[s("div",{directives:[{name:"chat-scroll",rawName:"v-chat-scroll",value:{always:!0,smooth:!0,scrollonremoved:!0},expression:"{always: true, smooth: true, scrollonremoved:true}"}],attrs:{id:"messageSend"}},[s("Messages",{attrs:{selectedUser:e.selectedUser,authUserId:e.auth.currentUser.uid,currentChatroom:e.currentRoom}})],1),e._v(" "),1==e.info?s("div",{attrs:{id:"userInfo"}},[s("h2",[e._v("User Info")])]):e._e()]),e._v(" "),s("SendMessage",{attrs:{currentChatroom:e.currentRoom,userImage:e.currentUser.image,selectedUser:e.selectedUser,currentUserName:e.currentUser.username,authUserId:e.auth.currentUser.uid}})],1)])])},staticRenderFns:[function(){var e=this.$createElement,t=this._self._c||e;return t("div",{attrs:{id:"UserOptions"}},[t("i",{staticClass:"fal fa-cog"}),this._v(" "),t("span",[this._v("Messenger")]),this._v(" "),t("i",{staticClass:"fal fa-edit"})])}]};var E=s("VU/8")(A,S,!1,function(e){s("//9l")},"data-v-59af8872",null).exports;a.a.use(i.a);var N=new i.a({routes:[{path:"*",redirect:"/login"},{path:"/",redirect:"/login"},{path:"/login",name:"Login",component:d},{path:"/sign-up",name:"SignUp",component:p},{path:"/home",name:"Home",component:E,meta:{requiresAuth:!0}},{path:"/:id",name:"MessageView",component:E,meta:{requiresAuth:!0}}]});N.beforeEach(function(e,t,s){var a=u.a.auth().currentUser,r=e.matched.some(function(e){return e.meta.requiresAuth});r&&!a?s("login"):!r&&a?s("home"):s()});var D=N,L=s("bNL2"),P=s.n(L);s("WC7W");a.a.use(P.a),a.a.config.productionTip=!1;var R="";u.a.initializeApp({apiKey:"AIzaSyChB7vvd4AXSdhRD4S_Ln7RxcGBE2rNSqM",authDomain:"chatroom-c9921.firebaseapp.com",databaseURL:"https://chatroom-c9921.firebaseio.com",projectId:"chatroom-c9921",storageBucket:"chatroom-c9921.appspot.com",messagingSenderId:"398787365800",appId:"1:398787365800:web:856598ece22a1df4"}),u.a.auth().onAuthStateChanged(function(){R||(R=new a.a({router:D,render:function(e){return e(n)}}).$mount("#app"))})},WC7W:function(e,t){},bVOm:function(e,t){},bauk:function(e,t){},hc2Z:function(e,t){},stU7:function(e,t){}},["NHnr"]);
//# sourceMappingURL=app.4299ee8f0e0a7705b2df.js.map