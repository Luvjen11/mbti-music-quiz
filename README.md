Demo of Music personality quiz: https://mbti-music-quiz.vercel.app/

# MBTI Musical Instrument Quiz

## Overview
This web application is an interactive quiz that matches users with a musical instrument based on their personality traits, inspired by the Myers-Briggs Type Indicator (MBTI).

## Features
1. Welcome Page
   - Displays a welcome message and an image of a symphonic orchestra
   - Includes a brief introduction to the quiz concept
   - "Start Quiz" button to begin the assessment

2. Quiz Interface
   - 12 questions related to personality traits and musical preferences
   - Progress bar indicating current question number out of total questions
   - Two answer options for each question

3. Result Page
   - Displays the matched musical instrument based on the user's responses
   - Shows an image card of the matched instrument
   - Options to share the result or retake the quiz

4. Shareable Results
   - Generate a unique URL for each quiz result
   - Allow users to copy and share their results via a "Share Result" button

5. Responsive Design
   - Adapts to various screen sizes for optimal viewing on different devices

## Technical Implementation
- HTML5 for structure
- CSS3 for styling and responsive design
- Vanilla JavaScript for quiz logic and dynamic content
- External image hosting on GitHub for instrument cards and welcome image

## File Structure
- `index.html`: Main HTML file
- `styles.css`: CSS styles
- `script.js`: JavaScript logic
- `/images`: Directory containing instrument card images and welcome image

## Key JavaScript Functions
- `startQuiz()`: Initializes the quiz
- `displayQuestion()`: Renders each question
- `nextQuestion()`: Handles user input and quiz progression
- `calculateResult()`: Determines the MBTI type based on answers
- `displayResult()`: Shows the final instrument match
- `generateShareableLink()`: Creates a unique URL for sharing results
- `copyShareableLink()`: Copies the shareable link to clipboard

## Customization
- Instrument mappings can be adjusted in the `mbtiToInstrument` object
- Questions can be modified in the `questions` array
- Styling can be customized in `styles.css`

## Future Enhancements
- Add more detailed instrument descriptions
- Implement animations for smoother transitions between questions

## Credits
- MBTI concept based on Myers-Briggs Type Indicator®
- Built with BuildQL

## License
