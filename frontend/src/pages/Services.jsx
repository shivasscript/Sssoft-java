function Services() {
  return (
    <div className="page services">
      <h1>Our Services</h1>
      <div className="services-grid">
        {[
          {
            title: "Data Analytics",
            description: "Data-Driven Insights: Unleashing the Power of Analytics",
            icon: "🧮",
          },
          {
            title: "DevOps",
            description:
              "Building a Bridge between Development and IT Operations: The DevOps Approach",
            icon: "🔧",
          },
          {
            title: "Software Development",
            description:
              "Transforming Your Ideas into Reality: The Art of Software Development",
            icon: "💻",
          },
          {
            title: "Cloud",
            description:
              "Unleashing the Power of Cloud Services: Revolutionizing the Way We Work and Store Data",
            icon: "☁️",
          },
          {
            title: "UI/UX",
            description:
              "Designing for the User: Elevating Your Product Experience",
            icon: "🎨",
          },
          {
            title: "IT Consulting",
            description:
              "Connecting Top Tech Talent with Leading Companies: IT Consulting Made Easy",
            icon: "📊",
          },
        ].map((service, index) => (
          <div key={index} className="card">
            <div className="icon">{service.icon}</div>
            <h3>{service.title}</h3>
            <p>{service.description}</p>
            <button className="read-more">READ MORE</button>
          </div>
        ))}
      </div>
    </div>
    
  );
}

export default Services;