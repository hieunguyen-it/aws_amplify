import React from 'react';
import ProductItem from '../../components/ProductItem';
import {View, StyleSheet} from 'react-native';
import products from '../../data/products';

const HomeScreen = () => {
  return (
    <View style={styles.page}>
      <ProductItem item={products[0]} />
      <ProductItem item={products[0]} />
    </View>
  );
};

const styles = StyleSheet.create({
  page: {
    padding: 10,
  },
});

export default HomeScreen;
