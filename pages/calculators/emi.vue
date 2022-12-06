<template>
  <div class="flex flex-col items-center justify-center">
    <div class="flex flex-col items-center py-5 justify-center">
      <h1 class="font-heading text-4xl font-bold leading-normal text-primary">
        EMI Calculator
      </h1>
    </div>
    <div class="cal">
      <div class="card w-96 bg-base-100 shadow-xl items-center">
        <div class="flex flex-col py-0 justify-center">
          <label class="block mb-2 text-gray-900 dark:text-gray-300"
            >Principal Loan Amount</label
          >
          <input
            v-model="user.amount"
            type="text"
            class="input input-bordered input-primary w-64 max-w-xs"
            required
          /><br />
          <label class="block mb-2 text-gray-900 dark:text-gray-300"
            >Interest</label
          >
          <input
            v-model="user.interest"
            type="number"
            max="100"
            min="0.1"
            class="input input-bordered input-primary w-64 max-w-xs"
            required
          /><br />
          <label class="block mb-2 text-gray-900 dark:text-gray-300"
            >Time of Years</label
          >
          <input
            v-model="user.tenure"
            type="number"
            max="100"
            min="1"
            class="input input-bordered input-primary w-64 max-w-xs"
            required
          />
        </div>

        <div class="flex flex-col justify-center py-2">
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
      <div v-if="showResult" class="flex justify-center">
        <div class="card w-96 bg-base-100 shadow-xl">
          <div class="w-full overflow-x-auto relative">
            <table
              class="w-full text-sm text-left text-gray-500 dark:text-gray-400"
            >
              <thead
                class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400"
              ></thead>
              <tbody>
                <tr
                  class="bg-white border-b dark:bg-gray-800 dark:border-gray-700"
                >
                  <th
                    scope="row"
                    class="py-4 px-6 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                  >
                    Total Payment
                  </th>
                  <td class="py-4 px-6">{{ totalamount }} /-</td>
                </tr>
                <tr
                  class="bg-white border-b dark:bg-gray-800 dark:border-gray-700"
                >
                  <th
                    scope="row"
                    class="py-4 px-6 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                  >
                    Total Months
                  </th>
                  <td class="py-4 px-6">
                    {{ months }}
                  </td>
                </tr>
                <tr
                  class="bg-white border-b dark:bg-gray-800 dark:border-gray-700"
                >
                  <th
                    scope="row"
                    class="py-4 px-6 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                  >
                    EMI Rate per Month
                  </th>
                  <td class="py-4 px-6">{{ emi }} /-</td>
                </tr>
                <tr
                  class="bg-white border-b dark:bg-gray-800 dark:border-gray-700"
                >
                  <th
                    scope="row"
                    class="py-4 px-6 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                  >
                    Total Interest
                  </th>
                  <td class="py-4 px-6">{{ interestrate }} /-</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  </div>
  <emiContent />
</template>

<script setup lang="ts">
const user = ref({
  amount: "",
  interest: "",
  tenure: "",
});
const months = ref("");
const interestrate = ref("");
const totalamount = ref("");
const emi = ref("");
const showResult = ref(false);
function click() {
  if (
    user.value.amount !== "" &&
    user.value.interest !== "" &&
    user.value.tenure !== ""
  ) {
    showResult.value = true;
  } else {
    alert("Please Enter Value");
    return;
  }
  months.value = user.value.tenure * 12;
  interestrate.value =
    (user.value.interest * user.value.amount * user.value.tenure) / 100;
  totalamount.value =
    parseInt(user.value.interest) + parseInt(user.value.amount);
  emi.value = parseInt(totalamount.value) / 12;
}
function onclick() {
  showResult.value = false;
  user.value.amount = "";
  user.value.interest = "";
  user.value.tenure = "";
}
</script>
