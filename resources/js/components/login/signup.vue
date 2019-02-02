<template>
  <v-form @submit.prevent="signup">
    <v-container>
      <v-layout row wrap>
        <v-flex xs12>
          <v-text-field label="Name" v-model="form.name" type="text" required></v-text-field>
          <span class="red--text" v-if="errors.name">{{ errors.name[0] }}</span>
        </v-flex>

        <v-flex xs12>
          <v-text-field label="Email" v-model="form.email" type="email" required></v-text-field>
          <span class="red--text" v-if="errors.email">{{ errors.email[0] }}</span>
        </v-flex>

        <v-flex xs12>
          <v-text-field v-model="form.password" label="Password" type="password" required></v-text-field>
          <span class="red--text" v-if="errors.password">{{ errors.password[0] }}</span>
        </v-flex>

        <v-flex xs12>
          <v-text-field
            v-model="form.password_confirm"
            label="Confirm Password"
            type="password"
            required
          ></v-text-field>
        </v-flex>
        <v-btn type="submit">Sign Up</v-btn>
        <router-link to="/login">
          <v-btn color="blue">Login</v-btn>
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
        name: null,
        email: null,
        password: null,
        password_confirm: null
      },
      errors: {}
    };
  },
  methods: {
    signup() {
      axios
        .post("/api/auth/signup", this.form)
        .then(res => User.responseAfterLogin(res))
        .catch(error => (this.errors = error.response.data.errors));
    }
  }
};
</script>

<style>
</style>
