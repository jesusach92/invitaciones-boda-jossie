import { useEffect, useState } from 'react';
import '../../styles/styles.css';

export default function CountdownComponent({ targetDate }) {
  const calculateTimeLeft = () => {
    const difference = +new Date(targetDate) - +new Date();
    let timeLeft = {
      days: '00',
      hours: '00',
      minutes: '00',
      seconds: '00',
    };

    if (difference > 0) {
      timeLeft = {
        days: String(Math.floor(difference / (1000 * 60 * 60 * 24))).padStart(2, '0'),
        hours: String(Math.floor((difference / (1000 * 60 * 60)) % 24)).padStart(2, '0'),
        minutes: String(Math.floor((difference / 1000 / 60) % 60)).padStart(2, '0'),
        seconds: String(Math.floor((difference / 1000) % 60)).padStart(2, '0'),
      };
    }

    return timeLeft;
  };

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearInterval(timer);
  }, [targetDate]);

  return (
    <div className="countdown-component-container">
      <div className="countdown-column">
        <div className="countdown-value font-source-serif-regular highlight-color font-lg">{timeLeft.days}</div>
        <div className="countdown-label font-source-serif-regular primary-color font-xs">DAYS</div>
      </div>

      <div className="countdown-separator font-source-serif-regular highlight-color font-lg">:</div>

      <div className="countdown-column">
        <div className="countdown-value font-source-serif-regular highlight-color font-lg">{timeLeft.hours}</div>
        <div className="countdown-label font-source-serif-regular primary-color font-xs">HOURS</div>
      </div>

      <div className="countdown-separator font-source-serif-regular highlight-color font-lg">:</div>

      <div className="countdown-column">
        <div className="countdown-value font-source-serif-regular highlight-color font-lg">{timeLeft.minutes}</div>
        <div className="countdown-label font-source-serif-regular primary-color font-xs">MINUTES</div>
      </div>

      <div className="countdown-separator font-source-serif-regular highlight-color font-lg">:</div>

      <div className="countdown-column">
        <div className="countdown-value highlight font-source-serif-regular highlight-color font-lg">{timeLeft.seconds}</div>
        <div className="countdown-label font-source-serif-regular primary-color font-xs">SECONDS</div>
      </div>
    </div>
  );
}
