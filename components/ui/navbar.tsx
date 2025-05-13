import React, { useState, useEffect, useRef } from 'react';
import { View, TouchableOpacity, TextInput, StyleSheet, Modal, Platform } from 'react-native';
import { Text } from './text';
import { router } from 'expo-router';
import { useColorScheme } from '~/lib/useColorScheme';
import { Search, Info } from 'lucide-react-native';
import { Sun, Moon, Bell } from 'lucide-react-native';
import { Portal } from '@rn-primitives/portal';
import { setAndroidNavigationBar } from '~/lib/android-navigation-bar';
import { cn } from '~/lib/utils';

interface NavbarProps {
  searchPlaceholder?: string;
}

export function Navbar({ searchPlaceholder = "Search for nawhas, reciters, or lyrics..." }: NavbarProps) {
  const { isDarkColorScheme, setColorScheme, colorScheme } = useColorScheme();
  const [showProfileMenu, setShowProfileMenu] = useState(false);
  const [profileIconPosition, setProfileIconPosition] = useState({ x: 0, y: 0, width: 0, height: 0 });
  const profileIconRef = useRef<any>(null);
  
  const navItems = [
    { name: 'Home', route: '/' },
    { name: 'Browse', route: '/browse' },
    { name: 'Library', route: '/library' },
    { name: 'About', route: '/about' },
  ];

  const toggleProfileMenu = () => {
    setShowProfileMenu(!showProfileMenu);
  };

  const handleNavigation = (route: string) => {
    router.push(route as any);
  };
  
  // Theme handlers
  const setLightTheme = () => {
    setColorScheme('light');
    setAndroidNavigationBar('light');
    setShowProfileMenu(false);
  };

  const setDarkTheme = () => {
    setColorScheme('dark');
    setAndroidNavigationBar('dark');
    setShowProfileMenu(false);
  };

  const setSystemTheme = () => {
    // System theme is not directly supported in the current setup, so we'll default to dark
    setColorScheme('dark');
    setAndroidNavigationBar('dark');
    setShowProfileMenu(false);
  };
  
  // Store the position of the profile icon to properly position the dropdown
  const measureProfileIcon = (event: any) => {
    try {
      if (Platform.OS === 'web' && event && event.target) {
        const rect = event.target.getBoundingClientRect();
        if (rect) {
          setProfileIconPosition({
            x: rect.left,
            y: rect.top + rect.height,
            width: rect.width,
            height: rect.height
          });
        }
      }
    } catch (error) {
      console.error('Error measuring profile icon:', error);
      // Fallback positioning
      setProfileIconPosition({
        x: 0,
        y: 50,
        width: 32,
        height: 32
      });
    }
  };

  // Position dropdown at fixed position if measurements fail
  const dropdownStyle = {
    position: 'absolute' as 'absolute',
    right: 16,
    top: profileIconPosition.y > 0 ? profileIconPosition.y + 5 : 50,
    width: 256,
    backgroundColor: isDarkColorScheme ? '#18181b' : '#ffffff', // zinc-900 for dark, white for light
    borderWidth: 1,
    borderColor: isDarkColorScheme ? '#27272a' : '#e5e7eb', // zinc-800 for dark, gray-200 for light
    borderRadius: 6,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: isDarkColorScheme ? 0.3 : 0.1,
    shadowRadius: 5,
    elevation: 8,
    zIndex: 9999,
  };

  // Determine active theme indicator
  const isLightActive = colorScheme === 'light';
  const isDarkActive = colorScheme === 'dark';
  // Since system is not available, we'll show the automatic option as inactive
  const isSystemActive = false;

  const activeButtonClass = isDarkColorScheme ? 'bg-blue-600' : 'bg-blue-500';
  const inactiveButtonClass = isDarkColorScheme ? 'bg-zinc-800' : 'bg-gray-200';
  const activeTextClass = "text-white";
  const inactiveTextClass = isDarkColorScheme ? 'text-white' : 'text-gray-700';

  return (
    <View className="w-full">
      <View className={`flex-row items-center justify-between px-4 py-3 ${isDarkColorScheme ? 'bg-zinc-900' : 'bg-white'}`}>
        {/* Logo and brand */}
        <View className="flex-row items-center">
          <View className="h-8 w-8 rounded-full bg-red-600 justify-center items-center mr-2">
            <Text className="text-white font-bold">N</Text>
          </View>
          <Text className="text-lg font-bold text-foreground">Nawhas.com</Text>
        </View>
        
        {/* Navigation links */}
        <View className="flex-row space-x-4">
          {navItems.map((item) => (
            <TouchableOpacity 
              key={item.name} 
              onPress={() => handleNavigation(item.route)}
            >
              <Text className="text-foreground">{item.name}</Text>
            </TouchableOpacity>
          ))}
        </View>
        
        {/* Search bar */}
        <View className={`flex-row items-center ${isDarkColorScheme ? 'bg-zinc-800' : 'bg-gray-100'} rounded-full px-3 max-w-xs`}>
          <Search size={18} className="text-gray-400 mr-2" />
          <TextInput
            placeholder={searchPlaceholder}
            placeholderTextColor="#9ca3af"
            className={`py-1 ${isDarkColorScheme ? 'text-gray-300' : 'text-gray-700'} w-52`}
          />
        </View>

        {/* Profile section */}
        <View>
          <TouchableOpacity 
            ref={profileIconRef}
            className="h-8 w-8 rounded-full bg-gray-500 justify-center items-center" 
            onPress={() => {
              measureProfileIcon({ target: profileIconRef.current });
              toggleProfileMenu();
            }}
          >
            <Text className="text-white font-bold">G</Text>
          </TouchableOpacity>
        </View>
      </View>

      {/* Profile dropdown - rendered in a portal */}
      {showProfileMenu && (
        <Portal name="profile-dropdown">
          <TouchableOpacity 
            style={{
              position: 'absolute',
              width: '100%', 
              height: '100%',
              backgroundColor: 'transparent',
            }}
            activeOpacity={1}
            onPress={() => setShowProfileMenu(false)}
          >
            <View style={dropdownStyle}>
              {/* User info section */}
              <View className={`p-4 border-b ${isDarkColorScheme ? 'border-zinc-800' : 'border-gray-200'}`}>
                <View className="flex-row items-center mb-1">
                  <View className="h-10 w-10 rounded-full bg-gray-500 justify-center items-center mr-3">
                    <Text className="text-white font-bold">G</Text>
                  </View>
                  <View>
                    <Text className={`font-bold text-base ${isDarkColorScheme ? 'text-white' : 'text-gray-900'}`}>Guest</Text>
                    <Text className="text-gray-400 text-sm">Not logged in</Text>
                  </View>
                </View>
                <View className="flex-row mt-2 justify-between">
                  <TouchableOpacity className="px-3 py-1 bg-orange-600 rounded">
                    <Text className="text-white font-medium text-sm">SIGN UP</Text>
                  </TouchableOpacity>
                  <TouchableOpacity className={`px-3 py-1 rounded border border-orange-600`}>
                    <Text className="text-orange-600 font-medium text-sm">LOG IN</Text>
                  </TouchableOpacity>
                </View>
              </View>
              
              {/* Preferences section */}
              <View className={`border-b ${isDarkColorScheme ? 'border-zinc-800' : 'border-gray-200'}`}>
                <Text className="text-gray-400 text-xs px-4 py-2">PREFERENCES</Text>
                <View className="px-4 py-2">
                  <Text className={`mb-2 ${isDarkColorScheme ? 'text-white' : 'text-gray-900'}`}>Theme</Text>
                  <View className="flex-row">
                    <TouchableOpacity 
                      className={`w-9 h-9 ${isLightActive ? activeButtonClass : inactiveButtonClass} rounded mr-1 justify-center items-center`}
                      onPress={setLightTheme}
                    >
                      <Sun size={18} className={isLightActive ? activeTextClass : inactiveTextClass} />
                    </TouchableOpacity>
                    <TouchableOpacity 
                      className={`w-9 h-9 ${isSystemActive ? activeButtonClass : inactiveButtonClass} rounded mx-1 justify-center items-center`}
                      onPress={setSystemTheme}
                    >
                      <Bell size={18} className={isSystemActive ? activeTextClass : inactiveTextClass} />
                    </TouchableOpacity>
                    <TouchableOpacity 
                      className={`w-9 h-9 ${isDarkActive ? activeButtonClass : inactiveButtonClass} rounded ml-1 justify-center items-center`}
                      onPress={setDarkTheme}
                    >
                      <Moon size={18} className={isDarkActive ? activeTextClass : inactiveTextClass} />
                    </TouchableOpacity>
                  </View>
                </View>
              </View>
              
              {/* Menu items */}
              <View>
                <TouchableOpacity className="flex-row items-center px-4 py-3">
                  <Text className="text-xs bg-gray-600 px-1 rounded mr-2 text-white">v7.2.2</Text>
                  <Text className={isDarkColorScheme ? 'text-white' : 'text-gray-900'}>What's new?</Text>
                </TouchableOpacity>
                <TouchableOpacity className="flex-row items-center px-4 py-3">
                  <View className="h-5 w-5 bg-gray-600 rounded-full justify-center items-center mr-2">
                    <Info size={14} className="text-white" />
                  </View>
                  <Text className={isDarkColorScheme ? 'text-white' : 'text-gray-900'}>Report an issue</Text>
                </TouchableOpacity>
              </View>
            </View>
          </TouchableOpacity>
        </Portal>
      )}
    </View>
  );
} 