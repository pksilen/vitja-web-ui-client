<template>
  <div>
    <div class="items">
      <div class="item">
        <img alt="" src="../../../assets/images/jacket.jpg" />
        <div class="title">Men's cotton bomber jacket, size L</div>
        <div class="price">€19</div>
      </div>
      <div class="item">
        <img alt="" src="../../../assets/images/shoes.jpg" />
        <div class="title">Men's Adidas shoes, size 42</div>
        <div class="price">€39</div>
      </div>
      <div class="item">
        <img alt="" src="../../../assets/images/shoes.jpg" />
        <div class="title">Men's Adidas shoes, size 42</div>
        <div class="price"><span class="oldPrice">€49</span><span class="newPrice">€39</span></div>
      </div>
      <div class="item">
        <img alt="" src="../../../assets/images/shoes.jpg" />
        <div class="title">Men's Adidas shoes, size 42</div>
        <div class="price">€39</div>
      </div>
      <div class="item">
        <img alt="" src="../../../assets/images/shoes.jpg" />
        <div class="title">Men's Adidas shoes, size 42</div>
        <div class="price">€39</div>
      </div>
      <div class="item">
        <img alt="" src="../../../assets/images/shoes.jpg" />
        <div class="title">Men's Adidas shoes, size 42</div>
        <div class="price">€39</div>
      </div>
      <div class="item">
        <img alt="" src="../../../assets/images/shoes.jpg" />
        <div class="title">Men's Adidas shoes, size 42</div>
        <div class="price">€39</div>
      </div>
    </div>
    <a class="toTop" href="#" uk-totop uk-scroll>Back to top</a>
  </div>
</template>

<script>
  export default {
    name: 'BuyView'
  };
</script>

<style scoped lang="scss">
  .items {
    display: flex;
    flex-wrap: wrap;

    .item {
      align-items: center;
      display: flex;
      flex-direction: column;
      margin: 1.5%;
      width: 17%;

      img {
        border-radius: 50%;
      }

      .price {
        color: rgb(0, 0, 0);
        font-family: 'Roboto Mono', monospace;
        font-weight: 700;

        .oldPrice {
          text-decoration: line-through;
          font-weight: 100;
          padding-right: 0.4rem;
        }

        .newPrice {
          color: rgb(198, 5, 12);
        }
      }
    }
  }
</style>

<style lang="scss">
  .toTop {
    background-color: rgba(1, 1, 1, 0.7) !important;
    bottom: 1rem;
    color: #c0c0c0 !important;
    padding-left: 0.5rem !important;
    padding-right: 0.5rem !important;
    padding-top: 0.5rem !important;
    padding-bottom: 0.5rem !important;
    position: fixed;
    right: 1rem;

    &:hover {
      color: #ff9000 !important;
      text-decoration: none !important;
    }

    svg {
      margin-left: 1rem;
    }
  }
</style>
