import React, {useEffect} from 'react'
import styled, { keyframes } from "styled-components"
import anime from 'animejs/lib/anime.es.js';

const Title = () => {

  useEffect(() => {
    animateletter(".pathOne", 2900, 200)
    animateletter(".pathTwo", 2600, 800)
    animateletter(".pathThree", 2200, 600)
    animateletter(".pathFour", 1900, 900)
    animateletter(".pathFive", 2800, 1200)
    animateletter(".pathSix", 2550, 1650)
    animateletter(".pathSeven", 2000, 1800)
    animateletter(".pathEight", 2800, 2000)
    fillLetter()
  }, [])

  const animateletter = (target, time, delayTime) => anime({
    targets: target,
    strokeDashoffset: [anime.setDashoffset, 0],
    direction: 'alternate',
    easing: 'easeInOutSine',
    loop: false,
    duration: time,
    delay: delayTime
  });

  const fillLetter = () => anime({
    targets: ".fillPath",
    fill: ['rgba(0,0,0,0)', '#FFF'],
    easing: 'easeInOutSine',
    loop: false,
    duration: 1800,
    delay: 4000
  })

  const hide = keyframes`
    from {
      opacity: 0
    }
    to {
      opacity: 1
    }
  `
  const SVGContainer = styled.svg`
    width: 70%;
    height: 30%;
    margin: 13rem 0 0 14%;
    opacity: 0;
    animation: ${hide} .1s .2s forwards;
  `
  return (
    <SVGContainer width="1067px" height="354px" viewBox="0 0 1067 354" version="1.1" xmlns="http://www.w3.org/2000/svg" >
      <path className="fillPath pathOne" d="M34,153 C23.7551277,153 15.527338,149.552059 9.31638418,142.656073 C3.10543034,135.760088 0,126.695913 0,115.463277 L0,98.6144068 C0,97.1925541 0.640294915,96.4816384 1.92090395,96.4816384 L16.519774,96.4816384 C17.8003831,96.4816384 18.440678,97.1925541 18.440678,98.6144068 L18.440678,115.889831 C18.440678,121.577241 19.8813415,126.233739 22.7627119,129.859463 C25.6440822,133.485188 29.3898075,135.298023 34,135.298023 C38.6101925,135.298023 42.3559178,133.485188 45.2372881,129.859463 C48.1186585,126.233739 49.559322,121.577241 49.559322,115.889831 L49.559322,4.13276836 C49.559322,2.71091568 50.1996169,2 51.480226,2 L66.079096,2 C67.3597051,2 68,2.71091568 68,4.13276836 L68,115.463277 C68,126.695913 64.8945697,135.760088 58.6836158,142.656073 C52.472662,149.552059 44.2448723,153 34,153 Z" id="J" stroke="#FFFFFF"></path>
      <path className="fillPath pathTwo" d="M177.715596,153 C168.235427,153 160.746205,150.402911 155.247706,145.208654 C149.749208,140.014397 147,133.005813 147,124.182692 L147,122.261538 C147,120.838454 147.632002,120.126923 148.896024,120.126923 L162.357798,120.126923 C163.621821,120.126923 164.253823,120.838454 164.253823,122.261538 L164.253823,123.755769 C164.253823,127.598096 165.581026,130.835564 168.235474,133.468269 C170.889922,136.100975 174.176331,137.417308 178.094801,137.417308 C181.886869,137.417308 184.952078,136.136551 187.29052,133.575 C189.628962,131.013449 190.798165,127.740405 190.798165,123.755769 C190.798165,120.624984 189.976563,117.992318 188.333333,115.857692 C186.690104,113.723066 184.762498,112.050968 182.550459,110.841346 L181.625204,110.344411 C179.436471,109.187656 176.363668,107.681197 172.406728,105.825 C167.47704,103.405757 163.400628,101.057704 160.17737,98.7807692 C156.954112,96.5038348 154.078504,93.2307906 151.550459,88.9615385 C149.022413,84.6922863 147.75841,79.2846481 147.75841,72.7384615 C147.75841,63.0614901 150.444418,55.5192578 155.816514,50.1115385 C161.18861,44.7038191 168.425031,42 177.525994,42 C186.879761,42 194.242583,44.7749722 199.614679,50.325 C204.986775,55.8750277 207.672783,63.41726 207.672783,72.9519231 L207.672783,73.5923077 C207.672783,75.0153917 207.040781,75.7269231 205.776758,75.7269231 L192.69419,75.7269231 C191.430167,75.7269231 190.798165,75.0153917 190.798165,73.5923077 L190.798165,72.0980769 C190.798165,68.25575 189.597362,64.9827058 187.195719,62.2788462 C184.794076,59.5749865 181.697267,58.2230769 177.905199,58.2230769 C173.986729,58.2230769 170.88992,59.5749865 168.614679,62.2788462 C166.339438,64.9827058 165.201835,68.25575 165.201835,72.0980769 C165.201835,75.0865534 165.960245,77.5769131 167.477064,79.5692308 C168.993891,81.5615484 170.826697,83.162494 172.975535,84.3721154 L173.803721,84.830632 C175.961651,86.0078023 179.09841,87.5982208 183.214067,89.6019231 C188.39656,92.1634743 192.694173,94.6182575 196.107034,96.9663462 C199.519895,99.3144348 202.521903,102.623056 205.11315,106.892308 C207.704396,111.16156 209,116.498045 209,122.901923 C209,132.151969 206.187592,139.480742 200.562691,144.888462 C194.93779,150.296181 187.322168,153 177.715596,153 Z" id="s" stroke="#FFFFFF"></path>
      <path className="fillPath pathTwo" d="M108.40413,42 C118.374681,42 126.299872,45.1009214 132.179941,51.3028571 C138.06001,57.5047929 141,65.6094738 141,75.6171429 L141,119.382857 C141,129.531479 138.06001,137.671398 132.179941,143.802857 C126.299872,149.934316 118.374681,153 108.40413,153 C98.4335785,153 90.5403437,149.934316 84.7241888,143.802857 C78.9080338,137.671398 76,129.531479 76,119.382857 L76,75.6171429 C76,65.6094738 78.9399903,57.5047929 84.820059,51.3028571 C90.7001277,45.1009214 98.561406,42 108.40413,42 Z M108.40413,59.5485714 C104.313647,59.5485714 100.958224,61.1695076 98.3377581,64.4114286 C95.7172927,67.6533495 94.4070796,71.8114032 94.4070796,76.8857143 L94.4070796,76.8857143 L94.4070796,117.902857 C94.4070796,123.118121 95.7172927,127.311413 98.3377581,130.482857 C100.958224,133.654302 104.313647,135.24 108.40413,135.24 C112.494612,135.24 115.881992,133.654302 118.566372,130.482857 C121.250751,127.311413 122.59292,123.118121 122.59292,117.902857 L122.59292,117.902857 L122.59292,76.8857143 C122.59292,71.8114032 121.250751,67.6533495 118.566372,64.4114286 C115.881992,61.1695076 112.494612,59.5485714 108.40413,59.5485714 Z" id="o" stroke="#FFFFFF"></path>
      <path className="fillPath pathThree" d="M255.015015,43.1657143 C263.087127,43.1657143 269.269248,46.1811603 273.561562,52.2121429 C277.853875,58.2431254 280,66.7928018 280,77.8614286 L280,150.871429 C280,152.290483 279.359366,153 278.078078,153 L263.471471,153 C262.190184,153 261.54955,152.290483 261.54955,150.871429 L261.54955,79.5642857 C261.54955,73.6042559 260.396408,68.9923973 258.09009,65.7285714 C255.783772,62.4647456 252.580601,60.8328571 248.48048,60.8328571 C244.252231,60.8328571 240.952965,62.4292697 238.582583,65.6221429 C236.2122,68.815016 234.8989,73.3204471 234.642643,79.1385714 L234.636289,79.560769 C234.617229,80.1307348 234.555283,80.4157143 234.45045,80.4157143 L234.45045,150.871429 C234.45045,152.290483 233.809816,153 232.528529,153 L217.921922,153 C216.640634,153 216,152.290483 216,150.871429 L216,6.12857143 C216,4.70951671 216.640634,4 217.921922,4 L232.528529,4 C233.809816,4 234.45045,4.70951671 234.45045,6.12857143 L234.45045,52.5314286 C234.45045,52.8152395 234.578577,52.9926187 234.834835,53.0635714 C235.091092,53.1345242 235.347346,52.957145 235.603604,52.5314286 C240.216239,46.2875878 246.686645,43.1657143 255.015015,43.1657143 Z" id="h" stroke="#FFFFFF"></path>
      <path className="fillPath pathFour" d="M332.438066,46.1124031 C332.438066,44.7041273 333.082572,44 334.371601,44 L349.066465,44 C350.355495,44 351,44.7041273 351,46.1124031 L351,149.408915 C351,150.817191 350.355495,151.521318 349.066465,151.521318 L334.371601,151.521318 C333.082572,151.521318 332.438066,150.817191 332.438066,149.408915 L332.438066,143.282946 C332.438066,142.860463 332.341391,142.649225 332.148036,142.649225 C331.954682,142.649225 331.729105,142.79005 331.471299,143.071705 C327.60421,149.690602 321.416961,153 312.909366,153 C305.175188,153 298.923488,150.429935 294.154079,145.289729 C289.384669,140.149522 287,132.298502 287,121.736434 L287,46.1124031 C287,44.7041273 287.644505,44 288.933535,44 L303.628399,44 C304.917428,44 305.561934,44.7041273 305.561934,46.1124031 L305.561934,117.300388 C305.561934,129.411559 309.944568,135.467054 318.70997,135.467054 C323.09267,135.467054 326.476322,133.741942 328.861027,130.291667 C331.245732,126.841391 332.438066,122.088532 332.438066,116.032946 L332.438066,46.1124031 Z" id="u" stroke="#FFFFFF"></path>
      <path className="fillPath pathFour" d="M394.04023,41 C403.410009,41 411.078993,44.2418723 417.047414,50.7257143 C423.015834,57.2095562 426,65.73709 426,76.3085714 L426,148.194286 C426,149.603817 425.358244,150.308571 424.074713,150.308571 L409.442529,150.308571 C408.158997,150.308571 407.517241,149.603817 407.517241,148.194286 L407.517241,143.542857 C407.517241,143.260951 407.420978,143.049525 407.228448,142.908571 C407.035919,142.767618 406.811304,142.838094 406.554598,143.12 C402.062238,149.04003 395.452151,152 386.724138,152 C379.408009,152 372.958361,149.709547 367.375,145.128571 C361.791639,140.547596 359,132.407678 359,120.708571 C359,108.445653 362.369219,99.4600285 369.107759,93.7514286 C375.846298,88.0428286 384.670444,85.1885714 395.58046,85.1885714 L406.747126,85.1885714 C407.260539,85.1885714 407.517241,84.9066695 407.517241,84.3428571 L407.517241,78.2114286 C407.517241,72.291399 406.233729,67.5343037 403.666667,63.94 C401.099604,60.3456963 397.762473,58.5485714 393.655172,58.5485714 C390.446344,58.5485714 387.750969,59.7466547 385.568966,62.1428571 C383.386962,64.5390596 382.10345,67.639981 381.718391,71.4457143 C381.718391,72.8552451 381.076635,73.56 379.793103,73.56 L364.198276,73.56 C362.914745,73.56 362.272989,72.8552451 362.272989,71.4457143 C362.914754,62.4247168 366.18771,55.0952663 372.091954,49.4571429 C377.996198,43.8190194 385.312217,41 394.04023,41 Z M406.747126,101.257143 L395.002874,101.257143 C389.868748,101.257143 385.76151,102.772366 382.681034,105.802857 C379.600559,108.833348 378.060345,113.238066 378.060345,119.017143 C378.060345,124.091454 379.215506,127.89713 381.525862,130.434286 C383.836218,132.971429 386.916647,134.24 390.767241,134.24 C395.259601,134.24 399.174313,132.689539 402.511494,129.588571 C405.848676,126.487604 407.517241,122.118123 407.517241,116.48 L407.517241,116.48 L407.517241,102.102857 C407.517241,101.539045 407.260539,101.257143 406.747126,101.257143 L406.747126,101.257143 Z" id="a" stroke="#FFFFFF"></path>
      <path className="fillPath pathFive" d="M551.073879,2 C552.357966,2 553,2.70951671 553,4.12857143 L553,17.5385714 C553,18.9576261 552.357966,19.6671429 551.073879,19.6671429 L525.841689,19.6671429 C525.328054,19.6671429 525.07124,19.9509495 525.07124,20.5185714 L525.07124,148.871429 C525.07124,150.290483 524.429206,151 523.145119,151 L508.506596,151 C507.222509,151 506.580475,150.290483 506.580475,148.871429 L506.580475,20.5185714 C506.580475,19.9509495 506.323661,19.6671429 505.810026,19.6671429 L481.926121,19.6671429 C480.642034,19.6671429 480,18.9576261 480,17.5385714 L480,4.12857143 C480,2.70951671 480.642034,2 481.926121,2 L551.073879,2 Z" id="T" stroke="#FFFFFF"></path>
      <path className="fillPath pathFive" d="M575.04023,42 C584.410009,42 592.078993,45.2418723 598.047414,51.7257143 C604.015834,58.2095562 607,66.73709 607,77.3085714 L607,149.194286 C607,150.603817 606.358244,151.308571 605.074713,151.308571 L590.442529,151.308571 C589.158997,151.308571 588.517241,150.603817 588.517241,149.194286 L588.517241,144.542857 C588.517241,144.260951 588.420978,144.049525 588.228448,143.908571 C588.035919,143.767618 587.811304,143.838094 587.554598,144.12 C583.062238,150.04003 576.452151,153 567.724138,153 C560.408009,153 553.958361,150.709547 548.375,146.128571 C542.791639,141.547596 540,133.407678 540,121.708571 C540,109.445653 543.369219,100.460029 550.107759,94.7514286 C556.846298,89.0428286 565.670444,86.1885714 576.58046,86.1885714 L587.747126,86.1885714 C588.260539,86.1885714 588.517241,85.9066695 588.517241,85.3428571 L588.517241,79.2114286 C588.517241,73.291399 587.233729,68.5343037 584.666667,64.94 C582.099604,61.3456963 578.762473,59.5485714 574.655172,59.5485714 C571.446344,59.5485714 568.750969,60.7466547 566.568966,63.1428571 C564.386962,65.5390596 563.10345,68.639981 562.718391,72.4457143 C562.718391,73.8552451 562.076635,74.56 560.793103,74.56 L545.198276,74.56 C543.914745,74.56 543.272989,73.8552451 543.272989,72.4457143 C543.914754,63.4247168 547.18771,56.0952663 553.091954,50.4571429 C558.996198,44.8190194 566.312217,42 575.04023,42 Z M587.747126,102.257143 L576.002874,102.257143 C570.868748,102.257143 566.76151,103.772366 563.681034,106.802857 C560.600559,109.833348 559.060345,114.238066 559.060345,120.017143 C559.060345,125.091454 560.215506,128.89713 562.525862,131.434286 C564.836218,133.971429 567.916647,135.24 571.767241,135.24 C576.259601,135.24 580.174313,133.689539 583.511494,130.588571 C586.848676,127.487604 588.517241,123.118123 588.517241,117.48 L588.517241,117.48 L588.517241,103.102857 C588.517241,102.539045 588.260539,102.257143 587.747126,102.257143 L587.747126,102.257143 Z" id="a" stroke="#FFFFFF"></path>
      <path className="fillPath pathSix" d="M640.173134,44 C648.451783,44 654.628835,47.2280379 658.704478,53.6842105 C658.959205,53.9649137 659.182089,54.0350884 659.373134,53.8947368 C659.56418,53.7543853 659.659701,53.5438611 659.659701,53.2631579 L659.659701,47.7894737 C659.659701,46.3859579 660.296511,45.6842105 661.570149,45.6842105 L676.089552,45.6842105 C677.36319,45.6842105 678,46.3859579 678,47.7894737 L678,149.684211 C678,164.421126 674.943314,175.824521 668.829851,183.894737 C662.716387,191.964953 652.20903,196 637.307463,196 L632.149254,195.789474 C630.875616,195.649122 630.238806,194.8772 630.238806,193.473684 L630.238806,180 C630.238806,178.596484 630.939296,177.894737 632.340299,177.894737 C642.784132,178.315792 649.948239,176.035113 653.832836,171.052632 C657.717432,166.070151 659.659701,158.315842 659.659701,147.789474 L659.659701,143.368421 C659.659701,143.087718 659.56418,142.912281 659.373134,142.842105 C659.182089,142.771929 658.959205,142.877192 658.704478,143.157895 C654.374108,149.614067 648.197055,152.842105 640.173134,152.842105 C631.767122,152.842105 625.303505,149.859679 620.78209,143.894737 C616.260674,137.929795 614,129.824613 614,119.578947 L614,77.4736842 C614,67.0876674 616.292514,58.9123105 620.877612,52.9473684 C625.462709,46.9824263 631.894486,44 640.173134,44 Z M646.095522,61.4736842 C642.01988,61.4736842 638.70847,63.0877032 636.161194,66.3157895 C633.613918,69.5438758 632.340299,73.6841853 632.340299,78.7368421 L632.340299,78.7368421 L632.340299,118.315789 C632.340299,123.368446 633.613918,127.473668 636.161194,130.631579 C638.70847,133.789489 642.01988,135.368421 646.095522,135.368421 C650.171165,135.368421 653.450734,133.789489 655.934328,130.631579 C658.417923,127.473668 659.659701,123.368446 659.659701,118.315789 L659.659701,118.315789 L659.659701,78.7368421 C659.659701,73.6841853 658.417923,69.5438758 655.934328,66.3157895 C653.450734,63.0877032 650.171165,61.4736842 646.095522,61.4736842 Z" id="g" stroke="#FFFFFF"></path>
      <path className="fillPath pathFive" d="M730.438066,46.1124031 C730.438066,44.7041273 731.082572,44 732.371601,44 L747.066465,44 C748.355495,44 749,44.7041273 749,46.1124031 L749,149.408915 C749,150.817191 748.355495,151.521318 747.066465,151.521318 L732.371601,151.521318 C731.082572,151.521318 730.438066,150.817191 730.438066,149.408915 L730.438066,143.282946 C730.438066,142.860463 730.341391,142.649225 730.148036,142.649225 C729.954682,142.649225 729.729105,142.79005 729.471299,143.071705 C725.60421,149.690602 719.416961,153 710.909366,153 C703.175188,153 696.923488,150.429935 692.154079,145.289729 C687.384669,140.149522 685,132.298502 685,121.736434 L685,46.1124031 C685,44.7041273 685.644505,44 686.933535,44 L701.628399,44 C702.917428,44 703.561934,44.7041273 703.561934,46.1124031 L703.561934,117.300388 C703.561934,129.411559 707.944568,135.467054 716.70997,135.467054 C721.09267,135.467054 724.476322,133.741942 726.861027,130.291667 C729.245732,126.841391 730.438066,122.088532 730.438066,116.032946 L730.438066,46.1124031 Z" id="u" stroke="#FFFFFF"></path>
      <path className="fillPath pathSix" d="M766,27.1352859 C762.499982,27.1352859 759.625011,25.8633321 757.375,23.3193863 C755.124989,20.7754406 754,17.5248919 754,13.567643 C754,9.61039397 755.124989,6.35984536 757.375,3.81589958 C759.625011,1.27195381 762.499982,0 766,0 C769.625018,0 772.531239,1.23662176 774.71875,3.70990237 C776.906261,6.18318298 778,9.46906365 778,13.567643 C778,17.5248919 776.875011,20.7754406 774.625,23.3193863 C772.374989,25.8633321 769.500017,27.1352859 766,27.1352859 Z M759.0625,152 C757.812494,152 757.1875,151.293359 757.1875,149.880056 L757.1875,46.2147838 C757.1875,44.8014806 757.812494,44.0948396 759.0625,44.0948396 L773.3125,44.0948396 C774.562506,44.0948396 775.1875,44.8014806 775.1875,46.2147838 L775.1875,149.880056 C775.1875,151.293359 774.562506,152 773.3125,152 L759.0625,152 Z" id="i" stroke="#FFFFFF"></path>
      <path className="fillPath pathSeven" d="M814.403561,153 C804.502423,153 796.626637,149.969554 790.775964,143.908571 C784.925292,137.847589 782,129.672432 782,119.382857 L782,75.6171429 C782,65.6094738 784.925292,57.5047929 790.775964,51.3028571 C796.626637,45.1009214 804.502423,42 814.403561,42 C820.961457,42 826.715603,43.374272 831.666172,46.1228571 C836.616741,48.8714423 840.409977,52.6066431 843.045994,57.3285714 C845.682011,62.0504998 847,67.371399 847,73.2914286 L847,76.04 C847,77.4495309 846.357079,78.1542857 845.071217,78.1542857 L830.412463,78.7885714 C829.126601,78.7885714 828.48368,78.0838166 828.48368,76.6742857 L828.48368,74.56 C828.48368,70.4723605 827.133545,66.9485862 824.433234,63.9885714 C821.732924,61.0285566 818.389733,59.5485714 814.403561,59.5485714 C810.288802,59.5485714 806.945611,61.1695076 804.373887,64.4114286 C801.802163,67.6533495 800.51632,71.8114032 800.51632,76.8857143 L800.51632,118.114286 C800.51632,123.188597 801.802163,127.34665 804.373887,130.588571 C806.945611,133.830492 810.288802,135.451429 814.403561,135.451429 C818.389733,135.451429 821.732924,133.971443 824.433234,131.011429 C827.133545,128.051414 828.48368,124.527639 828.48368,120.44 L828.48368,118.325714 C828.48368,116.916183 829.126601,116.211429 830.412463,116.211429 L845.071217,116.422857 C846.357079,116.422857 847,117.127612 847,118.537143 L847,121.708571 C847,130.870522 844.042562,138.376161 838.127596,144.225714 C832.212631,150.075267 824.304698,153 814.403561,153 Z" id="c" stroke="#FFFFFF"></path>
      <path className="fillPath pathSix" d="M888.04023,41 C897.410009,41 905.078993,44.2418723 911.047414,50.7257143 C917.015834,57.2095562 920,65.73709 920,76.3085714 L920,148.194286 C920,149.603817 919.358244,150.308571 918.074713,150.308571 L903.442529,150.308571 C902.158997,150.308571 901.517241,149.603817 901.517241,148.194286 L901.517241,143.542857 C901.517241,143.260951 901.420978,143.049525 901.228448,142.908571 C901.035919,142.767618 900.811304,142.838094 900.554598,143.12 C896.062238,149.04003 889.452151,152 880.724138,152 C873.408009,152 866.958361,149.709547 861.375,145.128571 C855.791639,140.547596 853,132.407678 853,120.708571 C853,108.445653 856.369219,99.4600285 863.107759,93.7514286 C869.846298,88.0428286 878.670444,85.1885714 889.58046,85.1885714 L900.747126,85.1885714 C901.260539,85.1885714 901.517241,84.9066695 901.517241,84.3428571 L901.517241,78.2114286 C901.517241,72.291399 900.233729,67.5343037 897.666667,63.94 C895.099604,60.3456963 891.762473,58.5485714 887.655172,58.5485714 C884.446344,58.5485714 881.750969,59.7466547 879.568966,62.1428571 C877.386962,64.5390596 876.10345,67.639981 875.718391,71.4457143 C875.718391,72.8552451 875.076635,73.56 873.793103,73.56 L858.198276,73.56 C856.914745,73.56 856.272989,72.8552451 856.272989,71.4457143 C856.914754,62.4247168 860.18771,55.0952663 866.091954,49.4571429 C871.996198,43.8190194 879.312217,41 888.04023,41 Z M900.747126,101.257143 L889.002874,101.257143 C883.868748,101.257143 879.76151,102.772366 876.681034,105.802857 C873.600559,108.833348 872.060345,113.238066 872.060345,119.017143 C872.060345,124.091454 873.215506,127.89713 875.525862,130.434286 C877.836218,132.971429 880.916647,134.24 884.767241,134.24 C889.259601,134.24 893.174313,132.689539 896.511494,129.588571 C899.848676,126.487604 901.517241,122.118123 901.517241,116.48 L901.517241,116.48 L901.517241,102.102857 C901.517241,101.539045 901.260539,101.257143 900.747126,101.257143 L900.747126,101.257143 Z" id="a" stroke="#FFFFFF"></path>
      <path className="fillPath pathSeven" d="M966.015015,42 C974.087127,42 980.269248,44.9925411 984.561562,50.9777132 C988.853875,56.9628852 991,65.4476195 991,76.4321705 L991,148.887597 C991,150.295873 990.359366,151 989.078078,151 L974.471471,151 C973.190184,151 972.54955,150.295873 972.54955,148.887597 L972.54955,78.122093 C972.54955,72.2073348 971.396408,67.6305072 969.09009,64.3914729 C966.783772,61.1524386 963.580601,59.5329457 959.48048,59.5329457 C955.252231,59.5329457 951.952965,61.1172322 949.582583,64.2858527 C947.2122,67.4544732 945.8989,71.9256817 945.642643,77.6996124 L945.636289,78.118603 C945.617229,78.6842395 945.555283,78.9670543 945.45045,78.9670543 L945.45045,148.887597 C945.45045,150.295873 944.809816,151 943.528529,151 L928.921922,151 C927.640634,151 927,150.295873 927,148.887597 L927,45.5910853 C927,44.1828095 927.640634,43.4786822 928.921922,43.4786822 L943.528529,43.4786822 C944.809816,43.4786822 945.45045,44.1828095 945.45045,45.5910853 L945.45045,51.2945736 C945.45045,51.5762288 945.578577,51.7522606 945.834835,51.8226744 C946.091092,51.8930882 946.347346,51.7170564 946.603604,51.2945736 C951.216239,45.0981602 957.686645,42 966.015015,42 Z" id="n" stroke="#FFFFFF"></path>
      <path className="fillPath pathEight" d="M1033.04023,41 C1042.41001,41 1050.07899,44.2418723 1056.04741,50.7257143 C1062.01583,57.2095562 1065,65.73709 1065,76.3085714 L1065,148.194286 C1065,149.603817 1064.35824,150.308571 1063.07471,150.308571 L1048.44253,150.308571 C1047.159,150.308571 1046.51724,149.603817 1046.51724,148.194286 L1046.51724,143.542857 C1046.51724,143.260951 1046.42098,143.049525 1046.22845,142.908571 C1046.03592,142.767618 1045.8113,142.838094 1045.5546,143.12 C1041.06224,149.04003 1034.45215,152 1025.72414,152 C1018.40801,152 1011.95836,149.709547 1006.375,145.128571 C1000.79164,140.547596 998,132.407678 998,120.708571 C998,108.445653 1001.36922,99.4600285 1008.10776,93.7514286 C1014.8463,88.0428286 1023.67044,85.1885714 1034.58046,85.1885714 L1045.74713,85.1885714 C1046.26054,85.1885714 1046.51724,84.9066695 1046.51724,84.3428571 L1046.51724,78.2114286 C1046.51724,72.291399 1045.23373,67.5343037 1042.66667,63.94 C1040.0996,60.3456963 1036.76247,58.5485714 1032.65517,58.5485714 C1029.44634,58.5485714 1026.75097,59.7466547 1024.56897,62.1428571 C1022.38696,64.5390596 1021.10345,67.639981 1020.71839,71.4457143 C1020.71839,72.8552451 1020.07663,73.56 1018.7931,73.56 L1003.19828,73.56 C1001.91474,73.56 1001.27299,72.8552451 1001.27299,71.4457143 C1001.91475,62.4247168 1005.18771,55.0952663 1011.09195,49.4571429 C1016.9962,43.8190194 1024.31222,41 1033.04023,41 Z M1045.74713,101.257143 L1034.00287,101.257143 C1028.86875,101.257143 1024.76151,102.772366 1021.68103,105.802857 C1018.60056,108.833348 1017.06034,113.238066 1017.06034,119.017143 C1017.06034,124.091454 1018.21551,127.89713 1020.52586,130.434286 C1022.83622,132.971429 1025.91665,134.24 1029.76724,134.24 C1034.2596,134.24 1038.17431,132.689539 1041.51149,129.588571 C1044.84868,126.487604 1046.51724,122.118123 1046.51724,116.48 L1046.51724,116.48 L1046.51724,102.102857 C1046.51724,101.539045 1046.26054,101.257143 1045.74713,101.257143 L1045.74713,101.257143 Z" id="a" stroke="#FFFFFF"></path>
      <path className="fillPath" d="M265.226667,327.919192 C264.508886,327.919192 264.070248,327.525256 263.910741,326.737374 L248,237.444444 L248,237.181818 C248,236.393935 248.358885,236 249.076667,236 L258.527408,236 C259.324943,236 259.76358,236.393935 259.843334,237.181818 L269.533334,298.767677 C269.613088,298.942762 269.69284,299.030303 269.772593,299.030303 C269.852347,299.030303 269.932099,298.942762 270.011853,298.767677 L278.625186,237.181818 C278.70494,236.393935 279.103705,236 279.821483,236 L287.836668,236 C288.499235,236 288.889975,236.335661 289.008897,237.006992 L298.244446,298.767677 C298.3242,298.942762 298.403952,299.030303 298.483705,299.030303 C298.563459,299.030303 298.643211,298.942762 298.722965,298.767677 L307.575558,237.181818 C307.735065,236.393935 308.133826,236 308.771854,236 L318.102965,236 C318.501733,236 318.800804,236.131312 319.000188,236.393939 C319.199571,236.656566 319.259386,237.006732 319.179632,237.444444 L304.106298,326.737374 C304.026545,327.525256 303.587907,327.919192 302.790372,327.919192 L294.296668,327.919192 C293.65864,327.919192 293.259879,327.525256 293.100372,326.737374 L284.00852,264.626263 C283.928766,264.451178 283.829076,264.363636 283.709446,264.363636 C283.589815,264.363636 283.530001,264.451178 283.530001,264.626263 L274.916668,326.737374 C274.836914,327.525256 274.438153,327.919192 273.720371,327.919192 L265.226667,327.919192 Z M359.697578,298.373737 C359.697578,299.249163 359.298816,299.686869 358.501281,299.686869 L331.464984,299.686869 C331.14597,299.686869 330.986465,299.861951 330.986465,300.212121 L330.986465,307.30303 C330.986465,310.454561 331.783988,313.037027 333.379058,315.050505 C334.974128,317.063983 337.047688,318.070707 339.599799,318.070707 C341.832897,318.070707 343.707076,317.326607 345.222392,315.838384 C346.737708,314.350161 347.694736,312.424254 348.093503,310.060606 C348.332764,309.360266 348.771401,309.010101 349.409429,309.010101 L358.262022,309.535354 C358.660789,309.535354 358.959861,309.666665 359.159244,309.929293 C359.358628,310.191921 359.418442,310.498315 359.338689,310.848485 C358.780414,316.538749 356.806545,320.981466 353.417022,324.176768 C350.027499,327.37207 345.421804,328.969697 339.599799,328.969697 C333.458781,328.969697 328.573953,327.087561 324.945169,323.323232 C321.316385,319.558904 319.502021,314.525284 319.502021,308.222222 L319.502021,280.909091 C319.502021,274.693572 321.316385,269.659952 324.945169,265.808081 C328.573953,261.95621 333.458781,260.030303 339.599799,260.030303 C345.820571,260.030303 350.725337,261.95621 354.314244,265.808081 C357.903151,269.659952 359.697578,274.693572 359.697578,280.909091 L359.697578,298.373737 Z M339.599799,270.929293 C337.047688,270.929293 334.974128,271.936017 333.379058,273.949495 C331.783988,275.962973 330.986465,278.545439 330.986465,281.69697 L330.986465,288.656566 C330.986465,289.006736 331.14597,289.181818 331.464984,289.181818 L347.854244,289.181818 C348.173258,289.181818 348.332762,289.006736 348.332762,288.656566 L348.332762,281.69697 C348.332762,278.545439 347.535239,275.962973 345.94017,273.949495 C344.3451,271.936017 342.231664,270.929293 339.599799,270.929293 Z M390.764782,260.030303 C396.028512,260.030303 400.175631,261.890554 403.206264,265.611111 C406.236896,269.331668 407.75219,274.430944 407.75219,280.909091 L407.75219,308.222222 C407.75219,314.437742 406.216958,319.449476 403.146449,323.257576 C400.07594,327.065676 395.948759,328.969697 390.764782,328.969697 C388.850698,328.969697 386.916705,328.575758 384.962745,327.787879 C383.171614,327.065653 381.564797,326.012422 380.142254,324.628158 L379.758856,324.242424 C379.599349,324.067339 379.459782,324.023569 379.340152,324.111111 C379.220522,324.198654 379.160708,324.329965 379.160708,324.505051 L379.160708,326.606061 C379.160708,327.481486 378.761946,327.919192 377.964411,327.919192 L368.872559,327.919192 C368.075024,327.919192 367.676263,327.481486 367.676263,326.606061 L367.676263,237.313131 C367.676263,236.437706 368.075024,236 368.872559,236 L377.964411,236 C378.761946,236 379.160708,236.437706 379.160708,237.313131 L379.160708,264.626263 C379.160708,264.801348 379.24046,264.910774 379.399967,264.954545 C379.559474,264.998317 379.718978,264.888889 379.878485,264.626263 C382.909118,261.562274 386.537847,260.030303 390.764782,260.030303 Z M396.387375,281.69697 C396.387375,278.545439 395.569914,275.962973 393.934967,273.949495 C392.300021,271.936017 390.206523,270.929293 387.654412,270.929293 C385.182053,270.929293 383.14837,271.936017 381.5533,273.949495 C379.95823,275.962973 379.160708,278.545439 379.160708,281.69697 L379.160708,307.30303 C379.160708,310.454561 379.95823,313.037027 381.5533,315.050505 C383.14837,317.063983 385.182053,318.070707 387.654412,318.070707 C390.206523,318.070707 392.300021,317.063983 393.934967,315.050505 C395.569914,313.037027 396.387375,310.454561 396.387375,307.30303 L396.387375,281.69697 Z M439.97919,327.919192 C439.181656,327.919192 438.782894,327.481486 438.782894,326.606061 L438.782894,237.313131 C438.782894,236.437706 439.181656,236 439.97919,236 L459.59845,236 C466.21799,236 471.481641,238.232301 475.389562,242.69697 C479.297483,247.161638 481.251414,253.201982 481.251414,260.818182 L481.251414,303.10101 C481.251414,310.71721 479.297483,316.757553 475.389562,321.222222 C471.481641,325.686891 466.21799,327.919192 459.59845,327.919192 L439.97919,327.919192 Z M450.267339,316.494949 C450.267339,316.84512 450.426844,317.020202 450.745858,317.020202 L459.478821,316.888889 C462.509453,316.888889 464.941898,315.597656 466.776228,313.015152 C468.610559,310.432647 469.567586,306.909113 469.64734,302.444444 L469.64734,261.474747 C469.64734,257.010079 468.730188,253.464646 466.895858,250.838384 C465.061528,248.212108 462.589207,246.89899 459.478821,246.89899 L450.745858,246.89899 C450.426844,246.89899 450.267339,247.074072 450.267339,247.424242 L450.267339,316.494949 Z M530.023804,298.373737 C530.023804,299.249163 529.625043,299.686869 528.827508,299.686869 L501.791211,299.686869 C501.472197,299.686869 501.312692,299.861951 501.312692,300.212121 L501.312692,307.30303 C501.312692,310.454561 502.110215,313.037027 503.705285,315.050505 C505.300355,317.063983 507.373914,318.070707 509.926026,318.070707 C512.159124,318.070707 514.033302,317.326607 515.548619,315.838384 C517.063935,314.350161 518.020962,312.424254 518.41973,310.060606 C518.65899,309.360266 519.097628,309.010101 519.735656,309.010101 L528.588249,309.535354 C528.987016,309.535354 529.286087,309.666665 529.485471,309.929293 C529.684855,310.191921 529.744669,310.498315 529.664915,310.848485 C529.106641,316.538749 527.132772,320.981466 523.743249,324.176768 C520.353725,327.37207 515.748031,328.969697 509.926026,328.969697 C503.785007,328.969697 498.900179,327.087561 495.271396,323.323232 C491.642612,319.558904 489.828247,314.525284 489.828247,308.222222 L489.828247,280.909091 C489.828247,274.693572 491.642612,269.659952 495.271396,265.808081 C498.900179,261.95621 503.785007,260.030303 509.926026,260.030303 C516.146798,260.030303 521.051564,261.95621 524.640471,265.808081 C528.229378,269.659952 530.023804,274.693572 530.023804,280.909091 L530.023804,298.373737 Z M509.926026,270.929293 C507.373914,270.929293 505.300355,271.936017 503.705285,273.949495 C502.110215,275.962973 501.312692,278.545439 501.312692,281.69697 L501.312692,288.656566 C501.312692,289.006736 501.472197,289.181818 501.791211,289.181818 L518.180471,289.181818 C518.499485,289.181818 518.658989,289.006736 518.658989,288.656566 L518.658989,281.69697 C518.658989,278.545439 517.861466,275.962973 516.266396,273.949495 C514.671327,271.936017 512.557891,270.929293 509.926026,270.929293 Z M549.367305,327.919192 C548.649523,327.919192 548.210886,327.525256 548.051379,326.737374 L533.217304,262 C533.217304,261.387202 533.576189,261.080808 534.293971,261.080808 L544.46249,261.080808 C545.260025,261.080808 545.698662,261.474744 545.778416,262.262626 L554.391749,307.30303 C554.471503,307.565658 554.551255,307.69697 554.631009,307.69697 C554.710762,307.69697 554.790514,307.565658 554.870268,307.30303 L563.363972,262.262626 C563.523479,261.474744 563.962116,261.080808 564.679898,261.080808 L574.848417,261.212121 C575.247184,261.212121 575.546255,261.343433 575.745639,261.606061 C575.945023,261.868688 575.964961,262.218853 575.805454,262.656566 L561.210638,326.737374 C561.130885,327.525256 560.692247,327.919192 559.894712,327.919192 L549.367305,327.919192 Z M619.792659,298.373737 C619.792659,299.249163 619.393897,299.686869 618.596362,299.686869 L591.560065,299.686869 C591.241051,299.686869 591.081547,299.861951 591.081547,300.212121 L591.081547,307.30303 C591.081547,310.454561 591.879069,313.037027 593.474139,315.050505 C595.069209,317.063983 597.142769,318.070707 599.69488,318.070707 C601.927978,318.070707 603.802157,317.326607 605.317473,315.838384 C606.832789,314.350161 607.789817,312.424254 608.188584,310.060606 C608.427845,309.360266 608.866482,309.010101 609.50451,309.010101 L618.357103,309.535354 C618.755871,309.535354 619.054942,309.666665 619.254325,309.929293 C619.453709,310.191921 619.513523,310.498315 619.43377,310.848485 C618.875495,316.538749 616.901626,320.981466 613.512103,324.176768 C610.12258,327.37207 605.516885,328.969697 599.69488,328.969697 C593.553862,328.969697 588.669034,327.087561 585.04025,323.323232 C581.411466,319.558904 579.597102,314.525284 579.597102,308.222222 L579.597102,280.909091 C579.597102,274.693572 581.411466,269.659952 585.04025,265.808081 C588.669034,261.95621 593.553862,260.030303 599.69488,260.030303 C605.915652,260.030303 610.820418,261.95621 614.409325,265.808081 C617.998232,269.659952 619.792659,274.693572 619.792659,280.909091 L619.792659,298.373737 Z M599.69488,270.929293 C597.142769,270.929293 595.069209,271.936017 593.474139,273.949495 C591.879069,275.962973 591.081547,278.545439 591.081547,281.69697 L591.081547,288.656566 C591.081547,289.006736 591.241051,289.181818 591.560065,289.181818 L607.949325,289.181818 C608.268339,289.181818 608.427843,289.006736 608.427843,288.656566 L608.427843,281.69697 C608.427843,278.545439 607.630321,275.962973 606.035251,273.949495 C604.440181,271.936017 602.326745,270.929293 599.69488,270.929293 Z M628.489122,327.919192 C627.691587,327.919192 627.292825,327.481486 627.292825,326.606061 L627.292825,237.313131 C627.292825,236.437706 627.691587,236 628.489122,236 L637.580974,236 C638.378509,236 638.77727,236.437706 638.77727,237.313131 L638.77727,326.606061 C638.77727,327.481486 638.378509,327.919192 637.580974,327.919192 L628.489122,327.919192 Z M666.973363,328.969697 C660.752591,328.969697 655.827887,327.065676 652.199104,323.257576 C648.57032,319.449476 646.755955,314.393971 646.755955,308.090909 L646.755955,280.909091 C646.755955,274.693572 648.590258,269.659952 652.258918,265.808081 C655.927579,261.95621 660.832345,260.030303 666.973363,260.030303 C673.194135,260.030303 678.138777,261.95621 681.807438,265.808081 C685.476098,269.659952 687.310401,274.693572 687.310401,280.909091 L687.310401,308.090909 C687.310401,314.393971 685.476098,319.449476 681.807438,323.257576 C678.138777,327.065676 673.194135,328.969697 666.973363,328.969697 Z M666.973363,317.939394 C669.525475,317.939394 671.638911,316.954555 673.313734,314.984848 C674.988549,313.015142 675.825956,310.410791 675.825956,307.171717 L675.825956,281.69697 C675.825956,278.545439 674.988549,275.962973 673.313734,273.949495 C671.638911,271.936017 669.525475,270.929293 666.973363,270.929293 C664.421252,270.929293 662.327754,271.936017 660.692808,273.949495 C659.057861,275.962973 658.2404,278.545439 658.2404,281.69697 L658.2404,307.171717 C658.2404,310.410791 659.057861,313.015142 660.692808,314.984848 C662.327754,316.954555 664.421252,317.939394 666.973363,317.939394 Z M719.454272,260.030303 C724.638249,260.030303 728.76543,261.934324 731.835939,265.742424 C734.906449,269.550524 736.44168,274.562258 736.44168,280.777778 L736.44168,308.090909 C736.44168,314.569056 734.906449,319.668332 731.835939,323.388889 C728.76543,327.109446 724.638249,328.969697 719.454272,328.969697 C717.540189,328.969697 715.606195,328.575762 713.652235,327.787879 C711.698275,327 709.963662,325.774419 708.448346,324.111111 C708.049578,323.848484 707.850198,323.936025 707.850198,324.373737 L707.850198,351.686869 C707.850198,352.562294 707.451436,353 706.653901,353 L697.562049,353 C696.764514,353 696.365753,352.562294 696.365753,351.686869 L696.365753,262.393939 C696.365753,261.518514 696.764514,261.080808 697.562049,261.080808 L706.653901,261.080808 C707.451436,261.080808 707.850198,261.518514 707.850198,262.393939 L707.850198,264.494949 C707.850198,264.670035 707.92995,264.779461 708.089457,264.823232 C708.248964,264.867004 708.408469,264.801348 708.567976,264.626263 C710.083292,263.050497 711.797966,261.890576 713.71205,261.146465 C715.626134,260.402353 717.540189,260.030303 719.454272,260.030303 Z M725.076865,281.69697 C725.076865,278.545439 724.259404,275.962973 722.624458,273.949495 C720.989511,271.936017 718.896013,270.929293 716.343902,270.929293 C713.871544,270.929293 711.83786,271.936017 710.24279,273.949495 C708.647721,275.962973 707.850198,278.545439 707.850198,281.69697 L707.850198,307.30303 C707.850198,310.454561 708.647721,313.037027 710.24279,315.050505 C711.83786,317.063983 713.871544,318.070707 716.343902,318.070707 C718.896013,318.070707 720.989511,317.063983 722.624458,315.050505 C724.259404,313.037027 725.076865,310.454561 725.076865,307.30303 L725.076865,281.69697 Z M784.137404,298.373737 C784.137404,299.249163 783.738642,299.686869 782.941107,299.686869 L755.90481,299.686869 C755.585796,299.686869 755.426292,299.861951 755.426292,300.212121 L755.426292,307.30303 C755.426292,310.454561 756.223815,313.037027 757.818884,315.050505 C759.413954,317.063983 761.487514,318.070707 764.039625,318.070707 C766.272723,318.070707 768.146902,317.326607 769.662218,315.838384 C771.177534,314.350161 772.134562,312.424254 772.533329,310.060606 C772.77259,309.360266 773.211227,309.010101 773.849255,309.010101 L782.701848,309.535354 C783.100616,309.535354 783.399687,309.666665 783.59907,309.929293 C783.798454,310.191921 783.858268,310.498315 783.778515,310.848485 C783.22024,316.538749 781.246371,320.981466 777.856848,324.176768 C774.467325,327.37207 769.86163,328.969697 764.039625,328.969697 C757.898607,328.969697 753.013779,327.087561 749.384995,323.323232 C745.756211,319.558904 743.941847,314.525284 743.941847,308.222222 L743.941847,280.909091 C743.941847,274.693572 745.756211,269.659952 749.384995,265.808081 C753.013779,261.95621 757.898607,260.030303 764.039625,260.030303 C770.260397,260.030303 775.165163,261.95621 778.75407,265.808081 C782.342977,269.659952 784.137404,274.693572 784.137404,280.909091 L784.137404,298.373737 Z M764.039625,270.929293 C761.487514,270.929293 759.413954,271.936017 757.818884,273.949495 C756.223815,275.962973 755.426292,278.545439 755.426292,281.69697 L755.426292,288.656566 C755.426292,289.006736 755.585796,289.181818 755.90481,289.181818 L772.29407,289.181818 C772.613084,289.181818 772.772589,289.006736 772.772589,288.656566 L772.772589,281.69697 C772.772589,278.545439 771.975066,275.962973 770.379996,273.949495 C768.784926,271.936017 766.67149,270.929293 764.039625,270.929293 Z M815.204608,260.424242 C817.198445,260.424242 818.91312,260.905719 820.348682,261.868687 C820.906957,262.218857 821.106338,262.787875 820.946831,263.575758 L819.152386,273.555556 C819.072633,274.343438 818.594119,274.606062 817.716831,274.343434 C816.680035,273.905722 815.563503,273.686869 814.367201,273.686869 C813.88868,273.686869 813.170909,273.77441 812.213867,273.949495 C809.741509,274.212121 807.687888,275.700323 806.052941,278.414141 C804.417995,281.12796 803.600534,284.410755 803.600534,288.262626 L803.600534,326.606061 C803.600534,327.481486 803.201772,327.919192 802.404237,327.919192 L793.312385,327.919192 C792.51485,327.919192 792.116089,327.481486 792.116089,326.606061 L792.116089,262.393939 C792.116089,261.518514 792.51485,261.080808 793.312385,261.080808 L802.404237,261.080808 C803.201772,261.080808 803.600534,261.518514 803.600534,262.393939 L803.600534,270.010101 C803.600534,270.272727 803.660348,270.425926 803.779978,270.469697 C803.899608,270.513468 803.999299,270.404042 804.079052,270.141414 C806.391903,263.663267 810.100385,260.424242 815.204608,260.424242 Z" id="WebDeveloper" fill="#FFFFFF"></path>
    </SVGContainer>
  )
}

export default Title;