import React from 'react'
import "./Topics.css"
export default function Topics(props) {
  const {heading , para} = props;
  return (
    <main className="main_topics">
      <div className="main_div_topics align2">
        <h1>{heading}</h1>
        <p dangerouslySetInnerHTML={{__html: para}}></p>
      </div>
    </main>
  )
}
