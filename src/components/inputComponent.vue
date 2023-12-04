<template>
   <div class="max-w-md mx-auto rounded-md overflow-hidden p-2">
    <label :for="label" class="block text-slate-300 text-sm font-bold mb-2">{{ label }}</label>
    <input
        :type="type"
        :id="label"
        :name="label"
        class="w-full px-3 py-2 border border-slate-300 bg-slate-700 text-slate-300 rounded-md focus:outline-none focus:border-slate-500"
        :placeholder="placeholder">
</div>
</template>

<script>
export default {
    name: 'inputComponent',
    props: {
        label: {
            default: '',
            required: true,
            type: String
        },
        value: {
            default: '',
            required: false,
            type: String
        },
        placeholder: {
            default: '',
            required: false,
            type: String
        },
        type: {
            default: 'text',
            required: false,
            type: String
        }
    }
}

</script>