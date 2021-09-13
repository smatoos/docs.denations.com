import React from "react";

function Newsletter() {
  return (
    <div>
      <h3>DeNations Newsletter</h3>
      <p>Subscribe to the latest news about DeNations</p>
      <form>
        <input type="email" placeholder="Email Address" />
        <button type="submit">Subscribe</button>
      </form>
    </div>
  );
}

export default Newsletter;
