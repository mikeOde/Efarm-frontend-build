import { useState, useEffect } from "react";
import ProfileCard from "../../components/admin-components/profile/ProfileCard";
import AdminLayout from "../../components/layout/admin-layout/AdminLayout";
import api from "../../service/api";

function Profile() {
  const [fetchedProfileData, setFetchedProfileData] = useState([]);
  const [fetchedProfileOwner, setFetchedProfileOwner] = useState("");
  useEffect(() => {
    const profileData = () => {
      api.getFarmerProfile().then((response) => {
        console.log(response);
        setFetchedProfileData(response.data[0]);
        setFetchedProfileOwner(response.data.owner_name);
      })
      // The routes are already protected
      .catch((error) => {
        console.log(error);
      });
    };
    profileData();
  }, []);
  console.log(fetchedProfileData);

  return (
    <AdminLayout>
      <ProfileCard
        description={
          fetchedProfileData ? fetchedProfileData.description : "Description"
        }
        name={fetchedProfileData ? fetchedProfileData.name : "Farm name"}
        image={fetchedProfileData ? fetchedProfileData.image : "Image"}
        location={fetchedProfileData ? fetchedProfileData.location : "Location"}
        owner={fetchedProfileOwner}
      />
    </AdminLayout>
  );
}

export default Profile;
