import React, { useEffect, useState } from "react";
import { getStory } from "../services/apis";

export function Story({storyId}) {
    const [story, setStory] = useState(null); //posso tbm inicializar a {}

    useEffect(() => {
        getStory(storyId).then(data => setStory(data))
    }, [storyId])

    console.log("2:", story);

    return story && story.url && (  
        <div className="col-sm-8 my-2 offset-md-2">
        <div className="card">
            <div className="card-body">
            <h5 className="card-title">{story.title}</h5>
            <a href={story.url} className="btn btn-primary">check it out!</a>
            </div>
        </div>
        </div>
    )
}