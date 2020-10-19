<template>
    <v-container>
        <v-row>
            <v-col cols="12" md="2" class="hidden-sm-and-down">
                <v-img v-for="(item,i) in items" :key="i" :src="item.src" class="mb-5"></v-img>
            </v-col>
            <v-col cols="12" sm="6">
                <v-carousel hide-delimiters>
                    <v-carousel-item v-for="(item,i) in items" :key="i" :src="item.src"></v-carousel-item>
                </v-carousel>
            </v-col>
            <v-col cols="12" sm="6" md="4">
                <v-card :loading="loading" outlined>
                    <v-card-title>Cafe Badilico</v-card-title>

                    <v-card-text>
                    <v-row align="center" class="mx-0">
                        <v-rating :value="4.5" color="amber" dense half-increments readonly size="14"></v-rating>
                        <div class="grey--text ml-4">4.5 (413)</div>
                    </v-row>

                    <div class="my-4 subtitle-1">$ • Italian, Cafe</div>
                    <div>Small plates, salads & sandwiches - an intimate setting with 12 indoor seats plus patio seating.</div>
                    </v-card-text>

                    <v-divider class="mx-4"></v-divider>

                    <v-card-title>Tonight's availability</v-card-title>

                    <v-card-text>
                        <v-chip-group v-model="selection" active-class="deep-purple accent-4 white--text" column>
                            <v-chip>5:30PM</v-chip>
                            <v-chip>7:30PM</v-chip>
                            <v-chip>8:00PM</v-chip>
                            <v-chip>9:00PM</v-chip>
                        </v-chip-group>
                    </v-card-text>

                    <v-card-actions>
                        <v-btn color="deep-purple lighten-2" text @click="reserve">Reserve</v-btn>
                    </v-card-actions>
                </v-card>
            </v-col>
        </v-row>
    </v-container>
</template>

<script>
export default {
    data: () => ({
        items: [
            { src: 'https://cdn.vuetifyjs.com/images/carousel/squirrel.jpg', },
            { src: 'https://cdn.vuetifyjs.com/images/carousel/sky.jpg', },
            { src: 'https://cdn.vuetifyjs.com/images/carousel/bird.jpg', },
            { src: 'https://cdn.vuetifyjs.com/images/carousel/planet.jpg', },
        ],
        selection: 1,
        loading: false,
    }),
    methods: {
        reserve() {
            this.loading = true
            setTimeout(() => (this.loading = false), 2000)
        },
    },
}
</script>

<style>

</style>