<template>
  <main>
    <div class="card w-96 bg-base-100 shadow-xl">
      <div class="card-body">
        <div class="flex flex-col items-center py-3 justify-center">
          <div class="flex w-full max-w-xl items-center justify-center">
            <h4 class="font-heading text-primary font-bold">
              To find X is Y&#37; of
            </h4>
          </div>
          <form action="" @submit.prevent="percentageCalc">
            <div class="py-3">
              <!-- <label for="">To find X&#37; of Y</label> -->
              <input
                v-model="x"
                type="number"
                placeholder="Enter first number(X) "
                class="input input-bordered input-primary w-full max-w-xs"
                required
              />
            </div>
            <div class="py-3">
              <label for=""></label>
              <input
                v-model="y"
                type="number"
                placeholder="Enter percent value&#37; (Y)"
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
            Hence {{ x }} is {{ y }}&#37; of
            <span class="font-bold">{{ result }}</span>
          </p>
        </div>
      </div>
      <!-- <p class="my-2 text-lg">
        Hence {{ x }} is {{ y }}&#37; of
        <span class="font-bold">{{ result }}</span>
      </p> -->
    </div>
  </main>
</template>

<script lang="ts" setup>
import { defineComponent, ref } from "vue";

const showResult = ref(false);
const x = ref("");
const y = ref("");
const result = ref<number>();
function percentageCalc() {
  showResult.value = true;
  const first = parseInt(x.value);
  const second = parseInt(y.value);
  result.value = +((first * 100) / second).toFixed(3);
  // console.log(result.value);
}
function resetInput() {
  x.value = "";
  y.value = "";
  showResult.value = false;
}
</script>
