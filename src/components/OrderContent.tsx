import { OrderItem } from "../types"
import { formatCurrency } from '../helpers/index';

type OrderContentProps = {
    order: OrderItem[]
}

const OrderContent = ({order}:  OrderContentProps) => {

    return (
        <div>
            <h2 className='font-black text-4xl'>Consumo</h2>
            <div className="space-y-3 mt-5">
                {order.length === 0 ?
                <p>No hay pedidos</p>
                :(
                    order.map(item => (
                        <div key={item.id}>
                            <p>
                                {item.name} - {formatCurrency(item.price)}
                            </p>
                        </div>
                    ))             
                )}
            </div>

        </div>
    )
}

export default OrderContent