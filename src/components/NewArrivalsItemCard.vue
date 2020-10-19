<template>
  <v-hover>
    <template v-slot:default="{ hover }">
      <v-card outlined>
        <v-img class="white--text align-end" height="512px" :src="data.src">
          <v-card-title style="text-shadow: 0 0 16px black;">{{ data.name }}</v-card-title>
        </v-img>

        <v-fade-transition>
          <v-overlay v-if="hover" z-index="1" absolute color="#036358">
            <v-btn :to="{ path: skuLink }">See more info</v-btn>
          </v-overlay>
        </v-fade-transition>
      </v-card>
    </template>
  </v-hover>
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
        skuLink() { return `more/${this.data.name}` }
    }
}
</script>