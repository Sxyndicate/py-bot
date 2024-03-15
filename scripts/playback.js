window.onSpotifyWebPlaybackSDKReady = () => {
    const token = '[BQDmsa5uuthUAw1nsF-d-h1uVZ8XXnlNMLycrilrc_1NQuBEGlqeQDtPF974zDW_RxPRZ4Bj5qWW074L-ZdtAAyrFfaWB2itiA_q7TCp_pm951CaEis32yqUQvmJf_P4QGYdjGsIwa6GJLikuyi4rPbMAXq6KsVDbPnnRCgzGvnf_nidHzZhO0tc4imAru2YViFLscKqmEYj6OtW5EOTQ5g_aJ1eUnqX]';
    const player = new Spotify.Player({
      name: 'Web Playback SDK Quick Start Player',
      getOAuthToken: cb => { cb(token); },
      volume: 0.5
    });
  