"use client"

import {Button, ButtonGroup} from "@nextui-org/button";
import { useRouter } from 'next/navigation'

export default function Home() {
  const router = useRouter()

  return (
    <div><span>Hello World!</span>
    <Button color="primary" onPress={() => router.push('/movies')}>
      Button
    </Button></div>
    
  );
}
