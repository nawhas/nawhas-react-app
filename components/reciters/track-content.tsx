import React, { useState } from 'react';
import { View, TouchableOpacity, ScrollView } from 'react-native';
import { Text } from '~/components/ui/text';
import { useColorScheme } from '~/lib/useColorScheme';

interface TrackContentProps {
  writeUp?: string;
  videoUrl?: string;
  initialTab?: 'write-up' | 'video';
}

export function TrackContent({
  writeUp,
  videoUrl,
  initialTab = 'write-up'
}: TrackContentProps) {
  const [activeTab, setActiveTab] = useState<'write-up' | 'video'>(initialTab);
  const { isDarkColorScheme } = useColorScheme();
  
  return (
    <View className="w-full bg-background dark:bg-black">
      <View className="max-w-7xl w-full mx-auto py-8 px-6">
        {/* Tab controls */}
        <View className="flex-row mb-6">
          <TouchableOpacity
            onPress={() => setActiveTab('write-up')}
            className="mr-4"
          >
            <View className="flex-row items-center">
              <View className="w-5 h-5 rounded-md bg-background dark:bg-zinc-800 border border-border dark:border-zinc-700 items-center justify-center mr-2">
                <Text className="text-muted-foreground dark:text-gray-400 text-xs">T</Text>
              </View>
              <Text 
                className={`${
                  activeTab === 'write-up' 
                    ? 'text-foreground dark:text-white font-bold' 
                    : 'text-muted-foreground dark:text-gray-400'
                }`}
              >
                Write-Up
              </Text>
            </View>
          </TouchableOpacity>
          
          {videoUrl && (
            <TouchableOpacity
              onPress={() => setActiveTab('video')}
            >
              <View className="flex-row items-center">
                <View className="w-5 h-5 rounded-md bg-background dark:bg-zinc-800 border border-border dark:border-zinc-700 items-center justify-center mr-2">
                  <Text className="text-muted-foreground dark:text-gray-400 text-xs">V</Text>
                </View>
                <Text 
                  className={`${
                    activeTab === 'video' 
                      ? 'text-foreground dark:text-white font-bold' 
                      : 'text-muted-foreground dark:text-gray-400'
                  }`}
                >
                  Video
                </Text>
              </View>
            </TouchableOpacity>
          )}
        </View>
        
        {/* Tab content */}
        <View className="w-full">
          {activeTab === 'write-up' && (
            <View className="bg-card dark:bg-zinc-900 rounded-md p-6 min-h-[300px] border border-border dark:border-zinc-800">
              {writeUp ? (
                <Text className="text-foreground dark:text-white">{writeUp}</Text>
              ) : (
                <View className="flex-1 items-center justify-center h-48">
                  <Text className="text-muted-foreground dark:text-gray-400 text-center mb-4">
                    We don't have a write-up for this nawha yet.
                  </Text>
                  <TouchableOpacity
                    className="bg-primary dark:bg-red-600 py-3 px-5 rounded-md"
                  >
                    <Text className="text-primary-foreground text-sm font-medium uppercase">
                      Add a Write Up
                    </Text>
                  </TouchableOpacity>
                </View>
              )}
            </View>
          )}
          
          {activeTab === 'video' && videoUrl && (
            <View className="bg-card dark:bg-zinc-900 rounded-md p-2 border border-border dark:border-zinc-800 overflow-hidden aspect-video">
              {/* Video iframe placeholder */}
              <View className="w-full h-full bg-muted dark:bg-zinc-800 items-center justify-center">
                <Text className="text-muted-foreground dark:text-gray-400">
                  Video player would be embedded here
                </Text>
              </View>
            </View>
          )}
        </View>
      </View>
    </View>
  );
} 