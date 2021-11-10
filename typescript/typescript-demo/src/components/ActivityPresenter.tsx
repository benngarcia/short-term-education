import React from 'react';

type RecreationType = "education" | "recreational" | "social" | "diy" | "charity" | "cooking" | "relaxation" | "music" | "busywork"


interface Activity {
  activity: string;
  accessibility: number;
  type: RecreationType;
  participants: number;
  price: number;
  key: number;
}

const ActivityPresenter = ({activity, accessibility, type, participants, price, key}: Activity) => {
  return (
    <div>
      <h3>{activity}</h3>
      <p>{accessibility}</p>
      <p>{type}</p>
      <p>{participants}</p>
      <p>{price}</p>
      <p>{key}</p>
    </div>
  )
}

export default ActivityPresenter
