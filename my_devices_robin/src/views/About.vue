<template>
  <div class="about">
      <v-row>
        <v-col 
           cols="12" md="6" lg="4"
           v-for="item in devicelistalldevices" :key="item.id"
        >
        <Devicefullapi 
            :uid= item.id
  />
        </v-col>
      </v-row>

  </div>
</template>
<script>
//import Devicefull from '../components/Devicefull'
import Devicefullapi from '../components/Devicefullapi'
import Deviceid from '../api/device';
export default {
  name: 'About',
  components: {
    //Devicefull,
    Devicefullapi
  },
    created() {
    console.log("Loading device list via API ...");
      this.fetch();
  },
    computed: {
      getDevicelistrendering(){
          return this.devicelistalldevices;
      }
  },
  methods:{
      fetch(){
    console.log("Fetching all devices ....");
    console.log();
    this.loading = true;
    Deviceid.getDevicelist().then(response => {
        console.log(response);
        this.devicelistalldevices = response.data;
      }).catch(e => {
        this.error = e;
        console.log(e);
      })}
  },

  data: () => ({
      devicelistalldevices: [], 
    deviceinfo: {},
    loading: false,
    error: null,
    id: ["1","2","3","4","5","6","7","8","9","10","11","12","13","14","15","16","17","18","19","20"],
    items: [
          {a: 1},
          {a: 1},
          {a: 1},
          {a: 1},
          {a: 1},
          {a: 1},
          {a: 1},
          {a: 1},
          {a: 1},
          {a: 1},
          {a: 1},
          {a: 1},
          {a: 1},
          {a: 1},
          {a: 1},
          {a: 1},
          {a: 1},
          

    ],
  }),
}
</script>