import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { getShops } from '../redux/actions/shops';

function Aboutus() {
    const shops = useSelector((state)=> state.shops);
    const dispatch = useDispatch();

    useEffect(()=>{
        dispatch(getShops());
    })

    return (
        <div className='mt-5'>
            <h1>Aboutus</h1>
            {console.log(shops)}
        </div>
    );
}

export default Aboutus;