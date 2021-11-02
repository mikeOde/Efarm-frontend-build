import React from "react";
import UserLayout from "../../components/layout/user-layout/UserLayout";
import FarmList from "../../components/user-components/farms/FarmList";

function Home() {
  const DUMMY_DATA = [
    {
      id: "1",
      name: "Mike's Farm",
      image:
        "https://www.economist.com/img/b/1280/720/90/sites/default/files/images/print-edition/20200530_MAP004_0.jpg",
      description:
        "Mike's Farm is a Vegetables and trees farm that is located at the highlands of North Lebanon. At an altitude of 1800m, with no pollution sources of any kind, Mike's Farm drinks the most clean waters and we emphasise on that by growing our goods organically",
      owner: "Mike Ayoub",
    },
    {
      id: "2",
      name: "Ray's",
      image:
        "https://www.borgenmagazine.com/wp-content/uploads/2014/07/benin.jpg",
      description:
        "Raymond's farm is a mix between organic products and others that are fed industrial fertilizers according to the minimum standards",
      owner: "Raymond Ayoub",
    },
    {
      id: "3",
      name: "Dani Farms",
      image:
        "https://www.annahar.com/ContentFilesArchive/469869Image1-1180x677_d.jpg?version=3857312",
      description:
        "In the valley of Tannourine, or fields drink the waters of the Whalenuts river and grow organically outdoor",
      owner: "Dani Ayoub",
    },
    {
      id: "4",
      name: "Jnaynet Tansa",
      image:
        "https://agrytech.org/wp-content/uploads/2019/08/Hackathon-Challenges-2019-1080x628.jpg",
      description:
        "A traditional farm ran by 70 years old Tansa who carries on the culture and habbits of our elders, guarenteeing the mosst authentic products",
      owner: "Tansa Nakwar",
    },
  ];
  return (
    <UserLayout>
      <FarmList farms={DUMMY_DATA} />
    </UserLayout>
  );
}

export default Home;
