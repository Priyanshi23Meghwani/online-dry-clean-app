import { useState } from "react";
import { useDispatch } from 'react-redux';
import { addOrder } from "../../store/Actions/OrderAction";
import "./AddOrder.css";

function AddOrder() {

    // Setting orderDate as today's date
    const date = new Date();
    const year = date.getFullYear();
    const month = (date.getMonth() + 1).toString().padStart(2, "0"); // Month is zero-indexed
    const day = date.getDate().toString().padStart(2, "0");
    const dateToday = `${year}-${month}-${day}`;

    // Setting minimum deleivery date as 2 days after the orderDate
    // const minDeliveryDate = `${year}-${month}-${parseInt(day)+2}`;
    // console.log(minDeliveryDate);

    const [orderDate, setOrderDate] = useState(dateToday);
    const [deliveryDate, setDeliveryDate] = useState("");
    const [service, setService] = useState("1");
    const [itemType, setItemType] = useState("");
    const [quantity, setQuantity] = useState("");
    const [material, setMaterial] = useState("");
    const [instructions, setInstructions] = useState("");

    const dispatch = useDispatch();

    // payload for the addOrder post request
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

    // form validations to check for empty values and quantity value
    const validateForm = () => {
        return (
            service &&
            itemType &&
            orderDate &&
            deliveryDate &&
            quantity &&
            Number(quantity) > 0 &&
            material &&
            instructions
        );
    };

    return (
        <div className="add-order-container-outer">

            <div className="add-order-container">
                <h2 style={{textAlign:'center'}}>Place An Order</h2>

                <div className="add-order-container-field">
                    <label className="add-order-form-label">Delivery Date</label><br />
                    <input type="date" name="DeliveryDate" value={deliveryDate}
                        onChange={event => setDeliveryDate(event.target.value)} />
                </div>

                <div className="add-order-container-field">
                    <label className="add-order-form-label">Service</label><br />
                    <select value={service} onChange={event => setService(event.target.value)}>
                        <option value="1">PickUp</option>
                        <option value="2">DropOff</option>
                        <option value="3">Both</option>
                    </select>
                </div>

                <div className="add-order-container-field">
                    <label className="add-order-form-label">Item Type</label><br />
                    <input type="text" name="ItemType" value={itemType}
                        onChange={event => setItemType(event.target.value)} />
                </div>

                <div className="add-order-container-field">
                    <label className="add-order-form-label">Quantity</label><br />
                    <input type="number" min={1} name="Quantity" value={quantity}
                        onChange={event => setQuantity(event.target.value)} />
                </div>

                <div className="add-order-container-field">
                    <label className="add-order-form-label">Material</label><br />
                    <input type="text" name="Material" value={material}
                        onChange={event => setMaterial(event.target.value)} />
                </div>

                <div className="add-order-container-field">
                    <label className="add-order-form-label">Instructions</label><br />
                    <input type="text" name="Instructions" value={instructions}
                        onChange={event => setInstructions(event.target.value)} />
                </div>

                <button className="add-order-form-button" onClick={placeOrder} disabled={!validateForm()}>Place Order</button>

            </div>
        </div>
    )
}

export default AddOrder;