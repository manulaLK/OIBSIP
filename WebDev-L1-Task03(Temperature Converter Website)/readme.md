# Temperature Converter 🌡️

Hey there! This is my submission for **Task 3 (Level 1)** of my Web Development internship at **Oasis Infobyte**. 

It’s a simple, clean, and responsive temperature conversion app that converts values between **Celsius**, **Fahrenheit**, and **Kelvin**.

---

## What it does

- Converts temperature values instantly across °C, °F, and K.
- Handles empty or invalid inputs gracefully so the app doesn't break if you type something weird.
- Rounds results to 2 decimal places so you don't end up with long trailing decimals.
- Designed with a dark glassmorphism theme to match the rest of my portfolio.

---

## How I built it

- **HTML5** — Basic structure and form elements.
- **Tailwind CSS** — Quick utility styling to handle responsiveness, glass effects, and dark mode colors.
- **JavaScript (ES6)** — Takes the input, normalizes whatever unit you selected into Celsius first, and then calculates the target unit output.

---

## Math behind the conversions

Just in case you're curious about the logic:

1. **Converting everything to Celsius first:**
   - From Fahrenheit: `(F - 32) * (5/9)`
   - From Kelvin: `K - 273.15`

2. **Converting from Celsius to the target unit:**
   - To Fahrenheit: `(C * 9/5) + 32`
   - To Kelvin: `C + 273.15`

---

## How to run it locally

1. Clone the repository:
   ```bash
   git clone [https://github.com/manulaLK/OIBSIP.git](https://github.com/manulaLK/OIBSIP.git)