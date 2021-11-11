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
    <div className="p-4 md:p-14">
      <div className="rounded-lg border-gray-200 shadow-xl">
        <h3>{activity}</h3>
        <p>{accessibility}</p>
        <p>{type}</p>
        <p>{participants}</p>
        <p>{price}</p>
        <p>{key}</p>
      </div>
    </div>
  )
}

export default ActivityPresenter
