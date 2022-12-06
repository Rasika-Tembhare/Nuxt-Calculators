<template>
  <div class="flex flex-1 flex-col items-center justify-center">
    <!-- heading -->

    <div class="flex flex-col items-center justify-center">
      <h1
        class="font-heading text-4xl font-bold leading-normal mt-0 mb-2 text-primary"
      >
        Age Calculator
      </h1>
    </div>

    <!-- form start here -->

    <main>
      <div class="card w-96 bg-base-100 shadow-xl">
        <div class="card-body">
          <div class="flex flex-col items-center justify-center">
            <form action="" @submit.prevent="ageCalculate">
              <div class="py-3">
                <label for="dob">Date Of Birth</label>
                <input
                  v-model="dob"
                  type="date"
                  placeholder="Type here"
                  class="input input-bordered input-primary w-full max-w-xs"
                  required
                />
              </div>
              <div class="py-3">
                <label for="">Age at Date </label>
                <input
                  v-model="today"
                  type="date"
                  placeholder="Type here"
                  class="input input-bordered input-primary w-full max-w-xs"
                  required
                />
              </div>
              <div class="card-actions">
                <button
                  type="submit"
                  class="btn btn-primary mt-5 mb-2 w-full max-w-xs"
                  @click="ageCalculate"
                >
                  Calculate
                </button>
              </div>
            </form>
            <button
              v-if="showResult"
              value="clear"
              class="btn btn-primary btn-outline mt-5 mb-2 w-64 max-w-xs"
              @click="resetInput"
            >
              Reset
            </button>
          </div>
        </div>
      </div>

      <!-- Result Card -->
      <div
        v-if="showResult"
        class="text-center flex flex-col items-center py-5"
      >
        <div class="card w-96 bg-base-100 shadow-xl">
          <div class="card-body">
            <h2 class="card-title">Your Age is</h2>
            <p class="text-primary text-xl font-semibold">
              {{ diffYear }} years {{ m }} months {{ d }} days
            </p>
            <div class="overflow-x-auto">
              <table class="table w-full">
                <!-- head -->
                <!-- <thead>
                  <tr>
                    <th>You Lived</th>
                    <th></th>
                  </tr>
                </thead> -->
                <tbody>
                  <!-- row 1 -->
                  <tr>
                    <td>In days</td>
                    <td>{{ diffDays }} days</td>
                  </tr>
                  <!-- row 2 -->
                  <tr>
                    <td>In Months</td>
                    <td>{{ diffMonth }} months {{ d }} days</td>
                  </tr>
                  <!-- row 3 -->
                  <tr>
                    <td>In Weeks</td>
                    <td>{{ weeks }} weeks {{ remDay }} days</td>
                  </tr>
                  <tr>
                    <td>In Hours</td>
                    <td>{{ hour }} hours</td>
                  </tr>
                  <tr>
                    <td>In Minutes</td>
                    <td>{{ minutes }} minutes</td>
                  </tr>
                  <tr>
                    <td>In Seconds</td>
                    <td>{{ seconds }} seconds</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>

        <!-- <p class="my-2 text-lg">Your age is</p>
        <p>{{ diffYear }} years {{ m }} months {{ d }} days</p>
        <p class="my-1">or</p>
        <p>{{ diffMonth }} months {{ d }} days</p>
        <p class="my-1">or</p>
        <p>{{ diffDays }} days</p>
        <p class="my-1">or</p>
        <p>{{ weeks }} weeks {{ remDay }} days</p>
        <p class="my-1">or</p>
        <p>{{ hour }} hours</p>
        <p class="my-1">or</p>
        <p>{{ minutes }} minutes</p>
        <p class="my-1">or</p>
        <p>{{ seconds }} seconds</p> -->
      </div>
    </main>

    <AgeContent />
  </div>
</template>

<script setup lang="ts">
import dayjs from "dayjs";
console.log(dayjs().format());
useHead({
  title: "Nuxt|Age Calculator",
  meta: [{ name: "description", content: "Age calculator" }],
});

const dob = ref("");
const today = ref("");
const diffYear = ref<number>();
const diffMonth = ref<number>();
const diffDays = ref<number>();
const weeks = ref<number>();
const remDay = ref<number>();
const hour = ref<number>();
const minutes = ref<number>();
const seconds = ref<number>();

const m = ref<number>();
const d = ref<number>();

const showResult = ref(false);

function ageCalculate() {
  //User input into dates format
  const date1 = dayjs(dob.value);
  console.log(date1);
  const date2 = dayjs(today.value);
  console.log(date2);
  if (dob.value !== "" && today.value !== "") {
    showResult.value = true;
  }

  // Calculation of all difference in year, month...to seconds
  diffYear.value = date2.diff(date1, "year");
  diffMonth.value = date2.diff(date1, "month");
  diffDays.value = date2.diff(date1, "day");
  weeks.value = date2.diff(date1, "w");
  hour.value = date2.diff(date1, "h");
  minutes.value = date2.diff(date1, "m");
  seconds.value = date2.diff(date1, "s");
  remDay.value = diffDays.value % 7;
  console.log("remaining days", remDay);

  console.log(diffYear.value);
  console.log(diffMonth.value);
  console.log(diffDays.value);
  console.log(weeks.value);
  console.log(hour.value);
  console.log(minutes.value);
  console.log(seconds.value);

  const yDob = dayjs(dob.value).get("year");
  console.log(yDob);
  const mDob = dayjs(dob.value).get("month") + 1;
  console.log(mDob); // start 0
  const dDob = dayjs(dob.value).get("date");
  console.log(dDob);

  const yT = dayjs(today.value).get("year");
  console.log(yT);
  const mT = dayjs(today.value).get("month") + 1;
  console.log(mT); // start 0
  const dT = dayjs(today.value).get("date");
  console.log(dT);

  m.value = diffMonth.value - diffYear.value * 12;
  console.log(m.value);

  if (dT > dDob) {
    d.value = dT - dDob;
    console.log(d.value);
  } else {
    const month = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
    d.value = dT + month[mT - 2] - dDob;
    console.log(d.value);
  }
}
function resetInput() {
  dob.value = "";
  today.value = "";
  showResult.value = false;
}
</script>
