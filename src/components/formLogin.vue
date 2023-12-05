<template>
  <modalComponent :show="show">
    <div
      class="flex flex-col justify-center items-center h-44 w-96 bg-slate-700 border-2 border-slate-300 rounded-md p-5"
    >
      <div class="w-full flex justify-end items-end gap-5">
        <buttonComponent @click="closeMethod" type="danger" text="X"></buttonComponent>
      </div>

      <h1 class="text-xl font-bold uppercase">Login</h1>

      <div class="flex justify-end items-center gap-5 ">
        <selectComponent
          :options="users.map(user => ({ text: user.name, value: user.id }))"
          :value="user"
          label="Entre com o usuario"
          placeholder="Selecione um usuário"
          @change="user = $event.target.value"
        ></selectComponent>

        <buttonComponent @click="loginMethod" type="success" text="Logar"></buttonComponent>
      </div>

      <div>
        <p class="text-sm text-slate-300">Não tem conta? <a class="hover:underline cursor-pointer" @click="registerOpenModal">Cadastre-se</a></p>
      </div>
    </div>
  </modalComponent>
</template>

<script>
import modalComponent from './modalcomponent.vue'
import buttonComponent from './buttonComponent.vue'
import selectComponent from './selectComponent.vue'

export default {
  name: 'formLoginComponent',
  components: {
    modalComponent,
    buttonComponent,
    selectComponent
  },
  props: {
    show: {
      default: false,
      required: true,
      type: Boolean
    },
    users: {
      type: Array,
      required: false
    },
    loginMethod: {
      type: Function,
      required: true
    },
    closeMethod: {
      type: Function,
      required: true
    },
    registerOpenModal: {
      type: Function,
      required: true
    }
  }
}
</script>
