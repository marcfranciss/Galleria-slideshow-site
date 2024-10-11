import { ReactNode } from "react";
import { useInView } from "react-intersection-observer";

interface FadeInProps {
  children: ReactNode;
}

export const FadeIn = ({ children }: FadeInProps) => {
  const { ref, inView } = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });
  return (
    <div ref={ref} className={inView ? "fade-in" : "fade-out"}>
      {children}
    </div>
  );
};
