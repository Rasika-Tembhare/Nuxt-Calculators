<template>
  <div class="flex flex-col items-center py-5 justify-center">
    <h1 class="font-heading text-4xl font-bold leading-normal text-primary">
      GPA Calculator
    </h1>
  </div>
  <div class="flex flex-col items-center py-5 justify-center">
    <div class="tabs tabs-boxed space-x-2">
      <button
        class="text-sm h-8 w-40 text-gray-300 bg-black hover:bg-accent active:bg-accent rounded-lg focus:outline-none focus:bg-accent"
        @click="click"
      >
        GPA to Percentage
      </button>
      <button
        class="text-sm h-8 w-40 text-gray-300 bg-black hover:bg-accent active:bg-accent rounded-lg focus:outline-none focus:bg-accent"
        @click="onclick"
      >
        Percentage to GPA
      </button>
    </div>
  </div>
  <div v-if="gpaShow">
    <gpa_Percent />
  </div>
  <div v-if="percentageShow">
    <percent_GPA />
  </div>

  <div class="flex flex-col items-center py-5 justify-center">
    <h1 class="font-heading text-3xl font-bold leading-normal text-primary">
      GPA Calculator
    </h1>
  </div>

  <div class="flex flex-col items-center justify-center">
    <div class="w-full max-w-lg text-justify">
      <h2 class="font-heading text-2xl font-bold leading-normal text-primary">
        Percentage to GPA Calculator
      </h2>
      <p>
        GPA is a measure that represents how well or how high you achieved on
        average in your courses. It is intended to reflect your academic
        performance and whether your total grades have been excellent or bad.
        This figure is then used to determine whether students fulfil the degree
        program's or university's criteria and expectations. For example, the
        university uses GPA to make choices such as the following:
      </p>
      <li>Academic advancement</li>
      <li>Acceptance to advanced studies (e.g., honours)</li>
      <li>
        Eligibility for awards, the University Medal, the Academic Excellence
        Award, and scholarships
      </li>
      <li>Quality assurance and accreditation</li>
      <p>
        The grading system in education is a structured technique for
        determining different levels of a student's academic skills. Each
        nation's education and grading systems vary and serve as a benchmark for
        admittance within the country. However, the requirement for a standard
        grading system has been developed to study in a foreign nation. A
        globally recognised method known as the Grade Point Average is devised
        to determine the grades to solve the problem.GPA is calculated from zero
        to 4, with 4 representing the highest and 0 representing the lowest.
        This average can be computed for a specific course, semester, or school
        year.
      </p>
    </div>
  </div>
  <div class="flex flex-col items-center justify-center">
    <div class="w-full max-w-lg text-justify">
      <h2 class="font-heading text-2xl font-bold leading-normal text-primary">
        What is the importance of the GPA?
      </h2>
      <p>
        Throughout your university career, your GPA is the metric or calculation
        that shows how good a student you are and if you've been performing
        well. In addition, GPA provides a more comprehensive picture of your
        total grades and scores.
      </p>
      <p>
        During your Bachelor's or Master's degree program, you will be required
        to give your GPA many times. Here are a couple of such examples:
      </p>
      <li>Scholarship application</li>
      <li>Participating in an organisation or group</li>
      <li>Participating in any extracurricular activities</li>
      <li>
        Using for a postgraduate and graduate degree (Master's, PhD) program
      </li>
    </div>
  </div>
  <div class="flex flex-col items-center justify-center">
    <div class="w-full max-w-lg text-justify">
      <h2 class="font-heading text-2xl font-bold leading-normal text-primary">
        What is a GPA calculator?
      </h2>
      <p>
        A GPA calculator is an online tool that may help you assess whether you
        are eligible for scholarships, programs like Honors, or entrance to
        other colleges. It can also be used to determine your current GPA or
        your future GPA if you obtain specific grades.
      </p>
      >
    </div>
  </div>
  <div class="flex flex-col items-center justify-center">
    <div class="w-full max-w-lg text-justify">
      <h2 class="font-heading text-2xl font-bold leading-normal text-primary">
        Percentage to GPA Calculator
      </h2>
      <p>
        To convert the percentage to GPA, Divide your percentage by 100 and
        multiply by 4. For instance, if a candidate receives an 80 percent, he
        must divide 80 with 100 and multiply the result by 4, which gives him a
        GPA of 3.2.
      </p>
      <h2 class="font-heading text-1xl font-bold leading-normal text-primary">
        Why convert a percentage to GPA
      </h2>
      <li>
        GPA is a more widely accepted method in universities and institutions.
      </li>
      <li>GPA is a more widely accepted grading system in the world.</li>
      <li>
        A universal grading system, such as the GPA, is required since
        admissions committees receive applications from many countries.
      </li>
      <li>
        There may be occasions during your Bachelor's and Master's degree
        program when you are questioned about your GPA.
      </li>
      <li>
        You'll be able to see if you passed and performed well in your classes,
        but your GPA gives a complete view of your overall performance.
      </li>
      <li>
        Organizations rely on your GPA to determine what type of student you
        are—whether you're a dedicated, ambitious student or a lazier who isn't
        doing well in studies.
      </li>
      <li>
        Suppose your competition is limited to a nation only. In that case, the
        percentage will do it for you. Still, if your competition is more
        extended, that is, at the international level, then GPA is a must for
        comparing or assessing performance and development.
      </li>
    </div>
  </div>
  <div class="flex flex-col items-center justify-center">
    <div class="w-full max-w-lg text-justify">
      <h2 class="font-heading text-2xl font-bold leading-normal text-primary">
        GPA to Percentage Calculator
      </h2>
      <p>
        To convert GPA to Percentage, multiply GPA by 100 and divide by 4. As an
        illustration, if a candidate receives a GPA of 3.2, he would need to
        multiply 3.2 by 100 and divide it by 4.
      </p>
      <h3 class="font-heading text-1xl font-bold leading-normal text-primary">
        Why convert GPA to Percentage:
      </h3>
      <li>
        To determine "how much" or "how many," use the percentage. Calculating
        the precise quantity or figure which is discussed is made easier with
        the use of a percentage. Calculating a percentage number makes
        determining the precise amount or figure being discussed easier.
      </li>
      <li>
        Comparing two amounts using percentages is their most basic use. To make
        a clear comparison image, GPA can be changed into percentages.
      </li>
      <li>
        Percentages are helpful for examining or comparing outcomes and
        development.
      </li>
      <li>
        Finding a % rise or reduction with extensive data Percentages may be
        used to examine large amounts of data quickly and accurately.
      </li>
      <li>
        A percentage is a handy tool for the most straightforward representation
        of numerical data.
      </li>
      <li>
        Expressing changes in observable parameters like grades using
        percentages and calculating an increase or reduction in grades. This
        application of percentages is crucial for evaluating or contrasting
        performances and advancement. When the primary comparison criterion is
        different, the application is very beneficial.
      </li>
    </div>
  </div>
  <div class="flex flex-col items-center justify-center">
    <div class="w-full max-w-lg text-justify">
      <h2 class="font-heading text-2xl font-bold leading-normal text-primary">
        What is a good GPA?
      </h2>
      <p>Each grade point on the 4.0 scale has the following meaning:</p>
      <table class="shadow-lg bg-white border-collapse">
        <tr>
          <th class="bg-blue-100 border text-left px-8 py-4">Grade Point</th>
          <th class="bg-blue-100 border text-left px-8 py-4">Meaning</th>
        </tr>
        <tbody>
          <tr>
            <td class="border px-8 py-4">0</td>
            <td class="border px-8 py-4">Failing</td>
          </tr>
          <tr>
            <td class="border px-8 py-4">1</td>
            <td class="border px-8 py-4">Barely Passing</td>
          </tr>
          <tr>
            <td class="border px-8 py-4">2</td>
            <td class="border px-8 py-4">Average</td>
          </tr>
          <tr>
            <td class="border px-8 py-4">3</td>
            <td class="border px-8 py-4">Good</td>
          </tr>
          <tr>
            <td class="border px-8 py-4">4</td>
            <td class="border px-8 py-4">Excellent</td>
          </tr>
        </tbody>
      </table>
      <p>
        Most institutions consider a GPA between 3.0 - 3.5 to be good. Top
        academic schools often need GPAs greater than 3.5. You can still get in
        with a lower GPA, but you may not be qualified for scholarships.
      </p>
    </div>
  </div>
  <div class="flex flex-col items-center justify-center">
    <div class="w-full max-w-lg text-justify">
      <h2 class="font-heading text-2xl font-bold leading-normal text-primary">
        What is an unweighted and weighted GPA?
      </h2>
      <h3 class="font-heading text-1xl font-bold leading-normal text-primary">
        Unweighted GPA?
      </h3>
      <p>How do you measure an unweighted GPA?</p>
      <p>
        GPAs are usually calculated on an unweighted scale ranging from 0 to
        4.0, implying that the complexity of your courses is not considered. So
        whether you get an A in a simple or challenging class, you'll always get
        a 4.0.
      </p>
      <h3 class="font-heading text-1xl font-bold leading-normal text-primary">
        Weighted GPA
      </h3>
      <p>
        Weighted GPAs provide a more accurate assessment of your academic
        performance. They also undertake a separate scale ranging from 0 to 5.0.
        If you want to check how to compute weighted GPAs, you should realise
        that they consider the difﬁculties between your courses. For example, an
        A in a more straightforward class is scored as a 4.0, but an A in a more
        difficult course will be evaluated as a 5.0.
      </p>
    </div>
  </div>
  <div class="flex flex-col items-center justify-center">
    <div class="w-full max-w-lg text-justify">
      <h2 class="font-heading text-2xl font-bold leading-normal text-primary">
        What is the difference between Grades, GPA, and CGPA?
      </h2>
      <p>
        The distinction between a grading system and a GPA is essential for
        students who want to study abroad since a GPA is needed to apply to a
        foreign university.
      </p>
      <p>
        <strong>A grade</strong> is a value achieved by a student in the form of
        a percentage of marks for a particular course within a specific period.
        For example, students at Indian schools and colleges earn marks out of a
        hundred for each subject, and the total marks from all classes are
        transformed into a percentage to determine the final term score.
      </p>
      <p>
        <strong>GPA</strong> is the mean of grades received by students over a
        specific time and is expressed numerically or in letters. It can, for
        example, range from A to F or 0 to 4. To compare candidates ' previous
        academic results, GPA is determined for high school, graduate, and
        postgraduate students for admission to international educational
        institutions.
      </p>
      <p>
        <strong>CGPA:</strong> GPA is identical to cumulative grade point
        average (CGPA). It is yet another grading system utilised in India. It
        is, however, only defined numerically in a range of 0 to 10. Therefore,
        the CGPA is calculated using the formula from zero to 10.
      </p>
    </div>
  </div>
  <div class="flex flex-col items-center justify-center">
    <div class="w-full max-w-lg text-justify">
      <h2 class="font-heading text-2xl font-bold leading-normal text-primary">
        GPA cumulative vs total GPA
      </h2>
      <p>
        To know the distinctions between overall GPA and cumulative GPA, you
        must realise that both of them refer to a student's average grades. On
        the other hand, the cumulative GPA includes shorter periods, such as a
        semester or a term.
      </p>
      <p>
        The total GPA refers to a student's average grades throughout his
        academic career, which indicates that the overall GPA contains grades
        from complete terms and semesters.
      </p>
    </div>
  </div>
  <div class="flex flex-col items-center justify-center">
    <div class="w-full max-w-lg text-justify">
      <h2 class="font-heading text-2xl font-bold leading-normal text-primary">
        Grading scales in India
      </h2>
      <p>
        Indian schools, colleges, and universities often have their private
        grading system, with some using percentage and 10-point grading systems
        for CGPA and GPA. Furthermore, for those schools that use a percentage
        method for grading, the marks received within a specific period are
        transformed into percentages and afterwards split into the four rankings
        shown below:
      </p>
      <table class="shadow-lg bg-white border-collapse">
        <tbody>
          <tr scope="col" class="py-3 px-6">
            <td class="border px-8 py-4">75%</td>
            <td class="border px-8 py-4">Distinction</td>
          </tr>
          <tr scope="col" class="py-3 px-6">
            <td class="border px-8 py-4">60-75%</td>
            <td class="border px-8 py-4">1st Division</td>
          </tr>
          <tr scope="col" class="py-3 px-6">
            <td class="border px-8 py-4">50-60%</td>
            <td class="border px-8 py-4">2nd Division</td>
          </tr>
          <tr scope="col" class="py-3 px-6">
            <td class="border px-8 py-4">40-50%</td>
            <td class="border px-8 py-4">3rd Division</td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
  <div class="flex flex-col items-center justify-center">
    <div class="w-full max-w-lg text-justify">
      <h2 class="font-heading text-2xl font-bold leading-normal text-primary">
        Calculating GPA
      </h2>
      <p>
        The nations themselves specify the procedure of determining the Grade
        Point Average. GPA is measured from 0 to 10 using the formula -
        Percentage/9.5, which yields a score of zero to 10. For instance, if the
        proportion is 65%, the appropriate GPA is 6.84 out of 10. Even so, there
        is no easy method for calculating GPA on a scale from 0 to 4.0.
        Aspirants can utilise WES's premium services to determine their precise
        GPA on a scale of 0 to 4.0. (World Education Services). Students may
        compute their GPA if they know the following: Credits earned - The
        overall number of points earned for courses studied at the university.
        Final grade - These are the grades you received after your program.
        Grade point values - Each grade is given a point value from 0.00 to
        4.00.
      </p>
      <p>
        In addition, the CGPA and GPA scales discussed in the preceding section,
        which correlate to the marking systems in India, are compared in the
        table below:
      </p>
      <table class="shadow-lg bg-white border-collapse">
        <thead
          class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400"
        >
          <tr>
            <th class="bg-blue-100 border text-left px-8 py-4">Grade</th>
            <th class="bg-blue-100 border text-left px-8 py-4">GPA</th>
            <th class="bg-blue-100 border text-left px-8 py-4">CGPA</th>
            <th class="bg-blue-100 border text-left px-8 py-4">Percentage</th>
          </tr>
        </thead>
        <tbody>
          <tr scope="col" class="py-3 px-6">
            <td class="border px-8 py-4">A+</td>
            <td class="border px-8 py-4">4.0</td>
            <td class="border px-8 py-4">10.0</td>
            <td class="border px-8 py-4">97-100</td>
          </tr>
          <tr scope="col" class="py-3 px-6">
            <td class="border px-8 py-4">A</td>
            <td class="border px-8 py-4">4.0</td>
            <td class="border px-8 py-4">9.7-10.0</td>
            <td class="border px-8 py-4">93-96</td>
          </tr>
          <tr scope="col" class="py-3 px-6">
            <td class="border px-8 py-4">A-</td>
            <td class="border px-8 py-4">3.7</td>
            <td class="border px-8 py-4">19.4-9.6</td>
            <td class="border px-8 py-4">90-92</td>
          </tr>
          <tr scope="col" class="py-3 px-6">
            <td class="border px-8 py-4">B+</td>
            <td class="border px-8 py-4">3.3</td>
            <td class="border px-8 py-4">9.1-9.3</td>
            <td class="border px-8 py-4">87-89</td>
          </tr>
          <tr scope="col" class="py-3 px-6">
            <td class="border px-8 py-4">B</td>
            <td class="border px-8 py-4">3.0</td>
            <td class="border px-8 py-4">8.7-9.0</td>
            <td class="border px-8 py-4">83-86</td>
          </tr>
          <tr scope="col" class="py-3 px-6">
            <td class="border px-8 py-4">B-</td>
            <td class="border px-8 py-4">2.7</td>
            <td class="border px-8 py-4">8.4-8.6</td>
            <td class="border px-8 py-4">80-82</td>
          </tr>
          <tr scope="col" class="py-3 px-6">
            <td class="border px-8 py-4">C+</td>
            <td class="border px-8 py-4">2.3</td>
            <td class="border px-8 py-4">8.1-8.3</td>
            <td class="border px-8 py-4">77-79</td>
          </tr>
          <tr scope="col" class="py-3 px-6">
            <td class="border px-8 py-4">C</td>
            <td class="border px-8 py-4">2.0</td>
            <td class="border px-8 py-4">7.6-8.0</td>
            <td class="border px-8 py-4">73-76</td>
          </tr>
          <tr scope="col" class="py-3 px-6">
            <td class="border px-8 py-4">C-</td>
            <td class="border px-8 py-4">1.7</td>
            <td class="border px-8 py-4">7.3-7.5</td>
            <td class="border px-8 py-4">70-72</td>
          </tr>
          <tr scope="col" class="py-3 px-6">
            <td class="border px-8 py-4">D+</td>
            <td class="border px-8 py-4">1.3</td>
            <td class="border px-8 py-4">7.0-7.2</td>
            <td class="border px-8 py-4">67-69</td>
          </tr>
          <tr scope="col" class="py-3 px-6">
            <td class="border px-8 py-4">D</td>
            <td class="border px-8 py-4">1.0</td>
            <td class="border px-8 py-4">6.8-6.9</td>
            <td class="border px-8 py-4">65-66</td>
          </tr>
          <tr scope="col" class="py-3 px-6">
            <td class="border px-8 py-4">E/F</td>
            <td class="border px-8 py-4">0.0</td>
            <td class="border px-8 py-4">Below 6.7</td>
            <td class="border px-8 py-4">below 65</td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
  <div class="flex flex-col items-center justify-center">
    <div class="w-full max-w-lg text-justify">
      <h2 class="font-heading text-2xl font-bold leading-normal text-primary">
        Indian University Grading System
      </h2>
      <table class="shadow-lg bg-white border-collapse">
        <thead
          class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400"
        >
          <tr>
            <th class="bg-blue-100 border text-left px-8 py-4">Marks (in %)</th>
            <th class="bg-blue-100 border text-left px-8 py-4">Grade Point</th>
            <th class="bg-blue-100 border text-left px-8 py-4">Grade</th>
          </tr>
        </thead>
        <tbody>
          <tr scope="col" class="py-3 px-6">
            <td class="border px-8 py-4">97.0-100</td>
            <td class="border px-8 py-4">10</td>
            <td class="border px-8 py-4">O</td>
          </tr>
          <tr scope="col" class="py-3 px-6">
            <td class="border px-8 py-4">87.0-96.9</td>
            <td class="border px-8 py-4">9..0-9.9</td>
            <td class="border px-8 py-4">A+</td>
          </tr>
          <tr scope="col" class="py-3 px-6">
            <td class="border px-8 py-4">77.0-86.9</td>
            <td class="border px-8 py-4">8.0-8.9</td>
            <td class="border px-8 py-4">A</td>
          </tr>
          <tr scope="col" class="py-3 px-6">
            <td class="border px-8 py-4">67.0-76.9</td>
            <td class="border px-8 py-4">7.0-7.9</td>
            <td class="border px-8 py-4">B+</td>
          </tr>
          <tr scope="col" class="py-3 px-6">
            <td class="border px-8 py-4">57.0-66.9</td>
            <td class="border px-8 py-4">6.0-6.9</td>
            <td class="border px-8 py-4">B</td>
          </tr>
          <tr scope="col" class="py-3 px-6">
            <td class="border px-8 py-4">47.0-56.9</td>
            <td class="border px-8 py-4">5.0-5.9</td>
            <td class="border px-8 py-4">C</td>
          </tr>
          <tr scope="col" class="py-3 px-6">
            <td class="border px-8 py-4">37.0-46.9</td>
            <td class="border px-8 py-4">5.0-5.9</td>
            <td class="border px-8 py-4">P</td>
          </tr>
          <tr scope="col" class="py-3 px-6">
            <td class="border px-8 py-4">below 37.0</td>
            <td class="border px-8 py-4">0</td>
            <td class="border px-8 py-4">F</td>
          </tr>
          <tr scope="col" class="py-3 px-6">
            <td class="border px-8 py-4">Absent</td>
            <td class="border px-8 py-4">0</td>
            <td class="border px-8 py-4">AB</td>
          </tr>
        </tbody>
      </table>
      <h2 class="font-heading text-2xl font-bold leading-normal text-primary">
        CBSE's Indian Grading System
      </h2>
      <table class="shadow-lg bg-white border-collapse">
        <thead
          class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400"
        >
          <tr>
            <th class="bg-blue-100 border text-left px-8 py-4">Grade</th>
            <th class="bg-blue-100 border text-left px-8 py-4">Grade Point</th>
            <th class="bg-blue-100 border text-left px-8 py-4">Marks Range</th>
            <th class="bg-blue-100 border text-left px-8 py-4">US Grade</th>
          </tr>
        </thead>
        <tbody>
          <tr scope="col" class="py-3 px-6">
            <td class="border px-8 py-4">A1</td>
            <td class="border px-8 py-4">10.0</td>
            <td class="border px-8 py-4">91-100</td>
            <td class="border px-8 py-4">A</td>
          </tr>
          <tr scope="col" class="py-3 px-6">
            <td class="border px-8 py-4">A2</td>
            <td class="border px-8 py-4">9.0</td>
            <td class="border px-8 py-4">81-90</td>
            <td class="border px-8 py-4">A</td>
          </tr>
          <tr scope="col" class="py-3 px-6">
            <td class="border px-8 py-4">B1</td>
            <td class="border px-8 py-4">8.0-</td>
            <td class="border px-8 py-4">71-80</td>
            <td class="border px-8 py-4">B</td>
          </tr>
          <tr scope="col" class="py-3 px-6">
            <td class="border px-8 py-4">B2</td>
            <td class="border px-8 py-4">7.0</td>
            <td class="border px-8 py-4">61-70</td>
            <td class="border px-8 py-4">B</td>
          </tr>
          <tr scope="col" class="py-3 px-6">
            <td class="border px-8 py-4">C1</td>
            <td class="border px-8 py-4">6.0</td>
            <td class="border px-8 py-4">51-60</td>
            <td class="border px-8 py-4">C</td>
          </tr>
          <tr scope="col" class="py-3 px-6">
            <td class="border px-8 py-4">C2</td>
            <td class="border px-8 py-4">5.0</td>
            <td class="border px-8 py-4">41-50</td>
            <td class="border px-8 py-4">C</td>
          </tr>
          <tr scope="col" class="py-3 px-6">
            <td class="border px-8 py-4">D</td>
            <td class="border px-8 py-4">4.0</td>
            <td class="border px-8 py-4">33-40</td>
            <td class="border px-8 py-4">D</td>
          </tr>
          <tr scope="col" class="py-3 px-6">
            <td class="border px-8 py-4">E1 & E2</td>
            <td class="border px-8 py-4">0.0</td>
            <td class="border px-8 py-4">21-32</td>
            <td class="border px-8 py-4">F</td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
  <div class="flex flex-col items-center justify-center">
    <div class="w-full max-w-lg text-justify">
      <h2 class="font-heading text-2xl font-bold leading-normal text-primary">
        Foreign Countries' Education Grading System
      </h2>
      <p>
        Foreign Countries' Education Grading System GPA is the grading system
        used in countries such as the United States, Canada, and Australia,
        which are famous study abroad places for higher education. However, the
        GPA in these nations is calculated using distinct grading schemes. For
        example, the GPA scale used in US colleges goes from 0.0 to 4.0, but the
        GPA Grade scale used in Australia ranges from 0.0 to 7.0.
      </p>
      <table class="shadow-lg bg-white border-collapse">
        <thead
          class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400"
        >
          <tr>
            <th class="bg-blue-100 border text-left px-8 py-4">A-F (0-4)</th>
            <th class="bg-blue-100 border text-left px-8 py-4">
              US, Canada, Thailand, Saudi Arabia
            </th>
          </tr>
        </thead>
        <tbody>
          <tr scope="col" class="py-3 px-6">
            <td class="border px-8 py-4">1-5</td>
            <td class="border px-8 py-4">
              Germany, Austria, Russia, Slovakia, Paraguay
            </td>
          </tr>
          <tr scope="col" class="py-3 px-6">
            <td class="border px-8 py-4">1-10</td>
            <td class="border px-8 py-4">
              The Netherlands, Colombia, Latvia, Israel
            </td>
          </tr>
          <tr scope="col" class="py-3 px-6">
            <td class="border px-8 py-4">Percentage</td>
            <td class="border px-8 py-4">Kuwait, Belgium, Hungary, Poland</td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
  <div class="flex flex-col items-center justify-center">
    <div class="w-full max-w-lg text-justify">
      <h2 class="font-heading text-2xl font-bold leading-normal text-primary">
        Myths about GPA
      </h2>
      <h3 class="font-heading text-1xl font-bold leading-normal text-primary">
        Myth: A 4.0 GPA average is necessary for college admissions.
      </h3>
      <p>
        <strong>Fact:</strong> strong grades are essential, but they aren't the
        be-all and end-all of college admissions. Admissions officers will
        examine several different variables while evaluating your application.
        These include community service, extracurricular activities, test
        results, and research experience. Some may even inquire whether you have
        done any Advanced Placement coursework. If you don't have any additional
        accomplishments, a 4 (maximum) GPA may not benefit you as much as you
        believe at most colleges today.
      </p>
      <h3 class="font-heading text-1xl font-bold leading-normal text-primary">
        Myth: Scholarships will only be available to students with a 4.0 GPA.
      </h3>
      <p>
        <strong>Fact:</strong> Good grades are essential for scholarships, but
        not as much as you expect. Scholarship committees want enthusiastic
        applicants about what the institution and their scholarship may help
        them achieve. A scholarship committee is interested in more than just
        your GPA. What matters most is if your interests and values connect with
        theirs. Students that participate in extracurricular activities or are
        interested in their communities are more likely to get awards.
      </p>
      <h3 class="font-heading text-1xl font-bold leading-normal text-primary">
        Myth: A high GPA seems to be more critical than an internship.
      </h3>
      <p>
        <strong>Fact:</strong> A good GPA demonstrates that you have understood
        the theoretical components of a specific subject of study. However, the
        theory has limitations. Many 4.0 GPA students cannot translate their
        academic idea to practical applications. Internships demonstrate that
        you have gained significant experience in a specific sector. A lower GPA
        with first-hand experience carries more weight than a good GPA but no
        experience. Of course, a 4.0 GPA and internship skills are an unbeatable
        combo.
      </p>
      <h3 class="font-heading text-1xl font-bold leading-normal text-primary">
        Myths: Students Are Only Responsible About Their Grades BY 9TH GRADE
      </h3>
      <p>
        <strong>Fact:</strong> At this age, pupils' brains are still developing
        and attempting to improve their organising and planning skills.
      </p>
      <p>
        They require proper direction and education to learn how to study,
        manage time and plan long-term objectives. Some children even struggle
        to understand the effects of a failing grade. These abilities do not
        come naturally to pre-teens and teenagers. Students frequently want
        assistance in understanding how to be a top student and why being a high
        achiever is important.
      </p>
      <h3 class="font-heading text-1xl font-bold leading-normal text-primary">
        Myths: Students’ grades fall during their first year of high school
        because their coursework is challenging.
      </h3>
      <p>
        <strong>Fact:</strong> According to studies, freshman GPA drops have
        little to do with course complexity but more to do with changes in the
        environment.
      </p>
      <p>
        The journey from middle to high school is indeed not simple. High school
        students have new professors, a new campus, increased expectations (and
        stress), and less personal attention than they get in middle school.
        Grades may suffer if students do not understand how to deal with these
        changes. The most straightforward approach to dealing with this issue is
        to plan for it! Again, kids and parents should discuss the transition
        from middle to high school and any problems they may encounter. Be
        mindful of a few potential circumstances a new first-year student may
        face. Then, establish a strategy to ensure that these outside
        circumstances do not influence academic performance or long-term
        aspirations.
      </p>
    </div>
  </div>
  <div class="flex flex-col items-center justify-center">
    <div class="w-full max-w-lg text-justify">
      <h2 class="font-heading text-2xl font-bold leading-normal text-primary">
        Facts about GPA
      </h2>
      <h3 class="font-heading text-1xl font-bold leading-normal text-primary">
        Cumulative GPA is sometimes weighted—and various institutions weigh GPAs
        differently.
      </h3>
      <p>
        If you take Advanced Placement classes, your cumulative GPA may be
        determined by higher numbers due to your grades in these subjects. Some
        schools, for example, grade AP subjects on a 5.0 scale and honours
        courses on a 4.5 scale allowing your total GPA to exceed 4.0. If your
        university "weights" these more difficult subjects by changing the
        grading system, your cumulative GPA may be a "weighted GPA," reflecting
        the increased severity of your course load. Furthermore, how one college
        weights its more difficult classes may differ from how another college
        weights it, and some institutions may not count their subjects. Before
        you get too enthusiastic about your GPA, determine if your institution
        weights classes and whether the total GPA on your progress report is
        unweighted or weighted.
      </p>
      <h3 class="font-heading text-1xl font-bold leading-normal text-primary">
        One may use one "s GPA to assess how competitive you are as a college
        candidate.
      </h3>
      <p>
        Most universities release the average GPAs of their most recent entering
        classes, which you may use to assess if you are a competitive candidate
        for specific universities. Most students apply to a few rich schools,
        but it should be remembered that your rich universities should be
        something within reach. During the application process, use your GPA as
        a guideline. However, keep in mind that the college admissions process
        is often holistic, which means that application assessors look at all
        elements of your academic background and what you offer, so don't
        dismiss a possible school entirely because of a target GPA discrepancy.
        When you investigate institutions, your GPA might be one of several
        guiding variables to see which are the greatest statistical matches for
        you.
      </p>
      <h3 class="font-heading text-1xl font-bold leading-normal text-primary">
        Colleges may place a higher value on your unweighted GPA.
      </h3>
      <p>
        Colleges will obtain a copy of your certified high school transcript,
        including your weighted and unweighted GPAs. Because high schools
        compute their weighted GPAs in various methods, many institutions want
        to standardise their applicants' grading scales by reverting to the
        traditional 4.0 scale—colleges may also consider your unweighted GPA.
        Colleges can then evaluate the severity of your workload by reviewing
        the classes mentioned on your transcript. As a result, when you have an
        unweighted GPA of 3.7 and completed four AP classes, you may be more
        appealing than an applicant with an unweighted GPA of 4.0 who did not
        take any challenging courses.
      </p>
      <h3 class="font-heading text-1xl font-bold leading-normal text-primary">
        Colleges may look at your GPA to predict how well you will succeed
        academically at the undergraduate level.
      </h3>
      <p>
        Colleges understand that an excellent academic success track record
        usually leads to future solid performances. Colleges see GPAs not just
        as proof of your high school achievements but also as potential
        predictors of long-term promise. Your GPA may signify what you will
        offer to a school intellectually and how you will do once you graduate.
        Make sure you're putting in your best effort by continuously working
        hard and challenging yourself throughout your high school experience.
        Your GPA shows a promising applicant prepared to take a postsecondary
        course load.
      </p>
    </div>
  </div>
  <div class="flex flex-col items-center justify-center">
    <div class="w-full max-w-lg text-justify">
      <h2 class="font-heading text-2xl font-bold leading-normal text-primary">
        Language Barrier and Grade Point Average
      </h2>
      <p>
        Academic accomplishment has long been a priority for college students.
        Grade point average (GPA) is among academic performance research's most
        often used metrics. It is widely used as one of the most significant
        markers of a student's success in college, possibly impacting both
        short-term financial aid and long-term job prospects. In addition,
        extensive research found that GPA was consistently connected with
        various psychological outcomes in teenagers, including depression,
        psychological distress, anxiety, self-esteem, and problem behaviours.
        Depression and anxiety, for example, were found to predict academic
        success impairment in a sample of 5,689 university students.
      </p>
    </div>
  </div>
  <div class="flex flex-col items-center justify-center">
    <div class="w-full max-w-lg text-justify">
      <h2 class="font-heading text-2xl font-bold leading-normal text-primary">
        Mental health vs GPA
      </h2>
      <p>
        Many studies used standardised test scores such as TOEFL (Test of
        English as a Foreign Language) and IELTS to explore the association
        between language competency and academic achievement across various
        categories of overseas students in English-speaking institutions
        (International English Language Testing System). For example, a study at
        the State University of New York in Albany discovered a statistically
        strong positive relationship between TOEFL grades and grade point
        averages (GPAs) for over 376 overseas graduate students. Johnson found
        similar results in a confirmatory sample of 196 foreign undergraduate
        students at the University of Wisconsin. However, the association
        between total TOEFL grades and mean GPAs was relatively poor.
        Individuals with TOEFL scores less than 500 received considerably more
        unsatisfactory grades than those with TOEFL ratings of 500 or above.
        Other research on the association between language skills evaluated by
        TOEFL and GPA yielded similar results. Stoyanov investigated the
        elements influencing international students' academic progress among 77
        international first-year students in their first six months of study.
        According to the findings, there is a statistically significant
        association between TOEFL results and GPAs. This indicated that
        individuals with high TOEFL scores were far more likely to have higher
        GPAs, whereas those with poor TOEFL scores were far more likely to have
        lower GPAs. At the same time, many studies seem to stress the relation
        between TOEFL scores and GPA. Language proficiency as evaluated by TOEFL
        scores and academic performances as measured by GPA.there is research
        indicating that TOEFL scores may not be a strong predictor of academic
        success for overseas students.
      </p>
      <p>
        According to the findings, students slept an average of 7.6 hours every
        night, and 48 percent slept less than 8 hours. Sleep hours per academic
        night were substantially related to GPA and motivation but not with
        clinically relevant forms of mental disturbance. Each extra hour of
        sleep on school nights reduced the risks of clinically significant
        depression by 25% and 34%, respectively.
      </p>
    </div>
  </div>
  <div class="flex flex-col items-center justify-center">
    <div class="w-full max-w-lg text-justify">
      <h2 class="font-heading text-2xl font-bold leading-normal text-primary">
        Why you should put an end to your obsession with a high GPA right now
      </h2>
      <h3 class="font-heading text-1xl font-bold leading-normal text-primary">
        Knowledge over marks
      </h3>
      <p>
        It is not the mark that is important. It's about obtaining necessary
        information and learning a new subject - these things will identify us,
        not the tiny letters on the results slip. After all, knowing quite a lot
        about a little is preferable to learning a lot. What if I got a C? That
        is something to be treasured if I put in the work and effort, learned
        anything from the whole experience, and genuinely liked the process
        rather than spending countless days and weeks suffering with the need to
        get that elusive A.School is about more than simply education. (Neither
        is college, university, or work.) It's also a self-discovery adventure.
        We go through several changes in adolescence and begin to realise
        ourselves as a person with our own beliefs and thoughts. Sure, we should
        always continuously strive and do our hardest, but keep in mind that
        your grades do not define you. Exams aren't the best predictor of how
        well you'll perform in life since everyone learns differently. Remember
        that we are defined by what we know and how we grow, not by our grades.
      </p>
      <h3 class="font-heading text-1xl font-bold leading-normal text-primary">
        Your grade point average is valuable, but it is not everything.
      </h3>
      <p>
        It may appear unfair that many people seem to care about one statistic
        throughout your time at a university rather than other successes you may
        have had over your academic career. Many students believe that, despite
        their less-than-perfect marks, they are hardworking, ambitious, and
        progressing academically and personally. Just even though you have a
        poor or below-average GPA does not imply that you are not clever or a
        hardworking student. A low GPA may indicate that you took more
        challenging coursework. It might also suggest that you were too
        preoccupied or stressed over specific semesters to finish your
        assignments within the given time; or that you were learning how to be a
        university student, but now you've finally worked out how to study. In
        any event, GPA is not a perfect indicator of your value as a student or
        of your ability to succeed in college.
      </p>
    </div>
  </div>
  <div class="flex flex-col items-center justify-center">
    <div class="w-full max-w-lg text-justify">
      <h2 class="font-heading text-2xl font-bold leading-normal text-primary">
        How can I maintain a high overall GPA?
      </h2>
      <p>
        Consistency is the key to sustaining a decent GPA. If you frequently
        receive marks around 3 and 4, your total GPA will not be much affected
        even if your grade dips too, for example, 2 in a single subject. Realise
        the importance of this grade and aim to perform consistently well. If
        you still fail someplace and your GPA falls, don't panic; you'll still
        have plenty of possibilities; keeping a good GPA simplifies things.
      </p>
      <p>
        Meta Title➖GPA Calculator: Calculate GPA | Percentage to GPA Calculator
      </p>
      <p>
        Meta Description➖GPA Calculator lets you calculate your GPA using your
        marks and also lets you covert GPA to Percentage and Percentage to GPA
        as well.
      </p>
    </div>
  </div>
</template>
<script setup lang="ts">
const percentageShow = ref(false);
const gpaShow = ref(true);
function click() {
  percentageShow.value = false;
  gpaShow.value = true;
}
function onclick() {
  percentageShow.value = true;
  gpaShow.value = false;
}
</script>
<style scoped></style>
