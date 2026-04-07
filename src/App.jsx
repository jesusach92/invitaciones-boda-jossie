import { useState } from 'react'

import Confirmation from './components/Confirmation'
import Copyright from './components/Copyright'
import Countdown from './components/Countdown'
import Dresscode from './components/Dresscode'
import EnvelopeOverlay from './components/EnvelopeOverlay'
import GiftTable from './components/GiftTable'
import Hero from './components/Hero'
import Where from './components/Where'
import Container from './components/common/Container'
import MusicPlayer from './components/common/MusicPlayer'
import './styles/normalize.css'
import './styles/styles.css'
import Agenda from './components/Agenda'
import Suggestions from './components/Suggestions'

function App() {
  const [musicStarted, setMusicStarted] = useState(false);
  const [opened, setOpened] = useState(false);

  return (
    <Container>
      <EnvelopeOverlay onStartMusic={() => setMusicStarted(true)} opened={opened} setOpened={setOpened} />
      <MusicPlayer play={musicStarted} />
      <Hero visible={opened} />
      <Countdown isVisible={opened} />
      <Where />
      <Agenda />
      <Dresscode />
      <GiftTable />
      <Suggestions />
      <Confirmation />
      <Copyright />
    </Container>
  )
}

export default App
