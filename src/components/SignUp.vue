<template>
    <div id="login">
        <h3>Sign Up</h3>
        <input v-model="email" type="text" placeholder="email"><br>
        <input v-model="password" type="password" placeholder="password"><br>
        <input v-model="username" placeholder="username" type="text"><br>
        <button @click="signUp">Sign Up</button>
        <p>Already have an account? Click <router-link to="/login">here</router-link> to login.</p>
    </div>
</template>

<script>

import firebase from 'firebase'

export default {
name: 'SignUp',
    data () {
        return {
            email: '',
            password: '',
            username: ''
        }
    },
    methods: {
        signUp() {
            firebase.auth().createUserWithEmailAndPassword(this.email, this.password).then(
                (user) => {
                    firebase.firestore().collection("users").doc(user.user.uid).set({
                        lastLogin: Date.now(),
                        email: this.email,
                        username: this.username,
                        userid: user.user.uid
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