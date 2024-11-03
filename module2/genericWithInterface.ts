{
  // interface - generic
  interface Developer<TypeWatch, TypeBike = null> {
    name: string;
    computer: {
      brand: string;
      model: string;
      releaseYear: number;
    };
    smartWatch: TypeWatch;
    bike?: TypeBike;
  }

  interface EmilabWatch {
    brand: string;
    model: string;
    display: string;
  }

  const user1: Developer<EmilabWatch> = {
    name: "Ishtiak",
    computer: {
      brand: "Asus",
      model: "H8-VJIO",
      releaseYear: 2015,
    },
    smartWatch: {
      brand: "Emilab",
      model: "Kw67",
      display: "OLED",
    },
  };

  type HpWatch = {
    brand: string;
    model: string;
    display: string;
    price: number;
    pickUpLocation: string;
  };
  interface BikeType {
    brandName: string;
    country: string;
    releaseYear: number;
    blackColor: boolean;
  }
  const user2: Developer<HpWatch, BikeType> = {
    name: "Mir",
    computer: {
      brand: "HP",
      model: "UT-1574",
      releaseYear: 2018,
    },
    smartWatch: {
      brand: "Hp",
      model: "ui900",
      display: "LED",
      price: 20000,
      pickUpLocation: "Dhaka",
    },
    bike: {
      brandName: "Royel Enfield",
      country: "India",
      releaseYear: 1876,
      blackColor: true,
    },
  };
  console.log(user2);
}
