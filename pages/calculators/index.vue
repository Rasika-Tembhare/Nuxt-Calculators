<template>
  <div>
    <h1 class="text-center text-3xl font-bold py-4">Age Calculator</h1>
    <main>
      <div class="flex flex-col items-center justify-center">
        <form action="" @submit.prevent="ageCalculate">
          <div class="py-3">
            <label for="dob">Date Of Birth</label>
            <input
              v-model="dob"
              type="date"
              placeholder="Type here"
              class="input input-bordered w-full max-w-xs"
            />
          </div>
          <div class="py-3">
            <label for="">Age at Date </label>
            <input
              v-model="today"
              type="date"
              placeholder="Type here"
              class="input input-bordered w-full max-w-xs"
            />
          </div>

          <button
            type="submit"
            class="btn mt-5 mb-2 w-full max-w-xs"
            @click="ageCalculate"
          >
            Calculate
          </button>
        </form>
        <button
          v-if="showResult"
          value="clear"
          class="btn btn-outline mt-5 mb-2 w-64 max-w-xs"
          @click="resetInput"
        >
          Reset
        </button>
      </div>

      <div v-if="showResult" class="text-center flex flex-col items-center">
        <p class="my-2 text-lg">Your age is</p>
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
        <p>{{ seconds }} seconds</p>
      </div>
    </main>
  </div>
</template>

<script setup lang="ts">
import dayjs from "dayjs";
console.log(dayjs().format());

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
  showResult.value = true;

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

// function ageCalculate() {

//   //convert user input in date  object.
//   const startDate = new Date(dob.value);
//   const endDate = new Date(today.value);
//   console.log(startDate);
//   console.log(endDate);

//   // extract the year, month,date  from user input.
//   const dobYear = startDate.getFullYear();
//   const dobMonth = startDate.getMonth() + 1;
//   const dobDate = startDate.getDate();
//   console.log("year", dobYear);

//   const todayYear = endDate.getFullYear();
//   const todayMonth = endDate.getMonth() + 1;
//   const todayDate = endDate.getDate();
//   console.log("year", todayYear);

//   showResult.value = true;

//   if (
//     dobYear > todayYear ||
//     (dobMonth > todayMonth && dobYear === todayYear) ||
//     (dobDate > todayDate && dobMonth === todayMonth && dobYear === todayYear)
//   ) {
//     alert("Must be Born!");
//     return;
//   }
//   //for years
//   diffYear.value = todayYear - dobYear;
//   console.log(diffYear.value);

//   // for months
//   if (todayMonth >= dobMonth) {
//     diffMonth.value = todayMonth - dobMonth;
//     console.log(diffMonth.value);
//   } else {
//     diffYear.value--;
//     diffMonth.value = 12 + todayMonth - dobMonth;
//     console.log(diffMonth.value);
//   }

//   //for date.
//   if (todayDate >= dobDate) {
//     diffDate.value = todayDate - dobDate;
//     console.log(diffDate.value);
//   } else {
//     diffMonth.value--;
//     // const days = daysInMonth(dobMonth,dobYear)
//     diffDate.value = 31 + todayDate - dobDate;
//     if (diffMonth.value < 0) {
//       diffMonth.value = 11;
//       diffYear.value--;
//     }
//     console.log(diffDate.value);
//   }
//   y.value = diffYear.value;
//   m.value = diffMonth.value + diffYear.value * 12;
//   d.value = diffDate.value + m.value * 30;
//   weeks.value = Math.floor(d.value / 7);
//   rem.value = d.value % 7;
//   hour.value = d.value * 24;
//   minutes.value = hour.value * 60;
//   seconds.value = minutes.value * 60;
// }
function resetInput() {
  dob.value = "";
  today.value = "";
  showResult.value = false;
}
</script>
