import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { createContext, useEffect, useRef, useState } from 'react';
import NavBar from './components/NavBar';
import Footer from './Footer';
import { Outlet, useLocation } from 'react-router-dom';
import { ScrollTrigger } from 'gsap/all';
import { skills } from './constants';
import { databases } from './appwrite';
import { Query } from 'appwrite';

gsap.registerPlugin(useGSAP);
gsap.registerPlugin(ScrollTrigger);
export const BlogsAndPost = createContext<{
  blogs: blogsAndPostT[];
  projects: blogsAndPostT[];
}>({ blogs: [], projects: [] });

export type blogsAndPostT = {
  title: string;
  description: string;
  image: string;
  link: string;
};
export default function App() {
  const [blogs, setBlogs] = useState<blogsAndPostT[]>([]);
  const [projects, setProjects] = useState<blogsAndPostT[]>([]);

  const cursorRef = useRef(null);
  const isTouchDevice = 'ontouchstart' in window;
  const skillsTimeLine = gsap.timeline({ repeat: -1 });
  const ClimbTimeLine = gsap.timeline({ repeat: -1 });
  const skillsLevelTimeLine = gsap.timeline();
  const location = useLocation();
  const databaseID = import.meta.env.VITE_APPWRITE_DATABASE_ID ?? '';
  const collectionID = import.meta.env.VITE_APPWRITE_COLLECTION_ID ?? '';

  useGSAP(() => {
    gsap.fromTo(
      '.heroText',
      { opacity: 0, y: 10 },
      { opacity: 1, y: 0, duration: 2 }
    );
    gsap.fromTo(
      '.headings',
      { opacity: 0, y: 10 },
      {
        scrollTrigger: {
          trigger: '.headings',
          toggleActions: ' play pause resume reset',
        },
        opacity: 1,
        y: 0,
        duration: 2,
      }
    );
    gsap.fromTo('.heroPicture', { x: 20 }, { x: 0, duration: 1, ease: 'none' });
    skillsTimeLine.fromTo(
      '#rightLimbs',
      { opacity: 0.2 },
      { opacity: 1, duration: 0.4 }
    );
    skillsTimeLine.fromTo(
      '#rightLimbs',
      { opacity: 1 },
      { opacity: 0.2, duration: 0.4 }
    );

    skillsTimeLine.fromTo(
      '#leftLimbs',
      { opacity: 0.2 },
      { opacity: 1, duration: 0.4 }
    );
    skillsTimeLine.fromTo(
      '#leftLimbs',
      { opacity: 1 },
      { opacity: 0.2, duration: 0.4 }
    );

    skills.forEach((level, index) => {
      skillsLevelTimeLine.fromTo(
        `.longSkill-${2 - index}`,
        { display: 'none' },
        { display: ' block' }
      );

      skillsLevelTimeLine.fromTo(
        `.level-${2 - index}`,
        { opacity: 0 },
        { opacity: 1, display: 'flex', stagger: 1 }
      );

      skillsLevelTimeLine.to(`.longSkill-${2 - index}`, {
        display: ' none',
      });
      skillsLevelTimeLine.fromTo(
        `.largeSkill-${2 - index}`,
        { y: 10 },
        {
          y: 0,
          display: 'block',
        }
      );
      skillsLevelTimeLine.to(`.level-${2 - index}`, {
        opacity: 1,
        display: 'flex',
      });
    });

    gsap.fromTo(
      '.skill',
      {
        rotate: '0px',
      },
      {
        rotate: '10px',
        duration: 3,
        repeat: -1,
        delay: 25,
        yoyo: true,
        ease: 'elastic.inOut',
      }
    );

    ClimbTimeLine.to('#climbMan', {
      y: -300,
      duration: 21,
      ease: 'power2.in',
    });
    gsap.fromTo(
      '.folder',
      {
        y: 50,
      },
      {
        y: 0,
        duration: 1,
        stagger: 1,
        ease: 'elastic.inOut',
      }
    );
  }, [location]);

  useEffect(() => {
    const blogsRequest = databases.listDocuments(databaseID, collectionID, [
      Query.equal('isBlog', true),
    ]);
    const projectsRequest = databases.listDocuments(databaseID, collectionID, [
      Query.equal('isBlog', false),
    ]);

    blogsRequest.then(
      function (response) {
        setBlogs(response.documents as unknown as blogsAndPostT[]);
      },
      function (error) {
        console.log(error);
      }
    );
    projectsRequest.then(
      function (response) {
        setProjects(response.documents as unknown as blogsAndPostT[]);
      },
      function (error) {
        console.log(error);
      }
    );
    const cursor = cursorRef.current;
    if (isTouchDevice || !cursor) {
      return;
    }

    window.addEventListener('mousemove', (e) => {
      const { x, y } = e;
      gsap.to(cursor, {
        x: x,
        y: y,
        duration: 0.7,
        ease: 'power4',
      });
    });

    document.addEventListener('mouseleave', () => {
      gsap.to(cursor, {
        duration: 0.7,
        opacity: 0,
      });
    });
  }, []);

  return (
    <div className="w-screen h-screen bg-flame-path relative z-0 overflow-hidden">
      {/* mouseFollower */}
      <div className="w-screen  h-screen absolute z-10 overflow-hidden">
        <div
          ref={cursorRef}
          className="w-[60px] h-[60px] p-1 bg-flame rounded-full relative top-[-30px] left-[-30px]"
        ></div>
      </div>

      {/* Tiles background */}
      <div className="w-screen  h-screen absolute z-20 overflow-hidden">
        <img
          className="w-full h-full object-cover"
          src="/background.png"
          alt="background tiles"
        />
      </div>

      {/* Content */}
      <div className="w-screen  h-screen absolute z-30 text-white overflow-hidden ">
        <div className="fixed w-full z-50">
          <NavBar />
        </div>
        <main className="w-full h-full overflow-y-scroll pt-[100px]">
          <BlogsAndPost.Provider value={{ blogs, projects }}>
            <Outlet />
          </BlogsAndPost.Provider>
          <Footer />
        </main>
      </div>
    </div>
  );
}
