<script lang="ts">
import { defineComponent, PropType, computed, ref, toRef, Ref } from 'vue';
import { Todo, Meta } from './models';

export default {
  setup() {
    return {
      slide: ref(1),
    };
  },
};
</script>

<template>
  <div class="text-test">
    <q-carousel animated v-model="slide" arrows navigation infinite>
      <q-carousel-slide
        :name="1"
        img-src="https://cdn.quasar.dev/img/mountains.jpg"
      />
      <q-carousel-slide
        :name="2"
        img-src="https://cdn.quasar.dev/img/parallax1.jpg"
      />
    </q-carousel>
  </div>
</template>

<style lang="scss" scoped>
.text-test {
  width: 90%;
  height: 90%;
}
</style>
