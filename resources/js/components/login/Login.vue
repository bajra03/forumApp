<template>
  <v-form>
    <v-container>
      <v-layout row wrap>
        <v-flex xs12>
          <v-text-field label="Email" v-model="form.email" type="email" required></v-text-field>
        </v-flex>
        <v-flex xs12>
          <v-text-field
            v-model="form.password"
            :append-icon="show1 ? 'visibility_off' : 'visibility'"
            :rules="[rules.required, rules.min]"
            :type="show1 ? 'text' : 'password'"
            name="input-10-1"
            label="Password"
            hint="At least 8 characters"
            counter
            @click:append="show1 = !show1"
          ></v-text-field>
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
      show1: false,
      show2: true,
      show3: false,
      show4: false,
      password: "",
      rules: {
        required: value => !!value || "Required.",
        min: v => v.length >= 8 || "Min 8 characters",
        emailMatch: () => "The email and password you entered don't match"
      },

      form: {
        email: null,
        password: null
      }
    };
  }
};
</script>

<style>
</style>
