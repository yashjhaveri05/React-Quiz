const qBank = [
  {
    question:
      "Virgin Trains, Virgin Atlantic and Virgin Racing, are all companies owned by which famous entrepreneur?   ",
    answers: ["Richard Branson", "Alan Sugar", "Donald Trump", "Bill Gates"],
    correct: "Richard Branson",
    questionId: "099099"
  },
  {
    question:
      'Which of the following stacks does not use NodeJs as the Backend?',
    answers: ["MERN", "MEAN", "MEVN", "LAMP"],
    correct: "LAMP",
    questionId: "183452"
  },
  {
    question:
      "Who is called as The Father of Modern Computer Science?",
    answers: ["Alan Turing", "Bill Gates", "Tim Berners-Lee", "Larry Ellison"],
    correct: "Alan Turing",
    questionId: "267908"
  },
  {
    question:
      "Chad Hurley, Steve Chen, and Jawed Karim , the founders of Youtube were the employees of which company?",
    answers: ["Google", "IBM", "Microsoft", "Paypal"],
    correct: "Paypal",
    questionId: "267908"
  },
  {
    question:
      "Who was the brain behind Apple other than Steve Jobs?",
    answers: ["Michael Scott", "John Sculley", "Steve Wozniak", "Tim Cook"],
    correct: "Steve Wozniak",
    questionId: "267908"
  },
];

export default () =>
  Promise.resolve(qBank);
