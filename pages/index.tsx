import React from 'react';
import { motion } from 'framer-motion';

export default function Home() {
  return (
    <>
      <header>
        <title>FreshSip - Premium Cold-Pressed Juices</title>
        <meta name="description" content="Stay refreshed with FreshSip - natural, cold-pressed juices delivered to your door." />
      </header>

      <main className="min-h-screen bg-gradient-to-br from-green-100 to-green-50 flex flex-col items-center justify-between p-6">
        <motion.header 
          initial={{ y: -50, opacity: 0 }} 
          animate={{ y: 0, opacity: 1 }} 
          transition={{ duration: 0.6 }}
          className="w-full max-w-6xl flex justify-between items-center py-6">
          <h1 className="text-3xl font-bold text-green-700">FreshSip</h1>
          <nav className="space-x-6 hidden md:flex">
            <a href="#about" className="text-green-700 hover:underline">About</a>
            <a href="#products" className="text-green-700 hover:underline">Products</a>
            <a href="#contact" className="text-green-700 hover:underline">Contact</a>
          </nav>
        </motion.header>

        <motion.section
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mt-12 md:mt-20">
          <h2 className="text-4xl md:text-6xl font-bold text-green-800 leading-tight">Sip Nature, Live Fresh</h2>
          <p className="mt-4 text-green-600 text-lg md:text-xl max-w-xl mx-auto">
            Premium cold-pressed juices made from organic fruits & veggies. Delivered fresh, straight to your doorstep.
          </p>
          <motion.div whileHover={{ scale: 1.05 }}>
            <button className="mt-6 text-white bg-green-600 hover:bg-green-700 px-6 py-3 rounded-xl text-lg">
              Order Now
            </button>
          </motion.div>
        </motion.section>

        <motion.section 
          id="about" 
          initial={{ opacity: 0 }} 
          whileInView={{ opacity: 1 }} 
          transition={{ duration: 0.8 }} 
          viewport={{ once: true }}
          className="w-full max-w-4xl mt-24 text-center">
          <h3 className="text-2xl md:text-3xl font-semibold text-green-700 mb-4">Why FreshSip?</h3>
          <p className="text-green-600 text-md md:text-lg">
            We believe in nourishing your body with the power of nature. Our juices are free from preservatives, made fresh daily, and packed with nutrients to energize your day.
          </p>
        </motion.section>

        <motion.section 
          id="products" 
          initial="hidden" 
          whileInView="visible" 
          viewport={{ once: true }} 
          variants={{
            hidden: {},
            visible: {
              transition: {
                staggerChildren: 0.2
              }
            }
          }}
          className="w-full max-w-6xl mt-24 grid grid-cols-1 md:grid-cols-3 gap-8 text-center">

          {[{
            name: "Green Detox",
            desc: "Cucumber, Kale, Apple, Lemon"
          }, {
            name: "Sunshine Boost",
            desc: "Carrot, Orange, Ginger"
          }, {
            name: "Berry Bliss",
            desc: "Strawberry, Blueberry, Beetroot"
          }].map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="bg-white p-6 rounded-xl shadow hover:shadow-lg transition">
              <h4 className="text-xl font-bold text-green-800">{item.name}</h4>
              <p className="text-green-600 mt-2">{item.desc}</p>
            </motion.div>
          ))}
        </motion.section>

        <motion.section 
          id="contact" 
          initial={{ opacity: 0, y: 20 }} 
          whileInView={{ opacity: 1, y: 0 }} 
          transition={{ duration: 0.8 }} 
          viewport={{ once: true }}
          className="w-full max-w-4xl mt-24 text-center mb-16">
          <h3 className="text-2xl md:text-3xl font-semibold text-green-700 mb-4">Get in Touch</h3>
          <p className="text-green-600 mb-4">Have questions or want to partner with us? We'd love to hear from you!</p>
          <motion.div whileHover={{ scale: 1.05 }}>
            <button className="bg-green-600 text-white hover:bg-green-700 px-5 py-3 rounded-xl">
              Contact Us
            </button>
          </motion.div>
        </motion.section>

        <footer className="text-green-600 text-sm text-center py-4 w-full border-t border-green-100">
          &copy; {new Date().getFullYear()} FreshSip. All rights reserved.
        </footer>
      </main>
    </>
  );
}
