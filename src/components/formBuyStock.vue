<template>
  <modalComponent :show="show">
    <div
      class="flex flex-col justify-start items-center h-96 w-96 bg-slate-700 border-2 border-slate-300 rounded-md p-5"
    >
      <div class="w-full flex justify-end items-end gap-5">
        <buttonComponent @click="closeMethod" type="danger" text="X"></buttonComponent>
      </div>

      <h1 class="text-xl font-bold uppercase">Realizar ação</h1>

      <p class="text-sm">Veja as informações abaixo</p>
      <!-- Dados da empresa -->
      <div class="w-full flex justify-between items-center gap-10 mt-4">
        <h2 class="text-sm">{{ enterprise.name || "Nome indefinido" }}</h2>
        <div class="flex flex-col justify-between items-end">
          <p class="text-sm">Ações disponíveis : {{ enterprise.quantity }}</p>
          <p class="text-sm">Valor : {{ enterprise.value }}</p>
        </div>
      </div>

      <inputcomponent
        type="number"
        label="Valor em Conta :"
        placeholder="R$ 10000,00"
        class="w-full"
        :value="0"
        @change="console.log($event.target.value)"
      ></inputcomponent>


      <div class="m-4">
        <p class="text-sm">Total a se pagar : <span class="text-lg font-bold">10</span></p>
      </div>


      <div class="flex justify-center items-center w-full gap-5">
        <buttonComponent @click="buyMethod" type="success" text="Comprar"></buttonComponent>
        <buttonComponent @click="buyMethod" type="primary" text="Vender"></buttonComponent>
        <buttonComponent @click="closeMethod" type="danger" text="Cancelar"></buttonComponent>
      </div>
    </div>
  </modalComponent>
</template>

<script>
import modalComponent from './modalcomponent.vue'
import buttonComponent from './buttonComponent.vue'
import inputcomponent from './inputcomponent.vue'

export default {
  name: 'fornBuyStockComponent',
  components: {
    modalComponent,
    buttonComponent,
    inputcomponent
  },
  props: {
    show: {
      default: false,
      required: true,
      type: Boolean
    },
    enterprise: {
      type: Array,
      required: false
    },
    buyMethod: {
      type: Function,
      required: true
    },
    closeMethod: {
      type: Function,
      required: true
    }
  }
}
</script>
