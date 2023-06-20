import React from 'react';
import Image from 'next/image';
import html5 from '../images/html5.png';
import css from '../images/css.png';
import tailwind from '../images/tailwind.png';
import github from '../images/github.png';
import php from '../images/php.png';
import vue from '../images/vue.png';
import vuetify from '../images/vuetify.png';
import js from '../images/js.png';
import mongodb from '../images/mongodb.png';
import laravel from '../images/laravel.png';
import node from '../images/nodejs.png';
import react from '../images/React.png';
import next from '../images/nextjs.png';
import python from '../images/python.png';
import vite from '../images/vite.png';
import mysql from '../images/mysql.png';

const Skills = () => {
  return (
    <div id="skills" className="pt-50 w-full lg:h-screen p-2">
      <div className="max-w-[1240px] mx-auto flex-col justfy-center h-full">
        <p className="text-xl tracking-widest uppercase text-[#5651e5] ">
          Skills
        </p>
        <h2 className="py-4">What I Can Do</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300">
            <div className="grid grid-cols-2 gap-4 justify-center items-center">
              <div className="a-auto">
                <Image src={html5} width="64" height="64" alt="/" />
              </div>
              <div className="flex flex-col itm">
                <h3>HTML</h3>
              </div>
            </div>
          </div>
          <div className="p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300">
            <div className="grid grid-cols-2 gap-4 justify-center items-center">
              <div className="a-auto">
                <Image src={css} width="64" height="64" alt="/" />
              </div>
              <div className="flex flex-col itm">
                <h3>CSS</h3>
              </div>
            </div>
          </div>
          <div className="p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300">
            <div className="grid grid-cols-2 gap-4 justify-center items-center">
              <div className="a-auto">
                <Image src={tailwind} width="64" height="64" alt="/" />
              </div>
              <div className="flex flex-col itm">
                <h3>Tailwind</h3>
              </div>
            </div>
          </div>
          <div className="p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300">
            <div className="grid grid-cols-2 gap-4 justify-center items-center">
              <div className="a-auto">
                <Image src={js} width="64" height="64" alt="/" />
              </div>
              <div className="flex flex-col itm">
                <h3>Javascript</h3>
              </div>
            </div>
          </div>
          <div className="p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300">
            <div className="grid grid-cols-2 gap-4 justify-center items-center">
              <div className="a-auto">
                <Image src={php} width="64" height="64" alt="/" />
              </div>
              <div className="flex flex-col itm">
                <h3>Php</h3>
              </div>
            </div>
          </div>
          <div className="p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300">
            <div className="grid grid-cols-2 gap-4 justify-center items-center">
              <div className="a-auto">
                <Image src={node} width="64" height="64" alt="/" />
              </div>
              <div className="flex flex-col itm">
                <h3>Node</h3>
              </div>
            </div>
          </div>
          <div className="p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300">
            <div className="grid grid-cols-2 gap-4 justify-center items-center">
              <div className="a-auto">
                <Image src={react} width="64" height="64" alt="/" />
              </div>
              <div className="flex flex-col itm">
                <h3>React</h3>
              </div>
            </div>
          </div>
          <div className="p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300">
            <div className="grid grid-cols-2 gap-4 justify-center items-center">
              <div className="a-auto">
                <Image src={next} width="64" height="64" alt="/" />
              </div>
              <div className="flex flex-col itm">
                <h3>Next js</h3>
              </div>
            </div>
          </div>
          <div className="p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300">
            <div className="grid grid-cols-2 gap-4 justify-center items-center">
              <div className="a-auto">
                <Image src={laravel} width="64" height="64" alt="/" />
              </div>
              <div className="flex flex-col itm">
                <h3>Laravel</h3>
              </div>
            </div>
          </div>
          <div className="p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300">
            <div className="grid grid-cols-2 gap-4 justify-center items-center">
              <div className="a-auto">
                <Image src={vue} width="64" height="64" alt="/" />
              </div>
              <div className="flex flex-col itm">
                <h3>Vue js</h3>
              </div>
            </div>
          </div>
          <div className="p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300">
            <div className="grid grid-cols-2 gap-4 justify-center items-center">
              <div className="a-auto">
                <Image src={vuetify} width="64" height="64" alt="/" />
              </div>
              <div className="flex flex-col itm">
                <h3>Vuetify</h3>
              </div>
            </div>
          </div>
          <div className="p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300">
            <div className="grid grid-cols-2 gap-4 justify-center items-center">
              <div className="a-auto">
                <Image src={python} width="64" height="64" alt="/" />
              </div>
              <div className="flex flex-col itm">
                <h3>Python</h3>
              </div>
            </div>
          </div>
          <div className="p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300">
            <div className="grid grid-cols-2 gap-4 justify-center items-center">
              <div className="a-auto">
                <Image src={mongodb} width="64" height="64" alt="/" />
              </div>
              <div className="flex flex-col itm">
                <h3>Mongo DB</h3>
              </div>
            </div>
          </div>
          <div className="p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300">
            <div className="grid grid-cols-2 gap-4 justify-center items-center">
              <div className="a-auto">
                <Image src={mysql} width="64" height="64" alt="/" />
              </div>
              <div className="flex flex-col itm">
                <h3>MySQL</h3>
              </div>
            </div>
          </div>
          <div className="p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300">
            <div className="grid grid-cols-2 gap-4 justify-center items-center">
              <div className="a-auto">
                <Image src={github} width="64" height="64" alt="/" />
              </div>
              <div className="flex flex-col itm">
                <h3>Github</h3>
              </div>
            </div>
          </div>
          <div className="p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300">
            <div className="grid grid-cols-2 gap-4 justify-center items-center">
              <div className="a-auto">
                <Image src={vite} width="64" height="64" alt="/" />
              </div>
              <div className="flex flex-col itm">
                <h3>Vite</h3>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;
