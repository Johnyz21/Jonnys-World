<template>
  <div>
    <ul class="list-unstyled mb-0 py-0 pt-md-1">
      <li class="mb-1">
        <button class="btn d-inline-flex align-items-center rounded" type="button">
          <div v-if="isParent">
            <span  @click="toggle"> {{link.title}} {{ isOpen ? '&#9660;' : '&#x25b7;' }}</span>
          </div>
          <div v-else>
            <router-link class="nav-link" :to="link.to">{{ link.title }}</router-link>
          </div>
        </button>
        <transition name="slide-fade">
          <ul v-show="isOpen" v-if="isParent">
            <MenuItems
              v-for="(child,id) in link.children"
              :key="id"
              :link="child">
            </MenuItems>
          </ul>
        </transition>
      </li>
    </ul>
  </div>
</template>

<script>
import MenuItems from '@/components/Menu/MenuItems.vue'

export default {
  name: 'MenuItems',
  components: {
    MenuItems
  },
  props: {
    link: {
      type: Object
    }
  },
  data: function () {
    return {
      isOpen: false
    }
  },
  methods: {
    toggle: function () {
      if (this.isParent) {
        this.isOpen = !this.isOpen
      }
    }
  },
  computed: {
    isParent: function () {
      return this.link.children && this.link.children.length
    }
  }
}
</script>

<style scoped>

  .bd-links .btn[aria-expanded="true"]::before {
    transform: rotate(90deg);
  }

  .bd-links .btn::before {
    width: 1.25em;
    line-height: 0;
    content: url('http://www.w3.org/2000/svg');
    transition: transform 0.35s ease;
    transform-origin: .5em 50%;
  }

  .nav-link {
    color: black;
  }
  .btn:focus,.btn:active {
    outline: none !important;
    box-shadow: none;
  }

  .slide-fade-enter-active {
    transition: all .3s ease;
  }
  .slide-fade-leave-active {
    transition: all .3s cubic-bezier(1.0, 0.5, 0.8, 1.0);
  }
  .slide-fade-enter, .slide-fade-leave-to
    /* .slide-fade-leave-active below version 2.1.8 */ {
    transform: translateX(10px);
    opacity: 0;
  }
</style>
