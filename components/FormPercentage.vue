<template>
  <main>
    <div class="card w-96 bg-base-100 shadow-xl">
      <div class="card-body">
        <div class="flex flex-col items-center py-3 justify-center">
          <div class="flex w-full max-w-xl items-center justify-center">
            <h4 class="font-heading text-primary font-bold">
              To find X&#37; of Y
            </h4>
          </div>
          <form action="" @submit.prevent="percentageCalc">
            <div class="py-3">
              <!-- <label for="">To find X&#37; of Y</label> -->
              <input
                v-model="percent"
                type="number"
                placeholder="Fill the percent value&#37;(X) "
                class="input input-bordered input-primary w-full max-w-xs"
                required
              />
            </div>
            <div class="py-3">
              <label for=""></label>
              <input
                v-model="numValue"
                type="number"
                placeholder="Fill the number value (Y)"
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
            Hence <span class="font-bold">{{ result }}</span> is
            {{ percent }}&#37; of {{ numValue }}
          </p>
        </div>
      </div>
      <!-- <p class="my-2 text-lg">Hence {{ percent }}&#37; of {{ numValue }} is</p>
      <p class="font-bold">{{ result }}</p> -->
    </div>
  </main>
</template>

<script lang="ts" setup>
import { defineComponent, ref } from "vue";

const showResult = ref(false);
const percent = ref("");
const numValue = ref("");
const result = ref<number>();
function percentageCalc() {
  showResult.value = true;
  const perCent = parseInt(percent.value);
  const number = parseInt(numValue.value);
  result.value = +((perCent * number) / 100);
  // console.log(result.value);
}
function resetInput() {
  percent.value = "";
  numValue.value = "";
  showResult.value = false;
}
</script>
