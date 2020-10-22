<template>
  <v-row class="pa-5">
    <v-col v-for="(item, index) in 6" :key="item" cols="12" md="3" sm="4">
      <generic-item-card color="blue lighten-3" :index="index"></generic-item-card>
    </v-col>
  </v-row>
</template>

<script>
import GenericItemCard from '@/components/GenericItemCard';
export default {
  components: { GenericItemCard }
}
</script>