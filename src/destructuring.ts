{
  // object destructing
  const user = {
    id: 107,
    name: {
      firstName: "Ishtiak",
      last: "Ahmed",
      nickName: "Erin",
    },
    contactNo: "01737223990",
    address: "Ulipur, Kurigram",
  };
  const {
    id,
    name: { firstName: firstNm },
    contactNo,
  } = user;

  //   arrar destructing
  const myFriends = ["chandler", "Joey", "Ross", "Rachel"];
  const [a, b, bestFriend] = myFriends;

  const myCartoon = ["Tom", "Jerry", "Oggy", "Olivia", "Jack", "Bob"];
  const [, , bestCartoon, ...rest] = myCartoon;
}
