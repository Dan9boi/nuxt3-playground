<script>
export default {
  props: {
    content: Object,
    navLink: String,
  },
  data: () => ({}),
};
</script>
<template>
  <section
    class="form"
    :style="{
      backgroundColor: `#${content.backgroundColor}`,
    }"
    :id="navLink"
  >
    <img
      class="form__background-image"
      loading="lazy"
      v-if="content.backgroundImage"
      :src="content.backgroundImage._url"
    />
    <div class="form__form-background-color">
      <div class="form__wrapper">
        <h2 class="form__title">{{ content.title }}</h2>
        <div class="form__description" v-html="content.description"></div>
      </div>
      <div class="form__sign-up-form" v-html="content.form"></div>
    </div>
  </section>
</template>

<style lang="postcss" scoped>
.form {
  background: #d2e8c6;
  display: flex;
  align-items: center;
  flex-direction: column;
  display: inline-block;

  position: relative;
  width: 100%;
  z-index: 2;

  &__background-image {
    pointer-events: none;
    position: absolute;
    background-size: cover;
    width: 100%;
    height: 100%;
    z-index: -1;
    object-fit: cover;
  }

  &__form-background-color {
    max-width: 320px;
    width: 100%;
    height: auto;
    margin: 0 auto;
    background-color: #f6fbf4;
    margin-bottom: 50px;
    box-shadow: 0px 0px 35px rgb(40 92 8 / 30%);
    border-radius: 23px;

    @media (--viewport-md-min) {
      max-width: 990px;
    }
  }
  &__wrapper {
    width: 100%;
    background: transparent;
    max-width: 277px;
    z-index: 4;
    margin: 0 auto;

    @media (--viewport-md-min) {
      max-width: 550px;
    }
  }

  &__title {
    width: 100%;
    text-align: center;
    margin-top: 50px;
    font-size: 20px;
    padding-top: 40px;

    @media (--viewport-md-min) {
      font-size: 37px;
    }
  }

  &__description {
    width: 100%;
    text-align: center;
    font-size: 13px;

    @media (--viewport-md-min) {
      font-size: 23px;
    }
  }

  &__sign-up-form {
    margin-top: 10px;
    padding-bottom: 20px;
    width: 100%;
    z-index: 4;

    iframe {
      max-width: 100%;
      overflow: hidden;
    }
  }
}
</style>
