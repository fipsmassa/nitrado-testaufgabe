<template>
  <div class="container">
    <h2>Wähle deinen Server</h2>
    <div>
      <div class="tabs" id="server_choice">
        <div class="tab-header">
          <div class="tab_wrapper">
            <div
              v-for="(tab, index) in tabs"
              :key="index"
              class="tab-item"
              :id="'tab-' + index"
              :class="{ active: activeTab === index }"
              @click="setActiveTab(index)"
            >
              {{ tab.title }}
            </div>
            <span class="glider"></span>
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
              <img v-if="index === 0" src="../assets/images/rey.jpg" />
              <img v-if="index === 1" src="../assets/images/obiwan.jpg" />
              <img v-if="index === 2" src="../assets/images/vader.jpg" />
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
              <accordion :items="tab.accordionItems" />
              <span class="call_to" @click="choiceClick()">Jetzt auswählen</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { ref, defineComponent, onMounted, watchEffect, Ref } from 'vue'
import Accordion from '@/components/Accordion.vue'

interface AccordionItem {
  title: string
  content: string
}

interface Tab {
  title: string
  url: string
  server: {
    price: string
    duration: string
    location: string
    features: string[]
  }
  accordionItems: AccordionItem[]
}

export default defineComponent({
  components: {
    Accordion
  },
  setup() {
    const activeTab = ref(0)
    const tabs = ref<Tab[]>([
      {
        title: '10 Slots',
        url: 'https://dummyjson.com/posts?limit=3',
        server: {
          price: '9,99 €',
          duration: '30 Tage Abonnement',
          location: 'Frankfurt am Main',
          features: [
            'Platz für 10 Spieler',
            '30 Tage Laufzeit, jederzeit verlängerbar',
            'Bis zu 5 Spiele installierbar, über 100 Spiele in der Cloud'
          ]
        },
        accordionItems: []
      },
      {
        title: '16 Slots',
        url: 'https://dummyjson.com/posts?skip=3&limit=3',
        server: {
          price: '19,99 €',
          duration: '30 Tage Abonnement',
          location: 'Frankfurt am Main',
          features: [
            'Platz für 16 Spieler',
            '30 Tage Laufzeit, jederzeit verlängerbar',
            'Bis zu 5 Spiele installierbar, über 100 Spiele in der Cloud'
          ]
        },
        accordionItems: []
      },
      {
        title: '32 Slots',
        url: 'https://dummyjson.com/posts?skip=6&limit=3',
        server: {
          price: '29,99 €',
          duration: '30 Tage Abonnement',
          location: 'Frankfurt am Main',
          features: [
            'Platz für 32 Spieler',
            '30 Tage Laufzeit, jederzeit verlängerbar',
            'Bis zu 5 Spiele installierbar, über 100 Spiele in der Cloud'
          ]
        },
        accordionItems: []
      }
    ])

    const setActiveTab = (index: number) => {
      activeTab.value = index
    }

    const fetchData = async (index: number) => {
      try {
        const response = await fetch(tabs.value[index].url)
        const data = await response.json()
        const accordionItems = data.posts.map((item: any) => ({
          title: item.title,
          content: item.body
        }))
        tabs.value[index].accordionItems = accordionItems
      } catch (error) {
        console.error('Error fetching data:', error)
      }
    }

    const choiceClick = () => {
      alert('Server ausgewählt')
    }

    onMounted(() => {
      fetchData(activeTab.value)
    })

    watchEffect(() => {
      fetchData(activeTab.value)
    })

    return {
      activeTab,
      tabs,
      setActiveTab,
      choiceClick
    }
  }
})
</script>

<style scoped>
h2 {
  color: #fff;
  margin-bottom: 2em;
  text-align: center;
}

.tabs {
  background-color: black;
  box-shadow: 0px -6px 8px rgba(255, 47, 0, 0.5), 0px -5px 8px rgba(255, 47, 0, 0.5),
    0px 0px 8px rgba(255, 47, 0, 0.5), 0px 6px 16px rgba(255, 47, 0, 0.5);
  color: white;
  border-radius: 30px;
}

.tab-header {
  display: flex;
  justify-content: center;
}

.tab_wrapper {
  display: flex;
  align-items: center;
  position: relative;
  background-color: white;
  border-radius: 99px;
  padding: 0.25em;
  margin: 1em 0;
}

.glider {
  position: absolute;
  display: flex;
  border-radius: 99px;
  background-color: rgba(255, 47, 0, 0.9);
  transition: 0.25s ease-out;
  height: 2em;
  width: 8em;
  z-index: 9;
}

.tab-item[id='tab-0'].active ~ .glider {
  transform: translateX(0);
}

.tab-item[id='tab-1'].active ~ .glider {
  transform: translateX(92%);
}

.tab-item[id='tab-2'].active ~ .glider {
  transform: translateX(185%);
}

.tab-header .tab-item {
  padding: 0.5em 2em;
  cursor: pointer;
  border-radius: 99px;
  color: black;
  transition: color 0.15s ease-in;
  z-index: 99;
}

.tab-header .tab-item.active {
  color: white;
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
}
</style>
