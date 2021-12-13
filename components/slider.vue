<script>
import Siema from "siema";

export default {
  props: {
    content: Object,
    navLink: String,
  },
  data: () => ({
    MySiema: null,
  }),
  mounted() {
    this.MySiema = new Siema({ selector: this.$refs.slider });
  },
  setup(props) {},
};
</script>

<template>
  <section class="slider" :id="navLink">
    <svg
      class="slider-mobile-top-animation"
      width="101"
      height="144"
      viewBox="0 0 101 144"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g class="group-one">
        <rect
          x="17"
          y="84.9524"
          width="17"
          height="17"
          transform="rotate(90 17 84.9524)"
          fill="#439A0E"
          fill-opacity="0.2"
        />
      </g>
      <g class="group-two">
        <rect
          x="101"
          y="84.9521"
          width="17"
          height="17"
          transform="rotate(90 101 84.9521)"
          fill="#439A0E"
          fill-opacity="0.2"
        />
        <rect
          x="101"
          y="126.952"
          width="17"
          height="17"
          transform="rotate(90 101 126.952)"
          fill="#439A0E"
          fill-opacity="0.2"
        />
      </g>
      <g class="group-three">
        <rect
          x="59"
          y="0.952148"
          width="17"
          height="17"
          transform="rotate(90 59 0.952148)"
          fill="#439A0E"
          fill-opacity="0.2"
        />
        <rect
          x="59"
          y="84.9521"
          width="17"
          height="17"
          transform="rotate(90 59 84.9521)"
          fill="#439A0E"
          fill-opacity="0.2"
        />
      </g>
      <g class="group-one">
        <rect
          x="59"
          y="126.952"
          width="17"
          height="17"
          transform="rotate(90 59 126.952)"
          fill="#439A0E"
          fill-opacity="0.2"
        />
        <rect
          x="17"
          y="0.952148"
          width="17"
          height="17"
          transform="rotate(90 17 0.952148)"
          fill="#439A0E"
          fill-opacity="0.2"
        />
      </g>
      <g class="group-four">
        <rect
          x="101"
          y="0.952148"
          width="17"
          height="17"
          transform="rotate(90 101 0.952148)"
          fill="#439A0E"
          fill-opacity="0.2"
        />
      </g>
    </svg>
    <svg
      class="slider-bottom-mobile-animation"
      width="101"
      height="144"
      viewBox="0 0 101 144"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g class="group-four">
        <rect
          x="17"
          y="84.9524"
          width="17"
          height="17"
          transform="rotate(90 17 84.9524)"
          fill="#439A0E"
          fill-opacity="0.2"
        />
        <rect
          x="101"
          y="84.9521"
          width="17"
          height="17"
          transform="rotate(90 101 84.9521)"
          fill="#439A0E"
          fill-opacity="0.2"
        />
      </g>
      <g class="group-one">
        <rect
          x="101"
          y="126.952"
          width="17"
          height="17"
          transform="rotate(90 101 126.952)"
          fill="#439A0E"
          fill-opacity="0.2"
        />
        <rect
          x="59"
          y="0.952148"
          width="17"
          height="17"
          transform="rotate(90 59 0.952148)"
          fill="#439A0E"
          fill-opacity="0.2"
        />
      </g>
      <g class="group-two">
        <rect
          x="59"
          y="84.9521"
          width="17"
          height="17"
          transform="rotate(90 59 84.9521)"
          fill="#439A0E"
          fill-opacity="0.2"
        />
        <rect
          x="59"
          y="126.952"
          width="17"
          height="17"
          transform="rotate(90 59 126.952)"
          fill="#439A0E"
          fill-opacity="0.2"
        />
      </g>
      <g class="group-three">
        <rect
          x="59"
          y="42.9521"
          width="17"
          height="17"
          transform="rotate(90 59 42.9521)"
          fill="#439A0E"
          fill-opacity="0.2"
        />
        <rect
          x="17"
          y="42.9521"
          width="17"
          height="17"
          transform="rotate(90 17 42.9521)"
          fill="#439A0E"
          fill-opacity="0.2"
        />
      </g>
      <g class="group-five">
        <rect
          x="17"
          y="0.952148"
          width="17"
          height="17"
          transform="rotate(90 17 0.952148)"
          fill="#439A0E"
          fill-opacity="0.2"
        />
        <rect
          x="101"
          y="0.952148"
          width="17"
          height="17"
          transform="rotate(90 101 0.952148)"
          fill="#439A0E"
          fill-opacity="0.2"
        />
      </g>
    </svg>

    <svg
      class="slider-animation"
      width="206"
      height="573"
      viewBox="0 0 206 573"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g class="group-one">
        <rect
          x="60.291"
          y="547.369"
          width="25"
          height="25"
          fill="#439A0E"
          fill-opacity="0.2"
        />
        <rect
          x="180.291"
          y="545.534"
          width="25"
          height="25"
          fill="#439A0E"
          fill-opacity="0.2"
        />
        <rect
          x="60.291"
          y="365.534"
          width="25"
          height="25"
          fill="#439A0E"
          fill-opacity="0.2"
        />
      </g>
      <g class="group-two">
        <rect
          x="120.291"
          y="365.534"
          width="25"
          height="25"
          fill="#439A0E"
          fill-opacity="0.2"
        />
        <rect
          x="120.291"
          y="425.534"
          width="25"
          height="25"
          fill="#439A0E"
          fill-opacity="0.2"
        />
        <rect
          x="0.291016"
          y="425.534"
          width="25"
          height="25"
          fill="#439A0E"
          fill-opacity="0.2"
        />
      </g>
      <g class="group-three">
        <rect
          x="180.291"
          y="425.534"
          width="25"
          height="25"
          fill="#439A0E"
          fill-opacity="0.2"
        />
        <rect
          x="60.291"
          y="485.534"
          width="25"
          height="25"
          fill="#439A0E"
          fill-opacity="0.2"
        />
        <rect
          x="120.291"
          y="485.534"
          width="25"
          height="25"
          fill="#439A0E"
          fill-opacity="0.2"
        />
      </g>
      <g class="group-four">
        <rect
          x="180.291"
          y="485.534"
          width="25"
          height="25"
          fill="#439A0E"
          fill-opacity="0.2"
        />
        <rect
          x="120.291"
          y="183.698"
          width="25"
          height="25"
          fill="#439A0E"
          fill-opacity="0.2"
        />
        <rect
          x="180.291"
          y="181.863"
          width="25"
          height="25"
          fill="#439A0E"
          fill-opacity="0.2"
        />
      </g>
      <g class="group-five">
        <rect
          x="120.291"
          y="243.698"
          width="25"
          height="25"
          fill="#439A0E"
          fill-opacity="0.2"
        />
        <rect
          x="60.291"
          y="303.698"
          width="25"
          height="25"
          fill="#439A0E"
          fill-opacity="0.2"
        />
        <rect
          x="180.291"
          y="303.698"
          width="25"
          height="25"
          fill="#439A0E"
          fill-opacity="0.2"
        />
      </g>
      <g class="group-six">
        <rect
          x="60.291"
          y="1.86292"
          width="25"
          height="25"
          fill="#439A0E"
          fill-opacity="0.2"
        />
        <rect
          x="180.291"
          y="0.0274658"
          width="25"
          height="25"
          fill="#439A0E"
          fill-opacity="0.2"
        />
        <rect
          x="60.291"
          y="61.8629"
          width="25"
          height="25"
          fill="#439A0E"
          fill-opacity="0.2"
        />
      </g>
      <g class="group-seven">
        <rect
          x="120.291"
          y="61.8629"
          width="25"
          height="25"
          fill="#439A0E"
          fill-opacity="0.2"
        />
        <rect
          x="0.291016"
          y="61.8629"
          width="25"
          height="25"
          fill="#439A0E"
          fill-opacity="0.2"
        />
        <rect
          x="60.291"
          y="121.863"
          width="25"
          height="25"
          fill="#439A0E"
          fill-opacity="0.2"
        />
        <rect
          x="120.291"
          y="121.863"
          width="25"
          height="25"
          fill="#439A0E"
          fill-opacity="0.2"
        />
        <rect
          x="180.291"
          y="121.863"
          width="25"
          height="25"
          fill="#439A0E"
          fill-opacity="0.2"
        />
      </g>
    </svg>

    <h2 class="slider__title">
      {{ content.title }}
    </h2>
    <div class="slider__body">
      <div class="siema" ref="slider">
        <div
          class="slider__items"
          v-for="item in content.sliderItems"
          :key="item._id"
        >
          <div class="slider__content">
            <div class="slider__fill-image">
              <img
                loading="lazy"
                class="slider__image"
                :src="item.image._url"
              />
            </div>

            <div class="slider__item">
              <div class="slider__item-title" v-html="item.title"></div>
              <div
                class="slider__item-description"
                v-html="item.description"
              ></div>
              <div class="slider__item-subtitle" v-html="item.subTitle"></div>
            </div>
          </div>
        </div>
      </div>
      <button class="slider__prev-button" @click="MySiema.prev()">
        <svg
          class="slider__icon-prev"
          width="12"
          height="22"
          viewBox="0 0 12 22"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M2.26849 2.06828L10.3765 10.8352L2.26849 19.6021"
            stroke="#285C08"
            stroke-width="3"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </svg>
      </button>
      <button class="slider__next-button" @click="MySiema.next()">
        <svg
          class="slider__icon-next"
          width="12"
          height="22"
          viewBox="0 0 12 22"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M2.26849 2.06828L10.3765 10.8352L2.26849 19.6021"
            stroke="#285C08"
            stroke-width="3"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </svg>
      </button>
    </div>
  </section>
</template>

<style lang="postcss" scoped>
.slider {
  overflow: hidden;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  background-color: #f6fbf4;
  padding: 60px 45px;
  position: relative;

  &__title {
    font-size: 20px;
    line-height: 25px;
    text-align: center;
    color: #285c08;

    @media (--viewport-md-min) {
      font-size: 37px;
      line-height: 50px;
    }
  }

  &__body {
    width: 100%;
    max-width: 30rem;
    margin: 0 auto;
    position: relative;

    @media (--viewport-md-min) {
      width: 100%;
      min-width: 900px;
      margin: 2px auto;
    }
  }

  &__items {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    background: #d2e8c6;
    border: 2px solid #285c08;
    box-shadow: 0px 4px 10px rgba(40, 92, 8, 0.2);
    border-radius: 10px;
    margin-top: 30px;

    @media (--viewport-md-min) {
      min-width: 900px;
    }
  }

  &__content {
    @media (--viewport-md-min) {
      display: flex;
    }
  }

  &__image {
    width: 200px;
    height: 200px;
    border-radius: 150%;

    @media (--viewport-md-min) {
      border-radius: unset;
    }
  }

  &__item {
    width: 100%;
    max-width: 212px;
    margin-top: 15px;
    margin-left: auto;
    margin-right: auto;
    padding: 10px;
    @media (--viewport-md-min) {
      max-width: 520px;
      margin-top: 0;
      display: flex;
      flex-direction: column;
      justify-content: center;
    }
  }

  &__item-title {
    color: #7da267;
    font-size: 13px;

    @media (--viewport-md-min) {
      font-size: 18px;
    }
  }

  &__item-description {
    font-size: 13px;
    line-height: 20px;
    color: #285c08;
    width: 100%;
    max-width: 212px;

    @media (--viewport-md-min) {
      max-width: 520px;
      font-size: 21px;
      line-height: 30px;
    }
  }

  &__item-subtitle {
    color: #7da267;
    font-size: 11px;

    @media (--viewport-md-min) {
      font-size: 18px;
    }
  }

  &__prev-button {
    background: #ffffff;
    box-shadow: 0 4px 10px rgb(40 92 8 / 20%);
    display: block;
    height: 40px;
    border-radius: 50%;
    width: 40px;
    border-style: hidden;
    display: flex;
    align-items: center;
    justify-content: center;
    position: absolute;
    top: 50%;
    left: -25px;
    cursor: pointer;

    @media (--viewport-md-min) {
      height: 60px;
      width: 60px;
      left: -88px;
      top: 45%;
    }
  }
  &__next-button {
    background: #ffffff;
    box-shadow: 0 4px 10px rgb(40 92 8 / 20%);
    height: 40px;
    border-radius: 50%;
    width: 40px;
    border-style: hidden;
    display: flex;
    align-items: center;
    justify-content: center;
    position: absolute;
    top: 50%;
    right: -25px;
    cursor: pointer;

    @media (--viewport-md-min) {
      height: 60px;
      width: 60px;
      right: -88px;
      top: 45%;
    }
  }

  &__icon-prev {
    transform: rotate(180deg);
  }
  &__icon-next {
  }
}

.siema {
  margin: 1rem 0;
}

.slider__fill-image img {
  @media (--viewport-md-min) {
    width: 100%;
    height: 100%;
  }
}

.slider__image img {
  @media (--viewport-md-min) {
    object-fit: cover;
  }
}
</style>
