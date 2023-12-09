<template>
  <layout :openModal="showAnyModal">
    <div class="flex justify-between items-center h-8 w-screen p-5">
      <div class="text-4xl">TRADER VUE</div>
      <nav>
        <ul class="flex gap-4">
          <li class="cursor-pointer" @click="adminMode">Modo Admin</li>
          <li class="cursor-pointer" @click="openModalToLogin">Entrar</li>
          <li class="cursor-pointer" @click="openModalToRegister">Registre-se</li>
        </ul>
      </nav>
    </div>

    <div class="mt-4">
      <!-- Alternância entre os modos -->
      <AdminMode v-if="isAdminMode" />
      <UserMode v-else />
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
        <tableListComponent :items="enterprises"></tableListComponent>
      </div>
    </div>

    <formRegister
      :show="showFormRegister"
      :closeMethod="closeModalToRegister"
      :registerMethod="registerMethod"
      :user="user"
    ></formRegister>
    <formLoginComponent
      :show="showFormLogin"
      :closeMethod="closeModalToLogin"
      :loginMethod="loginMethod"
      :registerOpenModal="openModalToRegister"
      :users="users"
      >
    </formLoginComponent>
    <formEnterpriseComponent
      :enterprise="enterprise"
      :show="showFormEnterprise"
      :closeMethod="closeModalToAddEnterprise"
    ></formEnterpriseComponent>

  </layout>
</template>

<script>
import LayoutComponent from '@/Components/layout.vue';
import AdminMode from '@/components/AdminMode.vue';
import UserMode from '@/components/UserMode.vue';

export default {
  name: 'HomeView',
  components: {
    layout: LayoutComponent,
    AdminMode,
    UserMode,
  },
  data() {
    return {
      showAnyModal: false,
      isAdminMode: true, // Variável para controlar o modo admin ou usuário
      showAnyModal: false,
      showFormEnterprise: false,
      showFormLogin: false,
      showFormRegister: false,
      enterprise: {
        name: '',
        value: 0,
        quantity: 0
      },
      user: {
        name: '',
        cpf: '',
        amountValue: 0
      },
    };
  },
  computed: {
    enterprises() {
      return this.$store.state.tradeStore.enterprises
    },
    users() {
      return this.$store.state.userStore.users
    }
  },
  
  methods: {
    adminMode() {
      // Lógica para alternar entre os modos
      this.isAdminMode = !this.isAdminMode;
    },
    
    openModalToAddEnterprise() {
      this.showAnyModal = true
      this.showFormEnterprise = true
    },
    closeModalToAddEnterprise() {
      this.showAnyModal = false
      this.showFormEnterprise = false
    },
    addEnterprise() {
      //Make a funcion to save in store
      this.closeModalToAddEnterprise()
      this.enterprise = {
        name: '',
        value: 0,
        quantity: 0
      }
    },

    openModalToLogin() {
      this.showAnyModal = true
      this.showFormLogin = true
    },
    closeModalToLogin() {
      this.showAnyModal = false
      this.showFormLogin = false
    },
    loginMethod() {
      //Make a funcion to save in store
      this.closeModalToLogin()
    },

    openModalToRegister() {
      this.closeModalToLogin()

      this.showAnyModal = true
      this.showFormRegister = true
    },

    closeModalToRegister() {
      this.showAnyModal = false
      this.showFormRegister = false
    },

    registerMethod() {
      //Make a funcion to save in store
      this.closeModalToRegister()
    },

    adminMode() {
      //setModeAdmin
    }
  },
};
</script>
