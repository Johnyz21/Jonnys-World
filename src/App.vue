<template>
  <div id="app">
    <div id="nav">
      <MenuItems :item="item"></MenuItems>
    </div>
    <router-view/>
  </div>
</template>

<script>

import MenuItems from '@/components/MenuItems.vue'

export default {
  name: 'Menu',
  components: {
    MenuItems
  },
  data () {
    return {
      item: {
        name: 'Menu',
        to: '',
        children: [
          {
            name: 'Home',
            to: '/'
          },
          {
            name: 'Statistics',
            to: '/statistics',
            children: [
              {
                name: 'Mean',
                to: '/statistics/mean'
              }, {
                name: 'Sampling',
                to: '/statistics/sampling'
              }
            ]
          },
          {
            name: 'Data Science',
            to: '/dataScience'
          },
          {
            name: 'Data Engineering',
            to: '/dataEngineering'
          }
        ]
      }
    }
  }
}
</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
