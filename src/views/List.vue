<template>
  <div id="list">
    <div class="container">
      <div class="row">
        <div class="col-12">
          <div class="list_text">
            <img src="../assets/icon01-01.svg" style="width: 30px; margin-right: 2rem"/>
            <h4>What are you going to do tody?</h4>
          </div>
            <hr style=" width: 100%; border:1px solid black;">
        </div>
        <div class="col-12 ">
          <b-form-group label="" label-for="newinput" invalid-feedback="字數太少啦!!!">
          <b-form-input id="newinput" v-model="newinput" :state="newinputstate" @keydown.enter="additem"></b-form-input>
          </b-form-group>
        </div>
        <div class="col-12 ">
          <b-table :items="items" :fields="fields" show-empty hover>
          <template #empty>
            <p class="text-center">nothing is here</p>
          </template>
          <template #cell(name)="data">
            <b-form-input v-if="data.item.edit" v-model="data.item.model" :state="data.item.state" @keydown.enter="submitedit(data.index)" @keydown.esc="canceledit(data.index)">
            </b-form-input>
            <span v-else>{{ data.value }}</span>
          </template>
          <template #cell(action)="data">
            <span v-if="data.item.edit">
              <b-btn class="mx-1" variant="success">
                <b-icon icon="check" @click="submitedit(data.index)"></b-icon>
              </b-btn>
              <b-btn class="mx-1" variant="danger">
                <b-icon icon="arrow-counterclockwise" @click="canceledit(data.index)"></b-icon>
              </b-btn></span><span v-else>
              <b-btn class="mx-1" pill variant="outline-secondary">
                <b-icon icon="pencil" @click="edititem(data.index)"></b-icon>
              </b-btn>
              <b-btn class="mx-1" pill variant="outline-secondary">
                <b-icon icon="trash" @click="delitem(data.index)"></b-icon>
              </b-btn></span></template>
            </b-table>
        </div>
      <b-col cols="12">
        <h5>  done</h5>
      </b-col>
      <b-col cols="12">
        <b-table-simple hover="hover">
          <tbody>
            <tr v-for="(item, idx) in finished" :key="item">
              <td>{{ item }}</td>
              <td>
                <b-btn variant="danger" @click="delfinish(idx)">
                  <b-icon icon="trash"></b-icon>
                </b-btn>
              </td>
            </tr>
            <tr v-if="finished.length === 0">
              <td class="text-center" colspan="2">nothing is here</td>
            </tr>
          </tbody>
        </b-table-simple>
      </b-col>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      newinput: '',
      fields: [
        { key: 'name', label: 'What To Do ?' },
        { key: 'action', label: '' }
      ]
    }
  },
  computed: {
    newinputstate () {
      return this.newinput.length > 2 ? true : this.newinput.length === 0 ? null : false
    },
    items () {
      return this.$store.state.items.map(item => {
        item.state = item.model.length > 2
        return item
      })
    },
    finished () {
      return this.$store.state.finished
    }
  },
  methods: {
    additem () {
      if (this.newinput.length > 2) {
        this.$store.commit('additem', this.newinput)
        this.newinput = ''
        console.log(this.$store.state.items)
      }
    },
    edititem (index) {
      this.$store.commit('edititem', index)
    },
    submitedit (index) {
      if (this.items[index].state) {
        this.$store.commit('submitedit', index)
      }
    },
    canceledit (index) {
      this.$store.commit('canceledit', index)
    },
    delitem (index) {
      this.$store.commit('delitem', index)
    },
    delfinish (index) {
      this.$store.commit('delfinish', index)
    }
  }
}
</script>

<style lang="scss">

.container{
  display: flex;
  flex-direction: column;
}

#list{
  width: 600px;
  position: absolute;
  top: 35%;
  left: 50%;

}

.row {
  width: 100%;
}

.list_text{
  display: flex;

}

</style>
