"use client"
import { useEffect } from 'react'
import { Instagram, Linkedin, Github, Mail } from 'lucide-react' // Import Mail icon

// Updated navigation array with the Mail icon for email
const navigation = [
  {
    name: 'Instagram',
    href: 'https://www.instagram.com',
    icon: Instagram, // Use Lucide Instagram icon
  },
  {
    name: 'LinkedIn',
    href: 'https://www.linkedin.com/in/varunmathur2005',
    icon: Linkedin, // Use Lucide LinkedIn icon
  },
  {
    name: 'GitHub',
    href: 'https://github.com/varunmathur2005',
    icon: Github, // Use Lucide GitHub icon
  },
  {
    name: 'Email',
    href: 'mailto:varunmathur2005@outlook.com',
    icon: Mail, // Use Lucide Mail icon
  },
]

export default function Footer() {
  useEffect(() => {
    const footer = document.getElementById('footer')
    const icons = footer?.querySelectorAll('.social-icon')

    const handleAnimation = () => {
      // Remove animation class before re-adding
      icons?.forEach((icon) => {
        icon.classList.remove('animate-highlight')
      })

      // Add animation class with a delay for each icon
      icons?.forEach((icon, index) => {
        setTimeout(() => {
          icon.classList.add('animate-highlight')
        }, index * 100) // Stagger the animations
      })
    }

    // Scroll handler to trigger animation when the footer is in view
    const handleScroll = () => {
      if (footer?.getBoundingClientRect().top! <= window.innerHeight) {
        handleAnimation()
      }
    }

    // Click event to always trigger animation
    const handleClick = () => {
      footer?.scrollIntoView({ behavior: 'smooth' })
      handleAnimation()
    }

    window.addEventListener('scroll', handleScroll)
    document.getElementById('contact')?.addEventListener('click', handleClick) // Assuming your "Contact" link has the ID 'contact'

    return () => {
      window.removeEventListener('scroll', handleScroll)
      document.getElementById('contact')?.removeEventListener('click', handleClick)
    }
  }, [])

  return (
    <footer id='footer' className='py-8'>
      <div className='container max-w-3xl'>
        <div className='md:flex md:items-center md:justify-between'>
          <div className='flex justify-center space-x-6 md:order-2'>
            {navigation.map((item) => (
              <a
                key={item.name}
                href={item.href}
                target='_blank'
                rel='noreferrer noopener'
                className='text-muted-foreground hover:text-foreground social-icon'
              >
                <span className='sr-only'>{item.name}</span>
                <item.icon className='h-5 w-5' aria-hidden='true' />
              </a>
            ))}
          </div>
          <div className='mt-8 md:order-1 md:mt-0'>
            <p className='text-center text-xs leading-5 text-muted-foreground'>
              &copy; {new Date().getFullYear()} Varun Mathur. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}
