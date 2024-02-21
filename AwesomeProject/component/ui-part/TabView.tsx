import {ReactNode, useState} from 'react';
import {View, Text, TouchableOpacity} from 'react-native';

interface TabType {
  title: string;
  body: ReactNode;
}

export default function TabView({tabs}: {tabs: TabType[]}) {
  const [currentTab, setCurrentTab] = useState(tabs[0].title);

  const activatedStyle = {
    borderBottomWidth: 2,
    borderColor: 'black',
  };

  const inActivatedStyle = {
    borderBottomWidth: 1,
    borderColor: '#9E9E9E',
  };

  return (
    <View>
      <View style={{flexDirection: 'row'}}>
        {tabs.map(({title}) => (
          <View
            style={[
              {
                flex: 1,
                alignItems: 'center',
                height: 40,
              },
              title === currentTab ? activatedStyle : inActivatedStyle,
            ]}>
            <TouchableOpacity onPress={() => setCurrentTab(title)}>
              <Text
                style={{
                  fontSize: 16,
                  lineHeight: 24,
                  marginVertical: 8,
                  fontWeight: '600',
                }}>
                {title}
              </Text>
            </TouchableOpacity>
          </View>
        ))}
      </View>
      <View>{tabs.find(tab => tab.title === currentTab)?.body}</View>
    </View>
  );
}
