const data = [
  {
    type: "支出",
    createdTime: "2018-02-03",
    no: 1597584772441,
    remark: "qqq",
    name: 1,
  },
  {
    type: "支出",
    createdTime: "2018-02-04",
    no: 1597584672441,
    remark: "qqq",
    name: 2,
  },
  {
    type: "支出",
    createdTime: "2018-02-05",
    no: 1507584772441,
    remark: "qqq",
    name: 3,
  },
  {
    type: "支出",
    createdTime: "2018-02-06",
    no: 1697584772441,
    remark: "qqq",
    name: 3,
  },
];
data.sort((a, b) => {
  return a.no < b.no ? 1 : -1;
});
console.log(data);
