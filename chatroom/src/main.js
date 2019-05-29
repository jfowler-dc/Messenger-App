// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import firebase from 'firebase'
import VueChatScroll from 'vue-chat-scroll'
import 'vue-toast-notification/dist/index.css';


Vue.use(VueChatScroll)

Vue.config.productionTip = false

let app = '';

var firebaseConfig = {
	apiKey: "AIzaSyChB7vvd4AXSdhRD4S_Ln7RxcGBE2rNSqM",
	authDomain: "chatroom-c9921.firebaseapp.com",
	databaseURL: "https://chatroom-c9921.firebaseio.com",
	projectId: "chatroom-c9921",
	storageBucket: "chatroom-c9921.appspot.com",
	messagingSenderId: "398787365800",
	appId: "1:398787365800:web:856598ece22a1df4"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

/* eslint-disable no-new */
firebase.auth().onAuthStateChanged(() => {
	if (!app) {
		app = new Vue({
			router,
			render: h => h(App)
		}).$mount('#app');
	}
})
