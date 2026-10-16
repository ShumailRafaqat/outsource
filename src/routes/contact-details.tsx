import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/contact-details')({
  component: RouteComponent,
})

function RouteComponent() {
  return <div>Hello "/contact-details"!</div>
}
