<template>
  <layout :openModal="showAnyModal">
    <div class="flex justify-between items-center h-8 w-screen p-5">
      <div class="text-4xl">TRADER VUE</div>
      <nav>
        <ul class="flex gap-4">
          <li>Inicio</li>
          <li>Entrar</li>
        </ul>
      </nav>
    </div>

    <div class="mt-4 flex flex-col justify-center items-center">
      <div class="w-10/12 m-auto">
        <div class="flex justify-between items-center mb-5">
          <div>
            <h1 class="text-2xl mb-2">Lista de ações</h1>
            <p class="text-md text-slate-300">Veja a lista de ações mais atualizada da UFES</p>
          </div>
          <div>
            <buttonComponent type="primary" text="Adicionar Ação" @click="openModalToAddEnterprise"
              >/</buttonComponent
            >
          </div>
        </div>
        <tableListComponent></tableListComponent>
      </div>
    </div>

    <formEnterpriseComponent
      :enterprise="enterprise"
      :show="showFormEnterprise"
      :closeMethod="closeModalToAddEnterprise"
    ></formEnterpriseComponent>
  </layout>
</template>

<script>
import LayoutComponent from '@/Components/layout.vue'
import buttonComponent from '@/Components/buttonComponent.vue'
import tableListComponent from '@/Components/tableList.vue'
import formEnterpriseComponent from '@/Components/formEnterprise.vue'

export default {
  name: 'HomeView',
  components: {
    layout: LayoutComponent,
    buttonComponent,
    tableListComponent,
    formEnterpriseComponent
  },
  // create data
  data: function () {
    return {
      showAnyModal: false,
      showFormEnterprise: false,
      enterprise: {
        name: '',
        value: 0,
        quantity: 0
      }
    }
  },
  methods: {
    openModalToAddEnterprise() {
      this.showAnyModal = true;
      this.showFormEnterprise = true;
    },
    closeModalToAddEnterprise() {
      this.showAnyModal = false;
      this.showFormEnterprise = false;
    }
  }
}
</script>
