import WomenCostumes from "./WomenCostumes.jpeg";
import WomenCostume1 from "./women/WomenCostume1.jpeg";
import WomenCostume2 from "./women/WomenCostume2.jpeg";
import WomenCostume3 from "./women/WomenCostume3.jpeg";
import WomenCostume4 from "./women/WomenCostume4.jpeg";

import MenCostumes from "./MenCostumes.jpeg";
import MenCostume1 from "./men/MenCostume1.jpeg";
import MenCostume2 from "./men/MenCostume2.jpeg";
import MenCostume3 from "./men/MenCostume3.jpeg";
import MenCostume4 from "./men/MenCostume4.jpeg";

import GirlsCostumes from "./GirlsCostumes.jpeg";
import GirlsCostume1 from "./girls/GirlsCostume1.jpeg";
import GirlsCostume2 from "./girls/GirlsCostume2.jpeg";
import GirlsCostume3 from "./girls/GirlsCostume3.jpeg";
import GirlsCostume4 from "./girls/GirlsCostume4.jpeg";

import BoysCostumes from "./BoysCostumes.jpeg";
import BoysCostume1 from "./boys/BoysCostume1.jpeg";
import BoysCostume2 from "./boys/BoysCostume2.jpeg";
import BoysCostume3 from "./boys/BoysCostume3.jpeg";
import BoysCostume4 from "./boys/BoysCostume4.jpeg";

const costumes = {
  women: {
    image: WomenCostumes,
    costumes: [
      {
        name: "Adult Brite Bomber Costume - Fortnite",
        image: WomenCostume1,
        price: 59.99
      },
      {
        name: "Adult Plush Cuddle Team Leader Costume - Fortnite",
        image: WomenCostume2,
        price: 49.99
      },
      {
        name: "Unisex Southside Serpents Jacket – Riverdale",
        image: WomenCostume3,
        price: 79.99
      },
      {
        name: "Adult Mrs. Incredible Costume - The Incredibles 2",
        image: WomenCostume4,
        price: 49.99
      }
    ]
  },
  men: {
    image: MenCostumes,
    costumes: [
      {
        name: "Adult Dark Voyager Costume - Fortnite",
        image: MenCostume1,
        price: 69.99
      },
      {
        name: "Adult Black Knight Costume - Fortnite",
        image: MenCostume2,
        price: 69.99
      },
      {
        name: "Adult Skull Trooper Costume - Fortnite",
        image: MenCostume3,
        price: 59.99
      },
      {
        name: "Adult Crackshot Costume - Fortnite",
        image: MenCostume4,
        price: 59.99
      }
    ]
  },
  girls: {
    image: GirlsCostumes,
    costumes: [
      {
        name: "Kids Plush Cuddle Team Leader Costume - Fortnite",
        image: GirlsCostume1,
        price: 44.99
      },
      {
        name: "Kids Brite Bomber Costume - Fortnite",
        image: GirlsCostume2,
        price: 49.99
      },
      {
        name: "Kids Rosy Unicorn Costume",
        image: GirlsCostume3,
        price: 36.99
      },
      {
        name: "Kids Cher Horowitz Costume - Clueless",
        image: GirlsCostume4,
        price: 29.99
      }
    ]
  },
  boys: {
    image: BoysCostumes,
    costumes: [
      {
        name: "Kids Plush Dark Voyager Costume - Fortnite",
        image: BoysCostume1,
        price: 44.99
      },
      {
        name: "Kids Battle Black Panther Costume Deluxe - Marvel",
        image: BoysCostume2,
        price: 39.99
      },
      {
        name: "Kids Black Panther Costume Deluxe - Marvel",
        image: BoysCostume3,
        price: 34.99
      },
      {
        name: "Kids Plush Rex Costume - Fortnite",
        image: BoysCostume4,
        price: 44.99
      }
    ]
  }
};

export default costumes;
