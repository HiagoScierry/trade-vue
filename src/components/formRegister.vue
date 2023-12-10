<!-- eslint-disable vue/no-mutating-props -->
<template>
  <modalComponent :show="show">
    <div
      class="flex flex-col justify-center items-center h-65 w-96 bg-slate-700 border-2 border-slate-300 rounded-md p-5"
    >
      <div class="w-full flex justify-end items-end gap-5"></div>

      <h1 class="text-xl font-bold uppercase">Cadastro do Usuário</h1>

        <div>
            <inputComponent
                type="text"
                label="Nome"
                placeholder="Nome"
                class="w-full"
                :value="user.name"
                @change="user.name = $event.target.value"
            ></inputComponent>

            <inputComponent
                type="text"
                label="CPF"
                placeholder="CPF"
                class="w-full"
                :value="user.cpf"
                @change="user.cpf = $event.target.value"
            ></inputComponent>

            <inputComponent
                type="number"
                label="Valor em Conta :"
                placeholder="R$ 10000,00"
                class="w-full"
                :value="user.amountValue"
                @change="user.amountValue = $event.target.value"
            ></inputComponent>


        </div>

      <div class="flex justify-center items-center w-full gap-5 ">
        <buttonComponent @click="registerMethod" type="success" text="Registrar"></buttonComponent>
        <buttonComponent @click="closeMethod" type="danger" text="Cancelar"></buttonComponent>
      </div>
    </div>
  </modalComponent>
</template>

<script>
import buttonComponent from './buttoncomponent.vue'
import modalComponent from './modalcomponent.vue'
import inputComponent from './inputcomponent.vue'

export default {
  name: 'formRegister',
  components: {
    modalComponent,
    buttonComponent,
    inputComponent
  },
  data() {
    return {}
  },
  props: {
    show: {
      type: Boolean,
      required: true
    },
    closeMethod: {
      type: Function,
      required: true
    },
    registerMethod: {
      type: Function,
      required: true
    },
    user: {
      type: Object,
      required: true
    }
  },
}
</script>
