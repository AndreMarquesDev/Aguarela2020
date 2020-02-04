import React, { FC } from 'react';
import genericStyles from './genericStyles';
import normalizeCSS from './normalize';
import typography, {
    acumin, acuminItalic, acuminBold, champagne, champagneItalic, champagneBold,
} from './typography';

const GeneralStyles: FC = () => (
    <>
        <style global jsx>
            {normalizeCSS}
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
