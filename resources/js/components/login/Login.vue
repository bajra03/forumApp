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
        <router-link to="/signup">
          <v-btn color="blue">Sign Up</v-btn>
        </router-link>
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

  created() {
    if (User.loggedIn()) {
      this.$router.push({ name: "forum" });
    }
  },

  methods: {
    login() {
      User.login(this.form);
    }
  }
};
</script>

<style>
</style>
