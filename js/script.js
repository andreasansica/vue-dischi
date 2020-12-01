
const randDischi = 'https://flynn.boolean.careers/exercises/api/array/music';

var app = new Vue({
  el:'#app',
  data:{
    dischi: [],
  },

  mounted: function(){
      axios.get(randDischi)
      .then(risposta =>{
        this.dischi = risposta.data.response
      })

  }



})
