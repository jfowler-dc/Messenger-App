<template>
  <div @click="reserve" class="user" :class="{active: active}">
    <div class="image">
      <img :src="image" alt="">
    </div>
    <div class="info">
      <h2>{{username}}</h2>
      <p>{{email}}</p>
    </div>
  </div>
</template>

<script>

import firebase from 'firebase'

export default {
  name: 'User',
  props: ['username', 'userid', 'lastMessage', 'image', 'id', 'email'],
  data () {
    return {
      db: firebase.firestore(),
      currentUser: firebase.auth().currentUser.uid,
      userChatroom: '',
      active: false
    }
  },
  watch: {
    '$route.params.id': function (id) {
      this.isActive()
    }
  },
  mounted(){
    this.getUserChatroom()
  },
  methods: {
    reserve() {
      if (this.userChatroom == '' || this.userChatroom == {} || this.userChatroom == []) {
        let roomName = this.roomNameGenerator();
        let usr = [this.userid, firebase.auth().currentUser.uid]

        if (roomName) {
          var count = 0;
          var docid = '';
          var docuser = '';
          usr.forEach((u) => {
            if (count == 0) {
              docid = usr[1];
              docuser = usr[0]
            } else {
              docid = usr[0];
              docuser = usr[1]
            }
            this.db.collection("users").doc(docid).collection("chatrooms").add({
              roomname: roomName,
              user: docuser
            })
            count++;
          })
        
          this.db.collection("chatrooms").doc(roomName).collection("metadata").add({
            created: Date.now()
          }).then((docRef) => {
            console.log(docRef)
            this.$router.push('/'+this.userChatroom)
          })
        }
      } else {
        this.$router.push('/'+this.userChatroom)
      }
    },
    roomNameGenerator() {
      let result = '';
      let characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
      let charactersLength = characters.length;
      for ( var i = 0; i < 12; i++ ) {
        result += characters.charAt(Math.floor(Math.random() * charactersLength));
      }
      return result;
    },
    getUserChatroom() {
      this.db.collection("users").doc(this.userid).collection("chatrooms").onSnapshot(snapshot => {
          this.userChatroom = []
          snapshot.forEach((doc) => {
            if (this.currentUser == doc.data().user) {
              this.userChatroom = doc.data().roomname
            }
          });
          this.isActive()
      })
    },
    isActive() {
      if (this.userChatroom == this.$route.params.id) {
        this.active = true
      } else {
        this.active = false
      }
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.user {
  display:flex;
  align-items:center;
  box-sizing:border-box;
  padding:5px;
  padding-left:12px;
  cursor:pointer;
}
.user:hover, .user.active {
  background:rgba(0, 0, 0, .05);
}
.image {
  width:50px;
  height:50px;
  border-radius:50px;
  background:#0084ff;
  margin-right:10px;
  overflow:hidden;
}
.image img {
  width:100%;
}

h2 {
  font-size:15px;
  color:rgba(0, 0, 0, 1);
  font-weight:500;
  margin:0;
}
ul {padding:0; margin:0; margin-top:5px;}
p, li {
  font-size:13px;
  color:rgba(153, 153, 153, 1);
  margin:0;
  overflow:hidden;
  text-overflow:ellipsis;
  width:100%;
  max-width:200px;
}
</style>