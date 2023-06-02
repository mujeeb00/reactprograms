import React, { useState, useEffect } from 'react';

const Message = () => {
  const [currentTime, setCurrentTime] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTime(new Date());
    }, 2000);

    return () => {
      clearInterval(timer);
    };
  }, []);

  const getGreetingMessage = () => {
    const currentHour = currentTime.getHours();
    const greeting =
      currentHour < 12
        ? 'Good Morning'
        : currentHour < 18
        ? 'Good Afternoon'
        : 'Good Evening';

    return greeting;
  };

  const greetingMessage = getGreetingMessage();

  return (
    <div>
      <h1>Message</h1>
      <p>{greetingMessage}</p>
    </div>
  );
};

export default Message;
