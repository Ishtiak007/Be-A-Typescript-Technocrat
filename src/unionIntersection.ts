{
  // union types
  type FroentendDeveloper = "fakibazDeveloper" | "juniorDeveloper";
  type FullStackdDeveloper = "frontendDeveloper" | "expertDeveloper";
  type Developer = FroentendDeveloper | FullStackdDeveloper;

  const newDeveloper: FroentendDeveloper = "fakibazDeveloper";
  const newDeveloper2: Developer = "expertDeveloper";

  type User = {
    name: string;
    email: string;
    gender: "male" | "female";
    bloodGroup: "o+" | "A+" | "AB+";
    address?: string;
  };

  const user1: User = {
    name: "Ishtiak",
    email: "ishtiakahmed01999@gmail.com",
    gender: "male",
    bloodGroup: "o+",
  };

  //   .............................................
  // Intersection type
  type FroentWebDeveloper = {
    skills: string[];
    designation1: "Froentend Web Developer";
  };
  type BackendWebDeveloper = {
    skills: string[];
    designation2: "Backend Web Developer";
  };

  type FullStackWebDeveloper = FroentWebDeveloper & BackendWebDeveloper;
  const fullDeveloper: FullStackWebDeveloper = {
    skills: ["HTML", "CSS", "Javascript", "Typescript", "MERN"],
    designation1: "Froentend Web Developer",
    designation2: "Backend Web Developer",
  };

  type AustralianAllrounder = {
    bestPlayer: string[];
    designation3: "Batting and Bowling";
  };
  type BangladeshiAllrounder = {
    bestPlayer: string[];
    designation4: "Batting, Bowling and fielding";
  };

  type IshtiakErChoise = AustralianAllrounder & BangladeshiAllrounder;

  const ishtiakErPosondo: IshtiakErChoise = {
    bestPlayer: ["Warner", "Sabbir", "Maxwell", "Smith"],
    designation3: "Batting and Bowling",
    designation4: "Batting, Bowling and fielding",
  };
}
