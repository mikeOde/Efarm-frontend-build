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
  useEffect(() => {
    const allTrees = () => {
      api
        .getFarmerTrees()
        .then((response) => {
          console.log(response);
          setFetchedTrees(response.data);
        })
        .catch((error) => {
          console.log(error);
          history.push("/");
          window.location.reload();
        });
    };

    allTrees();
  }, [history]);

  const formData = {
    title: "ADD TREES",
    nameLabel: "Tree Name",
    namePlaceHolder: "Insert tree name",
    quantityLabel: "Available Quantity",
    quantityPlaceHolder: "Insert number of trees",
    priceLabel: "Price per tree",
    pricePlaceHolder: "Insert price per tree",
    pictureLabel: "Tree Picture",
    descriptionLabel: "Description",
    descriptionPlaceHolder: "Insert a brief description",
    buttonLabel: "ADD TREE",
  };

  return (
    <AdminLayout>
      <ItemList items={fetchedTrees} />
      <AddItemButton data={formData} />
    </AdminLayout>
  );
}

export default Trees;
