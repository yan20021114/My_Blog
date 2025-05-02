<script setup>
import { ref, onMounted } from 'vue'

const text = ref('')
const fullText = 'Welcome To My Blog'
const typingSpeed = 100
const cursorVisible = ref(true)

function typeWriter() {
  if (text.value.length < fullText.length) {
    text.value = fullText.substring(0, text.value.length + 1)
    setTimeout(typeWriter, typingSpeed)
  } else {
    cursorVisible.value = false
    setTimeout(() => {
      text.value = ''
      cursorVisible.value = true
      typeWriter()
    }, 1000)
  }
}



onMounted(() => {
  typeWriter()
})
</script>

<template>
    <div class="container">
        <h1 class="title"><span class="typed-text">{{ text }}</span><span class="cursor" v-if="cursorVisible">&nbsp;</span></h1>
        <p class="qianming">代码如诗，Bug如谜</p>
        <div class="button-container">
            <button @click="$router.push('/home')"><img src="../assets/icons/start.svg" alt="Start icon" class="github-icon">Start</button>
            <button><img src="../assets/icons/github.svg" alt="Github icon" class="github-icon">Github</button>
        </div>
    </div>
</template>

<style scoped>
    .container {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        height: 100vh;
        background-image: url("../assets/img/bc.jpg");
        background-size: cover;
        background-position: center;
        background-blend-mode: lighten;
        overflow: hidden;
        position: fixed;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
    }
    .button-container {
        display: flex;
        justify-content: space-between;
        width: 250px;
        margin-top: 40px;
    }
    .title {
        font-size: 48px;
        color: #ffffff;
        text-shadow: 2px 2px 4px rgba(255, 255, 255, 0.2);
        font-weight: 600;
    }
    .qianming {
        font-size: 18px;
        color: #ffffff;
        margin-top: 0px;
    }
    button {
        display: flex;
        align-items: center;
        gap: 8px;
        padding: 12px 20px;
        border: 1px solid white;
        border-radius: 10px;
        background-color: transparent;
        color: white;
        font-weight: bold;
        cursor: pointer;
        box-shadow: 4px 4px 8px rgba(0, 0, 0, 0.2);
        transition: all 0.3s ease;
    }
    .github-icon {
        width: 20px;
        height: 20px;
    }

    button:hover {
        background-color: rgb(0, 255, 255, 0.5);
        transform: translateY(-2px);
    }
</style>