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
  <pre>{{ data }}</pre>
  </v-layout>
</template>

<script>
export default {
  mounted(){
    return this.$axios.$get('api/v1/test')
      .then(value => {
        console.log(value)
        this.data = value.test
      })
      .catch(err => console.log(err))
  },
  data: () => {
    return {
      valid: true,
      title: '',
      data: ''
    }
  },
  methods: {
    submit() {
      this.$axios.$post('api/v1/test', {
        title: this.title
      })
      .then(value => console.log(value))
      .catch(err => console.error(value))
    }
  }
}
</script>

