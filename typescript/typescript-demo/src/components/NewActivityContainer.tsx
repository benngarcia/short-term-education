import React, { useState, useEffect, MouseEvent } from 'react';
import ActivityPresenter from './ActivityPresenter';
import NewActivityButton from './NewActivityButton';
import ShowHistoryButton from './ShowHistoryButton';
import axios from "axios";


type RecreationType = "education" | "recreational" | "social" | "diy" | "charity" | "cooking" | "relaxation" | "music" | "busywork"


interface Activity {
  activity: string;
  accessibility: number;
  type: RecreationType;
  participants: number;
  price: number;
  key: number;
}

const NewActivityContainer = () => {
  const randomActivityEndpoint: string = "https://www.boredapi.com/api/activity/";
  const [activity, setActivity] = useState<Activity | null>(null);

  const handleNewActivity = (e: MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    fetchActivity();
  }

  const fetchActivity = () => {
    axios.get<Activity>(randomActivityEndpoint)
    .then((response) => {
      setActivity(response.data)
  })
    .catch((error) => {
      console.error(error);
    })
  }

  const emptyActivityPresenter = () => {
    return (
      <div className="p-4 md:p-14">
        <div className="rounded-lg border-gray-200 shadow-xl animate-pulse">
          <div className="p-3 space-y-4">
            <div className="h-4 w-1/2 bg-gray-400 rounded-md"></div>
            <div className="h-4 w-1/6 bg-gray-400 rounded-md"></div>
            <div className="h-4 w-1/12 bg-gray-400 rounded-md"></div>
            <div className="h-4 w-1/2 bg-gray-400 rounded-md"></div>
            <div className="h-4 w-1/12 bg-gray-400 rounded-md"></div>
            <div className="h-4 w-1/6 bg-gray-400 rounded-md"></div>
          </div>
        </div>
      </div>
    )
  }

  // On Load, run this once
  useEffect(() => {
    fetchActivity()
  }, [])
  
  return (
    <div className="flex flex-col space-between">
      { activity ?
      <ActivityPresenter
        activity={activity.activity}
        accessibility={activity.accessibility}
        type={activity.type}
        participants={activity.participants}
        price={activity.price}
        key={activity.key}
      /> : emptyActivityPresenter()}
      <NewActivityButton 
        clickHandler={handleNewActivity}
    />
      <ShowHistoryButton />
    </div>
  )
}

export default NewActivityContainer
