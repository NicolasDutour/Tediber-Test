<template>
  <div class="titleAndDivider">
    <v-layout>
      <v-flex mb-3 class="title text-uppercase">{{ title }}</v-flex>
    </v-layout>
    <v-layout justify-center>
      <p class="divider"></p>
    </v-layout>
  </div>
</template>

<script>
export default {
    name: 'titleAndDivider',
    props: {
        title: String
    }
};
</script>

<style lang="scss" scoped>
.titleAndDivider {
    text-align: center;
    margin-top: 50px;

    .title {
        font-size: 3.5rem !important;
        font-weight: 300;
        color: var(--v-primary-base);
    }
    .divider {
        color: var(--v-secondary-base);
        margin-bottom: 50px;
        width: 100px;
        border: 2px solid var(--v-secondary-base);
    }
}
</style>