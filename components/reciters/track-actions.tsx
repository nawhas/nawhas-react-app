import React from 'react';
import { View, TouchableOpacity } from 'react-native';
import { MessageSquare, Heart, Edit } from 'lucide-react-native';
import { useColorScheme } from '~/lib/useColorScheme';

interface TrackActionsProps {
  onToggleLyrics?: () => void;
  onToggleFavorite?: () => void;
  onEdit?: () => void;
  isFavorite?: boolean;
  hasLyrics?: boolean;
  showEditButton?: boolean;
  backgroundColor?: string;
}

export function TrackActions({
  onToggleLyrics,
  onToggleFavorite,
  onEdit,
  isFavorite = false,
  hasLyrics = true,
  showEditButton = false,
  backgroundColor = "#5a2d2c"
}: TrackActionsProps) {
  const { isDarkColorScheme } = useColorScheme();
  
  return (
    <View 
      style={{ backgroundColor }}
      className="w-full py-4 px-6 flex-row justify-end"
    >
      <View className="max-w-7xl w-full mx-auto flex-row justify-end">
        {/* Action buttons */}
        <View className="flex-row">
          {/* Lyrics button */}
          {hasLyrics && (
            <TouchableOpacity 
              onPress={onToggleLyrics}
              className="h-8 w-8 rounded-full bg-white/10 justify-center items-center mr-3"
            >
              <MessageSquare size={16} color="white" />
            </TouchableOpacity>
          )}
          
          {/* Favorite button */}
          <TouchableOpacity 
            onPress={onToggleFavorite}
            className="h-8 w-8 rounded-full bg-white/10 justify-center items-center mr-3"
          >
            <Heart 
              size={16} 
              color="white" 
              fill={isFavorite ? "white" : "transparent"} 
            />
          </TouchableOpacity>
          
          {/* Edit button - only shown for admins */}
          {showEditButton && (
            <TouchableOpacity 
              onPress={onEdit}
              className="h-8 w-8 rounded-full bg-white/10 justify-center items-center"
            >
              <Edit size={16} color="white" />
            </TouchableOpacity>
          )}
        </View>
      </View>
    </View>
  );
} 