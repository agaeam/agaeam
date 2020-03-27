import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    data:''
  },
  mutations: {
    updata(state,data){
      console.log(data)
      state.data=data
    }
  },
  actions: {
    getdata(context){
      try{
          console.log("19")
            axios.get("http://134.175.61.96:8085/salary?name=c")
            .then(res=>{
              context.commit('updata',res)
            })
      }
      catch{
        
      }
    }
  },
  modules: {
  }
})
