<template>
  <div class="input-group">
    <input
      id="btn-input"
      type="text"
      name="message"
      class="form-control input-sm"
      placeholder="Type your message here..."
      v-model="newMessage"
      @keyup.enter="sendMessage"
    />
    <span class="input-group-btn">
      <button class="btn btn-send btn-sm" id="btn-chat" @click="sendMessage">
        Send
      </button>
    </span>
  </div>
</template>
<script setup>
import { ref } from 'vue';

  const props = defineProps(["user"]);
  const emit = defineEmits(["messagesent"]);
  const newMessage = ref("");
  function sendMessage() {
    emit("messagesent", {
      user: props.user,
      message: newMessage.value,
      created_at: new Date(),
    });
    newMessage.value = "";
  }
</script>
<style scoped>
.input-group{
  display: flex;
  gap: 5px;
  align-items: center;
}

.btn-send{
  background-color: rgba(15, 129, 30, 0.8);
  color: #FFF;
}

.btn-send:hover{
  background-color: rgba(15, 129, 30, 1);
  color: #FFF;
}

.btn-send:focus{
  background-color: rgba(15, 129, 30, 1);
  border: 3px solid #AAA;
}

.form-control:focus{
  border: 3px solid rgba(15, 129, 30, 0.5);
  box-shadow: none;
}
</style>
