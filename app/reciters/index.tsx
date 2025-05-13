import React from 'react';
import { View, ScrollView } from 'react-native';
import { Text } from '~/components/ui/text';
import { ReciterCard } from '~/components/reciters/reciter-card';
import { useRouter } from 'expo-router';
import { RECITERS } from '~/lib/mock-data';

export default function RecitersPage() {
  const router = useRouter();

  const handleReciterPress = (slug: string) => {
    router.push(`/reciters/${slug}`);
  };

  return (
    <ScrollView className="flex-1 bg-background">
      {/* Page header */}
      <View className="w-full bg-secondary/30 py-12 px-6">
        <View className="max-w-screen-lg mx-auto">
          <Text className="text-3xl font-bold text-foreground">Reciters</Text>
          <Text className="text-muted-foreground mt-2">
            Browse our collection of reciters and their nawhas
          </Text>
        </View>
      </View>

      {/* Reciters grid */}
      <View className="w-full px-6 py-8">
        <View className="max-w-screen-lg mx-auto">
          <View className="flex-row flex-wrap justify-between">
            {RECITERS.map((reciter) => (
              <View key={reciter.id} className="w-full sm:w-[48%] md:w-[32%] mb-4">
                <ReciterCard
                  name={reciter.name}
                  albums={reciter.albums}
                  imageUrl={reciter.imageUrl}
                  backgroundColor={reciter.backgroundColor}
                  slug={reciter.slug}
                  onPress={() => handleReciterPress(reciter.slug)}
                />
              </View>
            ))}
          </View>
        </View>
      </View>
    </ScrollView>
  );
} 