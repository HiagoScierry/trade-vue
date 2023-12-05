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
import LayoutComponent from '@/Components/layout.vue'
import buttonComponent from '@/Components/buttonComponent.vue'
import tableListComponent from '@/Components/tableList.vue'
import formEnterpriseComponent from '@/Components/formEnterprise.vue'
import formLoginComponent from '@/Components/formLogin.vue'
import formRegister from '../components/formRegister.vue'

export default {
  name: 'HomeView',
  components: {
    layout: LayoutComponent,
    buttonComponent,
    tableListComponent,
    formEnterpriseComponent,
    formLoginComponent,
    formRegister
  },
  // create data
  data: function () {
    return {
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
      users:[
        {
          name: 'João',
          cpf: '123456789',
          amountValue: 1000
        },
        {
          name: 'Maria',
          cpf: '987654321',
          amountValue: 1000
        }
      ],
      enterprises: [
        {
          id: 1,
          name: 'Apple',
          quantity: 100000,
          value: 0.01
        },
        {
          id: 2,
          name: 'Microsoft',
          quantity: 100000,
          value: 0.01
        },
        {
          id: 3,
          name: 'Google',
          quantity: 100000,
          value: 0.01
        },
        {
          id: 4,
          name: 'Amazon',
          quantity: 100000,
          value: 0.01
        },
        {
          id: 5,
          name: 'Facebook',
          quantity: 100000,
          value: 0.01
        },
        {
          id: 6,
          name: 'Tesla',
          quantity: 100000,
          value: 0.01
        },
        {
          id: 7,
          name: 'Twitter',
          quantity: 100000,
          value: 0.01
        },
        {
          id: 8,
          name: 'Uber',
          quantity: 100000,
          value: 0.01
        },
        {
          id: 9,
          name: 'Netflix',
          quantity: 100000,
          value: 0.01
        },
        {
          id: 10,
          name: 'Spotify',
          quantity: 100000,
          value: 0.01
        }
      ]
    }
  },
  methods: {
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
  }
}
</script>
