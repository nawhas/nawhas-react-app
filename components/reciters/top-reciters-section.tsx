import React from 'react';
import { View, TouchableOpacity } from 'react-native';
import { Text } from '~/components/ui/text';
import { ReciterCard } from './reciter-card';
import { RECITERS } from '~/lib/mock-data';

// Get only the first 6 reciters for the top reciters section
const TOP_RECITERS = RECITERS.slice(0, 6);

interface TopRecitersSectionProps {
  onViewAll?: () => void;
  onReciterPress?: (slug: string) => void;
}

export function TopRecitersSection({ onViewAll, onReciterPress }: TopRecitersSectionProps) {
  return (
    <View className="w-full px-6 py-8 bg-background">
      <View className="max-w-screen-lg mx-auto">
        {/* Header with View All button */}
        <View className="flex-row justify-between items-center mb-6">
          <Text className="text-2xl font-bold text-foreground">Top Reciters</Text>
          <TouchableOpacity onPress={onViewAll}>
            <Text className="text-sm font-medium text-primary">VIEW ALL</Text>
          </TouchableOpacity>
        </View>

        {/* Grid of reciter cards */}
        <View className="flex-row flex-wrap justify-between">
          {TOP_RECITERS.map((reciter) => (
            <View key={reciter.id} className="w-full md:w-[32%] mb-4">
              <ReciterCard
                name={reciter.name}
                albums={reciter.albums}
                imageUrl={reciter.imageUrl}
                backgroundColor={reciter.backgroundColor}
                slug={reciter.slug}
                onPress={() => onReciterPress?.(reciter.slug)}
              />
            </View>
          ))}
        </View>
      </View>
    </View>
  );
} 