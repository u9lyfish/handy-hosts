<template>
  <div id="app">
    <el-container>
      <el-aside width="auto">
        <el-tabs
          v-model="activeTab"
          tab-position="left"
        >
          <el-tab-pane
            v-for="item in routeItems"
            :key="item.name"
            :label="item.meta.icon"
            :name="item.name"
          >
          </el-tab-pane>
        </el-tabs>
      </el-aside>
      <el-main>
        <router-view></router-view>
      </el-main>
    </el-container>
  </div>
</template>

<script>
  import routes from '@/routes'

  export default {
    name: 'handy-hosts',
    data () {
      return {
        activeTab: ''
      }
    },
    computed: {
      routeItems () {
        return routes.filter(route => route.meta)
      }
    },
    watch: {
      activeTab (name) {
        if (name !== this.$route.name) {
          this.$router.push(name)
        }
      },
      '$route': {
        handler (route) {
          this.activeTab = route.name
        },
        immediate: true
      }
    }
  }
</script>

<style>
  html {
    font-family: "Helvetica Neue", Helvetica, "PingFang SC", "Hiragino Sans GB", "Microsoft YaHei", "微软雅黑", Arial, sans-serif;
  }
  html, body, #app, .el-container {
    height: 100%;
  }
</style>
