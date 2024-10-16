import { MenuItem, OrderItem } from "../types"
import { formatCurrency } from '../helpers/index';

type OrderContentProps = {
    order: OrderItem[],
    removeItem: (id:MenuItem['id']) => void
}

const OrderContent = ({order, removeItem}:  OrderContentProps) => {

    return (
        <div>
            <h2 className='font-black text-4xl'>Consumo</h2>
            <div className="space-y-3 mt-10">
                {order.length === 0 ?
                <p>No hay pedidos</p>
                :(
                    order.map(item => (
                        <div key={item.id} className="flex justify-between items-center border-t border-gray-600 py-5 last-of-type:border-b">
                                <div>
                                <p className="text-lg">
                                    {item.name} - {formatCurrency(item.price)}
                                </p>
                                <p className="font-black">
                                    Cantidad: {item.quantity} -{formatCurrency(item.price * item.quantity)}
                                </p>
                            </div>
                            <button 
                            className="bg-red-600 h-6 w-6 rounded-full text-white font-black"
                            onClick={() => removeItem(item.id)}>
                                X
                            </button>
                        </div>
                    ))             
                )}
            </div>

        </div>
    )
}

export default OrderContent