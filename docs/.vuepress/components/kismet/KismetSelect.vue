<template>
    <div>
        <h2>{{ title }}</h2>
            <h3 v-html="actions.title"></h3>
            <div v-for="node in actions.nodes" class="node">
                <button @click="activate(actions.nodes.indexOf(node))" :class="{ active : active == actions.nodes.indexOf(node) }" class="collapsible">
                    <span class="colored" v-html="node.span.text" :style="`background-color: ${node.span.color}`"></span> {{ node.text }}
                </button>   
                <div v-if="active === actions.nodes.indexOf(node)" class="content">
                    <p>{{node.description}}</p>
                    <div class="node-object"><hr>
                        <p>Input links</p>
                        <ul>
                            <li v-for="item in node.properties.input" v-html="item"></li>
                        </ul>
                        <p>Output links</p>
                        <ul>
                            <li v-for="item in node.properties.output" v-html="item"></li>
                        </ul>
                        <p>Variable links</p>
                        <ul>
                            <li v-for="item in node.properties.output" v-html="item"></li>
                        </ul><hr>
                    </div>
                    <ul>
                        <li v-for="item in node.properties.notes" v-html="item"></li>
                    </ul>
                    <!-- image? -->
                </div>
            </div>
    </div>
</template>

<script>
// red: #E74343
// blue: #4F8CEE
// green: #51D05C
// orange: #C9AB35

export default {
    props: ['title'],
    data(){
        return{
            active: -1,
            colors:{
                
            },
            actions:{
                title: 'Actions',
                nodes:[
                    {
                        text: 'Add Game Ball',
                        description: 'Add a ball to the game',
                        properties:{
                        input:[
                                'Input property'
                        ],
                        output: [
                            'Output property'
                        ],
                        notes:[
                            'A small note'
                        ],
                        },
                      
                            span:{
                                color: '#E74343',
                                text: 'Not documented'
                            }
                        },
                        {
                            text:"Another node",
                            description: 'test',
                            properties:{
                                input:[
                                        'Input property'
                                ],
                                output: [
                                    'Output property'
                                ],
                                notes:[
                                    'A small note'
                                ],
                            },
                            span:{
                                color: '#4F8CEE',
                                text: 'New'
                            }
                        },
                        {
                            text:"Working kismet node",
                            description: 'test',
                            properties:{
                                input:[
                                        'Input property'
                                ],
                                output: [
                                    'Output property'
                                ],
                                notes:[
                                    'A small note'
                                ],
                            },
                            span:{
                                color: '#51D05C',
                                text: 'ACv3'
                            }
                        },
                        {
                            text:"Get Game Ball",
                            description: 'test',
                            properties:{
                                input:[
                                        'Input property'
                                ],
                                output: [
                                    'Output property'
                                ],
                                notes:[
                                    'A small note'
                                ],
                            },
                            span:{
                                color: '#C9AB35',
                                text: 'Not working'
                            }
                        },
                        {
                            text:"Kismet node",
                            description: 'test',
                            properties:{
                                input:[
                                    'Input property'
                                ],
                                output: [
                                    'Output property'
                                ],
                                notes:[
                                'A small note'
                                ],
                            },
                            span:{
                                    color: '#C9AB35',
                                    text: 'Not working'
                            },
                        }
                    ]
            },
            events:{

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
.node-object{
    // background-color: #333333;
    // padding: 5px;
}
</style>