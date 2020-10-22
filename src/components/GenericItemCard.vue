<template>
  <v-card outlined :color="color">
    <v-img src="https://cdn.vuetifyjs.com/images/cards/sunshine.jpg" height="256px"></v-img>

    <v-card-title>Top western road trips</v-card-title>
    <v-card-subtitle>1,000 miles of wonder</v-card-subtitle>

    <v-card-actions>
        <v-btn dark text :to="{ path: skuLink }">Explore</v-btn>
    </v-card-actions>
  </v-card>
</template>

<script>
export default {
    props: {
        color: {
            type: String,
            required: true
        },
        index: {
            type: Number,
            required: true
        }
    },
    computed: {
        skuLink() { return `more/${this.index}` }
    }
}
</script>