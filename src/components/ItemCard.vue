<template>
  <v-card outlined>
    <v-img class="white--text align-end" height="512px" :src="fullSrc">
      <v-card-title style="text-shadow: 0 0 16px black;">Top 10 Australian beaches</v-card-title>
    </v-img>

    <v-card-subtitle class="pb-0">Number 10</v-card-subtitle>

    <v-card-text class="text--primary">
      <div>Whitehaven Beach</div>
      <div>Whitsunday Island, Whitsunday Islands</div>
      <div>{{ fullSrc }}</div>
    </v-card-text>

    <v-card-actions>
      <v-btn color="orange" text>Share</v-btn>
      <v-btn color="orange" text>Explore</v-btn>
    </v-card-actions>
  </v-card>
</template>

<script>
export default {
    props: {
        data: {
            type: Object,
            required: true
        }
    },
    computed: {
        fullSrc() { return `../assets/${this.data.src}` }
    }
}
</script>

<style>

</style>