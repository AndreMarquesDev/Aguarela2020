import { useRouter } from 'next/router';
import { useEffect } from 'react';

const Custom404 = (): JSX.Element | null => {
    const router = useRouter();

    useEffect(() => {
        router.replace('/');
    });

    return null;
};

export default Custom404;
