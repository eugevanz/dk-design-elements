<template>
  <v-row class="pa-5">
    <v-col v-for="item in items" :key="item.src" cols="12" md="4" sm="6">
      <new-arrivals-item-card :data="item"></new-arrivals-item-card>
    </v-col>
  </v-row>
</template>

<script>
// @ is an alias to /src
import NewArrivalsItemCard from '@/components/NewArrivalsItemCard.vue';

import image1 from '../assets/AF3.jpg'
import image2 from '../assets/african-fashion-models.jpg'
import image3 from '../assets/African-FAshion-week-NC-_TK-eye-Photography_AFWNC_african-fashion-Afican-style_ankara-fashion_african-fashion-week_african-fashion-designers_mnl-design_kizonga16.jpg'
import image4 from '../assets/afriken-dress-e-2.jpg'
import image5 from '../assets/asakeoge-africa-fashion-week-london-2015-14.jpg'
import image6 from '../assets/Blue-Dress-with-Matching-Headscarf.jpg'
import image7 from '../assets/Day+Arise+African+Fashion+Collective+Runway+DMRyOkEPQDbx.jpg'
import image8 from '../assets/MG_4029.jpeg'
import image9 from '../assets/Regalia.jpg'
import image10 from '../assets/ss-2014_mbfwb-africa-day-nadir-tati-1.jpg'

export default {
  components: { NewArrivalsItemCard },
  data: () => ({
    items: [
      { name: 'AF3', src: image1 }, { name: 'african-fashion', src: image2 }, { name: 'TK-eye', src: image3 }, { name: 'afriken-dress', src: image4 }, { name: 'asakeoge', src: image5 }, { name: 'Blue-Dress-with-Matching-Headscarf', src: image6 }, { name: 'Day+Arise', src: image7 }, { name: 'MG', src: image8 }, { name: 'Regalia', src: image9 }, { name: 'nadir-tati', src: image10 }
    ]
  })
}
</script>
