<template>
    <div>
        <div class="flowchart">
            <script src="https://code.iconify.design/1/1.0.6/iconify.min.js"></script>

            <!-- Begin message -->
            <div class="begin" v-if="reset">
                <h1 v-html="messages.begin.title"></h1>
                <p v-html="messages.begin.text"></p>
                <button v-html="messages.begin.button" class="begin_message" v-on:click="reset = !reset"></button>
            </div>

            <!-- Set-up questions -->
            <div v-if="!reset && !end && progress === questions.indexOf(question)" v-for="question in questions" class="question">
                <p v-html="question.question" class="ask"></p>
                <p v-html="question.desc"></p>
                <div class="mobile-btn">
                    <button v-on:click="progress += 1" v-html="buttons.yes" class="choicebutton"></button>
                    <button v-on:click="end = !end" v-html="buttons.no" class="choicebutton-no"></button>
                </div>
            </div>



            <!-- Select map type -->
            <div v-if="progress === questions.length">
                <p v-html="messages.ready"></p>
                <div v-for="type in typeofmaps" v-if="slides.current === typeofmaps.indexOf(type)" class="category">
                    <h2 v-html="type.category"></h2>
                    <p v-html="type.description"></p>

                    <div class="category_examples">
                        <p v-html="messages.menu.example"></p>
                        <p v-html="example" v-for="example in type.examples" class="example"></p>
                    </div>

                    <div class="category_focus">
                        <p v-html="messages.menu.focus"></p>
                        <button v-html="focus" v-for="focus in type.focus" v-on:click='active = types.find(x => x.name === focus); progress += 1' class='focus-btn'></button>
                    </div>      
                </div>
            </div>

            <!-- 2nd series Questions -->
            <div v-if="active !== 0 && !end && !reset" v-for="question in active.data" >
                <div v-if="active.data.indexOf(question) > 0 && progress === questions.length + active.data.indexOf(question)">
                    <p v-html="`${messages.menu.question} ${question.question}?`" class="ask"></p>
                    <p v-html="question.desc"></p>
                    <div class="mobile-btn">
                        <button v-on:click="end = !end" v-html="buttons.yes" class="choicebutton"></button>
                        <button v-on:click="progress += 1" v-html="buttons.no" class="choicebutton-no"></button>
                    </div>
                </div>   
            </div>

            <!-- Reached the end -->
            <div v-if="active !== 0 && progress === (questions.length + active.data.length)">
                <p v-html="messages.end"></p>
            </div>
            
            <!-- Question answers -->
            <div v-if="end">
                <div v-if="progress < questions.length">
                    <p v-html="questions[progress].no"></p>
                </div>
                <div v-if="active !== 0 && questions.length < progress < (questions.length + active.data.length)">
                    <p v-html="active.data[progress - questions.length].no" class="answer"></p>
                </div>
            </div>

            <!-- Buttons -->
            <div class="buttons">
                <button v-html="buttons.prev" v-bind:disabled='true' v-if="progress === questions.length && slides.current === 0" class="menu-button"></button>  
                <button v-html="buttons.prev" v-on:click="slides.current -= 1" v-if="progress === questions.length && slides.current > 0" class="menu-button"></button>  

                <button v-html="buttons.next" v-on:click='slides.current += 1; slides.prev = false' v-if="progress === questions.length && (slides.current + 1) < typeofmaps.length" class="menu-button"></button>           
                <button v-html="buttons.next" v-bind:disabled='true' v-if="progress === questions.length && (slides.current + 1) === typeofmaps.length" class="menu-button"></button>
                
                <button v-if="!end && !reset && progress === 0" v-bind:disabled='true' v-html="buttons.back" class="menu-button"></button>
                <button v-if="!end && progress > 0 && progress !== questions.length + 1 && progress !== questions.length" v-on:click='progress -= 1' v-html="buttons.back" class="menu-button"></button>
                <button v-if="!end && progress > questions.length" v-on:click="progress = questions.length" v-html="buttons.menu" class="menu-button"></button>
                <button v-on:click="reset = !reset; progress = 0; slides.current = 0" v-if="!reset && !end" v-html="buttons.reset" class="resetbutton"></button>

                <button v-on:click='end = !end' v-if="end" v-html="buttons.question" class="menu-button" id="question-btn"></button>
                <button v-on:click="reset = !reset; end = !end; progress = 0; slides.current = 0" v-if="end" v-html="buttons.reset" class="resetbutton"></button>
            </div>
        </div>

        <div class="extra">  
            <div class="item" v-for="item in boxs">       
                <h2 v-html="item.title"></h2>
                <p v-html="item.desc"></p>
                <a v-bind:href="item.button.link"><button v-html="item.button.text"></button></a>
            </div>
        </div>
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
            bar: 0,
            slides:{
                current: 0
            },
            messages:{
                begin: {
                    title: 'Flowchart',
                    text: 'Dont know where to start but you want to start making a map? Press this button and see what you need to do. After every question is a description on what you could do and a link to specific page and / or cheatsheets',
                    button:'I want to make a map',
                },
                ready: 'What kind of map do you want to make?',
                end: 'You are at the end',
                setup: 'Set-up:',
                menu:{
                    question: 'Do you need',
                    example: 'Such as:',
                    focus: 'Focus on:'
                }
            },
            buttons:{
                back: '<span class="iconify" data-inline="false" data-icon="fa-solid:angle-left" style="color: #ffffff; font-size: 40px;"></span>',
                menu: '<span class="iconify" data-inline="false" data-icon="fa-solid:angle-double-left" style="color: #ffffff; font-size: 40px;"></span>',
                reset: '<span class="iconify" data-inline="false" data-icon="fa-solid:window-close" style="color: #ffffff; font-size: 40px;"></span>',
                question: 'Back to question',
                yes: 'yes',
                no: 'no',
                prev:'<span class="iconify" data-inline="false" data-icon="fa-solid:caret-left" style="color: #ffffff; font-size: 40px;"></span>',
                next: '<span class="iconify" data-inline="false" data-icon="fa-solid:caret-right" style="color: #ffffff; font-size: 40px;"></span>'
            },
            boxs:[
                {
                    title: 'RLbot',
                    desc: 'Interested in making Rocket league bots work in custom maps?',
                    button: {
                        text: 'Read more',
                        link: '../guide/misc/05_bots'
                    }
                },
                {
                    title: 'Old flowchart',
                    desc: 'Still interested in the old flowchart? It is still here somewhere',
                    button: {
                        text: 'Go back in time',
                        link: '/'
                    }
                }
            ],
            questions: [
            {
                question: 'Do you have UDK installed?',
                desc: 'A small description to add some text to the question!',
                no: 'Download UDK <a href="/">A link</a><br>More text'
            },
            {
                question: 'Do you want to make 3D objects?',
                desc: 'A small description to add some text to the question!',
                no: 'Look online for 3d objects'
            },
            {
                question: 'Do you have 3d modelling software?',
                desc: 'A small description to add some text to the question!',
                no: 'Download blender'
            },
            {
                question: 'Do you have image editing software?',
                desc: 'A small description to add some text to the question!',
                no: 'Download Paint.net or GIMP'
            },
            {
                question: 'Is UDK set up?',
                desc: 'A small description to add some text to the question!',
                no: 'Set up UDK'
            },
            {
                question: 'Do you have .FBX meshes?',
                desc: 'A small description to add some text to the question!',
                no: 'Blender basics'
            },
            {
                question: 'Do you have .TGA textures?',
                desc: 'A small description to add some text to the question!',
                no: 'Texture basics'
            }
            ],
            typeofmaps:[
                {
                    category: 'Challenge map',
                    description: 'A small description to explain some things or just quote',
                    examples: [
                        'Rings', 'Parkour', 'Racing', 'Platforms'
                    ],
                    focus:[
                        'Detail', 'Kismet', 'Meshes'
                    ]
                },
                {
                    category: 'Custom soccar map',
                    description: 'A small description to explain some things or just quote',
                    examples: [
                        'Rocket Labs', 'Map rebuild'
                    ],
                    focus:[
                        'Detail', 'Materials', 'Meshes', 'Animations'
                    ]
                },
                {
                    category: 'Non-competitive map',
                    description: 'A small description to explain some things or just quote',
                    examples: [
                        'Exploration', 'Puzzle', 'Art'
                    ],
                    focus:[
                        'Detail', 'Kismet', 'Meshes', 'Materials'
                    ]
                },
                {
                    category: 'Custom game mode',
                    description: 'A small description to explain some things or just quote',
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
                            desc: 'A small description to add some text to the question!',
                            no: 'UDK -Basics - starting a map'
                        },
                        {
                            question: 'Obstacles',
                            desc: 'A small description to add some text to the question!',
                            no: 'Blender basics - modeling'
                        },
                        {
                            question: 'Complex sufaces',
                            desc: 'A small description to add some text to the question!',
                            no: 'Blender Advanced - Modifiers'
                        },
                        {
                            question: 'Rocket League Assets',
                            desc: 'A small description to add some text to the question!',
                            no: 'UDK Advanced - Dummy assets'
                        },
                        {
                            question: 'Help importing / exporting',
                            desc: 'A small description to add some text to the question!',
                            no: 'Blender Basics - FBX Export'
                        }
                    ]
                },
                {
                    name: 'Detail',
                    data:[{},
                        {
                            question: 'Player / ball spawns',
                            desc: 'A small description to add some text to the question!',
                            no: 'UDK Basics - Starting a map'
                        },
                        {
                            question: 'Goals or teleporters',
                            desc: 'A small description to add some text to the question!',
                            no: 'Blender Basics - modeling'
                        },
                        {
                            question: 'Boost pads',
                            desc: 'A small description to add some text to the question!',
                            no: 'Blender Advanced - modifiers'
                        },
                        {
                            question: 'Special effects',
                            desc: 'A small description to add some text to the question!',
                            no: 'Blender basics - FBX export'
                        }
                        
                    ]
                },
                {
                    name: 'Kismet',
                    data:[{},
                        {
                            question: 'Teleporters',
                            desc: 'A small description to add some text to the question!',
                            no: 'UDK Basics - Gameplay Items'
                        },
                        {
                            question: 'Scores or Game stats',
                            desc: 'A small description to add some text to the question!',
                            no: 'UDK Advanced - Kismet'
                        },
                        {
                            question: 'Button presses',
                            desc: 'A small description to add some text to the question!',
                            no: 'UDK Advanced - Kismet'
                        }
                    ]
                },
                {
                    name: 'Materials',
                    data:[{},
                        {
                            question: 'solid colors',
                            desc: 'A small description to add some text to the question!',
                            no: 'UDK Advanced - custom materials'
                        },
                        {
                            question: 'custom textures',
                            desc: 'A small description to add some text to the question!',
                            no: 'UDK Advanced - custom materials'
                        },
                        {
                            question: 'rocket league materials',
                            desc: 'A small description to add some text to the question!',
                            no: 'UDK Advanced - Dummy Assets'
                        },
                        {
                            question: 'multiple materials on one mesh',
                            desc: 'A small description to add some text to the question!',
                            no: 'Blender basics - UV maps and materials'
                        }
                    ]
                },
                {
                    name: 'Bakkesmod',
                    data:[{},
                        {
                            question: 'Question 1',
                            desc: 'A small description to add some text to the question!',
                            no: 'Answer 1'
                        },
                        {
                            question: 'Question 2',
                            desc: 'A small description to add some text to the question!',
                            no: 'Answer 2'
                        }
                    ]
                },
                {
                    name: 'Animations',
                    data:[{},
                        {
                            question: 'Simple loops',
                            desc: 'A small description to add some text to the question!',
                            no: 'UDK Advanced - Matinee'
                        },
                        {
                            question: 'Moving collisions',
                            desc: 'A small description to add some text to the question!',
                            no: 'UDK Advanced - TBD'
                        },
                        {
                            question: 'Movable objects',
                            desc: 'A small description to add some text to the question!',
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
// variables
bg-color = #222222
second-color = #333333
btn-disabled = #121212
text-color = #ffffff

.flowchart{
    background-color: bg-color;
    padding: 7px;
    border-radius: 5px;
    min-height: 350px;
    overflow: auto;
}

// buttons
.buttons, .mobile-btn{
    display: flex;
    flex-direction: row;
    flex-wrap: nowrap;
}
button{
    padding: 8px;
    margin: 5px 5px 5px 16px;
    border-radius: 4px;
    background-color: second-color;
    color: text-color
    width: 100px;
    border: none;
}
.choicebutton{
    text-transform: uppercase;
    padding: 14px 0 14px 0;
    margin: 30px 0 15px 16px;
    width: 150px;
    font-size: 18px;
    font-weight: 500;
}
.choicebutton-no{
    text-transform: uppercase;
    padding: 14px 0 14px 0;
    margin: 30px 0 15px 16px;
    width: 150px;
    font-size: 18px;
    font-weight: 500;
}
.choicebutton-no:hover{
    background: #B33;
}
.resetbutton, .menu-button, .returnbutton{
    max-width: 70px;
    height: 50px;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: row;
}
.resetbutton{
    margin-left: auto;
}
.resetbutton:hover{
    background: #B33;
}
#question-btn{
    max-width: 300px;
    width: 180px
}
.focus-btn{
    max-width:180px;
}
button:hover, .item a button:hover{
    background-color: var(--accentColor);
}
button:disabled, button[disabled]{
    background-color: btn-disabled
}

// Text
h1, h2{
    border: none;
    margin-bottom: 6px;
}
p{
    padding-left: 16px;
    margin: 3px;
}

// Intro
.begin{
    display: flex;
    align-items: center;
    flex-direction: column;
    margin-top: 30px;
}
.begin p{
    text-align: center;
    max-width: 80%;
}
.begin_message{
    width: 250px;
    height: 50px;
    font-size: 16px;
    margin: 20px 0 50px 0;
}

// Setup progress
.progress{
    text-align: center;
    padding: 10px;
}

// Question
.ask{
    font-size: 32px;
    font-weight: 600;
}

// answer
.answer{
    margin:16px 0;
    margin-bottom: auto;
}

// Selecting map type
.category{
    border-radius: 3px;
    background-color: second-color;
    margin: 4px;
    padding: 6px;
}
.category h2{
    padding-left: 16px;
    margin: 6px 0 2px 0;
}
.category_examples{
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    background-color: bg-color;
    padding: 3px;
    margin: 0 16px 0 16px;
    border-radius:3px;
}
.category_focus{
    background-color: bg-color;
    border-radius: 3px;
    padding: 10px 0 10px 0;
    margin: 8px 16px 8px 16px;
}

// 2 bottom items
.extra{
    display: flex;
    flex-direction: row;
    align-items: center;
    margin-top: 25px;
}
.item{
    padding-left: 25px;
    border-radius: 8px;
    background-color: bg-color;
    width: 45%;
    margin: 10px;
    height: 200px;
}
.item h2{
    margin-bottom: 7px;
}
.item p{
    margin-top: 6px;
    max-width: 250px;
    padding-left: 0px;
}
.item a button{
    margin: 5px 12px 15px 0;
    width: 200px;
    height: 40px;
}

// responsive
@media screen and (max-width: 935px) {
    .extra{
        flex-direction: column;
    }
    .item{
        display: flex;
        flex-direction: column;
        justify-content: center;
        padding-right: 8px;
        width: 90%;
    }
}
@media screen and (max-width: 700px) {
    .flowchart{
        min-height: 400px;
    }
    .ask{
        font-size:24px;
    }
}
</style>