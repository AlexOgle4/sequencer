const sequence = {
  bpm: 180,
  tracks: [
    {
      label: 'Hi-Hat',
      instrument: 'hi-hat',
      steps: [
        { velocity: 1 },
        { velocity: 1 },
        { velocity: 1 },
        { velocity: 1 },
        { velocity: 1 },
        { velocity: 1 },
        { velocity: 1 },
        { velocity: 1 },
      ],
    },
    {
      label: 'Snare Drum',
      instrument: 'snare',
      steps: [
        { velocity: 0 },
        { velocity: 1 },
        { velocity: 0 },
        { velocity: 1 },
        { velocity: 0 },
        { velocity: 1 },
        { velocity: 0 },
        { velocity: 1 },
      ],
    },
    {
      label: 'Kick Drum',
      instrument: 'kick',
      steps: [
        { velocity: 1 },
        { velocity: 0 },
        { velocity: 1 },
        { velocity: 0 },
        { velocity: 1 },
        { velocity: 0 },
        { velocity: 1 },
        { velocity: 0 },
      ],
    },
  ],
}

function logSequence(seq) {
  console.log('') // make some space
  // using console.log, display a tablature-like rendering
  // of our sequencer configuration

  // get the length of the longest track label
  let longestLabelLength = 0

  seq.tracks.forEach((track) => {
    if (track.label.length > longestLabelLength) {
      longestLabelLength = track.label.length
    }
  })

  seq.tracks.forEach((track) => {
    // console.log('track', track)
    let line = track.label.padEnd(longestLabelLength + 2, ' ')

    track.steps.forEach((step) => {
      // console.log('==> step', step)
      if (step.velocity > 0) {
        line = line + track.instrument.charAt(0)
      } else {
        line = line + '-'
      }
    })
    console.log(line)
  })

  //
  // it should look something like this:
  console.log('')
  console.log('-- SHOULD LOOK LIKE --')
  console.log('')
  console.log(
    `
Hi-Hat           hhhhhhhh
Snare Drum       -s-s-s-s-
Kick Drum        k-k-k-k-
  `.trim(),
  )
}

logSequence(sequence)

// Homework Step 1: Make the tab more readable
// Step 2 Change the beat, Add another track
// Step 3 Change X to represent instrument
