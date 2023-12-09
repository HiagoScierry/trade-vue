<template>
    <div class="user-mode">
      <h1>Modo Usuário</h1>
      <!-- Conteúdo específico para usuário -->
      <div v-if="!isAdmin" class="user-content">
        <!-- Exemplo: Exibição de informações do usuário -->
        <h2>Informações do Usuário</h2>
      </div>
      <div v-else>
        <p>Você está no modo de administrador.</p>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        isAdmin: false
      };
    },
  };
  </script>
  
  <style scoped>
  .user-mode {
    padding: 20px;
  }
  
  .user-content {
    margin-top: 20px;
    padding: 10px;
    background-color: #e0e0e0;
    border-radius: 5px;
  }
  </style>
  