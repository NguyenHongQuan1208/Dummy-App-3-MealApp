import { useContext } from "react";
import { View, Text, StyleSheet } from "react-native";
//import { FavoritesContext } from "../store/context/favorites-context";
import MealsList from "../components/MealsList/MealList";
import { MEALS } from "../data/dummy-data";
import { useSelector } from "react-redux";

function FavouriteScreen() {
  //const favoriteMealsCtx = useContext(FavoritesContext);
  const favoriteMealIds = useSelector((state) => state.favoriteMeals.ids);
  const favoriteMeals = MEALS.filter((meal) =>
    // favoriteMealsCtx.ids.includes(meal.id)
    favoriteMealIds.includes(meal.id)
  );

  if (favoriteMeals.length === 0) {
    return (
      <View style={styles.rootContainer}>
        <Text style={styles.text}>You have no favorite meal yet</Text>
      </View>
    );
  }
  return <MealsList items={favoriteMeals} />;
}

export default FavouriteScreen;

const styles = StyleSheet.create({
  rootContainer: {
    flex: 1,
    textAlign: "center",
    justifyContent: "center",
  },
  text: {
    flex: 1,
    fontSize: 18,
    fontWeight: "bold",
    color: "#351401",
  },
});
