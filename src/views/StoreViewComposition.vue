<template>
  <p class="min-h-[82vh]">Pinia練習-composition API 寫法
  <br>
  <!-- 匯入的store資料 -->
  <!-- state的name -->
  {{ user.name }}, {{ user.getUserName }}, {{ user.cafeNumbers }}
  <br>
  <!-- storeToRefs取值 -->
  {{ name }}, {{ getUserName }}, {{ cafeNumbers }}
  <br>
  <!-- <button type="button" @click="user.updateName">按我</button><br> -->
  <button type="button" @click="updateName">按我</button><br>
  <button type="button" @click="updateData">更新資料</button><br>
  <button type="button" @click="resetData">重置資料</button><br>
  </p>
</template>

<script>
// 匯入store
import userStore from '@/stores/user';
import { storeToRefs } from 'pinia';
// 有兩種形式：
// 1. composition API (V)
// 2. option API
export default {
  name: 'StoreViewComposition',
  setup() {
    // userStore使用函式方式去執行
    const user = userStore();

    // composition api改變資料的4種方式

    // 1. reactive
    // 基本上在store定義的資料都是reactive的格式，所以在這邊要修改他的值很容易
    // user.name = 'Ann';

    // 2. Refs
    // 使用解構的形式單純的把值取出做使用
    // vscode在這裡使用storeToRefs，上方會自動匯入storeToRefs方法
    // storeToRefs(user): storeToRefs()是一個方法，需載入上方定義的store(const user = userStore();)
    const { name, getUserName, cafeNumbers } = storeToRefs(user);

    // 把資料轉成refs後，這裡就不是使用reactive的格式了
    // 需要加上.value才可以正確取得他的值
    console.log('取得name的值', name.value);
    // 改變name的值
    name.value = 'Ann';
    console.log('取得改變後的name的值', name.value);

    // 3. action
    // 直接把方法取出來使用來調整資料
    // 如果方法不需要產生雙向綁定，值接使用解構的形式取出即可
    const { updateName } = user;

    // 4. $patch
    // 在composition api中其他更新資料的方式
    // 這是另外定義的方法，不是從store裡面定義的
    function updateData() {
      // 使用$patch方法修改值，可以帶入多個修改的屬性
      user.$patch({
        name: 'Dan',
        cafeNumbers: 20,
      });
    }

    function resetData() {
      user.$reset();
    }

    return {
      user,
      name,
      cafeNumbers,
      getUserName,
      updateName,
      updateData,
      resetData,
    };
  },
};
</script>
