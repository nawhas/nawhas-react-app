import React, { useState, useEffect, useRef } from 'react';
import { View, TouchableOpacity, TextInput, StyleSheet, Platform, SafeAreaView } from 'react-native';
import { Text } from '~/components/ui/text';
import { router } from 'expo-router';
import { useColorScheme } from '~/lib/useColorScheme';
import { Search, Info, Menu, X } from 'lucide-react-native';
import { Sun, Moon, Bell } from 'lucide-react-native';
import { Portal } from '@rn-primitives/portal';
import { setAndroidNavigationBar } from '~/lib/android-navigation-bar';
import { cn } from '~/lib/utils';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

interface NavbarProps {
  searchPlaceholder?: string;
}

export function Navbar({ searchPlaceholder = "Search for nawhas, reciters, or lyrics..." }: NavbarProps) {
  const { isDarkColorScheme, setColorScheme, colorScheme } = useColorScheme();
  const [showProfileMenu, setShowProfileMenu] = useState(false);
  const [showMobileMenu, setShowMobileMenu] = useState(false);
  const [profileIconPosition, setProfileIconPosition] = useState({ x: 0, y: 0, width: 0, height: 0 });
  const profileIconRef = useRef<View>(null);
  const insets = useSafeAreaInsets();
  
  const navItems = [
    { name: 'Home', route: '/' },
    { name: 'Browse', route: '/browse' },
    { name: 'Library', route: '/library' },
    { name: 'About', route: '/about' },
  ];

  // Update position when menu opens
  useEffect(() => {
    if (showProfileMenu) {
      measureProfileIcon();
    }
  }, [showProfileMenu]);

  const toggleProfileMenu = () => {
    setShowProfileMenu(!showProfileMenu);
    if (showMobileMenu) setShowMobileMenu(false);
  };

  const toggleMobileMenu = () => {
    setShowMobileMenu(!showMobileMenu);
    if (showProfileMenu) setShowProfileMenu(false);
  };

  const handleNavigation = (route: string) => {
    router.push(route as any);
    setShowMobileMenu(false);
  };
  
  // Theme handlers
  const setLightTheme = async () => {
    setColorScheme('light');
    // Use promise catch to handle any errors
    setAndroidNavigationBar('light').catch(() => {});
    setShowProfileMenu(false);
  };

  const setDarkTheme = async () => {
    setColorScheme('dark');
    // Use promise catch to handle any errors
    setAndroidNavigationBar('dark').catch(() => {});
    setShowProfileMenu(false);
  };

  const setSystemTheme = async () => {
    // System theme is not directly supported in the current setup, so we'll default to dark
    setColorScheme('dark');
    // Use promise catch to handle any errors
    setAndroidNavigationBar('dark').catch(() => {});
    setShowProfileMenu(false);
  };
  
  // Store the position of the profile icon to properly position the dropdown
  const measureProfileIcon = () => {
    if (Platform.OS === 'web' && profileIconRef.current) {
      try {
        // Get the DOM node from the ref for web
        const node = profileIconRef.current;
        if (node) {
          // Use requestAnimationFrame to ensure measurements happen after render
          requestAnimationFrame(() => {
            try {
              // @ts-ignore - this exists in the web environment
              const rect = node.getBoundingClientRect();
              if (rect) {
                setProfileIconPosition({
                  x: rect.left,
                  y: rect.bottom,
                  width: rect.width,
                  height: rect.height
                });
              }
            } catch (err) {
              console.error('Inner measurement error:', err);
            }
          });
        }
      } catch (error) {
        console.error('Error measuring profile icon:', error);
        // Fallback positioning
        setProfileIconPosition({
          x: window.innerWidth - 80,
          y: 60,
          width: 32,
          height: 32
        });
      }
    }
  };

  // Determine active theme indicator
  const isLightActive = colorScheme === 'light';
  const isDarkActive = colorScheme === 'dark';
  // Since system is not available, we'll show the automatic option as inactive
  const isSystemActive = false;

  // Adjust styles for mobile devices
  const containerStyle = Platform.select({
    web: {},
    default: {
      paddingTop: insets.top,
      paddingLeft: insets.left,
      paddingRight: insets.right
    }
  });

  return (
    <View style={containerStyle} className="w-full">
      {/* Full-width navbar with background color */}
      <View className="w-full bg-background">
        {/* Contained navbar content with max width */}
        <View className="max-w-7xl w-full mx-auto flex-row items-center justify-between py-4 px-6">
          {/* Mobile menu icon - left side on mobile */}
          <TouchableOpacity 
            className="md:hidden h-10 w-10 rounded-md justify-center items-center" 
            onPress={toggleMobileMenu}
          >
            {showMobileMenu ? (
              <X size={24} className="text-foreground" />
            ) : (
              <Menu size={24} className="text-foreground" />
            )}
          </TouchableOpacity>

          {/* Logo and brand - center on mobile */}
          <View className="flex-row items-center md:flex-1">
            <View className="h-9 w-10 rounded-full bg-red-600 justify-center items-center mr-3">
              <Text className="text-white font-bold">N</Text>
            </View>
            <Text className="text-xl font-bold text-foreground">Nawhas.com</Text>
          </View>
          
          {/* Navigation links - hide on small screens */}
          <View className="flex-row space-x-5 hidden md:flex">
            {navItems.map((item) => (
              <TouchableOpacity 
                key={item.name} 
                onPress={() => handleNavigation(item.route)}
              >
                <Text className="text-foreground font-medium">{item.name}</Text>
              </TouchableOpacity>
            ))}
          </View>
          
          {/* Search bar - adjust size for different screens */}
          <View className="flex-row items-center bg-secondary rounded-full px-4 py-2 flex-1 max-w-md mx-8 hidden md:flex">
            <Search size={18} className="text-muted-foreground mr-3" />
            <TextInput
              placeholder={searchPlaceholder}
              placeholderTextColor="#9ca3af"
              className="w-full text-foreground"
            />
          </View>

          {/* Profile section - right side on mobile */}
          <View>
            <TouchableOpacity 
              ref={profileIconRef}
              className="h-10 w-10 rounded-full bg-gray-500 justify-center items-center" 
              onPress={toggleProfileMenu}
            >
              <Text className="text-white font-bold">G</Text>
            </TouchableOpacity>
          </View>
        </View>

        {/* Mobile menu - full screen dropdown */}
        {showMobileMenu && (
          <View className="w-full bg-background px-6 py-4 border-t border-border md:hidden">
            {/* Mobile search */}
            <View className="flex-row items-center bg-secondary rounded-full px-4 py-2 mb-6">
              <Search size={18} className="text-muted-foreground mr-3" />
              <TextInput
                placeholder={searchPlaceholder}
                placeholderTextColor="#9ca3af"
                className="w-full text-foreground"
              />
            </View>
            
            {/* Mobile nav items */}
            <View className="space-y-4">
              {navItems.map((item) => (
                <TouchableOpacity 
                  key={item.name} 
                  onPress={() => handleNavigation(item.route)}
                  className="py-2"
                >
                  <Text className="text-foreground font-medium text-lg">{item.name}</Text>
                </TouchableOpacity>
              ))}
            </View>
          </View>
        )}
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
            <View style={{
              position: 'absolute',
              right: profileIconPosition.x > 0 ? window.innerWidth - profileIconPosition.x - profileIconPosition.width/2 - 128 : 16, 
              top: profileIconPosition.y > 0 ? profileIconPosition.y : 60,
              width: 256,
              backgroundColor: isDarkColorScheme ? '#18181b' : '#ffffff',
              borderWidth: 1,
              borderColor: isDarkColorScheme ? '#27272a' : '#e5e7eb',
              borderRadius: 6,
              shadowColor: '#000',
              shadowOffset: { width: 0, height: 4 },
              shadowOpacity: isDarkColorScheme ? 0.3 : 0.1,
              shadowRadius: 5,
              elevation: 8,
              zIndex: 9999,
              marginRight: Platform.OS === 'web' ? 0 : insets.right,
            }}>
              {/* User info section */}
              <View className="p-4 border-b border-border">
                <View className="flex-row items-center mb-1">
                  <View className="h-10 w-10 rounded-full bg-gray-500 justify-center items-center mr-3">
                    <Text className="text-white font-bold">G</Text>
                  </View>
                  <View>
                    <Text className="font-bold text-base text-foreground">Guest</Text>
                    <Text className="text-muted-foreground text-sm">Not logged in</Text>
                  </View>
                </View>
                <View className="flex-row mt-2 justify-between">
                  <TouchableOpacity className="px-3 py-1 bg-orange-600 rounded">
                    <Text className="text-white font-medium text-sm">SIGN UP</Text>
                  </TouchableOpacity>
                  <TouchableOpacity className="px-3 py-1 rounded border border-orange-600">
                    <Text className="text-orange-600 font-medium text-sm">LOG IN</Text>
                  </TouchableOpacity>
                </View>
              </View>
              
              {/* Preferences section */}
              <View className="border-b border-border">
                <Text className="text-muted-foreground text-xs px-4 py-2">PREFERENCES</Text>
                <View className="px-4 py-2">
                  <Text className="mb-2 text-foreground">Theme</Text>
                  <View className="flex-row">
                    <TouchableOpacity 
                      className={cn("w-9 h-9 rounded mr-1 justify-center items-center", 
                        isLightActive ? "bg-accent" : "bg-secondary"
                      )}
                      onPress={setLightTheme}
                    >
                      <Sun size={18} className={isLightActive ? "text-accent-foreground" : "text-muted-foreground"} />
                    </TouchableOpacity>
                    <TouchableOpacity 
                      className={cn("w-9 h-9 rounded mx-1 justify-center items-center", 
                        isSystemActive ? "bg-accent" : "bg-secondary"
                      )}
                      onPress={setSystemTheme}
                    >
                      <Bell size={18} className={isSystemActive ? "text-accent-foreground" : "text-muted-foreground"} />
                    </TouchableOpacity>
                    <TouchableOpacity 
                      className={cn("w-9 h-9 rounded ml-1 justify-center items-center",
                        isDarkActive ? "bg-accent" : "bg-secondary"
                      )}
                      onPress={setDarkTheme}
                    >
                      <Moon size={18} className={isDarkActive ? "text-accent-foreground" : "text-muted-foreground"} />
                    </TouchableOpacity>
                  </View>
                </View>
              </View>
              
              {/* Menu items */}
              <View>
                <TouchableOpacity className="flex-row items-center px-4 py-3">
                  <Text className="text-xs bg-gray-600 px-1 rounded mr-2 text-white">v7.2.2</Text>
                  <Text className="text-foreground">What's new?</Text>
                </TouchableOpacity>
                <TouchableOpacity className="flex-row items-center px-4 py-3">
                  <View className="h-5 w-5 bg-gray-600 rounded-full justify-center items-center mr-2">
                    <Info size={14} className="text-white" />
                  </View>
                  <Text className="text-foreground">Report an issue</Text>
                </TouchableOpacity>
              </View>
            </View>
          </TouchableOpacity>
        </Portal>
      )}
    </View>
  );
} 