<template>
  <header>
    <div class="logo">VITJA</div>
    <nav>
      <span><router-link to="/home">HOME</router-link></span>
      <span><router-link to="/buy">BUY</router-link></span>
      <span><a>MY FAVORITES</a></span>
      <span><a>SELL</a></span>
      <span><a>MY SALES</a></span>
    </nav>
    <div class="login">
      <img alt="Login icon" src="../../../assets/icons/iconfinder_key_1_193742.svg" />
      <div>MIKAELA F.</div>
    </div>
  </header>
</template>

<script lang="ts">
  export default {
    name: 'HeaderView'
  };
</script>

<style scoped lang="scss">
  header {
    align-items: center;
    border-bottom: 1px rgba(0, 0, 0, 0.2) solid;
    display: flex;
    justify-content: space-between;
    padding-bottom: 1rem;
    padding-left: 1rem;
    padding-right: 1rem;
    padding-top: 1rem;
  }

  .logo {
    font-size: 3rem;
    font-family: 'Cairo', sans-serif;
    line-height: 3rem;
  }

  nav {
    color: rgba(0, 0, 0, 0.47);
    font-size: 1.3rem;
    font-family: 'Playfair Display', serif;

    span:not(:first-child) {
      padding-left: 5rem;
    }

    a:hover {
      color: #654321;
      cursor: pointer;
    }
  }

  .login {
    align-items: center;
    color: rgba(0, 0, 0, 0.47);
    font-size: 1rem;
    font-family: 'Playfair Display', serif;
    display: flex;

    img {
      height: 1.8rem;
    }
  }
</style>
