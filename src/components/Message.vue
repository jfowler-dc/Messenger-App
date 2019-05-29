<template>
  <div class="message" :key="id" :id="id">

    <div v-if="auth.currentUser.uid === uid" class="message-container mine">
      <div v-if="icon != 'thumbs-up'" class="message-text">
        <span>{{message}}</span>
      </div>
      <div v-else v-html="message" class="thumbs-up"></div>
    </div>

    <div v-else class="message-container theirs">
      <div class="image">
        <img v-if="image != null && image != '' && image != undefined" :src="image" :alt="uid">
      </div>
      <div v-if="icon != 'thumbs-up'" class="message-text">
        <span>{{message}}</span>
      </div>
      <div v-else v-html="message" class="thumbs-up">
        
      </div>
    </div>

  </div>
</template>

<script>

import firebase from 'firebase'

export default {
  name: 'Message',
  props: ['name', 'message', 'id', 'uid', 'icon', 'image'],
  data () {
    return {
      auth: firebase.auth()
    }
  },
  methods: {
  	
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .message {
    margin-bottom:3px;
    display:flex;
  }
  .message:last-child {
    padding-bottom:10px;
  }
  .mine {
    margin-left:auto;
  }
  .mine .message-text {
    background:#0084ff;
    color:#fff;
  }

  .theirs .message-text {
    background:#f1f0f0;
  }

  .message-container {
    max-width:70%;
    display:flex;
  }
  .message-text {
    border-radius:20px;
    padding:5px 12px;
    box-sizing:border-box;
  }
  .thumbs-up {
    margin-top:8px;
    color:#0084ff;
  }
  .image {
    min-width:28px;
    max-width:28px;
    min-height:28px;
    max-height:28px;
    border-radius:28px;
    background:#0084ff;
    margin-right:8px;
    margin-top:auto;
    overflow:hidden;
  }
  .image img {
    width:100%;
  }

</style>