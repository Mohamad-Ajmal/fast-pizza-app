import { useFetcher } from 'react-router-dom'
import Button from '../../ui/Button'
import { updateOrder } from '../../services/apiRestaurant'
export default function UpdateOrder() {
    const fetcher = useFetcher()

    return (
        // Updating data without cuasing a Nivigation
        <fetcher.Form method="PATCH" className="text-right">
            <Button type="primary">Make Priority</Button>
        </fetcher.Form>
    )
}

// eslint-disable-next-line no-unused-vars
export async function action({ request, params }) {
    const data = { priority: true }
    await updateOrder(params.orderId, data)
    return null
}
