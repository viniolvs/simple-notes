<template>
  <div>
    <div class="mb-3">
      <label for="noteTitle" class="form-label">Note Title</label>
      <input v-model="title" class="form-control" id="noteTitle" placeholder="Title">
    </div>
    <div class="mb-3">
      <label for="content" class="form-label">Note Content</label>
      <textarea v-model="content" class="form-control" id="content" rows="3"></textarea>
    </div>
    <button @click="postNote" class="btn btn-primary">Add Note</button>
  </div>
</template>

<script>
import axios from 'axios';
import { ref, onMounted } from 'vue';

export default {
  setup() {
    const title = ref('');
    const content = ref('');
    const note = ref({});

    const postNote = async () => {
      if (!title.value || !content.value) {
        alert('Title and content are required');
        return;
      }
      try {
        const response = await axios.post('http://localhost:3000/notes', {
          title: title.value,
          content: content.value
        });
        note.value = response.data;
        console.log(note.value);
      } catch (error) {
        console.error('Error creating note:', error.response.data);
      }
    };
    return {
      title,
      content,
      note,
      postNote
    };
  }
}
</script>
