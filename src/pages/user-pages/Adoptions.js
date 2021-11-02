import React from "react";
import UserLayout from "../../components/layout/user-layout/UserLayout";
import UserItemsList from "../../components/ui/UserItemsList";

function Adoptions() {
  const DUMMY_DATA = [
    {
      id: "1",
      name: "Apple trees",
      image:
        "https://www.nature-and-garden.com/wp-content/uploads/sites/4/2018/10/apple-tree.jpg",
      price: "$25",
      description:
        "These Apple trees are raised outdoors and fed organic fertilizers only",
      quantity: "2",
      farm: "Dani's farm"
    },
    {
      id: "2",
      name: "Cherry trees",
      image:
        "https://gardenerspath.com/wp-content/uploads/2019/07/How-to-Grow-and-Care-for-Fruiting-Cherry-Trees-Cover.jpg",
      price: "$27",
      description:
        "National Cherry trees outdoor drown on 1500m elevation with minimum pesticides",
      quantity: "1",
      farm: "Ray's"
    },
    {
      id: "3",
      name: "Peach trees",
      image:
        "https://www.garden.eco/wp-content/uploads/2018/06/how-to-grow-a-peach-tree.jpg",
      price: "$25",
      description: "Medium sized potatoes, with no additional fertilizers",
      quantity: "3",
      farm: "Mike's farm"
    },
    {
      id: "4",
      name: "Olive trees",
      image: "https://www.trees.com/wp-content/uploads/2019/11/olive-tree.jpg",
      price: "$12",
      description: "Round reddish onions that are fertilizer fed",
      quantity: "7",
      farm: "Jnaynet Tansa"
    },
  ];

  return (
    <UserLayout>
      <UserItemsList items={DUMMY_DATA} />
    </UserLayout>
  );
}

export default Adoptions;
