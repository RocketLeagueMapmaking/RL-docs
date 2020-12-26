<template>
    <div class="flowchart">
        <button v-on:click="reset = !reset" v-if="reset" v-html="messages.begin" class="button"></button>

        <div v-if="!reset && !end" v-for="question in questions">
            <div v-if="progress === questions.indexOf(question)" class="question">
                <p v-html="question.question"></p>
                <button v-on:click="progress += 1" v-html="buttons.yes" class="button"></button>
                <button v-on:click="end = !end" v-html="buttons.no" class="button"></button>
            </div>
        </div>

        <div v-if="progress === questions.length">
            <p v-html="messages.ready"></p>
            <div v-for="type in typeofmaps" class="category">
                <h2 v-html="type.category"></h2>
                <p v-html="messages.menu.example"></p>
                <p v-html="example" v-for="example in type.examples"></p>
                <p v-html="messages.menu.focus"></p>
                <button v-html="focus" v-for="focus in type.focus" v-on:click='active = types.find(x => x.name === focus); progress += 1'></button>
            </div>
        </div>

        <div v-if="active !== 0 && !end && !reset" v-for="question in active.data" >
            <div v-if="progress === questions.length + active.data.indexOf(question)">
                <p v-html="`${messages.menu.question} ${question.question}?`"></p>
                <button v-on:click="end = !end" v-html="buttons.yes"></button>
                <button v-on:click="progress += 1" v-html="buttons.no"></button>
            </div>   
        </div>

        <div v-if="active !== 0 && progress === (questions.length + active.data.length)">
            <p v-html="messages.end"></p>
        </div>
        
        <div v-if="end">
            <div v-if="progress < questions.length">
                <p v-html="questions[progress].no"></p>
            </div>
            <div v-if="active !== 0 && questions.length < progress < (questions.length + active.data.length)">
                <p v-html="active.data[progress - questions.length].no"></p>
            </div>
            <button v-on:click='end = !end' v-html="buttons.question" class="menu-button"></button>
            <button v-on:click="reset = !reset; end = !end; progress = 0" v-html="buttons.reset" class="menu-button"></button>
        </div>
        
        <button v-if="!end && progress > 0 && progress != questions.length + 1" v-on:click='progress -= 1' v-html="buttons.back" class="menu-button"></button>
        <button v-if="!end && progress > questions.length" v-on:click="progress = questions.length" v-html="buttons.menu" class="menu-button"></button>
        <button v-on:click="reset = !reset; progress = 0" v-if="!reset && !end" v-html="buttons.reset" class="menu-button"></button>
    </div>
</template>

<script>
export default{
    data(){
        return {
            progress: 0,
            active: 0,
            reset: true,
            end: false,
            messages:{
                begin: 'I want to make a map',
                ready: 'You are ready to begin a UDK project. What kind of map do you want to make?',
                end: 'You are at the end',
                menu:{
                    question: 'Do you need ',
                    example: 'Such as:',
                    focus: 'Focus on:'
                }
            },
            buttons:{
                back:'Go back',
                menu: 'Back to choices',
                reset: 'Reset',
                question: 'Go back to question',
                yes: 'yes',
                no: 'no'
            },
            questions: [
            {
                question: 'Do you have UDK installed?',
                no: 'Download UDK <a href="/">A link</a>'
            },
            {
                question: 'Do you want to make 3D objects?',
                no: 'Look online for 3d objects'
            },
            {
                question: 'Do you have 3d modelling software?',
                no: 'Download blender'
            },
            {
                question: 'Do you have image editing software',
                no: 'Download Paint.net or GIMP'
            },
            {
                question: 'Is UDK set up?',
                no: 'Set up UDK'
            },
            {
                question: 'Do you have .FBX meshes?',
                no: 'Blender basics'
            },
            {
                question: 'Do you have .TGA textures?',
                no: 'Texture basics'
            }
            ],
            typeofmaps:[
                {
                    category: 'Challenge map',
                    examples: [
                        'Rings', 'Parkour', 'Racing', 'Platforms'
                    ],
                    focus:[
                        'Detail', 'Kismet', 'Meshes'
                    ]
                },
                {
                    category: 'Custom soccar map',
                    examples: [
                        'Rocket Labs', 'Map rebuild'
                    ],
                    focus:[
                        'Detail', 'Materials', 'Meshes', 'Animations'
                    ]
                },
                {
                    category: 'Non-competitive map',
                    examples: [
                        'Exploration', 'Puzzle', 'Art'
                    ],
                    focus:[
                        'Detail', 'Kismet', 'Meshes', 'Materials'
                    ]
                },
                {
                    category: 'Custom game mode',
                    examples: [
                        'Tetherball', 'Tumble', 'Sumo Wrestling'
                    ],
                    focus:[
                        'Detail', 'Kismet', 'Meshes', 'Bakkesmod'
                    ]
                }
            ],
            types:[
                {
                    name: 'Meshes',
                    data:[{},
                        {
                            question: 'Ground and collisions',
                            no: 'UDK -Basics - starting a map'
                        },
                        {
                            question: 'Obstacles',
                            no: 'Blender basics - modeling'
                        },
                        {
                            question: 'Complex sufaces',
                            no: 'Blender Advanced - Modifiers'
                        },
                        {
                            question: 'Rocket League Assets',
                            no: 'UDK Advanced - Dummy assets'
                        },
                        {
                            question: 'Help importing / exporting',
                            no: 'Blender Basics - FBX Export'
                        }
                    ]
                },
                {
                    name: 'Detail',
                    data:[{},
                        {
                            question: 'Player / ball spawns',
                            no: 'UDK Basics - Starting a map'
                        },
                        {
                            question: 'Goals or teleporters',
                            no: 'Blender Basics - modeling'
                        },
                        {
                            question: 'Boost pads',
                            no: 'Blender Advanced - modifiers'
                        },
                        {
                            question: 'Special effects',
                            no: 'Blender basics - FBX export'
                        }
                        
                    ]
                },
                {
                    name: 'Kismet',
                    data:[{},
                        {
                            question: 'Teleporters',
                            no: 'UDK Basics - Gameplay Items'
                        },
                        {
                            question: 'Scores or Game stats',
                            no: 'UDK Advanced - Kismet'
                        },
                        {
                            question: 'Button presses',
                            no: 'UDK Advanced - Kismet'
                        }
                    ]
                },
                {
                    name: 'Materials',
                    data:[{},
                        {
                            question: 'solid colors',
                            no: 'UDK Advanced - custom materials'
                        },
                        {
                            question: 'custom textures',
                            no: 'UDK Advanced - custom materials'
                        },
                        {
                            question: 'rocket league materials',
                            no: 'UDK Advanced - Dummy Assets'
                        },
                        {
                            question: 'multiple materials on one mesh',
                            no: 'Blender basics - UV maps and materials'
                        }
                    ]
                },
                {
                    name: 'Bakkesmod',
                    data:[{},
                        {
                            question: 'Question 1',
                            no: 'Answer 1'
                        },
                        {
                            question: 'Question 2',
                            no: 'Answer 2'
                        }
                    ]
                },
                {
                    name: 'Animations',
                    data:[{},
                        {
                            question: 'Simple loops',
                            no: 'UDK Advanced - Matinee'
                        },
                        {
                            question: 'Moving collisions',
                            no: 'UDK Advanced - TBD'
                        },
                        {
                            question: 'Movable objects',
                            no: 'UDK Advanced - KActors'
                        }
                    ]
                }
            ]
        }
    }  
}
</script>

<style lang="stylus" scoped>

</style>