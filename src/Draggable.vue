<template>
    <div draggable="true" class="draggable">
        <span><slot /></span>
    </div>
</template>
<script>
export default {
}
</script>
<style scoped>
.draggable > span {
    pointer-events: none;
}
</style>
