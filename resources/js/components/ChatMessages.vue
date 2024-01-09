<template>
  <main class="chat scroll">
    <ul class="messages">
      <li class="message-container" v-for="message in props.messages" :key="message.id">
        <chat-message :message="message" :user="user"></chat-message>
      </li>
    </ul>
  </main>
  
</template>
<script setup>
import { onUpdated } from 'vue';


  const props = defineProps({
    messages: Array,
    user: Object,
    created_at: Date,
  });

  onUpdated(() => {
    let chatContainer = document.querySelector('.chat');
    scrollBottom(chatContainer);
  })

  function scrollBottom(container){
    container.scrollTop = container.scrollHeight;
  }
  

</script>
<style scoped>

.chat{
  max-height: 50vh;
  overflow-y: scroll;
  background-color: #DDD;
  padding: 0 10px;
}

ul.messages{
  display: flex;
  flex-direction: column;
  gap: 10px;
  list-style: none;
  padding-left: 0;
}

/*Aside scrollbar*/
.scroll::-webkit-scrollbar {
  width: 5px;
  height: 20px;
}

/* Track */
.scroll::-webkit-scrollbar-track {
  box-shadow: inset 0 0 5px grey; 
  border-radius: 5px 0;
}
 
/* Handle */
.scroll::-webkit-scrollbar-thumb {
  background-color: rgba(15, 129, 30, 0.8);
  box-shadow: inset 0 0 2px #DDD;
  border-radius: 5px;
}

/* Handle on hover */
.scroll::-webkit-scrollbar-thumb:hover {
  background-color: rgba(15, 129, 30, 1);
  box-shadow: inset 0 0 2px #DDD;
}
</style>
