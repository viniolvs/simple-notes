<script>
import { ref, onMounted } from 'vue';
import axios from 'axios';
import NoteDisplay from '../components/NoteDisplay.vue';

export default {
  components: {
    NoteDisplay
  },
  setup() {
    const notes = ref([]);

    const fetchNotes = async () => {
      try {
        const response = await axios.get('http://localhost:3000/notes');
        notes.value = response.data;
      } catch (error) {
        console.error('Error fetching notes:', error);
      }
    };

    onMounted(fetchNotes);

    return {
      notes
    };
  }
}
</script>

<template>
  <div>
    <div v-if="notes.length">
      <NoteDisplay v-for="note in notes" :key="note.id" :note="note" />
    </div>
    <div v-else>
      <p>No notes available</p>
    </div>
  </div>
</template>

<style scoped></style>
