<template>
  <main class="chat scroll">
    <ul class="messages">
      <li class="message-container" v-for="message in props.messages" :key="message.id">
        <div class="message my-message" v-if="message.user.email == user.email">
          <div class="header">
            <strong>
              {{ message.user.name }}
            </strong>
            <small class="date">
              {{ 
              message.created_at ?
              new Intl.DateTimeFormat(undefined, {
                year: "numeric",
                month: "numeric",
                day: "numeric",
                hour: "numeric",
                minute: "numeric",
                second: "numeric",
                hour12: false,
              }).format(new Date(message.created_at)) :
              new Intl.DateTimeFormat(undefined, {
                year: "numeric",
                month: "numeric",
                day: "numeric",
                hour: "numeric",
                minute: "numeric",
                second: "numeric",
                hour12: false,
              }).format(new Date())
             }}
            </small>
          </div>
          <p>
            {{ message.message }}
          </p>
        </div>
        <div class="message other-message" v-else>
          <div class="header">
            <strong>
              {{ message.user.name }}
            </strong>
            <small class="date">
              {{ 
              message.created_at ?
              new Intl.DateTimeFormat(undefined, {
                year: "numeric",
                month: "numeric",
                day: "numeric",
                hour: "numeric",
                minute: "numeric",
                second: "numeric",
                hour12: false,
              }).format(new Date(message.created_at)) :
              new Intl.DateTimeFormat(undefined, {
                year: "numeric",
                month: "numeric",
                day: "numeric",
                hour: "numeric",
                minute: "numeric",
                second: "numeric",
                hour12: false,
              }).format(new Date())
             }}
            </small>
          </div>
          <p>
            {{ message.message }}
          </p>
        </div>
      </li>
    </ul>
  </main>
  
</template>
<script setup>
import { onUpdated } from 'vue';


  const props = defineProps({
    messages: Array,
    user: Object,
  });

  onUpdated(() => {
    let lastMessage = document.querySelector('.messages').lastElementChild;
    scrollBottom(lastMessage);
  })

  function scrollBottom(lastMessage){
    lastMessage?.scrollIntoView({
      behavior: 'smooth',
    });
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

.message{
  background-color: rgba(84, 116, 106, 0.467);
  border-radius: 10px;
  padding: 2px 10px;
  width: fit-content;
}

.message p{
  margin-bottom: 0;
}

.message .header{
  display: flex;
  justify-content: space-between;
  gap: 5px;
  font-size: small;
}

.message .date{
  font-size: xx-small;
}

.my-message{
  background-color: rgba(15, 129, 30, 0.57);
  float: right;
  text-align: end;
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
