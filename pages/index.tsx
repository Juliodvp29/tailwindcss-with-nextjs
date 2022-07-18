import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import Notification from '../components/Notification/index'
const Home: NextPage = () => {
  return (
    <>
    <Notification/>
     <br/>
    <button className='bg-white px-4 py-2 rounded shadow-xl focus:ring hover:bg-blue-100'>The best Button</button>
    </>
  )
}

export default Home
