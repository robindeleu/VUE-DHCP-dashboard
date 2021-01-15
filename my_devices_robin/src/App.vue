<template>
  <v-app>
    <v-app-bar
      app
      color= primary
      dark
    ><v-app-bar-nav-icon @click.stop="drawer = !drawer"></v-app-bar-nav-icon>

      <div class="d-flex align-center" v-if="isUserLoggedIn">
        <h3>{{ username }}, welcome to the my device page</h3>
      </div>

      <v-spacer></v-spacer>

    <v-tooltip bottom>
      <template v-slot:activator="{ on, attrs }">
        <v-btn
          outlined fab small rounded color="white" @click="$router.push('/Owndevices')"
          v-bind="attrs"
          v-on="on"
        >
        <v-icon
          class="mx-2" dark outlined color="white"
          v-bind="attrs"
          v-on="on"
          @click="$router.push('/Adddevice')"
        >
          mdi-plus
        </v-icon>
        </v-btn>
      </template>
      <span>Add Device</span>
    </v-tooltip>
  
    <v-tooltip bottom>
      <template v-slot:activator="{ on, attrs }">
        <v-btn
          class="ma-2" outlined rounded  color="white" @click="$router.push('/Owndevices')"
          v-bind="attrs"
          v-on="on"
        >
          Own devices
        </v-btn>
      </template>
      <span>Show all own devices</span>
    </v-tooltip>

    <v-tooltip bottom>
      <template v-slot:activator="{ on, attrs }">
        <v-btn
          class="ma-2" outlined rounded  color="white" @click="$router.push('/register')"
          v-bind="attrs"
          v-on="on"
        >
          Register
        </v-btn>
      </template>
      <span>Go to the register page</span>
    </v-tooltip>
    
  
    </v-app-bar>

    <v-main>
      <v-navigation-drawer
      v-model="drawer"
      absolute
      bottom
      temporary
    >
      <v-list
        nav
        dense
      >
        <v-list-item-group
          v-model="group"
          active-class= secondary
        >
          <v-list-item>
            <v-list-item-icon>
            <v-icon color= secondary>mdi-account-check-outline</v-icon>
          </v-list-item-icon>
            <v-list-item-title @click="$router.push('/register')" >Register</v-list-item-title>
          </v-list-item>

          <v-list-item>
            <v-list-item-icon>
            <v-icon color= secondary>mdi-account-arrow-right-outline</v-icon>
          </v-list-item-icon>
            <v-list-item-title @click="$router.push('/loginpage')">Login</v-list-item-title>
          </v-list-item>

          <v-list-item>
            <v-list-item-icon>
            <v-icon color= secondary>mdi-devices</v-icon>
          </v-list-item-icon>
            <v-list-item-title @click="$router.push('/')">Devices</v-list-item-title>
          </v-list-item>

          <v-list-item>
            <v-list-item-icon>
            <v-icon color= secondary>mdi-devices</v-icon>
          </v-list-item-icon>
            <v-list-item-title @click="$router.push('/Owndevices')">Own Devices</v-list-item-title>
          </v-list-item>

          <v-list-item>
            <v-list-item-icon>
            <v-icon color= secondary>mdi-plus</v-icon>
          </v-list-item-icon>
            <v-list-item-title @click="$router.push('/Adddevice')">Add device</v-list-item-title>
          </v-list-item>

          <v-list-item>
            <v-list-item-icon>
            <v-icon color= secondary>mdi-account-arrow-left-outline</v-icon>
          </v-list-item-icon>
            <v-list-item-title @click="logout">Logout</v-list-item-title>
          </v-list-item>
        </v-list-item-group>
      </v-list>
    </v-navigation-drawer>
      <v-row justify="center">
        <v-col cols="9">
      <router-view></router-view>
        </v-col>
      </v-row>
    </v-main>
  </v-app>
</template>

<script>

import AuthenticationService from "./api/AuthenticationService";
export default {
  name: 'App',

  components: {
  },

  data: () => ({
    drawer: false,
      group: null,
    //
  })
  ,watch: {
      group () {
        this.drawer = false
      },
    },
computed: {
  username() {
    let user = this.$store.getters.getUser;
    return `${user.firstname} ${user.lastname}`
  },
  isUserLoggedIn() {
    return !!this.$store.getters.getUser.id
  }
},
  methods: {
    async logout() {
      console.log("Logging out user ...");

      try {
        await AuthenticationService.logout();
        console.log("User succesfully logged out");
        console.log("TRY in logout async methode");
        // Clear user in store
        // this.$store.dispatch("logout");
      } catch (error) {
        console.log("Logout failed");
        console.log("Catch in logout async methode");
        console.log(error);
        
      }finally{
        // Clear user in store
        console.log("finally word uitgevoerd");
        this.$store.dispatch("logout");
        this.$router.push('/loginpage')
      }
    }
  }
};
</script>
