import { createStackNavigator } from '@react-navigation/stack';
import React from 'react';
import SupplierList from './SupplierList';
import DetailSupplier from './DetailSupplier';
import EditSupplier from './EditSupplier';
import NewSupplier from './NewSupplier';
import SupplierScreen from './SupplierScreen';

// Tạo một stack riêng cho nhóm màn hình Supplier
const SupplierStack = createStackNavigator();
const SupplierStackScreen = () => (
    <SupplierStack.Navigator>
      <SupplierStack.Screen
        name="SupplierStack"
        component={SupplierScreen}
        options={{ headerShown: false }}
      />
      <SupplierStack.Screen
        name="SupplierList"
        component={SupplierList}
        options={{ headerShown: false }}
      />
      <SupplierStack.Screen
        name="DetailSupplier"
        component={DetailSupplier}
        options={{ headerShown: false }}
      />
      <SupplierStack.Screen
        name="EditSupplier"
        component={EditSupplier}
        options={{ headerShown: false }}
      />
      <SupplierStack.Screen
        name="NewSupplier"
        component={NewSupplier}
        options={{ headerShown: false }}
      />
    </SupplierStack.Navigator>
  );

export default SupplierStackScreen;