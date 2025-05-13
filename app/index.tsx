import * as React from 'react';
import { ScrollView } from 'react-native';
import { Hero } from '~/components/layout/hero';
import { TopRecitersSection } from '~/components/reciters/top-reciters-section';
import { router } from 'expo-router';

export default function Screen() {
  const handleViewAllReciters = () => {
    router.push('/reciters');
  };

  const handleReciterPress = (slug: string) => {
    router.push(`/reciters/${slug}`);
  };

  return (
    <ScrollView className="flex-1 bg-background">
      {/* Hero Section */}
      <Hero />

      {/* Top Reciters Section */}
      <TopRecitersSection 
        onViewAll={handleViewAllReciters}
        onReciterPress={handleReciterPress}
      />
    </ScrollView>
  );
}
