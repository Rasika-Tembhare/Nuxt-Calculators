<template>
  <div class="flex flex-col items-center py-0 justify-center">
    <div class="flex flex-col items-center py-5 justify-center">
      <h1 class="font-heading text-4xl font-bold leading-normal text-primary">
        Cat Age Calculator
      </h1>
    </div>
    <div class="card w-96 bg-base-100 shadow-xl">
      <div class="flex flex-col items-center py-0 justify-center">
        <label
          for="last_name"
          class="block mb-2 text-gray-900 dark:text-gray-300"
          >Select Age from the List</label
        >
      </div>
      <div class="flex justify-center">
        <select
          v-model="select"
          class="mr-16 py-2.5 ml-16 w-80 text-sm text-gray-500 bg-transparent border-0 border-b-2 border-gray-200 appearance-none dark:text-gray-400 dark:border-gray-700 focus:outline-none focus:ring-0 focus:border-gray-200 peer"
        >
          <option disabled value="">Select Age</option>
          <option v-for="inputs in 25" :key="inputs">{{ inputs }} years</option>
        </select>
      </div>

      <div class="flex justify-center pt-1">
        <button class="btn btn-primary mt-5 mb-2 w-64 max-w-xs" @click="click">
          Calculate
        </button>
      </div>
      <div class="flex justify-center">
        <button
          v-if="showResult"
          class="btn btn-primary btn-outline mt-5 mb-2 w-64 max-w-xs"
          @click="onclick"
        >
          Reset</button
        ><br /><br />
      </div>
    </div>
    <br />
    <div class="card w-96 bg-base-100 shadow-xl">
      <div v-if="showResult" class="flex justify-center">
        <div class="overflow-x-auto relative">
          <table
            class="w-full text-sm text-left text-gray-500 dark:text-gray-400"
          >
            <tbody>
              <tr
                class="bg-white border-b dark:bg-gray-800 dark:border-gray-700"
              >
                <th
                  scope="row"
                  class="py-4 px-6 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                >
                  Cat Age
                </th>
                <td class="py-4 px-6">{{ res }} years</td>
              </tr>
              <tr
                class="bg-white border-b dark:bg-gray-800 dark:border-gray-700"
              >
                <th
                  scope="row"
                  class="py-4 px-6 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                >
                  Human Age
                </th>
                <td class="py-4 px-6">{{ show }} years</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  </div>
  <catageContent />
</template>

<script setup lang="ts">
const res = ref<number>();
const select = ref("");
const show = ref<number>();
const showResult = ref(false);
function click() {
  if (select.value !== "") {
    showResult.value = true;
  } else {
    alert("Please Select Value");
    return;
  }
  res.value = parseInt(select.value);
  for (let i = 1; i <= res.value; i++) {
    if (i == 1) {
      show.value = i * 15;
    } else if (i == 2) {
      show.value = i * 9 + 6;
    } else if (i > 2) {
      show.value = i * 4 + 16;
    }
  }
}
function onclick() {
  showResult.value = false;
  select.value = "";
}
</script>
<style scopped></style>
