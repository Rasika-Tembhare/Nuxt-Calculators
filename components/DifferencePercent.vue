<template>
  <main>
    <div class="card w-96 bg-base-100 shadow-xl">
      <div class="card-body">
        <div class="flex flex-col items-center py-3 justify-center">
          <div class="flex w-full max-w-xl items-center justify-center">
            <h4 class="font-heading text-primary font-bold">
              To find Percentage Difference
            </h4>
          </div>
          <form action="" @submit.prevent="percentageCalc">
            <div class="py-3">
              <!-- <label for="">To find X&#37; of Y</label> -->
              <input
                v-model="value1"
                type="number"
                placeholder="Value 1 "
                class="input input-bordered input-primary w-full max-w-xs"
                required
              />
            </div>
            <div class="py-3">
              <label for=""></label>
              <input
                v-model="value2"
                type="number"
                placeholder="Value 2"
                class="input input-bordered input-primary w-full max-w-xs"
                required
              />
            </div>

            <button
              type="submit"
              class="btn btn-primary mt-5 mb-2 w-full max-w-xs"
            >
              Calculate
            </button>
          </form>
          <button
            v-if="showResult"
            value="clear"
            class="btn btn-primary btn-outline mt-5 mb-2 w-56 max-w-xs"
            @click="resetInput"
          >
            Reset
          </button>
        </div>
      </div>
    </div>

    <div v-if="showResult" class="text-center flex flex-col items-center py-5">
      <div class="card w-96 bg-base-100 shadow-xl">
        <div class="card-body">
          <h2 class="card-title">Answer</h2>
          <p class="text-primary text-xl">
            Hence {{ value2 }} is a
            <span class="font-bold">{{ result }}&#37;</span> {{ res }} from
            {{ value1 }}
          </p>
        </div>
      </div>
      <!-- <p class="my-2 text-lg">
        Hence {{ value2 }} is a
        <span class="font-bold">{{ result }}&#37;</span> {{ res }} from
        {{ value1 }}
      </p> -->
    </div>
  </main>
</template>

<script lang="ts" setup>
// import { defineComponent, ref } from "vue";

const showResult = ref(false);
const value1 = ref("");
const value2 = ref("");
const result = ref<number>();
const res = ref("");
function percentageCalc() {
  showResult.value = true;
  const a = parseInt(value1.value);
  const b = parseInt(value2.value);
  result.value = +((b - a) / a) * 100;
  if (result.value < 0) {
    res.value = "decrease";
  } else {
    res.value = "increase";
  }
  // console.log(result.value);
}
function resetInput() {
  value1.value = "";
  value2.value = "";
  showResult.value = false;
}
</script>
