"use client";
import React from "react";
import { useState, useRef, useEffect } from "react";
import { useInView } from "react-intersection-observer";
import styles from "./Content.module.css";

const Content = ({ title, content }: { title: string; content: any }) => {
  const { ref, inView, entry } = useInView({ rootMargin: "-300px" });
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    if (loaded) {
      return;
    }
    if (inView) {
      setLoaded(true);
    }
    console.log(inView);
  }, [inView]);

  return (
    <main ref={ref}>
      <div
        className={`${styles.primary} ${
          inView || loaded ? styles.enterDone : styles.enterStart
        }`}
      >
        <h1 className={styles.title}>{title}</h1>
        <div className={styles.mainText}>{content}</div>
      </div>
    </main>
  );
};

export default Content;
