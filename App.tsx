import { NavigationContainer, DarkTheme } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { StatusBar } from 'expo-status-bar';
import { Ionicons } from '@expo/vector-icons';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import HomeScreen from './src/screens/HomeScreen';
import ServicesScreen from './src/screens/ServicesScreen';
import PortfolioScreen from './src/screens/PortfolioScreen';
import ContactScreen from './src/screens/ContactScreen';
import { colors } from './src/theme';

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
  return (
    <SafeAreaProvider>
      <NavigationContainer theme={navTheme}>
        <StatusBar style="light" />
        <Tab.Navigator
          screenOptions={({ route }) => ({
            headerStyle: { backgroundColor: colors.bg },
            headerTintColor: colors.text,
            headerTitleStyle: { fontWeight: '700' },
            tabBarStyle: {
              backgroundColor: colors.bgCard,
              borderTopColor: colors.border,
              paddingTop: 4,
              height: 88,
            },
            tabBarActiveTintColor: colors.red,
            tabBarInactiveTintColor: colors.textMuted,
            tabBarIcon: ({ color, size }) => {
              const icons: Record<string, keyof typeof Ionicons.glyphMap> = {
                Home: 'home',
                Services: 'grid',
                Portfolio: 'images',
                Contact: 'mail',
              };
              return <Ionicons name={icons[route.name]} size={size} color={color} />;
            },
          })}
        >
          <Tab.Screen name="Home" component={HomeScreen} options={{ title: 'Vincere Media Works' }} />
          <Tab.Screen name="Services" component={ServicesScreen} />
          <Tab.Screen name="Portfolio" component={PortfolioScreen} />
          <Tab.Screen name="Contact" component={ContactScreen} />
        </Tab.Navigator>
      </NavigationContainer>
    </SafeAreaProvider>
  );
}
