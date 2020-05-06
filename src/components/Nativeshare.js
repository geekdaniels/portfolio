import React, { Component } from "react"

export default class Nativeshare extends Component {
  
      onWebShare() {
        if (('share' in navigator)) {
          navigator.share({
            url: window.location.href,
          });
        }else {
          console.log('cannot share on some browsers for now')
          console.log(window.location.href)
        }
      }
      
  render() {
    
    return (
      <div className="native_share_wrapper d-lg-none">
        <button
          class="w-actions__fab w-actions__fab--share gc-analytics-event"
          data-category="web.dev"
          onClick={() => this.onWebShare()}
        >
          <span>Share</span>
        </button>
      </div>
    )
  }
}
