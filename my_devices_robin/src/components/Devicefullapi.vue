<template>
  <div class="about" v-if="loading == false">
    <v-card
    class="mx-auto"
    max-width="400"
  >
    <v-img
      class="white--text align-end"
      height="200px"
      :src="avatar"    >
      <v-row justify="center">
        <v-avatar size="100">
        <img
          :src= deviceinfo.image
        >
      </v-avatar>
      </v-row>
      <v-card-title v-if="deviceinfo.name" >{{deviceinfo.name}}</v-card-title>
    </v-img>
    

    <v-card-text class="text--primary">
        <h3 v-if="deviceinfo.type">{{deviceinfo.type}}</h3>
        <span v-if="deviceinfo.updatedAt">Last seen on {{deviceinfo.updatedAt}}</span>
    </v-card-text>
    <v-card-actions>

      <v-btn v-if="!deviceinfo.User"
        color= secondary
        text
        @click="claim"
      >
        Claim
      </v-btn>
      <v-btn v-if="deviceinfo.User"
        color= secondary
        text
        @click="release"
      >
        Release
      </v-btn>

      <v-spacer></v-spacer>

      <v-btn
        icon
        @click="show = !show"
      >
        <v-icon color= secondary>{{ show ? 'mdi-chevron-up' : 'mdi-chevron-down' }}</v-icon>
      </v-btn>
    </v-card-actions>

    <v-expand-transition>
      <div v-show="show">
        <v-divider></v-divider>

        <v-card-text>
      <div v-if="deviceinfo.type">The type of the device: {{deviceinfo.type}}</div>
      <v-divider />
      <div v-if="deviceinfo.description">{{deviceinfo.description}}</div>
      <v-divider />
      <div v-if="deviceinfo.location">It's located in {{deviceinfo.location}}</div>
      <v-divider />
      
      <div v-if="deviceinfo.createdAt">Device created: {{deviceinfo.createdAt}}</div>
      <v-divider />
      <div v-if="deviceinfo.updatedAt">Last seen: {{deviceinfo.updatedAt}}</div>
      <v-divider v-if="deviceinfo.User" />
      <div v-if="deviceinfo.User">Claimed by: {{deviceinfo.User.firstname}} {{deviceinfo.User.lastname}}</div>
        </v-card-text>
      </div>
    </v-expand-transition>
    
    <v-overlay :value="loading" absolute>
      <v-progress-circular
        indeterminate
        color= primary
        size="64"
      ></v-progress-circular>
    </v-overlay>
  </v-card>
  </div>
</template>
<script>
// <div v-if="deviceinfo.IPReports[0].ip">IP address: {{deviceinfo.IPReports[0].ip}}</div>
//       <v-divider />
//       <div v-if="deviceinfo.IPReports[0].mac">MAC address: {{deviceinfo.IPReports[0].mac}}</div>
//       <v-divider />
import Deviceid from '../api/device';
import Deviceclaim from '../api/claimdevice';
import Devicerelease from '../api/releasedevice';
import Defaultdeviceplaceholder from '../assets/defaultbackgrounddevice.jpg';
export default {
  name: 'Devicefullapi',
  props: {
     uid: {
      type: Number
    }
  },
  created() {
    console.log("Loading deviceinfo via API ...");
      this.fetch();
  },
  data: () => ({
      deviceinfo: {
      name: 'Example device',
      type: 'Example type',
      description: null,
      location: 'Brugge',
      createdAt: '2020-10-25',
      updatedAt: '2021-10-25',
      image: Defaultdeviceplaceholder,
      User: {
        id: "1",
        firstname: null,
        lastname: null
      }
    },
      loading: false,
      show: false,
    }),
computed: {
    avatar() {
      return Defaultdeviceplaceholder;
    }},
   methods:{

    release(){
    console.log("Release device with id: " + this.uid);
    console.log(this.uid);
    Devicerelease.patchRelease(this.uid).then(response => {
        console.log(response);
      }).catch(e => {
        this.error = e;
        console.log(e);
      })
      location.reload();},


    claim(){
    console.log("Claiming device with id: " + this.uid);
    console.log(this.uid);
    Deviceclaim.patchClaim(this.uid).then(response => {
        console.log(response);
      }).catch(e => {
        this.error = e;
        console.log(e);
      })
      location.reload();},


    fetch(){
    console.log("Fetching deviceinfo ....");
    console.log(this.uid);
    this.loading = true;
    Deviceid.getDevice(this.uid).then(response => {
        console.log(response);
        this.deviceinfo = response.data;
        this.loading = false;
      }).catch(e => {
        this.error = e;
        console.log(e);
      })}
    
    }
}
</script>