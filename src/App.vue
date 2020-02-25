<template>
  <div>
    <HeaderView />
    <router-view />
  </div>
</template>

<script lang="ts">
  import HeaderView from '@/header/view/HeaderView.vue';

  export default {
    name: 'App',
    components: { HeaderView },
    setup(): object {
      return {};
    }
  };
</script>

<style lang="scss">
  body {
    background-color: rgba(192, 186, 149, 0.2);
    margin: 0;
  }
</style>
