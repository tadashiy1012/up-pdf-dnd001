<template>
    <form v-on:submit="onSubmit">
        <input type="file" name="upload" id="inFile" />
        <input type="submit" value="send" />
    </form>
</template>
<script>
import pdfjs from 'pdfjs-dist';
export default {
    methods: {
        onSubmit: function(ev) {
            ev.preventDefault();
            console.log(ev);
            const fr = new FileReader();
            fr.addEventListener('load', (ev) => {
                const buf = ev.target.result;
                (async() => {
                    const pdf = await pdfjs.getDocument(new Uint8Array(buf));
                    const page = await pdf.getPage(1);
                    const canvas = document.createElement('canvas');
                    const ctx = canvas.getContext('2d');
                    const viewport = page.getViewport(0.3);
                    canvas.height = viewport.height;
                    canvas.width = viewport.width;
                    const result = await page.render({
                        canvasContext: ctx,
                        viewport: viewport
                    });
                    const url = canvas.toDataURL('image/png');
                    this.$store.dispatch('addBook', {book: url});
                })();
            });
            const fd = new FormData(ev.target);
            const file = fd.get('upload');
            fr.readAsArrayBuffer(file);
        }
    }
}
</script>
