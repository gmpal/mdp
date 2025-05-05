# Password - Word Guessing Game

A single-player adaptation of the classic "Password" word guessing game. Challenge yourself to come up with clues for words and see how many you can guess in 90 seconds!

## Features

- 90-second timer countdown
- Three difficulty levels (Easy, Medium, Hard)
- Point system (5 points for correct guesses, -2 points for skips)
- Round counter to track progress
- Responsive design for desktop and mobile

## Files Included

- `index.html` - The main HTML structure
- `styles.css` - All styling and responsive design
- `script.js` - Game logic and functionality
- `words.js` - Word lists for different difficulty levels

## How to Deploy to GitHub Pages

1. **Create a new repository on GitHub**
   - Log in to your GitHub account
   - Click on the "+" icon in the top right and select "New repository"
   - Name your repository (e.g., "password-game")
   - Keep it public if you want it to be accessible to everyone
   - Click "Create repository"

2. **Upload the files**
   - You can either clone the repository and add files locally, or upload them directly through the GitHub interface
   - If uploading through GitHub, click on "uploading an existing file" in the repository
   - Drag and drop all four files (`index.html`, `styles.css`, `script.js`, and `words.js`)
   - Add a commit message like "Initial upload" and click "Commit changes"

3. **Enable GitHub Pages**
   - Go to your repository's settings (click on "Settings" in the top navigation)
   - Scroll down to the "GitHub Pages" section
   - Under "Source", select "main" branch
   - Click "Save"
   - GitHub will provide you with a link to your published site (usually in the format `https://yourusername.github.io/password-game/`)

4. **Access your game**
   - It may take a few minutes for your site to be published
   - Once ready, you can access it through the provided link

## Customizing the Game

You can easily customize aspects of the game:

- **Change the timer duration**: Modify the `timer = 90` value in `script.js`
- **Add more words**: Add to the arrays in `words.js`
- **Adjust point values**: Modify the scoring in the `wordGuessed()` and `skipWord()` functions

## License

This project is provided for personal use. Feel free to modify and extend it as needed.

## Credits

Created as a simple implementation of the classic Password game concept for GitHub Pages deployment.