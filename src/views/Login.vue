<template>
  <div>
    <h1>Login</h1>
    <Input name="Email" v-model="email" @result="result" type="email"/>
    <Input name="Password" v-model="password" type="password"/>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue, Watch } from 'vue-property-decorator';
import Input from '@/components/Input.vue';

@Component({
    components: {
        Input,
    }
})
export default class Login extends Vue {
    private email: string = '';
    private password: string = '';

    @Watch('email')
    private watchValue() {
        console.log('login', this.email);
    }

    @Watch('password')
    private watchPassword() {
        console.log('password', this.password);
    }

    private result(value: string) {
        console.log('result', value);
    }
}
</script>

<style>

</style>