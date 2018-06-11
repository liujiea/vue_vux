<template>
    <div class="rating_page">
        <p>default(默认)</p>
        <x-button>submit</x-button>
        <x-button type="primary">primary</x-button>
        <x-button type="warn">Delete</x-button>
    </div>
</template>
<script type="text/javascript">
    import XButton from './x-button.vue'
    export default {
        components: {
            XButton
        }
    }
</script>
<style type="text/css"></style>