<script>
export default {
  props: {
    note: Object
  },
  setup(props) {
    console.log(props)
    return {
      props
    }
  }
}
</script>

<template>
  <div>
    <h1>{{ props.note.title }}</h1>
    <p>{{ props.note.content }}</p>
    <small>{{ props.note.createdAt }}</small>
  </div>
</template>

<style scoped></style>
