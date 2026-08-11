/* ==========================================================================
   SportsCamp — Gym Equipment data
   Sourced from the official SportsCamp brochure (Indoor Gym Equipment
   pages 24–45, Outdoor Gym Equipment pages 62–72). All names, categories
   and specifications below are taken verbatim from that document.
   ========================================================================== */

const IMG = "assets/img/";

/* ---------------- CARDIO ---------------- */
const CARDIO = [
  {
    id: "treadmill",
    name: "Treadmill",
    img: IMG + "treadmill-1.jpg",
    blurb: "Motorised commercial treadmills built for high-mileage studio and gym use, with automatic incline and full workout readouts.",
    variants: [
      {
        label: "Model A",
        img: IMG + "treadmill-1.jpg",
        specs: [
          ["Display", "LED Screen"],
          ["Machine Size", "80” × 37” × 62”"],
          ["Speed", "1–20 km/h"],
          ["Incline", "15 Level Automatic Motorized Incline"],
          ["Running Area", "59” × 24”"],
          ["Machine Weight", "178 kg"],
          ["Maximum User Weight", "200 kg"],
          ["Display Reading", "Speed, Time, Calories, Distance & Heart Rate"],
          ["Motor Power", "4/8.0 HP Peak AC Motor"],
        ],
      },
      {
        label: "Model B",
        img: IMG + "treadmill-2.jpg",
        specs: [
          ["LCD Display", "Time, Distance, Speed, Calorie"],
          ["Speed Range", "0 – 20 Km"],
          ["Resistance", "Magnetic Resistance Adjustment"],
          ["Machine Floor Size", "80\" x 36\" x 61\""],
          ["Running Area", "59\" x 18\" Extra wide running area"],
          ["Maximum User Weight", "180 Kg"],
          ["Machine Weight", "170 Kg"],
          ["Structure", "Unfoldable Structure"],
          ["Drive Mode", "Gravity"],
          ["Display Reading", "Speed, Time, Calories, Distance & Heart Rate"],
          ["Belt", "Aluminium Alloy Crawler Belt"],
        ],
      },
    ],
  },
  {
    id: "elliptical",
    name: "Elliptical Trainer",
    img: IMG + "elliptical-1.jpg",
    blurb: "Low-impact, full-body cardio machines with advance ECB magnetic resistance and multiple built-in workout programs.",
    variants: [
      {
        label: "Model A",
        img: IMG + "elliptical-1.jpg",
        specs: [
          ["Display", "LCD"],
          ["Flywheel", "25 kg"],
          ["Machine Weight", "155 kg"],
          ["Maximum User Weight", "150 kg"],
          ["Machine Size", "83” × 28” × 69”"],
          ["Stride Length", "20 inches"],
          ["Resistance", "20 Resistance Levels"],
          ["Programs", "Manual, Roller, Climb, Interval, Weights Loss, Fat Burn"],
          ["Display Reading", "Speed, Time, Calories, Distance, Watt, Pulse, RPM"],
          ["System", "Advance ECB Magnetic Resistance System"],
        ],
      },
      {
        label: "Model B",
        img: IMG + "elliptical-2.jpg",
        specs: [
          ["Display", "LCD"],
          ["Flywheel", "23 kg"],
          ["Machine Weight", "120 kg"],
          ["Maximum User Weight", "150 kg"],
          ["Machine Size", "82” × 31” × 66”"],
          ["Stride Length", "20 inches"],
          ["Resistance", "26 Resistance Levels"],
          ["Programs", "Manual, Roller, Climb, Interval, Weights Loss, Fat Burn"],
          ["Display Reading", "Speed, Time, Calories, Distance, Watt, Pulse, RPM"],
          ["System", "Advance ECB Magnetic Resistance System"],
        ],
      },
    ],
  },
  {
    id: "bikes",
    name: "Bikes",
    img: IMG + "bike-spin.jpg",
    blurb: "Heavy-duty studio spin bike and air bike, built for high-cadence cardio training and interval workouts.",
    variants: [
      {
        label: "Spin Bike",
        img: IMG + "bike-spin.jpg",
        specs: [
          ["Resistance", "Brush Brake Resistance Control"],
          ["Flywheel", "20 kg"],
          ["Display", "Single Window Display – Time, Distance, Speed & Calorie"],
          ["Machine Floor Size", "52” × 22” × 44”"],
          ["Design", "Heavy Duty 3 Pcs. Crank Design"],
          ["Maximum User Weight", "150 Kg"],
          ["Drive", "Belt Drive"],
        ],
      },
      {
        label: "Air Bike",
        img: IMG + "bike-air.jpg",
        specs: [
          ["Size", "51” × 23” × 48”"],
          ["Weight", "74 kg"],
          ["Maximum User Weight", "150 Kg"],
        ],
      },
    ],
  },
  {
    id: "row",
    name: "Row",
    img: IMG + "row-1.jpg",
    blurb: "Self-weighted rowing machines offering resistance-level tracking with multiple built-in programs.",
    variants: [
      {
        label: "Model A",
        img: IMG + "row-1.jpg",
        specs: [
          ["Display", "LCD Display"],
          ["Display Reading", "Resistance Level, Time, Distance, Stroke"],
          ["Programs", "10 programs"],
          ["Max User Weight", "180 kg"],
          ["Machine Weight", "50 kg"],
          ["Machine Size", "105” × 20” × 45”"],
        ],
      },
      {
        label: "Model B",
        img: IMG + "row-2.jpg",
        specs: [
          ["Display", "LCD Display"],
          ["Display Reading", "Resistance Level, Time, Distance, Stroke"],
          ["Programs", "8 programs"],
          ["Max User Weight", "130 kg"],
          ["Machine Weight", "45 kg"],
          ["Machine Size", "91” × 20” × 26”"],
        ],
      },
    ],
  },
];

/* ---------------- PIN LOADED RANGES ---------------- */
const PIN_LOADED = [
  {
    key: "dior", name: "Dior", tagline: "Luxury, Exclusive, Elegant",
    machines: [
      { name: "Seated Bench Press", img: IMG + "dior-seated-bench-press.jpg",
        specs: [["Size (inches)", "61” × 39” × 71”"], ["Weight Stack", "110 kg"], ["Weight", "238 kg"]] },
      { name: "Leg Curl", img: IMG + "dior-leg-curl.jpg",
        specs: [["Size (inches)", "57” × 50” × 59”"], ["Weight Stack", "115 kg"], ["Weight", "267 kg"]] },
    ],
  },
  {
    key: "aristo", name: "Aristo", tagline: "Premium, Elite, Sophisticated",
    machines: [
      { name: "Bicep Curl", img: IMG + "aristo-bicep-curl.jpg",
        specs: [["Size (inches)", "53” × 38” × 64”"], ["Weight Stack", "100 kg"], ["Weight", "216 kg"]] },
      { name: "Shoulder Press", img: IMG + "aristo-shoulder-press.jpg",
        specs: [["Size (inches)", "65” × 57” × 64”"], ["Weight Stack", "100 kg"], ["Weight", "243 kg"]] },
    ],
  },
  {
    key: "forge", name: "Forge", tagline: "Robust, High-Performance, Durable",
    machines: [
      { name: "Lat Pulldown", img: IMG + "forge-lat-pulldown.jpg",
        specs: [["Size (inches)", "63” × 66” × 86”"], ["Weight Stack", "100 kg"], ["Weight", "261 kg"]] },
      { name: "Dip/Chin Assist", img: IMG + "forge-dip-chin-assist.jpg",
        specs: [["Size (inches)", "62” × 48” × 89”"], ["Weight Stack", "100 kg"], ["Weight", "332 kg"]] },
    ],
  },
  {
    key: "dna", name: "DNA", tagline: "Innovative, Stylish, Premium",
    machines: [
      { name: "Leg Press", img: IMG + "dna-leg-press.jpg",
        specs: [["Size (inches)", "78” × 48” × 64”"], ["Weight Stack", "100 kg"], ["Weight", "335 kg"]] },
      { name: "Total Abdominal", img: IMG + "dna-total-abdominal.jpg",
        specs: [["Size (inches)", "56” × 44” × 64”"], ["Weight Stack", "100 kg"], ["Weight", "245 kg"]] },
    ],
  },
  {
    key: "apex", name: "Apex", tagline: "Efficient, Sleek, Premium",
    machines: [
      { name: "Abductor + Adductor", img: IMG + "apex-abductor-adductor.jpg",
        specs: [["Size (inches)", "29” × 57” × 58”"], ["Weight Stack", "100 kg"], ["Weight", "225 kg"]] },
      { name: "Seated Dip", img: IMG + "apex-seated-dip.jpg",
        specs: [["Size (inches)", "48” × 46” × 58”"], ["Weight Stack", "100 kg"], ["Weight", "227 kg"]] },
    ],
  },
  {
    key: "stoic", name: "Stoic", tagline: "Resilient, Strong, Premium",
    machines: [
      { name: "Lat Pulldown & Mid Row", img: IMG + "stoicpin-lat-pulldown-mid-row.jpg",
        specs: [["Size (inches)", "84” × 56” × 75”"], ["Weight Stack", "100 kg"], ["Weight", "265 kg"]] },
      { name: "Multi Press", img: IMG + "stoicpin-multi-press.jpg",
        specs: [["Size (inches)", "60” × 49” × 79”"], ["Weight Stack", "100 kg"], ["Weight", "261 kg"]] },
    ],
  },
  {
    key: "aura", name: "Aura", tagline: "Accessible, Modern, Reliable",
    machines: [
      { name: "Shoulder Press", img: IMG + "aurapin-shoulder-press.jpg",
        specs: [["Size (inches)", "46” × 43” × 63”"], ["Weight Stack", "100 kg"], ["Weight", "219 kg"]] },
      { name: "Standing Multi Flight", img: IMG + "aurapin-standing-multi-flight.jpg",
        specs: [["Size (inches)", "36” × 57” × 81”"], ["Weight Stack", "100 kg"], ["Weight", "195 kg"]] },
    ],
  },
  {
    key: "grit", name: "Grit", tagline: "Compact, Functional, Reliable",
    machines: [
      { name: "Abdominal Machine", img: IMG + "grit-abdominal-machine.jpg",
        specs: [["Size (inches)", "50” × 45” × 63”"], ["Weight Stack", "100 kg"], ["Weight", "266 kg"]] },
      { name: "Torso Rotation", img: IMG + "grit-torso-rotation.jpg",
        specs: [["Size (inches)", "42” × 51” × 63”"], ["Weight Stack", "100 kg"], ["Weight", "238 kg"]] },
    ],
  },
  {
    key: "flexion", name: "Flexion", tagline: "Versatile, Practical, Functional",
    machines: [
      { name: "Rear Delt & Pec Fly", img: IMG + "flexion-rear-delt-pec-fly.jpg",
        specs: [["Size (inches)", "60” × 49” × 79”"], ["Weight Stack", "100 kg"], ["Weight", "200 kg"]] },
      { name: "Multi Press", img: IMG + "flexion-multi-press.jpg",
        specs: [["Size (inches)", "75” × 52” × 63”"], ["Weight Stack", "100 kg"], ["Weight", "185 kg"]] },
    ],
  },
  {
    key: "razor", name: "Razor", tagline: "Streamlined, Practical, Efficient",
    machines: [
      { name: "Seated Leg Curl", img: IMG + "razor-seated-leg-curl.jpg",
        specs: [["Size (inches)", "48” × 41” × 65”"], ["Weight Stack", "100 kg"], ["Weight", "255 kg"]] },
      { name: "Abdominal Crunch", img: IMG + "razor-abdominal-crunch.jpg",
        specs: [["Size (inches)", "60” × 35” × 56”"], ["Weight Stack", "100 kg"], ["Weight", "220 kg"]] },
    ],
  },
];

/* ---------------- PLATE LOADED RANGES ---------------- */
const PLATE_LOADED = [
  {
    key: "armour", name: "Armour", tagline: "Durable, Reliable, Resilient",
    machines: [
      { name: "Chest Press", img: IMG + "armour-chest-press.jpg",
        specs: [["Size (mm)", "1865 × 1360 × 1730"], ["Weight", "160 kg"]] },
      { name: "Calf Machine", img: IMG + "armour-calf-machine.jpg",
        specs: [["Size (mm)", "1850 × 1210 × 1220"], ["Weight", "171 kg"]] },
    ],
  },
  {
    key: "stoic", name: "Stoic", tagline: "Strong, Steadfast, Relentless",
    machines: [
      { name: "Lateral Standing Lateral Raise", img: IMG + "stoicplate-lateral-standing-raise.jpg",
        specs: [["Size (inches)", "47” × 44” × 53”"], ["Weight", "142 kg"]] },
      { name: "Lateral Bench Press", img: IMG + "stoicplate-lateral-bench-press.jpg",
        specs: [["Size (inches)", "63” × 50” × 81”"], ["Weight", "140 kg"]] },
    ],
  },
  {
    key: "aura", name: "Aura", tagline: "Elegant, Sophisticated, Powerful",
    machines: [
      { name: "Leg Press & Hack Squat", img: IMG + "auraplate-leg-press-hack-squat.jpg",
        specs: [["Size (inches)", "97” × 73” × 60”"], ["Weight", "232 kg"]] },
      { name: "Super Squat", img: IMG + "auraplate-super-squat.jpg",
        specs: [["Size (inches)", "88” × 63” × 50”"], ["Weight", "203 kg"]] },
    ],
  },
];

/* ---------------- FUNCTIONAL / CABLE / SMITH / MULTI STATION ---------------- */
const FUNCTIONAL = [
  {
    name: "Functional Gym (Smith + Cable Cross)",
    img: IMG + "functional-gym-smith-cable.jpg",
    blurb: "A combined Smith machine and cable crossover station for guided barbell lifts alongside full cable-based training in one footprint.",
    specs: [["Size (inches)", "93” × 54” × 85”"], ["Weight Stack", "100 × 2 kg"], ["Weight", "442 kg"]],
  },
  {
    name: "Crossover Pulley Combo",
    img: IMG + "crossover-pulley-combo.jpg",
    blurb: "A dual-pulley crossover station for cable flys, presses and functional movement training from multiple angles.",
    specs: [["Size (inches)", "102” × 29” × 92”"], ["Weight Stack", "220 kg"], ["Weight", "388 kg"]],
  },
];

/* ---------------- FREE WEIGHTS & BENCHES ---------------- */
const BENCHES = [
  {
    name: "Olympic Incline Bench",
    img: IMG + "olympic-incline-bench.jpg",
    blurb: "A fixed-incline Olympic bench with integrated rack, built for heavy pressing work.",
    specs: [["Size (inches)", "91” × 75” × 62”"], ["Weight", "83.5 kg"]],
  },
  {
    name: "Multi Adjustable Bench (Flat/Incline/Decline)",
    img: IMG + "multi-adjustable-bench.jpg",
    blurb: "An adjustable bench moving between flat, incline and decline positions for versatile free-weight training.",
    specs: [["Size (inches)", "63” × 29” × 45”"], ["Weight", "38.5 kg"]],
  },
];

/* Accessories — name + available sizes/weights, exactly as listed in the brochure */
const ACCESSORIES = [
  { name: "Bouncer Dumbbell", detail: "2.5, 5, 7.5, 10, 12.5, 15, 17.5, 20, 25, 30 KG" },
  { name: "Hexagon Dumbbell", detail: "2.5, 5, 7.5, 10, 12.5 KG" },
  { name: "TPU Dumbbell", detail: "2.5, 5, 7.5, 10, 12.5, 15, 17.5, 20, 25, 30 KG" },
  { name: "Weight Plate 29 MM – Regular Rod", detail: "2.5, 5, 7.5, 10 KG" },
  { name: "Weight Plate 51 MM – Olympic Rod", detail: "2.5, 5, 7.5, 10, 12.5, 15, 17.5, 20, 25 KG" },
  { name: "Weight Plate 51 MM – TPU", detail: "2.5, 5, 10, 15, 20, 25 KG" },
  { name: "Bumper Plate 51 MM", detail: "5, 10, 15, 20, 25 KG" },
  { name: "Straight Barbell", detail: "10, 15, 20, 25, 30 KG" },
  { name: "Weight Plate 29 MM – Dumbbell Rod", detail: "1, 2, 2.5, 5, 7.5, 10 KG" },
  { name: "Curl Barbell", detail: "10, 15, 20, 25, 30 KG" },
  { name: "Olympic Bar – 50 MM Dia", detail: "4, 5, 6, 7 Feet" },
  { name: "Olympic Triceps Bar – 3 Feet, 28 MM", detail: "3 Feet" },
  { name: "Olympic Curl Bar – 4 Feet, EZ-28 MM Dia", detail: "4 Feet" },
  { name: "EZ Curl Rod – 28×1200 MM", detail: "Unit of product: 1" },
  { name: "Dumbbell Rod – With Lock System", detail: "28 MM dia" },
  { name: "Regular Rod", detail: "28×1524 MM, 28×1828 MM, 28×2184 MM" },
  { name: "Hercules Wallball", detail: "4, 5, 7 KG" },
  { name: "Hercules Medicineball", detail: "3, 4, 5, 6, 8, 10 KG" },
  { name: "Gym Ball – With Air Pump", detail: "55, 65, 75, 85 CM" },
  { name: "Yoga Mat", detail: "Classic 173×61 cm, Premium 183×61 cm (1–1.5 cm thickness)" },
  { name: "Hercules Foldable Exercise Mat", detail: "180×60×4 CM" },
  { name: "Aerobic Step – Classic", detail: "68×28.5×10/15 CM" },
  { name: "Adjustable Aerobic Step – Premium", detail: "72×35×10/15/20 CM" },
  { name: "Push Up Bar", detail: "Pair" },
  { name: "Multi Assistance Training Kit", detail: "Resistance band kit" },
  { name: "Jump Rope", detail: "Standard" },
  { name: "Jump Rope – Foam Handle", detail: "2750 MM" },
  { name: "Hand Grip – With Foam", detail: "Pair" },
];

/* ---------------- OUTDOOR GYM EQUIPMENT ---------------- */
const OUTDOOR = [
  { name: "Air Bike", img: IMG + "out-air-bike.jpg",
    desc: "A classic air bike with back support helps in increasing blood flow in the lower body.",
    bullets: ["A classic air bike with back support helps in increasing blood flow in the lower body.", "Taken at your own speed, the therapeutic repetitive action helps with balance and coordination. Increase the speed and the cycle becomes cardiovascular workout."] },
  { name: "Air Walker", img: IMG + "out-air-walker.jpg",
    desc: "Provides an excellent cardiovascular exercise while developing the leg muscles.",
    bullets: ["Provides an excellent cardiovascular exercise while developing the leg muscles.", "Allows full range of movement in the hip joints, improving flexibility and strength without any impact or stress to joints and back.", "Suitable for all ages and especially for those who find jogging and power walking boring."] },
  { name: "Arm Wheel (Double)", img: IMG + "out-arm-wheel-double.jpg",
    desc: "Allows full range of movement of arms, improving flexibility and strength without impact or stress to joints and back.",
    bullets: ["Allows full range of movement of arms, improving flexibility and strength without any impact or stress to joints and back.", "A fantastic product to increase the fun factor of exercise."] },
  { name: "Bench Press", img: IMG + "out-bench-press.jpg",
    desc: "An ideal bench press for outdoor to work with weights and also carry out various bench exercises.",
    bullets: ["An ideal bench press for outdoor to work with weights and also carry out various bench exercises."] },
  { name: "Bridge Ladder", img: IMG + "out-bridge-ladder.jpg",
    desc: "A hand-over-hand ladder exercise that strengthens arms and shoulders; can also be used for chin-ups.",
    bullets: ["“Walking” hand over hand the length of the ladder, another simple but strenuous exercise for arms and shoulders.", "As an alternative can also be used for chin-ups.", "Suitable for teenagers and adults."] },
  { name: "Cross Walker", img: IMG + "out-cross-walker.jpg",
    desc: "A full body cardiovascular workout, great for single use or in pairs to encourage social interaction.",
    bullets: ["A fantastic product to increase the fun factor of exercise.", "The main function is that it provides a full body cardiovascular workout.", "Great for single use or in pairs to encourage social interaction."] },
  { name: "Cycle", img: IMG + "out-cycle.jpg",
    desc: "A classic leg cycling motion that increases blood flow in the lower body and builds cardiovascular fitness.",
    bullets: ["A classic leg cycling motion increases blood flow in the lower body.", "Taken at your own speed, the therapeutic repetitive action helps with balance and coordination. Increase the speed and the cycle becomes cardiovascular workout."] },
  { name: "Elliptical Trainer", img: IMG + "out-elliptical-trainer.jpg",
    desc: "Provides an excellent full-body cardiovascular workout with low impact exercise for legs and arms.",
    bullets: ["The elliptical cross trainer provides an excellent full-body cardiovascular workout.", "It helps to improve coordination and balance while providing low impact exercise for legs and arms."] },
  { name: "Elliptical Trainer (Double)", img: IMG + "out-elliptical-trainer-double.jpg",
    desc: "A double-side elliptical cross trainer for two people to train together.",
    bullets: ["Double side elliptical cross trainer provides an excellent full-body cardiovascular workout for two people at a time.", "It helps to improve coordination and balance while providing low impact exercise for legs and arms."] },
  { name: "Horse Rider", img: IMG + "out-horse-rider.jpg",
    desc: "A full-body cardiovascular and toning workout, similar to a rowing machine in a more upright position.",
    bullets: ["Similar to a rowing machine but in a more upright position.", "The Rider gives a full-body cardiovascular and toning workout, pushing with the legs while pulling with the arms against resistance.", "Works arms, shoulders, back, abdomen and legs with low impact exercise."] },
  { name: "Knee Chair", img: IMG + "out-knee-chair.jpg",
    desc: "A classic chair for leg curl to increase blood flow in the lower body.",
    bullets: ["A classic chair for leg curl to increase blood flow in the lower body."] },
  { name: "Leg Press (Double)", img: IMG + "out-leg-press-double.jpg",
    desc: "An excellent workout for thighs and hips without the risks to knee joints from traditional squats.",
    bullets: ["Designed to improve flexibility and balance. The handrails help to increase stretch and maintain balance.", "An excellent workout for thighs and hips without any of the risks to the knee joints associated with traditional squats, making it suitable for all ages and abilities.", "Can be used individually or by two people together for paired exercise."] },
  { name: "Leg Stretch", img: IMG + "out-leg-stretch.jpg",
    desc: "Used to perform knee raises and leg lifts to strengthen the abdomen and upper thighs.",
    bullets: ["Suitable for both teenagers and adults, the leg lift station can be used to perform knee raises and leg lifts to strengthen abdomen and upper thighs."] },
  { name: "Parallel Bar", img: IMG + "out-parallel-bar.jpg",
    desc: "A versatile station that develops strength in arms and shoulders through push-up and dip exercises.",
    bullets: ["A simple yet versatile piece of equipment, this station helps to develop strength in arms and shoulders.", "Two sets of parallel bars set at different heights allow for push-up and dip exercises.", "Also cater for inclined press ups or assisted squat as well as for knee raises."] },
  { name: "Rower", img: IMG + "out-rower.jpg",
    desc: "A self-weighted rowing machine offering cardiovascular and toning benefit for all ages.",
    bullets: ["The self-weighted rower, with a back extension to prevent over extension, this sturdy rowing machine offers cardiovascular and toning benefit for all ages.", "The rowing action is known to be one of the best forms of exercise, working arms, shoulders, chest, back and abdomen."] },
  { name: "Seated Chest Press (Double)", img: IMG + "out-seated-chest-press-double.jpg",
    desc: "Develops the chest muscles and triceps; usable by one or two people at once.",
    bullets: ["This machine will focus on developing primarily the chest muscles and also the triceps.", "This unit can be used by one or two people which makes exercising social and fun."] },
  { name: "Shoulder & Chest Press Chair", img: IMG + "out-shoulder-chest-press-chair.jpg",
    desc: "A dual-purpose station serving both pull-down and chest press movements.",
    bullets: ["This machine will serve dual purpose of pull down and chest press.", "This unit can be used by one or two people which makes exercising social and fun."] },
  { name: "Shoulder Press (Double)", img: IMG + "out-shoulder-press-double.jpg",
    desc: "A dual pull-up style machine working the shoulder and arm muscles.",
    bullets: ["Dual machine for pull up to work on shoulder and arm muscles.", "This unit can be used by one or two people which makes exercising social and fun."] },
  { name: "Situp Board (Single)", img: IMG + "out-situp-board-single.jpg",
    desc: "Works primarily on core abdominal muscles and provides a toning benefit for all ages.",
    bullets: ["Works primarily on core abdominal muscles and provides and toning benefit for all ages."] },
  { name: "Situp Board (Double)", img: IMG + "out-situp-board-double.jpg",
    desc: "A two-person situp station for social, core-focused training.",
    bullets: ["Works primarily on core abdominal muscles and provides and toning benefit for all ages.", "This unit can be used by one or two people which makes exercising social and fun."] },
  { name: "Standing & Seated Twister", img: IMG + "out-standing-seated-twister.jpg",
    desc: "Improves flexibility and range of movement of hips and waist; good for warm-up and cool-down.",
    bullets: ["Dual machine for standing and seated twister designed to improve flexibility and range of movement of hips and waist.", "Good for warm-up and cool down routines and for toning obliques.", "Two people can exercise together, and the less strenuous nature of this exercise allows for social interaction."] },
  { name: "Stepper & Twister", img: IMG + "out-stepper-twister.jpg",
    desc: "A dual-purpose machine combining stepping for leg flexibility with hip-rotation toning.",
    bullets: ["Stepper improves leg and waist flexibility.", "Twister focuses on hip rotation and obliques (waist muscles).", "It's a dual-purpose machine, combining both benefits.", "Great for people looking for variety in their workout."] },
  { name: "Stepper (Double)", img: IMG + "out-stepper-double.jpg",
    desc: "A stepping-only station designed for pair workouts focused on cardio and leg toning.",
    bullets: ["Designed for leg and waist movement only.", "No twisting function — it only allows stepping up and down.", "Ideal for pair workouts with a focus on cardio and leg toning."] },
  { name: "Surf Board", img: IMG + "out-surf-board.jpg",
    desc: "Works the lower abdomen, hips and thighs while improving balance through core activation.",
    bullets: ["An excellent warm up, as well as a workout, it works the lower abdomen, hips and thighs.", "It helps to improve balance and coordination through ‘core’ activation.", "By swinging both legs together from side to side, it is suitable for all abilities, from 5+ years and can be used as a gentle introduction for exercise beginners."] },
  { name: "Tia Chi Wheel", img: IMG + "out-tia-chi-wheel.jpg",
    desc: "Allows full range of arm movement, improving flexibility and strength without stress to joints.",
    bullets: ["Allows full range of movement of arms, improving flexibility and strength without any impact or stress to joints and back.", "A fantastic product to increase the fun factor of exercise."] },
  { name: "Treadmill", img: IMG + "out-treadmill-outdoor.jpg",
    desc: "A heavy-duty, non-motorised outdoor treadmill for cardiovascular exercise, suitable for all age groups.",
    bullets: ["Heavy duty machine to carry out cardiovascular exercises.", "Suitable for all age groups."] },
  { name: "Triple Twister", img: IMG + "out-triple-twister.jpg",
    desc: "A gentle three-person exerciser designed to improve hip and waist flexibility.",
    bullets: ["This gentle exerciser is designed to improve flexibility and range of movement of hips and waist.", "Good for warm-up and cool down routines and for toning obliques.", "Three people can exercise together, and the less strenuous nature of this exercise allows for social interaction."] },
  { name: "Wall Bar", img: IMG + "out-wall-bar.jpg",
    desc: "A climbing and exercise ladder that improves grip, stability and balance.",
    bullets: ["Use for exercising and climbing to improve grip, stability, and balance.", "This unit can be used by one or more people, which makes exercising social and fun."] },
  { name: "Weight Lifter", img: IMG + "out-weight-lifter.jpg",
    desc: "A power station built to work shoulder and arm strength, suited to weight exercises and squats.",
    bullets: ["Power weight lifter to work on shoulder and arm strength.", "Suitable to carry out weight exercises and squat."] },
];

/* ---------------- GYM FLOORING ---------------- */
const GYM_FLOORING = [
  {
    id: "rubber-tiles",
    name: "Rubber Gym Flooring Tiles",
    finish: "Heavy-duty interlocking rubber tiles",
    blurb: "Shock-absorbing flooring designed for weight rooms, strength zones and commercial gyms.",
    specs: [["Material", "High-density rubber"], ["Format", "Interlocking tiles"], ["Use", "Weights, functional & strength areas"], ["Benefits", "Impact, slip & noise reduction"]]
  },
  {
    id: "epdm-flooring",
    name: "EPDM Rubber Flooring",
    finish: "Premium EPDM granule surface",
    blurb: "Durable, low-maintenance flooring with excellent impact absorption and a premium finish for fitness spaces.",
    specs: [["Material", "EPDM rubber granules"], ["Finish", "Seamless / tile options"], ["Use", "Commercial gyms & studios"], ["Benefits", "Durable, resilient & easy to maintain"]]
  },
  {
    id: "rubber-rolls",
    name: "Rubber Roll Flooring",
    finish: "Continuous heavy-duty rubber rolls",
    blurb: "A practical flooring solution for large gym areas, free-weight zones and high-traffic training floors.",
    specs: [["Material", "Commercial-grade rubber"], ["Format", "Roll flooring"], ["Use", "Large gym floors & weight zones"], ["Benefits", "Fewer joints, easy coverage & protection"]]
  },
  {
    id: "interlocking-mats",
    name: "Interlocking Fitness Mats",
    finish: "Easy-install modular floor mats",
    blurb: "Flexible modular mats for functional training, home gyms, studios and multipurpose fitness areas.",
    specs: [["Material", "Dense EVA / rubber options"], ["Format", "Interlocking mats"], ["Use", "Functional training & studios"], ["Benefits", "Quick installation & easy replacement"]]
  },
  {
    id: "turf-flooring",
    name: "Artificial Turf Training Flooring",
    finish: "Performance turf for functional training",
    blurb: "Athletic turf flooring for sled pushes, agility drills, conditioning and functional training zones.",
    specs: [["Surface", "Sports-grade artificial turf"], ["Use", "Sled, agility & functional zones"], ["Benefits", "Durable, traction-focused & low maintenance"], ["Installation", "Custom length / area"]]
  },
  {
    id: "flooring-installation",
    name: "Complete Gym Flooring Installation",
    finish: "Site measurement + supply + installation",
    blurb: "End-to-end gym flooring solutions planned around your room size, equipment layout and training requirements.",
    specs: [["Service", "Site measurement & planning"], ["Supply", "Flooring material selection"], ["Installation", "Professional installation support"], ["Best for", "New gyms, renovations & institutions"]]
  }
];
