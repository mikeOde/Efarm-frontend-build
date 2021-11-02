import React from "react";
import UserLayout from "../../components/layout/user-layout/UserLayout";
import UserItemsList from "../../components/ui/UserItemsList";

function Orders() {
  const DUMMY_DATA = [
    {
      id: "1",
      name: "Cucumbers",
      image:
        "https://cdn.plantssparkjoy.com/wp-content/uploads/2021/09/02071046/growing-cucumbers-with-plants-spark-joy.jpeg",
      price: "$12",
      description:
        "These Cucumbers are raised outdoors and fed organic fertilizers only",
      quantity: "5",
      farm: "Mike's farm",
    },
    {
      id: "2",
      name: "Tomatoes",
      image:
        "https://www.almanac.com/sites/default/files/image_nodes/tomatoes_helios4eos_gettyimages-edit.jpeg",
      price: "$15",
      description:
        "National tomatoes outdoor drown on 1500m elevation with minimum pesticides",
      quantity: "1",
      farm: "Jnaynet Tansa",
    },
    {
      id: "3",
      name: "Potatoes",
      image:
        "https://www.vanmeuwen.com/static-images/master/static-images/how-to-grow-potatoes/how-to-plant-grow-potatoes.jpg",
      price: "$10",
      description: "Medium sized potatoes, with no additional fertilizers",
      quantity: "3",
      farm: "Ray's",
    },
    {
      id: "4",
      name: "Onions",
      image:
        "https://jainsusa.com/wp-content/uploads/2015/02/5tips_to_grow_great_onions.jpg",
      price: "$12",
      description: "Round reddish onions that are fertilizer fed",
      quantity: "2",
      farm: "Dany's farm",
    },
  ];

  return (
    <UserLayout>
      <UserItemsList items={DUMMY_DATA} />
    </UserLayout>
  );
}

export default Orders;
