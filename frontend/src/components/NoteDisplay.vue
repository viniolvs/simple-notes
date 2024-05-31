<script>
import axios from 'axios';
import { useRouter } from 'vue-router';

export default {
  props: {
    note: Object,
    refreshNotes: Function
  },
  setup(props) {
    const router = useRouter();
    const deleteNote = async () => {
      try {
        await axios.delete(`http://localhost:3000/notes/${props.note._id}`);
        props.refreshNotes();
      } catch (error) {
        console.error('Error deleting note:', error.response.data);
      }
    }
    const redirectToNoteView = () => {
      console.log("Redirecting to Note View");
      router.push({ name: 'Note', params: { id: props.note._id } });
    };
    return {
      props,
      deleteNote,
      redirectToNoteView
    }
  }
}
</script>

<template>
  <div class="note-card">
    <div @click="redirectToNoteView">
      <h1>{{ props.note.title }}</h1>
      <p>{{ props.note.createdAt }}</p>
    </div>
    <button class="btn btn-danger" @click="deleteNote">Delete</button>
  </div>
</template>

<style scoped>
.note-card {
  cursor: pointer;
}
</style>
