<template>
  <div class="flex flex-col items-center py-0 justify-center">
    <div class="card w-96 bg-base-100 shadow-xl items-center">
      <div class="flex flex-col py-0 justify-center">
        <label class="block mb-2 text-gray-900 dark:text-gray-300"
          >Enter percentage using comma</label
        >
        <input
          v-model="inputs"
          type="text"
          placeholder="ex: 40,60,70,80,90"
          class="input input-bordered input-primary w-64 max-w-xs"
          required
        />
      </div>
      <div class="flex flex-col items-center py-2 justify-center">
        <div>
          <button
            class="btn btn-primary mt-5 mb-2 w-64 max-w-xs"
            @click="submit"
          >
            Calculate
          </button>
        </div>
        <div v-if="showResult">
          <button
            class="btn btn-primary btn-outline mt-5 mb-2 w-64 max-w-xs"
            @click="onclick"
          >
            Reset
          </button>
        </div>
      </div>
    </div>
    <br />
    <div class="card w-96 bg-base-100 shadow-xl">
      <div v-if="showResult">
        <div class="w-72 overflow-x-auto relative">
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
                  GPA
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
                  Overall Percentage
                </th>
                <td class="py-4 px-6">
                  {{ percentage }}
                </td>
              </tr>
              <tr
                class="bg-white border-b dark:bg-gray-800 dark:border-gray-700"
              >
                <th
                  scope="row"
                  class="py-4 px-6 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                >
                  Grade
                </th>
                <td class="py-4 px-6">
                  {{ grade }}
                </td>
              </tr>
              <tr
                class="bg-white border-b dark:bg-gray-800 dark:border-gray-700"
              >
                <th
                  scope="row"
                  class="py-4 px-6 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                >
                  CGPA
                </th>
                <td class="py-4 px-6">
                  {{ cgpa }}
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  </div>
</template>
<script setup lang="ts">
const inputs = ref("");
const arr = ref([]);
const average = ref<number>();
const cgpa = ref("");
const grade = ref("");
const percentage = ref("");
const showResult = ref(false);
function submit() {
  if (inputs.value !== "") {
    showResult.value = true;
  } else {
    alert("Please Enter Value");
    return;
  }
  arr.value = inputs.value;
  let sum = 0;
  arr.value = arr.value.split(",");
  for (var i = 0; i < arr.value.length; i++) {
    sum += parseInt(arr.value[i], 10);
  }
  average.value = (((sum / 100) * 4) / arr.value.length).toFixed(2);
  if (average.value < 1.0) {
    grade.value = "Not Found";
    percentage.value = "Not Found";
    cgpa.value = "Not Found";
  } else if (average.value == 1.0) {
    grade.value = "D";
    percentage.value = "65-66%";
    cgpa.value = "6.8-6.9";
  } else if (average.value <= 1.3) {
    grade.value = "D+";
    percentage.value = "67-69%";
    cgpa.value = "7.0-7.2";
  } else if (average.value <= 1.7) {
    grade.value = "C-";
    percentage.value = "70-72%";
    cgpa.value = "7.3-7.5";
  } else if (average.value <= 2.0) {
    grade.value = "C";
    percentage.value = "73-76%";
    cgpa.value = "7.6-8.0";
  } else if (average.value <= 2.3) {
    grade.value = "C+";
    percentage.value = "77-79%";
    cgpa.value = "8.1-8.3";
  } else if (average.value <= 2.7) {
    grade.value = "B-";
    percentage.value = "80-82%";
    cgpa.value = "8.4-8.6";
  } else if (average.value <= 3.0) {
    grade.value = "B";
    percentage.value = "83-86%";
    cgpa.value = "8.7-9.0";
  } else if (average.value <= 3.3) {
    grade.value = "B+";
    percentage.value = "87-89%";
    cgpa.value = "9.1-9.3";
  } else if (average.value <= 3.7) {
    grade.value = "A-";
    percentage.value = "90-92%";
    cgpa.value = "9.4-9.6";
  } else if (average.value < 4.0) {
    grade.value = "A";
    percentage.value = "93-96%";
    cgpa.value = "9.7-10.0";
  } else if (average.value == 4.0) {
    grade.value = "A+";
    percentage.value = "97-100%";
    cgpa.value = "10.0";
  }
}
function onclick() {
  showResult.value = false;
  inputs.value = "";
}
</script>
