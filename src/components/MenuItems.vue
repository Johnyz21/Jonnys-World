<template>
  <li>
    <div class="d-flex align-items-center flex-column">
      <div
        :class="{bold: isParent}">
        <router-link :to="item.to">{{ item.name }}</router-link>
        <span v-if="isParent" @click="toggle"> [{{ isOpen ? '-' : '+' }}]</span>
      </div>
      <ul v-show="isOpen" v-if="isParent">
        <MenuItems
          class="item"
          v-for="(child, index) in item.children"
          :key="index"
          :item="child"
        ></MenuItems>
      </ul>
    </div>
  </li>
</template>

<script>

import MenuItems from '@/components/MenuItems.vue'

export default {
  name: 'MenuItems',
  components: {
    MenuItems
  },
  data: function () {
    return {
      isOpen: false
    }
  },
  props: {
    item: {
      type: Object
    }
  },
  computed: {
    isParent: function () {
      return this.item.children && this.item.children.length
    }
  },
  methods: {
    toggle: function () {
      if (this.isParent) {
        this.isOpen = !this.isOpen
      }
    }
  }
}
</script>

<style scoped lang="scss">
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
</style>
