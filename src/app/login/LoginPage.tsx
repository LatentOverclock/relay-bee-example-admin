import { LoginForm, useRouter } from 'relay-bee'

export default function LoginPage() {
  const { router } = useRouter()

  return (
    <div className="page">
      <h1>Login</h1>
      <p>Uses relay-bee LoginForm and redirects to / after success.</p>
      <LoginForm onSuccess={() => router.push('/')} />
    </div>
  )
}
