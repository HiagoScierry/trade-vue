<template>
    <div class="flex flex-col mb-2">
        <label class="text-sm font-bold text-slate-300 mb-2 tracking-wide">{{ label }}</label>
        <div class="relative">
            <select
                :value="value"
                @change="changeValue"
                :disabled="disabled"
                :required="required"
                class="block appearance-none w-full bg-slate-500 border border-slate-300 hover:border-slate-400 px-4 py-2 pr-8 rounded shadow leading-tight focus:outline-none focus:shadow-outline"
            >
                <option value="" disabled>{{ placeholder }}</option>
                <option v-for="option in options" :key="option.value" :value="option.value">
                    {{ option.text }}
                </option>
            </select>
            <div class="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-slate-700">
                <svg
                    class="fill-current h-4 w-4"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                >
                    <path
                        d="M14.706 7.706a1 1 0 00-1.414-1.414L10 9.586 6.707 6.293a1 1 0 00-1.414 1.414l4 4a1 1 0 001.414 0l4-4z"
                    />
                </svg>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'selectComponent',
    props: {
        options: {
            type: Array,
            required: true
        },
        value: {
            type: String,
            required: true
        },
        label: {
            type: String,
            required: true
        },
        placeholder: {
            type: String,
            required: false
        },
    },
    methods: {
        changeValue(event) {
            this.$emit('input', event.target.value)
        }
    }
}
</script>