import imgGrande from '../../assets/grande.jpg'

const FinalCard = () => {
  return (
    <div>
      <img src={ imgGrande } alt={"1"} className="w-full h-auto" />
      <div className="absolute inset-0 flex justify-center items-center">
        <p className="text-white text-lg font-bold">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Molestiae quas voluptas amet, inventore quia asperiores expedita ut et distinctio accusamus, eveniet id mollitia error quos officiis, minus eum accusantium. Voluptatum!</p>
      </div>
    </div>
  )
}

export default FinalCard
