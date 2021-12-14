<template lang="pug">
#home
  b-container
    b-row
      b-col(cols="12")
        h1 {{ currentText }}
        h2 {{ timeText }}
        b-btn.mx-1(variant="primary" v-if="status !== 1" @click="start")
          b-icon(icon="play-fill")
        b-btn.mx-1(variant="primary" v-else)
          b-icon(icon="pause-fill")
        b-btn.mx-1(variant="primary" v-if="current.length > 0")
          b-icon(icon="skip-end-fill")
</template>

<script>
export default {
  data () {
    return {
      // 0 = 停止
      // 1 = 倒數中
      // 2 = 暫停
      status: 0,
      timer: 0
    }
  },
  computed: {
    current () {
      return this.$store.state.current
    },
    items () {
      return this.$store.state.items
    },
    currentText () {
      return this.current.length > 0 ? this.current : this.items.length > 0 ? '點擊開始' : '沒有事項'
    },
    timeleft () {
      return this.$store.state.timeleft
    },
    timeText () {
      const m = Math.floor(this.timeleft / 60).toString().padStart(2, '0')
      const s = Math.floor(this.timeleft % 60).toString().padStart(2, '0')
      return `${m} : ${s}`
    }
  },
  methods: {
    start () {
      if (this.status === 0 && this.items.length > 0) {
        this.$store.commit('start')
      }
      if (this.current.length) {
        this.status = 1
        this.timer = setInterval(() => {
          this.$store.commit('countdown')
          if (this.timeleft <= -1) {
          }
        }, 1000)
      }
    }
  }
}
</script>
