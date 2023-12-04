<template>
    <div :class="{'overflow-hidden': openModal}" class="bg-slate-700 text-white w-screen h-screen">
        <slot></slot>
    </div>
</template>

<script>
    export default {
        name: 'LayoutComponent',
        props: {
            openModal: {
                default: false,
                type: Boolean
            }
        }
    };
</script>