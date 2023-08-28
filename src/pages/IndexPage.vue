<template>
  <q-page class="row items-center justify-evenly">
    <example-component title="Example component" active></example-component>
  </q-page>
</template>

<script lang="ts">
import ExampleComponent from 'components/ExampleComponent.vue';
import { defineComponent, ref } from 'vue';

export default defineComponent({
  name: 'IndexPage',
  components: { ExampleComponent },
  setup() {},
});
//not sure what this page is for
</script>
