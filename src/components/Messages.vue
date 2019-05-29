<template>
	<div class="current-room">
		<div v-if="messages.length != 0">
			<Message v-for="(item, index) in sortedItems" :uid="item.userid" :icon="item.icon" :image="item.image" :name="item.name" :message="item.message" :key="index" :id="index" />
		</div>
		<div v-else>
			<p>Be the first to send a message!</p>
		</div>
	</div>
</template>

<script>
import firebase from 'firebase'
import Message from '@/components/Message'


export default {
  name: 'Messages',
  props: ['authUserId', 'selectedUser'],
  data() {
  	return {
  		messages: [],
  		db: firebase.firestore(),
  	}
  },
  computed: {
  	sortedItems() {
        this.messages.sort( (a, b) => {
            return new Date(a.date) - new Date(b.date)
        });
        return this.messages
    }
  },
  watch: {
  	'$route.params.id': function (id) {
      if (this.$route.path != '/home') {
        this.getAllMessages()
      }
    }
  },
  mounted() {
    if (this.$route.path != '/home') {
      this.getAllMessages()
    }
  },
  methods: {
  	getAllMessages() {
    	this.db.collection("chatrooms").doc(this.$route.params.id).collection("messages").orderBy("date", "desc").limit(100).onSnapshot(snapshot => {
	        this.messages = []
	        snapshot.forEach((doc) => {
	            this.messages.push(doc.data())
	        });
	    }); 
    },
  },
  components: {
  	Message
  }
}
</script>

<style>
	.current-room {width:100%;}
</style>
