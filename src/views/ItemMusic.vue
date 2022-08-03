<template>
  <ItemMusicTop :playlist="state.playlist" />
  <ItemMusicList
    :itemList="state.itemList"
    :subscribedCount="state.playlist.subscribedCount"
  />
</template>

<script setup>
import { useRoute } from 'vue-router'
import { onMounted, reactive } from 'vue'
import { getMusicItemList, getItemList } from '@/request/api/item.js'
import ItemMusicTop from '@/components/item/ItemMusicTop.vue'
import ItemMusicList from '@/components/item/ItemMusicList.vue'

    const state = reactive({
      playlist: {},
      itemList: [],
    })
    onMounted(async () => {
      let id = useRoute().query.id
      let res = await getMusicItemList(id)
      state.playlist = res.data.playlist
      let result = await getItemList({ id, limit: 10, offset: 0 })
      state.itemList = result.data.songs
      sessionStorage.setItem('itemDetail', JSON.stringify(state))
    })
</script>

<style>
</style>