<template>
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
