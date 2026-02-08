/**
 * TOEIC Vocabulary App
 * Complete Mobile App with all features integrated
 */
import React, { useEffect } from 'react';
import { StatusBar, StyleSheet } from 'react-native';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

// Initialize storage on app start
import { initializeStorage } from './src/utils/storage';

// Screens
import HomeScreen from './src/screens/HomeScreen';
import QuizScreen from './src/screens/QuizScreen';
import QuizDifficultyScreen from './src/screens/QuizDifficultyScreen';
import FlashcardScreen from './src/screens/FlashcardScreen';
import StatsScreen from './src/screens/StatsScreen';
import DifficultySelectScreen from './src/screens/DifficultySelectScreen';
import CustomTrainingScreen from './src/screens/CustomTrainingScreen';
import SimulationGameScreen from './src/screens/SimulationGameScreen';
import AchievementsScreen from './src/screens/AchievementsScreen';
import QuizHistoryScreen from './src/screens/QuizHistoryScreen';

// Providers
import { StudyProvider } from './src/context/StudyContext';
import { AchievementToastProvider } from './src/context/AchievementToastContext';

const Stack = createNativeStackNavigator();

// Navigation theme - Dark cyberpunk
const navigationTheme = {
  dark: true,
  colors: {
    primary: '#4DABF7',
    background: '#1A1A2E',
    card: '#16213E',
    text: '#FFFFFF',
    border: '#2D2D44',
    notification: '#FF6B6B',
  },
};

export default function App() {
  // Initialize storage on app load
  useEffect(() => {
    initializeStorage().catch(console.error);
  }, []);

  return (
    <SafeAreaProvider>
      <AchievementToastProvider>
        <StudyProvider>
          <NavigationContainer theme={navigationTheme}>
            <StatusBar barStyle="light-content" backgroundColor="#1A1A2E" />
            <Stack.Navigator
              initialRouteName="Home"
              screenOptions={{
                headerStyle: {
                  backgroundColor: '#16213E',
                },
                headerTintColor: '#FFFFFF',
                headerTitleStyle: {
                  fontWeight: '600',
                },
                contentStyle: {
                  backgroundColor: '#1A1A2E',
                },
                animation: 'slide_from_right',
              }}
            >
              {/* Home - Main Menu */}
              <Stack.Screen
                name="Home"
                component={HomeScreen}
                options={{
                  headerShown: false,
                }}
              />
              
              {/* Quiz Difficulty Selection */}
              <Stack.Screen
                name="QuizDifficulty"
                component={QuizDifficultyScreen}
                options={{
                  headerShown: false,
                }}
              />
              
              {/* Quiz Mode */}
              <Stack.Screen
                name="Quiz"
                component={QuizScreen}
                options={{
                  headerShown: false,
                }}
              />
              
              {/* SRS Flashcards */}
              <Stack.Screen
                name="Flashcard"
                component={FlashcardScreen}
                options={{
                  headerShown: false,
                }}
              />
              
              {/* Statistics with Heatmap */}
              <Stack.Screen
                name="Stats"
                component={StatsScreen}
                options={{
                  headerShown: false,
                }}
              />
              
              {/* Difficulty Selection */}
              <Stack.Screen
                name="DifficultySelect"
                component={DifficultySelectScreen}
                options={{
                  headerShown: false,
                }}
              />
              
              {/* Simulation Mode */}
              <Stack.Screen
                name="CustomTraining"
                component={CustomTrainingScreen}
                options={{
                  headerShown: false,
                }}
              />
              
              {/* Simulation Game */}
              <Stack.Screen
                name="SimulationGame"
                component={SimulationGameScreen}
                options={{
                  headerShown: false,
                }}
              />
              
              {/* Achievements / Cyber Certifications */}
              <Stack.Screen
                name="Achievements"
                component={AchievementsScreen}
                options={{
                  headerShown: false,
                }}
              />
              
              {/* Quiz History */}
              <Stack.Screen
                name="QuizHistory"
                component={QuizHistoryScreen}
                options={{
                  headerShown: false,
                }}
              />
            </Stack.Navigator>
          </NavigationContainer>
        </StudyProvider>
      </AchievementToastProvider>
    </SafeAreaProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#1A1A2E',
  },
});
