import React from 'react';
import { View, FlatList, Image, StyleSheet, Text, TouchableOpacity } from 'react-native';
import Header from '../components/Header';
import { router } from 'expo-router';

const categories = [
  { id: '1', title: 'Fruits', image: 'https://static.libertyprim.com/files/familles/pomme-large.jpg?1569271834' },
  { id: '2', title: 'Vegetables', image: 'https://img.freepik.com/premium-photo/fresh-lettuce-leaf-isolated-white-background_531456-624.jpg' },
  { id: '3', title: 'Dairy', image: 'https://png.pngtree.com/background/20230804/original/pngtree-assortment-of-dairy-products-on-a-white-background-photo-picture-image_4413560.jpg' },
  { id: '4', title: 'Snacks', image: 'https://img.freepik.com/premium-photo/stack-fried-snack-prepared-chips-white-back-ground_1010706-55.jpg' },
  { id: '5', title: 'Beverages', image: 'https://www.shutterstock.com/image-photo/glasses-cola-orange-soda-drink-600nw-1388932460.jpg' },
  { id: '6', title: 'Meat', image: 'https://t4.ftcdn.net/jpg/02/68/93/47/360_F_268934712_bI4o27eUUHLGa8eIyPFE7fNoKaES397U.jpg' },
  { id: '7', title: 'Bakery', image: 'https://www.shutterstock.com/image-photo/assorted-breads-isolated-on-white-600nw-404485807.jpg' },
  { id: '8', title: 'Frozen', image: 'https://media.istockphoto.com/id/626104630/photo/frozen-food-in-the-refrigerator-vegetables-on-the-freezer-shelves.jpg?s=612x612&w=0&k=20&c=mE9tl79PdWoCV8dSLVV8Hh-H6scwk0uLpg_-VXkwO8s=' },
  { id: '9', title: 'Personal Care', image: 'https://media.istockphoto.com/id/1249579132/photo/beauty-products-isolated-on-white-background.jpg?s=612x612&w=0&k=20&c=lDmUkhu7XDdGww_AsQub6jJ55I7WMgAoYrqdopFa-tI=' },
  { id: '10', title: 'Home Care', image: 'https://cdn.shopify.com/s/files/1/0504/8841/0290/products/1_4_540x.jpg?v=1629977117' },
  { id: '11', title: 'Baby Care', image: 'https://media.istockphoto.com/id/473694938/photo/a-stack-of-baby-diapers-bottle-and-a-pacifier.jpg?s=612x612&w=0&k=20&c=lEPZHNaQ4XFbtnHj_Zpip3LRCG29j0Vsas_Wf_PDJzI=' },
  { id: '12', title: 'Pet Care', image: 'https://media.istockphoto.com/id/1422407622/vector/dog-food-packaging-design-illustration-vector.jpg?s=612x612&w=0&k=20&c=8xGRnw226-FzAoMtSUijVbQPyuUUMG2QLdx8WXLlNvI=' },
];

const HomeScreen = () => {

  const renderCategory = ({ item }) => (
    <TouchableOpacity style={styles.categoryCard} onPress={() => router.push(`/products`)}>
      <Image source={{ uri: item.image }} style={styles.categoryImage} />
      <Text style={styles.categoryTitle}>{item.title}</Text>
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      <Header />
      <Text style={styles.categoriesTitle}>
        Shop by Category
      </Text>
      <FlatList
        data={categories}
        renderItem={renderCategory}
        keyExtractor={(item) => item.id}
        numColumns={4}
        contentContainerStyle={styles.categoriesList}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    padding: 16,
  },
  header: {
    marginBottom: 20,
  },
  welcomeText: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  button: {
    marginTop: 10,
    backgroundColor: '#FF5722', // Change color as needed
    borderRadius: 5,
    padding: 10,
    alignItems: 'center',
  },
  buttonText: {
    color: 'white',
    fontWeight: 'bold',
  },
  categoriesTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    marginVertical: 10,
  },
  categoriesList: {
    paddingVertical: 10,
  },
  categoryCard: {
    borderRadius: 10,
    overflow: 'hidden',
    alignItems: 'center',
    flex: 1,
    marginHorizontal: 5,
    marginVertical: 10,
  },
  categoryImage: {
    height: 80,
    width: '100%',
    borderRadius: 10,
  },
  categoryTitle: {
    marginTop: 8,
    textAlign: 'center',
    fontWeight: '500',
  },
});

export default HomeScreen;
