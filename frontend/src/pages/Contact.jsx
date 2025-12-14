import { useState } from 'react';
import SectionTitle from '../components/SectionTitle';
import { sendMessage } from '../services/api';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState({ type: '', message: '' });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setStatus({ type: '', message: '' });

    try {
      await sendMessage(formData);
      setStatus({ 
        type: 'success', 
        message: 'Message sent successfully! I will get back to you soon.' 
      });
      setFormData({ name: '', email: '', subject: '', message: '' });
    } catch (error) {
      setStatus({ 
        type: 'error', 
        message: error.response?.data?.message || 'Failed to send message. Please try again.' 
      });
    } finally {
      setLoading(false);
    }
  };

  const contactInfo = [
    {
      icon: '📧',
      label: 'Email',
      value: 'Moinsalahuddin334@gmail.com',
      link: 'mailto:Moinsalahuddin334@gmail.com'
    },
    {
      icon: '📱',
      label: 'Phone',
      value: '+92 314 2131398',
      link: 'tel:03142131398'
    },
    {
      icon: '📍',
      label: 'Location',
      value: 'Lasbela Football Ground, Karachi, Pakistan',
      link: null
    },
    {
      icon: '💻',
      label: 'GitHub',
      value: 'github.com/Moinsalahuddin',
      link: 'https://github.com/Moinsalahuddin'
    },
  ];

  return (
    <div className="min-h-screen section-container">
      <SectionTitle 
        title="Get In Touch" 
        subtitle="Have a project in mind? Let's work together to bring your ideas to life"
      />

      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-2 gap-8">
          {/* Contact Information */}
          <div>
            <h3 className="text-2xl font-bold text-gray-900 mb-6">Contact Information</h3>
            <div className="space-y-6">
              {contactInfo.map((info, index) => (
                <div key={index} className="card">
                  <div className="flex items-start space-x-4">
                    <div className="text-3xl">{info.icon}</div>
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-1">{info.label}</h4>
                      {info.link ? (
                        <a
                          href={info.link}
                          target={info.link.startsWith('http') ? '_blank' : '_self'}
                          rel={info.link.startsWith('http') ? 'noopener noreferrer' : ''}
                          className="text-primary-600 hover:text-primary-700 transition-colors"
                        >
                          {info.value}
                        </a>
                      ) : (
                        <p className="text-gray-700">{info.value}</p>
                      )}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Contact Form */}
          <div>
            <h3 className="text-2xl font-bold text-gray-900 mb-6">Send a Message</h3>
            <form onSubmit={handleSubmit} className="card space-y-6">
              {status.message && (
                <div
                  className={`p-4 rounded-lg ${
                    status.type === 'success'
                      ? 'bg-green-100 text-green-800'
                      : 'bg-red-100 text-red-800'
                  }`}
                >
                  {status.message}
                </div>
              )}

              <div>
                <label htmlFor="name" className="block text-sm font-semibold text-gray-700 mb-2">
                  Name *
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent outline-none transition"
                  placeholder="Your Name"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-semibold text-gray-700 mb-2">
                  Email *
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent outline-none transition"
                  placeholder="your.email@example.com"
                />
              </div>

              <div>
                <label htmlFor="subject" className="block text-sm font-semibold text-gray-700 mb-2">
                  Subject *
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent outline-none transition"
                  placeholder="Message Subject"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-semibold text-gray-700 mb-2">
                  Message *
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows="6"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent outline-none transition resize-none"
                  placeholder="Your message here..."
                ></textarea>
              </div>

              <button
                type="submit"
                disabled={loading}
                className="btn-primary w-full disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {loading ? 'Sending...' : 'Send Message'}
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;

