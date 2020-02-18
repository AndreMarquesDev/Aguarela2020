import React, { FC } from 'react';
import genericStyles from './genericStyles';
import resetNormalizeCSS from './resetNormalize';
import typography, {
    acumin, acuminItalic, acuminBold, champagne, champagneItalic, champagneBold,
} from './typography';

const GeneralStyles: FC = () => (
    <>
        <style global jsx>
            {resetNormalizeCSS}
        </style>
        <style global jsx>
            {genericStyles}
        </style>
        <style global jsx>
            {typography}
        </style>
        <style global jsx>
            {acumin}
        </style>
        <style global jsx>
            {acuminBold}
        </style>
        <style global jsx>
            {acuminItalic}
        </style>
        <style global jsx>
            {champagne}
        </style>
        <style global jsx>
            {champagneBold}
        </style>
        <style global jsx>
            {champagneItalic}
        </style>
    </>
);

export default GeneralStyles;
