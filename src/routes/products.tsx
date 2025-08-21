import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/products')({
  component: Products,
})

export default function Products() {
  return <div className="p-2">Hello from About!</div>
}