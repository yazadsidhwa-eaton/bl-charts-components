import React from 'react';
import { MobileStepper } from '@brightlayer-ui/react-native-components';
import { ExampleShowcase } from '../../../shared';
import { Button } from 'react-native-paper';

export const MobileStepperDotVariantExample = (): JSX.Element => (
    <ExampleShowcase sx={{ display: 'flex', justifyContent: 'center' }}>
        <MobileStepper
            activeStep={2}
            steps={5}
            leftButton={
                <Button
                    onPress={() => ({})}
                    mode="outlined"
                    style={{ width: 100, alignSelf: 'flex-start', marginRight: 8 }}
                >
                    Back
                </Button>
            }
            rightButton={
                <Button
                    onPress={() => ({})}
                    mode="contained"
                    style={{ width: 100, alignSelf: 'flex-end', marginLeft: 8 }}
                >
                    Next
                </Button>
            }
            variant={'dots'}
        />
    </ExampleShowcase>
);
