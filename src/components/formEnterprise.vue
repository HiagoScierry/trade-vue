<template>
  <modalComponent :show="show">
    <div
      class="flex flex-col justify-center items-center h-96 w-96 bg-slate-700 border-2 border-slate-300 rounded-md p-5"
    >
      <h1 class="text-xl font-bold uppercase">Adicionar uma nova ação</h1>
      <div>
        <inputComponent
          type="text"
          label="Empresa :"
          placeholder="Ex : Apple, Microsoft..."
          :value="enterprise.name"
        ></inputComponent>
        <inputComponent
          type="number"
          label="Preço unitário da ação :"
          placeholder="Em reais"
          :value="enterprise.value"
        ></inputComponent>
        <inputComponent
          type="number"
          label="Qtd. Ações no mercado :"
          placeholder="10, 100, 1000..."
          :value="enterprise.required"
        ></inputComponent>
      </div>

      <div class="flex justify-end items-center gap-5">
        <buttonComponent type="success" text="Adicionar"></buttonComponent>
        <buttonComponent @click="closeMethod" type="danger" text="Cancelar"></buttonComponent>
      </div>
    </div>
  </modalComponent>
</template>

<script>
import modalComponent from './modalcomponent.vue'
import inputComponent from './inputComponent.vue'
import buttonComponent from './buttonComponent.vue'
export default {
  name: 'formEnterpriseComponent',
  components: {
    modalComponent,
    inputComponent,
    buttonComponent
  },
  props: {
    show: {
      default: false,
      required: true,
      type: Boolean
    },
    enterprise: {
      type: Object,
      required: false
    },
    addMethod: {
      type: Function,
      required: true
    },
    closeMethod: {
      type: Function,
      required: true
    }
  },
}
</script>
