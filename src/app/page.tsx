import Image from 'next/image'
import {Button} from '@nextui-org/button'

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <h1>hello World!</h1>
      <div>
        <Button>Click me</Button>
      </div>
    </main>
  )
}
