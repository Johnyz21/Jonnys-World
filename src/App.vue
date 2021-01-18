<template>
  <div id="app">
    <div class="container-fluid">
      <div class="row sticky-top">
        <Burger></Burger>
      </div>
      <div class="row">
          <Sidebar>
            <div v-for="(link,id) in links"
                 :key="id"
                 :links="link">
              <MenuItems :link="link"></MenuItems>
            </div>
          </Sidebar>
        <router-view class="col"/>
      </div>
    </div>
  </div>
</template>

<script>

import MenuItems from '@/components/Menu/MenuItems.vue'
import Burger from '@/components/Menu/Burger.vue'
import Sidebar from '@/components/Menu/Sidebar.vue'

export default {
  name: 'Menu',
  components: {
    MenuItems,
    Burger,
    Sidebar
  },
  data () {
    return {
      links: [
        {
          id: 1,
          title: 'Home',
          to: '/'
        },
        {
          id: 2,
          title: 'Statistics',
          children: [
            {
              id: 2.1,
              title: 'Mean',
              to: '/statistics/mean'
            },
            {
              id: 2.2,
              title: 'Median',
              to: '/statistics/median'
            },
            {
              id: 2.3,
              title: 'Deviations',
              to: '/statistics/deviations'
            },
            {
              id: 2.4,
              title: 'Sampling',
              to: '/statistics/sampling'
            }
          ]
        },
        {
          id: 3,
          title: 'Data Science',
          children: [
            {
              id: 3.1,
              title: 'Linear Regression',
              to: '/data-science/linear-regression'
            }
          ]
        },
        {
          id: 4,
          title: 'Data Engineering',
          to: '/dataEngineering'
        },
        {
          id: 5,
          title: 'Sound',
          to: '/sound'
        },
        {
          id: 6,
          title: 'Journeys',
          children: [
            {
              id: 6.1,
              title: 'Statistics',
              to: '/journeys/statistics'
            },
            {
              id: 6.2,
              title: 'Data Science',
              to: '/journeys/data-science'
            }
          ]
        }
      ]
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

</style>
