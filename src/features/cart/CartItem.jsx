import { formatCurrency } from '../../utils/helpers'
import DeleteItem from './DeleteItem'

// eslint-disable-next-line react/prop-types
function CartItem({ item }) {
    // eslint-disable-next-line react/prop-types
    const { pizzaId, name, quantity, totalPrice } = item

    return (
        <li className="py-3 sm:flex sm:items-center sm:justify-between">
            <p className="mb-1 sm:mb-0">
                {quantity}&times; {name}
            </p>
            <div className="flex items-center justify-between sm:gap-6">
                <p className="text-sm font-bold">
                    {formatCurrency(totalPrice)}
                </p>
                <DeleteItem pizzaId={pizzaId} />
            </div>
        </li>
    )
}

export default CartItem
