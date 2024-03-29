import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllServices } from "../../store/Actions/ServiceActions";
import './getAllServices.css';
import image from '../../assets/pickup.jpeg';
import drop from '../../assets/dropoff.jpg';
import both from '../../assets/Both.jpg';

function GetAllServices() {

    const services = useSelector(state => state.serviceReducer.services);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getAllServices());
    }, [])

    var a = 0;

    // const hy = [{
    //     name: 'PickUp',
    //     desc: '"If you are in an urgent need of laundry, we can come right at your doorstep for a pick-up."',
    //     img: image
    // },
    // {
    //     name: 'DropOff',
    //     desc: '"We ensure delivery in the quickest of the turnaround time in the industry. Superior quality of service with speed!"',
    //     img: drop
    // },
    // {
    //     name: 'PickUp+DropOff',
    //     desc: '"We have pioneered the concept of pickup and delivery in the shortest possible time. We intend keeping it that way!"',
    //     img: both
    // }]


    return (
        <div className="container" id = "services">
        <h3 style={{ textAlign: 'center', margin: '10px' , fontSize: '48px', fontWeight: 'bold'}}> Our Services</h3>
        <div className="card-columns ">
            {
                services.length > 0 &&
                services.map(i =>
                    <div className="card" style={{height:'10rem'}}> 
                        <div className="card-body text-center">
                            <h2>{i.id}</h2>
                            <h5 className="card-title">{i.type}</h5> 
                            <p>Charges: {i.charges}/-</p>
                        </div>
                    </div>

                )
            }

        </div>
    </div >
        // <div className="container" id = "services">
        //     <h3 style={{ textAlign: 'center', margin: '10px' , fontSize: '48px', fontWeight: 'bold'}}> Our Services</h3>
        //     <div className="card-columns ">
        //         {
        //             services.length > 0 &&
        //             services.map(i =>
        //                 <div className="card" >
        //                     <img src={hy[a].img} className="card-img-top Anuj" alt={i.type}></img>
        //                     <div className="card-body text-center">
        //                         <h2>{i.id}</h2>
        //                         <h5 className="card-title">{hy[a].name}</h5>
        //                         <p>{hy[a++].desc}</p>
        //                         <p>Charges: {i.charges}/-</p>
        //                     </div>
        //                 </div>

        //             )
        //         }

        //     </div>
        // </div >
    )
}


export default GetAllServices;