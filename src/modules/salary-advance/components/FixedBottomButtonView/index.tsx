import { FlatSquaredIconButton } from 'mobile-styles';
import React from 'react';
import { View, SafeAreaView } from 'react-native';
import { styles } from './styles';

interface Props {
  loading?: boolean;
  disabled?: boolean;
  onPress: () => void;
  children: React.ReactNode;
}

export const FixedBottomButtonView = ({
  children,
  disabled = false,
  loading = false,
  onPress,
}: Props) => {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      {children}
      <View style={styles.buttonBox}>
        <View style={styles.stickToBottom}>
          <FlatSquaredIconButton
            testID="flat-button-id"
            loading={loading}
            disabled={disabled}
            icon="thinArrowRight"
            onPress={() => onPress()}
          />
        </View>
      </View>
    </SafeAreaView>
  );
};
