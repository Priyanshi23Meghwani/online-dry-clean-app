import { useState, useEffect } from "react";
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { fetchOrderById } from "../../store/Actions/OrderAction";
import { updateOrderLineItem } from "../../store/Actions/OrderLineItemAction";

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

    useEffect(() => {
        if (order) {
            setId(order.orderLineItem.id);
            setType(order.orderLineItem.name);
            setQuantity(order.orderLineItem.quantity);
            setMaterial(order.orderLineItem.material);
            setInstructions(order.orderLineItem.instructions);
        }
    }, [order]);

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

        <div>
            <h1> Update OrderLine Item if Order Status is pending</h1>
            <div>
                <label>OrderLineItem Type</label>
                <input type="text" name="Name" value={type}
                    onChange={event => setType(event.target.value)} />
            </div>
            <div>
                <label>OrderLineItem Quantity</label>
                <input type="number" name="Quantity" value={quantity}
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
            <button onClick={update} disabled={!validateForm()}>Update</button>
        </div>
    )
}

export default UpdateOrderLineItem;