# MxHF Learning Module

An interactive web-based learning module focused on Maintenance Human Factors (MxHF) in aviation maintenance.

## Overview

This application provides a structured learning experience for understanding and applying Human Factors principles in aviation maintenance. The module consists of multiple interactive sections, culminating in a final assessment to validate understanding.

## Features

- **Progressive Learning Path**: Five core modules plus final assessment
  - Introduction to Human Factors
  - Safety Statistics & Human Error
  - The 'Dirty Dozen'
  - Safety Culture & Organizational Factors
  - Your Action Plan
  - Final Assessment

- **Interactive Elements**:
  - Reflective exercises
  - Multiple-choice quizzes
  - Scenario analysis activities
  - Action planning tools

- **Progress Tracking**:
  - Automatic progress saving
  - Visual progress indicators
  - Module completion status
  - Final assessment with completion certificate

## Technical Details

### Prerequisites
- Modern web browser with JavaScript enabled
- Local web server for development

### Structure
```
MxHF-learningmodule/
├── index.html        # Main HTML structure
├── styles.css        # CSS styling and layout
└── scripts.js        # Application logic and interactivity
```

### Technologies Used
- HTML5
- CSS3 (with CSS Variables for theming)
- Vanilla JavaScript
- Font Awesome icons
- Local Storage for progress persistence

## Getting Started

1. Clone the repository:
```bash
git clone https://github.com/yourusername/MxHF-learningmodule.git
```

2. Navigate to the project directory:
```bash
cd MxHF-learningmodule
```

3. Start a local server. For example, using Python:
```bash
# Python 3
python -m http.server 5500
```

4. Open your browser and navigate to:
```
http://localhost:5500
```

## Usage

1. Start with the Introduction module
2. Complete each module sequentially
3. Engage with interactive activities
4. Complete the final assessment
5. Achieve 100% to receive completion certification

## Development

### CSS Variables
The application uses CSS variables for consistent theming. Key variables include:
- Colors (primary, secondary, accent)
- Typography (font sizes, weights)
- Spacing
- Shadows
- Border radius
- Transitions

### JavaScript Architecture
- Module-based content structure
- State management using localStorage
- Event-driven interactions
- Progressive disclosure of content

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License - see the LICENSE file for details.
