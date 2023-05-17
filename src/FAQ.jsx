import "./FAQ.css";
import { useState } from "react";

const faqs = [
    {key: 1,
    question: "How many team members can I invite?",
    answer: "You can invite up to 2 additional users on the Free plan. There is no limit on team members for the Premium plan."},
  
    {key: 2,
    question: "What is the maximum file upload size?",
    answer: "No more than 2GB. All files in your account must fit your allotted storage space."},
  
    {key: 3,
    question: "How do I reset my password?",
    answer: "Click “Forgot password” from the login page or “Change password” from your profile page. A reset link will be emailed to you."},
  
    {key: 4,
    question: "Can I cancel my subscription?",
    answer: "Yes! Send us a message and we’ll process your request no questions asked."},

    {key: 5,
    question: "Do you provide additional support?",
    answer: "Chat and email support is available 24/7. Phone lines are open during normal business hours."}
]

export function FAQ (){

    const [isClickedArr, setIsClickedArr] = useState(Array(faqs.length).fill(false));

    const handleClick = (index) => {
        setIsClickedArr((prevClickedArr) => {
            const newClickedArr = [...prevClickedArr];
            newClickedArr[index] = !newClickedArr[index];
            const answerClassName = newClickedArr[index] ? "answer-display" : "answer";
            const arrowClassName = newClickedArr[index] ? "arrow-rotate" : "arrow";
            const prevDisplayIndex = prevClickedArr.findIndex((clicked) => clicked);
            if (prevDisplayIndex !== -1 && prevDisplayIndex !== index) {
                newClickedArr[prevDisplayIndex] = false;
            }
                return newClickedArr;
        });
      };

    return(
        <>
            {
                faqs.map((faq, index) => {
                const answerClassName = isClickedArr[index] ? "answer-display" : "answer";
                const arrowClassName = isClickedArr[index] ? "arrow-rotate" : "arrow";

            return (
                <article className="faq-container" key={faq.key}>
                    <div className="question-container" onClick={() => handleClick(index)}>
                        <p className="question">{faq.question}</p>
                        <img
                        className={arrowClassName}
                        src="./images/icon-arrow-down.svg"
                        alt="icon arrow down"
                        />
                    </div>
                    <p className={answerClassName}>{faq.answer}</p>
                </article>
                    );
                })
            }
        </>
    )
}