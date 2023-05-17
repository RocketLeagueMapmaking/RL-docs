<!-- eslint-disable vue/no-v-html -->
<template>
    <div>
        <div class="flowchart">
            <!-- Begin message -->
            <div
                v-if="reset"
                class="begin"
            >
                <h1>
                    {{ messages.begin.title }}
                </h1>
                <p v-html="messages.begin.text" />
                <button
                    class="begin_message"
                    @click="reset = !reset"
                > 
                    {{ messages.begin.button }}
                </button>
            </div>

            <!-- Set-up questions -->
            <div
                v-for="(question, i) in setupQuestions"
                :key="question.question"
                class="question"
            >
                <div v-if="!reset && !end && setupProgress === i">
                    <p class="ask">
                        {{ question.question }}
                    </p>
                    <p v-html="question.desc" />
        
                    <div class="mobile-btn">
                        <button
                            class="choicebutton"
                            @click="setupProgress += 1"
                        > 
                            {{ buttons.yes }}
                        </button>
                        <button
                            class="choicebutton-no"
                            @click="end = !end"
                        > 
                            {{ buttons.no }}
                        </button>
                    </div>
                </div>
            </div>

            <!-- Select map type -->
            <div v-if="setupProgress === setupQuestions.length && followupCategory.length === 0">
                <p> {{ messages.ready }} </p>
                <div
                    v-for="(type, j) in mapCategories"
                    :key="type.category"
                    :class="{ category: categoryIndex === j }"
                >
                    <div v-if="categoryIndex === j">
                        <h2> {{ type.category }} </h2>
                        <p> {{ type.description }} </p>

                        <div class="category_examples">
                            <p> {{ messages.menu.example }} </p>
                            <p
                                v-for="example in type.examples"
                                :key="example"
                                class="example"
                            >
                                <code>{{ example }}</code>
                            </p>
                        </div>

                        <div class="category_focus">
                            <p> {{ messages.menu.focus }} </p>
                            <button
                                v-for="focus in type.focus"
                                :key="focus"
                                class="focus-btn"
                                @click="followupCategory = followupQuestions.find(x => x.name === focus).data"
                            > 
                                {{ focus }}
                            </button>
                        </div>      
                    </div>
                </div>
            </div>

            <!-- 2nd series Questions -->
            <div
                v-for="(question, k) in followupCategory"
                :key="question.question"
            >
                <div v-if="followupCategory.length > 0 && followupProgress === k && !end">
                    <p class="ask">
                        {{ `${messages.menu.question} ${question.question}?` }}
                    </p>
                    <p> {{ question.desc }} </p>
                    <div class="mobile-btn">
                        <button
                            class="choicebutton"
                            @click="end = !end"
                        > 
                            {{ buttons.yes }}
                        </button>
                        <button
                            class="choicebutton-no"
                            @click="followupProgress += 1"
                        > 
                            {{ buttons.no }}
                        </button>
                    </div>
                </div>   
            </div>

            <!-- Reached the end -->
            <div
                v-if="followupCategory.length > 0 && followupProgress === followupCategory.length"
                style="display:flex; align-items:center; justify-content:center;"
            >
                <p> {{ messages.end }} </p>
            </div>
            
            <!-- Question answers -->
            <div v-if="end">
                <div v-if="setupProgress < setupQuestions.length">
                    <p v-html="setupQuestions[setupProgress].no" />
                </div>
                <div v-else-if="followupCategory.length > 0">
                    <p
                        class="answer"
                        v-html="followupCategory[followupProgress].no"
                    />
                </div>
            </div>

            <!-- Buttons -->
            <div class="buttons">
                <button
                    v-if="setupProgress === setupQuestions.length && followupCategory.length === 0"
                    :disabled="categoryIndex === 0"
                    class="menu-button"
                    @click="categoryIndex -= 1"
                >
                    <span
                        class="iconify"
                        :data-icon="buttons.prev"
                    />
                </button>

                <button
                    v-if="setupProgress === setupQuestions.length && followupCategory.length === 0"
                    :disabled="(categoryIndex + 1) === mapCategories.length"
                    class="menu-button"
                    @click="categoryIndex += 1"
                >
                    <span
                        class="iconify"
                        :data-icon="buttons.next"
                    />
                </button>

                <!-- if not hidden, the previous button will have a default left icon -->
                <button
                    v-if="setupProgress === setupQuestions.length && followupCategory.length === 0"
                    :disabled="(categoryIndex + 1) === mapCategories.length"
                    :hidden="true"
                    @click="categoryIndex += 1"
                />
                
                <!-- To previous question in the setup questions -->
                <button
                    v-if="!end && !reset && setupProgress < setupQuestions.length"
                    :disabled="setupProgress === 0"
                    class="menu-button"
                    @click="setupProgress -= 1"
                >
                    <span
                        class="iconify"
                        :data-icon="buttons.back"
                    />
                </button>

                <!-- Back to category menu -->
                <button
                    v-if="!end && followupCategory.length > 0"
                    class="menu-button"
                    @click="setupProgress = setupQuestions.length; followupProgress = 0; followupCategory = [];"
                >
                    <span
                        class="iconify"
                        :data-icon="buttons.menu"
                    />
                </button>

                <!-- Return to question -->
                <button
                    v-if="end"
                    id="returnbutton"
                    class="returnbutton"
                    @click="end = !end"
                >
                    <span
                        class="iconify"
                        :data-icon="buttons.return"
                    />
                </button>

                <!-- Reset buttons -->
                <button
                    v-if="end"
                    class="resetbutton"
                    @click="end = !end; resetChart()"
                >
                    <span
                        class="iconify"
                        :data-icon="buttons.reset"
                    />
                </button>

                <button
                    v-if="!reset && !end"
                    class="resetbutton"
                    @click="resetChart()"
                >
                    <span
                        class="iconify"
                        :data-icon="buttons.reset"
                    />
                </button>
            </div>
        </div>
    </div>
</template>

<script>
import { flowChart } from '../configs/index.js'

const { setupQuestions, followupQuestions, mapCategories } = flowChart

export default{
    data(){
        return {
            // Track progress in the setup questions
            setupProgress: 0,
            // Track progress in the 2nd serie of questions
            followupProgress: 0,
            categoryIndex: 0,
            followupCategory: [],
            reset: true,
            end: false,
            messages: {
                begin: {
                    title: 'How do I start?',
                    text: 'Don\'t know where to start? This flowchart should help.<br>Each answer contains useful links and relevant information.<br>',
                    button: 'I want to make a custom map',
                },
                ready: 'What kind of map do you want to make?',
                end: 'You are at the end',
                setup: 'Set-up:',
                menu: {
                    question: 'Do you need',
                    example: 'Such as:',
                    focus: 'Focus on:'
                }
            },
            buttons: {
                back: 'fa-solid:angle-left',
                menu: 'fa-solid:angle-double-left',
                reset: 'fa-solid:undo-alt',
                return: 'fa-solid:level-down-alt',
                prev: 'fa-solid:caret-left',
                next: 'fa-solid:caret-right',
                yes: 'yes',
                no: 'no'
            },
            followupQuestions,
            mapCategories,
            setupQuestions
        }
    }, 

    methods: {
        resetChart () {
            this.setupProgress = 0 
            this.followupProgress = 0 
            this.categoryIndex = 0
            this.reset = !this.reset
            this.followupCategory = []
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
    display: flex;
    flex-direction: column;
    justify-content: space-between;
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

.iconify {
  color: #ffffff; 
  font-size: 40px;
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
