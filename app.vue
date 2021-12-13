<script setup>
const { data } = await useFetch(`https://cdn.umbraco.io/content/url`, {
  headers: {
    "Accept-Language": "en-US",
    "umb-project-alias": "dev-novicell-geekchallenge",
  },
  params: {
    url: "/home/",
  },
});
const formatNavigationLink = (link) => link?.toLowerCase().replaceAll(" ", "-");
</script>

<template>
  <div>
    <!-- <Head lang="en-US">
      <Title>{{ data.title }} title</Title>
      <Meta name="description" :content="data.description" />
      <Meta name="og:title" :content="data.socialTitle" />
      <Meta name="og:description" :content="data.socialDescription" />
      <Meta name="og:type" content="website" />
      <Meta name="og:image" :content="$config.apiUrl + data.socialImage.src" />
    </Head>-->

    <the-header :items="data.pageContent"></the-header>

    <div v-for="section in data.pageContent" :key="section._id">
      {{section.contentTypeAlias}}
      <!-- <component
        :is="section.contentTypeAlias"
        :content="section"
        :navLink="formatNavigationLink(section.navigationTag)"
      ></component> -->
    </div>
  </div>
</template>
