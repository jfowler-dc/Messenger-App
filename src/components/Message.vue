<template>
  <div class="message" :key="id" :id="id">

    <div v-if="auth.currentUser.uid === uid" class="message-container mine">
      <div v-if="icon != 'thumbs-up'" class="message-text">
        <span>{{message}}</span>
        <link-prevue v-if="link != ''" :url="link" >
          <template slot="loading">
            <div class="unfurl">
              <div class="unfurl-block">
                <p>Loading...</p>
              </div>
            </div>
          </template>
          <template slot-scope="props">
            <a v-bind:href="props.url">
            <div class="unfurl">
              <div class="unfurl-img" >
                <img :src="props.img" :alt="props.title">
              </div>
              <div class="unfurl-block">
                <h4 class="unfurl-title">{{props.title}}</h4>
                <!-- <p class="unfurl-text">{{props.description}}</p> -->          
              </div>
            </div>
            </a>
          </template>
        </link-prevue>
      </div>
      <div v-else v-html="message" class="thumbs-up"></div>
    </div>

    <div v-else class="message-container theirs">
      <div class="image">
        <img v-if="image != null && image != '' && image != undefined" :src="image" :alt="uid">
      </div>
      <div v-if="icon != 'thumbs-up'" class="message-text">
        <span>{{message}}</span>
        <link-prevue v-if="link != ''" :url="link" >
          <template slot="loading">
            <div class="unfurl">
              <div class="unfurl-block">
                <p>Loading...</p>
              </div>
            </div>
          </template>
          <template slot-scope="props">
            <a v-bind:href="props.url">
            <div class="unfurl">
              <div class="unfurl-img" >
                <img :src="props.img" :alt="props.title">
              </div>
              <div class="unfurl-block">
                <h4 class="unfurl-title">{{props.title}}</h4>
                <!-- <p class="unfurl-text">{{props.description}}</p> -->
              </div>
            </div>
            </a>
          </template>
        </link-prevue>
      </div>
      <div v-else v-html="message" class="thumbs-up">
        
      </div>
    </div>

  </div>
</template>

<script>

import firebase from 'firebase'
import LinkPrevue from 'link-prevue'


export default {
  name: 'Message',
  props: ['name', 'message', 'id', 'uid', 'icon', 'image'],
  data () {
    return {
      auth: firebase.auth(),
      link: ''
    }
  },
  mounted() {
    this.checkUrl(this.message)
  },
  methods: {
  	checkUrl(text) {
      const geturl = new RegExp(
          "(^|[ \t\r\n])((ftp|http|https|gopher|mailto|news|nntp|telnet|wais|file|prospero|aim|webcal):(([A-Za-z0-9$_.+!*(),;/?:@&~=-])|%[A-Fa-f0-9]{2}){2,}(#([a-zA-Z0-9][a-zA-Z0-9$_.+!*(),;/?:@&~=%-]*))?([A-Za-z0-9$_+!*();/?:~-]))"
         ,"g"
       );
      var link = text.match(geturl)
      if (link != null && link.length > 0) {
        this.link = link[0].trim()
      }
    }
  },
  components: {
    LinkPrevue
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .message {
    display:flex;
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
    margin-bottom:3px;
  }
  .message:last-child .message-container {
    margin-bottom:20px;
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

  .message-text img {
    max-height:200px;
  }

  .unfurl {
    width:320px;
    height:250px;
    background:#fff;
    border-radius:10px;
    margin-bottom:5px;
    display:flex;
    align-items:center;
    flex-wrap:wrap;
    flex-direction:column;
    overflow:hidden;
    border:1px solid #fff;
    margin-top:5px;
  }

  .unfurl-img {
    width:100%;
    height:180px;
    display:flex;
    align-items:center;
    justify-content:center;
  }

  .unfurl-img img {
    margin:auto;
    max-height:180px;
  }

  .unfurl-block {
    width:100%;
    background:#f1f0f0;
    flex-grow:1;
    flex:1;
    box-sizing:border-box;
    padding:10px;
    max-height: calc(100% - 100px);
    overflow: hidden;
    align-items:center;
    display:flex;
  }

  .unfurl-title {
    margin:0;
    color:#0084ff;
    text-decoration:none;
  }
  a .unfurl, a .unfurl-title {
    text-decoration:none;
  }

  .unfurl-text {

  }
  .unfurl p {
    color:888;
  }

</style>