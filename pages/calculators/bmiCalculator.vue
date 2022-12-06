<template>
  <div class="flex flex-1 flex-col items-center justify-center pb-2">
    <!-- Heading -->
    <div class="flex flex-col items-center justify-center">
      <h1
        class="font-heading text-4xl font-bold leading-normal mt-0 mb-2 text-primary"
      >
        BMI Calculator
      </h1>
    </div>

    <main>
      <div class="flex flex-col items-center justify-center pt-3">
        <!-- <div class="btn-group space-x-1">
          <div class="btn btn-active hover:btn-accent" @click="selectMetric">
            Metric
          </div>
          <div class="btn btn-active hover:btn-accent" @click="selectUs">
            US/UK
          </div>
        </div> -->

        <div class="tabs tabs-boxed space-x-2">
          <button
            class="text-sm h-8 w-40 text-gray-300 bg-primary hover:bg-accent active:bg-accent rounded-lg focus:outline-none focus:bg-accent"
            @click="selectMetric"
          >
            Metric
          </button>
          <button
            class="text-sm h-8 w-40 text-gray-300 bg-primary hover:bg-accent active:bg-accent rounded-lg focus:outline-none focus:bg-accent"
            @click="selectUs"
          >
            US/UK
          </button>
        </div>
      </div>

      <div class="card w-96 bg-base-100 shadow-xl">
        <div class="card-body">
          <div class="flex flex-col items-center justify-center">
            <!-- BMI using Metric Units -->

            <form v-if="metric.select" action="" @submit.prevent="bmiCalculate">
              <div class="form-control w-full max-w-xs py-3">
                <label for="label">Age</label>
                <input
                  v-model="age"
                  type="text"
                  placeholder="age between 2yrs -120 yrs"
                  class="input input-bordered w-full max-w-xs input-primary"
                  required
                />
              </div>

              <div class="flex flex-1 py-2">
                <div>Gender</div>
                <div class="px-2">
                  <input
                    id="male"
                    v-model="male"
                    type="radio"
                    value="male"
                    name="gender"
                    class="radio radio-sm"
                    checked
                  />
                  <label for="male" class="px-1 cursor-pointer">Male</label>
                </div>
                <div class="px-2">
                  <input
                    id="female"
                    v-model="female"
                    type="radio"
                    value="female"
                    name="gender"
                    class="radio radio-sm"
                  />
                  <label for="female" class="px-1 cursor-pointer">Female</label>
                </div>
              </div>

              <div class="form-control w-full max-w-xs py-3">
                <label for="label">Height</label>
                <input
                  v-model="ht"
                  type="number"
                  :placeholder="metric.height"
                  class="input input-bordered input-primary"
                  required
                />
              </div>
              <div class="form-control w-full max-w-xs py-3">
                <label for="label">Weight</label>
                <input
                  v-model="wt"
                  type="number"
                  :placeholder="metric.weight"
                  class="input input-bordered input-primary"
                  required
                />
              </div>

              <button
                type="submit"
                class="btn btn-primary mt-5 mb-2 w-full max-w-xs"
                @click="bmiCalculate"
              >
                Calculate
              </button>
            </form>

            <!-- BMI using US Units -->

            <form v-if="us.select" action="" @submit.prevent="bmiCalculate">
              <div class="form-control w-full max-w-xs py-3">
                <label for="label"> Age </label>
                <input
                  v-model="age"
                  type="text"
                  placeholder="age between 2yrs -120 yrs"
                  class="input input-bordered input-primary"
                  required
                />
              </div>

              <div class="flex flex-1 py-2">
                <div>Gender</div>
                <div class="px-2">
                  <input
                    id="male"
                    type="radio"
                    value="male"
                    name="gender"
                    class="radio radio-sm"
                    checked
                  />
                  <label for="male" class="px-1 cursor-pointer">Male</label>
                </div>
                <div class="px-2">
                  <input
                    id="female"
                    type="radio"
                    value="female"
                    name="gender"
                    class="radio radio-sm"
                  />
                  <label for="female" class="px-1 cursor-pointer">Female</label>
                </div>
              </div>

              <div class="form-control w-full max-w-xs py-3">
                <label for="label">Height</label>
                <input
                  v-model="feet"
                  type="number"
                  :placeholder="us.height1"
                  class="input input-bordered input-primary"
                  required
                />
                <span class="py-1"></span>
                <input
                  v-model="inch"
                  type="number"
                  :placeholder="us.height2"
                  class="input input-bordered input-primary"
                  required
                />
              </div>
              <div class="form-control w-full max-w-xs py-3">
                <label for="label">Weight</label>
                <input
                  v-model="wt"
                  type="number"
                  :placeholder="us.weight"
                  class="input input-bordered input-primary"
                  required
                />
              </div>

              <button
                type="submit"
                class="btn btn-primary mt-5 mb-2 w-full max-w-xs"
                @click="bmiCalculate"
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

      <!-- Result Card -->

      <div
        v-if="showResult"
        class="text-center flex flex-col items-center py-5"
      >
        <div class="card w-96 bg-base-100 shadow-xl">
          <div class="card-body">
            <h2 class="card-title">Your BMI is</h2>
            <p class="text-primary text-xl font-semibold">
              {{ bmi }} kg/m<sup>2</sup> ({{ result }})
            </p>
            <p class="my-1">
              Healthy BMI range : 18.5 kg/m<sup>2</sup> - 25 kg/m<sup>2</sup>
            </p>
          </div>
        </div>
        <!-- <p class="my-2 text-lg">Your BMI is</p>
        <p class="text-primary font-bold">
          {{ bmi }} kg/m<sup>2</sup> ({{ result }})
        </p>
        <p class="my-1">
          Healthy BMI range : 18.5 kg/m<sup>2</sup> - 25 kg/m<sup>2</sup>
        </p>
        <p class="my-1"></p> -->
      </div>
    </main>

    <BmiContent />
  </div>
</template>

<script lang="ts" setup>
// import { ref } from "vue";
useHead({
  title: "Nuxt|BMI Calculator",
  meta: [{ name: "description", content: "BMI calculator" }],
});
const age = ref("");
const male = ref("");
const female = ref("");
const wt = ref("");
const ht = ref("");
const feet = ref("");
const inch = ref("");
const bmi = ref<number>();
const result = ref("");
const showResult = ref(false);
const metric = ref({
  weight: "kg",
  height: "cm",
  select: true,
});
const us = ref({
  weight: "pounds",
  height1: "feet",
  height2: "inches",
  select: false,
});

function bmiCalculate() {
  if (metric.value.select) {
    if (age.value && ht.value && wt.value !== "") {
      showResult.value = true;
    }
    const weight = parseFloat(wt.value);
    const height = parseFloat(ht.value) / 100;
    // + operator for converting string to number
    bmi.value = +(weight / Math.pow(height, 2)).toFixed(1);

    if (bmi.value < 18.5 && bmi.value > 0) {
      result.value = "Underweight";
    } else if (bmi.value >= 18.5 && bmi.value < 24.9) {
      result.value = "Normal";
    } else if (bmi.value >= 24.9 && bmi.value < 29.9) {
      result.value = "Overweight";
    } else if (bmi.value >= 29.9) {
      result.value = "Obesity";
    }
  } else {
    if (age.value && wt.value && feet.value && inch.value !== "") {
      showResult.value = true;
    }
    const weight = parseFloat(wt.value) * 0.4535923;
    // console.log(weight);
    const height =
      (parseFloat(feet.value) * 30.48 + parseFloat(inch.value) * 2.54) / 100;
    // console.log(height);
    // + operator for converting string to number
    bmi.value = +(weight / Math.pow(height, 2)).toFixed(1);

    if (bmi.value < 18.5 && bmi.value > 0) {
      result.value = "Underweight";
    } else if (bmi.value >= 18.5 && bmi.value < 24.9) {
      result.value = "Normal";
    } else if (bmi.value >= 24.9 && bmi.value < 29.9) {
      result.value = "Overweight";
    } else if (bmi.value >= 29.9) {
      result.value = "Obesity";
    }
  }
}

function selectMetric() {
  if (!metric.value.select) {
    // Code
    metric.value.select = !metric.value.select;
    us.value.select = false;
    wt.value = "";
    ht.value = "";
  }
}
function selectUs() {
  if (!us.value.select) {
    us.value.select = !us.value.select;
    metric.value.select = false;
    wt.value = "";
    ht.value = "";
  }
}

function resetInput() {
  age.value = "";
  wt.value = "";
  ht.value = "";
  feet.value = "";
  inch.value = "";
  showResult.value = false;
}
</script>
