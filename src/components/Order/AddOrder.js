import { useState } from "react";
import { useDispatch } from 'react-redux';
import { addOrder } from "../../store/Actions/OrderAction";

function AddOrder() {

    const [orderDate, setOrderDate] = useState("");
    const [deliveryDate, setDeliveryDate] = useState("");
    const [service, setService] = useState("");
    const [itemType, setItemType] = useState("");
    const [quantity, setQuantity] = useState("");
    const [material, setMaterial] = useState("");
    const [instructions, setInstructions] = useState("");

    const dispatch = useDispatch();


    const placeOrder = () => {
        const payload = {
            orderDate: orderDate,
            deliveryDate: deliveryDate,
            paymentStatus: "Pending",
            orderStatus: "Pending",
            users: {
                id: "7"
            },
            service: {
                id: service
            },
            orderLineItem: {
                name: itemType,
                quantity: quantity,
                material: material,
                instructions: instructions
            }
        }
        console.log(payload);
        dispatch(addOrder(payload))
    }

    return (
        <div className="container">

            <div>
                <label>Order Date</label>
                <input type="date" name="OrderDate" value={orderDate}
                    onChange={event => setOrderDate(event.target.value)} />
            </div>
            <div>
                <label>Delivery Date</label>
                <input type="date" name="DeliveryDate" value={deliveryDate}
                    onChange={event => setDeliveryDate(event.target.value)} />
            </div>
            <div>
                <label>Service</label>
                <select value={service} onChange={event => setService(event.target.value)}>
                    <option value="1">PickUp</option>
                    <option value="2">DropOff</option>
                    <option value="3">Both</option>
                </select>
            </div>
            <div>
                <label>Item Type</label>
                <input type="text" name="ItemType" value={itemType}
                    onChange={event => setItemType(event.target.value)} />
            </div>
            <div>
                <label>Quantity</label>
                <input type="number" name="Quantity" value={quantity}
                    onChange={event => setQuantity(event.target.value)} />
            </div>
            <div>
                <label>Material</label>
                <input type="text" name="Material" value={material}
                    onChange={event => setMaterial(event.target.value)} />
            </div>
            <div>
                <label>Instructions</label>
                <input type="text" name="Instructions" value={instructions}
                    onChange={event => setInstructions(event.target.value)} />
            </div>
            <button onClick={placeOrder}>Place Order</button>

        </div>
    )
}

export default AddOrder;