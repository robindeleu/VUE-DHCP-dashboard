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
      <v-card-title>{{name}}</v-card-title>
    </v-img>
    

    <v-card-text class="text--primary">
        <h3>{{type}}</h3>
        <span>Last seen on {{updatedAt}}</span>
    </v-card-text>
    <v-card-actions>
      <v-btn
        color="orange lighten-2"
        text
        @click="show = !show"
      >
        More information
      </v-btn>

      <v-spacer></v-spacer>

      <v-btn
        icon
        @click="show = !show"
      >
        <v-icon>{{ show ? 'mdi-chevron-up' : 'mdi-chevron-down' }}</v-icon>
      </v-btn>
    </v-card-actions>

    <v-expand-transition>
      <div v-show="show">
        <v-divider></v-divider>

        <v-card-text>
         <div>the type of the device: {{type}}</div>
      <v-divider />
      <div>{{description}}</div>
      <v-divider />
      <div>It's located in {{location}}</div>
      <v-divider />
      <div>Device created {{createdAt}}</div>
      <v-divider />
      <div>Last seen: {{updatedAt}}</div>
        </v-card-text>
      </div>
    </v-expand-transition>
  </v-card>
  </div>
</template>
<script>
import Defaultdeviceplaceholder from '../assets/defaultbackgrounddevice.jpg'
export default {
  name: 'Devicefull',
  props: {
    name: {
      type: String,
      default: 'Example device'
    },
    type: {
      type: String,
      default: 'Example type'
    },
    description: {
      type: String,
      default: null
    },
    location: {
      type: String,
      default: 'Brugge'
    },
    createdAt: {
      type: String,
      default: '2020-10-25'
    },
    updatedAt: {
      type: String,
      default: '2021-10-25'
    },
    image: {
      type: String,
      default: null
    },
  },
  data: () => ({
      show: false,
    }),
  computed: {
    avatar() {
      return this.image ? this.image : Defaultdeviceplaceholder;
    }}
}
</script>