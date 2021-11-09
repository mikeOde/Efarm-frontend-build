import * as React from "react";
import { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import AdminLayout from "../../components/layout/admin-layout/AdminLayout";
import ItemList from "../../components/ui/ItemList";
import AddItemButton from "../../components/ui/AddItemButton";
import api from "../../service/api";

function Trees() {
  const history = useHistory();
  const [fetchedTrees, setFetchedTrees] = useState([]);

  const allTrees = () => {
    api
      .getFarmerTrees()
      .then((response) => {
        setFetchedTrees(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  };
  useEffect(() => {
    allTrees();
  }, [history]);

  const cardData = {
    subtitle: "Trees number",
    avatar: "",
  };

  const formData = {
    title: "TREES",
    nameLabel: "Tree Name",
    namePlaceHolder: "Insert tree name",
    quantityLabel: "Trees per adoption",
    quantityPlaceHolder: "Insert number of trees",
    priceLabel: "Adoption price",
    pricePlaceHolder: "Insert price per adoption",
    pictureLabel: "Tree Picture",
    descriptionLabel: "Description",
    descriptionPlaceHolder: "Insert a brief description",
    buttonLabel: "TREE",
  };

  return (
    <AdminLayout>
      <ItemList
        items={fetchedTrees}
        data={cardData}
        getFunction={allTrees}
        editData={formData}
      />
      <AddItemButton data={formData} getFunction={allTrees} />
    </AdminLayout>
  );
}

export default Trees;
