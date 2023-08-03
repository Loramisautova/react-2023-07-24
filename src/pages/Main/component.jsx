import { Layout } from "../../components/Layout/component";
import { restaurants } from "../../constants/constants";
import { useState } from "react";
import { Restaurant } from "../../components/Restaurant/component";
import { Tabs } from "../../components/Tabs/component";

export const MainPage = () => {
  const [activeRestaurantIndex, setActiveRestaurantIndex] = useState(0);

  return (
    <Layout>
      <Tabs restaurants={restaurants} onTabSelect={setActiveRestaurantIndex} />
      <Restaurant restaurant={restaurants[activeRestaurantIndex]} />
    </Layout>
  );
};
