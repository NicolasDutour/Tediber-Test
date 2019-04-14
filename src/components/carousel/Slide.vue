<template>
  <v-card width="350px" min-width="350px" height="540px" class="card primary--text">
    <v-layout class="headline" justify-space-between align-center>
      <v-card-text class="date">{{ date }}</v-card-text>
      <v-card-text class="type primary white--text">{{ type }}</v-card-text>
    </v-layout>
    <v-card-text class="triangle"></v-card-text>
    <v-card-text class="logo">{{ logo }}</v-card-text>
    <v-card-title>
      <v-card-text class="name">{{ name }}</v-card-text>
      <v-card-text class="title">{{ title }}</v-card-text>
    </v-card-title>
    <v-card-text class="body">{{ body }}</v-card-text>
    <v-card-actions>
      <v-layout justify-center>
        <v-btn large color="secondary">{{ actionButton }}</v-btn>
      </v-layout>
    </v-card-actions>
  </v-card>
</template>

<script>
export default {
    name: 'slide',

    props: {
        name: String,
        logo: String,
        type: String,
        date: String,
        title: String,
        body: String,
        urm: String,
        actionButton: String
    }
};
</script>

<style lang="scss" scoped>
.card {
    padding: 20px;

    .v-card__text,
    .v-card__title {
        padding: 0;
    }

    .triangle,
    .logo,
    .name,
    .title {
        margin-bottom: 25px;
    }

    .date,
    .type,
    .logo,
    .name {
        font-size: 1.5rem;
        font-weight: 600;
        text-transform: uppercase;
    }

    .type {
        margin-right: -46px;
    }

    .body {
        font-size: 1.3rem;
    }

    .v-card__actions {
        margin-top: auto;
    }

    .triangle {
        width: 0;
        height: 0;
        border-style: solid;
        border-width: 26px 26px 0 0;
        border-color: var(--v-primary-base) transparent transparent transparent;

        margin-left: auto;
        margin-right: -46px;
    }
}
</style>