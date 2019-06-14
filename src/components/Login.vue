<template>
  <div id="login">
  	<h3>Sign In</h3>
  	<input v-model="email" type="text" placeholder="email"><br>
  	<input v-model="password" type="password" placeholder="password"><br>
  	<button @click="login">Sign In</button>
  	<p>No account? Create <router-link to="/sign-up">one</router-link>!</p>
  </div>
</template>

<script>

import firebase from 'firebase'

export default {
  name: 'Login',
  data () {
    return {
      email: '',
      password: ''
    }
  },
  methods: {
  	login() {
      firebase.auth().signInWithEmailAndPassword(this.email, this.password).then(
        (user) => {
          firebase.firestore().collection("users").doc(user.user.uid).update({
            lastLogin: Date.now()
          })
          this.$router.replace('home')
        },
        (err) => {
          alert('Oops: ' + err.message)
        }
      )
  	}
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>