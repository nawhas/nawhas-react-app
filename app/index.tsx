import * as React from 'react';
import { ScrollView } from 'react-native';
import { Hero } from '~/components/layout/hero';
import { TopRecitersSection } from '~/components/reciters/top-reciters-section';

export default function Screen() {
  const handleViewAllReciters = () => {
    // Navigate to reciters page
    console.log('Navigate to all reciters');
  };

  const handleReciterPress = (reciterId: string) => {
    // Navigate to reciter detail page
    console.log('Navigate to reciter', reciterId);
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
