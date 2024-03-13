from flask import Flask, request, jsonify
import spotipy
from spotipy.oauth2 import SpotifyOAuth

app = Flask(__name__)

# Replace these with your Spotify app credentials
SPOTIFY_CLIENT_ID = 'YOUR_CLIENT_ID'
SPOTIFY_CLIENT_SECRET = 'YOUR_CLIENT_SECRET'
SPOTIFY_REDIRECT_URI = 'YOUR_REDIRECT_URI'

# Setting up Spotify client with permissions
sp = spotipy.Spotify(auth_manager=SpotifyOAuth(client_id=SPOTIFY_CLIENT_ID,
                                               client_secret=SPOTIFY_CLIENT_SECRET,
                                               redirect_uri=SPOTIFY_REDIRECT_URI,
                                               scope="user-read-private user-read-playback-state user-modify-playback-state"))

@app.route('/play_artist', methods=['POST'])
def play_artist():
    data = request.json
    artist_url = data['artistUrl']
    # Extract artist ID from URL
    artist_id = artist_url.split('/')[-1]
    
    # Fetch artist's top tracks
    results = sp.artist_top_tracks(artist_id)
    track_uris = [track['uri'] for track in results['tracks'][:10]]
    
    if track_uris:
        # Assuming a device is active, start playback
        try:
            sp.start_playback(uris=track_uris)
            return jsonify({'message': 'Playback started'}), 200
        except spotipy.SpotifyException as e:
            return jsonify({'error': str(e)}), 400
    else:
        return jsonify({'message': 'No tracks found for artist'}), 404

if __name__ == '__main__':
    app.run(debug=True)
