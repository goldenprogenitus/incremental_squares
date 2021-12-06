export const UpgradeList = [
  {
    title: ["Click", "Super Click", "Super Click", "Super Click"],
    description: [
      "Upgrade your basic click amount",
      "Upgrade your super click amount",
      "Upgrade your super click amount",
      "Upgrade your super click amount"
    ],
    basePrice: [1, 100, 1000, 10000],
    effect: [0.2, 2, 20, 200],
    levelTrigger: [25, 50, 75],
    id: 0,
    twoClickUpgrade: false,
    unique: false
  },
  {
    title: [
      "Random Color",
      "More Random Color",
      "More Random Color",
      "More Random Color"
    ],
    description: [
      "Next click will upgrade one of your basic blocks to a random colored passive",
      "Next click will upgrade one of your basic blocks to a random colored passive",
      "Next click will upgrade one of your basic blocks to a random colored passive",
      "Next click will upgrade one of your basic blocks to a random colored passive"
    ],
    basePrice: [150, 3000, 45000, 675000],
    effect: [1, 10, 100, 1000],
    levelTrigger: [10, 20, 50],
    id: 1,
    twoClickUpgrade: true,
    unique: false
  },
  {
    title: "Regen Time",
    description: "Upgrade amount of time regenerating block",
    basePrice: 2000,
    effect: 0.9,
    id: 2,
    twoClickUpgrade: false,
    unique: true
  }
];
