import React, {useEffect} from 'react';
import {Dimensions} from 'react-native';

import {useToast, useToastService} from '@services';

import {Box, BoxProps, Icon, Text} from '@components';
import {$shadowProps} from '@theme';

const MAX_WIDTH = Dimensions.get('screen').width * 0.9;

export function Toast() {
  const toast = useToast();
  const {hideToast} = useToastService();

  useEffect(() => {
    if (toast) {
      setTimeout(() => {
        hideToast();
      }, 2000);
    }
  }, [toast, hideToast]);

  if (!toast) {
    return null;
  }

  return (
    <Box top={100} {...$boxStyle}>
      <Icon color="success" name="checkRound" />
      <Text style={{flexShrink: 1}} ml="s16" preset="paragraphMedium" bold>
        {toast?.message}
      </Text>
    </Box>
  );
}

const $boxStyle: BoxProps = {
  backgroundColor: 'background',
  padding: 's16',
  alignSelf: 'center',
  alignItems: 'center',
  borderRadius: 's16',
  flexDirection: 'row',
  position: 'absolute',
  opacity: 0.95,
  maxWidth: MAX_WIDTH,
  style: {...$shadowProps},
};
