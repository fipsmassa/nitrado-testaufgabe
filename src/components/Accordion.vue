<script lang="ts">
import { ref, defineComponent } from 'vue'

interface AccordionItem {
  title: string
  content: string
}

export default defineComponent({
  props: {
    items: {
      type: Array as () => AccordionItem[],
      required: true
    }
  },
  setup(props) {
    const activeItem = ref<number | null>(null)

    const toggleItem = (index: number) => {
      if (activeItem.value === index) {
        activeItem.value = null
      } else {
        activeItem.value = index
      }
    }

    return {
      activeItem,
      toggleItem
    }
  }
})
</script>

<template>
  <div class="accordion">
    <div
      v-for="(item, index) in items"
      :key="index"
      class="accordion-item"
      :class="{ active: activeItem === index, inactive: activeItem !== index }"
    >
      <div class="accordion-header" @click="toggleItem(index)">
        {{ item.title }}
      </div>
      <div
        class="accordion-content"
        v-show="activeItem === index"
        :class="{ active: activeItem === index, inactive: activeItem !== index }"
      >
        {{ item.content }}
      </div>
    </div>
  </div>
</template>

<style>
.accordion {
  margin-bottom: 2em;
  border-radius: 20px;
  background: #fff;
  color: black;
  width: 100%;
}

.accordion-item:nth-of-type(1),
.accordion-item:nth-of-type(2) {
  border-bottom: 1px solid black;
}

.accordion-item.active .accordion-header {
  background-color: rgba(255, 47, 0, 0.9);
  color: #fff;
}

.accordion-header {
  padding: 1em;
  cursor: pointer;
  transition: all 0.5s ease-out;
  position: relative;
}

.accordion-header:after {
  content: '';
  position: absolute;
  height: 10px;
  width: 10px;
  top: 0;
  bottom: 0;
  margin: auto;
  right: 1em;
  border-right: 3px solid black;
  border-bottom: 3px solid black;
  transform: rotate(45deg);
  transition: transform 0.25s ease-out;
}

.accordion-item.active .accordion-header:after {
  border-right: 3px solid white;
  border-bottom: 3px solid white;
  transform: rotate(-135deg);
  top: 0.5em;
}

.accordion-icon.open {
  transform: rotate(180deg);
}

.accordion-content {
  padding: 1em;
  overflow: hidden;
  transition: all 1s ease-out;
}

.accordion-content.active {
  max-height: 300px;
  transition: all 0.5s ease-out;
}
</style>
