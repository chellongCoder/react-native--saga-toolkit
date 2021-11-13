import React, { useCallback, FC, memo, useState } from 'react';
import { View, ScrollView, Image } from 'react-native';
import { Trans, useTranslation } from 'react-i18next';
import { useNavigation } from '@react-navigation/native';
import { useDispatch } from 'react-redux';
import LinearGradient from 'react-native-linear-gradient';
import { COLORS } from '@theme/colors';
import { Images } from '@theme/images';
import commonStyles from '@theme/commonStyles';
import styles from './styles';
import { TextField } from '@components/text-field';
import { Touchable } from '@components/touchable';
import { Icons } from '@theme/icons';
import { Platform } from '@theme/platform';
import { Text } from '@components/text';
import { navigate } from '@routes/navigationUtils';
import { ROUTES } from '@routes/constants';
import { Dropdown } from '@scenes/create-new-wallet/dropdown';
import { langs } from './__mocks__/data';

const LoginScreen: FC = () => {
  const [t, i18n] = useTranslation();
  const navigation = useNavigation();
  const dispatch = useDispatch();
  const [lang, setLang] = useState('en');

  const switchLocaleToEn = useCallback(() => {
    i18n.changeLanguage('en');
    setLang('en');
  }, [i18n]);

  const switchLocaleToVi = useCallback(() => {
    i18n.changeLanguage('vi');
    setLang('vi');
  }, [i18n]);

  const onLogin = useCallback(() => {
    // dispatch(
    //   loginRequest({
    //     auth: true,
    //   }),
    // );
    navigate(ROUTES.LoginPassword, {});
  }, []);

  return (
    <LinearGradient useAngle angle={180} colors={COLORS.GREEN_GRADIENT} style={{ flex: 1 }}>
      <View style={[styles.lang, commonStyles.row]}>
        <Dropdown data={langs} />
      </View>

      <View style={styles.logo}>
        <Image resizeMode="contain" style={commonStyles.image} source={Images.LOGO} />
      </View>
      <View style={styles.input}>
        <TextField
          // onChangeText={setUserName}
          style={styles.inputRateStyle}
          placeholder={t('Login:email')}
          inputStyle={styles.inputStyles}
          placeholderTextColor={COLORS.GREEN}
        />
        <TextField
          // onChangeText={setUserName}
          style={styles.inputRateStyle}
          placeholder={t('Login:pass')}
          inputStyle={styles.inputStyles}
          placeholderTextColor={COLORS.GREEN}
          secureTextEntry
        />
      </View>
      <View style={[commonStyles.row, commonStyles.spaceBetween, styles.buttonGroup]}>
        <Touchable onPress={onLogin} style={styles.button}>
          <Text fontType="fontBold" color={COLORS.LIGHT_GREEN} fontSize={Platform.SizeScale(20)}>
            {t('Login:login')}
          </Text>
        </Touchable>
        <LinearGradient useAngle angle={93.32} colors={COLORS.PINK_GRADIENT} style={styles.finger}>
          <Image resizeMode="contain" style={commonStyles.image} source={Icons.ICON_FINGER} />
        </LinearGradient>
      </View>
      <View style={[commonStyles.row, styles.funcGroup]}>
        <View style={styles.func}>
          <Image resizeMode="contain" style={commonStyles.image} source={Icons.ICON_NEW} />
        </View>
        <View style={styles.func}>
          <Image resizeMode="contain" style={commonStyles.image} source={Icons.ICON_SUPPORT} />
        </View>
        <View style={styles.func}>
          <Image resizeMode="contain" style={commonStyles.image} source={Icons.ICON_MORE} />
        </View>
      </View>
    </LinearGradient>
  );
};

export default memo(LoginScreen);
