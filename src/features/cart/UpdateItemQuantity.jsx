import { useDispatch } from 'react-redux'
import { decreaseItemQuantity, increaseItemQuantity } from './cartSlice'
import Button from '../../ui/Button'

// eslint-disable-next-line react/prop-types
export default function UpdateItemQuantity({ pizzaid, currentQuantity }) {
    const dispatch = useDispatch()
    return (
        <div className="flex items-center gap-1 md:gap-3">
            <Button
                type="round"
                onClick={() => dispatch(decreaseItemQuantity(pizzaid))}
            >
                -
            </Button>
            <span className="text-sm font-medium">{currentQuantity}</span>
            <Button
                type="round"
                onClick={() => dispatch(increaseItemQuantity(pizzaid))}
            >
                +
            </Button>
        </div>
    )
}
