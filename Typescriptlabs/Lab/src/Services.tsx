const Services = () => {
  const services: string[] = ["Web Development", "App Development", "UI/UX Design"]
  
  return (
    <div>
      <h1>Our Services</h1>
      <ul>
        {services.map((service, idx) => (
          <li key={idx}>{service}</li>
        ))}
      </ul>
      <img src="https://via.placeholder.com/400" alt="Services" />
    </div>
  )
}

export default Services
