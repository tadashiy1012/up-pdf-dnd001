<template>
    <div id="bookTable">
        <template v-for="(book, idx) in books">
            <droppable :key="idx">
                <draggable>
                    <img :src="book" />
                </draggable>
            </droppable>
        </template>
    </div>
</template>
<script>
import Draggable from './Draggable.vue';
import Droppable from './Droppable.vue';
export default {
    computed: {
        books: function() {
            return this.$store.getters.books;
        }
    },
    components: {
        Draggable, Droppable
    }
}
</script>
<style scoped>
#bookTable {
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    flex-wrap: wrap;
    width: 1200px;
}
img {
    height: 236px;
}
</style>
