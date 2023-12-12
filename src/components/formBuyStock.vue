<!-- eslint-disable vue/no-mutating-props -->
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
        <h2 class="text-sm">Referena a {{ enterprise.name || 'Nome indefinido' }}</h2>
        <div class="flex flex-col justify-between items-end">
          <p class="text-sm">Ações disponíveis : {{ enterprise.quantity }}</p>
          <p class="text-sm">
            Valor :
            {{
              new Intl.NumberFormat('pt-BR', {
                style: 'currency',
                currency: 'BRL',
                minimumFractionDigits: 2
              }).format(enterprise.value)
            }}
          </p>
        </div>
      </div>

      <inputComponent
        type="number"
        label="Quantidade de ações a serem utilizadas:"
        placeholder="10,20,30..."
        class="w-full"
        :value="quantity"
        @change="changeQuantityValue"
      ></inputComponent>

      <div class="m-4">
        <p class="text-sm">Total a se pagar : <span class="text-lg font-bold">10</span></p>
      </div>

      <div class="flex justify-center items-center w-full gap-5">
        <buttonComponent @click="buyMethod('buy')" type="success" text="Comprar"></buttonComponent>
        <buttonComponent @click="buyMethod('sell')" type="primary" text="Vender"></buttonComponent>
        <buttonComponent @click="closeMethod" type="danger" text="Cancelar"></buttonComponent>
      </div>
    </div>
  </modalComponent>
</template>

<script>
import modalComponent from './modalcomponent.vue'
import buttonComponent from './buttoncomponent.vue'
import inputComponent from './inputcomponent.vue'

export default {
  name: 'fornBuyStockComponent',
  components: {
    modalComponent,
    buttonComponent,
    inputComponent
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
    },
    quantity: {
      type: Number,
      required: true
    }
  },
  methods: {
    changeQuantityValue(event) {
      console.l
      this.$emit('changedValue', event.target.value)
    }
  }
}
</script>
