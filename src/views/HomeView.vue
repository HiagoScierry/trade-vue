<template>
  <layout>
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
            <buttonComponent type="primary" text="Adicionar Ação">/</buttonComponent>
          </div>
        </div>
        <tableListComponent></tableListComponent>
      </div>
    </div>
  </layout>
</template>

<script>
import LayoutComponent from '@/Components/layout.vue'
import buttonComponent from '@/Components/button.vue'
import tableListComponent from '@/Components/tableList.vue'

export default {
  name: 'HomeView',
  components: {
    layout: LayoutComponent,
    buttonComponent,
    tableListComponent
  }
}
</script>
