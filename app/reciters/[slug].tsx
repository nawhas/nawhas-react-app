import React from 'react';
import { View, ScrollView, Image, TouchableOpacity } from 'react-native';
import { Text } from '~/components/ui/text';
import { useLocalSearchParams, router } from 'expo-router';
import { ArrowLeft } from 'lucide-react-native';
import { RECITERS_BY_SLUG, ALBUMS } from '~/lib/mock-data';

export default function ReciterDetailPage() {
  // Get the reciter slug from the URL
  const { slug } = useLocalSearchParams();
  const reciterSlug = typeof slug === 'string' ? slug : 'tejani-brothers';
  
  // Get reciter data or use default if not found
  const reciter = RECITERS_BY_SLUG[reciterSlug] || RECITERS_BY_SLUG['tejani-brothers'];

  return (
    <ScrollView className="flex-1 bg-background">
      {/* Header with reciter info */}
      <View style={{ backgroundColor: reciter.backgroundColor }} className="w-full pt-12 pb-6 px-6">
        <View className="max-w-screen-lg mx-auto">
          {/* Back button */}
          <TouchableOpacity 
            onPress={() => router.back()}
            className="flex-row items-center mb-6"
          >
            <ArrowLeft size={20} color="white" className="mr-2" />
            <Text className="text-white">Back to Reciters</Text>
          </TouchableOpacity>
          
          <View className="flex-row items-center">
            <View className="h-20 w-20 rounded-full overflow-hidden bg-secondary mr-4">
              <Image 
                source={{ uri: reciter.imageUrl }} 
                className="w-full h-full"
                resizeMode="cover"
              />
            </View>
            <View>
              <Text className="text-3xl font-bold text-white mb-1">{reciter.name}</Text>
              <Text className="text-white/80">{reciter.albums} albums</Text>
            </View>
          </View>
          
          <Text className="text-white/90 mt-6 text-base">
            {reciter.description}
          </Text>
        </View>
      </View>

      {/* Albums section - placeholder */}
      <View className="w-full px-6 py-8">
        <View className="max-w-screen-lg mx-auto">
          <Text className="text-2xl font-bold text-foreground mb-6">Albums</Text>
          
          {/* Placeholder for albums */}
          <View className="space-y-4">
            {ALBUMS.map(album => (
              <View key={album.id} className="border border-border rounded-md p-4">
                <Text className="font-semibold text-foreground">{album.title}</Text>
                <Text className="text-muted-foreground">{album.year} • {album.tracks} tracks</Text>
              </View>
            ))}
          </View>
        </View>
      </View>
    </ScrollView>
  );
} 