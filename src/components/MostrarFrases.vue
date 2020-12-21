<template>
  <div id="MostrarFrases">
   
    <h2>
      Tus frases son: <span> </span>
    </h2>

 
<div>
  {{ detail2 }}
</div>
 </div>
</template>

<script>
import axios from "axios";
export default {
  name: "MostrarFrases",
  data: function () {
    return {
     
      detail2: "",
    };
  },
  created: function () {


    let self = this;
    axios
      .get("https://finanzaspersonalesapi.herokuapp.com//{username}/phrases/")
      .then((result) => {
        self.detail2 = result.data;
      })
      .catch((error) => {
        alert("ERROR Servidor"+error);
      });
  },
};
</script>

<style>
#MostrarFrases {
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
#MostrarFrases h2 {
  font-size: 50px;
  color: #283747;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
#MostrarFrases span {
  color: crimson;
  font-weight: bold;
}
</style>
