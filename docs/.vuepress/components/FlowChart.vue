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
                        <p v-for="example in type.examples" class="example"><code>{{ example }}</code></p>
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

                <button v-on:click='end = !end' v-if="end" v-html="buttons.return" class="returnbutton" id="returnbutton"></button>

                <button v-on:click="reset = !reset; end = !end; progress = 0; slides.current = 0" v-if="end" v-html="buttons.reset" class="resetbutton"></button>
                <button v-on:click="reset = !reset; progress = 0; slides.current = 0" v-if="!reset && !end" v-html="buttons.reset" class="resetbutton"></button>
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
                    title: 'How do I start?',
                    text: 'Don\'t know where to start? This flowchart should help.<br>Each answer contains useful links and relevant information.<br>',
                    button:'I want to make a custom map',
                },
                ready: '<h2>What kind of map do you want to make?</h2>',
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
                reset: '<span class="iconify" data-inline="false" data-icon="fa-solid:undo-alt" title="Restart" style="color: #ffffff; font-size: 40px;"></span>',
                return: '<span class="iconify" data-inline="false" data-icon="fa-solid:level-down-alt" data-rotate="90deg" title="Return" style="color: #ffffff; font-size: 40px;"></span>',
                yes: 'yes',
                no: 'no',
                prev:'<span class="iconify" data-inline="false" data-icon="fa-solid:caret-left" style="color: #ffffff; font-size: 40px;"></span>',
                next: '<span class="iconify" data-inline="false" data-icon="fa-solid:caret-right" style="color: #ffffff; font-size: 40px;"></span>'
            },

            questions: [
            {
                question: 'Do you have UDK installed?',
                desc: '<b>UDK</b>, or the <b>Unreal Development Kit</b>, is the program used to create games in Unreal Engine 3. Since Rocket League is made with this tool, we have to use it too.',
                no: 'If you are new to UDK, <b>I recommend that you follow most of this website in order.</b><br><br>\
                To install UDK you may <a href="https://github.com/RocketLeagueMapmaking/UDK_RL_Setup" target="_blank">use the Easy Installer,</a><br>\
                or <a href="https://drive.google.com/file/d/1ozqiKBgcWSgcq7X5J6g0AErKyevjMRwd/view" target="_blank">do it yourself.</a><br><br>\
                Either way, please follow the <b>Installing UDK</b> tutorial sections.<br>'
            },
            {
                question: 'Do you want to make 3D objects?',
                desc: 'Rocket League maps are made of 3D assets called <b>meshes.</b><br>\
                You will have to get used to manipulating them in UDK, but you don\'t necessarily need to make them yourself.',
                no: 'UDK has a built-in tool called CSG that some find useful. However, it has severe limitations and will result in boxy, simple-looking maps.<br><br>\
                For more detail, websites such as <a href="https://sketchfab.com/" target="_blank">Sketchfab</a> or <a href="https://www.cgtrader.com/free-3d-models" target="_blank">cgtrader</a> offer some free 3D models.\
                The quality and versatility of free assets is wildly inconsistent, so your mileage may vary.\
                Alternatively, you might find some people in the community willing to make 3D models for you.<br><br>\
                <b>But most importantly,</b> please do not beg for or expect free 3D models. Some people go to university specifically to learn these skills, and it\'s hard work.<br><br>\
                This website has extensive tutorials to help you learn how to make your own, which is my recommendation.'
            },
            {
                question: 'Do you have 3D modelling software?',
                desc: 'To create or modify models for UDK, you will need 3D software. Much of this website will reference Blender, \
                but if you are already familiar with another one, please use that!',
                no: 'I wholeheartedly recommend <a href="https://www.blender.org/" target="_blank">Blender</a>. It is a free and tremendously powerful 3D creation suite and\
                is the most popular 3D software for indie game developers. This website features numerous guides for Blender.<br><br>\
                If you are a university student, you should be able to get Autodesk software like \
                <a href="https://www.autodesk.com/products/3ds-max/" target="_blank">3DS Max,</a>\
                <a href="https://www.autodesk.com/products/maya/" target="_blank">Maya</a>\
                 or <a href="https://www.autodesk.com/products/autocad/" target="_blank">AutoCAD</a>\
                , which are normally very expensive.<br><br>\
                Other free programs such as \
                <a href="https://www.sketchup.com/" target="_blank">Sketchup</a>\
                or <a href="https://www.daz3d.com/" target="_blank">Daz Studio</a>\
                 are typically for a more focused purpose, but may be useful.<br><br>\
                And lastly, more traditional CAD software such as \
                <a href="https://www.solidworks.com/" target="_blank">SolidWorks</a>\
                 and <a href="https://www.autodesk.com/products/fusion-360/" target="_blank">Fusion 360</a>\
                 are options, but will typically require a program like Blender to convert to UDK\'s file formats.<br>'
            },
            {
                question: 'Do you have image editing software?',
                desc: 'Friends don\'t let friends use Paint. To create graphics, textures, thumbnails, and many other things, \
                you will want a capable image editor. It should support layers and the .tga image format, at the very least.',
                no: 'A number of great programs are available for free, such as \
                <a href="https://www.getpaint.net/download.html#download" target="_blank">Paint.net,</a> \
                <a href="https://www.gimp.org/downloads/" target="_blank">GIMP,</a> \
                <a href="https://krita.org/en/download/krita-desktop/" target="_blank">or Krita</a>.\
                These are what are technically known as <b>raster image editors</b> because they operate on pixels.<br><br>\
                As an alternative, <b>vector image editors</b> allow you to manipulate and reshape components after creating them, without being tied to pixels or image resolution. \
                <a href="https://inkscape.org/release/inkscape-1.0.1/" target="_blank">Inkscape</a> is the best free option, but a number of in-browser options are also free.<br><br>\
                The most widely-used (raster) image editor is \
                <a href="https://www.adobe.com/products/photoshop.html" target="_blank">Adobe Photoshop</a>, but it is rather expensive. \
                Similarly, the most widely-used vector editor is <a href="https://www.adobe.com/products/illustrator.html" target="_blank">Adobe Illustrator</a>.<br><br>\
                If you wish to create a custom, animated HUD within Rocket League, you will need to create Flash objects with \
                <a href="https://www.adobe.com/devnet/author_bios/adobe_fl.html" target="_blank">Adobe Flash</a>, which is officially dead as of January 1, 2021. \
                If you are reading this after 2016 and want Flash, your best bet is to... \"sail the high seas.\" But you didn\'t hear that from me.'
            },
            {
                question: 'Is UDK set up?',
                desc: 'After installing UDK 2015, a number of additional setup steps are required. These will be explained in detail.<br><br>\
                If you installed using the <a href="https://github.com/RocketLeagueMapmaking/UDK_RL_Setup" target="_blank">Easy Installer script</a>, then UDK is fully set up.',
                no: 'Follow the <b>Installing UDK</b> section of this website to get UDK fully configured to create Rocket League maps!\
                A number of files must be added and modified to enable features like boost or goals.'
            },
            {
                question: 'Do you have .FBX meshes?',
                desc: '3D objects must be in the .FBX filetype for UDK. Programs like Blender or Maya may be used to create them.',
                no: 'There are a number of places you can find free 3D resources online to get started. \
                If you can make your own 3D models, your projects will be more unique and interesting.<br><br>\
                Several wonderful modders have created repositories of Rocket League assets you are welcome to use. Visit \
                <a href="https://drive.google.com/drive/folders/0B1VfmKjZuD8OYVlURld3ZFhTRk0" target="_blank">JimJoms\' One-Stop-Chop-Shop</a> for models, or add the \
                <a href="https://drive.google.com/file/d/1rpQzqHgoRgpOBSHEpeDwvRtG3sYUXacl/view" target="_blank">Park_P Not-Fully-Dummy Assets</a> package to UDK, replacing the one from the Dummy Assets. \
                This will all be explained in detail later in the guide.'
            },
            {
                question: 'Do you have .TGA textures?',
                desc: 'Textures must be in the .TGA image filetype for UDK. It is rare to create these completely from scratch, but \
                if you plan to create custom materials for your meshes, you will want high-quality images as a starting point.',
                no: 'As will be explained later, the <b>Dummy Assets</b> workflow allows you to essentially skip the step of creating \
                textures and materials. However, you will almost certainly want to create custom textures at some point. There are several sections \
                of this guide that will show exactly how to do that.'
            }
            ],
            typeofmaps:[
                {
                    category: 'Challenge Map',
                    description: 'A test of mechanical control',
                    examples: [
                        'Rings', 'Parkour', 'Dribble Challenge'
                    ],
                    focus:[
                        'Detail', 'Kismet', 'Meshes'
                    ]
                },
                {
                    category: 'Custom Soccar Map',
                    description: 'A standard(ish) map with your own aesthetics',
                    examples: [
                        'Rocket Labs', 'RFH Stadium', 'Spiderball'
                    ],
                    focus:[
                        'Detail', 'Materials', 'Meshes', 'Animations'
                    ]
                },
                {
                    category: 'Non-Competitive Map',
                    description: 'A map to play at your own pace',
                    examples: [
                        'Escape Room', 'Puzzle', 'Hide and Seek'
                    ],
                    focus:[
                        'Detail', 'Kismet', 'Meshes', 'Materials'
                    ]
                },
                {
                    category: 'Custom Game Mode',
                    description: 'A completely new game built within a game',
                    examples: [
                        'Among Us', 'Tumble', 'Capture the Flag'
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
                            question: 'Ground and Collisions',
                            desc: 'Surfaces for the player to drive on',
                            no: '<a href="../guide/udk/02_udk_basics.html#starting-a-map" target="_blank">UDK Basics - Starting a Map</a>'
                        },
                        {
                            question: 'Obstacles',
                            desc: 'Objects for the player to avoid',
                            no: '<a href="../guide/blender/04_modeling.html#modeling" target="_blank">Blender Basics - Modeling</a>'
                        },
                        {
                            question: 'Help Importing / Exporting',
                            desc: 'Struggling to get your custom mesh into Rocket League?',
                            no: '<a href="../guide/blender/05_fbx.html#fbx-export" target="_blank">Blender Basics - FBX Export</a>'
                        },
                        {
                            question: 'Complex Surfaces',
                            desc: 'Interesting geometry with twists and turns',
                            no: '<a href="../guide/blender/12_modifiers.html#modifiers" target="_blank">Blender Advanced - Modifiers</a>'
                        },
                        {
                            question: 'Rocket League Assets',
                            desc: 'Objects from the game itself',
                            no: '<a href="../guide/udk/14_dummy_assets.html" target="_blank">UDK Advanced - Dummy Assets</a>'
                        }
                    ]
                },
                {
                    name: 'Detail',
                    data:[{},
                        {
                            question: 'Player / Ball Spawns',
                            desc: 'It\'s nice to be able to exist',
                            no: '<a href="../guide/udk/09_game_items.html" target="_blank">UDK Basics - Game Items</a>'
                        },
                        {
                            question: 'Goals or Teleporters',
                            desc: 'Regions that interact with the player or ball',
                            no: '<a href="../guide/udk/09_game_items.html#goalvolume-ta" target="_blank">UDK Basics - Game Items</a>'
                        },
                        {
                            question: 'Boost Pads',
                            desc: 'Everyone\'s favorite orange orbs',
                            no: '<a href="../guide/udk/10_boost.html" target="_blank">UDK Basics - Boost</a>'
                        },
                        {
                            question: 'Special Effects',
                            desc: 'Anything and everything that makes the map unique',
                            no: '<a href="../guide/misc/01_misc.html" target="_blank">Miscellaneous Guides</a>'
                        }
                        
                    ]
                },
                {
                    name: 'Kismet',
                    data:[{},
                        {
                            question: 'Triggers or Checkpoints',
                            desc: 'Logic to add meaningful features',
                            no: '<a href="../guide/kismet/03_trigger.html" target="_blank">Kismet - Trigger Volumes</a>'
                        },
                        {
                            question: 'Scores or Game Stats',
                            desc: 'Access to game information, or inserting your own game information',
                            no: '<a href="../guide/kismet/06_advanced.html" target="_blank">Kismet - Advanced</a>'
                        },
                        {
                            question: 'Button Presses',
                            desc: 'A small description to add some text to the question!',
                            no: '<a href="../guide/kismet/06_advanced.html" target="_blank">Kismet - Advanced</a>'
                        }
                    ]
                },
                {
                    name: 'Materials',
                    data:[{},
                        {
                            question: 'Solid Colors',
                            desc: 'Brought to you by Roy G. Biv',
                            no: '<a href="../guide/udk/07_materials.html#making-a-solid-color-material" target="_blank">UDK Basics - Materials</a>'
                        },
                        {
                            question: 'Custom Textures',
                            desc: 'Stone, wood, metal, slime, clouds, or any combination of those five',
                            no: '<a href="../guide/udk/16_custom_material.html#custom-materials" target="_blank">UDK Advanced - Custom Materials</a>'
                        },
                        {
                            question: 'Rocket League Materials',
                            desc: 'Assets from the game',
                            no: '<a href="../guide/udk/14_dummy_assets.html#dummy-materials" target="_blank">UDK Advanced - Dummy Assets</a>'
                        },
                        {
                            question: 'Multiple Materials on One Mesh',
                            desc: 'A wall with glass panels or a number 2 pencil',
                            no: '<a href="../guide/blender/06_uv.html#multi-material-objects" target="_blank">Blender Basics - UV Maps and Materials</a>'
                        }
                    ]
                },
                {
                    name: 'Bakkesmod',
                    data:[{},
                        {
                            question: 'Fully Custom Car or Ball Behavior',
                            desc: 'Cars that levitate, balls that teleport',
                            no: '<a href="https://www.bakkesmod.com/sdk.php" target="_blank">Bakkesmod SDK</a>'
                        }
                    ]
                },
                {
                    name: 'Animations',
                    data:[{},
                        {
                            question: 'Simple Loops',
                            desc: 'Spinning fans or sailing boats',
                            no: '<a href="../guide/udk/17_matinee.html#matinee" target="_blank">UDK Advanced - Matinee</a>'
                        },
                        {
                            question: 'Moving Collisions',
                            desc: 'Moving platforms or swinging hammers',
                            no: '<a href="../guide/udk/18_kactors.html" target="_blank">UDK Advanced - KActors</a>'
                        },
                        {
                            question: 'Movable Objects',
                            desc: 'Breakable walls or fake game balls',
                            no: '<a href="../guide/udk/18_kactors.html" target="_blank">UDK Advanced - KActors</a>'
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
    margin: 5px 5px 5px 16px;
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