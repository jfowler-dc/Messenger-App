<template>
  <div id="container">
    <aside>
      <div id="UserOptions">
        <i class="fal fa-cog"></i>
        <span>Messenger</span>
        <i class="fal fa-edit"></i>
      </div>
      <UserList :authUser="auth" />
    </aside>

    <div id="messageContainer">
      <div id="messageOptions">
          <span>{{currentUser.username}}<br><span class="light">{{currentUser.email}}</span></span>
          <button @click="logout">Logout</button>
          <i class="fal fa-info-circle"></i>
      </div>
      <div id="messageSend" v-chat-scroll="{always: true, smooth: true, scrollonremoved:true}">
        <Messages :selectedUser="selectedUser" :authUserId="auth.currentUser.uid" :currentChatroom="currentRoom" />
        <div id="userInfo">
        </div>
      </div>
      <SendMessage :currentChatroom="currentRoom" :userImage="currentUser.image" :selectedUser="selectedUser" :currentUserName="currentUser.username" :authUserId="auth.currentUser.uid" />
    </div>
  </div>
</template>

<script>
import firebase from 'firebase'

import Messages from '@/components/Messages'
import SendMessage from '@/components/SendMessage'
import UserList from '@/components/UserList'


export default {
  name: 'HelloWorld',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App',
      db: firebase.firestore(),
      auth: firebase.auth(),
      selectedUser: 'u7xIippDkcS6QgMdLr9PJ8MiyO63',
      data: [],
      currentRoom: this.$route.params.id,
      currentUser: {
        email: '',
        lastLogin: '',
        userid: '',
        username: ''
      }
    }
  },
  mounted() {
    this.getUserData()
  },
  methods: {
    logout() {
      this.auth.signOut()
        .then(() => {
          this.$router.replace('login')
        })
    },
    getUserData() {
      this.db.collection("users")
        .where('userid', '==', this.auth.currentUser.uid)
        .get()
        .then((querySnapshot) => {
          querySnapshot.forEach( (doc) => {
              this.currentUser = doc.data()
          });
      });
    }
  },
  components: {
    Messages,
    SendMessage,
    UserList
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  #container {
    width:100%;
    max-height:100%;
    display:flex;
    border-color:rgba(0, 0, 0, .10);
    -webkit-box-orient: vertical;
    -webkit-box-direction: normal;
    position: relative;
    -webkit-box-flex: 1;
    -ms-flex-positive: 1;
    flex-grow: 1;
    -ms-flex-negative: 1;
    flex-shrink: 1;
    -ms-flex-preferred-size: auto;
    flex-basis: auto;
  }
  aside {
    min-width:280px; 
    height:100%;
    border-right:1px solid rgba(0, 0, 0, .10);
  }
  #UserOptions {
    width:100%;
    height:50px;
    box-sizing:border-box;
    padding:0 12px;
    display:flex;
    align-items:center;
    border-bottom:1px solid rgba(0, 0, 0, .10);
  }
  #UserOptions span {
    width:100%;
    text-align:center;
    font-weight:700;
    font-size:16px;
  }
  #UserOptions i, #messageOptions i {
    color:#0084ff;
    font-size:20px;
  }
  #messageContainer {
    width:100%;
    max-height:100%;
  }
  #messageOptions {
    width:100%;
    display:flex;
    align-items:center;
    min-height:50px;
    border-bottom:1px solid rgba(0, 0, 0, .10);
    box-sizing:border-box;
    padding:0 12px;
  }
  #messageOptions span {
    font-size:14px;
    font-weight:500;
    text-align:center;
    margin-left:auto;
  }
  #messageOptions span.light {
    color:rgba(153, 153, 153, 1);
    font-size:12px;
  }
  #messageOptions button {
    margin-left:auto;
  }
  #messageOptions i {
    margin-left:12px;
  }
  #messageSend {
    width:100%;
    overflow: scroll;
    min-height:calc(100% - 100px);
    max-height:calc(100% - 100px);
    box-sizing:border-box;
    padding:12px;
  }
  #userInfo {
    width:200px;
    height:100%;
  }
</style>
