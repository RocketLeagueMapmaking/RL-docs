<template>
    <div class="node">
        <button @click="activate(0)" :class="{ active : active === 0 }" class="collapsible">
            <span class="colored" v-html="Status" :style="`background-color: ${status.colors[status.list.indexOf(Status)]}`"></span> 
            {{ Title }} 
            <span class="folder" v-html="Folder"></span>
        </button> 

        <div v-if="active === 0 && (Image || InputLinks || OutputLinks || VariableLinks || Description || Notes)" class="content">
            <p v-if="Description" v-html="Description"></p>
            <img v-if="Image" :src="`/images/kismet/${Type}/${Folder}/${Image}.png`">
            <div class="node-object" v-if="InputLinks || OutputLinks || VariableLinks">
                <hr>
                <p v-if="InputLinks">Input links</p>
                <ul>
                    <li v-for="link in InputLinks" v-html="link"></li>
                </ul>
                <p v-if="OutputLinks">Output links</p>
                <ul>
                    <li v-for="link in OutputLinks" v-html="link"></li>
                </ul>
                <p v-if="VariableLinks">Variable links</p>
                <ul>
                    <li v-for="link in VariableLinks" v-html="link"></li>
                </ul>
                <hr v-if="Notes">
            </div>
            <ul>
                <li v-for="link in Notes" v-html="link"></li>
            </ul> 
        </div>
        <div v-if="active === 0 && (!Image && !InputLinks && !OutputLinks && !VariableLinks && !Description && !Notes)" class="content">
            <p v-html="error.message"></p>
        </div>
    </div>
</template>

<script>
// red: #E74343
// blue: #4F8CEE
// green: #51D05C
// orange: #C9AB35
// array used for validation. If you want to change this, update also the status array in data() and add a color in the same index
const StatusList = ['New', 'Not working', 'Not documented', 'ACv3', 'ACv2', 'ACv1'];
const Folders = ['TAGame', 'TAGame_decrypted'];
const Types = ['Actions', 'Events']

export default {
    props: {
        Title: {
            type: String,
            required: true
        },
        Description: String,
        Image: String,
        Status:{
            validator: function (value) {
                return StatusList.indexOf(value) !== -1
            },
            type: String,
            required: true
        },
        Folder: {
            validator: function (value) {
                return Folders.indexOf(value) !== -1
            },
            type: String,
            required: true
        },
        Type: {
            validator: function (value) {
                return Types.indexOf(value) !== -1
            },
            type: String,
            required: true
        },
        InputLinks: Array,
        OutputLinks: Array,
        VariableLinks: Array,
        Notes: Array
    },
    data(){
        return{
            active: -1,
            status: {
                list: ['New', 'Not working', 'Not documented','ACv3','ACv2','ACv1'],
                colors: ['#4F8CEE','#E74343','#C9AB35','#51D05C','#51D05C','#51D05C'],
            },
            error: {
                message: "Nothing has been added about this node"
            }
        }
    },
    methods:{
        activate(node){
            if(this.active !== node){
                this.active = node;
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