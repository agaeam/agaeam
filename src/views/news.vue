
<template>
  <div>
    <ul>
      <li>dzq邓紫棋</li>
      <li>dzq邓紫棋</li>
      <li>dzq邓紫棋</li>
      <li>dzq邓紫棋</li>
    </ul>
    <el-button>默认按钮</el-button>
    <el-button type="primary">主要按钮</el-button>
    <el-button type="success">成功按钮</el-button>
    <el-button type="info" @click="get">信息按钮</el-button>
    <el-button type="warning">警告按钮</el-button>
    <el-button type="danger">危险按钮</el-button>
    <div>{{$store.state.data}}</div>
    <el-switch
      v-model="value"
      active-color="#13ce66"
      active-text="按月付费"
      @change="say"
      inactive-color="#ff4949"
    ></el-switch>
  </div>
</template>

<script>
export default {
  name: 'news',
  data() {
    return {
      value: 200
    }
  },
  methods: {
    say() {
      console.log('777')
    },
    get() {
      this.$store.dispatch('getdata')
    }
  }
}
</script>
<style>
</style>