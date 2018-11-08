<template>
  <v-layout
    column
    justify-center
    align-center>
    <h1>Hello</h1>
    <v-form v-model="valid">
    <v-text-field
      v-model="title"
      label="title"
      required
    ></v-text-field>
    <v-btn
      :disabled="!valid"
      @click="submit"
    >
      submit
    </v-btn>
  </v-form>
  </v-layout>
</template>

<script>
export default {
  data: () => {
    return {
      valid: true,
      title: ''
    }
  },
  methods: {
    submit() {
      // console.log(this.title)
      this.$axios.post('api/v1/test', {
        title: this.title
      })
      .then(value => console.log(value))
      .catch(err => console.error(value))
    }
  }
}
</script>

