<template>
  <layout :openModal="showAnyModal">
    <div class="flex justify-between items-center h-8 w-screen p-5">
      <div class="text-4xl">TRADER VUE</div>
      <nav>
        <ul class="flex gap-4">
          <li class="cursor-pointer" v-if="modeAdmin" @click="adminMode">Modo Admin</li>
          <li class="cursor-pointer" v-if="!modeAdmin && !modeUser" @click="openModalToLogin">
            Entrar
          </li>
          <li class="cursor-pointer" v-if="!modeAdmin && !modeUser" @click="openModalToRegister">
            Registre-se
          </li>
          <li class="cursor-pointer" v-if="modeAdmin || modeUser" @click="logout">Sair</li>
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
            <buttonComponent
              v-if="modeAdmin"
              type="primary"
              text="Adicionar Ação"
              @click="openModalToAddEnterprise"
              >/</buttonComponent
            >
            <div class="flex justify-end items-center flex-col">
              <!-- INFO USER -->
              <div v-if="modeUser">
                <div class="text-xl mb-2">Olá, {{ user.name }}</div>
                <div class="text-base mb-2">CPF: {{ user.cpf }}</div>
                <div class="text-md text-slate-300">
                  Seu saldo é de:
                  {{
                    new Intl.NumberFormat('pt-BR', {
                      style: 'currency',
                      currency: 'BRL',
                      minimumFractionDigits: 2
                    }).format(user.amountValue)
                  }}
                </div>
              </div>
            </div>
          </div>
        </div>
        <tableListComponent
          :deleteMethod="deleteEnterprise"
          :openBuyModal="openModalToBuyStock"
          :adminMode="modeAdmin"
          :userMode="modeUser"
          :items="enterprises"
        ></tableListComponent>
      </div>
    </div>

    <formRegister
      :show="showFormRegister"
      :closeMethod="closeModalToRegister"
      :registerMethod="registerMethod"
      :user="currentUser"
    ></formRegister>
    <formLoginComponent
      :show="showFormLogin"
      :closeMethod="closeModalToLogin"
      :loginMethod="loginMethod"
      :registerOpenModal="openModalToRegister"
      :users="users"
      @changeSelectedCPFValue="setSelectedCPFValue"
    >
    </formLoginComponent>
    <formEnterpriseComponent
      :enterprise="enterprise"
      :show="showFormEnterprise"
      :closeMethod="closeModalToAddEnterprise"
      :addMethod="addEnterprise"
    ></formEnterpriseComponent>

    <formBuyStockComponent
      :show="showFormBuyStock"
      :closeMethod="closeModalToBuyStock"
      :buyMethod="buyStock"
      :user="user"
      :enterprise="selectedEnterprise"
      @changedValue="setQuantity"

    ></formBuyStockComponent>
  </layout>
</template>

<script>
import LayoutComponent from '@/Components/layout.vue'
import buttonComponent from '@/Components/buttonComponent.vue'
import tableListComponent from '@/Components/tableList.vue'
import formEnterpriseComponent from '@/Components/formEnterprise.vue'
import formLoginComponent from '@/Components/formLogin.vue'
import formRegister from '@/Components/formRegister.vue'
import formBuyStockComponent from '@/Components/formBuyStock.vue'

export default {
  name: 'HomeView',
  components: {
    layout: LayoutComponent,
    buttonComponent,
    tableListComponent,
    formEnterpriseComponent,
    formLoginComponent,
    formRegister,
    formBuyStockComponent
  },
  // create data
  data: function () {
    return {
      showAnyModal: false,
      showFormEnterprise: false,
      showFormLogin: false,
      showFormRegister: false,
      showFormBuyStock: false,
      selectedEnterprise: {
        id: 0,
        name: '',
        value: 0,
        quantity: 0
      },
      enterprise: {
        name: '',
        value: 0,
        quantity: 0
      },
      selectedCPFValue: '',
      currentUser: {
        name: '',
        cpf: '',
        amountValue: 0
      },
      quantity: 0
    }
  },
  computed: {
    enterprises() {
      return this.$store.state.tradeStore.enterprises
    },
    users() {
      return this.$store.state.userStore.users
    },
    modeAdmin() {
      return this.$store.state.loggedStore.adminIsLogged
    },
    modeUser() {
      return this.$store.state.loggedStore.userIsLogged
    },
    user() {
      return this.$store.state.loggedStore.user
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

      this.$store.dispatch('createEnterprise', this.enterprise)

      this.enterprise = {
        name: '',
        value: 0,
        quantity: 0
      }
    },

    deleteEnterprise(id) {
      this.$store.dispatch('deleteEnterprise', id)
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
      this.closeModalToLogin()
      this.currentUser = this.users.find((user) => user.cpf === this.selectedCPFValue)
      if (this.currentUser === undefined) {
        alert('Usuário não encontrado')
        return
      }
      this.$store.dispatch('loginUser', this.currentUser)
      this.selectedCPFValue = ''
      this.currentUser = {
        name: '',
        cpf: '',
        amountValue: 0
      }
    },

    setSelectedCPFValue(value) {
      this.selectedCPFValue = value
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

      this.$store.dispatch('createUser', this.currentUser)
      this.currentUser = {
        name: '',
        cpf: '',
        amountValue: 0
      }

      this.closeModalToRegister()
    },

    exitAdminMode() {
      this.$store.dispatch('exitAdmin')
    },

    exitUserMode() {
      this.$store.dispatch('logoutUser')
    },

    logout() {
      if (this.modeAdmin) {
        this.exitAdminMode()
      } else if (this.modeUser) {
        this.exitUserMode()
      }
    },

    openModalToBuyStock(enterpriseID) {
      this.showAnyModal = true
      this.showFormBuyStock = true
      this.selectedEnterprise = this.$store.state.tradeStore.enterprises.find(
        (item) => item.id === enterpriseID
      )
    },
    closeModalToBuyStock() {
      this.showAnyModal = false
      this.showFormBuyStock = false
      this.selectedEnterprise = {
        name: '',
        value: 0,
        quantity: 0
      }
    },
    buyStock(typeAction) {
      if (typeAction === 'buy') {
        if (this.user.amountValue < this.selectedEnterprise.value * this.quantity) {
          alert('Saldo insuficiente')
          return
        }
        this.$store.dispatch('buyStock', {
          user: this.user,
          enterprise: this.selectedEnterprise,
          quantity: this.quantity
        })
        this.closeModalToBuyStock()
      } else if (typeAction === 'sell') {
        if (this.user.amountValue < this.selectedEnterprise.value * this.quantity) {
          alert('Saldo insuficiente')
          return
        }
        this.$store.dispatch('sellStock', {
          user: this.user,
          enterprise: this.selectedEnterprise,
          quantity: this.quantity
        })
        this.closeModalToBuyStock()
      }
    },
    setQuantity(value) {
      this.quantity = value
    },
  }
}
</script>
