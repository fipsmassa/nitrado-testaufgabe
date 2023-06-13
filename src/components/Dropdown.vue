<template>
  <div class="dropdown">
    <button class="dropdown-toggle" @click="toggleDropdown">
      <span class="avatar"></span>
    </button>
    <Transition name="slide-fade">
      <ul v-show="isOpen" class="dropdown-menu">
        <li v-for="(option, index) in options" :key="index" @click="selectOption(option)">
          {{ option.title }}
        </li>
      </ul>
    </Transition>
  </div>
</template>

<script lang="ts">
import { ref, defineComponent } from 'vue'

export default defineComponent({
  name: 'Dropdown',
  props: {
    options: {
      type: Array as () => { title: string; text: string }[],
      required: true
    }
  },
  setup(props) {
    const isOpen = ref(false)
    const selectedOption = ref(props.options[0])

    const toggleDropdown = () => {
      isOpen.value = !isOpen.value
    }

    const selectOption = (option: { title: string; text: string }) => {
      selectedOption.value = option
      isOpen.value = false
      alert(option.text)
    }

    return {
      isOpen,
      selectedOption,
      toggleDropdown,
      selectOption
    }
  }
})
</script>

<style scoped>
.avatar {
  height: 1em;
  width: 1em;
  background-image: url(../assets/images/trooper_avatar.png);
  background-position: center;
  background-repeat: no-repeat;
  background-size: 80%;
  padding: 1em;
  display: inline-block;
  background-color: white;
  border-radius: 50px;
}
.dropdown {
  position: relative;
  display: inline-block;
}

.dropdown-toggle {
  background-color: rgba(255, 47, 0, 0.9);
  border: none;
  padding: 0.25em 0.5em;
  cursor: pointer;
  border-radius: 5px;
  color: white;
}

.dropdown-menu {
  position: absolute;
  margin: 0.5em 0 0;
  top: 100%;
  left: 0;
  z-index: 1;
  border: none;
  border-radius: 5px;
  background-color: rgba(255, 47, 0, 0.9);
  padding: 0.5em 0;
  list-style: none;
  color: white;
}

.dropdown-menu li {
  padding: 0.5em 1em;
  cursor: pointer;
  box-shadow: inset 0 0 0 0 rgba(94, 17, 0, 0.9);
  transition: 0.4s ease-out;
}

.dropdown-menu li:hover {
  box-shadow: inset 400px 0 0 0 rgba(94, 17, 0, 0.9);
}

.dropdown-menu.show {
  display: block;
}

.slide-fade-enter-active {
  transition: all 0.2s ease-out;
}

.slide-fade-leave-active {
  transition: all 0.4s cubic-bezier(1, 0.5, 0.8, 1);
}

.slide-fade-enter-from,
.slide-fade-leave-to {
  transform: translateX(20px);
  opacity: 0;
}
</style>
