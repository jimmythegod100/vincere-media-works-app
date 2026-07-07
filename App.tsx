import { useCallback, useEffect, useState } from 'react';
import { Image, View } from 'react-native';
import { useFonts } from 'expo-font';
import { Ionicons } from '@expo/vector-icons';
import * as SplashScreen from 'expo-splash-screen';
import { NavigationContainer, DarkTheme } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { StatusBar } from 'expo-status-bar';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import HomeScreen from './src/screens/HomeScreen';
import ServicesScreen from './src/screens/ServicesScreen';
import PortfolioScreen from './src/screens/PortfolioScreen';
import ContactScreen from './src/screens/ContactScreen';
import { TabIcon } from './src/components/ServiceIcon';
import { colors } from './src/theme';

SplashScreen.preventAutoHideAsync().catch(() => undefined);

const Tab = createBottomTabNavigator();

const navTheme = {
  ...DarkTheme,
  colors: {
    ...DarkTheme.colors,
    background: colors.bg,
    card: colors.bgCard,
    text: colors.text,
    border: colors.border,
    primary: colors.red,
  },
};

export default function App() {
  const [fontsLoaded] = useFonts({ ...Ionicons.font });
  const [ready, setReady] = useState(false);

  useEffect(() => {
    if (fontsLoaded) setReady(true);
  }, [fontsLoaded]);

  const onLayout = useCallback(async () => {
    if (ready) await SplashScreen.hideAsync();
  }, [ready]);

  if (!ready) return null;

  return (
    <SafeAreaProvider>
      <View style={{ flex: 1 }} onLayout={onLayout}>
        <NavigationContainer theme={navTheme}>
          <StatusBar style="light" />
          <Tab.Navigator
            screenOptions={({ route }) => ({
              headerStyle: { backgroundColor: colors.bg },
              headerTintColor: colors.text,
              headerTitleStyle: { fontWeight: '700', fontSize: 16 },
              headerRight: () => (
                <Image
                  source={require('./assets/icon.png')}
                  style={{ width: 28, height: 28, marginRight: 16 }}
                  resizeMode="contain"
                />
              ),
              tabBarStyle: {
                backgroundColor: colors.bgCard,
                borderTopColor: colors.border,
                paddingTop: 6,
                height: 88,
              },
              tabBarActiveTintColor: colors.red,
              tabBarInactiveTintColor: colors.textMuted,
              tabBarLabelStyle: { fontSize: 11, fontWeight: '600' },
              tabBarIcon: ({ color, size }) => {
                const icons = {
                  Home: 'home',
                  Services: 'grid',
                  Portfolio: 'images',
                  Contact: 'mail',
                } as const;
                return <TabIcon name={icons[route.name as keyof typeof icons]} size={size} color={color} />;
              },
            })}
          >
            <Tab.Screen name="Home" component={HomeScreen} options={{ title: 'Vincere Media Works' }} />
            <Tab.Screen name="Services" component={ServicesScreen} />
            <Tab.Screen name="Portfolio" component={PortfolioScreen} />
            <Tab.Screen name="Contact" component={ContactScreen} />
          </Tab.Navigator>
        </NavigationContainer>
      </View>
    </SafeAreaProvider>
  );
}
