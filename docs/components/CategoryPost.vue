<template>
    <!-- <div class="lg:sticky lg:top-16 overflow-y-auto h-full lg:h-auto lg:max-h-(screen-16)"> -->
      <!-- <ul class="p-4 lg:py-8 lg:pl-0 lg:pr-8"> -->
      <ul class="px-4 py-0">
        <li
          v-for="(docs, category, index) in categories"
          :key="category"
          class="mb-4"
          :class="{
            'active': isCategoryActive(docs),
            'lg:mb-0': index === Object.keys(categories).length - 1
          }"
        >
          <p
            class="pt-1 mb-2 text-gray-500 uppercase tracking-wider font-bold text-sm lg:text-xs"
          >{{ category }}</p>
          <ul>
            <li v-for="doc of docs" :key="doc.slug" class="text-gray-700 dark:text-gray-300">
              <NuxtLink
                :to="localePath(doc.to)"
                class="px-2 rounded font-medium py-1 hover:text-primary-500 flex items-center justify-between"
                exact-active-class="text-primary-500 bg-primary-100 hover:text-primary-500 dark:bg-primary-900"
              >
                {{ doc.menuTitle || doc.title }}
                <client-only>
                  <span
                    v-if="isDocumentNew(doc)"
                    class="animate-pulse rounded-full bg-primary-500 opacity-75 h-2 w-2"
                  />
                </client-only>
              </NuxtLink>
            </li>
          </ul>
        </li>
      </ul>
    <!-- </div> -->
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  props: ['categoryNameProps'],
  // data () {
  //   return {
  //     categoryName: this.categoryNameProps
  //   }
  // },
  computed: {
    ...mapGetters([
      'settings',
      'githubUrls'
    ]),
    menu: {
      get () {
        return this.$store.state.menu.open
      },
      set (val) {
        this.$store.commit('menu/toggle', val)
      }
    },
    categories () {
      console.log(this.categoryNameProps)
      // 特定のカテゴリーのみ抽出
      var array = this.$store.state.categories[this.$i18n.locale]
      var result = {}
      for(var key of Object.keys(array)) {
        // console.log(key)
        if (key === this.categoryNameProps) {
          result[key] = array[key]
        }
      }
      return result
    }
  },
  methods: {
    isCategoryActive (documents) {
      return documents.some(document => document.to === this.$route.fullPath)
    },
    isDocumentNew (document) {
      if (process.server) {
        return
      }
      if (!document.version || document.version <= 0) {
        return
      }

      const version = localStorage.getItem(`document-${document.slug}-version`)
      if (document.version > Number(version)) {
        return true
      }

      return false
    }
  }
}
</script>
