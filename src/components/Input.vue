<template>
  <div>
    <label>{{name}}</label>
    <input type="text" v-model="value">
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue, Watch } from 'vue-property-decorator';

@Component
export default class Input extends Vue {
  @Prop() name!: string;

  private value: string = '';

  private mounted() {
    console.log(this.name);
  }

  @Watch('value')
  private watchValue(value: string) {
    this.$emit('input', value);
    this.$emit('result', value);
  }
}
</script>

<style>

</style>