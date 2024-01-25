import { createStackNavigator } from '@react-navigation/stack';
import React from 'react';
import ProductList from './ProductList';
import DetailProduct from './DetailProductScreen';
import EditProduct from './EditProduct';
import NewProduct from './NewProductScreen';
import ProductScreen from './ProductScreen';

// Tạo một stack riêng cho nhóm màn hình Product
const ProductStack = createStackNavigator();
const ProductStackScreen = () => (
    <ProductStack.Navigator>
      <ProductStack.Screen
        name="ProductStack"
        component={ProductScreen}
        options={{ headerShown: false }}
      />
      <ProductStack.Screen
        name="ProductList"
        component={ProductList}
        options={{ headerShown: false }}
      />
      <ProductStack.Screen
        name="DetailProduct"
        component={DetailProduct}
        options={{ headerShown: false }}
      />
      <ProductStack.Screen
        name="EditProduct"
        component={EditProduct}
        options={{ headerShown: false }}
      />
      <ProductStack.Screen
        name="NewProduct"
        component={NewProduct}
        options={{ headerShown: false }}
      />
    </ProductStack.Navigator>
  );

export default ProductStackScreen;