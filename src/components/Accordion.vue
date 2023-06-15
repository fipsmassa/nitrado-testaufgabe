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
      class="accordion_item"
      :class="{ active: activeItem === index, inactive: activeItem !== index }"
    >
      <div class="accordion_header" @click="toggleItem(index)">
        {{ item.title }}
      </div>
      <div
        class="accordion_content"
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
  color: white;
  width: 75%;
}

.accordion_item:nth-of-type(2),
.accordion_item:nth-of-type(3) {
  border-top: 1px solid white;
}

.accordion_item:nth-of-type(2).active,
.accordion_item:nth-of-type(3).active {
  border-top: 1px solid transparent;
}

.accordion_item.active .accordion_header {
  background-color: rgba(255, 47, 0, 0.9);
  color: #fff;
  border-radius: 10px;
}

.accordion_header {
  padding: 1em 1em 1em 3em;
  cursor: pointer;
  transition: all 0.5s ease-out;
  position: relative;
}

.accordion_header:after {
  content: '';
  position: absolute;
  height: 10px;
  width: 10px;
  top: 0;
  bottom: 0;
  margin: auto;
  left: 1em;
  border-right: 3px solid white;
  border-bottom: 3px solid white;
  transform: rotate(-45deg);
  transition: transform 0.5s ease-out;
}

.accordion_item.active .accordion_header:after {
  transform: rotate(45deg);
}

.accordion-icon.open {
  transform: rotate(180deg);
}

.accordion_content {
  padding: 1em;
  overflow: hidden;
  transition: all 1s ease-out;
}

.accordion_content.active {
  max-height: 300px;
  transition: all 0.5s ease-out;
}
</style>
