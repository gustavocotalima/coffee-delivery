import { useEffect, useState } from 'react'
import { CoffeeCard } from '../CoffeeCard'
import { CoffeeListContainer } from './styles'

interface Coffee {
  id: number
  name: string
  price: number
  tags: string[]
  description: string
  image: string
}

export function CoffeeList() {
  const [coffees, setCoffees] = useState<Coffee[]>([])

  async function loadCoffees() {
    const response = await fetch('http://localhost:3000/coffee')
    const data = await response.json()
    setCoffees(data)
  }

  useEffect(() => {
    loadCoffees()
  }, [])

  return (
    <CoffeeListContainer>
      <h2>Nossos Cafés</h2>
      {coffees.map((coffee) => (
        <CoffeeCard
          key={coffee.id}
          description={coffee.description}
          name={coffee.name}
          price={coffee.price}
          tags={coffee.tags}
          image={coffee.image}
        />
      ))}
    </CoffeeListContainer>
  )
}
