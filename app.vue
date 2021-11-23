<script setup>
import { reactive } from "vue";

const data = reactive({ name: 'hestedyr' })


const changeName = () => {
  $fetch('https://randomuser.me/api/')
    .then(res => {
      console.log(res)
      data.name = res.results[0].name.first;
    })
}
</script>


<template>
  <div>
    <div>
      <h1>Hello {{ data.name }}</h1>
      <button @click="changeName">Change Name</button>
    </div>
  </div>
</template>
