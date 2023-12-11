<template>
  <table class="min-w-full divide-y divide-slate-200 rounded-2xl text-slate-200">
    <thead class="bg-slate-900">
      <tr>
        <th scope="col" class="px-6 py-3 text-xs font-bold text-left uppercase">ID</th>
        <th scope="col" class="px-6 py-3 text-xs font-bold text-left uppercase">Empresa</th>
        <th scope="col" class="px-6 py-3 text-xs font-bold text-left uppercase">
          Quantidade de ações
        </th>
        <th scope="col" class="px-6 py-3 text-xs font-bold text-left uppercase">Valor Unitario</th>
        <th scope="col" v-if="adminMode" class="px-6 py-3 text-xs font-bold text-right uppercase">Delete</th>
        <th scope="col" v-if="userMode" class="px-6 py-3 text-xs font-bold text-right uppercase">Comprar/Vender</th>
      </tr>
    </thead>
    <tbody class="divide-y bg-slate-800 divide-slate-200">
      <tr v-for="item in items" :key="item.id">
        <td class="px-6 py-4 whitespace-nowrap">{{ item.id }}</td>
        <td class="px-6 py-4 whitespace-nowrap">{{ item.name }}</td>
        <td class="px-6 py-4 whitespace-nowrap">{{ item.quantity }}</td>
        <td class="px-6 py-4 whitespace-nowrap">{{ item.value }}</td>

        <td  v-if="userMode" class="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
          <buttonComponent
            type="success"
            text="Realizar Ação"
            @click="openBuyModal(item.id)"
          ></buttonComponent>
        </td>


        <td  v-if="adminMode" class="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
          <buttonComponent
            type="danger"
            text="Deletar"
            @click="deleteMethod(item.id)"
          ></buttonComponent>
        </td>
      </tr>
    </tbody>
  </table>
</template>

<script>
import buttonComponent from '@/Components/buttonComponent.vue'

export default {
  name: 'tableListComponent',
  components: {
    buttonComponent
  },
  props: {
    items: {
      type: Array,
      required: true
    },
    adminMode: {
      type: Boolean,
      required: false,
      default: false
    },
    userMode: {
      type: Boolean,
      required: false,
      default: true
    },
    deleteMethod: {
      type: Function,
      required: false
    },
    buyMethod: {
      type: Function,
      required: false
    },
    openBuyModal: {
      type: Function,
      required: false
    }
  }
}
</script>
