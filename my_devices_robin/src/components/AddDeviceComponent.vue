<template>
  <div class="about">
    <v-card
    class="mx-auto"
    max-width="400"
  >
  <v-img
      class="white--text align-end"
      height="200px"
      :src="avatar"    >
      <v-card-title >ip: {{ipaddres}}, mac: {{macaddres}}</v-card-title>
    </v-img>
    <div class="text-center ma-3">
      <v-text-field
        single-line v-model="devicename" label="Device name" clearable
        ></v-text-field>
      <v-text-field
        single-line v-model="devicetype" label="Type" clearable
      ></v-text-field>
      <v-text-field
        single-line v-model="description" label="Description" clearable
        ></v-text-field>
      <v-text-field
        single-line v-model="location" label="Location" clearable
      ></v-text-field>
      <v-text-field
        single-line v-model="ImageUrl" label="ImageUrl" clearable
      ></v-text-field>
          
      </div>
      <div class="text-center ma-3">
        <v-col>
           <v-btn
          elevation="2"
          raised
          rounded
          color= primary
          @click="add"
        >
        Add</v-btn>
        </v-col>
     
      </div>
  </v-card>
  </div>
</template>
<script>
import Defaultdeviceplaceholder from '../assets/defaultbackgrounddevice.jpg';
import Postmethode from '../api/device';
export default {
  name: 'AddDevice',
  props: {
     uid: {
      type: Number
    },
    ipaddres: {
      type: String
    },
    macaddres: {
      type: String
    },
  },
  computed: {
    avatar() {
      return this.image ? this.image : Defaultdeviceplaceholder;
    }},
  data: () => ({
    devicename: '',
    devicetype: '',
    description: '',
    location: '',
    ImageUrl:'',
    defaultpicture:'https://makitweb.com/demo/broken_image/images/noimage.png',
    searchdevicename: '',
    searchdevicetype: '',
    searchdescription: '',
    searchlocation: '',
    searchImageUrl: '',
    device: '',
    show: true
  }),
  methods: {
    add(){
      this.searchdevicename = this.devicename
      this.searchdevicetype = this.devicetype
      this.searchdescription = this.description
      this.searchlocation = this.location
      this.searchImageUrl = this.ImageUrl
      this.device = {
          "name": this.searchdevicename,
          "type": this.searchdevicetype,
          "description": this.searchdescription,
          "location": this.searchlocation,
          "image": this.searchImageUrl,
          "interfaces": [
                  { "mac": this.macaddres }
          ]}
      console.log(this.device)
      // this.device = JSON.stringify(this.device)
      Postmethode.sendOrphaned(this.device);
      console.log(this.device);
      this.$router.push('/');
      this.show = false;
    }
  }
}
</script>