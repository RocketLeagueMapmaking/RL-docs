<template>
    <div class="node">
        <button @click="activate(0)" :class="{ active : active === 0 }" class="collapsible">
            <span class="colored" v-html="Type" :style="`background-color: ${colors[types.indexOf(Type)]}`"></span> 
            {{ Title }} 
            <span class="folder" v-html="Folder"></span>
        </button> 

        <div v-if="active === 0 && (Image || InputLinks || OutputLinks || VariableLinks || description || Notes)" class="content">
            <p>{{ Description }}</p>
            <img v-if="Image" :src="`/images/kismet/${Image}.png`">
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
        <div v-if="active === 0 && (!Image && !InputLinks && !OutputLinks && !VariableLinks && !description && !Notes)" class="content">
            <p v-html="errormessage"></p>
        </div>
    </div>
</template>

<script>
// red: #E74343
// blue: #4F8CEE
// green: #51D05C
// orange: #C9AB35
// array used for validation. If you want to change this, update also the types array in data() and add a color in the same index
const types = ['New', 'Not working', 'Not documented','ACv3','ACv2','ACv1'];
const Folders = ['TAGame','TAGame_decrypted'];

export default {
    props: {
        Title: {
            type: String,
            required: true
        },
        Description: String,
        Image: String,
        Type:{
            validator: function (value) {
                return types.indexOf(value) !== -1
            },
            required: true
        },
        Folder: {
            validator: function (value) {
                return Folders.indexOf(value) !== -1
            },
        },
        InputLinks: Array,
        OutputLinks: Array,
        VariableLinks: Array,
        Notes: Array
    },
    data(){
        return{
            active: -1,
            types: ['New', 'Not working', 'Not documented','ACv3','ACv2','ACv1'],
            colors: ['#4F8CEE','#E74343','#C9AB35','#51D05C','#51D05C','#51D05C'],
            errormessage: "Nothing has been added about this node"
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
<!---Full list to add--->

<!--- Actions --->

<!-- Add Game Ball -->

<!-- [ACv3] Apply Car Products -->

<!-- Attach Asset to Car -->

<!-- Attach FX -->

<!-- [ACv3] Check Rotation Angle -->

<!-- Control Car Movement -->

<!--- [New] Complete FTE Checkpoint -->

<!-- [ACv3] Counter -->

<!-- [ACv3] Create Attach Component -->

<!-- Demo Car -->

<!-- [ACv3] Disable Force Feedback in FXActor -->

<!-- Display Message -->

<!-- Drive Spline -->

<!-- [New] Exit To Main Menu -->

<!-- Explode Game Ball -->

<!-- [New] Game URL Has Option -->

<!-- [New] Get Detail Mode -->

<!-- [New] Get FTE State -->

<!-- Get Game Ball -->

<!-- Get Player Car -->

<!-- Get Team Score -->

<!-- [ACv3] Get Weather Enabled -->

<!-- Give Boost -->

<!-- Instance Material -->

<!-- Is Action Pressed -->

<!-- Is Human Player -->

<!-- [ACv3] Is Target In Player Camera View -->

<!-- Load Map -->

<!-- [ACv3] Look at Actor -->

<!-- [ACv3] MatchCountdown -->

<!-- [ACv3] Move Actor -->

<!-- Reinitialize RB Physics -->

<!-- [ACv3] Rotate Actor -->

<!-- Screen Fade -->

<!-- Set Ball Material -->

<!-- Set Ballcam Target -->

<!-- [ACv3] Set Breakout Ball Charge -->

<!-- [ACv3] Set Breakout Platform Damage -->

<!-- [ACv3] Set Car Transform -->

<!-- [ACv3] Set Green Screen -->

<!-- Set Loadout -->

<!-- Set Nameplate -->

<!-- [New] Set Post Process -->

<!-- [New] Set Replay Camera -->

<!-- [New] Set Replay FX -->

<!-- [ACv3] Set Scalar Parameter on Static Meshes -->

<!-- [ACv3] Set Stadium Team Colors -->

<!-- [New] Set Time Dilation -->

<!-- [New] Toggle UI Overlay -->

<!-- Set Tutorial Tip -->

<!-- Set VectorParam -->

<!-- Set VectorParam MatInst -->

<!-- [ACv3] Set Vehicle Input -->

<!-- Spawn Actor -->

<!-- Spawn Bot -->

<!-- Spawn Car Colors -->

<!-- [ACv3] Spawn FXActor -->

<!-- Start Tutorial -->

<!-- Terminate RB Physics -->

<!-- [ACv3] UpdateAd -->


<!--- Events -->

<!-- Ball In Range -->

<!-- Car Spawned -->

<!-- Car Touch Ball -->

<!-- [ACv3] CountDown Completed -->

<!-- CountDown Start -->

<!-- Game Time Changed -->

<!-- GameEvent State Changed -->

<!-- Goal Scored -->

<!-- Input Sequence -->

<!-- [New] Podium Start -->

<!-- Round Start -->

<!-- Score Changed -->

<!-- [ACv3] Stadium Team Colors Changed -->

<!-- [New] User Setting Changed -->

<!-- [New] Weather Toggled -->

<style lang="stylus" scoped>

.collapsible {
  background-color: #777;
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