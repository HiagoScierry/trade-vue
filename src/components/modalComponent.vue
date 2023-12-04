<template>
    <div
        class="modal fixed inset-0 z-50 overflow-auto bg-black bg-opacity-50  flex items-center justify-center h-screen w-screen"
        v-if="show"
    >
        <div class="modal-content shadow-md rounded p-6">
            <slot></slot>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'modalComponent',
        props: {
            show: {
                type: Boolean,
                required: true,
                default: false
            }
        },
    }
</script>