<template>
          <v-card class="rounded-t-xl">
        <v-toolbar-title class="text-center ma-3">
        <h2>Hello, please login</h2>
      </v-toolbar-title>
      <div class="text-center ma-3">
      <v-text-field
        prepend-icon="mdi-email" single-line v-model="email" label="Email" :rules="emailRules" required 
        ></v-text-field>
      <v-text-field
        prepend-icon="mdi-wrench" single-line v-model="password" label="Password" :rules="passwordRules" required :type="show ? 'text' : 'password'"
        :append-icon="show ? 'mdi-eye' : 'mdi-eye-off'" @click:append="show = !show"
      ></v-text-field>
          
      </div>
      <div class="text-center ma-3">
        <v-col>
           <v-btn
          elevation="2"
          raised
          rounded
          color= primary
          @click="login"
        >
        Login</v-btn>
        </v-col>
     
      </div>        
      </v-card>
</template>

<script>
import AuthenticationService from "../api/AuthenticationService";
import Crypto from "crypto";
export default {
  name: 'Login',

  components: {
  },

  data: function() {
    return {
      valid: false,
      show: false,
      email: '',
      password: '',

      emailRules: [
        v => !!v || 'E-mail is required',
        v => /.+@.+/.test(v) || 'E-mail must be valid',
      ],
      passwordRules: [
        v => !!v || 'Password is required',
        v => v.length >= 12 || 'Password must be more than 12 characters',
      ],
    }
  },
  methods: {
    async login() {
      console.log("...Trying to login ....")
      try {
        const response = await AuthenticationService.login({
          email: this.email,
          password: Crypto.createHash("sha256").update(this.password).digest("hex"),
        });
        console.log("dit komt uit de login methode van de component")
        console.log(response);
        this.$store.dispatch("login", response.data);
        this.$router.push('/');

      } catch (error) {
        console.log("Login failed");
        console.log(error);
      }
    },
  }
};
</script>
