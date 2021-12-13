<script>
export default {
  props: {
    items: Object,
  },
  data: () => ({
    showReadMoreText: false,
  }),
  methods: {
    formatNavigationLink: (link) => link.toLowerCase().replaceAll(" ", "-"),
  },
};
</script>

<template>
  <div class="navigation">
    <ul class="navigation__items" v-for="item in items" :key="item._id">
      <li class="navigation__list" v-if="item.navigationTag">
        <a
          class="navigation__link"
          :href="`#${formatNavigationLink(item.navigationTag)}`"
          >{{ item.navigationTag }}</a
        >
      </li>
    </ul>
  </div>
</template>

<style lang="postcss" scoped>
.navigation {
  display: none;
}

@media screen and (min-width: 992px) {
  .navigation {
    display: block;
    display: flex;
    justify-content: center;
    background-color: #f6fbf4;
    border-bottom: 5px solid rgba(159, 209, 139, 0.2);
    text-decoration: none;
    font-weight: 700;

    &__items {
      list-style-type: none;
      margin: 0;
      padding: 55px 0px 55px 0px;
      font-size: 23px;
    }

    &__list {
      margin-left: 60px;
    }

    &__link {
      text-decoration: none;
      color: #285c08;
      position: relative;
    }
  }
}

.navigation a:hover::after {
  transform: scaleX(1);
}

.navigation a::after {
  position: absolute;
  content: "";
  width: 100%;
  height: 3px;
  top: 100%;
  left: 0;
  background: #da3937;
  transition: transform 0.6s;
  transform: scaleX(0);
  transform-origin: left;
}
</style>
