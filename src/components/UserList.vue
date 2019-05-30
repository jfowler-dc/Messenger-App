<template>
  <div>
    <User v-for="(user, index) in users" v-if="user.userid !== authUser.currentUser.uid" :username="user.username" :email="user.email" :userid="user.userid" :image="user.image" :key="user.userid" :lastMessage="user.lastMessage" :id="index" />
  </div>
</template>

<script>

import firebase from 'firebase'

import User from '@/components/User'

export default {
  name: 'UserList',
  props: ['authUser'],
  data () {
    return {
      db: firebase.firestore(),
      users: [],
      userChatrooms: []
    }
  },
  mounted() {
    this.getAllUsers()
  },
  methods: {
  	getAllUsers() {
      this.db.collection("users").orderBy("username").onSnapshot(snapshot => {
          this.users = []
          snapshot.forEach((doc) => {
              this.users.push(doc.data())
          });
      });
    }
  },
  components: {
    User
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>