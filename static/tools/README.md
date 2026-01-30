# Anki CSV Converter - Data Examples

This directory contains example data files demonstrating how to convert different types of student data into Anki flashcards.

## Files Overview

### 1. `example-student-data.csv`
A typical student assignment tracking spreadsheet with columns:
- Course
- Assignment
- Due Date
- Priority
- Status
- Study Time (hours)
- Grade Weight
- Notes

**Anki Card Ideas:**
- **Deadline reminders**: "When is CS101 Midterm due?" → "Feb 15 (25% of grade)"
- **Priority queue**: "Which assignment is highest priority this week?" → "CS101 Week 3 Problem Set (Due Feb 5)"
- **Study planning**: "How many hours for MATH201 Homework 4?" → "3 hours (10% weight)"

### 2. `example-vocabulary.csv`
Learning science terminology in CSV format:
- Term
- Definition
- Category
- Example
- Source

**Anki Card Output:**
- Front: "What is Pomodoro Technique?"
- Back: "A time management method using 25-minute focused work sessions followed by 5-minute breaks (Productivity)"
- Tags: "vocabulary,productivity"

### 3. `interesting-facts.md`
Curated interesting facts in markdown format with:
- Fact titles (headers)
- Main content
- "Why it matters" context

**Anki Card Output:**
- Front: "The Immortal Jellyfish"
- Back: "Turritopsis dohrnii can reverse its life cycle when stressed...\n\n<b>Why it matters:</b> Scientists study these jellyfish to understand stem cells and cellular regeneration..."
- Tags: "fact"

## How to Use

1. Open `anki-converter.html` in a browser
2. Select your data type mode (Flashcards/Vocabulary/Facts)
3. Paste or load example data
4. Preview cards in real-time
5. Download CSV for Anki import

## Importing to Anki

1. Open Anki Desktop
2. File → Import
3. Select the downloaded CSV file
4. Map fields: Column 1 → Front, Column 2 → Back, Column 3 → Tags
5. Choose your deck and import

## Why These Examples Matter

### Student Data → Spaced Repetition
Instead of just tracking assignments in a spreadsheet, convert deadline-critical info into flashcards. Active recall of due dates and priorities reinforces your schedule better than passive scanning.

### Vocabulary → Concept Mastery
Learning science terminology isn't just memorization—it's building a mental framework. Spaced repetition ensures these concepts stick for when you need them in problem-solving.

### Interesting Facts → Connection Building
Facts with "why it matters" context create richer memory traces. You're not just memorizing trivia; you're building a web of understanding across domains.

## Extension Ideas

- **Lecture notes**: Convert `# Key Concept` sections from markdown notes
- **Code snippets**: Programming patterns with explanations
- **Formulas**: Math/science equations with derivation context
- **Quiz questions**: Export from online learning platforms
