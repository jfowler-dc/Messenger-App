<template>
  <div id="sender">
  	
    <input v-model="message" type="text" placeholder="Type a message..." v-on:keyup.enter="sendMessage"><br>
    
    <i class="fal fa-file-image"></i>
    
    <i class="fal fa-globe"></i>

    <emoji-picker @emoji="append" :search="search">
      <div class="emoji-invoker" slot="emoji-invoker" slot-scope="{ events: { click: clickEvent } }" @click.stop="clickEvent">
        <i class="fal fa-smile"></i>
      </div>
      <div slot="emoji-picker" slot-scope="{ emojis, insert, display }">
        <div class="emoji-picker">
          <div class="emoji-picker__search">
            <input type="text" v-model="search" v-focus>
          </div>
          <div>
            <div v-for="(emojiGroup, category) in emojis" :key="category">
              <h5>{{ category }}</h5>
              <div class="emojis">
                <span v-for="(emoji, emojiName) in emojiGroup" :key="emojiName" @click="insert(emoji)" :title="emojiName">
                  {{ emoji }}
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </emoji-picker>

    <i class="fal fa-camera"></i>

    <i @click="sendThumbsUp" @mousedown="start" @mouseleave="stop" @mouseup="stop" @touchstart="start" @touchend="stop" @touchcancel="stop" class="fal fa-thumbs-up"></i>

  </div>
</template>

<script>

import firebase from 'firebase'
import EmojiPicker from 'vue-emoji-picker'


export default {
  name: 'SendMessage',
  props: ['currentUserName', 'authUserId', 'selectedUser', 'currentChatroom', 'userImage'],
  data () {
    return {
      message: '',
      db: firebase.firestore(),
      interval: false,
      count: 0,
      search: '',
    }
  },
  methods: {
    limitMessage() {
      var trimmedString;
      if (this.message.length > 15) {
        trimmedString = this.message.substring(0, 25) + '...'
      } else {
        trimmedString = this.message;
      }
      return trimmedString;
    },
  	sendMessage() {
      if (this.message != '') {
        this.db.collection("chatrooms")
          .doc(this.$route.params.id)
          .collection("messages")
          .add({
            name: this.currentUserName,
            message: this.message.trim(),
            userid: this.authUserId,
            image: this.userImg(),
            date: Date.now()
          })
          .then((docRef) => {
            console.log(docRef.parent.parent.id)
          })
          .catch((error) => {
            console.error("Error adding document: ", error)
          });
        firebase.firestore().collection("users").doc(this.authUserId).update({
          lastMessage: this.limitMessage()
        })
        this.message = ''
      }
    },
    sendThumbsUp() {
      this.db.collection("chatrooms")
        .doc(this.$route.params.id)
        .collection("messages")
        .add({
          name: this.currentUserName,
          message: "<i style='font-size:"+this.determineFontSize()+"px' class='fas fa-thumbs-up'></i>",
          userid: this.authUserId,
          icon: 'thumbs-up',
          date: Date.now()
        })
        .then((docRef) => {
          console.log(docRef.parent.parent.id)
          this.count = 0
        })
        .catch((error) => {
          console.error("Error adding document: ", error)
        });
      firebase.firestore().collection("users").doc(this.authUserId).update({
        lastMessage: this.limitMessage()
      })
      this.message = ''
    },
    start() {
      if (!this.interval) {
        this.interval = setInterval(() => this.count++, 10) 
      }
    },
    stop() {
      clearInterval(this.interval)
      this.interval = false
    },
    determineFontSize() {
      if (this.count <= 30) {
        return 30
      }else if (this.count >= 80) {
        return 80
      } else {
        return this.count
        this.sendThumbsUp()
      }
    },
    append(emoji) {
      this.message += emoji
    },
    userImg() {
      if (this.userImage != null) {
        return this.userImage
      } else {
        return ''
      }
    }
  },
  components: {
    EmojiPicker
  },
  directives: {
    focus: {
      inserted(el) {
        el.focus()
      },
    },
  },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  #sender {
    width:100%;
    border-top:1px solid rgba(0, 0, 0, .10);
    display:flex;
    align-items:center;
    height:50px;
    box-sizing:border-box;
    padding:0 12px;
  }
  #sender input {
    border:0;
    width:100%;
    height:40px;
    font-size:14px;
  }
  #sender i {
    color:rgba(153, 153, 153, 1);
    font-size:20px;
    margin-left:12px;
    display:flex;
  }
  #sender i.fa-thumbs-up {
    color:#0084ff;
  }
  *:focus {
    outline: none;
  }

  /* Emoji Styles */
  .emoji-picker {
    position: absolute;
    z-index: 1;
    font-family: Montserrat;
    border: 1px solid #ccc;
    width: 15rem;
    height: 20rem;
    overflow: scroll;
    padding: 1rem;
    box-sizing: border-box;
    border-radius: 0.5rem;
    background: #fff;
    box-shadow: 1px 1px 8px #c7dbe6;
    bottom:50px;
    right:10px;
  }
  .emoji-picker__search {
    display: flex;
  }
  .emoji-picker__search > input {
    flex: 1;
    border-radius: 20px;
    border: 1px solid rgba(0, 0, 0, .10) !important;
    box-sizing:border-box;
    padding:0 12px;
    outline: none;
  }
  .emoji-picker h5 {
    margin-bottom: 0;
    color: #b1b1b1;
    text-transform: uppercase;
    font-size: 0.8rem;
    cursor: default;
  }
  .emoji-picker .emojis {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
  }
  .emoji-picker .emojis:after {
    content: "";
    flex: auto;
  }
  .emoji-picker .emojis span {
    padding: 0.2rem;
    cursor: pointer;
    border-radius: 5px;
  }
  .emoji-picker .emojis span:hover {
    background: #ececec;
    cursor: pointer;
  }

</style>