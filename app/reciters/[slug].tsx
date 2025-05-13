import React from 'react';
import { View, ScrollView, Image, TouchableOpacity, FlatList } from 'react-native';
import { Text } from '~/components/ui/text';
import { useLocalSearchParams, router } from 'expo-router';
import { ArrowLeft } from 'lucide-react-native';
import { RECITERS_BY_SLUG, getAlbumsByReciterId } from '~/lib/mock-data';
import { AlbumCard } from '~/components/reciters/album-card';
import { useColorScheme } from '~/lib/useColorScheme';

export default function ReciterDetailPage() {
  // Get the reciter slug from the URL
  const { slug } = useLocalSearchParams();
  const reciterSlug = typeof slug === 'string' ? slug : 'tejani-brothers';
  
  // Get reciter data or use default if not found
  const reciter = RECITERS_BY_SLUG[reciterSlug] || RECITERS_BY_SLUG['tejani-brothers'];
  
  // Get albums for this reciter
  const reciterAlbums = getAlbumsByReciterId(reciter.id);
  
  // Track whether we're using dark mode
  const { isDarkColorScheme } = useColorScheme();

  // Handlers for album actions
  const handleEditAlbum = (albumId: string) => {
    console.log('Edit album:', albumId);
    // Implementation for editing album would go here
  };

  const handleAddTrack = (albumId: string) => {
    console.log('Add track to album:', albumId);
    // Implementation for adding track would go here
  };

  // Navigate to reciters list
  const navigateToReciters = () => {
    router.push('/reciters');
  };

  return (
    <ScrollView className="flex-1 bg-background dark:bg-black">
      {/* Header with reciter info */}
      <View style={{ backgroundColor: reciter.backgroundColor }} className="w-full pt-12 pb-6">
        <View className="max-w-7xl w-full mx-auto px-6">
          {/* Back button */}
          <TouchableOpacity 
            onPress={navigateToReciters}
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

      {/* Albums section */}
      <View className="w-full pb-20 bg-background dark:bg-black">
        <View className="max-w-7xl w-full mx-auto px-6">
          {reciterAlbums.map(album => (
            <AlbumCard 
              key={album.id}
              album={album}
              showAdminControls={true}
              onEditAlbum={() => handleEditAlbum(album.id)}
              onAddTrack={() => handleAddTrack(album.id)}
            />
          ))}
        </View>
      </View>
    </ScrollView>
  );
} 