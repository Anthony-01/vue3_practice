<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <div>
      <span>{{userInfo.userName}}</span>
      <span>{{userInfo.id}}</span>
      <button @click="onClick">Click</button>
    </div>
    <my-dialog></my-dialog>
    <div style="height: 100px">
      <span>{{mtText}}</span>
    </div>
    <modelModify v-model.capitalize="mtText"></modelModify>
    <setUp></setUp>
    <div class="test"></div>
    <button @click="onChangeColor">改变颜色</button>
    <div class="test2"></div>
  </div>
</template>

<script>
import getUserInfo from '../composables/getUserInfo'
import dialog from './dialog'
import modelModify from "./modelModify"
import setUp from "./setUp";

export default {
  name: 'HelloWorld',
  props: {
    msg: String
  },
  components: {
    'my-dialog': dialog,
    modelModify,
    setUp
  },
  data() {
    return {
      id: 1,
      mtText: "",
      backgroundColor: "red",
      testStyle: {
        width: "100px",
        height: "100px",
        backgroundColor: "red"
      }
    }
  },
  setup(props) {
    console.log(props);
    const {userInfo, getUserInfoById} = getUserInfo();

    return {
      userInfo,
      getUserInfoById
    } // 这里返回的任何内容都可以用于组件的其余部分
  },
  methods: {
    onClick() {
      this.getUserInfoById(this.id++);
    },
    onChangeColor() {
      this.backgroundColor = ["red", "green", "yellow", "blue"][Math.floor(Math.random()*4)];
    }
  },
  mounted() {
    this.getUserInfoById(this.id++);
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
.test {
  background-color: v-bind(backgroundColor);
  width: 100px;
  height: 100px;
  margin: auto;
}
/*.test2 {*/
/*  v-bind(testStyle)*/
/*}*/
</style>
