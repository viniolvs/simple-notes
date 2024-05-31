<template>
  <div>
    <div v-if="note">
      <h1>{{ note.title }}</h1>
      <p>{{ note.content }}</p>
      <small>{{ note.createdAt }}</small>
    </div>
    <div v-else>
      <p>Loading...</p>
    </div>
  </div>
</template>

<script>
import axios from 'axios';
import { ref, onMounted } from 'vue';
import { useRoute } from 'vue-router';

export default {
  setup() {
    const route = useRoute();
    const id = route.params.id;
    const note = ref(null);

    const fetchNote = async () => {
      try {
        const response = await axios.get(`http://localhost:3000/notes/${id}`);
        note.value = response.data;
        console.log(note.value);
      } catch (error) {
        console.error('Error fetching note:', error);
      }
    };

    onMounted(fetchNote);

    return {
      note
    };
  }
};
</script>

<style scoped></style>
