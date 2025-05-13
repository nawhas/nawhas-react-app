import React from 'react';
import { View, TouchableOpacity } from 'react-native';
import { Text } from '~/components/ui/text';
import { ReciterCard } from './reciter-card';

// Mock data for reciters
const RECITERS = [
  {
    id: '1',
    name: 'Tejani Brothers',
    albums: 18,
    imageUrl: 'https://nawhas.com/_nuxt/img/default-reciter-avatar.5d27d9e.png',
    backgroundColor: '#7f3934'
  },
  {
    id: '2',
    name: 'Nadeem Sarwar',
    albums: 38,
    imageUrl: 'https://nawhas.com/_nuxt/img/default-reciter-avatar.5d27d9e.png',
    backgroundColor: '#4c3a8d'
  },
  {
    id: '3',
    name: 'Mir Hasan Mir',
    albums: 20,
    imageUrl: 'https://nawhas.com/_nuxt/img/default-reciter-avatar.5d27d9e.png',
    backgroundColor: '#41593c'
  },
  {
    id: '4',
    name: 'Irfan Haider',
    albums: 22,
    imageUrl: 'https://nawhas.com/_nuxt/img/default-reciter-avatar.5d27d9e.png',
    backgroundColor: '#5d4a3e'
  },
  {
    id: '5',
    name: 'Farhan Ali Waris',
    albums: 23,
    imageUrl: 'https://nawhas.com/_nuxt/img/default-reciter-avatar.5d27d9e.png',
    backgroundColor: '#664d2e'
  },
  {
    id: '6',
    name: 'Hassan Sadiq',
    albums: 15,
    imageUrl: 'https://nawhas.com/_nuxt/img/default-reciter-avatar.5d27d9e.png',
    backgroundColor: '#7e3450'
  }
];

interface TopRecitersSectionProps {
  onViewAll?: () => void;
  onReciterPress?: (reciterId: string) => void;
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
          {RECITERS.map((reciter) => (
            <View key={reciter.id} className="w-full md:w-[32%] mb-4">
              <ReciterCard
                name={reciter.name}
                albums={reciter.albums}
                imageUrl={reciter.imageUrl}
                backgroundColor={reciter.backgroundColor}
                onPress={() => onReciterPress?.(reciter.id)}
              />
            </View>
          ))}
        </View>
      </View>
    </View>
  );
} 