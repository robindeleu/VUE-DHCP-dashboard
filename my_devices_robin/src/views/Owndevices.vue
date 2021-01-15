<template>
  <div class="about">
  <v-row justify="center">
        <v-col cols="12" md="6" lg="4">
 <Devicefullapiown 
            :uid= id[0]
  />
        </v-col>
  <v-col cols="12" md="6" lg="4">
  <Devicefullapiown 
            :uid= id[1]
  />
        </v-col>
        <v-col cols="12" md="6" lg="4">
 <Devicefullapiown 
            :uid= id[2]
  />
        </v-col>
  <v-col cols="12" md="6" lg="4">
  <Devicefullapiown 
            :uid= id[3]
  />
        </v-col>
        <v-col cols="12" md="6" lg="4">
 <Devicefullapiown 
            :uid= id[4]
  />
        </v-col>
  <v-col cols="12" md="6" lg="4">
  <Devicefullapiown 
            :uid= id[5]
  />
        </v-col>
        <v-col cols="12" md="6" lg="4">
 <Devicefullapiown 
            :uid= id[6]
  />
        </v-col>
  <v-col cols="12" md="6" lg="4">
  <Devicefullapiown 
            :uid= id[7]
  />
        </v-col>
        <v-col cols="12" md="6" lg="4">
 <Devicefullapiown 
            :uid= id[8]
  />
        </v-col>
  </v-row>
  </div>
</template>
<script>
//import Devicefull from '../components/Devicefull'
import Devicefullapiown from '../components/Devicefullapiown';
import Deviceid from '../api/device';
export default {
  name: 'Owndevices.',
  components: {
    Devicefullapiown
  },
//   created() {
//     console.log("Loading deviceinfo via API ...");
//       this.fetch();
//   },
computed: {
    getDevices() {
      return this.deviceinfo;
    }},
methods:{
    fetch(){
    console.log("Fetching deviceinfo ....");
    this.loading = true;
    Deviceid.getDevice().then(response => {
        console.log(response);
        this.deviceinfo = response.data;
        
        this.loading = false;
      }).catch(e => {
        this.error = e;
        console.log(e);
      })}
    
    },
  data: () => ({
    deviceinfo: {},
    loading: false,
    error: null,
    id: ["1","2","3","4","5","6","7","8","9","10","11","12","13","14","15","16","17","18","19","20"],
  }),
}
</script>