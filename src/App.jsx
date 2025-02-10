import './App.css'

function App() {
  return (
    <div className="container">
      <div className="profile">
        <h1 className="name">Shubh Nawani</h1>
        <p className="title">Student @Kalvium</p>
        
        <div className="contact-info">
          <div className="contact-item">
            <span>Email:</span>
            <a href="mailto:shubhnawani@outlook.com">shubhnawani@outlook.com</a>
          </div>
          <div className="contact-item">
            <span>Phone:</span>
            <a href="tel:+9058756575">+91 9058756575</a>
          </div>
          <div className="contact-item">
            <span>Location:</span>
            <p>Dehradun, Uttarakhand</p>
          </div>
          <div className="contact-item">
            <span>GitHub:</span>
            <a href="https://github.com/shubh-nawani" target="_blank" rel="noopener">
              github.com/shubh-nawani
            </a>
          </div>
          <div className="contact-item">
            <span>LinkedIn:</span>
            <a href="https://linkedin.com/in/shubhnawani" target="_blank" rel="noopener">
              linkedin.com/in/shubhnawani
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}

export default App