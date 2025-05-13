import React from 'react';
import { View, ImageBackground, TextInput } from 'react-native';
import { Search } from 'lucide-react-native';
import { Text } from '~/components/ui/text';

interface HeroProps {
  title?: string;
  imageSrc?: string;
  searchPlaceholder?: string;
}

export function Hero({
  title = "Explore the most advanced library of nawhas online.",
  imageSrc = "https://images.unsplash.com/photo-1528353518104-dbd48bee7bc4?q=80&w=2072",
  searchPlaceholder = "Search Nawhas.com"
}: HeroProps) {
  return (
    <View className="w-full">
      <ImageBackground
        source={{ uri: imageSrc }}
        className="w-full"
        style={{ height: 500 }}
      >
        <View className="bg-black/40 w-full h-full justify-center items-center px-6">
          <View className="max-w-screen-lg w-full items-center">
            <Text className="text-3xl md:text-5xl font-bold text-white text-center mb-6">
              {title}
            </Text>
            
            {/* Search Bar */}
            <View className="w-full max-w-lg bg-secondary/90 rounded-md overflow-hidden flex-row items-center px-4 py-3 mt-6">
              <Search size={20} className="text-muted-foreground mr-3" />
              <TextInput
                placeholder={searchPlaceholder}
                placeholderTextColor="#9ca3af"
                className="flex-1 text-foreground text-base"
              />
            </View>
          </View>
        </View>
      </ImageBackground>
    </View>
  );
} 