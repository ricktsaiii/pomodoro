<!-- <template lang="pug">
#settings
  b-container
    b-row
      b-col(cols="12")
        b-table(:items="items" :fields="fields")
          template(#cell(src)="data")
            audio(controls :src="require('@/assets/' + data.value)")
</template> -->
<template>
<div id="settings">
    <b-row>
      <b-col cols="12">
        <b-table :items="items" :fields="fields" @row-clicked='select'>
          <template #cell(src)="data">
            <audio controls="controls" :src="require('@/assets/' + data.value)"></audio>
          </template>
            <template #cell(select)="data">
              <span v-if="data.item.src === sound">V</span>
            </template>
        </b-table>
      </b-col>
    </b-row>
</div>
</template>

<script>
export default {
  data () {
    return {
      items: [
        { name: '鬧鈴', src: 'alarm.mp3' },
        { name: 'yay', src: 'yay.mp3' }
      ],
      fields: [
        { key: 'name', label: '名稱' },
        { key: 'src', label: '試聽' },
        { key: 'select', label: '選擇' }
      ]
    }
  },
  methods: {
    select (item) {
      console.log(item)
      this.$store.commit('selectSound', item.src)
    }
  },
  computed: {
    sound () {
      return this.$store.state.sound
    }
  }
}
</script>

<style lang="scss">
#settings {
  width: 600px;
  position: absolute;
  left: 50%;
  top: 35%;
}

#settings table {
cursor: pointer;
}

</style>
