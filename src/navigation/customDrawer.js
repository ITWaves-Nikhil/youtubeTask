import * as React from 'react';
import {Button, Text} from 'react-native';
import {Drawer} from 'react-native-drawer-layout';

export default function DrawerExample({open, setOpen}) {
  return (
    <Drawer
      open={open}
      onOpen={() => setOpen(true)}
      onClose={() => setOpen(false)}
      renderDrawerContent={() => {
        return <Text>Drawer content</Text>;
      }}></Drawer>
  );
}
