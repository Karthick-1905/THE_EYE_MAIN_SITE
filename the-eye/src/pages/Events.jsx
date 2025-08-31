import React from 'react';
import InfiniteMenu from '../components/ui/InfiniteMenu';
import '../css/Events.css';

// Featured events for the 3D portal menu
const featuredEvents = [
  {
    image: 'https://images.unsplash.com/photo-1550751827-4bd374c3f58b?w=500&h=500&fit=crop&q=80',
    link: '/events/cyber-conquest',
    title: 'Cyber Conquest CTF',
    description: 'National level CTF competition'
  },
  {
    image: 'https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?w=500&h=500&fit=crop&q=80',
    link: '/events/hack-workshop',
    title: 'Web Exploitation',
    description: 'Advanced XSS & SQLi techniques'
  },
  {
    image: 'https://images.unsplash.com/photo-1563986768494-4dee2763ff3f?w=500&h=500&fit=crop&q=80',
    link: '/events/reverse-engineering',
    title: 'Reverse Engineering',
    description: 'Binary analysis & malware research'
  },
  {
    image: 'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=500&h=500&fit=crop&q=80',
    link: '/events/bug-bounty',
    title: 'Bug Bounty Bootcamp',
    description: 'Hunt vulnerabilities like a pro'
  },
  {
    image: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=500&h=500&fit=crop&q=80',
    link: '/events/forensics',
    title: 'Digital Forensics',
    description: 'Memory analysis & incident response'
  },
  {
    image: 'https://images.unsplash.com/photo-1633356122544-f134324a6cee?w=500&h=500&fit=crop&q=80',
    link: '/events/blockchain',
    title: 'Blockchain Security',
    description: 'Smart contract auditing workshop'
  }
];



export const Events = () => {
  return (
    <div className="pt-40" style={{ minHeight: '100vh' }}>
      
      {/* White Animated Title */}
      <div className="events-title-container">
        <div className="events-title-track">
          <h1 className="events-main-title">
            THE EYE - EVENTS & WORKSHOPS • THE EYE - EVENTS & WORKSHOPS • THE EYE - EVENTS & WORKSHOPS • THE EYE - EVENTS & WORKSHOPS • 
          </h1>
          <h1 className="events-main-title" aria-hidden="true">
            THE EYE - EVENTS & WORKSHOPS • THE EYE - EVENTS & WORKSHOPS • THE EYE - EVENTS & WORKSHOPS • THE EYE - EVENTS & WORKSHOPS • 
          </h1>
        </div>
      </div>

      {/* 3D Portal Menu Section */}
      <section className="events-portal" style={{ marginTop: '80px', height: '700px', position: 'relative' }}>
        <InfiniteMenu items={featuredEvents} />
        <div className="portal-overlay"></div>
      </section>
      
    </div>
  );
};
