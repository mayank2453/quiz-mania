# Quiz Mania - Interactive Quiz Application

## Overview
Quiz Mania is a modern, responsive quiz application built with vanilla HTML, CSS, and JavaScript. The application features a clean, user-friendly interface with multiple quiz categories, timer functionality, and detailed score tracking.

## File Structure

```
quiz-mania/
├── index.html                 # Main HTML file with all markup
├── styles.css                 # Complete stylesheet with all styles
├── script.js                  # JavaScript application logic
├── README.md                  # Project documentation (this file)
└── .git/                      # Git repository data
```

## Core Files

### index.html
Contains the complete HTML structure including:
- Welcome screen with category selection
- Quiz interface with questions and answers
- Results screen with score breakdown
- Quiz rules modal
- All semantic markup and accessibility features

### styles.css
Complete CSS styling including:
- Global styles and CSS reset
- Typography using Inter and Outfit fonts
- Welcome screen and category selection styling
- Quiz interface with timer and progress bar
- Results screen with score visualization
- Modal window styling
- Responsive design for all screen sizes
- Custom radio button styling with checkmarks

### script.js
Full JavaScript functionality including:
- `QuizApp` class with complete application logic
- Quiz questions database with 5 categories
- Timer system with 10-second countdown
- Score calculation and tracking
- Screen navigation and state management
- Event handling for all user interactions
- Modal functionality for quiz rules

## Features

### Quiz Categories
- **JavaScript Basic**: Fundamental JavaScript concepts
- **React.js Advance**: Advanced React development
- **Angular Basic**: Angular framework basics
- **Flutter**: Mobile development with Flutter
- **General Knowledge**: Mixed topic questions

### Core Functionality
- **10 Questions per Category**: Each with 4 multiple-choice options
- **Timer System**: 10-second countdown per question with auto-advance
- **Progress Tracking**: Visual progress bar and question numbering
- **Score Calculation**: Real-time tracking of correct/incorrect/unanswered
- **Results Screen**: Detailed breakdown and performance messages
- **Skip Functionality**: Option to skip difficult questions
- **Responsive Design**: Optimized for desktop, tablet, and mobile

### User Interface
- **Modern Design**: Clean, professional appearance with #B92B5D brand color
- **Custom Radio Buttons**: Styled with checkmarks for better UX
- **Smooth Animations**: CSS transitions and fade effects
- **Accessibility**: Keyboard navigation and screen reader support
- **Mobile-First**: Responsive design that works on all devices

## Getting Started

1. **Open the Application**
   - Open `index.html` in any modern web browser
   - No server or build process required

2. **Take a Quiz**
   - Enter your full name in the welcome screen
   - Select a quiz category from the available topics
   - Click "Start Quiz" to begin

3. **Answer Questions**
   - Read each question carefully
   - Select your answer by clicking on an option
   - Use the "Next" button to proceed or wait for auto-advance
   - Skip questions if needed using the skip option

4. **View Results**
   - See your final score and performance breakdown
   - Get personalized feedback based on your score
   - Choose to retake the same quiz or select a different category

## Technical Details

### Performance Features
- Lightweight vanilla JavaScript (no frameworks)
- Optimized CSS with minimal dependencies
- Fast loading with single-file architecture
- Efficient DOM manipulation and event handling

### Browser Compatibility
- Chrome 90+
- Firefox 88+
- Safari 14+
- Edge 90+
- Mobile browsers (iOS Safari, Chrome Mobile)

### Accessibility
- Semantic HTML structure
- ARIA labels where appropriate
- Keyboard navigation support
- Screen reader friendly
- High contrast color scheme
- Touch-friendly interface on mobile

## Development

### Adding New Questions
Edit the `questionBank` object in `script.js` to add new categories or questions:

```javascript
// Add new category in the categories array
{
    id: "new_category",
    name: "New Category",
    questions: [
        // Add question objects here
    ]
}
```

### Customizing Styles
Modify `styles.css` to change the appearance:
- Update CSS custom properties for color scheme changes
- Modify responsive breakpoints in media queries
- Add new animations or transitions as needed

### Extending Functionality
The `QuizApp` class in `script.js` can be extended with new methods:
- Add new quiz features
- Implement different question types
- Add social sharing functionality
- Integrate with external APIs

## Design System

### Colors
- Primary Brand: `#B92B5D` (Quiz Mania pink)
- Correct Answers: `#06AF52` (Success green)
- Incorrect Answers: `#AF0606` (Error red)
- Background: `#F5F5F0` (Light neutral)
- Text: `#333` (Dark gray)

### Typography
- Primary Font: **Outfit** (headings and brand)
- Secondary Font: **Inter** (body text and UI)
- Google Fonts integration for consistent rendering

### Layout
- Container max-width: 800px
- Mobile-first responsive design
- Flexbox and Grid for layouts
- Consistent spacing and padding

This single-file architecture provides simplicity, maintainability, and excellent performance while delivering a complete quiz experience.
