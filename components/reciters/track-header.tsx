import React from 'react';
import { View, Image, TouchableOpacity } from 'react-native';
import { Text } from '~/components/ui/text';
import { useColorScheme } from '~/lib/useColorScheme';
import { router } from 'expo-router';
import { ArrowLeft } from 'lucide-react-native';

interface TrackHeaderProps {
  trackTitle: string;
  reciterName: string;
  reciterSlug: string;
  albumTitle: string;
  albumSlug: string;
  albumYear: number;
  albumArtwork: string;
  backgroundColor: string;
}

export function TrackHeader({
  trackTitle,
  reciterName,
  reciterSlug,
  albumTitle,
  albumSlug,
  albumYear,
  albumArtwork,
  backgroundColor
}: TrackHeaderProps) {
  const { isDarkColorScheme } = useColorScheme();

  // Navigate to reciter page
  const navigateToReciter = () => {
    router.push(`/reciters/${reciterSlug}`);
  };

  // Navigate to album page
  const navigateToAlbum = () => {
    router.push(`/reciters/${reciterSlug}`);
  };

  // Navigate back to reciter page
  const navigateBack = () => {
    router.push(`/reciters/${reciterSlug}`);
  };

  return (
    <View 
      style={{ backgroundColor }} 
      className="w-full pt-12 pb-8"
    >
      <View className="max-w-7xl w-full mx-auto px-6">
        {/* Back button */}
        <TouchableOpacity 
          onPress={navigateBack}
          className="flex-row items-center mb-6"
        >
          <ArrowLeft size={20} color="white" className="mr-2" />
          <Text className="text-white">Back to {reciterName}</Text>
        </TouchableOpacity>

        <View className="flex-row">
          {/* Album artwork */}
          <View className="mr-6">
            <View className="w-40 h-40 rounded-md overflow-hidden shadow-lg">
              <Image
                source={{ uri: albumArtwork }}
                className="w-full h-full"
                resizeMode="cover"
              />
            </View>
          </View>

          {/* Track info */}
          <View className="flex-1 justify-center">
            <Text className="text-4xl font-bold text-white mb-2">{trackTitle}</Text>
            <TouchableOpacity onPress={navigateToReciter}>
              <Text className="text-xl text-white/90 mb-1">{reciterName}</Text>
            </TouchableOpacity>
            <View className="flex-row items-center">
              <TouchableOpacity onPress={navigateToAlbum}>
                <Text className="text-white/80">{albumTitle}</Text>
              </TouchableOpacity>
              <Text className="text-white/60 mx-2">•</Text>
              <Text className="text-white/60">{albumYear}</Text>
            </View>
          </View>
        </View>
      </View>
    </View>
  );
} 