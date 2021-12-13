<script>
export default {
  props: {
    content: Object,
    navLink: String,
  },
  data: () => ({}),
  methods: {
    formatNavigationLink: (link) => link.toLowerCase().replaceAll(" ", "-"),
  },
};
</script>

<template>
  <section class="footer" :id="navLink">
    <img
      loading="lazy"
      class="footer__image"
      v-if="content.image"
      :src="content.image._url"
    />

    <div class="footer__wrapper">
      <div class="footer__left-wrapper">
        <div class="footer__title-left">{{ content.titleLeft }}</div>
        <div
          class="footer__item-left"
          v-for="item in content.footerLinksLeft"
          :key="item._id"
        >
          <a class="footer__links" :href="item.link"> {{ item.title }}</a>
        </div>
      </div>

      <div
        class="footer__description"
        v-for="item in content.footerMiddle"
        :key="item._id"
      >
        <div class="footer__description" v-html="item.description"></div>
      </div>

      <div class="footer__right-wrapper">
        <div class="footer__title-right">{{ content.titleRight }}</div>
        <div
          class="footer__item-right"
          v-for="item in content.footerLinksRight"
          :key="item._id"
        >
          <a class="footer__links" :href="item.link"> {{ item.title }}</a>
        </div>
      </div>
    </div>
  </section>
</template>

<style lang="postcss" scoped>
.footer {
  background-color: #0e2003;
  padding: 70px 30px;

  @media (--viewport-md-min) {
    padding: 50px 130px;
  }

  &__item-left {
    font-size: 11px;
    text-align: center;
    font-family: "poppins";

    @media (--viewport-md-min) {
      font-size: 13px;
      text-align: left;
    }
  }

  &__item-right {
    text-align: center;
    font-family: "poppins";
    font-size: 11px;

    @media (--viewport-md-min) {
      font-size: 13px;
      text-align: right;
    }
  }

  &__links {
    transition: 0.2s;
    text-decoration: none;
    color: #999999;

    &:hover {
      color: #ffff !important;
      transition: 0.1s;
    }
  }

  &__image {
    width: 100%;
    max-width: 106px;
    margin: auto;

    @media (--viewport-md-min) {
      font-size: 37px;
      line-heigt: 52px;
      max-width: 220px;
    }
  }

  &__wrapper {
    display: flex;
    width: 100%;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    @media (--viewport-md-min) {
      justify-content: space-between;
      align-items: baseline;
      flex-direction: row;
    }
  }

  &__left-wrapper {
    max-width: 150px;
    width: 100%;
  }

  &__right-wrapper {
    max-width: 150px;
    width: 100%;
  }

  &__title-left {
    font-size: 15px;
    color: #fff;
    text-align: center;
    line-height: 5px;
    font-family: "poppins";
    margin-bottom: 10px;
    margin-top: 20px;

    @media (--viewport-md-min) {
      font-size: 18px;
      text-align: left;
      line-height: 15px;
      margin-bottom: 5px;
    }
  }

  &__title-right {
    font-size: 15px;
    margin-top: 20px;
    color: #fff;
    text-align: center;
    line-height: 5px;
    font-family: "poppins";
    margin-bottom: 10px;

    @media (--viewport-md-min) {
      font-size: 18px;
      text-align: right;
      line-height: 15px;
      margin-bottom: 5px;
    }
  }

  &__description {
    width: 100%;
    max-width: 210px;
    text-align: center;
    line-heigt: 16px;
    font-size: 11px;
    margin-top: 10px;
    color: #fff;

    @media (--viewport-md-min) {
      font-size: 18px;
      max-width: 512px;
    }
  }
}

.footer__wrapper div:nth-child(3) {
  order: 3;
  @media (--viewport-md-min) {
    order: 0;
  }
}

.footer__wrapper div:nth-child(1) {
  order: 2;
  @media (--viewport-md-min) {
    order: 0;
  }
}

.footer__wrapper div:nth-child(2) {
  order: 1;
  @media (--viewport-md-min) {
    order: 0;
  }
}
</style>
