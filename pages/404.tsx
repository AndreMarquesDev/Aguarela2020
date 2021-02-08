import { FC, useEffect } from 'react';
import { useRouter } from 'next/router';

const Custom404: FC = () => {
    const router = useRouter();

    useEffect(() => {
        router.replace('/');
    });

    return null;
};

export default Custom404;
