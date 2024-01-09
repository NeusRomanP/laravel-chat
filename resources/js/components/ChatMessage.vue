<template>
  <div class="message my-message" v-if="message.user.email == user?.email">
    <div class="header">
      <strong>
        {{ message.user.name }}
      </strong>
      <small class="date">
        {{
          new Intl.DateTimeFormat(undefined, {
            year: "numeric",
            month: "numeric",
            day: "numeric",
            hour: "numeric",
            minute: "numeric",
            hour12: false,
          }).format(new Date(message.created_at))
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
          new Intl.DateTimeFormat(undefined, {
            year: "numeric",
            month: "numeric",
            day: "numeric",
            hour: "numeric",
            minute: "numeric",
            hour12: false,
          }).format(new Date(message.created_at))
        }}
      </small>
    </div>
    <p>
      {{ message.message }}
    </p>
  </div>
</template>
<script setup>
const props = defineProps(['message', 'user']);
</script>
<style scoped>
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
  gap: 10px;
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
</style>