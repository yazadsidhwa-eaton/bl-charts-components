import React from 'react';
import {ExampleShowcase} from '../../../shared';
import {
  Drawer,
  DrawerBody,
  DrawerNavGroup,
  DrawerNavItem,
} from '@brightlayer-ui/react-native-components';

export const NestedNavItemExample = (): JSX.Element => (
  <ExampleShowcase>
    <Drawer style={{width: 250, margin: 'auto'}}>
      <DrawerBody>
        <DrawerNavGroup>
          <DrawerNavItem
            itemID={'item1'}
            title={'Account'}
            icon={{
              family: 'material-community',
              name: 'account',
              direction: 'auto',
            }}
          />
          <DrawerNavItem
            itemID={'item2'}
            title={'Notification'}
            icon={{
              family: 'material-community',
              name: 'bell',
              direction: 'auto',
            }}>
            <DrawerNavItem itemID={'item21'} title={'Web'} />
            <DrawerNavItem itemID={'item22'} title={'Mobile'} />
          </DrawerNavItem>
          <DrawerNavItem
            itemID={'item4'}
            title={'Localization'}
            icon={{
              family: 'material-community',
              name: 'map',
              direction: 'auto',
            }}
          />
        </DrawerNavGroup>
      </DrawerBody>
    </Drawer>
  </ExampleShowcase>
);
