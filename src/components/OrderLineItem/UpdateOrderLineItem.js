import { useState, useEffect } from "react";
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { fetchOrderById } from "../../store/Actions/OrderAction";
import { updateOrderLineItem } from "../../store/Actions/OrderLineItemAction";
import './UpdateOrderLineItem.css';

function UpdateOrderLineItem() {

    const [id, setId] = useState("");
    const [type, setType] = useState("");
    const [quantity, setQuantity] = useState(0);
    const [material, setMaterial] = useState("");
    const [instructions, setInstructions] = useState("");
    const { itemId } = useParams();
    const dispatch = useDispatch();
    const order = useSelector(state => state.OrderReducer.order);

    useEffect(() => {
        dispatch(fetchOrderById(itemId));
    }, [dispatch, itemId]);

    // pre populate the form
    useEffect(() => {
        if (order) {
            setId(order.orderLineItem.id);
            setType(order.orderLineItem.name);
            setQuantity(order.orderLineItem.quantity);
            setMaterial(order.orderLineItem.material);
            setInstructions(order.orderLineItem.instructions);
        }
    }, [order]);

    // on submitt9ing form
    const update = () => {
        const payload = {
            id: order.orderLineItem.id,
            name: type,
            quantity: quantity,
            material: material,
            instructions: instructions
        }
        dispatch(updateOrderLineItem(payload));
    }

    // form validation
    const validateForm = () => {
        return (
            id !== "" &&
            type !== "" &&
            quantity !== "" &&
            material !== "" &&
            instructions !== ""
        );
    };

    return (
        <div className='item-container-outer'>
            <div className='item-container'>
                <h1 style={{textAlign:'center',marginBottom:'40px'}}> Update Order Item Details</h1>
                <div>
                    <label>OrderLineItem Type</label>
                    <input type="text" name="Name" value={type}
                        onChange={event => setType(event.target.value)} />
                </div>
                <div>
                    <label>OrderLineItem Quantity</label>
                    <input type="number" min={1} name="Quantity" value={quantity}
                        onChange={event => setQuantity(event.target.value)} />
                </div>
                <div>
                    <label>OrderLineItem Material</label>
                    <input type="text" name="Material" value={material}
                        onChange={event => setMaterial(event.target.value)} />
                </div>
                <div>
                    <label>OrderLineItem Instructions</label>
                    <input type="text" name="Instructions" value={instructions}
                        onChange={event => setInstructions(event.target.value)} />
                </div>
                <button className='item-form-button' onClick={update} disabled={!validateForm()}>Update</button>
            </div>
        </div>
    )
}

export default UpdateOrderLineItem;