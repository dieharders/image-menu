import { renderToStaticMarkup } from "react-dom/server";
import styles from "./BackgroundSVG.module.scss";

const PizzaTime = ({ outlineColor, color }) => {
  return (
    <svg
      version="1.2"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 1200 1200"
      width="1200"
      height="1200"
    >
      <title>pizza</title>
      <path
        id="Path1"
        fill={outlineColor}
        d="m493 358.1c-2.5 0.5-7.3 2.3-10.8 3.9-3.4 1.7-8.6 5.2-11.4 7.9-2.9 2.7-6.7 7.5-8.5 10.7-1.7 3.3-3.9 8.6-4.7 11.9-0.9 3.3-1.9 9.6-2.2 14-0.5 6.2-0.2 9.1 1.1 13 1 2.7 3 6.8 4.6 9 1.6 2.2 4.3 4.9 5.9 6 2.6 1.7 3 2.5 2.6 5-0.3 1.6-3.5 21.7-7 44.5-3.6 22.8-15.3 97.7-26.1 166.5-14.7 93.6-19.5 126.3-19.1 130 0.3 2.7 1.7 7.2 3 10 1.3 2.7 4 6.5 6 8.2 2 1.8 5.5 4.3 7.9 5.5 3.4 1.8 5.9 2.3 12.9 2.3h8.7c69-34.5 89.3-44.5 89.6-44.5 0.3 0 0.6 17.7 0.8 39.2 0.2 35.6 0.4 39.7 2 43.3 1 2.2 3.3 5.7 5 7.9 1.8 2.1 5.7 5 8.7 6.4 4.1 1.9 7 2.6 11.5 2.6 3.7 0 7.7-0.8 10.5-2 2.5-1.1 6.2-3.8 8.3-6 2.1-2.1 4.5-5.5 5.5-7.4 1.5-3.2 1.7-10 2.2-71.6 0.5-66.5 0.6-68.2 2.5-70.3 1.1-1.2 3.2-2.2 4.8-2.1 1.8 0 3.4 0.9 4.7 2.7 2 2.7 2.1 4.2 2.1 36.3-0.1 30.2 0.1 33.9 1.8 37.5 1 2.2 3.3 5.4 5.2 7.1 1.9 1.6 5.2 3.6 7.4 4.3 2.4 0.8 6 1.1 9 0.8 3.3-0.4 6.4-1.5 9-3.4 2.2-1.6 5.1-4.9 6.5-7.3 2.5-4.5 2.5-4.6 3-37.5 0.4-28.5 0.7-33.4 2.1-35.5 1.2-1.7 19.4-11.4 58-30.9l56.4-28.4c9 2.9 13 3.4 16.6 3.2 3.9-0.3 7.8-1.6 13.5-4.4 5.3-2.7 10-6.1 14.5-10.5 3.9-3.9 7.6-8.7 9.2-12 1.4-3 3-7.5 3.6-10 0.6-2.5 1.1-7.4 1.1-11 0-3.7-0.8-9.3-1.9-13-1.4-4.3-4.9-11-10.9-20-4.8-7.4-13.6-19.8-19.4-27.5-5.8-7.7-15-19.2-20.5-25.5-5.5-6.3-15.5-17.1-22.4-24-6.8-6.9-16.7-16.4-22-21-5.2-4.7-13.8-11.9-19-16.1-5.1-4.2-15.5-12-22.9-17.4-7.4-5.3-19.6-13.4-27-17.9-7.4-4.6-18.9-11.2-25.5-14.8-6.6-3.6-18.1-9.4-25.5-12.8-7.4-3.4-18.9-8.4-25.5-11-6.6-2.6-19-7.1-27.5-9.9-8.5-2.8-23.4-7.1-33-9.6-9.6-2.4-20.4-4.6-24-4.9-3.6-0.3-8.5-0.1-11 0.5z"
      />
      <path
        id="Path2"
        fill={color}
        d="m495.5 371c-2.2 0.4-5.9 1.7-8.3 2.9-2.3 1.1-6.1 4-8.4 6.3-2.3 2.4-5.2 6.6-6.5 9.3-1.2 2.7-2.8 9.1-3.4 14-1.2 8.8-1.2 9.1 1.2 13.9 1.3 2.8 3.5 5.8 4.9 6.8 1.4 1 11.1 4.2 21.5 7.2 10.4 3 23.5 7.1 29 9.1 5.5 2 15.6 5.9 22.5 8.7 6.9 2.8 21 9.2 31.5 14.3 10.5 5.1 24.6 12.6 31.5 16.5 6.9 4 18.4 11.1 25.5 15.8 7.1 4.6 19.8 13.5 28 19.7 8.3 6.2 20.2 15.7 26.5 21.1 6.3 5.5 17.3 15.8 24.5 22.9 7.2 7.1 17.1 17.7 22.1 23.5 4.9 5.8 12.4 15 16.5 20.5 4.2 5.5 10.5 14.5 14.1 20 3.6 5.5 7.8 10.9 9.4 11.9 1.6 1.1 5.1 2.1 7.9 2.4 4.2 0.3 6-0.2 11.4-3 3.4-1.8 7.9-4.7 10-6.4 2-1.7 5.1-6 7-9.5 2.4-4.5 3.6-8.1 3.9-12.4 0.3-3.3 0-8.3-0.7-11-0.7-3.4-4-9.4-9.9-18.5-4.9-7.4-13.6-19.8-19.4-27.5-5.8-7.7-15.8-19.9-22.1-27-6.3-7.1-17.9-19.3-25.8-27-7.9-7.7-18.9-17.8-24.4-22.4-5.5-4.6-15.4-12.4-22-17.3-6.6-5-17-12.3-23-16.2-6-4-16.1-10.3-22.3-13.9-6.1-3.7-18.3-10.2-27-14.6-8.6-4.3-21.8-10.4-29.2-13.6-7.4-3.1-22-8.5-32.5-12-10.5-3.5-26.2-8.2-35-10.3-8.8-2.2-18-4.2-20.5-4.5-2.5-0.3-6.3-0.2-8.5 0.3zm-13.1 72.4c-0.2 1.1-1.1 6.2-1.9 11.1-0.9 4.9-4.9 30.6-9.1 57-4.1 26.4-15.1 97-24.4 157-13.4 86.4-16.7 109.7-16 112.5 0.5 1.9 1.9 4.8 3.2 6.4 1.3 1.6 4.1 3.8 6.3 4.8 2.2 0.9 5.4 1.8 7 1.8 2 0 18.7-7.7 48-22.1 24.7-12.2 46.4-22.5 48-23 1.8-0.5 4.5-0.5 6.7 0.1 2.1 0.6 4.9 2.3 6.3 4l2.5 3c0 67.6 0.4 79.6 1.3 82.4 0.6 2.1 2.7 5.2 4.4 6.7 2.7 2.3 4.2 2.9 8 2.9 3 0 6-0.7 8-2 1.8-1.1 3.9-3 4.5-4.3 1-1.7 1.4-18.4 1.8-70.2 0.5-66.5 0.5-68.1 2.6-72 1.1-2.2 3.8-5.3 6-6.8 2.5-1.9 5.7-3.1 8.9-3.4 3-0.3 6.6 0 9 0.8 2.2 0.7 5.3 2.5 6.9 3.9 1.6 1.4 3.8 4.3 4.7 6.5 1.7 3.6 1.9 7.4 1.9 38.2v34.3c3.9 3.9 6.1 5 7.5 5 1.4 0 3.7-1.1 5.2-2.4l2.8-2.4c1-66.2 1.1-67.9 3.1-71.2 1.2-1.9 3.8-5 5.8-6.8 2.1-1.8 25.8-14.3 56.8-29.8 29.3-14.6 53.5-26.8 53.8-27 0.3-0.2-3-5.4-7.2-11.6-4.2-6.2-12.5-17.4-18.5-24.8-5.9-7.4-17.3-20.2-25.3-28.4-8-8.2-20.4-19.9-27.5-26.1-7.1-6.2-18.9-15.6-26-21.1-7.1-5.4-19.3-13.9-27-18.9-7.7-5-20.1-12.5-27.5-16.7-7.4-4.1-15.7-8.8-18.5-10.3-2.7-1.6-9.5-5.1-15-7.8-5.5-2.7-16.8-7.7-25-11.1-8.2-3.5-19.3-7.7-24.5-9.4-5.2-1.8-15.7-4.9-23.4-7.1-13.7-3.9-13.8-3.9-14.2-1.7z"
      />
      <path
        id="Path3"
        fill={outlineColor}
        d="m484.1 599.4c-1.9 0.7-4.5 2.7-5.8 4.5-1.7 2.2-2.3 4.4-2.3 7.9 0 2.8 0.8 5.9 1.9 7.7 1 1.6 3.5 3.8 5.5 4.8 2 0.9 4.7 1.7 6.1 1.7 1.4 0 4.2-0.8 6.2-1.7 2-1 4.5-3.2 5.5-4.8 1-1.6 1.8-4.9 1.8-7.2 0-2.4-0.8-5.7-1.8-7.3-0.9-1.7-3.5-4-5.7-5-2.2-1.1-4.9-2-6-1.9-1.1 0-3.5 0.6-5.4 1.3zm95.9-0.4c-1.4 0.4-3.5 1.2-4.8 1.8-1.2 0.7-3.1 3.2-4.2 5.7-1.5 3.3-1.8 5.5-1.3 8.3 0.4 2.1 2 5 3.8 6.7 1.6 1.7 4.5 3.4 6.2 3.8 1.8 0.4 4.5 0.4 6 0.1 1.6-0.4 3.9-1.5 5.3-2.4 1.4-0.9 3.3-3.6 4.2-5.8 1.1-2.6 1.6-5.2 1.2-6.9-0.4-1.6-1.3-4-2-5.5-0.8-1.6-2.6-3.4-4.2-4.2-1.5-0.7-3.8-1.6-5.2-1.8-1.4-0.3-3.6-0.3-5 0.2zm-60.5 33.7c-0.5 0.3-0.8 1.7-0.7 3 0.1 1.3 0.9 3.7 1.7 5.3 0.8 1.6 3 4.1 4.7 5.5 1.8 1.4 5.1 2.9 7.3 3.5 2.6 0.6 5.4 0.6 7.7 0 2.1-0.6 5.4-2.5 7.5-4.2 2-1.8 4.2-4.8 5-6.5 0.9-2.3 1-3.9 0.3-5.3-0.7-1.4-1.8-1.9-3.7-1.7-1.8 0.1-3.2 1.2-4.6 3.7-1.1 1.9-2.7 4-3.6 4.7-0.9 0.7-3 1.3-4.6 1.3-1.7 0-4.1-0.8-5.4-1.7-1.4-1-3.1-3.3-3.8-5-1-2.6-1.9-3.3-4.1-3.3-1.6 0-3.2 0.3-3.7 0.7z"
      />
    </svg>
  );
};

const BackgroundSVG = () => {
  const svgComponent = <PizzaTime outlineColor="#560090" color="#171717" />;
  const svgString = encodeURIComponent(renderToStaticMarkup(svgComponent));
  const url = `url("data:image/svg+xml,${svgString}")`;
  return (
    <div
      className={styles.background}
      style={{
        backgroundImage: url,
      }}
    ></div>
  );
};

export default BackgroundSVG;
