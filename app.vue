<script setup>
// import { reactive } from "vue";

// const data = reactive({ name: 'hestedyr' })


// const changeName = () => {
//   $fetch('https://randomuser.me/api/')
//     .then(res => {
//       console.log(res)
//       data.name = res.results[0].name.first;
//     })
// }

const { data } = await useFetch(`https://randomuser.me/api/`);

</script>


<template>
  <div>
    <div>
      <h1>Hello {{ data.results[0].name.first }}</h1>
      <button>Change Name</button>
    </div>
  </div>
</template>
