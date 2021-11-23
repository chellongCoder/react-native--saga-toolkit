import { Icon } from '@components/common-icon';
import { CommonButton } from '@components/CommonButton';
import { ListFullOption } from '@components/list';
import { SelectionItem } from '@components/selection-item';
import { Text } from '@components/text';
import { View } from '@components/view';
import { RootState } from '@redux/reducers';
import { WalletDetail } from '@redux/wallet/types';
import { COLORS } from '@theme/colors';
import { Icons } from '@theme/icons';
import { Platform } from '@theme/platform';
import { mapWalletsHome } from '@tools/wallet.helper';
import React, { FC, memo, useCallback, useMemo, useRef } from 'react';
import { StyleSheet } from 'react-native';
import { useSelector } from 'react-redux';

const _Wallet = ({
  setCurrentWallet,
  currentWallet,
  onHide,
}: {
  setCurrentWallet: any;
  currentWallet?: WalletDetail;
  onHide: () => void;
}) => {
  const { wallets } = useSelector((state: RootState) => state.wallet);

  /**
   *lấy ra những thằng ví không phải là thằng ví ở home để chọn
   *
   * @return {*} ví []
   */
  const mapWallets = useMemo(() => {
    return mapWalletsHome(wallets).filter(e => e.id !== currentWallet?.id);
  }, [currentWallet?.id, wallets]);
  const choiceWallet = useRef();

  const renderItemMenu = useCallback((item, index, isFavorite, onPress) => {
    const _onPress = () => {
      onPress();
      choiceWallet.current = item;
    };
    return <Item {...{ item, index, isFavorite, onPress: _onPress }} />;
  }, []);

  const onChoiceWallet = useCallback(() => {
    setCurrentWallet(choiceWallet.current);
    onHide();
  }, [onHide, setCurrentWallet]);

  return (
    <View style={styles.container}>
      <View alignItems={'center'}>
        <Text fontSize={Platform.SizeScale(18)} mv={Platform.SizeScale(10)}>
          Select Wallets
        </Text>
      </View>
      <ListFullOption
        showsVerticalScrollIndicator={false}
        style={{}}
        data={mapWallets}
        renderSubItem={renderItemMenu}
      />
      <View mv={Platform.SizeScale(20)}>
        <CommonButton
          onPress={onChoiceWallet}
          width={Platform.deviceWidth - Platform.SizeScale(40)}
          type="full"
          text={'Done'}
        />
      </View>
    </View>
  );
};

const Item = ({ item, index, isFavorite, onPress }) => {
  const renderLeftAccessory = useCallback(() => {
    return (
      <>
        {isFavorite ? <Icon icon={Icons.ICON_CHECKBOX} size={3} /> : <Icon icon={Icons.ICON_UNCHECKBOX} size={3} />}
        <Text color={COLORS._085A51} fontSize={Platform.SizeScale(15)}>
          {item.name}
        </Text>
      </>
    );
  }, [isFavorite, item.name]);

  const renderRightAccessory = useCallback(() => {
    return <></>;
  }, []);

  return <SelectionItem {...{ item, index, isFavorite, onPress, renderLeftAccessory, renderRightAccessory }} />;
};

export const Wallet = memo(_Wallet);

const styles = StyleSheet.create({
  container: {
    backgroundColor: COLORS.WHITE,
    height: Platform.SizeScale(Platform.deviceHeight / 1.5),
    width: Platform.deviceWidth - Platform.SizeScale(20),
    paddingHorizontal: Platform.SizeScale(10),
    borderTopLeftRadius: Platform.SizeScale(33),
    borderTopRightRadius: Platform.SizeScale(33),
    alignSelf: 'center',
  },
  itemContainer: {
    paddingVertical: Platform.SizeScale(10),
    borderRadius: Platform.SizeScale(20),
    backgroundColor: COLORS._EEFFF3,
    marginVertical: Platform.SizeScale(5),
    paddingHorizontal: Platform.SizeScale(10),
  },
  itemNote: {
    // height: Platform.SizeScale(21),
    // width: Platform.SizeScale(80),
    borderWidth: StyleSheet.hairlineWidth,
    borderColor: COLORS._13A6D4,
    borderRadius: Platform.SizeScale(10),
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: Platform.SizeScale(2),
    paddingHorizontal: Platform.SizeScale(10),
  },
});
