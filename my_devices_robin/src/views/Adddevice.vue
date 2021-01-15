<template>
  <div class="about">
  <v-row justify="center">
      <v-col cols="12" md="6" lg="4"
       v-for="item in ipresponse" :key="item.id">
 <AddDevicecomp
            :uid= item.id
            :ipaddres = item.ip
            :macaddres = item.mac
  />
        </v-col>
  </v-row>
  </div>
</template>
<script>
//import Devicefull from '../components/Devicefull'
import Deviceid from '../api/device';
import AddDevicecomp from '../components/AddDeviceComponent'
export default {
  name: 'AddDevice',
  components: {
        AddDevicecomp
  },
  
  created() {
    console.log("Loading ip reports via API ...");
      this.fetch();
  },
  computed: {
      getIpreports(){
          return this.ipresponse;
      }
  },
 methods:{
    fetch(){
    console.log("Fetching unclaimed ip reports ....");
    Deviceid.getOrphaned().then(response => {
        console.log(response);
        this.ipresponse = response.data;
        console.log(this.ipresponse);
      }).catch(e => {
        this.error = e;
        console.log(e);
      })}
    
    },

  data: () => ({
    ipresponse: [],
    loading: false,
    error: null,    
  }),
}
</script>