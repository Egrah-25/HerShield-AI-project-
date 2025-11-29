// app/(tabs)/_layout.tsx
import { Tabs } from 'expo-router';
import { MaterialIcons } from '@expo/vector-icons';
import { IconSymbol } from '@/components/ui/icon-symbol';

export default function TabLayout() {
  return (
      <Tabs
            screenOptions={{
                    headerStyle: { backgroundColor: '#8A2BE2' },
                            headerTintColor: 'white',
                                    tabBarActiveTintColor: '#8A2BE2',
                                          }}>
                                                <Tabs.Screen
                                                        name="index"
                                                                options={{
                                                                          title: 'Home',
                                                                                    tabBarIcon: ({ color, size }) => (
                                                                                                <MaterialIcons name="home" size={size} color={color} />
                                                                                                          ),
                                                                                                                  }}
                                                                                                                        />
                                                                                                                              <Tabs.Screen
                                                                                                                                      name="ai-detection"
                                                                                                                                              options={{
                                                                                                                                                        title: 'AI Analysis',
                                                                                                                                                                  tabBarIcon: ({ color, size }) => (
                                                                                                                                                                              <MaterialIcons name="psychology-alt" size={size} color={color} />
                                                                                                                                                                                        ),
                                                                                                                                                                                                }}
                                                                                                                                                                                                      />
                                                                                                                                                                                                      <Tabs.Screen
                                                                                                                                                                                                        name="vault"
                                                                                                                                                                                                          options={{
                                                                                                                                                                                                              title: 'Evidence Vault',
                                                                                                                                                                                                                  tabBarIcon: ({ color, size }) => (
                                                                                                                                                                                                                        <MaterialIcons name="folder-special" size={size} color={color} />
                                                                                                                                                                                                                            ),
                                                                                                                                                                                                                              }}
                                                                                                                                                                                                                              />
                                                                                                                                                                                                            <Tabs.Screen
                                                                                                                                                                                                                    name="explore"
                                                                                                                                                                                                                            options={{
                                                                                                                                                                                                                                      title: 'Toolkit',
                                                                                                                                                                                                                                                tabBarIcon: ({ color, size }) => (
                                                                                                                                                                                                                                                            <MaterialIcons name="build" size={size} color={color} />
                                                                                                                                                                                                                                                                      ),
                                                                                                                                                                                                                                                                              }}
                                                                                                                                                                                                                                                                                    />
                                                                                                                                                                                                                                                                                        </Tabs>
                                                                                                                                                                                                                                                                                          );
                                                                                                                                                                                                                                                                                          }
