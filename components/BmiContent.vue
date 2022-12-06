<template>
  <article>
    <div class="flex flex-col w-full max-w-xl items-center py-5 justify-center">
      <h2
        class="font-heading text-3xl font-bold leading-normal mt-0 mb-2 text-primary"
      >
        BMI Calculator : Calculate BMI Body Mass Index
      </h2>
    </div>
    <div class="flex flex-1 flex-col items-center justify-center">
      <div class="w-full max-w-xl text-justify">
        A person's weight in pounds multiplied by 704 and divided by their
        height in inches squared is used to compute their body mass index (BMI).
        Alternatively, a person's weight in kilograms and height in metres
        squared can be used. The relationship between BMI and % body fat mass is
        curved. The association between both BMI and health outcomes—rather than
        the relation between BMI and body composition—is the basis for the
        relative conventional definition of obesity. For BMI levels of 25.0
        kg/m2 or higher, several studies have demonstrated an inverse link
        between BMI and mortality. A BMI ranging 25.0 and 29.9 kg/m2 is
        considered overweight, whereas obesity is a BMI higher than 30.0 kg/m2.
      </div>
    </div>
    <div class="flex flex-col w-full max-w-xl py-3 justify-center">
      <h2
        class="font-heading text-2xl font-bold leading-normal mt-0 mb-2 text-primary"
      >
        Importance of Calculating BMI
      </h2>
    </div>
    <div class="flex flex-1 flex-col items-center justify-center">
      <div class="w-full max-w-xl text-justify">
        Obese people are more likely than
        <a
          href="https://www.who.int/news-room/fact-sheets/detail/obesity-and-overweight#:~:text=Overweight%20and%20obesity%20are%20defined,overweight%20and%20obesity%20in%20adults."
          style="
            cursor: pointer;
            color: inherit;
            word-wrap: break-word;
            text-decoration: inherit;
          "
          class="text-gray-500 dark:text-gray-400"
          target="_blank"
          ><span
            class="font-medium text-gray-500/75 underline hover:no-underline"
          >
            overweight</span
          ></a
        >
        people to experience adverse health effects. On the death rate vs BMI
        graph, these heavy and obese categories represent enforced criteria
        along a continuum. These BMI ranges are sometimes further broken down
        into subgroups like extremely underweight or quite severely obese,
        depending on variables like geography and age. Even though BMI is a
        flawed estimate of average body weight, it can be used to determine
        whether further testing or treatment is necessary. Being underweight or
        overweight can have significant negative impacts on one's health.
      </div>
    </div>
    <div class="flex flex-col w-full max-w-xl py-3 justify-center">
      <h2
        class="font-heading text-2xl font-bold leading-normal mt-0 mb-2 text-primary"
      >
        How to calculate BMI?
      </h2>
    </div>
    <div class="flex flex-col py-1 items-center justify-center">
      <div class="w-full max-w-xl text-justify">
        <table class="border-solid border-2 border-gray-200">
          <tr class="">
            <td class="border-solid border-2 border-gray-200 p-2">Units</td>
            <td class="border-solid border-2 border-gray-200 p-2">Formula</td>
          </tr>

          <tbody>
            <tr>
              <td class="border-solid border-2 border-gray-200 p-3">
                Metres and kilograms (or centimeters)
              </td>
              <td class="border-solid border-2 border-gray-200 p-3">
                Mass (kg) / [height (m)]2 is the formula. The formula for BMI is
                weight in kilograms partitioned by height in metres squared.
                Because height is generally measured in centimeters, divide it
                by 100 to get height in metres. Mass = 68 kg, height = 165 cm,
                etc (1.65 m)Calculation: 68 (1.65 + 24.98)2 = 24.98
              </td>
            </tr>
            <tr>
              <td class="border-solid border-2 border-gray-200 p-3">
                Inches and Pounds
              </td>
              <td class="border-solid border-2 border-gray-200 p-3">
                Weight (pounds) / [height (inches)] 2 x 703.BMI is determined by
                dividing body weight (lbs) / height into units of inches (in) ^2
                and multiplying by 703. Mass = 150 lbs, Length = 5'5" (65")[150
                (65)2] multiplied by 703 is 24.96
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
    <div class="flex flex-col w-full max-w-xl py-3 justify-center">
      <h2
        class="font-heading text-2xl font-bold leading-normal mt-0 mb-2 text-primary"
      >
        How is BMI understood in adults?
      </h2>
    </div>
    <div class="flex flex-1 flex-col py-1 items-center justify-center">
      <div class="w-full max-w-xl text-justify">
        BMI is calculated using weight status categories for people aged 20 and
        above. These categories are applicable to men and women of various body
        shapes and ages.
      </div>
    </div>
    <div class="flex flex-1 flex-col py-1 items-center justify-center">
      <div class="w-full max-w-xl text-justify">
        Adult BMI Calculator
        <div class="py-2 px-2 cursor-pointer pointer-events-auto relative">
          <div class="w-full block bg-cover rounded">
            <img
              src="https://lh3.googleusercontent.com/tIhPB8wJSklUYdkfYZKpBFo0axldcHNyY4qgakPmatEDXT62NxaGrpf_AdtomY8qA7C_sfSIY5hTyvxt8k1-FOSBrDRnNdyrdvaswS0y1fiKPBpR9fW2FAwYee-OR537VQUI4MD9VizWMhTZ5tSjWjDW8ZyIITCOzTEPfk2qdxWSFpbLSHZf_h7WGw"
            />
          </div>
        </div>
        <div class="py-2 px-2 cursor-pointer pointer-events-auto relative">
          <div class="w-full block bg-cover rounded">
            <img
              src="https://lh4.googleusercontent.com/dQSiJBhF29cusXlf4ueRsjVcHE3B1HkHc0ETXDOt6_lUCpBSr2rhraz5fEwBqKOV_lZxgU86UdWWJOBUKAkQ7OT_X-EIm59Sb4eCv8JtKzrJQEYZi5tow-qORUAHMIJwvOFy1jrHydb96aDigdAk6ei66c1J2s7Y8sd2jMOvLFEW5m80-rGOcT2_-Q"
              style="width: 100%"
            />
          </div>
        </div>
      </div>
    </div>
    <div class="flex flex-1 flex-col py-1 items-center justify-center">
      <div class="w-full max-w-xl text-justify">
        <p class="py-3">BMI chart for children and teenagers aged 2 to 20</p>
        <table class="border-solid border-2 border-gray-200">
          <tr>
            <td class="border-solid border-2 border-gray-200 p-2">Category</td>
            <td class="border-solid border-2 border-gray-200 p-2">
              Percentage
            </td>
          </tr>

          <tbody>
            <tr>
              <td class="border-solid border-2 border-gray-200 p-3">
                Underweight
              </td>
              <td class="border-solid border-2 border-gray-200 p-3">
                More than 5%
              </td>
            </tr>
            <tr>
              <td class="border-solid border-2 border-gray-200 p-3">
                Healthy weight
              </td>
              <td class="border-solid border-2 border-gray-200 p-3">
                5% to 85%
              </td>
            </tr>
            <tr>
              <td class="border-solid border-2 border-gray-200 p-3">
                In danger of becoming overweight
              </td>
              <td class="border-solid border-2 border-gray-200 p-3">
                85% to 95%
              </td>
            </tr>
            <tr>
              <td class="border-solid border-2 border-gray-200 p-3">Obesity</td>
              <td class="border-solid border-2 border-gray-200 p-3">95%</td>
            </tr>
          </tbody>
        </table>
        <div class="py-3 cursor-pointer pointer-events-auto relative">
          <div class="w-full block bg-cover rounded">
            <img
              src="https://lh4.googleusercontent.com/vQbwqBm5b-K4XX8w3Kq4KUzR0T3vEL46aahRT3WhatlP2OPq8w3bj8dpaXT4mIE1wnZ8jqj97Tq7r9Rw8HtCbQ8N_p56DRjAtalm2cYSgKmOXffiXUdcF30NIqsgXlbRbojmG_Oi7_L1sD1BhZKUrbbYPIdbyHNiFMW0GNHqZ24GhLPOg28KpF6SZA"
            />
          </div>
        </div>
      </div>
    </div>
    <div class="flex flex-1 flex-col py-1 items-center justify-center">
      <div class="w-full max-w-xl text-justify">
        <div class="py-2 px-2 cursor-pointer pointer-events-auto relative">
          <div class="w-full block bg-cover rounded">
            <img
              src="https://lh3.googleusercontent.com/7vClfLEDNvl44SNqNdTSMjx4-vhvri5Pjhm5IpmtPG33Ex1cSc-3MKPGQhIWBcu9s20yp-qSBayipJ8y7KrDmgFABr7zN5QE8PsdhAq_Pkh6DKqNbyclyK9clx932osFvMs-RkRQGY8iVhx2GVtybrhPo7JKv8z-6-2YtUXyloD5I-pgPpUB5NN4nQ"
              style="width: 100%"
            />
          </div>
        </div>
      </div>
    </div>
    <div class="flex flex-col w-full max-w-xl py-3 justify-center">
      <h2
        class="font-heading text-2xl font-bold leading-normal mt-0 mb-2 text-primary"
      >
        Muscle vs Fat in BMI
      </h2>
    </div>
    <div class="flex flex-1 flex-col items-center justify-center">
      <div class="w-full max-w-xl text-justify">
        <p>
          Assumptions regarding the distribution of fat and muscle mass are
          inaccurate. BMI overestimates excess adiposity(the fact or condition
          of having much or too much fatty tissue in the body) in those with
          greater lean muscle mass (e.g., athletes) and tends to underestimate
          it in people with less lean body mass.
        </p>
        <p class="py-3">
          Research published by Romero-Corral et al. evaluated 13,601 people
          from the third National Health and Nutrition Survey (NHANES III) in
          the United States and discovered that BMI-defined obesity (BMI 30) was
          prevalent in 21% of men and 31% of women. Obesity, defined by body
          fat, was reported in 50% of men and 62% of women. While BMI-defined
          obesity had entrepreneurial orientation (95% for men and 100% for
          women), it had low sensitivity (36 percent for men and 49 percent for
          women).
        </p>
        <p>
          When establishing whether or not a person is fat, the BMI would be
          essentially right, although it has frequently been incorrect. Body
          composition for athletes is often better calculated using body fat
          measurements determined by techniques such as skinfold measurements or
          underwater weighing. The drawbacks of measurement techniques have also
          led to new, alternative methods of measuring obesity, such as the body
          volume indicator.
        </p>
        <p class="py-3">
          While it is vital to assess your BMI and see where you fall in the
          healthy range, a number that is too extreme should not misguide you.
          Age, gender, muscle mass, and bone density all contribute to the
          reading and must be adjusted accordingly. To stay healthy, consume a
          nutritious diet and exercise regularly.
        </p>
      </div>
    </div>
    <div class="flex flex-col w-full max-w-xl py-3 justify-center">
      <h2
        class="font-heading text-2xl font-bold leading-normal mt-0 mb-2 text-primary"
      >
        The Downsides of Being Overweight
      </h2>
    </div>
    <div class="flex flex-1 flex-col items-center justify-center">
      <div class="w-full max-w-xl text-justify">
        Obese people are more likely to develop a wide range of illnesses and
        ailments, including the following:
        <p class="py-1">1) Death from all causes (mortality)</p>
        <p class="py-1">2) Elevated blood pressure (hypertension)</p>
        <p class="py-1">
          3) High levels of triglycerides or increased concentrations of LDL
          cholesterol (dyslipidemia)
        </p>
        <p class="py-1">4) Low HDL cholesterol,</p>
        <p class="py-1">5) Diabetes type 2</p>
        <p class="py-1">6) Cardiovascular disease</p>
        <p class="py-1">7) Stroke</p>
        <p class="py-1">8) A gallbladder condition</p>
        <p class="py-1">
          9) Breakage of cartilage and bone inside a joint)Osteoarthritis
        </p>
        <p class="py-1">10) Issues with breathing and sleep</p>
        <p class="py-1">
          11) Increased oxidative stress and ongoing inflammation
        </p>
        <p class="py-1">12) Certain types of cancer</p>
        <p class="py-1">13) Poor standard of living</p>
        <p class="py-1">
          14) Unipolar depression, stress, and other mental diseases
        </p>
        <p class="py-1">
          15) Body aches and trouble performing some physical tasks
        </p>
        <p class="py-1">
          16) BMI overestimates the amount of adiposity in particularly muscular
          overweight persons (e.g., bodybuilders)
        </p>
        <p class="py-1">
          17) A decreased muscle or a decrease in body height in elderly persons
          may cause BMI to lose some of its connection with adiposity.
        </p>
        <p class="py-1">
          18) BMI greater than 25 has been linked to a higher risk of morbidity
          and death in adults, mostly from metabolic and cardiovascular
          disorders and cancer.
        </p>
        <p>
          Generally speaking, higher mortality risk in comparison to people with
          a healthy Body weight.
        </p>
      </div>
    </div>
    <div class="flex flex-col w-full max-w-xl py-3 justify-center">
      <h2
        class="font-heading text-2xl font-bold leading-normal mt-0 mb-2 text-primary"
      >
        How accurate is the BMI as a measure of body fatness?
      </h2>
      <span
        class="font-heading text-2xl font-bold leading-normal mt-0 mb-2 text-primary"
      >
      </span>
    </div>
    <div class="flex flex-1 flex-col items-center justify-center">
      <div class="w-full max-w-xl text-justify">
        <p>
          There is a rather significant association between BMI and body fat.
          Yet, while having the same BMI, two people's body fat levels may vary.
          For example, women often have more body fat than males at the same
          BMI. Relying on the racial/ethnic group, the quantity of body fat at
          the same BMI may be higher or lower. Older persons often have more
          excellent body fat than younger adults at the same BMI.
        </p>
        <p class="py-3">
          Athletes have much less body fat than non-athletes at the same BMI.
        </p>
        <p>
          More excellent BMI and body obesity rates also seem to increase the
          precision of BMI as a measure of body fatness. A moderately high BMI
          can occur from either high obesity or high lean body mass. However, a
          person with a relatively high BMI (35 kg/m2) is expected to have high
          body fat (muscle and bone). A competent healthcare professional should
          conduct the necessary health evaluations to evaluate a person's health
          state and dangers.
        </p>
      </div>
    </div>
    <div class="flex flex-col w-full max-w-xl py-3 justify-center">
      <h2
        class="font-heading text-2xl font-bold leading-normal mt-0 mb-2 text-primary"
      >
        Anthropometric Techniques for Obesity Assessment
      </h2>
    </div>
    <div class="flex flex-1 flex-col items-center justify-center">
      <div class="w-full max-w-xl text-justify">
        <h4 class="font-heading">1)BMI = Body Weight (kg)/Height2 (m2)</h4>

        <ul class="list-disc px-6 py-2">
          <li>Advantages: Easy to use and popular</li>
          <li>
            Drawbacks: I could estimate body fat levels as too low or too high.
          </li>
        </ul>
      </div>
      <div class="w-full max-w-xl text-justify">
        <h4 class="font-heading">
          2)Waist Measurement (measured 1 cm above supra iliac spine)
        </h4>
        <ul class="list-disc px-6 py-2">
          <li>Advantages: Strong correlation with visceral fat</li>
          <li>Drawbacks: Operator dependence is a drawback.</li>
        </ul>
      </div>
      <div class="w-full max-w-xl text-justify">
        <h4 class="font-heading">
          3) Waist-to-Hip Circumference Ratio (determined by measuring the hip
          circumference through the trochanter line)
        </h4>
        <ul class="list-disc px-6 py-2">
          <li>Advantage: easy and more reliable.</li>
          <li>
            Drawbacks: Due to the double-manual measurement, there is more
            fluctuation.
          </li>
        </ul>
      </div>
    </div>
    <div class="flex flex-col w-full max-w-xl py-3 justify-center">
      <h2
        class="font-heading text-2xl font-bold leading-normal mt-0 mb-2 text-primary"
      >
        The downsides of being underweight
      </h2>
    </div>
    <div class="flex flex-1 flex-col items-center justify-center">
      <div class="w-full max-w-xl text-justify">
        There are disadvantages linked with being underweight, which are
        described below:
        <p class="py-1">
          1)vitamin deficiency, anaemia, and poor nutrition (decreased ability
          to carry oxygen by blood vessels)
        </p>
        <p class="py-1">
          2)Osteoporosis is a condition that weakens bones and raises the chance
          of fracturing a bone.
        </p>
        <p class="py-1">3)a decline in immunological response.</p>
        <p class="py-1">
          4)difficulties with growth and development, particularly in kids and
          teens.
        </p>
        <p class="py-1">
          5)hormonal abnormalities may affect a woman's ability to conceive
          since they might interfere with her menstrual cycle.
        </p>
        <p class="py-1">
          6) Additionally, obese women are more likely to miscarry in the first
          trimester. Potential postoperative difficulties.
        </p>
        <p class="py-1">
          7)Osteoporosis. An underweight woman is more likely to develop
          osteoporosis, a condition where the bones become brittle and even more
          prone to shattering.
        </p>
        <p class="py-1">
          8) A person may exhibit physical symptoms, including weakening skin,
          loss of hair, dry skin, and poor dental health if they do not consume
          enough nourishment in their regular diet.
        </p>
        <p class="py-1">
          9)A person may not get sufficient nutrients to fight against
          infections if they do not obtain enough energy from their food to keep
          healthy. As a result, diseases like the common cold may persist longer
          than they usually would, and a person may become unwell more
          frequently
        </p>
        <p class="py-1">
          Generally speaking, higher mortality risk in comparison to people with
          a healthy Body weight.
        </p>
        <p class="py-1">
          Being underweight is occasionally a symptom of an illness or
          underlying condition, like anorexia nervosa, that has hazards.
        </p>
      </div>
    </div>
    <div class="flex flex-col w-full max-w-xl py-3 justify-center">
      <h2
        class="font-heading text-2xl font-bold leading-normal mt-0 mb-2 text-primary"
      >
        How important is BMI(body mass index)?
      </h2>
    </div>
    <div class="flex flex-1 flex-col py-1 items-center justify-center">
      <div class="w-full max-w-xl text-justify">
        BMI may also affect hidradenitis suppurativa (HS). Hidradenitis
        suppurativa is a skin disorder that results in the formation of tiny,
        painful lumps beneath the skin. Lump formation is most common in
        locations where the skin rubs together, like the armpits, hips, thighs,
        and breasts. The lumps recover slowly. They may reoccur and cause
        tunnels beneath the skin and scars on the skin. According to multicenter
        research of 246 individuals, body mass index and HS are linked, even
        though there is no linear correlation between HS intensity and BMI
        rises. Adults with a significant BMI (BMI > 35) were found to have a
        more severe condition.
      </div>
    </div>
    <div class="flex flex-1 flex-col py-1 items-center justify-center">
      <div class="w-full max-w-xl text-justify">
        A surge in BMI statistically enhanced patient-reported HS severity even
        in patients with a non-obese BMI. A separate multivariate study of 152
        patients revealed that BMI might independently indicate HS disease
        severity. After a thorough review and meta-analysis of dietary or
        metabolic variables and HS, nine papers on body weight and HS were
        discovered. According to this meta-analysis, HS patients had a fourfold
        higher likelihood of being obese than the overall population. A study of
        722 HS patients who exhibited symptoms as teenagers, revealed that
        juvenile HS sufferers are 2.5 times at higher risk of being obese than
        their classmates, suggesting that obesity may affect them at an earlier
        age.
      </div>
    </div>
    <div class="flex flex-col w-full max-w-xl py-3 justify-center">
      <h2
        class="font-heading text-2xl font-bold leading-normal mt-0 mb-2 text-primary"
      >
        BMI and Body Shaming
      </h2>
    </div>
    <div class="flex flex-1 flex-col py-1 items-center justify-center">
      <div class="w-full max-w-xl text-justify">
        Studies examine the relationship between BMI readings and weight
        perception and how young women disprove their size and shape. Body image
        disturbance may be measured in around 55% of persons with average weight
        who see their self-body as mostly overly big and less commonly too thin.
        Body image distortion is frequently connected with an uneasy attitude,
        concern, or seeking confirmation from peers.
      </div>
    </div>
    <div class="flex flex-1 flex-col py-1 items-center justify-center">
      <div class="w-full max-w-xl text-justify">
        Weight and fat deposits determine a higher BMI rating, resulting in
        overall body dissatisfaction. Under the pressure of societal and
        cultural trends, most women are dissatisfied with their body shape,
        regardless of BMI values, and identify their ideal body as a thinner
        version. Even under-weight people are eager to reduce weight to meet an
        expected physical appearance. Fat-shaming critics believe that
        fat-shaming obese people leads to such people gaining extra weight and
        it increases the probability of developing diseases and eating
        disorders. Over the last decade, the rise of fat activism and body
        positivity on social media has shown an increased opposition to
        fat-shaming.
      </div>
    </div>
    <div class="flex flex-1 flex-col py-1 items-center justify-center">
      <div class="w-full max-w-xl text-justify">
        <div class="py-2 px-2 cursor-pointer pointer-events-auto relative">
          <div class="w-full block bg-cover rounded">
            <img
              src="https://lh5.googleusercontent.com/xcnTeiiD2ov0SOZhwfMaz8Gi2h0Sz-zffTdGFeAvAZaUHEEWBE2JcXwy93tA2TxVhUpOkN1NefrxsPlwLHNUVTmjhs1BV4MT5R-QVxo8w091HzUz1GA1s4XRJa-OsEmkCSq_K4mPvdAmxbj2m0ZPog6fedIIvNy9C2dcOZ6ezLCPsgWL_l86QoKMzg"
              style="width: 100%"
            />
          </div>
        </div>
      </div>
    </div>
    <div class="flex flex-col w-full max-w-xl py-3 justify-center">
      <h2
        class="font-heading text-2xl font-bold leading-normal mt-0 mb-2 text-primary"
      >
        5 Fun Facts Regarding Body Mass Index (BMI)
      </h2>
    </div>
    <div class="flex flex-col w-full max-w-xl py-2 justify-center">
      <h3
        class="font-heading text-xl font-bold leading-normal mt-0 mb-2 text-primary"
      >
        1)BMI can predict children's future weight.
      </h3>
    </div>
    <div class="flex flex-1 flex-col py-1 items-center justify-center">
      <div class="w-full max-w-xl text-justify">
        A new study by scientists revealed that looking at children's BMI can
        predict future weight. This result was reached after evaluating data
        comprising fresh weight of about 4,700 youngsters starting at the age of
        8 years. Obesity is a disease that causes a slew of additional health
        problems. The experts urge that essential steps be taken to treat and
        prevent the growth of excess weight and obesity in children.
      </div>
    </div>
    <div class="flex flex-1 flex-col py-1 items-center justify-center">
      <div class="w-full max-w-xl text-justify">
        Usually, children reach a maximum in their BMI growth around nine
        months, and around six years old, the BMI curve reverses, dropping and
        then rising again. The studies show that some children who have an
        above-average BMI index do not have a crest or a dip in their curve.
        This helps forecast the child's overall weight based on measurements
        taken at one and five years old.
      </div>
    </div>
    <div class="flex flex-col w-full max-w-xl py-2 justify-center">
      <h3
        class="font-heading text-xl font-bold leading-normal mt-0 mb-2 text-primary"
      >
        2)Diabetes risk is reduced by lowering BMI.
      </h3>
    </div>
    <div class="flex flex-1 flex-col py-1 items-center justify-center">
      <div class="w-full max-w-xl text-justify">
        According to new research, reducing BMI by nearly five units
        significantly reduces the risk of diabetes regardless of a person's
        starting weight. The data show that diabetes may be avoided and
        decreased in even highly obese persons. After 2 and 10 years, losing
        five BMI values can significantly lower your chance of developing type 2
        diabetes. For example, losing five BMI units is comparable to 16kg (BMI
        40) for a 180cm tall 35-year-old male weighing 130kg, which decreases
        the probability of acquiring type 2 diabetes. This is relevant for all
        individuals; even those highly obese exhibited remarkable benefits.
      </div>
    </div>
    <div class="flex flex-col w-full max-w-xl py-2 justify-center">
      <h3
        class="font-heading text-xl font-bold leading-normal mt-0 mb-2 text-primary"
      >
        3)People who are overweight in the midsection and have a normal BMI are
        more likely to die.
      </h3>
    </div>
    <div class="flex flex-1 flex-col py-1 items-center justify-center">
      <div class="w-full max-w-xl text-justify">
        BMI is considered normal when compared to individuals who are overweight
        or obese yet carry their weight elsewhere. People whose weight is
        centralised in the body's centre are at a higher risk of mortality from
        any cause. According to the result of the study, only healthy weight and
        obese adults with central obesity had an elevated risk of all-cause
        death compared to normal-weight individuals without central obesity.
        Furthermore, regardless of BMI, all subjects with central obesity were
        at a higher risk of cardiovascular mortality.
      </div>
    </div>
    <div class="flex flex-col w-full max-w-xl py-2 justify-center">
      <h3
        class="font-heading text-xl font-bold leading-normal mt-0 mb-2 text-primary"
      >
        4)Pre-pregnancy Increased weight gained during pregnancy is
        significantly connected to BMI.
      </h3>
    </div>
    <div class="flex flex-1 flex-col py-1 items-center justify-center">
      <div class="w-full max-w-xl text-justify">
        Additional weight gain due to pregnancy harms both the mother and the
        baby's health, and a new study suggests that pre-pregnancy BMI and
        ethnicity may predict obesity later in adulthood for young moms - women
        giving birth between the ages of 15 and 24. According to a study in the
        journal PLOS ONE, clinicians should have a more sympathetic attitude
        toward teenage women. And utilize BMI preceding pregnancy to assess if a
        young mother would acquire quite so much pregnancy weight, which is
        regarded as a risk factor for subsequent obesity.
      </div>
    </div>
    <div class="flex flex-col w-full max-w-xl py-2 justify-center">
      <h3
        class="font-heading text-xl font-bold leading-normal mt-0 mb-2 text-primary"
      >
        5)Coronary heart disease increases in direct proportion to BMI (BMI)
      </h3>
    </div>
    <div class="flex flex-1 flex-col py-1 items-center justify-center">
      <div class="w-full max-w-xl text-justify">
        According to the Hundred thousand Women Study, cardiovascular disease
        (CHD) rises with age and BMI.The study associates weight gain with an
        increased risk of CHD, which is thought to be similar to getting older.
        Even a minor rise in BMI raises the risk of having CHD, and the study
        demonstrates that this is applicable not just in the highest weight but
        also in women that are not often considered fat. Scientists make the
        following recommendations: to achieve a balanced BMI, adopt an active
        lifestyle by stopping smoking, avoiding excessive alcohol intake, and
        being physically active.
      </div>
    </div>
    <div class="flex flex-col w-full max-w-xl py-3 justify-center">
      <h2
        class="font-heading text-2xl font-bold leading-normal mt-0 mb-2 text-primary"
      >
        BMI Myths That Should Disbelieve
      </h2>
    </div>
    <div class="flex flex-1 flex-col py-1 items-center justify-center">
      <div class="w-full max-w-xl text-justify">
        There's no arguing that the "fat is bad" mentality has led us to accept
        a lot of myths concerning BMI. However, here are five "facts" that need
        to be reconsidered.
      </div>
    </div>
    <div class="flex flex-col w-full max-w-xl py-2 justify-center">
      <h3
        class="font-heading text-xl font-bold leading-normal mt-0 mb-2 text-primary"
      >
        Myth: Having a low BMI guarantees good health.
      </h3>
    </div>
    <div class="flex flex-1 flex-col py-1 items-center justify-center">
      <div class="w-full max-w-xl text-justify">
        <p>
          Being overweight has been linked to high blood pressure,
          hyperglycemia, and high cholesterol. So it is logical that maintaining
          a low BMI will help with all that, right? Wrong. In an examination of
          many BMI studies, researchers discovered one research of 40,000
          individuals revealed no association between perceived BMI and health
          concerns such as hypertension and blood sugar. Plenty of "obese"
          persons had regular readings, and plenty of "normal" BMI people had
          hypertension, insulin levels, and cholesterol.
        </p>
        <p class="py-2">
          The Runner's Heart is related to One of the study's authors; Bacon
          believes it demonstrates how weight measures impact health. "More than
          half of those in the research would have been misdiagnosed," she
          claims. In addition, because doctors would visit persons with healthy
          BMI and would most likely not check for excessive saturated fat or
          blood sugar, such people would miss out on needed treatments.
        </p>
      </div>
    </div>
    <div class="flex flex-col w-full max-w-xl py-2 justify-center">
      <h3
        class="font-heading text-xl font-bold leading-normal mt-0 mb-2 text-primary"
      >
        Myth: High BMI raises your chances of having a heart attack.
      </h3>
    </div>
    <div class="flex flex-1 flex-col py-1 items-center justify-center">
      <div class="w-full max-w-xl text-justify">
        Many studies, like those on blood sugar, hypertension, and cholesterol,
        have found a link between a high BMI and an increased risk of heart
        disease. However, according to recent self-reported research of 4,046
        sets of identical twins, possessing a high BMI does not enhance these
        risks. During the 12-year study period, there used to be 203 heart
        diseases and 550 fatalities among many the twin pairs with large BMIs,
        and 209 cardiac arrests and 633 deaths among the slimmer twins. Even
        twins with a BMI over 30 or greater (considered obese) showed no
        increased risk of a heart attack.
      </div>
    </div>
    <div class="flex flex-col w-full max-w-xl py-2 justify-center">
      <h3
        class="font-heading text-xl font-bold leading-normal mt-0 mb-2 text-primary"
      >
        Myth: Eating well and exercising will always result in a lower BMI.
      </h3>
    </div>
    <div class="flex flex-1 flex-col py-1 items-center justify-center">
      <div class="w-full max-w-xl text-justify">
        Muscle is heavier than fat. Someone who incorporates exercise and good
        nutrition into their routine may gain weight—which isn't always
        negative. "People of all body proportions can be healthy," says Rebecca
        Puhl, PhD, deputy director of the Rudd Centre for Food Policy & Obesity.
        Nonetheless, she claims that many clinicians continue to criticise
        overweight patients, although those patients are participating in good
        diet and exercise habits.
      </div>
    </div>
    <div class="flex flex-col w-full max-w-xl py-2 justify-center">
      <h3
        class="font-heading text-xl font-bold leading-normal mt-0 mb-2 text-primary"
      >
        Myth: If your BMI ranges between 19 and 25, you're in good health.
      </h3>
    </div>
    <div class="flex flex-1 flex-col py-1 items-center justify-center">
      <div class="w-full max-w-xl text-justify">
        In case you're wondering, the BMI scale is broken down as follows: A BMI
        of 18.5 or less indicates being underweight, 18.5 to 24.9 indicates
        healthy, 25 to 29.9 indicates excess weight, while 30 or more indicates
        obesity. But it wasn't always like this. In 1998, the National Institute
        of Health revised BMI recommendations, reducing the overweight
        classification from 27.8 to 25. So a lady who was 5 ft in height and 155
        lbs was abruptly labelled fat..
        <p class="py-2">
          Bacon was a PhD student at the time, working on a thesis about body
          health and weight. Her adviser was a member of the committee which
          made the suggestion, so she questioned why they would decrease the
          numbers when all indicators point out the need to increase them.
        </p>
      </div>
    </div>
    <div class="flex flex-col w-full max-w-xl py-2 justify-center">
      <h3
        class="font-heading text-xl font-bold leading-normal mt-0 mb-2 text-primary"
      >
        BMI for children of age group 2 to 19
      </h3>
    </div>
    <div class="flex flex-1 flex-col py-1 items-center justify-center">
      <div class="w-full max-w-xl text-justify">
        For children, BMI is used differently. It is computed in the same manner
        as for adults and then compared to average values for other individuals
        of the same age. Instead of being compared to existing underweight and
        overweight standards, the BMI is compared to the percentile rank for
        children of the same gender and age. For example, a BMI of 5th percent
        is considered underweight, while a BMI above the 95th percentile is
        considered obese. Overweight children are those with a BMI between 85th
        and 95th percentiles. In 2013, studies in the United Kingdom found that
        females aged 12 to 16 had a 1.0 kg/m2 greater BMI than boys of the same
        age.
      </div>
    </div>
    <div class="flex flex-col w-full max-w-xl py-2 justify-center">
      <h3
        class="font-heading text-xl font-bold leading-normal mt-0 mb-2 text-primary"
      >
        Variation in category definitions
      </h3>
    </div>
    <div class="flex flex-1 flex-col py-1 items-center justify-center">
      <div class="w-full max-w-xl text-justify">
        It is unclear how far from the BMI scale for the overweight and obese
        thresholds should be put. As a result, standards have shifted during the
        last few decades. Between 1980 and 2000, the United States Dietary
        Guidelines categorised overweight as having a BMI between 24.9 to 27.1.
        The Institute Of Health And Welfare (NIH) meeting in 1985 proposed that
        the overweight BMI for males be established at 27.8 and 27.3 in women.
        <p class="py-2">
          An NIH research from 1998 found that a BMI of 25 or above is taken as
          overweight, while a BMI ranging 30 or higher is taken as obese. The
          World Health Organization (WHO) established in the 1990s that a BMI of
          25 to 30 is deemed overweight, while a BMI of 30 or above is
          considered obese, mirroring the NIH's guidelines. This became the de
          facto standard for judging whether or not someone is overweight. The
          present WHO and NIH normal weight limits are related to lower risks of
          several illnesses, such as type II diabetes. Nevertheless, adopting
          the same BMI range for men and women is considered arbitrary, making
          the concept of being underweight inappropriate for males.
        </p>
      </div>
    </div>
    <div class="flex flex-col w-full max-w-xl py-2 justify-center">
      <h3
        class="font-heading text-xl font-bold leading-normal mt-0 mb-2 text-primary"
      >
        Pregnancy and BMI
      </h3>
    </div>
    <div class="flex flex-1 flex-col py-1 items-center justify-center pb-3">
      <div class="w-full max-w-xl text-justify">
        Using the Asian BMI categories, the conventional underweight during
        pregnancy was 20.1 percent, while 21.7 percent of women were considered
        overweight and 5.3 percent were obese. According to the global BMI
        classifications, the prevalence of overweight (BMI: 25.0-29.9 kg/m2) and
        obese (BMI: 30.0 kg/m2) was 13.5 percent and 1.1 percent, respectively.
        <p class="py-2">
          Most women gained low weight during pregnancy compared to Institute of
          Medicines (IOM) standards, particularly those with a normal BMI. The
          chances of macrosomia are 13.46, and the birth-weight Adjusted Mean
          Difference of 205 was considerably higher in obese women than in those
          with a normal BMI. (foetal macrosomia refers to a newborn
          significantly bigger than ordinary)
        </p>
      </div>
    </div>
  </article>
</template>
<script lang="ts" setup></script>
