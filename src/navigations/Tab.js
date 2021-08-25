import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import {
  Recommand,
  AllStudy,
  Add,
  MyStudy,
  MyPage,
} from "../screens/TabScreens";
import { MaterialCommunityIcons, MaterialIcons } from "@expo/vector-icons";

const TabIconMaterialCommunityIcons = ({ name, size, color }) => {
  return <MaterialCommunityIcons name={name} size={size} color={color} />;
};

const TabIconMaterialIcons = ({ name, size, color }) => {
  return <MaterialIcons name={name} size={size} color={color} />;
};

const Tab = createBottomTabNavigator();

const TabNavigation = () => {
  return (
    <Tab.Navigator
      initialRouteName="추천 스터디"
      screenOptions={{
        tabBarStyle: {
          backgroundColor: "#54b7f9",
          borderTopColor: "#fff",
          borderTopWidth: 2,
        },
        tabBarActiveTintColor: "#fff",
        tabBarInactiveTintColor: "#0b92e9",
      }}
    >
      <Tab.Screen
        name="추천 스터디"
        component={Recommand}
        options={{
          tabBarIcon: (props) =>
            TabIconMaterialIcons({ ...props, name: "recommend" }),
        }}
      />
      <Tab.Screen
        name="모든 스터디"
        component={AllStudy}
        options={{
          tabBarIcon: (props) =>
            TabIconMaterialCommunityIcons({
              ...props,
              name: "book-open-page-variant",
            }),
        }}
      />
      <Tab.Screen
        name="추가"
        component={Add}
        options={{
          tabBarIcon: (props) =>
            TabIconMaterialIcons({
              ...props,
              name: "library-add",
            }),
        }}
      />
      <Tab.Screen
        name="내 스터디"
        component={MyStudy}
        options={{
          tabBarIcon: (props) =>
            TabIconMaterialCommunityIcons({
              ...props,
              name: "lead-pencil",
            }),
        }}
      />
      <Tab.Screen
        name="마이페이지"
        component={MyPage}
        options={{
          tabBarIcon: (props) =>
            TabIconMaterialCommunityIcons({
              ...props,
              name: "account",
            }),
        }}
      />
    </Tab.Navigator>
  );
};

export default TabNavigation;
