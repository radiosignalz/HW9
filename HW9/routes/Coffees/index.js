import React, {useEffect,} from 'react';
import {Button, } from "react-bootstrap";
import {getRandomCoffees} from "../../store/coffees/action";

import {Loader} from '../../components/Loader'
import {Error} from '../../components/Error'
import {useDispatch, useSelector} from "react-redux";
import {Figure} from "../../components/Figure"


import {coffeesSelectors} from "../../store/coffees/selector";



export const Coffees = () => {

    const dispatch=useDispatch();


    const isError=useSelector(coffeesSelectors.getCoffeesError)
    const isLoading=useSelector(coffeesSelectors.getCoffeesLoading)
    const data=useSelector(coffeesSelectors.getCoffeesData)




    const getData= ()=> dispatch(getRandomCoffees);

    useEffect(()=>{
        getData();
    },[]);



    return (

        <div>
            <h1>HW8</h1>



            {
              !isError &&  <Button onClick={getData} disabled={isLoading}>Next</Button>
            }


            {
                isError && <Error reload={getData}/>
            }
            {
                isLoading && <Loader/>
            }
            {
                !isLoading && data && <Figure {...data}/>
            }


        </div>

    );
};
