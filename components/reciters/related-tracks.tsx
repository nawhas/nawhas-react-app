import React from 'react';
import { View, TouchableOpacity, FlatList } from 'react-native';
import { Text } from '~/components/ui/text';
import { useColorScheme } from '~/lib/useColorScheme';
import { router } from 'expo-router';

interface Track {
  id: string;
  title: string;
  slug: string;
  hasLyrics?: boolean;
  hasAudio?: boolean;
  number: number;
}

interface RelatedTracksProps {
  albumTitle: string;
  reciterSlug: string;
  albumSlug: string;
  trackSlug: string;
  tracks: Track[];
}

export function RelatedTracks({
  albumTitle,
  reciterSlug,
  albumSlug,
  trackSlug,
  tracks
}: RelatedTracksProps) {
  const { isDarkColorScheme } = useColorScheme();

  const navigateToTrack = (track: Track) => {
    router.push(`/reciters/${reciterSlug}/albums/${albumSlug}/tracks/${track.slug}`);
  };
  
  return (
    <View className="w-full bg-background dark:bg-black border-t border-border dark:border-zinc-800">
      <View className="max-w-7xl w-full mx-auto py-6 px-6">
        <Text className="text-foreground dark:text-white font-medium mb-4">
          More From This Album
        </Text>
        
        <View className="bg-card dark:bg-zinc-900 rounded-md overflow-hidden border border-border dark:border-zinc-800">
          {tracks.map((track) => (
            <TouchableOpacity
              key={track.id}
              onPress={() => navigateToTrack(track)}
              disabled={track.slug === trackSlug}
            >
              <View 
                className={`flex-row items-center py-3 px-4 border-b border-border dark:border-zinc-800 ${
                  track.slug === trackSlug ? 'bg-secondary/20 dark:bg-zinc-800' : ''
                } ${
                  track.number === tracks.length ? 'border-b-0' : ''
                }`}
              >
                <Text 
                  className={`w-8 mr-2 ${
                    track.slug === trackSlug 
                      ? 'text-foreground dark:text-white font-bold' 
                      : 'text-muted-foreground dark:text-gray-400'
                  }`}
                >
                  {track.number}
                </Text>
                <Text 
                  className={`flex-1 ${
                    track.slug === trackSlug 
                      ? 'text-foreground dark:text-white font-bold' 
                      : 'text-foreground dark:text-white'
                  }`}
                >
                  {track.title}
                </Text>
              </View>
            </TouchableOpacity>
          ))}
        </View>
      </View>
    </View>
  );
} 