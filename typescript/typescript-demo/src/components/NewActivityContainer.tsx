import React, { useState, useEffect } from 'react';
import ActivityPresenter from './ActivityPresenter';
import NewActivityButton from './NewActivityButton';
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

  const fetchActivity = () => {
    axios.get<Activity>(randomActivityEndpoint)
    .then((response) => {
      setActivity(response.data)
  })
    .catch((error) => {
      console.error(error);
    })
  }

  // On Load, run this once
  useEffect(() => {
    fetchActivity()
  }, [])
  
  return (
    <div>
      { activity &&
      <ActivityPresenter
        activity={activity.activity}
        accessibility={activity.accessibility}
        type={activity.type}
        participants={activity.participants}
        price={activity.price}
        key={activity.key}
      />}
    </div>
  )
}

export default NewActivityContainer
