import { useState } from "react"
import type { MenuItem, OrderItem } from "../types";



const useOrder = () => {

    const [order, setOrder] = useState<OrderItem[]>([]);
    const [tip, setTip] = useState(0)

    const addItem = (item: MenuItem) => {
        const itemExist = order.find(OrderItem => OrderItem.id === item.id);
        if(itemExist) {
            const updateOrder = order.map(orderItem => orderItem.id === item.id ? 
                {...orderItem, quantity: orderItem.quantity +1 } : orderItem)
                setOrder(updateOrder);
        }else {
            const newItem = {...item, quantity:1}
            setOrder([...order, newItem]);
        }
    }

    const removeItem = (id:MenuItem['id']) => {
        const newOrder = order.filter(item => item.id !== id);
        setOrder(newOrder);
    }

    const placeOrder = () => {
        setOrder([])
        setTip(0)
    }

    return {
        order,
        tip,
        setTip,
        addItem,
        removeItem,
        placeOrder
    }


}

export default useOrder