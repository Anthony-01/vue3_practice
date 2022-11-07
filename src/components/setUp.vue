<template>
 <div @click="count++"> {{count}}</div>
</template>
<script setup>
import {ref} from 'vue'

let count = ref(0)

// export default {
//   name: "setUp"
// }
</script>



<style scoped>

</style>