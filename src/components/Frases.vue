<template>
    <div id="Frases">
      
    <h5>  
    
    Quieres una frase que te motive a ahorrar dinero, selecciona un botón o guarda tus frases favoritas:
    <br> <br> 
    </h5> 
      <h6> 
    <br> <br> 
    <button v-on:click="getFrase1" v-if="is_auth"> Frases </button>
      <span><button v-on:click="Frases1" > Frase 1 </button></span>
      <br> <br> 
      <span><button v-on:click="Frases2" > Frase 2 </button></span>
       <br> <br> 
      <span><button v-on:click="Frases3" > Frase 3 </button></span>
       <br> <br> 
      <span><button v-on:click="Frases4" > Frase 4 </button></span>
       <br> <br> 
      <span><button v-on:click="Frases5" > Frase 5 </button></span>
       <br> <br> 
      <span><button v-on:click="Frases6" > Frase 6 </button></span>
     <br> <br> 
      <input v-model="Misfrases" placeholder="Ingrese frase" />
      <br> <br> 
      <span><button v-on:click="GuardarFrase" > Registrar esta frase </button></span>
    </h6>   
        
    </div>
    
</template>
import axios from "axios";
export default {
  name: "Frases",
  data: function () {
    return {
      Misfrases: "Ingrese aquí su gasto",
      

      detail:"",
    };
  },
<script>
import axios from "axios";
export default {
  name: "Frases",
  data: function () {
    return {
      nombreFrase: "Ingrese aquí su frase",


      detail:"",
    };
  },
methods:{

GuardarFrase: function () {
    this.Frases = this.$route.params.Frases;
    this.username = this.$route.params.username;
    
    let bodyIn = {
      nombreFrase: this.nombreFrase,
      username: this.username,
    };
   var self = this;
    axios
      .post("https://finanzas-personales-api2.herokuapp.com/user/phrases/add", bodyIn)
      .then((result) => {
        self.detail = this.$alert("Tu frase ha sido registrada")
        
      })
      .catch((error) => {
        alert("ERROR Servidor" + error);
      });
  },

  Frases1: function () {
    this.Gastos = this.$route.params.Gastos;
    
    let bodyIn = {
      nombreGasto: this.nombreGasto,
      valor: this.valor,
    };
   var self = this;
    axios
      .post("Hola")
      .then((result) => {
        self.detail = this.$alert("Un centavo ahorrado es un centavo ganado")
        
      })
      .catch((error) => {
        alert("Un centavo ahorrado es un centavo ganado");
      });
  },

Frases2: function () {
    this.Gastos = this.$route.params.Gastos;
    
    let bodyIn = {
      nombreGasto: this.nombreGasto,
      valor: this.valor,
    };
   var self = this;
    axios
      .post("Hola")
      .then((result) => {
        self.detail = this.$alert("Nunca gastes tu dinero antes de tenerlo")
        
      })
      .catch((error) => {
        alert("Nunca gastes tu dinero antes de tenerlo");
      });
  },
  Frases3: function () {
    this.Gastos = this.$route.params.Gastos;
    
    let bodyIn = {
      nombreGasto: this.nombreGasto,
      valor: this.valor,
    };
   var self = this;
    axios
      .post("Hola")
      .then((result) => {
        self.detail = this.$alert("Una ganga no es una ganga a menos que sea algo que necesites")
        
      })
      .catch((error) => {
        alert("Una ganga no es una ganga a menos que sea algo que necesites");
      });
  },
  Frases4: function () {
    this.Gastos = this.$route.params.Gastos;
    
    let bodyIn = {
      nombreGasto: this.nombreGasto,
      valor: this.valor,
    };
   var self = this;
    axios
      .post("Hola")
      .then((result) => {
        self.detail = this.$alert("El hombre que sabe gastar y ahorrar es el más feliz, porque disfruta con ambas cosas")
        
      })
      .catch((error) => {
        alert("El hombre que sabe gastar y ahorrar es el más feliz, porque disfruta con ambas cosas");
      });
  },
  Frases5: function () {
    this.Gastos = this.$route.params.Gastos;
    
    let bodyIn = {
      nombreGasto: this.nombreGasto,
      valor: this.valor,
    };
   var self = this;
    axios
      .post("Hola")
      .then((result) => {
        self.detail = this.$alert("Ahorrar no es solo guardar, sino saber gastar")
        
      })
      .catch((error) => {
        alert("Ahorrar no es solo guardar, sino saber gastar");
      });
  },
  Frases6: function () {
    this.Gastos = this.$route.params.Gastos;
    
    let bodyIn = {
      nombreGasto: this.nombreGasto,
      valor: this.valor,
    };
   var self = this;
    axios
      .post("Hola")
      .then((result) => {
        self.detail = this.$alert("Gasta siempre una moneda menos de lo que ganes")
        
      })
      .catch((error) => {
        alert("Gasta siempre una moneda menos de lo que ganes");
      });
  },
}
}
</script>

<style>
   
    #Frases h5{
       font-size: 20px;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
    }
      #Frases h6{
       width: 100%;
        height: 100%;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
    }
    
</style>
