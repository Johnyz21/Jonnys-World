<template>
  <nav class="sidebar">
    <div v-if="isPanelOpen" class="col-2"></div>
    <transition name="slide">
      <div v-if="isPanelOpen" class="sticky-top">
        <slot></slot>
      </div>
    </transition>
  </nav>
</template>
<script>
import { store, mutations } from '@/store.js'

export default {
  methods: {
    closeSidebarPanel: mutations.toggleNav
  },
  computed: {
    isPanelOpen () {
      return store.isNavOpen
    }
  }
}
</script>
<style>
  .slide-enter-active,
  .slide-leave-active
  {
    transition: transform 0.2s ease;
  }

  .slide-enter,
  .slide-leave-to {
    transform: translateX(-100%);
    transition: all 150ms ease-in 0s
  }

</style>
