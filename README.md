# Imaggle - Image Puzzle Game

A web-based jigsaw puzzle game where players reconstruct images by placing puzzle pieces in the correct positions on a 3x3 grid.

## Features

- **Multiple Puzzles**: Choose from 18 different images to solve
- **Interactive Gameplay**: Click-based piece selection and placement
- **Real-time Scoring**: Track your progress with live score updates
- **Piece Removal**: Remove incorrectly placed pieces and try again
- **Image Preview**: View the complete image before starting the puzzle

## How It Works

### Grid System

The puzzle uses a **3x3 grid** (9 cells total) where each cell corresponds to a specific piece of the original image:

- Each grid button has a `data-index` attribute (0-8) representing its correct position
- Players select pieces from the selection area and click grid cells to place them
- The grid tracks which pieces have been placed using the `seenClicksInGrid` array
- Each placed piece is stored with a `data-placed` attribute containing the piece's index

### Scoring System

Two scores are maintained throughout the game:

1. **Placed**: Total number of pieces placed on the grid (correct or incorrect)
2. **Right Placed**: Number of pieces placed in their correct positions

**Score Updates:**
- When a piece is placed: Both scores increment if correct; only "Placed" increments if incorrect
- When a piece is removed: Scores decrement based on whether the piece was correctly placed
- Game completion triggers when `rightPlaced` reaches 9

### Validation Logic

The validation process occurs in real-time:
```javascript
validate(userChoice, value)
```

- **userChoice**: Index of the selected piece from the selection area
- **value**: Index of the grid cell where the piece is placed
- **Match Check**: If `userChoice == value`, the piece is correctly placed
- Scores are immediately updated based on validation results
- Players receive instant feedback through the score display

### Piece Management

- **Selection**: Click a piece from the selection area to activate it (displayed in "Selected Piece" area)
- **Placement**: Click any grid cell to place the selected piece
- **Removal**: Click an already-placed grid cell to remove that piece
- **Reset Selection**: Use the "Remove" button to deselect the current piece without placing it

## File Structure

- `index.html` - Landing page with puzzle image selection
- `img.html` - Main puzzle game interface
- `puzzleLogic.js` - Core game logic and event handlers
- `puzzle.css` - Styling (not included in provided files)
- `imageX/` - Puzzle image folders (1-18), each containing:
- `main.jpg` - Complete image preview
- `00.jpg` to `08.jpg` - Individual puzzle pieces

## Technologies Used

- HTML5
- CSS3
- Vanilla JavaScript
- LocalStorage API (for puzzle selection persistence)

## Setup

1. Clone the repository
2. Ensure puzzle images are organized in folders (`image1/` through `image18/`)
3. Open `index.html` in a web browser
4. Select a puzzle image to begin playing

## Gameplay Instructions

1. **Choose a puzzle** from the landing page (observe carefully - preview won't be available during gameplay)
2. **Select a piece** from the pieces area at the bottom
3. **Click a grid cell** to place the selected piece
4. **Remove pieces** by clicking on them in the grid if needed
5. **Complete the puzzle** by correctly placing all 9 pieces
6. Track your progress using the "Placed" and "Right Placed" scores

## Browser Compatibility

Works on all modern browsers with JavaScript enabled.

## License

This project is open source and available for educational purposes.