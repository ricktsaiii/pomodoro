<template>
<div id="app">
  <div class="header" >
    <router-link to="/List">
      <img class="title" style="width:250px" src="./assets/title-01.svg" />
    </router-link>
  </div>
  <div class="body">
    <div class="container d-flex">
      <div class="row">
        <div class="col-6">
          <img id="tomato" src="./assets/tomato-01.svg" style="width: 500px;">
          <div id="clock" class="col-12">
            <h3>{{ currentText }}</h3>
            <h1 style="font-size:5rem;">{{ timeText }}</h1>
            <b-button class="mx-1" pill variant="secondary" v-if="status !== 1" @click="start">START</b-button>
            <b-button class="mx-1" pill variant="secondary" v-else @click="pause">
              <b-icon icon="pause-fill"></b-icon>
            </b-button>
            <b-button class="mx-1" pill variant="secondary" v-if="current.length > 0" @click="finish(true)">
              <b-icon icon="skip-end-fill" ></b-icon>
            </b-button>
            </div>
          </div>
        <div class="col-6">
          <nav class="navbar navbar-light" style="justify-content: space-evenly;">
              <router-link class="btn btn-outline-secondary" style="width:200px" to="/List">Check List</router-link>
              <router-link class="btn btn-outline-secondary" style="width:200px" to="/Settings">Settings</router-link>
          </nav>
        </div>
      </div>
    </div>
    <keep-alive>
      <router-view v-if="$route.meta.keepAlive"></router-view>
    </keep-alive>
    <router-view v-if="!$route.meta.keepAlive"></router-view>
</div>
</div>
</template>

<script>
export default {
  data () {
    return {
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
            this.finish(false)
          }
        }, 1000)
      }
    },
    pause () {
      this.status = 2
      clearInterval(this.timer)
    },
    finish (skip) {
      clearInterval(this.timer)
      this.status = 0
      this.$store.commit('finish')

      if (!skip) {
        const audio = new Audio()
        audio.src = require('@/assets/' + this.$store.state.sound)
        audio.play()
      }

      if (this.items.length > 0) {
        this.start()
      }
    }
  }
}
</script>
<style lang="scss">

.header{
width: 100wh;
height: 150px;
display: flex;
align-items: center;
margin-left: 20%;
}

.container{
width: 100wh;
display: flex;
align-items: center;
justify-content: space-around;
}

.body{
margin: 2rem;
height: 500px;
align-items: center;
display: flex;

}

.row{
width: 100%;
}

#clock{
  position: absolute;
  left: 25%;
  top:  35%;
}

</style>
