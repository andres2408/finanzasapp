<template>
    <div id="User">
        <h2> Hola  <span> {{username}}, </span>  ¡Bienvenido!  <br> <br>  <br> <br> </h2> 
        
    <h3>  
    
    Para registrar un nuevo gasto da click en registrar

    
    </h3>    
        
    </div>
    
</template>

<script>
    export default {
        name: "User",
        data:function(){
            return {
                username: "none",
                nombreGasto:"",
                valor: 0

            }
        },
        created: function() {
            this.username = this.$route.params.username
        }
    }
</script>

<style>
    #User{
        width: 100%;
        height: 100%;

        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
       
    }
    #User h2{
        font-size: 50px;
        color: #283747;
  
    }
    #User span{
        color: black;
        font-weight: bold;
     
    }
    #User h3{
        color: black;
        font-weight: bold;
        justify-content: center;
         align-items: center;
    }
</style>
