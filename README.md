# CMPS2212 – Lab 4  
## Event Delegation, closest(), and matches()

### Student: Jeimy Vasquez

---

## Description

This lab demonstrates event delegation in JavaScript.  
Instead of adding multiple event listeners to child elements, a single listener is attached to a parent element and handles events using event bubbling.

---

## Exercises

**Exercise 1 – Accordion**
- One listener on the parent `<ul>`
- Uses `closest()` to detect the clicked trigger
- Only one panel opens at a time

**Exercise 2 – Tag Builder**
- Press Enter to add tags
- Uses delegation to remove tags
- Uses `matches()` to detect remove button

**Exercise 3 – Filter Grid**
- One listener on the filter bar
- Filters cards using `data-*` attributes
- Toggles `.hidden` class

**Exercise 4 – Inline Edit**
- Double-click to edit list items
- Enter saves changes
- Escape cancels
- Blur also saves

---

## How to Run

Open `index.html` in a browser and test each exercise.

