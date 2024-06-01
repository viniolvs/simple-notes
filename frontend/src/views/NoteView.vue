<template>
  <div>
    <div v-if="note">
      <div class="mb-3">
        <label for="noteTitle" class="form-label">Title</label>
        <input v-model="title" class="form-control" id="noteTitle" :placeholder="note.title">
      </div>
      <div class="mb-3">
        <label for="content" class="form-label">Content</label>
        <textarea v-model="content" class="form-control" id="content" rows="3" :placeholder="note.content"></textarea>
      </div>
      <button @click="updateNote" class="btn btn-primary">Update Note</button>
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
    const title = ref('');
    const content = ref('');

    const fetchNote = async () => {
      try {
        const response = await axios.get(`http://localhost:3000/notes/${id}`);
        note.value = response.data;
        title.value = note.value.title;
        content.value = note.value.content;
      } catch (error) {
        console.error('Error fetching note:', error);
      }
    };

    const updateNote = async () => {
      try {
        await axios.put(`http://localhost:3000/notes/${id}`, {
          title: title.value,
          content: content.value
        });
      } catch (error) {
        console.error('Error updating note:', error);
      }
    };

    onMounted(fetchNote);

    return {
      note,
      title,
      content,
      updateNote
    };
  }
};
</script>

<style scoped></style>
