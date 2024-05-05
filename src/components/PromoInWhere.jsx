import React, { useState } from 'react';
import AddressBox from './AddressBox';

function PromoInWhere() {
    const [addressValue, setAddressValue] = useState('Chưa có vị trí...');

    return (
        <>
            <div className="container-sm md:min-h-fit min-h-[400px] flex flex-wrap items-end">
                <AddressBox setAddressValue={setAddressValue} />
                <h2 className="text-2xl font-bold">Ưu đãi GrabFood tại <span className="text-green-500">{addressValue}</span></h2>
            </div>
        </>
    );
}

export default PromoInWhere;
