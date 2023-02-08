import React, { useState } from "react";
import AddIcon from "./icons/AddIcon";

function Questions() {
    const [questions, setQuestions] = useState([
        {
            title: "How can I know my level of knowledge?",
            desc: "",
            status: false,
        },
        {
            title: "Can I do it individually or only in a group?",
            desc: "",
            status: false,
        },
        {
            title: "What is the maximum group size?",
            desc: "",
            status: false,
        },
        {
            title: "Do I need to buy materials for lessons?",
            desc: "",
            status: false,
        },
        {
            title: "Are you adjusting to the student's schedule?",
            desc: "",
            status: false,
        },
        {
            title: "How the first lesson with teacher will be?",
            desc: "By the end of the trial lesson, you will be able to determine for yourself whether this kind of online lesson is right for you or not. In our experience, most students appreciate the benefits of online education and decide to study online.",
            status: false,
        },
    ]);
    function getDetail(title) {
        questions.map((question) =>
            question.title == title
                ? (question.status = !question.status)
                : (question.status = false)
        );
        setQuestions([...questions]);
    }

    return (
        <section className="container mx-auto mt-52">
            <div>
                <p className="font-bold text-lg leading-[190%] text-[#B0B0C0] uppercase">
                    more info
                </p>
                <h2 className="font-light text-5xl leading-[130%] text-primary-100 mt-1">
                    Common questions
                </h2>
            </div>
            <div className="mt-11 flex justify-between gap-5">
                <div className="flex flex-1 flex-col gap-5">
                    {questions
                        .filter((item, index) => index % 2 == 0)
                        .map((question, index) =>
                            !question.status ? (
                                <QuestionCard key={index}>
                                    {question.title}
                                </QuestionCard>
                            ) : (
                                <QuestionCardDetail
                                    key={index}
                                    title={question.title}
                                >
                                    {question.desc}
                                </QuestionCardDetail>
                            )
                        )}
                </div>
                <div className="flex flex-1 flex-col gap-5">
                    {questions
                        .filter((item, index) => index % 2 == 1)
                        .map((question, index) =>
                            !question.status ? (
                                <QuestionCard key={index}>
                                    {question.title}
                                </QuestionCard>
                            ) : (
                                <QuestionCardDetail
                                    key={index}
                                    title={question.title}
                                >
                                    {question.desc}
                                </QuestionCardDetail>
                            )
                        )}
                </div>
            </div>
        </section>
    );

    function QuestionCard({ children }) {
        return (
            <div className="flex items-start justify-between gap-11 rounded-[40px] outline outline-[#B0B0C0]/30 py-9 pl-14 pr-9">
                <p className="font-medium text-xl leading-9 w-fit">
                    {children}
                </p>
                <button
                    onClick={() => getDetail(children)}
                    className="w-8 aspect-1 rounded-full bg-primary-200 grid place-content-center"
                >
                    <AddIcon bg="white" />
                </button>
            </div>
        );
    }
    function QuestionCardDetail({ title = "", children }) {
        return (
            <div className="py-9 pl-14 pr-9 bg-primary-200 rounded-[40px] text-white">
                <div className="flex items-start justify-between gap-11">
                    <div className="w-fit">
                        <p className="font-medium text-xl leading-9">{title}</p>
                        <p className="font-light text-lg leading-[190%] mt-4">
                            {children == ""
                                ? "Answer not yet available..."
                                : children}
                        </p>
                    </div>
                    <button
                        onClick={() => getDetail(title)}
                        className="w-8 aspect-1 rounded-full bg-white grid place-content-center"
                    >
                        <AddIcon bg="primary-200" />
                    </button>
                </div>
            </div>
        );
    }
}

export default Questions;
