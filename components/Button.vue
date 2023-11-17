<script lang="ts" setup>

defineProps({
    title: {
        type: String,
        required: true
    },
    url: {
        type: String,
        required: true
    },
    icon: {
        type: Object,
        required: false,
    }
})
</script>
<template>
    <a :href="url" target="_blank" class="drop-shadow btn btn-wide indicator hover:ring-2 hover:ring-offset-base-200 hover:ring-offset-2 hover:ring-info">
        <span v-if="icon" class="indicator-item badge left-6 indicator-start indicator-middle badge-accent w-12 h-12 border-0 bg-transparent">
            <component :is="icon"/>
        </span> 
        <span>{{title}}</span>
    </a>
</template>
<style scoped>
.btn-w-icon {
  display: grid;
  grid-template-columns: 1.5rem 1fr;
  span {
    margin-left: -1.5rem;
  }
}
</style>