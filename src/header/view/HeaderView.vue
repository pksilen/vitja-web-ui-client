<template>
  <header>
    <div class="logo">VITJA</div>
    <nav class="uk-navbar-container uk-navbar uk-navbar-transparent">
      <div class="nav-overlay uk-navbar-left">
        <ul class="uk-navbar-nav">
          <li class="uk-active"><router-link to="/home">HOME</router-link></li>
          <li><router-link to="/buy">BUY</router-link></li>
          <li><router-link to="/my-favorites">MY FAVORITES</router-link></li>
          <li><router-link to="/sell">SELL</router-link></li>
          <li><router-link to="/my-sales">MY SALES</router-link></li>
        </ul>
      </div>
      <div class="nav-overlay uk-navbar-right">
        <a
          class="uk-navbar-toggle"
          uk-search-icon
          uk-toggle="target: .nav-overlay; animation: uk-animation-fade"
          href="#"
        />
      </div>
      <div class="nav-overlay uk-navbar-left uk-flex-1" hidden>
        <div class="uk-navbar-item uk-width-expand">
          <form class="uk-search uk-search-navbar uk-width-1-1">
            <input class="uk-search-input" type="search" placeholder="Search..." autofocus />
          </form>
        </div>
        <a
          class="uk-navbar-toggle"
          uk-close
          uk-toggle="target: .nav-overlay; animation: uk-animation-fade"
          href="#"
        />
      </div>
    </nav>
    <div class="icons">
      <span class="icon" uk-icon="user" />
      <span class="icon" uk-icon="cart" />
      <span class="badge uk-badge">3</span>
      <span class="icon" uk-icon="sign-out" />
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
    background-color: rgba(192, 186, 149, 0.2);
    border-bottom: 1px rgba(0, 0, 0, 0.2) solid;
    display: flex;
    justify-content: space-between;
    padding-bottom: 0.2rem;
    padding-left: 1rem;
    padding-right: 1rem;
    padding-top: 0.2rem;
  }

  .logo {
    font-size: 3rem;
    font-family: 'Cairo', sans-serif;
    line-height: 3rem;
  }

  .icons {
    align-items: center;
    color: rgba(0, 0, 0, 0.47);
    font-size: 1rem;
    font-family: 'Playfair Display', serif;
    display: flex;

    .icon {
      margin-left: 1rem;
    }

    .badge {
      background-color: red;
      font-family: 'Roboto Mono', serif;
      font-size: 1rem;
      font-weight: 300;
      margin-left: 0.1rem;
    }
  }
</style>
