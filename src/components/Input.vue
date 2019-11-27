<template>
  <div>
    <label>{{name}}</label>
    <b-form-input :type="type" :placeholder="name" v-model="value" />
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue, Watch } from 'vue-property-decorator';

@Component
export default class Input extends Vue {
  @Prop() name!: string;
  @Prop() type!: string;

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