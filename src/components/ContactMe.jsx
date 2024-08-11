import React, {useState} from 'react'

function ContactMe() {

    const [formData, setFormData] = useState({
      name: '',
      email: '',
      subject: '',
      message: ''
    });
  
    const handleChange = (e) => {
      setFormData({ ...formData, [e.target.name]: e.target.value });
    };
  
    const handleSubmit = (e) => {
      e.preventDefault();
      console.log('Form submitted:', formData);
      // Reset form after submission
      setFormData({ name: '', email: '', subject: '', message: '' });
    };

  return (
    <div className="bg-blue-50 min-h-screen flex items-center justify-center p-4" id='contact'>
      <div className="rounded-lg shadow-lg p-8 max-w-2xl w-full">
        <h2 className="text-3xl font-bold text-center text-gray-800 mb-8">Get In Touch</h2>
        <form onSubmit={handleChange} action="https://api.web3forms.com/submit" method="POST" className="space-y-6 ">
          <div>
            <input type="hidden" name="access_key" value="94edc473-e6c9-4d18-aa9d-2b3ab09514be"></input>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Your Name"
              className="w-full px-4 py-3 rounded-full border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
          </div>
          <div className="relative">
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Your Email"
              className="w-full px-4 py-3 rounded-full border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
            <span className="absolute right-4 top-1/2 transform -translate-y-1/2">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-green-500" viewBox="0 0 20 20" fill="currentColor">
                <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
              </svg>
            </span>
          </div>
          <div>
            <input
              type="text"
              name="subject"
              value={formData.subject}
              onChange={handleChange}
              placeholder="Subject"
              className="w-full px-4 py-3 rounded-full border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
          </div>
          <div>
            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              placeholder="Your Message"
              rows="4"
              className="w-full px-4 py-3 rounded-3xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 resize-none"
              required
            ></textarea>
          </div>
          <button
            type="submit"
            className="w-full bg-blue-600 text-white font-semibold py-3 rounded-full hover:bg-blue-700 transition duration-300"
          >
            Send Message
          </button>
        </form>
      </div>
    </div>
);
}

export default ContactMe;
