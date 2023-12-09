<template>
    <div class="admin-mode">
      <h1>Modo Administrador</h1>
      <!-- Conteúdo específico para admin -->
      <div v-if="isAdmin" class="admin-content">
        <!-- Exemplo: Opções de gerenciamento das empresas -->
        <h2>Gerenciamento de Empresas</h2>
      </div>
      <div v-else>
        <p>Você não tem permissão para acessar este modo.</p>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        isAdmin: true // Ajuste conforme a lógica de verificação de permissões
      };
    },
    
  };
  </script>
  
  <style scoped>

  .admin-mode {
    padding: 20px;
  }
  
  .admin-content {
    margin-top: 20px;
    padding: 10px;
    background-color: #f0f0f0;
    border-radius: 5px;
  }
  </style>
  