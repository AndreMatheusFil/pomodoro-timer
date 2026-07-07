import { useNavigation } from '@react-navigation/native';
import { View, Text, TouchableOpacity } from 'react-native';

export const Home = () => {
  const navigation = useNavigation<any>();
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text style={{ fontFamily: "InterBold", fontSize: 50 }}>Home</Text>
        
        <TouchableOpacity onPress={() => navigation.navigate('Settings')}>
            <Text style={{ fontFamily: "InterRegular", fontSize: 20 }}>Go to Settings</Text>
        </TouchableOpacity>

    </View>
  );
}