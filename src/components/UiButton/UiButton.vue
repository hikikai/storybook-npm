<template>
  <button :class="$style.button" :data-layout="props.layout" :disabled="props.isDisabled" :type="props.type">
    <slot></slot>
  </button>
</template>

<script setup lang="ts">
interface IProps {
  layout?: 'primary' | 'secondary' | 'nightMode';
  type?: 'submit' | 'button';
  isDisabled?: boolean;
}

const props = withDefaults(defineProps<IProps>(), {
  layout: 'primary',
  type: 'button',
});
</script>

<style module lang="scss">
.button {
  position: relative;
  display: inline-flex;
  gap: 8px;
  align-items: center;
  justify-content: center;
  height: 40px;
  padding: 16px 32px;
  font-size: 1rem;
  line-height: 1.5;
  color: var(--color-white);
  background: var(--color-primary);
  border-radius: 16px;

  &[data-layout='secondary'] {
    color: var(--color-primary);
    background-color: var(--color-transparent);
    border-color: var(--color-primary);
    cursor:grab;
  }

  &[data-layout='nightMode'] {
    color: rgb(0, 0, 0);
    background-color: gray;
    border-color: black;
    margin-left: 10px;
    cursor: pointer;
  }
}
</style>
