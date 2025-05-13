import React from 'react';
import { View, Image, TouchableOpacity, useColorScheme as RNUseColorScheme } from 'react-native';
import { Text } from '~/components/ui/text';
import { Heart, MessageSquare, Volume2 } from 'lucide-react-native';
import { Album, Track } from '~/lib/mock-data';
import { useColorScheme } from '~/lib/useColorScheme';
import { NAV_THEME } from '~/lib/constants';
import { cn } from '~/lib/utils';
import { router } from 'expo-router';

interface AlbumCardProps {
  album: Album;
  reciterSlug: string;
  onEditAlbum?: () => void;
  onAddTrack?: () => void;
  showAdminControls?: boolean;
}

export function AlbumCard({ 
  album, 
  reciterSlug,
  onEditAlbum, 
  onAddTrack, 
  showAdminControls = false 
}: AlbumCardProps) {
  const { isDarkColorScheme } = useColorScheme();
  
  const navigateToTrack = (track: Track) => {
    router.push(`/reciters/${reciterSlug}/albums/${album.slug}/tracks/${track.slug}`);
  };
  
  return (
    <View className="mb-8 w-full">
      {/* Album top section */}
      <View className="flex-row mb-4">
        <View className="w-24 h-24 rounded-md overflow-hidden mr-4 shadow">
          <Image
            source={{ uri: album.coverArt }}
            className="w-full h-full"
            resizeMode="cover"
          />
        </View>
        <View className="justify-center flex-1">
          <Text className="text-2xl font-bold text-foreground dark:text-white mb-1">{album.title}</Text>
          <Text className="text-muted-foreground dark:text-gray-400">{album.year} • {album.tracks.length} tracks</Text>
        </View>
      </View>

      {/* Track list */}
      <View className={cn(
        "rounded-md overflow-hidden w-full shadow",
        isDarkColorScheme ? "bg-zinc-900" : "bg-card border border-border"
      )}>
        {album.tracks.map((track, index) => (
          <TrackRow 
            key={track.id} 
            track={track} 
            trackNumber={index + 1} 
            isLastTrack={index === album.tracks.length - 1}
            onPress={() => navigateToTrack(track)}
          />
        ))}
      </View>

      {/* Admin actions (only shown if needed) */}
      {showAdminControls && (
        <View className="flex-row justify-end mt-6">
          <TouchableOpacity 
            className={cn(
              "py-2 px-4 rounded-md mr-3",
              isDarkColorScheme ? "bg-zinc-800" : "bg-secondary"
            )}
            onPress={onEditAlbum}
          >
            <Text className="text-secondary-foreground dark:text-white uppercase text-xs font-medium">Edit</Text>
          </TouchableOpacity>
          <TouchableOpacity 
            className="bg-primary dark:bg-red-600 py-2 px-4 rounded-md"
            onPress={onAddTrack}
          >
            <Text className="text-primary-foreground uppercase text-xs font-medium">Add Track</Text>
          </TouchableOpacity>
        </View>
      )}
    </View>
  );
}

interface TrackRowProps {
  track: Track;
  trackNumber: number;
  isLastTrack?: boolean;
  onPress?: () => void;
}

function TrackRow({ track, trackNumber, isLastTrack = false, onPress }: TrackRowProps) {
  const { isDarkColorScheme } = useColorScheme();
  
  // Get colors from theme
  const lyricsIconColor = '#ff5722'; // Accent color for lyrics
  const iconColor = isDarkColorScheme ? '#ffffff' : NAV_THEME.light.text;

  return (
    <TouchableOpacity 
      onPress={onPress}
      activeOpacity={0.7}
    >
      <View 
        className={`flex-row items-center py-3 px-4 ${!isLastTrack ? 'border-b border-border dark:border-zinc-800' : ''}`}
      >
        {/* Track number */}
        <Text className="w-8 text-muted-foreground dark:text-gray-400 mr-2">{trackNumber}</Text>
        
        {/* Track title */}
        <Text className="flex-1 text-foreground dark:text-white font-medium">{track.title}</Text>
        
        {/* Track actions */}
        <View className="flex-row items-center">
          {track.hasLyrics && (
            <TouchableOpacity 
              className="mx-2"
              onPress={(e) => {
                e.stopPropagation();
                // Handle lyrics action
              }}
            >
              <MessageSquare size={20} color={lyricsIconColor} />
            </TouchableOpacity>
          )}
          {track.hasAudio && (
            <TouchableOpacity 
              className="mx-2"
              onPress={(e) => {
                e.stopPropagation();
                // Handle audio action
              }}
            >
              <Volume2 size={20} color={iconColor} />
            </TouchableOpacity>
          )}
          <TouchableOpacity 
            className="ml-2"
            onPress={(e) => {
              e.stopPropagation();
              // Handle favorite action
            }}
          >
            <Heart size={20} color={iconColor} />
          </TouchableOpacity>
        </View>
      </View>
    </TouchableOpacity>
  );
} 