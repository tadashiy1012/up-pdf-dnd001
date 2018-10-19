<template>
    <div>
        <h1>up-pdf-dnd-table001</h1>
        <upload-form />
        <book-table />
    </div>
</template>
<script>
import UploadForm from './UploadForm.vue';
import BookTable from './BookTable.vue';
export default {
    components: {
        UploadForm,
        BookTable
    }
}
</script>
