let arr =[
  {
    name: "Menu1",
    link: "http://gooogle.com",
    subitems: [
      {
        name: "Menu2",
        link: "http://gooogle.com",
      },
    ],
  },
  {
    name: "Menu3",
    link: "http://gooogle.com",
    subitems: [
      {
        name: "Menu4",
        link: "http://gooogle.com",
        subitems: [
          {
            name: "Menu5",
            link: "http://gooogle.com",
          },
          {
            name: "Menu6",
            link: "http://gooogle.com",
          },
        ],
      },
    ],
  },
];


const extractNamesNestedObject = (arr) => {
    const result = [];
    arr.forEach((obj) => {
        result.push(obj.name);
        if (obj.subitems) {
        result.push(...extractNamesNestedObject(obj.subitems));
        }
    });
    return result;
}

console.log(extractNamesNestedObject(arr));