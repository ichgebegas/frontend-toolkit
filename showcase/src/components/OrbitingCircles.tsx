import { Children, type CSSProperties, type ReactNode } from "react";

interface OrbitingCirclesProps {
  children: ReactNode;
  radius: number;
  reverse?: boolean;
  speed?: number;
}

export function OrbitingCircles({
  children,
  radius,
  reverse = false,
  speed = 1,
}: OrbitingCirclesProps) {
  const items = Children.toArray(children);

  return (
    <span className="orbit-ring" data-radius={radius}>
      <svg aria-hidden="true" className="orbit-path" viewBox="0 0 1500 1100">
        <circle cx="750" cy="550" r={radius} />
      </svg>
      {items.map((child, index) => {
        const angle = (360 / items.length) * index;
        const style = {
          "--angle": angle,
          "--duration": 20 / speed,
          "--radius": radius,
        } as CSSProperties;

        return (
          <span
            className={`orbit-emblem${reverse ? " orbit-emblem--reverse" : ""}`}
            key={index}
            style={style}
          >
            {child}
          </span>
        );
      })}
    </span>
  );
}
