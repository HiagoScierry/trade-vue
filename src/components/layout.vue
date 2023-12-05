<template>
    <div :class="{'overflow-hidden': openModal}" >
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