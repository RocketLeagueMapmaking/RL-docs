<template>
  <div class="node">
    <button
      :class="{ active : active === 0 }"
      class="collapsible"
      @click="activate(0)"
    >
      <span
        class="colored"
        :style="`background-color: ${statusConfig.colors[statusConfig.list.indexOf(status)]}`"
      > {{ status }} </span> 
      {{ title }} 
      <span class="folder"> {{ folder }} </span>
    </button> 

    <div
      v-if="active === 0 && hasProperty"
      class="content"
    >
      <p v-if="description">
        {{ description }}
      </p>
      <img
        v-if="image"
        :src="`/images/kismet/${type}/${folder}/${image}.png`"
      >
      <div
        v-if="inputLinks.length > 0 || outputLinks.length > 0 || variableLinks.length > 0"
        class="node-object"
      >
        <hr>
        <p v-if="inputLinks.length > 0">
          Input links
        </p>
        <ul>
          <li
            v-for="link in inputLinks"
            :key="link"
          >
            {{ link }}
          </li>
        </ul>
        <p v-if="outputLinks.length > 0">
          Output links
        </p>
        <ul>
          <li
            v-for="link in outputLinks"
            :key="link"
          >
            {{ link }}
          </li>
        </ul>
        <p v-if="variableLinks.length > 0">
          Variable links
        </p>
        <ul>
          <li
            v-for="link in variableLinks"
            :key="link"
          >
            {{ link }}
          </li>
        </ul>
        <hr v-if="notes.length > 0">
      </div>
      <ul>
        <li
          v-for="link in notes"
          :key="link"
        >
          {{ link }}
        </li>
      </ul> 
    </div>
    <div
      v-if="active === 0 && !hasProperty"
      class="content"
    >
      <p> {{ error.message }} </p>
    </div>
  </div>
</template>

<script>
// red: #E74343
// blue: #4F8CEE
// green: #51D05C
// orange: #C9AB35
// array used for validation. If you want to change this, add a color in the same index
const StatusList = ['New', 'Not working', 'Not documented', 'ACv3', 'ACv2', 'ACv1']
const Folders = ['TAGame', 'TAGame_decrypted']
const Types = ['Actions', 'Events']

export default {
    props: {
        title: {
            type: String,
            required: true
        },
        description: {
            type: String,
            default: ''
        },
        image: {
            type: String,
            default: ''
        },
        status:{
            validator: function (value) {
                return StatusList.indexOf(value) !== -1
            },
            type: String,
            required: true
        },
        folder: {
            validator: function (value) {
                return Folders.indexOf(value) !== -1
            },
            type: String,
            required: true
        },
        type: {
            validator: function (value) {
                return Types.indexOf(value) !== -1
            },
            type: String,
            required: true
        },
        inputLinks: {
            type: Array,
            default: () => []
        },
        outputLinks: {
            type: Array,
            default: () => []
        },
        variableLinks: {
            type: Array,
            default: () => []
        },
        notes: {
            type: Array,
            default: () => []
        }
    },
    data () {
        return {
            active: -1,
            statusConfig: {
                list: StatusList,
                colors: ['#4F8CEE','#E74343','#C9AB35','#51D05C','#51D05C','#51D05C'],
            },
            error: {
                message: 'Nothing has been added about this node'
            },
            hasProperty: !!this.image 
              || this.outputLinks.length > 0 
              || this.inputLinks.length > 0 
              || this.notes.length > 0 
              || this.variableLinks.length > 0 
              || !!this.description
        }
    },
    methods:{
        activate(node){
            if(this.active !== node){
                this.active = node
            }else{
                this.active = -1
            }
        }
    }
}

</script>

<style lang="stylus" scoped>

.collapsible {
  background-color: var(--borderColor);
  color: white;
  cursor: pointer;
  padding: 18px;
  width: 100%;
  border: none;
  text-align: left;
  outline: none;
  font-size: 15px;
  border-radius: 3px;
}
.node{
  margin: 10px 0 10px 0;
}

.active, .collapsible:hover {
  background-color: #555;
}
.colored{
    padding: 8px;
    border-radius: 3px;
}

.content {
  padding: 0 18px;
  overflow: hidden;
  background-color: #222222;
  margin: 0px;
  transition: 0.5s;
}
.folder{
    float: right;
    color: #222;
}
@media screen and (max-width: 500px) {
    .folder{
        display: none;
    }
}
</style>
