<template>
  <div id="app">
    <div class="header">

      <h1>FINANZAS PERSONALES</h1>
      <nav>
        <button v-on:click="init" v-if="is_auth" > Inicio </button>
        <button v-on:click="getGastos" v-if="is_auth" > Registrar gasto </button>
        <button v-on:click="getBalance" v-if="is_auth"> Total de gastos</button>
        <button v-on:click="getFrases" v-if="is_auth"> Frases </button>
        <button v-on:click="getMostrarFrases" v-if="is_auth"> Mis Frases </button>
 
      </nav>
    </div>

    <div class="main-component">
      <router-view></router-view>
    </div>

    <div class="footer">
      <h2>Misión TIC 2022</h2>
    </div>
    
  </div>
</template>

<script>
export default {
  name: "App",
  components: {},

  data: function(){
      return {
        is_auth: localStorage.getItem('isAuth') || false
      }
    },

methods: {

      init: function(){
        if(this.$route.name != "user"){
          let username = localStorage.getItem("current_username")
          this.$router.push({name: "user", params:{ username: username }})
        }
      },
    
      getBalance: function(){
        if(this.$route.name != "nombreGasto"){
          let username = localStorage.getItem("current_username")
         this.$router.push({name: "nombreGasto", params:{ nombreGasto: 'gasto1' }})
        }
      },

      getGastos: function(){
        if(this.$route.name != "Gastos"){
          let username = localStorage.getItem("current_username")
         this.$router.push({name: "Gastos", params:{ username: "camilo24" }})
        }
      },
       getFrases: function(){
        if(this.$route.name != "Frases"){
          let username = localStorage.getItem("current_username")
         this.$router.push({name: "Frases", params:{ Frases: '' }})
        }
      },
       getMostrarFrases: function(){
        if(this.$route.name != "MostrarFrases"){
          let username = localStorage.getItem("current_username")
         this.$router.push({name: "MostrarFrases", params:{ MostrarFrases: '' }})
        }
      },
    },

    beforeCreate: function(){
      localStorage.setItem('current_username', 'camilo24')
      localStorage.setItem('isAuth', true)
     // this.$router.push({name: "user", params:{ username: "camilo24" }})
      this.$router.push({name: "Frases", params:{ username: "camilo24" }})

    }
};
</script>

<style>



  body{
    margin: 0 0 0 0;
  }
  .header{
    margin: 0%;
    padding: 0;
    width: 100%;
    height: 10vh;
    min-height: 100px;

    background-color: #283747 ;
    color:#E5E7E9  ;

    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  .header h1{
    width: 20%;
    text-align: center;
  }
  .header nav {
    height: 100%;
    width: 45%;

    display: flex;
    justify-content: space-around;
    align-items: center;

    font-size: 20px;
  }
  .header nav button{
    color: #E5E7E9;
    background: #283747;
    border: 1px solid #E5E7E9;
    border-radius: 5px;
    padding: 10px 20px;
  }
  .header nav button:hover{
    color: #283747;
    background: #E5E7E9;
    border: 1px solid #E5E7E9;
  }
  .main-component{
    height: 75vh;
    margin: 0%;
    padding: 0%;
    background: #FDFEFE ;
  }
  .footer{
    margin: 0;
    padding: 0;
    width: 100%;
    height: 10vh;
    min-height: 100px;
    background-color: #283747;
    color: #E5E7E9;
  }
  .footer h2{
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
  }
</style>
