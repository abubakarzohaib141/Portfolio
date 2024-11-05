"use client";
import React from 'react';
import abzs from '/public/abzs.jpg';
import Image from 'next/image';
import { Button } from './button';
import { motion } from 'framer-motion';

const AboutMe = () => {
  return (
    <div className="flex flex-col-reverse lg:flex-row items-center lg:items-start lg:justify-between px-4 lg:px-10 py-10">
      <motion.div
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1, ease: 'easeOut' }}
        className="mt-6 lg:mt-0 lg:w-1/2"
      >
        <br /><br /><br /><br /><br />
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight">
          About Me
        </h1>
        <p className="leading-7 mt-4 sm:mt-6">
        I&apos;m Abu Bakar Software Wala, a frontend developer, AI developer, and custom GPT creator. My skills include HTML, CSS, TypeScript, Next.js, Node.js, Sanity, Stripe, ShadCN UI, LangChain, LangGraph, Python, and Streamlit. I&apos;ve worked on a variety of projects, including a RAG (Retrieval-Augmented Generation) system using LangChain, Python, and Streamlit; a comprehensive e-commerce platform with Next.js, Sanity, Stripe, and ShadCN UI; and a dynamic portfolio created with Next.js, ShadCN, and Framer Motion. I also specialize in creating custom GPTs, blending AI capabilities with real-world applications to deliver unique, powerful solutions. 



Linkedin-Profile: https://www.linkedin.com/in/abu-bakar-software-wala-220ab8326/

Facebook-Profile: https://www.facebook.com/profile.php?id=100095211904951

Github-Profile : https://github.com/abubakarzohaib141

Portfolio-Link  : https://abubakar9.vercel.app/
        </p>
      
      </motion.div>

      <motion.div
        initial={{ opacity: 0, x: 50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1, ease: 'easeOut' }}
        className="lg:w-1/2 lg:ml-10"
      >
        <Image
          src={abzs}
          alt="Hero Image"
          
          className="w-full sm:w-3/4 float-right md:w-2/3  rounded-2xl lg:w-72"
        />
      </motion.div>
    </div>
  );
};

export default AboutMe;
