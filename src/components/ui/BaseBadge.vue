<template>
  <span :class="['base-badge', `base-badge-${type}`]">
    <slot></slot>
  </span>
</template>

<script>
export default {
  name: 'BaseBadge',
  props: {
    type: {
      type: String,
      default: 'default', // Default badge type
      validator: value =>
        ['default', 'primary', 'success', 'warning', 'error'].includes(value),
    },
  },
};
</script>

<style scoped>
.base-badge {
  display: inline-block;
  padding: 0.25rem 0.5rem;
  font-size: 1rem;
  font-weight: bold;
  text-transform: uppercase;
  border-radius: 0.25rem;
}

.base-badge-default {
  background-color: #e0e0e0;
  color: #333;
}

.base-badge-primary {
  background-color: #2196f3;
  color: #fff;
}

.base-badge-success {
  background-color: #4caf50;
  color: #fff;
}

.base-badge-warning {
  background-color: #ff9800;
  color: #fff;
}

.base-badge-error {
  background-color: #f44336;
  color: #fff;
}
</style>
