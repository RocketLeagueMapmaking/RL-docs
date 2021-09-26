<template>
  <div>
    <div class="flowchart">
      <script src="https://code.iconify.design/1/1.0.6/iconify.min.js" />

      <!-- Begin message -->
      <div
        v-if="reset"
        class="begin"
      >
        <h1>
          {{ messages.begin.title }}
        </h1>
        <p> {{ messages.begin.text }} </p>
        <button
          class="begin_message"
          @click="reset = !reset"
        > 
          {{ messages.begin.button }}
        </button>
      </div>

      <!-- Set-up questions -->
      <div
        v-for="question in questions"
        :key="question"
        class="question"
      >
        <div v-if="!reset && !end && progress === questions.indexOf(question)">
          <p class="ask">
            {{ question.question }}
          </p>
          <p> {{ question.desc }} </p>
        
          <div class="mobile-btn">
            <button
              class="choicebutton"
              @click="progress += 1"
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
      <div v-if="progress === questions.length">
        <p> {{ messages.ready }} </p>
        <div
          v-for="type in typeofmaps"
          :key="type"
          class="category"
        >
          <div v-if="slides.current === typeofmaps.indexOf(type)">
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
                @click="active = types.find(x => x.name === focus); progress += 1"
              > 
                {{ focus }}
              </button>
            </div>      
          </div>
        </div>
      </div>

      <!-- 2nd series Questions -->
      <div
        v-for="question in active.data"
        :key="question"
      >
        <div v-if="(active !== 0 && !end && !reset) && active.data.indexOf(question) > 0 && progress === questions.length + active.data.indexOf(question)">
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
              @click="progress += 1"
            > 
              {{ buttons.no }}
            </button>
          </div>
        </div>   
      </div>

      <!-- Reached the end -->
      <div v-if="active !== 0 && progress === (questions.length + active.data.length)">
        <p> {{ messages.end }} </p>
      </div>
            
      <!-- Question answers -->
      <div v-if="end">
        <div v-if="progress < questions.length">
          <p> {{ questions[progress].no }} </p>
        </div>
        <div v-if="active !== 0 && questions.length < progress < (questions.length + active.data.length)">
          <p class="answer">
            {{ active.data[progress - questions.length].no }}
          </p>
        </div>
      </div>

      <!-- Buttons -->
      <div class="buttons">
        <button
          v-if="progress === questions.length && slides.current === 0"
          :disabled="true"
          class="menu-button"
        >
          {{ buttons.prev }}
        </button>

        <button
          v-if="progress === questions.length && slides.current > 0"
          class="menu-button"
          @click="slides.current -= 1"
        >
          {{ buttons.prev }}
        </button>

        <button
          v-if="progress === questions.length && (slides.current + 1) < typeofmaps.length"
          class="menu-button"
          @click="slides.current += 1; slides.prev = false"
        >
          {{ buttons.next }}
        </button>   
               
        <button
          v-if="progress === questions.length && (slides.current + 1) === typeofmaps.length"
          :disabled="true"
          class="menu-button"
        >
          {{ buttons.next }}
        </button>
                
        <button
          v-if="!end && !reset && progress === 0"
          :disabled="true"
          class="menu-button"
        >
          {{ buttons.back }}
        </button>
        
        <button
          v-if="!end && progress > 0 && progress !== questions.length + 1 && progress !== questions.length"
          class="menu-button"
          @click="progress -= 1"
        >
          {{ buttons.back }}
        </button>

        <button
          v-if="!end && progress > questions.length"
          class="menu-button"
          @click="progress = questions.length"
        >
          {{ buttons.menu }}
        </button>

        <button
          v-if="end"
          id="returnbutton"
          class="returnbutton"
          @click="end = !end"
        >
          {{ buttons.return }}
        </button>

        <button
          v-if="end"
          class="resetbutton"
          @click="reset = !reset; end = !end; progress = 0; slides.current = 0"
        >
          {{ buttons.reset }}
        </button>

        <button
          v-if="!reset && !end"
          class="resetbutton"
          @click="reset = !reset; progress = 0; slides.current = 0"
        >
          {{ buttons.reset }}
        </button>
      </div>
    </div>
  </div>
</template>

<script>
import { flowChart } from '../configs/index.js'

const { questions, types, typeofmaps } = flowChart

export default{
    data(){
        return {
            progress: 0,
            active: 0,
            reset: true,
            end: false,
            bar: 0,
            slides: {
                current: 0
            },
            messages: {
                begin: {
                    title: 'How do I start?',
                    text: 'Don\'t know where to start? This flowchart should help.<br>Each answer contains useful links and relevant information.<br>',
                    button: 'I want to make a custom map',
                },
                ready: '<h2>What kind of map do you want to make?</h2>',
                end: 'You are at the end',
                setup: 'Set-up:',
                menu: {
                    question: 'Do you need',
                    example: 'Such as:',
                    focus: 'Focus on:'
                }
            },
            buttons: {
                back: '<span class="iconify" data-inline="false" data-icon="fa-solid:angle-left" style="color: #ffffff; font-size: 40px;"></span>',
                menu: '<span class="iconify" data-inline="false" data-icon="fa-solid:angle-double-left" style="color: #ffffff; font-size: 40px;"></span>',
                reset: '<span class="iconify" data-inline="false" data-icon="fa-solid:undo-alt" title="Restart" style="color: #ffffff; font-size: 40px;"></span>',
                return: '<span class="iconify" data-inline="false" data-icon="fa-solid:level-down-alt" data-rotate="90deg" title="Return" style="color: #ffffff; font-size: 40px;"></span>',
                yes: 'yes',
                no: 'no',
                prev: '<span class="iconify" data-inline="false" data-icon="fa-solid:caret-left" style="color: #ffffff; font-size: 40px;"></span>',
                next: '<span class="iconify" data-inline="false" data-icon="fa-solid:caret-right" style="color: #ffffff; font-size: 40px;"></span>'
            },
            questions,
            types,
            typeofmaps
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
