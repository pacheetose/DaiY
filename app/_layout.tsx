import { View, Text } from 'react-native'
import React from 'react'
import { Tabs } from 'expo-router'
import TabBar from '@/components/TabBar';


const _layout = () => {
  return (
    <Tabs
        tabBar={props=> <TabBar {...props} />}
    >
      <Tabs.Screen 
      name='index'
      options={{
        headerTitleAlign: 'center',
        title: 'Home'
      }}
      />
      <Tabs.Screen 
      name='create'
      options={{
        headerTitleAlign: 'center',
        title: 'Create'
      }}
      />
      <Tabs.Screen 
      name='explore'
      options={{
        headerTitleAlign: 'center',
        title: 'Explore'
      }}
      />
      <Tabs.Screen 
      name='profile'
      options={{
        headerTitleAlign: 'center',
        title: 'Profile'
      }}
      />
    </Tabs>
  )
};

export default _layout
