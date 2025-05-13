import * as React from 'react';
import { ScrollView } from 'react-native';
import { Hero } from '~/components/ui/hero';

export default function Screen() {
  return (
    <ScrollView className="flex-1 bg-background">
      {/* Hero Section */}
      <Hero />
    </ScrollView>
  );
}
