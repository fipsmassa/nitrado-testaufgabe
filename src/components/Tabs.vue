<script lang="ts">
import { ref, defineComponent, onMounted, watchEffect } from 'vue'
import Accordion from '@/components/Accordion.vue'

interface Tab {
  title: string
  url: string
  server: {
    price: string
    duration: string
    location: string
    features: string[]
  }
  backgroundImg: string
  buttonClick: () => void
}

export default defineComponent({
  components: {
    Accordion
  },
  props: {
    tabs: {
      type: Array as () => Tab[],
      required: true
    }
  },
  setup(props) {
    const activeTab = ref(0)
    const accordionItems = ref()

    const setActiveTab = (index: number) => {
      activeTab.value = index
    }

    const fetchData = async (index: number) => {
      try {
        const response = await fetch(props.tabs[activeTab.value].url)
        const data = await response.json()
        accordionItems.value = data.posts.map((item: any) => ({
          title: item.title,
          content: item.body
        }))
      } catch (error) {
        console.error('Error fetching data:', error)
      }
    }

    onMounted(() => {
      fetchData(activeTab.value)
    })

    watchEffect(() => {
      fetchData(activeTab.value)
    })

    return {
      activeTab,
      setActiveTab,
      accordionItems
    }
  }
})
</script>

<template>
  <div class="container">
    <div>
      <div class="tabs" id="server_choice">
        <div class="tab_header">
          <div class="tab_wrapper">
            <div
              v-for="(tab, index) in tabs"
              :key="index"
              class="tab_item"
              :id="'tab-' + index"
              :class="{ active: activeTab === index }"
              @click="setActiveTab(index)"
            >
              {{ tab.title }}
            </div>
          </div>
        </div>
        <div class="tab-content">
          <div
            v-for="(tab, index) in tabs"
            :key="index"
            v-show="activeTab === index"
            class="content_wrapper"
          >
            <div class="image_content">
              <img :src="tab.backgroundImg" />
            </div>
            <div class="text_content">
              <div class="server">
                <div class="price server_info">{{ tab.server.price }}</div>
                <div class="duration server_info">{{ tab.server.duration }}</div>
                <div class="location server_info">{{ tab.server.location }}</div>
                <ul class="features">
                  <li v-for="(feature, index) in tab.server.features" :key="index">
                    {{ feature }}
                  </li>
                </ul>
              </div>
              <accordion :items="accordionItems" />
              <span class="call_to" @click="tab.buttonClick()">Jetzt auswählen</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.tabs {
  background-color: black;
  box-shadow: 0px -6px 8px rgba(255, 47, 0, 0.5), 0px -5px 8px rgba(255, 47, 0, 0.5),
    0px 0px 8px rgba(255, 47, 0, 0.5), 0px 6px 16px rgba(255, 47, 0, 0.5);
  color: white;
  border-radius: 30px;
}

.tab_header {
  display: flex;
  justify-content: center;
}

.tab_wrapper {
  display: flex;
  align-items: center;
  position: relative;
  background-color: #444444;
  border-radius: 99px;
  padding: 0.25em;
  margin: 1em 0;
}

.glider {
  position: absolute;
  display: flex;
  border-radius: 99px;
  background-color: #909090;
  transition: 0.25s ease-out;
  height: 2em;
  width: 8em;
  z-index: 9;
}

.tab_item.active {
  background-color: #909090;
}

.tab_header .tab_item {
  padding: 0.5em 3em;
  cursor: pointer;
  border-radius: 99px;
  color: white;
  transition: background-color 0.25s ease-out;
}

.flex_wrapper {
  justify-content: center;
  padding: 2em 0;
}

.content_wrapper {
  display: flex;
  justify-content: flex-start;
  position: relative;
  max-width: 1440px;
  width: 100%;
}

.image_content {
  position: absolute;
  height: 100%;
  width: 100%;
  overflow: hidden;
  border-radius: 30px;
  top: 0;
  bottom: 0;
  right: 0;
  left: 0;
}

.image_content img {
  object-position: right top;
  object-fit: cover;
  vertical-align: middle;
  width: 100%;
  height: 100%;
}
.text_content {
  display: flex;
  background: linear-gradient(90deg, #000 0, #000 30%, transparent);
  border-radius: 30px;
  padding: 2em 3em;
  overflow: hidden;
  width: 50%;
  align-items: center;
  flex-direction: column;
  position: relative;
}

.server {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.server_info {
  padding: 0.5em 0;
}

.price {
  font-size: 2em;
  font-weight: bold;
}

.duration {
  font-size: 1.5em;
}

.features {
  padding: 1em 2em;
  line-height: 1.5em;
}
</style>
