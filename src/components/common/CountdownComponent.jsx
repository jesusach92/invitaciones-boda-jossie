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
        <div className="countdown-value font-bell primary-color font-lg">{timeLeft.days}</div>
        <div className="countdown-label font-bell primary-color font-xs">DÍAS</div>
      </div>

      <div className="countdown-separator font-bell primary-color font-lg">:</div>

      <div className="countdown-column">
        <div className="countdown-value font-bell primary-color font-lg">{timeLeft.hours}</div>
        <div className="countdown-label font-bell primary-color font-xs">HORAS</div>
      </div>

      <div className="countdown-separator font-bell primary-color font-lg">:</div>

      <div className="countdown-column">
        <div className="countdown-value font-bell primary-color font-lg">{timeLeft.minutes}</div>
        <div className="countdown-label font-bell primary-color font-xs">MINUTOS</div>
      </div>

      <div className="countdown-separator font-bell primary-color font-lg">:</div>

      <div className="countdown-column">
        <div className="countdown-value highlight font-bell primary-color font-lg">{timeLeft.seconds}</div>
        <div className="countdown-label font-bell primary-color font-xs">SEGUNDOS</div>
      </div>
    </div>
  );
}
