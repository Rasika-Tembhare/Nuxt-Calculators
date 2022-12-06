<template>
  <main>
    <div class="card w-96 bg-base-100 shadow-xl">
      <div class="card-body">
        <div class="flex flex-col items-center py-3 justify-center">
          <div class="flex w-full max-w-xl items-center justify-center">
            <h4 class="font-heading text-primary font-bold">
              To find X is what &#37; of Y
            </h4>
          </div>
          <form action="" @submit.prevent="percentageCalc">
            <div class="py-3">
              <!-- <label for="">To find X&#37; of Y</label> -->
              <input
                v-model="first"
                type="number"
                placeholder="Enter first number(X) "
                class="input input-bordered input-primary w-full max-w-xs"
                required
              />
            </div>
            <div class="py-3">
              <label for=""></label>
              <input
                v-model="second"
                type="number"
                placeholder="Enter second number (Y)"
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
            Hence {{ first }} is
            <span class="font-bold">{{ result }}&#37;</span> of
            {{ second }}
          </p>
        </div>
      </div>

      <!-- <p class="my-2 text-lg">
        Hence {{ first }} is <span class="font-bold">{{ result }}&#37;</span> of
        {{ second }}
      </p> -->
    </div>
  </main>
</template>

<script lang="ts" setup>
import { defineComponent, ref } from "vue";

const showResult = ref(false);
const first = ref("");
const second = ref("");
const result = ref<number>();
function percentageCalc() {
  showResult.value = true;
  const x = parseInt(first.value);
  const y = parseInt(second.value);
  result.value = +((x / y) * 100).toFixed(3);
  // console.log(result.value);
}
function resetInput() {
  first.value = "";
  second.value = "";
  showResult.value = false;
}
</script>
