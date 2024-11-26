import React , {useState} from 'react'
import { FaBars , FaTimes , FaGithub , FaLinkedin} from 'react-icons/fa'
import { BsFillPersonLinesFill } from 'react-icons/bs'
import Logo from '../assets/logo.png'
import { HiOutlineMail } from 'react-icons/hi'
import { Link } from 'react-scroll'
import CV from '../assets/fsResume.pdf'

const Navbar = () => {
    const [nav, setNav] = useState(false)
    const handleClick = () =>setNav(!nav)
  return (
    <div className='fixed w-full h-[80px] flex justify-between items-center px-4 bg-[#0a192f] text-gray-300 px-4'>
        <div>
            <h1 className='text-3xl font-signature ml-2 text-pink-600'>Faria</h1>
        </div>

       { /* menu*/}
        
            <ul className='hidden md:flex'>
                <li>
                <Link
                to="home"  
                smooth={true} 
                 offset={50} 
                 duration={500}>     
                Home
                </Link>
                </li>
                <li>
                <Link
                to="about"  
                smooth={true} 
                 offset={50} 
                 duration={500}>     
                About
                </Link></li>
                <li>
                <Link
                to="skills"  
                smooth={true} 
                 offset={50} 
                 duration={500}>     
                Skills
                </Link></li>
                <li>
                <Link
                to="work"  
                smooth={true} 
                 offset={50} 
                 duration={500}>     
                Work
                </Link></li>
                <li><Link
                to="contact"  
                smooth={true} 
                 offset={50} 
                 duration={500}>     
                Contact
                </Link></li>
            </ul>
        

        {/* hamburger*/}
        <div onClick={handleClick} className='md:hidden z-10'>
            {!nav ? <FaBars /> : <FaTimes />}
        </div>
        {/* Mobile menu*/}
        <ul className={!nav ? 'hidden' : 'absolute top-0 left-0 w-full h-screen bg-[#0a192f] flex flex-col justify-center items-center '}>
                <li className='py-6 text-4xl'>
                    {''}
                <Link onClick={handleClick} 
                to="home"  
                smooth={true} 
                 offset={50} 
                 duration={500}>     
                Home
                </Link>
                </li>

                <li className='py-6 text-4xl'>
                {''}
                <Link onClick={handleClick}
                to="about"  
                smooth={true} 
                 offset={50} 
                 duration={500}>     
                About
                </Link>
                </li>
                <li className='py-6 text-4xl'>
                {''}
                <Link onClick={handleClick}
                to="skills"  
                smooth={true} 
                 offset={50} 
                 duration={500}>     
                Skills
                </Link></li>
                <li className='py-6 text-4xl'>
                {''}
                <Link onClick={handleClick}
                to="work"  
                smooth={true} 
                 offset={50} 
                 duration={500}>     
                Work
                </Link></li>
                <li className='py-6 text-4xl'>
                {''}
                <Link onClick={handleClick}
                to="contact"  
                smooth={true} 
                 offset={50} 
                 duration={500}>     
                Contact
                </Link></li>  
        </ul>


        {/* social icons*/}

        <div className='hidden lg:flex flex-col fixed top-[35%] left-0' >
            <ul>
                <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-blue-600'>
                    <a className='flex justify-between items-center w-full text-gray-300' 
                    href=' https://linkedin.com/in/faria-sana-50967a245'>
                    Linkedin <FaLinkedin size={30} />
                    </a>
                </li>
                <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#333333]'>
                    <a className='flex justify-between items-center w-full text-gray-300' 
                    href='https://github.com/faria100'>
                    Github <FaGithub size={30} />
                    </a>
                </li>
                <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#6fc2b0]'>
                    <a className='flex justify-between items-center w-full text-gray-300' 
                    href='fariasana100@gmail.com'>
                    Email <HiOutlineMail size={30} />
                    </a>
                </li>
                <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#565f69]'>
                    <a className='flex justify-between items-center w-full text-gray-300' 
                    href={CV} download>
                    Resume <BsFillPersonLinesFill size={30} />
                    </a>
                </li>
            </ul>

        </div>
    </div>
  )
}

export default Navbar