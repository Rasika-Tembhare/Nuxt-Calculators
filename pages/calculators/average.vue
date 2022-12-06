<template>
  <div class="flex flex-col items-center justify-center">
    <div class="flex flex-col items-center py-5 justify-center">
      <h1 class="font-heading text-4xl font-bold leading-normal text-primary">
        Average Calculator
      </h1>
    </div>
    <div class="cal">
      <div class="card w-96 bg-base-100 shadow-xl items-center">
        <div class="flex flex-col py-0 justify-center">
          <label
            for="last_name"
            class="block mb-2 text-gray-900 dark:text-gray-300"
            >Enter Numbers using commas</label
          >
          <input
            id="last_name"
            v-model="number"
            type="text"
            placeholder="eg:1,2,3,4,5"
            class="input input-bordered input-primary w-64 max-w-xs"
            required
          />
        </div>

        <div class="flex justify-center py-2">
          <button
            class="btn btn-primary mt-5 mb-2 w-64 max-w-xs"
            @click="click"
          >
            Calculate
          </button>
        </div>

        <div v-if="showResult" class="flex justify-center">
          <button
            class="btn btn-primary btn-outline mt-5 mb-2 w-64 max-w-xs"
            @click="onclick"
          >
            Reset</button
          ><br /><br />
        </div>
      </div>
      <br />
      <div class="card w-96 bg-base-100 shadow-xl">
        <div v-if="showResult">
          <div class="overflow-x-auto relative">
            <table
              class="w-full text-sm text-left text-gray-500 dark:text-gray-400"
            >
              <thead
                class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400"
              >
                <tr>
                  <th scope="col" class="py-3 px-6">Category</th>
                  <th scope="col" class="py-3 px-6">Result</th>
                </tr>
              </thead>
              <tbody>
                <tr
                  class="bg-white border-b dark:bg-gray-800 dark:border-gray-700"
                >
                  <th
                    scope="row"
                    class="py-4 px-6 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                  >
                    Average
                  </th>
                  <td class="py-4 px-6">
                    {{ average }}
                  </td>
                </tr>
                <tr
                  class="bg-white border-b dark:bg-gray-800 dark:border-gray-700"
                >
                  <th
                    scope="row"
                    class="py-4 px-6 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                  >
                    Range
                  </th>
                  <td class="py-4 px-6">
                    {{ range }}
                  </td>
                </tr>
                <tr
                  class="bg-white border-b dark:bg-gray-800 dark:border-gray-700"
                >
                  <th
                    scope="row"
                    class="py-4 px-6 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                  >
                    Largest Number
                  </th>
                  <td class="py-4 px-6">
                    {{ high }}
                  </td>
                </tr>
                <tr
                  class="bg-white border-b dark:bg-gray-800 dark:border-gray-700"
                >
                  <th
                    scope="row"
                    class="py-4 px-6 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                  >
                    Smallest Number
                  </th>
                  <td class="py-4 px-6">
                    {{ low }}
                  </td>
                </tr>
                <tr
                  class="bg-white border-b dark:bg-gray-800 dark:border-gray-700"
                >
                  <th
                    scope="row"
                    class="py-4 px-6 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                  >
                    Total Numbers
                  </th>
                  <td class="py-4 px-6">
                    {{ count }}
                  </td>
                </tr>
                <tr
                  class="bg-white border-b dark:bg-gray-800 dark:border-gray-700"
                >
                  <th
                    scope="row"
                    class="py-4 px-6 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                  >
                    Median
                  </th>
                  <td class="py-4 px-6">
                    {{ median }}
                  </td>
                </tr>
                <tr
                  class="bg-white border-b dark:bg-gray-800 dark:border-gray-700"
                >
                  <th
                    scope="row"
                    class="py-4 px-6 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                  >
                    Mode
                  </th>
                  <td class="py-4 px-6">
                    {{ mode }}
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  </div>
  <averageContent />
</template>

<script setup lang="ts">
const number = ref("");
const count = ref("");
const average = ref("");
const arr = ref([]);
const range = ref("");
const high = ref("");
const low = ref("");
const concat = ref([]);
const modes = ref([]);
const mode = ref("");
const median = ref("");
const mid = ref("");
const showResult = ref(false);

function click() {
  if (number.value !== "") {
    showResult.value = true;
  } else {
    alert("Please Enter Value");
    return;
  }
  //Mean
  let sum = 0;
  arr.value = number.value;
  arr.value = arr.value.split(",");
  for (var i = 0; i < arr.value.length; i++) {
    sum += parseInt(arr.value[i], 10);
  }
  average.value = sum / arr.value.length;
  //Total Numbers
  count.value = arr.value.length;
  //Largest & Smallest
  arr.value.sort((a, b) => a - b);
  low.value = Math.min.apply(Math, arr.value);
  high.value = Math.max.apply(Math, arr.value);
  //Range
  range.value = high.value - low.value;

  // Median
  concat.value = arr.value.sort((a, b) => a - b);
  if (arr.value.length % 2 !== 0) {
    median.value = concat.value[Math.floor(concat.value.length / 2)];
  } else {
    mid.value = concat.value[Math.floor(concat.value.length / 2)];
    median.value = mid.value - 0.5;
  }
  //Mode
  const arrObj = {};
  arr.value.forEach((numbers) => (arrObj[numbers] = arrObj[numbers] + 1 || 1));
  let arrValue = 0;
  for (const key in arrObj) {
    if (arrObj[key] > arrValue) {
      modes.value = [Number(key)];
      arrValue = arrObj[key];
    } else if (arrObj[key] === arrValue) {
      modes.value.push(Number(key));
    }
  }
  if (modes.value.length === Object.keys(arrObj).length) modes.value = [];
  mode.value = modes.value;
}
function onclick() {
  number.value = "";
  showResult.value = false;
}
</script>
