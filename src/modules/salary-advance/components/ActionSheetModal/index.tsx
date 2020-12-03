import React, { useRef, useEffect } from 'react';
import { ActionSheet, Grid, Typography } from 'mobile-styles';
import { ActionSheetRef } from 'mobile-styles/src/components/ActionSheet/interface';
import { TouchableOpacity } from 'react-native';

interface Props {
  visible: boolean;
  onClose?: () => void;
}

const ActionSheetModal = ({ visible, onClose }: Props) => {
  const actionSheetRef = useRef<ActionSheetRef>(null);
  useEffect(() => {
    actionSheetRef.current?.setModalVisible(visible);
  }, [visible]);
  return (
    <ActionSheet gestureEnabled ref={actionSheetRef} onClose={onClose}>
      <Grid alignItems={'center'}>
        <Typography
          text="Entenda o uso"
          color="neutral9"
          variant="mockTokenHelveticaDisplayRegular"
          style={{ lineHeight: 24, letterSpacing: 0.3, fontSize: 18 }}
        />
      </Grid>
      <ActionSheet.Content>
        <Grid ml={'spacing20px'} mr={'spacing20px'}>
          <Typography
            text="Você não paga nada nas duas primeiras antecipações."
            color="neutral6"
            variant="mockTokenHelveticaDisplayMedium"
            style={{ lineHeight: 24, letterSpacing: 0.3 }}
          />
          <Typography
            text="A partir da
            terceira, o custo de R$ 5,00 é cobrado por antecipação."
            color="neutral6"
            variant="mockTokenHelveticaDisplayMedium"
            style={{
              lineHeight: 24,
              letterSpacing: 0.3,
              marginTop: 30,
              marginBottom: 30,
            }}
          />
          <Typography
            text="Esse custo é
            descontado do seu contracheque junto com o valor antecipado."
            color="neutral6"
            variant="mockTokenHelveticaDisplayMedium"
            style={{ lineHeight: 24, letterSpacing: 0.3 }}
          />
        </Grid>
      </ActionSheet.Content>
      <ActionSheet.Actions>
        <TouchableOpacity onPress={onClose}>
          <Typography
            textAlign="center"
            text="Voltar"
            color="primary3"
            variant="mockTokenHelveticaLabelBold"
          />
        </TouchableOpacity>
      </ActionSheet.Actions>
    </ActionSheet>
  );
};

export { ActionSheetModal };
