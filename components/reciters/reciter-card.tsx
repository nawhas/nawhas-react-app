import React from 'react';
import { View, TouchableOpacity, Image } from 'react-native';
import { Text } from '~/components/ui/text';
import { cn } from '~/lib/utils';

interface ReciterCardProps {
  name: string;
  albums: number;
  imageUrl: string;
  backgroundColor?: string;
  onPress?: () => void;
}

export function ReciterCard({
  name,
  albums,
  imageUrl,
  backgroundColor = "#3f3f46",
  onPress
}: ReciterCardProps) {
  return (
    <TouchableOpacity 
      className={cn("rounded-md overflow-hidden")}
      style={{ backgroundColor }}
      onPress={onPress}
      activeOpacity={0.7}
    >
      <View className="flex-row items-center p-4">
        <View className="h-14 w-14 rounded-full overflow-hidden bg-secondary mr-3">
          <Image 
            source={{ uri: imageUrl }} 
            className="w-full h-full"
            resizeMode="cover"
          />
        </View>
        <View>
          <Text className="text-white font-medium text-base">{name}</Text>
          <Text className="text-white/80 text-sm">{albums} albums</Text>
        </View>
      </View>
    </TouchableOpacity>
  );
} 