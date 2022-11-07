<template>
  <div class="dialog-body">
    <button @click="modalOpen = true">打开弹窗</button>
    <teleport to="body">
      <div v-if="modalOpen" class="modal" @click="modalOpen = false">
        <div >
          I'm a teleported modal!
          (My parent is "body")
<!--          <button>-->
<!--            Close-->
<!--          </button>-->
        </div>
      </div>
    </teleport>
  </div>
</template>

<script>
export default {
  name: "dialog",
  data() {
    return {
      modalOpen: false
    }
  }
}
</script>

<style scoped>
.modal {
  position: absolute;
  left: 0;
  top: 0;
  width: 100vw;
  height: 100vh;
  background-color: rgba(0, 0, 0, .85);
  text-align: center;
  display: flex;
  align-items: center;
  justify-content: center;
  color: aliceblue;
}
</style>