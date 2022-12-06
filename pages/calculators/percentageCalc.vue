<template>
  <div class="flex flex-1 flex-col items-center justify-center">
    <div class="flex flex-col items-center justify-center">
      <h1
        class="font-heading text-4xl font-bold leading-normal mt-0 mb-2 text-primary"
      >
        Percentage Calculator
      </h1>
    </div>

    <div class="dropdown dropdown-hover" v-if="showDiv">
      <label tabindex="0" class="btn btn-primary hover:bg-accent m-1 w-44"
        >Select From List
        <svg
          class="fill-current"
          xmlns="http://www.w3.org/2000/svg"
          width="20"
          height="20"
          viewBox="0 0 24 24"
        >
          <path
            d="M7.41,8.58L12,13.17L16.59,8.58L18,10L12,16L6,10L7.41,8.58Z"
          />
        </svg>
      </label>

      <ul
        @click="showDiv = !showDiv"
        tabindex="0"
        class="menu dropdown-content p-2 shadow bg-base-100 rounded-box w-56 border-2"
      >
        <li @click="showDiv = false">
          <div
            class="btn border-none hover:text-secondary-focus"
            @click="showForm"
          >
            To find X&#37; of Y
          </div>
        </li>
        <li @click="showDiv = false">
          <div
            class="btn border-none hover:text-secondary-focus"
            @click="showAnother"
          >
            To find X is what &#37; of Y
          </div>
        </li>
        <li @click="showDiv = false">
          <div
            class="btn border-none hover:text-secondary-focus"
            @click="showWhole"
          >
            To find X is Y&#37; of
          </div>
        </li>
        <li @click="showDiv = false">
          <div
            class="btn border-none hover:text-secondary-focus"
            @click="showDiffer"
          >
            To find Percentage Difference
          </div>
        </li>
        <li @click="showDiv = false">
          <div
            class="btn border-none hover:text-secondary-focus"
            @click="showChange"
          >
            To find Percentage Change
          </div>
        </li>
      </ul>
    </div>

    <!-- <div class="flex flex-col pt-3">
      <div class="btn-group space-x-1">
        <div class="btn btn-active hover:btn-accent" @click="showForm">
          X&#37; of Y
        </div>
        <div class="btn btn-active hover:btn-accent" @click="showAnother">
          X is what &#37; of Y
        </div>
        <div class="btn btn-active hover:btn-accent" @click="showWhole">
          X is Y&#37; of
        </div>
        <div class="btn btn-active hover:btn-accent" @click="showDiffer">
          Percentage Difference
        </div>
        <div class="btn btn-active hover:btn-accent" @click="showChange">
          Percentage Change
        </div>
      </div>
    </div> -->

    <FormPercentage v-if="form" />
    <AnotherNoPercent v-if="another" />
    <WholeNoPercent v-if="whole" />
    <DifferencePercent v-if="differ" />
    <ChangePercent v-if="change" />

    <PercentageContent />
  </div>
</template>

<script setup lang="ts">
useHead({
  title: "Nuxt|Percentage Calculator",
  meta: [{ name: "description", content: "Percentage calculator" }],
});
const showDiv = ref(true);
const form = ref(true);
const another = ref(false);
const whole = ref(false);
const differ = ref(false);
const change = ref(false);

function showForm() {
  form.value = true;
  another.value = false;
  whole.value = false;
  differ.value = false;
  change.value = false;
}
function showAnother() {
  form.value = false;
  another.value = true;
  whole.value = false;
  differ.value = false;
  change.value = false;
}
function showWhole() {
  form.value = false;
  another.value = false;
  whole.value = true;
  differ.value = false;
  change.value = false;
}
function showDiffer() {
  form.value = false;
  another.value = false;
  whole.value = false;
  differ.value = true;
  change.value = false;
}
function showChange() {
  form.value = false;
  another.value = false;
  whole.value = false;
  differ.value = false;
  change.value = true;
}
</script>
