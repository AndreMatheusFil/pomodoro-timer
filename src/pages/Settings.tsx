import { useNavigation } from '@react-navigation/native';
import { View, Text, TouchableOpacity } from 'react-native';

export const Settings = () => {
  const navigation = useNavigation<any>();
  
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text style={{ fontFamily: "InterBold", fontSize: 50 }}>Settings</Text>
        <TouchableOpacity onPress={() => navigation.navigate('Home')}>
            <Text style={{ fontFamily: "InterRegular", fontSize: 20 }}>Go to Home</Text>
        </TouchableOpacity>
    </View>
  );
}