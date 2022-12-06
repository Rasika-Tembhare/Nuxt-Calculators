<template>
  <main>
    <div class="card w-96 bg-base-100 shadow-xl">
      <div class="card-body">
        <div class="flex flex-col items-center py-3 justify-center">
          <div class="flex w-full max-w-xl items-center justify-center">
            <h4 class="font-heading text-primary font-bold">
              To find Percentage Change
            </h4>
          </div>
          <form action="" @submit.prevent="percentageCalc">
            <div class="py-3">
              <!-- <label for="">To find X&#37; of Y</label> -->
              <input
                v-model="a"
                type="number"
                placeholder="Enter percent value&#37;  "
                class="input input-bordered input-primary w-full max-w-xs"
                required
              />
            </div>
            <div class="py-3">
              <label for=""></label>
              <input
                v-model="b"
                type="number"
                placeholder="Enter the value"
                class="input input-bordered input-primary w-full max-w-xs"
                required
              />
            </div>
            <div class="py-3">
              <select
                v-model="selected"
                class="select select-primary w-full max-w-xs"
              >
                <option selected>increase</option>
                <option>decrease</option>
              </select>
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
            Hence {{ a }} &#37; {{ selected }} in {{ b }} is
            <span class="font-bold">{{ result }}</span>
          </p>
        </div>
      </div>
      <!-- <p class="my-2 text-lg">
        Hence {{ a }} &#37; {{ selected }} in {{ b }} is
        <span class="font-bold">{{ result }}</span>
      </p> -->
    </div>
  </main>
</template>

<script lang="ts" setup>
import { defineComponent, ref } from "vue";

const showResult = ref(false);
const a = ref("");
const b = ref("");
const result = ref<number>();
const selected = ref("increase");
function percentageCalc() {
  showResult.value = true;
  const x = parseInt(a.value);
  const y = parseInt(b.value);
  if (selected.value == "increase") {
    result.value = y + (y * x) / 100;
    // console.log(result.value);
  } else {
    result.value = y - (y * x) / 100;
    // console.log(result.value);
  }
}

function resetInput() {
  a.value = "";
  b.value = "";
  selected.value = "increase";

  showResult.value = false;
}
</script>
