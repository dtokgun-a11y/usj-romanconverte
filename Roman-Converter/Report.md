

## 1. Introduction
The goal of this project was to create a simple website capable of converting integers to Roman
numerals and Roman numerals back to integers. The website had to be generated using an AI tool,
without any predefined requirements. After generating the website, the second objective was to
evaluate the quality of the software using the four quality definitions studied in Unit 1.
- How the Website Was Generated
For this project, I used an AI assistant (ChatGPT) to generate the source code of the website.
I used the below prompt for website.
Create a simple website using HTML, CSS and JavaScript that converts integers to Roman
numerals and Roman numerals to integers.
- Software Quality Assessment (Unit 1 – Four Quality Definitions)
1-Functionality
The website successfully performs both required conversions:
Integer → Roman numeral
Roman numeral → Integer
The JavaScript functions correctly handle valid inputs, and the interface updates the results
instantly. Basic validation is included to detect invalid Roman numerals. Overall, the functional
requirements are met.
2-Reliability
The website behaves consistently across multiple tests. It does not crash, and the conversion logic
works for all standard Roman numeral ranges. Since it runs entirely in the browser, there are no
external dependencies that could fail. Edge cases such as empty input or invalid characters are
handled reasonably well.
3-Usability
The interface is simple and easy to understand. Users can clearly see where to enter numbers and
where to enter Roman numerals. The “Convert” buttons are visible and intuitive. The layout is
minimalistic, making the tool accessible even for users with no technical background.
4-Efficiency
The website is lightweight and efficient.It uses only HTML, CSS, and JavaScript, without any
heavy libraries.All processing happens instantly in the browser, resulting in very fast
performance.The code is short and executes quickly.

## 4. Requirements
Since no requirements were provided for the project, I defined the functional and non-functional
requirements myself, based on what a basic Roman numeral converter should be able to do.
## Functional Requirements
1.Convert integer → Roman numeral.

2.Convert Roman numeral → integer.

3..Show an error for invalid inputs.

Non-Functional Requirements
1.Simple and easy‑to‑use interface.

2.Fast conversion with no delay.

3.Works reliably in any modern browser.

## 5. Conclusion
Using AI to generate the website significantly accelerated the development process. The AI
provided functional and readable code, which required minimal adjustments. The final product
meets the basic quality criteria in terms of functionality, reliability, usability, and efficiency. This
project demonstrates how AI can support software development, while human review is still
necessary to ensure quality.