import React, {Fragment} from 'react';
import Script from "next/script";

const ItnLayout = ({  children,
                   }: Readonly<{
    children: React.ReactNode;
}>) => {
    return (
        <Fragment>
            {children}
            <Script src={`https://api-maps.yandex.ru/2.1/?apikey=${process.env.YANDEX_GEOCODER_API_KEY}&lang=ru_RU&load=Geolink`} />
        </Fragment>
    );
}

export default ItnLayout;
