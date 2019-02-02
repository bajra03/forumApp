<template>
  <v-form @submit.prevent="login">
    <v-container>
      <v-layout row wrap>
        <v-flex xs12>
          <v-text-field label="Email" v-model="form.email" type="email" required></v-text-field>
        </v-flex>
        <v-flex xs12>
          <v-text-field v-model="form.password" label="Password" type="password" required></v-text-field>
        </v-flex>
        <v-btn type="submit">Login</v-btn>
      </v-layout>
    </v-container>
  </v-form>
</template>

<script>
export default {
  data() {
    return {
      form: {
        email: null,
        password: null
      }
    };
  },

  methods: {
    login() {
      User.login(this.form);
      // User.login(this.form);
      // checking there is an error or not
      // axios
      //   .post("/api/auth/login", this.form)
      //   .then(res => {
      //     console.log(res.data);
      //   })
      //   .catch(error => console.log(error.response.data));
    }
  }
};
</script>

<style>
</style>
