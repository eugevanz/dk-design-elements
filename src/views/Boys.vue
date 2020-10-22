<template>
  <v-row class="pa-5">
    <v-col v-for="item in 6" :key="item" cols="12" md="3" sm="4">
      <generic-item-card color="indigo lighten-3"></generic-item-card>
    </v-col>
  </v-row>
</template>

<script>
import GenericItemCard from '@/components/GenericItemCard';
export default {
  components: { GenericItemCard }
}
</script>