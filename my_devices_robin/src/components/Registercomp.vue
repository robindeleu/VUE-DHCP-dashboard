<template>
          <v-card class="rounded-t-xl">
        <v-toolbar-title class="text-center ma-3">
        <h2>Hello, please register</h2>
      </v-toolbar-title>
      <div class="text-center ma-3">
      <v-text-field
        prepend-icon="mdi-account" v-model="firstname" label="First name" :rules="nameRules" required

      ></v-text-field>
       <v-text-field
         prepend-icon="mdi-account" v-model="lastname" label="Last name" :rules="nameRules" required
      ></v-text-field>
      <v-text-field
        prepend-icon="mdi-email" v-model="email" label="Email" :rules="emailRules" required
      ></v-text-field>
      <v-text-field
        prepend-icon="mdi-wrench" v-model="password" label="Password" :rules="passwordRules"  required
        :type="show ? 'text' : 'password'"
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
          @click="register"
        >
        Register</v-btn>

        </v-col>
     
      </div>        
      </v-card>
</template>

<script>

import AuthenticationService from "../api/AuthenticationService";
import Crypto from "crypto";
export default {
  name: 'Registercomp',

  components: {
  },

  data: function() {
    return {
      valid: false,
      show: false,
      firstname: '',
      lastname: '',
      email: '',
      password: '',

      nameRules: [
        v => !!v || 'Name is required',
        v => v.length <= 10 || 'Name must be less than 10 characters',
      ],
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
async register() {
  console.log("Trying to register user ...");

  try {
    const response = await AuthenticationService.register({
      firstname: this.firstname,
      lastname: this.lastname,
      email: this.email,
      password: Crypto.createHash("sha256").update(this.password).digest("hex"),
    });

    console.log("User succesfully registered");
    console.log(response);

    // Save user in store
    this.$store.dispatch("login", response.data);
    this.$router.push('/loginpage');
  } catch (error) {
    console.log("Register failed");
    console.log(error);
  }
}
  }
};
</script>
