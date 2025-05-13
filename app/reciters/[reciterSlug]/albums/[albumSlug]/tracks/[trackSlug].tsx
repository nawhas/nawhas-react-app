import React, { useState } from 'react';
import { ScrollView, View } from 'react-native';
import { useLocalSearchParams, router } from 'expo-router';
import { Text } from '~/components/ui/text';
import { findTrackBySlug } from '~/lib/mock-data';
import { TrackHeader } from '~/components/reciters/track-header';
import { TrackActions } from '~/components/reciters/track-actions';
import { TrackContent } from '~/components/reciters/track-content';
import { RelatedTracks } from '~/components/reciters/related-tracks';

export default function TrackDetailPage() {
  // Get params from URL
  const { reciterSlug, albumSlug, trackSlug } = useLocalSearchParams();

  // Convert params to strings
  const reciterSlugStr = typeof reciterSlug === 'string' ? reciterSlug : '';
  const albumSlugStr = typeof albumSlug === 'string' ? albumSlug : '';
  const trackSlugStr = typeof trackSlug === 'string' ? trackSlug : '';

  // Find the track, album and reciter data
  const { track, album, reciter } = findTrackBySlug(reciterSlugStr, albumSlugStr, trackSlugStr);

  // State for favorite toggle
  const [isFavorite, setIsFavorite] = useState(false);

  // State for active tab
  const [activeTab, setActiveTab] = useState<'lyrics' | 'video'>('lyrics');

  // Handle not found case
  if (!track || !album || !reciter) {
    return (
      <View className="flex-1 bg-background dark:bg-black items-center justify-center p-6">
        <Text className="text-xl text-foreground dark:text-white mb-4 text-center">
          Track not found
        </Text>
        <Text 
          className="text-primary dark:text-red-500 underline"
          onPress={() => router.push('/reciters')}
        >
          Go back to reciters
        </Text>
      </View>
    );
  }

  // Prepare data for related tracks component
  const albumTracks = album.tracks.map((t, index) => ({
    ...t,
    number: index + 1
  }));

  // Toggle favorite
  const handleToggleFavorite = () => {
    setIsFavorite(!isFavorite);
  };

  // Toggle lyrics view
  const handleToggleLyrics = () => {
    // This would normally toggle a lyrics view
    console.log('Toggle lyrics');
  };

  // Handle edit
  const handleEdit = () => {
    console.log('Edit track');
  };

  return (
    <ScrollView className="flex-1 bg-background dark:bg-black">
      {/* Track header with album artwork and title */}
      <TrackHeader
        trackTitle={track.title}
        reciterName={reciter.name}
        reciterSlug={reciter.slug}
        albumTitle={album.title}
        albumSlug={album.slug}
        albumYear={album.year}
        albumArtwork={album.coverArt || ''}
        backgroundColor={reciter.backgroundColor}
      />

      {/* Track actions (favorite, lyrics, edit) */}
      <TrackActions
        onToggleFavorite={handleToggleFavorite}
        onToggleLyrics={handleToggleLyrics}
        onEdit={handleEdit}
        isFavorite={isFavorite}
        hasLyrics={track.hasLyrics}
        showEditButton={true}
        backgroundColor={reciter.backgroundColor}
      />

      {/* Track content (lyrics/video) */}
      <TrackContent
        writeUp={track.lyrics}
        videoUrl={track.videoUrl}
        initialTab="write-up"
      />

      {/* Related tracks from same album */}
      <RelatedTracks
        albumTitle={album.title}
        reciterSlug={reciter.slug}
        albumSlug={album.slug}
        trackSlug={track.slug}
        tracks={albumTracks}
      />
    </ScrollView>
  );
} 