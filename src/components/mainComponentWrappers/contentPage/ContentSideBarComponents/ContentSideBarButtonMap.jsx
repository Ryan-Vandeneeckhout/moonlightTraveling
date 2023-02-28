export const ContentSideBarButtonMap = [
  {
    asideTextHeader: "Term",
    allowUserInput: true,
    ButtonType: false,
    buttonValue: 6,
    arraylist: [
      { buttonText: `Food`, buttonValueText: "Food" },
      { buttonText: `Entertainment`, buttonValueText: "Entertainment" },
      { buttonText: `Hotels`, buttonValueText: "Hotels" },
      { buttonText: `Parks`, buttonValueText: "Parks" },
    ],
  },
  {
    asideTextHeader: "Price",
    allowUserInput: false,
    ButtonType: false,
    buttonValue: 1,
    arraylist: [
      { buttonText: `$`, buttonValueText: 1 },
      { buttonText: `$$`, buttonValueText: 2 },
      { buttonText: `$$$`, buttonValueText: 3 },
      { buttonText: `$$$$`, buttonValueText: 4 },
    ],
  },
  {
    asideTextHeader: "Open Now",
    allowUserInput: false,
    ButtonType: false,
    buttonValue: 2,
    arraylist: [
      { buttonText: `Open`, buttonValueText: false },
      { buttonText: `Closed`, buttonValueText: true },
    ],
  },
  {
    asideTextHeader: "Sort By",
    allowUserInput: false,
    ButtonType: false,
    buttonValue: 3,
    arraylist: [
      { buttonText: `Rating`, buttonValueText: "rating" },
      { buttonText: `Review Count`, buttonValueText: "review_count" },
    ],
  },
];
