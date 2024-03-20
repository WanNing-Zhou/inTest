<template>
  <div id="quote-box">
    <div id="content">
      <div id="text">
        {{testData.quote}}
      </div>
      <div id="author">- {{testData.author}}</div>
      <div id="new-quote" @click="newHandle">new quote</div>
    </div>


  </div>
</template>

<script setup lang="ts">


import tests from '../assets/json/quotes.json'
import {ref} from "vue";

// 名言数组
const textArr = tests.quotes

// 当前数据
const testData = ref(textArr[0])
// 名言索引
let textIndex = 0


// 生成随即颜色
const generateRandomColor = () =>{
  const letters = '0123456789ABCDEF';
  let color = '#';
  for (let i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}

// 背景颜色
const color = ref(generateRandomColor())


// 生成新名言
const newHandle = () => {
  if( textIndex++ < textArr.length - 1){
    console.log(textArr[textIndex])
    testData.value = textArr[textIndex]
  }else{
    textIndex = 0
    testData.value = textArr[textIndex]
  }

  color.value = generateRandomColor()
}


</script>

<style scoped>
#quote-box {
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background: v-bind(color);
}

#content {
  position: relative;
  padding: 40px;
  padding-bottom: 80px;
  width: 800px;
  //height: 500px;
  background: white;
}

#text{
  color: v-bind(color);
  font-size: 50px;
  line-height: 60px;
  margin-bottom: 30px;
  right: 0;
}

#author {
  text-align: right;
  color: v-bind(color);
  font-size: 30px;
}


#new-quote{
  //width: 120px;
  //height: 40px;
  padding: 10px 20px;
  background: v-bind(color);
  text-align: center;
  position: absolute;
  color: white;
  font-size: 20px;
  bottom: 20px;
  right: 20px;
  border-radius: 4px;
  cursor: pointer;
  //line-height: 40px;
}

</style>