const correctAnswers = ["A", "A", "A", "A", "A", "A", "A", "A", "A", "A"];

const showScore = document.querySelector(".show-score");
let score = 0;
const form = document.querySelector("form");






form.addEventListener("submit", event => {
    event.preventDefault();


    let score = 0;
    let answers = [form.answer1.value, form.answer2.value, form.answer3.value, form.answer4.value, form.answer5.value, form.answer6.value, form.answer7.value, form.answer8.value, form.answer9.value, form.answer10.value]

    if (answers.includes("")) {
        alert("Please Complete the Quiz");
    } else {
        answers.forEach((answer, index) => {
            if (answer === correctAnswers[index]) {
                score += 1;
            }
        })

        score = score / correctAnswers.length * 100;

        scrollTo(0, 0)


        let i = 0;
        let scoreTimer = setInterval(() => {
            if (i === score) {
                showScore.textContent = `Your score is ${score}%`;
                clearInterval(scoreTimer);
            } else {
                showScore.textContent = `Your score is ${i}%`;
                i++
            }
        }, 30);
    }

})