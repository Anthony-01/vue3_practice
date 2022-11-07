<template>
  <span>如果传入capitalize修饰符则最后传出的值首字母大写:</span><br/>
  <input type="text" @input="onChange" :value="modelValue">
</template>

<script>
export default {
  name: "modelModify",
  props: {
    modelValue: String,
    modelModifiers: {
      default() {
        return {}
      }
    }
  },
  emits: ["update:modelValue"],
  methods: {
    onChange(e) {
      let value = e.target.value
      if (this.modelModifiers.capitalize) {
        value = value.charAt(0).toUpperCase() + value.slice(1)
      }
      this.$emit("update:modelValue", value)
    }
  }
}
</script>

<style scoped>

</style>