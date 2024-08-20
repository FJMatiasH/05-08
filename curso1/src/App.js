import './App.css';
import React from 'react';
import { TwitterFollowCard } from './TwitterFollowCard';

function App() {

  return(
  <>
  <TwitterFollowCard isFollowing={true} userName="midudev" name="Miguel"/>
  <TwitterFollowCard isFollowing={true} userName="midudev" name="Miguel"/>
  <TwitterFollowCard isFollowing={true} userName="midudev" name="Miguel"/>
</>
  )
}

export default App;
