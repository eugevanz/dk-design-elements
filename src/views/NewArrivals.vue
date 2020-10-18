<template>
  <v-row class="pa-5">
    <v-col v-for="item in items" :key="item.src" cols="12" md="4">
      <item-card :data="item"></item-card>
    </v-col>
  </v-row>
</template>

<script>
// @ is an alias to /src
import ItemCard from '@/components/ItemCard.vue';
export default {
  components: { ItemCard },
  data: () => ({
    items: [
      { src: '../assets/AF3.jpg' }, { src: '../assets/african-fashion-models.jpg' }, { src: '../assets/African-FAshion-week-NC-_TK-eye-Photography_AFWNC_african-fashion-Afican-style_ankara-fashion_african-fashion-week_african-fashion-designers_mnl-design_kizonga16.jpg'}, { src: '../assets/afriken-dress-e-2.jpg'}, { src: '../assets/asakeoge-africa-fashion-week-london-2015-14.jpg'}, { src: '../assets/Blue-Dress-with-Matching-Headscarf.jpg'}, { src: '../assets/Day+Arise+African+Fashion+Collective+Runway+DMRyOkEPQDbx.jpg'}, { src: '../assets/MG_4029.jpeg'}, { src: '../assets/Regalia.jpg'}, { src: '../assets/ss-2014_mbfwb-africa-day-nadir-tati-1.jpg'}
    ]
  })
}
</script>
