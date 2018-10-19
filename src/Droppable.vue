<template>
    <div class="droppable"
        v-on:dragstart="start"
        v-on:dragover="over"
        v-on:dragleave="leave"
        v-on:drop="drop"
    ><slot /></div>
</template>
<script>
let tgt = null;
export default {
    methods: {
        start: (ev) => {
            console.log(ev.target);
            tgt = ev.target;
            ev.dataTransfer.setData('tgt', tgt.innerHTML);
        },
        over: (ev) => {
            ev.preventDefault();
            ev.dataTransfer.dropEffect = 'move';
        },
        leave: (ev) => {
            ev.preventDefault();
        },
        drop: (ev) => {
            ev.stopPropagation();
            tgt.innerHTML = ev.target.innerHTML;
            ev.target.innerHTML = ev.dataTransfer.getData('tgt');
        }
    }
}
</script>
<style>
.droppable {
    margin: 8px;
    border: solid 1px darkgray;
}
</style>
