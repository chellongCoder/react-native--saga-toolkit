import { createAction } from '@reduxjs/toolkit';
import {
  AddWalletPayload,
  AddWalletSuccessPayload,
  GetWalletPayload,
  GetWalletSuccessPayload,
  PassPhrasePayload,
  PassPhraseSuccessPayload,
} from './types';

export const getPassphraseRequest = createAction<PassPhrasePayload>('GET_PASSPHRASE_REQUEST');
export const getPassphraseSuccess = createAction<PassPhraseSuccessPayload>('GET_PASSPHRASE_SUCCESS');
export const getPassphraseFailed = createAction('GET_PASSPHRASE_FAILED');

export const saveLengthMnemonic = createAction<number>('SAVE_LENGTH_MNEMONIC');

export const addWalletRequest = createAction<AddWalletPayload>('ADD_WALLET_REQUEST');
export const addWalletSuccess = createAction<AddWalletSuccessPayload>('ADD_WALLET_SUCCESS');
export const addWalletFailed = createAction('ADD_WALLET_FAILED');

export const changeNameWallet = createAction<string>('CHANGE_NAME_WALLET');

export const getWalletsRequest = createAction<GetWalletPayload>('GET_WALLET_REQUEST');
export const getWalletsSuccess = createAction<GetWalletSuccessPayload>('GET_WALLET_SUCCESS');
export const getWalletsFailed = createAction('GET_WALLET_FAILED');

export const getTokensRequest = createAction('GET_TOKENS_REQUEST');
export const getTokensSuccess = createAction<any>('GET_TOKENS_SUCCESS');
export const getTokensFailed = createAction('GET_TOKENS_FAILED');
